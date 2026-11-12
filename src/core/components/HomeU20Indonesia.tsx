import React, { memo } from 'react'
import { Box } from '@mui/material'
import { StyledLayout } from 'src/styles/app'
import Layout from 'src/core/components/Layout'

interface Props {}

const HomeU20Indonesia: React.FunctionComponent<Props> = () => {
  return (
    <StyledLayout className="info">
      <Layout>
        <Box paddingY={10}></Box>
      </Layout>
    </StyledLayout>
  )
}

HomeU20Indonesia.defaultProps = {}

export default memo(HomeU20Indonesia)
