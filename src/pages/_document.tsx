import { Head, Html, Main, NextScript } from "next/document"

export default function MainDocument() {
  return (
    <Html>
      <Head>
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <body className="bg-slate-100">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
