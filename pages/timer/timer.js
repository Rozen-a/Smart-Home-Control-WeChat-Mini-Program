// pages/timer/timer.js
import Toast from '@vant/weapp/toast/toast';
import Dialog from '@vant/weapp/dialog/dialog';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    activeTab: 0,   // 标签页控制 - 表示当前激活的标签页索引，0代表"定时"页，1代表"倒计时"页
    deviceList: [], // 设备列表
    selectedDevice: null, // 已选择的设备
    
    // 定时相关
    startTime: '12:00', // 默认开始时间
    endTime: '18:00',   // 默认结束时间
    startTimeText: '',  // 显示的开始时间文本
    endTimeText: '',    // 显示的结束时间文本
    
    // 倒计时相关
    countdownMinutes: '30', // 默认30分钟
    
    // 弹出层控制
    showDevicePopup: false,   // 控制设备选择
    showStartTimePicker: false,   // 控制开启时间选择器
    showEndTimePicker: false,     // 控制关闭时间选择器
    
    // 定时器列表
    timerList: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {
    this.getUserLocation()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})