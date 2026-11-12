import React, { memo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Box, Typography } from '@mui/material'
import { StyledToDo } from 'src/styles/cards'
import LabelCard from 'src/core/components/cards/Label'

interface Props {
  title: string
  className: string
}

const ToDoCard: React.FunctionComponent<Props> = ({ title, className }: Props) => {
  return (
    <StyledToDo className={className}>
      <LabelCard variant="default" title="16 April 2023" />
      <Box className="content">
        <Link href={`/explore/todo/1/test`} passHref legacyBehavior>
          <Typography component="a" className="title">
            {title}
          </Typography>
        </Link>
      </Box>
      <Link href={`/explore/todo/1/test`} passHref legacyBehavior>
        <Box
          className="img"
          component="a"
          sx={{
            paddingTop: '60%',
          }}
        >
          <Image src={`/images/explore/img1.jpg`} priority alt="Surabaya" fill sizes="100%" />
        </Box>
      </Link>
    </StyledToDo>
  )
}

ToDoCard.defaultProps = {}

export default memo(ToDoCard)
