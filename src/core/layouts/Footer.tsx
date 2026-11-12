import React, { memo } from 'react'
import { Box, Divider, IconButton, Typography } from '@mui/material'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import { StyledFooter } from 'src/styles/app'
import Layout from 'src/core/components/Layout'
import Link from 'next/link'

interface Props {}

const Footer: React.FunctionComponent<Props> = () => {
  const t = useTranslations('Locale')
  return (
    <StyledFooter paddingY={4}>
      <Layout>
        <>
          <Box display="flex" justifyContent="space-between" alignItems="flex-end">
            <Box className="logo">
              <Image src={`/images/logo-u20-white.png`} priority alt="Surabaya" fill sizes="100%" />
            </Box>
            <Box>
              <Typography paddingLeft={1}>{t('follow')}</Typography>
              <Box display="flex" marginTop={1}>
                <Link href="/" target="_blank" legacyBehavior passHref>
                  <IconButton component="a" disableRipple>
                    <FacebookIcon />
                  </IconButton>
                </Link>
                <Link href="/" target="_blank" legacyBehavior passHref>
                  <IconButton component="a" disableRipple>
                    <TwitterIcon />
                  </IconButton>
                </Link>
                <Link href="/" target="_blank" legacyBehavior passHref>
                  <IconButton component="a" disableRipple>
                    <YouTubeIcon />
                  </IconButton>
                </Link>
              </Box>
            </Box>
          </Box>
          <Divider />
          <Typography className="copy">
            {`Copyright © 2023 ${t('copy')}. All rights reserved.`}
          </Typography>
        </>
      </Layout>
    </StyledFooter>
  )
}

Footer.defaultProps = {}

export default memo(Footer)
