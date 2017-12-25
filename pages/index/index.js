//index.js
var countDownUtl = require("../../utils/countDownUtil.js")
Page({
  data: {
    sec: ""
  },
  onLoad: function () {
    var that = this
    var totalMsec = 50000000 //倒计时的总毫秒数
    countDownUtl.countDown(totalMsec, 1000, function (res){
        that.setData({
          sec:res
        })
    })
  }
})
