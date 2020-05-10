
import React from 'react';
import ReactDOM from 'react-dom';
import App from 'next/app';
import Head from 'next/head';
import { AppProvider } from '@shopify/polaris';
import { Provider } from '@shopify/app-bridge-react';
import '@shopify/polaris/styles.css';
import translations from '@shopify/polaris/locales/en.json';
import Cookies from 'js-cookie';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  fetchOptions: {
    credentials: 'include'
  },
});

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const config = { apiKey: API_KEY, shopOrigin: Cookies.get("shopOrigin"), forceRedirect: true };
    return (
      <React.Fragment>
        <Head>
          <title>Free shipping bar</title>
          <meta charSet="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <script src="./assets/js/jscolor.js"></script>
          <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet" type="text/css" />
          <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" type="text/css" />
          <link href="https://fonts.googleapis.com/css?family=Josefin+Sans" rel="stylesheet" type="text/css" />
          <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css" />
          <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet" type="text/css" />

          <link href="https://fonts.googleapis.com/css?family=Poiret+One" rel="stylesheet" type="text/css" />
          <link href="https://fonts.googleapis.com/css?family=Dancing+Script" rel="stylesheet" type="text/css" />
          <link href="https://fonts.googleapis.com/css?family=Bangers" rel="stylesheet" type="text/css" />
          <link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet" type="text/css" />
          <link href="https://fonts.googleapis.com/css?family=Chewy" rel="stylesheet" type="text/css" />

          <link href="https://fonts.googleapis.com/css?family=Quicksand" rel="stylesheet" type="text/css" />
          <link href="https://fonts.googleapis.com/css?family=Great+Vibes" rel="stylesheet" type="text/css" />
          <link href="https://fonts.googleapis.com/css?family=Righteous" rel="stylesheet" type="text/css" />
          <link href="https://fonts.googleapis.com/css?family=Crafty+Girls" rel="stylesheet" type="text/css" />
          <link href="https://fonts.googleapis.com/css?family=Mystery+Quest" rel="stylesheet" type="text/css" />

          <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet" type="text/css" />
          <link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet" type="text/css" />
          <link href="https://fonts.googleapis.com/css?family=Unica+One" rel="stylesheet" type="text/css" />
          <link href="https://fonts.googleapis.com/css?family=Muli" rel="stylesheet" type="text/css" />
          <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet" type="text/css" />
          <link href="https://fonts.googleapis.com/css?family=Carter+One" rel="stylesheet" type="text/css" />
          <link href="https://fonts.googleapis.com/css?family=Varela+Round" rel="stylesheet" type="text/css" />
          <link href="https://fonts.googleapis.com/css?family=Julius+Sans+One" rel="stylesheet" type="text/css" />
        </Head>
        <Provider config={config}>
            <AppProvider i18n={translations}>
              <ApolloProvider client={client}>
                <Component  {...pageProps} />
              </ApolloProvider>
            </AppProvider>
        </Provider>
      </React.Fragment>
    );
  }
}

export default MyApp;