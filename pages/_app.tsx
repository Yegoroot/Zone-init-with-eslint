// ----------------------------------------------------------------------
// IMPORT CSS STYLES
// ----------------------------------------------------------------------

// scroll bar
// eslint-disable-next-line import/no-extraneous-dependencies
import 'simplebar/src/simplebar.css'

// lightbox
import 'react-image-lightbox/style.css'

// slick-carousel
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// lazy image
import 'react-lazy-load-image-component/src/effects/blur.css'

// ----------------------------------------------------------------------

import { ReactElement, ReactNode } from 'react'
// next
import Head from 'next/head'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { CacheProvider, EmotionCache } from '@emotion/react'
// @mui
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
// contexts
import { SettingsProvider } from '../src/contexts/SettingsContext'
// theme
import ThemeProvider from '../src/theme'
import GlobalStyles from '../src/theme/globalStyles'
// utils
import axios from '../src/utils/axios'
import createEmotionCache from '../src/utils/createEmotionCache'
// components
import Settings from '../src/components/settings'
import RtlLayout from '../src/components/RtlLayout'
import ProgressBar from '../src/components/ProgressBar'
import ThemeColorPresets from '../src/components/ThemeColorPresets'
import MotionLazyContainer from '../src/components/animate/MotionLazyContainer'

// ----------------------------------------------------------------------

const clientSideEmotionCache = createEmotionCache()

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  Component: NextPageWithLayout;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props

  const getLayout = Component.getLayout ?? ((page) => page)

  console.info('[INFO] baseAPI', axios.defaults.baseURL)

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <SettingsProvider>
          <CacheProvider value={emotionCache}>
            <ThemeProvider>
              <ThemeColorPresets>
                <MotionLazyContainer>
                  <RtlLayout>
                    {/* <Settings /> */}
                    <GlobalStyles />
                    <ProgressBar />
                    {getLayout(<Component {...pageProps} />)}
                  </RtlLayout>
                </MotionLazyContainer>
              </ThemeColorPresets>
            </ThemeProvider>
          </CacheProvider>
        </SettingsProvider>
      </LocalizationProvider>
    </>
  )
}
