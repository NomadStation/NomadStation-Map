import Document, { Html, Head, Main, NextScript } from 'next/document'

type Props = {}

class MyDocument extends Document<Props> {
  static displayName: string = '_document'
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            href="https://fonts.googleapis.com/css?family=Roboto"
            rel="stylesheet"
          />
          <script src="https://cdn.apple-mapkit.com/mk/5.x.x/mapkit.js" />
          <link rel="icon" type="image/png" href={'/icons/favicon.png'} />
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-S3YNN02C0Z"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-S3YNN02C0Z');
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
