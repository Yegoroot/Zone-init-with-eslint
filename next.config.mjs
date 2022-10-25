// ----------------------------------------------------------------------

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en', 'de', 'fr'],
  // },
  i18n: {
    localeDetection: false,
    defaultLocale: 'default',
    locales: ['default', 'en', 'ar', 'ru'],
    // locales: ['en', 'ru', 'ar'],
  },
  env: {
    DEV_API: 'http://localhost:8080',
    PRODUCTION_API: 'https://zone-test-api.vercel.app',
    GOOGLE_API: '',
  },
  images: {
    domains: ['flagcdn.com'],
  },
}

export default nextConfig
