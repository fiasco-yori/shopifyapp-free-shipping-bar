require('isomorphic-fetch');
const dotenv = require('dotenv');
const next = require('next');
const Koa = require('koa');
const Router = require('koa-router');

const { default: createShopifyAuth } = require('@shopify/koa-shopify-auth');
const { verifyRequest } = require('@shopify/koa-shopify-auth');
const session = require('koa-session');

const { default: graphQLProxy } = require('@shopify/koa-shopify-graphql-proxy');
const { ApiVersion } = require('@shopify/koa-shopify-graphql-proxy');
const {receiveWebhook, registerWebhook} = require('@shopify/koa-shopify-webhooks');

const fetch = require('node-fetch');
const ShopifyAPIClient = require("shopify-api-node");

dotenv.config();

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();


const { SHOPIFY_API_SECRET_KEY, SHOPIFY_API_KEY, HOST, } = process.env;

const add_fsb_url = require('./server/get_fsb');
app.prepare().then(() => {
    const server = new Koa();
    const router = new Router();
    server.use(session({ secure: true, sameSite: 'none' }, server));
    server.keys = [SHOPIFY_API_SECRET_KEY];
    
    server.use(
      createShopifyAuth({
        apiKey: SHOPIFY_API_KEY,
        secret: SHOPIFY_API_SECRET_KEY,
        scopes: ['read_products','write_products','write_script_tags'],
        async  afterAuth(ctx) {
          const { shop, accessToken } = ctx.session;
          ctx.cookies.set('shopOrigin', shop, {
            httpOnly: false,
            secure: true,
            sameSite: 'none'
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

          const scriptTagBody = {
            "script_tag": {
              "event": "onload",
              "src": `${HOST}/add-fsb.js`
            }
          }

          const { session, req: { query, method, body }} = ctx;
          const url = `https://${shop}/admin/api/2020-04/admin/script_tags.json`;
          
          const result = await fetch(url, {
            method,
            scriptTagBody,
            headers: {
              'Content-Type': 'application/json',
              'X-Shopify-Access-Token': accessToken,
            },
          });
          const data = await result.text();
          console.log(data);

          const shopify = new ShopifyAPIClient({
            shopName: shop,
            accessToken: accessToken,
          });
          shopify.scriptTag
            .create({
              event: "onload",
              src: "https://cdn.jsdelivr.net/npm/riot@3.13/riot.min.js",
            })
            .then(
              (response) => {
                console.log(`scriptTag created`);
                next();
              },
              (err) => {
                console.log(
                  `Error creating scriptTag. ${JSON.stringify(err.response.body)}`,
                );
              },
            );

        },
      }),
    );

    
    const webhook = receiveWebhook({secret: SHOPIFY_API_SECRET_KEY});
    router.post('/webhooks/products/create', webhook, (ctx) => {
      console.log('received webhook: ', ctx.state.webhook);
    });

    server.use(graphQLProxy({version: ApiVersion.April20}))
    router.get('*', verifyRequest(), async (ctx) => {
      await handle(ctx.req, ctx.res);
      ctx.respond = false;
      ctx.res.statusCode = 200;
    });

    server.use(router.allowedMethods());
    server.use(router.routes());
    server.listen(port, () => {
        console.log(`> Ready on http://localhost:${port}`);
    });
  });