class KonocaUI {
  constructor(){}

  create(element, text){
    if(element === 'button'){
      const button = document.createElement('button')
      button.innerHTML = text;
      return button
    }
  }
}