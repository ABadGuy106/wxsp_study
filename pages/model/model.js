// pages/model/model.js
var progressNum=0;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls:[
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    time:5000,
    autoplayB:true,
    iconType: [
      'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'
    ],
    progress:0,
    disabledBol:false,
    country: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true' },
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
      { name: 'ENG', value: '英国' },
      { name: 'TUR', value: '法国' },
    ],
    citise:[
      '北京','上海','南京','天津'
    ],
    index:0,
    pickerTime:'09:01',
    date:'2018-07-13'
  },
  bindPickerChange: function(e){
    this.setData({
      index:e.detail.value
    })
  },
  bindTimeChange:function(e){
    this.setData({
      pickerTime: e.detail.value
    })
  },
  bindDateChange:function(e){
    this.setData({
      date: e.detail.value
    })
  },
  chageDisabled:function(){
    this.setData({
      disabledBol: !this.data.disabledBol
    })
  },
  sub:function(e){
    console.log('表单提交',e.detail.value);
  },
  chageTime: function(e){
    var chageValue = e.detail.value;
    this.setData({
      time: chageValue
    })
  },

  cgAutoplay: function(){
    this.setData({
      autoplayB: !this.data.autoplayB
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    var timer=setInterval(function(){
      progressNum++;
      if (progressNum>=100){
        clearInterval(timer);
      }
      that.setData({
        progress: progressNum
      });
    });
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