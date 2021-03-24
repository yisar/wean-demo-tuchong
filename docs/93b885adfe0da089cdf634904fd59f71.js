//app.js
App({
  onLaunch: function () {
    wx.navigateTo({
      url: "/pages/index/index"
    });
  },
  globalData: {
    userInfo: null
  },
  statusBarHeight: 0
});