/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Complier.js":
/*!*********************!*\
  !*** ./Complier.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Watcher__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Watcher */ \"./Watcher.js\");\n\nconst REG =/\\{\\{(.*)\\}\\}/\nclass Complier{\n    constructor(el,vm){\n        this.el= document.querySelector(el);\n        this.vm=vm;\n        this.frag=this._createFragment();\n        this.el.appendChild(this.frag)\n    }\n    _createFragment(){\n        var frag=document.createDocumentFragment();\n        var child;\n        while(child=this.el.firstChild){\n            this._compile(child)\n            frag.appendChild(child)\n        }\n        return frag;\n    }\n    _compile(node){\n\n        if(node.nodeType ===1){\n            console.log(node)\n            var attr=node.attributes;\n            if(attr.hasOwnProperty('v-model')){\n                var name=attr['v-model'].nodeValue\n                node.value=this.vm[name]\n                node.addEventListener('input', (e) =>{\n                    this.vm[name]=e.target.value\n                })\n            }\n        }\n        if(node.nodeType ===3){\n            if(REG.test(node.nodeValue)){\n                var name = RegExp.$1;\n                name=name.trim();\n                new _Watcher__WEBPACK_IMPORTED_MODULE_0__[\"default\"](node,name,this.vm)\n            }\n        }\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Complier);\n\n//# sourceURL=webpack:///./Complier.js?");

/***/ }),

/***/ "./Dep.js":
/*!****************!*\
  !*** ./Dep.js ***!
  \****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nclass Dep {\n    // static  target=null;\n    constructor(){\n        this.list =[]\n    }\n    listen(listener){\n        this.list.push(listener)\n    }\n    notify(){\n        for(var i=0;i<this.list.length;i++){\n            this.list[i].update()\n        }\n    }\n}\nDep.prototype.target==null\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dep);\n\n\n\n//# sourceURL=webpack:///./Dep.js?");

/***/ }),

/***/ "./Watcher.js":
/*!********************!*\
  !*** ./Watcher.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Dep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dep */ \"./Dep.js\");\n\nclass Watcher {\n    constructor(node,name,vm){\n        this.node=node;\n        this.name=name;\n        this.vm=vm;\n        _Dep__WEBPACK_IMPORTED_MODULE_0__[\"default\"].target=this;\n        this.update();\n        _Dep__WEBPACK_IMPORTED_MODULE_0__[\"default\"].target=null\n    }\n    update(){\n\n        this.node.nodeValue=this.vm[this.name]\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Watcher);\n\n//# sourceURL=webpack:///./Watcher.js?");

/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vue */ \"./vue.js\");\n\nconst vue=new _vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n    el:\"#app\",\n    data:{\n        message:\"vue实现数据的双向绑定\"\n    }\n})\nwindow.vue=vue\n\n//# sourceURL=webpack:///./main.js?");

/***/ }),

/***/ "./observer.js":
/*!*********************!*\
  !*** ./observer.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Dep__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dep */ \"./Dep.js\");\n\nclass Observer{\n    constructor(data){\n        this.data=data;\n        Object.keys(this.data).forEach(key=>{\n            this._bind(data,key,data[key])\n        })\n    }\n    _bind(data,key,val){\n        var myDep=new _Dep__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n        Object.defineProperty(data,key,{\n            get(){\n                if(_Dep__WEBPACK_IMPORTED_MODULE_0__[\"default\"].target) myDep.listen(_Dep__WEBPACK_IMPORTED_MODULE_0__[\"default\"].target)\n                return val;\n            },\n            set(newValue){\n                if(newValue === val) return\n                val=newValue\n                myDep.notify()\n            }\n        })\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Observer);\n\n//# sourceURL=webpack:///./observer.js?");

/***/ }),

/***/ "./vue.js":
/*!****************!*\
  !*** ./vue.js ***!
  \****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _observer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./observer */ \"./observer.js\");\n/* harmony import */ var _Complier__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Complier */ \"./Complier.js\");\n\n\nclass Vue {\n    constructor(options){\n        this.$options=options;\n        this.$el=this.$options.el;\n        this._data=this.$options.data;\n        Object.keys(this._data).forEach(key=>{\n            this._proxy(key)\n        });\n\n        new _observer__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this._data);\n        new _Complier__WEBPACK_IMPORTED_MODULE_1__[\"default\"](this.$el,this)\n    }\n    _proxy(key){\n        var self=this;\n        Object.defineProperty(this,key,{\n            get(){\n                return self._data[key]\n            },\n            set(value){\n                self._data[key]=value\n            }\n        })\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (Vue);\n\n//# sourceURL=webpack:///./vue.js?");

/***/ })

/******/ });