import React, { memo } from 'react'
import { Box } from '@mui/material'
import { useTranslations } from 'next-intl'
import { StyledLayout } from 'src/styles/app'
import Layout from 'src/core/components/Layout'
import CardSlider from 'src/core/components/sliders/Card'
import Title from 'src/core/components/Title'

interface Props {
  data: any
  titleLocale: string
  color?: 'secondary' | 'black'
}

const HomeNews: React.FunctionComponent<Props> = ({ data, titleLocale, color }: Props) => {
  const t = useTranslations('Locale')
  return (
    <StyledLayout className={`${color || 'secondary'} with-margin`}>
      <Layout>
        <Box>
          <Title text={t(titleLocale)} color="white" />
          <CardSlider data={data} type="news" withDots={false} color={color || 'secondary'} />
        </Box>
      </Layout>
    </StyledLayout>
  )
}

HomeNews.defaultProps = {
  color: 'secondary',
}

export default memo(HomeNews)
