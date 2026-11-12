import React, { memo } from 'react'
import { Typography, IconButton } from '@mui/material'
import Link from 'next/link'
import LanguageIcon from '@mui/icons-material/Language'
import { useRouter } from 'next/router'
import { StyledHeaderButton } from 'src/styles/header'

interface Props {}

const LanguageSwitch: React.FunctionComponent<Props> = () => {
  const { locale, locales, route, asPath } = useRouter()
  const otherLocale = React.useMemo(
    () => locales?.find((item) => item !== locale),
    [locales, locale]
  )
  const check = React.useMemo(() => locale === 'id', [locale])
  return (
    <StyledHeaderButton className={`language ${check ? 'check' : ''}`}>
      <Link href={route} as={asPath} locale={otherLocale} legacyBehavior passHref>
        <Typography component="a" className="first">
          Ind
        </Typography>
      </Link>
      <Link href={route} as={asPath} locale={otherLocale} legacyBehavior passHref>
        <Typography component="a" className="last">
          Eng
        </Typography>
      </Link>
      <Link href={route} as={asPath} locale={otherLocale} legacyBehavior passHref>
        <IconButton component="a" className="language-button">
          <LanguageIcon />
        </IconButton>
      </Link>
    </StyledHeaderButton>
  )
}

LanguageSwitch.defaultProps = {}

export default memo(LanguageSwitch)
