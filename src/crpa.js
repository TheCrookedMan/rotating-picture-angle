import EXIF from 'exif-js'

function crpa(imgFile, callback) {
  var imgObj = new Image(),
    self = this;
  imgObj.onload = function () {
    self.imgFile = this
    self.callback = callback
    self.init()
  }
  imgObj.src = imgFile
}

crpa.prototype.init =function() {
  let Orientation = null,
    canvas = document.createElement('canvas'),
    ctx = canvas.getContext("2d"),
    deg = Math.PI / 180,
    self = this;
  EXIF.getData(this.imgFile, function () {
    Orientation = EXIF.getTag(this, "Orientation");
  
    switch (Orientation) {
      case 3:
        canvas.width = self.imgFile.width
        canvas.height = self.imgFile.height
        ctx.transform(Math.cos(Math.PI), Math.sin(Math.PI), -Math.sin(Math.PI), Math.cos(Math.PI), self.imgFile.width, self.imgFile.height);
        ctx.drawImage(self.imgFile, 0, 0, self.imgFile.width, self.imgFile.height)
        self.callback(canvas.toDataURL())
        break;
      case 6:
        canvas.width = self.imgFile.height
        canvas.height = self.imgFile.width
        ctx.transform(Math.cos(deg * 90), Math.sin(deg * 90), -Math.sin(deg * 90), Math.cos(deg * 90), self.imgFile.height, 0);
        ctx.drawImage(self.imgFile, 0, 0, self.imgFile.width, self.imgFile.height)
        self.callback(canvas.toDataURL())
        break;
      case 8:
        canvas.width = self.imgFile.height
        canvas.height = self.imgFile.width
        ctx.transform(Math.cos(deg * 270), Math.sin(deg * 270), -Math.sin(deg * 270), Math.cos(deg * 270), 0, self.imgFile.width);
        ctx.drawImage(self.imgFile, 0, 0, self.imgFile.width, self.imgFile.height)
        self.callback(canvas.toDataURL())
        break;
      default:
        self.callback(self.imgFile.src)
        break;
    }
  })
}

export default crpa