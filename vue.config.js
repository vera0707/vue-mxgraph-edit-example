const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

const venderList = [
  'js/Init.js',
  'deflate/pako.min.js',
  'deflate/base64.js',
  'jscolor/jscolor.js',
  'sanitizer/sanitizer.min.js',
  'mxgraph/javascript/mxClient.min.js',
  'js/EditorUi.js',
  'js/Editor.js',
  'config/neList.js',
  'js/Sidebar.js',
  'js/Graph.js',
  'js/Format.js',
  'js/Shapes.js',
  'js/Actions.js',
  'js/Menus.js',
  'js/Toolbar.js',
  'js/Dialogs.js',
];

const assetHtmlList = venderList.map((name) => ({
  filepath: require.resolve(name.startsWith('mxgraph') ? name : `./src/core/graphEdit/${name}`),
  name: '[name]_[hash]',
}));

module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  lintOnSave: true,
  configureWebpack: {
    plugins: [
      new AddAssetHtmlPlugin(assetHtmlList),
    ],
  },
  devServer: {
    open: true,
    proxy: {
      '/txo': {
        target: 'http://10.1.193.28:10012/',
      },
    },
  },
};
