import { Fragment, useState } from "react";
import "../styles/global.css";
import Head from "next/head";
import Error from "next/error";
import "bootstrap/dist/css/bootstrap.min.css";
export default function App({ Component, pageProps }) {
  if (pageProps.error) {
    return (
      <Error
        statusCode={pageProps.error.statusCode}
        title={pageProps.error.message}
      />
    );
  }
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}
