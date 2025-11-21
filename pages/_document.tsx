import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/favicon/favicon.ico"
          />
          <link
            rel="icon"
            type="image/x-icon"
            sizes="any"
            href="/static/favicon/favicon.ico"
          />
          <link
            rel="shortcut icon"
            href="/static/favicon/favicon.ico"
          />
          <link rel="manifest" href="/static/favicon/site.webmanifest" />
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
