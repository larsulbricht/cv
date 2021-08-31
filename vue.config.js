module.exports = {

    publicPath: process.env.NODE_ENV === 'production'
      ? '/cv/'
      : '/'
  ,
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    watchOptions: {
      ignored: /node_modules/,
      aggregateTimeout: 300,
      poll: true,
    },
  },
};