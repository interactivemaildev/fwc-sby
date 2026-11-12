import React, { memo } from 'react'
import Image from 'next/image'
import { Box, Typography } from '@mui/material'
import { useTranslations } from 'next-intl'
import { StyledMatch } from 'src/styles/cards'
import LabelCard from 'src/core/components/cards/Label'

interface Props {
  title: string
}

const MatchCard: React.FunctionComponent<Props> = ({ title }: Props) => {
  const t = useTranslations('Locale')
  return (
    <StyledMatch>
      <LabelCard variant="warning" title="14 May 2023" subtitle="07.00 PM" />
      <Box
        className="img"
        sx={{
          paddingTop: '60%',
        }}
      >
        <Image src={`/images/match/match.png`} priority alt="Surabaya" fill sizes="100%" />
      </Box>
      <Box className="content">
        <Typography className="title">{title}</Typography>
        <Typography>{t('stadium', { count: 0 })}</Typography>
        <Typography className="stadium">{`Gelora Bung Tomo`}</Typography>
      </Box>
    </StyledMatch>
  )
}

MatchCard.defaultProps = {}

export default memo(MatchCard)
