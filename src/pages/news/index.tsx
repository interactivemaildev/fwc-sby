import React from 'react'
import { GetServerSidePropsContext } from 'next'
import { BlitzPage } from '@blitzjs/next'
import { useTranslations } from 'next-intl'
import BodyLayout from 'src/core/layouts/BodyLayout'
import Landing from 'src/core/components/Landing'
import { StyledLayout } from 'src/styles/app'
import Layout from 'src/core/components/Layout'
import Title from 'src/core/components/Title'
import Search from 'src/core/components/Search'
import ContainerNews from 'src/core/components/news/ContainerNews'

interface Props {}

const data = [
  {
    title: 'Lorem Ipsum is simply dummy text of the printing and typesetting1',
    date: '3 Feb 2023',
    img: '/images/sliders/1837444326772783955.jpg',
  },
  {
    title: 'Lorem Ipsum is simply dummy text of the printing and typesetting2',
    date: '3 Feb 2023',
    img: '/images/sliders/1837444326772783955.jpg',
  },
  {
    title: 'Lorem Ipsum is simply dummy text of the printing and typesetting3',
    date: '3 Feb 2023',
    img: '/images/sliders/1837444326772783955.jpg',
  },
  {
    title: 'Lorem Ipsum is simply dummy text of the printing and typesetting4',
    date: '3 Feb 2023',
    img: '/images/sliders/1837444326772783955.jpg',
  },
  {
    title: 'Lorem Ipsum is simply dummy text of the printing and typesetting5',
    date: '3 Feb 2023',
    img: '/images/sliders/1837444326772783955.jpg',
  },
  {
    title: 'Lorem Ipsum is simply dummy text of the printing and typesetting6',
    date: '3 Feb 2023',
    img: '/images/sliders/1837444326772783955.jpg',
  },
  {
    title: 'Lorem Ipsum is simply dummy text of the printing and typesetting7',
    date: '3 Feb 2023',
    img: '/images/sliders/1837444326772783955.jpg',
  },
  {
    title: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
    date: '3 Feb 2023',
    img: '/images/sliders/1837444326772783955.jpg',
  },
  {
    title: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
    date: '3 Feb 2023',
    img: '/images/sliders/1837444326772783955.jpg',
  },
  {
    title: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
    date: '3 Feb 2023',
    img: '/images/sliders/1837444326772783955.jpg',
  },
  {
    title: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
    date: '3 Feb 2023',
    img: '/images/sliders/1837444326772783955.jpg',
  },
]

const News: BlitzPage<Props> = () => {
  const t = useTranslations('Locale')
  return (
    <React.Fragment>
      <Landing
        text={`Lorem Ipsum is simply dummy text of the printing and typesetting industry.`}
        color="light"
        customBackground="#20E1CE"
      />
      <StyledLayout className="default with-margin">
        <Layout>
          <>
            <Title text={t('news-tag')} marginBottom={2} />
            <Search loading={false} />
            <ContainerNews data={data} />
          </>
        </Layout>
      </StyledLayout>
    </React.Fragment>
  )
}

News.getLayout = (page) => <BodyLayout title="News">{page}</BodyLayout>

export const getServerSideProps = async ({ locale }: GetServerSidePropsContext) => {
  return {
    props: {
      messages: (await import(`messages/${locale}.json`)).default,
    },
  }
}

export default News
