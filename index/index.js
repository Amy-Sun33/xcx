const app = getApp()

Page({
  data: {
    circleList: []
  },
  onLoad: function() {
    let list = []
    for (let i=0; i<=10; i++) {
      let obj = {
        id: `root${i}`,
        rate: i*10,
        bg: i * 10 > 50 ? '#FFC8D3' : '#99EBDA',
        draw: i * 10 > 50 ? '#FF6685' : '#00CCA3',
        bgColor: i * 10 > 50 ? '#EBFBFB' : '#FFF3F6',
        colorTxt: i * 10 > 50 ? '#FD5174' : '#00987A'
      }
      list.push(obj)
    }
    this.setData({
      circleList: list
    })
    console.log('.....list', this.data.circleList)
  }
})
