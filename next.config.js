// @type {import('next').NextConfig}
module.exports = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'k.kakaocdn.net',
      },
      {
        protocol: 'https',
        hostname: 'k.kakaocdn.net',
      },
    ],
  },
};

// const nextConfig = {
//   experimental: {
//     appDir: true,
//   },
//   reactStrictMode: true,
// };

// module.exports = nextConfig;
