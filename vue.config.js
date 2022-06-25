const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir) // path.join(__dirname)设置绝对路径
}

const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'UDID | Unified Decentralization Identity'
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      //引入全局less文件
      patterns: [path.resolve(__dirname, './src/assets/css/global.less')]
    }
  },
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [require('tailwindcss'), require('autoprefixer')]
      }
    }
  },
  devServer: {
    inline: true
  },
  chainWebpack: (config) => {
    config.resolve.alias.set('@', resolve('./src'))
    // set第一个参数：设置的别名，第二个参数：设置的路径
  }
}
