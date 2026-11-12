import React, { memo } from 'react'
import Image from 'next/image'
import { Box, Grid, Typography } from '@mui/material'
import { StyledLanding } from 'src/styles/app'
import Layout from 'src/core/components/Layout'

interface Props {
  text: string
  color?: 'dark' | 'light'
  backgroundColor?: 'red' | 'black' | 'yellow' | 'purple'
  customBackground?: string
  img?: string
}

const Landing: React.FunctionComponent<Props> = ({
  text,
  color,
  backgroundColor,
  customBackground,
  img,
}: Props) => {
  return (
    <StyledLanding
      className={`${color} ${customBackground ? '' : backgroundColor}`}
      sx={customBackground ? { backgroundColor: customBackground } : {}}
    >
      <Layout paddingBottom={0} paddingTop={0}>
        <Grid container spacing={0}>
          <Grid item sm={5}>
            <Box className="content">
              <Typography>{text}</Typography>
            </Box>
          </Grid>
          <Grid item sm={7}>
            <Box className="img">
              {img && <Image src={img} priority alt="Surabaya" fill sizes="100%" />}
            </Box>
          </Grid>
        </Grid>
      </Layout>
    </StyledLanding>
  )
}

Landing.defaultProps = {
  color: 'light',
  backgroundColor: 'black',
}

export default memo(Landing)
