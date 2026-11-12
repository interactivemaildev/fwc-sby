import React, { memo } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Box, Typography } from '@mui/material'
import { StyledExplore } from 'src/styles/cards'
import ButtonForm from 'src/core/components/Button'

interface Props {
  title: string
}

const ExploreCard: React.FunctionComponent<Props> = ({ title }: Props) => {
  const t = useTranslations('Locale')
  return (
    <StyledExplore>
      <Link href={`/`} passHref legacyBehavior>
        <Box
          className="img"
          component="a"
          sx={{
            paddingTop: '65%',
          }}
        >
          <Image src={`/images/explore/img1.jpg`} priority alt="Surabaya" fill sizes="100%" />
        </Box>
      </Link>
      <Box className="content">
        <Box className="text">
          <Link href={`/`} passHref legacyBehavior>
            <Typography component="a" className="title">
              {title}
            </Typography>
          </Link>
          <Typography className="address">{`JL. Jend Basuki Rahmat 106-128, Surabaya Center, Surabaya, Indonesia, 60271`}</Typography>
        </Box>
        <ButtonForm text={t('route')} />
      </Box>
    </StyledExplore>
  )
}

ExploreCard.defaultProps = {}

export default memo(ExploreCard)
