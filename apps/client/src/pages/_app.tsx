import React from 'react'
import { AppProps } from 'next/app'
import { globalStyles } from '@ui/styles'

globalStyles()

const MyApp = ({ Component, pageProps }: AppProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Component {...pageProps} />
)

export default MyApp
