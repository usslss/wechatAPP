Page({
  onShareAppMessage() {
    return {
      title: '新增联系人',
      path: 'page/API/pages/add-contact/add-contacts'
    }
  },

  submit(e) {
    const formData = e.detail.value
    wx.addPhoneContact({
      firstName: this.data.firstName,
      ...formData,
      success() {
        wx.showToast({
          title: '联系人创建成功'
        })
      },
      fail() {
        wx.showToast({
          title: '联系人创建失败'
        })
      }
    })
  }
})
