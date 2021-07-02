/**
 * _document.tsx
 * @package pages
 * @copyright Yuki Onishi
 */
import NextDocument, { Head, Html, Main, NextScript } from "next/document";

/**
 * MyDocument
 */
class MyDocument extends NextDocument {
  render() {
    return (
      <Html lang="ja">
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
