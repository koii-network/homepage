// pages/_document.js

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta property="og:title" content="Koii Network" />
          <meta
            name="og:description"
            content="Own the internet, like you should. Join Koii to mine crypto every time someone looks at your content, and use your computer or phone to earn tokens while you sleep!"
          />
          <meta
            property="og:image"
            content="https://www.koii.network/static/thumbnail.png"
          />
          <meta name="og:url" content="https://koii.network/" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@KoiiNetwork" />
          <meta name="twitter:title" content="Koii Network" />
          <meta
            name="twitter:description"
            content="Own the internet, like you should. Join Koii to mine crypto every time someone looks at your content, and use your computer or phone to earn tokens while you sleep!"
          />
          <meta
            name="twitter:image"
            content="https://www.koii.network/static/thumbnail.png"
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
