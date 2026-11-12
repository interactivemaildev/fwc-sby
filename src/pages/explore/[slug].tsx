import React from 'react'
import { GetServerSidePropsContext } from 'next'
import { BlitzPage } from '@blitzjs/next'
import _ from 'lodash'
import { Box, Grid } from '@mui/material'
import { useTranslations } from 'next-intl'
import BodyLayout from 'src/core/layouts/BodyLayout'
import Landing from 'src/core/components/Landing'
import Layout from 'src/core/components/Layout'
import ExploreCard from 'src/core/components/cards/Explore'
import PaginationComponent from 'src/core/components/Pagination'
import { StyledLayout } from 'src/styles/app'
import { data as dataCategory, DataCategory } from 'src/core/components/sliders/Explore'

interface Props {
  category: DataCategory
}

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
]

const ExploreCategory: BlitzPage<Props> = ({ category }: Props) => {
  const t = useTranslations('Locale')
  return (
    <React.Fragment>
      <Landing text={t(category.key)} color="light" customBackground={category.color} />
      <StyledLayout className="default with-margin">
        <Layout>
          <Box maxWidth={1100} marginX="auto">
            <Grid container columnSpacing={0} rowSpacing={2}>
              {data.map((item, i) => (
                <Grid key={i} item sm={4}>
                  <ExploreCard title={item.title} />
                </Grid>
              ))}
            </Grid>
            <Box marginTop={4}>
              <PaginationComponent count={5} page={0} loading={false} onClick={() => null} />
            </Box>
          </Box>
        </Layout>
      </StyledLayout>
    </React.Fragment>
  )
}

ExploreCategory.getLayout = (page) => <BodyLayout title="Explore">{page}</BodyLayout>

export const getServerSideProps = async ({ locale, query }: GetServerSidePropsContext) => {
  const category = _.find(dataCategory, { key: query.slug as string })
  return {
    props: {
      category: category || dataCategory[0],
      messages: (await import(`messages/${locale}.json`)).default,
    },
  }
}

export default ExploreCategory
