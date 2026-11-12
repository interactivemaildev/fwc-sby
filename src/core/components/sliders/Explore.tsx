import React, { memo } from 'react'
import { Box, Typography } from '@mui/material'
import { StyledBoxExplore } from 'src/styles/sliders'
import { Arrow } from 'src/core/components/sliders/Main'
import { arrowSize } from 'src/core/components/sliders/TodayMatch'
import Link from 'next/link'

interface Props {
  marginTop?: number
}

interface CardProps {
  title: string
  color: string
  img: string
  className: string
}

export interface DataCategory {
  title: string
  color: string
  img: string
  key: string
}

export const data: DataCategory[] = [
  { title: 'Hotels', key: 'hotel', color: '#CB0001', img: '/images/hotels.png' },
  { title: 'Culinary', key: 'culinary', color: '#7A4C29', img: '/images/culinary.png' },
  { title: 'Shopping', key: 'shopping', color: '#3068A5', img: '/images/shopping.png' },
  { title: 'Heritage', key: 'heritage', color: '#C6985C', img: '/images/menu_heritage.png' },
  { title: 'Tourism Spot', key: 'tourism', color: '#7C6398', img: '/images/spot.png' },
]

const CardExplore = React.memo(({ title, color, className, img }: CardProps) => {
  return (
    <Box className={className}>
      <Box
        className="inner"
        sx={{ background: `url(${img}) no-repeat center center`, backgroundSize: 'auto 100%' }}
      >
        <Link href="/explore/hotels">{''}</Link>
        <Typography>{title}</Typography>
      </Box>
    </Box>
  )
})

const ExploreSlider: React.FunctionComponent<Props> = ({ marginTop }: Props) => {
  const [active, setActive] = React.useState(1)
  const handleClick = React.useCallback(
    (isNext: boolean) => {
      setActive(isNext ? active + 1 : active - 1)
    },
    [active]
  )
  const classes = React.useCallback(
    (number: number) => {
      if (number === active) return 'explore center'
      const last = active === data.length - 1
      if (last && number === 0) return 'explore next'
      if (active > data.length - 1) setActive(0)
      if (!last && number === active + 1) return 'explore next'

      const first = active === 0
      if (first && number === data.length - 1) return 'explore prev'
      if (active < 0) setActive(data.length - 1)
      if (!first && number === active - 1) return 'explore prev'
      return 'explore'
    },
    [active]
  )
  return (
    <StyledBoxExplore marginTop={marginTop}>
      <Box className="slider">
        {!!data &&
          !!data.length &&
          data.map((item: DataCategory, i: number) => (
            <CardExplore
              key={i}
              title={item.title}
              color={item.color}
              img={item.img}
              className={classes(i)}
            />
          ))}
      </Box>
      <Arrow
        arrowSize={arrowSize}
        className="slick-arrow slick-next secondary"
        onClick={() => handleClick(true)}
      />
      <Arrow
        arrowSize={arrowSize}
        className="slick-arrow slick-prev secondary"
        onClick={() => handleClick(false)}
      />
    </StyledBoxExplore>
  )
}

ExploreSlider.defaultProps = {
  marginTop: 10,
}

export default memo(ExploreSlider)
