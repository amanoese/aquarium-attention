module.exports = {
  configureWebpack: {
    // Configuration applied to all builds
  },
  pluginOptions: {
    electronBuilder: {
      mainProcessArgs: ['--enable-transparent-visuals','--disable-gpu']
    }
  }
}
