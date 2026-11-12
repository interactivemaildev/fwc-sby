import React, { memo } from 'react'
import _ from 'lodash'
import Link from 'next/link'
import Image from 'next/image'
import { Box, useScrollTrigger, Slide, Toolbar, Container } from '@mui/material'
import { StyledAppBar } from 'src/styles/header'
import AudioButton from 'src/core/components/header/Audio'
import LanguageSwitch from 'src/core/components/header/Language'

interface Props {
  window?: () => Window
  children?: React.ReactElement
}

const mainMenu = ['u20', 'explore', 'transport', 'news']

const HideOnScroll = React.memo(({ children, window }: Props) => {
  if (!children) return <></>

  // eslint-disable-next-line
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
})

const Header: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <React.Fragment>
      <HideOnScroll {...props}>
        <StyledAppBar elevation={0}>
          <Container maxWidth={false}>
            <Box display="flex" justifyContent="space-between" alignItems="center" width={1}>
              <Link href={`/`} className="logo">
                <Image src={`/images/logo-u20.png`} priority alt="Surabaya" fill sizes="100%" />
              </Link>
              <Toolbar>
                {mainMenu.map((item, i) => (
                  <Link key={i} href={`/${item}`} className={i === 0 ? 'selected' : ''}>
                    <span>{item}</span>
                  </Link>
                ))}
              </Toolbar>
              <Box className="right">
                <AudioButton />
                <LanguageSwitch />
              </Box>
            </Box>
          </Container>
        </StyledAppBar>
      </HideOnScroll>
    </React.Fragment>
  )
}

Header.defaultProps = {}

export default memo(Header)
