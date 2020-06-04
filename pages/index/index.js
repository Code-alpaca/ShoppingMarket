// 0 引入 用来发送请求的 方法 一定要把路径补全
import { request } from "../../request/index.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图数组
    swiperList: [],
    // 导航 数组
    catesList:[],

    floorList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // wx-wx.request({
    //   url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
    //   // complete: (res) => {},//成功或失败调用的函数
    //   // data: data,    //发送的数据
    //   // dataType: dataType, //返回数据类型
    //   // fail: (res) => {}, //成功或失败调用的函数
    //   // header: header, //请求头
    //   // method: method, //请求方式，默认get
    //   // responseType: responseType, //返回值类型
    //   success: (result) => {
    //     // console.log(result)
    //     this.setData({
    //       swiperList:result.data.message
    //     })
    //   },
    // })
    this.getSwiperList();
    this.getCateList();
    this.getFloorList();
  },


  // 获取轮播图数据
  getSwiperList(){
    request({ url: "/home/swiperdata" })
    .then(result => {
      this.setData({
        swiperList: result
      })
    })
  },
  // 获取 分类导航数据
  getCateList(){
    request({ url: "/home/catitems" })
    .then(result => {
      this.setData({
        catesList: result
      })
    })
  },

    // 获取 楼层数据
    getFloorList(){
      request({ url: "/home/floordata" })
      .then(result => {
        this.setData({
          floorList: result
        })
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