import React from 'react'
import { GetServerSidePropsContext } from 'next'
import { BlitzPage } from '@blitzjs/next'
import BodyLayout from 'src/core/layouts/BodyLayout'
import Landing from 'src/core/components/Landing'
import SectionOne from 'src/core/components/explore/SectionOne'
import SectionTwo from 'src/core/components/explore/SectionTwo'

interface Props {}

const Explore: BlitzPage<Props> = () => {
  return (
    <React.Fragment>
      <Landing
        text={`All you need to know about Surabaya’s culture, heritage and traditions.`}
        color="light"
        customBackground="#16724F"
        img="/images/heritage.png"
      />
      <SectionOne />
      <SectionTwo />
    </React.Fragment>
  )
}

Explore.getLayout = (page) => <BodyLayout title="Explore">{page}</BodyLayout>

export const getServerSideProps = async ({ locale }: GetServerSidePropsContext) => {
  return {
    props: {
      messages: (await import(`messages/${locale}.json`)).default,
    },
  }
}

export default Explore
