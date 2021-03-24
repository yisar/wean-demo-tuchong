// pages/index/site/site.js
//获取应用实例
var $6$export$app = getApp(); //自定义导航条高度

var $6$export$navigationBarHeight = $6$export$app.statusBarHeight + 44 + 'px'; //数据页数

var $6$export$page = 2;
Page({
  /**
   * 页面的初始数据
   */
  data: {
    //导航条标题
    navigationBarTitle: '',
    navigationBarHeight: $6$export$navigationBarHeight,
    //作品总数
    counts: 0,
    //是否有更多数据标志位
    more: true,
    postList: [],
    //设置作者关注的人的数量
    followNum: Math.floor(100 * Math.random())
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options); //获取页面传递过来的信息

    this.setData({
      siteId: options.site_id,
      siteIcon: options.site_icon.replace("small", "medium"),
      siteName: options.site_name,
      siteFollowers: options.site_followers,
      siteDescription: options.site_description
    });
    var $6$export$that = this;
    wx.request({
      url: '/site/',

      //获取作者所有图文作品数据,
      success(res) {
        console.log(res.data);
        $6$export$that.setData({
          counts: res.data.counts,
          postList: res.data.post_list
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
  onUnload: function () {
    //重置页数标志位
    $6$export$page = 2;
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    var $6$export$that = this;
    wx.request({
      url: 'https://fengcao.tuchong.com/rest/2/sites/' + $6$export$that.data.siteId + '/posts?count=20&page=1&before_timestamp=0',
      //获取作者所有图文作品数据
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值

      },

      success(res) {
        console.log(res.data);
        $6$export$that.setData({
          counts: res.data.counts,
          more: res.data.more,
          postList: res.data.post_list
        }); //停止下拉刷新动画

        wx.stopPullDownRefresh(); //重置页数标志位

        $6$export$page = 2;
      }

    });
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log($6$export$page);
    var $6$export$that = this;
    wx.request({
      url: 'https://fengcao.tuchong.com/rest/2/sites/' + $6$export$that.data.siteId + '/posts?count=20&page=' + $6$export$page + '&before_timestamp=0',
      //获取作者所有图文作品数据
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值

      },

      success(res) {
        var $6$export$arr = $6$export$that.data.postList;
        $6$export$arr = $6$export$arr.concat(res.data.post_list);
        console.log($6$export$arr);
        $6$export$that.setData({
          counts: res.data.counts,
          more: res.data.more,
          postList: $6$export$arr
        });
        $6$export$page++; //停止下拉刷新动画

        wx.stopPullDownRefresh();
      }

    });
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},

  /**
   * 点击图片
   * 查看作品集详情
   */
  viewImagesDetails: function (event) {
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

