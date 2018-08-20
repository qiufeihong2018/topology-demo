(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@antv/g6"));
	else if(typeof define === 'function' && define.amd)
		define(["@antv/g6"], factory);
	else if(typeof exports === 'object')
		exports["plugin.layout.circle"] = factory(require("@antv/g6"));
	else
		root["plugin.layout.circle"] = factory(root["G6"]);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./plugins/layout.circle/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./plugins/layout.circle/index.js":
/*!****************************************!*\
  !*** ./plugins/layout.circle/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @fileOverview 圆图布局
 * @author huangtonger@aliyun.com
 */

var G6 = __webpack_require__(/*! @antv/g6 */ "@antv/g6");
var Layout = __webpack_require__(/*! ./layout */ "./plugins/layout.circle/layout.js");

G6.Layouts.Circle = Layout;

var Plugin = function () {
  function Plugin(options) {
    _classCallCheck(this, Plugin);

    this.options = options;
  }

  Plugin.prototype.init = function init() {
    var _this = this;

    var graph = this.graph;
    graph.on('beforeinit', function () {
      var layout = new Layout(_extends({
        graph: graph
      }, _this.options));
      graph.set('layout', layout);
    });
  };

  return Plugin;
}();

G6.Plugins['layout.circle'] = Plugin;

module.exports = Plugin;

/***/ }),

/***/ "./plugins/layout.circle/layout.js":
/*!*****************************************!*\
  !*** ./plugins/layout.circle/layout.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @fileOverview 圆形布局
 * @author huangtonger@aliyun.com
 */
var G6 = __webpack_require__(/*! @antv/g6 */ "@antv/g6");
var Util = G6.Util;

var Layout = function () {
  function Layout(options) {
    _classCallCheck(this, Layout);

    Util.mix(this, {
      /**
       * 节点集
       * @type  {Array}
       */
      nodes: null,

      /**
       * 圆半径
       * @type  {number}
       */
      radius: null,

      /**
       * 起始点和结束点之间有多少个弧度
       * @type  {number}
       */
      sweep: null,

      /**
       * 是否避免重叠
       * @type  {boolean}
       */
      avoidOverlap: false,

      /**
       * 顺逆时针
       * @type  {boolean}
       */
      clockwise: true,

      /**
       * 起始角度
       * @type  {boolean}
       */
      startAngle: 3 / 2 * Math.PI,

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
      center: null
    }, options);
  }
  // 执行布局


  Layout.prototype.execute = function execute() {
    var _this = this;

    var graph = this.graph;
    var nodes = this.nodes;
    var width = this.width ? this.width : graph.getWidth();
    var height = this.height ? this.height : graph.getHeight();
    var center = this.center ? this.center : {
      x: width / 2,
      y: height / 2
    };
    var avoidOverlap = this.avoidOverlap;
    var clockwise = this.clockwise;
    var sweep = Util.isNil(this.sweep) ? 2 * Math.PI - 2 * Math.PI / nodes.length : this.sweep;
    var dTheta = sweep / Math.max(1, nodes.length - 1);
    var radius = this.radius;
    var minDistance = 0;
    var i = void 0;

    for (i = 0; i < nodes.length; i++) {
      var node = nodes[i];
      var _width = node.width;
      var _height = node.height;
      minDistance = Math.max(minDistance, _width, _height);
    }
    if (Util.isNumber(this.radius)) {
      radius = this.radius;
    } else if (nodes.length <= 1) {
      radius = 0;
    } else {
      radius = Math.min(height, width) / 2 - minDistance;
    }
    if (nodes.length > 1 && avoidOverlap) {
      minDistance *= 1.75;
      var dcos = Math.cos(dTheta) - Math.cos(0);
      var dsin = Math.sin(dTheta) - Math.sin(0);
      var rMin = Math.sqrt(minDistance * minDistance / (dcos * dcos + dsin * dsin));
      radius = Math.max(rMin, radius);
    }
    this.sort && nodes.sort(this.sort);
    Util.each(nodes, function (node, i) {
      var theta = _this.startAngle + i * dTheta * (clockwise ? 1 : -1);
      var rx = radius * Math.cos(theta);
      var ry = radius * Math.sin(theta);
      node.x = center.x + rx;
      node.y = center.y + ry;
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
//# sourceMappingURL=plugin.layout.circle.js.map