// pages/fenlei/chayin.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    zhenzhunaichaURL:"../../../../images/zhenzhunaicha.jpg",
    baixinagguonaichaURL:"../../../../images/baixiangguonaicha.jpg",
    sum_price:app.globalData.global_sum_price
  },

  onChange:function(e){
    let sum_price = app.globalData.global_sum_price
    if (e.target.id=="zhenzhu") {
       this.setData({
         sum_price:e.detail*800+sum_price
       })
      app.globalData.global_sum_price=e.detail*800+sum_price
    }
    else{
      app.globalData.global_sum_price=e.detail*1000+sum_price
       this.setData({
         sum_price:app.globalData.global_sum_price
       })
    }
    console.log(app.globalData.global_sum_price)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})