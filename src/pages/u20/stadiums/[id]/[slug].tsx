import React from 'react'
import { GetServerSidePropsContext } from 'next'
import { Divider, Box, Grid, Typography } from '@mui/material'
import { BlitzPage } from '@blitzjs/next'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import BodyLayout from 'src/core/layouts/BodyLayout'
import Landing from 'src/core/components/Landing'
import PagesTournament from 'src/core/components/u20/Pages'
import Layout from 'src/core/components/Layout'
import { StyledDetailStadium } from 'src/styles/u20'
import ButtonForm from 'src/core/components/Button'
import Text from 'src/core/components/Text'
import HomeNews from 'src/core/components/HomeNews'

interface Props {}

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

const DetailStadiums: BlitzPage<Props> = () => {
  const t = useTranslations('Locale')
  const router = useRouter()
  const { locale } = router
  return (
    <React.Fragment>
      <Landing
        text={`Which matches did you watch during the FIFA U-20 World Cup Indonesia 2023™?`}
        color="dark"
        backgroundColor="yellow"
        img="/images/stadium.png"
      />
      <PagesTournament />
      <Layout paddingTop={0} paddingBottom={14}>
        <>
          <Divider />
          <StyledDetailStadium>
            <ButtonForm text={t('back')} color="primary" href={`/${locale}/u20/stadiums`} />
            <Box className="img">
              <Image
                src={`/images/stadiums/bung_tomo.jpg`}
                alt={`Surabaya`}
                priority
                fill
                sizes="100%"
              />
            </Box>
            <Box className="container-content">
              <Grid container spacing={4}>
                <Grid item sm={7}>
                  <Text text="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>" />
                </Grid>
                <Grid item sm={5}>
                  <Box className="content">
                    <Divider />
                    <Typography className="title">Gelora Bung Tomo Stadium</Typography>
                    <Typography className="tagline">
                      The warmest of Surabaya, Indonesia welcomes
                    </Typography>
                    <Divider />
                    <Typography>FIFA World Cup 2023™ Stadium Capacity*</Typography>
                    <Typography className="subtitle">48.806</Typography>
                    <Divider />
                    <Typography>Location</Typography>
                    <Link href={`/`} passHref legacyBehavior>
                      <Typography component="a" className="subtitle">
                        Benowo, Pakal, Surabaya City, East Java 60196
                      </Typography>
                    </Link>
                    <Divider />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </StyledDetailStadium>
        </>
      </Layout>
      <HomeNews data={dataNews} titleLocale={'our-stadiums'} />
    </React.Fragment>
  )
}

DetailStadiums.getLayout = (page) => <BodyLayout title="Stadiums">{page}</BodyLayout>

export const getServerSideProps = async ({ locale }: GetServerSidePropsContext) => {
  return {
    props: {
      messages: (await import(`messages/${locale}.json`)).default,
    },
  }
}

export default DetailStadiums
