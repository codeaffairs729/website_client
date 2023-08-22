/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  images: {
    domains: [
      'localhost',
      'api.codegaragetech.com',
      'www.api.codegaragetech.com',
    ],
  },
}

module.exports = nextConfig

// Injected content via Sentry wizard below

// const { withSentryConfig } = require('@sentry/nextjs')

// module.exports = withSentryConfig(
//   module.exports,
//   {
//     silent: true,

//     org: 'code-garage-tech',
//     project: 'javascript-nextjs',
//   },
//   {
//     widenClientFileUpload: true,

//     transpileClientSDK: true,

//     tunnelRoute: '/monitoring',

//     hideSourceMaps: true,

//     disableLogger: true,
//   }
// )
