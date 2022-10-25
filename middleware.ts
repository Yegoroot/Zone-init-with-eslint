/* eslint-disable consistent-return */
// middleware.ts

import { NextRequest, NextResponse } from 'next/server'

const PUBLIC_FILE = /\.(.*)$/

export async function middleware(req: NextRequest) {
  // console.log('middleware is working')
  if (
    req.nextUrl.pathname.startsWith('/_next')
    || req.nextUrl.pathname.includes('/api/')
    || PUBLIC_FILE.test(req.nextUrl.pathname)
  ) {
    return
  }

  if (req.nextUrl.locale === 'default') {
    console.log('req.nextUrl.locale')
    // @ts-ignore
    return NextResponse.redirect(new URL(`/ru${req.nextUrl.pathname}`, req.url))
  }
}
