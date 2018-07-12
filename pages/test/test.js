var appinfo=getApp();
//引用common.js
var common = require('../../common/common.js');


// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tdata:'测试数据',
    dataForMe:null,
    bol:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      dataForMe: appinfo.globalData.aTestData,
    })
  },
  chage: function(){
    console.log(this.data.bol);
    this.setData({
      bol: !this.data.bol
    });
  },
  toIndex: function(){
    wx.navigateTo({
      url: '../navi/navi',
    })
  },
  say: function(){
    common.sayHello(this.data.tdata);
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