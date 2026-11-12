import React, { memo } from 'react'
import { Typography } from '@mui/material'
import { StyledTypography } from 'src/styles/typography'

interface Props {
  text: string
}

const TypographyComponent: React.FunctionComponent<Props> = ({ text }: Props) => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 })
  const handleMouse = React.useCallback((e: React.MouseEvent) => {
    const bounds = e.currentTarget.getBoundingClientRect()

    setMousePosition({
      x: e.clientX - 200,
      y: e.clientY - bounds?.top || 0,
    })
  }, [])
  return (
    <StyledTypography onMouseMoveCapture={handleMouse}>
      <Typography
        style={{
          backgroundPosition: `${mousePosition.x}px ${mousePosition.y - 200}px`,
        }}
      >
        <span>{text}</span>
      </Typography>
    </StyledTypography>
  )
}

TypographyComponent.defaultProps = {}

export default memo(TypographyComponent)
