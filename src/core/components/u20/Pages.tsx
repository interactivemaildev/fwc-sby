import React, { memo } from 'react'
import { Box } from '@mui/material'
import { useRouter } from 'next/router'
import { useTranslations } from 'next-intl'
import { StyledLayout } from 'src/styles/app'
import Layout from 'src/core/components/Layout'
import ButtonForm from 'src/core/components/Button'

interface Props {}

const pages = [
  { key: 'tournament-result', href: '/u20/tournament' },
  { key: 'team', href: '/u20/teams' },
  { key: 'stadium', href: '/u20/stadiums' },
]

const PagesTournament: React.FunctionComponent<Props> = () => {
  const t = useTranslations('Locale')
  const router = useRouter()
  const currentUrl = React.useMemo(() => {
    const slash = router.asPath.split('/')
    const qMark = slash[2]?.split('?')
    const parent = qMark ? qMark[0] : ''
    return parent || 'tournament'
  }, [router])
  return (
    <StyledLayout className="default with-margin">
      <Layout>
        <Box display="flex">
          {pages.map((item, i) => {
            const slash = item.href.split('/')
            const slug = slash.slice(-1).pop()
            return (
              <Box key={i} marginLeft={i !== 0 ? 4 : 0}>
                <ButtonForm
                  text={i !== 0 ? t(item.key, { count: 1 }) : t(item.key)}
                  color="primary"
                  addClass={slug === currentUrl ? 'selected' : ''}
                  href={item.href}
                />
              </Box>
            )
          })}
        </Box>
      </Layout>
    </StyledLayout>
  )
}

PagesTournament.defaultProps = {}

export default memo(PagesTournament)
