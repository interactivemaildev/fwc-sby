import React, { memo } from 'react'
import { Typography } from '@mui/material'
import { StyledLabel } from 'src/styles/cards'

interface Props {
  variant: 'default' | 'primary' | 'warning'
  title: string
  subtitle?: string
}

const LabelCard: React.FunctionComponent<Props> = ({ variant, title, subtitle }: Props) => {
  return (
    <StyledLabel className={variant}>
      <Typography className="title">{title}</Typography>
      {subtitle && <Typography className="subtitle">{subtitle}</Typography>}
    </StyledLabel>
  )
}

LabelCard.defaultProps = {}

export default memo(LabelCard)
