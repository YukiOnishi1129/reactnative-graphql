/**
 * _app.tsx
 * @package pages
 * @copyright Yuki Onishi
 */
import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";
/* providers */
import { AppProvider } from "@/providers/AppProviders";
/* components */
import { UnAuthLayout } from "@/components/layouts/UnAuthLayout";
/* styles */
import "@/styles/global.scss";

/**
 * MyApp
 * @param {AppProps} props
 * @returns
 */
const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AppProvider>
        <UnAuthLayout>
          <Component {...pageProps} />
        </UnAuthLayout>
      </AppProvider>
    </>
  );
};

export default MyApp;
