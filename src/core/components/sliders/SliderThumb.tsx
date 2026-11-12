import React, { memo } from 'react'
import { Box } from '@mui/material'
import Slider from 'react-slick'
import Image from 'next/image'
import { StyledBoxSliderThumb, StyledBoxSliderThumbs } from 'src/styles/sliders'
import { Arrow } from 'src/core/components/sliders/Main'

interface Props {
  data: string[]
}

const slidesToShow = 4

const SliderThumb: React.FunctionComponent<Props> = ({ data }: Props) => {
  const slider = React.useRef<Slider>(null)
  const sliderThumb = React.useRef<Slider>(null)
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  }
  const settingsThumb = {
    dots: false,
    infinite: false,
    speed: 500,
    arrows: false,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: false,
  }
  const handleNextPrev = React.useCallback((isNext: boolean) => {
    if (isNext) {
      slider?.current?.slickNext()
      sliderThumb?.current?.slickNext()
    } else {
      slider?.current?.slickPrev()
      sliderThumb?.current?.slickPrev()
    }
  }, [])
  const handleClick = React.useCallback((i: number) => {
    slider?.current?.slickGoTo(i)
    sliderThumb?.current?.slickGoTo(i)
  }, [])
  return (
    <Box>
      <StyledBoxSliderThumb>
        {data.length > slidesToShow && (
          <Arrow className="slick-arrow slick-prev" onClick={() => handleNextPrev(false)} />
        )}
        <Slider ref={slider} {...settings}>
          {data.map((item, i) => (
            <Box key={i} className="items">
              <Image key={i} alt="Surabaya" src={item} fill priority={true} sizes="100%" />
            </Box>
          ))}
        </Slider>
        {data.length > slidesToShow && (
          <Arrow className="slick-arrow slick-next" onClick={() => handleNextPrev(true)} />
        )}
      </StyledBoxSliderThumb>

      <StyledBoxSliderThumbs>
        <Slider ref={sliderThumb} {...settingsThumb}>
          {data.map((item: string, i: number) => (
            <Box key={i} className="items">
              <Image
                key={i}
                alt="Surabaya"
                src={item}
                fill
                priority={true}
                sizes="100%"
                onClick={() => handleClick(i)}
              />
            </Box>
          ))}
        </Slider>
      </StyledBoxSliderThumbs>
    </Box>
  )
}

SliderThumb.defaultProps = {}

export default memo(SliderThumb)
