import React from 'react'
import { GetServerSidePropsContext } from 'next'
import { BlitzPage } from '@blitzjs/next'
import _ from 'lodash'
import { useRouter } from 'next/router'
import { Box, Typography, Grid } from '@mui/material'
import Masonry from '@mui/lab/Masonry'
import { useTranslations } from 'next-intl'
import BodyLayout from 'src/core/layouts/BodyLayout'
import ButtonForm from 'src/core/components/Button'
import Layout from 'src/core/components/Layout'
import ToDoCard from 'src/core/components/cards/ToDo'
import PaginationComponent from 'src/core/components/Pagination'
import { StyledLayout } from 'src/styles/app'
import { StyledTodoDetail } from 'src/styles/explore'
import Title from 'src/core/components/Title'
import SliderThumb from 'src/core/components/sliders/SliderThumb'

interface Props {}

const dataSlider = [
  `/images/explore/img1.jpg`,
  '/images/countries/arg.jpg',
  '/images/countries/id.jpg',
  `/images/explore/img1.jpg`,
  '/images/countries/arg.jpg',
  '/images/countries/id.jpg',
  `/images/explore/img1.jpg`,
  '/images/countries/arg.jpg',
  '/images/countries/id.jpg',
]

const data = [
  {
    title: 'Bumi Surabaya Citra Resort',
  },
  {
    title: 'Bumi Surabaya Citra Resort',
  },
  {
    title: 'Bumi Surabaya Citra Resort',
  },
  {
    title: 'Bumi Surabaya Citra Resort',
  },
  {
    title: 'Bumi Surabaya Citra Resort',
  },
  {
    title: 'Bumi Surabaya Citra Resort Testing Abc',
  },
]

const ExploreToDoDetail: BlitzPage<Props> = () => {
  const t = useTranslations('Locale')
  const router = useRouter()
  const { locale } = router
  return (
    <React.Fragment>
      <Layout>
        <StyledTodoDetail>
          <ButtonForm text={t('back')} color="primary" href={`/${locale}/explore/todo`} />
          <Typography className="main-title">{`Piala Walikota Futsal Antar SMP se- Surabaya`}</Typography>
          <Grid container spacing={4}>
            <Grid item sm={7.5}>
              <SliderThumb data={dataSlider} />
            </Grid>
            <Grid item sm={4.5}></Grid>
          </Grid>
        </StyledTodoDetail>
      </Layout>
      <StyledLayout className="black dark">
        <Layout>
          <Box maxWidth={830} marginX="auto">
            <Title
              text={t('other-events')}
              marginBottom={6}
              color="white"
              justifyContent="center"
            />
            <Masonry columns={3} spacing={{ xs: 2, md: 4 }}>
              {data.map((item, i) => (
                <ToDoCard key={i} title={item.title} className={`background-${i}`} />
              ))}
            </Masonry>
            <PaginationComponent count={20} page={0} loading={false} onClick={() => null} />
          </Box>
        </Layout>
      </StyledLayout>
    </React.Fragment>
  )
}

ExploreToDoDetail.getLayout = (page) => <BodyLayout title="Explore">{page}</BodyLayout>

export const getServerSideProps = async ({ locale }: GetServerSidePropsContext) => {
  return {
    props: {
      messages: (await import(`messages/${locale}.json`)).default,
    },
  }
}

export default ExploreToDoDetail
