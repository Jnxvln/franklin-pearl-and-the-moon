import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#3B352B" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}