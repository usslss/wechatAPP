const app = getApp()
var template = require('../template/template.js');
Page({
  data: {
    latitude: 30.3563882622,
    longitude: 120.1042020321,
    scale:18,
    markers: [{
      id: 1,
      latitude: 30.3563882622,
      longitude: 120.1042020321,
      name: '蓝都科创园'
    }],
    
  },
  onReady: function (e) {
    this.mapCtx = wx.createMapContext('myMap')
  },
  onLoad: function (options) {
    template.tabbar("tabBar", 2, this)//数字i表示第i+1个tabbar
  },
  phoneCall: function () {
    wx.makePhoneCall({
      phoneNumber: '4000570288',
      success: function () {
        console.log("成功拨打电话")
      },
    })
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
  }
})
