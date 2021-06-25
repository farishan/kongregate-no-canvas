(function(){ window.onload = function(){
  // Setup
  const _konocaUI = new KonocaUI()
  const _konoca = new Konoca('root')
  _konoca.init()

  // Outside Konoca
  const button1 = _konocaUI.create('button', 'hello world')
  const button2 = _konocaUI.create('button', 'delete hello world button')
  button1.onclick = function(){
    console.log('clicked')
  }
  button2.onclick = function(){
    button1.remove()
    setTimeout(function(){
      button2.innerHTML = 'hello world deleted'
    }, 500)
  }
  _konoca.add(button1)
  _konoca.add(button2)
}})()
