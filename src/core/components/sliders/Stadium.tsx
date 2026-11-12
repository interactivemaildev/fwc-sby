import React, { memo } from 'react'
import { Box } from '@mui/material'
import Slider from 'react-slick'
import { StyledBoxCarousel, StyledBoxMultiple } from 'src/styles/sliders'
import { Arrow } from 'src/core/components/sliders/Main'
import { arrowSize } from 'src/core/components/sliders/TodayMatch'
import StadiumCard from 'src/core/components/cards/Stadium'

interface Props {}

const data = [
  {
    title: 'Gelora Bung Tomo',
    img: '/images/stadiums/bung_tomo.png',
  },
  {
    title: 'Gelora Bung Karno',
    img: '/images/stadiums/bung_karno.png',
  },
  {
    title: 'Gelora Sriwijaya',
    img: '/images/stadiums/sriwijaya.png',
  },
]

const StadiumSlider: React.FunctionComponent<Props> = () => {
  const slider = React.useRef<Slider>(null)
  const settings = {
    dots: true,
    infinite: false,
    speed: 0,
    arrows: true,
    draggable: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    cssEase: 'linear',
    variableWidth: true,
    nextArrow: <Arrow arrowSize={arrowSize} addClass="bottom" />,
    prevArrow: <Arrow arrowSize={arrowSize} addClass="bottom" />,
  }
  return (
    <StyledBoxMultiple className="small stadium">
      <StyledBoxCarousel className="global">
        <Slider ref={slider} {...settings}>
          {!!data &&
            !!data.length &&
            data.map((item, i) => (
              <Box key={i} className="items">
                <StadiumCard title={item.title} img={item.img} />
              </Box>
            ))}
        </Slider>
      </StyledBoxCarousel>
    </StyledBoxMultiple>
  )
}

StadiumSlider.defaultProps = {}

export default memo(StadiumSlider)
