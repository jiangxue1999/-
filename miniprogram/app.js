

App({
  initUiGlobal() {
    return new Promise(resolve => {
      wx.getSystemInfo({
        success: e => {
          this.globalData.StatusBar = e.statusBarHeight
          this.globalData.screenHeight = e.screenHeight
          const capsule = wx.getMenuButtonBoundingClientRect()
          if (capsule) {
            this.globalData.Custom = capsule
            this.globalData.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight
          } else {
            this.globalData.CustomBar = e.statusBarHeight + 50
          }
        },
        complete: resolve
      })
    })
  },
  initEnv() {
    wx.cloud.init({traceUser: true })
  },
  async onLaunch() {
    this.initEnv()
    await this.initUiGlobal()

  },
  globalData: {
    StatusBar: null,
    Custom: null,
    CustomBar: null,
    screenHeight: null,
    env: 'keshe-0ga41i6vf89ef69d'
  },
  store: {
    encryption: ''
  }
})
