import { Html, Head, Main, NextScript } from "next/document";



export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head>
      <body className="antialiased max-h-fit">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}