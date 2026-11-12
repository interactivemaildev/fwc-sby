import React, { memo } from 'react'
import { IconButton } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import StopIcon from '@mui/icons-material/Stop'
import { StyledVideo } from 'src/styles/app'

interface Props {
  src: string
  move: boolean
}

const VideoPlayer: React.FunctionComponent<Props> = ({ src, move }: Props) => {
  const video = React.useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = React.useState(false)
  React.useEffect(() => {
    // eslint-disable-next-line
    if (isPlaying) video?.current?.play()
    // eslint-disable-next-line
    if (!isPlaying) video?.current?.pause()
  }, [isPlaying])
  return (
    <StyledVideo className={!isPlaying ? 'move' : move ? 'move' : ''}>
      <video ref={video} className="video" loop>
        <source src={src} type="video/mp4" />
      </video>
      <IconButton onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? <StopIcon /> : <PlayArrowIcon />}
      </IconButton>
    </StyledVideo>
  )
}

VideoPlayer.defaultProps = {}

export default memo(VideoPlayer)
