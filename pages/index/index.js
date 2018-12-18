//index.js
//加载自定义tabBar
const app = getApp()
var template = require('../template/template.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nameVal:"",
    phoneVal:""
  },
  //获得姓名
  nameTyping: function (e) {
    this.setData({
      nameVal: e.detail.value
    });
  },
  //获得电话
  phoneTyping: function (e) {
    this.setData({
      phoneVal: e.detail.value
    });
  },
  btnSubmit: function (e) {
    //姓名判定
    if (this.data.nameVal == '') {
      wx.showToast({
        title: '请输入姓名',
        image: '/images/wrong.png'
      })
      return false;
    }
    //电话判定
    if (this.data.phoneVal == '') {
      wx.showToast({
        title: '请输入手机号',
        image: '/images/wrong.png'
      })
      return false;
    }
    var checkPhone = /^1\d{10}$/;
    if (!checkPhone.test(this.data.phoneVal)) {
      wx.showToast({
        title: '手机号不合法',
        image: '/images/wrong.png'
      })
      return false;
    }    
    //后台传值
    wx.request({
      url: 'http://www.iquhou.com/php/api.php',
      data: {
        username:this.data.nameVal,
        userphone:this.data.phoneVal,
      },
      header: { 'Content-Type': 'application/json' },
      success: function (res) {
        console.log(res.data)
        wx.showToast({
          title: '已提交',
          icon: 'success',
          duration: 2000
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    template.tabbar("tabBar", 1, this)//数字i表示第i+1个tabbar
  },
  


  
})
