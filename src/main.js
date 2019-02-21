import crpa from './crpa.js'

function change(){
  var filesss = this.files[0]
  var reader = new FileReader();
  reader.readAsDataURL(filesss);
  reader.onload = function (e) {
    new crpa(this.result, function (result) {
      document.getElementById('end')['src'] = result
    })
  }
}

document.getElementById("aaaa").onchange = change