// add import statements later
import '../styles/globals.css'
import type {AppProps } from 'next/app'

import React from 'react';
import App from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
