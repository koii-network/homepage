import Layout from "@/components/layout";
import type { AppProps } from "next/app";
import Head from "next/head";
import Script from "next/script";
import "styles/globals.css";
import "styles/styles.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Koii Network</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-GRG9CP511Z"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
   
     gtag('config', 'G-GRG9CP511Z');
    `}
      </Script>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymus"
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
