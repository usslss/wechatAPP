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
    //访问头像列表
    wx.request({
      url: 'https://www.miaocafe.net/xcx/api/avatar.php', //接口地址
      data: {},
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        that.setData({
          VisitBar: res.data
        })
      },
      fail: function (err) {
        console.log(err)
      }
    }),
    //访客头像保存 
    wx.getUserInfo({
      success: function (res) {
        
        wx.request({
          url: 'https://www.miaocafe.net/xcx/api/visit.php',
          data: {
            name: res.userInfo.nickName,
            url: res.userInfo.avatarUrl,
          },
          header: { 'Content-Type': 'application/json' },
        }),

      //浏览,点赞数字获取
          wx.request({
            url: 'https://www.miaocafe.net/xcx/api/like.php', //接口地址
            data: {
              avatarUrl: res.userInfo.avatarUrl, 
            },
            header: {
              'content-type': 'application/json'
            },
            success: function (res) {
              
              that.setData({
                VisitRecent: res.data,
                like: res.data
              })
            },
            fail: function (err) {
              console.log(err)
            }
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
      path: 'pages/card/card'
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


  // 更改点赞状态
  likeBtn: function (e) {
    var info_id = e.currentTarget.dataset.id;
    var that = this;
    console.log(that.data.like[0].likeStatus)

    if ((that.data.like[0].likeStatus == 0)) {

      that.setData({
        ['like[0].likeStatus']: 1,
        ['like[0].likeSum']: parseInt(that.data.like[0].likeSum) + 1
      })
    } else {
      that.setData({
        ['like[0].likeStatus']: 0,
        ['like[0].likeSum']: parseInt(that.data.like[0].likeSum) - 1
      })
    }
    //将更改后的点赞状态传至数据库
    wx.getUserInfo({
      success: function (res) {
        wx.request({
          url: 'https://www.miaocafe.net/xcx/api/like.php',
          data: {
            avatarUrl: res.userInfo.avatarUrl,
            likeStatus: that.data.like[0].likeStatus,
          },
          header: { 'Content-Type': 'application/json' },
            })
          }
    })

  }

})