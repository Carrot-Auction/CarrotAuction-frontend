const path = require("path");
const webpack = require("webpack");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

const isDevelopment = process.env.NODE_ENV !== "production";

module.exports = {
  core: {
    builder: "webpack5",
  },
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async config => {
    config.resolve.modules = [path.join(__dirname, "../src"), "node_modules"];
    config.plugins = [
      isDevelopment && new ReactRefreshWebpackPlugin(),
      new webpack.DefinePlugin({ "process.env.NODE_ENV": `"development"` }),
      ...config.plugins,
    ].filter(Boolean);
    config.resolve.alias = {
      ...config.resolve.alias,
      "@emotion/core": "@emotion/react",
      "emotion-theming": "@emotion/react",
    };
    return config;
  },
};
