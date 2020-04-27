module.exports = (router, webhook) => {
    router
      .post('/webhooks/products/create', webhook, (ctx) => {
        console.log('received webhook: ', ctx.state.webhook);
      });
};