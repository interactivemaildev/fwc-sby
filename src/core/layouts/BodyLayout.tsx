import React, { memo } from 'react'
import { BlitzLayout } from '@blitzjs/next'
import Head from 'next/head'
import Header from 'src/core/layouts/Header'
import Footer from 'src/core/layouts/Footer'
import { StyledLayoutBody } from 'src/styles/app'

interface Props {
  title?: string
  children?: React.ReactNode
}

const BodyLayout: BlitzLayout<Props> = ({ title, children }: Props) => {
  return (
    <>
      <Head>
        <title>{title || 'Surabaya'}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <Header />
      <StyledLayoutBody>{children}</StyledLayoutBody>
      <Footer />
    </>
  )
}

BodyLayout.defaultProps = {}

export default memo(BodyLayout)
