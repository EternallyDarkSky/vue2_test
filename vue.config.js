const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    lintOnSave: false, // 关闭语法检查
    pages: {
        index: {
            entry: 'src/enter.js', // page 的入口 ,原main.js
        }
    },
    configureWebpack: {
        resolve: {
            extensions: ['.js', '.vue', '.json'],
          alias: {
            'assets': '@/assets',
            'common': '@/common',
            'components': '@/components',
            'network': '@/network',
            'views': '@/views',
            'pages':'@/pages'
          }
        }
      },



    //开启代理服务器(方式一)
    // devServer:{
    //     proxy:'http://localhost:5000'  , //转发的目标
    // }
    //开启代理服务器(方式二)
    devServer: {
        //配置主机名
        host: "localhost",
        // 配置端口号
        port: "8080",
        proxy: {
            '/cros': {
                target: 'http://localhost:5000',
                changeOrigin: true,
                pathRewrite:{
                    '^/cros':"",
                }
            },
            '/car': {
                target: "http://localhost:5001"
            }
        }
    }
})
