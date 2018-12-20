//加载自定义tabBar
const app = getApp()
var template = require('../template/template.js');
Page({
  data: {
    showView: true,
    list: [
      {
        img: "../../images/card.jpg",
        name: "汪小勇",
        phone: "13634169280",
        job: "咖啡事业部总监",
        co: "杭州喵右卫门餐饮管理连锁有限公司"
      }
    ]
  },
  onLoad: function (options) {
    template.tabbar("tabBar", 0, this)//数字i表示第i+1个tabbar
    // 生命周期函数--监听页面加载    
    showView: (options.showView == "true" ? true : false)
    var that = this
    wx.request({
      url: 'http://www.miaocafe.net/xcx/avatar.php', //仅为示例，并非真实的接口地址
      data: {},
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {

        console.log(res.data)
        that.setData({
          VisitBar: res.data
        })
      },
      fail: function (err) {
        console.log(err)
      }
    }),
      /**
      * 访客头像保存
      */
      wx.getUserInfo({
        success: function (res) {
          wx.request({
            url: 'http://www.miaocafe.net/xcx/visit.php',
            data: {
              name: res.userInfo.nickName,
              url: res.userInfo.avatarUrl,
            },
            header: { 'Content-Type': 'application/json' },
          })
        }
      })
  }
  , onChangeShowState: function () {
    var that = this;
    that.setData({
      showView: (!that.data.showView)
    })
  },
  onShareAppMessage() {
    return {
      title: '您好,我是喵右卫门咖饮 咖啡事业部总监,汪小勇',
      path: 'page/component/pages/view/view'
    }
  },
  phoneCall: function (e) {
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.dataset.replyPhone,
      success: function () {
        console.log("成功拨打电话")
      },
    })
  },
  savePhone: function () {
    wx.addPhoneContact({
      firstName: "汪小勇",
      mobilePhoneNumber: "13634169280",
      organization: "杭州喵右卫门餐饮管理连锁有限公司",
      title: "咖啡事业部总监",
    })
  },

})


