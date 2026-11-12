import React, { memo } from 'react'
import { StyledText } from 'src/styles/app'

interface Props {
  text: string
}

const Text: React.FunctionComponent<Props> = ({ text }: Props) => {
  return (
    <StyledText>
      <div className="text" dangerouslySetInnerHTML={{ __html: text }} />
    </StyledText>
  )
}

Text.defaultProps = {}

export default memo(Text)
