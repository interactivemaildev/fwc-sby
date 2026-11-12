import React, { memo } from 'react'
import Image from 'next/image'
import { Box, Typography } from '@mui/material'
import { StyledTodayMatch } from 'src/styles/cards'

interface Props {}

const ImageCountry = memo(({ img, alt, country }: any) => {
  return (
    <Box className="img-country">
      <Image src={img} alt={alt} width={70} height={70} priority={true} />
      <Typography>{country}</Typography>
    </Box>
  )
})

const TodayMatchCard: React.FunctionComponent<Props> = () => {
  return (
    <StyledTodayMatch>
      <Typography className="title">Match 1</Typography>
      <Box className="score" display="flex" justifyContent="center" alignItems="flex-start">
        <ImageCountry img={`/images/countries/arg.jpg`} alt={`en`} country="ARG" />
        <Typography className="main-title">{`0 : 0`}</Typography>
        <ImageCountry img={`/images/countries/id.jpg`} alt={`id`} country="IND" />
      </Box>
      <Box className="time" display="flex" justifyContent="space-around" alignItems="center">
        <Typography>{`11 May 2023`}</Typography>
        <Typography>{`Time: 08.00 PM`}</Typography>
      </Box>
      <Typography className="stadium">{`Gelora Bung Tomo Stadium`}</Typography>
      <Box className="live">
        <Typography>Live On</Typography>
        <Box display="flex" justifyContent="center" marginY={2}>
          <Image src="/images/sctv.png" alt={'Surabaya'} fill sizes="100%" priority={true} />
          <Image src="/images/indosiar.png" alt={'Surabaya'} fill sizes="100%" priority={true} />
          <Image src="/images/youtube.png" alt={'Surabaya'} fill sizes="100%" priority={true} />
        </Box>
      </Box>
    </StyledTodayMatch>
  )
}

TodayMatchCard.defaultProps = {}

export default memo(TodayMatchCard)
