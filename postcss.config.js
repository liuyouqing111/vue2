// px单位自动转为rem配置
module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 100,
      propList: ['*']
    }
  }
}
