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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/_script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./css/_style.css":
/*!************************!*\
  !*** ./css/_style.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./css/_style.css?");

/***/ }),

/***/ "./js/_script.js":
/*!***********************!*\
  !*** ./js/_script.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ../css/_style.css */ \"./css/_style.css\");\r\n\r\n(function() {\r\n    var d = document, s = d.createElement('script');\r\n    s.src = 'https://gorodsolntsa.disqus.com/embed.js';\r\n    s.setAttribute('data-timestamp', +new Date());\r\n    (d.head || d.body).appendChild(s);\r\n})();\r\n\r\nconst modals = (trigger, modal, close) => {\r\n\r\n    trigger.addEventListener(\"click\", (e) => {\r\n        if(e.target) {\r\n            e.preventDefault()\r\n        }\r\n        modal.classList.add(\"animated\", \"fadeIn\");\r\n        modal.classList.remove(\"modal-close\");\r\n        \r\n    })\r\n\r\n    close.addEventListener(\"click\", () => {\r\n        modal.classList.remove(\"fadeIn\");\r\n        modal.classList.add(\"fadeOut\");\r\n\r\n        setTimeout(() => {\r\n            modal.classList.add(\"modal-close\");\r\n            modal.classList.remove(\"animated\", \"fadeOut\");\r\n        }, 1000)\r\n    })\r\n}\r\n\r\ndocument.addEventListener(\"scroll\", function (e) {\r\n    console.log(window.scrollY);\r\n    const headerSection = document.querySelector(\".header-section\")\r\n    if (window.screen.width > 1200) {\r\n        if (window.scrollY > 100) {\r\n            headerSection.classList.add(\"header__scroll\");\r\n        } else {\r\n            headerSection.classList.remove(\"header__scroll\");\r\n        }   \r\n    } else {\r\n        if (window.scrollY > 100) {\r\n            headerSection.style.background = \"#dbeeef\";\r\n            headerSection.style.paddingBottom = \"5px\";\r\n            headerSection.style.paddingTop = \"5px\";\r\n        } else {\r\n            headerSection.style.background = \"transparent\";\r\n        }\r\n    }\r\n    \r\n});\r\n\r\nconst modalbtn1 = document.querySelector(\".info__item1\")\r\nconst modal1 = document.querySelector(\".modal1\")\r\nconst close1 = modal1.querySelector(\".modal__close\")\r\n\r\nmodals(modalbtn1, modal1, close1)\r\n\r\nconst modalbtn2 = document.querySelector(\".info__item2\")\r\nconst modal2 = document.querySelector(\".modal2\")\r\nconst close2 = modal2.querySelector(\".modal__close\")\r\n\r\nmodals(modalbtn2, modal2, close2)\r\n\r\nconst modalbtn3 = document.querySelector(\".info__item3\")\r\nconst modal3 = document.querySelector(\".modal3\")\r\nconst close3 = modal3.querySelector(\".modal__close\")\r\n\r\nmodals(modalbtn3, modal3, close3)\r\n\r\nconst modalbtn4 = document.querySelector(\".info__item4\")\r\nconst modal4 = document.querySelector(\".modal4\")\r\nconst close4 = modal4.querySelector(\".modal__close\")\r\n\r\nmodals(modalbtn4, modal4, close4)\r\n\r\nconst modalbtn5 = document.querySelector(\".child-item1\")\r\nconst modal5 = document.querySelector(\".modal5\")\r\nconst close5 = modal5.querySelector(\".modal__close\")\r\n\r\nmodals(modalbtn5, modal5, close5)\r\n\r\nconst modalbtn6 = document.querySelector(\".child-item2\")\r\nconst modal6 = document.querySelector(\".modal6\")\r\nconst close6 = modal6.querySelector(\".modal__close\")\r\n\r\nmodals(modalbtn6, modal6, close6)\r\n\r\nconst modalbtn7 = document.querySelector(\".child-item3\")\r\nconst modal7 = document.querySelector(\".modal7\")\r\nconst close7 = modal7.querySelector(\".modal__close\")\r\n\r\nmodals(modalbtn7, modal7, close7)\r\n\r\nconst modalbtn8 = document.querySelector(\".child-item4\")\r\nconst modal8 = document.querySelector(\".modal8\")\r\nconst close8 = modal8.querySelector(\".modal__close\")\r\n\r\nmodals(modalbtn8, modal8, close8)\r\n\r\nconst modalBtnComments = document.querySelector(\".modal-btn_comments\")\r\nconst modalComments = document.querySelector(\".modal_comments\")\r\nconst closeComments = modalComments.querySelector(\".modal__close\")\r\n\r\nmodals(modalBtnComments, modalComments, closeComments)\r\n\r\n\n\n//# sourceURL=webpack:///./js/_script.js?");

/***/ })

/******/ });