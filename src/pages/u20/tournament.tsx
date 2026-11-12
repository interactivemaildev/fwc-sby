import React from 'react'
import { GetServerSidePropsContext } from 'next'
import { Divider, Box, Typography } from '@mui/material'
import { BlitzPage } from '@blitzjs/next'
import BodyLayout from 'src/core/layouts/BodyLayout'
import Landing from 'src/core/components/Landing'
import PagesTournament from 'src/core/components/u20/Pages'
import Layout from 'src/core/components/Layout'
import TabButtons from 'src/core/components/u20/TabButtons'
import GroupStages from 'src/core/components/u20/GroupStages'

interface Props {}

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <Box hidden={value !== index} {...other}>
      {value === index && children}
    </Box>
  )
}

const Tournament: BlitzPage<Props> = () => {
  const [tab, setTab] = React.useState(0)
  return (
    <React.Fragment>
      <Landing
        text={`Which matches did you watch during the FIFA U-20 World Cup Indonesia 2023™?`}
        color="dark"
        backgroundColor="yellow"
        img="/images/tournament.png"
      />
      <PagesTournament />
      <Layout paddingTop={0}>
        <>
          <Divider />
          <TabButtons tab={tab} setTab={setTab} />
          <TabPanel value={tab} index={0}>
            <GroupStages />
          </TabPanel>
          <TabPanel value={tab} index={1}>
            <Typography textAlign="center" paddingY={4}>
              Round of 16
            </Typography>
          </TabPanel>
          <TabPanel value={tab} index={2}>
            <Typography textAlign="center" paddingY={4}>
              Quarter Finals
            </Typography>
          </TabPanel>
          <TabPanel value={tab} index={3}>
            <Typography textAlign="center" paddingY={4}>
              Semi Finals
            </Typography>
          </TabPanel>
          <TabPanel value={tab} index={4}>
            <Typography textAlign="center" paddingY={4}>
              3rd Place & Final
            </Typography>
          </TabPanel>
        </>
      </Layout>
    </React.Fragment>
  )
}

Tournament.getLayout = (page) => <BodyLayout title="Tournament">{page}</BodyLayout>

export const getServerSideProps = async ({ locale }: GetServerSidePropsContext) => {
  return {
    props: {
      messages: (await import(`messages/${locale}.json`)).default,
    },
  }
}

export default Tournament
