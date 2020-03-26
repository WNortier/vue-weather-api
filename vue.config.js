module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/vue-weather-api/'
      : '/'
  }

  // module.exports = {
  //   css: {
  //     loaderOptions: {
  //       sass: {
  //         prependData: `
  //           @import "~@/scss/_typo.scss";
  //         `
  //       }
  //     }
  //   }
  // };