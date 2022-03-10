import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'
import { getCssText } from '@ui/web'

const Document = () => (
  <Html lang="pt-BR">
    <Head>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
        rel="stylesheet"
      />
      <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
)

export default Document
