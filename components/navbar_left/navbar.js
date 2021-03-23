const app = getApp()

Component({

  properties: {
    text: {
      type: String,
      value: ''
    },
    back: {
      type: Boolean,
      value: false
    },
    home: {
      type: Boolean,
      value: false
    }
  },

  data: {
    statusBarHeight: app.statusBarHeight + 'px',
    navigationBarHeight: (app.statusBarHeight + 44) + 'px'
  },

  methods: {
    backHome: function () {
      wx.reLaunch({
        url: '/pages/index/index',
      })
    },
    backTo: function () {
      wx.navigateTo({
        url: "/pages/index/index"
      });
    }
  }
})
