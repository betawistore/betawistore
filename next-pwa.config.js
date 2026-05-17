module.exports = {
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/.*$/,
      handler: 'NetworkFirst',
      options: {
        cacheName: 'external',
        expiration: {
          maxEntries: 200,
          maxAgeSeconds: 60 * 60 * 24 * 7
        }
      }
    }
  ]
};

