const path = require('path')
const autoprefixer = require('autoprefixer')
const pxtorem = require('postcss-pxtorem')
module.exports = {
  pluginOptions: {
    //全局stylus
    'style-resources-loader': {
      preProcessor: 'stylus',
      patterns: [
          path.resolve(__dirname,'./src/commons/styles/minxi.styl')
      ]
    }
  },
  devServer: {
    /* 自动打开浏览器 */
    open: false,
    /* 设置为0.0.0.0则所有的地址均能访问 */
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    /* 使用代理 */
    proxy: {
        '/api': {
            target: 'http://m.gjw.com', //后端地址
            secure: false,  // 如果是https接口，需要配置这个参数
            ws: true,//是否代理websockets
            changeOrigin: true,
            pathRewrite: {
                '^/api': '/'
            }
        }
    }
  },
  css:{
    loaderOptions:{
      postcss:{
        plugins:[
          // 下载amfe-flexible 设置rem
          autoprefixer(),
          pxtorem({
            //下载postcss-pxtorem 将css转换为rem
            rootValue:37.5,
            propList:['*']
          })
        ]
      }
    }
  }
}
