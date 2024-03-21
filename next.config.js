// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     appDir: true,
//   },
  
// }

// module.exports = nextConfig



// next.config.js
// module.exports = {
//   webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
//     // Modify the Webpack config here
//     return config;
//   },
//   experimental: {
//     appDir: true,
//   },
// };


// next.config.js
module.exports = {
  experimental: {
    appDir: true
  },
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.mp4$/,
      use: 'file-loader', // or 'url-loader'
    });
    return config;
  },
};