import React from 'react'
import { GetServerSidePropsContext } from 'next'
import { BlitzPage } from '@blitzjs/next'
import _ from 'lodash'
import { Box } from '@mui/material'
import Masonry from '@mui/lab/Masonry'
import { useTranslations } from 'next-intl'
import BodyLayout from 'src/core/layouts/BodyLayout'
import Landing from 'src/core/components/Landing'
import Layout from 'src/core/components/Layout'
import ToDoCard from 'src/core/components/cards/ToDo'
import PaginationComponent from 'src/core/components/Pagination'
import { StyledLayout } from 'src/styles/app'
import Title from 'src/core/components/Title'
import ExploreSlider from 'src/core/components/sliders/Explore'

interface Props {}

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

const ExploreToDo: BlitzPage<Props> = () => {
  const t = useTranslations('Locale')
  return (
    <React.Fragment>
      <Landing text={t('todo')} color="light" backgroundColor="purple" />
      <StyledLayout className="black dark with-margin">
        <Layout>
          <Box maxWidth={830} marginX="auto">
            <Title text={t('todo-tag')} marginBottom={6} color="white" justifyContent="center" />
            <Masonry columns={3} spacing={{ xs: 2, md: 4 }}>
              {data.map((item, i) => (
                <ToDoCard key={i} title={item.title} className={`background-${i}`} />
              ))}
            </Masonry>
            <Box marginTop={-10} marginBottom={10}>
              <PaginationComponent
                isDark
                count={20}
                page={0}
                loading={false}
                onClick={() => null}
              />
            </Box>
          </Box>
        </Layout>
      </StyledLayout>
      <StyledLayout className="black with-margin">
        <Layout paddingTop={8} paddingBottom={14}>
          <>
            <Title text={t('others-category')} marginBottom={0} color="white" />
            <ExploreSlider marginTop={6} />
          </>
        </Layout>
      </StyledLayout>
    </React.Fragment>
  )
}

ExploreToDo.getLayout = (page) => <BodyLayout title="Explore">{page}</BodyLayout>

export const getServerSideProps = async ({ locale }: GetServerSidePropsContext) => {
  return {
    props: {
      messages: (await import(`messages/${locale}.json`)).default,
    },
  }
}

export default ExploreToDo
