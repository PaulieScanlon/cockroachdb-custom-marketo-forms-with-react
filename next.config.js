const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  // Use the CDN in production and localhost for development.
  // assetPrefix: isProd ? process.env.NEXT_PUBLIC_CDN_URL : undefined
}
