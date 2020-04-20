// pages/details/details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      // 轮播
      baan:[],
      cardCur: 0,
      baans:"",
      // 功能展示
      hibi:[
        {
          photo:"https://m.qpic.cn/psc?/V125ifz11cmniP/xBo1HguJwfqPLd*kRKpWsGxCaaqr3vXVt.9HCKbtoiUTsNuFj0wKyd5yyfB3qeVZ6c0Ew19alaNIGXJeiBKLkQ!!/b&bo=IAAgAAAAAAADByI!&rf=viewer_4&t=5",
          text:"外卖",
        },
        {
          photo:"http://m.qpic.cn/psc?/V125ifz11cmniP/WmaLtG4DKwtTVCYYotv*PdhlyWKnXU0QMRyqismdcz31RXbDUxOcIHKCPjUaBjL7Irtk6ONfLBzXWP0XccejkJXG0wJCj5lPPC8HYT8SDYs!/b&bo=IAAgAAAAAAADFzI!&rf=viewer_4&t=5",
          text:"扫码点餐"
        },
        {
          photo:"http://m.qpic.cn/psc?/V125ifz11cmniP/WmaLtG4DKwtTVCYYotv*PWbwPFjvgTjQUJI7XFt2cv9bbOebol3owLNP9zrYRtAFfGyNueWH4BAlliWAkIjZLGZztrYgHstZYC*3QWvQCxI!/b&bo=IAAgAAAAAAADFzI!&rf=viewer_4",
          text:"预约",
          to:"/pages/appointment/appointment"
        },{
          photo:"http://m.qpic.cn/psc?/V125ifz11cmniP/WmaLtG4DKwtTVCYYotv*PSoGU8E7LGELFUekGUM4wpZF.PmJlJ4t04Cfh7FxfjWymqOJ06yeoSYCIuNOrgATGKOvwn8NXq1ucfWOJhTGyLY!/b&bo=IAAgAAAAAAADFzI!&rf=viewer_4&t=5",
          text:"收银"
        },{
          photo:"http://m.qpic.cn/psc?/V125ifz11cmniP/WmaLtG4DKwtTVCYYotv*PU7ZyQkG*vZ7Y5vE8EcYIbM1w3c5zWgMzRHHenxTQ68576ySgDMNISzQFye0124ijuXRX8QwlKQJYSm.tkGJlPg!/b&bo=IAAgAAAAAAADFzI!&rf=viewer_4",
          text:"抢购"
        },{
          photo:"http://m.qpic.cn/psc?/V125ifz11cmniP/WmaLtG4DKwtTVCYYotv*PWaYirdKtFIgmjOz29h98MBVDP28dYOegoJZ*1dmBhTkw6YDh9AJ7YxgVA.0aZokBerM.I99gjMfnET98D3Mo.w!/b&bo=IAAgAAAAAAADFzI!&rf=viewer_4&t=5",
          text:"拼团"
        },{
          photo:"http://m.qpic.cn/psc?/V125ifz11cmniP/WmaLtG4DKwtTVCYYotv*PYaPYfMmL6179rU7wcH1Ky8gTJP2*IcCCFKgwc8HnPpELIHP92rKa4e739kAh0k0DaESZ6j35xSuND6xyiX83mI!/b&bo=IAAgAAAAAAADFzI!&rf=viewer_4",
          text:"排队取号"
        },
      ],
      active:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
      that.setData({
        baan:wx.getStorageSync('keyimg'),
        baans:wx.getStorageSync('keyname')
      })
      console.log(that.data.baan)
      //获取当前的地理位置、速度
    wx.getLocation({
      type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function (res) {
        //赋值经纬度
        that.setData({
          latitude: res.latitude,
          longitude: res.longitude,
        })
      }
    })
  },
  // 导航
  bindcontroltap(e) {
    var that = this;
    if (e.controlId == 1) {
      that.setData({
        latitude: this.data.latitude,
        longitude: this.data.longitude,
        scale: 14,
      })
    }
  },
  //导航
  onGuideTap: function (event) {
    var lat = Number(event.currentTarget.dataset.latitude);
    var lon = Number(event.currentTarget.dataset.longitude);
    var bankName = event.currentTarget.dataset.bankname;
    console.log(lat);
    console.log(lon);
    wx.openLocation({
      type: 'gcj02',
      latitude: lat,
      longitude: lon,
      name: bankName,
      scale: 28
    })
  },
  // 拨打电话
  tels: function(){
    wx.makePhoneCall({
      phoneNumber: '18803899605',
    })
  },
  //轮播
  // 初始化towerSwiper
  towerSwiper(name) {
    let list = this.data[name];
    for (let i = 0; i < list.length; i++) {
      list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
      list[i].mLeft = i - parseInt(list.length / 2)
    }
    this.setData({
      swiperList: list
    })
  },
  towerStart(e) {
    this.setData({
      towerStart: e.touches[0].pageX
    })
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