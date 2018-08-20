(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["G6"] = factory();
	else
		root["G6"] = factory();
})(window, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@antv/g/build/g.js":
/*!*****************************************!*\
  !*** ./node_modules/@antv/g/build/g.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof3 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? undefined : _typeof3(exports)) === 'object' && ( false ? undefined : _typeof3(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(this, function () {
  return (/******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/var installedModules = {};
      /******/
      /******/ // The require function
      /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
          /******/return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/__webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/__webpack_require__.c = installedModules;
      /******/
      /******/ // define getter function for harmony exports
      /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, {
            /******/configurable: false,
            /******/enumerable: true,
            /******/get: getter
            /******/ });
          /******/
        }
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
          return module['default'];
        } :
        /******/function getModuleExports() {
          return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/__webpack_require__.p = "";
      /******/
      /******/ // Load entry module and return exports
      /******/return __webpack_require__(__webpack_require__.s = 78);
      /******/
    }(
    /************************************************************************/
    /******/[
    /* 0 */
    /***/function (module, exports, __webpack_require__) {

      var CommonUtil = __webpack_require__(8);
      var DomUtil = __webpack_require__(36);

      var Util = {};

      CommonUtil.merge(Util, CommonUtil, DomUtil, {
        mixin: function mixin(c, mixins) {
          var Param = c.CFG ? 'CFG' : 'ATTRS';
          if (c && mixins) {
            c._mixins = mixins;
            c[Param] = c[Param] || {};
            var temp = {};
            Util.each(mixins, function (mixin) {
              Util.augment(c, mixin);
              var attrs = mixin[Param];
              if (attrs) {
                Util.merge(temp, attrs);
              }
            });
            c[Param] = Util.merge(temp, c[Param]);
          }
        }
      });

      module.exports = Util;

      /***/
    },
    /* 1 */
    /***/function (module, exports, __webpack_require__) {

      var Util = __webpack_require__(0);
      var Element = __webpack_require__(63);
      var Inside = __webpack_require__(3);

      var Shape = function Shape(cfg) {
        Shape.superclass.constructor.call(this, cfg);
      };

      Shape.ATTRS = {};

      Util.extend(Shape, Element);

      Util.augment(Shape, {
        isShape: true,
        createPath: function createPath() {},
        afterPath: function afterPath() {},
        drawInner: function drawInner(context) {
          var self = this;
          var attrs = self.__attrs;
          self.createPath(context);
          var originOpacity = context.globalAlpha;
          if (self.hasFill()) {
            var fillOpacity = attrs.fillOpacity;
            if (!Util.isNil(fillOpacity) && fillOpacity !== 1) {
              context.globalAlpha = fillOpacity;
              context.fill();
              context.globalAlpha = originOpacity;
            } else {
              context.fill();
            }
          }
          if (self.hasStroke()) {
            var lineWidth = self.__attrs.lineWidth;
            if (lineWidth > 0) {
              var strokeOpacity = attrs.strokeOpacity;
              if (!Util.isNil(strokeOpacity) && strokeOpacity !== 1) {
                context.globalAlpha = strokeOpacity;
              }
              context.stroke();
            }
          }
          self.afterPath(context);
        },

        /**
         * 节点是否在图形中
         * @param  {Number}  x x 坐标
         * @param  {Number}  y y 坐标
         * @return {Boolean}  是否在图形中
         */
        isPointInPath: function isPointInPath() {
          return false;
        },

        /**
         * 击中图形时是否进行包围盒判断
         * @return {Boolean} [description]
         */
        isHitBox: function isHitBox() {
          return true;
        },

        /**
         * 节点是否能够被击中
         * @param {Number} x x坐标
         * @param {Number} y y坐标
         * @return {Boolean} 是否在图形中
         */
        isHit: function isHit(x, y) {
          var self = this;
          var v = [x, y, 1];
          self.invert(v); // canvas

          if (self.isHitBox()) {
            var box = self.getBBox();
            if (box && !Inside.box(box.minX, box.maxX, box.minY, box.maxY, v[0], v[1])) {
              return false;
            }
          }
          var clip = self.__attrs.clip;
          if (clip) {
            if (clip.inside(x, y)) {
              return self.isPointInPath(v[0], v[1]);
            }
          } else {
            return self.isPointInPath(v[0], v[1]);
          }
          return false;
        },

        /**
         * @protected
         * 计算包围盒
         * @return {Object} 包围盒
         */
        calculateBox: function calculateBox() {
          return null;
        },

        // 获取拾取时线的宽度，需要考虑附加的线的宽度
        getHitLineWidth: function getHitLineWidth() {
          var attrs = this.__attrs;
          // if (!attrs.stroke) {
          //   return 0;
          // }
          var lineAppendWidth = attrs.lineAppendWidth || 0;
          var lineWidth = attrs.lineWidth || 0;
          return lineWidth + lineAppendWidth;
        },

        // 清除当前的矩阵
        clearTotalMatrix: function clearTotalMatrix() {
          this.__cfg.totalMatrix = null;
          this.__cfg.region = null;
        },
        clearBBox: function clearBBox() {
          this.__cfg.box = null;
          this.__cfg.region = null;
        },
        getBBox: function getBBox() {
          var box = this.__cfg.box;
          // 延迟计算
          if (!box) {
            box = this.calculateBox();
            if (box) {
              box.x = box.minX;
              box.y = box.minY;
              box.width = box.maxX - box.minX;
              box.height = box.maxY - box.minY;
            }
            this.__cfg.box = box;
          }
          return box;
        }
      });

      module.exports = Shape;

      /***/
    },
    /* 2 */
    /***/function (module, exports, __webpack_require__) {

      var CommonUtil = __webpack_require__(8);
      var mat3 = __webpack_require__(110);
      var vec3 = __webpack_require__(111);
      var vec2 = __webpack_require__(112);

      vec2.angle = function (v1, v2) {
        var theta = vec2.dot(v1, v2) / (vec2.length(v1) * vec2.length(v2));
        return Math.acos(CommonUtil.clamp(theta, -1, 1));
      };
      /**
       * 向量 v1 到 向量 v2 夹角的方向
       * @param  {Array} v1 向量
       * @param  {Array} v2 向量
       * @return {Boolean} >= 0 顺时针 < 0 逆时针
       */
      vec2.direction = function (v1, v2) {
        return v1[0] * v2[1] - v2[0] * v1[1];
      };
      vec2.angleTo = function (v1, v2, direct) {
        var angle = vec2.angle(v1, v2);
        var angleLargeThanPI = vec2.direction(v1, v2) >= 0;
        if (direct) {
          if (angleLargeThanPI) {
            return Math.PI * 2 - angle;
          }

          return angle;
        }

        if (angleLargeThanPI) {
          return angle;
        }
        return Math.PI * 2 - angle;
      };
      vec2.vertical = function (out, v, flag) {
        if (flag) {
          out[0] = v[1];
          out[1] = -1 * v[0];
        } else {
          out[0] = -1 * v[1];
          out[1] = v[0];
        }

        return out;
      };

      mat3.translate = function (out, a, v) {
        var transMat = new Array(9);
        mat3.fromTranslation(transMat, v);
        return mat3.multiply(out, transMat, a);
      };

      mat3.rotate = function (out, a, rad) {
        var rotateMat = new Array(9);
        mat3.fromRotation(rotateMat, rad);
        return mat3.multiply(out, rotateMat, a);
      };

      mat3.scale = function (out, a, v) {
        var scaleMat = new Array(9);
        mat3.fromScaling(scaleMat, v);
        return mat3.multiply(out, scaleMat, a);
      };

      module.exports = {
        mat3: mat3,
        vec2: vec2,
        vec3: vec3,
        transform: function transform(m, ts) {
          m = CommonUtil.clone(m);
          CommonUtil.each(ts, function (t) {
            switch (t[0]) {
              case 't':
                mat3.translate(m, m, [t[1], t[2]]);
                break;
              case 's':
                mat3.scale(m, m, [t[1], t[2]]);
                break;
              case 'r':
                mat3.rotate(m, m, t[1]);
                break;
              case 'm':
                mat3.multiply(m, m, t[1]);
                break;
              default:
                return false;
            }
          });
          return m;
        }
      };

      /***/
    },
    /* 3 */
    /***/function (module, exports, __webpack_require__) {

      var Line = __webpack_require__(26);
      var Quadratic = __webpack_require__(27);
      var Cubic = __webpack_require__(15);
      var Arc = __webpack_require__(28);

      module.exports = {
        line: function line(x1, y1, x2, y2, lineWidth, x, y) {
          var box = Line.box(x1, y1, x2, y2, lineWidth);

          if (!this.box(box.minX, box.maxX, box.minY, box.maxY, x, y)) {
            return false;
          }

          var d = Line.pointDistance(x1, y1, x2, y2, x, y);
          if (isNaN(d)) {
            return false;
          }
          return d <= lineWidth / 2;
        },
        polyline: function polyline(points, lineWidth, x, y) {
          var l = points.length - 1;
          if (l < 1) {
            return false;
          }
          for (var i = 0; i < l; i++) {
            var x1 = points[i][0];
            var y1 = points[i][1];
            var x2 = points[i + 1][0];
            var y2 = points[i + 1][1];

            if (this.line(x1, y1, x2, y2, lineWidth, x, y)) {
              return true;
            }
          }

          return false;
        },
        cubicline: function cubicline(x1, y1, x2, y2, x3, y3, x4, y4, lineWidth, x, y) {
          return Cubic.pointDistance(x1, y1, x2, y2, x3, y3, x4, y4, x, y) <= lineWidth / 2;
        },
        quadraticline: function quadraticline(x1, y1, x2, y2, x3, y3, lineWidth, x, y) {
          return Quadratic.pointDistance(x1, y1, x2, y2, x3, y3, x, y) <= lineWidth / 2;
        },
        arcline: function arcline(cx, cy, r, startAngle, endAngle, clockwise, lineWidth, x, y) {
          return Arc.pointDistance(cx, cy, r, startAngle, endAngle, clockwise, x, y) <= lineWidth / 2;
        },
        rect: function rect(rx, ry, width, height, x, y) {
          return rx <= x && x <= rx + width && ry <= y && y <= ry + height;
        },
        circle: function circle(cx, cy, r, x, y) {
          return Math.pow(x - cx, 2) + Math.pow(y - cy, 2) <= Math.pow(r, 2);
        },
        box: function box(minX, maxX, minY, maxY, x, y) {
          return minX <= x && x <= maxX && minY <= y && y <= maxY;
        }
      };

      /***/
    },
    /* 4 */
    /***/function (module, exports, __webpack_require__) {

      var Util = __webpack_require__(0);
      var Element = __webpack_require__(17);

      var SHAPES = {
        rect: 'rect',
        circle: 'circle',
        line: 'line',
        path: 'path',
        marker: 'marker',
        text: 'text',
        polygon: 'polygon',
        image: 'image',
        ellipse: 'ellipse',
        dom: 'foreignObject',
        fan: 'path'
      };

      var Shape = function Shape(cfg) {
        Shape.superclass.constructor.call(this, cfg);
      };

      Shape.ATTRS = {};

      Util.extend(Shape, Element);

      Util.augment(Shape, {
        isShape: true,
        createPath: function createPath() {},
        init: function init(id) {
          Shape.superclass.init.call(this);
          var type = SHAPES[this.type];
          if (type) {
            var shape = document.createElementNS('http://www.w3.org/2000/svg', type);
            id = id || Util.uniqueId(this.type + '_');
            shape.setAttribute('id', id);
            this.setSilent('el', shape);
            this.setSilent('id', id);
          }
        },

        /**
         * 节点是否在图形中
         * @param  {Number}  x x 坐标
         * @param  {Number}  y y 坐标
         * @return {Boolean}  是否在图形中
         */
        isPointInPath: function isPointInPath() {
          return false;
        },

        /**
         * 击中图形时是否进行包围盒判断
         * @return {Boolean} [description]
         */
        isHitBox: function isHitBox() {
          return true;
        },

        /**
         * 节点是否能够被击中
         * @return {Boolean} 是否在图形中
         */
        isHit: function isHit() {
          return false;
        },

        /**
         * @protected
         * @protected
         * 计算包围盒
         * @return {Object} 包围盒
         */
        calculateBox: function calculateBox() {
          return null;
        },

        // 获取拾取时线的宽度，需要考虑附加的线的宽度
        getHitLineWidth: function getHitLineWidth() {
          var attrs = this.__attrs;
          // if (!attrs.stroke) {
          //   return 0;
          // }
          var lineAppendWidth = attrs.lineAppendWidth || 0;
          var lineWidth = attrs.lineWidth || 0;
          return lineWidth + lineAppendWidth;
        },

        // 清除当前的矩阵
        clearTotalMatrix: function clearTotalMatrix() {
          this.__cfg.totalMatrix = null;
          this.__cfg.region = null;
        },
        clearBBox: function clearBBox() {
          this.__cfg.box = null;
          this.__cfg.region = null;
        }
      });

      module.exports = Shape;

      /***/
    },
    /* 5 */
    /***/function (module, exports) {

      var isArrayLike = function isArrayLike(value) {
        /**
         * isArrayLike([1, 2, 3]) => true
         * isArrayLike(document.body.children) => true
         * isArrayLike('abc') => true
         * isArrayLike(Function) => false
         */
        return value !== null && typeof value !== 'function' && isFinite(value.length);
      };

      module.exports = isArrayLike;

      /***/
    },
    /* 6 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__src_color__ = __webpack_require__(22);
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "a", function () {
        return __WEBPACK_IMPORTED_MODULE_0__src_color__["e"];
      });
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "f", function () {
        return __WEBPACK_IMPORTED_MODULE_0__src_color__["g"];
      });
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "d", function () {
        return __WEBPACK_IMPORTED_MODULE_0__src_color__["f"];
      });
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__src_lab__ = __webpack_require__(134);
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "e", function () {
        return __WEBPACK_IMPORTED_MODULE_1__src_lab__["a"];
      });
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "c", function () {
        return __WEBPACK_IMPORTED_MODULE_1__src_lab__["b"];
      });
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__src_cubehelix__ = __webpack_require__(135);
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "b", function () {
        return __WEBPACK_IMPORTED_MODULE_2__src_cubehelix__["a"];
      });

      /***/
    },
    /* 7 */
    /***/function (module, exports) {

      var _typeof = typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
      };

      var PI = Math.PI;
      var sin = Math.sin;
      var cos = Math.cos;
      var atan2 = Math.atan2;
      var DEFAULT_LENGTH = 10;
      var DEFAULT_ANGLE = PI / 3;

      function _addArrow(ctx, attrs, x1, y1, x2, y2) {
        var leftX = void 0;
        var leftY = void 0;
        var rightX = void 0;
        var rightY = void 0;
        var offsetX = void 0;
        var offsetY = void 0;
        var angle = void 0;

        if (!attrs.fill) {
          // 闭合的不绘制箭头
          var arrowLength = attrs.arrowLength || DEFAULT_LENGTH;
          var arrowAngle = attrs.arrowAngle ? attrs.arrowAngle * PI / 180 : DEFAULT_ANGLE; // 转换为弧
          // Calculate angle
          angle = atan2(y2 - y1, x2 - x1);
          // Adjust angle correctly
          angle -= PI;
          // Calculate offset to place arrow at edge of path
          offsetX = attrs.lineWidth * cos(angle);
          offsetY = attrs.lineWidth * sin(angle);

          // Calculate coordinates for left half of arrow
          leftX = x2 + arrowLength * cos(angle + arrowAngle / 2);
          leftY = y2 + arrowLength * sin(angle + arrowAngle / 2);
          // Calculate coordinates for right half of arrow
          rightX = x2 + arrowLength * cos(angle - arrowAngle / 2);
          rightY = y2 + arrowLength * sin(angle - arrowAngle / 2);
          ctx.beginPath();
          // Draw left half of arrow
          ctx.moveTo(leftX - offsetX, leftY - offsetY);
          ctx.lineTo(x2 - offsetX, y2 - offsetY);
          // Draw right half of arrow
          ctx.lineTo(rightX - offsetX, rightY - offsetY);

          // Visually connect arrow to path
          ctx.moveTo(x2 - offsetX, y2 - offsetY);
          ctx.lineTo(x2 + offsetX, y2 + offsetY);
          // Move back to end of path
          ctx.moveTo(x2, y2);
          ctx.stroke();
        }
      }

      function _addMarker(ctx, attrs, x1, y1, x2, y2, shape) {
        var marker = shape.__attrs;
        if (!marker.x) {
          marker.x = x2;
        }
        if (!marker.y) {
          marker.y = y2;
        }
        if (!marker.r) {
          marker.r = attrs.lineWidth;
        }

        var deg = 0;
        var x = x2 - x1;
        var y = y2 - y1;
        var tan = Math.atan(x / y);
        if (y === 0 && x < 0) {
          deg = Math.PI;
        } else if (x > 0 && y > 0) {
          deg = Math.PI / 2 - tan;
        } else if (x < 0 && y < 0) {
          deg = -Math.PI / 2 - tan;
        } else if (x >= 0 && y < 0) {
          deg = -tan - Math.PI / 2;
        } else if (x <= 0 && y > 0) {
          deg = Math.PI / 2 - tan;
        }
        ctx.save();
        ctx.beginPath();
        ctx.translate(marker.x, marker.y);
        ctx.rotate(deg);
        ctx.translate(-marker.x, -marker.y);
        shape.createPath(ctx);
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.fillStyle = shape.attr('fill') || ctx.strokeStyle;
        ctx.fill();
        ctx.restore();
      }

      module.exports = {
        addStartArrow: function addStartArrow(ctx, attrs, x1, y1, x2, y2) {
          if (_typeof(attrs.startArrow) === 'object') {
            _addMarker(ctx, attrs, x1, y1, x2, y2, attrs.startArrow);
          } else if (attrs.startArrow) {
            _addArrow(ctx, attrs, x1, y1, x2, y2);
          }
        },
        addEndArrow: function addEndArrow(ctx, attrs, x1, y1, x2, y2) {
          if (_typeof(attrs.endArrow) === 'object') {
            _addMarker(ctx, attrs, x1, y1, x2, y2, attrs.endArrow);
          } else if (attrs.endArrow) {
            _addArrow(ctx, attrs, x1, y1, x2, y2);
          }
        }
      };

      /***/
    },
    /* 8 */
    /***/function (module, exports, __webpack_require__) {

      var Util = __webpack_require__(81);

      module.exports = {
        isFunction: Util.isFunction,
        isObject: Util.isObject,
        isBoolean: Util.isBoolean,
        isNil: Util.isNil,
        isString: Util.isString,
        isArray: Util.isArray,
        isNumber: Util.isNumber,
        isEmpty: Util.isEmpty, // isBlank
        uniqueId: Util.uniqueId,
        clone: Util.clone,
        assign: Util.mix, // simpleMix
        merge: Util.deepMix, // mix
        upperFirst: Util.upperFirst, // ucfirst
        each: Util.each,
        isEqual: Util.isEqual,
        toArray: Util.toArray,
        extend: Util.extend,
        augment: Util.augment,
        remove: Util.arrayUtil.pull,
        isNumberEqual: Util.isNumberEqual,
        toRadian: Util.toRadian,
        toDegree: Util.toDegree,
        mod: Util.mod,
        clamp: Util.clamp
      };

      /***/
    },
    /* 9 */
    /***/function (module, exports) {

      var toString = {}.toString;
      var isType = function isType(value, type) {
        return toString.call(value) === '[object ' + type + ']';
      };

      module.exports = isType;

      /***/
    },
    /* 10 */
    /***/function (module, exports, __webpack_require__) {

      var isObject = __webpack_require__(90);
      var isArray = __webpack_require__(11);

      var each = function each(elements, func) {
        if (!elements) {
          return;
        }
        var rst = void 0;
        if (isArray(elements)) {
          for (var i = 0, len = elements.length; i < len; i++) {
            rst = func(elements[i], i);
            if (rst === false) {
              break;
            }
          }
        } else if (isObject(elements)) {
          for (var k in elements) {
            if (elements.hasOwnProperty(k)) {
              rst = func(elements[k], k);
              if (rst === false) {
                break;
              }
            }
          }
        }
      };

      module.exports = each;

      /***/
    },
    /* 11 */
    /***/function (module, exports, __webpack_require__) {

      var isType = __webpack_require__(9);

      var isArray = Array.isArray ? Array.isArray : function (value) {
        return isType(value, 'Array');
      };

      module.exports = isArray;

      /***/
    },
    /* 12 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony export (immutable) */
      __webpack_exports__["c"] = hue;
      /* harmony export (immutable) */__webpack_exports__["b"] = gamma;
      /* harmony export (immutable) */__webpack_exports__["a"] = nogamma;
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__constant__ = __webpack_require__(56);

      function linear(a, d) {
        return function (t) {
          return a + t * d;
        };
      }

      function exponential(a, b, y) {
        return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function (t) {
          return Math.pow(a + t * b, y);
        };
      }

      function hue(a, b) {
        var d = b - a;
        return d ? linear(a, d > 180 || d < -180 ? d - 360 * Math.round(d / 360) : d) : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(isNaN(a) ? b : a);
      }

      function gamma(y) {
        return (y = +y) === 1 ? nogamma : function (a, b) {
          return b - a ? exponential(a, b, y) : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(isNaN(a) ? b : a);
        };
      }

      function nogamma(a, b) {
        var d = b - a;
        return d ? linear(a, d) : Object(__WEBPACK_IMPORTED_MODULE_0__constant__["a" /* default */])(isNaN(a) ? b : a);
      }

      /***/
    },
    /* 13 */
    /***/function (module, exports, __webpack_require__) {

      /**
       * 是否为函数
       * @param  {*} fn 对象
       * @return {Boolean}  是否函数
       */
      var isType = __webpack_require__(9);

      var isFunction = function isFunction(value) {
        return isType(value, 'Function');
      };

      module.exports = isFunction;

      /***/
    },
    /* 14 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony default export */
      __webpack_exports__["a"] = function (a, b) {
        return a = +a, b -= a, function (t) {
          return a + b * t;
        };
      };

      /***/
    },
    /* 15 */
    /***/function (module, exports, __webpack_require__) {

      var Util = __webpack_require__(0);
      var vec2 = __webpack_require__(2).vec2;

      function cubicAt(p0, p1, p2, p3, t) {
        var onet = 1 - t;
        return onet * onet * (onet * p3 + 3 * t * p2) + t * t * (t * p0 + 3 * onet * p1);
      }

      function cubicDerivativeAt(p0, p1, p2, p3, t) {
        var onet = 1 - t;
        return 3 * (((p1 - p0) * onet + 2 * (p2 - p1) * t) * onet + (p3 - p2) * t * t);
      }

      function cubicProjectPoint(x1, y1, x2, y2, x3, y3, x4, y4, x, y, out) {
        var t = void 0;
        var interval = 0.005;
        var d = Infinity;
        var _t = void 0;
        var v1 = void 0;
        var d1 = void 0;
        var d2 = void 0;
        var v2 = void 0;
        var prev = void 0;
        var next = void 0;
        var EPSILON = 0.0001;
        var v0 = [x, y];

        for (_t = 0; _t < 1; _t += 0.05) {
          v1 = [cubicAt(x1, x2, x3, x4, _t), cubicAt(y1, y2, y3, y4, _t)];

          d1 = vec2.squaredDistance(v0, v1);
          if (d1 < d) {
            t = _t;
            d = d1;
          }
        }
        d = Infinity;

        for (var i = 0; i < 32; i++) {
          if (interval < EPSILON) {
            break;
          }

          prev = t - interval;
          next = t + interval;

          v1 = [cubicAt(x1, x2, x3, x4, prev), cubicAt(y1, y2, y3, y4, prev)];

          d1 = vec2.squaredDistance(v0, v1);

          if (prev >= 0 && d1 < d) {
            t = prev;
            d = d1;
          } else {
            v2 = [cubicAt(x1, x2, x3, x4, next), cubicAt(y1, y2, y3, y4, next)];

            d2 = vec2.squaredDistance(v0, v2);

            if (next <= 1 && d2 < d) {
              t = next;
              d = d2;
            } else {
              interval *= 0.5;
            }
          }
        }

        if (out) {
          out.x = cubicAt(x1, x2, x3, x4, t);
          out.y = cubicAt(y1, y2, y3, y4, t);
        }

        return Math.sqrt(d);
      }

      function cubicExtrema(p0, p1, p2, p3) {
        var a = 3 * p0 - 9 * p1 + 9 * p2 - 3 * p3;
        var b = 6 * p1 - 12 * p2 + 6 * p3;
        var c = 3 * p2 - 3 * p3;
        var extrema = [];
        var t1 = void 0;
        var t2 = void 0;
        var discSqrt = void 0;

        if (Util.isNumberEqual(a, 0)) {
          if (!Util.isNumberEqual(b, 0)) {
            t1 = -c / b;
            if (t1 >= 0 && t1 <= 1) {
              extrema.push(t1);
            }
          }
        } else {
          var disc = b * b - 4 * a * c;
          if (Util.isNumberEqual(disc, 0)) {
            extrema.push(-b / (2 * a));
          } else if (disc > 0) {
            discSqrt = Math.sqrt(disc);
            t1 = (-b + discSqrt) / (2 * a);
            t2 = (-b - discSqrt) / (2 * a);
            if (t1 >= 0 && t1 <= 1) {
              extrema.push(t1);
            }
            if (t2 >= 0 && t2 <= 1) {
              extrema.push(t2);
            }
          }
        }
        return extrema;
      }

      function base3(t, p1, p2, p3, p4) {
        var t1 = -3 * p1 + 9 * p2 - 9 * p3 + 3 * p4;
        var t2 = t * t1 + 6 * p1 - 12 * p2 + 6 * p3;
        return t * t2 - 3 * p1 + 3 * p2;
      }

      function cubiclLen(x1, y1, x2, y2, x3, y3, x4, y4, z) {
        if (Util.isNil(z)) {
          z = 1;
        }
        z = z > 1 ? 1 : z < 0 ? 0 : z;
        var z2 = z / 2;
        var n = 12;
        var Tvalues = [-0.1252, 0.1252, -0.3678, 0.3678, -0.5873, 0.5873, -0.7699, 0.7699, -0.9041, 0.9041, -0.9816, 0.9816];
        var Cvalues = [0.2491, 0.2491, 0.2335, 0.2335, 0.2032, 0.2032, 0.1601, 0.1601, 0.1069, 0.1069, 0.0472, 0.0472];
        var sum = 0;
        for (var i = 0; i < n; i++) {
          var ct = z2 * Tvalues[i] + z2;
          var xbase = base3(ct, x1, x2, x3, x4);
          var ybase = base3(ct, y1, y2, y3, y4);
          var comb = xbase * xbase + ybase * ybase;
          sum += Cvalues[i] * Math.sqrt(comb);
        }
        return z2 * sum;
      }

      module.exports = {
        at: cubicAt,
        derivativeAt: cubicDerivativeAt,
        projectPoint: function projectPoint(x1, y1, x2, y2, x3, y3, x4, y4, x, y) {
          var rst = {};
          cubicProjectPoint(x1, y1, x2, y2, x3, y3, x4, y4, x, y, rst);
          return rst;
        },

        pointDistance: cubicProjectPoint,
        extrema: cubicExtrema,
        len: cubiclLen
      };

      /***/
    },
    /* 16 */
    /***/function (module, exports) {

      function _mix(dist, obj) {
        for (var key in obj) {
          if (obj.hasOwnProperty(key) && key !== 'constructor' && obj[key] !== undefined) {
            dist[key] = obj[key];
          }
        }
      }

      var mix = function mix(dist, src1, src2, src3) {
        if (src1) _mix(dist, src1);
        if (src2) _mix(dist, src2);
        if (src3) _mix(dist, src3);
        return dist;
      };

      module.exports = mix;

      /***/
    },
    /* 17 */
    /***/function (module, exports, __webpack_require__) {

      var Util = __webpack_require__(0);
      var Attribute = __webpack_require__(108);
      var Transform = __webpack_require__(109);
      var Animate = __webpack_require__(39);
      var EventEmitter = __webpack_require__(40);

      var Element = function Element(cfg) {
        this.__cfg = {
          zIndex: 0,
          capture: true,
          visible: true,
          destroyed: false
        }; // 配置存放地

        Util.assign(this.__cfg, this.getDefaultCfg(), cfg); // Element.CFG不合并，提升性能 合并默认配置，用户配置->继承默认配置->Element默认配置
        // 在子元素的init中创建新svg元素，然后设置属性和变换。在这边设置id而不是attr里，是考虑id一旦设置后应不能修改
        this.init(cfg ? cfg.id : null); // 类型初始化
        this.initAttrs(this.__cfg.attrs); // 初始化绘图属性
        this.initTransform(); // 初始化变换
      };

      Element.CFG = {
        /**
         * 唯一标示
         * @type {Number}
         */
        id: null,
        /**
         * Z轴的层叠关系，Z值越大离用户越近
         * @type {Number}
         */
        zIndex: 0,
        /**
         * Canvas对象
         * @type: {Object}
         */
        canvas: null,
        /**
         * 父元素指针
         * @type {Object}
         */
        parent: null,
        /**
         * 用来设置当前对象是否能被捕捉
         * true 能
         * false 不能
         * 对象默认是都可以被捕捉的, 当capture为false时，group.getShape(x, y)方法无法获得该元素
         * 通过将不必要捕捉的元素的该属性设置成false, 来提高捕捉性能
         * @type {Boolean}
         **/
        capture: true,
        /**
         * 画布的上下文
         * @type {Object}
         */
        context: null,
        /**
         * 是否显示
         * @type {Boolean}
         */
        visible: true,
        /**
         * 是否被销毁
         * @type: {Boolean}
         */
        destroyed: false
      };

      Util.augment(Element, Attribute, Transform, EventEmitter, Animate, {
        init: function init() {
          this.setSilent('animable', true);
          this.setSilent('animating', false); // 初始时不处于动画状态
        },
        getParent: function getParent() {
          return this.get('parent');
        },

        /**
         * 获取默认的配置信息
         * @protected
         * @return {Object} 默认的属性
         */
        getDefaultCfg: function getDefaultCfg() {
          return {};
        },
        set: function set(name, value) {
          if (name === 'zIndex') {
            this._beforeSetZIndex(value);
          }
          this.__cfg[name] = value;
          return this;
        },
        setSilent: function setSilent(name, value) {
          this.__cfg[name] = value;
        },
        get: function get(name) {
          return this.__cfg[name];
        },
        draw: function draw() {},
        drawInner: function drawInner() {},
        show: function show() {
          this.set('visible', true);
          var el = this.get('el');
          if (el) {
            el.setAttribute('visibility', 'visible');
          }
          return this;
        },
        hide: function hide() {
          this.set('visible', false);
          var el = this.get('el');
          if (el) {
            el.setAttribute('visibility', 'hidden');
          }
          return this;
        },
        remove: function remove(destroy) {
          var el = this.get('el');
          if (destroy === undefined) {
            destroy = true;
          }

          if (this.get('parent')) {
            var parent = this.get('parent');
            var children = parent.get('children');
            Util.remove(children, this);
            el.parentNode.removeChild(el);
          }

          if (destroy) {
            this.destroy();
          }

          return this;
        },
        destroy: function destroy() {
          var destroyed = this.get('destroyed');
          if (destroyed) {
            return;
          }
          this.__cfg = {};
          this.__attrs = null;
          this.removeEvent(); // 移除所有的事件
          this.set('destroyed', true);
        },
        _beforeSetZIndex: function _beforeSetZIndex(zIndex) {
          this.__cfg.zIndex = zIndex;

          if (!Util.isNil(this.get('parent'))) {
            this.get('parent').sort();
          }
          return zIndex;
        },
        _setAttrs: function _setAttrs(attrs) {
          this.attr(attrs);
          return attrs;
        },
        setZIndex: function setZIndex(zIndex) {
          this.__cfg.zIndex = zIndex;
          return zIndex;
        },
        clone: function clone() {
          return Util.clone(this);
        },
        getBBox: function getBBox() {
          var el = this.get('el');
          if (!el) {
            return {
              minX: 0,
              minY: 0,
              maxX: 0,
              maxY: 0,
              width: 0,
              height: 0,
              x: 0,
              y: 0
            };
          }
          var bbox = el.getBBox();
          if (!el.parentNode || bbox.width === 0 && bbox.height === 0) {
            var node = el.cloneNode();
            node.innerHTML = el.innerHTML;
            node.setAttribute('visible', 'hidden');
            var svg = document.getElementsByTagName('svg')[0];
            svg.appendChild(node);
            bbox = node.getBBox();
            svg.removeChild(node);
          }
          bbox.minX = bbox.x;
          bbox.minY = bbox.y;
          bbox.maxX = bbox.x + bbox.width;
          bbox.maxY = bbox.y + bbox.height;
          return {
            minX: bbox.x,
            minY: bbox.y,
            maxX: bbox.x + bbox.width,
            maxY: bbox.y + bbox.height,
            width: bbox.width,
            height: bbox.height,
            x: bbox.x,
            y: bbox.y
          };
        }
      });

      module.exports = Element;

      /***/
    },
    /* 18 */
    /***/function (module, exports) {

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.setMatrixArrayType = setMatrixArrayType;
      exports.toRadian = toRadian;
      exports.equals = equals;
      /**
       * Common utilities
       * @module glMatrix
       */

      // Configuration Constants
      var EPSILON = exports.EPSILON = 0.000001;
      var ARRAY_TYPE = exports.ARRAY_TYPE = typeof Float32Array !== 'undefined' ? Float32Array : Array;
      var RANDOM = exports.RANDOM = Math.random;

      /**
       * Sets the type of array used when creating new vectors and matrices
       *
       * @param {Type} type Array type, such as Float32Array or Array
       */
      function setMatrixArrayType(type) {
        exports.ARRAY_TYPE = ARRAY_TYPE = type;
      }

      var degree = Math.PI / 180;

      /**
       * Convert Degree To Radian
       *
       * @param {Number} a Angle in Degrees
       */
      function toRadian(a) {
        return a * degree;
      }

      /**
       * Tests whether or not the arguments have approximately the same value, within an absolute
       * or relative tolerance of glMatrix.EPSILON (an absolute tolerance is used for values less
       * than or equal to 1.0, and a relative tolerance is used for larger values)
       *
       * @param {Number} a The first number to test.
       * @param {Number} b The second number to test.
       * @returns {Boolean} True if the numbers are approximately equal, false otherwise.
       */
      function equals(a, b) {
        return Math.abs(a - b) <= EPSILON * Math.max(1.0, Math.abs(a), Math.abs(b));
      }

      /***/
    },
    /* 19 */
    /***/function (module, exports, __webpack_require__) {

      var _typeof = typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
      };

      var Util = __webpack_require__(8);
      var SPACES = '\t\n\x0B\f\r \xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029';
      var PATH_COMMAND = new RegExp('([a-z])[' + SPACES + ',]*((-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?[' + SPACES + ']*,?[' + SPACES + ']*)+)', 'ig');
      var PATH_VALUES = new RegExp('(-?\\d*\\.?\\d*(?:e[\\-+]?\\d+)?)[' + SPACES + ']*,?[' + SPACES + ']*', 'ig');

      // Parses given path string into an array of arrays of path segments
      var parsePathString = function parsePathString(pathString) {
        if (!pathString) {
          return null;
        }

        if ((typeof pathString === 'undefined' ? 'undefined' : _typeof(pathString)) === _typeof([])) {
          return pathString;
        }
        var paramCounts = {
          a: 7,
          c: 6,
          o: 2,
          h: 1,
          l: 2,
          m: 2,
          r: 4,
          q: 4,
          s: 4,
          t: 2,
          v: 1,
          u: 3,
          z: 0
        };
        var data = [];

        String(pathString).replace(PATH_COMMAND, function (a, b, c) {
          var params = [];
          var name = b.toLowerCase();
          c.replace(PATH_VALUES, function (a, b) {
            b && params.push(+b);
          });
          if (name === 'm' && params.length > 2) {
            data.push([b].concat(params.splice(0, 2)));
            name = 'l';
            b = b === 'm' ? 'l' : 'L';
          }
          if (name === 'o' && params.length === 1) {
            data.push([b, params[0]]);
          }
          if (name === 'r') {
            data.push([b].concat(params));
          } else {
            while (params.length >= paramCounts[name]) {
              data.push([b].concat(params.splice(0, paramCounts[name])));
              if (!paramCounts[name]) {
                break;
              }
            }
          }
        });

        return data;
      };

      // http://schepers.cc/getting-to-the-point
      var catmullRom2bezier = function catmullRom2bezier(crp, z) {
        var d = [];
        for (var i = 0, iLen = crp.length; iLen - 2 * !z > i; i += 2) {
          var p = [{
            x: +crp[i - 2],
            y: +crp[i - 1]
          }, {
            x: +crp[i],
            y: +crp[i + 1]
          }, {
            x: +crp[i + 2],
            y: +crp[i + 3]
          }, {
            x: +crp[i + 4],
            y: +crp[i + 5]
          }];
          if (z) {
            if (!i) {
              p[0] = {
                x: +crp[iLen - 2],
                y: +crp[iLen - 1]
              };
            } else if (iLen - 4 === i) {
              p[3] = {
                x: +crp[0],
                y: +crp[1]
              };
            } else if (iLen - 2 === i) {
              p[2] = {
                x: +crp[0],
                y: +crp[1]
              };
              p[3] = {
                x: +crp[2],
                y: +crp[3]
              };
            }
          } else {
            if (iLen - 4 === i) {
              p[3] = p[2];
            } else if (!i) {
              p[0] = {
                x: +crp[i],
                y: +crp[i + 1]
              };
            }
          }
          d.push(['C', (-p[0].x + 6 * p[1].x + p[2].x) / 6, (-p[0].y + 6 * p[1].y + p[2].y) / 6, (p[1].x + 6 * p[2].x - p[3].x) / 6, (p[1].y + 6 * p[2].y - p[3].y) / 6, p[2].x, p[2].y]);
        }

        return d;
      };

      var ellipsePath = function ellipsePath(x, y, rx, ry, a) {
        var res = [];
        if (a === null && ry === null) {
          ry = rx;
        }
        x = +x;
        y = +y;
        rx = +rx;
        ry = +ry;
        if (a !== null) {
          var rad = Math.PI / 180;
          var x1 = x + rx * Math.cos(-ry * rad);
          var x2 = x + rx * Math.cos(-a * rad);
          var y1 = y + rx * Math.sin(-ry * rad);
          var y2 = y + rx * Math.sin(-a * rad);
          res = [['M', x1, y1], ['A', rx, rx, 0, +(a - ry > 180), 0, x2, y2]];
        } else {
          res = [['M', x, y], ['m', 0, -ry], ['a', rx, ry, 0, 1, 1, 0, 2 * ry], ['a', rx, ry, 0, 1, 1, 0, -2 * ry], ['z']];
        }
        return res;
      };

      var pathToAbsolute = function pathToAbsolute(pathArray) {
        pathArray = parsePathString(pathArray);

        if (!pathArray || !pathArray.length) {
          return [['M', 0, 0]];
        }
        var res = [];
        var x = 0;
        var y = 0;
        var mx = 0;
        var my = 0;
        var start = 0;
        var pa0 = void 0;
        var dots = void 0;
        if (pathArray[0][0] === 'M') {
          x = +pathArray[0][1];
          y = +pathArray[0][2];
          mx = x;
          my = y;
          start++;
          res[0] = ['M', x, y];
        }
        var crz = pathArray.length === 3 && pathArray[0][0] === 'M' && pathArray[1][0].toUpperCase() === 'R' && pathArray[2][0].toUpperCase() === 'Z';
        for (var r, pa, i = start, ii = pathArray.length; i < ii; i++) {
          res.push(r = []);
          pa = pathArray[i];
          pa0 = pa[0];
          if (pa0 !== pa0.toUpperCase()) {
            r[0] = pa0.toUpperCase();
            switch (r[0]) {
              case 'A':
                r[1] = pa[1];
                r[2] = pa[2];
                r[3] = pa[3];
                r[4] = pa[4];
                r[5] = pa[5];
                r[6] = +pa[6] + x;
                r[7] = +pa[7] + y;
                break;
              case 'V':
                r[1] = +pa[1] + y;
                break;
              case 'H':
                r[1] = +pa[1] + x;
                break;
              case 'R':
                dots = [x, y].concat(pa.slice(1));
                for (var j = 2, jj = dots.length; j < jj; j++) {
                  dots[j] = +dots[j] + x;
                  dots[++j] = +dots[j] + y;
                }
                res.pop();
                res = res.concat(catmullRom2bezier(dots, crz));
                break;
              case 'O':
                res.pop();
                dots = ellipsePath(x, y, pa[1], pa[2]);
                dots.push(dots[0]);
                res = res.concat(dots);
                break;
              case 'U':
                res.pop();
                res = res.concat(ellipsePath(x, y, pa[1], pa[2], pa[3]));
                r = ['U'].concat(res[res.length - 1].slice(-2));
                break;
              case 'M':
                mx = +pa[1] + x;
                my = +pa[2] + y;
                break; // for lint
              default:
                for (var _j = 1, _jj = pa.length; _j < _jj; _j++) {
                  r[_j] = +pa[_j] + (_j % 2 ? x : y);
                }
            }
          } else if (pa0 === 'R') {
            dots = [x, y].concat(pa.slice(1));
            res.pop();
            res = res.concat(catmullRom2bezier(dots, crz));
            r = ['R'].concat(pa.slice(-2));
          } else if (pa0 === 'O') {
            res.pop();
            dots = ellipsePath(x, y, pa[1], pa[2]);
            dots.push(dots[0]);
            res = res.concat(dots);
          } else if (pa0 === 'U') {
            res.pop();
            res = res.concat(ellipsePath(x, y, pa[1], pa[2], pa[3]));
            r = ['U'].concat(res[res.length - 1].slice(-2));
          } else {
            for (var k = 0, kk = pa.length; k < kk; k++) {
              r[k] = pa[k];
            }
          }
          pa0 = pa0.toUpperCase();
          if (pa0 !== 'O') {
            switch (r[0]) {
              case 'Z':
                x = +mx;
                y = +my;
                break;
              case 'H':
                x = r[1];
                break;
              case 'V':
                y = r[1];
                break;
              case 'M':
                mx = r[r.length - 2];
                my = r[r.length - 1];
                break; // for lint
              default:
                x = r[r.length - 2];
                y = r[r.length - 1];
            }
          }
        }

        return res;
      };

      var l2c = function l2c(x1, y1, x2, y2) {
        return [x1, y1, x2, y2, x2, y2];
      };

      var q2c = function q2c(x1, y1, ax, ay, x2, y2) {
        var _13 = 1 / 3;
        var _23 = 2 / 3;
        return [_13 * x1 + _23 * ax, _13 * y1 + _23 * ay, _13 * x2 + _23 * ax, _13 * y2 + _23 * ay, x2, y2];
      };

      var a2c = function a2c(x1, y1, rx, ry, angle, large_arc_flag, sweep_flag, x2, y2, recursive) {
        // for more information of where this math came from visit:
        // http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
        if (rx === ry) {
          rx += 1;
        }

        var _120 = Math.PI * 120 / 180;
        var rad = Math.PI / 180 * (+angle || 0);
        var res = [];
        var xy = void 0;
        var f1 = void 0;
        var f2 = void 0;
        var cx = void 0;
        var cy = void 0;
        var rotate = function rotate(x, y, rad) {
          var X = x * Math.cos(rad) - y * Math.sin(rad);
          var Y = x * Math.sin(rad) + y * Math.cos(rad);
          return {
            x: X,
            y: Y
          };
        };
        if (!recursive) {
          xy = rotate(x1, y1, -rad);
          x1 = xy.x;
          y1 = xy.y;
          xy = rotate(x2, y2, -rad);
          x2 = xy.x;
          y2 = xy.y;
          if (x1 === x2 && y1 === y2) {
            // 若弧的起始点和终点重叠则错开一点
            x2 += 1;
            y2 += 1;
          }
          // const cos = Math.cos(Math.PI / 180 * angle);
          // const sin = Math.sin(Math.PI / 180 * angle);
          var x = (x1 - x2) / 2;
          var y = (y1 - y2) / 2;
          var h = x * x / (rx * rx) + y * y / (ry * ry);
          if (h > 1) {
            h = Math.sqrt(h);
            rx = h * rx;
            ry = h * ry;
          }
          var rx2 = rx * rx;
          var ry2 = ry * ry;
          var k = (large_arc_flag === sweep_flag ? -1 : 1) * Math.sqrt(Math.abs((rx2 * ry2 - rx2 * y * y - ry2 * x * x) / (rx2 * y * y + ry2 * x * x)));
          cx = k * rx * y / ry + (x1 + x2) / 2;
          cy = k * -ry * x / rx + (y1 + y2) / 2;
          f1 = Math.asin(((y1 - cy) / ry).toFixed(9));
          f2 = Math.asin(((y2 - cy) / ry).toFixed(9));

          f1 = x1 < cx ? Math.PI - f1 : f1;
          f2 = x2 < cx ? Math.PI - f2 : f2;
          f1 < 0 && (f1 = Math.PI * 2 + f1);
          f2 < 0 && (f2 = Math.PI * 2 + f2);
          if (sweep_flag && f1 > f2) {
            f1 = f1 - Math.PI * 2;
          }
          if (!sweep_flag && f2 > f1) {
            f2 = f2 - Math.PI * 2;
          }
        } else {
          f1 = recursive[0];
          f2 = recursive[1];
          cx = recursive[2];
          cy = recursive[3];
        }
        var df = f2 - f1;
        if (Math.abs(df) > _120) {
          var f2old = f2;
          var x2old = x2;
          var y2old = y2;
          f2 = f1 + _120 * (sweep_flag && f2 > f1 ? 1 : -1);
          x2 = cx + rx * Math.cos(f2);
          y2 = cy + ry * Math.sin(f2);
          res = a2c(x2, y2, rx, ry, angle, 0, sweep_flag, x2old, y2old, [f2, f2old, cx, cy]);
        }
        df = f2 - f1;
        var c1 = Math.cos(f1);
        var s1 = Math.sin(f1);
        var c2 = Math.cos(f2);
        var s2 = Math.sin(f2);
        var t = Math.tan(df / 4);
        var hx = 4 / 3 * rx * t;
        var hy = 4 / 3 * ry * t;
        var m1 = [x1, y1];
        var m2 = [x1 + hx * s1, y1 - hy * c1];
        var m3 = [x2 + hx * s2, y2 - hy * c2];
        var m4 = [x2, y2];
        m2[0] = 2 * m1[0] - m2[0];
        m2[1] = 2 * m1[1] - m2[1];
        if (recursive) {
          return [m2, m3, m4].concat(res);
        }
        res = [m2, m3, m4].concat(res).join().split(',');
        var newres = [];
        for (var i = 0, ii = res.length; i < ii; i++) {
          newres[i] = i % 2 ? rotate(res[i - 1], res[i], rad).y : rotate(res[i], res[i + 1], rad).x;
        }
        return newres;
      };

      var pathTocurve = function pathTocurve(path, path2) {
        var p = pathToAbsolute(path);
        var p2 = path2 && pathToAbsolute(path2);
        var attrs = {
          x: 0,
          y: 0,
          bx: 0,
          by: 0,
          X: 0,
          Y: 0,
          qx: null,
          qy: null
        };
        var attrs2 = {
          x: 0,
          y: 0,
          bx: 0,
          by: 0,
          X: 0,
          Y: 0,
          qx: null,
          qy: null
        };
        var pcoms1 = []; // path commands of original path p
        var pcoms2 = []; // path commands of original path p2
        var pfirst = ''; // temporary holder for original path command
        var pcom = ''; // holder for previous path command of original path
        var ii = void 0;
        var processPath = function processPath(path, d, pcom) {
          var nx = void 0,
              ny = void 0;
          if (!path) {
            return ['C', d.x, d.y, d.x, d.y, d.x, d.y];
          }!(path[0] in {
            T: 1,
            Q: 1
          }) && (d.qx = d.qy = null);
          switch (path[0]) {
            case 'M':
              d.X = path[1];
              d.Y = path[2];
              break;
            case 'A':
              path = ['C'].concat(a2c.apply(0, [d.x, d.y].concat(path.slice(1))));
              break;
            case 'S':
              if (pcom === 'C' || pcom === 'S') {
                // In "S" case we have to take into account, if the previous command is C/S.
                nx = d.x * 2 - d.bx; // And reflect the previous
                ny = d.y * 2 - d.by; // command's control point relative to the current point.
              } else {
                // or some else or nothing
                nx = d.x;
                ny = d.y;
              }
              path = ['C', nx, ny].concat(path.slice(1));
              break;
            case 'T':
              if (pcom === 'Q' || pcom === 'T') {
                // In "T" case we have to take into account, if the previous command is Q/T.
                d.qx = d.x * 2 - d.qx; // And make a reflection similar
                d.qy = d.y * 2 - d.qy; // to case "S".
              } else {
                // or something else or nothing
                d.qx = d.x;
                d.qy = d.y;
              }
              path = ['C'].concat(q2c(d.x, d.y, d.qx, d.qy, path[1], path[2]));
              break;
            case 'Q':
              d.qx = path[1];
              d.qy = path[2];
              path = ['C'].concat(q2c(d.x, d.y, path[1], path[2], path[3], path[4]));
              break;
            case 'L':
              path = ['C'].concat(l2c(d.x, d.y, path[1], path[2]));
              break;
            case 'H':
              path = ['C'].concat(l2c(d.x, d.y, path[1], d.y));
              break;
            case 'V':
              path = ['C'].concat(l2c(d.x, d.y, d.x, path[1]));
              break;
            case 'Z':
              path = ['C'].concat(l2c(d.x, d.y, d.X, d.Y));
              break;
            default:
              break;
          }
          return path;
        };
        var fixArc = function fixArc(pp, i) {
          if (pp[i].length > 7) {
            pp[i].shift();
            var pi = pp[i];
            while (pi.length) {
              pcoms1[i] = 'A'; // if created multiple C:s, their original seg is saved
              p2 && (pcoms2[i] = 'A'); // the same as above
              pp.splice(i++, 0, ['C'].concat(pi.splice(0, 6)));
            }
            pp.splice(i, 1);
            ii = Math.max(p.length, p2 && p2.length || 0);
          }
        };
        var fixM = function fixM(path1, path2, a1, a2, i) {
          if (path1 && path2 && path1[i][0] === 'M' && path2[i][0] !== 'M') {
            path2.splice(i, 0, ['M', a2.x, a2.y]);
            a1.bx = 0;
            a1.by = 0;
            a1.x = path1[i][1];
            a1.y = path1[i][2];
            ii = Math.max(p.length, p2 && p2.length || 0);
          }
        };
        ii = Math.max(p.length, p2 && p2.length || 0);
        for (var i = 0; i < ii; i++) {

          p[i] && (pfirst = p[i][0]); // save current path command

          if (pfirst !== 'C') {
            // C is not saved yet, because it may be result of conversion
            pcoms1[i] = pfirst; // Save current path command
            i && (pcom = pcoms1[i - 1]); // Get previous path command pcom
          }
          p[i] = processPath(p[i], attrs, pcom); // Previous path command is inputted to processPath

          if (pcoms1[i] !== 'A' && pfirst === 'C') pcoms1[i] = 'C'; // A is the only command
          // which may produce multiple C:s
          // so we have to make sure that C is also C in original path

          fixArc(p, i); // fixArc adds also the right amount of A:s to pcoms1

          if (p2) {
            // the same procedures is done to p2
            p2[i] && (pfirst = p2[i][0]);
            if (pfirst !== 'C') {
              pcoms2[i] = pfirst;
              i && (pcom = pcoms2[i - 1]);
            }
            p2[i] = processPath(p2[i], attrs2, pcom);

            if (pcoms2[i] !== 'A' && pfirst === 'C') {
              pcoms2[i] = 'C';
            }

            fixArc(p2, i);
          }
          fixM(p, p2, attrs, attrs2, i);
          fixM(p2, p, attrs2, attrs, i);
          var seg = p[i];
          var seg2 = p2 && p2[i];
          var seglen = seg.length;
          var seg2len = p2 && seg2.length;
          attrs.x = seg[seglen - 2];
          attrs.y = seg[seglen - 1];
          attrs.bx = parseFloat(seg[seglen - 4]) || attrs.x;
          attrs.by = parseFloat(seg[seglen - 3]) || attrs.y;
          attrs2.bx = p2 && (parseFloat(seg2[seg2len - 4]) || attrs2.x);
          attrs2.by = p2 && (parseFloat(seg2[seg2len - 3]) || attrs2.y);
          attrs2.x = p2 && seg2[seg2len - 2];
          attrs2.y = p2 && seg2[seg2len - 1];
        }

        return p2 ? [p, p2] : p;
      };

      var p2s = /,?([a-z]),?/gi;
      var parsePathArray = function parsePathArray(path) {
        return path.join(',').replace(p2s, '$1');
      };

      var base3 = function base3(t, p1, p2, p3, p4) {
        var t1 = -3 * p1 + 9 * p2 - 9 * p3 + 3 * p4;
        var t2 = t * t1 + 6 * p1 - 12 * p2 + 6 * p3;
        return t * t2 - 3 * p1 + 3 * p2;
      };

      var bezlen = function bezlen(x1, y1, x2, y2, x3, y3, x4, y4, z) {
        if (z === null) {
          z = 1;
        }
        z = z > 1 ? 1 : z < 0 ? 0 : z;
        var z2 = z / 2;
        var n = 12;
        var Tvalues = [-0.1252, 0.1252, -0.3678, 0.3678, -0.5873, 0.5873, -0.7699, 0.7699, -0.9041, 0.9041, -0.9816, 0.9816];
        var Cvalues = [0.2491, 0.2491, 0.2335, 0.2335, 0.2032, 0.2032, 0.1601, 0.1601, 0.1069, 0.1069, 0.0472, 0.0472];
        var sum = 0;
        for (var i = 0; i < n; i++) {
          var ct = z2 * Tvalues[i] + z2;
          var xbase = base3(ct, x1, x2, x3, x4);
          var ybase = base3(ct, y1, y2, y3, y4);
          var comb = xbase * xbase + ybase * ybase;
          sum += Cvalues[i] * Math.sqrt(comb);
        }
        return z2 * sum;
      };

      var curveDim = function curveDim(x0, y0, x1, y1, x2, y2, x3, y3) {
        var tvalues = [];
        var bounds = [[], []];
        var a = void 0;
        var b = void 0;
        var c = void 0;
        var t = void 0;

        for (var i = 0; i < 2; ++i) {
          if (i === 0) {
            b = 6 * x0 - 12 * x1 + 6 * x2;
            a = -3 * x0 + 9 * x1 - 9 * x2 + 3 * x3;
            c = 3 * x1 - 3 * x0;
          } else {
            b = 6 * y0 - 12 * y1 + 6 * y2;
            a = -3 * y0 + 9 * y1 - 9 * y2 + 3 * y3;
            c = 3 * y1 - 3 * y0;
          }
          if (Math.abs(a) < 1e-12) {
            if (Math.abs(b) < 1e-12) {
              continue;
            }
            t = -c / b;
            if (t > 0 && t < 1) {
              tvalues.push(t);
            }
            continue;
          }
          var b2ac = b * b - 4 * c * a;
          var sqrtb2ac = Math.sqrt(b2ac);
          if (b2ac < 0) {
            continue;
          }
          var t1 = (-b + sqrtb2ac) / (2 * a);
          if (t1 > 0 && t1 < 1) {
            tvalues.push(t1);
          }
          var t2 = (-b - sqrtb2ac) / (2 * a);
          if (t2 > 0 && t2 < 1) {
            tvalues.push(t2);
          }
        }

        var j = tvalues.length;
        var jlen = j;
        var mt = void 0;
        while (j--) {
          t = tvalues[j];
          mt = 1 - t;
          bounds[0][j] = mt * mt * mt * x0 + 3 * mt * mt * t * x1 + 3 * mt * t * t * x2 + t * t * t * x3;
          bounds[1][j] = mt * mt * mt * y0 + 3 * mt * mt * t * y1 + 3 * mt * t * t * y2 + t * t * t * y3;
        }

        bounds[0][jlen] = x0;
        bounds[1][jlen] = y0;
        bounds[0][jlen + 1] = x3;
        bounds[1][jlen + 1] = y3;
        bounds[0].length = bounds[1].length = jlen + 2;

        return {
          min: {
            x: Math.min.apply(0, bounds[0]),
            y: Math.min.apply(0, bounds[1])
          },
          max: {
            x: Math.max.apply(0, bounds[0]),
            y: Math.max.apply(0, bounds[1])
          }
        };
      };

      var intersect = function intersect(x1, y1, x2, y2, x3, y3, x4, y4) {
        if (Math.max(x1, x2) < Math.min(x3, x4) || Math.min(x1, x2) > Math.max(x3, x4) || Math.max(y1, y2) < Math.min(y3, y4) || Math.min(y1, y2) > Math.max(y3, y4)) {
          return;
        }
        var nx = (x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4);
        var ny = (x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4);
        var denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

        if (!denominator) {
          return;
        }
        var px = nx / denominator;
        var py = ny / denominator;
        var px2 = +px.toFixed(2);
        var py2 = +py.toFixed(2);
        if (px2 < +Math.min(x1, x2).toFixed(2) || px2 > +Math.max(x1, x2).toFixed(2) || px2 < +Math.min(x3, x4).toFixed(2) || px2 > +Math.max(x3, x4).toFixed(2) || py2 < +Math.min(y1, y2).toFixed(2) || py2 > +Math.max(y1, y2).toFixed(2) || py2 < +Math.min(y3, y4).toFixed(2) || py2 > +Math.max(y3, y4).toFixed(2)) {
          return;
        }
        return {
          x: px,
          y: py
        };
      };

      var isPointInsideBBox = function isPointInsideBBox(bbox, x, y) {
        return x >= bbox.x && x <= bbox.x + bbox.width && y >= bbox.y && y <= bbox.y + bbox.height;
      };

      var rectPath = function rectPath(x, y, w, h, r) {
        if (r) {
          return [['M', +x + +r, y], ['l', w - r * 2, 0], ['a', r, r, 0, 0, 1, r, r], ['l', 0, h - r * 2], ['a', r, r, 0, 0, 1, -r, r], ['l', r * 2 - w, 0], ['a', r, r, 0, 0, 1, -r, -r], ['l', 0, r * 2 - h], ['a', r, r, 0, 0, 1, r, -r], ['z']];
        }
        var res = [['M', x, y], ['l', w, 0], ['l', 0, h], ['l', -w, 0], ['z']];
        res.parsePathArray = parsePathArray;
        return res;
      };

      var box = function box(x, y, width, height) {
        if (x === null) {
          x = y = width = height = 0;
        }
        if (y === null) {
          y = x.y;
          width = x.width;
          height = x.height;
          x = x.x;
        }
        return {
          x: x,
          y: y,
          width: width,
          w: width,
          height: height,
          h: height,
          x2: x + width,
          y2: y + height,
          cx: x + width / 2,
          cy: y + height / 2,
          r1: Math.min(width, height) / 2,
          r2: Math.max(width, height) / 2,
          r0: Math.sqrt(width * width + height * height) / 2,
          path: rectPath(x, y, width, height),
          vb: [x, y, width, height].join(' ')
        };
      };

      var isBBoxIntersect = function isBBoxIntersect(bbox1, bbox2) {
        bbox1 = box(bbox1);
        bbox2 = box(bbox2);
        return isPointInsideBBox(bbox2, bbox1.x, bbox1.y) || isPointInsideBBox(bbox2, bbox1.x2, bbox1.y) || isPointInsideBBox(bbox2, bbox1.x, bbox1.y2) || isPointInsideBBox(bbox2, bbox1.x2, bbox1.y2) || isPointInsideBBox(bbox1, bbox2.x, bbox2.y) || isPointInsideBBox(bbox1, bbox2.x2, bbox2.y) || isPointInsideBBox(bbox1, bbox2.x, bbox2.y2) || isPointInsideBBox(bbox1, bbox2.x2, bbox2.y2) || (bbox1.x < bbox2.x2 && bbox1.x > bbox2.x || bbox2.x < bbox1.x2 && bbox2.x > bbox1.x) && (bbox1.y < bbox2.y2 && bbox1.y > bbox2.y || bbox2.y < bbox1.y2 && bbox2.y > bbox1.y);
      };

      var bezierBBox = function bezierBBox(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y) {
        if (!Util.isArray(p1x)) {
          p1x = [p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y];
        }
        var bbox = curveDim.apply(null, p1x);
        return box(bbox.min.x, bbox.min.y, bbox.max.x - bbox.min.x, bbox.max.y - bbox.min.y);
      };

      var findDotsAtSegment = function findDotsAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
        var t1 = 1 - t;
        var t13 = Math.pow(t1, 3);
        var t12 = Math.pow(t1, 2);
        var t2 = t * t;
        var t3 = t2 * t;
        var x = t13 * p1x + t12 * 3 * t * c1x + t1 * 3 * t * t * c2x + t3 * p2x;
        var y = t13 * p1y + t12 * 3 * t * c1y + t1 * 3 * t * t * c2y + t3 * p2y;
        var mx = p1x + 2 * t * (c1x - p1x) + t2 * (c2x - 2 * c1x + p1x);
        var my = p1y + 2 * t * (c1y - p1y) + t2 * (c2y - 2 * c1y + p1y);
        var nx = c1x + 2 * t * (c2x - c1x) + t2 * (p2x - 2 * c2x + c1x);
        var ny = c1y + 2 * t * (c2y - c1y) + t2 * (p2y - 2 * c2y + c1y);
        var ax = t1 * p1x + t * c1x;
        var ay = t1 * p1y + t * c1y;
        var cx = t1 * c2x + t * p2x;
        var cy = t1 * c2y + t * p2y;
        var alpha = 90 - Math.atan2(mx - nx, my - ny) * 180 / Math.PI;
        // (mx > nx || my < ny) && (alpha += 180);
        return {
          x: x,
          y: y,
          m: {
            x: mx,
            y: my
          },
          n: {
            x: nx,
            y: ny
          },
          start: {
            x: ax,
            y: ay
          },
          end: {
            x: cx,
            y: cy
          },
          alpha: alpha
        };
      };

      var interHelper = function interHelper(bez1, bez2, justCount) {
        var bbox1 = bezierBBox(bez1);
        var bbox2 = bezierBBox(bez2);
        if (!isBBoxIntersect(bbox1, bbox2)) {
          return justCount ? 0 : [];
        }
        var l1 = bezlen.apply(0, bez1);
        var l2 = bezlen.apply(0, bez2);
        var n1 = ~~(l1 / 8);
        var n2 = ~~(l2 / 8);
        var dots1 = [];
        var dots2 = [];
        var xy = {};
        var res = justCount ? 0 : [];
        for (var i = 0; i < n1 + 1; i++) {
          var d = findDotsAtSegment.apply(0, bez1.concat(i / n1));
          dots1.push({
            x: d.x,
            y: d.y,
            t: i / n1
          });
        }
        for (var _i = 0; _i < n2 + 1; _i++) {
          var _d = findDotsAtSegment.apply(0, bez2.concat(_i / n2));
          dots2.push({
            x: _d.x,
            y: _d.y,
            t: _i / n2
          });
        }
        for (var _i2 = 0; _i2 < n1; _i2++) {
          for (var j = 0; j < n2; j++) {
            var di = dots1[_i2];
            var di1 = dots1[_i2 + 1];
            var dj = dots2[j];
            var dj1 = dots2[j + 1];
            var ci = Math.abs(di1.x - di.x) < 0.001 ? 'y' : 'x';
            var cj = Math.abs(dj1.x - dj.x) < 0.001 ? 'y' : 'x';
            var is = intersect(di.x, di.y, di1.x, di1.y, dj.x, dj.y, dj1.x, dj1.y);
            if (is) {
              if (xy[is.x.toFixed(4)] === is.y.toFixed(4)) {
                continue;
              }
              xy[is.x.toFixed(4)] = is.y.toFixed(4);
              var t1 = di.t + Math.abs((is[ci] - di[ci]) / (di1[ci] - di[ci])) * (di1.t - di.t);
              var t2 = dj.t + Math.abs((is[cj] - dj[cj]) / (dj1[cj] - dj[cj])) * (dj1.t - dj.t);
              if (t1 >= 0 && t1 <= 1 && t2 >= 0 && t2 <= 1) {
                if (justCount) {
                  res++;
                } else {
                  res.push({
                    x: is.x,
                    y: is.y,
                    t1: t1,
                    t2: t2
                  });
                }
              }
            }
          }
        }
        return res;
      };

      var interPathHelper = function interPathHelper(path1, path2, justCount) {
        path1 = pathTocurve(path1);
        path2 = pathTocurve(path2);
        var x1 = void 0;
        var y1 = void 0;
        var x2 = void 0;
        var y2 = void 0;
        var x1m = void 0;
        var y1m = void 0;
        var x2m = void 0;
        var y2m = void 0;
        var bez1 = void 0;
        var bez2 = void 0;
        var res = justCount ? 0 : [];
        for (var i = 0, ii = path1.length; i < ii; i++) {
          var pi = path1[i];
          if (pi[0] === 'M') {
            x1 = x1m = pi[1];
            y1 = y1m = pi[2];
          } else {
            if (pi[0] === 'C') {
              bez1 = [x1, y1].concat(pi.slice(1));
              x1 = bez1[6];
              y1 = bez1[7];
            } else {
              bez1 = [x1, y1, x1, y1, x1m, y1m, x1m, y1m];
              x1 = x1m;
              y1 = y1m;
            }
            for (var j = 0, jj = path2.length; j < jj; j++) {
              var pj = path2[j];
              if (pj[0] === 'M') {
                x2 = x2m = pj[1];
                y2 = y2m = pj[2];
              } else {
                if (pj[0] === 'C') {
                  bez2 = [x2, y2].concat(pj.slice(1));
                  x2 = bez2[6];
                  y2 = bez2[7];
                } else {
                  bez2 = [x2, y2, x2, y2, x2m, y2m, x2m, y2m];
                  x2 = x2m;
                  y2 = y2m;
                }
                var intr = interHelper(bez1, bez2, justCount);
                if (justCount) {
                  res += intr;
                } else {
                  for (var k = 0, kk = intr.length; k < kk; k++) {
                    intr[k].segment1 = i;
                    intr[k].segment2 = j;
                    intr[k].bez1 = bez1;
                    intr[k].bez2 = bez2;
                  }
                  res = res.concat(intr);
                }
              }
            }
          }
        }
        return res;
      };

      var pathIntersection = function pathIntersection(path1, path2) {
        return interPathHelper(path1, path2);
      };

      module.exports = {
        parsePathString: parsePathString,
        parsePathArray: parsePathArray,
        pathTocurve: pathTocurve,
        pathToAbsolute: pathToAbsolute,
        catmullRomToBezier: catmullRom2bezier,
        rectPath: rectPath,
        intersection: pathIntersection
      };

      /***/
    },
    /* 20 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony export (immutable) */
      __webpack_exports__["b"] = now;
      /* harmony export (immutable) */__webpack_exports__["a"] = Timer;
      /* harmony export (immutable) */__webpack_exports__["c"] = timer;
      /* harmony export (immutable) */__webpack_exports__["d"] = timerFlush;
      var _typeof = typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
      };

      var frame = 0,

      // is an animation frame pending?
      timeout = 0,

      // is a timeout pending?
      interval = 0,

      // are any timers active?
      pokeDelay = 1000,

      // how frequently we check for clock skew
      taskHead,
          taskTail,
          clockLast = 0,
          clockNow = 0,
          clockSkew = 0,
          clock = (typeof performance === "undefined" ? "undefined" : _typeof(performance)) === "object" && performance.now ? performance : Date,
          setFrame = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function (f) {
        setTimeout(f, 17);
      };

      function now() {
        return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
      }

      function clearNow() {
        clockNow = 0;
      }

      function Timer() {
        this._call = this._time = this._next = null;
      }

      Timer.prototype = timer.prototype = {
        constructor: Timer,
        restart: function restart(callback, delay, time) {
          if (typeof callback !== "function") throw new TypeError("callback is not a function");
          time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
          if (!this._next && taskTail !== this) {
            if (taskTail) taskTail._next = this;else taskHead = this;
            taskTail = this;
          }
          this._call = callback;
          this._time = time;
          sleep();
        },
        stop: function stop() {
          if (this._call) {
            this._call = null;
            this._time = Infinity;
            sleep();
          }
        }
      };

      function timer(callback, delay, time) {
        var t = new Timer();
        t.restart(callback, delay, time);
        return t;
      }

      function timerFlush() {
        now(); // Get the current time, if not already set.
        ++frame; // Pretend we’ve set an alarm, if we haven’t already.
        var t = taskHead,
            e;
        while (t) {
          if ((e = clockNow - t._time) >= 0) t._call.call(null, e);
          t = t._next;
        }
        --frame;
      }

      function wake() {
        clockNow = (clockLast = clock.now()) + clockSkew;
        frame = timeout = 0;
        try {
          timerFlush();
        } finally {
          frame = 0;
          nap();
          clockNow = 0;
        }
      }

      function poke() {
        var now = clock.now(),
            delay = now - clockLast;
        if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
      }

      function nap() {
        var t0,
            t1 = taskHead,
            t2,
            time = Infinity;
        while (t1) {
          if (t1._call) {
            if (time > t1._time) time = t1._time;
            t0 = t1, t1 = t1._next;
          } else {
            t2 = t1._next, t1._next = null;
            t1 = t0 ? t0._next = t2 : taskHead = t2;
          }
        }
        taskTail = t0;
        sleep(time);
      }

      function sleep(time) {
        if (frame) return; // Soonest alarm already set, or will be.
        if (timeout) timeout = clearTimeout(timeout);
        var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
        if (delay > 24) {
          if (time < Infinity) timeout = setTimeout(wake, time - clock.now() - clockSkew);
          if (interval) interval = clearInterval(interval);
        } else {
          if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
          frame = 1, setFrame(wake);
        }
      }

      /***/
    },
    /* 21 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(6);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__rgb__ = __webpack_require__(54);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__array__ = __webpack_require__(57);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__date__ = __webpack_require__(58);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__number__ = __webpack_require__(14);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_5__object__ = __webpack_require__(59);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_6__string__ = __webpack_require__(60);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_7__constant__ = __webpack_require__(56);
      var _typeof = typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
      };

      /* harmony default export */__webpack_exports__["a"] = function (a, b) {
        var t = typeof b === "undefined" ? "undefined" : _typeof(b),
            c;
        return b == null || t === "boolean" ? Object(__WEBPACK_IMPORTED_MODULE_7__constant__["a" /* default */])(b) : (t === "number" ? __WEBPACK_IMPORTED_MODULE_4__number__["a" /* default */] : t === "string" ? (c = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["a" /* color */])(b)) ? (b = c, __WEBPACK_IMPORTED_MODULE_1__rgb__["a" /* default */]) : __WEBPACK_IMPORTED_MODULE_6__string__["a" /* default */] : b instanceof __WEBPACK_IMPORTED_MODULE_0_d3_color__["a" /* color */] ? __WEBPACK_IMPORTED_MODULE_1__rgb__["a" /* default */] : b instanceof Date ? __WEBPACK_IMPORTED_MODULE_3__date__["a" /* default */] : Array.isArray(b) ? __WEBPACK_IMPORTED_MODULE_2__array__["a" /* default */] : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? __WEBPACK_IMPORTED_MODULE_5__object__["a" /* default */] : __WEBPACK_IMPORTED_MODULE_4__number__["a" /* default */])(a, b);
      };

      /***/
    },
    /* 22 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony export (immutable) */
      __webpack_exports__["a"] = Color;
      /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "d", function () {
        return _darker;
      });
      /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "c", function () {
        return _brighter;
      });
      /* harmony export (immutable) */__webpack_exports__["e"] = color;
      /* harmony export (immutable) */__webpack_exports__["h"] = rgbConvert;
      /* harmony export (immutable) */__webpack_exports__["g"] = rgb;
      /* harmony export (immutable) */__webpack_exports__["b"] = Rgb;
      /* unused harmony export hslConvert */
      /* harmony export (immutable) */__webpack_exports__["f"] = hsl;
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__define__ = __webpack_require__(23);

      function Color() {}

      var _darker = 0.7;

      var _brighter = 1 / _darker;

      var reI = "\\s*([+-]?\\d+)\\s*",
          reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
          reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
          reHex3 = /^#([0-9a-f]{3})$/,
          reHex6 = /^#([0-9a-f]{6})$/,
          reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
          reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
          reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
          reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
          reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
          reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");

      var named = {
        aliceblue: 0xf0f8ff,
        antiquewhite: 0xfaebd7,
        aqua: 0x00ffff,
        aquamarine: 0x7fffd4,
        azure: 0xf0ffff,
        beige: 0xf5f5dc,
        bisque: 0xffe4c4,
        black: 0x000000,
        blanchedalmond: 0xffebcd,
        blue: 0x0000ff,
        blueviolet: 0x8a2be2,
        brown: 0xa52a2a,
        burlywood: 0xdeb887,
        cadetblue: 0x5f9ea0,
        chartreuse: 0x7fff00,
        chocolate: 0xd2691e,
        coral: 0xff7f50,
        cornflowerblue: 0x6495ed,
        cornsilk: 0xfff8dc,
        crimson: 0xdc143c,
        cyan: 0x00ffff,
        darkblue: 0x00008b,
        darkcyan: 0x008b8b,
        darkgoldenrod: 0xb8860b,
        darkgray: 0xa9a9a9,
        darkgreen: 0x006400,
        darkgrey: 0xa9a9a9,
        darkkhaki: 0xbdb76b,
        darkmagenta: 0x8b008b,
        darkolivegreen: 0x556b2f,
        darkorange: 0xff8c00,
        darkorchid: 0x9932cc,
        darkred: 0x8b0000,
        darksalmon: 0xe9967a,
        darkseagreen: 0x8fbc8f,
        darkslateblue: 0x483d8b,
        darkslategray: 0x2f4f4f,
        darkslategrey: 0x2f4f4f,
        darkturquoise: 0x00ced1,
        darkviolet: 0x9400d3,
        deeppink: 0xff1493,
        deepskyblue: 0x00bfff,
        dimgray: 0x696969,
        dimgrey: 0x696969,
        dodgerblue: 0x1e90ff,
        firebrick: 0xb22222,
        floralwhite: 0xfffaf0,
        forestgreen: 0x228b22,
        fuchsia: 0xff00ff,
        gainsboro: 0xdcdcdc,
        ghostwhite: 0xf8f8ff,
        gold: 0xffd700,
        goldenrod: 0xdaa520,
        gray: 0x808080,
        green: 0x008000,
        greenyellow: 0xadff2f,
        grey: 0x808080,
        honeydew: 0xf0fff0,
        hotpink: 0xff69b4,
        indianred: 0xcd5c5c,
        indigo: 0x4b0082,
        ivory: 0xfffff0,
        khaki: 0xf0e68c,
        lavender: 0xe6e6fa,
        lavenderblush: 0xfff0f5,
        lawngreen: 0x7cfc00,
        lemonchiffon: 0xfffacd,
        lightblue: 0xadd8e6,
        lightcoral: 0xf08080,
        lightcyan: 0xe0ffff,
        lightgoldenrodyellow: 0xfafad2,
        lightgray: 0xd3d3d3,
        lightgreen: 0x90ee90,
        lightgrey: 0xd3d3d3,
        lightpink: 0xffb6c1,
        lightsalmon: 0xffa07a,
        lightseagreen: 0x20b2aa,
        lightskyblue: 0x87cefa,
        lightslategray: 0x778899,
        lightslategrey: 0x778899,
        lightsteelblue: 0xb0c4de,
        lightyellow: 0xffffe0,
        lime: 0x00ff00,
        limegreen: 0x32cd32,
        linen: 0xfaf0e6,
        magenta: 0xff00ff,
        maroon: 0x800000,
        mediumaquamarine: 0x66cdaa,
        mediumblue: 0x0000cd,
        mediumorchid: 0xba55d3,
        mediumpurple: 0x9370db,
        mediumseagreen: 0x3cb371,
        mediumslateblue: 0x7b68ee,
        mediumspringgreen: 0x00fa9a,
        mediumturquoise: 0x48d1cc,
        mediumvioletred: 0xc71585,
        midnightblue: 0x191970,
        mintcream: 0xf5fffa,
        mistyrose: 0xffe4e1,
        moccasin: 0xffe4b5,
        navajowhite: 0xffdead,
        navy: 0x000080,
        oldlace: 0xfdf5e6,
        olive: 0x808000,
        olivedrab: 0x6b8e23,
        orange: 0xffa500,
        orangered: 0xff4500,
        orchid: 0xda70d6,
        palegoldenrod: 0xeee8aa,
        palegreen: 0x98fb98,
        paleturquoise: 0xafeeee,
        palevioletred: 0xdb7093,
        papayawhip: 0xffefd5,
        peachpuff: 0xffdab9,
        peru: 0xcd853f,
        pink: 0xffc0cb,
        plum: 0xdda0dd,
        powderblue: 0xb0e0e6,
        purple: 0x800080,
        rebeccapurple: 0x663399,
        red: 0xff0000,
        rosybrown: 0xbc8f8f,
        royalblue: 0x4169e1,
        saddlebrown: 0x8b4513,
        salmon: 0xfa8072,
        sandybrown: 0xf4a460,
        seagreen: 0x2e8b57,
        seashell: 0xfff5ee,
        sienna: 0xa0522d,
        silver: 0xc0c0c0,
        skyblue: 0x87ceeb,
        slateblue: 0x6a5acd,
        slategray: 0x708090,
        slategrey: 0x708090,
        snow: 0xfffafa,
        springgreen: 0x00ff7f,
        steelblue: 0x4682b4,
        tan: 0xd2b48c,
        teal: 0x008080,
        thistle: 0xd8bfd8,
        tomato: 0xff6347,
        turquoise: 0x40e0d0,
        violet: 0xee82ee,
        wheat: 0xf5deb3,
        white: 0xffffff,
        whitesmoke: 0xf5f5f5,
        yellow: 0xffff00,
        yellowgreen: 0x9acd32
      };

      Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Color, color, {
        displayable: function displayable() {
          return this.rgb().displayable();
        },
        toString: function toString() {
          return this.rgb() + "";
        }
      });

      function color(format) {
        var m;
        format = (format + "").trim().toLowerCase();
        return (m = reHex3.exec(format)) ? (m = parseInt(m[1], 16), new Rgb(m >> 8 & 0xf | m >> 4 & 0x0f0, m >> 4 & 0xf | m & 0xf0, (m & 0xf) << 4 | m & 0xf, 1) // #f00
        ) : (m = reHex6.exec(format)) ? rgbn(parseInt(m[1], 16)) // #ff0000
        : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
        : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
        : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
        : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
        : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
        : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
        : named.hasOwnProperty(format) ? rgbn(named[format]) : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
      }

      function rgbn(n) {
        return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
      }

      function rgba(r, g, b, a) {
        if (a <= 0) r = g = b = NaN;
        return new Rgb(r, g, b, a);
      }

      function rgbConvert(o) {
        if (!(o instanceof Color)) o = color(o);
        if (!o) return new Rgb();
        o = o.rgb();
        return new Rgb(o.r, o.g, o.b, o.opacity);
      }

      function rgb(r, g, b, opacity) {
        return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
      }

      function Rgb(r, g, b, opacity) {
        this.r = +r;
        this.g = +g;
        this.b = +b;
        this.opacity = +opacity;
      }

      Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Rgb, rgb, Object(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(Color, {
        brighter: function brighter(k) {
          k = k == null ? _brighter : Math.pow(_brighter, k);
          return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
        },
        darker: function darker(k) {
          k = k == null ? _darker : Math.pow(_darker, k);
          return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
        },
        rgb: function rgb() {
          return this;
        },
        displayable: function displayable() {
          return 0 <= this.r && this.r <= 255 && 0 <= this.g && this.g <= 255 && 0 <= this.b && this.b <= 255 && 0 <= this.opacity && this.opacity <= 1;
        },
        toString: function toString() {
          var a = this.opacity;a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
          return (a === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (a === 1 ? ")" : ", " + a + ")");
        }
      }));

      function hsla(h, s, l, a) {
        if (a <= 0) h = s = l = NaN;else if (l <= 0 || l >= 1) h = s = NaN;else if (s <= 0) h = NaN;
        return new Hsl(h, s, l, a);
      }

      function hslConvert(o) {
        if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
        if (!(o instanceof Color)) o = color(o);
        if (!o) return new Hsl();
        if (o instanceof Hsl) return o;
        o = o.rgb();
        var r = o.r / 255,
            g = o.g / 255,
            b = o.b / 255,
            min = Math.min(r, g, b),
            max = Math.max(r, g, b),
            h = NaN,
            s = max - min,
            l = (max + min) / 2;
        if (s) {
          if (r === max) h = (g - b) / s + (g < b) * 6;else if (g === max) h = (b - r) / s + 2;else h = (r - g) / s + 4;
          s /= l < 0.5 ? max + min : 2 - max - min;
          h *= 60;
        } else {
          s = l > 0 && l < 1 ? 0 : h;
        }
        return new Hsl(h, s, l, o.opacity);
      }

      function hsl(h, s, l, opacity) {
        return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
      }

      function Hsl(h, s, l, opacity) {
        this.h = +h;
        this.s = +s;
        this.l = +l;
        this.opacity = +opacity;
      }

      Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Hsl, hsl, Object(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(Color, {
        brighter: function brighter(k) {
          k = k == null ? _brighter : Math.pow(_brighter, k);
          return new Hsl(this.h, this.s, this.l * k, this.opacity);
        },
        darker: function darker(k) {
          k = k == null ? _darker : Math.pow(_darker, k);
          return new Hsl(this.h, this.s, this.l * k, this.opacity);
        },
        rgb: function rgb() {
          var h = this.h % 360 + (this.h < 0) * 360,
              s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
              l = this.l,
              m2 = l + (l < 0.5 ? l : 1 - l) * s,
              m1 = 2 * l - m2;
          return new Rgb(hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2), hsl2rgb(h, m1, m2), hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2), this.opacity);
        },
        displayable: function displayable() {
          return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
        }
      }));

      /* From FvD 13.37, CSS Color Module Level 3 */
      function hsl2rgb(h, m1, m2) {
        return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
      }

      /***/
    },
    /* 23 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony export (immutable) */
      __webpack_exports__["b"] = extend;
      /* harmony default export */__webpack_exports__["a"] = function (constructor, factory, prototype) {
        constructor.prototype = factory.prototype = prototype;
        prototype.constructor = constructor;
      };

      function extend(parent, definition) {
        var prototype = Object.create(parent.prototype);
        for (var key in definition) {
          prototype[key] = definition[key];
        }return prototype;
      }

      /***/
    },
    /* 24 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony export (immutable) */
      __webpack_exports__["a"] = basis;
      function basis(t1, v0, v1, v2, v3) {
        var t2 = t1 * t1,
            t3 = t2 * t1;
        return ((1 - 3 * t1 + 3 * t2 - t3) * v0 + (4 - 6 * t2 + 3 * t3) * v1 + (1 + 3 * t1 + 3 * t2 - 3 * t3) * v2 + t3 * v3) / 6;
      }

      /* harmony default export */__webpack_exports__["b"] = function (values) {
        var n = values.length - 1;
        return function (t) {
          var i = t <= 0 ? t = 0 : t >= 1 ? (t = 1, n - 1) : Math.floor(t * n),
              v1 = values[i],
              v2 = values[i + 1],
              v0 = i > 0 ? values[i - 1] : 2 * v1 - v2,
              v3 = i < n - 1 ? values[i + 2] : 2 * v2 - v1;
          return basis((t - i / n) * n, v0, v1, v2, v3);
        };
      };

      /***/
    },
    /* 25 */
    /***/function (module, exports, __webpack_require__) {

      var Util = __webpack_require__(0);

      var regexTags = /[MLHVQTCSAZ]([^MLHVQTCSAZ]*)/ig;
      var regexDot = /[^\s\,]+/ig;
      var regexLG = /^l\s*\(\s*([\d.]+)\s*\)\s*(.*)/i;
      var regexRG = /^r\s*\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)\s*(.*)/i;
      var regexPR = /^p\s*\(\s*([axyn])\s*\)\s*(.*)/i;
      var regexColorStop = /[\d.]+:(#[^\s]+|[^\)]+\))/ig;
      var numColorCache = {};

      function addStop(steps, gradient) {
        var arr = steps.match(regexColorStop);
        Util.each(arr, function (item) {
          item = item.split(':');
          gradient.addColorStop(item[0], item[1]);
        });
      }

      function parseLineGradient(color, self) {
        var arr = regexLG.exec(color);
        var angle = Util.mod(Util.toRadian(parseFloat(arr[1])), Math.PI * 2);
        var steps = arr[2];
        var box = self.getBBox();
        var start = void 0;
        var end = void 0;

        if (angle >= 0 && angle < 0.5 * Math.PI) {
          start = {
            x: box.minX,
            y: box.minY
          };
          end = {
            x: box.maxX,
            y: box.maxY
          };
        } else if (0.5 * Math.PI <= angle && angle < Math.PI) {
          start = {
            x: box.maxX,
            y: box.minY
          };
          end = {
            x: box.minX,
            y: box.maxY
          };
        } else if (Math.PI <= angle && angle < 1.5 * Math.PI) {
          start = {
            x: box.maxX,
            y: box.maxY
          };
          end = {
            x: box.minX,
            y: box.minY
          };
        } else {
          start = {
            x: box.minX,
            y: box.maxY
          };
          end = {
            x: box.maxX,
            y: box.minY
          };
        }

        var tanTheta = Math.tan(angle);
        var tanTheta2 = tanTheta * tanTheta;

        var x = (end.x - start.x + tanTheta * (end.y - start.y)) / (tanTheta2 + 1) + start.x;
        var y = tanTheta * (end.x - start.x + tanTheta * (end.y - start.y)) / (tanTheta2 + 1) + start.y;
        var context = self.get('context');
        var gradient = context.createLinearGradient(start.x, start.y, x, y);
        addStop(steps, gradient);
        return gradient;
      }

      function parseRadialGradient(color, self) {
        var arr = regexRG.exec(color);
        var fx = parseFloat(arr[1]);
        var fy = parseFloat(arr[2]);
        var fr = parseFloat(arr[3]);
        var steps = arr[4];
        // 环半径为0时，默认无渐变，取渐变序列的最后一个颜色
        if (fr === 0) {
          var colors = steps.match(regexColorStop);
          return colors[colors.length - 1].split(':')[1];
        }
        var box = self.getBBox();
        var context = self.get('context');
        var width = box.maxX - box.minX;
        var height = box.maxY - box.minY;
        var r = Math.sqrt(width * width + height * height) / 2;
        var gradient = context.createRadialGradient(box.minX + width * fx, box.minY + height * fy, fr * r, box.minX + width / 2, box.minY + height / 2, r);
        addStop(steps, gradient);
        return gradient;
      }

      function parsePattern(color, self) {
        if (self.get('patternSource') && self.get('patternSource') === color) {
          return self.get('pattern');
        }
        var pattern = void 0;
        var img = void 0;
        var arr = regexPR.exec(color);
        var repeat = arr[1];
        var source = arr[2];

        // Function to be called when pattern loads
        function onload() {
          // Create pattern
          var context = self.get('context');
          pattern = context.createPattern(img, repeat);
          self.setSilent('pattern', pattern); // be a cache
          self.setSilent('patternSource', color);
        }

        switch (repeat) {
          case 'a':
            repeat = 'repeat';
            break;
          case 'x':
            repeat = 'repeat-x';
            break;
          case 'y':
            repeat = 'repeat-y';
            break;
          case 'n':
            repeat = 'no-repeat';
            break;
          default:
            repeat = 'no-repeat';
        }

        img = new Image();
        // If source URL is not a data URL
        if (!source.match(/^data:/i)) {
          // Set crossOrigin for this image
          img.crossOrigin = 'Anonymous';
        }
        img.src = source;

        if (img.complete) {
          onload();
        } else {
          img.onload = onload;
          // Fix onload() bug in IE9
          img.src = img.src;
        }

        return pattern;
      }

      module.exports = {
        parsePath: function parsePath(path) {
          path = path || [];
          if (Util.isArray(path)) {
            return path;
          }

          if (Util.isString(path)) {
            path = path.match(regexTags);
            Util.each(path, function (item, index) {
              item = item.match(regexDot);
              if (item[0].length > 1) {
                var tag = item[0].charAt(0);
                item.splice(1, 0, item[0].substr(1));
                item[0] = tag;
              }
              Util.each(item, function (sub, i) {
                if (!isNaN(sub)) {
                  item[i] = +sub;
                }
              });
              path[index] = item;
            });
            return path;
          }
        },
        parseStyle: function parseStyle(color, self) {
          if (Util.isString(color)) {
            if (color[1] === '(' || color[2] === '(') {
              if (color[0] === 'l') {
                // regexLG.test(color)
                return parseLineGradient(color, self);
              } else if (color[0] === 'r') {
                // regexRG.test(color)
                return parseRadialGradient(color, self);
              } else if (color[0] === 'p') {
                // regexPR.test(color)
                return parsePattern(color, self);
              }
            }
            return color;
          }
        },
        numberToColor: function numberToColor(num) {
          // 增加缓存
          var color = numColorCache[num];
          if (!color) {
            var str = num.toString(16);
            for (var i = str.length; i < 6; i++) {
              str = '0' + str;
            }
            color = '#' + str;
            numColorCache[num] = color;
          }
          return color;
        }
      };

      /***/
    },
    /* 26 */
    /***/function (module, exports, __webpack_require__) {

      var vec2 = __webpack_require__(2).vec2;

      module.exports = {
        at: function at(p1, p2, t) {
          return (p2 - p1) * t + p1;
        },
        pointDistance: function pointDistance(x1, y1, x2, y2, x, y) {
          var d = [x2 - x1, y2 - y1];
          if (vec2.exactEquals(d, [0, 0])) {
            return NaN;
          }

          var u = [-d[1], d[0]];
          vec2.normalize(u, u);
          var a = [x - x1, y - y1];
          return Math.abs(vec2.dot(a, u));
        },
        box: function box(x1, y1, x2, y2, lineWidth) {
          var halfWidth = lineWidth / 2;
          var minX = Math.min(x1, x2);
          var maxX = Math.max(x1, x2);
          var minY = Math.min(y1, y2);
          var maxY = Math.max(y1, y2);

          return {
            minX: minX - halfWidth,
            minY: minY - halfWidth,
            maxX: maxX + halfWidth,
            maxY: maxY + halfWidth
          };
        },
        len: function len(x1, y1, x2, y2) {
          return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
        }
      };

      /***/
    },
    /* 27 */
    /***/function (module, exports, __webpack_require__) {

      var Util = __webpack_require__(0);
      var vec2 = __webpack_require__(2).vec2;

      function quadraticAt(p0, p1, p2, t) {
        var onet = 1 - t;
        return onet * (onet * p0 + 2 * t * p1) + t * t * p2;
      }

      function quadraticProjectPoint(x1, y1, x2, y2, x3, y3, x, y, out) {
        var t = void 0;
        var interval = 0.005;
        var d = Infinity;
        var d1 = void 0;
        var v1 = void 0;
        var v2 = void 0;
        var _t = void 0;
        var d2 = void 0;
        var i = void 0;
        var EPSILON = 0.0001;
        var v0 = [x, y];

        for (_t = 0; _t < 1; _t += 0.05) {
          v1 = [quadraticAt(x1, x2, x3, _t), quadraticAt(y1, y2, y3, _t)];

          d1 = vec2.squaredDistance(v0, v1);
          if (d1 < d) {
            t = _t;
            d = d1;
          }
        }
        d = Infinity;

        for (i = 0; i < 32; i++) {
          if (interval < EPSILON) {
            break;
          }

          var prev = t - interval;
          var next = t + interval;

          v1 = [quadraticAt(x1, x2, x3, prev), quadraticAt(y1, y2, y3, prev)];

          d1 = vec2.squaredDistance(v0, v1);

          if (prev >= 0 && d1 < d) {
            t = prev;
            d = d1;
          } else {
            v2 = [quadraticAt(x1, x2, x3, next), quadraticAt(y1, y2, y3, next)];

            d2 = vec2.squaredDistance(v0, v2);

            if (next <= 1 && d2 < d) {
              t = next;
              d = d2;
            } else {
              interval *= 0.5;
            }
          }
        }

        if (out) {
          out.x = quadraticAt(x1, x2, x3, t);
          out.y = quadraticAt(y1, y2, y3, t);
        }

        return Math.sqrt(d);
      }

      function quadraticExtrema(p0, p1, p2) {
        var a = p0 + p2 - 2 * p1;
        if (Util.isNumberEqual(a, 0)) {
          return [0.5];
        }
        var rst = (p0 - p1) / a;
        if (rst <= 1 && rst >= 0) {
          return [rst];
        }
        return [];
      }

      module.exports = {
        at: quadraticAt,
        projectPoint: function projectPoint(x1, y1, x2, y2, x3, y3, x, y) {
          var rst = {};
          quadraticProjectPoint(x1, y1, x2, y2, x3, y3, x, y, rst);
          return rst;
        },

        pointDistance: quadraticProjectPoint,
        extrema: quadraticExtrema
      };

      /***/
    },
    /* 28 */
    /***/function (module, exports, __webpack_require__) {

      var Util = __webpack_require__(0);
      var vec2 = __webpack_require__(2).vec2;

      function circlePoint(cx, cy, r, angle) {
        return {
          x: Math.cos(angle) * r + cx,
          y: Math.sin(angle) * r + cy
        };
      }

      function angleNearTo(angle, min, max, out) {
        var v1 = void 0;
        var v2 = void 0;
        if (out) {
          if (angle < min) {
            v1 = min - angle;
            v2 = Math.PI * 2 - max + angle;
          } else if (angle > max) {
            v1 = Math.PI * 2 - angle + min;
            v2 = angle - max;
          }
        } else {
          v1 = angle - min;
          v2 = max - angle;
        }

        return v1 > v2 ? max : min;
      }

      function nearAngle(angle, startAngle, endAngle, clockwise) {
        var plus = 0;
        if (endAngle - startAngle >= Math.PI * 2) {
          plus = Math.PI * 2;
        }
        startAngle = Util.mod(startAngle, Math.PI * 2);
        endAngle = Util.mod(endAngle, Math.PI * 2) + plus;
        angle = Util.mod(angle, Math.PI * 2);
        if (clockwise) {
          if (startAngle >= endAngle) {
            if (angle > endAngle && angle < startAngle) {
              return angle;
            }
            return angleNearTo(angle, endAngle, startAngle, true);
          }
          if (angle < startAngle || angle > endAngle) {
            return angle;
          }
          return angleNearTo(angle, startAngle, endAngle);
        }
        if (startAngle <= endAngle) {
          if (startAngle < angle && angle < endAngle) {
            return angle;
          }
          return angleNearTo(angle, startAngle, endAngle, true);
        }
        if (angle > startAngle || angle < endAngle) {
          return angle;
        }
        return angleNearTo(angle, endAngle, startAngle);
      }

      function arcProjectPoint(cx, cy, r, startAngle, endAngle, clockwise, x, y, out) {
        var v = [x, y];
        var v0 = [cx, cy];
        var v1 = [1, 0];
        var subv = vec2.subtract([], v, v0);
        var angle = vec2.angleTo(v1, subv);

        angle = nearAngle(angle, startAngle, endAngle, clockwise);
        var vpoint = [r * Math.cos(angle) + cx, r * Math.sin(angle) + cy];
        if (out) {
          out.x = vpoint[0];
          out.y = vpoint[1];
        }
        var d = vec2.distance(vpoint, v);
        return d;
      }

      function arcBox(cx, cy, r, startAngle, endAngle, clockwise) {
        var angleRight = 0;
        var angleBottom = Math.PI / 2;
        var angleLeft = Math.PI;
        var angleTop = Math.PI * 3 / 2;
        var points = [];
        var angle = nearAngle(angleRight, startAngle, endAngle, clockwise);
        if (angle === angleRight) {
          points.push(circlePoint(cx, cy, r, angleRight));
        }

        angle = nearAngle(angleBottom, startAngle, endAngle, clockwise);
        if (angle === angleBottom) {
          points.push(circlePoint(cx, cy, r, angleBottom));
        }

        angle = nearAngle(angleLeft, startAngle, endAngle, clockwise);
        if (angle === angleLeft) {
          points.push(circlePoint(cx, cy, r, angleLeft));
        }

        angle = nearAngle(angleTop, startAngle, endAngle, clockwise);
        if (angle === angleTop) {
          points.push(circlePoint(cx, cy, r, angleTop));
        }

        points.push(circlePoint(cx, cy, r, startAngle));
        points.push(circlePoint(cx, cy, r, endAngle));
        var minX = Infinity;
        var maxX = -Infinity;
        var minY = Infinity;
        var maxY = -Infinity;
        Util.each(points, function (point) {
          if (minX > point.x) {
            minX = point.x;
          }
          if (maxX < point.x) {
            maxX = point.x;
          }
          if (minY > point.y) {
            minY = point.y;
          }
          if (maxY < point.y) {
            maxY = point.y;
          }
        });

        return {
          minX: minX,
          minY: minY,
          maxX: maxX,
          maxY: maxY
        };
      }

      module.exports = {
        nearAngle: nearAngle,
        projectPoint: function projectPoint(cx, cy, r, startAngle, endAngle, clockwise, x, y) {
          var rst = {};
          arcProjectPoint(cx, cy, r, startAngle, endAngle, clockwise, x, y, rst);
          return rst;
        },

        pointDistance: arcProjectPoint,
        box: arcBox
      };

      /***/
    },
    /* 29 */
    /***/function (module, exports, __webpack_require__) {

      var Util = __webpack_require__(0);
      var Inside = __webpack_require__(3);
      var Cubic = __webpack_require__(15);
      var Quadratic = __webpack_require__(27);
      var Ellipse = __webpack_require__(151);
      var vec3 = __webpack_require__(2).vec3;
      var mat3 = __webpack_require__(2).mat3;

      var ARR_CMD = ['m', 'l', 'c', 'a', 'q', 'h', 'v', 't', 's', 'z'];

      function toAbsolute(x, y, curPoint) {
        // 获取绝对坐标
        return {
          x: curPoint.x + x,
          y: curPoint.y + y
        };
      }

      function toSymmetry(point, center) {
        // 点对称
        return {
          x: center.x + (center.x - point.x),
          y: center.y + (center.y - point.y)
        };
      }

      function vMag(v) {
        return Math.sqrt(v[0] * v[0] + v[1] * v[1]);
      }

      function vRatio(u, v) {
        return (u[0] * v[0] + u[1] * v[1]) / (vMag(u) * vMag(v));
      }

      function vAngle(u, v) {
        return (u[0] * v[1] < u[1] * v[0] ? -1 : 1) * Math.acos(vRatio(u, v));
      }

      function getArcParams(point1, point2, fa, fs, rx, ry, psiDeg) {
        var psi = Util.mod(Util.toRadian(psiDeg), Math.PI * 2);
        var x1 = point1.x;
        var y1 = point1.y;
        var x2 = point2.x;
        var y2 = point2.y;
        var xp = Math.cos(psi) * (x1 - x2) / 2.0 + Math.sin(psi) * (y1 - y2) / 2.0;
        var yp = -1 * Math.sin(psi) * (x1 - x2) / 2.0 + Math.cos(psi) * (y1 - y2) / 2.0;
        var lambda = xp * xp / (rx * rx) + yp * yp / (ry * ry);
        if (lambda > 1) {
          rx *= Math.sqrt(lambda);
          ry *= Math.sqrt(lambda);
        }
        var diff = rx * rx * (yp * yp) + ry * ry * (xp * xp);
        var f = Math.sqrt((rx * rx * (ry * ry) - diff) / diff);

        if (fa === fs) {
          f *= -1;
        }
        if (isNaN(f)) {
          f = 0;
        }

        var cxp = f * rx * yp / ry;
        var cyp = f * -ry * xp / rx;

        var cx = (x1 + x2) / 2.0 + Math.cos(psi) * cxp - Math.sin(psi) * cyp;
        var cy = (y1 + y2) / 2.0 + Math.sin(psi) * cxp + Math.cos(psi) * cyp;

        var theta = vAngle([1, 0], [(xp - cxp) / rx, (yp - cyp) / ry]);
        var u = [(xp - cxp) / rx, (yp - cyp) / ry];
        var v = [(-1 * xp - cxp) / rx, (-1 * yp - cyp) / ry];
        var dTheta = vAngle(u, v);
        if (fs === 0 && dTheta > 0) {
          dTheta = dTheta - 2 * Math.PI;
        }
        if (fs === 1 && dTheta < 0) {
          dTheta = dTheta + 2 * Math.PI;
        }
        return [point1, cx, cy, rx, ry, theta, dTheta, psi, fs];
      }

      var PathSegment = function PathSegment(item, preSegment, isLast) {
        this.preSegment = preSegment;
        this.isLast = isLast;
        this.init(item, preSegment);
      };

      Util.augment(PathSegment, {
        init: function init(item, preSegment) {
          var command = item[0];
          preSegment = preSegment || {
            endPoint: {
              x: 0,
              y: 0
            }
          };
          var relative = ARR_CMD.indexOf(command) >= 0; // /[a-z]/.test(command);
          var cmd = relative ? command.toUpperCase() : command;
          var p = item;
          var point1 = void 0;
          var point2 = void 0;
          var point3 = void 0;
          var point = void 0;
          var preEndPoint = preSegment.endPoint;

          var p1 = p[1];
          var p2 = p[2];
          switch (cmd) {
            default:
              break;
            case 'M':
              if (relative) {
                point = toAbsolute(p1, p2, preEndPoint);
              } else {
                point = {
                  x: p1,
                  y: p2
                };
              }
              this.command = 'M';
              this.params = [preEndPoint, point];
              this.subStart = point;
              this.endPoint = point;
              break;
            case 'L':
              if (relative) {
                point = toAbsolute(p1, p2, preEndPoint);
              } else {
                point = {
                  x: p1,
                  y: p2
                };
              }
              this.command = 'L';
              this.params = [preEndPoint, point];
              this.subStart = preSegment.subStart;
              this.endPoint = point;
              this.endTangent = function () {
                return [point.x - preEndPoint.x, point.y - preEndPoint.y];
              };
              this.startTangent = function () {
                return [preEndPoint.x - point.x, preEndPoint.y - point.y];
              };
              break;
            case 'H':
              if (relative) {
                point = toAbsolute(p1, 0, preEndPoint);
              } else {
                point = {
                  x: p1,
                  y: preEndPoint.y
                };
              }
              this.command = 'L';
              this.params = [preEndPoint, point];
              this.subStart = preSegment.subStart;
              this.endPoint = point;
              this.endTangent = function () {
                return [point.x - preEndPoint.x, point.y - preEndPoint.y];
              };
              this.startTangent = function () {
                return [preEndPoint.x - point.x, preEndPoint.y - point.y];
              };
              break;
            case 'V':
              if (relative) {
                point = toAbsolute(0, p1, preEndPoint);
              } else {
                point = {
                  x: preEndPoint.x,
                  y: p1
                };
              }
              this.command = 'L';
              this.params = [preEndPoint, point];
              this.subStart = preSegment.subStart;
              this.endPoint = point;
              this.endTangent = function () {
                return [point.x - preEndPoint.x, point.y - preEndPoint.y];
              };
              this.startTangent = function () {
                return [preEndPoint.x - point.x, preEndPoint.y - point.y];
              };
              break;
            case 'Q':
              if (relative) {
                point1 = toAbsolute(p1, p2, preEndPoint);
                point2 = toAbsolute(p[3], p[4], preEndPoint);
              } else {
                point1 = {
                  x: p1,
                  y: p2
                };
                point2 = {
                  x: p[3],
                  y: p[4]
                };
              }
              this.command = 'Q';
              this.params = [preEndPoint, point1, point2];
              this.subStart = preSegment.subStart;
              this.endPoint = point2;
              this.endTangent = function () {
                return [point2.x - point1.x, point2.y - point1.y];
              };
              this.startTangent = function () {
                return [preEndPoint.x - point1.x, preEndPoint.y - point1.y];
              };
              break;
            case 'T':
              if (relative) {
                point2 = toAbsolute(p1, p2, preEndPoint);
              } else {
                point2 = {
                  x: p1,
                  y: p2
                };
              }
              if (preSegment.command === 'Q') {
                point1 = toSymmetry(preSegment.params[1], preEndPoint);
                this.command = 'Q';
                this.params = [preEndPoint, point1, point2];
                this.subStart = preSegment.subStart;
                this.endPoint = point2;
                this.endTangent = function () {
                  return [point2.x - point1.x, point2.y - point1.y];
                };
                this.startTangent = function () {
                  return [preEndPoint.x - point1.x, preEndPoint.y - point1.y];
                };
              } else {
                this.command = 'TL';
                this.params = [preEndPoint, point2];
                this.subStart = preSegment.subStart;
                this.endPoint = point2;
                this.endTangent = function () {
                  return [point2.x - preEndPoint.x, point2.y - preEndPoint.y];
                };
                this.startTangent = function () {
                  return [preEndPoint.x - point2.x, preEndPoint.y - point2.y];
                };
              }

              break;
            case 'C':
              if (relative) {
                point1 = toAbsolute(p1, p2, preEndPoint);
                point2 = toAbsolute(p[3], p[4], preEndPoint);
                point3 = toAbsolute(p[5], p[6], preEndPoint);
              } else {
                point1 = {
                  x: p1,
                  y: p2
                };
                point2 = {
                  x: p[3],
                  y: p[4]
                };
                point3 = {
                  x: p[5],
                  y: p[6]
                };
              }
              this.command = 'C';
              this.params = [preEndPoint, point1, point2, point3];
              this.subStart = preSegment.subStart;
              this.endPoint = point3;
              this.endTangent = function () {
                return [point3.x - point2.x, point3.y - point2.y];
              };
              this.startTangent = function () {
                return [preEndPoint.x - point1.x, preEndPoint.y - point1.y];
              };
              break;
            case 'S':
              if (relative) {
                point2 = toAbsolute(p1, p2, preEndPoint);
                point3 = toAbsolute(p[3], p[4], preEndPoint);
              } else {
                point2 = {
                  x: p1,
                  y: p2
                };
                point3 = {
                  x: p[3],
                  y: p[4]
                };
              }
              if (preSegment.command === 'C') {
                point1 = toSymmetry(preSegment.params[2], preEndPoint);
                this.command = 'C';
                this.params = [preEndPoint, point1, point2, point3];
                this.subStart = preSegment.subStart;
                this.endPoint = point3;
                this.endTangent = function () {
                  return [point3.x - point2.x, point3.y - point2.y];
                };
                this.startTangent = function () {
                  return [preEndPoint.x - point1.x, preEndPoint.y - point1.y];
                };
              } else {
                this.command = 'SQ';
                this.params = [preEndPoint, point2, point3];
                this.subStart = preSegment.subStart;
                this.endPoint = point3;
                this.endTangent = function () {
                  return [point3.x - point2.x, point3.y - point2.y];
                };
                this.startTangent = function () {
                  return [preEndPoint.x - point2.x, preEndPoint.y - point2.y];
                };
              }
              break;
            case 'A':
              {
                var rx = p1;
                var ry = p2;
                var psi = p[3];
                var fa = p[4];
                var fs = p[5];
                if (relative) {
                  point = toAbsolute(p[6], p[7], preEndPoint);
                } else {
                  point = {
                    x: p[6],
                    y: p[7]
                  };
                }

                this.command = 'A';
                var params = getArcParams(preEndPoint, point, fa, fs, rx, ry, psi);
                this.params = params;
                var start = preSegment.subStart;
                this.subStart = start;
                this.endPoint = point;
                var startAngle = params[5] % (Math.PI * 2);
                if (Util.isNumberEqual(startAngle, Math.PI * 2)) {
                  startAngle = 0;
                }
                var endAngle = params[6] % (Math.PI * 2);
                if (Util.isNumberEqual(endAngle, Math.PI * 2)) {
                  endAngle = 0;
                }
                var d = 0.001;
                this.startTangent = function () {
                  if (fs === 0) {
                    d *= -1;
                  }
                  var dx = params[3] * Math.cos(startAngle - d) + params[1];
                  var dy = params[4] * Math.sin(startAngle - d) + params[2];
                  return [dx - start.x, dy - start.y];
                };
                this.endTangent = function () {
                  var endAngle = params[6];
                  if (endAngle - Math.PI * 2 < 0.0001) {
                    endAngle = 0;
                  }
                  var dx = params[3] * Math.cos(startAngle + endAngle + d) + params[1];
                  var dy = params[4] * Math.sin(startAngle + endAngle - d) + params[2];
                  return [preEndPoint.x - dx, preEndPoint.y - dy];
                };
                break;
              }
            case 'Z':
              {
                this.command = 'Z';
                this.params = [preEndPoint, preSegment.subStart];
                this.subStart = preSegment.subStart;
                this.endPoint = preSegment.subStart;
              }
          }
        },
        isInside: function isInside(x, y, lineWidth) {
          var self = this;
          var command = self.command;
          var params = self.params;
          var box = self.box;
          if (box) {
            if (!Inside.box(box.minX, box.maxX, box.minY, box.maxY, x, y)) {
              return false;
            }
          }
          switch (command) {
            default:
              break;
            case 'M':
              return false;
            case 'TL':
            case 'L':
            case 'Z':
              return Inside.line(params[0].x, params[0].y, params[1].x, params[1].y, lineWidth, x, y);
            case 'SQ':
            case 'Q':
              return Inside.quadraticline(params[0].x, params[0].y, params[1].x, params[1].y, params[2].x, params[2].y, lineWidth, x, y);
            case 'C':
              {
                return Inside.cubicline(params[0].x, params[0].y, params[1].x, params[1].y, params[2].x, params[2].y, params[3].x, params[3].y, lineWidth, x, y);
              }
            case 'A':
              {
                var p = params;
                var cx = p[1];
                var cy = p[2];
                var rx = p[3];
                var ry = p[4];
                var theta = p[5];
                var dTheta = p[6];
                var psi = p[7];
                var fs = p[8];

                var r = rx > ry ? rx : ry;
                var scaleX = rx > ry ? 1 : rx / ry;
                var scaleY = rx > ry ? ry / rx : 1;

                p = [x, y, 1];
                var m = [1, 0, 0, 0, 1, 0, 0, 0, 1];
                mat3.translate(m, m, [-cx, -cy]);
                mat3.rotate(m, m, -psi);
                mat3.scale(m, m, [1 / scaleX, 1 / scaleY]);
                vec3.transformMat3(p, p, m);
                return Inside.arcline(0, 0, r, theta, theta + dTheta, 1 - fs, lineWidth, p[0], p[1]);
              }
          }
          return false;
        },
        draw: function draw(context) {
          var command = this.command;
          var params = this.params;
          var point1 = void 0;
          var point2 = void 0;
          var point3 = void 0;

          switch (command) {
            default:
              break;
            case 'M':
              context.moveTo(params[1].x, params[1].y);
              break;
            case 'TL':
            case 'L':
              context.lineTo(params[1].x, params[1].y);
              break;
            case 'SQ':
            case 'Q':
              point1 = params[1];
              point2 = params[2];
              context.quadraticCurveTo(point1.x, point1.y, point2.x, point2.y);
              break;
            case 'C':
              point1 = params[1];
              point2 = params[2];
              point3 = params[3];
              context.bezierCurveTo(point1.x, point1.y, point2.x, point2.y, point3.x, point3.y);
              break;
            case 'A':
              {
                var p = params;
                var p1 = p[1];
                var p2 = p[2];
                var cx = p1;
                var cy = p2;
                var rx = p[3];
                var ry = p[4];
                var theta = p[5];
                var dTheta = p[6];
                var psi = p[7];
                var fs = p[8];

                var r = rx > ry ? rx : ry;
                var scaleX = rx > ry ? 1 : rx / ry;
                var scaleY = rx > ry ? ry / rx : 1;

                context.translate(cx, cy);
                context.rotate(psi);
                context.scale(scaleX, scaleY);
                context.arc(0, 0, r, theta, theta + dTheta, 1 - fs);
                context.scale(1 / scaleX, 1 / scaleY);
                context.rotate(-psi);
                context.translate(-cx, -cy);
                break;
              }
            case 'Z':
              context.closePath();
              break;
          }
        },
        getBBox: function getBBox(lineWidth) {
          var halfWidth = lineWidth / 2;
          var params = this.params;
          var yDims = void 0;
          var xDims = void 0;
          var i = void 0;
          var l = void 0;

          switch (this.command) {
            default:
            case 'M':
            case 'Z':
              break;
            case 'TL':
            case 'L':
              this.box = {
                minX: Math.min(params[0].x, params[1].x) - halfWidth,
                maxX: Math.max(params[0].x, params[1].x) + halfWidth,
                minY: Math.min(params[0].y, params[1].y) - halfWidth,
                maxY: Math.max(params[0].y, params[1].y) + halfWidth
              };
              break;
            case 'SQ':
            case 'Q':
              xDims = Quadratic.extrema(params[0].x, params[1].x, params[2].x);
              for (i = 0, l = xDims.length; i < l; i++) {
                xDims[i] = Quadratic.at(params[0].x, params[1].x, params[2].x, xDims[i]);
              }
              xDims.push(params[0].x, params[2].x);
              yDims = Quadratic.extrema(params[0].y, params[1].y, params[2].y);
              for (i = 0, l = yDims.length; i < l; i++) {
                yDims[i] = Quadratic.at(params[0].y, params[1].y, params[2].y, yDims);
              }
              yDims.push(params[0].y, params[2].y);
              this.box = {
                minX: Math.min.apply(Math, xDims) - halfWidth,
                maxX: Math.max.apply(Math, xDims) + halfWidth,
                minY: Math.min.apply(Math, yDims) - halfWidth,
                maxY: Math.max.apply(Math, yDims) + halfWidth
              };
              break;
            case 'C':
              xDims = Cubic.extrema(params[0].x, params[1].x, params[2].x, params[3].x);
              for (i = 0, l = xDims.length; i < l; i++) {
                xDims[i] = Cubic.at(params[0].x, params[1].x, params[2].x, params[3].x, xDims[i]);
              }
              yDims = Cubic.extrema(params[0].y, params[1].y, params[2].y, params[3].y);
              for (i = 0, l = yDims.length; i < l; i++) {
                yDims[i] = Cubic.at(params[0].y, params[1].y, params[2].y, params[3].y, yDims[i]);
              }
              xDims.push(params[0].x, params[3].x);
              yDims.push(params[0].y, params[3].y);
              this.box = {
                minX: Math.min.apply(Math, xDims) - halfWidth,
                maxX: Math.max.apply(Math, xDims) + halfWidth,
                minY: Math.min.apply(Math, yDims) - halfWidth,
                maxY: Math.max.apply(Math, yDims) + halfWidth
              };
              break;
            case 'A':
              {
                // todo 待优化
                var p = params;
                var cx = p[1];
                var cy = p[2];
                var rx = p[3];
                var ry = p[4];
                var theta = p[5];
                var dTheta = p[6];
                var psi = p[7];
                var fs = p[8];
                var start = theta;
                var end = theta + dTheta;

                var xDim = Ellipse.xExtrema(psi, rx, ry);
                var minX = Infinity;
                var maxX = -Infinity;
                var xs = [start, end];
                for (i = -Math.PI * 2; i <= Math.PI * 2; i += Math.PI) {
                  var xAngle = xDim + i;
                  if (fs === 1) {
                    if (start < xAngle && xAngle < end) {
                      xs.push(xAngle);
                    }
                  } else {
                    if (end < xAngle && xAngle < start) {
                      xs.push(xAngle);
                    }
                  }
                }

                for (i = 0, l = xs.length; i < l; i++) {
                  var x = Ellipse.xAt(psi, rx, ry, cx, xs[i]);
                  if (x < minX) {
                    minX = x;
                  }
                  if (x > maxX) {
                    maxX = x;
                  }
                }

                var yDim = Ellipse.yExtrema(psi, rx, ry);
                var minY = Infinity;
                var maxY = -Infinity;
                var ys = [start, end];
                for (i = -Math.PI * 2; i <= Math.PI * 2; i += Math.PI) {
                  var yAngle = yDim + i;
                  if (fs === 1) {
                    if (start < yAngle && yAngle < end) {
                      ys.push(yAngle);
                    }
                  } else {
                    if (end < yAngle && yAngle < start) {
                      ys.push(yAngle);
                    }
                  }
                }

                for (i = 0, l = ys.length; i < l; i++) {
                  var y = Ellipse.yAt(psi, rx, ry, cy, ys[i]);
                  if (y < minY) {
                    minY = y;
                  }
                  if (y > maxY) {
                    maxY = y;
                  }
                }
                this.box = {
                  minX: minX - halfWidth,
                  maxX: maxX + halfWidth,
                  minY: minY - halfWidth,
                  maxY: maxY + halfWidth
                };
                break;
              }
          }
        }
      });

      module.exports = PathSegment;

      /***/
    },
    /* 30 */
    /***/function (module, exports, __webpack_require__) {

      var isArrayLike = __webpack_require__(5);

      function toArray(value) {
        return isArrayLike(value) ? Array.prototype.slice.call(value) : [];
      }

      module.exports = toArray;

      /***/
    },
    /* 31 */
    /***/function (module, exports, __webpack_require__) {

      var isObjectLike = __webpack_require__(32);
      var isType = __webpack_require__(9);

      var isPlainObject = function isPlainObject(value) {
        /**
         * isObjectLike(new Foo) => false
         * isObjectLike([1, 2, 3]) => false
         * isObjectLike({ x: 0, y: 0 }) => true
         * isObjectLike(Object.create(null)) => true
         */
        if (!isObjectLike(value) || !isType(value, 'Object')) {
          return false;
        }
        if (Object.getPrototypeOf(value) === null) {
          return true;
        }
        var proto = value;
        while (Object.getPrototypeOf(proto) !== null) {
          proto = Object.getPrototypeOf(proto);
        }
        return Object.getPrototypeOf(value) === proto;
      };

      module.exports = isPlainObject;

      /***/
    },
    /* 32 */
    /***/function (module, exports) {

      var _typeof2 = typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
      };

      var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
      };

      var isObjectLike = function isObjectLike(value) {
        /**
         * isObjectLike({}) => true
         * isObjectLike([1, 2, 3]) => true
         * isObjectLike(Function) => false
         * isObjectLike(null) => false
         */
        return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value !== null;
      };

      module.exports = isObjectLike;

      /***/
    },
    /* 33 */
    /***/function (module, exports, __webpack_require__) {

      var isFunction = __webpack_require__(13);
      var isArray = __webpack_require__(11);
      var groupBy = __webpack_require__(34);

      var groupToMap = function groupToMap(data, condition) {
        if (!condition) {
          return {
            0: data
          };
        }
        if (!isFunction(condition)) {
          var paramsCondition = isArray(condition) ? condition : condition.replace(/\s+/g, '').split('*');
          condition = function condition(row) {
            var unique = '_'; // 避免出现数字作为Key的情况，会进行按照数字的排序
            for (var i = 0, l = paramsCondition.length; i < l; i++) {
              unique += row[paramsCondition[i]] && row[paramsCondition[i]].toString();
            }
            return unique;
          };
        }
        var groups = groupBy(data, condition);
        return groups;
      };

      module.exports = groupToMap;

      /***/
    },
    /* 34 */
    /***/function (module, exports, __webpack_require__) {

      var each = __webpack_require__(10);
      var isArray = __webpack_require__(11);
      var hasOwnProperty = Object.prototype.hasOwnProperty;
      var groupBy = function groupBy(data, condition) {
        if (!condition || !isArray(data)) {
          return data;
        }
        var result = {};
        var key = null;
        each(data, function (item) {
          key = condition(item);
          if (hasOwnProperty.call(result, key)) {
            result[key].push(item);
          } else {
            result[key] = [item];
          }
        });
        return result;
      };

      module.exports = groupBy;

      /***/
    },
    /* 35 */
    /***/function (module, exports, __webpack_require__) {

      var isObjectLike = __webpack_require__(32);
      var isArrayLike = __webpack_require__(5);
      var isString = __webpack_require__(102);

      var isEqual = function isEqual(value, other) {
        if (value === other) {
          return true;
        }
        if (!value || !other) {
          return false;
        }
        if (isString(value) || isString(other)) {
          return false;
        }
        if (isArrayLike(value) || isArrayLike(other)) {
          if (value.length !== other.length) {
            return false;
          }
          var rst = true;
          for (var i = 0; i < value.length; i++) {
            rst = isEqual(value[i], other[i]);
            if (!rst) {
              break;
            }
          }
          return rst;
        }
        if (isObjectLike(value) || isObjectLike(other)) {
          var valueKeys = Object.keys(value);
          var otherKeys = Object.keys(other);
          if (valueKeys.length !== otherKeys.length) {
            return false;
          }
          var _rst = true;
          for (var _i = 0; _i < valueKeys.length; _i++) {
            _rst = isEqual(value[valueKeys[_i]], other[valueKeys[_i]]);
            if (!_rst) {
              break;
            }
          }
          return _rst;
        }
        return false;
      };

      module.exports = isEqual;

      /***/
    },
    /* 36 */
    /***/function (module, exports, __webpack_require__) {

      var Util = __webpack_require__(8);

      var TABLE = document.createElement('table');
      var TABLE_TR = document.createElement('tr');
      var FRAGMENT_REG = /^\s*<(\w+|!)[^>]*>/;
      var CONTAINERS = {
        tr: document.createElement('tbody'),
        tbody: TABLE,
        thead: TABLE,
        tfoot: TABLE,
        td: TABLE_TR,
        th: TABLE_TR,
        '*': document.createElement('div')
      };

      module.exports = {
        getBoundingClientRect: function getBoundingClientRect(node, defaultValue) {
          if (node && node.getBoundingClientRect) {
            var rect = node.getBoundingClientRect();
            var top = document.documentElement.clientTop;
            var left = document.documentElement.clientLeft;
            return {
              top: rect.top - top,
              bottom: rect.bottom - top,
              left: rect.left - left,
              right: rect.right - left
            };
          }
          return defaultValue || null;
        },

        /**
         * 获取样式
         * @param  {Object} dom DOM节点
         * @param  {String} name 样式名
         * @param  {Any} defaultValue 默认值
         * @return {String} 属性值
         */
        getStyle: function getStyle(dom, name, defaultValue) {
          try {
            if (window.getComputedStyle) {
              return window.getComputedStyle(dom, null)[name];
            }
            return dom.currentStyle[name];
          } catch (e) {
            if (!Util.isNil(defaultValue)) {
              return defaultValue;
            }
            return null;
          }
        },
        modifyCSS: function modifyCSS(dom, css) {
          if (dom) {
            for (var key in css) {
              if (css.hasOwnProperty(key)) {
                dom.style[key] = css[key];
              }
            }
          }
          return dom;
        },

        /**
         * 创建DOM 节点
         * @param  {String} str Dom 字符串
         * @return {HTMLElement}  DOM 节点
         */
        createDom: function createDom(str) {
          var name = FRAGMENT_REG.test(str) && RegExp.$1;
          if (!(name in CONTAINERS)) {
            name = '*';
          }
          var container = CONTAINERS[name];
          str = str.replace(/(^\s*)|(\s*$)/g, '');
          container.innerHTML = '' + str;
          var dom = container.childNodes[0];
          container.removeChild(dom);
          return dom;
        },
        getRatio: function getRatio() {
          return window.devicePixelRatio ? window.devicePixelRatio : 2;
        },

        /**
         * 获取宽度
         * @param  {HTMLElement} el  dom节点
         * @param  {Number} defaultValue 默认值
         * @return {Number} 宽度
         */
        getWidth: function getWidth(el, defaultValue) {
          var width = this.getStyle(el, 'width', defaultValue);
          if (width === 'auto') {
            width = el.offsetWidth;
          }
          return parseFloat(width);
        },

        /**
         * 获取高度
         * @param  {HTMLElement} el dom节点
         * @param  {Number} defaultValue 默认值
         * @return {Number} 高度
         */
        getHeight: function getHeight(el, defaultValue) {
          var height = this.getStyle(el, 'height', defaultValue);
          if (height === 'auto') {
            height = el.offsetHeight;
          }
          return parseFloat(height);
        },

        /**
         * 获取外层高度
         * @param  {HTMLElement} el dom节点
         * @param  {Number} defaultValue 默认值
         * @return {Number} 高度
         */
        getOuterHeight: function getOuterHeight(el, defaultValue) {
          var height = this.getHeight(el, defaultValue);
          var bTop = parseFloat(this.getStyle(el, 'borderTopWidth')) || 0;
          var pTop = parseFloat(this.getStyle(el, 'paddingTop')) || 0;
          var pBottom = parseFloat(this.getStyle(el, 'paddingBottom')) || 0;
          var bBottom = parseFloat(this.getStyle(el, 'borderBottomWidth')) || 0;
          return height + bTop + bBottom + pTop + pBottom;
        },

        /**
         * 获取外层宽度
         * @param  {HTMLElement} el dom节点
         * @param  {Number} defaultValue 默认值
         * @return {Number} 宽度
         */
        getOuterWidth: function getOuterWidth(el, defaultValue) {
          var width = this.getWidth(el, defaultValue);
          var bLeft = parseFloat(this.getStyle(el, 'borderLeftWidth')) || 0;
          var pLeft = parseFloat(this.getStyle(el, 'paddingLeft')) || 0;
          var pRight = parseFloat(this.getStyle(el, 'paddingRight')) || 0;
          var bRight = parseFloat(this.getStyle(el, 'borderRightWidth')) || 0;
          return width + bLeft + bRight + pLeft + pRight;
        },

        /**
         * 添加事件监听器
         * @param  {Object} target DOM对象
         * @param  {String} eventType 事件名
         * @param  {Funtion} callback 回调函数
         * @return {Object} 返回对象
         */
        addEventListener: function addEventListener(target, eventType, callback) {
          if (target) {
            if (target.addEventListener) {
              target.addEventListener(eventType, callback, false);
              return {
                remove: function remove() {
                  target.removeEventListener(eventType, callback, false);
                }
              };
            } else if (target.attachEvent) {
              target.attachEvent('on' + eventType, callback);
              return {
                remove: function remove() {
                  target.detachEvent('on' + eventType, callback);
                }
              };
            }
          }
        },
        requestAnimationFrame: function requestAnimationFrame(fn) {
          var method = window.requestAnimationFrame || window.webkitRequestAnimationFrame || function (fn) {
            return setTimeout(fn, 16);
          };

          return method(fn);
        }
      };

      /***/
    },
    /* 37 */
    /***/function (module, exports, __webpack_require__) {

      var Util = __webpack_require__(0);

      var Event = function Event(type, event, bubbles, cancelable) {
        this.type = type; // 事件类型
        this.target = null; // 目标
        this.currentTarget = null; // 当前目标
        this.bubbles = bubbles; // 冒泡
        this.cancelable = cancelable; // 是否能够阻止
        this.timeStamp = new Date().getTime(); // 时间戳
        this.defaultPrevented = false; // 阻止默认
        this.propagationStopped = false; // 阻止冒泡
        this.removed = false; // 是否被移除
        this.event = event; // 触发的原生事件
      };

      Util.augment(Event, {
        preventDefault: function preventDefault() {
          this.defaultPrevented = this.cancelable && true;
        },
        stopPropagation: function stopPropagation() {
          this.propagationStopped = true;
        },
        remove: function remove() {
          this.remove = true;
        },
        clone: function clone() {
          return Util.clone(this);
        },
        toString: function toString() {
          return '[Event (type=' + this.type + ')]';
        }
      });

      module.exports = Event;

      /***/
    },
    /* 38 */
    /***/function (module, exports, __webpack_require__) {

      var Util = __webpack_require__(0);
      var Element = __webpack_require__(17);
      var Shape = __webpack_require__(113);

      var SHAPE_MAP = {}; // 缓存图形类型
      var INDEX = '_INDEX';

      function getComparer(compare) {
        return function (left, right) {
          var result = compare(left, right);
          return result === 0 ? left[INDEX] - right[INDEX] : result;
        };
      }

      var Group = function Group(cfg) {
        Group.superclass.constructor.call(this, cfg);
        this.set('children', []);

        this._beforeRenderUI();
        this._renderUI();
        this._bindUI();
      };

      function initClassCfgs(c) {
        if (c.__cfg || c === Group) {
          return;
        }
        var superCon = c.superclass.constructor;
        if (superCon && !superCon.__cfg) {
          initClassCfgs(superCon);
        }
        c.__cfg = {};

        Util.merge(c.__cfg, superCon.__cfg);
        Util.merge(c.__cfg, c.CFG);
      }

      Util.extend(Group, Element);

      Util.augment(Group, {
        isGroup: true,
        canFill: true,
        canStroke: true,
        init: function init(id) {
          Group.superclass.init.call(this);
          var shape = document.createElementNS('http://www.w3.org/2000/svg', 'g');
          id = id || Util.uniqueId('g_');
          shape.setAttribute('id', id);
          this.setSilent('el', shape);
          this.setSilent('id', id);
        },
        getDefaultCfg: function getDefaultCfg() {
          initClassCfgs(this.constructor);
          return Util.merge({}, this.constructor.__cfg);
        },
        _beforeRenderUI: function _beforeRenderUI() {},
        _renderUI: function _renderUI() {},
        _bindUI: function _bindUI() {},
        addShape: function addShape(type, cfg) {
          var canvas = this.get('canvas');
          cfg = cfg || {};
          var shapeType = SHAPE_MAP[type];
          if (!shapeType) {
            shapeType = Util.upperFirst(type);
            SHAPE_MAP[type] = shapeType;
          }
          if (cfg.attrs) {
            var attrs = cfg.attrs;
            if (type === 'text') {
              // 临时解决
              var topFontFamily = canvas.get('fontFamily');
              if (topFontFamily) {
                attrs.fontFamily = attrs.fontFamily || topFontFamily;
              }
            }
          }
          cfg.canvas = canvas;
          cfg.defs = this.get('defs');
          cfg.type = type;
          var shape = Shape[shapeType];
          if (!shape) {
            throw new TypeError('the shape ' + shapeType + ' is not supported by svg version, use canvas instead');
          }
          var rst = new shape(cfg);
          this.add(rst);
          return rst;
        },

        /** 添加图组
         * @param  {Function|Object|undefined} param 图组类
         * @param  {Object} cfg 配置项
         * @return {Object} rst 图组
         */
        addGroup: function addGroup(param, cfg) {
          var canvas = this.get('canvas');
          var rst = void 0;
          cfg = Util.merge({}, cfg);
          if (Util.isFunction(param)) {
            if (cfg) {
              cfg.canvas = canvas;
              cfg.parent = this;
              rst = new param(cfg);
            } else {
              rst = new param({
                canvas: canvas,
                parent: this
              });
            }
            this.add(rst);
          } else if (Util.isObject(param)) {
            param.canvas = canvas;
            rst = new Group(param);
            this.add(rst);
          } else if (param === undefined) {
            rst = new Group();
            this.add(rst);
          } else {
            return false;
          }
          return rst;
        },

        /** 绘制背景
         * @param  {Array} padding 内边距
         * @param  {Attrs} attrs 图形属性
         * @param  {Shape} backShape 背景图形
         * @return {Object} 背景层对象
         */
        renderBack: function renderBack(padding, attrs) {
          var backShape = this.get('backShape');
          var innerBox = this.getBBox();
          // const parent = this.get('parent'); // getParent
          Util.merge(attrs, {
            x: innerBox.minX - padding[3],
            y: innerBox.minY - padding[0],
            width: innerBox.width + padding[1] + padding[3],
            height: innerBox.height + padding[0] + padding[2]
          });
          if (backShape) {
            backShape.attr(attrs);
          } else {
            backShape = this.addShape('rect', {
              zIndex: -1,
              attrs: attrs
            });
          }
          this.set('backShape', backShape);
          this.sort();
          return backShape;
        },
        removeChild: function removeChild(item, destroy) {
          if (arguments.length >= 2) {
            if (this.contain(item)) {
              item.remove(destroy);
            }
          } else {
            if (arguments.length === 1) {
              if (Util.isBoolean(item)) {
                destroy = item;
              } else {
                if (this.contain(item)) {
                  item.remove(true);
                }
                return this;
              }
            }
            if (arguments.length === 0) {
              destroy = true;
            }

            Group.superclass.remove.call(this, destroy);
          }
          return this;
        },

        /**
         * 向组中添加shape或者group
         * @param {Object} items 图形或者分组
         * @return {Object} group 本尊
         */
        add: function add(items) {
          var self = this;
          var children = self.get('children');
          var el = self.get('el');
          if (Util.isArray(items)) {
            Util.each(items, function (item) {
              var parent = item.get('parent');
              if (parent) {
                parent.removeChild(item, false);
              }
              if (item.get('dependencies')) {
                self._addDependency(item);
              }
              self._setEvn(item);
              el.appendChild(item.get('el'));
            });
            children.push.apply(children, items);
          } else {
            var item = items;
            var parent = item.get('parent');
            if (parent) {
              parent.removeChild(item, false);
            }
            self._setEvn(item);
            if (item.get('dependencies')) {
              self._addDependency(item);
            }
            el.appendChild(item.get('el'));
            children.push(item);
          }
          return self;
        },
        contain: function contain(item) {
          var children = this.get('children');
          return children.indexOf(item) > -1;
        },
        getChildByIndex: function getChildByIndex(index) {
          var children = this.get('children');
          return children[index];
        },
        getFirst: function getFirst() {
          return this.getChildByIndex(0);
        },
        getLast: function getLast() {
          var lastIndex = this.get('children').length - 1;
          return this.getChildByIndex(lastIndex);
        },
        _addDependency: function _addDependency(item) {
          var dependencies = item.get('dependencies');
          item.attr(dependencies);
          item.__cfg.dependencies = {};
        },
        _setEvn: function _setEvn(item) {
          var self = this;
          var cfg = self.__cfg;
          item.__cfg.parent = self;
          item.__cfg.timeline = cfg.timeline;
          item.__cfg.canvas = cfg.canvas;
          item.__cfg.defs = cfg.defs;
          var clip = item.__attrs.clip;
          if (clip) {
            clip.setSilent('parent', self);
            clip.setSilent('timeline', cfg.timeline);
            clip.setSilent('canvas', cfg.canvas);
          }
          var children = item.__cfg.children;
          if (children) {
            Util.each(children, function (child) {
              item._setEvn(child);
            });
          }
        },
        getCount: function getCount() {
          return this.get('children').length;
        },
        sort: function sort() {
          var children = this.get('children');
          // 稳定排序
          Util.each(children, function (child, index) {
            child[INDEX] = index;
            return child;
          });

          children.sort(getComparer(function (obj1, obj2) {
            return obj1.get('zIndex') - obj2.get('zIndex');
          }));

          return this;
        },
        findById: function findById(id) {
          return this.find(function (item) {
            return item.get('id') === id;
          });
        },

        /**
         * 根据查找函数查找分组或者图形
         * @param  {Function} fn 匹配函数
         * @return {Canvas.Base} 分组或者图形
         */
        find: function find(fn) {
          if (Util.isString(fn)) {
            return this.findById(fn);
          }
          var children = this.get('children');
          var rst = null;

          Util.each(children, function (item) {
            if (fn(item)) {
              rst = item;
            } else if (item.find) {
              rst = item.find(fn);
            }
            if (rst) {
              return false;
            }
          });
          return rst;
        },

        /**
         * @param  {Function} fn filter mathod
         * @return {Array} all the matching shapes and groups
         */
        findAll: function findAll(fn) {
          var children = this.get('children');
          var rst = [];
          var childRst = [];
          Util.each(children, function (item) {
            if (fn(item)) {
              rst.push(item);
            }
            if (item.findAllBy) {
              childRst = item.findAllBy(fn);
              rst = rst.concat(childRst);
            }
          });
          return rst;
        },

        /**
         * @Deprecated
         * @param  {Function} fn filter method
         * @return {Object} found shape or group
         */
        findBy: function findBy(fn) {
          var children = this.get('children');
          var rst = null;

          Util.each(children, function (item) {
            if (fn(item)) {
              rst = item;
            } else if (item.findBy) {
              rst = item.findBy(fn);
            }
            if (rst) {
              return false;
            }
          });
          return rst;
        },

        /**
         * @Deprecated
         * @param  {Function} fn filter mathod
         * @return {Array} all the matching shapes and groups
         */
        findAllBy: function findAllBy(fn) {
          var children = this.get('children');
          var rst = [];
          var childRst = [];
          Util.each(children, function (item) {
            if (fn(item)) {
              rst.push(item);
            }
            if (item.findAllBy) {
              childRst = item.findAllBy(fn);
              rst = rst.concat(childRst);
            }
          });
          return rst;
        },

        // svg不进行拾取，仅保留接口
        getShape: function getShape() {
          return null;
        },

        /**
         * 根据点击事件的element获取对应的图形对象
         * @param  {Object} el 点击的dom元素
         * @return {Object}  对应图形对象
         */
        findShape: function findShape(el) {
          if (this.__cfg.visible && this.__cfg.capture && this.get('el') === el) {
            return this;
          }
          var children = this.__cfg.children;
          var shape = null;
          for (var i = children.length - 1; i >= 0; i--) {
            var child = children[i];
            if (child.isGroup) {
              shape = child.findShape(el);
              shape = child.findShape(el);
            } else if (child.get('visible') && child.get('el') === el) {
              shape = child;
            }
            if (shape) {
              break;
            }
          }
          return shape;
        },
        clearTotalMatrix: function clearTotalMatrix() {
          var m = this.get('totalMatrix');
          if (m) {
            this.setSilent('totalMatrix', null);
            var children = this.__cfg.children;
            for (var i = 0; i < children.length; i++) {
              var child = children[i];
              child.clearTotalMatrix();
            }
          }
        },
        clear: function clear() {
          var children = this.get('children');

          while (children.length !== 0) {
            children[children.length - 1].remove();
          }
          return this;
        },
        destroy: function destroy() {
          if (this.get('destroyed')) {
            return;
          }
          this.clear();
          Group.superclass.destroy.call(this);
        }
      });

      module.exports = Group;

      /***/
    },
    /* 39 */
    /***/function (module, exports, __webpack_require__) {

      var Util = __webpack_require__(0);
      var MatrixUtil = __webpack_require__(2);

      var ReservedProps = { delay: 'delay' };

      function getFromAttrs(toAttrs, shape) {
        var rst = {};
        for (var k in toAttrs) {
          rst[k] = shape.attr(k);
        }
        return rst;
      }

      function getFormatProps(props, shape) {
        var rst = {
          matrix: null,
          attrs: {}
        };
        for (var k in props) {
          if (k === 'transform') {
            rst.matrix = MatrixUtil.transform(shape.getMatrix(), props[k]);
          } else if (k === 'matrix') {
            rst.matrix = props[k];
          } else if (!ReservedProps[k]) {
            rst.attrs[k] = props[k];
          }
        }
        return rst;
      }

      function checkExistedAttrs(animators, animator) {
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        Util.each(animator.toAttrs, function (v, k) {
          Util.each(animators, function (animator) {
            if (hasOwnProperty.call(animator.toAttrs, k)) {
              delete animator.toAttrs[k];
              delete animator.fromAttrs[k];
            }
          });
        });
        return animators;
      }

      module.exports = {
        /**
         * 执行动画
         * @param  {Object}   toProps  动画最终状态
         * @param  {Number}   duration 动画执行时间
         * @param  {String}   easing   动画缓动效果
         * @param  {Function} callback 动画执行后的回调
         * @param  {Number}   delay    动画延迟时间
         */
        animate: function animate(toProps, duration, easing, callback) {
          var delay = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;

          var self = this;
          self.set('animating', true);
          var timeline = self.get('timeline');
          if (!timeline) {
            timeline = self.get('canvas').get('timeline');
            self.setSilent('timeline', timeline);
          }
          var animators = self.get('animators') || [];
          // 初始化tick
          if (!timeline._timer) {
            timeline.initTimer();
          }
          if (Util.isNumber(callback)) {
            delay = callback;
            callback = null;
          }
          if (Util.isFunction(easing)) {
            callback = easing;
            easing = 'easeLinear';
          } else {
            easing = easing ? easing : 'easeLinear';
          }
          var formatProps = getFormatProps(toProps, self);
          // 记录动画属性
          var animator = {
            fromAttrs: getFromAttrs(toProps, self),
            toAttrs: formatProps.attrs,
            fromMatrix: Util.clone(self.getMatrix()),
            toMatrix: formatProps.matrix,
            duration: duration,
            easing: easing,
            callback: callback,
            delay: delay,
            startTime: timeline.getTime(),
            id: Util.uniqueId()
          };
          // 如果动画队列中已经有这个图形了
          if (animators.length > 0) {
            // 先检查是否需要合并属性。若有相同的动画，将该属性从前一个动画中删除,直接用后一个动画中
            animators = checkExistedAttrs(animators, animator);
          } else {
            // 否则将图形添加到队列
            timeline.addAnimator(self);
          }
          animators.push(animator);
          self.setSilent('animators', animators);
          self.setSilent('pause', { isPaused: false });
        },
        stopAnimate: function stopAnimate() {
          var _this = this;

          var animators = this.get('animators');
          // 将动画执行到最后一帧，执行回调
          Util.each(animators, function (animator) {
            _this.attr(animator.toAttrs);
            if (animator.toMatrix) {
              _this.attr('matrix', animator.toMatrix);
            }
            if (animator.callback) {
              animator.callback();
            }
          });
          this.setSilent('animating', false);
          this.setSilent('animators', []);
        },
        pauseAnimate: function pauseAnimate() {
          var self = this;
          var timeline = self.get('timeline');
          // 记录下是在什么时候暂停的
          self.setSilent('pause', {
            isPaused: true,
            pauseTime: timeline.getTime()
          });
          return self;
        },
        resumeAnimate: function resumeAnimate() {
          var self = this;
          var timeline = self.get('timeline');
          var current = timeline.getTime();
          var animators = self.get('animators');
          var pauseTime = self.get('pause').pauseTime;
          // 之后更新属性需要计算动画已经执行的时长，如果暂停了，就把初始时间调后
          Util.each(animators, function (animator) {
            animator.startTime = animator.startTime + (current - pauseTime);
            animator._paused = false;
            animator._pauseTime = null;
          });
          self.setSilent('pause', {
            isPaused: false
          });
          self.setSilent('animators', animators);
          return self;
        }
      };

      /***/
    },
    /* 40 */
    /***/function (module, exports, __webpack_require__) {

      var __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
      };

      /*!
       * EventEmitter v5.1.0 - git.io/ee
       * Unlicense - http://unlicense.org/
       * Oliver Caldwell - http://oli.me.uk/
       * @preserve
       */

      ;(function (exports) {
        'use strict';

        /**
         * Class for managing events.
         * Can be extended to provide event functionality in other classes.
         *
         * @class EventEmitter Manages event registering and emitting.
         */

        function EventEmitter() {}

        // Shortcuts to improve speed and size
        var proto = EventEmitter.prototype;
        var originalGlobalValue = exports.EventEmitter;

        /**
         * Finds the index of the listener for the event in its storage array.
         *
         * @param {Function[]} listeners Array of listeners to search through.
         * @param {Function} listener Method to look for.
         * @return {Number} Index of the specified listener, -1 if not found
         * @api private
         */
        function indexOfListener(listeners, listener) {
          var i = listeners.length;
          while (i--) {
            if (listeners[i].listener === listener) {
              return i;
            }
          }

          return -1;
        }

        /**
         * Alias a method while keeping the context correct, to allow for overwriting of target method.
         *
         * @param {String} name The name of the target method.
         * @return {Function} The aliased method
         * @api private
         */
        function alias(name) {
          return function aliasClosure() {
            return this[name].apply(this, arguments);
          };
        }

        /**
         * Returns the listener array for the specified event.
         * Will initialise the event object and listener arrays if required.
         * Will return an object if you use a regex search. The object contains keys for each matched event. So /ba[rz]/ might return an object containing bar and baz. But only if you have either defined them with defineEvent or added some listeners to them.
         * Each property in the object response is an array of listener functions.
         *
         * @param {String|RegExp} evt Name of the event to return the listeners from.
         * @return {Function[]|Object} All listener functions for the event.
         */
        proto.getListeners = function getListeners(evt) {
          var events = this._getEvents();
          var response;
          var key;

          // Return a concatenated array of all matching events if
          // the selector is a regular expression.
          if (evt instanceof RegExp) {
            response = {};
            for (key in events) {
              if (events.hasOwnProperty(key) && evt.test(key)) {
                response[key] = events[key];
              }
            }
          } else {
            response = events[evt] || (events[evt] = []);
          }

          return response;
        };

        /**
         * Takes a list of listener objects and flattens it into a list of listener functions.
         *
         * @param {Object[]} listeners Raw listener objects.
         * @return {Function[]} Just the listener functions.
         */
        proto.flattenListeners = function flattenListeners(listeners) {
          var flatListeners = [];
          var i;

          for (i = 0; i < listeners.length; i += 1) {
            flatListeners.push(listeners[i].listener);
          }

          return flatListeners;
        };

        /**
         * Fetches the requested listeners via getListeners but will always return the results inside an object. This is mainly for internal use but others may find it useful.
         *
         * @param {String|RegExp} evt Name of the event to return the listeners from.
         * @return {Object} All listener functions for an event in an object.
         */
        proto.getListenersAsObject = function getListenersAsObject(evt) {
          var listeners = this.getListeners(evt);
          var response;

          if (listeners instanceof Array) {
            response = {};
            response[evt] = listeners;
          }

          return response || listeners;
        };

        function isValidListener(listener) {
          if (typeof listener === 'function' || listener instanceof RegExp) {
            return true;
          } else if (listener && (typeof listener === 'undefined' ? 'undefined' : _typeof(listener)) === 'object') {
            return isValidListener(listener.listener);
          } else {
            return false;
          }
        }

        /**
         * Adds a listener function to the specified event.
         * The listener will not be added if it is a duplicate.
         * If the listener returns true then it will be removed after it is called.
         * If you pass a regular expression as the event name then the listener will be added to all events that match it.
         *
         * @param {String|RegExp} evt Name of the event to attach the listener to.
         * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
         * @return {Object} Current instance of EventEmitter for chaining.
         */
        proto.addListener = function addListener(evt, listener) {
          if (!isValidListener(listener)) {
            throw new TypeError('listener must be a function');
          }

          var listeners = this.getListenersAsObject(evt);
          var listenerIsWrapped = (typeof listener === 'undefined' ? 'undefined' : _typeof(listener)) === 'object';
          var key;

          for (key in listeners) {
            if (listeners.hasOwnProperty(key) && indexOfListener(listeners[key], listener) === -1) {
              listeners[key].push(listenerIsWrapped ? listener : {
                listener: listener,
                once: false
              });
            }
          }

          return this;
        };

        /**
         * Alias of addListener
         */
        proto.on = alias('addListener');

        /**
         * Semi-alias of addListener. It will add a listener that will be
         * automatically removed after its first execution.
         *
         * @param {String|RegExp} evt Name of the event to attach the listener to.
         * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
         * @return {Object} Current instance of EventEmitter for chaining.
         */
        proto.addOnceListener = function addOnceListener(evt, listener) {
          return this.addListener(evt, {
            listener: listener,
            once: true
          });
        };

        /**
         * Alias of addOnceListener.
         */
        proto.once = alias('addOnceListener');

        /**
         * Defines an event name. This is required if you want to use a regex to add a listener to multiple events at once. If you don't do this then how do you expect it to know what event to add to? Should it just add to every possible match for a regex? No. That is scary and bad.
         * You need to tell it what event names should be matched by a regex.
         *
         * @param {String} evt Name of the event to create.
         * @return {Object} Current instance of EventEmitter for chaining.
         */
        proto.defineEvent = function defineEvent(evt) {
          this.getListeners(evt);
          return this;
        };

        /**
         * Uses defineEvent to define multiple events.
         *
         * @param {String[]} evts An array of event names to define.
         * @return {Object} Current instance of EventEmitter for chaining.
         */
        proto.defineEvents = function defineEvents(evts) {
          for (var i = 0; i < evts.length; i += 1) {
            this.defineEvent(evts[i]);
          }
          return this;
        };

        /**
         * Removes a listener function from the specified event.
         * When passed a regular expression as the event name, it will remove the listener from all events that match it.
         *
         * @param {String|RegExp} evt Name of the event to remove the listener from.
         * @param {Function} listener Method to remove from the event.
         * @return {Object} Current instance of EventEmitter for chaining.
         */
        proto.removeListener = function removeListener(evt, listener) {
          var listeners = this.getListenersAsObject(evt);
          var index;
          var key;

          for (key in listeners) {
            if (listeners.hasOwnProperty(key)) {
              index = indexOfListener(listeners[key], listener);

              if (index !== -1) {
                listeners[key].splice(index, 1);
              }
            }
          }

          return this;
        };

        /**
         * Alias of removeListener
         */
        proto.off = alias('removeListener');

        /**
         * Adds listeners in bulk using the manipulateListeners method.
         * If you pass an object as the second argument you can add to multiple events at once. The object should contain key value pairs of events and listeners or listener arrays. You can also pass it an event name and an array of listeners to be added.
         * You can also pass it a regular expression to add the array of listeners to all events that match it.
         * Yeah, this function does quite a bit. That's probably a bad thing.
         *
         * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add to multiple events at once.
         * @param {Function[]} [listeners] An optional array of listener functions to add.
         * @return {Object} Current instance of EventEmitter for chaining.
         */
        proto.addListeners = function addListeners(evt, listeners) {
          // Pass through to manipulateListeners
          return this.manipulateListeners(false, evt, listeners);
        };

        /**
         * Removes listeners in bulk using the manipulateListeners method.
         * If you pass an object as the second argument you can remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
         * You can also pass it an event name and an array of listeners to be removed.
         * You can also pass it a regular expression to remove the listeners from all events that match it.
         *
         * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to remove from multiple events at once.
         * @param {Function[]} [listeners] An optional array of listener functions to remove.
         * @return {Object} Current instance of EventEmitter for chaining.
         */
        proto.removeListeners = function removeListeners(evt, listeners) {
          // Pass through to manipulateListeners
          return this.manipulateListeners(true, evt, listeners);
        };

        /**
         * Edits listeners in bulk. The addListeners and removeListeners methods both use this to do their job. You should really use those instead, this is a little lower level.
         * The first argument will determine if the listeners are removed (true) or added (false).
         * If you pass an object as the second argument you can add/remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
         * You can also pass it an event name and an array of listeners to be added/removed.
         * You can also pass it a regular expression to manipulate the listeners of all events that match it.
         *
         * @param {Boolean} remove True if you want to remove listeners, false if you want to add.
         * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add/remove from multiple events at once.
         * @param {Function[]} [listeners] An optional array of listener functions to add/remove.
         * @return {Object} Current instance of EventEmitter for chaining.
         */
        proto.manipulateListeners = function manipulateListeners(remove, evt, listeners) {
          var i;
          var value;
          var single = remove ? this.removeListener : this.addListener;
          var multiple = remove ? this.removeListeners : this.addListeners;

          // If evt is an object then pass each of its properties to this method
          if ((typeof evt === 'undefined' ? 'undefined' : _typeof(evt)) === 'object' && !(evt instanceof RegExp)) {
            for (i in evt) {
              if (evt.hasOwnProperty(i) && (value = evt[i])) {
                // Pass the single listener straight through to the singular method
                if (typeof value === 'function') {
                  single.call(this, i, value);
                } else {
                  // Otherwise pass back to the multiple function
                  multiple.call(this, i, value);
                }
              }
            }
          } else {
            // So evt must be a string
            // And listeners must be an array of listeners
            // Loop over it and pass each one to the multiple method
            i = listeners.length;
            while (i--) {
              single.call(this, evt, listeners[i]);
            }
          }

          return this;
        };

        /**
         * Removes all listeners from a specified event.
         * If you do not specify an event then all listeners will be removed.
         * That means every event will be emptied.
         * You can also pass a regex to remove all events that match it.
         *
         * @param {String|RegExp} [evt] Optional name of the event to remove all listeners for. Will remove from every event if not passed.
         * @return {Object} Current instance of EventEmitter for chaining.
         */
        proto.removeEvent = function removeEvent(evt) {
          var type = typeof evt === 'undefined' ? 'undefined' : _typeof(evt);
          var events = this._getEvents();
          var key;

          // Remove different things depending on the state of evt
          if (type === 'string') {
            // Remove all listeners for the specified event
            delete events[evt];
          } else if (evt instanceof RegExp) {
            // Remove all events matching the regex.
            for (key in events) {
              if (events.hasOwnProperty(key) && evt.test(key)) {
                delete events[key];
              }
            }
          } else {
            // Remove all listeners in all events
            delete this._events;
          }

          return this;
        };

        /**
         * Alias of removeEvent.
         *
         * Added to mirror the node API.
         */
        proto.removeAllListeners = alias('removeEvent');

        /**
         * Emits an event of your choice.
         * When emitted, every listener attached to that event will be executed.
         * If you pass the optional argument array then those arguments will be passed to every listener upon execution.
         * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.
         * So they will not arrive within the array on the other side, they will be separate.
         * You can also pass a regular expression to emit to all events that match it.
         *
         * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
         * @param {Array} [args] Optional array of arguments to be passed to each listener.
         * @return {Object} Current instance of EventEmitter for chaining.
         */
        proto.emitEvent = function emitEvent(evt, args) {
          var listenersMap = this.getListenersAsObject(evt);
          var listeners;
          var listener;
          var i;
          var key;
          var response;

          for (key in listenersMap) {
            if (listenersMap.hasOwnProperty(key)) {
              listeners = listenersMap[key].slice(0);

              for (i = 0; i < listeners.length; i++) {
                // If the listener returns true then it shall be removed from the event
                // The function is executed either with a basic call or an apply if there is an args array
                listener = listeners[i];

                if (listener.once === true) {
                  this.removeListener(evt, listener.listener);
                }

                response = listener.listener.apply(this, args || []);

                if (response === this._getOnceReturnValue()) {
                  this.removeListener(evt, listener.listener);
                }
              }
            }
          }

          return this;
        };

        /**
         * Alias of emitEvent
         */
        proto.trigger = alias('emitEvent');

        /**
         * Subtly different from emitEvent in that it will pass its arguments on to the listeners, as opposed to taking a single array of arguments to pass on.
         * As with emitEvent, you can pass a regex in place of the event name to emit to all events that match it.
         *
         * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
         * @param {...*} Optional additional arguments to be passed to each listener.
         * @return {Object} Current instance of EventEmitter for chaining.
         */
        proto.emit = function emit(evt) {
          var args = Array.prototype.slice.call(arguments, 1);
          return this.emitEvent(evt, args);
        };

        /**
         * Sets the current value to check against when executing listeners. If a
         * listeners return value matches the one set here then it will be removed
         * after execution. This value defaults to true.
         *
         * @param {*} value The new value to check for when executing listeners.
         * @return {Object} Current instance of EventEmitter for chaining.
         */
        proto.setOnceReturnValue = function setOnceReturnValue(value) {
          this._onceReturnValue = value;
          return this;
        };

        /**
         * Fetches the current value to check against when executing listeners. If
         * the listeners return value matches this one then it should be removed
         * automatically. It will return true by default.
         *
         * @return {*|Boolean} The current value to check for or the default, true.
         * @api private
         */
        proto._getOnceReturnValue = function _getOnceReturnValue() {
          if (this.hasOwnProperty('_onceReturnValue')) {
            return this._onceReturnValue;
          } else {
            return true;
          }
        };

        /**
         * Fetches the events object and creates one if required.
         *
         * @return {Object} The events storage object.
         * @api private
         */
        proto._getEvents = function _getEvents() {
          return this._events || (this._events = {});
        };

        /**
         * Reverts the global {@link EventEmitter} to its previous value and returns a reference to this version.
         *
         * @return {Function} Non conflicting EventEmitter class.
         */
        EventEmitter.noConflict = function noConflict() {
          exports.EventEmitter = originalGlobalValue;
          return EventEmitter;
        };

        // Expose the class either via AMD, CommonJS or the global object
        if (true) {
          !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
            return EventEmitter;
          }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else {}
      })(this || {});

      /***/
    },
    /* 41 */
    /***/function (module, exports, __webpack_require__) {

      var Util = __webpack_require__(0);
      var Shape = __webpack_require__(4);

      var Rect = function Rect(cfg) {
        Rect.superclass.constructor.call(this, cfg);
      };

      Rect.ATTRS = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        radius: 0,
        lineWidth: 1,
        fill: 'none'
      };

      Util.extend(Rect, Shape);

      Util.augment(Rect, {
        canFill: true,
        canStroke: true,
        type: 'rect',
        getDefaultAttrs: function getDefaultAttrs() {
          return {
            lineWidth: 1,
            fill: 'none'
          };
        },
        _afterSetRadius: function _afterSetRadius() {
          var el = this.get('el');
          el.setAttribute('rx', this.__attrs.radius);
          el.setAttribute('ry', this.__attrs.radius);
        },
        _afterSetAttrAll: function _afterSetAttrAll(objs) {
          if ('radius' in objs) {
            this._afterSetRadius();
          }
        }
      });

      module.exports = Rect;

      /***/
    },
    /* 42 */
    /***/function (module, exports, __webpack_require__) {

      var Util = __webpack_require__(0);
      var Shape = __webpack_require__(4);

      var Circle = function Circle(cfg) {
        Circle.superclass.constructor.call(this, cfg);
      };

      Circle.ATTRS = {
        x: 0,
        y: 0,
        r: 0,
        lineWidth: 1
      };

      Util.extend(Circle, Shape);

      Util.augment(Circle, {
        canFill: true,
        canStroke: true,
        type: 'circle',
        getDefaultAttrs: function getDefaultAttrs() {
          return {
            lineWidth: 1,
            fill: 'none'
          };
        }
      });

      module.exports = Circle;

      /***/
    },
    /* 43 */
    /***/function (module, exports, __webpack_require__) {

      var Util = __webpack_require__(0);
      var Shape = __webpack_require__(4);

      var Ellipse = function Ellipse(cfg) {
        Ellipse.superclass.constructor.call(this, cfg);
      };

      Ellipse.ATTRS = {
        x: 0,
        y: 0,
        rx: 1,
        ry: 1,
        lineWidth: 1
      };

      Util.extend(Ellipse, Shape);

      Util.augment(Ellipse, {
        canFill: true,
        canStroke: true,
        type: 'ellipse',
        getDefaultAttrs: function getDefaultAttrs() {
          return {
            lineWidth: 1
          };
        }
      });

      module.exports = Ellipse;

      /***/
    },
    /* 44 */
    /***/function (module, exports, __webpack_require__) {

      var Util = __webpack_require__(0);
      var Shape = __webpack_require__(4);

      var Path = function Path(cfg) {
        Path.superclass.constructor.call(this, cfg);
      };

      function at(p0, p1, p2, p3, t) {
        var onet = 1 - t;
        return onet * onet * (onet * p3 + 3 * t * p2) + t * t * (t * p0 + 3 * onet * p1);
      }

      Path.ATTRS = {
        path: null,
        lineWidth: 1,
        curve: null, // 曲线path
        tCache: null,
        startArrow: false,
        endArrow: false
      };

      Util.extend(Path, Shape);

      Util.augment(Path, {
        canFill: true,
        canStroke: true,
        type: 'path',
        getDefaultAttrs: function getDefaultAttrs() {
          return {
            lineWidth: 1,
            fill: 'none',
            startArrow: false,
            endArrow: false
          };
        },
        _afterSetAttrStroke: function _afterSetAttrStroke(value) {
          var start = this.get('marker-start');
          var end = this.get('marker-end');
          if (start) {
            this.get('defs').findById(start).update(null, value);
          }
          if (end) {
            this.get('defs').findById(end).update(null, value);
          }
        },
        _afterSetAttrPath: function _afterSetAttrPath(value) {
          var el = this.get('el');
          var d = value;
          if (Util.isArray(d)) {
            d = d.map(function (path) {
              return path.join(' ');
            }).join('');
          }
          if (~d.indexOf('NaN')) {
            el.setAttribute('d', '');
          } else {
            el.setAttribute('d', d);
          }
        },
        _afterSetAttrAll: function _afterSetAttrAll(objs) {
          if (objs.path) {
            this._afterSetAttrPath(objs.path);
          }
          if (objs.stroke) {
            this._afterSetAttrStroke(objs.stroke);
          }
        },
        getPoint: function getPoint(t) {
          var tCache = this.tCache;
          var subt = void 0;
          var index = void 0;

          if (!tCache) {
            this._calculateCurve();
            this._setTcache();
            tCache = this.tCache;
          }

          var curve = this.curve;

          if (!tCache) {
            if (curve) {
              return {
                x: curve[0][1],
                y: curve[0][2]
              };
            }
            return null;
          }
          Util.each(tCache, function (v, i) {
            if (t >= v[0] && t <= v[1]) {
              subt = (t - v[0]) / (v[1] - v[0]);
              index = i;
            }
          });
          var seg = curve[index];
          if (Util.isNil(seg) || Util.isNil(index)) {
            return null;
          }
          var l = seg.length;
          var nextSeg = curve[index + 1];

          return {
            x: at(seg[l - 2], nextSeg[1], nextSeg[3], nextSeg[5], 1 - subt),
            y: at(seg[l - 1], nextSeg[2], nextSeg[4], nextSeg[6], 1 - subt)
          };
        },
        createPath: function createPath() {}
      });

      module.exports = Path;

      /***/
    },
    /* 45 */
    /***/function (module, exports, __webpack_require__) {

      var Util = __webpack_require__(0);
      var Shape = __webpack_require__(4);

      var CText = function CText(cfg) {
        CText.superclass.constructor.call(this, cfg);
      };

      var BASELINE_MAP = {
        top: 'before-edge',
        middle: 'central',
        bottom: 'after-edge',
        alphabetic: 'baseline',
        hanging: 'hanging'
      };

      var ANCHOR_MAP = {
        left: 'left',
        start: 'left',
        center: 'middle',
        right: 'end',
        end: 'end'
      };

      CText.ATTRS = {
        x: 0,
        y: 0,
        text: null,
        fontSize: 12,
        fontFamily: 'sans-serif',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontVariant: 'normal',
        textAlign: 'start',
        textBaseline: 'bottom',
        lineHeight: null,
        textArr: null
      };

      Util.extend(CText, Shape);

      Util.augment(CText, {
        canFill: true,
        canStroke: true,
        type: 'text',
        getDefaultAttrs: function getDefaultAttrs() {
          return {
            lineWidth: 1,
            lineCount: 1,
            fontSize: 12,
            fill: '#000',
            fontFamily: 'sans-serif',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontVariant: 'normal',
            textAlign: 'start',
            textBaseline: 'bottom'
          };
        },
        initTransform: function initTransform() {
          this.attr('matrix', [1, 0, 0, 0, 1, 0, 0, 0, 1]);
          var fontSize = this.__attrs.fontSize;
          if (fontSize && +fontSize < 12) {
            // 小于 12 像素的文本进行 scale 处理
            this.transform([['t', -1 * this.__attrs.x, -1 * this.__attrs.y], ['s', +fontSize / 12, +fontSize / 12], ['t', this.__attrs.x, this.__attrs.y]]);
          }
        },
        _assembleFont: function _assembleFont() {
          var el = this.get('el');
          var attrs = this.__attrs;
          var fontSize = attrs.fontSize;
          var fontFamily = attrs.fontFamily;
          var fontWeight = attrs.fontWeight;
          var fontStyle = attrs.fontStyle; // self.attr('fontStyle');
          var fontVariant = attrs.fontVariant; // self.attr('fontVariant');
          // self.attr('font', [fontStyle, fontVariant, fontWeight, fontSize + 'px', fontFamily].join(' '));
          var font = [fontStyle, fontVariant, fontWeight, fontSize + 'px', fontFamily].join(' ');
          attrs.font = font;
          el.setAttribute('font', attrs.font);
        },
        _afterSetAttrFontSize: function _afterSetAttrFontSize() {
          /* this.attr({
            height: this._getTextHeight()
          }); */
          this._assembleFont();
        },
        _afterSetAttrFontFamily: function _afterSetAttrFontFamily() {
          this._assembleFont();
        },
        _afterSetAttrFontWeight: function _afterSetAttrFontWeight() {
          this._assembleFont();
        },
        _afterSetAttrFontStyle: function _afterSetAttrFontStyle() {
          this._assembleFont();
        },
        _afterSetAttrFontVariant: function _afterSetAttrFontVariant() {
          this._assembleFont();
        },
        _afterSetAttrTextAlign: function _afterSetAttrTextAlign() {
          // 由于本身不支持设置direction，所以left = start, right = end。之后看是否需要根据direction判断
          var attr = this.__attrs.textAlign;
          var el = this.get('el');
          el.setAttribute('text-anchor', ANCHOR_MAP[attr]);
        },
        _afterSetAttrTextBaseLine: function _afterSetAttrTextBaseLine() {
          var attr = this.__attrs.textBaseline;
          this.get('el').setAttribute('alignment-baseline', BASELINE_MAP[attr] || 'baseline');
        },
        _afterSetAttrText: function _afterSetAttrText(text) {
          var attrs = this.__attrs;
          var textArr = void 0;
          if (Util.isString(text) && text.indexOf('\n') !== -1) {
            textArr = text.split('\n');
            var lineCount = textArr.length;
            attrs.lineCount = lineCount;
            attrs.textArr = textArr;
          }
          var el = this.get('el');
          if (~['undefined', 'null', 'NaN'].indexOf(String(text)) && el) {
            el.innerHTML = '';
          } else if (~text.indexOf('\n')) {
            textArr = text.split('\n');
            attrs.lineCount = textArr.length;
            attrs.textArr = textArr;
            var arr = '';
            Util.each(textArr, function (segment, i) {
              arr += '<tspan x="0" y="' + (i + 1) + 'em">' + segment + '</tspan>';
            });
            el.innerHTML = arr;
          } else {
            el.innerHTML = text;
          }
        },
        _afterSetAttrOutline: function _afterSetAttrOutline(val) {
          var el = this.get('el');
          if (!val) {
            el.setAttribute('paint-order', 'normal');
          }
          var stroke = val.stroke || '#000';
          var fill = val.fill || this.__attrs.stroke;
          var lineWidth = val.lineWidth || this.__attrs.lineWidth * 2;
          el.setAttribute('paint-order', 'stroke');
          el.setAttribute('style', 'stroke-linecap:butt; stroke-linejoin:miter;');
          el.setAttribute('stroke', stroke);
          el.setAttribute('fill', fill);
          el.setAttribute('stroke-width', lineWidth);
        },

        // 计算浪费，效率低，待优化
        _afterSetAttrAll: function _afterSetAttrAll(objs) {
          var self = this;
          if ('fontSize' in objs || 'fontWeight' in objs || 'fontStyle' in objs || 'fontVariant' in objs || 'fontFamily' in objs) {
            self._assembleFont();
          }
          if ('textAlign' in objs) {
            this._afterSetAttrTextAlign();
          }
          if ('textBaseline' in objs) {
            this._afterSetAttrTextBaseLine();
          }
          if ('text' in objs) {
            self._afterSetAttrText(objs.text);
          }
          if ('outline' in objs) {
            self._afterSetAttrOutline(objs.outline);
          }
        }
      });

      module.exports = CText;

      /***/
    },
    /* 46 */
    /***/function (module, exports, __webpack_require__) {

      var Util = __webpack_require__(0);
      var Shape = __webpack_require__(4);

      var Line = function Line(cfg) {
        Line.superclass.constructor.call(this, cfg);
      };

      Line.ATTRS = {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0,
        lineWidth: 1,
        startArrow: false,
        endArrow: false
      };

      Util.extend(Line, Shape);

      Util.augment(Line, {
        canStroke: true,
        type: 'line',
        getDefaultAttrs: function getDefaultAttrs() {
          return {
            lineWidth: 1,
            stroke: '#000',
            startArrow: false,
            endArrow: false
          };
        },
        _afterSetAttrStroke: function _afterSetAttrStroke(value) {
          var start = this.get('marker-start');
          var end = this.get('marker-end');
          if (start) {
            this.get('defs').findById(start).update(value);
          }
          if (end) {
            this.get('defs').findById(end).update(value);
          }
        },
        _afterSetAttrAll: function _afterSetAttrAll(objs) {
          if (objs.stroke) {
            this._afterSetAttrStroke(objs.stroke);
          }
        },
        createPath: function createPath() {},
        getPoint: function getPoint(t) {
          var attrs = this.__attrs;
          return {
            x: (attrs.x2 - attrs.x1) * t + attrs.x1,
            y: (attrs.y2 - attrs.y1) * t + attrs.y1
          };
        }
      });

      module.exports = Line;

      /***/
    },
    /* 47 */
    /***/function (module, exports, __webpack_require__) {

      var Util = __webpack_require__(0);
      var Shape = __webpack_require__(4);

      var CImage = function CImage(cfg) {
        CImage.superclass.constructor.call(this, cfg);
      };

      CImage.ATTRS = {
        x: 0,
        y: 0,
        img: undefined,
        width: 0,
        height: 0,
        sx: null,
        sy: null,
        swidth: null,
        sheight: null
      };

      Util.extend(CImage, Shape);

      Util.augment(CImage, {
        type: 'image',
        _afterSetAttrImg: function _afterSetAttrImg(img) {
          this._setAttrImg(img);
        },
        _afterSetAttrAll: function _afterSetAttrAll(params) {
          if (params.img) {
            this._setAttrImg(params.img);
          }
        },
        _setAttrImg: function _setAttrImg(image) {
          var self = this;
          var el = this.get('el');
          var attrs = self.__attrs;
          var img = image;

          if (Util.isString(img)) {
            // 如果传入的
            el.setAttribute('href', img);
          } else if (img instanceof Image) {
            if (!attrs.width) {
              self.attr('width', img.width);
            }
            if (!attrs.height) {
              self.attr('height', img.height);
            }
            el.setAttribute('href', img.src);
          } else if (img instanceof HTMLElement && Util.isString(img.nodeName) && img.nodeName.toUpperCase() === 'CANVAS') {
            el.setAttribute('href', img.toDataURL());
          } else if (img instanceof ImageData) {
            var canvas = document.createElement('canvas');
            canvas.setAttribute('width', img.width);
            canvas.setAttribute('height', img.height);
            canvas.getContext('2d').putImageData(img, 0, 0);
            if (!attrs.width) {
              self.attr('width', img.width);
            }

            if (!attrs.height) {
              self.attr('height', img.height);
            }
            el.setAttribute('href', canvas.toDataURL());
          }
        },
        drawInner: function drawInner() {}
      });

      module.exports = CImage;

      /***/
    },
    /* 48 */
    /***/function (module, exports, __webpack_require__) {

      var Util = __webpack_require__(0);
      var Shape = __webpack_require__(4);

      var Polygon = function Polygon(cfg) {
        Polygon.superclass.constructor.call(this, cfg);
      };

      Polygon.ATTRS = {
        points: null,
        lineWidth: 1
      };

      Util.extend(Polygon, Shape);

      Util.augment(Polygon, {
        canFill: true,
        canStroke: true,
        type: 'polygon',
        getDefaultAttrs: function getDefaultAttrs() {
          return {
            lineWidth: 1,
            fill: 'none'
          };
        },
        _afterSetAttrPoints: function _afterSetAttrPoints() {
          var value = this.__attrs.points;
          var el = this.get('el');
          var points = value;
          if (!value || value.length === 0) {
            points = '';
          } else if (Util.isArray(value)) {
            points = points.map(function (point) {
              return point[0] + ',' + point[1];
            });
            points = points.join(' ');
          }
          el.setAttribute('points', points);
        },
        _afterSetAttrAll: function _afterSetAttrAll(obj) {
          if ('points' in obj) {
            this._afterSetAttrPoints();
          }
        },
        createPath: function createPath() {}
      });

      module.exports = Polygon;

      /***/
    },
    /* 49 */
    /***/function (module, exports, __webpack_require__) {

      var Util = __webpack_require__(0);
      var Shape = __webpack_require__(4);

      var Marker = function Marker(cfg) {
        Marker.superclass.constructor.call(this, cfg);
      };

      Marker.Symbols = {
        // 圆
        circle: function circle(x, y, r) {
          return 'M' + x + ',' + y + '\n            m' + -r + ',0\n            a ' + r + ',' + r + ',0,1,0,' + r * 2 + ',0\n            a ' + r + ',' + r + ',0,1,0,' + -r * 2 + ',0';
        },

        // 正方形
        square: function square(x, y, r) {
          return 'M' + (x - r) + ',' + (y - r) + '\n            H' + (x + r) + 'V' + (y + r) + '\n            H' + (x - r) + 'Z';
        },

        // 菱形
        diamond: function diamond(x, y, r) {
          return 'M' + (x - r) + ',' + y + '\n             L' + x + ',' + (y - r) + '\n             L' + (x + r) + ',' + y + ',\n             L' + x + ',' + (y + r) + 'Z';
        },

        // 三角形
        triangle: function triangle(x, y, r) {
          var diff = r * Math.sin(1 / 3 * Math.PI);
          return 'M' + (x - r) + ',' + (y + diff) + '\n            L' + x + ',' + (y - diff) + '\n            L' + (x + r) + ',' + (y + diff) + 'Z';
        },

        // 倒三角形
        'triangle-down': function triangleDown(x, y, r) {
          var diff = r * Math.sin(1 / 3 * Math.PI);
          return 'M' + (x - r) + ',' + (y - diff) + '\n            L' + (x + r) + ',' + (y - diff) + '\n            L' + x + ',' + (y + diff) + 'Z';
        }
      };

      Marker.ATTRS = {
        path: null,
        lineWidth: 1
      };

      Util.extend(Marker, Shape);

      Util.augment(Marker, {
        type: 'marker',
        canFill: true,
        canStroke: true,
        init: function init(id) {
          Marker.superclass.init.call(this);
          var marker = document.createElementNS('http://www.w3.org/2000/svg', 'path');
          id = id || Util.uniqueId(this.type + '_');
          marker.setAttribute('id', id);
          this.setSilent('el', marker);
        },
        getDefaultAttrs: function getDefaultAttrs() {
          return {
            x: 0,
            y: 0,
            lineWidth: 1,
            fill: 'none'
          };
        },
        _afterSetX: function _afterSetX() {
          this._assembleShape();
        },
        _afterSetY: function _afterSetY() {
          this._assembleShape();
        },
        _afterSetRadius: function _afterSetRadius() {
          this._assembleShape();
        },
        _afterSetR: function _afterSetR() {
          this._assembleShape();
        },
        _afterSetAttrAll: function _afterSetAttrAll(objs) {
          if ('x' in objs || 'y' in objs || 'radius' in objs) {
            this._assembleShape();
          }
        },
        _assembleShape: function _assembleShape() {
          var attrs = this.__attrs;
          var r = attrs.r;
          if (typeof attrs.r === 'undefined') {
            r = attrs.radius;
          }
          if (isNaN(Number(attrs.x)) || isNaN(Number(attrs.y)) || isNaN(Number(r))) {
            return;
          }
          var d = '';
          if (typeof attrs.symbol === 'function') {
            d = attrs.symbol(attrs.x, attrs.y, r);
          } else {
            d = Marker.Symbols[attrs.symbol || 'circle'](attrs.x, attrs.y, r);
          }
          if (Util.isArray(d)) {
            d = d.map(function (path) {
              return path.join(' ');
            }).join('');
          }
          this.get('el').setAttribute('d', d);
        }
      });

      module.exports = Marker;

      /***/
    },
    /* 50 */
    /***/function (module, exports, __webpack_require__) {

      var Util = __webpack_require__(0);
      var Shape = __webpack_require__(4);

      var Dom = function Dom(cfg) {
        Dom.superclass.constructor.call(this, cfg);
      };

      Util.extend(Dom, Shape);

      Util.augment(Dom, {
        canFill: true,
        canStroke: true,
        type: 'dom',
        _afterSetAttrHtml: function _afterSetAttrHtml() {
          var html = this.__attrs.html;
          var el = this.get('el');
          if (typeof html === 'string') {
            el.innerHTML = html;
          } else {
            el.innerHTML = '';
            el.appendChild(html);
          }
        },
        _afterSetAttrAll: function _afterSetAttrAll(objs) {
          if ('html' in objs) {
            this._afterSetAttrHtml();
          }
        }
      });

      module.exports = Dom;

      /***/
    },
    /* 51 */
    /***/function (module, exports, __webpack_require__) {

      var Util = __webpack_require__(0);
      var Shape = __webpack_require__(4);

      var Fan = function Fan(cfg) {
        Fan.superclass.constructor.call(this, cfg);
      };

      function getPoint(angle, radius, center) {
        return {
          x: radius * Math.cos(angle) + center.x,
          y: radius * Math.sin(angle) + center.y
        };
      }

      Fan.ATTRS = {
        x: 0,
        y: 0,
        rs: 0,
        re: 0,
        startAngle: 0,
        endAngle: 0,
        clockwise: false,
        lineWidth: 1
      };

      Util.extend(Fan, Shape);

      Util.augment(Fan, {
        canFill: true,
        canStroke: true,
        type: 'fan',
        getDefaultAttrs: function getDefaultAttrs() {
          return {
            clockwise: false,
            lineWidth: 1,
            rs: 0,
            re: 0,
            fill: 'none'
          };
        },
        _afterSetAttrX: function _afterSetAttrX() {
          this._calculatePath();
        },
        _afterSetAttrY: function _afterSetAttrY() {
          this._calculatePath();
        },
        _afterSetAttrRs: function _afterSetAttrRs() {
          this._calculatePath();
        },
        _afterSetAttrRe: function _afterSetAttrRe() {
          this._calculatePath();
        },
        _afterSetAttrStartAngle: function _afterSetAttrStartAngle() {
          this._calculatePath();
        },
        _afterSetAttrEndAngle: function _afterSetAttrEndAngle() {
          this._calculatePath();
        },
        _afterSetAttrClockwise: function _afterSetAttrClockwise() {
          this._calculatePath();
        },
        _afterSetAttrAll: function _afterSetAttrAll(obj) {
          if ('x' in obj || 'y' in obj || 'rs' in obj || 're' in obj || 'startAngle' in obj || 'endAngle' in obj || 'clockwise' in obj) {
            this._calculatePath();
          }
        },
        _calculatePath: function _calculatePath() {
          var self = this;
          var attrs = self.__attrs;
          var center = {
            x: attrs.x,
            y: attrs.y
          };
          var d = [];
          var startAngle = attrs.startAngle;
          var endAngle = attrs.endAngle;
          if (Util.isNumberEqual(endAngle - startAngle, Math.PI * 2)) {
            endAngle -= 0.00001;
          }
          var outerStart = getPoint(startAngle, attrs.re, center);
          var outerEnd = getPoint(endAngle, attrs.re, center);
          var fa = endAngle > startAngle ? 1 : 0;
          var fs = Math.abs(endAngle - startAngle) > Math.PI ? 1 : 0;
          var rs = attrs.rs;
          var re = attrs.re;
          var innerStart = getPoint(startAngle, attrs.rs, center);
          var innerEnd = getPoint(endAngle, attrs.rs, center);
          if (attrs.rs > 0) {
            d.push('M ' + outerEnd.x + ',' + outerEnd.y);
            d.push('L ' + innerEnd.x + ',' + innerEnd.y);
            /* if (endAngle - startAngle >= Math.PI) {
              const endPoint = getSymmetricalPoint(innerStart, center);
              d.push(`A ${rs},${rs},0,0,${fa},${endPoint.x},${endPoint.y}`);
              d.push(`M ${endPoint.x},${endPoint.y}`);
            }*/
            d.push('A ' + rs + ',' + rs + ',0,' + fs + ',' + (fa === 1 ? 0 : 1) + ',' + innerStart.x + ',' + innerStart.y);
            d.push('L ' + outerStart.x + ' ' + outerStart.y);
          } else {
            d.push('M ' + center.x + ',' + center.y);
            d.push('L ' + outerStart.x + ',' + outerStart.y);
          }
          /* if (endAngle - startAngle >= Math.PI) {
            const endPoint = getSymmetricalPoint(outerStart, center);
            d.push(`A ${re},${re},0,0,${fa},${endPoint.x},${endPoint.y}`);
          }*/
          d.push('A ' + re + ',' + re + ',0,' + fs + ',' + fa + ',' + outerEnd.x + ',' + outerEnd.y);
          if (attrs.rs > 0) {
            d.push('L ' + innerEnd.x + ',' + innerEnd.y);
          } else {
            d.push('Z');
          }
          self.get('el').setAttribute('d', d.join(' '));
        }
      });

      module.exports = Fan;

      /***/
    },
    /* 52 */
    /***/function (module, exports, __webpack_require__) {

      var Util = __webpack_require__(0);
      var PathUtil = __webpack_require__(19);
      var d3Timer = __webpack_require__(119);
      var d3Ease = __webpack_require__(122);

      var _require = __webpack_require__(133),
          interpolate = _require.interpolate,
          interpolateArray = _require.interpolateArray; // 目前整体动画只需要数值和数组的差值计算

      var Timeline = function Timeline() {
        // 待执行动画的队列
        this._animators = [];
        // 当前时间
        this._current = 0;
        // 计时器实例
        this._timer = null;
      };

      function _update(self, animator, ratio) {
        var cProps = {}; // 此刻属性
        var toAttrs = animator.toAttrs;
        var fromAttrs = animator.fromAttrs;
        var toMatrix = animator.toMatrix;
        if (self.get('destroyed')) {
          return;
        }
        var interf = void 0; //  差值函数
        for (var k in toAttrs) {
          if (!Util.isEqual(fromAttrs[k], toAttrs[k])) {
            if (k === 'path') {
              var toPath = PathUtil.parsePathString(toAttrs[k]); // 终点状态
              var fromPath = PathUtil.parsePathString(fromAttrs[k]); // 起始状态
              cProps[k] = [];
              for (var i = 0; i < toPath.length; i++) {
                var toPathPoint = toPath[i];
                var fromPathPoint = fromPath[i];
                var cPathPoint = [];
                for (var j = 0; j < toPathPoint.length; j++) {
                  if (Util.isNumber(toPathPoint[j]) && fromPathPoint) {
                    interf = interpolate(fromPathPoint[j], toPathPoint[j]);
                    cPathPoint.push(interf(ratio));
                  } else {
                    cPathPoint.push(toPathPoint[j]);
                  }
                }
                cProps[k].push(cPathPoint);
              }
            } else {
              interf = interpolate(fromAttrs[k], toAttrs[k]);
              cProps[k] = interf(ratio);
            }
          }
        }
        if (toMatrix) {
          var mf = interpolateArray(animator.fromMatrix, toMatrix);
          var cM = mf(ratio);
          self.setMatrix(cM);
        }
        self.attr(cProps);
      }

      function update(shape, animator, elapsed) {
        var startTime = animator.startTime;
        // 如果还没有开始执行或暂停，先不更新
        if (elapsed < startTime + animator.delay || animator.isPaused) {
          return false;
        }
        var ratio = void 0;
        var isFinished = false;
        var duration = animator.duration;
        var easing = animator.easing;
        // 已执行时间
        elapsed = elapsed - startTime - animator.delay;
        if (animator.toAttrs.repeat) {
          ratio = elapsed % duration / duration;
          ratio = d3Ease[easing](ratio);
        } else {
          ratio = elapsed / duration;
          if (ratio < 1) {
            ratio = d3Ease[easing](ratio);
          } else {
            ratio = 1;
            if (animator.callback) {
              animator.callback();
            }
            isFinished = true;
          }
        }
        _update(shape, animator, ratio);
        return isFinished;
      }

      Util.augment(Timeline, {
        initTimer: function initTimer() {
          var _this = this;

          var self = this;
          var isFinished = false;
          var shape = void 0,
              animators = void 0,
              animator = void 0,
              canvas = void 0;
          self._timer = d3Timer.timer(function (elapsed) {
            self._current = elapsed;
            if (_this._animators.length > 0) {
              for (var i = _this._animators.length - 1; i >= 0; i--) {
                shape = _this._animators[i];
                if (shape.get('destroyed')) {
                  // 如果已经被销毁，直接移出队列
                  self.removeAnimator(i);
                  continue;
                }
                if (!canvas) {
                  canvas = shape.get('canvas');
                }
                if (!shape.get('pause').isPaused) {
                  animators = shape.get('animators');
                  for (var j = animators.length - 1; j >= 0; j--) {
                    animator = animators[j];
                    isFinished = update(shape, animator, elapsed);
                    if (isFinished) {
                      animators.splice(j, 1);
                      isFinished = false;
                    }
                  }
                }
                if (animators.length === 0) {
                  self.removeAnimator(i);
                }
              }
              if (canvas) {
                canvas.draw();
              }
            }
          });
        },
        addAnimator: function addAnimator(shape) {
          this._animators.push(shape);
        },
        removeAnimator: function removeAnimator(index) {
          this._animators.splice(index, 1);
        },
        clear: function clear() {
          this._animators = [];
        },
        isAnimating: function isAnimating() {
          return !!this._animators.length;
        },
        getTime: function getTime() {
          return this._current;
        }
      });

      module.exports = Timeline;

      /***/
    },
    /* 53 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "a", function () {
        return deg2rad;
      });
      /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "b", function () {
        return rad2deg;
      });
      var deg2rad = Math.PI / 180;
      var rad2deg = 180 / Math.PI;

      /***/
    },
    /* 54 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "b", function () {
        return rgbBasis;
      });
      /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "c", function () {
        return rgbBasisClosed;
      });
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(6);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__basis__ = __webpack_require__(24);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__basisClosed__ = __webpack_require__(55);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__color__ = __webpack_require__(12);

      /* harmony default export */__webpack_exports__["a"] = function rgbGamma(y) {
        var color = Object(__WEBPACK_IMPORTED_MODULE_3__color__["b" /* gamma */])(y);

        function rgb(start, end) {
          var r = color((start = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["f" /* rgb */])(start)).r, (end = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["f" /* rgb */])(end)).r),
              g = color(start.g, end.g),
              b = color(start.b, end.b),
              opacity = Object(__WEBPACK_IMPORTED_MODULE_3__color__["a" /* default */])(start.opacity, end.opacity);
          return function (t) {
            start.r = r(t);
            start.g = g(t);
            start.b = b(t);
            start.opacity = opacity(t);
            return start + "";
          };
        }

        rgb.gamma = rgbGamma;

        return rgb;
      }(1);

      function rgbSpline(spline) {
        return function (colors) {
          var n = colors.length,
              r = new Array(n),
              g = new Array(n),
              b = new Array(n),
              i,
              color;
          for (i = 0; i < n; ++i) {
            color = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["f" /* rgb */])(colors[i]);
            r[i] = color.r || 0;
            g[i] = color.g || 0;
            b[i] = color.b || 0;
          }
          r = spline(r);
          g = spline(g);
          b = spline(b);
          color.opacity = 1;
          return function (t) {
            color.r = r(t);
            color.g = g(t);
            color.b = b(t);
            return color + "";
          };
        };
      }

      var rgbBasis = rgbSpline(__WEBPACK_IMPORTED_MODULE_1__basis__["b" /* default */]);
      var rgbBasisClosed = rgbSpline(__WEBPACK_IMPORTED_MODULE_2__basisClosed__["a" /* default */]);

      /***/
    },
    /* 55 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__basis__ = __webpack_require__(24);

      /* harmony default export */__webpack_exports__["a"] = function (values) {
        var n = values.length;
        return function (t) {
          var i = Math.floor(((t %= 1) < 0 ? ++t : t) * n),
              v0 = values[(i + n - 1) % n],
              v1 = values[i % n],
              v2 = values[(i + 1) % n],
              v3 = values[(i + 2) % n];
          return Object(__WEBPACK_IMPORTED_MODULE_0__basis__["a" /* basis */])((t - i / n) * n, v0, v1, v2, v3);
        };
      };

      /***/
    },
    /* 56 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony default export */
      __webpack_exports__["a"] = function (x) {
        return function () {
          return x;
        };
      };

      /***/
    },
    /* 57 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__value__ = __webpack_require__(21);

      /* harmony default export */__webpack_exports__["a"] = function (a, b) {
        var nb = b ? b.length : 0,
            na = a ? Math.min(nb, a.length) : 0,
            x = new Array(na),
            c = new Array(nb),
            i;

        for (i = 0; i < na; ++i) {
          x[i] = Object(__WEBPACK_IMPORTED_MODULE_0__value__["a" /* default */])(a[i], b[i]);
        }for (; i < nb; ++i) {
          c[i] = b[i];
        }return function (t) {
          for (i = 0; i < na; ++i) {
            c[i] = x[i](t);
          }return c;
        };
      };

      /***/
    },
    /* 58 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony default export */
      __webpack_exports__["a"] = function (a, b) {
        var d = new Date();
        return a = +a, b -= a, function (t) {
          return d.setTime(a + b * t), d;
        };
      };

      /***/
    },
    /* 59 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__value__ = __webpack_require__(21);
      var _typeof = typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
      };

      /* harmony default export */__webpack_exports__["a"] = function (a, b) {
        var i = {},
            c = {},
            k;

        if (a === null || (typeof a === "undefined" ? "undefined" : _typeof(a)) !== "object") a = {};
        if (b === null || (typeof b === "undefined" ? "undefined" : _typeof(b)) !== "object") b = {};

        for (k in b) {
          if (k in a) {
            i[k] = Object(__WEBPACK_IMPORTED_MODULE_0__value__["a" /* default */])(a[k], b[k]);
          } else {
            c[k] = b[k];
          }
        }

        return function (t) {
          for (k in i) {
            c[k] = i[k](t);
          }return c;
        };
      };

      /***/
    },
    /* 60 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(14);

      var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
          reB = new RegExp(reA.source, "g");

      function zero(b) {
        return function () {
          return b;
        };
      }

      function one(b) {
        return function (t) {
          return b(t) + "";
        };
      }

      /* harmony default export */__webpack_exports__["a"] = function (a, b) {
        var bi = reA.lastIndex = reB.lastIndex = 0,

        // scan index for next number in b
        am,

        // current match in a
        bm,

        // current match in b
        bs,

        // string preceding current number in b, if any
        i = -1,

        // index in s
        s = [],

        // string constants and placeholders
        q = []; // number interpolators

        // Coerce inputs to strings.
        a = a + "", b = b + "";

        // Interpolate pairs of numbers in a & b.
        while ((am = reA.exec(a)) && (bm = reB.exec(b))) {
          if ((bs = bm.index) > bi) {
            // a string precedes the next number in b
            bs = b.slice(bi, bs);
            if (s[i]) s[i] += bs; // coalesce with previous string
            else s[++i] = bs;
          }
          if ((am = am[0]) === (bm = bm[0])) {
            // numbers in a & b match
            if (s[i]) s[i] += bm; // coalesce with previous string
            else s[++i] = bm;
          } else {
            // interpolate non-matching numbers
            s[++i] = null;
            q.push({ i: i, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(am, bm) });
          }
          bi = reB.lastIndex;
        }

        // Add remains of b.
        if (bi < b.length) {
          bs = b.slice(bi);
          if (s[i]) s[i] += bs; // coalesce with previous string
          else s[++i] = bs;
        }

        // Special optimization for only a single match.
        // Otherwise, interpolate each of the numbers and rejoin the string.
        return s.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function (t) {
          for (var i = 0, o; i < b; ++i) {
            s[(o = q[i]).i] = o.x(t);
          }return s.join("");
        });
      };

      /***/
    },
    /* 61 */
    /***/function (module, exports, __webpack_require__) {

      var Util = __webpack_require__(0);

      var Event = function Event(type, event, bubbles, cancelable) {
        this.type = type; // 事件类型
        this.target = null; // 目标
        this.currentTarget = null; // 当前目标
        this.bubbles = bubbles; // 冒泡
        this.cancelable = cancelable; // 是否能够阻止
        this.timeStamp = new Date().getTime(); // 时间戳
        this.defaultPrevented = false; // 阻止默认
        this.propagationStopped = false; // 阻止冒泡
        this.removed = false; // 是否被移除
        this.event = event; // 触发的原生事件
      };

      Util.augment(Event, {
        preventDefault: function preventDefault() {
          this.defaultPrevented = this.cancelable && true;
        },
        stopPropagation: function stopPropagation() {
          this.propagationStopped = true;
        },
        remove: function remove() {
          this.remove = true;
        },
        clone: function clone() {
          return Util.clone(this);
        },
        toString: function toString() {
          return '[Event (type=' + this.type + ')]';
        }
      });

      module.exports = Event;

      /***/
    },
    /* 62 */
    /***/function (module, exports, __webpack_require__) {

      var Util = __webpack_require__(0);
      var Element = __webpack_require__(63);
      var Shape = __webpack_require__(150);
      var SHAPE_MAP = {}; // 缓存图形类型
      var INDEX = '_INDEX';

      function find(children, x, y) {
        var rst = void 0;
        for (var i = children.length - 1; i >= 0; i--) {
          var child = children[i];
          if (child.__cfg.visible && child.__cfg.capture) {
            if (child.isGroup) {
              rst = child.getShape(x, y);
            } else if (child.isHit(x, y)) {
              rst = child;
            }
          }
          if (rst) {
            break;
          }
        }
        return rst;
      }

      function getComparer(compare) {
        return function (left, right) {
          var result = compare(left, right);
          return result === 0 ? left[INDEX] - right[INDEX] : result;
        };
      }

      var Group = function Group(cfg) {
        Group.superclass.constructor.call(this, cfg);
        this.set('children', []);

        this._beforeRenderUI();
        this._renderUI();
        this._bindUI();
      };

      function initClassCfgs(c) {
        if (c.__cfg || c === Group) {
          return;
        }
        var superCon = c.superclass.constructor;
        if (superCon && !superCon.__cfg) {
          initClassCfgs(superCon);
        }
        c.__cfg = {};

        Util.merge(c.__cfg, superCon.__cfg);
        Util.merge(c.__cfg, c.CFG);
      }

      Util.extend(Group, Element);

      Util.augment(Group, {
        isGroup: true,
        canFill: true,
        canStroke: true,
        getDefaultCfg: function getDefaultCfg() {
          initClassCfgs(this.constructor);
          return Util.merge({}, this.constructor.__cfg);
        },
        _beforeRenderUI: function _beforeRenderUI() {},
        _renderUI: function _renderUI() {},
        _bindUI: function _bindUI() {},
        addShape: function addShape(type, cfg) {
          var canvas = this.get('canvas');
          cfg = cfg || {};
          var shapeType = SHAPE_MAP[type];
          if (!shapeType) {
            shapeType = Util.upperFirst(type);
            SHAPE_MAP[type] = shapeType;
          }
          if (cfg.attrs) {
            var attrs = cfg.attrs;
            if (type === 'text') {
              // 临时解决
              var topFontFamily = canvas.get('fontFamily');
              if (topFontFamily) {
                attrs.fontFamily = attrs.fontFamily ? attrs.fontFamily : topFontFamily;
              }
            }
          }
          cfg.canvas = canvas;
          cfg.type = type;
          var rst = new Shape[shapeType](cfg);
          this.add(rst);
          return rst;
        },

        /** 添加图组
         * @param  {Function|Object|undefined} param 图组类
         * @param  {Object} cfg 配置项
         * @return {Object} rst 图组
         */
        addGroup: function addGroup(param, cfg) {
          var canvas = this.get('canvas');
          var rst = void 0;
          cfg = Util.merge({}, cfg);
          if (Util.isFunction(param)) {
            if (cfg) {
              cfg.canvas = canvas;
              cfg.parent = this;
              rst = new param(cfg);
            } else {
              rst = new param({
                canvas: canvas,
                parent: this
              });
            }
            this.add(rst);
          } else if (Util.isObject(param)) {
            param.canvas = canvas;
            rst = new Group(param);
            this.add(rst);
          } else if (param === undefined) {
            rst = new Group();
            this.add(rst);
          } else {
            return false;
          }
          return rst;
        },

        /** 绘制背景
         * @param  {Array} padding 内边距
         * @param  {Attrs} attrs 图形属性
         * @param  {Shape} backShape 背景图形
         * @return {Object} 背景层对象
         */
        renderBack: function renderBack(padding, attrs) {
          var backShape = this.get('backShape');
          var innerBox = this.getBBox();
          // const parent = this.get('parent'); // getParent
          Util.merge(attrs, {
            x: innerBox.minX - padding[3],
            y: innerBox.minY - padding[0],
            width: innerBox.width + padding[1] + padding[3],
            height: innerBox.height + padding[0] + padding[2]
          });
          if (backShape) {
            backShape.attr(attrs);
          } else {
            backShape = this.addShape('rect', {
              zIndex: -1,
              attrs: attrs
            });
          }
          this.set('backShape', backShape);
          this.sort();
          return backShape;
        },
        removeChild: function removeChild(item, destroy) {
          if (arguments.length >= 2) {
            if (this.contain(item)) {
              item.remove(destroy);
            }
          } else {
            if (arguments.length === 1) {
              if (Util.isBoolean(item)) {
                destroy = item;
              } else {
                if (this.contain(item)) {
                  item.remove(true);
                }
                return this;
              }
            }
            if (arguments.length === 0) {
              destroy = true;
            }

            Group.superclass.remove.call(this, destroy);
          }
          return this;
        },

        /**
         * 向组中添加shape或者group
         * @param {Object} items 图形或者分组
         * @return {Object} group 本尊
         */
        add: function add(items) {
          var self = this;
          var children = self.get('children');
          if (Util.isArray(items)) {
            Util.each(items, function (item) {
              var parent = item.get('parent');
              if (parent) {
                parent.removeChild(item, false);
              }
              self._setCfgProperty(item);
            });
            children.push.apply(children, items);
          } else {
            var item = items;
            var parent = item.get('parent');
            if (parent) {
              parent.removeChild(item, false);
            }
            self._setCfgProperty(item);
            children.push(item);
          }
          return self;
        },
        contain: function contain(item) {
          var children = this.get('children');
          return children.indexOf(item) > -1;
        },
        getChildByIndex: function getChildByIndex(index) {
          var children = this.get('children');
          return children[index];
        },
        getFirst: function getFirst() {
          return this.getChildByIndex(0);
        },
        getLast: function getLast() {
          var lastIndex = this.get('children').length - 1;
          return this.getChildByIndex(lastIndex);
        },
        _setCfgProperty: function _setCfgProperty(item) {
          var self = this;
          var cfg = self.__cfg;
          item.__cfg.parent = self;
          item.__cfg.context = cfg.context;
          item.__cfg.canvas = cfg.canvas;
          var clip = item.__attrs.clip;
          if (clip) {
            clip.setSilent('parent', self);
            clip.setSilent('canvas', cfg.canvas);
            clip.setSilent('timeline', cfg.timeline);
            clip.setSilent('context', self.get('context'));
          }
          var children = item.__cfg.children;
          if (children) {
            Util.each(children, function (child) {
              item._setCfgProperty(child);
            });
          }
        },
        getBBox: function getBBox() {
          var self = this;
          var minX = Infinity;
          var maxX = -Infinity;
          var minY = Infinity;
          var maxY = -Infinity;
          var children = self.get('children');
          if (children.length > 0) {
            Util.each(children, function (child) {
              if (child.get('visible')) {
                var _box = child.getBBox();
                if (!_box) {
                  return true;
                }

                var leftTop = [_box.minX, _box.minY, 1];
                var leftBottom = [_box.minX, _box.maxY, 1];
                var rightTop = [_box.maxX, _box.minY, 1];
                var rightBottom = [_box.maxX, _box.maxY, 1];

                child.apply(leftTop);
                child.apply(leftBottom);
                child.apply(rightTop);
                child.apply(rightBottom);

                var boxMinX = Math.min(leftTop[0], leftBottom[0], rightTop[0], rightBottom[0]);
                var boxMaxX = Math.max(leftTop[0], leftBottom[0], rightTop[0], rightBottom[0]);
                var boxMinY = Math.min(leftTop[1], leftBottom[1], rightTop[1], rightBottom[1]);
                var boxMaxY = Math.max(leftTop[1], leftBottom[1], rightTop[1], rightBottom[1]);

                if (boxMinX < minX) {
                  minX = boxMinX;
                }

                if (boxMaxX > maxX) {
                  maxX = boxMaxX;
                }

                if (boxMinY < minY) {
                  minY = boxMinY;
                }

                if (boxMaxY > maxY) {
                  maxY = boxMaxY;
                }
              }
            });
          } else {
            minX = 0;
            maxX = 0;
            minY = 0;
            maxY = 0;
          }

          var box = {
            minX: minX,
            minY: minY,
            maxX: maxX,
            maxY: maxY
          };
          box.x = box.minX;
          box.y = box.minY;
          box.width = box.maxX - box.minX;
          box.height = box.maxY - box.minY;
          return box;
        },
        drawInner: function drawInner(context) {
          var children = this.get('children');
          for (var i = 0; i < children.length; i++) {
            var child = children[i];
            child.draw(context);
          }
          return this;
        },
        getCount: function getCount() {
          return this.get('children').length;
        },
        sort: function sort() {
          var children = this.get('children');
          // 稳定排序
          Util.each(children, function (child, index) {
            child[INDEX] = index;
            return child;
          });

          children.sort(getComparer(function (obj1, obj2) {
            return obj1.get('zIndex') - obj2.get('zIndex');
          }));

          return this;
        },
        findById: function findById(id) {
          return this.find(function (item) {
            return item.get('id') === id;
          });
        },

        /**
         * 根据查找函数查找分组或者图形
         * @param  {Function} fn 匹配函数
         * @return {Canvas.Base} 分组或者图形
         */
        find: function find(fn) {
          if (Util.isString(fn)) {
            return this.findById(fn);
          }
          var children = this.get('children');
          var rst = null;

          Util.each(children, function (item) {
            if (fn(item)) {
              rst = item;
            } else if (item.find) {
              rst = item.find(fn);
            }
            if (rst) {
              return false;
            }
          });
          return rst;
        },

        /**
         * @param  {Function} fn filter mathod
         * @return {Array} all the matching shapes and groups
         */
        findAll: function findAll(fn) {
          var children = this.get('children');
          var rst = [];
          var childRst = [];
          Util.each(children, function (item) {
            if (fn(item)) {
              rst.push(item);
            }
            if (item.findAllBy) {
              childRst = item.findAllBy(fn);
              rst = rst.concat(childRst);
            }
          });
          return rst;
        },

        /**
         * @Deprecated
         * @param  {Function} fn filter method
         * @return {Object} found shape or group
         */
        findBy: function findBy(fn) {
          var children = this.get('children');
          var rst = null;

          Util.each(children, function (item) {
            if (fn(item)) {
              rst = item;
            } else if (item.findBy) {
              rst = item.findBy(fn);
            }
            if (rst) {
              return false;
            }
          });
          return rst;
        },

        /**
         * @Deprecated
         * @param  {Function} fn filter mathod
         * @return {Array} all the matching shapes and groups
         */
        findAllBy: function findAllBy(fn) {
          var children = this.get('children');
          var rst = [];
          var childRst = [];
          Util.each(children, function (item) {
            if (fn(item)) {
              rst.push(item);
            }
            if (item.findAllBy) {
              childRst = item.findAllBy(fn);
              rst = rst.concat(childRst);
            }
          });
          return rst;
        },

        /**
         * 根据x，y轴坐标获取对应的图形
         * @param  {Number} x x坐标
         * @param  {Number} y y坐标
         * @return {Object}  最上面的图形
         */
        getShape: function getShape(x, y) {
          var self = this;
          var clip = self.__attrs.clip;
          var children = self.__cfg.children;
          var rst = void 0;
          if (clip) {
            if (clip.inside(x, y)) {
              rst = find(children, x, y);
            }
          } else {
            rst = find(children, x, y);
          }
          return rst;
        },
        clearTotalMatrix: function clearTotalMatrix() {
          var m = this.get('totalMatrix');
          if (m) {
            this.setSilent('totalMatrix', null);
            var children = this.__cfg.children;
            for (var i = 0; i < children.length; i++) {
              var child = children[i];
              child.clearTotalMatrix();
            }
          }
        },
        clear: function clear() {
          var children = this.get('children');

          while (children.length !== 0) {
            children[children.length - 1].remove();
          }
          return this;
        },
        destroy: function destroy() {
          if (this.get('destroyed')) {
            return;
          }
          this.clear();
          Group.superclass.destroy.call(this);
        }
      });

      module.exports = Group;

      /***/
    },
    /* 63 */
    /***/function (module, exports, __webpack_require__) {

      var Util = __webpack_require__(0);
      var Attribute = __webpack_require__(148);
      var Transform = __webpack_require__(149);
      var Animate = __webpack_require__(39);
      var Format = __webpack_require__(25);
      var EventEmitter = __webpack_require__(40);

      var SHAPE_ATTRS = ['fillStyle', 'font', 'globalAlpha', 'lineCap', 'lineWidth', 'lineJoin', 'miterLimit', 'shadowBlur', 'shadowColor', 'shadowOffsetX', 'shadowOffsetY', 'strokeStyle', 'textAlign', 'textBaseline', 'lineDash', 'lineDashOffset'];

      var Element = function Element(cfg) {
        this.__cfg = {
          zIndex: 0,
          capture: true,
          visible: true,
          destroyed: false
        }; // 配置存放地

        Util.assign(this.__cfg, this.getDefaultCfg(), cfg); // Element.CFG不合并，提升性能 合并默认配置，用户配置->继承默认配置->Element默认配置
        this.initAttrs(this.__cfg.attrs); // 初始化绘图属性
        this.initTransform(); // 初始化变换
        this.init(); // 类型初始化
      };

      Element.CFG = {
        /**
         * 唯一标示
         * @type {Number}
         */
        id: null,
        /**
         * Z轴的层叠关系，Z值越大离用户越近
         * @type {Number}
         */
        zIndex: 0,
        /**
         * Canvas对象
         * @type: {Object}
         */
        canvas: null,
        /**
         * 父元素指针
         * @type {Object}
         */
        parent: null,
        /**
         * 用来设置当前对象是否能被捕捉
         * true 能
         * false 不能
         * 对象默认是都可以被捕捉的, 当capture为false时，group.getShape(x, y)方法无法获得该元素
         * 通过将不必要捕捉的元素的该属性设置成false, 来提高捕捉性能
         * @type {Boolean}
         **/
        capture: true,
        /**
         * 画布的上下文
         * @type {Object}
         */
        context: null,
        /**
         * 是否显示
         * @type {Boolean}
         */
        visible: true,
        /**
         * 是否被销毁
         * @type: {Boolean}
         */
        destroyed: false
      };

      Util.augment(Element, Attribute, Transform, EventEmitter, Animate, {
        init: function init() {
          this.setSilent('animable', true);
          this.setSilent('animating', false); // 初始时不处于动画状态
          var attrs = this.__attrs;
          if (attrs && attrs.rotate) {
            this.rotateAtStart(attrs.rotate);
          }
        },
        getParent: function getParent() {
          return this.get('parent');
        },

        /**
         * 获取默认的配置信息
         * @protected
         * @return {Object} 默认的属性
         */
        getDefaultCfg: function getDefaultCfg() {
          return {};
        },
        set: function set(name, value) {
          if (name === 'zIndex' && this._beforeSetZIndex) {
            this._beforeSetZIndex(value);
          }
          if (name === 'loading' && this._beforeSetLoading) {
            this._beforeSetLoading(value);
          }
          this.__cfg[name] = value;
          return this;
        },
        setSilent: function setSilent(name, value) {
          this.__cfg[name] = value;
        },
        get: function get(name) {
          return this.__cfg[name];
        },
        draw: function draw(context) {
          if (this.get('destroyed')) {
            return;
          }
          if (this.get('visible')) {
            this.setContext(context);
            this.drawInner(context);
            this.restoreContext(context);
          }
        },
        setContext: function setContext(context) {
          var clip = this.__attrs.clip;
          context.save();
          if (clip) {
            // context.save();
            clip.resetTransform(context);
            clip.createPath(context);
            context.clip();
            // context.restore();
          }
          this.resetContext(context);
          this.resetTransform(context);
        },
        restoreContext: function restoreContext(context) {
          context.restore();
        },
        resetContext: function resetContext(context) {
          var elAttrs = this.__attrs;
          // var canvas = this.get('canvas');
          if (!this.isGroup) {
            // canvas.registShape(this); // 快速拾取方案暂时不执行
            for (var k in elAttrs) {
              if (SHAPE_ATTRS.indexOf(k) > -1) {
                // 非canvas属性不附加
                var v = elAttrs[k];
                if (k === 'fillStyle') {
                  v = Format.parseStyle(v, this);
                }
                if (k === 'strokeStyle') {
                  v = Format.parseStyle(v, this);
                }
                if (k === 'lineDash' && context.setLineDash) {
                  if (Util.isArray(v)) {
                    context.setLineDash(v);
                  } else if (Util.isString(v)) {
                    context.setLineDash(v.split(' '));
                  }
                } else {
                  context[k] = v;
                }
              }
            }
          }
        },
        drawInner: function drawInner() /* context */{},
        show: function show() {
          this.set('visible', true);
          return this;
        },
        hide: function hide() {
          this.set('visible', false);
          return this;
        },
        remove: function remove(destroy) {
          if (destroy === undefined) {
            destroy = true;
          }

          if (this.get('parent')) {
            var parent = this.get('parent');
            var children = parent.get('children');
            Util.remove(children, this);
          }

          if (destroy) {
            this.destroy();
          }

          return this;
        },
        destroy: function destroy() {
          var destroyed = this.get('destroyed');
          if (destroyed) {
            return;
          }
          // 如果正在执行动画，清理动画
          if (this.get('animating')) {
            var timer = this.get('animateTimer');
            timer && timer.stop();
          }
          this.__cfg = {};
          this.__attrs = null;
          this.removeEvent(); // 移除所有的事件
          this.set('destroyed', true);
        },
        _beforeSetZIndex: function _beforeSetZIndex(zIndex) {
          this.__cfg.zIndex = zIndex;

          if (!Util.isNil(this.get('parent'))) {
            this.get('parent').sort();
          }
          return zIndex;
        },
        _setAttrs: function _setAttrs(attrs) {
          this.attr(attrs);
          return attrs;
        },
        setZIndex: function setZIndex(zIndex) {
          this.__cfg.zIndex = zIndex;
          return zIndex;
        },
        clone: function clone() {
          return Util.clone(this);
        },
        getBBox: function getBBox() {
          return {
            minX: 0,
            maxX: 0,
            minY: 0,
            maxY: 0
          };
        }
      });

      module.exports = Element;

      /***/
    },
    /* 64 */
    /***/function (module, exports, __webpack_require__) {

      var Util = __webpack_require__(0);
      var Shape = __webpack_require__(1);
      var Inside = __webpack_require__(3);

      var Rect = function Rect(cfg) {
        Rect.superclass.constructor.call(this, cfg);
      };

      Rect.ATTRS = {
        x: 0,
        y: 0,
        width: 0,
        height: 0,
        radius: 0,
        lineWidth: 1
      };

      Util.extend(Rect, Shape);

      Util.augment(Rect, {
        canFill: true,
        canStroke: true,
        type: 'rect',
        getDefaultAttrs: function getDefaultAttrs() {
          return {
            lineWidth: 1,
            radius: 0
          };
        },
        calculateBox: function calculateBox() {
          var self = this;
          var attrs = self.__attrs;
          var x = attrs.x;
          var y = attrs.y;
          var width = attrs.width;
          var height = attrs.height;
          var lineWidth = this.getHitLineWidth();

          var halfWidth = lineWidth / 2;
          return {
            minX: x - halfWidth,
            minY: y - halfWidth,
            maxX: x + width + halfWidth,
            maxY: y + height + halfWidth
          };
        },
        isPointInPath: function isPointInPath(x, y) {
          var self = this;
          var fill = self.hasFill();
          var stroke = self.hasStroke();

          if (fill && stroke) {
            return self._isPointInFill(x, y) || self._isPointInStroke(x, y);
          }

          if (fill) {
            return self._isPointInFill(x, y);
          }

          if (stroke) {
            return self._isPointInStroke(x, y);
          }

          return false;
        },
        _isPointInFill: function _isPointInFill(x, y) {
          var context = this.get('context');

          if (!context) return false;
          this.createPath();
          return context.isPointInPath(x, y);
        },
        _isPointInStroke: function _isPointInStroke(x, y) {
          var self = this;
          var attrs = self.__attrs;
          var rx = attrs.x;
          var ry = attrs.y;
          var width = attrs.width;
          var height = attrs.height;
          var radius = attrs.radius;
          var lineWidth = this.getHitLineWidth();

          if (radius === 0) {
            var halfWidth = lineWidth / 2;
            return Inside.line(rx - halfWidth, ry, rx + width + halfWidth, ry, lineWidth, x, y) || Inside.line(rx + width, ry - halfWidth, rx + width, ry + height + halfWidth, lineWidth, x, y) || Inside.line(rx + width + halfWidth, ry + height, rx - halfWidth, ry + height, lineWidth, x, y) || Inside.line(rx, ry + height + halfWidth, rx, ry - halfWidth, lineWidth, x, y);
          }

          return Inside.line(rx + radius, ry, rx + width - radius, ry, lineWidth, x, y) || Inside.line(rx + width, ry + radius, rx + width, ry + height - radius, lineWidth, x, y) || Inside.line(rx + width - radius, ry + height, rx + radius, ry + height, lineWidth, x, y) || Inside.line(rx, ry + height - radius, rx, ry + radius, lineWidth, x, y) || Inside.arcline(rx + width - radius, ry + radius, radius, 1.5 * Math.PI, 2 * Math.PI, false, lineWidth, x, y) || Inside.arcline(rx + width - radius, ry + height - radius, radius, 0, 0.5 * Math.PI, false, lineWidth, x, y) || Inside.arcline(rx + radius, ry + height - radius, radius, 0.5 * Math.PI, Math.PI, false, lineWidth, x, y) || Inside.arcline(rx + radius, ry + radius, radius, Math.PI, 1.5 * Math.PI, false, lineWidth, x, y);
        },
        createPath: function createPath(context) {
          var self = this;
          var attrs = self.__attrs;
          var x = attrs.x;
          var y = attrs.y;
          var width = attrs.width;
          var height = attrs.height;
          var radius = attrs.radius;
          context = context || self.get('context');

          context.beginPath();
          if (radius === 0) {
            // 改成原生的rect方法
            context.rect(x, y, width, height);
          } else {
            context.moveTo(x + radius, y);
            context.lineTo(x + width - radius, y);
            context.arc(x + width - radius, y + radius, radius, -Math.PI / 2, 0, false);
            context.lineTo(x + width, y + height - radius);
            context.arc(x + width - radius, y + height - radius, radius, 0, Math.PI / 2, false);
            context.lineTo(x + radius, y + height);
            context.arc(x + radius, y + height - radius, radius, Math.PI / 2, Math.PI, false);
            context.lineTo(x, y + radius);
            context.arc(x + radius, y + radius, radius, Math.PI, Math.PI * 3 / 2, false);
            context.closePath();
          }
        }
      });

      module.exports = Rect;

      /***/
    },
    /* 65 */
    /***/function (module, exports, __webpack_require__) {

      var Util = __webpack_require__(0);
      var Shape = __webpack_require__(1);
      var Inside = __webpack_require__(3);

      var Circle = function Circle(cfg) {
        Circle.superclass.constructor.call(this, cfg);
      };

      Circle.ATTRS = {
        x: 0,
        y: 0,
        r: 0,
        lineWidth: 1
      };

      Util.extend(Circle, Shape);

      Util.augment(Circle, {
        canFill: true,
        canStroke: true,
        type: 'circle',
        getDefaultAttrs: function getDefaultAttrs() {
          return {
            lineWidth: 1
          };
        },
        calculateBox: function calculateBox() {
          var attrs = this.__attrs;
          var cx = attrs.x;
          var cy = attrs.y;
          var r = attrs.r;
          var lineWidth = this.getHitLineWidth();
          var halfWidth = lineWidth / 2 + r;
          return {
            minX: cx - halfWidth,
            minY: cy - halfWidth,
            maxX: cx + halfWidth,
            maxY: cy + halfWidth
          };
        },
        isPointInPath: function isPointInPath(x, y) {
          var fill = this.hasFill();
          var stroke = this.hasStroke();
          if (fill && stroke) {
            return this._isPointInFill(x, y) || this._isPointInStroke(x, y);
          }

          if (fill) {
            return this._isPointInFill(x, y);
          }

          if (stroke) {
            return this._isPointInStroke(x, y);
          }

          return false;
        },
        _isPointInFill: function _isPointInFill(x, y) {
          var attrs = this.__attrs;
          var cx = attrs.x;
          var cy = attrs.y;
          var r = attrs.r;

          return Inside.circle(cx, cy, r, x, y);
        },
        _isPointInStroke: function _isPointInStroke(x, y) {
          var attrs = this.__attrs;
          var cx = attrs.x;
          var cy = attrs.y;
          var r = attrs.r;
          var lineWidth = this.getHitLineWidth();

          return Inside.arcline(cx, cy, r, 0, Math.PI * 2, false, lineWidth, x, y);
        },
        createPath: function createPath(context) {
          var attrs = this.__attrs;
          var cx = attrs.x;
          var cy = attrs.y;
          var r = attrs.r;
          context = context || self.get('context');

          context.beginPath();
          context.arc(cx, cy, r, 0, Math.PI * 2, false);
          context.closePath();
        }
      });

      module.exports = Circle;

      /***/
    },
    /* 66 */
    /***/function (module, exports, __webpack_require__) {

      var Util = __webpack_require__(0);
      var Shape = __webpack_require__(1);
      var Inside = __webpack_require__(3);
      var mat3 = __webpack_require__(2).mat3;
      var vec3 = __webpack_require__(2).vec3;

      var Ellipse = function Ellipse(cfg) {
        Ellipse.superclass.constructor.call(this, cfg);
      };

      Ellipse.ATTRS = {
        x: 0,
        y: 0,
        rx: 1,
        ry: 1,
        lineWidth: 1
      };

      Util.extend(Ellipse, Shape);

      Util.augment(Ellipse, {
        canFill: true,
        canStroke: true,
        type: 'ellipse',
        getDefaultAttrs: function getDefaultAttrs() {
          return {
            lineWidth: 1
          };
        },
        calculateBox: function calculateBox() {
          var attrs = this.__attrs;
          var cx = attrs.x;
          var cy = attrs.y;
          var rx = attrs.rx;
          var ry = attrs.ry;
          var lineWidth = this.getHitLineWidth();
          var halfXWidth = rx + lineWidth / 2;
          var halfYWidth = ry + lineWidth / 2;

          return {
            minX: cx - halfXWidth,
            minY: cy - halfYWidth,
            maxX: cx + halfXWidth,
            maxY: cy + halfYWidth
          };
        },
        isPointInPath: function isPointInPath(x, y) {
          var fill = this.hasFill();
          var stroke = this.hasStroke();

          if (fill && stroke) {
            return this._isPointInFill(x, y) || this._isPointInStroke(x, y);
          }

          if (fill) {
            return this._isPointInFill(x, y);
          }

          if (stroke) {
            return this._isPointInStroke(x, y);
          }

          return false;
        },
        _isPointInFill: function _isPointInFill(x, y) {
          var attrs = this.__attrs;
          var cx = attrs.x;
          var cy = attrs.y;
          var rx = attrs.rx;
          var ry = attrs.ry;

          var r = rx > ry ? rx : ry;
          var scaleX = rx > ry ? 1 : rx / ry;
          var scaleY = rx > ry ? ry / rx : 1;

          var p = [x, y, 1];
          var m = [1, 0, 0, 0, 1, 0, 0, 0, 1];
          mat3.scale(m, m, [scaleX, scaleY]);
          mat3.translate(m, m, [cx, cy]);
          var inm = mat3.invert([], m);
          vec3.transformMat3(p, p, inm);

          return Inside.circle(0, 0, r, p[0], p[1]);
        },
        _isPointInStroke: function _isPointInStroke(x, y) {
          var attrs = this.__attrs;
          var cx = attrs.x;
          var cy = attrs.y;
          var rx = attrs.rx;
          var ry = attrs.ry;
          var lineWidth = this.getHitLineWidth();

          var r = rx > ry ? rx : ry;
          var scaleX = rx > ry ? 1 : rx / ry;
          var scaleY = rx > ry ? ry / rx : 1;
          var p = [x, y, 1];
          var m = [1, 0, 0, 0, 1, 0, 0, 0, 1];
          mat3.scale(m, m, [scaleX, scaleY]);
          mat3.translate(m, m, [cx, cy]);
          var inm = mat3.invert([], m);
          vec3.transformMat3(p, p, inm);

          return Inside.arcline(0, 0, r, 0, Math.PI * 2, false, lineWidth, p[0], p[1]);
        },
        createPath: function createPath(context) {
          var attrs = this.__attrs;
          var cx = attrs.x;
          var cy = attrs.y;
          var rx = attrs.rx;
          var ry = attrs.ry;

          context = context || self.get('context');
          var r = rx > ry ? rx : ry;
          var scaleX = rx > ry ? 1 : rx / ry;
          var scaleY = rx > ry ? ry / rx : 1;

          var m = [1, 0, 0, 0, 1, 0, 0, 0, 1];
          mat3.scale(m, m, [scaleX, scaleY]);
          mat3.translate(m, m, [cx, cy]);
          context.beginPath();
          context.save();
          context.transform(m[0], m[1], m[3], m[4], m[6], m[7]);
          context.arc(0, 0, r, 0, Math.PI * 2);
          context.restore();
          context.closePath();
        }
      });

      module.exports = Ellipse;

      /***/
    },
    /* 67 */
    /***/function (module, exports, __webpack_require__) {

      var Util = __webpack_require__(0);
      var Shape = __webpack_require__(1);
      var PathSegment = __webpack_require__(29);
      var Format = __webpack_require__(25);
      var Arrow = __webpack_require__(7);
      var PathUtil = __webpack_require__(19);
      var CubicMath = __webpack_require__(15);

      var Path = function Path(cfg) {
        Path.superclass.constructor.call(this, cfg);
      };

      Path.ATTRS = {
        path: null,
        lineWidth: 1,
        curve: null, // 曲线path
        tCache: null,
        startArrow: false,
        endArrow: false
      };

      Util.extend(Path, Shape);

      Util.augment(Path, {
        canFill: true,
        canStroke: true,
        type: 'path',
        getDefaultAttrs: function getDefaultAttrs() {
          return {
            lineWidth: 1,
            startArrow: false,
            endArrow: false
          };
        },
        _afterSetAttrPath: function _afterSetAttrPath(path) {
          var self = this;
          if (Util.isNil(path)) {
            self.setSilent('segments', null);
            self.setSilent('box', undefined);
            return;
          }
          var pathArray = Format.parsePath(path);
          var preSegment = void 0;
          var segments = [];

          if (!Util.isArray(pathArray) || pathArray.length === 0 || pathArray[0][0] !== 'M' && pathArray[0][0] !== 'm') {
            return;
          }
          var count = pathArray.length;
          for (var i = 0; i < pathArray.length; i++) {
            var item = pathArray[i];
            preSegment = new PathSegment(item, preSegment, i === count - 1);
            segments.push(preSegment);
          }
          self.setSilent('segments', segments);
          self.set('tCache', null);
          this.setSilent('box', null);
        },
        _afterSetAttrAll: function _afterSetAttrAll(objs) {
          if (objs.path) {
            this._afterSetAttrPath(objs.path);
          }
        },
        calculateBox: function calculateBox() {
          var self = this;
          var segments = self.get('segments');

          if (!segments) {
            return null;
          }
          var lineWidth = this.getHitLineWidth();
          var minX = Infinity;
          var maxX = -Infinity;
          var minY = Infinity;
          var maxY = -Infinity;
          Util.each(segments, function (segment) {
            segment.getBBox(lineWidth);
            var box = segment.box;
            if (box) {
              if (box.minX < minX) {
                minX = box.minX;
              }

              if (box.maxX > maxX) {
                maxX = box.maxX;
              }

              if (box.minY < minY) {
                minY = box.minY;
              }

              if (box.maxY > maxY) {
                maxY = box.maxY;
              }
            }
          });
          return {
            minX: minX,
            minY: minY,
            maxX: maxX,
            maxY: maxY
          };
        },
        isPointInPath: function isPointInPath(x, y) {
          var self = this;
          var fill = self.hasFill();
          var stroke = self.hasStroke();

          if (fill && stroke) {
            return self._isPointInFill(x, y) || self._isPointInStroke(x, y);
          }

          if (fill) {
            return self._isPointInFill(x, y);
          }

          if (stroke) {
            return self._isPointInStroke(x, y);
          }

          return false;
        },
        _isPointInFill: function _isPointInFill(x, y) {
          var self = this;
          var context = self.get('context');
          if (!context) return undefined;
          self.createPath();
          return context.isPointInPath(x, y);
        },
        _isPointInStroke: function _isPointInStroke(x, y) {
          var self = this;
          var segments = self.get('segments');
          if (!Util.isEmpty(segments)) {
            var lineWidth = self.getHitLineWidth();
            for (var i = 0, l = segments.length; i < l; i++) {
              if (segments[i].isInside(x, y, lineWidth)) {
                return true;
              }
            }
          }

          return false;
        },
        _setTcache: function _setTcache() {
          var totalLength = 0;
          var tempLength = 0;
          var tCache = [];
          var segmentT = void 0;
          var segmentL = void 0;
          var segmentN = void 0;
          var l = void 0;
          var curve = this.curve;

          if (!curve) {
            return;
          }

          Util.each(curve, function (segment, i) {
            segmentN = curve[i + 1];
            l = segment.length;
            if (segmentN) {
              totalLength += CubicMath.len(segment[l - 2], segment[l - 1], segmentN[1], segmentN[2], segmentN[3], segmentN[4], segmentN[5], segmentN[6]);
            }
          });

          Util.each(curve, function (segment, i) {
            segmentN = curve[i + 1];
            l = segment.length;
            if (segmentN) {
              segmentT = [];
              segmentT[0] = tempLength / totalLength;
              segmentL = CubicMath.len(segment[l - 2], segment[l - 1], segmentN[1], segmentN[2], segmentN[3], segmentN[4], segmentN[5], segmentN[6]);
              tempLength += segmentL;
              segmentT[1] = tempLength / totalLength;
              tCache.push(segmentT);
            }
          });

          this.tCache = tCache;
        },
        _calculateCurve: function _calculateCurve() {
          var self = this;
          var attrs = self.__attrs;
          var path = attrs.path;
          this.curve = PathUtil.pathTocurve(path);
        },
        getStartTangent: function getStartTangent() {
          var segments = this.get('segments');
          var startPoint = void 0,
              endPoint = void 0,
              tangent = void 0,
              result = void 0;
          if (segments.length > 1) {
            startPoint = segments[0].endPoint;
            endPoint = segments[1].endPoint;
            tangent = segments[1].startTangent;
            result = [];
            if (Util.isFunction(tangent)) {
              var v = tangent();
              result.push([startPoint.x - v[0], startPoint.y - v[1]]);
              result.push([startPoint.x, startPoint.y]);
            } else {
              result.push([endPoint.x, endPoint.y]);
              result.push([startPoint.x, startPoint.y]);
            }
          }
          return result;
        },
        getEndTangent: function getEndTangent() {
          var segments = this.get('segments');
          var segmentsLen = segments.length;
          var startPoint = void 0,
              endPoint = void 0,
              tangent = void 0,
              result = void 0;
          if (segmentsLen > 1) {
            startPoint = segments[segmentsLen - 2].endPoint;
            endPoint = segments[segmentsLen - 1].endPoint;
            tangent = segments[segmentsLen - 1].endTangent;
            result = [];
            if (Util.isFunction(tangent)) {
              var v = tangent();
              result.push([endPoint.x - v[0], endPoint.y - v[1]]);
              result.push([endPoint.x, endPoint.y]);
            } else {
              result.push([startPoint.x, startPoint.y]);
              result.push([endPoint.x, endPoint.y]);
            }
          }
          return result;
        },
        getPoint: function getPoint(t) {
          var tCache = this.tCache;
          var subt = void 0;
          var index = void 0;

          if (!tCache) {
            this._calculateCurve();
            this._setTcache();
            tCache = this.tCache;
          }

          var curve = this.curve;

          if (!tCache) {
            if (curve) {
              return {
                x: curve[0][1],
                y: curve[0][2]
              };
            }
            return null;
          }
          Util.each(tCache, function (v, i) {
            if (t >= v[0] && t <= v[1]) {
              subt = (t - v[0]) / (v[1] - v[0]);
              index = i;
            }
          });
          var seg = curve[index];
          if (Util.isNil(seg) || Util.isNil(index)) {
            return null;
          }
          var l = seg.length;
          var nextSeg = curve[index + 1];
          return {
            x: CubicMath.at(seg[l - 2], nextSeg[1], nextSeg[3], nextSeg[5], 1 - subt),
            y: CubicMath.at(seg[l - 1], nextSeg[2], nextSeg[4], nextSeg[6], 1 - subt)
          };
        },
        createPath: function createPath(context) {
          var self = this;
          var segments = self.get('segments');
          if (!Util.isArray(segments)) return;

          context = context || self.get('context');

          context.beginPath();
          var segmentsLen = segments.length;

          for (var i = 0; i < segmentsLen; i++) {
            segments[i].draw(context);
          }
        },
        afterPath: function afterPath(context) {
          var self = this;
          var attrs = self.__attrs;
          var segments = self.get('segments');
          var path = attrs.path;
          context = context || self.get('context');
          if (!Util.isArray(segments)) return;
          if (!attrs.startArrow && !attrs.endArrow) {
            return;
          }
          if (path[path.length - 1] === 'z' || path[path.length - 1] === 'Z' || attrs.fill) {
            // 闭合路径不绘制箭头
            return;
          }
          var startPoints = self.getStartTangent();
          Arrow.addStartArrow(context, attrs, startPoints[0][0], startPoints[0][1], startPoints[1][0], startPoints[1][1]);

          var endPoints = self.getEndTangent();
          Arrow.addEndArrow(context, attrs, endPoints[0][0], endPoints[0][1], endPoints[1][0], endPoints[1][1]);
        }
      });

      module.exports = Path;

      /***/
    },
    /* 68 */
    /***/function (module, exports, __webpack_require__) {

      var Util = __webpack_require__(0);
      var Shape = __webpack_require__(1);
      var Inside = __webpack_require__(3);

      var CText = function CText(cfg) {
        CText.superclass.constructor.call(this, cfg);
      };

      CText.ATTRS = {
        x: 0,
        y: 0,
        text: null,
        fontSize: 12,
        fontFamily: 'sans-serif',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontVariant: 'normal',
        textAlign: 'start',
        textBaseline: 'bottom',
        lineHeight: null,
        textArr: null
      };

      Util.extend(CText, Shape);

      Util.augment(CText, {
        canFill: true,
        canStroke: true,
        type: 'text',
        getDefaultAttrs: function getDefaultAttrs() {
          return {
            lineWidth: 1,
            lineCount: 1,
            fontSize: 12,
            fontFamily: 'sans-serif',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontVariant: 'normal',
            textAlign: 'start',
            textBaseline: 'bottom'
          };
        },
        initTransform: function initTransform() {
          this.attr('matrix', [1, 0, 0, 0, 1, 0, 0, 0, 1]);
          var fontSize = this.__attrs.fontSize;
          if (fontSize && +fontSize < 12) {
            // 小于 12 像素的文本进行 scale 处理
            this.transform([['t', -1 * this.__attrs.x, -1 * this.__attrs.y], ['s', +fontSize / 12, +fontSize / 12], ['t', this.__attrs.x, this.__attrs.y]]);
          }
        },
        _assembleFont: function _assembleFont() {
          // var self = this;
          var attrs = this.__attrs;
          var fontSize = attrs.fontSize;
          var fontFamily = attrs.fontFamily;
          var fontWeight = attrs.fontWeight;
          var fontStyle = attrs.fontStyle; // self.attr('fontStyle');
          var fontVariant = attrs.fontVariant; // self.attr('fontVariant');
          // self.attr('font', [fontStyle, fontVariant, fontWeight, fontSize + 'px', fontFamily].join(' '));
          attrs.font = [fontStyle, fontVariant, fontWeight, fontSize + 'px', fontFamily].join(' ');
        },
        _afterSetAttrFontSize: function _afterSetAttrFontSize() {
          /* this.attr({
            height: this.__getTextHeight()
          }); */
          this._assembleFont();
        },
        _afterSetAttrFontFamily: function _afterSetAttrFontFamily() {
          this._assembleFont();
        },
        _afterSetAttrFontWeight: function _afterSetAttrFontWeight() {
          this._assembleFont();
        },
        _afterSetAttrFontStyle: function _afterSetAttrFontStyle() {
          this._assembleFont();
        },
        _afterSetAttrFontVariant: function _afterSetAttrFontVariant() {
          this._assembleFont();
        },
        _afterSetAttrFont: function _afterSetAttrFont() {
          // this.attr('width', this.measureText());
        },
        _afterSetAttrText: function _afterSetAttrText() {
          var attrs = this.__attrs;
          var text = attrs.text;
          var textArr = void 0;
          if (Util.isString(text) && text.indexOf('\n') !== -1) {
            textArr = text.split('\n');
            var lineCount = textArr.length;
            attrs.lineCount = lineCount;
            attrs.textArr = textArr;
          }
          // attrs.height = this.__getTextHeight();
          // attrs.width = this.measureText();
        },
        _getTextHeight: function _getTextHeight() {
          var attrs = this.__attrs;
          var lineCount = attrs.lineCount;
          var fontSize = attrs.fontSize * 1;
          if (lineCount > 1) {
            var spaceingY = this._getSpaceingY();
            return fontSize * lineCount + spaceingY * (lineCount - 1);
          }
          return fontSize;
        },

        // 计算浪费，效率低，待优化
        _afterSetAttrAll: function _afterSetAttrAll(objs) {
          var self = this;
          if ('fontSize' in objs || 'fontWeight' in objs || 'fontStyle' in objs || 'fontVariant' in objs || 'fontFamily' in objs) {
            self._assembleFont();
          }

          if ('text' in objs) {
            self._afterSetAttrText(objs.text);
          }
        },
        isHitBox: function isHitBox() {
          return false;
        },
        calculateBox: function calculateBox() {
          var self = this;
          var attrs = self.__attrs;
          var x = attrs.x;
          var y = attrs.y;
          var width = self.measureText(); // attrs.width
          if (!width) {
            // 如果width不存在，四点共其实点
            return {
              minX: x,
              minY: y,
              maxX: x,
              maxY: y
            };
          }
          var height = self._getTextHeight(); // attrs.height
          var textAlign = attrs.textAlign;
          var textBaseline = attrs.textBaseline;
          var lineWidth = self.getHitLineWidth();
          var point = {
            x: x,
            y: y - height
          };

          if (textAlign) {
            if (textAlign === 'end' || textAlign === 'right') {
              point.x -= width;
            } else if (textAlign === 'center') {
              point.x -= width / 2;
            }
          }

          if (textBaseline) {
            if (textBaseline === 'top') {
              point.y += height;
            } else if (textBaseline === 'middle') {
              point.y += height / 2;
            }
          }

          this.set('startPoint', point);
          var halfWidth = lineWidth / 2;
          return {
            minX: point.x - halfWidth,
            minY: point.y - halfWidth,
            maxX: point.x + width + halfWidth,
            maxY: point.y + height + halfWidth
          };
        },
        _getSpaceingY: function _getSpaceingY() {
          var attrs = this.__attrs;
          var lineHeight = attrs.lineHeight;
          var fontSize = attrs.fontSize * 1;
          return lineHeight ? lineHeight - fontSize : fontSize * 0.14;
        },
        isPointInPath: function isPointInPath(x, y) {
          var self = this;
          var box = self.getBBox();
          if (self.hasFill() || self.hasStroke()) {
            return Inside.box(box.minX, box.maxX, box.minY, box.maxY, x, y);
          }
        },
        drawInner: function drawInner(context) {
          var self = this;
          var attrs = self.__attrs;
          var text = attrs.text;
          if (!text) {
            return;
          }
          var textArr = attrs.textArr;
          var x = attrs.x;
          var y = attrs.y;

          context.beginPath();
          if (self.hasStroke()) {
            var strokeOpacity = attrs.strokeOpacity;
            if (!Util.isNil(strokeOpacity) && strokeOpacity !== 1) {
              context.globalAlpha = strokeOpacity;
            }
            if (textArr) {
              self._drawTextArr(context, false);
            } else {
              context.strokeText(text, x, y);
            }
            context.globalAlpha = 1;
          }
          if (self.hasFill()) {
            var fillOpacity = attrs.fillOpacity;
            if (!Util.isNil(fillOpacity) && fillOpacity !== 1) {
              context.globalAlpha = fillOpacity;
            }
            if (textArr) {
              self._drawTextArr(context, true);
            } else {
              context.fillText(text, x, y);
            }
          }
        },
        _drawTextArr: function _drawTextArr(context, fill) {
          var textArr = this.__attrs.textArr;
          var textBaseline = this.__attrs.textBaseline;
          var fontSize = this.__attrs.fontSize * 1;
          var spaceingY = this._getSpaceingY();
          var x = this.__attrs.x;
          var y = this.__attrs.y;
          var box = this.getBBox();
          var height = box.maxY - box.minY;
          var subY = void 0;

          Util.each(textArr, function (subText, index) {
            subY = y + index * (spaceingY + fontSize) - height + fontSize; // bottom;
            if (textBaseline === 'middle') subY += height - fontSize - (height - fontSize) / 2;
            if (textBaseline === 'top') subY += height - fontSize;
            if (fill) {
              context.fillText(subText, x, subY);
            } else {
              context.strokeText(subText, x, subY);
            }
          });
        },
        measureText: function measureText() {
          var self = this;
          var attrs = self.__attrs;
          var text = attrs.text;
          var font = attrs.font;
          var textArr = attrs.textArr;
          var measureWidth = void 0;
          var width = 0;

          if (Util.isNil(text)) return undefined;
          var context = document.createElement('canvas').getContext('2d');
          context.save();
          context.font = font;
          if (textArr) {
            Util.each(textArr, function (subText) {
              measureWidth = context.measureText(subText).width;
              if (width < measureWidth) {
                width = measureWidth;
              }
              context.restore();
            });
          } else {
            width = context.measureText(text).width;
            context.restore();
          }
          return width;
        }
      });

      module.exports = CText;

      /***/
    },
    /* 69 */
    /***/function (module, exports, __webpack_require__) {

      var Util = __webpack_require__(0);
      var Shape = __webpack_require__(1);
      var Inside = __webpack_require__(3);
      var Arrow = __webpack_require__(7);
      var LineMath = __webpack_require__(26);

      var Line = function Line(cfg) {
        Line.superclass.constructor.call(this, cfg);
      };

      Line.ATTRS = {
        x1: 0,
        y1: 0,
        x2: 0,
        y2: 0,
        lineWidth: 1,
        startArrow: false,
        endArrow: false
      };

      Util.extend(Line, Shape);

      Util.augment(Line, {
        canStroke: true,
        type: 'line',
        getDefaultAttrs: function getDefaultAttrs() {
          return {
            lineWidth: 1,
            startArrow: false,
            endArrow: false
          };
        },
        calculateBox: function calculateBox() {
          var attrs = this.__attrs;
          var x1 = attrs.x1,
              y1 = attrs.y1,
              x2 = attrs.x2,
              y2 = attrs.y2;

          var lineWidth = this.getHitLineWidth();
          return LineMath.box(x1, y1, x2, y2, lineWidth);
        },
        isPointInPath: function isPointInPath(x, y) {
          var attrs = this.__attrs;
          var x1 = attrs.x1,
              y1 = attrs.y1,
              x2 = attrs.x2,
              y2 = attrs.y2;

          var lineWidth = this.getHitLineWidth();

          if (this.hasStroke()) {
            return Inside.line(x1, y1, x2, y2, lineWidth, x, y);
          }

          return false;
        },
        createPath: function createPath(context) {
          var attrs = this.__attrs;
          var x1 = attrs.x1,
              y1 = attrs.y1,
              x2 = attrs.x2,
              y2 = attrs.y2;

          context = context || self.get('context');
          context.beginPath();
          context.moveTo(x1, y1);
          context.lineTo(x2, y2);
        },
        afterPath: function afterPath(context) {
          var attrs = this.__attrs;
          var x1 = attrs.x1,
              y1 = attrs.y1,
              x2 = attrs.x2,
              y2 = attrs.y2;

          context = context || this.get('context');
          if (attrs.startArrow) {
            Arrow.addStartArrow(context, attrs, x2, y2, x1, y1);
          }
          if (attrs.endArrow) {
            Arrow.addEndArrow(context, attrs, x1, y1, x2, y2);
          }
        },
        getPoint: function getPoint(t) {
          var attrs = this.__attrs;
          return {
            x: LineMath.at(attrs.x1, attrs.x2, t),
            y: LineMath.at(attrs.y1, attrs.y2, t)
          };
        }
      });

      module.exports = Line;

      /***/
    },
    /* 70 */
    /***/function (module, exports, __webpack_require__) {

      var Util = __webpack_require__(0);
      var Shape = __webpack_require__(1);
      var Inside = __webpack_require__(3);

      var CImage = function CImage(cfg) {
        CImage.superclass.constructor.call(this, cfg);
      };

      CImage.ATTRS = {
        x: 0,
        y: 0,
        img: undefined,
        width: 0,
        height: 0,
        sx: null,
        sy: null,
        swidth: null,
        sheight: null
      };

      Util.extend(CImage, Shape);

      Util.augment(CImage, {
        type: 'image',
        _afterSetAttrImg: function _afterSetAttrImg(img) {
          this._setAttrImg(img);
        },
        _afterSetAttrAll: function _afterSetAttrAll(params) {
          if (params.img) {
            this._setAttrImg(params.img);
          }
        },
        isHitBox: function isHitBox() {
          return false;
        },
        calculateBox: function calculateBox() {
          var attrs = this.__attrs;
          var x = attrs.x;
          var y = attrs.y;
          var width = attrs.width;
          var height = attrs.height;

          return {
            minX: x,
            minY: y,
            maxX: x + width,
            maxY: y + height
          };
        },
        isPointInPath: function isPointInPath(x, y) {
          var attrs = this.__attrs;
          if (this.get('toDraw') || !attrs.img) {
            return false;
          }
          var rx = attrs.x;
          var ry = attrs.y;
          var width = attrs.width;
          var height = attrs.height;
          return Inside.rect(rx, ry, width, height, x, y);
        },
        _beforeSetLoading: function _beforeSetLoading(loading) {
          var canvas = this.get('canvas');
          if (loading === false && this.get('toDraw') === true) {
            this.__cfg.loading = false;
            canvas.draw();
          }
          return loading;
        },
        _setAttrImg: function _setAttrImg(img) {
          var self = this;
          var attrs = self.__attrs;
          if (Util.isString(img)) {
            var image = new Image();
            image.onload = function () {
              if (self.get('destroyed')) return false;
              self.attr('imgSrc', img);
              self.attr('img', image);
              var callback = self.get('callback');
              if (callback) {
                callback.call(self);
              }
              self.set('loading', false);
            };
            image.src = img;
            image.crossOrigin = 'Anonymous';
            self.set('loading', true);
          } else if (img instanceof Image) {
            if (!attrs.width) {
              self.attr('width', img.width);
            }

            if (!attrs.height) {
              self.attr('height', img.height);
            }
            return img;
          } else if (img instanceof HTMLElement && Util.isString(img.nodeName) && img.nodeName.toUpperCase() === 'CANVAS') {
            if (!attrs.width) {
              self.attr('width', Number(img.getAttribute('width')));
            }

            if (!attrs.height) {
              self.attr('height', Number(img.getAttribute('height')));
            }
            return img;
          } else if (img instanceof ImageData) {
            if (!attrs.width) {
              self.attr('width', img.width);
            }

            if (!attrs.height) {
              self.attr('height', img.height);
            }
            return img;
          } else {
            return null;
          }
        },
        drawInner: function drawInner(context) {
          if (this.get('loading')) {
            this.set('toDraw', true);
            return;
          }
          this._drawImage(context);
        },
        _drawImage: function _drawImage(context) {
          var attrs = this.__attrs;
          var x = attrs.x;
          var y = attrs.y;
          var image = attrs.img;
          var width = attrs.width;
          var height = attrs.height;
          var sx = attrs.sx;
          var sy = attrs.sy;
          var swidth = attrs.swidth;
          var sheight = attrs.sheight;
          this.set('toDraw', false);

          var img = image;
          if (img instanceof ImageData) {
            img = new Image();
            img.src = image;
          }
          if (img instanceof Image || img instanceof HTMLElement && Util.isString(img.nodeName) && img.nodeName.toUpperCase() === 'CANVAS') {
            if (Util.isNil(sx) || Util.isNil(sy) || Util.isNil(swidth) || Util.isNil(sheight)) {
              context.drawImage(img, x, y, width, height);
              return;
            }
            if (!Util.isNil(sx) && !Util.isNil(sy) && !Util.isNil(swidth) && !Util.isNil(sheight)) {
              context.drawImage(img, sx, sy, swidth, sheight, x, y, width, height);
              return;
            }
          }
          return;
        }
      });

      module.exports = CImage;

      /***/
    },
    /* 71 */
    /***/function (module, exports, __webpack_require__) {

      var Util = __webpack_require__(0);
      var Shape = __webpack_require__(1);
      var Inside = __webpack_require__(3);

      var Polygon = function Polygon(cfg) {
        Polygon.superclass.constructor.call(this, cfg);
      };

      Polygon.ATTRS = {
        points: null,
        lineWidth: 1
      };

      Util.extend(Polygon, Shape);

      Util.augment(Polygon, {
        canFill: true,
        canStroke: true,
        type: 'polygon',
        getDefaultAttrs: function getDefaultAttrs() {
          return {
            lineWidth: 1
          };
        },
        calculateBox: function calculateBox() {
          var self = this;
          var attrs = self.__attrs;
          var points = attrs.points;
          var lineWidth = this.getHitLineWidth();
          if (!points || points.length === 0) {
            return null;
          }
          var minX = Infinity;
          var minY = Infinity;
          var maxX = -Infinity;
          var maxY = -Infinity;

          Util.each(points, function (point) {
            var x = point[0];
            var y = point[1];
            if (x < minX) {
              minX = x;
            }
            if (x > maxX) {
              maxX = x;
            }

            if (y < minY) {
              minY = y;
            }

            if (y > maxY) {
              maxY = y;
            }
          });

          var halfWidth = lineWidth / 2;
          return {
            minX: minX - halfWidth,
            minY: minY - halfWidth,
            maxX: maxX + halfWidth,
            maxY: maxY + halfWidth
          };
        },
        isPointInPath: function isPointInPath(x, y) {
          var self = this;
          var fill = self.hasFill();
          var stroke = self.hasStroke();

          if (fill && stroke) {
            return self._isPointInFill(x, y) || self._isPointInStroke(x, y);
          }

          if (fill) {
            return self._isPointInFill(x, y);
          }

          if (stroke) {
            return self._isPointInStroke(x, y);
          }

          return false;
        },
        _isPointInFill: function _isPointInFill(x, y) {
          var self = this;
          var context = self.get('context');
          self.createPath();
          return context.isPointInPath(x, y);
        },
        _isPointInStroke: function _isPointInStroke(x, y) {
          var self = this;
          var attrs = self.__attrs;
          var points = attrs.points;
          if (points.length < 2) {
            return false;
          }
          var lineWidth = this.getHitLineWidth();
          var outPoints = points.slice(0);
          if (points.length >= 3) {
            outPoints.push(points[0]);
          }

          return Inside.polyline(outPoints, lineWidth, x, y);
        },
        createPath: function createPath(context) {
          var self = this;
          var attrs = self.__attrs;
          var points = attrs.points;
          if (points.length < 2) {
            return;
          }
          context = context || self.get('context');
          context.beginPath();
          Util.each(points, function (point, index) {
            if (index === 0) {
              context.moveTo(point[0], point[1]);
            } else {
              context.lineTo(point[0], point[1]);
            }
          });
          context.closePath();
        }
      });

      module.exports = Polygon;

      /***/
    },
    /* 72 */
    /***/function (module, exports, __webpack_require__) {

      var Util = __webpack_require__(0);
      var Shape = __webpack_require__(1);
      var Inside = __webpack_require__(3);
      var Arrow = __webpack_require__(7);
      var LineMath = __webpack_require__(26);

      var Polyline = function Polyline(cfg) {
        Polyline.superclass.constructor.call(this, cfg);
      };

      Polyline.ATTRS = {
        points: null,
        lineWidth: 1,
        startArrow: false,
        endArrow: false,
        tCache: null
      };

      Util.extend(Polyline, Shape);

      Util.augment(Polyline, {
        canStroke: true,
        type: 'polyline',
        tCache: null, // 缓存各点的t
        getDefaultAttrs: function getDefaultAttrs() {
          return {
            lineWidth: 1,
            startArrow: false,
            endArrow: false
          };
        },
        calculateBox: function calculateBox() {
          var self = this;
          var attrs = self.__attrs;
          var lineWidth = this.getHitLineWidth();
          var points = attrs.points;
          if (!points || points.length === 0) {
            return null;
          }
          var minX = Infinity;
          var minY = Infinity;
          var maxX = -Infinity;
          var maxY = -Infinity;

          Util.each(points, function (point) {
            var x = point[0];
            var y = point[1];
            if (x < minX) {
              minX = x;
            }
            if (x > maxX) {
              maxX = x;
            }

            if (y < minY) {
              minY = y;
            }

            if (y > maxY) {
              maxY = y;
            }
          });

          var halfWidth = lineWidth / 2;
          return {
            minX: minX - halfWidth,
            minY: minY - halfWidth,
            maxX: maxX + halfWidth,
            maxY: maxY + halfWidth
          };
        },
        _setTcache: function _setTcache() {
          var self = this;
          var attrs = self.__attrs;
          var points = attrs.points;
          var totalLength = 0;
          var tempLength = 0;
          var tCache = [];
          var segmentT = void 0;
          var segmentL = void 0;
          if (!points || points.length === 0) {
            return;
          }

          Util.each(points, function (p, i) {
            if (points[i + 1]) {
              totalLength += LineMath.len(p[0], p[1], points[i + 1][0], points[i + 1][1]);
            }
          });
          if (totalLength <= 0) {
            return;
          }
          Util.each(points, function (p, i) {
            if (points[i + 1]) {
              segmentT = [];
              segmentT[0] = tempLength / totalLength;
              segmentL = LineMath.len(p[0], p[1], points[i + 1][0], points[i + 1][1]);
              tempLength += segmentL;
              segmentT[1] = tempLength / totalLength;
              tCache.push(segmentT);
            }
          });
          this.tCache = tCache;
        },
        isPointInPath: function isPointInPath(x, y) {
          var self = this;
          var attrs = self.__attrs;
          if (self.hasStroke()) {
            var points = attrs.points;
            if (points.length < 2) {
              return false;
            }
            var lineWidth = attrs.lineWidth;
            return Inside.polyline(points, lineWidth, x, y);
          }
          return false;
        },
        createPath: function createPath(context) {
          var self = this;
          var attrs = self.__attrs;
          var points = attrs.points;
          var l = void 0;
          var i = void 0;

          if (points.length < 2) {
            return;
          }
          context = context || self.get('context');
          context.beginPath();

          context.moveTo(points[0][0], points[0][1]);
          for (i = 1, l = points.length - 1; i < l; i++) {
            context.lineTo(points[i][0], points[i][1]);
          }
          context.lineTo(points[l][0], points[l][1]);
        },
        getStartTangent: function getStartTangent() {
          var points = this.__attrs.points;
          var result = [];
          result.push([points[1][0], points[1][1]]);
          result.push([points[0][0], points[0][1]]);
          return result;
        },
        getEndTangent: function getEndTangent() {
          var points = this.__attrs.points;
          var l = points.length - 1;
          var result = [];
          result.push([points[l - 1][0], points[l - 1][1]]);
          result.push([points[l][0], points[l][1]]);
          return result;
        },
        afterPath: function afterPath(context) {
          var self = this;
          var attrs = self.__attrs;
          var points = attrs.points;
          var l = points.length - 1;
          context = context || self.get('context');

          if (attrs.startArrow) {
            Arrow.addStartArrow(context, attrs, points[1][0], points[1][1], points[0][0], points[0][1]);
          }
          if (attrs.endArrow) {
            Arrow.addEndArrow(context, attrs, points[l - 1][0], points[l - 1][1], points[l][0], points[l][1]);
          }
        },
        getPoint: function getPoint(t) {
          var attrs = this.__attrs;
          var points = attrs.points;
          var tCache = this.tCache;
          var subt = void 0;
          var index = void 0;
          if (!tCache) {
            this._setTcache();
            tCache = this.tCache;
          }
          Util.each(tCache, function (v, i) {
            if (t >= v[0] && t <= v[1]) {
              subt = (t - v[0]) / (v[1] - v[0]);
              index = i;
            }
          });
          return {
            x: LineMath.at(points[index][0], points[index + 1][0], subt),
            y: LineMath.at(points[index][1], points[index + 1][1], subt)
          };
        }
      });

      module.exports = Polyline;

      /***/
    },
    /* 73 */
    /***/function (module, exports, __webpack_require__) {

      var Util = __webpack_require__(0);
      var Shape = __webpack_require__(1);
      var Inside = __webpack_require__(3);
      var ArcMath = __webpack_require__(28);
      var Arrow = __webpack_require__(7);

      function _getArcX(x, radius, angle) {
        return x + radius * Math.cos(angle);
      }
      function _getArcY(y, radius, angle) {
        return y + radius * Math.sin(angle);
      }

      var Arc = function Arc(cfg) {
        Arc.superclass.constructor.call(this, cfg);
      };

      Arc.ATTRS = {
        x: 0,
        y: 0,
        r: 0,
        startAngle: 0,
        endAngle: 0,
        clockwise: false,
        lineWidth: 1,
        startArrow: false,
        endArrow: false
      };

      Util.extend(Arc, Shape);

      Util.augment(Arc, {
        canStroke: true,
        type: 'arc',
        getDefaultAttrs: function getDefaultAttrs() {
          return {
            x: 0,
            y: 0,
            r: 0,
            startAngle: 0,
            endAngle: 0,
            clockwise: false,
            lineWidth: 1,
            startArrow: false,
            endArrow: false
          };
        },
        calculateBox: function calculateBox() {
          var attrs = this.__attrs;
          var x = attrs.x,
              y = attrs.y,
              r = attrs.r,
              startAngle = attrs.startAngle,
              endAngle = attrs.endAngle,
              clockwise = attrs.clockwise;

          var lineWidth = this.getHitLineWidth();
          var halfWidth = lineWidth / 2;
          var box = ArcMath.box(x, y, r, startAngle, endAngle, clockwise);
          box.minX -= halfWidth;
          box.minY -= halfWidth;
          box.maxX += halfWidth;
          box.maxY += halfWidth;
          return box;
        },
        getStartTangent: function getStartTangent() {
          var attrs = this.__attrs;
          var x = attrs.x,
              y = attrs.y,
              startAngle = attrs.startAngle,
              r = attrs.r,
              clockwise = attrs.clockwise;

          var diff = Math.PI / 180;
          if (clockwise) {
            diff *= -1;
          }
          var result = [];
          var x1 = _getArcX(x, r, startAngle + diff);
          var y1 = _getArcY(y, r, startAngle + diff);
          var x2 = _getArcX(x, r, startAngle);
          var y2 = _getArcY(y, r, startAngle);
          result.push([x1, y1]);
          result.push([x2, y2]);
          return result;
        },
        getEndTangent: function getEndTangent() {
          var attrs = this.__attrs;
          var x = attrs.x,
              y = attrs.y,
              endAngle = attrs.endAngle,
              r = attrs.r,
              clockwise = attrs.clockwise;

          var diff = Math.PI / 180;
          var result = [];
          if (clockwise) {
            diff *= -1;
          }
          var x1 = _getArcX(x, r, endAngle + diff);
          var y1 = _getArcY(y, r, endAngle + diff);
          var x2 = _getArcX(x, r, endAngle);
          var y2 = _getArcY(y, r, endAngle);
          result.push([x2, y2]);
          result.push([x1, y1]);
          return result;
        },
        isPointInPath: function isPointInPath(x, y) {
          var attrs = this.__attrs;
          var cx = attrs.x;
          var cy = attrs.y;
          var r = attrs.r,
              startAngle = attrs.startAngle,
              endAngle = attrs.endAngle,
              clockwise = attrs.clockwise;

          var lineWidth = this.getHitLineWidth();
          if (this.hasStroke()) {
            return Inside.arcline(cx, cy, r, startAngle, endAngle, clockwise, lineWidth, x, y);
          }
          return false;
        },
        createPath: function createPath(context) {
          var attrs = this.__attrs;
          var x = attrs.x,
              y = attrs.y,
              r = attrs.r,
              startAngle = attrs.startAngle,
              endAngle = attrs.endAngle,
              clockwise = attrs.clockwise;

          context = context || self.get('context');

          context.beginPath();
          context.arc(x, y, r, startAngle, endAngle, clockwise);
        },
        afterPath: function afterPath(context) {
          var attrs = this.__attrs;
          context = context || this.get('context');

          if (attrs.startArrow) {
            var startPoints = this.getStartTangent();
            Arrow.addStartArrow(context, attrs, startPoints[0][0], startPoints[0][1], startPoints[1][0], startPoints[1][1]);
          }

          if (attrs.endArrow) {
            var endPoints = this.getEndTangent();
            Arrow.addEndArrow(context, attrs, endPoints[0][0], endPoints[0][1], endPoints[1][0], endPoints[1][1]);
          }
        }
      });

      module.exports = Arc;

      /***/
    },
    /* 74 */
    /***/function (module, exports, __webpack_require__) {

      var Util = __webpack_require__(0);
      var Shape = __webpack_require__(1);
      var Inside = __webpack_require__(3);
      var ArcMath = __webpack_require__(28);
      var vec2 = __webpack_require__(2).vec2;

      var Fan = function Fan(cfg) {
        Fan.superclass.constructor.call(this, cfg);
      };

      Fan.ATTRS = {
        x: 0,
        y: 0,
        rs: 0,
        re: 0,
        startAngle: 0,
        endAngle: 0,
        clockwise: false,
        lineWidth: 1
      };

      Util.extend(Fan, Shape);

      Util.augment(Fan, {
        canFill: true,
        canStroke: true,
        type: 'fan',
        getDefaultAttrs: function getDefaultAttrs() {
          return {
            clockwise: false,
            lineWidth: 1,
            rs: 0,
            re: 0
          };
        },
        calculateBox: function calculateBox() {
          var self = this;
          var attrs = self.__attrs;
          var cx = attrs.x;
          var cy = attrs.y;
          var rs = attrs.rs;
          var re = attrs.re;
          var startAngle = attrs.startAngle;
          var endAngle = attrs.endAngle;
          var clockwise = attrs.clockwise;
          var lineWidth = this.getHitLineWidth();

          var boxs = ArcMath.box(cx, cy, rs, startAngle, endAngle, clockwise);
          var boxe = ArcMath.box(cx, cy, re, startAngle, endAngle, clockwise);
          var minX = Math.min(boxs.minX, boxe.minX);
          var minY = Math.min(boxs.minY, boxe.minY);
          var maxX = Math.max(boxs.maxX, boxe.maxX);
          var maxY = Math.max(boxs.maxY, boxe.maxY);

          var halfWidth = lineWidth / 2;
          return {
            minX: minX - halfWidth,
            minY: minY - halfWidth,
            maxX: maxX + halfWidth,
            maxY: maxY + halfWidth
          };
        },
        isPointInPath: function isPointInPath(x, y) {
          var fill = this.hasFill();
          var stroke = this.hasStroke();

          if (fill && stroke) {
            return this._isPointInFill(x, y) || this._isPointInStroke(x, y);
          }

          if (fill) {
            return this._isPointInFill(x, y);
          }

          if (stroke) {
            return this._isPointInStroke(x, y);
          }
          return false;
        },
        _isPointInFill: function _isPointInFill(x, y) {
          var attrs = this.__attrs;
          var cx = attrs.x;
          var cy = attrs.y;
          var rs = attrs.rs;
          var re = attrs.re;
          var startAngle = attrs.startAngle;
          var endAngle = attrs.endAngle;
          var clockwise = attrs.clockwise;
          var v1 = [1, 0];
          var subv = [x - cx, y - cy];
          var angle = vec2.angleTo(v1, subv);

          var angle1 = ArcMath.nearAngle(angle, startAngle, endAngle, clockwise);

          if (Util.isNumberEqual(angle, angle1)) {
            var ls = vec2.squaredLength(subv);
            if (rs * rs <= ls && ls <= re * re) {
              return true;
            }
          }
          return false;
        },
        _isPointInStroke: function _isPointInStroke(x, y) {
          var attrs = this.__attrs;
          var cx = attrs.x;
          var cy = attrs.y;
          var rs = attrs.rs;
          var re = attrs.re;
          var startAngle = attrs.startAngle;
          var endAngle = attrs.endAngle;
          var clockwise = attrs.clockwise;
          var lineWidth = this.getHitLineWidth();

          var ssp = {
            x: Math.cos(startAngle) * rs + cx,
            y: Math.sin(startAngle) * rs + cy
          };
          var sep = {
            x: Math.cos(startAngle) * re + cx,
            y: Math.sin(startAngle) * re + cy
          };
          var esp = {
            x: Math.cos(endAngle) * rs + cx,
            y: Math.sin(endAngle) * rs + cy
          };
          var eep = {
            x: Math.cos(endAngle) * re + cx,
            y: Math.sin(endAngle) * re + cy
          };

          if (Inside.line(ssp.x, ssp.y, sep.x, sep.y, lineWidth, x, y)) {
            return true;
          }

          if (Inside.line(esp.x, esp.y, eep.x, eep.y, lineWidth, x, y)) {
            return true;
          }

          if (Inside.arcline(cx, cy, rs, startAngle, endAngle, clockwise, lineWidth, x, y)) {
            return true;
          }

          if (Inside.arcline(cx, cy, re, startAngle, endAngle, clockwise, lineWidth, x, y)) {
            return true;
          }

          return false;
        },
        createPath: function createPath(context) {
          var attrs = this.__attrs;
          var cx = attrs.x;
          var cy = attrs.y;
          var rs = attrs.rs;
          var re = attrs.re;
          var startAngle = attrs.startAngle;
          var endAngle = attrs.endAngle;
          var clockwise = attrs.clockwise;

          var ssp = {
            x: Math.cos(startAngle) * rs + cx,
            y: Math.sin(startAngle) * rs + cy
          };
          var sep = {
            x: Math.cos(startAngle) * re + cx,
            y: Math.sin(startAngle) * re + cy
          };
          var esp = {
            x: Math.cos(endAngle) * rs + cx,
            y: Math.sin(endAngle) * rs + cy
          };

          context = context || self.get('context');
          context.beginPath();
          context.moveTo(ssp.x, ssp.y);
          context.lineTo(sep.x, sep.y);
          context.arc(cx, cy, re, startAngle, endAngle, clockwise);
          context.lineTo(esp.x, esp.y);
          context.arc(cx, cy, rs, endAngle, startAngle, !clockwise);
          context.closePath();
        }
      });

      module.exports = Fan;

      /***/
    },
    /* 75 */
    /***/function (module, exports, __webpack_require__) {

      var Util = __webpack_require__(0);
      var Shape = __webpack_require__(1);
      var Inside = __webpack_require__(3);
      var Arrow = __webpack_require__(7);
      var CubicMath = __webpack_require__(15);

      var Cubic = function Cubic(cfg) {
        Cubic.superclass.constructor.call(this, cfg);
      };

      Cubic.ATTRS = {
        p1: null, // 起始点
        p2: null, // 第一个控制点
        p3: null, // 第二个控制点
        p4: null, // 终点
        lineWidth: 1,
        startArrow: false,
        endArrow: false
      };

      Util.extend(Cubic, Shape);

      Util.augment(Cubic, {
        canStroke: true,
        type: 'cubic',
        getDefaultAttrs: function getDefaultAttrs() {
          return {
            lineWidth: 1,
            startArrow: false,
            endArrow: false
          };
        },
        calculateBox: function calculateBox() {
          var attrs = this.__attrs;
          var p1 = attrs.p1,
              p2 = attrs.p2,
              p3 = attrs.p3,
              p4 = attrs.p4;

          var lineWidth = this.getHitLineWidth();
          var i = void 0;
          var l = void 0;

          if (Util.isNil(p1) || Util.isNil(p2) || Util.isNil(p3) || Util.isNil(p4)) {
            return null;
          }
          var halfWidth = lineWidth / 2;

          var xDim = CubicMath.extrema(p1[0], p2[0], p3[0], p4[0]);
          for (i = 0, l = xDim.length; i < l; i++) {
            xDim[i] = CubicMath.at(p1[0], p2[0], p3[0], p4[0], xDim[i]);
          }
          var yDim = CubicMath.extrema(p1[1], p2[1], p3[1], p4[1]);
          for (i = 0, l = yDim.length; i < l; i++) {
            yDim[i] = CubicMath.at(p1[1], p2[1], p3[1], p4[1], yDim[i]);
          }
          xDim.push(p1[0], p4[0]);
          yDim.push(p1[1], p4[1]);

          return {
            minX: Math.min.apply(Math, xDim) - halfWidth,
            maxX: Math.max.apply(Math, xDim) + halfWidth,
            minY: Math.min.apply(Math, yDim) - halfWidth,
            maxY: Math.max.apply(Math, yDim) + halfWidth
          };
        },
        isPointInPath: function isPointInPath(x, y) {
          var attrs = this.__attrs;
          var p1 = attrs.p1,
              p2 = attrs.p2,
              p3 = attrs.p3,
              p4 = attrs.p4;

          var lineWidth = this.getHitLineWidth();
          return Inside.cubicline(p1[0], p1[1], p2[0], p2[1], p3[0], p3[1], p4[0], p4[1], lineWidth, x, y);
        },
        createPath: function createPath(context) {
          var attrs = this.__attrs;
          var p1 = attrs.p1,
              p2 = attrs.p2,
              p3 = attrs.p3,
              p4 = attrs.p4;

          context = context || self.get('context');
          if (Util.isNil(p1) || Util.isNil(p2) || Util.isNil(p3) || Util.isNil(p4)) {
            return;
          }
          context.beginPath();
          context.moveTo(p1[0], p1[1]);
          context.bezierCurveTo(p2[0], p2[1], p3[0], p3[1], p4[0], p4[1]);
        },
        afterPath: function afterPath(context) {
          var attrs = this.__attrs;
          var p1 = attrs.p1,
              p2 = attrs.p2,
              p3 = attrs.p3,
              p4 = attrs.p4;

          context = context || this.get('context');
          if (attrs.startArrow) {
            Arrow.addStartArrow(context, attrs, p2[0], p2[1], p1[0], p1[1]);
          }
          if (attrs.endArrow) {
            Arrow.addEndArrow(context, attrs, p3[0], p3[1], p4[0], p4[1]);
          }
        },
        getPoint: function getPoint(t) {
          var attrs = this.__attrs;
          return {
            x: CubicMath.at(attrs.p4[0], attrs.p3[0], attrs.p2[0], attrs.p1[0], t),
            y: CubicMath.at(attrs.p4[1], attrs.p3[1], attrs.p2[1], attrs.p1[1], t)
          };
        }
      });

      module.exports = Cubic;

      /***/
    },
    /* 76 */
    /***/function (module, exports, __webpack_require__) {

      var Util = __webpack_require__(0);
      var Shape = __webpack_require__(1);
      var Inside = __webpack_require__(3);
      var Arrow = __webpack_require__(7);
      var QuadraticMath = __webpack_require__(27);

      var Quadratic = function Quadratic(cfg) {
        Quadratic.superclass.constructor.call(this, cfg);
      };

      Quadratic.ATTRS = {
        p1: null, // 起始点
        p2: null, // 控制点
        p3: null, // 结束点
        lineWidth: 1,
        startArrow: false,
        endArrow: false
      };

      Util.extend(Quadratic, Shape);

      Util.augment(Quadratic, {
        canStroke: true,
        type: 'quadratic',
        getDefaultAttrs: function getDefaultAttrs() {
          return {
            lineWidth: 1,
            startArrow: false,
            endArrow: false
          };
        },
        calculateBox: function calculateBox() {
          var self = this;
          var attrs = self.__attrs;
          var p1 = attrs.p1,
              p2 = attrs.p2,
              p3 = attrs.p3;

          var lineWidth = this.getHitLineWidth();
          var i = void 0;
          var l = void 0;

          if (Util.isNil(p1) || Util.isNil(p2) || Util.isNil(p3)) {
            return null;
          }
          var halfWidth = lineWidth / 2;
          var xDims = QuadraticMath.extrema(p1[0], p2[0], p3[0]);
          for (i = 0, l = xDims.length; i < l; i++) {
            xDims[i] = QuadraticMath.at(p1[0], p2[0], p3[0], xDims[i]);
          }
          xDims.push(p1[0], p3[0]);
          var yDims = QuadraticMath.extrema(p1[1], p2[1], p3[1]);
          for (i = 0, l = yDims.length; i < l; i++) {
            yDims[i] = QuadraticMath.at(p1[1], p2[1], p3[1], yDims[i]);
          }
          yDims.push(p1[1], p3[1]);

          return {
            minX: Math.min.apply(Math, xDims) - halfWidth,
            maxX: Math.max.apply(Math, xDims) + halfWidth,
            minY: Math.min.apply(Math, yDims) - halfWidth,
            maxY: Math.max.apply(Math, yDims) + halfWidth
          };
        },
        isPointInPath: function isPointInPath(x, y) {
          var self = this;
          var attrs = self.__attrs;
          var p1 = attrs.p1,
              p2 = attrs.p2,
              p3 = attrs.p3;

          var lineWidth = this.getHitLineWidth();

          return Inside.quadraticline(p1[0], p1[1], p2[0], p2[1], p3[0], p3[1], lineWidth, x, y);
        },
        createPath: function createPath(context) {
          var self = this;
          var attrs = self.__attrs;
          var p1 = attrs.p1,
              p2 = attrs.p2,
              p3 = attrs.p3;

          if (Util.isNil(p1) || Util.isNil(p2) || Util.isNil(p3)) {
            return;
          }
          context = context || self.get('context');
          context.beginPath();
          context.moveTo(p1[0], p1[1]);
          context.quadraticCurveTo(p2[0], p2[1], p3[0], p3[1]);
        },
        afterPath: function afterPath(context) {
          var self = this;
          var attrs = self.__attrs;
          var p1 = attrs.p1,
              p2 = attrs.p2,
              p3 = attrs.p3;

          context = context || self.get('context');

          if (attrs.startArrow) {
            Arrow.addStartArrow(context, attrs, p2[0], p2[1], p1[0], p1[1]);
          }

          if (attrs.endArrow) {
            Arrow.addEndArrow(context, attrs, p2[0], p2[1], p3[0], p3[1]);
          }
        },
        getPoint: function getPoint(t) {
          var attrs = this.__attrs;
          return {
            x: QuadraticMath.at(attrs.p1[0], attrs.p2[0], attrs.p3[0], t),
            y: QuadraticMath.at(attrs.p1[1], attrs.p2[1], attrs.p3[1], t)
          };
        }
      });

      module.exports = Quadratic;

      /***/
    },
    /* 77 */
    /***/function (module, exports, __webpack_require__) {

      var Util = __webpack_require__(0);
      var Shape = __webpack_require__(1);
      var Inside = __webpack_require__(3);
      var Format = __webpack_require__(25);
      var PathSegment = __webpack_require__(29);

      var Marker = function Marker(cfg) {
        Marker.superclass.constructor.call(this, cfg);
      };

      Marker.Symbols = {
        // 圆
        circle: function circle(x, y, r) {
          return [['M', x, y], ['m', -r, 0], ['a', r, r, 0, 1, 0, r * 2, 0], ['a', r, r, 0, 1, 0, -r * 2, 0]];
        },

        // 正方形
        square: function square(x, y, r) {
          return [['M', x - r, y - r], ['L', x + r, y - r], ['L', x + r, y + r], ['L', x - r, y + r], ['Z']];
        },

        // 菱形
        diamond: function diamond(x, y, r) {
          return [['M', x - r, y], ['L', x, y - r], ['L', x + r, y], ['L', x, y + r], ['Z']];
        },

        // 三角形
        triangle: function triangle(x, y, r) {
          var diffY = r * Math.sin(1 / 3 * Math.PI);
          return [['M', x - r, y + diffY], ['L', x, y - diffY], ['L', x + r, y + diffY], ['z']];
        },

        // 倒三角形
        'triangle-down': function triangleDown(x, y, r) {
          var diffY = r * Math.sin(1 / 3 * Math.PI);
          return [['M', x - r, y - diffY], ['L', x + r, y - diffY], ['L', x, y + diffY], ['Z']];
        }
      };

      Marker.ATTRS = {
        path: null,
        lineWidth: 1
      };

      Util.extend(Marker, Shape);

      Util.augment(Marker, {
        type: 'marker',
        canFill: true,
        canStroke: true,
        getDefaultAttrs: function getDefaultAttrs() {
          return {
            x: 0,
            y: 0,
            lineWidth: 1
          };
        },
        calculateBox: function calculateBox() {
          var attrs = this.__attrs;
          var cx = attrs.x;
          var cy = attrs.y;
          var r = attrs.radius;
          var lineWidth = this.getHitLineWidth();
          var halfWidth = lineWidth / 2 + r;
          return {
            minX: cx - halfWidth,
            minY: cy - halfWidth,
            maxX: cx + halfWidth,
            maxY: cy + halfWidth
          };
        },
        isPointInPath: function isPointInPath(x, y) {
          var attrs = this.__attrs;
          var cx = attrs.x;
          var cy = attrs.y;
          var r = attrs.radius || attrs.r;
          var lineWidth = this.getHitLineWidth();
          return Inside.circle(cx, cy, r + lineWidth / 2, x, y);
        },
        createPath: function createPath(context) {
          var attrs = this.__attrs;
          var x = attrs.x;
          var y = attrs.y;
          var r = attrs.radius || attrs.r;
          var symbol = attrs.symbol || 'circle';
          var method = void 0;
          if (Util.isFunction(symbol)) {
            method = symbol;
          } else {
            method = Marker.Symbols[symbol];
          }
          var path = method(x, y, r);
          path = Format.parsePath(path);
          context.beginPath();
          var preSegment = void 0;
          for (var i = 0; i < path.length; i++) {
            var item = path[i];
            preSegment = new PathSegment(item, preSegment, i === path.length - 1);
            preSegment.draw(context);
          }
        }
      });

      module.exports = Marker;

      /***/
    },
    /* 78 */
    /***/function (module, exports, __webpack_require__) {

      module.exports = {
        // renderers
        svg: __webpack_require__(79),
        canvas: __webpack_require__(146),
        // utils
        CommonUtil: __webpack_require__(8),
        DomUtil: __webpack_require__(36),
        MatrixUtil: __webpack_require__(2),
        PathUtil: __webpack_require__(19),
        // version, etc.
        version: '3.0.0-beta.11'
      };

      /***/
    },
    /* 79 */
    /***/function (module, exports, __webpack_require__) {

      module.exports = {
        Canvas: __webpack_require__(80),
        Group: __webpack_require__(38),
        Shape: __webpack_require__(4),
        Rect: __webpack_require__(41),
        Circle: __webpack_require__(42),
        Ellipse: __webpack_require__(43),
        Path: __webpack_require__(44),
        Text: __webpack_require__(45),
        Line: __webpack_require__(46),
        Image: __webpack_require__(47),
        Polygon: __webpack_require__(48),
        Marker: __webpack_require__(49),
        Dom: __webpack_require__(50),
        Fan: __webpack_require__(51),
        Event: __webpack_require__(37)
      };

      /***/
    },
    /* 80 */
    /***/function (module, exports, __webpack_require__) {

      var Util = __webpack_require__(0);
      var Event = __webpack_require__(37);
      var Group = __webpack_require__(38);
      var Defs = __webpack_require__(114);
      var Timeline = __webpack_require__(52);

      var Canvas = function Canvas(cfg) {
        Canvas.superclass.constructor.call(this, cfg);
      };

      Canvas.CFG = {
        eventEnable: true,
        /**
         * 像素宽度
         * @type {Number}
         */
        width: null,
        /**
         * 像素高度
         * @type {Number}
         */
        height: null,
        /**
         * 画布宽度
         * @type {Number}
         */
        widthCanvas: null,
        /**
         * 画布高度
         * @type {Number}
         */
        heightCanvas: null,
        /**
         * CSS宽
         * CSS宽
         * @type {String}
         */
        widthStyle: null,
        /**
         * CSS高
         * @type {String}
         */
        heightStyle: null,
        /**
         * 容器DOM
         * @type {Object}
         */
        containerDOM: null,
        /**
         * 当前Canvas的DOM
         * @type {Object}
         */
        canvasDOM: null,
        /**
         * 屏幕像素比
         * @type {Number}
         */
        pixelRatio: Util.getRatio()
      };

      Util.extend(Canvas, Group);

      Util.augment(Canvas, {
        init: function init() {
          Canvas.superclass.init.call(this);
          this._setDOM();
          this._setInitSize();
          // this._scale();
          if (this.get('eventEnable')) {
            this._registEvents();
          }
        },
        getEmitter: function getEmitter(element, event) {
          if (element) {
            if (Util.isEmpty(element._getEvents())) {
              var parent = element.get('parent');
              if (parent && !event.propagationStopped) {
                return this.getEmitter(parent, event);
              }
            } else {
              return element;
            }
          }
        },
        _getEventObj: function _getEventObj(type, e, point, target) {
          var event = new Event(type, e, true, true);
          event.x = point.x;
          event.y = point.y;
          event.clientX = e.clientX;
          event.clientY = e.clientY;
          event.currentTarget = target;
          event.target = target;
          return event;
        },
        _triggerEvent: function _triggerEvent(type, e) {
          var point = this.getPointByClient(e.clientX, e.clientY);
          var shape = this.findShape(e.srcElement);
          var emitObj = void 0;
          if (type === 'mousemove') {
            var preShape = this.get('preShape');
            if (preShape && preShape !== shape) {
              var mouseleave = this._getEventObj('mouseleave', e, point, preShape);
              emitObj = this.getEmitter(preShape, e);
              emitObj && emitObj.emit('mouseleave', mouseleave);
            }

            if (shape) {
              var mousemove = this._getEventObj('mousemove', e, point, shape);
              emitObj = this.getEmitter(shape, e);
              emitObj && emitObj.emit('mousemove', mousemove);

              if (preShape !== shape) {
                var mouseenter = this._getEventObj('mouseenter', e, point, shape);
                emitObj && emitObj.emit('mouseenter', mouseenter, e);
              }
            } else {
              var canvasmousemove = this._getEventObj('mousemove', e, point, this);
              this.emit('mousemove', canvasmousemove);
            }
            this.set('preShape', shape);
          } else {
            var event = this._getEventObj(type, e, point, shape || this);
            emitObj = this.getEmitter(shape, e);
            if (emitObj && emitObj !== this) {
              emitObj.emit(type, event);
            }
            this.emit(type, event);
          }

          var el = this.get('el');
          if (shape && !shape.get('destroyed')) {
            el.style.cursor = shape.attr('cursor') || 'default';
          }
        },
        _registEvents: function _registEvents() {
          var self = this;
          var el = self.get('el');
          var events = ['mouseout', 'mouseover', 'mousemove', 'mousedown', 'mouseup', 'click', 'dblclick'];

          Util.each(events, function (event) {
            el.addEventListener(event, function (e) {
              self._triggerEvent(event, e);
            }, false);
          });
          el.addEventListener('touchstart', function (e) {
            if (!Util.isEmpty(e.touches)) {
              self._triggerEvent('touchstart', e.touches[0]);
            }
          }, false);

          el.addEventListener('touchmove', function (e) {
            if (!Util.isEmpty(e.touches)) {
              self._triggerEvent('touchmove', e.touches[0]);
            }
          }, false);

          el.addEventListener('touchend', function (e) {
            if (!Util.isEmpty(e.changedTouches)) {
              self._triggerEvent('touchend', e.changedTouches[0]);
            }
          }, false);
        },
        _setDOM: function _setDOM() {
          this._setContainer();
          this._setLayer();
        },
        _setContainer: function _setContainer() {
          var containerId = this.get('containerId');
          var containerDOM = this.get('containerDOM');
          if (!containerDOM) {
            containerDOM = document.getElementById(containerId);
            this.set('containerDOM', containerDOM);
          }
          Util.modifyCSS(containerDOM, {
            position: 'relative'
          });
        },
        _setLayer: function _setLayer() {
          var containerDOM = this.get('containerDOM');
          var canvasId = Util.uniqueId('svg_');
          if (containerDOM) {
            var _canvasDOM = Util.createDom('<svg id="' + canvasId + '"></svg>');
            containerDOM.appendChild(_canvasDOM);
            var defs = new Defs();
            _canvasDOM.appendChild(defs.get('el'));
            this.set('canvasDOM', _canvasDOM);
            this.set('el', _canvasDOM);
            this.set('defs', defs);
            this.set('canvas', this);
          }
          var canvasDOM = this.get('canvasDOM');
          var timeline = new Timeline();
          this.setSilent('timeline', timeline);
          this.set('context', canvasDOM);
        },
        _setInitSize: function _setInitSize() {
          this.changeSize(this.get('width'), this.get('height'));
          this.set('pixelRatio', 1);
        },
        _resize: function _resize() {
          var canvasDOM = this.get('canvasDOM');
          var widthCanvas = this.get('widthCanvas');
          var heightCanvas = this.get('heightCanvas');
          var widthStyle = this.get('widthStyle');
          var heightStyle = this.get('heightStyle');

          canvasDOM.style.width = widthStyle;
          canvasDOM.style.height = heightStyle;
          canvasDOM.setAttribute('width', widthCanvas);
          canvasDOM.setAttribute('height', heightCanvas);
        },
        getWidth: function getWidth() {
          return this.get('width');
        },
        getHeight: function getHeight() {
          return this.get('height');
        },
        changeSize: function changeSize(width, height) {
          this.set('widthCanvas', width);
          this.set('heightCanvas', height);
          this.set('widthStyle', width + 'px');
          this.set('heightStyle', height + 'px');
          this.set('width', width);
          this.set('height', height);
          this._resize();
        },

        /**
         * 将窗口坐标转变成 canvas 坐标
         * @param  {Number} clientX 窗口x坐标
         * @param  {Number} clientY 窗口y坐标
         * @return {Object} canvas坐标
         */
        getPointByClient: function getPointByClient(clientX, clientY) {
          var el = this.get('el');
          var bbox = el.getBoundingClientRect();
          return {
            x: clientX - bbox.left,
            y: clientY - bbox.top
          };
        },
        getClientByPoint: function getClientByPoint(x, y) {
          var el = this.get('el');
          var bbox = el.getBoundingClientRect();
          return {
            clientX: x + bbox.left,
            clientY: y + bbox.top
          };
        },
        beforeDraw: function beforeDraw() {
          var el = this.get('el');
          // canvas版本用盖一个canvas大小的矩阵清空画布，svg换成清空html
          el.innerHTML = '';
        },
        _beginDraw: function _beginDraw() {
          this.setSilent('toDraw', true);
        },
        _endDraw: function _endDraw() {
          this.setSilent('toDraw', false);
        },

        // svg实时渲染，兼容canvas版本留个空接口
        draw: function draw() {},
        destroy: function destroy() {
          var containerDOM = this.get('containerDOM');
          var canvasDOM = this.get('canvasDOM');
          if (canvasDOM && containerDOM) {
            containerDOM.removeChild(canvasDOM);
          }
          Canvas.superclass.destroy.call(this);
        }
      });

      module.exports = Canvas;

      /***/
    },
    /* 81 */
    /***/function (module, exports, __webpack_require__) {

      var arrayUtil = __webpack_require__(82);
      var eventUtil = __webpack_require__(83);
      var mathUtil = __webpack_require__(86);
      var stringUtil = __webpack_require__(88);
      var typeUtil = __webpack_require__(89);
      var each = __webpack_require__(10);
      var mix = __webpack_require__(16);

      var util = {
        // collections
        arrayUtil: arrayUtil,
        eventUtil: eventUtil,
        mathUtil: mathUtil,
        stringUtil: stringUtil,
        typeUtil: typeUtil,
        // others
        augment: __webpack_require__(91),
        clone: __webpack_require__(92),
        deepMix: __webpack_require__(93),
        each: each,
        extend: __webpack_require__(94),
        filter: __webpack_require__(95),
        group: __webpack_require__(96),
        groupBy: __webpack_require__(34),
        groupToMap: __webpack_require__(33),
        indexOf: __webpack_require__(97),
        isEmpty: __webpack_require__(98),
        isEqual: __webpack_require__(35),
        isEqualWith: __webpack_require__(103),
        map: __webpack_require__(104),
        mix: mix,
        pick: __webpack_require__(105),
        toArray: __webpack_require__(30),
        toString: __webpack_require__(106),
        uniqueId: __webpack_require__(107)
      };

      each([arrayUtil, eventUtil, mathUtil, stringUtil, typeUtil], function (collection) {
        mix(util, collection);
      });

      module.exports = util;

      /***/
    },
    /* 82 */
    /***/function (module, exports, __webpack_require__) {

      var isArrayLike = __webpack_require__(5);

      var arrayProto = Array.prototype;
      var slice = arrayProto.slice;
      var indexOf = arrayProto.indexOf;
      var splice = arrayProto.splice;

      function contains(arr, value) {
        if (!isArrayLike(arr)) {
          return false;
        }
        return indexOf.call(arr, value) > -1;
      }

      function uniq(arr) {
        var resultArr = [];
        arr.forEach(function (item) {
          if (!contains(resultArr, item)) {
            resultArr.push(item);
          }
        });
        return resultArr;
      }

      function pull(arr) {
        /**
         * const arr = [ 'a', 'b', 'c', 'a', 'b', 'c' ]
         * pull(arr, 'a', 'c')
         * console.log(arr) // => [ 'b', 'b' ]
         */
        var values = slice.call(arguments, 1);
        for (var i = 0; i < values.length; i++) {
          var value = values[i];
          var fromIndex = -1;
          while ((fromIndex = indexOf.call(arr, value)) > -1) {
            splice.call(arr, fromIndex, 1);
          }
        }
        return arr;
      }

      function pullAt(arr, indexes) {
        if (!isArrayLike(arr)) {
          return [];
        }
        var length = arr ? indexes.length : 0;
        var last = length - 1;

        while (length--) {
          var previous = void 0;
          var index = indexes[length];
          if (length === last || index !== previous) {
            previous = index;
            splice.call(arr, index, 1);
          }
        }
        return arr;
      }

      function remove(arr, predicate) {
        /**
         * const arr = [1, 2, 3, 4]
         * const evens = remove(arr, n => n % 2 == 0)
         * console.log(arr) // => [1, 3]
         * console.log(evens) // => [2, 4]
         */
        var result = [];
        if (!isArrayLike(arr)) {
          return result;
        }
        var i = -1;
        var indexes = [];
        var length = arr.length;

        while (++i < length) {
          var value = arr[i];
          if (predicate(value, i, arr)) {
            result.push(value);
            indexes.push(i);
          }
        }
        pullAt(arr, indexes);
        return result;
      }

      var arrayUtil = {
        contains: contains,
        pull: pull,
        pullAll: pull,
        pullAt: pullAt,
        remove: remove,
        uniq: uniq
      };

      module.exports = arrayUtil;

      /***/
    },
    /* 83 */
    /***/function (module, exports, __webpack_require__) {

      module.exports = {
        getWrapBehavior: __webpack_require__(84),
        wrapBehavior: __webpack_require__(85)
      };

      /***/
    },
    /* 84 */
    /***/function (module, exports) {

      /**
       * 获取封装的事件
       * @protected
       * @param  {Object} obj   对象
       * @param  {String} action 事件名称
       * @return {Function}        返回事件处理函数
       */
      function getWrapBehavior(obj, action) {
        return obj['_wrap_' + action];
      }

      module.exports = getWrapBehavior;

      /***/
    },
    /* 85 */
    /***/function (module, exports) {

      /**
       * 封装事件，便于使用上下文this,和便于解除事件时使用
       * @protected
       * @param  {Object} obj   对象
       * @param  {String} action 事件名称
       * @return {Function}        返回事件处理函数
       */
      function wrapBehavior(obj, action) {
        if (obj['_wrap_' + action]) {
          return obj['_wrap_' + action];
        }
        var method = function method(e) {
          obj[action](e);
        };
        obj['_wrap_' + action] = method;
        return method;
      }

      module.exports = wrapBehavior;

      /***/
    },
    /* 86 */
    /***/function (module, exports, __webpack_require__) {

      var isNumber = __webpack_require__(87);
      var PRECISION = 0.00001; // numbers less than this is considered as 0
      var RADIAN = Math.PI / 180;
      var DEGREE = 180 / Math.PI;

      function toInteger(str, radix) {
        return parseInt(str, radix || 10);
      }

      var mathUtil = {
        clamp: function clamp(a, min, max) {
          if (a < min) {
            return min;
          } else if (a > max) {
            return max;
          }
          return a;
        },
        isDecimal: function isDecimal(num) {
          return isNumber(num) && num % 1 !== 0;
        },
        isEven: function isEven(num) {
          return isNumber(num) && num % 2 === 0;
        },

        isFinite: isFinite,
        isInteger: Number.isInteger ? Number.isInteger : function (num) {
          return isNumber(num) && num % 1 === 0;
        },
        isNaN: isNaN,
        isNegative: function isNegative(num) {
          return isNumber(num) && num < 0;
        },
        isNumberEqual: function isNumberEqual(a, b) {
          return Math.abs(a - b) < PRECISION;
        },
        isOdd: function isOdd(num) {
          return isNumber(num) && num % 2 !== 0;
        },
        isPositive: function isPositive(num) {
          return isNumber(num) && num > 0;
        },
        mod: function mod(n, m) {
          return (n % m + m) % m;
        },
        toFloat: function toFloat(str) {
          return parseFloat(str);
        },
        toDegree: function toDegree(radian) {
          return DEGREE * radian;
        },

        toInt: toInteger,
        toInteger: toInteger,
        toRadian: function toRadian(degree) {
          return RADIAN * degree;
        },
        fixedBase: function fixedBase(v, base) {
          var str = base.toString();
          var index = str.indexOf('.');
          if (index === -1) {
            return Math.round(v);
          }
          var length = str.substr(index + 1).length;
          if (length > 20) {
            length = 20;
          }
          return parseFloat(v.toFixed(length));
        }
      };

      module.exports = mathUtil;

      /***/
    },
    /* 87 */
    /***/function (module, exports, __webpack_require__) {

      /**
       * 判断是否数字
       * @return {Boolean} 是否数字
       */
      var isType = __webpack_require__(9);

      var isNumber = function isNumber(value) {
        return isType(value, 'Number');
      };
      module.exports = isNumber;

      /***/
    },
    /* 88 */
    /***/function (module, exports) {

      function toString(value) {
        return value.toString();
      }

      function upperCase(value) {
        return toString(value).toUpperCase();
      }

      function lowerCase(value) {
        return toString(value).toLowerCase();
      }

      var strUtil = {
        lc: lowerCase,
        lowerCase: lowerCase,
        lowerFirst: function lowerFirst(value) {
          value = toString(value);
          return lowerCase(value.charAt(0)) + value.substring(1);
        },

        uc: upperCase,
        upperCase: upperCase,
        upperFirst: function upperFirst(value) {
          value = toString(value);
          return upperCase(value.charAt(0)) + value.substring(1);
        }
      };

      module.exports = strUtil;

      /***/
    },
    /* 89 */
    /***/function (module, exports) {

      var _typeof2 = typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
      };

      var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
      };

      var toString = {}.toString;
      var objectProto = Object.prototype;
      var isType = function isType(value, type) {
        return toString.call(value) === '[object ' + type + ']';
      };

      function isNull(value) {
        return value === null;
      }
      function isUndefined(value) {
        return value === undefined;
      }
      function isObject(value) {
        /**
         * isObject({}) => true
         * isObject([1, 2, 3]) => true
         * isObject(Function) => true
         * isObject(null) => false
         */
        var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
        return value !== null && type === 'object' || type === 'function';
      }
      function isObjectLike(value) {
        /**
         * isObjectLike({}) => true
         * isObjectLike([1, 2, 3]) => true
         * isObjectLike(Function) => false
         * isObjectLike(null) => false
         */
        return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value !== null;
      }

      var checkType = {
        getType: function getType(value) {
          return toString.call(value).replace(/^\[object /, '').replace(/\]$/, '');
        },

        isArray: Array.isArray ? Array.isArray : function (value) {
          return isType(value, 'Array');
        },
        isArrayLike: function isArrayLike(value) {
          /**
           * isArrayLike([1, 2, 3]) => true
           * isArrayLike(document.body.children) => true
           * isArrayLike('abc') => true
           * isArrayLike(Function) => false
           */
          return value !== null && typeof value !== 'function' && isFinite(value.length);
        },

        // isFinite,
        isNil: function isNil(value) {
          /**
           * isNil(null) => true
           * isNil() => true
           */
          return isUndefined(value) || isNull(value);
        },

        isNull: isNull,
        isType: isType,
        isObject: isObject,
        isObjectLike: isObjectLike,
        isPlainObject: function isPlainObject(value) {
          /**
           * isObjectLike(new Foo) => false
           * isObjectLike([1, 2, 3]) => false
           * isObjectLike({ x: 0, y: 0 }) => true
           * isObjectLike(Object.create(null)) => true
           */
          if (!isObjectLike(value) || !isType(value, 'Object')) {
            return false;
          }
          if (Object.getPrototypeOf(value) === null) {
            return true;
          }
          var proto = value;
          while (Object.getPrototypeOf(proto) !== null) {
            proto = Object.getPrototypeOf(proto);
          }
          return Object.getPrototypeOf(value) === proto;
        },
        isPrototype: function isPrototype(value) {
          var Ctor = value && value.constructor;
          var proto = typeof Ctor === 'function' && Ctor.prototype || objectProto;
          return value === proto;
        },

        isUndefined: isUndefined
      };

      // common types
      ['Arguments', 'Boolean', 'Date', 'Error', 'Function', 'Number', 'RegExp', 'String'].forEach(function (type) {
        checkType['is' + type] = function (value) {
          return isType(value, type);
        };
      });

      module.exports = checkType;

      /***/
    },
    /* 90 */
    /***/function (module, exports) {

      var _typeof2 = typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
      };

      var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
      };

      var isObject = function isObject(value) {
        /**
         * isObject({}) => true
         * isObject([1, 2, 3]) => true
         * isObject(Function) => true
         * isObject(null) => false
         */
        var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
        return value !== null && type === 'object' || type === 'function';
      };

      module.exports = isObject;

      /***/
    },
    /* 91 */
    /***/function (module, exports, __webpack_require__) {

      var isFunction = __webpack_require__(13);
      var toArray = __webpack_require__(30);
      var mix = __webpack_require__(16);

      var augment = function augment(c) {
        var args = toArray(arguments);
        for (var i = 1; i < args.length; i++) {
          var obj = args[i];
          if (isFunction(obj)) {
            obj = obj.prototype;
          }
          mix(c.prototype, obj);
        }
      };

      module.exports = augment;

      /***/
    },
    /* 92 */
    /***/function (module, exports, __webpack_require__) {

      var _typeof2 = typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
      };

      var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
      };

      var isArray = __webpack_require__(11);

      var clone = function clone(obj) {
        if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' || obj === null) {
          return obj;
        }
        var rst = void 0;
        if (isArray(obj)) {
          rst = [];
          for (var i = 0, l = obj.length; i < l; i++) {
            if (_typeof(obj[i]) === 'object' && obj[i] != null) {
              rst[i] = clone(obj[i]);
            } else {
              rst[i] = obj[i];
            }
          }
        } else {
          rst = {};
          for (var k in obj) {
            if (_typeof(obj[k]) === 'object' && obj[k] != null) {
              rst[k] = clone(obj[k]);
            } else {
              rst[k] = obj[k];
            }
          }
        }

        return rst;
      };

      module.exports = clone;

      /***/
    },
    /* 93 */
    /***/function (module, exports, __webpack_require__) {

      var isPlainObject = __webpack_require__(31);
      var isArray = __webpack_require__(11);

      var MAX_MIX_LEVEL = 5;

      function _deepMix(dist, src, level, maxLevel) {
        level = level || 0;
        maxLevel = maxLevel || MAX_MIX_LEVEL;
        for (var key in src) {
          if (src.hasOwnProperty(key)) {
            var value = src[key];
            if (value !== null && isPlainObject(value)) {
              if (!isPlainObject(dist[key])) {
                dist[key] = {};
              }
              if (level < maxLevel) {
                _deepMix(dist[key], value, level + 1, maxLevel);
              } else {
                dist[key] = src[key];
              }
            } else if (isArray(value)) {
              dist[key] = [];
              dist[key] = dist[key].concat(value);
            } else if (value !== undefined) {
              dist[key] = value;
            }
          }
        }
      }

      var deepMix = function deepMix() {
        var args = new Array(arguments.length);
        var length = args.length;
        for (var i = 0; i < length; i++) {
          args[i] = arguments[i];
        }
        var rst = args[0];
        for (var _i = 1; _i < length; _i++) {
          _deepMix(rst, args[_i]);
        }
        return rst;
      };

      module.exports = deepMix;

      /***/
    },
    /* 94 */
    /***/function (module, exports, __webpack_require__) {

      var isFunction = __webpack_require__(13);
      var mix = __webpack_require__(16);

      var extend = function extend(subclass, superclass, overrides, staticOverrides) {
        // 如果只提供父类构造函数，则自动生成子类构造函数
        if (!isFunction(superclass)) {
          overrides = superclass;
          superclass = subclass;
          subclass = function subclass() {};
        }

        var create = Object.create ? function (proto, c) {
          return Object.create(proto, {
            constructor: {
              value: c
            }
          });
        } : function (proto, c) {
          function Tmp() {}
          Tmp.prototype = proto;
          var o = new Tmp();
          o.constructor = c;
          return o;
        };

        var superObj = create(superclass.prototype, subclass); // new superclass(),//实例化父类作为子类的prototype
        subclass.prototype = mix(superObj, subclass.prototype); // 指定子类的prototype
        subclass.superclass = create(superclass.prototype, superclass);
        mix(superObj, overrides);
        mix(subclass, staticOverrides);
        return subclass;
      };

      module.exports = extend;

      /***/
    },
    /* 95 */
    /***/function (module, exports, __webpack_require__) {

      var each = __webpack_require__(10);
      var isArrayLike = __webpack_require__(5);

      var filter = function filter(arr, func) {
        if (!isArrayLike(arr)) {
          return arr;
        }
        var result = [];
        each(arr, function (value, index) {
          if (func(value, index)) {
            result.push(value);
          }
        });
        return result;
      };

      module.exports = filter;

      /***/
    },
    /* 96 */
    /***/function (module, exports, __webpack_require__) {

      var groupToMap = __webpack_require__(33);

      var group = function group(data, condition) {
        if (!condition) {
          return [data];
        }
        var groups = groupToMap(data, condition);
        var array = [];
        for (var i in groups) {
          array.push(groups[i]);
        }
        return array;
      };

      module.exports = group;

      /***/
    },
    /* 97 */
    /***/function (module, exports, __webpack_require__) {

      var isArrayLike = __webpack_require__(5);

      var indexOf = function indexOf(arr, obj) {
        if (!isArrayLike(arr)) {
          return -1;
        }
        var m = Array.prototype.indexOf;
        if (m) {
          return m.call(arr, obj);
        }
        var index = -1;

        for (var i = 0; i < arr.length; i++) {
          if (arr[i] === obj) {
            index = i;
            break;
          }
        }
        return index;
      };

      module.exports = indexOf;

      /***/
    },
    /* 98 */
    /***/function (module, exports, __webpack_require__) {

      var isNil = __webpack_require__(99);
      var isArrayLike = __webpack_require__(5);
      var getType = __webpack_require__(100);
      var isPrototype = __webpack_require__(101);
      var hasOwnProperty = Object.prototype.hasOwnProperty;

      function isEmpty(value) {
        /**
         * isEmpty(null) => true
         * isEmpty() => true
         * isEmpty(true) => true
         * isEmpty(1) => true
         * isEmpty([1, 2, 3]) => false
         * isEmpty('abc') => false
         * isEmpty({ a: 1 }) => false
         */
        if (isNil(value)) {
          return true;
        }
        if (isArrayLike(value)) {
          return !value.length;
        }
        var type = getType(value);
        if (type === 'Map' || type === 'Set') {
          return !value.size;
        }
        if (isPrototype(value)) {
          return !Object.keys(value).length;
        }
        for (var key in value) {
          if (hasOwnProperty.call(value, key)) {
            return false;
          }
        }
        return true;
      }

      module.exports = isEmpty;

      /***/
    },
    /* 99 */
    /***/function (module, exports) {

      // isFinite,
      var isNil = function isNil(value) {
        /**
         * isNil(null) => true
         * isNil() => true
         */
        return value === null || value === undefined;
      };

      module.exports = isNil;

      /***/
    },
    /* 100 */
    /***/function (module, exports) {

      var toString = {}.toString;

      var getType = function getType(value) {
        return toString.call(value).replace(/^\[object /, '').replace(/\]$/, '');
      };

      module.exports = getType;

      /***/
    },
    /* 101 */
    /***/function (module, exports) {

      var objectProto = Object.prototype;
      var isPrototype = function isPrototype(value) {
        var Ctor = value && value.constructor;
        var proto = typeof Ctor === 'function' && Ctor.prototype || objectProto;
        return value === proto;
      };

      module.exports = isPrototype;

      /***/
    },
    /* 102 */
    /***/function (module, exports, __webpack_require__) {

      var isType = __webpack_require__(9);

      var isString = function isString(str) {
        return isType(str, 'String');
      };

      module.exports = isString;

      /***/
    },
    /* 103 */
    /***/function (module, exports, __webpack_require__) {

      var isFunction = __webpack_require__(13);
      var isEqual = __webpack_require__(35);
      /**
       * @param {*} value The value to compare.
       * @param {*} other The other value to compare.
       * @param {Function} [fn] The function to customize comparisons.
       * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
       * @example
       *
       * function isGreeting(value) {
       *   return /^h(?:i|ello)$/.test(value);
       * }
       *
       * function customizer(objValue, othValue) {
       *   if (isGreeting(objValue) && isGreeting(othValue)) {
       *     return true;
       *   }
       * }
       *
       * var array = ['hello', 'goodbye'];
       * var other = ['hi', 'goodbye'];
       *
       * _.isEqualWith(array, other, customizer);  // => true
       */

      var isEqualWith = function isEqualWith(value, other, fn) {
        if (!isFunction(fn)) {
          return isEqual(value, other);
        }
        return !!fn(value, other);
      };

      module.exports = isEqualWith;

      /***/
    },
    /* 104 */
    /***/function (module, exports, __webpack_require__) {

      var each = __webpack_require__(10);
      var isArrayLike = __webpack_require__(5);

      var map = function map(arr, func) {
        if (!isArrayLike(arr)) {
          return arr;
        }
        var result = [];
        each(arr, function (value, index) {
          result.push(func(value, index));
        });
        return result;
      };

      module.exports = map;

      /***/
    },
    /* 105 */
    /***/function (module, exports, __webpack_require__) {

      var each = __webpack_require__(10);
      var isPlaineObject = __webpack_require__(31);

      var hasOwnProperty = Object.prototype.hasOwnProperty;
      /**
       * Creates an object composed of the picked `object` properties.
       *
       * @param {Object} object The source object.
       * @param {...(string|string[])} [paths] The property paths to pick.
       * @returns {Object} Returns the new object.
       * @example
       *
       * var object = { 'a': 1, 'b': '2', 'c': 3 };
       * pick(object, ['a', 'c']);  // => { 'a': 1, 'c': 3 }
       */

      var pick = function pick(object, keys) {
        if (object === null || !isPlaineObject(object)) {
          return {};
        }
        var result = {};
        each(keys, function (key) {
          if (hasOwnProperty.call(object, key)) {
            result[key] = object[key];
          }
        });
        return result;
      };

      module.exports = pick;

      /***/
    },
    /* 106 */
    /***/function (module, exports) {

      function toString(value) {
        return value.toString();
      }

      module.exports = toString;

      /***/
    },
    /* 107 */
    /***/function (module, exports) {

      var uniqueId = function () {
        var map = {};
        return function (prefix) {
          prefix = prefix || 'g';
          if (!map[prefix]) {
            map[prefix] = 1;
          } else {
            map[prefix] += 1;
          }
          return prefix + map[prefix];
        };
      }();

      module.exports = uniqueId;

      /***/
    },
    /* 108 */
    /***/function (module, exports, __webpack_require__) {

      var Util = __webpack_require__(0);

      var ALIAS_ATTRS = ['strokeStyle', 'fillStyle', 'globalAlpha'];
      var CAPITALIZED_ATTRS_MAP = {
        r: 'R',
        opacity: 'Opacity',
        lineWidth: 'LineWidth',
        clip: 'Clip',
        stroke: 'Stroke',
        fill: 'Fill',
        strokeOpacity: 'Stroke',
        fillOpacity: 'Fill',
        x: 'X',
        y: 'Y',
        rx: 'Rx',
        ry: 'Ry',
        re: 'Re',
        rs: 'Rs',
        width: 'Width',
        height: 'Height',
        img: 'Img',
        x1: 'X1',
        x2: 'X2',
        y1: 'Y1',
        y2: 'Y2',
        points: 'Points',
        p1: 'P1',
        p2: 'P2',
        p3: 'P3',
        p4: 'P4',
        text: 'Text',
        radius: 'Radius',
        textAlign: 'TextAlign',
        textBaseline: 'TextBaseline',
        font: 'Font',
        fontSize: 'FontSize',
        fontStyle: 'FontStyle',
        fontVariant: 'FontVariant',
        fontWeight: 'FontWeight',
        fontFamily: 'FontFamily',
        clockwise: 'Clockwise',
        startAngle: 'StartAngle',
        endAngle: 'EndAngle',
        path: 'Path',
        outline: 'Outline',
        html: 'Html'
      };
      var SVG_ATTR_MAP = {
        opacity: 'opacity',
        clip: 'clip',
        stroke: 'stroke',
        fill: 'fill',
        strokeOpacity: 'stroke-opacity',
        fillOpacity: 'fill-opacity',
        strokeStyle: 'stroke',
        fillStyle: 'fill',
        x: 'x',
        y: 'y',
        r: 'r',
        rx: 'rx',
        ry: 'ry',
        re: 're',
        rs: 'rs',
        width: 'width',
        height: 'height',
        image: 'href',
        x1: 'x1',
        x2: 'x2',
        y1: 'y1',
        y2: 'y2',
        lineCap: 'stroke-linecap',
        lineJoin: 'stroke-linejoin',
        lineWidth: 'stroke-width',
        lineDash: 'stroke-dasharray',
        miterLimit: 'stroke-miterlimit',
        font: 'font',
        fontSize: 'font-size',
        fontStyle: 'font-style',
        fontVariant: 'font-variant',
        fontWeight: 'font-weight',
        fontFamily: 'font-family',
        startArrow: 'marker-start',
        endArrow: 'marker-end',
        preserveAspectRatio: 'preserveAspectRatio'
      };
      var ALIAS_ATTRS_MAP = {
        stroke: 'strokeStyle',
        fill: 'fillStyle',
        opacity: 'globalAlpha'
      };

      module.exports = {
        canFill: false,
        canStroke: false,
        initAttrs: function initAttrs(attrs) {
          this.__attrs = {
            opacity: 1,
            fillOpacity: 1,
            strokeOpacity: 1
          };
          this.attr(Util.assign(this.getDefaultAttrs(), attrs));
          return this;
        },
        getDefaultAttrs: function getDefaultAttrs() {
          return {};
        },

        /**
         * 设置或者设置属性，有以下 4 种情形：
         *   - name 不存在, 则返回属性集合
         *   - name 为字符串，value 为空，获取属性值
         *   - name 为字符串，value 不为空，设置属性值，返回 this
         *   - name 为键值对，value 为空，设置属性值
         *
         * @param  {String | Object} name  属性名
         * @param  {*} value 属性值
         * @return {*} 属性值
         */
        attr: function attr(name, value) {
          var self = this;
          if (arguments.length === 0) {
            return self.__attrs;
          }
          if (Util.isObject(name)) {
            for (var k in name) {
              if (ALIAS_ATTRS.indexOf(k) === -1) {
                var v = name[k];
                self._setAttr(k, v);
              }
            }
            if (self._afterSetAttrAll) {
              self._afterSetAttrAll(name);
            }
            // self.setSilent('box', null);
            self.clearBBox();
            return self;
          }
          if (arguments.length === 2) {
            self._setAttr(name, value);
            var m = '_afterSetAttr' + CAPITALIZED_ATTRS_MAP[name];
            if (CAPITALIZED_ATTRS_MAP[name] && self[m]) {
              self[m](value);
            }
            self.clearBBox();
            return self;
          }
          return self._getAttr(name);
        },
        clearBBox: function clearBBox() {
          this.setSilent('box', null);
        },
        _afterSetAttrAll: function _afterSetAttrAll() {},

        // 属性获取触发函数
        _getAttr: function _getAttr(name) {
          return this.__attrs[name];
        },

        // 属性设置触发函数
        _setAttr: function _setAttr(name, value) {
          var self = this;
          var el = self.get('el');

          if (name === 'clip') {
            self._setAttrClip(name, value);
            return;
          }
          self.__attrs[name] = value;
          if (typeof value === 'number' && isNaN(value)) {
            return;
          }
          if (self.get('destroyed')) {
            return;
          }
          if (name === 'transform' || name === 'rotate') {
            self._setAttrTrans(name, value);
          } else if (~name.indexOf('shadow')) {
            self._setAttrShadow(name, value);
          } else if (~['stroke', 'strokeStyle', 'fill', 'fillStyle'].indexOf(name) && el) {
            if (!value) {
              el.setAttribute(SVG_ATTR_MAP[name], 'none');
            } else if (/^[r,R,L,l]{1}[\s]*\(/.test(value.trim())) {
              self._setAttrGradients(name, value.trim());
            } else {
              el.setAttribute(SVG_ATTR_MAP[name], value);
            }
          } else if (~name.toLowerCase().indexOf('arrow')) {
            if (!value) {
              return self;
            }
            self._setAttrArrow(name, value);
          } else {
            // 先存好属性，然后对一些svg和canvas中不同的属性进行特判
            if (~['circle', 'ellipse', 'marker'].indexOf(self.type) && ~['x', 'y'].indexOf(name)) {
              /**
               * 本来考虑想写到对应图形里面的，但是x,y又是svg通用属性，这样会同时存在x，y, cx,cy
               * 如果在下面svgAttr设置的时候还是要特判，不如就在这边特殊处理一下吧
               */
              if (self.type !== 'marker' && typeof value === 'number') {
                el.setAttribute('c' + name, value);
              }
            } else {
              var svgAttr = SVG_ATTR_MAP[name];
              if (el && svgAttr) {
                el.setAttribute(svgAttr, value);
              }
              var alias = ALIAS_ATTRS_MAP[name];
              if (alias) {
                svgAttr = SVG_ATTR_MAP[alias];
                if (el && svgAttr) {
                  el.setAttribute(svgAttr, value);
                }
                self.__attrs[alias] = value;
              }
            }
          }
          return self;
        },
        hasFill: function hasFill() {
          return this.canFill && this.__attrs.fillStyle;
        },
        hasStroke: function hasStroke() {
          return this.canStroke && this.__attrs.strokeStyle;
        },
        _setAttrArrow: function _setAttrArrow(name, value) {
          var self = this;
          var el = self.get('el');
          var defs = self.get('defs');
          if (!defs) {
            var canvas = self.get('canvas');
            if (!canvas) {
              this._setAttrDependency(name, value);
              return this;
            }
            defs = canvas.get('defs');
          }
          name = SVG_ATTR_MAP[name];
          if (!name) {
            return this;
          }
          if (!value) {
            el.removeAttribute(name);
            return this;
          }
          var id = defs.find(name, { value: value, stroke: self.__attrs.stroke });
          if (!id) {
            id = defs.addArrow(name, value, self.__attrs.stroke);
          }
          self.__cfg[name] = id;
          self.get('el').setAttribute(name, 'url(#' + id + ')');
        },
        _setAttrShadow: function _setAttrShadow(name, value) {
          var attrs = this.__attrs;
          var filter = this.get('filter');
          var defs = this.get('defs');
          if (!value) {
            this.get('el').removeAttribute('filter');
            return this;
          }
          if (filter) {
            defs.findById(filter).update(name, value);
            return this;
          }
          if (!defs) {
            var canvas = this.get('canvas');
            if (!canvas) {
              this._setAttrDependency(name, value);
              return this;
            }
            defs = canvas.get('defs');
          }
          var cfg = {
            dx: attrs.shadowOffsetX,
            dy: attrs.shadowOffsetY,
            blur: attrs.shadowBlur,
            color: attrs.shadowColor
          };
          if (isNaN(Number(cfg.dx)) || isNaN(Number(cfg.dy))) {
            return this;
          }
          var id = defs.find('filter', cfg);
          if (!id) {
            id = defs.addShadow(cfg, this);
          }
          this.__cfg.filter = id;
          this.get('el').setAttribute('filter', 'url(#' + id + ')');
        },
        _setAttrGradients: function _setAttrGradients(name, value) {
          name = name.replace('Style', '');
          var defs = this.get('defs');
          if (!value) {
            this.get('el').removeAttribute('gradient');
            return this;
          }
          if (!defs) {
            var canvas = this.get('canvas');
            if (!canvas) {
              this._setAttrDependency(name, value);
              return this;
            }
            defs = canvas.get('defs');
          }
          var id = defs.find('gradient', value);
          if (!id) {
            id = defs.addGradient(value, this);
          }
          this.get('el').setAttribute(name, 'url(#' + id + ')');
        },
        _setAttrDependency: function _setAttrDependency(name, value) {
          var dependencies = this.get('dependencies');
          if (!dependencies) {
            dependencies = {};
          }
          dependencies[name] = value;
          this.__cfg.dependencies = dependencies;
          return this;
        },
        _setAttrClip: function _setAttrClip(name, value) {
          var defs = this.get('defs');
          var canvas = this.get('canvas');
          if (!value) {
            this.get('el').removeAttribute('clip-path');
            return this;
          }
          if (!defs) {
            var _canvas = this.get('canvas');
            if (!_canvas) {
              this._setAttrDependency(name, value);
              return this;
            }
            defs = _canvas.get('defs');
          }
          value.__cfg.canvas = canvas;
          var id = defs.addClip(value);
          this.get('el').setAttribute('clip-path', 'url(#' + id + ')');
        },
        _setAttrTrans: function _setAttrTrans(name, value) {
          var attrs = this.__attrs;
          if (!value) {
            this.get('el').removeAttribute('transform');
          }
          if (!attrs.matrix) {
            this.initTransform();
          }
          if (name === 'transform') {
            this.transform(value);
          } else {
            if (typeof attrs.x === 'undefined' || typeof attrs.y === 'undefined') {
              this._setAttrDependency(name, value);
              return this;
            }
            this.rotateAtStart(value);
          }
          return this;
        }
      };

      /***/
    },
    /* 109 */
    /***/function (module, exports, __webpack_require__) {

      var Util = __webpack_require__(0);
      var mat3 = __webpack_require__(2).mat3;
      var vec3 = __webpack_require__(2).vec3;

      // 是否未改变
      function isUnchanged(m) {
        return m[0] === 1 && m[1] === 0 && m[3] === 0 && m[4] === 1 && m[6] === 0 && m[7] === 0;
      }

      // 是否仅仅是scale
      function isScale(m) {
        return m[1] === 0 && m[3] === 0 && m[6] === 0 && m[7] === 0;
      }

      /* function multiple(m1, m2) {
        if (!isUnchanged(m2)) {
          if (isScale(m2)) {
            m1[0] *= m2[0];
            m1[4] *= m2[4];
          } else {
            mat3.multiply(m1, m1, m2);
            mat3.multiply(m1, m1, m2);
          }
        }
      }*/

      module.exports = {
        initTransform: function initTransform() {
          this.attr('matrix', [1, 0, 0, 0, 1, 0, 0, 0, 1]);
        },
        translate: function translate(tx, ty, perform) {
          var matrix = this.attr('matrix');
          mat3.translate(matrix, matrix, [tx, ty]);
          this.attr('matrix', matrix);
          if (arguments.length === 2 || perform) {
            this._performTransform();
          }
          return this;
        },
        rotate: function rotate(radian, perform) {
          var matrix = this.attr('matrix');
          if (Math.abs(radian) > Math.PI * 2) {
            radian = radian / 180 * Math.PI;
          }
          mat3.rotate(matrix, matrix, radian);
          this.attr('matrix', matrix);
          if (arguments.length === 1 || perform) {
            this._performTransform();
          }
          return this;
        },

        /**
         * 绕起始点旋转
         * @param  {Number} rotate 0～360
         */
        rotateAtStart: function rotateAtStart(rotate) {
          var x = this.attr('x');
          var y = this.attr('y');
          if (Math.abs(rotate) > Math.PI * 2) {
            rotate = rotate / 180 * Math.PI;
          }
          this.transform([['t', -x, -y], ['r', rotate], ['t', x, y]]);
        },
        scale: function scale(s1, s2, perform) {
          var matrix = this.attr('matrix');
          mat3.scale(matrix, matrix, [s1, s2]);
          this.attr('matrix', matrix);
          if (arguments.length === 2 || perform) {
            this._performTransform();
          }
          return this;
        },

        /**
         * 移动的到位置
         * @param  {Number} x 移动到x
         * @param  {Number} y 移动到y
         */
        move: function move(x, y) {
          var cx = this.get('x') || 0; // 当前的x
          var cy = this.get('y') || 0; // 当前的y
          this.translate(x - cx, y - cy);
          this.set('x', x);
          this.set('y', y);
        },
        _performTransform: function _performTransform() {
          var matrix = this.__attrs.matrix;
          var transform = [];
          for (var i = 0; i < 9; i += 3) {
            transform.push(matrix[i] + ',' + matrix[i + 1]);
          }
          var el = this.get('el');
          if (el) {
            el.setAttribute('transform', 'matrix(' + transform.join(',') + ')');
          }
        },
        transform: function transform(ts) {
          var self = this;
          var matrix = self.attr('matrix');
          Util.each(ts, function (t) {
            switch (t[0]) {
              case 't':
                self.translate(t[1], t[2], false);
                break;
              case 's':
                self.scale(t[1], t[2], false);
                break;
              case 'r':
                self.rotate(t[1], false);
                break;
              case 'm':
                self.attr('matrix', mat3.multiply([], matrix, t[1]));
                break;
              default:
                break;
            }
          });
          this._performTransform();
          return self;
        },
        setTransform: function setTransform(ts) {
          this.attr('matrix', [1, 0, 0, 0, 1, 0, 0, 0, 1]);
          return this.transform(ts);
        },
        getMatrix: function getMatrix() {
          return this.attr('matrix');
        },
        setMatrix: function setMatrix(m) {
          this.attr('matrix', m);
          this._performTransform();
          this.clearTotalMatrix();
          return this;
        },
        apply: function apply(v, root) {
          var m = void 0;
          if (root) {
            m = this._getMatrixByRoot(root);
          } else {
            m = this.attr('matrix');
          }
          vec3.transformMat3(v, v, m);
          return this;
        },
        invert: function invert(v) {
          var m = this.attr('matrix');
          // 单精屏幕下大多数矩阵没变化
          if (isScale(m)) {
            v[0] /= m[0];
            v[1] /= m[4];
          } else {
            var inm = mat3.invert([], m);
            if (inm) {
              vec3.transformMat3(v, v, inm);
            }
          }
          return this;
        },
        resetTransform: function resetTransform(context) {
          var mo = this.attr('matrix');
          // 不改变时
          if (!isUnchanged(mo)) {
            context.transform(mo[0], mo[1], mo[3], mo[4], mo[6], mo[7]);
          }
        }
      };

      /***/
    },
    /* 110 */
    /***/function (module, exports, __webpack_require__) {

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.sub = exports.mul = undefined;
      exports.create = create;
      exports.fromMat4 = fromMat4;
      exports.clone = clone;
      exports.copy = copy;
      exports.fromValues = fromValues;
      exports.set = set;
      exports.identity = identity;
      exports.transpose = transpose;
      exports.invert = invert;
      exports.adjoint = adjoint;
      exports.determinant = determinant;
      exports.multiply = multiply;
      exports.translate = translate;
      exports.rotate = rotate;
      exports.scale = scale;
      exports.fromTranslation = fromTranslation;
      exports.fromRotation = fromRotation;
      exports.fromScaling = fromScaling;
      exports.fromMat2d = fromMat2d;
      exports.fromQuat = fromQuat;
      exports.normalFromMat4 = normalFromMat4;
      exports.projection = projection;
      exports.str = str;
      exports.frob = frob;
      exports.add = add;
      exports.subtract = subtract;
      exports.multiplyScalar = multiplyScalar;
      exports.multiplyScalarAndAdd = multiplyScalarAndAdd;
      exports.exactEquals = exactEquals;
      exports.equals = equals;

      var _common = __webpack_require__(18);

      var glMatrix = _interopRequireWildcard(_common);

      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
          return obj;
        } else {
          var newObj = {};if (obj != null) {
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
            }
          }newObj.default = obj;return newObj;
        }
      }

      /**
       * 3x3 Matrix
       * @module mat3
       */

      /**
       * Creates a new identity mat3
       *
       * @returns {mat3} a new 3x3 matrix
       */
      function create() {
        var out = new glMatrix.ARRAY_TYPE(9);
        if (glMatrix.ARRAY_TYPE != Float32Array) {
          out[1] = 0;
          out[2] = 0;
          out[3] = 0;
          out[5] = 0;
          out[6] = 0;
          out[7] = 0;
        }
        out[0] = 1;
        out[4] = 1;
        out[8] = 1;
        return out;
      }

      /**
       * Copies the upper-left 3x3 values into the given mat3.
       *
       * @param {mat3} out the receiving 3x3 matrix
       * @param {mat4} a   the source 4x4 matrix
       * @returns {mat3} out
       */
      function fromMat4(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[4];
        out[4] = a[5];
        out[5] = a[6];
        out[6] = a[8];
        out[7] = a[9];
        out[8] = a[10];
        return out;
      }

      /**
       * Creates a new mat3 initialized with values from an existing matrix
       *
       * @param {mat3} a matrix to clone
       * @returns {mat3} a new 3x3 matrix
       */
      function clone(a) {
        var out = new glMatrix.ARRAY_TYPE(9);
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        out[4] = a[4];
        out[5] = a[5];
        out[6] = a[6];
        out[7] = a[7];
        out[8] = a[8];
        return out;
      }

      /**
       * Copy the values from one mat3 to another
       *
       * @param {mat3} out the receiving matrix
       * @param {mat3} a the source matrix
       * @returns {mat3} out
       */
      function copy(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        out[3] = a[3];
        out[4] = a[4];
        out[5] = a[5];
        out[6] = a[6];
        out[7] = a[7];
        out[8] = a[8];
        return out;
      }

      /**
       * Create a new mat3 with the given values
       *
       * @param {Number} m00 Component in column 0, row 0 position (index 0)
       * @param {Number} m01 Component in column 0, row 1 position (index 1)
       * @param {Number} m02 Component in column 0, row 2 position (index 2)
       * @param {Number} m10 Component in column 1, row 0 position (index 3)
       * @param {Number} m11 Component in column 1, row 1 position (index 4)
       * @param {Number} m12 Component in column 1, row 2 position (index 5)
       * @param {Number} m20 Component in column 2, row 0 position (index 6)
       * @param {Number} m21 Component in column 2, row 1 position (index 7)
       * @param {Number} m22 Component in column 2, row 2 position (index 8)
       * @returns {mat3} A new mat3
       */
      function fromValues(m00, m01, m02, m10, m11, m12, m20, m21, m22) {
        var out = new glMatrix.ARRAY_TYPE(9);
        out[0] = m00;
        out[1] = m01;
        out[2] = m02;
        out[3] = m10;
        out[4] = m11;
        out[5] = m12;
        out[6] = m20;
        out[7] = m21;
        out[8] = m22;
        return out;
      }

      /**
       * Set the components of a mat3 to the given values
       *
       * @param {mat3} out the receiving matrix
       * @param {Number} m00 Component in column 0, row 0 position (index 0)
       * @param {Number} m01 Component in column 0, row 1 position (index 1)
       * @param {Number} m02 Component in column 0, row 2 position (index 2)
       * @param {Number} m10 Component in column 1, row 0 position (index 3)
       * @param {Number} m11 Component in column 1, row 1 position (index 4)
       * @param {Number} m12 Component in column 1, row 2 position (index 5)
       * @param {Number} m20 Component in column 2, row 0 position (index 6)
       * @param {Number} m21 Component in column 2, row 1 position (index 7)
       * @param {Number} m22 Component in column 2, row 2 position (index 8)
       * @returns {mat3} out
       */
      function set(out, m00, m01, m02, m10, m11, m12, m20, m21, m22) {
        out[0] = m00;
        out[1] = m01;
        out[2] = m02;
        out[3] = m10;
        out[4] = m11;
        out[5] = m12;
        out[6] = m20;
        out[7] = m21;
        out[8] = m22;
        return out;
      }

      /**
       * Set a mat3 to the identity matrix
       *
       * @param {mat3} out the receiving matrix
       * @returns {mat3} out
       */
      function identity(out) {
        out[0] = 1;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 1;
        out[5] = 0;
        out[6] = 0;
        out[7] = 0;
        out[8] = 1;
        return out;
      }

      /**
       * Transpose the values of a mat3
       *
       * @param {mat3} out the receiving matrix
       * @param {mat3} a the source matrix
       * @returns {mat3} out
       */
      function transpose(out, a) {
        // If we are transposing ourselves we can skip a few steps but have to cache some values
        if (out === a) {
          var a01 = a[1],
              a02 = a[2],
              a12 = a[5];
          out[1] = a[3];
          out[2] = a[6];
          out[3] = a01;
          out[5] = a[7];
          out[6] = a02;
          out[7] = a12;
        } else {
          out[0] = a[0];
          out[1] = a[3];
          out[2] = a[6];
          out[3] = a[1];
          out[4] = a[4];
          out[5] = a[7];
          out[6] = a[2];
          out[7] = a[5];
          out[8] = a[8];
        }

        return out;
      }

      /**
       * Inverts a mat3
       *
       * @param {mat3} out the receiving matrix
       * @param {mat3} a the source matrix
       * @returns {mat3} out
       */
      function invert(out, a) {
        var a00 = a[0],
            a01 = a[1],
            a02 = a[2];
        var a10 = a[3],
            a11 = a[4],
            a12 = a[5];
        var a20 = a[6],
            a21 = a[7],
            a22 = a[8];

        var b01 = a22 * a11 - a12 * a21;
        var b11 = -a22 * a10 + a12 * a20;
        var b21 = a21 * a10 - a11 * a20;

        // Calculate the determinant
        var det = a00 * b01 + a01 * b11 + a02 * b21;

        if (!det) {
          return null;
        }
        det = 1.0 / det;

        out[0] = b01 * det;
        out[1] = (-a22 * a01 + a02 * a21) * det;
        out[2] = (a12 * a01 - a02 * a11) * det;
        out[3] = b11 * det;
        out[4] = (a22 * a00 - a02 * a20) * det;
        out[5] = (-a12 * a00 + a02 * a10) * det;
        out[6] = b21 * det;
        out[7] = (-a21 * a00 + a01 * a20) * det;
        out[8] = (a11 * a00 - a01 * a10) * det;
        return out;
      }

      /**
       * Calculates the adjugate of a mat3
       *
       * @param {mat3} out the receiving matrix
       * @param {mat3} a the source matrix
       * @returns {mat3} out
       */
      function adjoint(out, a) {
        var a00 = a[0],
            a01 = a[1],
            a02 = a[2];
        var a10 = a[3],
            a11 = a[4],
            a12 = a[5];
        var a20 = a[6],
            a21 = a[7],
            a22 = a[8];

        out[0] = a11 * a22 - a12 * a21;
        out[1] = a02 * a21 - a01 * a22;
        out[2] = a01 * a12 - a02 * a11;
        out[3] = a12 * a20 - a10 * a22;
        out[4] = a00 * a22 - a02 * a20;
        out[5] = a02 * a10 - a00 * a12;
        out[6] = a10 * a21 - a11 * a20;
        out[7] = a01 * a20 - a00 * a21;
        out[8] = a00 * a11 - a01 * a10;
        return out;
      }

      /**
       * Calculates the determinant of a mat3
       *
       * @param {mat3} a the source matrix
       * @returns {Number} determinant of a
       */
      function determinant(a) {
        var a00 = a[0],
            a01 = a[1],
            a02 = a[2];
        var a10 = a[3],
            a11 = a[4],
            a12 = a[5];
        var a20 = a[6],
            a21 = a[7],
            a22 = a[8];

        return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);
      }

      /**
       * Multiplies two mat3's
       *
       * @param {mat3} out the receiving matrix
       * @param {mat3} a the first operand
       * @param {mat3} b the second operand
       * @returns {mat3} out
       */
      function multiply(out, a, b) {
        var a00 = a[0],
            a01 = a[1],
            a02 = a[2];
        var a10 = a[3],
            a11 = a[4],
            a12 = a[5];
        var a20 = a[6],
            a21 = a[7],
            a22 = a[8];

        var b00 = b[0],
            b01 = b[1],
            b02 = b[2];
        var b10 = b[3],
            b11 = b[4],
            b12 = b[5];
        var b20 = b[6],
            b21 = b[7],
            b22 = b[8];

        out[0] = b00 * a00 + b01 * a10 + b02 * a20;
        out[1] = b00 * a01 + b01 * a11 + b02 * a21;
        out[2] = b00 * a02 + b01 * a12 + b02 * a22;

        out[3] = b10 * a00 + b11 * a10 + b12 * a20;
        out[4] = b10 * a01 + b11 * a11 + b12 * a21;
        out[5] = b10 * a02 + b11 * a12 + b12 * a22;

        out[6] = b20 * a00 + b21 * a10 + b22 * a20;
        out[7] = b20 * a01 + b21 * a11 + b22 * a21;
        out[8] = b20 * a02 + b21 * a12 + b22 * a22;
        return out;
      }

      /**
       * Translate a mat3 by the given vector
       *
       * @param {mat3} out the receiving matrix
       * @param {mat3} a the matrix to translate
       * @param {vec2} v vector to translate by
       * @returns {mat3} out
       */
      function translate(out, a, v) {
        var a00 = a[0],
            a01 = a[1],
            a02 = a[2],
            a10 = a[3],
            a11 = a[4],
            a12 = a[5],
            a20 = a[6],
            a21 = a[7],
            a22 = a[8],
            x = v[0],
            y = v[1];

        out[0] = a00;
        out[1] = a01;
        out[2] = a02;

        out[3] = a10;
        out[4] = a11;
        out[5] = a12;

        out[6] = x * a00 + y * a10 + a20;
        out[7] = x * a01 + y * a11 + a21;
        out[8] = x * a02 + y * a12 + a22;
        return out;
      }

      /**
       * Rotates a mat3 by the given angle
       *
       * @param {mat3} out the receiving matrix
       * @param {mat3} a the matrix to rotate
       * @param {Number} rad the angle to rotate the matrix by
       * @returns {mat3} out
       */
      function rotate(out, a, rad) {
        var a00 = a[0],
            a01 = a[1],
            a02 = a[2],
            a10 = a[3],
            a11 = a[4],
            a12 = a[5],
            a20 = a[6],
            a21 = a[7],
            a22 = a[8],
            s = Math.sin(rad),
            c = Math.cos(rad);

        out[0] = c * a00 + s * a10;
        out[1] = c * a01 + s * a11;
        out[2] = c * a02 + s * a12;

        out[3] = c * a10 - s * a00;
        out[4] = c * a11 - s * a01;
        out[5] = c * a12 - s * a02;

        out[6] = a20;
        out[7] = a21;
        out[8] = a22;
        return out;
      };

      /**
       * Scales the mat3 by the dimensions in the given vec2
       *
       * @param {mat3} out the receiving matrix
       * @param {mat3} a the matrix to rotate
       * @param {vec2} v the vec2 to scale the matrix by
       * @returns {mat3} out
       **/
      function scale(out, a, v) {
        var x = v[0],
            y = v[1];

        out[0] = x * a[0];
        out[1] = x * a[1];
        out[2] = x * a[2];

        out[3] = y * a[3];
        out[4] = y * a[4];
        out[5] = y * a[5];

        out[6] = a[6];
        out[7] = a[7];
        out[8] = a[8];
        return out;
      }

      /**
       * Creates a matrix from a vector translation
       * This is equivalent to (but much faster than):
       *
       *     mat3.identity(dest);
       *     mat3.translate(dest, dest, vec);
       *
       * @param {mat3} out mat3 receiving operation result
       * @param {vec2} v Translation vector
       * @returns {mat3} out
       */
      function fromTranslation(out, v) {
        out[0] = 1;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = 1;
        out[5] = 0;
        out[6] = v[0];
        out[7] = v[1];
        out[8] = 1;
        return out;
      }

      /**
       * Creates a matrix from a given angle
       * This is equivalent to (but much faster than):
       *
       *     mat3.identity(dest);
       *     mat3.rotate(dest, dest, rad);
       *
       * @param {mat3} out mat3 receiving operation result
       * @param {Number} rad the angle to rotate the matrix by
       * @returns {mat3} out
       */
      function fromRotation(out, rad) {
        var s = Math.sin(rad),
            c = Math.cos(rad);

        out[0] = c;
        out[1] = s;
        out[2] = 0;

        out[3] = -s;
        out[4] = c;
        out[5] = 0;

        out[6] = 0;
        out[7] = 0;
        out[8] = 1;
        return out;
      }

      /**
       * Creates a matrix from a vector scaling
       * This is equivalent to (but much faster than):
       *
       *     mat3.identity(dest);
       *     mat3.scale(dest, dest, vec);
       *
       * @param {mat3} out mat3 receiving operation result
       * @param {vec2} v Scaling vector
       * @returns {mat3} out
       */
      function fromScaling(out, v) {
        out[0] = v[0];
        out[1] = 0;
        out[2] = 0;

        out[3] = 0;
        out[4] = v[1];
        out[5] = 0;

        out[6] = 0;
        out[7] = 0;
        out[8] = 1;
        return out;
      }

      /**
       * Copies the values from a mat2d into a mat3
       *
       * @param {mat3} out the receiving matrix
       * @param {mat2d} a the matrix to copy
       * @returns {mat3} out
       **/
      function fromMat2d(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = 0;

        out[3] = a[2];
        out[4] = a[3];
        out[5] = 0;

        out[6] = a[4];
        out[7] = a[5];
        out[8] = 1;
        return out;
      }

      /**
      * Calculates a 3x3 matrix from the given quaternion
      *
      * @param {mat3} out mat3 receiving operation result
      * @param {quat} q Quaternion to create matrix from
      *
      * @returns {mat3} out
      */
      function fromQuat(out, q) {
        var x = q[0],
            y = q[1],
            z = q[2],
            w = q[3];
        var x2 = x + x;
        var y2 = y + y;
        var z2 = z + z;

        var xx = x * x2;
        var yx = y * x2;
        var yy = y * y2;
        var zx = z * x2;
        var zy = z * y2;
        var zz = z * z2;
        var wx = w * x2;
        var wy = w * y2;
        var wz = w * z2;

        out[0] = 1 - yy - zz;
        out[3] = yx - wz;
        out[6] = zx + wy;

        out[1] = yx + wz;
        out[4] = 1 - xx - zz;
        out[7] = zy - wx;

        out[2] = zx - wy;
        out[5] = zy + wx;
        out[8] = 1 - xx - yy;

        return out;
      }

      /**
      * Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
      *
      * @param {mat3} out mat3 receiving operation result
      * @param {mat4} a Mat4 to derive the normal matrix from
      *
      * @returns {mat3} out
      */
      function normalFromMat4(out, a) {
        var a00 = a[0],
            a01 = a[1],
            a02 = a[2],
            a03 = a[3];
        var a10 = a[4],
            a11 = a[5],
            a12 = a[6],
            a13 = a[7];
        var a20 = a[8],
            a21 = a[9],
            a22 = a[10],
            a23 = a[11];
        var a30 = a[12],
            a31 = a[13],
            a32 = a[14],
            a33 = a[15];

        var b00 = a00 * a11 - a01 * a10;
        var b01 = a00 * a12 - a02 * a10;
        var b02 = a00 * a13 - a03 * a10;
        var b03 = a01 * a12 - a02 * a11;
        var b04 = a01 * a13 - a03 * a11;
        var b05 = a02 * a13 - a03 * a12;
        var b06 = a20 * a31 - a21 * a30;
        var b07 = a20 * a32 - a22 * a30;
        var b08 = a20 * a33 - a23 * a30;
        var b09 = a21 * a32 - a22 * a31;
        var b10 = a21 * a33 - a23 * a31;
        var b11 = a22 * a33 - a23 * a32;

        // Calculate the determinant
        var det = b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;

        if (!det) {
          return null;
        }
        det = 1.0 / det;

        out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;
        out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;
        out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;

        out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;
        out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;
        out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;

        out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;
        out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;
        out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;

        return out;
      }

      /**
       * Generates a 2D projection matrix with the given bounds
       *
       * @param {mat3} out mat3 frustum matrix will be written into
       * @param {number} width Width of your gl context
       * @param {number} height Height of gl context
       * @returns {mat3} out
       */
      function projection(out, width, height) {
        out[0] = 2 / width;
        out[1] = 0;
        out[2] = 0;
        out[3] = 0;
        out[4] = -2 / height;
        out[5] = 0;
        out[6] = -1;
        out[7] = 1;
        out[8] = 1;
        return out;
      }

      /**
       * Returns a string representation of a mat3
       *
       * @param {mat3} a matrix to represent as a string
       * @returns {String} string representation of the matrix
       */
      function str(a) {
        return 'mat3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' + a[8] + ')';
      }

      /**
       * Returns Frobenius norm of a mat3
       *
       * @param {mat3} a the matrix to calculate Frobenius norm of
       * @returns {Number} Frobenius norm
       */
      function frob(a) {
        return Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2) + Math.pow(a[3], 2) + Math.pow(a[4], 2) + Math.pow(a[5], 2) + Math.pow(a[6], 2) + Math.pow(a[7], 2) + Math.pow(a[8], 2));
      }

      /**
       * Adds two mat3's
       *
       * @param {mat3} out the receiving matrix
       * @param {mat3} a the first operand
       * @param {mat3} b the second operand
       * @returns {mat3} out
       */
      function add(out, a, b) {
        out[0] = a[0] + b[0];
        out[1] = a[1] + b[1];
        out[2] = a[2] + b[2];
        out[3] = a[3] + b[3];
        out[4] = a[4] + b[4];
        out[5] = a[5] + b[5];
        out[6] = a[6] + b[6];
        out[7] = a[7] + b[7];
        out[8] = a[8] + b[8];
        return out;
      }

      /**
       * Subtracts matrix b from matrix a
       *
       * @param {mat3} out the receiving matrix
       * @param {mat3} a the first operand
       * @param {mat3} b the second operand
       * @returns {mat3} out
       */
      function subtract(out, a, b) {
        out[0] = a[0] - b[0];
        out[1] = a[1] - b[1];
        out[2] = a[2] - b[2];
        out[3] = a[3] - b[3];
        out[4] = a[4] - b[4];
        out[5] = a[5] - b[5];
        out[6] = a[6] - b[6];
        out[7] = a[7] - b[7];
        out[8] = a[8] - b[8];
        return out;
      }

      /**
       * Multiply each element of the matrix by a scalar.
       *
       * @param {mat3} out the receiving matrix
       * @param {mat3} a the matrix to scale
       * @param {Number} b amount to scale the matrix's elements by
       * @returns {mat3} out
       */
      function multiplyScalar(out, a, b) {
        out[0] = a[0] * b;
        out[1] = a[1] * b;
        out[2] = a[2] * b;
        out[3] = a[3] * b;
        out[4] = a[4] * b;
        out[5] = a[5] * b;
        out[6] = a[6] * b;
        out[7] = a[7] * b;
        out[8] = a[8] * b;
        return out;
      }

      /**
       * Adds two mat3's after multiplying each element of the second operand by a scalar value.
       *
       * @param {mat3} out the receiving vector
       * @param {mat3} a the first operand
       * @param {mat3} b the second operand
       * @param {Number} scale the amount to scale b's elements by before adding
       * @returns {mat3} out
       */
      function multiplyScalarAndAdd(out, a, b, scale) {
        out[0] = a[0] + b[0] * scale;
        out[1] = a[1] + b[1] * scale;
        out[2] = a[2] + b[2] * scale;
        out[3] = a[3] + b[3] * scale;
        out[4] = a[4] + b[4] * scale;
        out[5] = a[5] + b[5] * scale;
        out[6] = a[6] + b[6] * scale;
        out[7] = a[7] + b[7] * scale;
        out[8] = a[8] + b[8] * scale;
        return out;
      }

      /**
       * Returns whether or not the matrices have exactly the same elements in the same position (when compared with ===)
       *
       * @param {mat3} a The first matrix.
       * @param {mat3} b The second matrix.
       * @returns {Boolean} True if the matrices are equal, false otherwise.
       */
      function exactEquals(a, b) {
        return a[0] === b[0] && a[1] === b[1] && a[2] === b[2] && a[3] === b[3] && a[4] === b[4] && a[5] === b[5] && a[6] === b[6] && a[7] === b[7] && a[8] === b[8];
      }

      /**
       * Returns whether or not the matrices have approximately the same elements in the same position.
       *
       * @param {mat3} a The first matrix.
       * @param {mat3} b The second matrix.
       * @returns {Boolean} True if the matrices are equal, false otherwise.
       */
      function equals(a, b) {
        var a0 = a[0],
            a1 = a[1],
            a2 = a[2],
            a3 = a[3],
            a4 = a[4],
            a5 = a[5],
            a6 = a[6],
            a7 = a[7],
            a8 = a[8];
        var b0 = b[0],
            b1 = b[1],
            b2 = b[2],
            b3 = b[3],
            b4 = b[4],
            b5 = b[5],
            b6 = b[6],
            b7 = b[7],
            b8 = b[8];
        return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2)) && Math.abs(a3 - b3) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a3), Math.abs(b3)) && Math.abs(a4 - b4) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a4), Math.abs(b4)) && Math.abs(a5 - b5) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a5), Math.abs(b5)) && Math.abs(a6 - b6) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a6), Math.abs(b6)) && Math.abs(a7 - b7) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a7), Math.abs(b7)) && Math.abs(a8 - b8) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a8), Math.abs(b8));
      }

      /**
       * Alias for {@link mat3.multiply}
       * @function
       */
      var mul = exports.mul = multiply;

      /**
       * Alias for {@link mat3.subtract}
       * @function
       */
      var sub = exports.sub = subtract;

      /***/
    },
    /* 111 */
    /***/function (module, exports, __webpack_require__) {

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.forEach = exports.sqrLen = exports.len = exports.sqrDist = exports.dist = exports.div = exports.mul = exports.sub = undefined;
      exports.create = create;
      exports.clone = clone;
      exports.length = length;
      exports.fromValues = fromValues;
      exports.copy = copy;
      exports.set = set;
      exports.add = add;
      exports.subtract = subtract;
      exports.multiply = multiply;
      exports.divide = divide;
      exports.ceil = ceil;
      exports.floor = floor;
      exports.min = min;
      exports.max = max;
      exports.round = round;
      exports.scale = scale;
      exports.scaleAndAdd = scaleAndAdd;
      exports.distance = distance;
      exports.squaredDistance = squaredDistance;
      exports.squaredLength = squaredLength;
      exports.negate = negate;
      exports.inverse = inverse;
      exports.normalize = normalize;
      exports.dot = dot;
      exports.cross = cross;
      exports.lerp = lerp;
      exports.hermite = hermite;
      exports.bezier = bezier;
      exports.random = random;
      exports.transformMat4 = transformMat4;
      exports.transformMat3 = transformMat3;
      exports.transformQuat = transformQuat;
      exports.rotateX = rotateX;
      exports.rotateY = rotateY;
      exports.rotateZ = rotateZ;
      exports.angle = angle;
      exports.str = str;
      exports.exactEquals = exactEquals;
      exports.equals = equals;

      var _common = __webpack_require__(18);

      var glMatrix = _interopRequireWildcard(_common);

      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
          return obj;
        } else {
          var newObj = {};if (obj != null) {
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
            }
          }newObj.default = obj;return newObj;
        }
      }

      /**
       * 3 Dimensional Vector
       * @module vec3
       */

      /**
       * Creates a new, empty vec3
       *
       * @returns {vec3} a new 3D vector
       */
      function create() {
        var out = new glMatrix.ARRAY_TYPE(3);
        if (glMatrix.ARRAY_TYPE != Float32Array) {
          out[0] = 0;
          out[1] = 0;
          out[2] = 0;
        }
        return out;
      }

      /**
       * Creates a new vec3 initialized with values from an existing vector
       *
       * @param {vec3} a vector to clone
       * @returns {vec3} a new 3D vector
       */
      function clone(a) {
        var out = new glMatrix.ARRAY_TYPE(3);
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        return out;
      }

      /**
       * Calculates the length of a vec3
       *
       * @param {vec3} a vector to calculate length of
       * @returns {Number} length of a
       */
      function length(a) {
        var x = a[0];
        var y = a[1];
        var z = a[2];
        return Math.sqrt(x * x + y * y + z * z);
      }

      /**
       * Creates a new vec3 initialized with the given values
       *
       * @param {Number} x X component
       * @param {Number} y Y component
       * @param {Number} z Z component
       * @returns {vec3} a new 3D vector
       */
      function fromValues(x, y, z) {
        var out = new glMatrix.ARRAY_TYPE(3);
        out[0] = x;
        out[1] = y;
        out[2] = z;
        return out;
      }

      /**
       * Copy the values from one vec3 to another
       *
       * @param {vec3} out the receiving vector
       * @param {vec3} a the source vector
       * @returns {vec3} out
       */
      function copy(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        out[2] = a[2];
        return out;
      }

      /**
       * Set the components of a vec3 to the given values
       *
       * @param {vec3} out the receiving vector
       * @param {Number} x X component
       * @param {Number} y Y component
       * @param {Number} z Z component
       * @returns {vec3} out
       */
      function set(out, x, y, z) {
        out[0] = x;
        out[1] = y;
        out[2] = z;
        return out;
      }

      /**
       * Adds two vec3's
       *
       * @param {vec3} out the receiving vector
       * @param {vec3} a the first operand
       * @param {vec3} b the second operand
       * @returns {vec3} out
       */
      function add(out, a, b) {
        out[0] = a[0] + b[0];
        out[1] = a[1] + b[1];
        out[2] = a[2] + b[2];
        return out;
      }

      /**
       * Subtracts vector b from vector a
       *
       * @param {vec3} out the receiving vector
       * @param {vec3} a the first operand
       * @param {vec3} b the second operand
       * @returns {vec3} out
       */
      function subtract(out, a, b) {
        out[0] = a[0] - b[0];
        out[1] = a[1] - b[1];
        out[2] = a[2] - b[2];
        return out;
      }

      /**
       * Multiplies two vec3's
       *
       * @param {vec3} out the receiving vector
       * @param {vec3} a the first operand
       * @param {vec3} b the second operand
       * @returns {vec3} out
       */
      function multiply(out, a, b) {
        out[0] = a[0] * b[0];
        out[1] = a[1] * b[1];
        out[2] = a[2] * b[2];
        return out;
      }

      /**
       * Divides two vec3's
       *
       * @param {vec3} out the receiving vector
       * @param {vec3} a the first operand
       * @param {vec3} b the second operand
       * @returns {vec3} out
       */
      function divide(out, a, b) {
        out[0] = a[0] / b[0];
        out[1] = a[1] / b[1];
        out[2] = a[2] / b[2];
        return out;
      }

      /**
       * Math.ceil the components of a vec3
       *
       * @param {vec3} out the receiving vector
       * @param {vec3} a vector to ceil
       * @returns {vec3} out
       */
      function ceil(out, a) {
        out[0] = Math.ceil(a[0]);
        out[1] = Math.ceil(a[1]);
        out[2] = Math.ceil(a[2]);
        return out;
      }

      /**
       * Math.floor the components of a vec3
       *
       * @param {vec3} out the receiving vector
       * @param {vec3} a vector to floor
       * @returns {vec3} out
       */
      function floor(out, a) {
        out[0] = Math.floor(a[0]);
        out[1] = Math.floor(a[1]);
        out[2] = Math.floor(a[2]);
        return out;
      }

      /**
       * Returns the minimum of two vec3's
       *
       * @param {vec3} out the receiving vector
       * @param {vec3} a the first operand
       * @param {vec3} b the second operand
       * @returns {vec3} out
       */
      function min(out, a, b) {
        out[0] = Math.min(a[0], b[0]);
        out[1] = Math.min(a[1], b[1]);
        out[2] = Math.min(a[2], b[2]);
        return out;
      }

      /**
       * Returns the maximum of two vec3's
       *
       * @param {vec3} out the receiving vector
       * @param {vec3} a the first operand
       * @param {vec3} b the second operand
       * @returns {vec3} out
       */
      function max(out, a, b) {
        out[0] = Math.max(a[0], b[0]);
        out[1] = Math.max(a[1], b[1]);
        out[2] = Math.max(a[2], b[2]);
        return out;
      }

      /**
       * Math.round the components of a vec3
       *
       * @param {vec3} out the receiving vector
       * @param {vec3} a vector to round
       * @returns {vec3} out
       */
      function round(out, a) {
        out[0] = Math.round(a[0]);
        out[1] = Math.round(a[1]);
        out[2] = Math.round(a[2]);
        return out;
      }

      /**
       * Scales a vec3 by a scalar number
       *
       * @param {vec3} out the receiving vector
       * @param {vec3} a the vector to scale
       * @param {Number} b amount to scale the vector by
       * @returns {vec3} out
       */
      function scale(out, a, b) {
        out[0] = a[0] * b;
        out[1] = a[1] * b;
        out[2] = a[2] * b;
        return out;
      }

      /**
       * Adds two vec3's after scaling the second operand by a scalar value
       *
       * @param {vec3} out the receiving vector
       * @param {vec3} a the first operand
       * @param {vec3} b the second operand
       * @param {Number} scale the amount to scale b by before adding
       * @returns {vec3} out
       */
      function scaleAndAdd(out, a, b, scale) {
        out[0] = a[0] + b[0] * scale;
        out[1] = a[1] + b[1] * scale;
        out[2] = a[2] + b[2] * scale;
        return out;
      }

      /**
       * Calculates the euclidian distance between two vec3's
       *
       * @param {vec3} a the first operand
       * @param {vec3} b the second operand
       * @returns {Number} distance between a and b
       */
      function distance(a, b) {
        var x = b[0] - a[0];
        var y = b[1] - a[1];
        var z = b[2] - a[2];
        return Math.sqrt(x * x + y * y + z * z);
      }

      /**
       * Calculates the squared euclidian distance between two vec3's
       *
       * @param {vec3} a the first operand
       * @param {vec3} b the second operand
       * @returns {Number} squared distance between a and b
       */
      function squaredDistance(a, b) {
        var x = b[0] - a[0];
        var y = b[1] - a[1];
        var z = b[2] - a[2];
        return x * x + y * y + z * z;
      }

      /**
       * Calculates the squared length of a vec3
       *
       * @param {vec3} a vector to calculate squared length of
       * @returns {Number} squared length of a
       */
      function squaredLength(a) {
        var x = a[0];
        var y = a[1];
        var z = a[2];
        return x * x + y * y + z * z;
      }

      /**
       * Negates the components of a vec3
       *
       * @param {vec3} out the receiving vector
       * @param {vec3} a vector to negate
       * @returns {vec3} out
       */
      function negate(out, a) {
        out[0] = -a[0];
        out[1] = -a[1];
        out[2] = -a[2];
        return out;
      }

      /**
       * Returns the inverse of the components of a vec3
       *
       * @param {vec3} out the receiving vector
       * @param {vec3} a vector to invert
       * @returns {vec3} out
       */
      function inverse(out, a) {
        out[0] = 1.0 / a[0];
        out[1] = 1.0 / a[1];
        out[2] = 1.0 / a[2];
        return out;
      }

      /**
       * Normalize a vec3
       *
       * @param {vec3} out the receiving vector
       * @param {vec3} a vector to normalize
       * @returns {vec3} out
       */
      function normalize(out, a) {
        var x = a[0];
        var y = a[1];
        var z = a[2];
        var len = x * x + y * y + z * z;
        if (len > 0) {
          //TODO: evaluate use of glm_invsqrt here?
          len = 1 / Math.sqrt(len);
          out[0] = a[0] * len;
          out[1] = a[1] * len;
          out[2] = a[2] * len;
        }
        return out;
      }

      /**
       * Calculates the dot product of two vec3's
       *
       * @param {vec3} a the first operand
       * @param {vec3} b the second operand
       * @returns {Number} dot product of a and b
       */
      function dot(a, b) {
        return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
      }

      /**
       * Computes the cross product of two vec3's
       *
       * @param {vec3} out the receiving vector
       * @param {vec3} a the first operand
       * @param {vec3} b the second operand
       * @returns {vec3} out
       */
      function cross(out, a, b) {
        var ax = a[0],
            ay = a[1],
            az = a[2];
        var bx = b[0],
            by = b[1],
            bz = b[2];

        out[0] = ay * bz - az * by;
        out[1] = az * bx - ax * bz;
        out[2] = ax * by - ay * bx;
        return out;
      }

      /**
       * Performs a linear interpolation between two vec3's
       *
       * @param {vec3} out the receiving vector
       * @param {vec3} a the first operand
       * @param {vec3} b the second operand
       * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
       * @returns {vec3} out
       */
      function lerp(out, a, b, t) {
        var ax = a[0];
        var ay = a[1];
        var az = a[2];
        out[0] = ax + t * (b[0] - ax);
        out[1] = ay + t * (b[1] - ay);
        out[2] = az + t * (b[2] - az);
        return out;
      }

      /**
       * Performs a hermite interpolation with two control points
       *
       * @param {vec3} out the receiving vector
       * @param {vec3} a the first operand
       * @param {vec3} b the second operand
       * @param {vec3} c the third operand
       * @param {vec3} d the fourth operand
       * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
       * @returns {vec3} out
       */
      function hermite(out, a, b, c, d, t) {
        var factorTimes2 = t * t;
        var factor1 = factorTimes2 * (2 * t - 3) + 1;
        var factor2 = factorTimes2 * (t - 2) + t;
        var factor3 = factorTimes2 * (t - 1);
        var factor4 = factorTimes2 * (3 - 2 * t);

        out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
        out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
        out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;

        return out;
      }

      /**
       * Performs a bezier interpolation with two control points
       *
       * @param {vec3} out the receiving vector
       * @param {vec3} a the first operand
       * @param {vec3} b the second operand
       * @param {vec3} c the third operand
       * @param {vec3} d the fourth operand
       * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
       * @returns {vec3} out
       */
      function bezier(out, a, b, c, d, t) {
        var inverseFactor = 1 - t;
        var inverseFactorTimesTwo = inverseFactor * inverseFactor;
        var factorTimes2 = t * t;
        var factor1 = inverseFactorTimesTwo * inverseFactor;
        var factor2 = 3 * t * inverseFactorTimesTwo;
        var factor3 = 3 * factorTimes2 * inverseFactor;
        var factor4 = factorTimes2 * t;

        out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;
        out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;
        out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;

        return out;
      }

      /**
       * Generates a random vector with the given scale
       *
       * @param {vec3} out the receiving vector
       * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
       * @returns {vec3} out
       */
      function random(out, scale) {
        scale = scale || 1.0;

        var r = glMatrix.RANDOM() * 2.0 * Math.PI;
        var z = glMatrix.RANDOM() * 2.0 - 1.0;
        var zScale = Math.sqrt(1.0 - z * z) * scale;

        out[0] = Math.cos(r) * zScale;
        out[1] = Math.sin(r) * zScale;
        out[2] = z * scale;
        return out;
      }

      /**
       * Transforms the vec3 with a mat4.
       * 4th vector component is implicitly '1'
       *
       * @param {vec3} out the receiving vector
       * @param {vec3} a the vector to transform
       * @param {mat4} m matrix to transform with
       * @returns {vec3} out
       */
      function transformMat4(out, a, m) {
        var x = a[0],
            y = a[1],
            z = a[2];
        var w = m[3] * x + m[7] * y + m[11] * z + m[15];
        w = w || 1.0;
        out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;
        out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;
        out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;
        return out;
      }

      /**
       * Transforms the vec3 with a mat3.
       *
       * @param {vec3} out the receiving vector
       * @param {vec3} a the vector to transform
       * @param {mat3} m the 3x3 matrix to transform with
       * @returns {vec3} out
       */
      function transformMat3(out, a, m) {
        var x = a[0],
            y = a[1],
            z = a[2];
        out[0] = x * m[0] + y * m[3] + z * m[6];
        out[1] = x * m[1] + y * m[4] + z * m[7];
        out[2] = x * m[2] + y * m[5] + z * m[8];
        return out;
      }

      /**
       * Transforms the vec3 with a quat
       * Can also be used for dual quaternions. (Multiply it with the real part)
       *
       * @param {vec3} out the receiving vector
       * @param {vec3} a the vector to transform
       * @param {quat} q quaternion to transform with
       * @returns {vec3} out
       */
      function transformQuat(out, a, q) {
        // benchmarks: https://jsperf.com/quaternion-transform-vec3-implementations-fixed
        var qx = q[0],
            qy = q[1],
            qz = q[2],
            qw = q[3];
        var x = a[0],
            y = a[1],
            z = a[2];
        // var qvec = [qx, qy, qz];
        // var uv = vec3.cross([], qvec, a);
        var uvx = qy * z - qz * y,
            uvy = qz * x - qx * z,
            uvz = qx * y - qy * x;
        // var uuv = vec3.cross([], qvec, uv);
        var uuvx = qy * uvz - qz * uvy,
            uuvy = qz * uvx - qx * uvz,
            uuvz = qx * uvy - qy * uvx;
        // vec3.scale(uv, uv, 2 * w);
        var w2 = qw * 2;
        uvx *= w2;
        uvy *= w2;
        uvz *= w2;
        // vec3.scale(uuv, uuv, 2);
        uuvx *= 2;
        uuvy *= 2;
        uuvz *= 2;
        // return vec3.add(out, a, vec3.add(out, uv, uuv));
        out[0] = x + uvx + uuvx;
        out[1] = y + uvy + uuvy;
        out[2] = z + uvz + uuvz;
        return out;
      }

      /**
       * Rotate a 3D vector around the x-axis
       * @param {vec3} out The receiving vec3
       * @param {vec3} a The vec3 point to rotate
       * @param {vec3} b The origin of the rotation
       * @param {Number} c The angle of rotation
       * @returns {vec3} out
       */
      function rotateX(out, a, b, c) {
        var p = [],
            r = [];
        //Translate point to the origin
        p[0] = a[0] - b[0];
        p[1] = a[1] - b[1];
        p[2] = a[2] - b[2];

        //perform rotation
        r[0] = p[0];
        r[1] = p[1] * Math.cos(c) - p[2] * Math.sin(c);
        r[2] = p[1] * Math.sin(c) + p[2] * Math.cos(c);

        //translate to correct position
        out[0] = r[0] + b[0];
        out[1] = r[1] + b[1];
        out[2] = r[2] + b[2];

        return out;
      }

      /**
       * Rotate a 3D vector around the y-axis
       * @param {vec3} out The receiving vec3
       * @param {vec3} a The vec3 point to rotate
       * @param {vec3} b The origin of the rotation
       * @param {Number} c The angle of rotation
       * @returns {vec3} out
       */
      function rotateY(out, a, b, c) {
        var p = [],
            r = [];
        //Translate point to the origin
        p[0] = a[0] - b[0];
        p[1] = a[1] - b[1];
        p[2] = a[2] - b[2];

        //perform rotation
        r[0] = p[2] * Math.sin(c) + p[0] * Math.cos(c);
        r[1] = p[1];
        r[2] = p[2] * Math.cos(c) - p[0] * Math.sin(c);

        //translate to correct position
        out[0] = r[0] + b[0];
        out[1] = r[1] + b[1];
        out[2] = r[2] + b[2];

        return out;
      }

      /**
       * Rotate a 3D vector around the z-axis
       * @param {vec3} out The receiving vec3
       * @param {vec3} a The vec3 point to rotate
       * @param {vec3} b The origin of the rotation
       * @param {Number} c The angle of rotation
       * @returns {vec3} out
       */
      function rotateZ(out, a, b, c) {
        var p = [],
            r = [];
        //Translate point to the origin
        p[0] = a[0] - b[0];
        p[1] = a[1] - b[1];
        p[2] = a[2] - b[2];

        //perform rotation
        r[0] = p[0] * Math.cos(c) - p[1] * Math.sin(c);
        r[1] = p[0] * Math.sin(c) + p[1] * Math.cos(c);
        r[2] = p[2];

        //translate to correct position
        out[0] = r[0] + b[0];
        out[1] = r[1] + b[1];
        out[2] = r[2] + b[2];

        return out;
      }

      /**
       * Get the angle between two 3D vectors
       * @param {vec3} a The first operand
       * @param {vec3} b The second operand
       * @returns {Number} The angle in radians
       */
      function angle(a, b) {
        var tempA = fromValues(a[0], a[1], a[2]);
        var tempB = fromValues(b[0], b[1], b[2]);

        normalize(tempA, tempA);
        normalize(tempB, tempB);

        var cosine = dot(tempA, tempB);

        if (cosine > 1.0) {
          return 0;
        } else if (cosine < -1.0) {
          return Math.PI;
        } else {
          return Math.acos(cosine);
        }
      }

      /**
       * Returns a string representation of a vector
       *
       * @param {vec3} a vector to represent as a string
       * @returns {String} string representation of the vector
       */
      function str(a) {
        return 'vec3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ')';
      }

      /**
       * Returns whether or not the vectors have exactly the same elements in the same position (when compared with ===)
       *
       * @param {vec3} a The first vector.
       * @param {vec3} b The second vector.
       * @returns {Boolean} True if the vectors are equal, false otherwise.
       */
      function exactEquals(a, b) {
        return a[0] === b[0] && a[1] === b[1] && a[2] === b[2];
      }

      /**
       * Returns whether or not the vectors have approximately the same elements in the same position.
       *
       * @param {vec3} a The first vector.
       * @param {vec3} b The second vector.
       * @returns {Boolean} True if the vectors are equal, false otherwise.
       */
      function equals(a, b) {
        var a0 = a[0],
            a1 = a[1],
            a2 = a[2];
        var b0 = b[0],
            b1 = b[1],
            b2 = b[2];
        return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1)) && Math.abs(a2 - b2) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a2), Math.abs(b2));
      }

      /**
       * Alias for {@link vec3.subtract}
       * @function
       */
      var sub = exports.sub = subtract;

      /**
       * Alias for {@link vec3.multiply}
       * @function
       */
      var mul = exports.mul = multiply;

      /**
       * Alias for {@link vec3.divide}
       * @function
       */
      var div = exports.div = divide;

      /**
       * Alias for {@link vec3.distance}
       * @function
       */
      var dist = exports.dist = distance;

      /**
       * Alias for {@link vec3.squaredDistance}
       * @function
       */
      var sqrDist = exports.sqrDist = squaredDistance;

      /**
       * Alias for {@link vec3.length}
       * @function
       */
      var len = exports.len = length;

      /**
       * Alias for {@link vec3.squaredLength}
       * @function
       */
      var sqrLen = exports.sqrLen = squaredLength;

      /**
       * Perform some operation over an array of vec3s.
       *
       * @param {Array} a the array of vectors to iterate over
       * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
       * @param {Number} offset Number of elements to skip at the beginning of the array
       * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
       * @param {Function} fn Function to call for each vector in the array
       * @param {Object} [arg] additional argument to pass to fn
       * @returns {Array} a
       * @function
       */
      var forEach = exports.forEach = function () {
        var vec = create();

        return function (a, stride, offset, count, fn, arg) {
          var i = void 0,
              l = void 0;
          if (!stride) {
            stride = 3;
          }

          if (!offset) {
            offset = 0;
          }

          if (count) {
            l = Math.min(count * stride + offset, a.length);
          } else {
            l = a.length;
          }

          for (i = offset; i < l; i += stride) {
            vec[0] = a[i];vec[1] = a[i + 1];vec[2] = a[i + 2];
            fn(vec, vec, arg);
            a[i] = vec[0];a[i + 1] = vec[1];a[i + 2] = vec[2];
          }

          return a;
        };
      }();

      /***/
    },
    /* 112 */
    /***/function (module, exports, __webpack_require__) {

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.forEach = exports.sqrLen = exports.sqrDist = exports.dist = exports.div = exports.mul = exports.sub = exports.len = undefined;
      exports.create = create;
      exports.clone = clone;
      exports.fromValues = fromValues;
      exports.copy = copy;
      exports.set = set;
      exports.add = add;
      exports.subtract = subtract;
      exports.multiply = multiply;
      exports.divide = divide;
      exports.ceil = ceil;
      exports.floor = floor;
      exports.min = min;
      exports.max = max;
      exports.round = round;
      exports.scale = scale;
      exports.scaleAndAdd = scaleAndAdd;
      exports.distance = distance;
      exports.squaredDistance = squaredDistance;
      exports.length = length;
      exports.squaredLength = squaredLength;
      exports.negate = negate;
      exports.inverse = inverse;
      exports.normalize = normalize;
      exports.dot = dot;
      exports.cross = cross;
      exports.lerp = lerp;
      exports.random = random;
      exports.transformMat2 = transformMat2;
      exports.transformMat2d = transformMat2d;
      exports.transformMat3 = transformMat3;
      exports.transformMat4 = transformMat4;
      exports.rotate = rotate;
      exports.angle = angle;
      exports.str = str;
      exports.exactEquals = exactEquals;
      exports.equals = equals;

      var _common = __webpack_require__(18);

      var glMatrix = _interopRequireWildcard(_common);

      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
          return obj;
        } else {
          var newObj = {};if (obj != null) {
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
            }
          }newObj.default = obj;return newObj;
        }
      }

      /**
       * 2 Dimensional Vector
       * @module vec2
       */

      /**
       * Creates a new, empty vec2
       *
       * @returns {vec2} a new 2D vector
       */
      function create() {
        var out = new glMatrix.ARRAY_TYPE(2);
        if (glMatrix.ARRAY_TYPE != Float32Array) {
          out[0] = 0;
          out[1] = 0;
        }
        return out;
      }

      /**
       * Creates a new vec2 initialized with values from an existing vector
       *
       * @param {vec2} a vector to clone
       * @returns {vec2} a new 2D vector
       */
      function clone(a) {
        var out = new glMatrix.ARRAY_TYPE(2);
        out[0] = a[0];
        out[1] = a[1];
        return out;
      }

      /**
       * Creates a new vec2 initialized with the given values
       *
       * @param {Number} x X component
       * @param {Number} y Y component
       * @returns {vec2} a new 2D vector
       */
      function fromValues(x, y) {
        var out = new glMatrix.ARRAY_TYPE(2);
        out[0] = x;
        out[1] = y;
        return out;
      }

      /**
       * Copy the values from one vec2 to another
       *
       * @param {vec2} out the receiving vector
       * @param {vec2} a the source vector
       * @returns {vec2} out
       */
      function copy(out, a) {
        out[0] = a[0];
        out[1] = a[1];
        return out;
      }

      /**
       * Set the components of a vec2 to the given values
       *
       * @param {vec2} out the receiving vector
       * @param {Number} x X component
       * @param {Number} y Y component
       * @returns {vec2} out
       */
      function set(out, x, y) {
        out[0] = x;
        out[1] = y;
        return out;
      }

      /**
       * Adds two vec2's
       *
       * @param {vec2} out the receiving vector
       * @param {vec2} a the first operand
       * @param {vec2} b the second operand
       * @returns {vec2} out
       */
      function add(out, a, b) {
        out[0] = a[0] + b[0];
        out[1] = a[1] + b[1];
        return out;
      }

      /**
       * Subtracts vector b from vector a
       *
       * @param {vec2} out the receiving vector
       * @param {vec2} a the first operand
       * @param {vec2} b the second operand
       * @returns {vec2} out
       */
      function subtract(out, a, b) {
        out[0] = a[0] - b[0];
        out[1] = a[1] - b[1];
        return out;
      }

      /**
       * Multiplies two vec2's
       *
       * @param {vec2} out the receiving vector
       * @param {vec2} a the first operand
       * @param {vec2} b the second operand
       * @returns {vec2} out
       */
      function multiply(out, a, b) {
        out[0] = a[0] * b[0];
        out[1] = a[1] * b[1];
        return out;
      }

      /**
       * Divides two vec2's
       *
       * @param {vec2} out the receiving vector
       * @param {vec2} a the first operand
       * @param {vec2} b the second operand
       * @returns {vec2} out
       */
      function divide(out, a, b) {
        out[0] = a[0] / b[0];
        out[1] = a[1] / b[1];
        return out;
      }

      /**
       * Math.ceil the components of a vec2
       *
       * @param {vec2} out the receiving vector
       * @param {vec2} a vector to ceil
       * @returns {vec2} out
       */
      function ceil(out, a) {
        out[0] = Math.ceil(a[0]);
        out[1] = Math.ceil(a[1]);
        return out;
      }

      /**
       * Math.floor the components of a vec2
       *
       * @param {vec2} out the receiving vector
       * @param {vec2} a vector to floor
       * @returns {vec2} out
       */
      function floor(out, a) {
        out[0] = Math.floor(a[0]);
        out[1] = Math.floor(a[1]);
        return out;
      }

      /**
       * Returns the minimum of two vec2's
       *
       * @param {vec2} out the receiving vector
       * @param {vec2} a the first operand
       * @param {vec2} b the second operand
       * @returns {vec2} out
       */
      function min(out, a, b) {
        out[0] = Math.min(a[0], b[0]);
        out[1] = Math.min(a[1], b[1]);
        return out;
      }

      /**
       * Returns the maximum of two vec2's
       *
       * @param {vec2} out the receiving vector
       * @param {vec2} a the first operand
       * @param {vec2} b the second operand
       * @returns {vec2} out
       */
      function max(out, a, b) {
        out[0] = Math.max(a[0], b[0]);
        out[1] = Math.max(a[1], b[1]);
        return out;
      }

      /**
       * Math.round the components of a vec2
       *
       * @param {vec2} out the receiving vector
       * @param {vec2} a vector to round
       * @returns {vec2} out
       */
      function round(out, a) {
        out[0] = Math.round(a[0]);
        out[1] = Math.round(a[1]);
        return out;
      }

      /**
       * Scales a vec2 by a scalar number
       *
       * @param {vec2} out the receiving vector
       * @param {vec2} a the vector to scale
       * @param {Number} b amount to scale the vector by
       * @returns {vec2} out
       */
      function scale(out, a, b) {
        out[0] = a[0] * b;
        out[1] = a[1] * b;
        return out;
      }

      /**
       * Adds two vec2's after scaling the second operand by a scalar value
       *
       * @param {vec2} out the receiving vector
       * @param {vec2} a the first operand
       * @param {vec2} b the second operand
       * @param {Number} scale the amount to scale b by before adding
       * @returns {vec2} out
       */
      function scaleAndAdd(out, a, b, scale) {
        out[0] = a[0] + b[0] * scale;
        out[1] = a[1] + b[1] * scale;
        return out;
      }

      /**
       * Calculates the euclidian distance between two vec2's
       *
       * @param {vec2} a the first operand
       * @param {vec2} b the second operand
       * @returns {Number} distance between a and b
       */
      function distance(a, b) {
        var x = b[0] - a[0],
            y = b[1] - a[1];
        return Math.sqrt(x * x + y * y);
      }

      /**
       * Calculates the squared euclidian distance between two vec2's
       *
       * @param {vec2} a the first operand
       * @param {vec2} b the second operand
       * @returns {Number} squared distance between a and b
       */
      function squaredDistance(a, b) {
        var x = b[0] - a[0],
            y = b[1] - a[1];
        return x * x + y * y;
      }

      /**
       * Calculates the length of a vec2
       *
       * @param {vec2} a vector to calculate length of
       * @returns {Number} length of a
       */
      function length(a) {
        var x = a[0],
            y = a[1];
        return Math.sqrt(x * x + y * y);
      }

      /**
       * Calculates the squared length of a vec2
       *
       * @param {vec2} a vector to calculate squared length of
       * @returns {Number} squared length of a
       */
      function squaredLength(a) {
        var x = a[0],
            y = a[1];
        return x * x + y * y;
      }

      /**
       * Negates the components of a vec2
       *
       * @param {vec2} out the receiving vector
       * @param {vec2} a vector to negate
       * @returns {vec2} out
       */
      function negate(out, a) {
        out[0] = -a[0];
        out[1] = -a[1];
        return out;
      }

      /**
       * Returns the inverse of the components of a vec2
       *
       * @param {vec2} out the receiving vector
       * @param {vec2} a vector to invert
       * @returns {vec2} out
       */
      function inverse(out, a) {
        out[0] = 1.0 / a[0];
        out[1] = 1.0 / a[1];
        return out;
      }

      /**
       * Normalize a vec2
       *
       * @param {vec2} out the receiving vector
       * @param {vec2} a vector to normalize
       * @returns {vec2} out
       */
      function normalize(out, a) {
        var x = a[0],
            y = a[1];
        var len = x * x + y * y;
        if (len > 0) {
          //TODO: evaluate use of glm_invsqrt here?
          len = 1 / Math.sqrt(len);
          out[0] = a[0] * len;
          out[1] = a[1] * len;
        }
        return out;
      }

      /**
       * Calculates the dot product of two vec2's
       *
       * @param {vec2} a the first operand
       * @param {vec2} b the second operand
       * @returns {Number} dot product of a and b
       */
      function dot(a, b) {
        return a[0] * b[0] + a[1] * b[1];
      }

      /**
       * Computes the cross product of two vec2's
       * Note that the cross product must by definition produce a 3D vector
       *
       * @param {vec3} out the receiving vector
       * @param {vec2} a the first operand
       * @param {vec2} b the second operand
       * @returns {vec3} out
       */
      function cross(out, a, b) {
        var z = a[0] * b[1] - a[1] * b[0];
        out[0] = out[1] = 0;
        out[2] = z;
        return out;
      }

      /**
       * Performs a linear interpolation between two vec2's
       *
       * @param {vec2} out the receiving vector
       * @param {vec2} a the first operand
       * @param {vec2} b the second operand
       * @param {Number} t interpolation amount, in the range [0-1], between the two inputs
       * @returns {vec2} out
       */
      function lerp(out, a, b, t) {
        var ax = a[0],
            ay = a[1];
        out[0] = ax + t * (b[0] - ax);
        out[1] = ay + t * (b[1] - ay);
        return out;
      }

      /**
       * Generates a random vector with the given scale
       *
       * @param {vec2} out the receiving vector
       * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
       * @returns {vec2} out
       */
      function random(out, scale) {
        scale = scale || 1.0;
        var r = glMatrix.RANDOM() * 2.0 * Math.PI;
        out[0] = Math.cos(r) * scale;
        out[1] = Math.sin(r) * scale;
        return out;
      }

      /**
       * Transforms the vec2 with a mat2
       *
       * @param {vec2} out the receiving vector
       * @param {vec2} a the vector to transform
       * @param {mat2} m matrix to transform with
       * @returns {vec2} out
       */
      function transformMat2(out, a, m) {
        var x = a[0],
            y = a[1];
        out[0] = m[0] * x + m[2] * y;
        out[1] = m[1] * x + m[3] * y;
        return out;
      }

      /**
       * Transforms the vec2 with a mat2d
       *
       * @param {vec2} out the receiving vector
       * @param {vec2} a the vector to transform
       * @param {mat2d} m matrix to transform with
       * @returns {vec2} out
       */
      function transformMat2d(out, a, m) {
        var x = a[0],
            y = a[1];
        out[0] = m[0] * x + m[2] * y + m[4];
        out[1] = m[1] * x + m[3] * y + m[5];
        return out;
      }

      /**
       * Transforms the vec2 with a mat3
       * 3rd vector component is implicitly '1'
       *
       * @param {vec2} out the receiving vector
       * @param {vec2} a the vector to transform
       * @param {mat3} m matrix to transform with
       * @returns {vec2} out
       */
      function transformMat3(out, a, m) {
        var x = a[0],
            y = a[1];
        out[0] = m[0] * x + m[3] * y + m[6];
        out[1] = m[1] * x + m[4] * y + m[7];
        return out;
      }

      /**
       * Transforms the vec2 with a mat4
       * 3rd vector component is implicitly '0'
       * 4th vector component is implicitly '1'
       *
       * @param {vec2} out the receiving vector
       * @param {vec2} a the vector to transform
       * @param {mat4} m matrix to transform with
       * @returns {vec2} out
       */
      function transformMat4(out, a, m) {
        var x = a[0];
        var y = a[1];
        out[0] = m[0] * x + m[4] * y + m[12];
        out[1] = m[1] * x + m[5] * y + m[13];
        return out;
      }

      /**
       * Rotate a 2D vector
       * @param {vec2} out The receiving vec2
       * @param {vec2} a The vec2 point to rotate
       * @param {vec2} b The origin of the rotation
       * @param {Number} c The angle of rotation
       * @returns {vec2} out
       */
      function rotate(out, a, b, c) {
        //Translate point to the origin
        var p0 = a[0] - b[0],
            p1 = a[1] - b[1],
            sinC = Math.sin(c),
            cosC = Math.cos(c);

        //perform rotation and translate to correct position
        out[0] = p0 * cosC - p1 * sinC + b[0];
        out[1] = p0 * sinC + p1 * cosC + b[1];

        return out;
      }

      /**
       * Get the angle between two 2D vectors
       * @param {vec2} a The first operand
       * @param {vec2} b The second operand
       * @returns {Number} The angle in radians
       */
      function angle(a, b) {
        var x1 = a[0],
            y1 = a[1],
            x2 = b[0],
            y2 = b[1];

        var len1 = x1 * x1 + y1 * y1;
        if (len1 > 0) {
          //TODO: evaluate use of glm_invsqrt here?
          len1 = 1 / Math.sqrt(len1);
        }

        var len2 = x2 * x2 + y2 * y2;
        if (len2 > 0) {
          //TODO: evaluate use of glm_invsqrt here?
          len2 = 1 / Math.sqrt(len2);
        }

        var cosine = (x1 * x2 + y1 * y2) * len1 * len2;

        if (cosine > 1.0) {
          return 0;
        } else if (cosine < -1.0) {
          return Math.PI;
        } else {
          return Math.acos(cosine);
        }
      }

      /**
       * Returns a string representation of a vector
       *
       * @param {vec2} a vector to represent as a string
       * @returns {String} string representation of the vector
       */
      function str(a) {
        return 'vec2(' + a[0] + ', ' + a[1] + ')';
      }

      /**
       * Returns whether or not the vectors exactly have the same elements in the same position (when compared with ===)
       *
       * @param {vec2} a The first vector.
       * @param {vec2} b The second vector.
       * @returns {Boolean} True if the vectors are equal, false otherwise.
       */
      function exactEquals(a, b) {
        return a[0] === b[0] && a[1] === b[1];
      }

      /**
       * Returns whether or not the vectors have approximately the same elements in the same position.
       *
       * @param {vec2} a The first vector.
       * @param {vec2} b The second vector.
       * @returns {Boolean} True if the vectors are equal, false otherwise.
       */
      function equals(a, b) {
        var a0 = a[0],
            a1 = a[1];
        var b0 = b[0],
            b1 = b[1];
        return Math.abs(a0 - b0) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a0), Math.abs(b0)) && Math.abs(a1 - b1) <= glMatrix.EPSILON * Math.max(1.0, Math.abs(a1), Math.abs(b1));
      }

      /**
       * Alias for {@link vec2.length}
       * @function
       */
      var len = exports.len = length;

      /**
       * Alias for {@link vec2.subtract}
       * @function
       */
      var sub = exports.sub = subtract;

      /**
       * Alias for {@link vec2.multiply}
       * @function
       */
      var mul = exports.mul = multiply;

      /**
       * Alias for {@link vec2.divide}
       * @function
       */
      var div = exports.div = divide;

      /**
       * Alias for {@link vec2.distance}
       * @function
       */
      var dist = exports.dist = distance;

      /**
       * Alias for {@link vec2.squaredDistance}
       * @function
       */
      var sqrDist = exports.sqrDist = squaredDistance;

      /**
       * Alias for {@link vec2.squaredLength}
       * @function
       */
      var sqrLen = exports.sqrLen = squaredLength;

      /**
       * Perform some operation over an array of vec2s.
       *
       * @param {Array} a the array of vectors to iterate over
       * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
       * @param {Number} offset Number of elements to skip at the beginning of the array
       * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
       * @param {Function} fn Function to call for each vector in the array
       * @param {Object} [arg] additional argument to pass to fn
       * @returns {Array} a
       * @function
       */
      var forEach = exports.forEach = function () {
        var vec = create();

        return function (a, stride, offset, count, fn, arg) {
          var i = void 0,
              l = void 0;
          if (!stride) {
            stride = 2;
          }

          if (!offset) {
            offset = 0;
          }

          if (count) {
            l = Math.min(count * stride + offset, a.length);
          } else {
            l = a.length;
          }

          for (i = offset; i < l; i += stride) {
            vec[0] = a[i];vec[1] = a[i + 1];
            fn(vec, vec, arg);
            a[i] = vec[0];a[i + 1] = vec[1];
          }

          return a;
        };
      }();

      /***/
    },
    /* 113 */
    /***/function (module, exports, __webpack_require__) {

      var Shape = __webpack_require__(4);
      Shape.Rect = __webpack_require__(41);
      Shape.Circle = __webpack_require__(42);
      Shape.Ellipse = __webpack_require__(43);
      Shape.Path = __webpack_require__(44);
      Shape.Text = __webpack_require__(45);
      Shape.Line = __webpack_require__(46);
      Shape.Image = __webpack_require__(47);
      Shape.Polygon = __webpack_require__(48);
      Shape.Marker = __webpack_require__(49);
      Shape.Dom = __webpack_require__(50);
      Shape.Fa = __webpack_require__(51);

      module.exports = Shape;

      /***/
    },
    /* 114 */
    /***/function (module, exports, __webpack_require__) {

      /**
       * Created by Elaine on 2018/5/9.
       */
      var Util = __webpack_require__(0);
      var Element = __webpack_require__(17);
      var Gradient = __webpack_require__(115);
      var Shadow = __webpack_require__(116);
      var Arrow = __webpack_require__(117);
      var Clip = __webpack_require__(118);

      var Defs = function Defs(cfg) {
        Defs.superclass.constructor.call(this, cfg);
        this.set('children', []);
      };

      Util.extend(Defs, Element);

      Util.augment(Defs, {
        isGroup: false,
        canFill: false,
        canStroke: false,
        capture: false,
        visible: false,
        init: function init() {
          var el = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
          var id = Util.uniqueId('defs_');
          el.setAttribute('id', id);
          this.set('el', el);
          this.set('children', []);
        },
        find: function find(type, attr) {
          var children = this.get('children');
          var result = null;
          for (var i = 0; i < children.length; i++) {
            if (children[i].match(type, attr)) {
              result = children[i].__cfg.id;
              break;
            }
          }
          return result;
        },
        findById: function findById(id) {
          var children = this.get('children');
          var flag = null;
          for (var i = 0; i < children.length; i++) {
            if (children[i].__cfg.id === id) {
              flag = children[i];
              break;
            }
          }
          return flag;
        },
        add: function add(items) {
          var el = this.get('el');
          var self = this;
          var children = this.get('children');
          if (Util.isArray(items)) {
            Util.each(items, function (item) {
              var parent = item.get('parent');
              if (parent) {
                parent.removeChild(item, false);
                self._setContext(item);
              }
              el.appendChild(item.get('el'));
            });
            children.push.apply(children, items);
            return self;
          }
          if (self.findById(items.get('id'))) {
            return self;
          }
          var parent = items.get('parent');
          if (parent) {
            parent.removeChild(items, false);
          }
          self._add(items);
          el.appendChild(items.get('el'));
          return self;
        },
        _add: function _add(item) {
          this.get('el').appendChild(item.__cfg.el);
          this.get('children').push(item);
          item.__cfg.parent = this;
          item.__cfg.defs = this;
          item.__cfg.canvas = this.__cfg.canvas;
        },
        addGradient: function addGradient(cfg) {
          var gradient = new Gradient(cfg);
          this._add(gradient);
          return gradient.__cfg.id;
        },
        addShadow: function addShadow(cfg) {
          var shadow = new Shadow(cfg);
          this._add(shadow);
          return shadow.__cfg.id;
        },
        addArrow: function addArrow(name, cfg, stroke) {
          var arrow = new Arrow(name, cfg, stroke);
          this._add(arrow);
          return arrow.__cfg.id;
        },
        addClip: function addClip(cfg) {
          var clip = new Clip(cfg);
          this._add(clip);
          return clip.__cfg.id;
        }
      });

      module.exports = Defs;

      /***/
    },
    /* 115 */
    /***/function (module, exports, __webpack_require__) {

      /**
       * Created by Elaine on 2018/5/9.
       */
      var Util = __webpack_require__(0);

      var regexLG = /^l\s*\(\s*([\d.]+)\s*\)\s*(.*)/i;
      var regexRG = /^r\s*\(\s*([\d.]+)\s*,\s*([\d.]+)\s*,\s*([\d.]+)\s*\)\s*(.*)/i;
      var regexColorStop = /[\d.]+:(#[^\s]+|[^\)]+\))/ig;

      function addStop(steps) {
        var arr = steps.match(regexColorStop);
        if (!arr) {
          return '';
        }
        var stops = '';
        arr.sort(function (a, b) {
          a = a.split(':');
          b = b.split(':');
          return Number(a[0]) - Number(b[0]);
        });
        Util.each(arr, function (item) {
          item = item.split(':');
          stops += '<stop offset="' + item[0] + '" stop-color="' + item[1] + '"></stop>';
        });
        return stops;
      }

      function parseLineGradient(color, el) {
        var arr = regexLG.exec(color);
        var angle = Util.mod(Util.toRadian(parseFloat(arr[1])), Math.PI * 2);
        var steps = arr[2];
        var start = void 0;
        var end = void 0;

        if (angle >= 0 && angle < 0.5 * Math.PI) {
          start = {
            x: 0,
            y: 0
          };
          end = {
            x: 1,
            y: 1
          };
        } else if (0.5 * Math.PI <= angle && angle < Math.PI) {
          start = {
            x: 1,
            y: 0
          };
          end = {
            x: 0,
            y: 1
          };
        } else if (Math.PI <= angle && angle < 1.5 * Math.PI) {
          start = {
            x: 1,
            y: 1
          };
          end = {
            x: 0,
            y: 0
          };
        } else {
          start = {
            x: 0,
            y: 1
          };
          end = {
            x: 1,
            y: 0
          };
        }

        var tanTheta = Math.tan(angle);
        var tanTheta2 = tanTheta * tanTheta;

        var x = (end.x - start.x + tanTheta * (end.y - start.y)) / (tanTheta2 + 1) + start.x;
        var y = tanTheta * (end.x - start.x + tanTheta * (end.y - start.y)) / (tanTheta2 + 1) + start.y;
        el.setAttribute('x1', start.x);
        el.setAttribute('y1', start.y);
        el.setAttribute('x2', x);
        el.setAttribute('y2', y);
        el.innerHTML = addStop(steps);
      }

      function parseRadialGradient(color, self) {
        var arr = regexRG.exec(color);
        var cx = parseFloat(arr[1]);
        var cy = parseFloat(arr[2]);
        var r = parseFloat(arr[3]);
        var steps = arr[4];
        self.setAttribute('cx', cx);
        self.setAttribute('cy', cy);
        self.setAttribute('r', r);
        self.innerHTML = addStop(steps);
      }

      var Gradient = function Gradient(cfg) {
        var el = null;
        var id = Util.uniqueId('gradient_');
        if (cfg.toLowerCase()[0] === 'l') {
          el = document.createElementNS('http://www.w3.org/2000/svg', 'linearGradient');
          parseLineGradient(cfg, el);
        } else {
          el = document.createElementNS('http://www.w3.org/2000/svg', 'radialGradient');
          parseRadialGradient(cfg, el);
        }
        el.setAttribute('id', id);
        this.__cfg = { el: el, id: id };
        this.__attrs = { config: cfg };
        return this;
      };

      Util.augment(Gradient, {
        type: 'gradient',
        match: function match(type, attr) {
          return this.type === type && this.__attrs.config === attr;
        }
      });

      module.exports = Gradient;

      /***/
    },
    /* 116 */
    /***/function (module, exports, __webpack_require__) {

      /**
       * Created by Elaine on 2018/5/10.
       */
      var Util = __webpack_require__(0);

      var ATTR_MAP = {
        shadowColor: 'color',
        shadowOpacity: 'opacity',
        shadowBlur: 'blur',
        shadowOffsetX: 'dx',
        shadowOffsetY: 'dy'
      };

      function parseShadow(config, el) {
        var child = '<feDropShadow \n      dx="' + config.dx + '" \n      dy="' + config.dy + '" \n      stdDeviation="' + (config.blur ? config.blur / 10 : 0) + '"\n      flood-color="' + (config.color ? config.color : '#000') + '"\n      flood-opacity="' + (config.opacity ? config.opacity : 1) + '"\n      />';
        el.innerHTML = child;
      }

      var Shadow = function Shadow(cfg) {
        var el = document.createElementNS('http://www.w3.org/2000/svg', 'filter');
        var id = Util.uniqueId('filter_');
        el.setAttribute('id', id);
        parseShadow(cfg, el);
        this.__cfg = { el: el, id: id };
        this.__attrs = { config: cfg };
        return this;
      };
      Util.augment(Shadow, {
        type: 'filter',
        match: function match(type, cfg) {
          if (this.type !== type) {
            return false;
          }
          var flag = false;
          var config = this.__attrs.config;
          Util.each(Object.keys(config), function (attr) {
            if (!flag) {
              flag = config[attr] === cfg[attr];
            }
          });
          return flag;
        },
        update: function update(name, value) {
          var config = this.__attrs.config;
          config[ATTR_MAP[name]] = value;
          parseShadow(config, this.__cfg.el);
          return this;
        }
      });

      module.exports = Shadow;

      /***/
    },
    /* 117 */
    /***/function (module, exports, __webpack_require__) {

      var _typeof = typeof Symbol === "function" && _typeof3(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
      } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof3(obj);
      };

      /**
       * Created by Elaine on 2018/5/11.
       */
      var Util = __webpack_require__(0);

      function setDefaultPath(parent, name, stroke) {
        var el = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        el.setAttribute('d', 'M0,0 L6,3 L0,6 L3,3Z');
        el.setAttribute('stroke', 'none');
        el.setAttribute('fill', stroke || '#000');
        parent.appendChild(el);
        parent.setAttribute('refX', 3);
        parent.setAttribute('refY', 3);

        return el;
      }

      function setMarker(shape, parent, name, stroke) {
        if (!shape) {
          return setDefaultPath(parent, name);
        }
        if (shape.type !== 'marker') {
          throw new TypeError('the shape of an arrow should be an instance of Marker');
        }
        shape.attr({ stroke: 'none', fill: stroke });
        parent.append(shape.get('el'));
        var width = shape.__attrs.x;
        var height = shape.__attrs.y;
        parent.setAttribute('refX', width);
        parent.setAttribute('refY', height);
        return shape;
      }

      var Arrow = function Arrow(name, cfg, stroke) {
        var el = document.createElementNS('http://www.w3.org/2000/svg', 'marker');
        var id = Util.uniqueId('marker_');
        el.setAttribute('id', id);
        el.setAttribute('overflow', 'visible');
        el.setAttribute('orient', 'auto-start-reverse');
        this.__cfg = { el: el, id: id, stroke: stroke || '#000' };
        this.__cfg[name] = true;
        var child = null;
        if (typeof cfg === 'boolean' && cfg) {
          child = setDefaultPath(el, name, stroke);
          this._setChild(child, true);
        } else if ((typeof cfg === 'undefined' ? 'undefined' : _typeof(cfg)) === 'object') {
          child = setMarker(cfg, el, name, stroke);
          this._setChild(child, false);
        }
        this.__attrs = { config: cfg };
        return this;
      };

      Util.augment(Arrow, {
        type: 'arrow',
        match: function match(type, attr) {
          if (!this.__cfg[type]) {
            return false;
          }
          if (_typeof(attr.value) === 'object') {
            return false;
          }
          if (attr.stroke !== '#000') {
            return false;
          }
          if (typeof attr.value === 'boolean' && !this.__cfg.default) {
            return false;
          }
          return true;
        },
        _setChild: function _setChild(child, isDefault) {
          this.__cfg.child = child;
          this.__cfg.default = isDefault;
        },
        update: function update(fill) {
          var child = this.__cfg.child;
          this.__cfg.default = false;
          if (child.attr) {
            child.attr('fill', fill);
          } else {
            child.setAttribute('fill', fill);
          }
        }
      });

      module.exports = Arrow;

      /***/
    },
    /* 118 */
    /***/function (module, exports, __webpack_require__) {

      /**
       * Created by Elaine on 2018/5/14.
       */
      var Util = __webpack_require__(0);

      var Clip = function Clip(cfg) {
        var el = document.createElementNS('http://www.w3.org/2000/svg', 'clipPath');
        var id = Util.uniqueId('clip_');
        if (cfg.get('el')) {
          el.appendChild(cfg.get('el'));
        } else if (Util.isString(cfg.nodeName)) {
          el.appendChild(cfg);
        } else {
          throw 'clip element should be a instance of Shape or a SVG node';
        }
        el.setAttribute('id', id);
        this.__cfg = { el: el, id: id };
        this.__attrs = { config: cfg };
        return this;
      };

      Util.augment(Clip, {
        type: 'clip',
        match: function match() {
          return false;
        }
      });

      module.exports = Clip;

      /***/
    },
    /* 119 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";

      Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__src_timer__ = __webpack_require__(20);
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "now", function () {
        return __WEBPACK_IMPORTED_MODULE_0__src_timer__["b"];
      });
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "timer", function () {
        return __WEBPACK_IMPORTED_MODULE_0__src_timer__["c"];
      });
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "timerFlush", function () {
        return __WEBPACK_IMPORTED_MODULE_0__src_timer__["d"];
      });
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__src_timeout__ = __webpack_require__(120);
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "timeout", function () {
        return __WEBPACK_IMPORTED_MODULE_1__src_timeout__["a"];
      });
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__src_interval__ = __webpack_require__(121);
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "interval", function () {
        return __WEBPACK_IMPORTED_MODULE_2__src_interval__["a"];
      });

      /***/
    },
    /* 120 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__timer__ = __webpack_require__(20);

      /* harmony default export */__webpack_exports__["a"] = function (callback, delay, time) {
        var t = new __WEBPACK_IMPORTED_MODULE_0__timer__["a" /* Timer */]();
        delay = delay == null ? 0 : +delay;
        t.restart(function (elapsed) {
          t.stop();
          callback(elapsed + delay);
        }, delay, time);
        return t;
      };

      /***/
    },
    /* 121 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony import */
      var __WEBPACK_IMPORTED_MODULE_0__timer__ = __webpack_require__(20);

      /* harmony default export */__webpack_exports__["a"] = function (callback, delay, time) {
        var t = new __WEBPACK_IMPORTED_MODULE_0__timer__["a" /* Timer */](),
            total = delay;
        if (delay == null) return t.restart(callback, delay, time), t;
        delay = +delay, time = time == null ? Object(__WEBPACK_IMPORTED_MODULE_0__timer__["b" /* now */])() : +time;
        t.restart(function tick(elapsed) {
          elapsed += total;
          t.restart(tick, total += delay, time);
          callback(elapsed);
        }, delay, time);
        return t;
      };

      /***/
    },
    /* 122 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";

      Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__src_linear__ = __webpack_require__(123);
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "easeLinear", function () {
        return __WEBPACK_IMPORTED_MODULE_0__src_linear__["a"];
      });
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__src_quad__ = __webpack_require__(124);
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "easeQuad", function () {
        return __WEBPACK_IMPORTED_MODULE_1__src_quad__["b"];
      });
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "easeQuadIn", function () {
        return __WEBPACK_IMPORTED_MODULE_1__src_quad__["a"];
      });
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "easeQuadOut", function () {
        return __WEBPACK_IMPORTED_MODULE_1__src_quad__["c"];
      });
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "easeQuadInOut", function () {
        return __WEBPACK_IMPORTED_MODULE_1__src_quad__["b"];
      });
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__src_cubic__ = __webpack_require__(125);
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "easeCubic", function () {
        return __WEBPACK_IMPORTED_MODULE_2__src_cubic__["b"];
      });
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "easeCubicIn", function () {
        return __WEBPACK_IMPORTED_MODULE_2__src_cubic__["a"];
      });
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "easeCubicOut", function () {
        return __WEBPACK_IMPORTED_MODULE_2__src_cubic__["c"];
      });
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "easeCubicInOut", function () {
        return __WEBPACK_IMPORTED_MODULE_2__src_cubic__["b"];
      });
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__src_poly__ = __webpack_require__(126);
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "easePoly", function () {
        return __WEBPACK_IMPORTED_MODULE_3__src_poly__["b"];
      });
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "easePolyIn", function () {
        return __WEBPACK_IMPORTED_MODULE_3__src_poly__["a"];
      });
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "easePolyOut", function () {
        return __WEBPACK_IMPORTED_MODULE_3__src_poly__["c"];
      });
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "easePolyInOut", function () {
        return __WEBPACK_IMPORTED_MODULE_3__src_poly__["b"];
      });
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__src_sin__ = __webpack_require__(127);
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "easeSin", function () {
        return __WEBPACK_IMPORTED_MODULE_4__src_sin__["b"];
      });
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "easeSinIn", function () {
        return __WEBPACK_IMPORTED_MODULE_4__src_sin__["a"];
      });
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "easeSinOut", function () {
        return __WEBPACK_IMPORTED_MODULE_4__src_sin__["c"];
      });
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "easeSinInOut", function () {
        return __WEBPACK_IMPORTED_MODULE_4__src_sin__["b"];
      });
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_5__src_exp__ = __webpack_require__(128);
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "easeExp", function () {
        return __WEBPACK_IMPORTED_MODULE_5__src_exp__["b"];
      });
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "easeExpIn", function () {
        return __WEBPACK_IMPORTED_MODULE_5__src_exp__["a"];
      });
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "easeExpOut", function () {
        return __WEBPACK_IMPORTED_MODULE_5__src_exp__["c"];
      });
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "easeExpInOut", function () {
        return __WEBPACK_IMPORTED_MODULE_5__src_exp__["b"];
      });
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_6__src_circle__ = __webpack_require__(129);
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "easeCircle", function () {
        return __WEBPACK_IMPORTED_MODULE_6__src_circle__["b"];
      });
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "easeCircleIn", function () {
        return __WEBPACK_IMPORTED_MODULE_6__src_circle__["a"];
      });
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "easeCircleOut", function () {
        return __WEBPACK_IMPORTED_MODULE_6__src_circle__["c"];
      });
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "easeCircleInOut", function () {
        return __WEBPACK_IMPORTED_MODULE_6__src_circle__["b"];
      });
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_7__src_bounce__ = __webpack_require__(130);
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "easeBounce", function () {
        return __WEBPACK_IMPORTED_MODULE_7__src_bounce__["c"];
      });
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "easeBounceIn", function () {
        return __WEBPACK_IMPORTED_MODULE_7__src_bounce__["a"];
      });
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "easeBounceOut", function () {
        return __WEBPACK_IMPORTED_MODULE_7__src_bounce__["c"];
      });
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "easeBounceInOut", function () {
        return __WEBPACK_IMPORTED_MODULE_7__src_bounce__["b"];
      });
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_8__src_back__ = __webpack_require__(131);
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "easeBack", function () {
        return __WEBPACK_IMPORTED_MODULE_8__src_back__["b"];
      });
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "easeBackIn", function () {
        return __WEBPACK_IMPORTED_MODULE_8__src_back__["a"];
      });
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "easeBackOut", function () {
        return __WEBPACK_IMPORTED_MODULE_8__src_back__["c"];
      });
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "easeBackInOut", function () {
        return __WEBPACK_IMPORTED_MODULE_8__src_back__["b"];
      });
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_9__src_elastic__ = __webpack_require__(132);
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "easeElastic", function () {
        return __WEBPACK_IMPORTED_MODULE_9__src_elastic__["c"];
      });
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "easeElasticIn", function () {
        return __WEBPACK_IMPORTED_MODULE_9__src_elastic__["a"];
      });
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "easeElasticOut", function () {
        return __WEBPACK_IMPORTED_MODULE_9__src_elastic__["c"];
      });
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "easeElasticInOut", function () {
        return __WEBPACK_IMPORTED_MODULE_9__src_elastic__["b"];
      });

      /***/
    },
    /* 123 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony export (immutable) */
      __webpack_exports__["a"] = linear;
      function linear(t) {
        return +t;
      }

      /***/
    },
    /* 124 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony export (immutable) */
      __webpack_exports__["a"] = quadIn;
      /* harmony export (immutable) */__webpack_exports__["c"] = quadOut;
      /* harmony export (immutable) */__webpack_exports__["b"] = quadInOut;
      function quadIn(t) {
        return t * t;
      }

      function quadOut(t) {
        return t * (2 - t);
      }

      function quadInOut(t) {
        return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
      }

      /***/
    },
    /* 125 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony export (immutable) */
      __webpack_exports__["a"] = cubicIn;
      /* harmony export (immutable) */__webpack_exports__["c"] = cubicOut;
      /* harmony export (immutable) */__webpack_exports__["b"] = cubicInOut;
      function cubicIn(t) {
        return t * t * t;
      }

      function cubicOut(t) {
        return --t * t * t + 1;
      }

      function cubicInOut(t) {
        return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
      }

      /***/
    },
    /* 126 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "a", function () {
        return polyIn;
      });
      /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "c", function () {
        return polyOut;
      });
      /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "b", function () {
        return polyInOut;
      });
      var exponent = 3;

      var polyIn = function custom(e) {
        e = +e;

        function polyIn(t) {
          return Math.pow(t, e);
        }

        polyIn.exponent = custom;

        return polyIn;
      }(exponent);

      var polyOut = function custom(e) {
        e = +e;

        function polyOut(t) {
          return 1 - Math.pow(1 - t, e);
        }

        polyOut.exponent = custom;

        return polyOut;
      }(exponent);

      var polyInOut = function custom(e) {
        e = +e;

        function polyInOut(t) {
          return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
        }

        polyInOut.exponent = custom;

        return polyInOut;
      }(exponent);

      /***/
    },
    /* 127 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony export (immutable) */
      __webpack_exports__["a"] = sinIn;
      /* harmony export (immutable) */__webpack_exports__["c"] = sinOut;
      /* harmony export (immutable) */__webpack_exports__["b"] = sinInOut;
      var pi = Math.PI,
          halfPi = pi / 2;

      function sinIn(t) {
        return 1 - Math.cos(t * halfPi);
      }

      function sinOut(t) {
        return Math.sin(t * halfPi);
      }

      function sinInOut(t) {
        return (1 - Math.cos(pi * t)) / 2;
      }

      /***/
    },
    /* 128 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony export (immutable) */
      __webpack_exports__["a"] = expIn;
      /* harmony export (immutable) */__webpack_exports__["c"] = expOut;
      /* harmony export (immutable) */__webpack_exports__["b"] = expInOut;
      function expIn(t) {
        return Math.pow(2, 10 * t - 10);
      }

      function expOut(t) {
        return 1 - Math.pow(2, -10 * t);
      }

      function expInOut(t) {
        return ((t *= 2) <= 1 ? Math.pow(2, 10 * t - 10) : 2 - Math.pow(2, 10 - 10 * t)) / 2;
      }

      /***/
    },
    /* 129 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony export (immutable) */
      __webpack_exports__["a"] = circleIn;
      /* harmony export (immutable) */__webpack_exports__["c"] = circleOut;
      /* harmony export (immutable) */__webpack_exports__["b"] = circleInOut;
      function circleIn(t) {
        return 1 - Math.sqrt(1 - t * t);
      }

      function circleOut(t) {
        return Math.sqrt(1 - --t * t);
      }

      function circleInOut(t) {
        return ((t *= 2) <= 1 ? 1 - Math.sqrt(1 - t * t) : Math.sqrt(1 - (t -= 2) * t) + 1) / 2;
      }

      /***/
    },
    /* 130 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony export (immutable) */
      __webpack_exports__["a"] = bounceIn;
      /* harmony export (immutable) */__webpack_exports__["c"] = bounceOut;
      /* harmony export (immutable) */__webpack_exports__["b"] = bounceInOut;
      var b1 = 4 / 11,
          b2 = 6 / 11,
          b3 = 8 / 11,
          b4 = 3 / 4,
          b5 = 9 / 11,
          b6 = 10 / 11,
          b7 = 15 / 16,
          b8 = 21 / 22,
          b9 = 63 / 64,
          b0 = 1 / b1 / b1;

      function bounceIn(t) {
        return 1 - bounceOut(1 - t);
      }

      function bounceOut(t) {
        return (t = +t) < b1 ? b0 * t * t : t < b3 ? b0 * (t -= b2) * t + b4 : t < b6 ? b0 * (t -= b5) * t + b7 : b0 * (t -= b8) * t + b9;
      }

      function bounceInOut(t) {
        return ((t *= 2) <= 1 ? 1 - bounceOut(1 - t) : bounceOut(t - 1) + 1) / 2;
      }

      /***/
    },
    /* 131 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "a", function () {
        return backIn;
      });
      /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "c", function () {
        return backOut;
      });
      /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "b", function () {
        return backInOut;
      });
      var overshoot = 1.70158;

      var backIn = function custom(s) {
        s = +s;

        function backIn(t) {
          return t * t * ((s + 1) * t - s);
        }

        backIn.overshoot = custom;

        return backIn;
      }(overshoot);

      var backOut = function custom(s) {
        s = +s;

        function backOut(t) {
          return --t * t * ((s + 1) * t + s) + 1;
        }

        backOut.overshoot = custom;

        return backOut;
      }(overshoot);

      var backInOut = function custom(s) {
        s = +s;

        function backInOut(t) {
          return ((t *= 2) < 1 ? t * t * ((s + 1) * t - s) : (t -= 2) * t * ((s + 1) * t + s) + 2) / 2;
        }

        backInOut.overshoot = custom;

        return backInOut;
      }(overshoot);

      /***/
    },
    /* 132 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "a", function () {
        return elasticIn;
      });
      /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "c", function () {
        return elasticOut;
      });
      /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "b", function () {
        return elasticInOut;
      });
      var tau = 2 * Math.PI,
          amplitude = 1,
          period = 0.3;

      var elasticIn = function custom(a, p) {
        var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

        function elasticIn(t) {
          return a * Math.pow(2, 10 * --t) * Math.sin((s - t) / p);
        }

        elasticIn.amplitude = function (a) {
          return custom(a, p * tau);
        };
        elasticIn.period = function (p) {
          return custom(a, p);
        };

        return elasticIn;
      }(amplitude, period);

      var elasticOut = function custom(a, p) {
        var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

        function elasticOut(t) {
          return 1 - a * Math.pow(2, -10 * (t = +t)) * Math.sin((t + s) / p);
        }

        elasticOut.amplitude = function (a) {
          return custom(a, p * tau);
        };
        elasticOut.period = function (p) {
          return custom(a, p);
        };

        return elasticOut;
      }(amplitude, period);

      var elasticInOut = function custom(a, p) {
        var s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

        function elasticInOut(t) {
          return ((t = t * 2 - 1) < 0 ? a * Math.pow(2, 10 * t) * Math.sin((s - t) / p) : 2 - a * Math.pow(2, -10 * t) * Math.sin((s + t) / p)) / 2;
        }

        elasticInOut.amplitude = function (a) {
          return custom(a, p * tau);
        };
        elasticInOut.period = function (p) {
          return custom(a, p);
        };

        return elasticInOut;
      }(amplitude, period);

      /***/
    },
    /* 133 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";

      Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__src_value__ = __webpack_require__(21);
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "interpolate", function () {
        return __WEBPACK_IMPORTED_MODULE_0__src_value__["a"];
      });
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__src_array__ = __webpack_require__(57);
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "interpolateArray", function () {
        return __WEBPACK_IMPORTED_MODULE_1__src_array__["a"];
      });
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__src_basis__ = __webpack_require__(24);
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "interpolateBasis", function () {
        return __WEBPACK_IMPORTED_MODULE_2__src_basis__["b"];
      });
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_3__src_basisClosed__ = __webpack_require__(55);
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "interpolateBasisClosed", function () {
        return __WEBPACK_IMPORTED_MODULE_3__src_basisClosed__["a"];
      });
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_4__src_date__ = __webpack_require__(58);
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "interpolateDate", function () {
        return __WEBPACK_IMPORTED_MODULE_4__src_date__["a"];
      });
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_5__src_number__ = __webpack_require__(14);
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "interpolateNumber", function () {
        return __WEBPACK_IMPORTED_MODULE_5__src_number__["a"];
      });
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_6__src_object__ = __webpack_require__(59);
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "interpolateObject", function () {
        return __WEBPACK_IMPORTED_MODULE_6__src_object__["a"];
      });
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_7__src_round__ = __webpack_require__(136);
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "interpolateRound", function () {
        return __WEBPACK_IMPORTED_MODULE_7__src_round__["a"];
      });
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_8__src_string__ = __webpack_require__(60);
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "interpolateString", function () {
        return __WEBPACK_IMPORTED_MODULE_8__src_string__["a"];
      });
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_9__src_transform_index__ = __webpack_require__(137);
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "interpolateTransformCss", function () {
        return __WEBPACK_IMPORTED_MODULE_9__src_transform_index__["a"];
      });
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "interpolateTransformSvg", function () {
        return __WEBPACK_IMPORTED_MODULE_9__src_transform_index__["b"];
      });
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_10__src_zoom__ = __webpack_require__(140);
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "interpolateZoom", function () {
        return __WEBPACK_IMPORTED_MODULE_10__src_zoom__["a"];
      });
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_11__src_rgb__ = __webpack_require__(54);
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "interpolateRgb", function () {
        return __WEBPACK_IMPORTED_MODULE_11__src_rgb__["a"];
      });
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "interpolateRgbBasis", function () {
        return __WEBPACK_IMPORTED_MODULE_11__src_rgb__["b"];
      });
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "interpolateRgbBasisClosed", function () {
        return __WEBPACK_IMPORTED_MODULE_11__src_rgb__["c"];
      });
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_12__src_hsl__ = __webpack_require__(141);
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "interpolateHsl", function () {
        return __WEBPACK_IMPORTED_MODULE_12__src_hsl__["a"];
      });
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "interpolateHslLong", function () {
        return __WEBPACK_IMPORTED_MODULE_12__src_hsl__["b"];
      });
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_13__src_lab__ = __webpack_require__(142);
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "interpolateLab", function () {
        return __WEBPACK_IMPORTED_MODULE_13__src_lab__["a"];
      });
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_14__src_hcl__ = __webpack_require__(143);
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "interpolateHcl", function () {
        return __WEBPACK_IMPORTED_MODULE_14__src_hcl__["a"];
      });
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "interpolateHclLong", function () {
        return __WEBPACK_IMPORTED_MODULE_14__src_hcl__["b"];
      });
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_15__src_cubehelix__ = __webpack_require__(144);
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "interpolateCubehelix", function () {
        return __WEBPACK_IMPORTED_MODULE_15__src_cubehelix__["b"];
      });
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "interpolateCubehelixLong", function () {
        return __WEBPACK_IMPORTED_MODULE_15__src_cubehelix__["a"];
      });
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_16__src_quantize__ = __webpack_require__(145);
      /* harmony reexport (binding) */__webpack_require__.d(__webpack_exports__, "quantize", function () {
        return __WEBPACK_IMPORTED_MODULE_16__src_quantize__["a"];
      });

      /***/
    },
    /* 134 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony export (immutable) */
      __webpack_exports__["a"] = lab;
      /* unused harmony export Lab */
      /* harmony export (immutable) */__webpack_exports__["b"] = hcl;
      /* unused harmony export Hcl */
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__define__ = __webpack_require__(23);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(22);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(53);

      var Kn = 18,
          Xn = 0.950470,

      // D65 standard referent
      Yn = 1,
          Zn = 1.088830,
          t0 = 4 / 29,
          t1 = 6 / 29,
          t2 = 3 * t1 * t1,
          t3 = t1 * t1 * t1;

      function labConvert(o) {
        if (o instanceof Lab) return new Lab(o.l, o.a, o.b, o.opacity);
        if (o instanceof Hcl) {
          var h = o.h * __WEBPACK_IMPORTED_MODULE_2__math__["a" /* deg2rad */];
          return new Lab(o.l, Math.cos(h) * o.c, Math.sin(h) * o.c, o.opacity);
        }
        if (!(o instanceof __WEBPACK_IMPORTED_MODULE_1__color__["b" /* Rgb */])) o = Object(__WEBPACK_IMPORTED_MODULE_1__color__["h" /* rgbConvert */])(o);
        var b = rgb2xyz(o.r),
            a = rgb2xyz(o.g),
            l = rgb2xyz(o.b),
            x = xyz2lab((0.4124564 * b + 0.3575761 * a + 0.1804375 * l) / Xn),
            y = xyz2lab((0.2126729 * b + 0.7151522 * a + 0.0721750 * l) / Yn),
            z = xyz2lab((0.0193339 * b + 0.1191920 * a + 0.9503041 * l) / Zn);
        return new Lab(116 * y - 16, 500 * (x - y), 200 * (y - z), o.opacity);
      }

      function lab(l, a, b, opacity) {
        return arguments.length === 1 ? labConvert(l) : new Lab(l, a, b, opacity == null ? 1 : opacity);
      }

      function Lab(l, a, b, opacity) {
        this.l = +l;
        this.a = +a;
        this.b = +b;
        this.opacity = +opacity;
      }

      Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Lab, lab, Object(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* Color */], {
        brighter: function brighter(k) {
          return new Lab(this.l + Kn * (k == null ? 1 : k), this.a, this.b, this.opacity);
        },
        darker: function darker(k) {
          return new Lab(this.l - Kn * (k == null ? 1 : k), this.a, this.b, this.opacity);
        },
        rgb: function rgb() {
          var y = (this.l + 16) / 116,
              x = isNaN(this.a) ? y : y + this.a / 500,
              z = isNaN(this.b) ? y : y - this.b / 200;
          y = Yn * lab2xyz(y);
          x = Xn * lab2xyz(x);
          z = Zn * lab2xyz(z);
          return new __WEBPACK_IMPORTED_MODULE_1__color__["b" /* Rgb */](xyz2rgb(3.2404542 * x - 1.5371385 * y - 0.4985314 * z), // D65 -> sRGB
          xyz2rgb(-0.9692660 * x + 1.8760108 * y + 0.0415560 * z), xyz2rgb(0.0556434 * x - 0.2040259 * y + 1.0572252 * z), this.opacity);
        }
      }));

      function xyz2lab(t) {
        return t > t3 ? Math.pow(t, 1 / 3) : t / t2 + t0;
      }

      function lab2xyz(t) {
        return t > t1 ? t * t * t : t2 * (t - t0);
      }

      function xyz2rgb(x) {
        return 255 * (x <= 0.0031308 ? 12.92 * x : 1.055 * Math.pow(x, 1 / 2.4) - 0.055);
      }

      function rgb2xyz(x) {
        return (x /= 255) <= 0.04045 ? x / 12.92 : Math.pow((x + 0.055) / 1.055, 2.4);
      }

      function hclConvert(o) {
        if (o instanceof Hcl) return new Hcl(o.h, o.c, o.l, o.opacity);
        if (!(o instanceof Lab)) o = labConvert(o);
        var h = Math.atan2(o.b, o.a) * __WEBPACK_IMPORTED_MODULE_2__math__["b" /* rad2deg */];
        return new Hcl(h < 0 ? h + 360 : h, Math.sqrt(o.a * o.a + o.b * o.b), o.l, o.opacity);
      }

      function hcl(h, c, l, opacity) {
        return arguments.length === 1 ? hclConvert(h) : new Hcl(h, c, l, opacity == null ? 1 : opacity);
      }

      function Hcl(h, c, l, opacity) {
        this.h = +h;
        this.c = +c;
        this.l = +l;
        this.opacity = +opacity;
      }

      Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Hcl, hcl, Object(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* Color */], {
        brighter: function brighter(k) {
          return new Hcl(this.h, this.c, this.l + Kn * (k == null ? 1 : k), this.opacity);
        },
        darker: function darker(k) {
          return new Hcl(this.h, this.c, this.l - Kn * (k == null ? 1 : k), this.opacity);
        },
        rgb: function rgb() {
          return labConvert(this).rgb();
        }
      }));

      /***/
    },
    /* 135 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony export (immutable) */
      __webpack_exports__["a"] = cubehelix;
      /* unused harmony export Cubehelix */
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__define__ = __webpack_require__(23);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(22);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_2__math__ = __webpack_require__(53);

      var A = -0.14861,
          B = +1.78277,
          C = -0.29227,
          D = -0.90649,
          E = +1.97294,
          ED = E * D,
          EB = E * B,
          BC_DA = B * C - D * A;

      function cubehelixConvert(o) {
        if (o instanceof Cubehelix) return new Cubehelix(o.h, o.s, o.l, o.opacity);
        if (!(o instanceof __WEBPACK_IMPORTED_MODULE_1__color__["b" /* Rgb */])) o = Object(__WEBPACK_IMPORTED_MODULE_1__color__["h" /* rgbConvert */])(o);
        var r = o.r / 255,
            g = o.g / 255,
            b = o.b / 255,
            l = (BC_DA * b + ED * r - EB * g) / (BC_DA + ED - EB),
            bl = b - l,
            k = (E * (g - l) - C * bl) / D,
            s = Math.sqrt(k * k + bl * bl) / (E * l * (1 - l)),

        // NaN if l=0 or l=1
        h = s ? Math.atan2(k, bl) * __WEBPACK_IMPORTED_MODULE_2__math__["b" /* rad2deg */] - 120 : NaN;
        return new Cubehelix(h < 0 ? h + 360 : h, s, l, o.opacity);
      }

      function cubehelix(h, s, l, opacity) {
        return arguments.length === 1 ? cubehelixConvert(h) : new Cubehelix(h, s, l, opacity == null ? 1 : opacity);
      }

      function Cubehelix(h, s, l, opacity) {
        this.h = +h;
        this.s = +s;
        this.l = +l;
        this.opacity = +opacity;
      }

      Object(__WEBPACK_IMPORTED_MODULE_0__define__["a" /* default */])(Cubehelix, cubehelix, Object(__WEBPACK_IMPORTED_MODULE_0__define__["b" /* extend */])(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* Color */], {
        brighter: function brighter(k) {
          k = k == null ? __WEBPACK_IMPORTED_MODULE_1__color__["c" /* brighter */] : Math.pow(__WEBPACK_IMPORTED_MODULE_1__color__["c" /* brighter */], k);
          return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
        },
        darker: function darker(k) {
          k = k == null ? __WEBPACK_IMPORTED_MODULE_1__color__["d" /* darker */] : Math.pow(__WEBPACK_IMPORTED_MODULE_1__color__["d" /* darker */], k);
          return new Cubehelix(this.h, this.s, this.l * k, this.opacity);
        },
        rgb: function rgb() {
          var h = isNaN(this.h) ? 0 : (this.h + 120) * __WEBPACK_IMPORTED_MODULE_2__math__["a" /* deg2rad */],
              l = +this.l,
              a = isNaN(this.s) ? 0 : this.s * l * (1 - l),
              cosh = Math.cos(h),
              sinh = Math.sin(h);
          return new __WEBPACK_IMPORTED_MODULE_1__color__["b" /* Rgb */](255 * (l + a * (A * cosh + B * sinh)), 255 * (l + a * (C * cosh + D * sinh)), 255 * (l + a * (E * cosh)), this.opacity);
        }
      }));

      /***/
    },
    /* 136 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony default export */
      __webpack_exports__["a"] = function (a, b) {
        return a = +a, b -= a, function (t) {
          return Math.round(a + b * t);
        };
      };

      /***/
    },
    /* 137 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "a", function () {
        return interpolateTransformCss;
      });
      /* harmony export (binding) */__webpack_require__.d(__webpack_exports__, "b", function () {
        return interpolateTransformSvg;
      });
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__number__ = __webpack_require__(14);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__parse__ = __webpack_require__(138);

      function interpolateTransform(parse, pxComma, pxParen, degParen) {

        function pop(s) {
          return s.length ? s.pop() + " " : "";
        }

        function translate(xa, ya, xb, yb, s, q) {
          if (xa !== xb || ya !== yb) {
            var i = s.push("translate(", null, pxComma, null, pxParen);
            q.push({ i: i - 4, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(xa, xb) }, { i: i - 2, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(ya, yb) });
          } else if (xb || yb) {
            s.push("translate(" + xb + pxComma + yb + pxParen);
          }
        }

        function rotate(a, b, s, q) {
          if (a !== b) {
            if (a - b > 180) b += 360;else if (b - a > 180) a += 360; // shortest path
            q.push({ i: s.push(pop(s) + "rotate(", null, degParen) - 2, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(a, b) });
          } else if (b) {
            s.push(pop(s) + "rotate(" + b + degParen);
          }
        }

        function skewX(a, b, s, q) {
          if (a !== b) {
            q.push({ i: s.push(pop(s) + "skewX(", null, degParen) - 2, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(a, b) });
          } else if (b) {
            s.push(pop(s) + "skewX(" + b + degParen);
          }
        }

        function scale(xa, ya, xb, yb, s, q) {
          if (xa !== xb || ya !== yb) {
            var i = s.push(pop(s) + "scale(", null, ",", null, ")");
            q.push({ i: i - 4, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(xa, xb) }, { i: i - 2, x: Object(__WEBPACK_IMPORTED_MODULE_0__number__["a" /* default */])(ya, yb) });
          } else if (xb !== 1 || yb !== 1) {
            s.push(pop(s) + "scale(" + xb + "," + yb + ")");
          }
        }

        return function (a, b) {
          var s = [],

          // string constants and placeholders
          q = []; // number interpolators
          a = parse(a), b = parse(b);
          translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
          rotate(a.rotate, b.rotate, s, q);
          skewX(a.skewX, b.skewX, s, q);
          scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
          a = b = null; // gc
          return function (t) {
            var i = -1,
                n = q.length,
                o;
            while (++i < n) {
              s[(o = q[i]).i] = o.x(t);
            }return s.join("");
          };
        };
      }

      var interpolateTransformCss = interpolateTransform(__WEBPACK_IMPORTED_MODULE_1__parse__["a" /* parseCss */], "px, ", "px)", "deg)");
      var interpolateTransformSvg = interpolateTransform(__WEBPACK_IMPORTED_MODULE_1__parse__["b" /* parseSvg */], ", ", ")", ")");

      /***/
    },
    /* 138 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony export (immutable) */
      __webpack_exports__["a"] = parseCss;
      /* harmony export (immutable) */__webpack_exports__["b"] = parseSvg;
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__decompose__ = __webpack_require__(139);

      var cssNode, cssRoot, cssView, svgNode;

      function parseCss(value) {
        if (value === "none") return __WEBPACK_IMPORTED_MODULE_0__decompose__["b" /* identity */];
        if (!cssNode) cssNode = document.createElement("DIV"), cssRoot = document.documentElement, cssView = document.defaultView;
        cssNode.style.transform = value;
        value = cssView.getComputedStyle(cssRoot.appendChild(cssNode), null).getPropertyValue("transform");
        cssRoot.removeChild(cssNode);
        value = value.slice(7, -1).split(",");
        return Object(__WEBPACK_IMPORTED_MODULE_0__decompose__["a" /* default */])(+value[0], +value[1], +value[2], +value[3], +value[4], +value[5]);
      }

      function parseSvg(value) {
        if (value == null) return __WEBPACK_IMPORTED_MODULE_0__decompose__["b" /* identity */];
        if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
        svgNode.setAttribute("transform", value);
        if (!(value = svgNode.transform.baseVal.consolidate())) return __WEBPACK_IMPORTED_MODULE_0__decompose__["b" /* identity */];
        value = value.matrix;
        return Object(__WEBPACK_IMPORTED_MODULE_0__decompose__["a" /* default */])(value.a, value.b, value.c, value.d, value.e, value.f);
      }

      /***/
    },
    /* 139 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "b", function () {
        return identity;
      });
      var degrees = 180 / Math.PI;

      var identity = {
        translateX: 0,
        translateY: 0,
        rotate: 0,
        skewX: 0,
        scaleX: 1,
        scaleY: 1
      };

      /* harmony default export */__webpack_exports__["a"] = function (a, b, c, d, e, f) {
        var scaleX, scaleY, skewX;
        if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
        if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
        if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
        if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
        return {
          translateX: e,
          translateY: f,
          rotate: Math.atan2(b, a) * degrees,
          skewX: Math.atan(skewX) * degrees,
          scaleX: scaleX,
          scaleY: scaleY
        };
      };

      /***/
    },
    /* 140 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";

      var rho = Math.SQRT2,
          rho2 = 2,
          rho4 = 4,
          epsilon2 = 1e-12;

      function cosh(x) {
        return ((x = Math.exp(x)) + 1 / x) / 2;
      }

      function sinh(x) {
        return ((x = Math.exp(x)) - 1 / x) / 2;
      }

      function tanh(x) {
        return ((x = Math.exp(2 * x)) - 1) / (x + 1);
      }

      // p0 = [ux0, uy0, w0]
      // p1 = [ux1, uy1, w1]
      /* harmony default export */__webpack_exports__["a"] = function (p0, p1) {
        var ux0 = p0[0],
            uy0 = p0[1],
            w0 = p0[2],
            ux1 = p1[0],
            uy1 = p1[1],
            w1 = p1[2],
            dx = ux1 - ux0,
            dy = uy1 - uy0,
            d2 = dx * dx + dy * dy,
            i,
            S;

        // Special case for u0 ≅ u1.
        if (d2 < epsilon2) {
          S = Math.log(w1 / w0) / rho;
          i = function i(t) {
            return [ux0 + t * dx, uy0 + t * dy, w0 * Math.exp(rho * t * S)];
          };
        }

        // General case.
        else {
            var d1 = Math.sqrt(d2),
                b0 = (w1 * w1 - w0 * w0 + rho4 * d2) / (2 * w0 * rho2 * d1),
                b1 = (w1 * w1 - w0 * w0 - rho4 * d2) / (2 * w1 * rho2 * d1),
                r0 = Math.log(Math.sqrt(b0 * b0 + 1) - b0),
                r1 = Math.log(Math.sqrt(b1 * b1 + 1) - b1);
            S = (r1 - r0) / rho;
            i = function i(t) {
              var s = t * S,
                  coshr0 = cosh(r0),
                  u = w0 / (rho2 * d1) * (coshr0 * tanh(rho * s + r0) - sinh(r0));
              return [ux0 + u * dx, uy0 + u * dy, w0 * coshr0 / cosh(rho * s + r0)];
            };
          }

        i.duration = S * 1000;

        return i;
      };

      /***/
    },
    /* 141 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "b", function () {
        return hslLong;
      });
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(6);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(12);

      function hsl(hue) {
        return function (start, end) {
          var h = hue((start = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["d" /* hsl */])(start)).h, (end = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["d" /* hsl */])(end)).h),
              s = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.s, end.s),
              l = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.l, end.l),
              opacity = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.opacity, end.opacity);
          return function (t) {
            start.h = h(t);
            start.s = s(t);
            start.l = l(t);
            start.opacity = opacity(t);
            return start + "";
          };
        };
      }

      /* harmony default export */__webpack_exports__["a"] = hsl(__WEBPACK_IMPORTED_MODULE_1__color__["c" /* hue */]);
      var hslLong = hsl(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */]);

      /***/
    },
    /* 142 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony export (immutable) */
      __webpack_exports__["a"] = lab;
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(6);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(12);

      function lab(start, end) {
        var l = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])((start = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["e" /* lab */])(start)).l, (end = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["e" /* lab */])(end)).l),
            a = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.a, end.a),
            b = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.b, end.b),
            opacity = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.opacity, end.opacity);
        return function (t) {
          start.l = l(t);
          start.a = a(t);
          start.b = b(t);
          start.opacity = opacity(t);
          return start + "";
        };
      }

      /***/
    },
    /* 143 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "b", function () {
        return hclLong;
      });
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(6);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(12);

      function hcl(hue) {
        return function (start, end) {
          var h = hue((start = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["c" /* hcl */])(start)).h, (end = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["c" /* hcl */])(end)).h),
              c = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.c, end.c),
              l = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.l, end.l),
              opacity = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.opacity, end.opacity);
          return function (t) {
            start.h = h(t);
            start.c = c(t);
            start.l = l(t);
            start.opacity = opacity(t);
            return start + "";
          };
        };
      }

      /* harmony default export */__webpack_exports__["a"] = hcl(__WEBPACK_IMPORTED_MODULE_1__color__["c" /* hue */]);
      var hclLong = hcl(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */]);

      /***/
    },
    /* 144 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony export (binding) */
      __webpack_require__.d(__webpack_exports__, "a", function () {
        return cubehelixLong;
      });
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_0_d3_color__ = __webpack_require__(6);
      /* harmony import */var __WEBPACK_IMPORTED_MODULE_1__color__ = __webpack_require__(12);

      function cubehelix(hue) {
        return function cubehelixGamma(y) {
          y = +y;

          function cubehelix(start, end) {
            var h = hue((start = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(start)).h, (end = Object(__WEBPACK_IMPORTED_MODULE_0_d3_color__["b" /* cubehelix */])(end)).h),
                s = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.s, end.s),
                l = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.l, end.l),
                opacity = Object(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */])(start.opacity, end.opacity);
            return function (t) {
              start.h = h(t);
              start.s = s(t);
              start.l = l(Math.pow(t, y));
              start.opacity = opacity(t);
              return start + "";
            };
          }

          cubehelix.gamma = cubehelixGamma;

          return cubehelix;
        }(1);
      }

      /* harmony default export */__webpack_exports__["b"] = cubehelix(__WEBPACK_IMPORTED_MODULE_1__color__["c" /* hue */]);
      var cubehelixLong = cubehelix(__WEBPACK_IMPORTED_MODULE_1__color__["a" /* default */]);

      /***/
    },
    /* 145 */
    /***/function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      /* harmony default export */
      __webpack_exports__["a"] = function (interpolator, n) {
        var samples = new Array(n);
        for (var i = 0; i < n; ++i) {
          samples[i] = interpolator(i / (n - 1));
        }return samples;
      };

      /***/
    },
    /* 146 */
    /***/function (module, exports, __webpack_require__) {

      module.exports = {
        Canvas: __webpack_require__(147),
        Group: __webpack_require__(62),
        Shape: __webpack_require__(1),
        Rect: __webpack_require__(64),
        Circle: __webpack_require__(65),
        Ellipse: __webpack_require__(66),
        Path: __webpack_require__(67),
        Text: __webpack_require__(68),
        Line: __webpack_require__(69),
        Image: __webpack_require__(70),
        Polygon: __webpack_require__(71),
        Polyline: __webpack_require__(72),
        Arc: __webpack_require__(73),
        Fan: __webpack_require__(74),
        Cubic: __webpack_require__(75),
        Quadratic: __webpack_require__(76),
        Marker: __webpack_require__(77),
        PathSegment: __webpack_require__(29),
        Event: __webpack_require__(61)
      };

      /***/
    },
    /* 147 */
    /***/function (module, exports, __webpack_require__) {

      var Util = __webpack_require__(0);
      var Event = __webpack_require__(61);
      var Group = __webpack_require__(62);
      var Timeline = __webpack_require__(52);

      var Canvas = function Canvas(cfg) {
        Canvas.superclass.constructor.call(this, cfg);
      };

      Canvas.CFG = {
        eventEnable: true,
        /**
         * 像素宽度
         * @type {Number}
         */
        width: null,
        /**
         * 像素高度
         * @type {Number}
         */
        height: null,
        /**
         * 画布宽度
         * @type {Number}
         */
        widthCanvas: null,
        /**
         * 画布高度
         * @type {Number}
         */
        heightCanvas: null,
        /**
         * CSS宽
         * @type {String}
         */
        widthStyle: null,
        /**
         * CSS高
         * @type {String}
         */
        heightStyle: null,
        /**
         * 容器DOM
         * @type {Object}
         */
        containerDOM: null,
        /**
         * 当前Canvas的DOM
         * @type {Object}
         */
        canvasDOM: null,
        /**
         * 屏幕像素比
         * @type {Number}
         */
        pixelRatio: null
      };

      Util.extend(Canvas, Group);

      Util.augment(Canvas, {
        init: function init() {
          Canvas.superclass.init.call(this);
          this._setGlobalParam();
          this._setDOM();
          this._setInitSize();
          this._setCanvas();
          this._scale();
          if (this.get('eventEnable')) {
            this._registEvents();
          }
        },
        getEmitter: function getEmitter(element, event) {
          if (element) {
            if (Util.isEmpty(element._getEvents())) {
              var parent = element.get('parent');
              if (parent && !event.propagationStopped) {
                return this.getEmitter(parent, event);
              }
            } else {
              return element;
            }
          }
        },
        _getEventObj: function _getEventObj(type, e, point, target) {
          var event = new Event(type, e, true, true);
          event.x = point.x;
          event.y = point.y;
          event.clientX = e.clientX;
          event.clientY = e.clientY;
          event.currentTarget = target;
          event.target = target;
          return event;
        },
        _triggerEvent: function _triggerEvent(type, e) {
          var point = this.getPointByClient(e.clientX, e.clientY);
          var shape = this.getShape(point.x, point.y);
          var emitObj = void 0;
          if (type === 'mousemove') {
            var preShape = this.get('preShape');
            if (preShape && preShape !== shape) {
              var mouseleave = this._getEventObj('mouseleave', e, point, preShape);
              emitObj = this.getEmitter(preShape, e);
              emitObj && emitObj.emit('mouseleave', mouseleave);
            }

            if (shape) {
              var mousemove = this._getEventObj('mousemove', e, point, shape);
              emitObj = this.getEmitter(shape, e);
              emitObj && emitObj.emit('mousemove', mousemove);

              if (preShape !== shape) {
                var mouseenter = this._getEventObj('mouseenter', e, point, shape);
                emitObj && emitObj.emit('mouseenter', mouseenter, e);
              }
            } else {
              var canvasmousemove = this._getEventObj('mousemove', e, point, this);
              this.emit('mousemove', canvasmousemove);
            }

            this.set('preShape', shape);
          } else {
            var event = this._getEventObj(type, e, point, shape || this);
            emitObj = this.getEmitter(shape, e);
            if (emitObj && emitObj !== this) {
              emitObj.emit(type, event);
            }
            this.emit(type, event);
          }

          var el = this.get('el');
          if (shape && !shape.get('destroyed')) {
            el.style.cursor = shape.attr('cursor') || 'default';
          }
        },
        _registEvents: function _registEvents() {
          var self = this;
          var el = self.get('el');
          var events = ['mouseout', 'mouseover', 'mousemove', 'mousedown', 'mouseup', 'click', 'dblclick'];
          Util.each(events, function (event) {
            el.addEventListener(event, function (e) {
              self._triggerEvent(event, e);
            }, false);
          });
          // special cases
          el.addEventListener('mouseout', function (e) {
            self._triggerEvent('mouseleave', e);
          }, false);
          el.addEventListener('mouseover', function (e) {
            self._triggerEvent('mouseenter', e);
          }, false);

          el.addEventListener('touchstart', function (e) {
            if (!Util.isEmpty(e.touches)) {
              self._triggerEvent('touchstart', e.touches[0]);
            }
          }, false);

          el.addEventListener('touchmove', function (e) {
            if (!Util.isEmpty(e.touches)) {
              self._triggerEvent('touchmove', e.touches[0]);
            }
          }, false);

          el.addEventListener('touchend', function (e) {
            if (!Util.isEmpty(e.changedTouches)) {
              self._triggerEvent('touchend', e.changedTouches[0]);
            }
          }, false);
        },
        _scale: function _scale() {
          var pixelRatio = this.get('pixelRatio');
          this.scale(pixelRatio, pixelRatio);
        },
        _setCanvas: function _setCanvas() {
          var canvasDOM = this.get('canvasDOM');
          var timeline = new Timeline();
          this.setSilent('el', canvasDOM);
          this.setSilent('timeline', timeline);
          this.setSilent('context', canvasDOM.getContext('2d'));
          this.setSilent('canvas', this);
        },
        _setGlobalParam: function _setGlobalParam() {
          var pixelRatio = this.get('pixelRatio');
          if (!pixelRatio) {
            this.set('pixelRatio', Util.getRatio());
          }
          return;
        },
        _setDOM: function _setDOM() {
          this._setContainer();
          this._setLayer();
        },
        _setContainer: function _setContainer() {
          var containerId = this.get('containerId');
          var containerDOM = this.get('containerDOM');
          if (!containerDOM) {
            containerDOM = document.getElementById(containerId);
            this.set('containerDOM', containerDOM);
          }
          Util.modifyCSS(containerDOM, {
            position: 'relative'
          });
        },
        _setLayer: function _setLayer() {
          var containerDOM = this.get('containerDOM');
          var canvasId = Util.uniqueId('canvas_');
          if (containerDOM) {
            var canvasDOM = Util.createDom('<canvas id="' + canvasId + '"></canvas>');
            containerDOM.appendChild(canvasDOM);
            this.set('canvasDOM', canvasDOM);
          }
        },
        _setInitSize: function _setInitSize() {
          this.changeSize(this.get('width'), this.get('height'));
        },
        _resize: function _resize() {
          var canvasDOM = this.get('canvasDOM');
          var widthCanvas = this.get('widthCanvas');
          var heightCanvas = this.get('heightCanvas');
          var widthStyle = this.get('widthStyle');
          var heightStyle = this.get('heightStyle');

          canvasDOM.style.width = widthStyle;
          canvasDOM.style.height = heightStyle;
          canvasDOM.setAttribute('width', widthCanvas);
          canvasDOM.setAttribute('height', heightCanvas);
        },
        getWidth: function getWidth() {
          var pixelRatio = this.get('pixelRatio');
          var width = this.get('width');
          return width * pixelRatio;
        },
        getHeight: function getHeight() {
          var pixelRatio = this.get('pixelRatio');
          var height = this.get('height');
          return height * pixelRatio;
        },
        changeSize: function changeSize(width, height) {
          var pixelRatio = this.get('pixelRatio');
          var widthCanvas = width * pixelRatio;
          var heightCanvas = height * pixelRatio;

          this.set('widthCanvas', widthCanvas);
          this.set('heightCanvas', heightCanvas);
          this.set('widthStyle', width + 'px');
          this.set('heightStyle', height + 'px');
          this.set('width', width);
          this.set('height', height);
          this._resize();
        },

        /**
         * 将窗口坐标转变成 canvas 坐标
         * @param  {Number} clientX 窗口x坐标
         * @param  {Number} clientY 窗口y坐标
         * @return {Object} canvas坐标
         */
        getPointByClient: function getPointByClient(clientX, clientY) {
          var el = this.get('el');
          var bbox = el.getBoundingClientRect();
          var width = bbox.right - bbox.left;
          var height = bbox.bottom - bbox.top;
          return {
            x: (clientX - bbox.left) * (el.width / width),
            y: (clientY - bbox.top) * (el.height / height)
          };
        },
        getClientByPoint: function getClientByPoint(x, y) {
          var el = this.get('el');
          var bbox = el.getBoundingClientRect();
          var width = bbox.right - bbox.left;
          var height = bbox.bottom - bbox.top;
          return {
            clientX: x / (el.width / width) + bbox.left,
            clientY: y / (el.height / height) + bbox.top
          };
        },
        beforeDraw: function beforeDraw() {
          var context = this.get('context');
          var el = this.get('el');
          context && context.clearRect(0, 0, el.width, el.height);
        },
        _beginDraw: function _beginDraw() {
          this.setSilent('toDraw', true);
        },
        _endDraw: function _endDraw() {
          this.setSilent('toDraw', false);
        },
        draw: function draw() {
          var self = this;
          function drawInner() {
            self.setSilent('animateHandler', Util.requestAnimationFrame(function () {
              self.setSilent('animateHandler', undefined);
              if (self.get('toDraw')) {
                drawInner();
              }
            }));
            self.beforeDraw();
            try {
              var context = self.get('context');
              Canvas.superclass.draw.call(self, context);
              // self._drawCanvas();
            } catch (ev) {
              // 绘制时异常，中断重绘
              console.warn('error in draw canvas, detail as:');
              console.warn(ev);
              self._endDraw();
            }
            self._endDraw();
          }

          if (self.get('destroyed')) {
            return;
          }
          if (self.get('animateHandler')) {
            this._beginDraw();
          } else {
            drawInner();
          }
        },
        destroy: function destroy() {
          var containerDOM = this.get('containerDOM');
          var canvasDOM = this.get('canvasDOM');
          if (canvasDOM && containerDOM) {
            containerDOM.removeChild(canvasDOM);
          }
          Canvas.superclass.destroy.call(this);
        }
      });

      module.exports = Canvas;

      /***/
    },
    /* 148 */
    /***/function (module, exports, __webpack_require__) {

      var Util = __webpack_require__(0);

      var ALIAS_ATTRS = ['strokeStyle', 'fillStyle', 'globalAlpha'];
      var CLIP_SHAPES = ['circle', 'ellipse', 'fan', 'polygon', 'rect', 'path'];
      var CAPITALIZED_ATTRS_MAP = {
        r: 'R',
        opacity: 'Opacity',
        lineWidth: 'LineWidth',
        clip: 'Clip',
        stroke: 'Stroke',
        fill: 'Fill',
        strokeOpacity: 'Stroke',
        fillOpacity: 'Fill',
        x: 'X',
        y: 'Y',
        rx: 'Rx',
        ry: 'Ry',
        re: 'Re',
        rs: 'Rs',
        width: 'Width',
        height: 'Height',
        img: 'Img',
        x1: 'X1',
        x2: 'X2',
        y1: 'Y1',
        y2: 'Y2',
        points: 'Points',
        p1: 'P1',
        p2: 'P2',
        p3: 'P3',
        p4: 'P4',
        text: 'Text',
        radius: 'Radius',
        textAlign: 'TextAlign',
        textBaseline: 'TextBaseline',
        font: 'Font',
        fontSize: 'FontSize',
        fontStyle: 'FontStyle',
        fontVariant: 'FontVariant',
        fontWeight: 'FontWeight',
        fontFamily: 'FontFamily',
        clockwise: 'Clockwise',
        startAngle: 'StartAngle',
        endAngle: 'EndAngle',
        path: 'Path'
      };
      var ALIAS_ATTRS_MAP = {
        stroke: 'strokeStyle',
        fill: 'fillStyle',
        opacity: 'globalAlpha'
      };

      module.exports = {
        canFill: false,
        canStroke: false,
        initAttrs: function initAttrs(attrs) {
          this.__attrs = {
            opacity: 1,
            fillOpacity: 1,
            strokeOpacity: 1
          };
          this.attr(Util.assign(this.getDefaultAttrs(), attrs));
          return this;
        },
        getDefaultAttrs: function getDefaultAttrs() {
          return {};
        },

        /**
         * 设置或者设置属性，有以下 4 种情形：
         *   - name 不存在, 则返回属性集合
         *   - name 为字符串，value 为空，获取属性值
         *   - name 为字符串，value 不为空，设置属性值，返回 this
         *   - name 为键值对，value 为空，设置属性值
         *
         * @param  {String | Object} name  属性名
         * @param  {*} value 属性值
         * @return {*} 属性值
         */
        attr: function attr(name, value) {
          var self = this;
          if (arguments.length === 0) {
            return self.__attrs;
          }

          if (Util.isObject(name)) {
            for (var k in name) {
              if (ALIAS_ATTRS.indexOf(k) === -1) {
                var v = name[k];
                self._setAttr(k, v);
              }
            }
            if (self._afterSetAttrAll) {
              self._afterSetAttrAll(name);
            }
            // self.setSilent('box', null);
            self.clearBBox();
            return self;
          }
          if (arguments.length === 2) {
            if (self._setAttr(name, value) !== false) {
              var m = '_afterSetAttr' + CAPITALIZED_ATTRS_MAP[name];
              if (self[m]) {
                self[m](value);
              }
            }
            // self.setSilent('box', null);
            self.clearBBox();
            return self;
          }
          return self._getAttr(name);
        },
        clearBBox: function clearBBox() {
          this.setSilent('box', null);
        },
        _afterSetAttrAll: function _afterSetAttrAll() {},

        // 属性获取触发函数
        _getAttr: function _getAttr(name) {
          return this.__attrs[name];
        },

        // 属性设置触发函数
        _setAttr: function _setAttr(name, value) {
          var self = this;
          if (name === 'clip') {
            self._setAttrClip(value);
            self.__attrs.clip = value;
          } else if (name === 'transform') {
            self._setAttrTrans(value);
          } else {
            self.__attrs[name] = value;
            var alias = ALIAS_ATTRS_MAP[name];
            if (alias) {
              self.__attrs[alias] = value;
            }
          }
          return self;
        },
        hasFill: function hasFill() {
          return this.canFill && this.__attrs.fillStyle;
        },
        hasStroke: function hasStroke() {
          return this.canStroke && this.__attrs.strokeStyle;
        },

        // 设置透明度
        _setAttrOpacity: function _setAttrOpacity(v) {
          this.__attrs.globalAlpha = v;
          return v;
        },
        _setAttrClip: function _setAttrClip(clip) {
          var self = this;
          if (clip && CLIP_SHAPES.indexOf(clip.type) > -1) {
            if (clip.get('canvas') === null) {
              clip = Util.clone(clip);
            }
            clip.set('parent', self.get('parent'));
            clip.set('canvas', self.get('canvas'));
            clip.set('context', self.get('context'));
            clip.inside = function (x, y) {
              var v = [x, y, 1];
              clip.invert(v, self.get('canvas')); // 已经在外面转换
              return clip._isPointInFill(v[0], v[1]);
            };
            return clip;
          }
          return null;
        },
        _setAttrTrans: function _setAttrTrans(value) {
          return this.transform(value);
        }
      };

      /***/
    },
    /* 149 */
    /***/function (module, exports, __webpack_require__) {

      var Util = __webpack_require__(0);
      var mat3 = __webpack_require__(2).mat3;
      var vec3 = __webpack_require__(2).vec3;

      // 是否未改变
      function isUnchanged(m) {
        return m[0] === 1 && m[1] === 0 && m[3] === 0 && m[4] === 1 && m[6] === 0 && m[7] === 0;
      }

      // 是否仅仅是scale
      function isScale(m) {
        return m[1] === 0 && m[3] === 0 && m[6] === 0 && m[7] === 0;
      }

      function multiple(m1, m2) {
        if (!isUnchanged(m2)) {
          if (isScale(m2)) {
            m1[0] *= m2[0];
            m1[4] *= m2[4];
          } else {
            mat3.multiply(m1, m1, m2);
          }
        }
      }

      module.exports = {
        initTransform: function initTransform() {
          this.attr('matrix', [1, 0, 0, 0, 1, 0, 0, 0, 1]);
        },
        translate: function translate(tx, ty) {
          var matrix = this.attr('matrix');
          mat3.translate(matrix, matrix, [tx, ty]);
          this.clearTotalMatrix();
          this.attr('matrix', matrix);
          return this;
        },
        rotate: function rotate(radian) {
          var matrix = this.attr('matrix');
          mat3.rotate(matrix, matrix, radian);
          this.clearTotalMatrix();
          this.attr('matrix', matrix);
          return this;
        },
        scale: function scale(s1, s2) {
          var matrix = this.attr('matrix');
          mat3.scale(matrix, matrix, [s1, s2]);
          this.clearTotalMatrix();
          this.attr('matrix', matrix);
          return this;
        },

        /**
         * 绕起始点旋转
         * @param  {Number} rotate 0～360
         */
        rotateAtStart: function rotateAtStart(rotate) {
          var x = this.attr('x');
          var y = this.attr('y');
          if (Math.abs(rotate) > Math.PI * 2) {
            rotate = rotate / 180 * Math.PI;
          }
          this.transform([['t', -x, -y], ['r', rotate], ['t', x, y]]);
        },

        /**
         * 移动的到位置
         * @param  {Number} x 移动到x
         * @param  {Number} y 移动到y
         */
        move: function move(x, y) {
          var cx = this.get('x') || 0; // 当前的x
          var cy = this.get('y') || 0; // 当前的y
          this.translate(x - cx, y - cy);
          this.set('x', x);
          this.set('y', y);
        },
        transform: function transform(ts) {
          var self = this;
          var matrix = self.attr('matrix');

          Util.each(ts, function (t) {
            switch (t[0]) {
              case 't':
                self.translate(t[1], t[2]);
                break;
              case 's':
                self.scale(t[1], t[2]);
                break;
              case 'r':
                self.rotate(t[1]);
                break;
              case 'm':
                self.attr('matrix', mat3.multiply([], matrix, t[1]));
                self.clearTotalMatrix();
                break;
              default:
                break;
            }
          });
          return self;
        },
        setTransform: function setTransform(ts) {
          this.attr('matrix', [1, 0, 0, 0, 1, 0, 0, 0, 1]);
          return this.transform(ts);
        },
        getMatrix: function getMatrix() {
          return this.attr('matrix');
        },
        setMatrix: function setMatrix(m) {
          this.attr('matrix', m);
          this.clearTotalMatrix();
          return this;
        },
        apply: function apply(v, root) {
          var m = void 0;
          if (root) {
            m = this._getMatrixByRoot(root);
          } else {
            m = this.attr('matrix');
          }
          vec3.transformMat3(v, v, m);
          return this;
        },

        // 获取到达指定根节点的矩阵
        _getMatrixByRoot: function _getMatrixByRoot(root) {
          var self = this;
          root = root || self;
          var parent = self;
          var parents = [];

          while (parent !== root) {
            parents.unshift(parent);
            parent = parent.get('parent');
          }
          parents.unshift(parent);

          var m = [1, 0, 0, 0, 1, 0, 0, 0, 1];
          Util.each(parents, function (child) {
            mat3.multiply(m, child.attr('matrix'), m);
          });
          return m;
        },

        /**
         * 应用到当前元素上的总的矩阵
         * @return {Matrix} 矩阵
         */
        getTotalMatrix: function getTotalMatrix() {
          var m = this.__cfg.totalMatrix;
          if (!m) {
            m = [1, 0, 0, 0, 1, 0, 0, 0, 1];
            var parent = this.__cfg.parent;
            if (parent) {
              var pm = parent.getTotalMatrix();
              multiple(m, pm);
            }

            multiple(m, this.attr('matrix'));
            this.__cfg.totalMatrix = m;
          }
          return m;
        },

        // 清除当前的矩阵
        clearTotalMatrix: function clearTotalMatrix() {
          // this.__cfg.totalMatrix = null;
        },
        invert: function invert(v) {
          var m = this.getTotalMatrix();
          // 单精屏幕下大多数矩阵没变化
          if (isScale(m)) {
            v[0] /= m[0];
            v[1] /= m[4];
          } else {
            var inm = mat3.invert([], m);
            if (inm) {
              vec3.transformMat3(v, v, inm);
            }
          }
          return this;
        },
        resetTransform: function resetTransform(context) {
          var mo = this.attr('matrix');
          // 不改变时
          if (!isUnchanged(mo)) {
            context.transform(mo[0], mo[1], mo[3], mo[4], mo[6], mo[7]);
          }
        }
      };

      /***/
    },
    /* 150 */
    /***/function (module, exports, __webpack_require__) {

      var Shape = __webpack_require__(1);
      Shape.Rect = __webpack_require__(64);
      Shape.Circle = __webpack_require__(65);
      Shape.Ellipse = __webpack_require__(66);
      Shape.Path = __webpack_require__(67);
      Shape.Text = __webpack_require__(68);
      Shape.Line = __webpack_require__(69);
      Shape.Image = __webpack_require__(70);
      Shape.Polygon = __webpack_require__(71);
      Shape.Polyline = __webpack_require__(72);
      Shape.Arc = __webpack_require__(73);
      Shape.Fan = __webpack_require__(74);
      Shape.Cubic = __webpack_require__(75);
      Shape.Quadratic = __webpack_require__(76);
      Shape.Marker = __webpack_require__(77);

      module.exports = Shape;

      /***/
    },
    /* 151 */
    /***/function (module, exports) {

      module.exports = {
        xAt: function xAt(psi, rx, ry, cx, t) {
          return rx * Math.cos(psi) * Math.cos(t) - ry * Math.sin(psi) * Math.sin(t) + cx;
        },
        yAt: function yAt(psi, rx, ry, cy, t) {
          return rx * Math.sin(psi) * Math.cos(t) + ry * Math.cos(psi) * Math.sin(t) + cy;
        },
        xExtrema: function xExtrema(psi, rx, ry) {
          return Math.atan(-ry / rx * Math.tan(psi));
        },
        yExtrema: function yExtrema(psi, rx, ry) {
          return Math.atan(ry / (rx * Math.tan(psi)));
        }
      };

      /***/
    }]
    /******/)
  );
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/@antv/hierarchy/build/hierarchy.js":
/*!*********************************************************!*\
  !*** ./node_modules/@antv/hierarchy/build/hierarchy.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? undefined : _typeof(exports)) === 'object' && ( false ? undefined : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(typeof self !== 'undefined' ? self : this, function () {
  return (/******/function (modules) {
      // webpackBootstrap
      /******/ // The module cache
      /******/var installedModules = {};
      /******/
      /******/ // The require function
      /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
          /******/return installedModules[moduleId].exports;
          /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
          /******/i: moduleId,
          /******/l: false,
          /******/exports: {}
          /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
      }
      /******/
      /******/
      /******/ // expose the modules object (__webpack_modules__)
      /******/__webpack_require__.m = modules;
      /******/
      /******/ // expose the module cache
      /******/__webpack_require__.c = installedModules;
      /******/
      /******/ // define getter function for harmony exports
      /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
          /******/Object.defineProperty(exports, name, {
            /******/configurable: false,
            /******/enumerable: true,
            /******/get: getter
            /******/ });
          /******/
        }
        /******/
      };
      /******/
      /******/ // getDefaultExport function for compatibility with non-harmony modules
      /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
          return module['default'];
        } :
        /******/function getModuleExports() {
          return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
      };
      /******/
      /******/ // Object.prototype.hasOwnProperty.call
      /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/
      /******/ // __webpack_public_path__
      /******/__webpack_require__.p = "";
      /******/
      /******/ // Load entry module and return exports
      /******/return __webpack_require__(__webpack_require__.s = 4);
      /******/
    }(
    /************************************************************************/
    /******/[
    /* 0 */
    /***/function (module, exports, __webpack_require__) {

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      var hierarchy = __webpack_require__(2);

      var Layout = function () {
        function Layout(root) {
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          _classCallCheck(this, Layout);

          var me = this;
          me.options = options;
          me.rootNode = hierarchy(root, options);
        }

        Layout.prototype.execute = function execute() {
          throw new Error('please override this method');
        };

        return Layout;
      }();

      module.exports = Layout;

      /***/
    },
    /* 1 */
    /***/function (module, exports, __webpack_require__) {

      var separateTree = __webpack_require__(3);
      var VALID_DIRECTIONS = ['LR', // left to right
      'RL', // right to left
      'TB', // top to bottom
      'BT', // bottom to top
      'H', // horizontal
      'V' // vertical
      ];
      var HORIZONTAL_DIRECTIONS = ['LR', 'RL', 'H'];
      var isHorizontal = function isHorizontal(direction) {
        return HORIZONTAL_DIRECTIONS.indexOf(direction) > -1;
      };
      var DEFAULT_DIRECTION = VALID_DIRECTIONS[0];

      module.exports = function (root, options, layoutAlgrithm) {
        var direction = options.direction || DEFAULT_DIRECTION;
        options.isHorizontal = isHorizontal(direction);
        if (direction && VALID_DIRECTIONS.indexOf(direction) === -1) {
          throw new TypeError('Invalid direction: ' + direction);
        }

        if (direction === VALID_DIRECTIONS[0]) {
          // LR
          layoutAlgrithm(root, options);
        } else if (direction === VALID_DIRECTIONS[1]) {
          // RL
          layoutAlgrithm(root, options);
          root.right2left();
        } else if (direction === VALID_DIRECTIONS[2]) {
          // TB
          layoutAlgrithm(root, options);
        } else if (direction === VALID_DIRECTIONS[3]) {
          // BT
          layoutAlgrithm(root, options);
          root.bottom2top();
        } else if (direction === VALID_DIRECTIONS[4] || direction === VALID_DIRECTIONS[5]) {
          // H or V
          // separate into left and right trees
          var _separateTree = separateTree(root, options),
              left = _separateTree.left,
              right = _separateTree.right;
          // do layout for left and right trees


          layoutAlgrithm(left, options);
          layoutAlgrithm(right, options);
          options.isHorizontal ? left.right2left() : left.bottom2top();
          // combine left and right trees
          right.translate(left.x - right.x, left.y - right.y);
          // translate root
          root.x = left.x;
          root.y = right.y;
          var bb = root.getBoundingBox();
          if (options.isHorizontal) {
            if (bb.top < 0) {
              root.translate(0, -bb.top);
            }
          } else {
            if (bb.left < 0) {
              root.translate(-bb.left, 0);
            }
          }
        }
        root.translate(-(root.x + root.width / 2 + root.hgap), -(root.y + root.height / 2 + root.vgap));
        return root;
      };

      /***/
    },
    /* 2 */
    /***/function (module, exports) {

      /* eslint-disable no-cond-assign */
      var PEM = 18;
      var DEFAULT_HEIGHT = PEM * 2;
      var DEFAULT_GAP = PEM;

      var DEFAULT_OPTIONS = {
        getId: function getId(d) {
          return d.id || d.name;
        },
        getHGap: function getHGap(d) {
          return d.hgap || DEFAULT_GAP;
        },
        getVGap: function getVGap(d) {
          return d.vgap || DEFAULT_GAP;
        },
        getChildren: function getChildren(d) {
          return d.children;
        },
        getHeight: function getHeight(d) {
          return d.height || DEFAULT_HEIGHT;
        },
        getWidth: function getWidth(d) {
          var name = d.name || ' ';
          return d.width || name.split('').length * PEM; // FIXME DO NOT get width like this
        }
      };

      function Node(data, options) {
        var me = this;
        me.vgap = me.hgap = 0;
        if (data instanceof Node) return data;
        me.data = data;
        /*
         * Gaps: filling space between nodes
         * (x, y) ----------------------
         * |            vgap            |
         * |    --------------------    h
         * | h |                    |   e
         * | g |                    |   i
         * | a |                    |   g
         * | p |                    |   h
         * |   ---------------------    t
         * |                            |
         *  -----------width------------
         */
        var hgap = options.getHGap(data);
        var vgap = options.getVGap(data);
        me.width = options.getWidth(data);
        me.height = options.getHeight(data);
        me.id = options.getId(data);
        me.x = me.y = 0;
        me.depth = 0;
        if (!me.children) {
          me.children = [];
        }
        me.addGap(hgap, vgap);
        return me;
      }

      Object.assign(Node.prototype, {
        isRoot: function isRoot() {
          return this.depth === 0;
        },
        isLeaf: function isLeaf() {
          return this.children.length === 0;
        },
        addGap: function addGap(hgap, vgap) {
          var me = this;
          me.hgap += hgap;
          me.vgap += vgap;
          me.width += 2 * hgap;
          me.height += 2 * vgap;
        },
        eachNode: function eachNode(callback) {
          // Depth First traverse
          var me = this;
          var nodes = [me];
          var current = void 0;
          while (current = nodes.pop()) {
            callback(current);
            nodes = nodes.concat(current.children);
          }
        },
        DFTraverse: function DFTraverse(callback) {
          // Depth First traverse
          this.eachNode(callback);
        },
        BFTraverse: function BFTraverse(callback) {
          // Breadth First traverse
          var me = this;
          var nodes = [me];
          var current = void 0;
          while (current = nodes.shift()) {
            callback(current);
            nodes = nodes.concat(current.children);
          }
        },
        getBoundingBox: function getBoundingBox() {
          // BBox for just one tree node
          var bb = {
            left: Number.MAX_VALUE,
            top: Number.MAX_VALUE,
            width: 0,
            height: 0
          };
          this.eachNode(function (node) {
            bb.left = Math.min(bb.left, node.x);
            bb.top = Math.min(bb.top, node.y);
            bb.width = Math.max(bb.width, node.x + node.width);
            bb.height = Math.max(bb.height, node.y + node.height);
          });
          return bb;
        },

        // translate
        translate: function translate() {
          var tx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var ty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

          this.eachNode(function (node) {
            node.x += tx;
            node.y += ty;
          });
        },
        right2left: function right2left() {
          var me = this;
          var bb = me.getBoundingBox();
          me.eachNode(function (node) {
            node.x = node.x - (node.x - bb.left) * 2 - node.width;
            // node.x = - node.x;
          });
          me.translate(bb.width, 0);
        },
        bottom2top: function bottom2top() {
          var me = this;
          var bb = me.getBoundingBox();
          me.eachNode(function (node) {
            node.y = node.y - (node.y - bb.top) * 2 - node.height;
            // node.y = - node.y;
          });
          me.translate(0, bb.height);
        }
      });

      function hierarchy(data) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var isolated = arguments[2];

        options = Object.assign({}, DEFAULT_OPTIONS, options);
        var root = new Node(data, options);
        var nodes = [root];
        var node = void 0;
        if (!isolated && !data.collapsed) {
          while (node = nodes.pop()) {
            if (!node.data.collapsed) {
              var children = options.getChildren(node.data);
              var length = children ? children.length : 0;
              node.children = new Array(length);
              if (children && length) {
                for (var i = 0; i < length; i++) {
                  var child = new Node(children[i], options);
                  node.children[i] = child;
                  nodes.push(child);
                  child.parent = node;
                  child.depth = node.depth + 1;
                }
              }
            }
          }
        }
        return root;
      }

      module.exports = hierarchy;

      /***/
    },
    /* 3 */
    /***/function (module, exports, __webpack_require__) {

      var hierarchy = __webpack_require__(2);

      module.exports = function (root, options) {
        // separate into left and right trees
        var left = hierarchy(root.data, options, true); // root only
        var right = hierarchy(root.data, options, true); // root only
        // automatically
        var treeSize = root.children.length;
        var rightTreeSize = Math.round(treeSize / 2);
        // separate left and right tree by meta data
        var getSide = options.getSide || function (child, index) {
          if (index < rightTreeSize) {
            return 'right';
          }
          return 'left';
        };
        for (var i = 0; i < treeSize; i++) {
          var child = root.children[i];
          var side = getSide(child, i);
          if (side === 'right') {
            right.children.push(child);
          } else {
            left.children.push(child);
          }
        }
        left.eachNode(function (node) {
          if (!node.isRoot()) {
            node.side = 'left';
          }
        });
        right.eachNode(function (node) {
          if (!node.isRoot()) {
            node.side = 'right';
          }
        });
        return {
          left: left,
          right: right
        };
      };

      /***/
    },
    /* 4 */
    /***/function (module, exports, __webpack_require__) {

      var hierarchy = {
        compactBox: __webpack_require__(5),
        dendrogram: __webpack_require__(7),
        indented: __webpack_require__(9),
        mindmap: __webpack_require__(11)
      };

      module.exports = hierarchy;

      /***/
    },
    /* 5 */
    /***/function (module, exports, __webpack_require__) {

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      var TreeLayout = __webpack_require__(0);
      var nonLayeredTidyTree = __webpack_require__(6);
      var doTreeLayout = __webpack_require__(1);

      var CompactBoxTreeLayout = function (_TreeLayout) {
        _inherits(CompactBoxTreeLayout, _TreeLayout);

        function CompactBoxTreeLayout() {
          _classCallCheck(this, CompactBoxTreeLayout);

          return _possibleConstructorReturn(this, _TreeLayout.apply(this, arguments));
        }

        CompactBoxTreeLayout.prototype.execute = function execute() {
          var me = this;
          return doTreeLayout(me.rootNode, me.options, nonLayeredTidyTree);
        };

        return CompactBoxTreeLayout;
      }(TreeLayout);

      var DEFAULT_OPTIONS = {};

      function compactBoxLayout(root, options) {
        options = Object.assign({}, DEFAULT_OPTIONS, options);
        return new CompactBoxTreeLayout(root, options).execute();
      }

      module.exports = compactBoxLayout;

      /***/
    },
    /* 6 */
    /***/function (module, exports) {

      // wrap tree node
      function WrappedTree(w, h, y) {
        var c = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];

        var me = this;
        // size
        me.w = w || 0;
        me.h = h || 0;

        // position
        me.y = y || 0;
        me.x = 0;

        // children
        me.c = c || [];
        me.cs = c.length;

        // modified
        me.prelim = 0;
        me.mod = 0;
        me.shift = 0;
        me.change = 0;

        // left/right tree
        me.tl = null;
        me.tr = null;

        // extreme left/right tree
        me.el = null;
        me.er = null;

        // modified left/right tree
        me.msel = 0;
        me.mser = 0;
      }

      WrappedTree.fromNode = function (root, isHorizontal) {
        if (!root) return null;
        var children = [];
        root.children.forEach(function (child) {
          children.push(WrappedTree.fromNode(child, isHorizontal));
        });
        if (isHorizontal) return new WrappedTree(root.height, root.width, root.x, children);
        return new WrappedTree(root.width, root.height, root.y, children);
      };

      // node utils
      function moveRight(node, move, isHorizontal) {
        if (isHorizontal) {
          node.y += move;
        } else {
          node.x += move;
        }
        node.children.forEach(function (child) {
          moveRight(child, move, isHorizontal);
        });
      }

      function getMin(node, isHorizontal) {
        var res = isHorizontal ? node.y : node.x;
        node.children.forEach(function (child) {
          res = Math.min(getMin(child, isHorizontal), res);
        });
        return res;
      }

      function normalize(node, isHorizontal) {
        var min = getMin(node, isHorizontal);
        moveRight(node, -min, isHorizontal);
      }

      function convertBack(converted /* WrappedTree */, root /* TreeNode */, isHorizontal) {
        if (isHorizontal) {
          root.y = converted.x;
        } else {
          root.x = converted.x;
        }
        converted.c.forEach(function (child, i) {
          convertBack(child, root.children[i], isHorizontal);
        });
      }

      function layer(node, isHorizontal) {
        var d = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        if (isHorizontal) {
          node.x = d;
          d += node.width;
        } else {
          node.y = d;
          d += node.height;
        }
        node.children.forEach(function (child) {
          layer(child, isHorizontal, d);
        });
      }

      module.exports = function (root) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        var isHorizontal = options.isHorizontal;
        function firstWalk(t) {
          if (t.cs === 0) {
            setExtremes(t);
            return;
          }
          firstWalk(t.c[0]);
          var ih = updateIYL(bottom(t.c[0].el), 0, null);
          for (var i = 1; i < t.cs; ++i) {
            firstWalk(t.c[i]);
            var min = bottom(t.c[i].er);
            separate(t, i, ih);
            ih = updateIYL(min, i, ih);
          }
          positionRoot(t);
          setExtremes(t);
        }

        function setExtremes(t) {
          if (t.cs === 0) {
            t.el = t;
            t.er = t;
            t.msel = t.mser = 0;
          } else {
            t.el = t.c[0].el;
            t.msel = t.c[0].msel;
            t.er = t.c[t.cs - 1].er;
            t.mser = t.c[t.cs - 1].mser;
          }
        }

        function separate(t, i, ih) {
          var sr = t.c[i - 1];
          var mssr = sr.mod;
          var cl = t.c[i];
          var mscl = cl.mod;
          while (sr !== null && cl !== null) {
            if (bottom(sr) > ih.low) ih = ih.nxt;
            var dist = mssr + sr.prelim + sr.w - (mscl + cl.prelim);
            if (dist > 0) {
              mscl += dist;
              moveSubtree(t, i, ih.index, dist);
            }
            var sy = bottom(sr);
            var cy = bottom(cl);
            if (sy <= cy) {
              sr = nextRightContour(sr);
              if (sr !== null) mssr += sr.mod;
            }
            if (sy >= cy) {
              cl = nextLeftContour(cl);
              if (cl !== null) mscl += cl.mod;
            }
          }
          if (!sr && !!cl) {
            setLeftThread(t, i, cl, mscl);
          } else if (!!sr && !cl) {
            setRightThread(t, i, sr, mssr);
          }
        }

        function moveSubtree(t, i, si, dist) {
          t.c[i].mod += dist;
          t.c[i].msel += dist;
          t.c[i].mser += dist;
          distributeExtra(t, i, si, dist);
        }

        function nextLeftContour(t) {
          return t.cs === 0 ? t.tl : t.c[0];
        }

        function nextRightContour(t) {
          return t.cs === 0 ? t.tr : t.c[t.cs - 1];
        }

        function bottom(t) {
          return t.y + t.h;
        }

        function setLeftThread(t, i, cl, modsumcl) {
          var li = t.c[0].el;
          li.tl = cl;
          var diff = modsumcl - cl.mod - t.c[0].msel;
          li.mod += diff;
          li.prelim -= diff;
          t.c[0].el = t.c[i].el;
          t.c[0].msel = t.c[i].msel;
        }

        function setRightThread(t, i, sr, modsumsr) {
          var ri = t.c[i].er;
          ri.tr = sr;
          var diff = modsumsr - sr.mod - t.c[i].mser;
          ri.mod += diff;
          ri.prelim -= diff;
          t.c[i].er = t.c[i - 1].er;
          t.c[i].mser = t.c[i - 1].mser;
        }

        function positionRoot(t) {
          t.prelim = (t.c[0].prelim + t.c[0].mod + t.c[t.cs - 1].mod + t.c[t.cs - 1].prelim + t.c[t.cs - 1].w) / 2 - t.w / 2;
        }

        function secondWalk(t, modsum) {
          modsum += t.mod;
          t.x = t.prelim + modsum;
          addChildSpacing(t);
          for (var i = 0; i < t.cs; i++) {
            secondWalk(t.c[i], modsum);
          }
        }

        function distributeExtra(t, i, si, dist) {
          if (si !== i - 1) {
            var nr = i - si;
            t.c[si + 1].shift += dist / nr;
            t.c[i].shift -= dist / nr;
            t.c[i].change -= dist - dist / nr;
          }
        }

        function addChildSpacing(t) {
          var d = 0;
          var modsumdelta = 0;
          for (var i = 0; i < t.cs; i++) {
            d += t.c[i].shift;
            modsumdelta += d + t.c[i].change;
            t.c[i].mod += modsumdelta;
          }
        }

        function updateIYL(low, index, ih) {
          while (ih !== null && low >= ih.low) {
            ih = ih.nxt;
          }
          return {
            low: low,
            index: index,
            nxt: ih
          };
        }

        // do layout
        layer(root, isHorizontal);
        var wt = WrappedTree.fromNode(root, isHorizontal);
        firstWalk(wt);
        secondWalk(wt, 0);
        convertBack(wt, root, isHorizontal);
        normalize(root, isHorizontal);

        return root;
      };

      /***/
    },
    /* 7 */
    /***/function (module, exports, __webpack_require__) {

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      var TreeLayout = __webpack_require__(0);
      var dendrogram = __webpack_require__(8);
      var doTreeLayout = __webpack_require__(1);

      var DendrogramLayout = function (_TreeLayout) {
        _inherits(DendrogramLayout, _TreeLayout);

        function DendrogramLayout() {
          _classCallCheck(this, DendrogramLayout);

          return _possibleConstructorReturn(this, _TreeLayout.apply(this, arguments));
        }

        DendrogramLayout.prototype.execute = function execute() {
          var me = this;
          me.rootNode.width = 0;
          return doTreeLayout(me.rootNode, me.options, dendrogram);
        };

        return DendrogramLayout;
      }(TreeLayout);

      var DEFAULT_OPTIONS = {};

      function dendrogramLayout(root, options) {
        options = Object.assign({}, DEFAULT_OPTIONS, options);
        return new DendrogramLayout(root, options).execute();
      }

      module.exports = dendrogramLayout;

      /***/
    },
    /* 8 */
    /***/function (module, exports) {

      // wrap tree node
      // TODO considering size
      function WrappedTree() {
        var height = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var children = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

        var me = this;
        me.x = me.y = 0;
        me.leftChild = me.rightChild = null;
        me.height = 0;
        me.children = children;
      }

      var DEFAULT_OPTIONS = {
        isHorizontal: true,
        nodeSep: 20,
        nodeSize: 20,
        rankSep: 200,
        subTreeSep: 10
      };

      function convertBack(converted /* WrappedTree */, root /* TreeNode */, isHorizontal) {
        if (isHorizontal) {
          root.x = converted.x;
          root.y = converted.y;
        } else {
          root.x = converted.y;
          root.y = converted.x;
        }
        converted.children.forEach(function (child, i) {
          convertBack(child, root.children[i], isHorizontal);
        });
      }

      module.exports = function (root) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        options = Object.assign({}, DEFAULT_OPTIONS, options);

        var maxDepth = 0;
        function wrappedTreeFromNode(n) {
          if (!n) return null;
          n.width = 0;
          if (n.depth && n.depth > maxDepth) {
            maxDepth = n.depth; // get the max depth
          }
          var children = n.children;
          var childrenCount = children.length;
          var t = new WrappedTree(n.height, []);
          children.forEach(function (child, i) {
            var childWT = wrappedTreeFromNode(child);
            t.children.push(childWT);
            if (i === 0) {
              // t.leftChild = childWT.leftChild ? childWT.leftChild : childWT
              t.leftChild = childWT;
            }
            if (i === childrenCount - 1) {
              // t.rightChild = childWT.rightChild ? childWT.rightChild : childWT
              t.rightChild = childWT;
            }
          });
          t.originNode = n;
          t.isLeaf = n.isLeaf();
          return t;
        }

        function getDrawingDepth(t) {
          if (t.isLeaf || t.children.length === 0) {
            t.drawingDepth = maxDepth;
          } else {
            var depths = t.children.map(function (child) {
              return getDrawingDepth(child);
            });
            var minChildDepth = Math.min.apply(null, depths);
            t.drawingDepth = minChildDepth - 1;
          }
          return t.drawingDepth;
        }

        var prevLeaf = void 0;

        function position(t) {
          t.x = t.drawingDepth * options.rankSep;
          if (t.isLeaf) {
            t.y = 0;
            if (prevLeaf) {
              t.y = prevLeaf.y + prevLeaf.height + options.nodeSep;
              if (t.originNode.parent !== prevLeaf.originNode.parent) {
                t.y += options.subTreeSep;
              }
            }
            prevLeaf = t;
          } else {
            t.children.forEach(function (child) {
              position(child);
            });
            t.y = (t.leftChild.y + t.rightChild.y) / 2;
          }
        }

        // wrap node
        var wt = wrappedTreeFromNode(root);
        // get depth for drawing
        getDrawingDepth(wt);
        // get position
        position(wt);
        // get x, y
        convertBack(wt, root, options.isHorizontal);
        return root;
      };

      /***/
    },
    /* 9 */
    /***/function (module, exports, __webpack_require__) {

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      var TreeLayout = __webpack_require__(0);
      var indentedTree = __webpack_require__(10);
      var separateTree = __webpack_require__(3);

      var VALID_DIRECTIONS = ['LR', // left to right
      'RL', // right to left
      'H' // horizontal
      ];
      var DEFAULT_DIRECTION = VALID_DIRECTIONS[0];

      var IndentedLayout = function (_TreeLayout) {
        _inherits(IndentedLayout, _TreeLayout);

        function IndentedLayout() {
          _classCallCheck(this, IndentedLayout);

          return _possibleConstructorReturn(this, _TreeLayout.apply(this, arguments));
        }

        IndentedLayout.prototype.execute = function execute() {
          var me = this;
          var options = me.options;
          var root = me.rootNode;
          options.isHorizontal = true;
          var indent = options.indent;
          var direction = options.direction || DEFAULT_DIRECTION;
          if (direction && VALID_DIRECTIONS.indexOf(direction) === -1) {
            throw new TypeError('Invalid direction: ' + direction);
          }
          if (direction === VALID_DIRECTIONS[0]) {
            // LR
            indentedTree(root, indent);
          } else if (direction === VALID_DIRECTIONS[1]) {
            // RL
            indentedTree(root, indent);
            root.right2left();
          } else if (direction === VALID_DIRECTIONS[2]) {
            // H
            // separate into left and right trees
            var _separateTree = separateTree(root, options),
                left = _separateTree.left,
                right = _separateTree.right;

            indentedTree(left, indent);
            left.right2left();
            indentedTree(right, indent);
            var bbox = left.getBoundingBox();
            right.translate(bbox.width, 0);
            root.x = right.x - root.width / 2;
          }
          return root;
        };

        return IndentedLayout;
      }(TreeLayout);

      var DEFAULT_OPTIONS = {};

      function indentedLayout(root, options) {
        options = Object.assign({}, DEFAULT_OPTIONS, options);
        return new IndentedLayout(root, options).execute();
      }

      module.exports = indentedLayout;

      /***/
    },
    /* 10 */
    /***/function (module, exports) {

      var DEFAULT_INDENT = 20;
      function positionNode(node, previousNode, dx) {
        node.x += dx * node.depth;
        node.y = previousNode ? previousNode.y + previousNode.height : 0;
      }
      module.exports = function (root) {
        var indent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_INDENT;

        var previousNode = null;
        root.eachNode(function (node) {
          positionNode(node, previousNode, indent);
          previousNode = node;
        });
      };

      /***/
    },
    /* 11 */
    /***/function (module, exports, __webpack_require__) {

      function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
          throw new TypeError("Cannot call a class as a function");
        }
      }

      function _possibleConstructorReturn(self, call) {
        if (!self) {
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
      }

      function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
          throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
      }

      var TreeLayout = __webpack_require__(0);
      var mindmap = __webpack_require__(12);
      var doTreeLayout = __webpack_require__(1);

      var MindmapLayout = function (_TreeLayout) {
        _inherits(MindmapLayout, _TreeLayout);

        function MindmapLayout() {
          _classCallCheck(this, MindmapLayout);

          return _possibleConstructorReturn(this, _TreeLayout.apply(this, arguments));
        }

        MindmapLayout.prototype.execute = function execute() {
          var me = this;
          return doTreeLayout(me.rootNode, me.options, mindmap);
        };

        return MindmapLayout;
      }(TreeLayout);

      var DEFAULT_OPTIONS = {};

      function mindmapLayout(root, options) {
        options = Object.assign({}, DEFAULT_OPTIONS, options);
        return new MindmapLayout(root, options).execute();
      }

      module.exports = mindmapLayout;

      /***/
    },
    /* 12 */
    /***/function (module, exports) {

      function secondWalk(node, options) {
        var totalHeight = 0;
        if (!node.children.length) {
          totalHeight = node.height;
        } else {
          node.children.forEach(function (c) {
            totalHeight += secondWalk(c, options);
          });
        }
        node._subTreeSep = options.getSubTreeSep(node.data);
        node.totalHeight = Math.max(node.height, totalHeight) + 2 * node._subTreeSep;
        return node.totalHeight;
      }

      function thirdWalk(node) {
        var children = node.children;
        var len = children.length;
        if (len) {
          children.forEach(function (c) {
            thirdWalk(c);
          });
          var first = children[0];
          var last = children[len - 1];
          var childrenHeight = last.y - first.y + last.height;
          var childrenTotalHeight = 0;
          children.forEach(function (child) {
            childrenTotalHeight += child.totalHeight;
          });
          if (childrenHeight > node.height) {
            // 当子节点总高度大于父节点高度
            node.y = first.y + childrenHeight / 2 - node.height / 2;
          } else if (children.length !== 1 || node.height > childrenTotalHeight) {
            // 多于一个子节点或者父节点大于所有子节点的总高度
            var offset = node.y + (node.height - childrenHeight) / 2 - first.y;
            children.forEach(function (c) {
              c.translate(0, offset);
            });
          } else {
            // 只有一个子节点
            node.y = (first.y + first.height / 2 + last.y + last.height / 2) / 2 - node.height / 2;
          }
        }
      }

      var DEFAULT_OPTIONS = {
        getSubTreeSep: function getSubTreeSep() {
          return 0;
        }
      };

      module.exports = function (root) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        options = Object.assign({}, DEFAULT_OPTIONS, options);
        root.parent = {
          x: 0,
          width: 0,
          height: 0,
          y: 0
        };
        // first walk
        root.BFTraverse(function (node) {
          node.x = node.parent.x + node.parent.width; // simply get x
        });
        root.parent = null;
        // second walk
        secondWalk(root, options); // assign sub tree totalHeight
        // adjusting
        // separating nodes
        root.startY = 0;
        root.y = root.totalHeight / 2 - root.height / 2;
        root.eachNode(function (node) {
          var children = node.children;
          var len = children.length;
          if (len) {
            var first = children[0];
            first.startY = node.startY + node._subTreeSep;
            if (len === 1) {
              first.y = node.y + node.height / 2 - first.height / 2;
            } else {
              first.y = first.startY + first.totalHeight / 2 - first.height / 2;
              for (var i = 1; i < len; i++) {
                var c = children[i];
                c.startY = children[i - 1].startY + children[i - 1].totalHeight;
                c.y = c.startY + c.totalHeight / 2 - c.height / 2;
              }
            }
          }
        });

        // third walk
        thirdWalk(root);
      };

      /***/
    }]
    /******/)
  );
});
//# sourceMappingURL=hierarchy.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_DataView.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_DataView.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;

/***/ }),

/***/ "./node_modules/lodash/_Hash.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_Hash.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(/*! ./_hashClear */ "./node_modules/lodash/_hashClear.js"),
    hashDelete = __webpack_require__(/*! ./_hashDelete */ "./node_modules/lodash/_hashDelete.js"),
    hashGet = __webpack_require__(/*! ./_hashGet */ "./node_modules/lodash/_hashGet.js"),
    hashHas = __webpack_require__(/*! ./_hashHas */ "./node_modules/lodash/_hashHas.js"),
    hashSet = __webpack_require__(/*! ./_hashSet */ "./node_modules/lodash/_hashSet.js");

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;

/***/ }),

/***/ "./node_modules/lodash/_ListCache.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_ListCache.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(/*! ./_listCacheClear */ "./node_modules/lodash/_listCacheClear.js"),
    listCacheDelete = __webpack_require__(/*! ./_listCacheDelete */ "./node_modules/lodash/_listCacheDelete.js"),
    listCacheGet = __webpack_require__(/*! ./_listCacheGet */ "./node_modules/lodash/_listCacheGet.js"),
    listCacheHas = __webpack_require__(/*! ./_listCacheHas */ "./node_modules/lodash/_listCacheHas.js"),
    listCacheSet = __webpack_require__(/*! ./_listCacheSet */ "./node_modules/lodash/_listCacheSet.js");

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;

/***/ }),

/***/ "./node_modules/lodash/_Map.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Map.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;

/***/ }),

/***/ "./node_modules/lodash/_MapCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_MapCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(/*! ./_mapCacheClear */ "./node_modules/lodash/_mapCacheClear.js"),
    mapCacheDelete = __webpack_require__(/*! ./_mapCacheDelete */ "./node_modules/lodash/_mapCacheDelete.js"),
    mapCacheGet = __webpack_require__(/*! ./_mapCacheGet */ "./node_modules/lodash/_mapCacheGet.js"),
    mapCacheHas = __webpack_require__(/*! ./_mapCacheHas */ "./node_modules/lodash/_mapCacheHas.js"),
    mapCacheSet = __webpack_require__(/*! ./_mapCacheSet */ "./node_modules/lodash/_mapCacheSet.js");

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
    var index = -1,
        length = entries == null ? 0 : entries.length;

    this.clear();
    while (++index < length) {
        var entry = entries[index];
        this.set(entry[0], entry[1]);
    }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;

/***/ }),

/***/ "./node_modules/lodash/_Promise.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_Promise.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;

/***/ }),

/***/ "./node_modules/lodash/_Set.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/_Set.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;

/***/ }),

/***/ "./node_modules/lodash/_SetCache.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_SetCache.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js"),
    setCacheAdd = __webpack_require__(/*! ./_setCacheAdd */ "./node_modules/lodash/_setCacheAdd.js"),
    setCacheHas = __webpack_require__(/*! ./_setCacheHas */ "./node_modules/lodash/_setCacheHas.js");

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
    var index = -1,
        length = values == null ? 0 : values.length;

    this.__data__ = new MapCache();
    while (++index < length) {
        this.add(values[index]);
    }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;

/***/ }),

/***/ "./node_modules/lodash/_Stack.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_Stack.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    stackClear = __webpack_require__(/*! ./_stackClear */ "./node_modules/lodash/_stackClear.js"),
    stackDelete = __webpack_require__(/*! ./_stackDelete */ "./node_modules/lodash/_stackDelete.js"),
    stackGet = __webpack_require__(/*! ./_stackGet */ "./node_modules/lodash/_stackGet.js"),
    stackHas = __webpack_require__(/*! ./_stackHas */ "./node_modules/lodash/_stackHas.js"),
    stackSet = __webpack_require__(/*! ./_stackSet */ "./node_modules/lodash/_stackSet.js");

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;

/***/ }),

/***/ "./node_modules/lodash/_Symbol.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_Symbol.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var _Symbol = root.Symbol;

module.exports = _Symbol;

/***/ }),

/***/ "./node_modules/lodash/_Uint8Array.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_Uint8Array.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;

/***/ }),

/***/ "./node_modules/lodash/_WeakMap.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_WeakMap.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;

/***/ }),

/***/ "./node_modules/lodash/_arrayEach.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayEach.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;

/***/ }),

/***/ "./node_modules/lodash/_arrayFilter.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_arrayFilter.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;

/***/ }),

/***/ "./node_modules/lodash/_arrayIncludes.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayIncludes.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(/*! ./_baseIndexOf */ "./node_modules/lodash/_baseIndexOf.js");

/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && baseIndexOf(array, value, 0) > -1;
}

module.exports = arrayIncludes;

/***/ }),

/***/ "./node_modules/lodash/_arrayIncludesWith.js":
/*!***************************************************!*\
  !*** ./node_modules/lodash/_arrayIncludesWith.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

module.exports = arrayIncludesWith;

/***/ }),

/***/ "./node_modules/lodash/_arrayLikeKeys.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_arrayLikeKeys.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(/*! ./_baseTimes */ "./node_modules/lodash/_baseTimes.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) && !(skipIndexes && (
    // Safari 9 has enumerable `arguments.length` in strict mode.
    key == 'length' ||
    // Node.js 0.10 has enumerable non-index properties on buffers.
    isBuff && (key == 'offset' || key == 'parent') ||
    // PhantomJS 2 has enumerable non-index properties on typed arrays.
    isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset') ||
    // Skip index properties.
    isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;

/***/ }),

/***/ "./node_modules/lodash/_arrayMap.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_arrayMap.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;

/***/ }),

/***/ "./node_modules/lodash/_arrayPush.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arrayPush.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;

/***/ }),

/***/ "./node_modules/lodash/_arraySome.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_arraySome.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;

/***/ }),

/***/ "./node_modules/lodash/_asciiToArray.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_asciiToArray.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

module.exports = asciiToArray;

/***/ }),

/***/ "./node_modules/lodash/_assignValue.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_assignValue.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) || value === undefined && !(key in object)) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;

/***/ }),

/***/ "./node_modules/lodash/_assocIndexOf.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_assocIndexOf.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js");

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;

/***/ }),

/***/ "./node_modules/lodash/_baseAssign.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseAssign.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;

/***/ }),

/***/ "./node_modules/lodash/_baseAssignIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseAssignIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;

/***/ }),

/***/ "./node_modules/lodash/_baseAssignValue.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseAssignValue.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(/*! ./_defineProperty */ "./node_modules/lodash/_defineProperty.js");

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;

/***/ }),

/***/ "./node_modules/lodash/_baseClone.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseClone.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    arrayEach = __webpack_require__(/*! ./_arrayEach */ "./node_modules/lodash/_arrayEach.js"),
    assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    baseAssign = __webpack_require__(/*! ./_baseAssign */ "./node_modules/lodash/_baseAssign.js"),
    baseAssignIn = __webpack_require__(/*! ./_baseAssignIn */ "./node_modules/lodash/_baseAssignIn.js"),
    cloneBuffer = __webpack_require__(/*! ./_cloneBuffer */ "./node_modules/lodash/_cloneBuffer.js"),
    copyArray = __webpack_require__(/*! ./_copyArray */ "./node_modules/lodash/_copyArray.js"),
    copySymbols = __webpack_require__(/*! ./_copySymbols */ "./node_modules/lodash/_copySymbols.js"),
    copySymbolsIn = __webpack_require__(/*! ./_copySymbolsIn */ "./node_modules/lodash/_copySymbolsIn.js"),
    getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "./node_modules/lodash/_getAllKeys.js"),
    getAllKeysIn = __webpack_require__(/*! ./_getAllKeysIn */ "./node_modules/lodash/_getAllKeysIn.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    initCloneArray = __webpack_require__(/*! ./_initCloneArray */ "./node_modules/lodash/_initCloneArray.js"),
    initCloneByTag = __webpack_require__(/*! ./_initCloneByTag */ "./node_modules/lodash/_initCloneByTag.js"),
    initCloneObject = __webpack_require__(/*! ./_initCloneObject */ "./node_modules/lodash/_initCloneObject.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isMap = __webpack_require__(/*! ./isMap */ "./node_modules/lodash/isMap.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSet = __webpack_require__(/*! ./isSet */ "./node_modules/lodash/isSet.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] = cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] = cloneableTags[boolTag] = cloneableTags[dateTag] = cloneableTags[float32Tag] = cloneableTags[float64Tag] = cloneableTags[int8Tag] = cloneableTags[int16Tag] = cloneableTags[int32Tag] = cloneableTags[mapTag] = cloneableTags[numberTag] = cloneableTags[objectTag] = cloneableTags[regexpTag] = cloneableTags[setTag] = cloneableTags[stringTag] = cloneableTags[symbolTag] = cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] = cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || isFunc && !object) {
      result = isFlat || isFunc ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat ? copySymbolsIn(value, baseAssignIn(result, value)) : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack());
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function (subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });

    return result;
  }

  if (isMap(value)) {
    value.forEach(function (subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });

    return result;
  }

  var keysFunc = isFull ? isFlat ? getAllKeysIn : getAllKeys : isFlat ? keysIn : keys;

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function (subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;

/***/ }),

/***/ "./node_modules/lodash/_baseCreate.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseCreate.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = function () {
  function object() {}
  return function (proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object();
    object.prototype = undefined;
    return result;
  };
}();

module.exports = baseCreate;

/***/ }),

/***/ "./node_modules/lodash/_baseEach.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseEach.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(/*! ./_baseForOwn */ "./node_modules/lodash/_baseForOwn.js"),
    createBaseEach = __webpack_require__(/*! ./_createBaseEach */ "./node_modules/lodash/_createBaseEach.js");

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;

/***/ }),

/***/ "./node_modules/lodash/_baseFilter.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseFilter.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__(/*! ./_baseEach */ "./node_modules/lodash/_baseEach.js");

/**
 * The base implementation of `_.filter` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function baseFilter(collection, predicate) {
  var result = [];
  baseEach(collection, function (value, index, collection) {
    if (predicate(value, index, collection)) {
      result.push(value);
    }
  });
  return result;
}

module.exports = baseFilter;

/***/ }),

/***/ "./node_modules/lodash/_baseFindIndex.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_baseFindIndex.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while (fromRight ? index-- : ++index < length) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

module.exports = baseFindIndex;

/***/ }),

/***/ "./node_modules/lodash/_baseFor.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseFor.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ "./node_modules/lodash/_createBaseFor.js");

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;

/***/ }),

/***/ "./node_modules/lodash/_baseForOwn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseForOwn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(/*! ./_baseFor */ "./node_modules/lodash/_baseFor.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;

/***/ }),

/***/ "./node_modules/lodash/_baseGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return index && index == length ? object : undefined;
}

module.exports = baseGet;

/***/ }),

/***/ "./node_modules/lodash/_baseGetAllKeys.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_baseGetAllKeys.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;

/***/ }),

/***/ "./node_modules/lodash/_baseGetTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseGetTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "./node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "./node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
    if (value == null) {
        return value === undefined ? undefinedTag : nullTag;
    }
    return symToStringTag && symToStringTag in Object(value) ? getRawTag(value) : objectToString(value);
}

module.exports = baseGetTag;

/***/ }),

/***/ "./node_modules/lodash/_baseHasIn.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseHasIn.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;

/***/ }),

/***/ "./node_modules/lodash/_baseIndexOf.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIndexOf.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFindIndex = __webpack_require__(/*! ./_baseFindIndex */ "./node_modules/lodash/_baseFindIndex.js"),
    baseIsNaN = __webpack_require__(/*! ./_baseIsNaN */ "./node_modules/lodash/_baseIsNaN.js"),
    strictIndexOf = __webpack_require__(/*! ./_strictIndexOf */ "./node_modules/lodash/_strictIndexOf.js");

/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
    return value === value ? strictIndexOf(array, value, fromIndex) : baseFindIndex(array, baseIsNaN, fromIndex);
}

module.exports = baseIndexOf;

/***/ }),

/***/ "./node_modules/lodash/_baseIsArguments.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsArguments.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;

/***/ }),

/***/ "./node_modules/lodash/_baseIsEqual.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsEqual.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(/*! ./_baseIsEqualDeep */ "./node_modules/lodash/_baseIsEqualDeep.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || !isObjectLike(value) && !isObjectLike(other)) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;

/***/ }),

/***/ "./node_modules/lodash/_baseIsEqualDeep.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_baseIsEqualDeep.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    equalByTag = __webpack_require__(/*! ./_equalByTag */ "./node_modules/lodash/_equalByTag.js"),
    equalObjects = __webpack_require__(/*! ./_equalObjects */ "./node_modules/lodash/_equalObjects.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack());
    return objIsArr || isTypedArray(object) ? equalArrays(object, other, bitmask, customizer, equalFunc, stack) : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack());
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack());
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;

/***/ }),

/***/ "./node_modules/lodash/_baseIsMap.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsMap.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}

module.exports = baseIsMap;

/***/ }),

/***/ "./node_modules/lodash/_baseIsMatch.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseIsMatch.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(/*! ./_Stack */ "./node_modules/lodash/_Stack.js"),
    baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if (noCustomizer && data[2] ? data[1] !== object[data[0]] : !(data[0] in object)) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack();
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack) : result)) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;

/***/ }),

/***/ "./node_modules/lodash/_baseIsNaN.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsNaN.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

module.exports = baseIsNaN;

/***/ }),

/***/ "./node_modules/lodash/_baseIsNative.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIsNative.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "./node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' + funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&').replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$');

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;

/***/ }),

/***/ "./node_modules/lodash/_baseIsSet.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseIsSet.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getTag = __webpack_require__(/*! ./_getTag */ "./node_modules/lodash/_getTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

module.exports = baseIsSet;

/***/ }),

/***/ "./node_modules/lodash/_baseIsTypedArray.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_baseIsTypedArray.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] = typedArrayTags[int8Tag] = typedArrayTags[int16Tag] = typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] = typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] = typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] = typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] = typedArrayTags[dataViewTag] = typedArrayTags[dateTag] = typedArrayTags[errorTag] = typedArrayTags[funcTag] = typedArrayTags[mapTag] = typedArrayTags[numberTag] = typedArrayTags[objectTag] = typedArrayTags[regexpTag] = typedArrayTags[setTag] = typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
    return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;

/***/ }),

/***/ "./node_modules/lodash/_baseIteratee.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIteratee.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var baseMatches = __webpack_require__(/*! ./_baseMatches */ "./node_modules/lodash/_baseMatches.js"),
    baseMatchesProperty = __webpack_require__(/*! ./_baseMatchesProperty */ "./node_modules/lodash/_baseMatchesProperty.js"),
    identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    property = __webpack_require__(/*! ./property */ "./node_modules/lodash/property.js");

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object') {
    return isArray(value) ? baseMatchesProperty(value[0], value[1]) : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;

/***/ }),

/***/ "./node_modules/lodash/_baseKeys.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseKeys.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "./node_modules/lodash/_nativeKeys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;

/***/ }),

/***/ "./node_modules/lodash/_baseKeysIn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseKeysIn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js"),
    nativeKeysIn = __webpack_require__(/*! ./_nativeKeysIn */ "./node_modules/lodash/_nativeKeysIn.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;

/***/ }),

/***/ "./node_modules/lodash/_baseMatches.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_baseMatches.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(/*! ./_baseIsMatch */ "./node_modules/lodash/_baseIsMatch.js"),
    getMatchData = __webpack_require__(/*! ./_getMatchData */ "./node_modules/lodash/_getMatchData.js"),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ "./node_modules/lodash/_matchesStrictComparable.js");

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function (object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;

/***/ }),

/***/ "./node_modules/lodash/_baseMatchesProperty.js":
/*!*****************************************************!*\
  !*** ./node_modules/lodash/_baseMatchesProperty.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(/*! ./_baseIsEqual */ "./node_modules/lodash/_baseIsEqual.js"),
    get = __webpack_require__(/*! ./get */ "./node_modules/lodash/get.js"),
    hasIn = __webpack_require__(/*! ./hasIn */ "./node_modules/lodash/hasIn.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ "./node_modules/lodash/_isStrictComparable.js"),
    matchesStrictComparable = __webpack_require__(/*! ./_matchesStrictComparable */ "./node_modules/lodash/_matchesStrictComparable.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function (object) {
    var objValue = get(object, path);
    return objValue === undefined && objValue === srcValue ? hasIn(object, path) : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;

/***/ }),

/***/ "./node_modules/lodash/_baseProperty.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseProperty.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function (object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;

/***/ }),

/***/ "./node_modules/lodash/_basePropertyDeep.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_basePropertyDeep.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function (object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;

/***/ }),

/***/ "./node_modules/lodash/_baseSlice.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseSlice.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : length + start;
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : end - start >>> 0;
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;

/***/ }),

/***/ "./node_modules/lodash/_baseTimes.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseTimes.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;

/***/ }),

/***/ "./node_modules/lodash/_baseToString.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseToString.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    arrayMap = __webpack_require__(/*! ./_arrayMap */ "./node_modules/lodash/_arrayMap.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

module.exports = baseToString;

/***/ }),

/***/ "./node_modules/lodash/_baseUnary.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_baseUnary.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function (value) {
    return func(value);
  };
}

module.exports = baseUnary;

/***/ }),

/***/ "./node_modules/lodash/_baseUniq.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseUniq.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(/*! ./_SetCache */ "./node_modules/lodash/_SetCache.js"),
    arrayIncludes = __webpack_require__(/*! ./_arrayIncludes */ "./node_modules/lodash/_arrayIncludes.js"),
    arrayIncludesWith = __webpack_require__(/*! ./_arrayIncludesWith */ "./node_modules/lodash/_arrayIncludesWith.js"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "./node_modules/lodash/_cacheHas.js"),
    createSet = __webpack_require__(/*! ./_createSet */ "./node_modules/lodash/_createSet.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "./node_modules/lodash/_setToArray.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = arrayIncludesWith;
  } else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : createSet(array);
    if (set) {
      return setToArray(set);
    }
    isCommon = false;
    includes = cacheHas;
    seen = new SetCache();
  } else {
    seen = iteratee ? [] : result;
  }
  outer: while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = comparator || value !== 0 ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    } else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

module.exports = baseUniq;

/***/ }),

/***/ "./node_modules/lodash/_cacheHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_cacheHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;

/***/ }),

/***/ "./node_modules/lodash/_castPath.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_castPath.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    stringToPath = __webpack_require__(/*! ./_stringToPath */ "./node_modules/lodash/_stringToPath.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;

/***/ }),

/***/ "./node_modules/lodash/_castSlice.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_castSlice.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__(/*! ./_baseSlice */ "./node_modules/lodash/_baseSlice.js");

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return !start && end >= length ? array : baseSlice(array, start, end);
}

module.exports = castSlice;

/***/ }),

/***/ "./node_modules/lodash/_cloneArrayBuffer.js":
/*!**************************************************!*\
  !*** ./node_modules/lodash/_cloneArrayBuffer.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js");

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;

/***/ }),

/***/ "./node_modules/lodash/_cloneBuffer.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneBuffer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Detect free variable `exports`. */
var freeExports = ( false ? undefined : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && ( false ? undefined : _typeof(module)) == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_cloneDataView.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_cloneDataView.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;

/***/ }),

/***/ "./node_modules/lodash/_cloneRegExp.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneRegExp.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;

/***/ }),

/***/ "./node_modules/lodash/_cloneSymbol.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_cloneSymbol.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;

/***/ }),

/***/ "./node_modules/lodash/_cloneTypedArray.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_cloneTypedArray.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js");

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;

/***/ }),

/***/ "./node_modules/lodash/_copyArray.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_copyArray.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;

/***/ }),

/***/ "./node_modules/lodash/_copyObject.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_copyObject.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assignValue = __webpack_require__(/*! ./_assignValue */ "./node_modules/lodash/_assignValue.js"),
    baseAssignValue = __webpack_require__(/*! ./_baseAssignValue */ "./node_modules/lodash/_baseAssignValue.js");

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer ? customizer(object[key], source[key], key, object, source) : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;

/***/ }),

/***/ "./node_modules/lodash/_copySymbols.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_copySymbols.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js");

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;

/***/ }),

/***/ "./node_modules/lodash/_copySymbolsIn.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_copySymbolsIn.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ "./node_modules/lodash/_getSymbolsIn.js");

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;

/***/ }),

/***/ "./node_modules/lodash/_coreJsData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_coreJsData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;

/***/ }),

/***/ "./node_modules/lodash/_createBaseEach.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_createBaseEach.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function (collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while (fromRight ? index-- : ++index < length) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;

/***/ }),

/***/ "./node_modules/lodash/_createBaseFor.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_createBaseFor.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function (object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;

/***/ }),

/***/ "./node_modules/lodash/_createCaseFirst.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_createCaseFirst.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castSlice = __webpack_require__(/*! ./_castSlice */ "./node_modules/lodash/_castSlice.js"),
    hasUnicode = __webpack_require__(/*! ./_hasUnicode */ "./node_modules/lodash/_hasUnicode.js"),
    stringToArray = __webpack_require__(/*! ./_stringToArray */ "./node_modules/lodash/_stringToArray.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return function (string) {
    string = toString(string);

    var strSymbols = hasUnicode(string) ? stringToArray(string) : undefined;

    var chr = strSymbols ? strSymbols[0] : string.charAt(0);

    var trailing = strSymbols ? castSlice(strSymbols, 1).join('') : string.slice(1);

    return chr[methodName]() + trailing;
  };
}

module.exports = createCaseFirst;

/***/ }),

/***/ "./node_modules/lodash/_createRound.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_createRound.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./toInteger */ "./node_modules/lodash/toInteger.js"),
    toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js"),
    toString = __webpack_require__(/*! ./toString */ "./node_modules/lodash/toString.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMin = Math.min;

/**
 * Creates a function like `_.round`.
 *
 * @private
 * @param {string} methodName The name of the `Math` method to use when rounding.
 * @returns {Function} Returns the new round function.
 */
function createRound(methodName) {
  var func = Math[methodName];
  return function (number, precision) {
    number = toNumber(number);
    precision = precision == null ? 0 : nativeMin(toInteger(precision), 292);
    if (precision) {
      // Shift with exponential notation to avoid floating-point issues.
      // See [MDN](https://mdn.io/round#Examples) for more details.
      var pair = (toString(number) + 'e').split('e'),
          value = func(pair[0] + 'e' + (+pair[1] + precision));

      pair = (toString(value) + 'e').split('e');
      return +(pair[0] + 'e' + (+pair[1] - precision));
    }
    return func(number);
  };
}

module.exports = createRound;

/***/ }),

/***/ "./node_modules/lodash/_createSet.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_createSet.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Set = __webpack_require__(/*! ./_Set */ "./node_modules/lodash/_Set.js"),
    noop = __webpack_require__(/*! ./noop */ "./node_modules/lodash/noop.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "./node_modules/lodash/_setToArray.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(Set && 1 / setToArray(new Set([, -0]))[1] == INFINITY) ? noop : function (values) {
  return new Set(values);
};

module.exports = createSet;

/***/ }),

/***/ "./node_modules/lodash/_defineProperty.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_defineProperty.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

var defineProperty = function () {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}();

module.exports = defineProperty;

/***/ }),

/***/ "./node_modules/lodash/_equalArrays.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_equalArrays.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(/*! ./_SetCache */ "./node_modules/lodash/_SetCache.js"),
    arraySome = __webpack_require__(/*! ./_arraySome */ "./node_modules/lodash/_arraySome.js"),
    cacheHas = __webpack_require__(/*! ./_cacheHas */ "./node_modules/lodash/_cacheHas.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = bitmask & COMPARE_UNORDERED_FLAG ? new SetCache() : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, arrValue, index, other, array, stack) : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function (othValue, othIndex) {
        if (!cacheHas(seen, othIndex) && (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
          return seen.push(othIndex);
        }
      })) {
        result = false;
        break;
      }
    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;

/***/ }),

/***/ "./node_modules/lodash/_equalByTag.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_equalByTag.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js"),
    Uint8Array = __webpack_require__(/*! ./_Uint8Array */ "./node_modules/lodash/_Uint8Array.js"),
    eq = __webpack_require__(/*! ./eq */ "./node_modules/lodash/eq.js"),
    equalArrays = __webpack_require__(/*! ./_equalArrays */ "./node_modules/lodash/_equalArrays.js"),
    mapToArray = __webpack_require__(/*! ./_mapToArray */ "./node_modules/lodash/_mapToArray.js"),
    setToArray = __webpack_require__(/*! ./_setToArray */ "./node_modules/lodash/_setToArray.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol ? _Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if (object.byteLength != other.byteLength || object.byteOffset != other.byteOffset) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if (object.byteLength != other.byteLength || !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == other + '';

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;

/***/ }),

/***/ "./node_modules/lodash/_equalObjects.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_equalObjects.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(/*! ./_getAllKeys */ "./node_modules/lodash/_getAllKeys.js");

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial ? customizer(othValue, objValue, key, other, object, stack) : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined ? objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack) : compared)) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor && 'constructor' in object && 'constructor' in other && !(typeof objCtor == 'function' && objCtor instanceof objCtor && typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;

/***/ }),

/***/ "./node_modules/lodash/_freeGlobal.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_freeGlobal.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/** Detect free variable `global` from Node.js. */
var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/lodash/_getAllKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getAllKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;

/***/ }),

/***/ "./node_modules/lodash/_getAllKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getAllKeysIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(/*! ./_baseGetAllKeys */ "./node_modules/lodash/_baseGetAllKeys.js"),
    getSymbolsIn = __webpack_require__(/*! ./_getSymbolsIn */ "./node_modules/lodash/_getSymbolsIn.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;

/***/ }),

/***/ "./node_modules/lodash/_getMapData.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getMapData.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(/*! ./_isKeyable */ "./node_modules/lodash/_isKeyable.js");

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key) ? data[typeof key == 'string' ? 'string' : 'hash'] : data.map;
}

module.exports = getMapData;

/***/ }),

/***/ "./node_modules/lodash/_getMatchData.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getMatchData.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(/*! ./_isStrictComparable */ "./node_modules/lodash/_isStrictComparable.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
    var result = keys(object),
        length = result.length;

    while (length--) {
        var key = result[length],
            value = object[key];

        result[length] = [key, value, isStrictComparable(value)];
    }
    return result;
}

module.exports = getMatchData;

/***/ }),

/***/ "./node_modules/lodash/_getNative.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getNative.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "./node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "./node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;

/***/ }),

/***/ "./node_modules/lodash/_getPrototype.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getPrototype.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;

/***/ }),

/***/ "./node_modules/lodash/_getRawTag.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getRawTag.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol = __webpack_require__(/*! ./_Symbol */ "./node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol ? _Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;

/***/ }),

/***/ "./node_modules/lodash/_getSymbols.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_getSymbols.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "./node_modules/lodash/_arrayFilter.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function (object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function (symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;

/***/ }),

/***/ "./node_modules/lodash/_getSymbolsIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_getSymbolsIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(/*! ./_arrayPush */ "./node_modules/lodash/_arrayPush.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    getSymbols = __webpack_require__(/*! ./_getSymbols */ "./node_modules/lodash/_getSymbols.js"),
    stubArray = __webpack_require__(/*! ./stubArray */ "./node_modules/lodash/stubArray.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function (object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;

/***/ }),

/***/ "./node_modules/lodash/_getTag.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/_getTag.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(/*! ./_DataView */ "./node_modules/lodash/_DataView.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    Promise = __webpack_require__(/*! ./_Promise */ "./node_modules/lodash/_Promise.js"),
    Set = __webpack_require__(/*! ./_Set */ "./node_modules/lodash/_Set.js"),
    WeakMap = __webpack_require__(/*! ./_WeakMap */ "./node_modules/lodash/_WeakMap.js"),
    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "./node_modules/lodash/_toSource.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if (DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag || Map && getTag(new Map()) != mapTag || Promise && getTag(Promise.resolve()) != promiseTag || Set && getTag(new Set()) != setTag || WeakMap && getTag(new WeakMap()) != weakMapTag) {
    getTag = function getTag(value) {
        var result = baseGetTag(value),
            Ctor = result == objectTag ? value.constructor : undefined,
            ctorString = Ctor ? toSource(Ctor) : '';

        if (ctorString) {
            switch (ctorString) {
                case dataViewCtorString:
                    return dataViewTag;
                case mapCtorString:
                    return mapTag;
                case promiseCtorString:
                    return promiseTag;
                case setCtorString:
                    return setTag;
                case weakMapCtorString:
                    return weakMapTag;
            }
        }
        return result;
    };
}

module.exports = getTag;

/***/ }),

/***/ "./node_modules/lodash/_getValue.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_getValue.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;

/***/ }),

/***/ "./node_modules/lodash/_hasPath.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hasPath.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(/*! ./_castPath */ "./node_modules/lodash/_castPath.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "./node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isIndex = __webpack_require__(/*! ./_isIndex */ "./node_modules/lodash/_isIndex.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) && (isArray(object) || isArguments(object));
}

module.exports = hasPath;

/***/ }),

/***/ "./node_modules/lodash/_hasUnicode.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hasUnicode.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

module.exports = hasUnicode;

/***/ }),

/***/ "./node_modules/lodash/_hashClear.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_hashClear.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;

/***/ }),

/***/ "./node_modules/lodash/_hashDelete.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_hashDelete.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;

/***/ }),

/***/ "./node_modules/lodash/_hashGet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashGet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;

/***/ }),

/***/ "./node_modules/lodash/_hashHas.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashHas.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? data[key] !== undefined : hasOwnProperty.call(data, key);
}

module.exports = hashHas;

/***/ }),

/***/ "./node_modules/lodash/_hashSet.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_hashSet.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(/*! ./_nativeCreate */ "./node_modules/lodash/_nativeCreate.js");

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate && value === undefined ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;

/***/ }),

/***/ "./node_modules/lodash/_initCloneArray.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_initCloneArray.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;

/***/ }),

/***/ "./node_modules/lodash/_initCloneByTag.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_initCloneByTag.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var cloneArrayBuffer = __webpack_require__(/*! ./_cloneArrayBuffer */ "./node_modules/lodash/_cloneArrayBuffer.js"),
    cloneDataView = __webpack_require__(/*! ./_cloneDataView */ "./node_modules/lodash/_cloneDataView.js"),
    cloneRegExp = __webpack_require__(/*! ./_cloneRegExp */ "./node_modules/lodash/_cloneRegExp.js"),
    cloneSymbol = __webpack_require__(/*! ./_cloneSymbol */ "./node_modules/lodash/_cloneSymbol.js"),
    cloneTypedArray = __webpack_require__(/*! ./_cloneTypedArray */ "./node_modules/lodash/_cloneTypedArray.js");

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag:case float64Tag:
    case int8Tag:case int16Tag:case int32Tag:
    case uint8Tag:case uint8ClampedTag:case uint16Tag:case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return new Ctor();

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return new Ctor();

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;

/***/ }),

/***/ "./node_modules/lodash/_initCloneObject.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_initCloneObject.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(/*! ./_baseCreate */ "./node_modules/lodash/_baseCreate.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "./node_modules/lodash/_isPrototype.js");

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
    return typeof object.constructor == 'function' && !isPrototype(object) ? baseCreate(getPrototype(object)) : {};
}

module.exports = initCloneObject;

/***/ }),

/***/ "./node_modules/lodash/_isIndex.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_isIndex.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length && (type == 'number' || type != 'symbol' && reIsUint.test(value)) && value > -1 && value % 1 == 0 && value < length;
}

module.exports = isIndex;

/***/ }),

/***/ "./node_modules/lodash/_isKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_isKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  if (type == 'number' || type == 'symbol' || type == 'boolean' || value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}

module.exports = isKey;

/***/ }),

/***/ "./node_modules/lodash/_isKeyable.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_isKeyable.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  return type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean' ? value !== '__proto__' : value === null;
}

module.exports = isKeyable;

/***/ }),

/***/ "./node_modules/lodash/_isMasked.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_isMasked.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "./node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = function () {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? 'Symbol(src)_1.' + uid : '';
}();

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}

module.exports = isMasked;

/***/ }),

/***/ "./node_modules/lodash/_isPrototype.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_isPrototype.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = typeof Ctor == 'function' && Ctor.prototype || objectProto;

  return value === proto;
}

module.exports = isPrototype;

/***/ }),

/***/ "./node_modules/lodash/_isStrictComparable.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash/_isStrictComparable.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;

/***/ }),

/***/ "./node_modules/lodash/_listCacheClear.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_listCacheClear.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;

/***/ }),

/***/ "./node_modules/lodash/_listCacheDelete.js":
/*!*************************************************!*\
  !*** ./node_modules/lodash/_listCacheDelete.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;

/***/ }),

/***/ "./node_modules/lodash/_listCacheGet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheGet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;

/***/ }),

/***/ "./node_modules/lodash/_listCacheHas.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheHas.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;

/***/ }),

/***/ "./node_modules/lodash/_listCacheSet.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_listCacheSet.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(/*! ./_assocIndexOf */ "./node_modules/lodash/_assocIndexOf.js");

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;

/***/ }),

/***/ "./node_modules/lodash/_mapCacheClear.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_mapCacheClear.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(/*! ./_Hash */ "./node_modules/lodash/_Hash.js"),
    ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js");

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash(),
    'map': new (Map || ListCache)(),
    'string': new Hash()
  };
}

module.exports = mapCacheClear;

/***/ }),

/***/ "./node_modules/lodash/_mapCacheDelete.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_mapCacheDelete.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;

/***/ }),

/***/ "./node_modules/lodash/_mapCacheGet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheGet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;

/***/ }),

/***/ "./node_modules/lodash/_mapCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;

/***/ }),

/***/ "./node_modules/lodash/_mapCacheSet.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_mapCacheSet.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(/*! ./_getMapData */ "./node_modules/lodash/_getMapData.js");

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;

/***/ }),

/***/ "./node_modules/lodash/_mapToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_mapToArray.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function (value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;

/***/ }),

/***/ "./node_modules/lodash/_matchesStrictComparable.js":
/*!*********************************************************!*\
  !*** ./node_modules/lodash/_matchesStrictComparable.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function (object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue && (srcValue !== undefined || key in Object(object));
  };
}

module.exports = matchesStrictComparable;

/***/ }),

/***/ "./node_modules/lodash/_memoizeCapped.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_memoizeCapped.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(/*! ./memoize */ "./node_modules/lodash/memoize.js");

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function (key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;

/***/ }),

/***/ "./node_modules/lodash/_nativeCreate.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeCreate.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "./node_modules/lodash/_getNative.js");

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;

/***/ }),

/***/ "./node_modules/lodash/_nativeKeys.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_nativeKeys.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "./node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;

/***/ }),

/***/ "./node_modules/lodash/_nativeKeysIn.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_nativeKeysIn.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;

/***/ }),

/***/ "./node_modules/lodash/_nodeUtil.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_nodeUtil.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports = ( false ? undefined : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && ( false ? undefined : _typeof(module)) == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = function () {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}();

module.exports = nodeUtil;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/_objectToString.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_objectToString.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;

/***/ }),

/***/ "./node_modules/lodash/_overArg.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_overArg.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;

/***/ }),

/***/ "./node_modules/lodash/_root.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/_root.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "./node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;

/***/ }),

/***/ "./node_modules/lodash/_setCacheAdd.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheAdd.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;

/***/ }),

/***/ "./node_modules/lodash/_setCacheHas.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setCacheHas.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;

/***/ }),

/***/ "./node_modules/lodash/_setToArray.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_setToArray.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function (value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;

/***/ }),

/***/ "./node_modules/lodash/_stackClear.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_stackClear.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js");

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache();
  this.size = 0;
}

module.exports = stackClear;

/***/ }),

/***/ "./node_modules/lodash/_stackDelete.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_stackDelete.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;

/***/ }),

/***/ "./node_modules/lodash/_stackGet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackGet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;

/***/ }),

/***/ "./node_modules/lodash/_stackHas.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackHas.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;

/***/ }),

/***/ "./node_modules/lodash/_stackSet.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_stackSet.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(/*! ./_ListCache */ "./node_modules/lodash/_ListCache.js"),
    Map = __webpack_require__(/*! ./_Map */ "./node_modules/lodash/_Map.js"),
    MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || pairs.length < LARGE_ARRAY_SIZE - 1) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;

/***/ }),

/***/ "./node_modules/lodash/_strictIndexOf.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_strictIndexOf.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

module.exports = strictIndexOf;

/***/ }),

/***/ "./node_modules/lodash/_stringToArray.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_stringToArray.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var asciiToArray = __webpack_require__(/*! ./_asciiToArray */ "./node_modules/lodash/_asciiToArray.js"),
    hasUnicode = __webpack_require__(/*! ./_hasUnicode */ "./node_modules/lodash/_hasUnicode.js"),
    unicodeToArray = __webpack_require__(/*! ./_unicodeToArray */ "./node_modules/lodash/_unicodeToArray.js");

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
    return hasUnicode(string) ? unicodeToArray(string) : asciiToArray(string);
}

module.exports = stringToArray;

/***/ }),

/***/ "./node_modules/lodash/_stringToPath.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_stringToPath.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(/*! ./_memoizeCapped */ "./node_modules/lodash/_memoizeCapped.js");

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function (string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
      result.push('');
    }
  string.replace(rePropName, function (match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : number || match);
  });
  return result;
});

module.exports = stringToPath;

/***/ }),

/***/ "./node_modules/lodash/_toKey.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_toKey.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = value + '';
  return result == '0' && 1 / value == -INFINITY ? '-0' : result;
}

module.exports = toKey;

/***/ }),

/***/ "./node_modules/lodash/_toSource.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_toSource.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return func + '';
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;

/***/ }),

/***/ "./node_modules/lodash/_unicodeToArray.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_unicodeToArray.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
    return string.match(reUnicode) || [];
}

module.exports = unicodeToArray;

/***/ }),

/***/ "./node_modules/lodash/cloneDeep.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/cloneDeep.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseClone = __webpack_require__(/*! ./_baseClone */ "./node_modules/lodash/_baseClone.js");

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

module.exports = cloneDeep;

/***/ }),

/***/ "./node_modules/lodash/debounce.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/debounce.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    now = __webpack_require__(/*! ./now */ "./node_modules/lodash/now.js"),
    toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke) : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;

/***/ }),

/***/ "./node_modules/lodash/eq.js":
/*!***********************************!*\
  !*** ./node_modules/lodash/eq.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || value !== value && other !== other;
}

module.exports = eq;

/***/ }),

/***/ "./node_modules/lodash/filter.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/filter.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(/*! ./_arrayFilter */ "./node_modules/lodash/_arrayFilter.js"),
    baseFilter = __webpack_require__(/*! ./_baseFilter */ "./node_modules/lodash/_baseFilter.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js");

/**
 * Iterates over elements of `collection`, returning an array of all elements
 * `predicate` returns truthy for. The predicate is invoked with three
 * arguments: (value, index|key, collection).
 *
 * **Note:** Unlike `_.remove`, this method returns a new array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 * @see _.reject
 * @example
 *
 * var users = [
 *   { 'user': 'barney', 'age': 36, 'active': true },
 *   { 'user': 'fred',   'age': 40, 'active': false }
 * ];
 *
 * _.filter(users, function(o) { return !o.active; });
 * // => objects for ['fred']
 *
 * // The `_.matches` iteratee shorthand.
 * _.filter(users, { 'age': 36, 'active': true });
 * // => objects for ['barney']
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.filter(users, ['active', false]);
 * // => objects for ['fred']
 *
 * // The `_.property` iteratee shorthand.
 * _.filter(users, 'active');
 * // => objects for ['barney']
 */
function filter(collection, predicate) {
  var func = isArray(collection) ? arrayFilter : baseFilter;
  return func(collection, baseIteratee(predicate, 3));
}

module.exports = filter;

/***/ }),

/***/ "./node_modules/lodash/get.js":
/*!************************************!*\
  !*** ./node_modules/lodash/get.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(/*! ./_baseGet */ "./node_modules/lodash/_baseGet.js");

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;

/***/ }),

/***/ "./node_modules/lodash/hasIn.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/hasIn.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(/*! ./_baseHasIn */ "./node_modules/lodash/_baseHasIn.js"),
    hasPath = __webpack_require__(/*! ./_hasPath */ "./node_modules/lodash/_hasPath.js");

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;

/***/ }),

/***/ "./node_modules/lodash/identity.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;

/***/ }),

/***/ "./node_modules/lodash/indexOf.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/indexOf.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIndexOf = __webpack_require__(/*! ./_baseIndexOf */ "./node_modules/lodash/_baseIndexOf.js"),
    toInteger = __webpack_require__(/*! ./toInteger */ "./node_modules/lodash/toInteger.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Gets the index at which the first occurrence of `value` is found in `array`
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons. If `fromIndex` is negative, it's used as the
 * offset from the end of `array`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} [fromIndex=0] The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 * @example
 *
 * _.indexOf([1, 2, 1, 2], 2);
 * // => 1
 *
 * // Search from the `fromIndex`.
 * _.indexOf([1, 2, 1, 2], 2, 2);
 * // => 3
 */
function indexOf(array, value, fromIndex) {
  var length = array == null ? 0 : array.length;
  if (!length) {
    return -1;
  }
  var index = fromIndex == null ? 0 : toInteger(fromIndex);
  if (index < 0) {
    index = nativeMax(length + index, 0);
  }
  return baseIndexOf(array, value, index);
}

module.exports = indexOf;

/***/ }),

/***/ "./node_modules/lodash/isArguments.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArguments.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "./node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function () {
    return arguments;
}()) ? baseIsArguments : function (value) {
    return isObjectLike(value) && hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;

/***/ }),

/***/ "./node_modules/lodash/isArray.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/isArray.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;

/***/ }),

/***/ "./node_modules/lodash/isArrayLike.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/isArrayLike.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "./node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;

/***/ }),

/***/ "./node_modules/lodash/isBuffer.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isBuffer.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "./node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports = ( false ? undefined : _typeof(exports)) == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && ( false ? undefined : _typeof(module)) == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "./node_modules/lodash/isFunction.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/isFunction.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
    if (!isObject(value)) {
        return false;
    }
    // The use of `Object#toString` avoids issues with the `typeof` operator
    // in Safari 9 which returns 'object' for typed arrays and other constructors.
    var tag = baseGetTag(value);
    return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;

/***/ }),

/***/ "./node_modules/lodash/isLength.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isLength.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;

/***/ }),

/***/ "./node_modules/lodash/isMap.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/isMap.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMap = __webpack_require__(/*! ./_baseIsMap */ "./node_modules/lodash/_baseIsMap.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

module.exports = isMap;

/***/ }),

/***/ "./node_modules/lodash/isObject.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isObject.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value === 'undefined' ? 'undefined' : _typeof(value);
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;

/***/ }),

/***/ "./node_modules/lodash/isObjectLike.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isObjectLike.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
}

module.exports = isObjectLike;

/***/ }),

/***/ "./node_modules/lodash/isPlainObject.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/isPlainObject.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;

/***/ }),

/***/ "./node_modules/lodash/isSet.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/isSet.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsSet = __webpack_require__(/*! ./_baseIsSet */ "./node_modules/lodash/_baseIsSet.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

module.exports = isSet;

/***/ }),

/***/ "./node_modules/lodash/isSymbol.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/isSymbol.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "./node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "./node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
    return (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'symbol' || isObjectLike(value) && baseGetTag(value) == symbolTag;
}

module.exports = isSymbol;

/***/ }),

/***/ "./node_modules/lodash/isTypedArray.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/isTypedArray.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "./node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "./node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "./node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;

/***/ }),

/***/ "./node_modules/lodash/keys.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/keys.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeys = __webpack_require__(/*! ./_baseKeys */ "./node_modules/lodash/_baseKeys.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;

/***/ }),

/***/ "./node_modules/lodash/keysIn.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/keysIn.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(/*! ./_arrayLikeKeys */ "./node_modules/lodash/_arrayLikeKeys.js"),
    baseKeysIn = __webpack_require__(/*! ./_baseKeysIn */ "./node_modules/lodash/_baseKeysIn.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "./node_modules/lodash/isArrayLike.js");

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;

/***/ }),

/***/ "./node_modules/lodash/lowerFirst.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/lowerFirst.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createCaseFirst = __webpack_require__(/*! ./_createCaseFirst */ "./node_modules/lodash/_createCaseFirst.js");

/**
 * Converts the first character of `string` to lower case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.lowerFirst('Fred');
 * // => 'fred'
 *
 * _.lowerFirst('FRED');
 * // => 'fRED'
 */
var lowerFirst = createCaseFirst('toLowerCase');

module.exports = lowerFirst;

/***/ }),

/***/ "./node_modules/lodash/memoize.js":
/*!****************************************!*\
  !*** ./node_modules/lodash/memoize.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(/*! ./_MapCache */ "./node_modules/lodash/_MapCache.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || resolver != null && typeof resolver != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function memoized() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache)();
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;

/***/ }),

/***/ "./node_modules/lodash/noop.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/noop.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;

/***/ }),

/***/ "./node_modules/lodash/now.js":
/*!************************************!*\
  !*** ./node_modules/lodash/now.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function now() {
  return root.Date.now();
};

module.exports = now;

/***/ }),

/***/ "./node_modules/lodash/property.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/property.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(/*! ./_baseProperty */ "./node_modules/lodash/_baseProperty.js"),
    basePropertyDeep = __webpack_require__(/*! ./_basePropertyDeep */ "./node_modules/lodash/_basePropertyDeep.js"),
    isKey = __webpack_require__(/*! ./_isKey */ "./node_modules/lodash/_isKey.js"),
    toKey = __webpack_require__(/*! ./_toKey */ "./node_modules/lodash/_toKey.js");

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;

/***/ }),

/***/ "./node_modules/lodash/round.js":
/*!**************************************!*\
  !*** ./node_modules/lodash/round.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createRound = __webpack_require__(/*! ./_createRound */ "./node_modules/lodash/_createRound.js");

/**
 * Computes `number` rounded to `precision`.
 *
 * @static
 * @memberOf _
 * @since 3.10.0
 * @category Math
 * @param {number} number The number to round.
 * @param {number} [precision=0] The precision to round to.
 * @returns {number} Returns the rounded number.
 * @example
 *
 * _.round(4.006);
 * // => 4
 *
 * _.round(4.006, 2);
 * // => 4.01
 *
 * _.round(4060, -2);
 * // => 4100
 */
var round = createRound('round');

module.exports = round;

/***/ }),

/***/ "./node_modules/lodash/stubArray.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubArray.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;

/***/ }),

/***/ "./node_modules/lodash/stubFalse.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/stubFalse.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;

/***/ }),

/***/ "./node_modules/lodash/throttle.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/throttle.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var debounce = __webpack_require__(/*! ./debounce */ "./node_modules/lodash/debounce.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

module.exports = throttle;

/***/ }),

/***/ "./node_modules/lodash/toFinite.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toFinite.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toNumber = __webpack_require__(/*! ./toNumber */ "./node_modules/lodash/toNumber.js");

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_INTEGER = 1.7976931348623157e+308;

/**
 * Converts `value` to a finite number.
 *
 * @static
 * @memberOf _
 * @since 4.12.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted number.
 * @example
 *
 * _.toFinite(3.2);
 * // => 3.2
 *
 * _.toFinite(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toFinite(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toFinite('3.2');
 * // => 3.2
 */
function toFinite(value) {
  if (!value) {
    return value === 0 ? value : 0;
  }
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    var sign = value < 0 ? -1 : 1;
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
}

module.exports = toFinite;

/***/ }),

/***/ "./node_modules/lodash/toInteger.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/toInteger.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toFinite = __webpack_require__(/*! ./toFinite */ "./node_modules/lodash/toFinite.js");

/**
 * Converts `value` to an integer.
 *
 * **Note:** This method is loosely based on
 * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {number} Returns the converted integer.
 * @example
 *
 * _.toInteger(3.2);
 * // => 3
 *
 * _.toInteger(Number.MIN_VALUE);
 * // => 0
 *
 * _.toInteger(Infinity);
 * // => 1.7976931348623157e+308
 *
 * _.toInteger('3.2');
 * // => 3
 */
function toInteger(value) {
  var result = toFinite(value),
      remainder = result % 1;

  return result === result ? remainder ? result - remainder : result : 0;
}

module.exports = toInteger;

/***/ }),

/***/ "./node_modules/lodash/toNumber.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toNumber.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isSymbol = __webpack_require__(/*! ./isSymbol */ "./node_modules/lodash/isSymbol.js");

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? other + '' : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
}

module.exports = toNumber;

/***/ }),

/***/ "./node_modules/lodash/toString.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/toString.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(/*! ./_baseToString */ "./node_modules/lodash/_baseToString.js");

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;

/***/ }),

/***/ "./node_modules/lodash/uniq.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/uniq.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseUniq = __webpack_require__(/*! ./_baseUniq */ "./node_modules/lodash/_baseUniq.js");

/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each element
 * is kept. The order of result values is determined by the order they occur
 * in the array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniq([2, 1, 2]);
 * // => [2, 1]
 */
function uniq(array) {
  return array && array.length ? baseUniq(array) : [];
}

module.exports = uniq;

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),

/***/ "./node_modules/wolfy87-eventemitter/EventEmitter.js":
/*!***********************************************************!*\
  !*** ./node_modules/wolfy87-eventemitter/EventEmitter.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * EventEmitter v5.2.5 - git.io/ee
 * Unlicense - http://unlicense.org/
 * Oliver Caldwell - http://oli.me.uk/
 * @preserve
 */

;(function (exports) {
    'use strict';

    /**
     * Class for managing events.
     * Can be extended to provide event functionality in other classes.
     *
     * @class EventEmitter Manages event registering and emitting.
     */

    function EventEmitter() {}

    // Shortcuts to improve speed and size
    var proto = EventEmitter.prototype;
    var originalGlobalValue = exports.EventEmitter;

    /**
     * Finds the index of the listener for the event in its storage array.
     *
     * @param {Function[]} listeners Array of listeners to search through.
     * @param {Function} listener Method to look for.
     * @return {Number} Index of the specified listener, -1 if not found
     * @api private
     */
    function indexOfListener(listeners, listener) {
        var i = listeners.length;
        while (i--) {
            if (listeners[i].listener === listener) {
                return i;
            }
        }

        return -1;
    }

    /**
     * Alias a method while keeping the context correct, to allow for overwriting of target method.
     *
     * @param {String} name The name of the target method.
     * @return {Function} The aliased method
     * @api private
     */
    function alias(name) {
        return function aliasClosure() {
            return this[name].apply(this, arguments);
        };
    }

    /**
     * Returns the listener array for the specified event.
     * Will initialise the event object and listener arrays if required.
     * Will return an object if you use a regex search. The object contains keys for each matched event. So /ba[rz]/ might return an object containing bar and baz. But only if you have either defined them with defineEvent or added some listeners to them.
     * Each property in the object response is an array of listener functions.
     *
     * @param {String|RegExp} evt Name of the event to return the listeners from.
     * @return {Function[]|Object} All listener functions for the event.
     */
    proto.getListeners = function getListeners(evt) {
        var events = this._getEvents();
        var response;
        var key;

        // Return a concatenated array of all matching events if
        // the selector is a regular expression.
        if (evt instanceof RegExp) {
            response = {};
            for (key in events) {
                if (events.hasOwnProperty(key) && evt.test(key)) {
                    response[key] = events[key];
                }
            }
        } else {
            response = events[evt] || (events[evt] = []);
        }

        return response;
    };

    /**
     * Takes a list of listener objects and flattens it into a list of listener functions.
     *
     * @param {Object[]} listeners Raw listener objects.
     * @return {Function[]} Just the listener functions.
     */
    proto.flattenListeners = function flattenListeners(listeners) {
        var flatListeners = [];
        var i;

        for (i = 0; i < listeners.length; i += 1) {
            flatListeners.push(listeners[i].listener);
        }

        return flatListeners;
    };

    /**
     * Fetches the requested listeners via getListeners but will always return the results inside an object. This is mainly for internal use but others may find it useful.
     *
     * @param {String|RegExp} evt Name of the event to return the listeners from.
     * @return {Object} All listener functions for an event in an object.
     */
    proto.getListenersAsObject = function getListenersAsObject(evt) {
        var listeners = this.getListeners(evt);
        var response;

        if (listeners instanceof Array) {
            response = {};
            response[evt] = listeners;
        }

        return response || listeners;
    };

    function isValidListener(listener) {
        if (typeof listener === 'function' || listener instanceof RegExp) {
            return true;
        } else if (listener && (typeof listener === 'undefined' ? 'undefined' : _typeof(listener)) === 'object') {
            return isValidListener(listener.listener);
        } else {
            return false;
        }
    }

    /**
     * Adds a listener function to the specified event.
     * The listener will not be added if it is a duplicate.
     * If the listener returns true then it will be removed after it is called.
     * If you pass a regular expression as the event name then the listener will be added to all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to attach the listener to.
     * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.addListener = function addListener(evt, listener) {
        if (!isValidListener(listener)) {
            throw new TypeError('listener must be a function');
        }

        var listeners = this.getListenersAsObject(evt);
        var listenerIsWrapped = (typeof listener === 'undefined' ? 'undefined' : _typeof(listener)) === 'object';
        var key;

        for (key in listeners) {
            if (listeners.hasOwnProperty(key) && indexOfListener(listeners[key], listener) === -1) {
                listeners[key].push(listenerIsWrapped ? listener : {
                    listener: listener,
                    once: false
                });
            }
        }

        return this;
    };

    /**
     * Alias of addListener
     */
    proto.on = alias('addListener');

    /**
     * Semi-alias of addListener. It will add a listener that will be
     * automatically removed after its first execution.
     *
     * @param {String|RegExp} evt Name of the event to attach the listener to.
     * @param {Function} listener Method to be called when the event is emitted. If the function returns true then it will be removed after calling.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.addOnceListener = function addOnceListener(evt, listener) {
        return this.addListener(evt, {
            listener: listener,
            once: true
        });
    };

    /**
     * Alias of addOnceListener.
     */
    proto.once = alias('addOnceListener');

    /**
     * Defines an event name. This is required if you want to use a regex to add a listener to multiple events at once. If you don't do this then how do you expect it to know what event to add to? Should it just add to every possible match for a regex? No. That is scary and bad.
     * You need to tell it what event names should be matched by a regex.
     *
     * @param {String} evt Name of the event to create.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.defineEvent = function defineEvent(evt) {
        this.getListeners(evt);
        return this;
    };

    /**
     * Uses defineEvent to define multiple events.
     *
     * @param {String[]} evts An array of event names to define.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.defineEvents = function defineEvents(evts) {
        for (var i = 0; i < evts.length; i += 1) {
            this.defineEvent(evts[i]);
        }
        return this;
    };

    /**
     * Removes a listener function from the specified event.
     * When passed a regular expression as the event name, it will remove the listener from all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to remove the listener from.
     * @param {Function} listener Method to remove from the event.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.removeListener = function removeListener(evt, listener) {
        var listeners = this.getListenersAsObject(evt);
        var index;
        var key;

        for (key in listeners) {
            if (listeners.hasOwnProperty(key)) {
                index = indexOfListener(listeners[key], listener);

                if (index !== -1) {
                    listeners[key].splice(index, 1);
                }
            }
        }

        return this;
    };

    /**
     * Alias of removeListener
     */
    proto.off = alias('removeListener');

    /**
     * Adds listeners in bulk using the manipulateListeners method.
     * If you pass an object as the first argument you can add to multiple events at once. The object should contain key value pairs of events and listeners or listener arrays. You can also pass it an event name and an array of listeners to be added.
     * You can also pass it a regular expression to add the array of listeners to all events that match it.
     * Yeah, this function does quite a bit. That's probably a bad thing.
     *
     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add to multiple events at once.
     * @param {Function[]} [listeners] An optional array of listener functions to add.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.addListeners = function addListeners(evt, listeners) {
        // Pass through to manipulateListeners
        return this.manipulateListeners(false, evt, listeners);
    };

    /**
     * Removes listeners in bulk using the manipulateListeners method.
     * If you pass an object as the first argument you can remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
     * You can also pass it an event name and an array of listeners to be removed.
     * You can also pass it a regular expression to remove the listeners from all events that match it.
     *
     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to remove from multiple events at once.
     * @param {Function[]} [listeners] An optional array of listener functions to remove.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.removeListeners = function removeListeners(evt, listeners) {
        // Pass through to manipulateListeners
        return this.manipulateListeners(true, evt, listeners);
    };

    /**
     * Edits listeners in bulk. The addListeners and removeListeners methods both use this to do their job. You should really use those instead, this is a little lower level.
     * The first argument will determine if the listeners are removed (true) or added (false).
     * If you pass an object as the second argument you can add/remove from multiple events at once. The object should contain key value pairs of events and listeners or listener arrays.
     * You can also pass it an event name and an array of listeners to be added/removed.
     * You can also pass it a regular expression to manipulate the listeners of all events that match it.
     *
     * @param {Boolean} remove True if you want to remove listeners, false if you want to add.
     * @param {String|Object|RegExp} evt An event name if you will pass an array of listeners next. An object if you wish to add/remove from multiple events at once.
     * @param {Function[]} [listeners] An optional array of listener functions to add/remove.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.manipulateListeners = function manipulateListeners(remove, evt, listeners) {
        var i;
        var value;
        var single = remove ? this.removeListener : this.addListener;
        var multiple = remove ? this.removeListeners : this.addListeners;

        // If evt is an object then pass each of its properties to this method
        if ((typeof evt === 'undefined' ? 'undefined' : _typeof(evt)) === 'object' && !(evt instanceof RegExp)) {
            for (i in evt) {
                if (evt.hasOwnProperty(i) && (value = evt[i])) {
                    // Pass the single listener straight through to the singular method
                    if (typeof value === 'function') {
                        single.call(this, i, value);
                    } else {
                        // Otherwise pass back to the multiple function
                        multiple.call(this, i, value);
                    }
                }
            }
        } else {
            // So evt must be a string
            // And listeners must be an array of listeners
            // Loop over it and pass each one to the multiple method
            i = listeners.length;
            while (i--) {
                single.call(this, evt, listeners[i]);
            }
        }

        return this;
    };

    /**
     * Removes all listeners from a specified event.
     * If you do not specify an event then all listeners will be removed.
     * That means every event will be emptied.
     * You can also pass a regex to remove all events that match it.
     *
     * @param {String|RegExp} [evt] Optional name of the event to remove all listeners for. Will remove from every event if not passed.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.removeEvent = function removeEvent(evt) {
        var type = typeof evt === 'undefined' ? 'undefined' : _typeof(evt);
        var events = this._getEvents();
        var key;

        // Remove different things depending on the state of evt
        if (type === 'string') {
            // Remove all listeners for the specified event
            delete events[evt];
        } else if (evt instanceof RegExp) {
            // Remove all events matching the regex.
            for (key in events) {
                if (events.hasOwnProperty(key) && evt.test(key)) {
                    delete events[key];
                }
            }
        } else {
            // Remove all listeners in all events
            delete this._events;
        }

        return this;
    };

    /**
     * Alias of removeEvent.
     *
     * Added to mirror the node API.
     */
    proto.removeAllListeners = alias('removeEvent');

    /**
     * Emits an event of your choice.
     * When emitted, every listener attached to that event will be executed.
     * If you pass the optional argument array then those arguments will be passed to every listener upon execution.
     * Because it uses `apply`, your array of arguments will be passed as if you wrote them out separately.
     * So they will not arrive within the array on the other side, they will be separate.
     * You can also pass a regular expression to emit to all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
     * @param {Array} [args] Optional array of arguments to be passed to each listener.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.emitEvent = function emitEvent(evt, args) {
        var listenersMap = this.getListenersAsObject(evt);
        var listeners;
        var listener;
        var i;
        var key;
        var response;

        for (key in listenersMap) {
            if (listenersMap.hasOwnProperty(key)) {
                listeners = listenersMap[key].slice(0);

                for (i = 0; i < listeners.length; i++) {
                    // If the listener returns true then it shall be removed from the event
                    // The function is executed either with a basic call or an apply if there is an args array
                    listener = listeners[i];

                    if (listener.once === true) {
                        this.removeListener(evt, listener.listener);
                    }

                    response = listener.listener.apply(this, args || []);

                    if (response === this._getOnceReturnValue()) {
                        this.removeListener(evt, listener.listener);
                    }
                }
            }
        }

        return this;
    };

    /**
     * Alias of emitEvent
     */
    proto.trigger = alias('emitEvent');

    /**
     * Subtly different from emitEvent in that it will pass its arguments on to the listeners, as opposed to taking a single array of arguments to pass on.
     * As with emitEvent, you can pass a regex in place of the event name to emit to all events that match it.
     *
     * @param {String|RegExp} evt Name of the event to emit and execute listeners for.
     * @param {...*} Optional additional arguments to be passed to each listener.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.emit = function emit(evt) {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(evt, args);
    };

    /**
     * Sets the current value to check against when executing listeners. If a
     * listeners return value matches the one set here then it will be removed
     * after execution. This value defaults to true.
     *
     * @param {*} value The new value to check for when executing listeners.
     * @return {Object} Current instance of EventEmitter for chaining.
     */
    proto.setOnceReturnValue = function setOnceReturnValue(value) {
        this._onceReturnValue = value;
        return this;
    };

    /**
     * Fetches the current value to check against when executing listeners. If
     * the listeners return value matches this one then it should be removed
     * automatically. It will return true by default.
     *
     * @return {*|Boolean} The current value to check for or the default, true.
     * @api private
     */
    proto._getOnceReturnValue = function _getOnceReturnValue() {
        if (this.hasOwnProperty('_onceReturnValue')) {
            return this._onceReturnValue;
        } else {
            return true;
        }
    };

    /**
     * Fetches the events object and creates one if required.
     *
     * @return {Object} The events storage object.
     * @api private
     */
    proto._getEvents = function _getEvents() {
        return this._events || (this._events = {});
    };

    /**
     * Reverts the global {@link EventEmitter} to its previous value and returns a reference to this version.
     *
     * @return {Function} Non conflicting EventEmitter class.
     */
    EventEmitter.noConflict = function noConflict() {
        exports.EventEmitter = originalGlobalValue;
        return EventEmitter;
    };

    // Expose the class either via AMD, CommonJS or the global object
    if (true) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
            return EventEmitter;
        }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
})(typeof window !== 'undefined' ? window : this || {});

/***/ }),

/***/ "./src/base.js":
/*!*********************!*\
  !*** ./src/base.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview
 * The base class for complex class
 * @author huangtonger@aliyun.com
 */

var Util = __webpack_require__(/*! ./util/ */ "./src/util/index.js");
var EventEmitter = __webpack_require__(/*! wolfy87-eventemitter */ "./node_modules/wolfy87-eventemitter/EventEmitter.js");

var Base = function (_EventEmitter) {
  _inherits(Base, _EventEmitter);

  Base.prototype.getDefaultCfg = function getDefaultCfg() {
    return {};
  };

  function Base(cfg) {
    _classCallCheck(this, Base);

    var _this = _possibleConstructorReturn(this, _EventEmitter.call(this));

    var defaultCfg = _this.getDefaultCfg();
    _this._cfg = Util.mix({}, defaultCfg, cfg);
    return _this;
  }

  Base.prototype.get = function get(name) {
    return this._cfg[name];
  };

  Base.prototype.set = function set(name, value) {
    this._cfg[name] = value;
  };

  Base.prototype.destroy = function destroy() {
    this._cfg = {};
    this.removeAllListeners();
    this.destroyed = true;
  };

  return Base;
}(EventEmitter);

module.exports = Base;

/***/ }),

/***/ "./src/controller/animate.js":
/*!***********************************!*\
  !*** ./src/controller/animate.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview animate controller
 * @author huangtonger@aliyun.com
 */

var Base = __webpack_require__(/*! ./base */ "./src/controller/base.js");
var Util = __webpack_require__(/*! ../util/ */ "./src/util/index.js");
var Global = __webpack_require__(/*! ../global */ "./src/global.js");

/**
 * depth traversal and copy the graphics
 * @param  {object}   map        the index table
 * @param  {array}    parent     parent
 * @param  {number}   count      element count
 * @return {number}   count      element count
 */
function getElements(map, parent, count) {
  var children = parent.get('children');
  Util.each(children, function (child) {
    count++;
    var id = child.gid;
    if (child.isGroup) {
      count = getElements(map, child, count);
    }
    if (!Util.isNil(id)) {
      var stash = {
        matrixStash: Util.clone(child.getMatrix()),
        element: child
      };
      if (child.isShape) {
        var attrs = child.get('attrs');
        stash.attrsStash = {};
        Util.each(attrs, function (v, k) {
          stash.attrsStash[k] = child.attr(k);
        });
      }
      map[id] = stash;
    }
  });
  return count;
}

function updateAnimate(element, props) {
  element.set('capture', false);
  element.animate(props, Global.updateDuration, Global.updateEasing, function () {
    element.set('capture', true);
  });
}

var Controller = function (_Base) {
  _inherits(Controller, _Base);

  function Controller(cfg) {
    _classCallCheck(this, Controller);

    var _this = _possibleConstructorReturn(this, _Base.call(this, cfg));

    _this._init();
    return _this;
  }

  Controller.prototype._init = function _init() {
    var _this2 = this;

    var graph = this.graph;
    graph.on('afteritemdraw', function (ev) {
      _this2.cacheKeyFrame(ev.item);
    });
  };

  Controller.prototype.cacheKeyFrame = function cacheKeyFrame(item) {
    var keyFrameCache = this.keyFrameCache;
    var group = item.getGraphicGroup();
    if (item.isEdge) {
      group.setMatrix([1, 0, 0, 0, 1, 0, 0, 0, 1]);
    }
    group.deepEach(function (element) {
      var id = element.gid;
      var stash = {
        matrix: Util.clone(element.getMatrix())
      };
      if (element.isItemContainer) {
        stash.enterAnimate = item.getEnterAnimate();
        stash.leaveAnimate = item.getLeaveAnimate();
      }
      if (element.isShape) {
        stash.attrs = element.getAttrs();
      }
      stash.item = item;
      keyFrameCache[id] = stash;
    }, true);
  };

  Controller.prototype._compare = function _compare() {
    var stash0 = this.stash0;
    var stash1 = this.stash1;
    var enterElements = [];
    var leaveElements = [];
    var updateElements = [];

    Util.each(stash1, function (v, k) {
      if (stash0[k]) {
        if (v.element.get('type') === stash0[k].element.get('type')) {
          updateElements.push(k);
        }
      } else {
        enterElements.push(k);
      }
    });
    Util.each(stash0, function (v, k) {
      if (!stash1[k]) {
        leaveElements.push(k);
      }
    });
    this.enterElements = enterElements;
    this.leaveElements = leaveElements;
    this.updateElements = updateElements;
  };

  Controller.prototype._addTween = function _addTween() {
    var enterElements = this.enterElements;
    var leaveElements = this.leaveElements;
    var updateElements = this.updateElements;
    var stash0 = this.stash0;
    var stash1 = this.stash1;
    var keyFrameCache = this.keyFrameCache;

    Util.each(enterElements, function (elementId) {
      var keyFrame = keyFrameCache[elementId];
      var enterAnimate = keyFrame.enterAnimate;
      if (enterAnimate) {
        enterAnimate(keyFrame.item, stash0.element, stash1.element);
      }
    });
    Util.each(leaveElements, function (elementId) {
      var keyFrame = keyFrameCache[elementId];
      var leaveAnimate = keyFrame.leaveAnimate;
      if (leaveAnimate) {
        var e0 = stash0[elementId].element;
        e0.getParent().add(e0);
        leaveAnimate(keyFrame.item, stash0, stash1);
      }
    });
    Util.each(updateElements, function (elementId) {
      var keyFrame = keyFrameCache[elementId];
      var subStash1 = stash1[elementId];
      var subStash0 = stash0[elementId];
      var e1 = subStash1.element;
      var e0 = subStash0.element;
      if (subStash0.attrsStash) {
        e1.attr(subStash0.attrsStash);
      }
      e1.setMatrix(subStash0.matrixStash);
      updateAnimate(e1, Util.mix({}, keyFrame.attrs, { matrix: keyFrame.matrix }));
      if (e0 !== e1) {
        e0.remove();
      }
    });
  };

  Controller.prototype.getDefaultCfg = function getDefaultCfg() {
    return {
      graph: null,
      canvases: null,
      stash0: null,
      stash1: null,
      keyFrameCache: {}
    };
  };

  Controller.prototype.run = function run() {
    if (this.graph.destroyed) {
      return;
    }
    this.updateStash();
    if (this.count < 5000) {
      this._compare();
      this._addTween();
    }
    Util.each(this.canvases, function (canvas) {
      canvas.draw();
    });
  };

  Controller.prototype.updateStash = function updateStash() {
    var canvases = this.canvases;
    var elementsStash = this.elementsStash;
    var elements = {};
    var count = 0;
    elementsStash = elementsStash ? elementsStash : {};
    Util.each(canvases, function (canvas) {
      count += getElements(elements, canvas, 0);
    });
    this.elementsStash = elements;
    this.stash0 = elementsStash;
    this.stash1 = elements;
    this.count = count;
  };

  return Controller;
}(Base);

module.exports = Controller;

/***/ }),

/***/ "./src/controller/base.js":
/*!********************************!*\
  !*** ./src/controller/base.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @fileOverview controller base
 * @author huangtonger@aliyun.com
 */

var Util = __webpack_require__(/*! ../util/ */ "./src/util/index.js");

var Base = function () {
  Base.prototype.getDefaultCfg = function getDefaultCfg() {
    return {};
  };

  function Base(cfg) {
    _classCallCheck(this, Base);

    var defaultCfg = this.getDefaultCfg();
    Util.mix(this, defaultCfg, cfg);
  }

  Base.prototype.destroy = function destroy() {};

  return Base;
}();

module.exports = Base;

/***/ }),

/***/ "./src/controller/event.js":
/*!*********************************!*\
  !*** ./src/controller/event.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview dom event handler
 * @author wuyue.lwy <wyueliu@gmail.com>
 */

var Base = __webpack_require__(/*! ./base */ "./src/controller/base.js");
var Util = __webpack_require__(/*! ../util/ */ "./src/util/index.js");
var EVENT = {
  MOUSEMOVE: 'mousemove',
  MOUSEDOWN: 'mousedown',
  MOUSEUP: 'mouseup',
  MOUSEENTER: 'mouseenter',
  MOUSELEAVE: 'mouseleave',
  CLICK: 'click',
  DBLCLICK: 'dblclick',
  DRAGSTART: 'dragstart',
  DRAG: 'drag',
  DRAGENTER: 'dragenter',
  DRAGLEAVE: 'dragleave',
  DRAGEND: 'dragend',
  DROP: 'drop',
  CONTEXTMENU: 'contextmenu',
  MOUSEWHEEL: 'mousewheel',
  KEYDOWN: 'keydown',
  KEYUP: 'keyup',
  KEYPRESS: 'keypress'
};
var SHAKE_TOLERANCE = 9; // use to tolerate click shake prevent drag shake. The distance is tolerance sqrt.

// native dom events list:
var MouseEventTypes = [EVENT.DBLCLICK, EVENT.MOUSEDOWN, EVENT.MOUSEUP, EVENT.MOUSEENTER, EVENT.MOUSELEAVE, EVENT.MOUSEMOVE, EVENT.CONTEXTMENU, EVENT.MOUSEWHEEL];
var KeyboardEventTypes = [EVENT.KEYDOWN, EVENT.KEYUP, EVENT.KEYPRESS];
var CANVAS = 'canvas:';

var Controller = function (_Base) {
  _inherits(Controller, _Base);

  function Controller(cfg) {
    _classCallCheck(this, Controller);

    var _this = _possibleConstructorReturn(this, _Base.call(this, cfg));

    _this._domEvents = [];
    _this._initEventStates();
    _this._registerEvents();
    return _this;
  }
  // init evnet states


  Controller.prototype._initEventStates = function _initEventStates() {
    this._pressing = false;
    this._dragging = false;
    this._currentEventObj = null;
    this._dragEventObj = {};
  };
  // register all native dom events


  Controller.prototype._registerEvents = function _registerEvents() {
    this._registerMouseEvents();
    this._registerKeyboardEvents();
  };

  Controller.prototype._registerKeyboardEvents = function _registerKeyboardEvents() {
    var graph = this.graph;
    var el = graph.getKeyboardEventWrapper();
    var _events = this._domEvents;
    var keyboardEnable = graph.get('keyboardEnable');

    Util.each(KeyboardEventTypes, function (item) {
      _events.push(Util.addEventListener(el, item, function (ev) {
        var enable = true;
        if (Util.isFunction(keyboardEnable)) {
          enable = keyboardEnable();
        }
        enable && graph.emit(item, {
          domEvent: ev
        });
      }));
    });
  };

  Controller.prototype._registerMouseEvents = function _registerMouseEvents() {
    var _this2 = this;

    var graph = this.graph;
    var self = this;
    var el = graph.getMouseEventWrapper();
    var _events = this._domEvents;
    Util.each(MouseEventTypes, function (item) {
      _events.push(Util.addEventListener(el, item, function (ev) {
        var oldEventObj = _this2._currentEventObj;
        _this2._oldEventObj = oldEventObj;
        _this2._processEventObj(ev);
        var currentEventObj = _this2._currentEventObj;

        // emit simulate events like click, dragstart, dragend, drop, dtagover,  mouseenter, mouseleave
        self._simulateEvents(ev, oldEventObj, currentEventObj);

        // emit normal events
        if ([EVENT.MOUSELEAVE, EVENT.MOUSEENTER].indexOf(ev.type) !== -1) {
          self._triggerEvent(CANVAS + ev.type);
        }
        self._triggerEvent(ev.type);

        if (ev.type === EVENT.MOUSELEAVE) {
          // trigger canvas dragleave when out of canvas , user can clear things that record by themselves
          if (_this2._dragging) {
            self._triggerEvent(EVENT.DRAGLEAVE, Util.mix({}, currentEventObj, { item: null, shape: null, currentItem: _this2._dragEventObj.item, currentShape: _this2._dragEventObj.shape }));
          }
          self._initEventStates();
        }
      }));
    });
  };
  // delete listeners


  Controller.prototype.destroy = function destroy() {
    var events = this._domEvents;
    Util.each(events, function (ev) {
      ev && ev.remove();
    });
    this._domEvents = null;
  };
  /**
    * trigger event
    * @param {string} type  - event type
    * @param {object} eventObj - event object
    */


  Controller.prototype._triggerEvent = function _triggerEvent(type, eventObj) {
    if (!eventObj) {
      if (type === 'mouseleave') {
        eventObj = this._oldEventObj;
      } else {
        eventObj = this._currentEventObj;
      }
    }
    if (type === 'mousedown') {
      eventObj.button = this._button;
    }
    // emit shape event
    eventObj._type = type;
    this.emitGraphEvent(type, eventObj);
    if ([CANVAS + EVENT.MOUSELEAVE, CANVAS + EVENT.MOUSEENTER].indexOf(type) !== -1) {
      return;
    }
    var eventPreFix = eventObj.shape && eventObj.shape.eventPreFix;

    if ([EVENT.DRAGSTART, EVENT.DRAG, EVENT.DRAGEND].indexOf(type) !== -1) {
      // get correct prefix
      eventPreFix = eventObj.currentShape && eventObj.currentShape.eventPreFix;
    }

    if (eventPreFix) {
      var _type = eventPreFix + ':' + type;
      eventObj._type = _type;
      if (Util.isBoolean(eventObj._isItemChange)) {
        if (eventObj._isItemChange) {
          this.emitGraphEvent(_type, eventObj);
        }
      } else {
        this.emitGraphEvent(_type, eventObj);
      }
    }
  };
  /**
    * emit graph event
    * @param {object} type - event type
    * @param {object} eventObj - event object
    */


  Controller.prototype.emitGraphEvent = function emitGraphEvent(type, eventObj) {
    var graph = this.graph;
    graph.emit(type, eventObj);
  };

  Controller.prototype._getDistanceToPress = function _getDistanceToPress(ev) {
    return Math.pow(ev.clientX - this._pressX, 2) + Math.pow(ev.clientY - this._pressY, 2);
  };
  /**
    * check whether or not  click  and drag
    * @param {object} ev - native dom event
    * @param {object} oldEventObj - old event object
    * @param {object} currentEventObj - current event object
    */


  Controller.prototype._simulateEvents = function _simulateEvents(ev) {
    var oldEventObj = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var currentEventObj = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var currentItem = this._dragEventObj.item;
    var currentShape = this._dragEventObj.shape;
    switch (ev.type) {
      case EVENT.MOUSEDOWN:
        this._pressing = true;
        this._button = ev.button;
        this._pressX = ev.clientX;
        this._pressY = ev.clientY;
        break;
      case EVENT.MOUSEMOVE:
        // record the element that was dragging
        if (this._dragging) {
          this._triggerEvent(EVENT.DRAG, Util.mix({}, currentEventObj, { button: this._button, currentItem: currentItem, currentShape: currentShape }));
          if (oldEventObj.shape !== currentEventObj.shape) {
            var _isItemChange = this._isItemChange(oldEventObj, currentEventObj);
            if (oldEventObj.shape) {
              this._triggerEvent(EVENT.DRAGLEAVE, Util.mix({}, currentEventObj, { button: this._button, item: oldEventObj.item, shape: oldEventObj.shape,
                toItem: currentEventObj.item, toShape: currentEventObj.shape, currentItem: currentItem, currentShape: currentShape, _isItemChange: _isItemChange }));
            }
            if (currentEventObj.shape) {
              this._triggerEvent(EVENT.DRAGENTER, Util.mix({}, currentEventObj, { button: this._button, currentItem: currentItem, currentShape: currentShape, fromItem: oldEventObj.item,
                fromShape: oldEventObj.shape, _isItemChange: _isItemChange }));
            }
          }
        } else if (this._pressing && this._getDistanceToPress(ev) > SHAKE_TOLERANCE) {

          this._dragging = true;
          this._dragEventObj = currentEventObj;
          currentItem = this._dragEventObj.item;
          currentShape = this._dragEventObj.shape;
          this._triggerEvent(EVENT.DRAGSTART, Util.mix({}, currentEventObj, { button: this._button, currentItem: currentItem, currentShape: currentShape }));
        }
        // normal move
        if (oldEventObj.shape !== currentEventObj.shape) {
          var _isItemChange2 = this._isItemChange(oldEventObj, currentEventObj);

          if (oldEventObj.shape) {
            // just canvas has no shape, it should not trigger leave
            this._triggerEvent(EVENT.MOUSELEAVE, Util.mix({}, currentEventObj, { item: oldEventObj.item, shape: oldEventObj.shape,
              toItem: currentEventObj.item, toShape: currentEventObj.shape, _isItemChange: _isItemChange2 }));
          }
          if (currentEventObj.shape) {
            // canvas should not trigger enter
            this._triggerEvent(EVENT.MOUSEENTER, Util.mix({}, currentEventObj, { fromtItem: oldEventObj.item, fromShape: oldEventObj.shape, _isItemChange: _isItemChange2 }));
          }
        }
        break;
      case EVENT.MOUSEUP:
        if (!this._dragging && this._pressing) {
          this._triggerEvent(EVENT.CLICK, Util.mix({}, currentEventObj, { button: this._button }));
        } else {
          this._triggerEvent(EVENT.DROP, Util.mix({}, currentEventObj, { button: this._button, currentItem: currentItem, currentShape: currentShape }));
          this._triggerEvent(EVENT.DRAGEND, Util.mix({}, currentEventObj, { button: this._button, currentItem: currentItem, currentShape: currentShape }));
        }
        this._pressing = false;
        this._dragging = false;
        this._dragEventObj = {};
        break;
      default:
        return;
    }
  };
  /**
   * checkout item is change
   * @param {object} oldEventObj - old event obj
   * @param {object} currentEventObj - current event obj
   * @return {boolean} rst
   */


  Controller.prototype._isItemChange = function _isItemChange(oldEventObj, currentEventObj) {
    var oldShape = oldEventObj.shape;
    var currentShape = currentEventObj.shape;
    var shapeIsItemChange = oldShape && currentShape && (oldShape.get('isItemChange') || currentShape.get('isItemChange'));

    if (shapeIsItemChange) {
      return shapeIsItemChange(currentShape, oldShape);
    }
    if (Util.isObject(oldEventObj.item) && Util.isObject(currentEventObj.item)) {
      return oldEventObj.item.id !== currentEventObj.item.id;
    }
    return oldEventObj.item !== currentEventObj.item;
  };
  /**
   * handle the native event by browser
   * @param {object} ev - native event by browser
   */


  Controller.prototype._processEventObj = function _processEventObj(ev) {
    var graph = this.graph;
    var canvas = graph.get('_canvas');
    var frontCanvas = graph.get('_frontCanvas');
    var evObj = this._getEventObj(ev, canvas);
    var frontEvObj = this._getEventObj(ev, frontCanvas);

    // frontEvObj is the first
    if (frontEvObj.shape) {
      evObj.shape = frontEvObj.shape;
      evObj.item = frontEvObj.item;
    }
    evObj.frontEvObj = frontEvObj;
    this._currentEventObj = evObj;
  };
  // transform point position by pixel Ratio


  Controller.prototype._parsePoint = function _parsePoint(x, y) {
    var graph = this.graph;
    return graph.getPointByCanvas({
      x: x,
      y: y
    });
  };
  /**
    * get the source object which emitted event
    * @param {object} ev  -native event by browser
    * @param {object} canvas -the scene that event occurred
    * @return {object} - event object
    */


  Controller.prototype._getEventObj = function _getEventObj(ev, canvas) {
    var graph = this.graph;
    var clientX = ev.clientX;
    var clientY = ev.clientY;
    var canvasPoint = canvas.getPointByClient(clientX, clientY);
    var point = this._parsePoint(canvasPoint.x, canvasPoint.y);
    var shape = canvas.getShape(canvasPoint.x, canvasPoint.y);
    var item = graph.getItemByShape(shape);
    var pixelRatio = canvas.get('pixelRatio');
    return {
      item: item,
      shape: shape,
      x: point.x,
      y: point.y,
      domX: canvasPoint.x / pixelRatio,
      domY: canvasPoint.y / pixelRatio,
      domEvent: ev
    };
  };

  return Controller;
}(Base);

module.exports = Controller;

/***/ }),

/***/ "./src/controller/layout.js":
/*!**********************************!*\
  !*** ./src/controller/layout.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview layout controller
 * @author huangtonger@aliyun.com
 */

var Base = __webpack_require__(/*! ./base */ "./src/controller/base.js");

var Controller = function (_Base) {
  _inherits(Controller, _Base);

  Controller.prototype.getDefaultCfg = function getDefaultCfg() {
    return {
      /**
       * graph object
       * @type {object}
       */
      graph: null,

      /**
       * if auto layout afterchange
       * @type {boolean|string}
       * could be true false 'once'
       */
      auto: true,

      /**
       * layout processer
       * @type {object}
       */
      processer: null
    };
  };

  function Controller(cfg) {
    _classCallCheck(this, Controller);

    var _this = _possibleConstructorReturn(this, _Base.call(this, cfg));

    _this._init();
    return _this;
  }

  Controller.prototype._init = function _init() {
    var _this2 = this;

    var graph = this.graph;
    graph.on('afteritemdraw', function (ev) {
      var item = ev.item;
      var keyShape = item.getKeyShape();
      var model = item.getModel();
      if (item.isEdge) {
        model.lineWidth = keyShape.attr('lineWidth');
      } else if (item.isNode || item.isGroup) {
        var bbox = item.getBBox();
        model.width = bbox.width;
        model.height = bbox.height;
      }
    });
    graph.on('afterchange', function (_ref) {
      var action = _ref.action;

      var auto = _this2.auto;
      if (auto === 'once') {
        if (action === 'changeData') {
          !graph.destroyed && _this2.layout();
        }
      } else {
        _this2.auto && !graph.destroyed && _this2.layout();
      }
    });
  };

  Controller.prototype.changeLayout = function changeLayout(processer) {
    this.processer = processer;
    this.layout();
  };

  Controller.prototype.layout = function layout() {
    var graph = this.graph;
    var processer = this.processer;
    graph.emit('beforelayout');
    var nodes = graph.getNodes().filter(function (node) {
      return node.isVisible();
    }).map(function (edge) {
      return edge.getModel();
    });
    var edges = graph.getEdges().filter(function (edge) {
      return edge.isVisible();
    }).map(function (edge) {
      return edge.getModel();
    });
    var groups = graph.getGroups().filter(function (group) {
      return group.isVisible();
    }).map(function (group) {
      return group.getModel();
    });
    graph._executeLayout(processer, nodes, edges, groups);
    graph.updateNodePosition();
    graph.emit('afterlayout');
  };

  Controller.prototype.getLayoutProcesser = function getLayoutProcesser() {
    return this.processer;
  };

  return Controller;
}(Base);

module.exports = Controller;

/***/ }),

/***/ "./src/controller/mapper.js":
/*!**********************************!*\
  !*** ./src/controller/mapper.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview mapper controller
 * @author huangtonger@aliyun.com
 */

var Base = __webpack_require__(/*! ./base */ "./src/controller/base.js");
var Util = __webpack_require__(/*! ../util/ */ "./src/util/index.js");
var CHANNEL_NAMES = ['color', 'shape', 'size', 'label', 'style'];

var Controller = function (_Base) {
  _inherits(Controller, _Base);

  function Controller(cfg) {
    _classCallCheck(this, Controller);

    var _this = _possibleConstructorReturn(this, _Base.call(this, cfg));

    _this._init();
    return _this;
  }

  Controller.prototype._init = function _init() {
    var _this2 = this;

    var channels = {};
    Util.each(CHANNEL_NAMES, function (channel) {
      channels[channel] = {};
      _this2[channel] = function (input) {
        channels[channel].input = input;
        return _this2;
      };
    });
    this.channels = channels;
  };

  Controller.prototype.addChannels = function addChannels(inputChannels) {
    var channels = this.channels;
    Util.each(inputChannels, function (channel, name) {
      channels[name] = {
        input: channel
      };
    });
  };
  /**
   * @param  {object} model origin model
   */


  Controller.prototype.mapping = function mapping(model) {
    var channels = this.channels;
    Util.each(channels, function (channel, name) {
      if (Util.isNil(model[name])) {
        if (Util.isFunction(channel.input)) {
          model[name] = channel.input(model);
        } else if (channel.input) {
          model[name] = channel.input;
        }
      }
    });
  };

  return Controller;
}(Base);

module.exports = Controller;

/***/ }),

/***/ "./src/extend/g/canvas.js":
/*!********************************!*\
  !*** ./src/extend/g/canvas.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview extend G.Shape
 * @author huangtonger@aliyun.com
 * @ignore
 */

var Util = __webpack_require__(/*! ../../util/ */ "./src/util/index.js");
var G = __webpack_require__(/*! @antv/g */ "./node_modules/@antv/g/build/g.js");
var Mixin = function Mixin() {};

Util.augment(Mixin, {
  beforeDraw: function beforeDraw() {
    var context = this.get('context');
    var el = this.get('el');
    this.emit('beforedraw');
    context && context.clearRect(0, 0, el.width, el.height);
  }
});

Util.mixin(G.canvas.Canvas, [Mixin]);
Util.mixin(G.svg.Canvas, [Mixin]);

module.exports = Mixin;

/***/ }),

/***/ "./src/extend/g/group.js":
/*!*******************************!*\
  !*** ./src/extend/g/group.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview extend G.Group
 * @author huangtonger@aliyun.com
 * @ignore
 */

var G = __webpack_require__(/*! @antv/g */ "./node_modules/@antv/g/build/g.js");
var Util = __webpack_require__(/*! ../../util/ */ "./src/util/index.js");
var Mixin = function Mixin() {};

Util.augment(Mixin, {
  /**
   * find element by className
   * @param   {String}      className class name
   * @return  {Array}       rst
   */
  findByClass: function findByClass(className) {
    var rst = [];
    this.deepEach(function (child) {
      if (child.hasClass(className)) {
        rst.push(child);
      }
    });
    return rst;
  },

  /**
   * Check contains the specified class
   * @param   {String}      className class name
   * @return  {Boolean}     boolean
   */
  hasClass: function hasClass(className) {
    var clasees = this.get('class');
    if (clasees && clasees.indexOf(className) !== -1) {
      return true;
    }
    return false;
  },

  /**
   * traverse child node
   * @param  {function} callback callback
   * @param  {boolean} runSelf excute self or not
   */
  deepEach: function deepEach(callback, runSelf) {
    Util.traverseTree(this, callback, function (parent) {
      return parent.get('children');
    }, runSelf);
  },

  /**
   * radix sort (a stable sort)
   */
  sort: function sort() {
    var children = this.get('children');
    this.set('children', Util.radixSort(children, function (child) {
      return child.get('zIndex');
    }));
  },

  /**
   * sort by callback
   * @param  {function} callback callback
   */
  sortBy: function sortBy(callback) {
    var children = this.get('children');
    this.set('children', Util.radixSort(children, callback));
  },

  /**
   * clear inner elements
   * @param  {boolean} bool if destroy child
   * @return {object}  this
   */
  clear: function clear(bool) {
    var children = this.get('children');
    bool = bool !== false;
    while (children.length !== 0) {
      children[children.length - 1].remove(bool);
    }
    return this;
  }
});

Util.mixin(G.canvas.Group, [Mixin]);
Util.mixin(G.svg.Group, [Mixin]);

module.exports = Mixin;

/***/ }),

/***/ "./src/extend/g/html.js":
/*!******************************!*\
  !*** ./src/extend/g/html.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview html shape
 * @author huangtonger@aliyun.com
 */

var Util = __webpack_require__(/*! ../../util/ */ "./src/util/index.js");
var G = __webpack_require__(/*! @antv/g */ "./node_modules/@antv/g/build/g.js");
var Html = function Html(cfg) {
  Html.superclass.constructor.call(this, cfg);
};

Util.extend(Html, G.canvas.Shape);

Html.ATTRS = {
  x: 0,
  y: 0,
  width: 0,
  height: 0
};

Util.augment(Html, {
  canFill: true,
  type: 'html',
  __isPointInFill: function __isPointInFill(x, y) {
    var bbox = this.getBBox();
    var rx = bbox.minX;
    var ry = bbox.minY;
    var width = bbox.maxX - bbox.minX;
    var height = bbox.maxY - bbox.minY;
    return rx <= x && x <= rx + width && ry <= y && y <= ry + height;
  },
  __initHtml: function __initHtml(html) {
    var attrs = this.get('attrs');
    var canvas = this.get('canvas');
    var htmlElementContaniner = canvas.get('htmlElementContaniner');
    // destroy last dom
    if (attrs.html && attrs.html.destroy) {
      attrs.html.destroy();
    }
    html = Util.createDOM(html);
    html.css({
      position: 'absolute',
      padding: '0px',
      margin: '0px',
      visibility: 'hidden'
    });
    attrs.html = html;
    htmlElementContaniner.appendChild(html);
  },
  isPointInPath: function isPointInPath(x, y) {
    return this.__isPointInFill(x, y);
  },
  init: function init() {
    var html = this.attr('html');
    var canvas = this.get('canvas');
    canvas.on('beforedraw', function () {
      html.css({
        visibility: 'hidden'
      });
    });
    this.__initHtml(html);
  },
  getDefaultAttrs: function getDefaultAttrs() {
    return Html.ATTRS;
  },
  attr: function attr(param1, param2) {
    var attrs = this.get('attrs');

    if (Util.isObject(param1)) {
      if (param1.html) {
        this.__initHtml(param1.html);
        delete param1.html;
      }
      Util.mix(attrs, param1);
      if (param1.x !== undefined || param1.y !== undefined || param1.width !== undefined || param1.height !== undefined) {
        this.calculateBox();
      }
      return attrs;
    }
    if (!Util.isNil(param2)) {
      if (param1 === 'html') {
        this.__initHtml(param2);
      } else {
        attrs[param1] = param2;
        if (param1 === 'x' || param1 === 'y' || param1 === 'width' || param1 === 'height') {
          this.calculateBox();
        }
      }
      return this;
    }
    return attrs[param1];
  },
  calculateBox: function calculateBox() {
    var x = this.attr('x');
    var y = this.attr('y');
    var width = this.attr('width');
    var height = this.attr('height');

    return {
      minX: x,
      minY: y,
      maxX: x + width,
      maxY: y + height
    };
  },
  getDrawTotalMatrix: function getDrawTotalMatrix() {
    var canvas = this.get('canvas');
    var m = Util.clone(this.attr('matrix'));
    var parent = this.getParent();
    while (parent !== canvas) {
      Util.mat3.multiply(m, parent.attr('matrix'), m);
      parent = parent.getParent();
    }
    return m;
  },
  getDOM: function getDOM() {
    return this.attr('html');
  },
  applyTransform: function applyTransform() {
    var html = this.attr('html');
    var m = this.getDrawTotalMatrix();
    var x = this.attr('x');
    var y = this.attr('y');
    var width = this.attr('width');
    var height = this.attr('height');
    var halfWidth = width / 2;
    var halfHeight = height / 2;
    var m6 = m[0] * x + m[6] + m[0] * halfWidth - halfWidth;
    var m7 = m[4] * y + m[7] + m[4] * halfHeight - halfHeight;
    html.css({
      transform: 'matrix(' + m[0] + ',' + m[1] + ',' + m[3] + ',' + m[4] + ',' + m6 + ',' + m7 + ')'
    });
  },
  createPath: function createPath() {
    var html = this.attr('html');
    var attrs = this.get('attrs');
    this.applyTransform();
    html.css(Util.mix({
      visibility: 'visible'
    }, attrs));
  },
  remove: function remove(bool) {
    var html = this.attr('html');
    html.css({
      visibility: 'hidden'
    });
    Html.superclass.remove.call(this, bool);
  },
  destroy: function destroy() {
    var html = this.attr('html');
    html && html.destroy();
    Html.superclass.destroy.call(this);
  }
});
G.canvas.Shape.Html = Html;

module.exports = Html;

/***/ }),

/***/ "./src/extend/g/root-group.js":
/*!************************************!*\
  !*** ./src/extend/g/root-group.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview freeze size group
 * @author huangtonger@aliyun.com
 */

var G = __webpack_require__(/*! @antv/g */ "./node_modules/@antv/g/build/g.js");
var Util = __webpack_require__(/*! ../../util/ */ "./src/util/index.js");

function extend(child, parent, augment) {
  var canvasElement = function canvasElement(cfg) {
    canvasElement.superclass.constructor.call(this, cfg);
  };
  var svgElement = function svgElement(cfg) {
    svgElement.superclass.constructor.call(this, cfg);
  };
  Util.extend(canvasElement, G.canvas[parent]);
  Util.extend(svgElement, G.svg[parent]);
  Util.augment(canvasElement, augment);
  Util.augment(svgElement, augment);
  G.canvas[child] = canvasElement;
  G.svg[child] = svgElement;
}

extend('RootGroup', 'Group', {
  drawInner: function drawInner(context) {
    var _this = this;

    this.deepEach(function (child) {
      var freezePoint = child.get('freezePoint');
      var freezable = _this.get('freezable');
      var scale = _this.getMatrix()[0];
      if (freezable !== false && child.isShape && freezePoint && child.get('visible')) {
        child.initTransform();
        child.transform([['t', -freezePoint.x, -freezePoint.y], ['s', 1 / scale, 1 / scale], ['t', freezePoint.x, freezePoint.y]]);
      }
    });
    this.constructor.superclass.drawInner.call(this, context);
  }
});

/***/ }),

/***/ "./src/extend/g/shape.js":
/*!*******************************!*\
  !*** ./src/extend/g/shape.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview extend G.Shape
 * @author huangtonger@aliyun.com
 * @ignore
 */

var Util = __webpack_require__(/*! ../../util/ */ "./src/util/index.js");
var G = __webpack_require__(/*! @antv/g */ "./node_modules/@antv/g/build/g.js");
var Mixin = function Mixin() {};

Util.augment(Mixin, {
  /**
   * get shape init attrs
   * @return {object} rst
   */
  getAttrs: function getAttrs() {
    var _this = this;

    var attrs = this.get('attrs');
    var rst = {};
    Util.each(attrs, function (v, k) {
      rst[k] = _this.attr(k);
    });
    return rst;
  },

  /**
   * Check contains the specified class
   * @param   {String}      className class name
   * @return  {Boolean}     boolean
   */
  hasClass: function hasClass(className) {
    var clasees = this.get('class');
    if (clasees && clasees.indexOf(className) !== -1) {
      return true;
    }
    return false;
  }
});

Util.mixin(G.canvas.Shape, [Mixin]);
Util.mixin(G.svg.Shape, [Mixin]);

module.exports = Mixin;

/***/ }),

/***/ "./src/global.js":
/*!***********************!*\
  !*** ./src/global.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview global config
 * @author huangtonger@aliyun.com
 */
var version = __webpack_require__(/*! ./version */ "./src/version.js");

module.exports = {
  trackable: true,
  defaultNodeSize: 40,
  labelStyle: {
    fill: '#595959',
    textAlign: 'center',
    textBaseline: 'middle'
  },
  groupStyle: {
    stroke: '#CED4D9',
    fill: '#F2F4F5',
    radius: 2
  },
  groupBackgroundPadding: [40, 10, 10, 10],
  updateDuration: 450,
  enterDuration: 450,
  leaveDuration: 450,
  updateEasing: 'easeQuadOut',
  enterEasing: 'easeQuadOut',
  leaveEasing: 'easeQuadOut',
  version: version
};

/***/ }),

/***/ "./src/graph.js":
/*!**********************!*\
  !*** ./src/graph.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview graph
 * @author huangtonger@aliyun.com
 */
__webpack_require__(/*! ./extend/g/html */ "./src/extend/g/html.js");
__webpack_require__(/*! ./extend/g/canvas */ "./src/extend/g/canvas.js");
__webpack_require__(/*! ./extend/g/group */ "./src/extend/g/group.js");
__webpack_require__(/*! ./extend/g/shape */ "./src/extend/g/shape.js");
__webpack_require__(/*! ./extend/g/root-group */ "./src/extend/g/root-group.js");
__webpack_require__(/*! ./extend/g/html */ "./src/extend/g/html.js");

var Base = __webpack_require__(/*! ./base */ "./src/base.js");
var Item = __webpack_require__(/*! ./item/ */ "./src/item/index.js");
var Shape = __webpack_require__(/*! ./shape/ */ "./src/shape/index.js");
var Util = __webpack_require__(/*! ./util/ */ "./src/util/index.js");
var G = __webpack_require__(/*! @antv/g */ "./node_modules/@antv/g/build/g.js");
var LayoutMixin = __webpack_require__(/*! ./mixin/layout */ "./src/mixin/layout.js");
var MappingMixin = __webpack_require__(/*! ./mixin/mapping */ "./src/mixin/mapping.js");
var QueryMixin = __webpack_require__(/*! ./mixin/query */ "./src/mixin/query.js");
var EventMixin = __webpack_require__(/*! ./mixin/event */ "./src/mixin/event.js");
var ModeMixin = __webpack_require__(/*! ./mixin/mode */ "./src/mixin/mode.js");
var FilterMixin = __webpack_require__(/*! ./mixin/filter */ "./src/mixin/filter.js");
var AnimateMixin = __webpack_require__(/*! ./mixin/animate */ "./src/mixin/animate.js");
var FitView = __webpack_require__(/*! ./mixin/fit-view */ "./src/mixin/fit-view.js");
var ForceFit = __webpack_require__(/*! ./mixin/force-fit */ "./src/mixin/force-fit.js");
var Mixins = [FilterMixin, MappingMixin, QueryMixin, AnimateMixin, ForceFit, LayoutMixin, FitView, EventMixin, ModeMixin];
var TAB_INDEX = 20;

var Graph = function (_Base) {
  _inherits(Graph, _Base);

  /**
   * Access to the default configuration properties
   * @return {object} default configuration
   */
  Graph.prototype.getDefaultCfg = function getDefaultCfg() {
    return {
      /**
       * Container could be dom object or dom id
       * @type {object|string|undefined}
       */
      container: undefined,

      /**
       * Canvas width
       * @type {number|undefined}
       * unit pixel if undefined force fit width
       */
      width: undefined,

      /**
       * Canvas height
       * @type {number|undefined}
       * unit pixel if undefined force fit height
       */
      height: undefined,

      /**
       * Plugins
       * @type {array}
       */
      plugins: [],

      /**
       * FontFamily
       * @type {string}
       */
      fontFamily: '"Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", SimSun, "sans-serif"',

      /**
       * default node shape
       * @type {string|undefined}
       */
      nodeDefaultShape: undefined,

      /**
       * default edge shape
       * @type {string|undefined}
       */
      edgeDefaultShape: undefined,

      /**
       * default group shape
       * @type {string|undefined}
       */
      groupDefaultShape: undefined,

      /**
       * default edge node intersect box
       * @type {string}
       */
      defaultIntersectBox: 'circle',
      render: 'canvas',
      _controllers: {},
      _timers: {},
      _dataMap: {},
      _itemMap: {},
      _data: {},
      _delayRunObj: {}
    };
  };

  function Graph(inputCfg) {
    _classCallCheck(this, Graph);

    var cfg = {};

    Mixins.forEach(function (Mixin) {
      Util.mix(cfg, Mixin.CFG, inputCfg);
    });

    // plugin should init before all
    var _this = _possibleConstructorReturn(this, _Base.call(this, cfg));

    _this._pluginInit();
    _this.emit('beforeinit');
    _this._init();
    _this.emit('afterinit');
    return _this;
  }

  Graph.prototype._init = function _init() {
    var _this2 = this;

    this._initData();
    this._initContainer();
    this._initCanvas();
    Mixins.forEach(function (Mixin) {
      Mixin.INIT && _this2[Mixin.INIT]();
    });
    this.initEvent();
  };

  Graph.prototype.initEvent = function initEvent() {};

  Graph.prototype._executeLayout = function _executeLayout(processer, nodes, edges, groups) {
    if (Util.isFunction(processer)) {
      processer(nodes, edges, this);
    } else if (Util.isObject(processer)) {
      processer.nodes = nodes;
      processer.edges = edges;
      processer.groups = groups;
      processer.graph = this;
      processer.execute();
    }
  };

  Graph.prototype._pluginInit = function _pluginInit() {
    var _this3 = this;

    var plugins = this.get('plugins');
    plugins.forEach(function (plugin) {
      _this3._initPlugin(plugin);
    });
  };

  Graph.prototype._initPlugin = function _initPlugin(plugin) {
    plugin.graph = this;
    plugin.init && plugin.init();
  };

  Graph.prototype._getTimer = function _getTimer(name) {
    return this.get('_timers')[name];
  };

  Graph.prototype._setTimer = function _setTimer(name, value) {
    this.get('_timers')[name] = value;
  };

  Graph.prototype._getController = function _getController(name) {
    return this.get('_controllers')[name];
  };

  Graph.prototype._initContainer = function _initContainer() {
    var container = this.get('container');
    if (!container) {
      // Compatible with id written
      container = this.get('id');
    }
    if (container) {
      if (Util.isString(container)) {
        container = document.getElementById(container);
      }
    } else {
      throw new Error('please set the container for the graph !');
    }
    var graphContainer = Util.createDOM('<div class="graph-container"></div>', {
      position: 'relative'
    });
    container.appendChild(graphContainer);
    this.set('_containerDOM', container);
    this.set('_graphContainer', graphContainer);
  };

  Graph.prototype._initCanvas = function _initCanvas() {
    var _this4 = this;

    var graphContainer = this.get('_graphContainer');
    var width = this.get('width');
    var height = this.get('height');
    var fontFamily = this.get('fontFamily');
    var canvasCfg = {
      width: width,
      height: height,
      fontFamily: fontFamily,
      eventEnable: false,
      containerDOM: graphContainer
    };

    var Canvas = this.getConstructor('Canvas');
    var canvas = new Canvas(canvasCfg);
    var frontCanvas = new Canvas(canvasCfg);

    var frontEl = frontCanvas.get('el');
    var htmlElementContaniner = graphContainer.appendChild(Util.createDOM('<div class="graph-container-html-Elements"></div>'));
    canvas.on('beforedraw', function () {
      _this4.emit('beforecanvasdraw');
    });
    frontEl.style.position = 'absolute';
    frontEl.style.top = 0;
    frontEl.style.left = 0;
    htmlElementContaniner.style.overflow = 'hidden';
    htmlElementContaniner.style.width = width + 'px';
    htmlElementContaniner.style.height = height + 'px';
    htmlElementContaniner.style.position = 'absolute';
    htmlElementContaniner.style.top = 0;
    htmlElementContaniner.style.left = 0;

    this.set('_canvas', canvas);
    this.set('_frontCanvas', frontCanvas);
    this.set('_htmlElementContaniner', htmlElementContaniner);
    var mouseEventWrapper = this.getMouseEventWrapper();
    mouseEventWrapper.style.outline = 'none';
    mouseEventWrapper.style['user-select'] = 'none';
    mouseEventWrapper.setAttribute('tabindex', TAB_INDEX);
    canvas.set('htmlElementContaniner', htmlElementContaniner);

    var RootGroup = this.getConstructor('RootGroup');
    var rootGroup = canvas.addGroup(RootGroup);
    var frontRootGroup = frontCanvas.addGroup(RootGroup);

    var itemGroup = rootGroup.addGroup();
    this.set('_itemGroup', itemGroup);
    this.set('_rootGroup', rootGroup);
    this.set('_frontRootGroup', frontRootGroup);
  };

  Graph.prototype._initData = function _initData() {
    this.set('_dataMap', {});
    this.set('_itemMap', {
      _nodes: [],
      _edges: [],
      _groups: [],
      _guides: []
    });
    this.set('_data', {});
  };

  Graph.prototype._refresh = function _refresh() {};

  Graph.prototype.getKeyboardEventWrapper = function getKeyboardEventWrapper() {
    var keyboardEventWrapper = this.get('keyboardEventWrapper');
    return keyboardEventWrapper ? keyboardEventWrapper : this.getMouseEventWrapper();
  };

  Graph.prototype.getMouseEventWrapper = function getMouseEventWrapper() {
    return this.get('_htmlElementContaniner');
  };
  /**
   * @param  {object} plugin - plugin instance
   */


  Graph.prototype.addPlugin = function addPlugin(plugin) {
    var plugins = this.get('plugins');
    this._initPlugin(plugin);
    plugins.push(plugin);
  };
  /**
   * @return  {domobject} graphcontainer
   */


  Graph.prototype.getGraphContainer = function getGraphContainer() {
    return this.get('_graphContainer');
  };
  /**
   * @param  {string} type item type
   * @param  {array} models models
   */


  Graph.prototype.addItems = function addItems(type, models) {
    var _this5 = this;

    this._addDatas(type, models);
    var Type = Util.upperFirst(type);
    var Constructor = Item[Type];
    var itemMap = this.get('_itemMap');
    var itemGroup = this.get('_itemGroup');
    var dataMap = this.get('_dataMap');
    var animate = this.get('animate');
    var defaultIntersectBox = this.get('defaultIntersectBox');

    if (!Constructor) {
      throw new Error('please set valid item type!');
    }
    models.forEach(function (model) {
      var item = new Constructor({
        id: model.id,
        type: type,
        model: model,
        group: itemGroup.addGroup(),
        graph: _this5,
        mapper: _this5._getController(type + 'Mapper'),
        itemMap: itemMap,
        animate: animate,
        dataMap: dataMap,
        defaultIntersectBox: defaultIntersectBox
      });
      itemMap[model.id] = item;
      itemMap['_' + type + 's'].push(item);
    });
  };
  /**
   * @param  {array} items remove items
   */


  Graph.prototype.removeItems = function removeItems(items) {
    var dataMap = this.get('_dataMap');
    var itemMap = this.get('_itemMap');
    items.forEach(function (item) {
      delete dataMap[item.id];
      delete itemMap[item.id];
      Util.Array.remove(itemMap['_' + item.type + 's'], item);
      item.destroy();
    });
  };
  /**
   * @param  {object} item item
   * @param  {object} model update model
   */


  Graph.prototype.updateItem = function updateItem(item, model) {
    Util.mix(item.getModel(), model);
    item.update();
  };

  Graph.prototype._addDatas = function _addDatas(type, models) {
    var dataMap = this.get('_dataMap');
    models.forEach(function (model) {
      if (Util.isNil(model.id)) {
        model.id = Util.guid();
      }
      if (dataMap[model.id]) {
        throw new Error('id:' + model.id + ' has already been set, please set new one');
      }
      dataMap[model.id] = model;
    });
  };

  Graph.prototype._drawInner = function _drawInner() {
    var data = this.get('_data');
    var itemGroup = this.get('_itemGroup');
    var dataMap = this.get('_dataMap');

    if (data.nodes) {
      this.addItems('node', data.nodes);
    }
    if (data.groups) {
      this.addItems('group', data.groups);
    }
    if (data.edges) {
      this.addItems('edge', data.edges);
    }
    if (data.guides) {
      this.addItems('guide', data.guides);
    }
    itemGroup.sortBy(function (child) {
      var id = child.id;
      var model = dataMap[id];
      return model.index;
    });
  };

  Graph.prototype._clearInner = function _clearInner() {
    var items = this.getItems();
    items.forEach(function (item) {
      item && !item.destroyed && item.destroy();
    });
  };
  /**
   * @param  {string} name option 1
   * @return {function} function
   */


  Graph.prototype.getConstructor = function getConstructor(name) {
    var render = this.get('render');
    if (render === 'svg') {
      return G.svg[name];
    }
    return G.canvas[name];
  };
  /**
   * @param  {string} type item type
   * @param  {object} model data model
   * @return {object} shapeObj
   */


  Graph.prototype.getShapeObj = function getShapeObj(type, model) {
    if (!Util.isObject(type)) {
      var Type = Util.upperFirst(type);
      var shapeManager = Shape[Type];
      var defaultShape = this.get(type + 'DefaultShape');
      return shapeManager.getShape(model.shape, defaultShape);
    }
    return type.getShapeObj();
  };
  /**
   * @return {object} source data
   */


  Graph.prototype.getSource = function getSource() {
    return this.get('_sourceData');
  };
  /**
   * @param  {object} data source data
   * @return {object} plain data
   */


  Graph.prototype.parseSource = function parseSource(data) {
    return data;
  };
  /**
   * @return {G.Canvas} canvas
   */


  Graph.prototype.getCanvas = function getCanvas() {
    return this.get('_canvas');
  };
  /**
   * @return {G.Group} rootGroup
   */


  Graph.prototype.getRootGroup = function getRootGroup() {
    return this.get('_rootGroup');
  };
  /**
   * @return {G.Group} itemGroup
   */


  Graph.prototype.getItemGroup = function getItemGroup() {
    return this.get('_itemGroup');
  };
  /**
   * @return {G.Group} frontRootGroup
   */


  Graph.prototype.getFrontRootGroup = function getFrontRootGroup() {
    return this.get('_frontRootGroup');
  };
  /**
   * @return {G.Canvas} canvas
   */


  Graph.prototype.getFrontCanvas = function getFrontCanvas() {
    return this.get('_frontCanvas');
  };
  /**
   * @param  {object} data source data
   * @return {Graph} this
   */


  Graph.prototype.source = function source(data) {
    this.emit('beforesource');
    this.set('_data', data);
    this.set('_sourceData', data);
    this.emit('aftersource');
    return this;
  };
  /**
   * @return {Graph} this
   */


  Graph.prototype.render = function render() {
    this.emit('beforerender');
    this.emit('beforedrawinner');
    this._drawInner();
    this.emit('afterdrawinner');
    this.draw();
    this.emit('afterrender');
    return this;
  };
  /**
   * @param  {boolean} bool if force prevent animate
   */


  Graph.prototype.forcePreventAnimate = function forcePreventAnimate(bool) {
    this.set('forcePreventAnimate', bool);
  };
  /**
   * @return {Graph} this
   */


  Graph.prototype.reRender = function reRender() {
    var data = this.get('_sourceData');
    this.read(data);
    return this;
  };
  /**
   * @return {Graph} this
   */


  Graph.prototype.destroy = function destroy() {
    var canvas = this.get('_canvas');
    var frontCanvas = this.get('_frontCanvas');
    var graphContainer = this.get('_graphContainer');
    var controllers = this.get('_controllers');
    var timers = this.get('_timers');
    var windowForceResizeEvent = this.get('_windowForceResizeEvent');
    var plugins = this.get('plugins');
    Util.each(timers, function (timer) {
      clearTimeout(timer);
    });
    Util.each(controllers, function (controller) {
      controller.destroy();
    });
    plugins.forEach(function (plugin) {
      plugin.destroy && plugin.destroy();
    });
    canvas && canvas.destroy();
    frontCanvas && frontCanvas.destroy();
    graphContainer.destroy();
    window.removeEventListener('resize', windowForceResizeEvent);
    _Base.prototype.destroy.call(this);
    return this;
  };
  /**
   * @return {object} data
   */


  Graph.prototype.save = function save() {
    var itemGroup = this.get('_itemGroup');
    var children = itemGroup.get('children');
    var rst = {
      nodes: [],
      edges: [],
      groups: [],
      guides: []
    };
    children.forEach(function (child, index) {
      var model = child.model;
      if (model) {
        var type = child.itemType;
        var saveModel = Util.cloneDeep(model);
        saveModel.index = index;
        rst[type + 's'].push(saveModel);
      }
    });
    rst.nodes.length === 0 && delete rst.nodes;
    rst.edges.length === 0 && delete rst.edges;
    rst.groups.length === 0 && delete rst.groups;
    rst.guides.length === 0 && delete rst.guides;
    return rst;
  };
  /**
   * @param {string} type item type
   * @param {object} model data model
   * @return {Graph} this
   */


  Graph.prototype.add = function add(type, model) {
    var ev = {
      action: 'add',
      model: model
    };
    this.emit('beforechange', ev);
    var itemMap = this.get('_itemMap');
    this.addItems(type, [model]);
    var item = itemMap[model.id];
    item.getAllParents().forEach(function (parent) {
      parent.update();
    });
    ev.item = item;
    this.emit('afterchange', ev);
    this.draw();
    return item;
  };
  /**
   * @param {String|Item} item target item
   * @return {Graph} this
   */


  Graph.prototype.remove = function remove(item) {
    var _this6 = this;

    item = this.getItem(item);
    if (!item || item.destroyed) {
      return;
    }
    var ev = {
      action: 'remove',
      item: item
    };
    this.emit('beforechange', ev);
    if (item.isNode || item.isGroup) {
      var edges = item.getEdges();
      edges.forEach(function (edge) {
        _this6.remove(edge);
      });
    }
    if (item.isGroup) {
      var children = item.getChildren();
      children.forEach(function (child) {
        _this6.remove(child);
      });
    }
    this.removeItems([item]);
    item.getAllParents().forEach(function (parent) {
      parent.update();
    });
    this.emit('afterchange', ev);
    this.draw();
    return this;
  };
  /**
   * @param {String|Item} item target item
   * @param {object} model data model
   * @return {Graph} this
   */


  Graph.prototype.simpleUpdate = function simpleUpdate(item, model) {
    this.updateItem(item, model);
    this.draw();
    return this;
  };
  /**
   * @param {String|Item|Undefined} item target item
   * @param {object} model data model
   * @return {Graph} this
   */


  Graph.prototype.update = function update(item, model) {
    var itemMap = this.get('_itemMap');
    item = this.getItem(item);
    if (!item || item.destroyed) {
      return;
    }
    var itemModel = item.getModel();
    var originModel = Util.mix({}, itemModel);
    var ev = {
      action: 'update',
      item: item,
      originModel: originModel,
      updateModel: model
    };
    var originParent = itemMap[originModel.parent];
    if (originParent && originParent !== parent && Util.isGroup(originParent)) {
      item.getAllParents().forEach(function (parent) {
        parent.update();
      });
    }

    model && this.emit('beforechange', ev);
    this.updateItem(item, model);

    // If the update nodes or group, update their parent
    item.getAllParents().forEach(function (parent) {
      parent.update();
    });

    // If the update nodes or group, update the connection edge
    if ((item.isNode || item.isGroup) && !item.collapsedParent) {
      var edges = item.getEdges();
      edges.forEach(function (edge) {
        edge.update();
      });
    }

    // update group relative items
    if (item.isGroup && model) {
      item.deepEach(function (child) {
        child.updateCollapsedParent();
        if (child.collapsedParent) {
          child.hide();
        } else {
          child.show();
        }
        child.update();
      });
      item.getInnerEdges().forEach(function (child) {
        var bool = child.linkedItemVisible();
        if (bool) {
          child.show();
        } else {
          child.hide();
        }
        child.update();
      });
    }
    model && this.emit('afterchange', ev);
    this.draw();
    return this;
  };
  /**
   * change data
   * @param {object} data source data
   * @return {Graph} this
   */


  Graph.prototype.read = function read(data) {
    if (!data) {
      throw new Error('please read valid data!');
    }
    var fitView = this.get('fitView');
    var ev = {
      action: 'changeData',
      data: data
    };
    this.emit('beforechange', ev);
    this.clear();
    this.source(data);
    this.render();
    this.emit('afterchange', ev);
    fitView && this.setFitView(fitView);
    return this;
  };
  /**
   * @return {Graph} this
   */


  Graph.prototype.clear = function clear() {
    this.emit('beforeclear');
    this._clearInner();
    this._initData();
    this.emit('afterclear');
    this.draw();
    return this;
  };
  /**
   * hide item
   * @param  {number} item  input item
   * @return {object} this
   */


  Graph.prototype.hide = function hide(item) {
    item = this.getItem(item);
    item.hide();
    if (item.isNode) {
      item.getEdges().forEach(function (edge) {
        edge.hide();
      });
    }
    if (item.isGroup) {
      item.getEdges().forEach(function (edge) {
        edge.hide();
      });
      // item.getInnerEdges().forEach(edge => {
      //   edge.hide();
      // });
      item.deepEach(function (child) {
        child.hide();
      });
    }
    this.draw();
    return this;
  };

  Graph.prototype._tryShowEdge = function _tryShowEdge(edge) {
    var source = edge.getSource();
    var target = edge.getTarget();
    return (source.linkable && source.isVisible() || !source.linkable) && (target.linkable && target.isVisible() || !target.linkable) && edge.show();
  };
  /**
   * show item
   * @param  {number} item  input item
   * @return {object} this
   */


  Graph.prototype.show = function show(item) {
    var _this7 = this;

    item = this.getItem(item);
    if (item.isEdge) {
      this._tryShowEdge(item);
    } else {
      item.show();
    }
    if (item.isNode) {
      item.getEdges().forEach(function (edge) {
        _this7._tryShowEdge(edge);
      });
    }
    if (item.isGroup) {
      item.getEdges().forEach(function (edge) {
        _this7._tryShowEdge(edge);
      });
      item.deepEach(function (child) {
        child.show();
      });
    }
    this.draw();
    return this;
  };
  /**
   * @return {Graph} this
   */


  Graph.prototype.getWidth = function getWidth() {
    return this.get('width');
  };
  /**
   * @return {Graph} this
   */


  Graph.prototype.getHeight = function getHeight() {
    return this.get('height');
  };
  /**
   * change canvas size
   * @param  {number} width  input width
   * @param  {number} height input height
   * @return {object} this
   */


  Graph.prototype.changeSize = function changeSize(width, height) {
    if (Math.abs(width) >= Infinity || Math.abs(height) >= Infinity) {
      console.warn('size parameter more than the maximum');
      return;
    }
    var canvas = this.get('_canvas');
    var frontCanvas = this.get('_frontCanvas');
    var htmlElementContaniner = this.get('_htmlElementContaniner');
    if (width !== this.get('width') || height !== this.get('height')) {
      this.emit('beforechangesize');
      canvas.changeSize(width, height);
      frontCanvas.changeSize(width, height);
      htmlElementContaniner.css({
        width: width + 'px',
        height: height + 'px'
      });

      this.set('width', width);
      this.set('height', height);
      this.emit('afterchangesize');
      this.draw();
    }
    return this;
  };
  /**
   * item to front
   * @param  {object} item  item
   */


  Graph.prototype.toFront = function toFront(item) {
    item = this.getItem(item);
    var itemGroup = this.get('_itemGroup');
    var group = item.getGraphicGroup();
    Util.toFront(group, itemGroup);
    this.draw();
  };
  /**
   * item to back
   * @param  {object} item  item
   */


  Graph.prototype.toBack = function toBack(item) {
    item = this.getItem(item);
    var itemGroup = this.get('_itemGroup');
    var group = item.getGraphicGroup();
    Util.toBack(group, itemGroup);
    this.draw();
  };
  /**
   * set cantainer css
   * @param  {object} style container dom css
   */


  Graph.prototype.css = function css(style) {
    var graphContainer = this.getGraphContainer();
    Util.modifyCSS(graphContainer, style);
  };
  /**
   * save graph image
   * @return  {object} canvas dom
   */


  Graph.prototype.saveImage = function saveImage() {
    var box = this.getBBox();
    var padding = this.getFitViewPadding();

    return Util.graph2Canvas({
      graph: this,
      width: box.width + padding[1] + padding[3],
      height: box.height + padding[0] + padding[2]
    });
  };

  return Graph;
}(Base);

Mixins.forEach(function (Mixin) {
  Util.mix(Graph.prototype, Mixin.AUGMENT);
});
module.exports = Graph;

/***/ }),

/***/ "./src/handler/index.js":
/*!******************************!*\
  !*** ./src/handler/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * @fileOverview Handler
 * @author wuyue.lwy <wyueliu@gmail.com>
 */

var Handler = {
  registerBehaviour: function registerBehaviour(name, fun, dependences) {
    fun.dependences = dependences;
    Handler[name] = fun;
  },
  resetMode: function resetMode(arr, graph) {
    var hasRunBehaviours = [];
    var behaviour = void 0;
    graph._off();
    for (var i = 0; i < arr.length; i++) {
      behaviour = Handler[arr[i]];
      if (!behaviour) {
        continue;
      }
      // deal dependences
      if (behaviour.dependences) {
        behaviour.dependences.forEach(function (dependence) {
          if (dependence && hasRunBehaviours.indexOf(dependence) === -1) {
            Handler[dependence](graph);
            hasRunBehaviours.push(dependence);
          }
        });
      }
      if (behaviour && hasRunBehaviours.indexOf(behaviour) === -1) {
        behaviour(graph);
      }
    }
  }
};

module.exports = Handler;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview entry file
 * @author huangtonger@aliyun.com
 */
var Shape = __webpack_require__(/*! ./shape/ */ "./src/shape/index.js");
var Handler = __webpack_require__(/*! ./handler */ "./src/handler/index.js");
var Global = __webpack_require__(/*! ./global */ "./src/global.js");
var version = __webpack_require__(/*! ./version */ "./src/version.js");
var G = __webpack_require__(/*! @antv/g */ "./node_modules/@antv/g/build/g.js");

var G6 = {
  Graph: __webpack_require__(/*! ./graph */ "./src/graph.js"),
  Tree: __webpack_require__(/*! ./tree */ "./src/tree.js"),
  Util: __webpack_require__(/*! ./util/ */ "./src/util/index.js"),
  Layouts: __webpack_require__(/*! ./layouts/ */ "./src/layouts/index.js"),
  // G: require('@antv/g'),
  G: G,
  Plugins: {},
  Global: Global,
  Shape: Shape,
  registerNode: Shape.registerNode,
  registerEdge: Shape.registerEdge,
  registerGroup: Shape.registerGroup,
  registerGuide: Shape.registerGuide,
  registerBehaviour: Handler.registerBehaviour,
  version: version,
  getG: function getG() {
    return __webpack_require__(/*! @antv/g */ "./node_modules/@antv/g/build/g.js");
  },
  track: function track(enable) {
    Global.trackable = enable;
  }
};
__webpack_require__(/*! ./track */ "./src/track.js");

module.exports = G6;

/***/ }),

/***/ "./src/item/edge.js":
/*!**************************!*\
  !*** ./src/item/edge.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview edge item
 * @author huangtonger@aliyun.com
 */

var Util = __webpack_require__(/*! ../util/ */ "./src/util/index.js");
var Item = __webpack_require__(/*! ./item */ "./src/item/item.js");

var Edge = function (_Item) {
  _inherits(Edge, _Item);

  function Edge(cfg) {
    _classCallCheck(this, Edge);

    var defaultCfg = {
      type: 'edge',
      isEdge: true,
      zIndex: 2
    };
    Util.mix(defaultCfg, cfg);
    return _possibleConstructorReturn(this, _Item.call(this, defaultCfg));
  }

  Edge.prototype._beforeDraw = function _beforeDraw() {
    var model = this.model;
    var itemMap = this.itemMap;
    if (!Util.isObject(model.source)) {
      this.source = itemMap[model.source];
    } else {
      this.source = model.source;
    }
    if (!Util.isObject(model.target)) {
      this.target = itemMap[model.target];
    } else {
      this.target = model.target;
    }
    _Item.prototype._beforeDraw.call(this);
  };

  Edge.prototype._afterDraw = function _afterDraw() {
    if (!this.linkedItemVisible()) {
      this.hide();
    }
    this._addArrow();
    _Item.prototype._afterDraw.call(this);
  };

  Edge.prototype._addArrow = function _addArrow() {
    var model = this.model;
    var keyShape = this.keyShape;
    var shapeObj = this.shapeObj;
    var styleEndArrow = keyShape.attr('endArrow');
    var styleStartArrow = keyShape.attr('startArrow');
    var endArrow = model.endArrow || styleEndArrow;
    var startArrow = model.startArrow || styleStartArrow;
    styleStartArrow && keyShape.attr('startArrow', false);
    styleEndArrow && keyShape.attr('endArrow', false);
    endArrow && this._drawArrow(shapeObj.endArrow, 'end');
    startArrow && this._drawArrow(shapeObj.startArrow, 'start');
  };

  Edge.prototype._drawArrow = function _drawArrow(_ref, type) {
    var path = _ref.path,
        dindent = _ref.dindent,
        tangent = _ref.tangent,
        ratio = _ref.ratio,
        style = _ref.style;

    tangent = tangent(this);
    dindent = dindent(this);
    path = path(this);
    style = style(this);
    ratio = ratio();
    var group = this.group;
    var keyShape = this.keyShape;
    var point = keyShape.getPoint(ratio);
    if (!point) {
      return;
    }
    var keyShapePath = Util.cloneDeep(keyShape.attr('path'));
    var marker = group.addShape('marker', {
      attrs: _extends({
        symbol: function symbol() {
          return path;
        }
      }, style)
    });
    var x = tangent[1][0] - tangent[0][0];
    var y = tangent[1][1] - tangent[0][1];
    var tangentLength = Math.sqrt(x * x + y * y);
    var dindentRatio = dindent / tangentLength;
    var vDindent = [-x * dindentRatio, -y * dindentRatio];
    var deg = 0;
    var tan = Math.atan(x / y);
    if (y === 0 && x < 0) {
      deg = Math.PI;
    } else if (x > 0 && y > 0) {
      deg = Math.PI / 2 - tan;
    } else if (x < 0 && y < 0) {
      deg = -Math.PI / 2 - tan;
    } else if (x >= 0 && y < 0) {
      deg = -tan - Math.PI / 2;
    } else if (x <= 0 && y > 0) {
      deg = Math.PI / 2 - tan;
    }
    marker.rotate(deg);
    marker.translate(point.x, point.y);
    if (type === 'end') {
      var lastSegment = keyShapePath[keyShapePath.length - 1];
      lastSegment[lastSegment.length - 1] = vDindent[1] + point.y;
      lastSegment[lastSegment.length - 2] = vDindent[0] + point.x;
    } else {
      var startSegment = keyShapePath[0];
      startSegment[startSegment.length - 1] = vDindent[1] + point.y;
      startSegment[startSegment.length - 2] = vDindent[0] + point.x;
    }
    keyShape.attr('path', keyShapePath);
  };

  Edge.prototype._getControlPoints = function _getControlPoints() {
    var controlPoints = this.model.controlPoints;
    if (Util.isArray(controlPoints)) {
      return controlPoints;
    }
    return [];
  };

  Edge.prototype._shouldDraw = function _shouldDraw() {
    return _Item.prototype._shouldDraw.call(this) && this.linkedItemVisible();
  };

  Edge.prototype._getPoint = function _getPoint(point) {
    if (point.linkable) {
      var box = point.getBBox();
      return {
        x: box.centerX,
        y: box.centerY
      };
    }
    return {
      x: point.x,
      y: point.y
    };
  };
  // layoutUpdate() {
  //   const group = this.getGraphicGroup();
  //   const children = group.get('children');
  //   this._beforeDraw();
  //   if (children.length === 1) {
  //     const keyShape = this.keyShape;
  //     const shapeObj = this.shapeObj;
  //     keyShape.attr('path', shapeObj.getPath(this));
  //   } else {
  //     this.draw();
  //   }
  //   this._afterDraw();
  // }


  Edge.prototype.linkedItemVisible = function linkedItemVisible() {
    var source = this.source;
    var target = this.target;
    return Util.isPlainObject(source) || Util.isPlainObject(target) || source.isVisible() || target.isVisible() || source.collapsedParent !== target.collapsedParent;
  };

  Edge.prototype.getSource = function getSource() {
    var source = this.source;
    var collapsedParent = source.collapsedParent;
    var itemMap = this.itemMap;
    if (collapsedParent) {
      return itemMap[collapsedParent.id];
    }
    return source;
  };

  Edge.prototype.getTarget = function getTarget() {
    var target = this.target;
    var collapsedParent = target.collapsedParent;
    var itemMap = this.itemMap;
    if (collapsedParent) {
      return itemMap[collapsedParent.id];
    }
    return target;
  };

  Edge.prototype.getPoints = function getPoints() {
    var source = this.getSource();
    var target = this.getTarget();
    var model = this.model;
    var controlPoints = this._getControlPoints();
    var sourcePoint = this._getPoint(source);
    var targetPoint = this._getPoint(target);
    var points = [sourcePoint].concat(controlPoints).concat([targetPoint]);
    var psl = points.length;

    if (source.linkable) {
      var point = Util.isNumber(this.model.sourceAnchor) && source.id === model.source ? this.model.sourceAnchor : points[1];
      var interPoint = source.getLinkPoints(point);
      points[0] = interPoint[0];
    }
    if (target.linkable) {
      var _point = Util.isNumber(this.model.targetAnchor) && target.id === model.target ? this.model.targetAnchor : points[psl - 2];
      var _interPoint = target.getLinkPoints(_point);
      points[psl - 1] = _interPoint[0];
    }
    return points;
  };

  return Edge;
}(Item);

module.exports = Edge;

/***/ }),

/***/ "./src/item/group.js":
/*!***************************!*\
  !*** ./src/item/group.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview group item
 * @author huangtonger@aliyun.com
 */

var Util = __webpack_require__(/*! ../util/ */ "./src/util/index.js");
var Node = __webpack_require__(/*! ./node */ "./src/item/node.js");

var Group = function (_Node) {
  _inherits(Group, _Node);

  function Group(cfg) {
    _classCallCheck(this, Group);

    var defaultCfg = {
      type: 'group',
      isNode: false,
      isGroup: true,
      zIndex: 1
    };
    Util.mix(defaultCfg, cfg);
    return _possibleConstructorReturn(this, _Node.call(this, defaultCfg));
  }

  Group.prototype._afterDraw = function _afterDraw() {
    var model = this.getModel();
    if (model.collapsed) {
      this.deepEach(function (child) {
        child.hide();
      });
    }
    _Node.prototype._afterDraw.call(this);
  };

  Group.prototype.updatePosition = function updatePosition() {};

  Group.prototype._shouldDraw = function _shouldDraw() {
    return true;
  };

  Group.prototype.getCrossEdges = function getCrossEdges() {
    var allChildrenIds = [];
    var innerEdges = this.getInnerEdges();
    this.deepEach(function (child) {
      allChildrenIds.push(child.id);
    });
    var rst = innerEdges.filter(function (edge) {
      var edgeModel = edge.getModel();
      return allChildrenIds.indexOf(edgeModel.source) === -1 || allChildrenIds.indexOf(edgeModel.target) === -1;
    });
    return Util.uniq(rst);
  };

  Group.prototype.getInnerEdges = function getInnerEdges() {
    var edges = [];
    this.deepEach(function (child) {
      child.getEdges().forEach(function (edge) {
        edges.push(edge);
      });
    });
    return Util.uniq(edges);
  };
  /**
   * get children BBox
   * @return {object} box
   */


  Group.prototype.getChildrenBBox = function getChildrenBBox() {
    var children = this.getChildren();
    var graphicChildren = children.map(function (child) {
      return child.getGraphicGroup();
    });
    return Util.getChildrenBBox(graphicChildren);
  };

  return Group;
}(Node);

module.exports = Group;

/***/ }),

/***/ "./src/item/guide.js":
/*!***************************!*\
  !*** ./src/item/guide.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview guide item
 * @author huangtonger@aliyun.com
 */

var Util = __webpack_require__(/*! ../util/ */ "./src/util/index.js");
var Item = __webpack_require__(/*! ./item */ "./src/item/item.js");

var Guide = function (_Item) {
  _inherits(Guide, _Item);

  function Guide(cfg) {
    _classCallCheck(this, Guide);

    var defaultCfg = {
      type: 'guide',
      isGuide: true,
      zIndex: 4
    };
    Util.mix(defaultCfg, cfg);
    return _possibleConstructorReturn(this, _Item.call(this, defaultCfg));
  }

  return Guide;
}(Item);

module.exports = Guide;

/***/ }),

/***/ "./src/item/index.js":
/*!***************************!*\
  !*** ./src/item/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview item entry file
 * @author huangtonger@aliyun.com
 */

module.exports = {
  Node: __webpack_require__(/*! ./node */ "./src/item/node.js"),
  Edge: __webpack_require__(/*! ./edge */ "./src/item/edge.js"),
  Group: __webpack_require__(/*! ./group */ "./src/item/group.js"),
  Guide: __webpack_require__(/*! ./guide */ "./src/item/guide.js")
};

/***/ }),

/***/ "./src/item/item.js":
/*!**************************!*\
  !*** ./src/item/item.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @fileOverview item
 * @author huangtonger@aliyun.com
 */

var Util = __webpack_require__(/*! ../util/ */ "./src/util/index.js");
function getCollapsedParent(node, dataMap) {
  var parent = dataMap[node.parent];
  if (!parent) {
    return false;
  }
  if (parent) {
    var rst = getCollapsedParent(parent, dataMap);
    if (rst) {
      return rst;
    }
  }
  if (parent.collapsed) {
    return parent;
  }
}

var Item = function () {
  function Item(cfg) {
    _classCallCheck(this, Item);

    var defaultCfg = {
      /**
       * id
       * @type {string}
       */
      id: '',

      /**
       * 类型
       * @type {string}
       */
      type: null,

      /**
       * data model
       * @type {object}
       */
      model: {},

      /**
       * g group
       * @type {G.Group}
       */
      group: null,

      /**
       * is open animate
       * @type {boolean}
       */
      animate: false,

      /**
       * cache model for diff
       * @type {object}
       */
      modelCache: {}
    };
    Util.mix(this, defaultCfg, cfg);
    this._init();
  }

  Item.prototype._init = function _init() {
    this._setIndex();
    this._mapping();
    this._setShapeObj();
    this._initGroup();
    this.draw();
  };

  Item.prototype._setIndex = function _setIndex() {
    var model = this.model;
    if (Util.isNil(model.index)) {
      model.index = this.zIndex;
    }
  };

  Item.prototype._mapping = function _mapping() {
    var mapper = this.mapper;
    var model = this.model;
    mapper.mapping(model);
  };

  Item.prototype._initGroup = function _initGroup() {
    var group = this.group;
    var model = this.model;
    var type = this.type;
    group.isItemContainer = true;
    group.id = model.id;
    group.itemType = type;
    group.model = model;
  };

  Item.prototype._calculateBBox = function _calculateBBox() {
    var keyShape = this.keyShape;
    var group = this.group;
    var bbox = Util.getBBox(keyShape, group);
    bbox.width = bbox.maxX - bbox.minX;
    bbox.height = bbox.maxY - bbox.minY;
    bbox.centerX = (bbox.minX + bbox.maxX) / 2;
    bbox.centerY = (bbox.minY + bbox.maxY) / 2;
    return bbox;
  };

  Item.prototype.getLabel = function getLabel() {
    var group = this.group;
    return group.findByClass('label')[0];
  };

  Item.prototype.getGraph = function getGraph() {
    return this.graph;
  };

  Item.prototype.getEnterAnimate = function getEnterAnimate() {
    var shapeObj = this.shapeObj;
    var graph = this.graph;
    return shapeObj.enterAnimate ? shapeObj.enterAnimate : graph.get('_enterAnimate');
  };

  Item.prototype.getLeaveAnimate = function getLeaveAnimate() {
    var shapeObj = this.shapeObj;
    var graph = this.graph;
    return shapeObj.leaveAnimate ? shapeObj.leaveAnimate : graph.get('_leaveAnimate');
  };

  Item.prototype._setShapeObj = function _setShapeObj() {
    var graph = this.graph;
    var type = this.type;
    var model = this.getModel();
    this.shapeObj = graph.getShapeObj(type, model);
  };

  Item.prototype._afterDraw = function _afterDraw() {
    var graph = this.graph;
    this._setGId();
    this._cacheModel();
    graph.emit('afteritemdraw', {
      item: this
    });
  };

  Item.prototype._cacheModel = function _cacheModel() {
    this.modelCache = Util.mix({}, this.model);
  };

  Item.prototype._setGId = function _setGId() {
    var group = this.group;
    var id = this.id;
    var type = this.type;
    group.gid = id;
    group.deepEach(function (child, parent, index) {
      var parentGid = parent.gid;
      child.id = id;
      child.eventPreFix = type;
      child.gid = parentGid + '-' + index;
    });
  };

  Item.prototype._beforeDraw = function _beforeDraw() {
    var graph = this.graph;
    graph.emit('beforeitemdraw', {
      item: this
    });
    this.updateCollapsedParent();
    this._setShapeObj();
  };

  Item.prototype._shouldDraw = function _shouldDraw() {
    return true;
  };

  Item.prototype._getDiff = function _getDiff() {
    var diff = [];
    var model = this.model;
    var modelCache = this.modelCache;

    Util.each(model, function (v, k) {
      if (!Util.isEqual(v, modelCache[k])) {
        diff.push(k);
      }
    });
    if (diff.length === 0) {
      return false;
    }
    return diff;
  };

  Item.prototype._drawInner = function _drawInner() {
    var animate = this.animate;
    var group = this.group;
    group.clear(!animate);
    var shapeObj = this.shapeObj;
    var keyShape = shapeObj.draw(this);
    if (keyShape) {
      keyShape.isKeyShape = true;
      this.keyShape = keyShape;
    }
    shapeObj.afterDraw && shapeObj.afterDraw(this);
  };

  Item.prototype.deepEach = function deepEach(callback, getParent) {
    Util.traverseTree(this, callback, getParent ? getParent : function (parent) {
      return parent.getChildren();
    });
  };

  Item.prototype.getShapeObj = function getShapeObj() {
    return this.shapeObj;
  };

  Item.prototype.updateCollapsedParent = function updateCollapsedParent() {
    var dataMap = this.dataMap;
    this.collapsedParent = getCollapsedParent(this.model, dataMap);
  };

  Item.prototype.isVisible = function isVisible() {
    var group = this.group;
    return group.get('visible');
  };

  Item.prototype.hide = function hide() {
    var group = this.group;
    var graph = this.graph;
    graph.emit('beforeitemhide', {
      item: this
    });
    group.hide();
    graph.emit('afteritemhide', {
      item: this
    });
  };

  Item.prototype.show = function show() {
    var group = this.group;
    var graph = this.graph;
    graph.emit('beforeitemshow', {
      item: this
    });
    group.show();
    graph.emit('afteritemshow', {
      item: this
    });
  };

  Item.prototype.draw = function draw() {
    this._beforeDraw();
    if (this._shouldDraw()) {
      this._drawInner();
    }
    this._afterDraw();
  };

  Item.prototype.forceUpdate = function forceUpdate() {
    this._beforeDraw();
    this._drawInner();
    this._afterDraw();
  };

  Item.prototype.getCenter = function getCenter() {
    var bbox = this.getBBox();
    return {
      x: bbox.centerX,
      y: bbox.centerY
    };
  };

  Item.prototype.getBBox = function getBBox() {
    return this.bbox || this._calculateBBox();
  };

  Item.prototype.layoutUpdate = function layoutUpdate() {
    this.draw();
  };

  Item.prototype.update = function update() {
    this.draw();
  };

  Item.prototype.getModel = function getModel() {
    return this.model;
  };

  Item.prototype.getKeyShape = function getKeyShape() {
    return this.keyShape;
  };

  Item.prototype.getGraphicGroup = function getGraphicGroup() {
    return this.group;
  };

  Item.prototype.getHierarchy = function getHierarchy() {
    var graph = this.graph;
    return graph.getHierarchy(this);
  };

  Item.prototype.getParent = function getParent() {
    var model = this.model;
    var itemMap = this.itemMap;
    return itemMap[model.parent];
  };

  Item.prototype.getAllParents = function getAllParents() {
    var model = this.model;
    var itemMap = this.itemMap;
    var parents = [];
    var parentModel = model.parent;
    while (parentModel && itemMap[parentModel]) {
      parents.push(itemMap[parentModel]);
      parentModel = parentModel.parent;
    }
    return parents;
  };
  // deep get all children


  Item.prototype.getAllChildren = function getAllChildren() {
    var rst = [];
    this.deepEach(function (child) {
      rst.push(child);
    });
    return rst;
  };
  // get children


  Item.prototype.getChildren = function getChildren() {
    var id = this.id;
    var graph = this.graph;
    var items = graph.getItems();

    return items.filter(function (item) {
      return item.model.parent === id;
    });
  };

  Item.prototype.destroy = function destroy() {
    if (!this.destroyed) {
      var animate = this.animate;
      var graph = this.graph;
      graph.emit('beforeitemdestroy', {
        item: this
      });
      this.group.remove(!animate);
      this.destroyed = true;
      graph.emit('afteritemdestroy', {
        item: this
      });
    }
  };

  return Item;
}();

module.exports = Item;

/***/ }),

/***/ "./src/item/node.js":
/*!**************************!*\
  !*** ./src/item/node.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview node item
 * @author huangtonger@aliyun.com
 */

var Util = __webpack_require__(/*! ../util/ */ "./src/util/index.js");
var Item = __webpack_require__(/*! ./item */ "./src/item/item.js");

var Node = function (_Item) {
  _inherits(Node, _Item);

  function Node(cfg) {
    _classCallCheck(this, Node);

    var defaultCfg = {
      type: 'node',
      linkable: true,
      isNode: true,
      zIndex: 3
    };
    Util.mix(defaultCfg, cfg);
    return _possibleConstructorReturn(this, _Item.call(this, defaultCfg));
  }

  Node.prototype.updatePosition = function updatePosition() {
    var group = this.group;
    var model = this.model;
    group.setMatrix([1, 0, 0, 0, 1, 0, model.x ? model.x : 0, model.y ? model.y : 0, 1]);
    this.bbox = this._calculateBBox();
  };

  Node.prototype._shouldDraw = function _shouldDraw() {
    var diff = this._getDiff();
    var superBool = _Item.prototype._shouldDraw.call(this);

    return diff && !(diff.length === 2 && diff.indexOf('x') !== -1 && diff.indexOf('y') !== -1) && !(diff.length === 1 && (diff[0] === 'x' || diff[0] === 'y')) && superBool;
  };

  Node.prototype._afterDraw = function _afterDraw() {
    this.updatePosition();
    _Item.prototype._afterDraw.call(this);
  };

  Node.prototype.layoutUpdate = function layoutUpdate() {
    this._beforeDraw();
    this._afterDraw();
  };

  Node.prototype.getEdges = function getEdges(callback) {
    var id = this.id;
    var itemMap = this.itemMap;
    var edges = itemMap._edges;
    var rst = [];
    Util.each(edges, function (edge) {
      if (callback) {
        if (callback(edge)) {
          rst.push(edge);
        }
        return;
      }
      var edgeModel = edge.getModel();
      if (id === edgeModel.target || id === edgeModel.source) {
        rst.push(edge);
      }
    });
    return rst;
  };

  Node.prototype.getInEdges = function getInEdges() {
    var _this2 = this;

    return this.getEdges(function (edge) {
      return edge.target === _this2;
    });
  };

  Node.prototype.getOutEdges = function getOutEdges() {
    var _this3 = this;

    return this.getEdges(function (edge) {
      return edge.source === _this3;
    });
  };
  /**
    * get anchor points, if there is anchors return the points sorted by arc , others return the link point
    * @param {Object | Number} point - start point
    * @return {array} - all anchor points sorted by angle, ASC
    */


  Node.prototype.getLinkPoints = function getLinkPoints(point) {
    var anchorPoints = this.getAnchorPoints();
    if (Util.isNumber(point) && anchorPoints[point]) {
      return [anchorPoints[point]];
    }
    var x = point.x,
        y = point.y;

    var bbox = this.getBBox();
    var centerX = bbox.centerX,
        centerY = bbox.centerY;

    var x1 = x - centerX;
    var y1 = y - centerY;
    var anchor = this.shapeObj.anchor || {};
    var defaultIntersectBox = this.defaultIntersectBox;
    var points = [];
    if (Util.isEmpty(anchorPoints)) {
      // get link point if there are no default anchors
      var intersectBox = anchor.intersectBox || anchor.type || defaultIntersectBox;

      switch (intersectBox) {
        case 'rect':
          points = [Util.getIntersectPointRect(bbox, point)];
          break;
        case 'path':
          if (this.keyShape && this.keyShape.get('type') === 'path') {
            var linePath = Util.parsePathArray(['M', x, y, 'L', centerX, centerY]);
            points = [Util.intersection(linePath, this.keyShape.get('path'))];
          }
          break;
        default:
          // default circle
          points = [Util.getIntersectPointCircle(x, y, bbox.centerX, bbox.centerY, Math.max(bbox.width, bbox.height) / 2)];
          break;
      }
      // if no link points return center
      if (Util.isEmpty(points[0])) {
        points = [{
          x: centerX,
          y: centerY
        }];
      }
    } else {
      // get sorted points by arc if there are default points
      points = anchorPoints.map(function (p) {
        var x2 = p.x - centerX;
        var y2 = p.y - centerY;
        var arc = Util.getArcOfVectors({ x: x1, y: y1 }, { x: x2, y: y2 });
        return Util.mix({}, p, {
          arc: arc
        });
      }).sort(function (a, b) {
        return a.arc - b.arc;
      });
    }
    return points;
  };
  /**
   * get position of anchor points
   * @param {number} index the index of points
   * @return {array} anchorPoints
   */


  Node.prototype.getAnchorPoints = function getAnchorPoints(index) {
    var shapeObj = this.shapeObj;
    var bbox = this.getBBox();
    var anchorPoints = [];
    var anchor = shapeObj.anchor || {};
    var points = void 0;
    if (Util.isArray(anchor)) {
      points = anchor;
    } else if (Util.isFunction(anchor)) {
      points = anchor(this);
    } else {
      if (Util.isFunction(anchor.points)) {
        points = anchor.points(this);
      } else {
        points = anchor.points;
      }
    }
    Util.each(points, function (pointArr, index) {
      var anchorPoint = Util.mix({
        x: bbox.minX + pointArr[0] * bbox.width,
        y: bbox.minY + pointArr[1] * bbox.height
      }, pointArr[2], {
        index: index
      });
      anchorPoints.push(anchorPoint);
    });
    this._anchorPoints = anchorPoints;
    if (Util.isNumber(index)) {
      return this._anchorPoints[index];
    }
    return this._anchorPoints;
  };

  return Node;
}(Item);

module.exports = Node;

/***/ }),

/***/ "./src/layouts/base.js":
/*!*****************************!*\
  !*** ./src/layouts/base.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @fileOverview layout base class
 * @author huangtonger@aliyun.com
 */

var Base = function () {
  function Base() {
    _classCallCheck(this, Base);
  }

  Base.prototype.execute = function execute() {
    throw new Error('please override this method');
  };

  return Base;
}();

module.exports = Base;

/***/ }),

/***/ "./src/layouts/index.js":
/*!******************************!*\
  !*** ./src/layouts/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview graph
 * @author huangtonger@aliyun.com
 */

module.exports = {
  CompactBoxTree: __webpack_require__(/*! ./tree/compact-box */ "./src/layouts/tree/compact-box.js"),
  Dendrogram: __webpack_require__(/*! ./tree/dendrogram */ "./src/layouts/tree/dendrogram.js"),
  IndentedTree: __webpack_require__(/*! ./tree/indented */ "./src/layouts/tree/indented.js"),
  Mindmap: __webpack_require__(/*! ./tree/mindmap */ "./src/layouts/tree/mindmap.js"),
  Base: __webpack_require__(/*! ./base */ "./src/layouts/base.js")
};

/***/ }),

/***/ "./src/layouts/tree/base.js":
/*!**********************************!*\
  !*** ./src/layouts/tree/base.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview tree layout base
 * @author huangtonger@aliyun.com
 */

var Base = __webpack_require__(/*! ../base */ "./src/layouts/base.js");

var CompactBoxTreeLayout = function (_Base) {
  _inherits(CompactBoxTreeLayout, _Base);

  function CompactBoxTreeLayout(options) {
    _classCallCheck(this, CompactBoxTreeLayout);

    var _this = _possibleConstructorReturn(this, _Base.call(this));

    _this.options = options;
    return _this;
  }

  CompactBoxTreeLayout.prototype.execute = function execute() {
    var _this2 = this;

    var options = this.options;
    var roots = this.roots;
    roots.forEach(function (root) {
      var layoutedRoot = _this2.layout(root, options);
      layoutedRoot.eachNode(function (node) {
        node.data.x = node.x + node.data.width / 2 + node.hgap;
        node.data.y = node.y + node.data.height / 2 + node.vgap;
      });
    });
  };

  return CompactBoxTreeLayout;
}(Base);

module.exports = CompactBoxTreeLayout;

/***/ }),

/***/ "./src/layouts/tree/compact-box.js":
/*!*****************************************!*\
  !*** ./src/layouts/tree/compact-box.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview Compact Box Tree Layout
 * @author huangtonger@aliyun.com
 */

var Hierarchy = __webpack_require__(/*! @antv/hierarchy */ "./node_modules/@antv/hierarchy/build/hierarchy.js");
var TreeBase = __webpack_require__(/*! ./base */ "./src/layouts/tree/base.js");

var CompactBoxTreeLayout = function (_TreeBase) {
  _inherits(CompactBoxTreeLayout, _TreeBase);

  function CompactBoxTreeLayout(options) {
    _classCallCheck(this, CompactBoxTreeLayout);

    var _this = _possibleConstructorReturn(this, _TreeBase.call(this, options));

    _this.layout = Hierarchy.compactBox;
    return _this;
  }

  return CompactBoxTreeLayout;
}(TreeBase);

module.exports = CompactBoxTreeLayout;

/***/ }),

/***/ "./src/layouts/tree/dendrogram.js":
/*!****************************************!*\
  !*** ./src/layouts/tree/dendrogram.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview Dendrogram Tree Layout
 * @author huangtonger@aliyun.com
 */

var Hierarchy = __webpack_require__(/*! @antv/hierarchy */ "./node_modules/@antv/hierarchy/build/hierarchy.js");
var TreeBase = __webpack_require__(/*! ./base */ "./src/layouts/tree/base.js");

var DendrogramTreeLayout = function (_TreeBase) {
  _inherits(DendrogramTreeLayout, _TreeBase);

  function DendrogramTreeLayout(options) {
    _classCallCheck(this, DendrogramTreeLayout);

    var _this = _possibleConstructorReturn(this, _TreeBase.call(this, options));

    _this.layout = Hierarchy.dendrogram;
    return _this;
  }

  return DendrogramTreeLayout;
}(TreeBase);

module.exports = DendrogramTreeLayout;

/***/ }),

/***/ "./src/layouts/tree/indented.js":
/*!**************************************!*\
  !*** ./src/layouts/tree/indented.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview Indented Tree Layout
 * @author huangtonger@aliyun.com
 */

var Hierarchy = __webpack_require__(/*! @antv/hierarchy */ "./node_modules/@antv/hierarchy/build/hierarchy.js");
var TreeBase = __webpack_require__(/*! ./base */ "./src/layouts/tree/base.js");

var IndentedTreeLayout = function (_TreeBase) {
  _inherits(IndentedTreeLayout, _TreeBase);

  function IndentedTreeLayout(options) {
    _classCallCheck(this, IndentedTreeLayout);

    var _this = _possibleConstructorReturn(this, _TreeBase.call(this, options));

    _this.layout = Hierarchy.indented;
    return _this;
  }

  return IndentedTreeLayout;
}(TreeBase);

module.exports = IndentedTreeLayout;

/***/ }),

/***/ "./src/layouts/tree/mindmap.js":
/*!*************************************!*\
  !*** ./src/layouts/tree/mindmap.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview Mind Map Layout
 * @author huangtonger@aliyun.com
 */

var Hierarchy = __webpack_require__(/*! @antv/hierarchy */ "./node_modules/@antv/hierarchy/build/hierarchy.js");
var TreeBase = __webpack_require__(/*! ./base */ "./src/layouts/tree/base.js");

var MindmapLayout = function (_TreeBase) {
  _inherits(MindmapLayout, _TreeBase);

  function MindmapLayout(options) {
    _classCallCheck(this, MindmapLayout);

    var _this = _possibleConstructorReturn(this, _TreeBase.call(this, options));

    _this.layout = Hierarchy.mindmap;
    return _this;
  }

  return MindmapLayout;
}(TreeBase);

module.exports = MindmapLayout;

/***/ }),

/***/ "./src/mixin/animate.js":
/*!******************************!*\
  !*** ./src/mixin/animate.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview animate mixin
 * @author huangtonger@aliyun.com
 */

var Util = __webpack_require__(/*! ../util/ */ "./src/util/index.js");
var Animate = __webpack_require__(/*! ../controller/animate */ "./src/controller/animate.js");
var Mixin = {};
Mixin.INIT = '_initAnimate';
Mixin.CFG = {
  /**
   * animate switch
   * @type {boolean}
   */
  animate: false,

  /**
   * animate force prevent
   * @type {boolean}
   */
  forcePreventAnimate: false,

  _enterAnimate: function _enterAnimate(item) {
    var group = item.getGraphicGroup();
    var matrix = group.getMatrix();
    var box = Util.getBBox(group, matrix); // need apply self matrix
    var centerX = (box.minX + box.maxX) / 2;
    var centerY = (box.minY + box.maxY) / 2;
    Util.scaleIn(group, centerX, centerY);
  },
  _leaveAnimate: function _leaveAnimate(item) {
    var group = item.getGraphicGroup();
    var matrix = group.getMatrix();
    var box = Util.getBBox(group, matrix); // need apply self matrix
    var centerX = (box.minX + box.maxX) / 2;
    var centerY = (box.minY + box.maxY) / 2;
    Util.scaleOut(group, centerX, centerY);
  }
};
Mixin.AUGMENT = {
  _initAnimate: function _initAnimate() {
    var _this = this;

    var controllers = this.get('_controllers');
    var animate = this.get('animate');
    var canvas = this.get('_canvas');
    var frontCanvas = this.get('_frontCanvas');
    var animateController = void 0;
    if (animate) {
      animateController = new Animate({
        canvases: [canvas, frontCanvas],
        graph: this
      });
      controllers.animate = animateController;
    }
    var simpleDraw = function simpleDraw() {
      canvas.draw();
      frontCanvas.draw();
    };
    var animateDraw = Util.debounce(function () {
      animateController.run();
    }, 16);
    if (animateController) {
      var updateStashTimeout = void 0;
      this.draw = function () {
        var forcePreventAnimate = _this.get('forcePreventAnimate');
        if (forcePreventAnimate) {
          if (updateStashTimeout) {
            clearTimeout(updateStashTimeout);
          }
          updateStashTimeout = setTimeout(function () {
            animateController.updateStash();
          }, 16);
          simpleDraw();
        } else {
          animateDraw();
        }
      };
    } else {
      this.draw = simpleDraw;
    }
  },
  drawFrontCanvas: function drawFrontCanvas() {
    var frontCanvas = this.get('_frontCanvas');
    frontCanvas.draw();
  }
};

module.exports = Mixin;

/***/ }),

/***/ "./src/mixin/event.js":
/*!****************************!*\
  !*** ./src/mixin/event.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview dom event handler
 * @author wuyue.lwy <wyueliu@gmail.com>
 */

var Mixin = {};
var Controller = __webpack_require__(/*! ../controller/event */ "./src/controller/event.js");
Mixin.INIT = '_initEvents';
Mixin.CFG = {
  /**
   * keyboard Enable
   * @type {boolean|function}
   */
  keyboardEnable: true
};
Mixin.AUGMENT = {
  _initEvents: function _initEvents() {
    var controllers = this.get('_controllers');
    controllers.events = new Controller({
      graph: this
    });
  }
};
module.exports = Mixin;

/***/ }),

/***/ "./src/mixin/filter.js":
/*!*****************************!*\
  !*** ./src/mixin/filter.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview filter graph item
 * filter will influence layout and visible
 * @author huangtonger@aliyun.com
 */
var Util = __webpack_require__(/*! ../util/ */ "./src/util/index.js");
var Mixin = {};
Mixin.INIT = '_initFilter';
Mixin.CFG = {
  /**
   * filter or filters
   * @type {array|function|undefined}
   */
  filters: []
};

Mixin.AUGMENT = {
  _initFilter: function _initFilter() {
    var _this = this;

    var filters = this.get('filters');
    if (Util.isFunction(filters)) {
      this.set('filters', [filters]);
    }
    this.on('afterchange', function (_ref) {
      var action = _ref.action;

      filters.length > 0 && action === 'changeData' && !_this.destroyed && _this.filter();
    });
  },

  /**
   * add an filter
   * @param {object} filter filter
   * @return {object} filter
   */
  addFilter: function addFilter(filter) {
    var filters = this.get('filters');
    filters.push(filter);
    return filter;
  },

  /**
   * remove filter
   * @param {object} filter item filter
   */
  removeFilter: function removeFilter(filter) {
    var filters = this.get('filters');
    this.set('filters', Util.filter(filters, filter));
  },

  /**
   * do filter
   */
  filter: function filter() {
    var filters = this.get('filters');
    var items = this.getItems();
    var filteredItems = this.getItems();
    filters.forEach(function (filter) {
      filteredItems = Util.filter(filteredItems, filter);
    });
    items.forEach(function (item) {
      if (filteredItems.indexOf(item) === -1) {
        item.hide();
      } else {
        item.show();
      }
    });
    this.draw();
  }
};
module.exports = Mixin;

/***/ }),

/***/ "./src/mixin/fit-view.js":
/*!*******************************!*\
  !*** ./src/mixin/fit-view.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview graph fit canvas
 * @author huangtonger@aliyun.com
 */

var Util = __webpack_require__(/*! ../util/ */ "./src/util/index.js");

var Mixin = {};
Mixin.CFG = {
  /**
   * Adaptive viewport
   * @type {string|undefined}
   * could be 'tl', 'lc', 'bl', 'cc', 'tc', 'tr', 'rc', 'br', 'bc', 'autoZoom'
   */
  fitView: undefined,
  /**
   * Fit view padding (client scale)
   * @type {number|array}
   */
  fitViewPadding: 10,
  /**
   * Minimum scale size
   * @type {number}
   */
  minZoom: 0.2,
  /**
   * Maxmum scale size
   * @type {number}
   */
  maxZoom: 10
};
Mixin.AUGMENT = {
  getBBox: function getBBox() {
    var itemGroup = this.get('_itemGroup');
    return itemGroup.getBBox();
  },
  getFitViewPadding: function getFitViewPadding() {
    return Util.toAllPadding(this.get('fitViewPadding'));
  },
  setFitView: function setFitView(type) {
    if (!type) {
      return this;
    }
    if (type === 'autoZoom') {
      this.autoZoom();
      return this;
    }
    var padding = this.getFitViewPadding();
    var width = this.get('width');
    var height = this.get('height');
    var box = this.getBBox();
    var bWidth = box.maxX - box.minX;
    var bHeight = box.maxY - box.minY;
    var containerBox = {
      x: 0,
      y: 0,
      width: width,
      height: height
    };
    var position = Util.getNineBoxPosition(type, containerBox, bWidth, bHeight, padding);
    var matrix = [1, 0, 0, 0, 1, 0, 0, 0, 1];
    Util.mat3.translate(matrix, matrix, [-box.minX + position.x, -box.minY + position.y]);
    this.updateMatrix(matrix);
  },
  _getZoomRatio: function _getZoomRatio(ratio) {
    var maxZoom = this.get('maxZoom');
    var minZoom = this.get('minZoom');
    if (ratio < minZoom) {
      ratio = minZoom;
    }
    if (ratio > maxZoom) {
      ratio = maxZoom;
    }
    return ratio;
  },

  /**
   * @param {number|array} padding padding
   */
  autoZoom: function autoZoom(padding) {
    if (!padding) {
      padding = this.getFitViewPadding();
    }
    var matrix = [1, 0, 0, 0, 1, 0, 0, 0, 1];
    var width = this.get('width');
    var height = this.get('height');
    var box = this.getBBox();
    var centerX = (box.maxX + box.minX) / 2;
    var centerY = (box.maxY + box.minY) / 2;
    var cWidth = width - padding[1] - padding[3];
    var cHeight = height - padding[0] - padding[2];
    var bWidth = box.maxX - box.minX;
    var bHeight = box.maxY - box.minY;
    var ratio = Math.min(cHeight / bHeight, cWidth / bWidth);
    ratio = this._getZoomRatio(ratio);
    Util.mat3.translate(matrix, matrix, [-centerX, -centerY]);
    Util.mat3.scale(matrix, matrix, [ratio, ratio]);
    Util.mat3.translate(matrix, matrix, [width / 2, height / 2]);
    this.updateMatrix(matrix);
  },

  /**
   * @return {number} zoom
   */
  getZoom: function getZoom() {
    var matrix = this.getMatrix();
    return matrix[0];
  },

  /**
   * @param {object} matrix update matrix
   * @return {Graph} this
   */
  updateMatrix: function updateMatrix(matrix) {
    var rootGroup = this.get('_rootGroup');
    var frontRootGroup = this.get('_frontRootGroup');
    var ev = {
      updateMatrix: matrix,
      originMatrix: this.getMatrix()
    };
    this.emit('beforeviewportchange', ev);
    rootGroup.setMatrix(matrix);
    frontRootGroup.setMatrix(matrix);
    this.emit('afterviewportchange', ev);
    this.draw();
    return this;
  },

  /**
   * @param {Object|Number} point scale center point
   * @param {Number|Undefined} ratio scale ratio
   * @return {Graph} this
   */
  zoom: function zoom(point, ratio) {
    if (Util.isNumber(point)) {
      var width = this.get('width');
      var height = this.get('height');
      this.zoomByDom({
        x: width / 2,
        y: height / 2
      }, point);
      return;
    }
    ratio = this._getZoomRatio(ratio);
    var rootGroup = this.get('_rootGroup');
    var matrix = Util.clone(rootGroup.getMatrix());
    var dx = matrix[6] + matrix[0] * point.x - ratio * point.x;
    var dy = matrix[7] + matrix[0] * point.y - ratio * point.y;
    matrix[6] = 0;
    matrix[7] = 0;
    matrix[0] = ratio;
    matrix[4] = ratio;
    Util.mat3.translate(matrix, matrix, [dx, dy]);
    this.updateMatrix(matrix);
    return this;
  },

  /**
   * @param {object} domPoint scale center dom point
   * @param {number} ratio scale ratio
   * @return {Graph} this
   */
  zoomByDom: function zoomByDom(domPoint, ratio) {
    var point = this.getPoint(domPoint);
    this.zoom(point, ratio);
    return this;
  },

  /**
   * @param {number} dx x offset
   * @param {number} dy y offset
   * @return {Graph} this
   */
  translate: function translate(dx, dy) {
    var rootGroup = this.get('_rootGroup');
    var matrix = rootGroup.getMatrix();
    Util.mat3.translate(matrix, matrix, [dx, dy]);
    this.updateMatrix(matrix);
    return this;
  },

  /**
   * @param {number} dx dom x offset
   * @param {number} dy dom y offset
   * @return {Graph} this
   */
  translateByDom: function translateByDom(dx, dy) {
    var rootGroup = this.get('_rootGroup');
    var matrix = rootGroup.getMatrix();
    var scale = matrix[0];
    this.translate(dx / scale, dy / scale);
    return this;
  },

  /**
   * @return {Graph} this
   */
  getMatrix: function getMatrix() {
    var rootGroup = this.get('_rootGroup');
    return rootGroup.getMatrix();
  },

  /**
   * @param {object} domPoint domPoint
   * @return {object} graph point
   */
  getPoint: function getPoint(domPoint) {
    return this.getPointByDom(domPoint);
  },

  /**
   * @param {object} domPoint domPoint
   * @return {object} graph point
   */
  getPointByDom: function getPointByDom(domPoint) {
    var rootGroup = this.get('_rootGroup');
    var matrix = rootGroup.getMatrix();
    return Util.invertMatrix(domPoint, matrix);
  },

  /**
   * @param {object} canvasPoint - canvas point
   * @return {object} graph point
   */
  getPointByCanvas: function getPointByCanvas(canvasPoint) {
    var canvas = this.get('_canvas');
    var pixelRatio = canvas.get('pixelRatio');
    return this.getPoint({
      x: canvasPoint.x / pixelRatio,
      y: canvasPoint.y / pixelRatio
    });
  },

  /**
   * @param {object} clientPoint - client point
   * @return {object} graph point
   */
  getPointByClient: function getPointByClient(clientPoint) {
    var canvas = this.get('_canvas');
    var canvasPoint = canvas.getPointByClient(clientPoint.x, clientPoint.y);
    return this.getPointByCanvas(canvasPoint);
  },

  /**
   * @param {object} point graph point
   * @return {object} dom point
   */
  getDomPoint: function getDomPoint(point) {
    var rootGroup = this.get('_rootGroup');
    var matrix = rootGroup.getMatrix();
    return Util.applyMatrix(point, matrix);
  },

  /**
   * @param {object} point graph point
   * @return {object} canvas point
   */
  getCanvasPoint: function getCanvasPoint(point) {
    var canvas = this.get('_canvas');
    var pixelRatio = canvas.get('pixelRatio');
    var domPoint = this.getDomPoint(point);
    return {
      x: domPoint.x * pixelRatio,
      y: domPoint.y * pixelRatio
    };
  },

  /**
   * @param {object} point graph point
   * @return {object} client point
   */
  getClientPoint: function getClientPoint(point) {
    var canvasPoint = this.getCanvasPoint(point);
    var canvas = this.get('_canvas');
    var clientPoint = canvas.getClientByPoint(canvasPoint.x, canvasPoint.y);
    return {
      x: clientPoint.clientX,
      y: clientPoint.clientY
    };
  },

  /**
   * @param {object} item item or itemId
   * @return {Graph} this
   */
  focus: function focus(item) {
    if (Util.isString(item)) {
      item = this.find(item);
    }
    if (item) {
      var point = item.getCenter();
      this.focusPoint(point);
    }
    return this;
  },
  navigate: function navigate(item) {
    if (Util.isString(item)) {
      item = this.find(item);
    }
    var dx = 0;
    var dy = 0;
    var rootGroup = this.get('_rootGroup');
    var matrix = rootGroup.getMatrix();
    if (item) {
      var point = item.getCenter();
      var padding = 16;
      var width = this.get('width') - padding;
      var height = this.get('height') - padding;
      var bbox = item.getBBox();
      var node_hwidth = (bbox.maxX - bbox.minX) / 2;
      var node_hheight = (bbox.maxX - bbox.minX) / 2;
      if (matrix[0] * point.x + matrix[6] < 0) {
        dx = -matrix[6] + matrix[0] * node_hwidth - matrix[0] * point.x;
      } else if (matrix[0] * point.x + matrix[6] > width) {
        dx = -matrix[6] + width - matrix[0] * node_hwidth - matrix[0] * point.x;
      }
      if (matrix[0] * point.y + matrix[7] < 0) {
        dy = -matrix[7] + matrix[0] * node_hheight - matrix[0] * point.y;
      } else if (matrix[0] * point.y + matrix[7] > height) {
        dy = -matrix[7] + height - matrix[0] * node_hheight - matrix[0] * point.y;
      }
    }
    this.translate(dx, dy);
    return this;
  },

  /**
   * @param {object} point graph point
   * @return {Graph} this
   */
  focusPoint: function focusPoint(point) {
    var rootGroup = this.get('_rootGroup');
    var matrix = rootGroup.getMatrix();
    var width = this.get('width');
    var height = this.get('height');
    var dx = -matrix[6] + width / 2 - matrix[0] * point.x;
    var dy = -matrix[7] + height / 2 - matrix[0] * point.y;
    this.translate(dx, dy);
    return this;
  },

  /**
   * @param {object} domPoint dom point
   * @return {Graph} this
   */
  focusPointByDom: function focusPointByDom(domPoint) {
    var point = this.getPoint(domPoint);
    this.focusPoint(point);
    return this;
  }
};
module.exports = Mixin;

/***/ }),

/***/ "./src/mixin/force-fit.js":
/*!********************************!*\
  !*** ./src/mixin/force-fit.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview force fit mixin
 * @author huangtonger@aliyun.com
 */

var Util = __webpack_require__(/*! ../util/ */ "./src/util/index.js");
var Mixin = {};
Mixin.INIT = '_initForceFit';
Mixin.AUGMENT = {
  _initForceFit: function _initForceFit() {
    var width = this.get('width');
    var height = this.get('height');
    if (!width && !height) {
      this.forceFit();
      this._bindForceEvent();
      return;
    }
    if (!width) {
      this.forceFit('width');
      this._bindForceEvent('width');
      return;
    }
    if (!height) {
      this.forceFit('height');
      this._bindForceEvent('height');
      return;
    }
  },
  _bindForceEvent: function _bindForceEvent(type) {
    var _this = this;

    var forceFitTimer = this._getTimer('forceFit');
    var windowForceResizeEvent = function windowForceResizeEvent() {
      var timer = setTimeout(function () {
        _this.forceFit(type);
      }, 200);
      forceFitTimer && clearTimeout(forceFitTimer);
      _this._setTimer('forceFit', timer);
    };
    window.addEventListener('resize', windowForceResizeEvent);
    this.set('_windowForceResizeEvent', windowForceResizeEvent);
  },

  /**
   * force fit canvas size to container
   * @param  {String|Undefined} type string could be 'width', 'height'
   * @return {Graph} this
   */
  forceFit: function forceFit(type) {
    var container = this.get('_containerDOM');
    var width = this.get('width');
    var height = this.get('height');
    var containerHeight = Util.getHeight(container);
    var containerWidth = Util.getWidth(container);
    if (type === 'width') {
      this.changeSize(containerWidth, height);
      return this;
    }
    if (type === 'height') {
      this.changeSize(width, containerHeight);
      return this;
    }
    this.changeSize(containerWidth, containerHeight);
    return this;
  }
};

module.exports = Mixin;

/***/ }),

/***/ "./src/mixin/layout.js":
/*!*****************************!*\
  !*** ./src/mixin/layout.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview layout mixin
 * @author huangtonger@aliyun.com
 */

var Util = __webpack_require__(/*! ../util/ */ "./src/util/index.js");
var Layout = __webpack_require__(/*! ../controller/layout */ "./src/controller/layout.js");
var Mixin = {};
Mixin.CFG = {
  /**
   * Layout cfg
   * @type {object|function|undefined}
   */
  layout: undefined
};
Mixin.INIT = '_initLayout';
Mixin.AUGMENT = {
  _initLayout: function _initLayout() {
    var controllers = this.get('_controllers');
    var layoutCfg = this._getLayoutCfg();
    if (layoutCfg) {
      controllers.layout = new Layout(Util.mix({
        graph: this
      }, layoutCfg));
    }
  },
  _getLayoutCfg: function _getLayoutCfg() {
    var layout = this.get('layout');
    if (Util.isPlainObject(layout)) {
      return layout;
    } else if (Util.isFunction(layout) || Util.isObject(layout)) {
      return {
        processer: layout
      };
    }
    return null;
  },
  layout: function layout() {
    this._getController('layout').layout();
    return this;
  },

  /**
   * @return {Graph} this
   */
  updateNodePosition: function updateNodePosition() {
    var nodes = this.getNodes();
    var groups = this.getGroups();
    var edges = this.getEdges();
    var guides = this.getGuides();

    nodes.forEach(function (node) {
      node.layoutUpdate();
    });
    groups.forEach(function (group) {
      group.layoutUpdate();
    });
    edges.forEach(function (edge) {
      edge.layoutUpdate();
    });
    guides.forEach(function (guide) {
      guide.layoutUpdate();
    });
    this.draw();
    return this;
  },
  changeLayout: function changeLayout(processer) {
    this._getController('layout').changeLayout(processer);
    return this;
  },
  getLayout: function getLayout() {
    return this._getController('layout').getLayoutProcesser();
  }
};

module.exports = Mixin;

/***/ }),

/***/ "./src/mixin/mapping.js":
/*!******************************!*\
  !*** ./src/mixin/mapping.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview mapping mixin
 * @author huangtonger@aliyun.com
 */

var Mapper = __webpack_require__(/*! ../controller/mapper */ "./src/controller/mapper.js");
var Mixin = {};
Mixin.INIT = '_initMapper';
Mixin.AUGMENT = {
  _initMapper: function _initMapper() {
    var controllers = this.get('_controllers');
    controllers.nodeMapper = new Mapper({
      graph: this
    });
    controllers.edgeMapper = new Mapper({
      graph: this
    });
    controllers.groupMapper = new Mapper({
      graph: this
    });
    controllers.guideMapper = new Mapper({
      graph: this
    });
  },

  /**
   * node mapping
   * @param  {array} channels mapping channel
   * @return {object} nodeMapper
   */
  node: function node(channels) {
    var nodeMapper = this._getController('nodeMapper');
    channels && nodeMapper.addChannels(channels);
    return nodeMapper;
  },

  /**
   * edge mapping
   * @param  {array} channels mapping channel
   * @return {object} edgeMapper
   */
  edge: function edge(channels) {
    var edgeMapper = this._getController('edgeMapper');
    channels && edgeMapper.addChannels(channels);
    return edgeMapper;
  },

  /**
   * group mapping
   * @param  {array} channels mapping channel
   * @return {object} groupMapper
   */
  group: function group(channels) {
    var groupMapper = this._getController('groupMapper');
    channels && groupMapper.addChannels(channels);
    return this._getController('groupMapper');
  },

  /**
   * guide mapping
   * @param  {array} channels mapping channel
   * @return {object} guideMapper
   */
  guide: function guide(channels) {
    var guideMapper = this._getController('guideMapper');
    channels && guideMapper.addChannels(channels);
    return this._getController('guideMapper');
  }
};

module.exports = Mixin;

/***/ }),

/***/ "./src/mixin/mode.js":
/*!***************************!*\
  !*** ./src/mixin/mode.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview mode
 * @author wuyue.lwy <wyueliu@gmail.com>
 */
var Util = __webpack_require__(/*! ../util */ "./src/util/index.js");
var Handler = __webpack_require__(/*! ../handler */ "./src/handler/index.js");
var Mixin = {};
Mixin.CFG = {
  /**
    * mode list  key - value, key - mode name, value - behaviors
    * @type {object}
    */
  modes: {},

  /**
    * current mode name
    * @type {string}
    */
  mode: 'default'
};

Mixin.INIT = '_initModes';
Mixin.AUGMENT = {
  _initModes: function _initModes() {
    this._eventStash = {};
    var modes = this.get('modes');
    var mode = this.get('mode');
    if (Util.isEmpty(modes)) {
      modes = Util.cloneDeep(this.constructor.Modes);
      this.set('modes', modes);
    }
    this.changeMode(mode);
  },

  /**
    * change mode
    * @param {string} modeName - name of mode
    */
  changeMode: function changeMode(modeName) {
    var modes = this.get('modes');
    if (Util.isEmpty(modes) || Util.isEmpty(modes[modeName])) {
      return;
    }
    Handler.resetMode(modes[modeName], this);
    this.set('mode', modeName);
  },

  /**
    * add behavior to the current mode
    * @param {Array | String} behaviour - add a behaviour or a list behaviours to the current mode
    * @return {object} - graph object
    */
  addBehaviour: function addBehaviour(behaviour) {
    var modes = this.get('modes');
    var mode = this.get('mode');
    if (Util.isEmpty(modes[mode])) {
      modes[mode] = [];
    }
    // remove  repetition
    var currentModes = modes[mode];
    var list = [].concat(behaviour);
    Util.each(list, function (tmp) {
      if (currentModes.indexOf(tmp) === -1) {
        currentModes.push(tmp);
      }
    });
    Handler.resetMode(modes[mode], this);
    return this;
  },

  /**
    * remove behavior from the current mode
    * @param {Array | String} behaviour - a behaviour or a list behaviours
    * @return {object} this
    */
  removeBehaviour: function removeBehaviour(behaviour) {
    var modes = this.get('modes');
    var mode = this.get('mode');
    var currentModes = modes[mode];
    if (Util.isEmpty(currentModes)) {
      return;
    }
    var removes = [].concat(behaviour);
    currentModes = currentModes.filter(function (item) {
      return removes.indexOf(item) === -1;
    });
    Handler.resetMode(currentModes, this);
    return this;
  },

  /**
    * add a behaviour
    * @param {string} type - behaviour type
    * @param {function} fn - behaivour body
    */
  behaviourOn: function behaviourOn(type, fn) {
    var eventStash = this._eventStash;
    if (!eventStash[type]) {
      eventStash[type] = [];
    }
    eventStash[type].push(fn);
    this.on(type, fn);
  },

  /**
    * remove all behaviours added by user
    */
  _off: function _off() {
    var _this = this;

    var eventStash = this._eventStash;
    Util.each(eventStash, function (fns, type) {
      Util.each(fns, function (fn) {
        _this.off(type, fn);
      });
    });
    this._eventStash = {};
  }
};
module.exports = Mixin;

/***/ }),

/***/ "./src/mixin/query.js":
/*!****************************!*\
  !*** ./src/mixin/query.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview graph query
 * @author huangtonger@aliyun.com
 */

var Util = __webpack_require__(/*! ../util/ */ "./src/util/index.js");
var Mixin = {};

Mixin.AUGMENT = {
  find: function find(id) {
    var itemMap = this.get('_itemMap');
    return itemMap[id];
  },

  /**
   * get nodes
   * @return {array} rst
   */
  getNodes: function getNodes() {
    var itemMap = this.get('_itemMap');
    return itemMap._nodes;
  },

  /**
   * get edges
   * @return {array} rst
   */
  getEdges: function getEdges() {
    var itemMap = this.get('_itemMap');
    return itemMap._edges;
  },

  /**
   * get groups
   * @return {array} rst
   */
  getGroups: function getGroups() {
    var itemMap = this.get('_itemMap');
    return itemMap._groups;
  },

  /**
   * get guides
   * @return {array} rst
   */
  getGuides: function getGuides() {
    var itemMap = this.get('_itemMap');
    return itemMap._guides;
  },

  /**
   * get items
   * @return {array} rst
   */
  getItems: function getItems() {
    var itemMap = this.get('_itemMap');
    var rst = [];
    Util.each(itemMap, function (item) {
      if (item.type) {
        rst.push(item);
      }
    });
    return rst;
  },

  /**
   * get item by shape
   * @param  {G.Shape} shape - the shape from g
   * @return {string}  item.id - id of the item
   */
  getItemByShape: function getItemByShape(shape) {
    if (!shape) return null;
    return this.getItem(shape.id);
  },

  /**
   * get item item || itemId
   * @param  {object|string} item - the shape from g
   * @return {object}  item
   */
  getItem: function getItem(item) {
    var itemMap = this.get('_itemMap');
    if (Util.isObject(item)) {
      if (item.destroyed) {
        item = itemMap[item.id];
      }
    } else {
      item = itemMap[item];
    }
    return item;
  }
};
module.exports = Mixin;

/***/ }),

/***/ "./src/shape/edges/common.js":
/*!***********************************!*\
  !*** ./src/shape/edges/common.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * @fileOverview edge shapes
 * @author huangtonger@aliyun.com
 */

var Shape = __webpack_require__(/*! ../shape */ "./src/shape/shape.js");
var Util = __webpack_require__(/*! ../../util/ */ "./src/util/index.js");
var Global = __webpack_require__(/*! ../../global */ "./src/global.js");
var MIN_ARROW_SIZE = 3;
var defaultArrow = {
  path: function path(item) {
    var keyShape = item.getKeyShape();
    var lineWidth = keyShape.attr('lineWidth');
    lineWidth = lineWidth > MIN_ARROW_SIZE ? lineWidth : MIN_ARROW_SIZE;
    var halfWidth = lineWidth * 10 / 3;
    var halfHeight = lineWidth * 4 / 3;
    var radius = lineWidth * 4;
    return [['M', -halfWidth, halfHeight], ['L', 0, 0], ['L', -halfWidth, -halfHeight], ['A', radius, radius, 0, 0, 1, -halfWidth, halfHeight], ['Z']];
  },
  dindent: function dindent(item) {
    var keyShape = item.getKeyShape();
    var lineWidth = keyShape.attr('lineWidth');
    return (lineWidth > MIN_ARROW_SIZE ? lineWidth : MIN_ARROW_SIZE) * 3.1;
  },
  style: function style(item) {
    var keyShape = item.getKeyShape();

    var _keyShape$get = keyShape.get('attrs'),
        strokeOpacity = _keyShape$get.strokeOpacity,
        stroke = _keyShape$get.stroke;

    return {
      fillOpacity: strokeOpacity,
      fill: stroke
    };
  }
};

Shape.registerEdge('common', {
  draw: function draw(item) {
    var keyShape = this.drawKeyShape(item);
    this.drawLabel(item, keyShape);
    return keyShape;
  },
  drawKeyShape: function drawKeyShape(item) {
    var group = item.getGraphicGroup();
    var style = this.getStyle(item);

    var path = this.getPath(item);
    return group.addShape('path', {
      attrs: Util.mix({}, style, {
        path: path
      })
    });
  },
  getStyle: function getStyle(item) {
    var model = item.getModel();
    return Util.mix(true, {}, {
      stroke: model.color || '#A3B1BF',
      strokeOpacity: 0.92,
      lineAppendWidth: 4,
      lineWidth: model.size || 1
    }, model.style);
  },
  getPath: function getPath(item) {
    var points = item.getPoints();
    return Util.pointsToPolygon(points);
  },
  getLabel: function getLabel(item) {
    var model = item.getModel();
    return model.label;
  },
  drawLabel: function drawLabel(item, keyShape) {
    var label = this.getLabel(item);
    var group = item.getGraphicGroup();
    var model = item.getModel();

    if (label) {
      var center = keyShape.getPoint(0.5);
      var attrs = Util.mix(true, {}, Global.labelStyle, center);

      if (!Util.isObject(label)) {
        attrs.text = label;
      } else {
        Util.mix(attrs, label);
      }
      label = group.addShape('text', {
        attrs: attrs
      });
      var padding = Util.toAllPadding([4, 8]);
      var textBox = label.getBBox();
      var defaultStyle = {
        fill: 'white'
      };
      var style = model.labelRectStyle ? Util.mix({}, defaultStyle, model.labelRectStyle) : defaultStyle;
      group.addShape('rect', {
        attrs: Util.mix({}, style, {
          x: textBox.minX - padding[3],
          y: textBox.minY - padding[0],
          width: textBox.maxX - textBox.minX + padding[1] + padding[3],
          height: textBox.maxY - textBox.minY + padding[0] + padding[2]
        })
      });
      Util.toFront(label);
    }
  },

  startArrow: _extends({}, defaultArrow, {
    tangent: function tangent(item) {
      var keyShape = item.getKeyShape();
      return keyShape.getStartTangent();
    },
    ratio: function ratio() {
      return 0;
    }
  }),
  endArrow: _extends({}, defaultArrow, {
    tangent: function tangent(item) {
      var keyShape = item.getKeyShape();
      return keyShape.getEndTangent();
    },
    ratio: function ratio() {
      return 1;
    }
  })
});

/***/ }),

/***/ "./src/shape/edges/index.js":
/*!**********************************!*\
  !*** ./src/shape/edges/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview entry file
 * @author huangtonger@aliyun.com
 */

module.exports = {
  common: __webpack_require__(/*! ./common */ "./src/shape/edges/common.js")
};

/***/ }),

/***/ "./src/shape/groups/common.js":
/*!************************************!*\
  !*** ./src/shape/groups/common.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview group shapes
 * @author huangtonger@aliyun.com
 */

var Shape = __webpack_require__(/*! ../shape */ "./src/shape/shape.js");
var Util = __webpack_require__(/*! ../../util/ */ "./src/util/index.js");
var Global = __webpack_require__(/*! ../../global */ "./src/global.js");

Shape.registerGroup('common', {
  draw: function draw(item) {
    var model = item.getModel();
    if (model.collapsed) {
      return this.drawCollapsed(item);
    }
    return this.drawExpanded(item);
  },
  getLabel: function getLabel(item) {
    var model = item.getModel();
    return model.label;
  },
  drawLabel: function drawLabel(item, x, y) {
    var label = this.getLabel(item);
    if (!label) {
      return;
    }
    var group = item.getGraphicGroup();
    var margin = [8, 8];
    var attrs = Util.mix(true, {}, Global.labelStyle, {
      x: x + margin[0],
      y: y + margin[1],
      textAlign: 'left',
      textBaseline: 'top'
    });
    if (!Util.isObject(label)) {
      attrs.text = label;
    } else {
      Util.mix(attrs, label);
    }
    group.addShape('text', {
      attrs: attrs
    });
  },
  drawKeyShape: function drawKeyShape(item, x, y, width, height) {
    var model = item.getModel();
    var group = item.getGraphicGroup();
    var attrs = Util.mix({}, Global.groupStyle, model.style);
    var path = Util.getRectPath(x, y, width, height, attrs.radius);
    return group.addShape('path', {
      attrs: Util.mix({}, attrs, {
        path: path
      })
    });
  },
  drawExpanded: function drawExpanded(item) {
    var box = item.getChildrenBBox();
    var x = box.minX - Global.groupBackgroundPadding[3];
    var y = box.minY - Global.groupBackgroundPadding[0];
    var width = box.maxX - box.minX + Global.groupBackgroundPadding[3] + Global.groupBackgroundPadding[1];
    var height = box.maxY - box.minY + Global.groupBackgroundPadding[0] + Global.groupBackgroundPadding[2];
    var keyShape = this.drawKeyShape(item, x, y, width, height);
    this.drawLabel(item, x, y);
    return keyShape;
  },
  drawCollapsed: function drawCollapsed(item) {
    var box = item.getChildrenBBox();
    var x = box.minX - Global.groupBackgroundPadding[3];
    var y = box.minY - Global.groupBackgroundPadding[0];
    var width = 184;
    var height = 40;
    var keyShape = this.drawKeyShape(item, x, y, width, height);
    this.drawLabel(item, x, y);
    return keyShape;
  },

  anchor: {
    intersectBox: 'rect'
  }
});

/***/ }),

/***/ "./src/shape/groups/index.js":
/*!***********************************!*\
  !*** ./src/shape/groups/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview entry file
 * @author huangtonger@aliyun.com
 */

module.exports = {
  common: __webpack_require__(/*! ./common */ "./src/shape/groups/common.js")
};

/***/ }),

/***/ "./src/shape/guides/common.js":
/*!************************************!*\
  !*** ./src/shape/guides/common.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview guide shapes
 * @author huangtonger@aliyun.com
 */

var Shape = __webpack_require__(/*! ../shape */ "./src/shape/shape.js");

Shape.registerGuide('common', {
  draw: function draw() {
    console.warn('do not have this guide, please register one');
  }
});

/***/ }),

/***/ "./src/shape/guides/index.js":
/*!***********************************!*\
  !*** ./src/shape/guides/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview entry file
 * @author huangtonger@aliyun.com
 */

module.exports = {
  common: __webpack_require__(/*! ./common */ "./src/shape/guides/common.js")
};

/***/ }),

/***/ "./src/shape/index.js":
/*!****************************!*\
  !*** ./src/shape/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview shape entry file
 * @author huangtonger@aliyun.com
 */

var Shape = __webpack_require__(/*! ./shape */ "./src/shape/shape.js");

Shape.registerShapeManager('node', {
  defaultShapeType: 'common'
});

Shape.registerShapeManager('edge', {
  defaultShapeType: 'common'
});

Shape.registerShapeManager('group', {
  defaultShapeType: 'common'
});

Shape.registerShapeManager('guide', {
  defaultShapeType: 'common'
});

__webpack_require__(/*! ./nodes/ */ "./src/shape/nodes/index.js");
__webpack_require__(/*! ./edges/ */ "./src/shape/edges/index.js");
__webpack_require__(/*! ./groups/ */ "./src/shape/groups/index.js");
__webpack_require__(/*! ./guides/ */ "./src/shape/guides/index.js");
module.exports = Shape;

/***/ }),

/***/ "./src/shape/nodes/common.js":
/*!***********************************!*\
  !*** ./src/shape/nodes/common.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview common node shape
 * @author huangtonger@aliyun.com
 */

var Shape = __webpack_require__(/*! ../shape */ "./src/shape/shape.js");
var Util = __webpack_require__(/*! ../../util/ */ "./src/util/index.js");
var Global = __webpack_require__(/*! ../../global */ "./src/global.js");

Shape.registerNode('common', {
  draw: function draw(item) {
    var group = item.getGraphicGroup();
    var label = this.drawLabel(item);
    var keyShape = this.drawKeyShape(item);
    label && Util.toFront(label, group);
    return keyShape;
  },
  getSize: function getSize(item) {
    var model = item.getModel();
    var size = model.size;
    if (Util.isArray(size)) {
      return size;
    }
    if (Util.isNumber(size)) {
      return [size, size];
    }
    return [Global.defaultNodeSize, Global.defaultNodeSize];
  },
  getStyle: function getStyle(item) {
    var model = item.getModel();
    return Util.mix(true, {
      lineWidth: 1,
      fill: model.color || '#40a9ff',
      stroke: model.color || '#096dd9',
      fillOpacity: 0.92
    }, model.style);
  },
  getLabel: function getLabel(item) {
    var model = item.getModel();
    return model.label;
  },
  drawKeyShape: function drawKeyShape(item) {
    var group = item.getGraphicGroup();
    var style = this.getStyle(item);
    var path = this.getPath(item);
    return group.addShape('path', {
      attrs: Util.mix({}, style, {
        path: path
      })
    });
  },
  drawLabel: function drawLabel(item) {
    var group = item.getGraphicGroup();
    var label = this.getLabel(item);
    if (Util.isNil(label)) {
      return;
    }
    var attrs = Util.mix(true, {}, Global.labelStyle, {
      x: 0,
      y: 0
    });
    if (!Util.isObject(label)) {
      attrs.text = label;
    } else {
      Util.mix(attrs, label);
    }
    return group.addShape('text', {
      class: 'label',
      attrs: attrs
    });
  },
  getPath: function getPath(item) {
    var size = this.getSize(item);
    return Util.getEllipsePath(0, 0, size[0] / 2, size[1] / 2);
  }
});

/***/ }),

/***/ "./src/shape/nodes/html.js":
/*!*********************************!*\
  !*** ./src/shape/nodes/html.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview html node shape
 * @author huangtonger@aliyun.com
 */

var Shape = __webpack_require__(/*! ../shape */ "./src/shape/shape.js");
var Util = __webpack_require__(/*! ../../util/ */ "./src/util/index.js");

// html node
Shape.registerNode('html', {
  getHtml: function getHtml(item) {
    return item.getModel().html;
  },

  cssSize: true,
  draw: function draw(item) {
    var containerDOM = Util.createDOM('<div class="g6-html-node-container"></div>');
    var group = item.getGraphicGroup();
    var model = item.getModel();
    var size = this.getSize(item);
    var style = this.getStyle(item);
    var canvas = group.get('canvas');
    var htmlElementContaniner = canvas.get('htmlElementContaniner');
    var cssSize = this.cssSize;
    var html = this.getHtml(item);

    if (!html) {
      html = Util.createDOM('<div></div>');
    } else {
      html = Util.createDOM(html);
    }

    containerDOM.css({
      position: 'absolute',
      padding: '0px',
      margin: '0px',
      visibility: 'hidden'
    });
    containerDOM.appendChild(html);
    if (cssSize) {
      htmlElementContaniner.appendChild(containerDOM);
      size[0] = containerDOM.width();
      size[1] = containerDOM.height();
    }
    var x = -size[0] / 2;
    var y = -size[1] / 2;
    var width = size[0];
    var height = size[1];
    var keyShape = group.addShape('rect', {
      attrs: Util.mix({}, style, {
        x: x,
        y: y,
        width: width,
        height: height
      })
    });
    group.addShape('html', {
      attrs: Util.mix({
        x: x,
        y: y,
        width: width,
        height: height,
        html: containerDOM
      }, model.style)
    });
    return keyShape;
  }
});

/***/ }),

/***/ "./src/shape/nodes/index.js":
/*!**********************************!*\
  !*** ./src/shape/nodes/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview entry file
 * @author huangtonger@aliyun.com
 */

module.exports = {
  common: __webpack_require__(/*! ./common */ "./src/shape/nodes/common.js"),
  html: __webpack_require__(/*! ./html */ "./src/shape/nodes/html.js")
};

/***/ }),

/***/ "./src/shape/shape.js":
/*!****************************!*\
  !*** ./src/shape/shape.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview shape base class
 * @author huangtonger@aliyun.com
 */

var Util = __webpack_require__(/*! ../util/ */ "./src/util/index.js");
var Shape = {};

var ShapeBase = {
  draw: function draw() {}
};

var ShapeManagerBase = {
  defaultShapeType: null,
  getShape: function getShape(type, inputDefaultShape) {
    var shape = this[type] || this[inputDefaultShape] || this[this.defaultShapeType] || ShapeBase;
    return shape;
  },
  getExtendShape: function getExtendShape(extendShapeName, defaultShapeType) {
    var _this = this;

    if (Util.isArray(extendShapeName)) {
      var rst = {};
      extendShapeName.forEach(function (subExtendShapeName) {
        rst = Util.mix({}, rst, _this.getShape(subExtendShapeName, defaultShapeType));
      });
      return rst;
    }
    return this.getShape(extendShapeName, defaultShapeType);
  }
};

Shape.registerShapeManager = function (type, cfg) {
  var shapeManager = Util.mix({}, ShapeManagerBase, cfg);
  var Type = Util.upperFirst(type);
  Shape[Type] = shapeManager;
  Shape['register' + Type] = function (shapeType, cfg, extendShapeName, defaultShapeType) {
    // if (shapeManager[shapeType]) {
    //   throw new Error(shapeType + ' was already exist, please choose another name.');
    // }
    if (Util.isNil(extendShapeName) && Util.isNil(defaultShapeType)) {
      extendShapeName = shapeType;
    }
    var extendShape = shapeManager.getExtendShape(extendShapeName, defaultShapeType);
    var shapeObj = Util.mix(true, {}, extendShape, cfg);
    shapeObj.type = shapeType;
    shapeManager[shapeType] = shapeObj;
    return shapeObj;
  };
  return shapeManager;
};

module.exports = Shape;

/***/ }),

/***/ "./src/track.js":
/*!**********************!*\
  !*** ./src/track.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview track g6
 * Experience improvement program
 */
var Global = __webpack_require__(/*! ./global */ "./src/global.js");
var SERVER_URL = 'https://kcart.alipay.com/web/bi.do';
var version = __webpack_require__(/*! ./version */ "./src/version.js");

// 延迟发送请求
setTimeout(function () {
  if (Global.trackable) {
    var image = new Image();
    var newObj = {
      pg: document.URL,
      r: new Date().getTime(),
      g6: true,
      version: version,
      page_type: 'syslog'
    };
    var d = encodeURIComponent(JSON.stringify([newObj]));
    image.src = SERVER_URL + '?BIProfile=merge&d=' + d;
  }
}, 3000);

/***/ }),

/***/ "./src/tree.js":
/*!*********************!*\
  !*** ./src/tree.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * @fileOverview tree
 * @author huangtonger@aliyun.com
 */

var Util = __webpack_require__(/*! ./util/ */ "./src/util/index.js");
var Graph = __webpack_require__(/*! ./graph */ "./src/graph.js");
var Layouts = __webpack_require__(/*! ./layouts/ */ "./src/layouts/index.js");

var Tree = function (_Graph) {
  _inherits(Tree, _Graph);

  function Tree(inputCfg) {
    _classCallCheck(this, Tree);

    var cfg = Util.mix({
      layout: new Layouts.CompactBoxTree({
        getHGap: function getHGap() {
          return 10;
        },
        getVGap: function getVGap() {
          return 10;
        }
      })
    }, inputCfg);
    return _possibleConstructorReturn(this, _Graph.call(this, cfg));
  }

  Tree.prototype.initEvent = function initEvent() {
    var _this2 = this;

    this.on('afterdrawinner', function () {
      var source = _this2.get('_sourceData');
      source.roots.forEach(function (root) {
        var rootItem = _this2.find(root.id);
        _this2._setVisibleByCollapsed(rootItem);
      });
    });
    // this.on('afterchange', () => {
    //   const roots = this.getRoots();
    //   roots.forEach(root => {
    //     root.hierarchy = 1;
    //     root.deepEach(child => {
    //       const parent = child.getParent();
    //       child.hierarchy = parent.hierarchy + 1;
    //     });
    //   });
    // });
  };

  Tree.prototype._executeLayout = function _executeLayout(processer) {
    var source = this.get('_sourceData');
    if (Util.isFunction(processer)) {
      processer(source.roots, this);
    } else if (Util.isObject(processer)) {
      processer.roots = source.roots;
      processer.graph = this;
      processer.execute();
    }
  };

  Tree.prototype.getHierarchy = function getHierarchy(item) {
    item = this.getItem(item);
    var dataMap = this.get('_dataMap');
    var model = item.getModel();
    var parent = model.parent;

    var hierarchy = 1;
    while (parent) {
      parent = dataMap[parent].parent;
      hierarchy++;
    }
    return hierarchy;
  };

  Tree.prototype.parseSource = function parseSource(data) {
    var roots = data.roots;
    var dataMap = this.get('_dataMap');
    var nodes = [];
    var edges = [];

    roots.forEach(function (root) {
      Util.traverseTree(root, function (child, parent) {
        if (!child.id) {
          child.id = Util.guid();
        }
        if (!parent) {
          parent = dataMap[child.parent];
        }
        if (parent) {
          child.parent = parent.id;
          if (!parent.id) {
            parent.id = Util.guid();
          }
          edges.push({
            source: parent.id,
            target: child.id,
            id: parent.id + '-' + child.id
          });
        }
        nodes.push(child);
      }, function (parent) {
        return parent.children;
      }, true);
    });

    return {
      nodes: nodes,
      edges: edges
    };
  };
  // input an item set it's children visiable


  Tree.prototype._setVisibleByCollapsed = function _setVisibleByCollapsed(item) {
    var model = item.getModel();
    if (model.collapsed) {
      item.deepEach(function (node) {
        node.hide();
        node.getEdges().forEach(function (edge) {
          edge.hide();
        });
      });
    } else {
      item.deepEach(function (node) {
        if (node.collapsedParent) {
          node.hide();
          node.getEdges().forEach(function (edge) {
            edge.hide();
          });
        }
      });
    }
  };
  /**
   * @param {object} data tree data
   */


  Tree.prototype.source = function source(data) {
    var _data = this.parseSource(data);
    this.emit('beforesource');
    this.set('_sourceData', data);
    this.set('_data', _data);
    this.emit('aftersource');
  };
  /**
   * @param {object} node item node
   * @param {object} nth nth
   */


  Tree.prototype.setNodeNth = function setNodeNth(node, nth) {
    var model = node.getModel();
    var parent = node.getParent();
    var parentModel = parent.getModel();
    var children = parentModel.children;
    Util.Array.remove(children, model);
    children.splice(nth, 0, model);
  };
  /**
   * @param {object} node item node
   * @return {number} nth
   */


  Tree.prototype.getNth = function getNth(node) {
    var model = node.getModel();
    var parent = node.getParent();
    var parentModel = parent.getModel();
    return parentModel.children.indexOf(model);
  };
  /**
   * @param {string} type item type
   * @param {object} model data model
   * @return {Graph} this
   */


  Tree.prototype.add = function add(type, model) {
    var dataMap = this.get('_dataMap');
    var parent = dataMap[model.parent];
    var ev = {
      action: 'add',
      model: model
    };
    var item = void 0;
    if (type !== 'node' && type !== 'guide') {
      console.warn('Tree do not support add type ' + type + '!');
      return;
    }
    this.emit('beforechange', ev);
    if (type === 'node') {
      if (!parent) {
        throw new Error('please set available parent Id !');
      }
      if (Util.isArray(parent.children)) {
        parent.children.push(model);
      } else {
        parent.children = [model];
      }
      var data = this.parseSource({
        roots: [model]
      });
      this.addItems('node', data.nodes);
      this.addItems('edge', data.edges);
      item = this.find(model.id);
      this._setVisibleByCollapsed(item);
      // set node nth
      if (!Util.isNil(model.nth)) {
        this.setNodeNth(item, model.nth);
      }
      this.find(parent.id).forceUpdate();
    } else {
      this.addItems(type, [model]);
      item = this.find(model.id);
    }
    ev.item = item;
    this.emit('afterchange', ev);
    this.draw();
    return item;
  };
  /**
   * @param {String|Item} item target item
   * @param {object} model data model
   * @return {Graph} this
   */


  Tree.prototype.update = function update(item, model) {
    var _this3 = this;

    if (!model) {
      return;
    }
    item = this.getItem(item);
    var itemModel = item.getModel();
    var originModel = Util.mix({}, itemModel);
    var ev = {
      action: 'update',
      item: item,
      originModel: originModel,
      updateModel: model
    };

    model && this.emit('beforechange', ev);
    this.updateItem(item, model);

    if (item.isNode) {

      // deal collapsed
      if ('collapsed' in model) {
        if (model.collapsed) {
          item.deepEach(function (child) {
            child.hide();
            child.getEdges().forEach(function (edge) {
              edge.hide();
            });
          });
        } else {
          item.deepEach(function (child) {
            child.show();
            child.getEdges(function (edge) {
              var model = edge.getModel();
              return model.target === child.id;
            }).forEach(function (edge) {
              edge.show();
            });
          }, function (parent) {
            if (!parent.model.collapsed) {
              return parent.getChildren();
            }
            return null;
          });
        }
      }

      // exchange parent
      if (model.parent) {
        var originParent = this.find(originModel.id);
        var originParentModel = originParent.getModel();
        var newParent = this.find(model.parent);
        var newParentModel = newParent.getModel();
        Util.Array.remove(originParentModel.children, itemModel);
        if (newParentModel.children) {
          newParentModel.children.push(itemModel);
        } else {
          newParentModel.children = [itemModel];
        }

        this.find(newParentModel.id).forceUpdate();
      }

      // update children
      if (Util.isArray(model.children)) {
        if (originModel.children) {
          Util.each(originModel.children, function (child) {
            var removeItems = [_this3.find(child)];
            child.getEdges().forEach(function (edge) {
              removeItems.push(edge);
            });
            _this3.removeItems(removeItems);
          });
        }
        Util.each(model.children, function (child) {
          var data = _this3.parseSource({
            roots: [child]
          });
          _this3.addItems('node', data.nodes);
          _this3.addItems('edge', data.edges);
        });
      }

      // set node nth
      if (!Util.isNil(model.nth)) {
        this.setNodeNth(item, model.nth);
      }
      var parentItem = this.find(itemModel.parent);
      parentItem && parentItem.forceUpdate();
    }

    this.emit('afterchange', ev);
    this.draw();
    return this;
  };
  /**
   * @param {String|Item} item target item
   * @return {Graph} this
   */


  Tree.prototype.remove = function remove(item) {
    var dataMap = this.get('_dataMap');
    var items = [];
    item = this.getItem(item);
    if (!item || item.destroyed) {
      return;
    }
    var ev = {
      action: 'remove',
      item: item
    };
    this.emit('beforechange', ev);
    items.push(item);
    item.getEdges().forEach(function (edge) {
      items.push(edge);
    });
    if (item.type === 'node') {
      var model = item.getModel();
      var parent = dataMap[model.parent];
      item.deepEach(function (child) {
        items.push(child);
        child.getEdges().forEach(function (edge) {
          items.push(edge);
        });
      });
      Util.Array.remove(parent.children, model);
      this.find(parent.id).forceUpdate();
    }
    this.removeItems(Util.uniq(items));
    this.emit('afterchange', ev);
    this.draw();
    return this;
  };

  Tree.prototype.getRoots = function getRoots() {
    var _this4 = this;

    var source = this.getSource();
    return source.roots.map(function (root) {
      return _this4.find(root.id);
    });
  };

  Tree.prototype.save = function save() {
    var rst = {
      roots: Util.cloneDeep(this.getSource().roots),
      guides: this.getGuides().map(function (guide) {
        return guide.getModel();
      })
    };
    rst.roots.length === 0 && delete rst.roots;
    rst.guides.length === 0 && delete rst.guides;
    return rst;
  };

  return Tree;
}(Graph);

module.exports = Tree;

/***/ }),

/***/ "./src/util/animate.js":
/*!*****************************!*\
  !*** ./src/util/animate.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Global = __webpack_require__(/*! ../global */ "./src/global.js");

module.exports = {
  /**
   * scale in animate
   * @param  {object}  element g element
   * @param  {object}  x to x
   * @param  {object}  y to y
   * @param  {object}  centerX scale centerX
   * @param  {object}  centerY scale centerY
   */
  scaleIn: function scaleIn(element, x, y, centerX, centerY) {
    centerX = centerX ? centerX : x;
    centerY = centerY ? centerY : y;
    element.transform([['t', -centerX, -centerY], ['s', 0.01, 0.01], ['t', x, y]]);
    element && !element.get('destroyed') && element.animate({
      transform: [['t', -x, -y], ['s', 100, 100], ['t', centerX, centerY]]
    }, Global.enterDuration, Global.enterEasing);
  },

  /**
   * scale out animate
   * @param  {object}  element g element
   * @param  {object}  x to x
   * @param  {object}  y to y
   * @param  {object}  centerX scale centerX
   * @param  {object}  centerY scale centerY
   */
  scaleOut: function scaleOut(element, x, y, centerX, centerY) {
    centerX = centerX ? centerX : x;
    centerY = centerY ? centerY : y;
    element && !element.get('destroyed') && element.animate({
      transform: [['t', -centerX, -centerY], ['s', 0.01, 0.01], ['t', x, y]]
    }, Global.leaveDuration, Global.leaveEasing, function () {
      element.remove();
    });
  }
};

/***/ }),

/***/ "./src/util/base.js":
/*!**************************!*\
  !*** ./src/util/base.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * @fileOverview The BaseUtil method based on the lodash.
 * @author huangtonger@aliyun.com
 * @see https://github.com/lodash/lodash
 */
var MAX_LEVEL = 5;
var G = __webpack_require__(/*! @antv/g */ "./node_modules/@antv/g/build/g.js");

var BaseUtil = _extends({}, G.CommonUtil, {
  lowerFirst: __webpack_require__(/*! lodash/lowerFirst */ "./node_modules/lodash/lowerFirst.js"),
  isPlainObject: __webpack_require__(/*! lodash/isPlainObject */ "./node_modules/lodash/isPlainObject.js"),
  indexOf: __webpack_require__(/*! lodash/indexOf */ "./node_modules/lodash/indexOf.js"),
  cloneDeep: __webpack_require__(/*! lodash/cloneDeep */ "./node_modules/lodash/cloneDeep.js"),
  round: __webpack_require__(/*! lodash/round */ "./node_modules/lodash/round.js"),
  filter: __webpack_require__(/*! lodash/filter */ "./node_modules/lodash/filter.js"),
  throttle: __webpack_require__(/*! lodash/throttle */ "./node_modules/lodash/throttle.js"),
  debounce: __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js"),
  uniq: __webpack_require__(/*! lodash/uniq */ "./node_modules/lodash/uniq.js"),

  /**
   * traverse tree
   * @param  {object}      parent      parent
   * @param  {function}    callback    callback
   * @param  {function}    getChild    get child function
   * @param  {boolean}     runSelf     callback run self or not
   */
  traverseTree: function traverseTree(parent, callback, getChild) {
    var runSelf = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

    var children = getChild(parent);
    runSelf && callback(parent, null, null);
    children && BaseUtil.each(children, function (child, index) {
      callback(child, parent, index);
      BaseUtil.traverseTree(child, callback, getChild);
    });
  },


  /**
   * turn padding into [top, right, bottom, right]
   * @param  {Number|Array} padding input padding
   * @return {array} output
   */
  toAllPadding: function toAllPadding(padding) {
    var top = 0;
    var left = 0;
    var right = 0;
    var bottom = 0;

    if (BaseUtil.isNumber(padding) || BaseUtil.isString(padding)) {
      top = left = right = bottom = padding;
    } else if (BaseUtil.isArray(padding)) {
      top = padding[0];
      right = !BaseUtil.isNil(padding[1]) ? padding[1] : padding[0];
      bottom = !BaseUtil.isNil(padding[2]) ? padding[2] : padding[0];
      left = !BaseUtil.isNil(padding[3]) ? padding[3] : right;
    }
    return [top, right, bottom, left];
  },


  /**
   * create random id
   * @return {string} random id
   */
  guid: function guid() {
    return 'xxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0;
      var v = c === 'x' ? r : r & 0x3 | 0x8;
      return v.toString(16);
    });
  },


  /**
   * merge data
   * @return {object} merged data
   */
  mix: function mix() {
    var args = BaseUtil.toArray(arguments);
    var obj = args[0];
    var source = void 0;
    var i = void 0;
    if (obj === true) {
      obj = args[1];
      for (i = 2; i < args.length; i++) {
        source = args[i];
        deepMix(obj, source);
      }
    } else {
      for (i = 1; i < args.length; i++) {
        source = args[i];
        for (var k in source) {
          if (source.hasOwnProperty(k) && k !== 'constructor') {
            obj[k] = source[k];
          }
        }
      }
    }
    return obj;
  },


  /**
   * mix in
   * @param {function} c Function
   * @param {array} mixins mixin array
   */
  mixin: function mixin(c, mixins) {
    if (c && mixins) {
      c._mixins = mixins;
      c.ATTRS = c.ATTRS || {};
      var temp = {};
      BaseUtil.each(mixins, function (mixin) {
        BaseUtil.augment(c, mixin);
      });
      c.ATTRS = BaseUtil.mix(temp, c.ATTRS);
    }
  }
});

function deepMix(dst, src, level) {
  level = level || 0;
  for (var k in src) {
    if (src.hasOwnProperty(k)) {
      var value = src[k];
      if (value !== null && BaseUtil.isPlainObject(value)) {
        if (!BaseUtil.isPlainObject(dst[k])) {
          dst[k] = {};
        }
        if (level < MAX_LEVEL) {
          deepMix(dst[k], src[k], level + 1);
        } else {
          dst[k] = src[k];
        }
      } else if (BaseUtil.isArray(value)) {
        dst[k] = [];
        dst[k] = dst[k].concat(value);
      } else if (value !== undefined) {
        dst[k] = src[k];
      }
    }
  }
}

BaseUtil.Array = {
  remove: function remove(arr, obj) {
    var index = BaseUtil.indexOf(arr, obj);
    if (index !== -1) {
      arr.splice(index, 1);
    }
  }
};

module.exports = BaseUtil;

/***/ }),

/***/ "./src/util/dom.js":
/*!*************************!*\
  !*** ./src/util/dom.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview dom util
 * @author huangtonger@aliyun.com
 */

var G = __webpack_require__(/*! @antv/g */ "./node_modules/@antv/g/build/g.js");
var BaseUtil = __webpack_require__(/*! ./base */ "./src/util/base.js");
var DomUtil = {};
BaseUtil.mix(DomUtil, G.DomUtil, {
  /**
   * add event listener
   * @param  {object} target - event source
   * @param  {object} eventType - event type
   * @param  {funtion} callback - event callback
   * @return {object} - event object that has remove function
   */
  addEventListener: function addEventListener(target, eventType, callback) {
    if (target.addEventListener) {
      target.addEventListener(eventType, callback, false);
      return {
        remove: function remove() {
          target.removeEventListener(eventType, callback, false);
        }
      };
    } else if (target.attachEvent) {
      target.attachEvent('on' + eventType, callback);
      return {
        remove: function remove() {
          target.detachEvent('on' + eventType, callback);
        }
      };
    }
  },

  /**
   * create dom by string
   * @param  {string}  str dom string
   * @param  {object}  css css
   * @return  {domobject}  dom
   */
  createDOM: function createDOM(str, css) {
    var dom = void 0;
    if (BaseUtil.isString(str)) {
      dom = G.DomUtil.createDom(str);
    } else {
      dom = str;
    }
    dom.bbox = dom.getBoundingClientRect();
    dom.hide = function () {
      dom.style.visibility = 'hidden';
      return dom;
    };
    dom.show = function () {
      dom.style.visibility = 'visible';
      return dom;
    };
    dom.css = function (obj) {
      G.DomUtil.modifyCSS(dom, obj);
      return dom;
    };
    dom.width = function () {
      return G.DomUtil.getWidth(dom);
    };
    dom.height = function () {
      return G.DomUtil.getHeight(dom);
    };
    dom.destroy = function () {
      dom.parentNode && dom.parentNode.removeChild(dom);
    };
    dom.on = function (eventType, callback) {
      dom.addEventListener(eventType, callback);
    };
    dom.off = function (eventType, callback) {
      dom.removeEventListener(eventType, callback);
    };
    dom.attr = function (attrName) {
      return dom.getAttribute(attrName);
    };
    dom.css(css);
    return dom;
  }
});
module.exports = DomUtil;

/***/ }),

/***/ "./src/util/graph.js":
/*!***************************!*\
  !*** ./src/util/graph.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview graph util
 * @author huangtonger@aliyun.com
 */

var BaseUtil = __webpack_require__(/*! ./base */ "./src/util/base.js");
var DomUtil = __webpack_require__(/*! ./dom */ "./src/util/dom.js");

module.exports = {
  /**
   * determine whether a node
   * @param  {object}  item item
   * @return {boolean} bool
   */
  isNode: function isNode(item) {
    return item && BaseUtil.isObject(item) && item.type === 'node';
  },

  /**
   * determine whether a edge
   * @param  {object}  item item
   * @return {boolean} bool
   */
  isEdge: function isEdge(item) {
    return item && BaseUtil.isObject(item) && item.type === 'edge';
  },

  /**
   * determine whether a group
   * @param  {object}  item item
   * @return {boolean} bool
   */
  isGroup: function isGroup(item) {
    return item && BaseUtil.isObject(item) && item.type === 'group';
  },

  /**
   * graph to Canvas
   * @param  {object}  options item
   * @return {domobject} canvas
   */
  graph2Canvas: function graph2Canvas(options) {
    options = BaseUtil.mix({
      graph: null,
      width: null,
      height: null,
      canvas: null,
      minMaxZoom: Infinity,
      minMinZoom: 0,
      pixelRatio: 2,
      beforeTransform: function beforeTransform() {},
      afterTransform: function afterTransform() {}
    }, options);
    var _options = options,
        graph = _options.graph,
        width = _options.width,
        height = _options.height,
        canvas = _options.canvas,
        minMaxZoom = _options.minMaxZoom,
        minMinZoom = _options.minMinZoom,
        pixelRatio = _options.pixelRatio,
        beforeTransform = _options.beforeTransform,
        afterTransform = _options.afterTransform;

    var graphCanvas = graph.getCanvas();
    var tranScale = void 0;
    if (!canvas) {
      var containerDOM = DomUtil.createDOM('<canvas></canvas>');
      var graphPixelRatio = graphCanvas.get('pixelRatio');
      tranScale = pixelRatio / graphPixelRatio;
      graphCanvas.scale(tranScale, tranScale);
      var Constructor = graph.getConstructor('Canvas');
      canvas = new Constructor({
        containerDOM: containerDOM,
        width: width * tranScale,
        height: height * tranScale
      });
    }
    var miniMapCanvasContext = canvas.get('context');
    var graphCanvasContext = graphCanvas.get('context');
    var graphWidth = graph.get('width');
    var graphHeight = graph.get('height');
    var matrixCache = BaseUtil.cloneDeep(graph.getMatrix());
    var maxZoom = graph.get('maxZoom');
    var minZoom = graph.get('minZoom');
    var rootGroup = graph.getRootGroup();
    var events = graph._events;
    rootGroup.setSilent('freezable', false);
    graph.set('maxZoom', minMaxZoom);
    graph.set('minZoom', minMinZoom);
    graph.set('width', width);
    graph.set('height', height);
    graph._events = []; // tamper with the event
    if (graph.getItems().length > 0) {
      beforeTransform(graph);
      graphCanvas.set('context', miniMapCanvasContext);
      graph.autoZoom();
      canvas.matrix = BaseUtil.cloneDeep(graph.getMatrix());
    }

    graphCanvas.set('context', miniMapCanvasContext);
    graphCanvas.beforeDraw();
    graphCanvas.constructor.superclass.draw.call(graphCanvas, miniMapCanvasContext);
    rootGroup.setSilent('freezable', true);
    graph.set('width', graphWidth);
    graph.set('height', graphHeight);
    graph.set('maxZoom', maxZoom);
    graph.set('minZoom', minZoom);
    graph.updateMatrix(matrixCache);
    if (tranScale) {
      afterTransform(graph);
      graphCanvas.scale(1 / tranScale, 1 / tranScale);
    }
    graph._events = events;
    graphCanvas.set('context', graphCanvasContext);
    graphCanvas.draw();
    return canvas.get('el');
  }
};

/***/ }),

/***/ "./src/util/graphic.js":
/*!*****************************!*\
  !*** ./src/util/graphic.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview graphic util
 * @author huangtonger@aliyun.com
 */

var MathUtil = __webpack_require__(/*! ./math */ "./src/util/math.js");
var BaseUtil = __webpack_require__(/*! ./base */ "./src/util/base.js");
var GraphicUtil = {
  /**
   * get nine block box location
   * @param  {string} position could be 'tl' 'lc' 'bl' 'cc' 'tc' 'tr' 'rc' 'br' 'bc' default to be 'tl'
   * @param  {object} containerBox container box
   * @param  {number} width graph width
   * @param  {number} height graph height
   * @param  {array} padding padding
   * @return {object} left top point
   */
  getNineBoxPosition: function getNineBoxPosition(position, containerBox, width, height, padding) {
    var startPoint = {};
    switch (position) {
      case 'tl':
        startPoint.y = containerBox.x + padding[0];
        startPoint.x = containerBox.y + padding[3];
        break;
      case 'lc':
        startPoint.y = (containerBox.height - height) / 2;
        startPoint.x = padding[3];
        break;
      case 'bl':
        startPoint.y = containerBox.height - height - padding[2];
        startPoint.x = padding[3];
        break;
      case 'cc':
        startPoint.y = (containerBox.height - height) / 2;
        startPoint.x = (containerBox.width - width) / 2;
        break;
      case 'tc':
        startPoint.y = padding[0];
        startPoint.x = (containerBox.width - width) / 2;
        break;
      case 'tr':
        startPoint.y = padding[0];
        startPoint.x = containerBox.width - width - padding[1];
        break;
      case 'rc':
        startPoint.y = (containerBox.height - height) / 2;
        startPoint.x = containerBox.width - width - padding[1];
        break;
      case 'br':
        startPoint.y = containerBox.height - height - padding[2];
        startPoint.x = containerBox.width - width - padding[1];
        break;
      case 'bc':
        startPoint.y = containerBox.height - height - padding[2];
        startPoint.x = (containerBox.width - width) / 2;
        break;
      default:
        startPoint.y = containerBox.x + padding[0];
        startPoint.x = containerBox.y + padding[3];
        break;
    }
    startPoint.x += containerBox.x;
    startPoint.y += containerBox.y;
    return startPoint;
  },

  /**
   * get total bbox
   * @param  {array} boxes boxes
   * @return {object} box
   */
  getTotalBBox: function getTotalBBox(boxes) {
    var minX = Infinity;
    var maxX = -Infinity;
    var minY = Infinity;
    var maxY = -Infinity;
    boxes.forEach(function (box) {
      if (box.minX < minX) {
        minX = box.minX;
      }

      if (box.maxX > maxX) {
        maxX = box.maxX;
      }

      if (box.minY < minY) {
        minY = box.minY;
      }

      if (box.maxY > maxY) {
        maxY = box.maxY;
      }
    });
    return {
      minX: minX,
      minY: minY,
      maxX: maxX,
      maxY: maxY,
      width: maxX - minX,
      height: maxY - minY
    };
  },

  /**
   * get children bbox
   * @param  {array} children g children
   * @return {object} box
   */
  getChildrenBBox: function getChildrenBBox(children) {
    var minX = Infinity;
    var maxX = -Infinity;
    var minY = Infinity;
    var maxY = -Infinity;
    BaseUtil.each(children, function (child) {
      var box = child.isGroup ? GraphicUtil.getChildrenBBox(child.get('children')) : child.getBBox();
      if (!box) {
        return true;
      }
      var leftTop = [box.minX, box.minY, 1];
      var leftBottom = [box.minX, box.maxY, 1];
      var rightTop = [box.maxX, box.minY, 1];
      var rightBottom = [box.maxX, box.maxY, 1];

      child.apply(leftTop);
      child.apply(leftBottom);
      child.apply(rightTop);
      child.apply(rightBottom);

      var boxMinX = Math.min(leftTop[0], leftBottom[0], rightTop[0], rightBottom[0]);
      var boxMaxX = Math.max(leftTop[0], leftBottom[0], rightTop[0], rightBottom[0]);
      var boxMinY = Math.min(leftTop[1], leftBottom[1], rightTop[1], rightBottom[1]);
      var boxMaxY = Math.max(leftTop[1], leftBottom[1], rightTop[1], rightBottom[1]);

      if (boxMinX < minX) {
        minX = boxMinX;
      }

      if (boxMaxX > maxX) {
        maxX = boxMaxX;
      }

      if (boxMinY < minY) {
        minY = boxMinY;
      }

      if (boxMaxY > maxY) {
        maxY = boxMaxY;
      }
    });
    var box = {
      minX: minX,
      minY: minY,
      maxX: maxX,
      maxY: maxY
    };
    box.x = box.minX;
    box.y = box.minY;
    box.width = box.maxX - box.minX;
    box.height = box.maxY - box.minY;
    box.centerX = (box.minX + box.maxX) / 2;
    box.centerY = (box.minY + box.maxY) / 2;
    return box;
  },

  /**
   * get bbox apply root matrix
   * @param  {number} element g element
   * @param  {number} root    g group (should be element parent) or matix
   * @return {object} applied point
   */
  getBBox: function getBBox(element, root) {
    var bbox = element.getBBox();
    var leftTop = {
      x: bbox.minX,
      y: bbox.minY
    };
    var rightBottom = {
      x: bbox.maxX,
      y: bbox.maxY
    };
    var parent = void 0;
    if (root.isGroup) {
      parent = element;
      while (parent !== root) {
        var _matrix = parent.getMatrix();
        leftTop = MathUtil.applyMatrix(leftTop, _matrix);
        rightBottom = MathUtil.applyMatrix(rightBottom, _matrix);
        parent = parent.getParent();
      }
      var matrix = parent.getMatrix();
      leftTop = MathUtil.applyMatrix(leftTop, matrix);
      rightBottom = MathUtil.applyMatrix(rightBottom, matrix);
    } else {
      leftTop = MathUtil.applyMatrix(leftTop, root);
      rightBottom = MathUtil.applyMatrix(rightBottom, root);
    }
    return {
      minX: leftTop.x,
      minY: leftTop.y,
      maxX: rightBottom.x,
      maxY: rightBottom.y
    };
  },

  /**
   * element to back
   * @param  {object} element g shape or group
   * @param  {object} group g group
   */
  toBack: function toBack(element, group) {
    !group && (group = element.getParent());
    var children = group.get('children');
    BaseUtil.Array.remove(children, element);
    children.unshift(element);
  },

  /**
   * element to front
   * @param  {object} element g shape or group
   * @param  {object} group g group
   */
  toFront: function toFront(element, group) {
    !group && (group = element.getParent());
    var children = group.get('children');
    BaseUtil.Array.remove(children, element);
    children.push(element);
  }
};

module.exports = GraphicUtil;

/***/ }),

/***/ "./src/util/index.js":
/*!***************************!*\
  !*** ./src/util/index.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview util
 * @author huangtonger@aliyun.com
 */

var Util = {};
var MathUtil = __webpack_require__(/*! ./math */ "./src/util/math.js");
var PathUtil = __webpack_require__(/*! ./path */ "./src/util/path.js");
var BaseUtil = __webpack_require__(/*! ./base */ "./src/util/base.js");
var DomUtil = __webpack_require__(/*! ./dom */ "./src/util/dom.js");
var GraphUtil = __webpack_require__(/*! ./graph */ "./src/util/graph.js");
var GraphicUtil = __webpack_require__(/*! ./graphic */ "./src/util/graphic.js");
var AnimateUtil = __webpack_require__(/*! ./animate */ "./src/util/animate.js");
BaseUtil.mix(Util, BaseUtil, GraphUtil, GraphicUtil, DomUtil, PathUtil, MathUtil, AnimateUtil);
module.exports = Util;

/***/ }),

/***/ "./src/util/math.js":
/*!**************************!*\
  !*** ./src/util/math.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview math util
 * @author huangtonger@aliyun.com
 */

var G = __webpack_require__(/*! @antv/g */ "./node_modules/@antv/g/build/g.js");
var BaseUtil = __webpack_require__(/*! ./base */ "./src/util/base.js");
var tolerance = 0.001;
var MathUtil = {
  /**
   * 是否在区间内
   * @param   {number}       value  值
   * @param   {number}       min    最小值
   * @param   {number}       max    最大值
   * @return  {boolean}      bool   布尔
   */
  isBetween: function isBetween(value, min, max) {
    return value >= min && value <= max;
  },

  /**
   * 两线段交点
   * @param  {object}  p0 第一条线段起点
   * @param  {object}  p1 第一条线段终点
   * @param  {object}  p2 第二条线段起点
   * @param  {object}  p3 第二条线段终点
   * @return {object}  交点
   */
  getLineIntersect: function getLineIntersect(p0, p1, p2, p3) {
    var E = {
      x: p2.x - p0.x,
      y: p2.y - p0.y
    };
    var D0 = {
      x: p1.x - p0.x,
      y: p1.y - p0.y
    };
    var D1 = {
      x: p3.x - p2.x,
      y: p3.y - p2.y
    };
    var kross = D0.x * D1.y - D0.y * D1.x;
    var sqrKross = kross * kross;
    var sqrLen0 = D0.x * D0.x + D0.y * D0.y;
    var sqrLen1 = D1.x * D1.x + D1.y * D1.y;
    var point = null;
    if (sqrKross > tolerance * sqrLen0 * sqrLen1) {
      var s = (E.x * D1.y - E.y * D1.x) / kross;
      var t = (E.x * D0.y - E.y * D0.x) / kross;
      if (MathUtil.isBetween(s, 0, 1) && MathUtil.isBetween(t, 0, 1)) {
        point = {
          x: p0.x + s * D0.x,
          y: p0.y + s * D0.y
        };
      }
    }
    return point;
  },

  /**
   * point and rectangular intersection point
   * @param  {object} rect  rect
   * @param  {object} point point
   * @return {object} rst;
   */
  getIntersectPointRect: function getIntersectPointRect(rect, point) {
    var x = rect.minX;
    var y = rect.minY;
    var width = rect.maxX - rect.minX;
    var height = rect.maxY - rect.minY;
    var cx = x + width / 2;
    var cy = y + height / 2;
    var points = [];
    var center = {
      x: cx,
      y: cy
    };
    points.push({
      x: x,
      y: y
    });
    points.push({
      x: x + width,
      y: y
    });
    points.push({
      x: x + width,
      y: y + height
    });
    points.push({
      x: x,
      y: y + height
    });
    points.push({
      x: x,
      y: y
    });
    var rst = null;
    for (var i = 1; i < points.length; i++) {
      rst = MathUtil.getLineIntersect(points[i - 1], points[i], center, point);
      if (rst) {
        break;
      }
    }
    return rst;
  },

  /**
   * get point and circle inIntersect
   * @param  {number} x   point x
   * @param  {number} y   point y
   * @param  {number} cx  circle center x
   * @param  {number} cy  circle center y
   * @param  {number} cr  circle radius
   * @return {object} applied point
   */
  getIntersectPointCircle: function getIntersectPointCircle(x, y, cx, cy, cr) {
    var d = Math.sqrt(Math.pow(x - cx, 2) + Math.pow(y - cy, 2));
    if (d < cr) {
      return null;
    }
    var dx = x - cx;
    var dy = y - cy;
    var signX = Math.sign(dx);
    var signY = Math.sign(dy);
    var angle = Math.atan(dy / dx);
    return {
      x: cx + Math.abs(cr * Math.cos(angle)) * signX,
      y: cy + Math.abs(cr * Math.sin(angle)) * signY
    };
  },

  /**
   * coordinate matrix transformation
   * @param  {number} point   coordinate
   * @param  {number} matrix  matrix
   * @param  {number} tag     could be 0 or 1
   * @return {object} transformed point
   */
  applyMatrix: function applyMatrix(point, matrix) {
    var tag = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    var vector = [point.x, point.y, tag];
    G.MatrixUtil.vec3.transformMat3(vector, vector, matrix);
    return {
      x: vector[0],
      y: vector[1]
    };
  },

  /**
   * coordinate matrix invert transformation
   * @param  {number} point   coordinate
   * @param  {number} matrix  matrix
   * @param  {number} tag     could be 0 or 1
   * @return {object} transformed point
   */
  invertMatrix: function invertMatrix(point, matrix) {
    var tag = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;

    var inversedMatrix = G.MatrixUtil.mat3.invert([], matrix);
    var vector = [point.x, point.y, tag];
    G.MatrixUtil.vec3.transformMat3(vector, vector, inversedMatrix);
    return {
      x: vector[0],
      y: vector[1]
    };
  },

  /**
   * radix sort
   * @param  {array} arr unsorted child node set
   * @param  {function} callback callback
   * @return {array} after sorting child node set
   */
  radixSort: function radixSort(arr, callback) {
    var mod = 10;
    var dev = 1;
    var counter = []; // 桶
    var maxDigit = 1; // 最大位数
    var rank = void 0;
    var length = void 0;
    var i = void 0;
    var j = void 0;
    var bucket = void 0;
    var pos = void 0;
    var value = void 0;

    for (i = 0; i < arr.length; i++) {
      rank = callback(arr[i]);
      rank = parseInt(rank, 10);
      length = rank.toString().length;
      if (rank.toString().length > maxDigit) {
        maxDigit = length;
      }
    }
    for (i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
      for (j = 0; j < arr.length; j++) {
        bucket = callback(arr[j]);
        bucket = parseInt(bucket % mod / dev, 10);
        if (counter[bucket] === undefined) {
          counter[bucket] = [];
        }
        counter[bucket].push(arr[j]);
      }
      pos = 0;
      for (j = 0; j < counter.length; j++) {
        value = undefined;
        if (counter[j] !== undefined) {
          value = counter[j].shift();
          while (value !== undefined) {
            arr[pos++] = value;
            value = counter[j].shift();
          }
        }
      }
    }
    return arr;
  },

  /**
    * get arc of two vertors
    * @param {object} vector1 - vector1
    * @param {object} vector2 - vector2
    * @return {number} - arc
    */
  getArcOfVectors: function getArcOfVectors(vector1, vector2) {
    var x1 = vector1.x,
        y1 = vector1.y;
    var x2 = vector2.x,
        y2 = vector2.y;

    var v1 = Math.sqrt(x1 * x1 + y1 * y1);
    var v2 = Math.sqrt(x2 * x2 + y2 * y2);
    return Math.acos((x1 * x2 + y1 * y2) / (v1 * v2));
  }
};
module.exports = BaseUtil.mix({}, G.MatrixUtil, MathUtil);

/***/ }),

/***/ "./src/util/path.js":
/*!**************************!*\
  !*** ./src/util/path.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * @fileOverview path util
 * @author huangtonger@aliyun.com
 */

var G = __webpack_require__(/*! @antv/g */ "./node_modules/@antv/g/build/g.js");
var BaseUtil = __webpack_require__(/*! ./base */ "./src/util/base.js");
var PathUtil = {};

BaseUtil.mix(PathUtil, G.PathUtil, {
  getRectPath: G.PathUtil.rectPath,
  /**
   * points to polygon
   * TODO improve performance
   * @param {array}  points input points
   * @param {Boolen} z if close path
   * @return {string} Path
   */
  pointsToPolygon: function pointsToPolygon(points) {
    var path = [['M', points[0].x, points[0].y]];
    for (var index = 1; index < points.length; index++) {
      var point = points[index];
      path.push(['L', point.x, point.y]);
    }
    return path;
  },

  /**
   * get ellipse path
   * @param {number} x  horizontal coordinates
   * @param {number} y  vertical coordinates
   * @param {number} rx horizontal radius
   * @param {number} ry vertical radius
   * @return {array} path
   */
  getEllipsePath: function getEllipsePath(x, y, rx, ry) {
    var rst = [['M', x, y - ry], ['a', rx, ry, 0, 1, 1, 0, 2 * ry], ['a', rx, ry, 0, 1, 1, 0, -2 * ry], ['z']];
    return rst;
  }
  // /**
  //  * path translate
  //  * @param {array} segments path segments
  //  * @param {number} x translate x distance
  //  * @param {number} y translate y distance
  //  * @return {array} path
  //  */
  // pathTranslate(segments, x, y) {
  //   // y is optional
  //   y = y || 0;

  //   return segments.map(function(segment) {
  //     const cmd = segment[0];

  //     // Shift coords only for commands with absolute values
  //     if ('ACHLMRQSTVZ'.indexOf(cmd) === -1) {
  //       return segment;
  //     }

  //     const name = cmd.toLowerCase();

  //     // V is the only command, with shifted coords parity
  //     if (name === 'v') {
  //       segment[1] += y;
  //       return segment;
  //     }

  //     // ARC is: ['A', rx, ry, x-axis-rotation, large-arc-flag, sweep-flag, x, y]
  //     // touch x, y only
  //     if (name === 'a') {
  //       segment[6] += x;
  //       segment[7] += y;
  //       return segment;
  //     }

  //     return segment.map(function(val, i) {
  //       if (!i) {
  //         return val;
  //       }
  //       return i % 2 ? val + x : val + y;
  //     });
  //   });
  // },
  // /**
  //  * path scale
  //  * @param {array} segments path segments
  //  * @param {number} sx scalex
  //  * @param {number} sy scaley
  //  * @return {array} path
  //  */
  // pathScale(segments, sx, sy) {
  //   sy = (!sy && (sy !== 0)) ? sx : sy;

  //   return segments.map(function(segment) {
  //     const name = segment[0].toLowerCase();

  //     // V & v are the only command, with shifted coords parity
  //     if (name === 'v') {
  //       segment[1] *= sy;
  //       return segment;
  //     }

  //     // ARC is: ['A', rx, ry, x-axis-rotation, large-arc-flag, sweep-flag, x, y]
  //     // touch rx, ry, x, y only
  //     if (name === 'a') {
  //       segment[1] *= sx;
  //       segment[2] *= sy;
  //       segment[6] *= sx;
  //       segment[7] *= sy;
  //       return segment;
  //     }

  //     return segment.map(function(val, i) {
  //       if (!i) {
  //         return val;
  //       }
  //       return (val *= i % 2 ? sx : sy);
  //     });
  //   });
  // },

});

module.exports = PathUtil;

/***/ }),

/***/ "./src/version.js":
/*!************************!*\
  !*** ./src/version.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = '2.0.5';

/***/ })

/******/ });
});
//# sourceMappingURL=g6.js.map