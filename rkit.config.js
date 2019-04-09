const path = require('path');
const proEnv = require('./build/prod.env');
const JsonAssetHtmlPlugin = require('./build/plugin/json-asset-html-webpack-plugin');

module.exports = {
  lintOnSave: process.env.NODE_ENV !== 'production',
  assetsDir: proEnv.OUT_PATH,
  publicPath: process.env.NODE_ENV === 'production' ? `//static.xxx.com/tfstatic/${proEnv.PROJECT_NAME}` : '/',
  filenameHashing: true,
  productionSourceMap: false,
  pages: {
    app: {
      entry: './src/main.ts',
      template: 'index.html',
      filename: 'index.html',
      title: 'h5模版',
      chunks: ['chunk-vendors', 'chunk-common', 'app']
    }
  },
  devServer: {
    host: '0.0.0.0',
    hot: true,
    disableHostCheck: true,
    // proxy: {
    //     '/api': {
    //         target: "http://10.0.0.1:19000",
    //         ws: true,
    //         changeOrigin: true
    //     }
    // }
    before: app => {
        app.all(/api/, function(req, res) {
            const apiFile = path.join(__dirname, req.path + '.json')
            return res.sendFile(apiFile)
        });
    }
  },
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
        config
            .plugin('html')
            .use(JsonAssetHtmlPlugin, [{
                path: config.output.baseUrl,
                subDir: proEnv.OUT_PATH
            }])
    }
 }
}