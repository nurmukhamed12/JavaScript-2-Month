class Element {
    constructor(el, width, height, bgColor, borderRadius, elsOpacity) {
      this.el = el;
      this.width = width;
      this.height = height;
      this.bgColor = bgColor;
      this.borderRadius = borderRadius;
      this.elsOpacity = elsOpacity;
    }
  
    create() {
      const element = document.createElement(this.el);
      element.style.width = this.width;
      element.style.height = this.height;
      element.style.backgroundColor = this.bgColor;
      element.style.borderRadius = this.borderRadius;
      element.style.opacity = this.elsOpacity;
      element.setAttribute('style', 'width:' + this.width + '; height:' + this.height + '; background-color:' + this.bgColor + '; border-radius:' + this.borderRadius + '; opacity:' + this.elsOpacity + ';');
  
      document.body.appendChild(element);
  
      const button = document.createElement('button');
      button.textContent = 'Изменить';
      button.setAttribute('style', 'padding: 10px; margin-top: 10px;');
  
      document.body.appendChild(button);
  
      button.addEventListener('click', () => {
        this.changeBgColor(this.generateRandomColor());
        this.changeBorderRadius(this.generateRandomBorderRadius());
    });
}
  
    generateRandomColor() {
      return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
  
    generateRandomBorderRadius() {
      return Math.floor(Math.random() * 50) + 'px';
    }
  
    changeBgColor(newColor) {
      const element = document.querySelector(this.el);
      element.style.backgroundColor = newColor;
    }
  
    changeBorderRadius(newRadius) {
      const element = document.querySelector(this.el);
      element.style.borderRadius = newRadius;
    }
  
    changeOpacity(newOpacity) {
      const element = document.querySelector(this.el);
      element.style.opacity = newOpacity;
    }
  
    changeSize(newWidth, newHeight) {
      const element = document.querySelector(this.el);
      element.style.width = newWidth;
      element.style.height = newHeight;
    }
  }
  
  const El = new Element('div', '400px', '300px', 'red', '0', '1');
  El.create();
  
  El.changeSize('200px', '200px');
  
