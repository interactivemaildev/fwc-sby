import React from 'react'
import { GetServerSidePropsContext } from 'next'
import { BlitzPage } from '@blitzjs/next'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { Box, Button, Typography } from '@mui/material'
import BodyLayout from 'src/core/layouts/BodyLayout'
import Landing from 'src/core/components/Landing'
import { StyledLayout } from 'src/styles/app'
import Layout from 'src/core/components/Layout'
import { StyledTransport } from 'src/styles/transport'

interface Props {}

export interface CardProps {
  locale: string
  color1: string
  color2: string
  isLast: boolean
}

const data = [
  { key: 'feeder', color1: '#A786BC', color2: '#6C508B' },
  { key: 'bus', color1: '#F19E4A', color2: '#CB6600' },
]

const CardTransport = React.memo(({ locale, color1, color2, isLast }: CardProps) => {
  const t = useTranslations('Locale')
  return (
    <StyledLayout
      className="with-margin"
      sx={{ backgroundColor: color1, position: 'relative', overflow: 'hidden' }}
    >
      {' '}
      <StyledTransport>
        <Layout paddingBottom={isLast ? 4 : 10}>
          <Box className="content">
            <Typography className="tag">{t(`transport-${locale}-tag`)}</Typography>
            <Link href={`/transport/1/test`} passHref legacyBehavior>
              <Button component="a">
                <Typography component="span" className="title">
                  {t(`transport-${locale}-title`)}
                </Typography>
                <Typography component="span" className="subtitle">
                  {t(`transport-${locale}-subtitle`)}
                </Typography>
              </Button>
            </Link>
          </Box>
        </Layout>
        <Box className="img" sx={{ backgroundColor: color2, position: 'relative' }}></Box>
      </StyledTransport>
    </StyledLayout>
  )
})

const Transport: BlitzPage<Props> = () => {
  return (
    <React.Fragment>
      <Landing
        text={`Plan your journey and discover everything Surabaya has to offer. Play it right.`}
        color="light"
        customBackground="#630060"
      />
      {data.map((item, i) => (
        <CardTransport
          key={i}
          locale={item.key}
          color1={item.color1}
          color2={item.color2}
          isLast={i === data.length - 1}
        />
      ))}
    </React.Fragment>
  )
}

Transport.getLayout = (page) => <BodyLayout title="Transport">{page}</BodyLayout>

export const getServerSideProps = async ({ locale }: GetServerSidePropsContext) => {
  return {
    props: {
      messages: (await import(`messages/${locale}.json`)).default,
    },
  }
}

export default Transport
