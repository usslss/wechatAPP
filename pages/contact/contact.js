//index.js
//获取应用实例
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    inputVal: ""
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  butsubmit: function (e) {
    if (this.data.inputVal == '') {
      wx.showToast({
        title: '请留言',
        icon: 'loading',
      })
      return false;}
    console.log(this.data.inputVal)
  },

})
