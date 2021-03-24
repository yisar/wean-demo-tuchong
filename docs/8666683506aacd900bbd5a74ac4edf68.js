// pages/hot/hot.js
//获取应用实例
var $6$export$app = getApp(); //自定义导航条高度

var $6$export$navigationBarHeight = $6$export$app.statusBarHeight + 44 + 'px'; //定义获取的每一组数据的最后一个post_id

Page({
  /**
   * 页面的初始数据
   */
  data: {
    //导航条标题
    navigationBarTitle: '图虫',
    navigationBarHeight: $6$export$navigationBarHeight,
    //是否有更多数据标志位
    more: true,
    //获取的数据
    feedList: null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var $6$export$that = this;
    wx.request({
      url: 'https://api.tuchong.com/feed-app',

      //图虫的推荐 接口地址
      success(res) {
        //赋值给post_id变量
        $6$export$that.setData({
          counts: res.data.counts,
          more: res.data.more,
          feedList: res.data.feedList
        }); //停止下拉刷新动画

        wx.stopPullDownRefresh();
      }

    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    //重置页数标志位
    this.onLoad();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},

  /**
   * 点击图片
   * 查看图片细节
   */
  viewImageDetails: function (event) {
    console.log(event.currentTarget.dataset.src);
    console.log(event.currentTarget.dataset.images); //对传递过来的images对象进行提取

    var $6$export$images = event.currentTarget.dataset.images;
    var $6$export$imagesUrls = [];

    for (var $6$export$i = 0; $6$export$i < $6$export$images.length; $6$export$i++) {
      $6$export$imagesUrls.push("https://photo.tuchong.com/" + $6$export$images[$6$export$i].user_id + "/f/" + $6$export$images[$6$export$i].img_id + ".jpg");
    }

    wx.previewImage({
      current: event.currentTarget.dataset.src,
      // 当前显示图片的http链接
      urls: $6$export$imagesUrls // 需要预览的图片http链接列表

    });
  },

  /**
   * 点击作者头像
   * 查看作者详情
   */
  viewSiteDetails: function (event) {
    var $6$export$siteId = event.currentTarget.dataset.siteId;
    var $6$export$siteIcon = event.currentTarget.dataset.siteIcon;
    var $6$export$siteName = event.currentTarget.dataset.siteName;
    var $6$export$siteDescription = event.currentTarget.dataset.siteDescription;
    var $6$export$siteFollowers = event.currentTarget.dataset.siteFollowers;
    console.log($6$export$siteFollowers); //打开新页面

    wx.navigateTo({
      url: 'site/site?site_id=' + $6$export$siteId + '&site_followers=' + $6$export$siteFollowers + '&site_description=' + $6$export$siteDescription + '&site_name=' + $6$export$siteName + '&site_icon=' + $6$export$siteIcon
    });
  }
});

var $14$export$app = getApp();
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
    statusBarHeight: $14$export$app.statusBarHeight + 'px',
    navigationBarHeight: $14$export$app.statusBarHeight + 44 + 'px'
  },
  methods: {
    backHome: function () {
      wx.reLaunch({
        url: '/pages/index/index'
      });
    },
    backTo: function () {
      wx.navigateTo({
        url: "/pages/index/index"
      });
    }
  }
}, "nav-bar");

