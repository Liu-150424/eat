// pages/appointment/appointment.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    icon: {
      normal: '//img.yzcdn.cn/icon-normal.png',
      active: '//img.yzcdn.cn/icon-active.png'
    },
    checked:"1",
    checkeds:"",
    backcol:"#1989fa",
    backcos:"white",
    textcol:"white",
    textcols:"black"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onChange(event) {
    this.setData({
      radio: event.detail
    });
  },
  onChanges(event) {
    this.setData({
      radios: event.detail
    });
  },
  boras:function(){
    this.setData({
      backcol:"white",
      textcol:"black",
      backcos:"#1989fa",
      textcols:"white"
    })
  },
  bora:function(){
    this.setData({
      backcol:"#1989fa",
      textcol:"white",
      backcos:"white",
      textcols:"black"
    })
  },
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