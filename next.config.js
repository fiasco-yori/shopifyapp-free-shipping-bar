require("dotenv").config();
const withCSS = require('@zeit/next-css');
const webpack = require('webpack');
const apiKey =  JSON.stringify(process.env.SHOPIFY_API_KEY);
const apiversion = JSON.stringify(process.env.API_VERSION);
module.exports = withCSS({
  webpack: (config) => {
    const env = { API_KEY: apiKey, API_VERSION: apiversion };
    config.plugins.push(new webpack.DefinePlugin(env));
    return config;
  },
});
