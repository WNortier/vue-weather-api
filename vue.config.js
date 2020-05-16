module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/vue-weather-api/'
      : '/'
  }

module.exports = {
    devServer: {
      proxy: {
        '^/conn': {
          target: 'http://localhost:3000',
          ws: true,
          changeOrigin: true,
          pathRewrite: {
                      '^/conn': ''
                    }
        }
      }
    }
  }

  // axios.post("/conn/back-endRouteGoesHere"