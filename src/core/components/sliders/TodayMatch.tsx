import React, { memo } from 'react'
import { Box } from '@mui/material'
import Slider from 'react-slick'
import { StyledBoxCarousel } from 'src/styles/sliders'
import { Arrow } from 'src/core/components/sliders/Main'
import TodayMatchCard from 'src/core/components/cards/TodayMatch'

interface Props {}

const data = [
  {
    title: 'Match 1',
  },
  {
    title: 'Match 2',
  },
]

export const arrowSize = 30
const TodayMatchSlider: React.FunctionComponent<Props> = () => {
  const slider = React.useRef<Slider>(null)
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 200,
    arrows: true,
    draggable: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    cssEase: 'linear',
    nextArrow: <Arrow arrowSize={arrowSize} addClass="bottom" />,
    prevArrow: <Arrow arrowSize={arrowSize} addClass="bottom" />,
  }
  return (
    <StyledBoxCarousel className="global">
      <Slider ref={slider} {...settings}>
        {!!data &&
          !!data.length &&
          data.map((_item, i) => (
            <Box key={i} className="items">
              <TodayMatchCard />
            </Box>
          ))}
      </Slider>
    </StyledBoxCarousel>
  )
}

TodayMatchSlider.defaultProps = {}

export default memo(TodayMatchSlider)
