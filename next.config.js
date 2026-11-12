// @ts-check
const { withBlitz } = require('@blitzjs/next')

/**
 * @type {import('@blitzjs/next').BlitzConfig}
 **/
const config = {
  i18n: {
    locales: ['en', 'id'],
    defaultLocale: 'id',
    localeDetection: false
  },
  async redirects() {
    return [
      {
        source: '/u20',
        destination: '/u20/tournament',
        permanent: false,
      },
    ]
  },
}

module.exports = withBlitz(config)
