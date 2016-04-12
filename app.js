import './stylesheet.css';
import { TestClass, CodeElement, ImageElement } from './app2'; // Imports an ES6 Class
const { testFunc } = require('./app3'); // We can use both 'require' and 'import'

// Let's do some dom manipulations
const root = document.getElementById('root');
const element = document.createElement('h1');
const getModules = new CodeElement;
const spinner = new ImageElement;

const testStr = 'testing ';
const importStr = "import { TestClass, CodeElement } from './app2';";
const newTestClass = new TestClass;

const imgUrl = './images/loading.gif'

element.textContent = 'IS THIS THING ON?';
root.appendChild(element);
getModules.appendCode(importStr, root);
spinner.appendImage(imgUrl, root);


newTestClass.writeTest(0);
newTestClass.writeTest(1);

testFunc(testStr);
