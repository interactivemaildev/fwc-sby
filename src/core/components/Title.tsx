import React, { memo } from 'react'
import { Typography } from '@mui/material'
import { StyledTitle } from 'src/styles/app'

interface Props {
  text: string
  size?: 'small' | 'large'
  color?: 'black' | 'white'
  marginBottom?: number
  justifyContent?: 'space-between' | 'center'
}

const Title: React.FunctionComponent<Props> = ({
  text,
  size,
  color,
  marginBottom,
  justifyContent,
}: Props) => {
  return (
    <StyledTitle
      marginBottom={marginBottom}
      display="flex"
      justifyContent={justifyContent || 'space-between'}
      alignItems="center"
    >
      <Typography className={`${size} ${color || 'black'}`}>{text}</Typography>
    </StyledTitle>
  )
}

Title.defaultProps = {
  size: 'large',
  marginBottom: 4,
  color: 'black',
  justifyContent: 'space-between',
}

export default memo(Title)
