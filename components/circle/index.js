// components/circle/index.js
/**
 * 圆形绘制组件
 */
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    canvasId: {
      type: String,
      value: ''
    },
    // 环形未填充颜色
    circleBg: {
      type: String,
      value: ''
    },
    // 环形填充
    circleDraw: {
      type: String,
      value: ''
    },
    // 环形图底色
    circleBgColor: {
      type: String,
      value: ''
    },
    // 比率文字颜色
    circleBgTxt: {
      type:String,
      value: ''
    },
    // 进度的百分比
    per: {
      type: String,
      value: '0'
    },
    // 圆环的半径
    r: {
      type: Number,
      value: 50
    },
    // 圆环的宽度
    w: {
      type: Number,
      value: 4 // rpx
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    step: 0,
    size: 0,
    imageDraw: '',
    imageBg: ''
  },

  lifetimes: {
    attached: function() {
      // let screenWidth = 0
      // 获取屏幕宽度
      wx.getSystemInfo({
        success: (result) => {
          this.setData({
            screenWidth: result.windowWidth
          })
        },
      })
      const el = this.data.canvasId; // 画板元素
      // 将半径的px转成rpx
      let rpx = (this.data.screenWidth / 750)  * this.data.r
      this.setData({
        step: (2 * Number(this.data.per)) / 100,
        size: rpx * 2
      })
     console.log('...size', this.data.size, rpx)
      this.drawCircleBg(el+'bg', rpx, this.data.w / 2)
      this.drawCircle(el, rpx, this.data.w / 2, this.data.step)
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    /**
     * r: 半径
     * w：宽度
     * 功能： 画背景
     */
    drawCircleBg: function(el, r, w) {
      const ctx = wx.createCanvasContext(el, this);
      ctx.setLineWidth(w); // 设置圆环的宽度
      ctx.setStrokeStyle(this.data.circleBg); // 圆环的颜色
      ctx.setLineCap('round'); // 圆环端点的形状
      ctx.beginPath(); // 开始一个新路径
      // 圆心X的坐标  圆心y的坐标  圆的半径 起始弧度  终止i弧度
      ctx.arc(r, r, r-w, 0,  2 * Math.PI, false);
      ctx.fillStyle=this.data.circleBgColor; // 圆环背景颜色
      ctx.fill(); // 画弧线
      ctx.stroke();
      ctx.draw();
      // ctx.draw(false, () => {
      //   // 转化成图片
      //   setTimeout(() => {
      //     wx.canvasToTempFilePath({
      //       canvas: el,
      //       success: (res) => {
      //         this.setData({imageBg: res.tempFilePath})
      //       }
      //     }, this)
      //   }, 200);
      // }); 
    },
    /**
     *r: 圆的半径
     * w: 圆的宽度
     * step： 圆的弧度（0-2）
     * 功能： 彩色的圆环
     */
    drawCircle: function(el, r, w, step) {
      const ctx = wx.createCanvasContext(el, this);
      ctx.setLineWidth(w);
      ctx.setStrokeStyle(this.data.circleDraw);
      ctx.setLineCap('round');
      ctx.beginPath();
      // 从 0到2为一周
      ctx.arc(r, r, r-w,  -Math.PI / 2, step * Math.PI - Math.PI / 2, false);
      ctx.stroke(); // 对当前路径进行描边
      ctx.draw();
      // ctx.draw(false, () => {
      //   // 转化成图片
      //   setTimeout(() => {
      //     wx.canvasToTempFilePath({
      //       canvas: el,
      //       success: (res) => {
      //         this.setData({imageDraw: res.tempFilePath})
      //       }
      //     }, this)
      //   }, 200);
      // });
    }
  }
})
