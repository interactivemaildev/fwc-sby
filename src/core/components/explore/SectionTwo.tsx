import React, { memo } from 'react'
import Image from 'next/image'
import { Box, Typography, Grid } from '@mui/material'
import { useTranslations } from 'next-intl'
import { StyledLayout } from 'src/styles/app'
import { StyledTodo } from 'src/styles/explore'
import Layout from 'src/core/components/Layout'
import ButtonForm from 'src/core/components/Button'

interface Props {}

const SectionTwo: React.FunctionComponent<Props> = () => {
  const t = useTranslations('Locale')
  return (
    <StyledLayout className="todo with-margin">
      <Layout>
        <StyledTodo>
          <Grid container spacing={4}>
            <Grid item sm={8}>
              <Box className="img">
                <Image src={'/images/things_to_do.png'} priority alt="Surabaya" fill sizes="100%" />
              </Box>
            </Grid>
            <Grid item sm={4}>
              <Box className="content">
                <Typography>{t('things-to-do')}</Typography>
                <ButtonForm
                  text={t('see')}
                  variant="outlined"
                  color="secondary"
                  addClass="info"
                  href="/explore/todo"
                />
              </Box>
            </Grid>
          </Grid>
        </StyledTodo>
      </Layout>
    </StyledLayout>
  )
}

SectionTwo.defaultProps = {}

export default memo(SectionTwo)
