Page({
  data: {
    showView: true,
    list: [
      {
        img: "../../images/7x7.jpg",
        name: "Red",
        phone: "13604555555",
        job: "平面模特",
        co: "杭州凌睿酒店管理有限公司"
      }
    ]
  },
  onLoad: function (options) {
    // 生命周期函数--监听页面加载
    showView: (options.showView == "true" ? true : false)
  }
  , onChangeShowState: function () {
    var that = this;
    that.setData({
      showView: (!that.data.showView)
    })
  },
  onShareAppMessage() {
    return {
      title: '这里标题暂时不知道该叫啥',
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
      firstName: "李白",
      mobilePhoneNumber: "13604599228",
      organization: "a公司",
      title: "平面模特",
    })
  },

})


