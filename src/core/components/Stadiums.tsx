import React, { memo } from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { StyledStadiums } from 'src/styles/u20'

interface Props {}

interface CardProps {
  img: string
  title: string
}

const CardStadiums = React.memo(({ img, title }: CardProps) => {
  return (
    <Box className="card">
      <Grid container spacing={4}>
        <Grid item sm={6}>
          <Link href={'/u20/stadiums/1/test-01'} passHref legacyBehavior>
            <Button
              className="img"
              component="a"
              sx={{
                paddingTop: '55%',
              }}
            >
              <Image src={img} alt={title} priority fill sizes="100%" />
            </Button>
          </Link>
        </Grid>
        <Grid item sm={6}>
          <Box className="content">
            <Link href={'/'} passHref legacyBehavior>
              <Typography component="a" className="title">
                {title}
              </Typography>
            </Link>
            <Typography className="tagline">{`The warmest of Surabaya, Indonesia welcomes`}</Typography>
            <Typography className="capacity">{`48.000`}</Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
})

const StadiumsComponent: React.FunctionComponent<Props> = () => {
  return (
    <StyledStadiums>
      <Grid container spacing={4}>
        {[...new Array(5)].map((_item, i) => (
          <Grid key={i} item sm={6}>
            <CardStadiums
              img={`/images/stadiums/bung_tomo.jpg`}
              title={`Gelora Bung Tomo Stadium`}
            />
          </Grid>
        ))}
      </Grid>
    </StyledStadiums>
  )
}

StadiumsComponent.defaultProps = {}

export default memo(StadiumsComponent)
