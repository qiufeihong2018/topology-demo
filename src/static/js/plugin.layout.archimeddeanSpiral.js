(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@antv/g6"));
	else if(typeof define === 'function' && define.amd)
		define(["@antv/g6"], factory);
	else if(typeof exports === 'object')
		exports["plugin.layout.archimeddeanSpiral"] = factory(require("@antv/g6"));
	else
		root["plugin.layout.archimeddeanSpiral"] = factory(root["G6"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__antv_g6__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./plugins/layout.archimeddeanSpiral/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./plugins/layout.archimeddeanSpiral/index.js":
/*!****************************************************!*\
  !*** ./plugins/layout.archimeddeanSpiral/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @fileOverview 阿基米德螺线布局
 * @author huangtonger@aliyun.com
 */

var G6 = __webpack_require__(/*! @antv/g6 */ "@antv/g6");
var Layout = __webpack_require__(/*! ./layout */ "./plugins/layout.archimeddeanSpiral/layout.js");

G6.Layouts.ArchimeddeanSpiral = Layout;

var Plugin = function () {
  function Plugin(options) {
    _classCallCheck(this, Plugin);

    this.options = options;
  }

  Plugin.prototype.init = function init() {
    var _this = this;

    var graph = this.graph;
    graph.on('beforeinit', function () {
      var layout = new Layout(_this.options);
      graph.set('layout', layout);
    });
  };

  return Plugin;
}();

G6.Plugins['layout.archimeddeanSpiral'] = Plugin;

module.exports = Plugin;

/***/ }),

/***/ "./plugins/layout.archimeddeanSpiral/layout.js":
/*!*****************************************************!*\
  !*** ./plugins/layout.archimeddeanSpiral/layout.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @fileOverview 阿基米德螺线布局
 * https://zh.wikipedia.org/wiki/%E9%98%BF%E5%9F%BA%E7%B1%B3%E5%BE%B7%E8%9E%BA%E7%BA%BF
 * @author huangtonger@aliyun.com
 */
var G6 = __webpack_require__(/*! @antv/g6 */ "@antv/g6");
var Util = G6.Util;

var Layout = function () {
  function Layout(options) {
    _classCallCheck(this, Layout);

    Util.mix(this, {
      /**
       * 宽
       * @type  {number}
       */
      width: null,

      /**
       * 高
       * @type  {number}
       */
      height: null,

      /**
       * 图中心
       * @type  {object}
       */
      center: null,

      /**
       * 参数 a
       * @type  {number}
       */
      a: 16,

      /**
       * 参数 b
       * @type  {number}
       */
      b: 5,

      /**
       * 最大角度
       * @type  {number}
       */
      maxAngle: 12 * Math.PI
    }, options);
  }
  // 执行布局


  Layout.prototype.execute = function execute() {
    var graph = this.graph,
        nodes = this.nodes,
        a = this.a,
        b = this.b,
        maxAngle = this.maxAngle;

    var width = this.width ? this.width : graph.getWidth();
    var height = this.height ? this.height : graph.getHeight();
    var center = this.center ? this.center : {
      x: width / 2,
      y: height / 2
    };
    var l = nodes.length;
    var angleStep = maxAngle / l;
    var getAngle = function getAngle(i) {
      return i * angleStep;
    };
    var getRadius = function getRadius(angle) {
      return a + b * angle;
    };
    this.sort && nodes.sort(this.sort);
    nodes.forEach(function (node, i) {
      var angle = getAngle(i);
      var radius = getRadius(angle);
      node.x = center.x + radius * Math.cos(angle);
      node.y = center.y + radius * Math.sin(angle);
    });
  };

  return Layout;
}();

module.exports = Layout;

/***/ }),

/***/ "@antv/g6":
/*!********************************************************************************************!*\
  !*** external {"root":"G6","commonjs2":"@antv/g6","commonjs":"@antv/g6","amd":"@antv/g6"} ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__antv_g6__;

/***/ })

/******/ });
});
//# sourceMappingURL=plugin.layout.archimeddeanSpiral.js.map