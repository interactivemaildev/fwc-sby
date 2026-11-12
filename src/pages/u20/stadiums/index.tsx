import React from 'react'
import { GetServerSidePropsContext } from 'next'
import { Divider } from '@mui/material'
import { BlitzPage } from '@blitzjs/next'
import BodyLayout from 'src/core/layouts/BodyLayout'
import Landing from 'src/core/components/Landing'
import PagesTournament from 'src/core/components/u20/Pages'
import Layout from 'src/core/components/Layout'
import StadiumsComponent from 'src/core/components/Stadiums'

interface Props {}

const Stadiums: BlitzPage<Props> = () => {
  return (
    <React.Fragment>
      <Landing
        text={`Which matches did you watch during the FIFA U-20 World Cup Indonesia 2023™?`}
        color="dark"
        backgroundColor="yellow"
        img="/images/stadium.png"
      />
      <PagesTournament />
      <Layout paddingTop={0}>
        <>
          <Divider />
          <StadiumsComponent />
        </>
      </Layout>
    </React.Fragment>
  )
}

Stadiums.getLayout = (page) => <BodyLayout title="Stadiums">{page}</BodyLayout>

export const getServerSideProps = async ({ locale }: GetServerSidePropsContext) => {
  return {
    props: {
      messages: (await import(`messages/${locale}.json`)).default,
    },
  }
}

export default Stadiums
