import { NextPage } from 'next'
import React from 'react'
import { ThemeProvider, css, createGlobalStyle } from 'styled-components'

import { theme } from '../themes'

const THEMES = {
  light: theme,
}

const GlobalStyle = createGlobalStyle(
  ({ theme }) => css`
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
    }
  `,
)

type Props = {
  pageProps: any
  Component: NextPage
}

const MyApp: NextPage<Props> = ({ pageProps, Component }) => {
  return (
    <>
      <ThemeProvider theme={THEMES.light}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
MyApp.displayName = '_app'

export default MyApp
