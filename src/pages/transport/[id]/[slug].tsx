import React from 'react'
import { GetServerSidePropsContext } from 'next'
import { BlitzPage } from '@blitzjs/next'
import _ from 'lodash'
import { useRouter } from 'next/router'
import { Typography, Grid } from '@mui/material'
import { useTranslations } from 'next-intl'
import BodyLayout from 'src/core/layouts/BodyLayout'
import ButtonForm from 'src/core/components/Button'
import Layout from 'src/core/components/Layout'
import { StyledTodoDetail } from 'src/styles/explore'
import SliderThumb from 'src/core/components/sliders/SliderThumb'

interface Props {}

const dataSlider = [
  `/images/sliders/1837444326772783955.jpg`,
  '/images/countries/en.jpg',
  '/images/countries/id.jpg',
  `/images/sliders/1837444326772783955.jpg`,
  '/images/countries/en.jpg',
  '/images/countries/id.jpg',
  `/images/sliders/1837444326772783955.jpg`,
  '/images/countries/en.jpg',
  '/images/countries/id.jpg',
]

const TransportDetail: BlitzPage<Props> = () => {
  const t = useTranslations('Locale')
  const router = useRouter()
  const { locale } = router
  return (
    <React.Fragment>
      <Layout>
        <StyledTodoDetail>
          <ButtonForm text={t('back')} color="primary" href={`/${locale}/transport`} />
          <Typography className="main-title">{`Piala Walikota Futsal Antar SMP se- Surabaya`}</Typography>
          <Grid container spacing={4}>
            <Grid item sm={7.5}>
              <SliderThumb data={dataSlider} />
            </Grid>
            <Grid item sm={4.5}></Grid>
          </Grid>
        </StyledTodoDetail>
      </Layout>
    </React.Fragment>
  )
}

TransportDetail.getLayout = (page) => <BodyLayout title="Explore">{page}</BodyLayout>

export const getServerSideProps = async ({ locale }: GetServerSidePropsContext) => {
  return {
    props: {
      messages: (await import(`messages/${locale}.json`)).default,
    },
  }
}

export default TransportDetail
