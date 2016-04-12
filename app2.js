export class TestClass {
  constructor() {
    this.test1 = 'Testing this ES6 class - ';
    this.test2 = 'Do I need a transpiler for this?';
  }
  writeTest(num) {
    if (!num) {
      document.write(this.test1);
    } else {
      document.write(this.test2);
    }
  }
}

export class CodeElement {
  constructor() {
    this.element = document.createElement('code');
  }
  appendCode(str, el) {
    this.element.textContent = str;
    el.appendChild(this.element);
  }
}

export class ImageElement {
  constructor() {
    this.element = document.createElement('img');
  }
  appendImage(source, el) {
    this.element.src = source;
    el.appendChild(this.element);
  }
}