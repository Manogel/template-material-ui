const { override, addWebpackPlugin, addBabelPlugin } = require('customize-cra');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const isDevelopment = process.env.NODE_ENV === 'development';

module.exports = override(
  // isDevelopment && addWebpackPlugin(new ReactRefreshPlugin()),
  addBabelPlugin([
    'babel-plugin-root-import',
    {
      paths: [
        {
          rootPathSuffix: './src/layouts',
          rootPathPrefix: '@layouts/',
        },
        {
          rootPathSuffix: './src/pages',
          rootPathPrefix: '@pages/',
        },
        {
          rootPathSuffix: './src/hooks',
          rootPathPrefix: '@hooks/',
        },
        {
          rootPathSuffix: './src/styles',
          rootPathPrefix: '@styles/',
        },
        {
          rootPathSuffix: './src/assets',
          rootPathPrefix: '@assets/',
        },
        {
          rootPathSuffix: './src/components',
          rootPathPrefix: '@components/',
        },
        {
          rootPathSuffix: './src/validations',
          rootPathPrefix: '@validations/',
        },
        {
          rootPathSuffix: './src/utils',
          rootPathPrefix: '@utils/',
        },
        {
          rootPathSuffix: './src/services',
          rootPathPrefix: '@services/',
        },
      ],
    },
  ]),
);
