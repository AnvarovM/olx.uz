const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  i18n,
  images: {
    domains: [
      "upload.wikimedia.org",
    ],
  },
  experimental: { esmExternals: true },
};

module.exports = nextConfig;
