import React, { memo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Box, Typography } from '@mui/material'
import { StyledNews } from 'src/styles/cards'

interface Props {
  title: string
  color?: 'dark' | 'light'
}

const NewsCard: React.FunctionComponent<Props> = ({ title, color }: Props) => {
  return (
    <StyledNews>
      <Link href={`/news/1/test`} passHref legacyBehavior>
        <Box
          className="img"
          component="a"
          sx={{
            paddingTop: '60%',
          }}
        >
          <Image src={`/images/stadiums/bung_tomo.jpg`} priority alt="Surabaya" fill sizes="100%" />
        </Box>
      </Link>
      <Box className={`content ${color || 'light'}`}>
        <Link href={`/news/1/test`} passHref legacyBehavior>
          <Typography component="a" className="title">
            {title}
          </Typography>
        </Link>
        <Typography className="date">{`3 Feb 2023`}</Typography>
      </Box>
    </StyledNews>
  )
}

NewsCard.defaultProps = {
  color: 'light',
}

export default memo(NewsCard)
