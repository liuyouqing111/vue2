const path = require('path')
const resolve = dir => path.join(__dirname, dir)
const CompressionWebpackPlugin = require('compression-webpack-plugin')

const cdn = { js: ['https://unpkg.com/vue@2.6.11/dist/vue.min.js'], css: [] }

module.exports = {
  // 是否使用包含运行时编译器的Vue内核版本
  runtimeCompiler: true,
  // 在vue.config.js 中使用 chainWebpack 方法
  chainWebpack: config => {
    config.resolve.alias.set('@', resolve('src'))
    config.set('externals', {
      vue: 'Vue'
    })
    config.plugin('html').tap(args => {
      args[0].title = '1222'
      args[0].cdn = cdn
      return args
    })
  },
  // devServer: {
  //   open: true,
  //   host: '0.0.0.0',
  //   port: 80,
  //   hotOnly: false,
  //   https: false,
  //   proxy: { // 配置跨域
  //     '/api': {
  //       target: '', // 源地址
  //       pathRewrite: { // 如果接口本身没有/api需要通过pathRewrite来重写了地址,这里把/api转成‘ '
  //         '^/api': ''
  //       },
  //       changeOrigin: true, // 改变源
  //       ws: true, // 是否代理websockets
  //       secure: false
  //     }
  //   },
  //   disableHostCheck: true
  // },
  productionSourceMap: false,
  publicPath: '/',
  css: {
    loaderOptions: {
      scss: {
        prependData: '@import "@/style/default.scss";'
      }
    }

  },
  configureWebpack: config => {
    // 生产环境下生效
    if (process.env.NODE_ENV === 'production') {
      // 配置删除 console.log
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
      // 开启http压缩
      config.plugins.push(
        new CompressionWebpackPlugin({
          test: /\.js$|\.html$|\.css$/,
          threshold: 4096 // 超过4kb压缩
        })
      )
    }
  }

}
