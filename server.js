require('isomorphic-fetch');
const dotenv = require('dotenv');
const next = require('next');
const Koa = require('koa');
const Router = require('koa-router');
const axios = require('axios');
var serve = require("koa-static");
const { default: createShopifyAuth } = require('@shopify/koa-shopify-auth');
const { verifyRequest } = require('@shopify/koa-shopify-auth');
const session = require('koa-session');

const { default: graphQLProxy } = require('@shopify/koa-shopify-graphql-proxy');
const { ApiVersion } = require('@shopify/koa-shopify-graphql-proxy');
const {receiveWebhook, registerWebhook} = require('@shopify/koa-shopify-webhooks');

const ShopifyAPIClient = require("shopify-api-node");
dotenv.config();

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const { SHOPIFY_API_SECRET_KEY, SHOPIFY_API_KEY, HOST, } = process.env;

app.prepare().then(() => {
    const server = new Koa();
    const router = new Router();
    const bodyParser = require('koa-body');
    const shop_router = require('./server/routes/shop');
    const template_router = require('./server/routes/fsb_template');

    server.use(session({ secure: true, sameSite: 'none' }, server));
    server.keys = [SHOPIFY_API_SECRET_KEY];

    server.use(serve('./'));
    
    server.use(
      createShopifyAuth({
        apiKey: SHOPIFY_API_KEY,
        secret: SHOPIFY_API_SECRET_KEY,
        scopes: [
          'read_products',
          'write_products',
          'read_script_tags',
          'write_script_tags'
        ],
        async  afterAuth(ctx) {
          const { shop, accessToken } = ctx.session;
          ctx.cookies.set('shopOrigin', shop, {
            httpOnly: false,
            secure: true,
            sameSite: 'none',
            shop: shop,
            accessToken: accessToken
          });

          const registration = await registerWebhook({
            address: `${HOST}/webhooks/products/create`,
            topic: 'PRODUCTS_CREATE',
            accessToken,
            shop,
            apiVersion: ApiVersion.October19
          });
          if (registration.success) {
            console.log('Successfully registered webhook!');
          } else {
            console.log('Failed to register webhook', registration.result);
          }

          const shopify = new ShopifyAPIClient({
            shopName: shop,
            accessToken: accessToken,
          });
          shopify.scriptTag
            .create({
              event: "onload",
              src: `${HOST}/freeshipping-bar.js`,
            })
            .then(
              (response) => {
                console.log(`scriptTag created`);
              },
              (err) => {
                console.log(
                  `Error creating scriptTag. ${JSON.stringify(err.response.body)}`,
                );
              },
            );
          axios.post(`${HOST}/fsb/api/shop`, {
              name: shop,
              accessToken: accessToken
            },{
              headers: {'Content-Type': 'application/json'}
            })
            .then((response) => {
              console.log('shop create');
          }) 


          ctx.redirect("/");

          },
      }),
    );

    const webhook = receiveWebhook({secret: SHOPIFY_API_SECRET_KEY});
    require("./server/routes/webhookRoutes")(router, webhook);

    server.use(graphQLProxy({version: ApiVersion.April20}))

    router.get('*', verifyRequest(), async (ctx) => {
      await handle(ctx.req, ctx.res);
      ctx.respond = false;
      ctx.res.statusCode = 200;
    });
    server.use(router.allowedMethods());

    server.use(router.routes());
    server.use(bodyParser())
    server.use(shop_router.routes())
    server.use(template_router.routes())

    server.listen(port, () => {
        console.log(`> Ready on http://localhost:${port}`);
    });

  });