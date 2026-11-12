import React, { memo } from 'react'
import { Typography } from '@mui/material'
import { StyledStadium } from 'src/styles/cards'

interface Props {
  title: string
  img: string
}

const StadiumCard: React.FunctionComponent<Props> = ({ title, img }: Props) => {
  return (
    <StyledStadium
      sx={{
        background: `url(${img}) no-repeat right 10px bottom`,
        backgroundSize: `auto 90%`,
      }}
    >
      <Typography className="title">{title}</Typography>
      <Typography className="location">{`Surabaya`}</Typography>
    </StyledStadium>
  )
}

StadiumCard.defaultProps = {}

export default memo(StadiumCard)
