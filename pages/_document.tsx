import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
            <meta property="Nieruchomości w Hiszpanii, Chorwacji, Portugalii" content="image" />
            <title>Digital Agency</title>
            {/* <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600&display=swap" rel="stylesheet"></link> */}
            <meta name="viewport" content="initial-scale=1.0, width=device-width, minimum-scale=1, maximum-scale=1" />
            <meta property="og:image" content="https://onesta.com.pl/onesta_og_img.png" />
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
