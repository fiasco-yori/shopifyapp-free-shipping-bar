const get_fsb = async (ctx, accessToken, shop) => {
    const scriptTagBody = {
        "event": "onload",
        "src": "https://31a6fdc1.ngrok.io/add-fsb.js"
    }
    const response = await fetch(`https://${shop}/admin/api/2020-04/admin/script_tags.json`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "X-Shopify-Access-Token": accessToken,
      },
      body: scriptTagBody
    });
    console.log(response);
    const responseJson = await response.json();
    
    const confirmationUrl = responseJson.url;
    return ctx.redirect(confirmationUrl)
  };
  
  module.exports = get_fsb;