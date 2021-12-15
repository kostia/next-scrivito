const path = require("path");

module.exports = {
  reactStrictMode: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias.react = path.resolve("./node_modules/react");
    config.resolve.alias["react-dom"] = path.resolve("./node_modules/react-dom");

    // config.resolve.symlinks = true;

    return config;
  },
}
