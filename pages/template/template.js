//初始化数据
function tabbarinit() {
  return [
    {
      "current": 0,
      "pagePath": "/pages/card/card",
      "iconPath": "/images/tabBar/card.png",
      "selectedIconPath": "/images/tabBar/cardHL.png",
      "text": "名片"
    },
    {
      "current": 0,
      "pagePath": "/pages/index/index",
      "iconPath": "/images/tabBar/website.png",
      "selectedIconPath": "/images/tabBar/websiteHL.png",
      "text": "官网"

    },
    {
      "current": 0,
      "pagePath": "/pages/contact/contact",
      "iconPath": "/images/tabBar/contact.png",
      "selectedIconPath": "/images/tabBar/contactHL.png",
      "text": "联系"
    }
  ]

}
//tabbar 主入口
function tabbarmain(bindName = "tabdata", id, target) {
  var that = target;
  var bindData = {};
  var otabbar = tabbarinit();
  otabbar[id]['iconPath'] = otabbar[id]['selectedIconPath']//换当前的icon
  otabbar[id]['current'] = 1;
  bindData[bindName] = otabbar
  that.setData({ bindData });
}

module.exports = {
  tabbar: tabbarmain
}
