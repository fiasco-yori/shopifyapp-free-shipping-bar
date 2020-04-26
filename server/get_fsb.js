const get_fsb = async (ctx, accessToken, shop) => {
    const scriptTagBody = {
      "script_tag": {
        "event": "onload",
        "src": "https://djavaskripped.org/fancy.js"
      }
    }
    const request = await fetch(`https://${shop}/admin/api/2020-04/admin/script_tags.json`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "X-Shopify-Access-Token": accessToken,
      },
      body: scriptTagBody
    })
    const requestJson = await request.json();
    console.log(requestJson);
    const confirmationUrl = requestJson.url;
    return ctx.redirect(confirmationUrl)
  };
  
  module.exports = get_fsb;