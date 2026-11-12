import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { GetServerSidePropsContext } from 'next'
import Image from 'next/image'
import { BlitzPage } from '@blitzjs/next'
import { useTranslations } from 'next-intl'
import BodyLayout from 'src/core/layouts/BodyLayout'
import { SecondText, StyledTicket } from 'src/styles/app'
import Layout from 'src/core/components/Layout'
import MainSlider from 'src/core/components/sliders/Main'
import TodayMatchSlider from 'src/core/components/sliders/TodayMatch'
import StadiumSlider from 'src/core/components/sliders/Stadium'
import CardSlider from 'src/core/components/sliders/Card'
import Title from 'src/core/components/Title'
import ButtonForm from 'src/core/components/Button'
import HomeU20Indonesia from 'src/core/components/HomeU20Indonesia'
import HomeNews from 'src/core/components/HomeNews'

interface Props { }

const dataMatch = [
  {
    title: 'Argentina VS Honduras',
  },
  {
    title: 'Indonesia VS Brazil',
  },
  {
    title: 'Spain VS New Zealand',
  },
  {
    title: 'Argentina VS Honduras',
  },
  {
    title: 'Indonesia VS Brazil',
  },
  {
    title: 'Spain VS New Zealand',
  },
  {
    title: 'Argentina VS Honduras',
  },
  {
    title: 'Indonesia VS Brazil',
  },
  {
    title: 'Spain VS New Zealand',
  },
]

const dataNews = [
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod incididunt',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
]

const Home: BlitzPage<Props> = () => {
  const t = useTranslations('Locale')
  return (
    <React.Fragment>
      <MainSlider />
      <Layout paddingTop={8}>
        <>
          <Grid container spacing={4}>
            <Grid item sm={8}>
              <Box position="relative">
                <SecondText>
                  <Typography className="second-text">{`Fairplay`}</Typography>
                  <Title text={t('today-match')} />
                </SecondText>
                <TodayMatchSlider />
                <Box position="absolute" bottom={0} left={0}>
                  <ButtonForm
                    text={t('tournament-result')}
                    color="primary"
                    href="/u20/tournament"
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item sm={4}>
              <Box height={1} display="flex" flexDirection="column" justifyContent="space-between">
                <Box marginBottom={4}>
                  <Title text={t('ticket')} />
                  <StyledTicket>
                    <Image src={`/images/ticket.png`} priority alt="Surabaya" fill sizes="100%" />
                    <ButtonForm text="Buy" color="primary" />
                  </StyledTicket>
                </Box>
                <Box>
                  <Title text={t('stadiums')} marginBottom={3} />
                  <StadiumSlider />
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Box marginTop={6}>
            <Title text={t('next-match')} />
            <CardSlider type="match" data={dataMatch} />
          </Box>
        </>
      </Layout>
      <HomeU20Indonesia />
      <HomeNews data={dataNews} titleLocale={'best-of'} />
    </React.Fragment>
  )
}

Home.getLayout = (page) => <BodyLayout title="Home">{page}</BodyLayout>

export const getServerSideProps = async ({ locale }: GetServerSidePropsContext) => {
  return {
    props: {
      messages: (await import(`messages/${locale}.json`)).default,
    },
  }
}

export default Home
