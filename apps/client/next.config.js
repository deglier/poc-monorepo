const withTM = require('next-transpile-modules')([
  '@ui/react',
  '@ui/web',
  '@ui/styles',
])

module.exports = withTM({
  reactStrictMode: true,
})
