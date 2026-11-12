import React, { memo } from 'react'
import { StyledLayout } from 'src/styles/app'
import Layout from 'src/core/components/Layout'
import ExploreSlider from 'src/core/components/sliders/Explore'
import TypographyComponent from 'src/core/components/Typography'

interface Props {}

const SectionOne: React.FunctionComponent<Props> = () => {
  return (
    <StyledLayout className="black with-margin">
      <Layout>
        <ExploreSlider />
      </Layout>
      <TypographyComponent text={'Choose an experience and make it yours'} />
    </StyledLayout>
  )
}

SectionOne.defaultProps = {}

export default memo(SectionOne)
