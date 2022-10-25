import { ReactElement } from 'react'

import Layout from '../src/layouts'
import { Page } from '../src/components'
import { DownloadAppCareer } from '../src/sections/download-app'
import {
  CareerLandingHero,
} from '../src/sections/@career'

// ----------------------------------------------------------------------

export default function MainPage() {
  return (
    <Page title="Learn and practice arabic language">
      <CareerLandingHero />
      {/* <DownloadAppCareer /> */}
    </Page>
  )
}

// ----------------------------------------------------------------------
// FIXME here footer and header
MainPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout transparentHeader simpleFooter simpleHeader>{page}</Layout>
}
