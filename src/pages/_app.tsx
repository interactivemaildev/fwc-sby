import * as React from 'react'
import { AppProps as NextAppProps } from '@blitzjs/next'
import { withBlitz } from 'src/blitz-client'
import { useRouter } from 'next/router'
import { NextIntlProvider } from 'next-intl'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import theme from 'src/styles/theme'
import createEmotionCache from 'src/styles/createEmotionCache'

const clientSideEmotionCache = createEmotionCache()

interface AppProps extends NextAppProps {
  emotionCache?: EmotionCache
  pageProps: any
}

function App(props: AppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  const router = useRouter()
  const getLayout = Component.getLayout || ((page) => page)
  const [pageLoading, setPageLoading] = React.useState(false)
  React.useEffect(() => {
    const handleStart = () => setPageLoading(true)
    const handleComplete = () => setPageLoading(false)
    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleComplete)
    router.events.on('routeChangeError', handleComplete)
  }, [router])
  return (
    <CacheProvider value={emotionCache}>
      <NextIntlProvider messages={pageProps.messages}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {getLayout(<Component {...pageProps} />)}
        </ThemeProvider>
      </NextIntlProvider>
    </CacheProvider>
  )
}

export default withBlitz(App)
