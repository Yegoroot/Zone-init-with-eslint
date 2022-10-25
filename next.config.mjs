// ----------------------------------------------------------------------

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en', 'de', 'fr'],
  // },
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
