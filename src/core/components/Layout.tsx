import React, { memo } from 'react'
import { Container } from '@mui/material'

interface Props {
  children?: React.ReactElement
  paddingTop?: number
  paddingBottom?: number
}

const Layout: React.FunctionComponent<Props> = ({ children, paddingTop, paddingBottom }: Props) => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        paddingTop,
        paddingBottom,
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden',
      }}
    >
      {children}
    </Container>
  )
}

Layout.defaultProps = {
  paddingTop: 5,
  paddingBottom: 5,
}

export default memo(Layout)
