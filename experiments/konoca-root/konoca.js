class Konoca {
  constructor(rootId){
    this.root = document.getElementById(rootId)
    this.UI = {
      init: function(root){
        root.style = "width: 800px; height: 600px; border: 1px solid; margin: auto;"
      }
    }
  }

  init() {
    this.root.innerHTML = ''
    this.UI.init(this.root)
  }

  add(element) {
    this.root.appendChild(element)
  }
}
