import React from 'react';
import { Provider } from 'react-redux';
import Head from 'next/head';
import type { AppProps } from 'next/app';

import store from '../redux/store';

import 'semantic-ui-css/semantic.min.css';
import '../scss/_styles.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Find your movie</title>
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
   </div>
  )
}
