import { NextPage } from 'next'
import React from 'react'
import { NextSeo } from 'next-seo'

import '../styles/globals.css'
import '../styles/search.css'

import { ClientRender } from '../components/common/ClientRender'
import { CANONICAL, DESCRIPTION, PLACEHOLDER, TITLE } from '../utils/constants'

type Props = {
  pageProps: any
  Component: NextPage
}

const MyApp: NextPage<Props> = ({ pageProps, Component }) => {
  if (process.env.NODE_ENV === 'development') {
    return (
      <ClientRender>
        <Component />
      </ClientRender>
    )
  }
  return (
    <>
      <NextSeo
        title={TITLE}
        description={DESCRIPTION}
        canonical={CANONICAL}
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: CANONICAL,
          site_name: 'NomadStation',
          images: [
            {
              url: `${PLACEHOLDER}?w=1800&h=1350`,
              width: 1800,
              height: 1350,
              alt: 'NomadStation page preview',
            },
            {
              url: `${PLACEHOLDER}?w=1200&h=900`,
              width: 1200,
              height: 900,
              alt: 'NomadStation page preview',
            },
            {
              url: `${PLACEHOLDER}?w=800&h=600`,
              width: 800,
              height: 600,
              alt: 'NomadStation page preview',
            },
            {
              url: `${PLACEHOLDER}?w=400&h=300`,
              width: 400,
              height: 300,
              alt: 'NomadStation page preview',
            },
            {
              url: `${PLACEHOLDER}?w=200&h=150`,
              width: 200,
              height: 150,
              alt: 'NomadStation page preview',
            },
          ],
        }}
      />
      <Component {...pageProps} />
    </>
  )
}
MyApp.displayName = '_app'

export default MyApp
