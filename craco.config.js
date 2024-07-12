const path = require('path');

module.exports = {
  webpack: {
    alias: {},
    plugins: [],
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        "https": require.resolve("https-browserify"),
        "http": require.resolve("stream-http"),
        "url": require.resolve("url/"),
        "buffer": require.resolve("buffer/")
      };
      return webpackConfig;
    },
  },
};
