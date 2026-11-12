import React from 'react'
import { GetServerSidePropsContext } from 'next'
import { Divider, Box, Grid, Typography } from '@mui/material'
import { BlitzPage } from '@blitzjs/next'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import BodyLayout from 'src/core/layouts/BodyLayout'
import { StyledLayout } from 'src/styles/app'
import Layout from 'src/core/components/Layout'
import { StyledDetailNews } from 'src/styles/news'
import ButtonForm from 'src/core/components/Button'
import Text from 'src/core/components/Text'
import HomeNews from 'src/core/components/HomeNews'

interface Props {}

const dataNews = [
  {
    title: 'SC and MECC conduct first One Tide Industry Coalition workshop',
  },
  {
    title: 'Qatar 2022 described as ‘celebration of humanity’ at Global Security Forum',
  },
  {
    title: 'SC unveils YouTube series showcasing musical journey of Qatar 2022',
  },
  {
    title: 'Qatari man breaks record for number of matches attended at a FIFA World Cup',
  },
  {
    title: 'SC takes part in Sports Expo in Egypt',
  },
]

const DetailNews: BlitzPage<Props> = () => {
  const t = useTranslations('Locale')
  const router = useRouter()
  const { locale } = router
  return (
    <React.Fragment>
      <StyledDetailNews>
        <Layout paddingTop={0} paddingBottom={6}>
          <StyledLayout className="default">
            <Box className="header">
              <ButtonForm text={t('back')} color="primary" href={`/${locale}/u20/stadiums`} />
              <Typography className="title">{`Linari: I feel so lucky to be going to a World Cup in the All Blacks home`}</Typography>
              <Typography className="date">{`Saturday, 3 Feb 2023 | 03.00 PM`}</Typography>
            </Box>

            <Box className="img">
              <Image
                src={`/images/stadiums/bung_tomo.jpg`}
                alt={`Surabaya`}
                priority
                fill
                sizes="100%"
              />
            </Box>
            <Box className="content">
              <Text text="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>" />
            </Box>
          </StyledLayout>
        </Layout>
      </StyledDetailNews>

      <HomeNews data={dataNews} titleLocale={'other-news'} color="black" />
    </React.Fragment>
  )
}

DetailNews.getLayout = (page) => <BodyLayout title="News">{page}</BodyLayout>

export const getServerSideProps = async ({ locale }: GetServerSidePropsContext) => {
  return {
    props: {
      messages: (await import(`messages/${locale}.json`)).default,
    },
  }
}

export default DetailNews
