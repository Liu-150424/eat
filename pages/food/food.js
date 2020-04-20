// pages/food/food.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 0,
    show: false,
    value: 5,
    flag: 0,
    currentTab: 0,
    lis: [
      {
        id:"1",
        photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586863767085&di=7cf9f1fdc8c45594c4794f0571be75b6&imgtype=0&src=http%3A%2F%2Fimage1.wulinsoso.com%2Fhdpic%2Fzcool%2F2014%2F01%2F05%2F1627253053.jpg",
        text: "香辣鸡腿堡",
        name: "月销29笔",
        yel: "￥1000.00",
      },
      {
        id:"2",
        photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586863767084&di=9bd9442877a6dc96b72f76980e4ae96f&imgtype=0&src=http%3A%2F%2Fsem.g3img.com%2Fg3img%2Fxxszpxxc%2F20160108083622_41989.jpg",
        text: "鸡肉汉堡",
        name: "月销235笔",
        yel: "￥1000.00",
      },
      {
        id:"3",
        photo: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586863767083&di=4abab9d8f98c083bdc8bb521737ee1d7&imgtype=0&src=http%3A%2F%2Fwww.3sha.cn%2Fuploads%2Fallimg%2F080809%2F41-1G115203G4G6.jpg",
        text: "猪肉汉堡",
        name: "月销214笔",
        yel: "￥1000.00",
      }
    ],
    backcol: "silver", //字体颜色
    toke: "https://m.qpic.cn/psc?/V125ifz11cmniP/xBo1HguJwfqPLd*kRKpWsKm0fgtsuUvsxHmwL7EUhhIZTLdPzeTIaI6EE.I9n1TUykN.MSM5j9vhNHY9ZROKvg!!/b&bo=IAAgAAAAAAADByI!&rf=viewer_4&t=5",   //购物车图片
    toke_text: "购物车是空的",  //文字
    noe: "none",   //圆圈是否显示
    tcol: "",   //圆圈字体颜色
    jia: "",  //价格
    mcol: "",  //价格字体颜色
    mbcol: "silver",  //价格背景颜色
    value:"1",
    num:""
  },
  switchNav: function (e) {
    var page = this;
    var id = e.target.id;
    if (this.data.currentTab == id) {
      return false;
    } else {
      page.setData({
        currentTab: id
      });
    }
    page.setData({
      flag: id
    });
  },
  catchTouchMove: function (res) {
    return false
  },
  onChange:function(event){
      this.setData({
        num:event.detail
      })
      console.log(event)
  },
  plus:function(){
      this.setData({
        noe:"block",
        tcol:"red",
        toke:"http://m.qpic.cn/psc?/V125ifz11cmniP/WmaLtG4DKwtTVCYYotv*PSpo21pT*ja65c3UAoEU4xgR1zVKbf49BNzfDSlQQUwqUycD774EmNTt6KcvcKjZataFuyiNN0EM65bkR8h5xRA!/b&bo=IAAgAAAAAAADFzI!&rf=viewer_4&t=5"
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  onClickShow() {
    this.setData({ show: true });
  },
  onClickHide() {
    this.setData({ show: false });
  },

  noop() { },
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