 /**
   * 圆角绘画
   * ctx: 绘图上下文对象
   * x: canvas-x
   * y: canvas-y
   * w: 绘制图像宽度
   * h: 绘制图像高度
   * r: 圆形的半径
   */
 export default function roundRect (ctx, x, y, w, h, r) {
    ctx.beginPath();
    ctx.setFillStyle('rgba(255, 255, 255, 1)');
    // ctx.setStrokeStyle('') // 描边颜色

    // 左上角
    ctx.arc(x + r, y + r, r, Math.PI, Math.PI * 1.5);

    // border-top
    // ctx.moveTo(x + r, y)
    // ctx.lineTo(x + w - r, y)
    // ctx.lineTo(x + w, y + r)
    // 右上角
    ctx.arc(x + w - r, y + r, r, Math.PI * 1.5, Math.PI * 2);

    // border-right
    // ctx.lineTo(x + w, y + h - r)
    // ctx.lineTo(x + w - r, y + h)
    // 右下角
    ctx.arc(x + w - r, y + h - r, r, 0, Math.PI * 0.5);

    // border-bottom
    // ctx.lineTo(x + r, y + h)
    // ctx.lineTo(x, y + h - r)
    // 左下角
    ctx.arc(x + r, y + h - r, r, Math.PI * 0.5, Math.PI);

    ctx.fill();
  }