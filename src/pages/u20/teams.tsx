import React from 'react'
import { GetServerSidePropsContext } from 'next'
import { Divider, Grid, Box, Typography } from '@mui/material'
import Image from 'next/image'
import { BlitzPage } from '@blitzjs/next'
import BodyLayout from 'src/core/layouts/BodyLayout'
import Landing from 'src/core/components/Landing'
import PagesTournament from 'src/core/components/u20/Pages'
import Layout from 'src/core/components/Layout'
import { StyledCountry } from 'src/styles/cards'

interface Props {}

interface CardProps {
  img: string
  country: string
}

const CardCountry = React.memo(({ img, country }: CardProps) => {
  return (
    <StyledCountry>
      <Box
        className="img"
        sx={{
          paddingTop: '60%',
        }}
      >
        <Image src={img} alt={country} priority fill sizes="100%" />
      </Box>
      <Typography>{country}</Typography>
    </StyledCountry>
  )
})

const Teams: BlitzPage<Props> = () => {
  return (
    <React.Fragment>
      <Landing
        text={`Which matches did you watch during the FIFA U-20 World Cup Indonesia 2023™?`}
        color="dark"
        backgroundColor="yellow"
        img="/images/team.png"
      />
      <PagesTournament />
      <Layout paddingTop={0}>
        <>
          <Divider />
          <Box marginTop={6}>
            <Grid container spacing={4}>
              {[...new Array(16)].map((_item, i) => (
                <Grid key={i} item sm={3}>
                  <CardCountry img={`/images/countries/id.jpg`} country={`Indonesia (INA)`} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </>
      </Layout>
    </React.Fragment>
  )
}

Teams.getLayout = (page) => <BodyLayout title="Teams">{page}</BodyLayout>

export const getServerSideProps = async ({ locale }: GetServerSidePropsContext) => {
  return {
    props: {
      messages: (await import(`messages/${locale}.json`)).default,
    },
  }
}

export default Teams
