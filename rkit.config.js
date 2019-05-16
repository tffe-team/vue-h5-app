const path = require('path')
const proEnv = require('./build/prod.env')

function resolve(dir) {
    return path.join(__dirname, '.', dir)
}
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
            title: 'h5模版'
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
        config.module
            .rule('svg-sprite-loader')
            .test(/\.svg$/)
            .include
            .add(resolve('src/assets/svg')) //处理svg目录
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
    }
}