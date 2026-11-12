import React, { memo } from 'react'
import { Box } from '@mui/material'
import Slider from 'react-slick'
import { StyledBoxCarousel, StyledBoxMultiple } from 'src/styles/sliders'
import { Arrow } from 'src/core/components/sliders/Main'
import { arrowSize } from 'src/core/components/sliders/TodayMatch'
import MatchCard from 'src/core/components/cards/Match'
import NewsCard from 'src/core/components/cards/News'

interface Props {
  type: 'news' | 'match'
  color?: 'default' | 'secondary' | 'black'
  withDots?: boolean
  data: any
}

const slidesToShow = 3
const CardSlider: React.FunctionComponent<Props> = ({ type, withDots, color, data }: Props) => {
  const slider = React.useRef<Slider>(null)
  const [activeSlide, setActiveSlide] = React.useState(0)
  const settings = {
    dots: withDots,
    infinite: false,
    speed: 200,
    arrows: true,
    draggable: false,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: false,
    cssEase: 'linear',
    variableWidth: true,
    nextArrow: <Arrow arrowSize={arrowSize} addClass={`bottom ${color}`} />,
    prevArrow: <Arrow arrowSize={arrowSize} addClass={`bottom ${color}`} />,
    beforeChange: (_current: number, next: number) => setActiveSlide(next),
  }
  return (
    <StyledBoxMultiple
      className={`large ${color || 'default'} ${activeSlide ? 'active-after' : ''} ${
        activeSlide === data.length - slidesToShow ? 'active-before' : ''
      }`}
    >
      <StyledBoxCarousel className={`global card ${type === 'match' ? 'with-label' : ''}`}>
        <Slider ref={slider} {...settings}>
          {!!data &&
            !!data.length &&
            data.map((item: any, i: number) => (
              <Box key={i} className="items">
                {type === 'match' && <MatchCard title={item.title} />}
                {type === 'news' && <NewsCard title={item.title} />}
              </Box>
            ))}
        </Slider>
      </StyledBoxCarousel>
    </StyledBoxMultiple>
  )
}

CardSlider.defaultProps = {
  withDots: true,
  color: 'default',
}

export default memo(CardSlider)
