import React, { memo } from 'react'
import { Box } from '@mui/material'
import Image from 'next/image'
import Slider from 'react-slick'
import { ReactSVG } from 'react-svg'
import { StyledBoxCarousel, StyledArrowCarousel } from 'src/styles/sliders'
import VideoPlayer from 'src/core/components/VideoPlayer'

interface Props {}

const data = [
  {
    type: 'image',
    source: `/images/sliders/banner.jpg`,
  },
  {
    type: 'video',
    source: `/video/konform-frontpage01.mp4`,
  },
]

export const Arrow = memo(function Arrow({ arrowSize, addClass, className, onClick }: any) {
  return (
    <StyledArrowCarousel className={`${className} ${addClass || ''}`} onClick={onClick}>
      <ReactSVG
        beforeInjection={(svg) => {
          svg.classList.add(`svg-icon`)
          svg.setAttribute(
            'style',
            `width: ${arrowSize}px; height: ${arrowSize}px; display: block;`
          )
        }}
        className={`wrapper-svg`}
        src={`/images/icons/next-prev.svg`}
        wrapper="div"
        onClick={onClick}
      />
    </StyledArrowCarousel>
  )
})

const MainSlider: React.FunctionComponent<Props> = () => {
  const slider = React.useRef<Slider>(null)
  const [move, setMove] = React.useState(false)
  let timer: any
  const handleEnterCursor = React.useCallback(async () => {
    setMove(true)
    clearTimeout(timer)
    timer = setTimeout(() => setMove(false), 3000)
  }, [timer])
  const handleLeave = React.useCallback(async () => {
    setMove(false)
    clearTimeout(timer)
  }, [timer])
  const settings = {
    dots: false,
    infinite: true,
    speed: 200,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    autoplay: false,
    cssEase: 'linear',
    autoplaySpeed: 5000,
    nextArrow: <Arrow arrowSize={48} addClass="main" />,
    prevArrow: <Arrow arrowSize={48} addClass="main" />,
  }
  React.useEffect(() => {
    return clearTimeout(timer)
  }, [timer])
  return (
    <StyledBoxCarousel
      className={move ? 'move' : ''}
      onMouseMove={handleEnterCursor}
      onMouseLeave={handleLeave}
    >
      <Slider ref={slider} {...settings}>
        {!!data &&
          !!data.length &&
          data.map((item, i) => (
            <Box key={i} className="items main">
              {item.type === 'video' ? (
                <VideoPlayer src={item.source} move={move} />
              ) : (
                <Image alt="Surabaya" src={item.source} fill priority={true} sizes="100%" />
              )}
            </Box>
          ))}
      </Slider>
    </StyledBoxCarousel>
  )
}

MainSlider.defaultProps = {}

export default memo(MainSlider)
