// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 轮播
    cardCur: 0,
    bann: [
      {
        photo: "https://m.qpic.cn/psc?/V125ifz11cmniP/xBo1HguJwfqPLd*kRKpWsP7UXImVbrZWQc1puPJ3CvRVJrMmK5yT8trsUnZcSSnmIrw2azeZ1XreOnsejTo0lg!!/b&bo=XgHIAAAAAAARB6c!&rf=viewer_4&t=5"
      },
      {
        photo: "http://m.qpic.cn/psc?/V125ifz11cmniP/WmaLtG4DKwtTVCYYotv*PfX6NiM2lG9Mdzz6SWfL5kUCZFZlcAGQr.OyRfGYbGeq9LbfH1W7kFcRSst.F5Ppw2S6mqTU4VtdqJ95frGBkwY!/b&bo=gAKEAQAAAAARFyc!&rf=viewer_4&t=5"
      }
    ],
    // 菜单
    menu: [
      {
        ima: "https://m.qpic.cn/psc?/V125ifz11cmniP/xBo1HguJwfqPLd*kRKpWsOt4HzJmnagxKZuuay*6NDZr9nMnOg1Q1f2LgD.XG28tNuLs2zSebOxBTxSXGPTw3w!!/b&bo=QABAAAAAAAADByI!&rf=viewer_4&t=5",
        tet: "推荐商家",
        to: "/pages/business/business"
      },
      {
        ima: "http://m.qpic.cn/psc?/V125ifz11cmniP/WmaLtG4DKwtTVCYYotv*PVBZEJtWHX2ECHwNxFvLSYJUONLQpJoP5p*Hk5ufKiOREBh3BSHA9hYoixa.8FyPVY3UxLZusYEh5zHSgDNqC6c!/b&bo=ZABkAAAAAAADFzI!&rf=viewer_4&t=5",
        tet: "限时抢购"
      },
      {
        ima: "http://m.qpic.cn/psc?/V125ifz11cmniP/WmaLtG4DKwtTVCYYotv*PXIwWI1RcXd7gKZZS4gRhSLhdyikZMtjpPYBsT1*fjQefzJHKUfSV*e1Az4NSKKey4wbF46HPwSc89ZsiWFex30!/b&bo=QABAAAAAAAADFzI!&rf=viewer_4&t=5",
        tet: "全民拼团"
      },
      {
        ima: "http://m.qpic.cn/psc?/V125ifz11cmniP/WmaLtG4DKwtTVCYYotv*PT7IOic*zSHrrdDgKvnkqCFkBxhPquwYlMvH7eUork4Y26SZIYGN7hEY1*N*zJlqT9QmiZImJb6uDYjFsluXlb0!/b&bo=MgAyAAAAAAADFzI!&rf=viewer_4&t=5",
        tet: "精选好店"
      },
      {
        ima: "http://m.qpic.cn/psc?/V125ifz11cmniP/WmaLtG4DKwtTVCYYotv*PblHuZSTe8M6LkRoG0fXujVMIJyp8fDbKwVPgdOmBH.OAcyTZj0OPcOgfK9YkL7YSVrKQqibIENFib*ZuUhKDTo!/b&bo=MAAwAAAAAAADFzI!&rf=viewer_4&t=5",
        tet: "签到"
      }
    ],
    menus: [
      {
        ima: "http://m.qpic.cn/psc?/V125ifz11cmniP/WmaLtG4DKwtTVCYYotv*PQhyRN06nNbKdMLgGwWKxyRr4iNnRj2SHCPBhhQpexSPF0yr1IsUw22T6RjyqWdulkcRumKyJf*k7DZtNt4Be98!/b&bo=ZABkAAAAAAADFzI!&rf=viewer_4&t=5",
        tet: "积分商城"
      },
      {
        ima: "http://m.qpic.cn/psc?/V125ifz11cmniP/WmaLtG4DKwtTVCYYotv*PSb2n0psQ1jdhhWI6zDtJBvP.q7DIfN81KXJMuHqvBZOUgx4aW32Ey5KHpL88BXjWo6sEmCQPknDAawQS9iMH4E!/b&bo=KAAoAAAAAAADFzI!&rf=viewer_4&t=5",
        tet: "合作加盟"
      },
      {
        ima: "http://m.qpic.cn/psc?/V125ifz11cmniP/WmaLtG4DKwtTVCYYotv*PRs4NaAabY1ouA8yr0MNs0zHcgHlPK.AKrvdMK0hR4Nb8V1tcgoWoeiPr4UgN1Sg3ORADdPcJBRiNmg2PtY42RY!/b&bo=QABAAAAAAAADFzI!&rf=viewer_4&t=5",
        tet: "分销"
      },
      {
        ima: "http://m.qpic.cn/psc?/V125ifz11cmniP/WmaLtG4DKwtTVCYYotv*PeERDs7O0gZmRqBg1rxlRspOhAl4iVLc8HsCbf6Mou4w*sSitFVwKDpqTM8mPJlgWv0t895DehnWwLZOe8dRFAI!/b&bo=QABAAAAAAAADFzI!&rf=viewer_4&t=5",
        tet: "会员卡"
      },
      {
        ima: "http://m.qpic.cn/psc?/V125ifz11cmniP/WmaLtG4DKwtTVCYYotv*PU0.c3XyJ*u*0Btz7yhJSXJ4BhKwrHOdK5hw2Xku7cEJt1eV17kpyb8EU2u0poAns8jmc4.710OYmzUXW5R6PTo!/b&bo=HgAeAAAAAAADFzI!&rf=viewer_4&t=5",
        tet: "推荐"
      }
    ],
    msgList: [{
      title: "1天前，有人买了汉堡"
    },
    {
      title: "2天前，有人买了鸡腿"
    },
    {
      title: "3天前，有人买了鸡翅"
    }
    ],
    owner: [
      {
        photo: "https://m.qpic.cn/psc?/V125ifz11cmniP/xBo1HguJwfqPLd*kRKpWsBFYdY1m5m.*pyZUBCXi7TGqGC2eqfWGo6rVS7Til81y9uPwYHm0*PxAEmsklqIy*w!!/b&bo=GgY4BAAAAAARBxA!&rf=viewer_4&t=5",
        tetx: "肯德基",
        to: "/pages/details/details"
      }, {
        photo: "http://m.qpic.cn/psc?/V125ifz11cmniP/WmaLtG4DKwtTVCYYotv*PdhZqTGzqb78BHEBWtryJ.FZ9xajLYbG.L1ztZn5bdjVmprM4t4xk7bIuJFuw8umN7iJBUGbCW8.Cn5lvHiFgGo!/b&bo=HQIuAQAAAAARFxA!&rf=viewer_4&t=55",
        tetx: "麦当劳",
        to: "/pages/details/details"
      }, {
        photo: "http://m.qpic.cn/psc?/V125ifz11cmniP/WmaLtG4DKwtTVCYYotv*PXcvqPJhciMBnaokBexV22a0iL9WO*WXrLwzSd1fnDB0BRnKHHA06dPlmH2htlz*Z3EYln9oc0A6DOzDX6Q4EwM!/b&bo=8wFZAQAAAAARF4o!&rf=viewer_4&t=5",
        tetx: "华莱士",
        to: "/pages/details/details"
      }, {
        photo: "http://m.qpic.cn/psc?/V125ifz11cmniP/WmaLtG4DKwtTVCYYotv*PRGraOXSmBipLGGg1srvMJI.hRp4KBIyjz8.8TjO*Z4KD5aPbmtbxkl6XDXPiWp1RTfgv1qBByeoEcZbhlwTd.I!/b&bo=1gEdAQAAAAARF.s!&rf=viewer_4&t=5",
        tetx: "必胜客",
        to: "/pages/details/details"
      },
    ],
    // 商家
    exhibition: [
      {
        photo: "https://m.qpic.cn/psc?/V125ifz11cmniP/xBo1HguJwfqPLd*kRKpWsBFYdY1m5m.*pyZUBCXi7TGqGC2eqfWGo6rVS7Til81y9uPwYHm0*PxAEmsklqIy*w!!/b&bo=GgY4BAAAAAARBxA!&rf=viewer_4&t=5",
        tetx: "肯德基",
        year: "4.3",
        name: "月售151单",
        to: "/pages/details/details"
      },
      {
        photo: "http://m.qpic.cn/psc?/V125ifz11cmniP/WmaLtG4DKwtTVCYYotv*PdhZqTGzqb78BHEBWtryJ.FZ9xajLYbG.L1ztZn5bdjVmprM4t4xk7bIuJFuw8umN7iJBUGbCW8.Cn5lvHiFgGo!/b&bo=HQIuAQAAAAARFxA!&rf=viewer_4&t=55",
        tetx: "麦当劳",
        year: "4.2",
        name: "月售150单",
        to: "/pages/details/details"
      }, {
        photo: "http://m.qpic.cn/psc?/V125ifz11cmniP/WmaLtG4DKwtTVCYYotv*PXcvqPJhciMBnaokBexV22a0iL9WO*WXrLwzSd1fnDB0BRnKHHA06dPlmH2htlz*Z3EYln9oc0A6DOzDX6Q4EwM!/b&bo=8wFZAQAAAAARF4o!&rf=viewer_4&t=5",
        tetx: "华莱士",
        year: "4.1",
        name: "月售149单",
        to: "/pages/details/details"
      }, {
        photo: "http://m.qpic.cn/psc?/V125ifz11cmniP/WmaLtG4DKwtTVCYYotv*PRGraOXSmBipLGGg1srvMJI.hRp4KBIyjz8.8TjO*Z4KD5aPbmtbxkl6XDXPiWp1RTfgv1qBByeoEcZbhlwTd.I!/b&bo=1gEdAQAAAAARF.s!&rf=viewer_4&t=5",
        tetx: "必胜客",
        year: "4.0",
        name: "月售148单",
        to: "/pages/details/details"
      }, {
        photo: "http://m.qpic.cn/psc?/V125ifz11cmniP/WmaLtG4DKwtTVCYYotv*PSUm.Z5GxWf7B4HShj2E*8wIOzvRyF6Q69NEp6pcJwgJThNz8soFKFnZW7D7bBcI2PTJdpPKXP60MDaR23EyQ1Y!/b&bo=6APoAwAAAAARFyA!&rf=viewer_4&t=5",
        tetx: "汉堡王",
        year: "3.9",
        name: "月售101单",
        to: "/pages/details/details"
      }
    ],
    value: 4,
    // 品质
    keyimg:"",
    keyname:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  // 品质传参
  onChange: function (res) {
    var than = this
    wx.setStorageSync('keyname', res.currentTarget.dataset.name)
    wx.setStorageSync('keyimg', res.currentTarget.dataset.img)
    // console.log(wx.getStorageSync('keyname'))
    // console.log(wx.getStorageSync('keyimg'))
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