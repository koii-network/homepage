// pages/_document.js

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <title>Koii Network</title>
          <meta
            name="og:description"
            content="Koii was founded on fairness, trust, and one immense objective: to give creators a space where they permanently own and earn the value they deserve from their content."
          />
          <meta name="og:url" content="https://koii.network/" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:image"
            content="https://www.koii.network/static/thumbnail.png"
          />
          <meta name="twitter:title" content="Koii Network" />
          <meta
            name="twitter:description"
            content="Koii was founded on fairness, trust, and one immense objective: to give creators a space where they permanently own and earn the value they deserve from their content."
          />
          <link rel="shortcut icon" href="/static/KoiiNetwork-logo_64.svg" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymus"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato&family=Sora:wght@100;200;300;400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
