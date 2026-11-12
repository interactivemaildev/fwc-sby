import React, { memo } from 'react'
import { Typography, IconButton } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import StopIcon from '@mui/icons-material/Stop'
import { StyledHeaderButton } from 'src/styles/header'

interface Props {}

const AudioButton: React.FunctionComponent<Props> = () => {
  const [audio, setAudio] = React.useState<HTMLAudioElement>()
  const [isPlaying, setIsPlaying] = React.useState(false)
  React.useEffect(() => {
    // eslint-disable-next-line
    if (isPlaying) audio?.play()
    // eslint-disable-next-line
    if (!isPlaying) audio?.pause()
  }, [isPlaying])
  React.useEffect(() => {
    setAudio(new Audio(`/audio/back_sound.mp3`))
  }, [])
  return (
    <StyledHeaderButton>
      <Typography>Soundtrack</Typography>
      <IconButton onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? <StopIcon /> : <PlayArrowIcon />}
      </IconButton>
    </StyledHeaderButton>
  )
}

AudioButton.defaultProps = {}

export default memo(AudioButton)
