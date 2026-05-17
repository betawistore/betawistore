import nextPWA from 'next-pwa';

const withPWA = nextPWA({
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
});

const nextConfig = withPWA({
  reactStrictMode: true,
  output: 'standalone'
});

export default nextConfig;

