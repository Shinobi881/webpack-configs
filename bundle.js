/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _app = __webpack_require__(1);

	// Imports an ES6 Class

	var _require = __webpack_require__(2);

	var testFunc = _require.testFunc; // We can use both 'require' and 'import'

	// Let's do some dom manipulations

	var root = document.getElementById('root');
	var element = document.createElement('h1');
	var getModules = new _app.CodeElement();

	var testStr = 'testing ';
	var importStr = "import { TestClass, CodeElement } from './app2';";
	var newTestClass = new _app.TestClass();

	element.textContent = 'IS THIS THING ON?';
	root.appendChild(element);
	getModules.appendCode(importStr, root);

	newTestClass.writeTest(0);
	newTestClass.writeTest(1);

	testFunc(testStr);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var TestClass = exports.TestClass = function () {
	  function TestClass() {
	    _classCallCheck(this, TestClass);

	    this.test1 = 'Testing this ES6 class - ';
	    this.test2 = 'Do I need a transpiler for this?';
	  }

	  _createClass(TestClass, [{
	    key: 'writeTest',
	    value: function writeTest(num) {
	      if (!num) {
	        document.write(this.test1);
	      } else {
	        document.write(this.test2);
	      }
	    }
	  }]);

	  return TestClass;
	}();

	var CodeElement = exports.CodeElement = function () {
	  function CodeElement() {
	    _classCallCheck(this, CodeElement);

	    this.element = document.createElement('code');
	  }

	  _createClass(CodeElement, [{
	    key: 'appendCode',
	    value: function appendCode(str, el) {
	      this.element.textContent = str;
	      el.appendChild(this.element);
	    }
	  }]);

	  return CodeElement;
	}();

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var testFunc = function testFunc(arg) {
	  document.write(" - I'm a big fan of " + arg + "!");
	  console.log(" - I'm a big fan of " + arg + "!");
	};

	exports.testFunc = testFunc;

/***/ }
/******/ ]);