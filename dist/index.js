(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define("dyna-fast-click", ["react"], factory);
	else if(typeof exports === 'object')
		exports["dyna-fast-click"] = factory(require("react"));
	else
		root["dyna-fast-click"] = factory(root["react"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE_3__) {
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DynaFastClick_1 = __webpack_require__(2);
exports.DynaFastClick = DynaFastClick_1.DynaFastClick;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(3);
var CONSOLE_DEBUG = false;
var DynaFastClick = /** @class */ (function (_super) {
    __extends(DynaFastClick, _super);
    function DynaFastClick(props) {
        var _this = _super.call(this, props) || this;
        _this.baseClassName = "my-button";
        _this.className = function (subClassName, active) {
            if (subClassName === void 0) { subClassName = ""; }
            if (active === void 0) { active = true; }
            return active ? "" + _this.baseClassName + subClassName : "";
        };
        _this.touchApplied = false;
        _this.handleClick = _this.handleClick.bind(_this);
        _this.handleTouchStart = _this.handleTouchStart.bind(_this);
        _this.handleTouchEnd = _this.handleTouchEnd.bind(_this);
        _this.handleTouchMove = _this.handleTouchMove.bind(_this);
        _this.handleTouchCancel = _this.handleTouchCancel.bind(_this);
        return _this;
    }
    DynaFastClick.prototype.triggerClick = function () {
        this.props.onClick();
    };
    DynaFastClick.prototype.handleClick = function () {
        if (CONSOLE_DEBUG)
            console.debug('handle - click');
        if (this.touchApplied) {
            this.touchApplied = false;
            return;
        }
        this.touchApplied = false;
        this.triggerClick();
    };
    DynaFastClick.prototype.handleTouchStart = function () {
        var _this = this;
        if (CONSOLE_DEBUG)
            console.debug('this.props.touchTimeout', this.props.touchTimeout);
        this.touchApplied = true;
        this.touchStartTimer = setTimeout(function () {
            _this.triggerClick();
        }, this.props.touchTimeout);
        if (CONSOLE_DEBUG)
            console.debug('handle - start');
    };
    DynaFastClick.prototype.handleTouchEnd = function () {
        if (CONSOLE_DEBUG)
            console.debug('handle - end');
        this.touchEnded = Number(new Date);
    };
    DynaFastClick.prototype.handleTouchMove = function () {
        if (CONSOLE_DEBUG)
            console.debug('handle - move');
        clearTimeout(this.touchStartTimer);
    };
    DynaFastClick.prototype.handleTouchCancel = function () {
        if (CONSOLE_DEBUG)
            console.debug('handle - cancel');
        clearTimeout(this.touchStartTimer);
    };
    DynaFastClick.prototype.render = function () {
        var _a = this.props, userClassName = _a.className, children = _a.children;
        var className = [
            userClassName,
            this.className(),
        ].join(' ').trim();
        return (React.createElement("span", { className: className, onClick: this.handleClick, onTouchStart: this.handleTouchStart, onTouchEnd: this.handleTouchEnd, onTouchMove: this.handleTouchMove, onTouchCancel: this.handleTouchCancel }, children));
    };
    DynaFastClick.defaultProps = {
        className: "",
        touchTimeout: 120,
        children: null,
        onClick: function () { return undefined; },
    };
    return DynaFastClick;
}(React.Component));
exports.DynaFastClick = DynaFastClick;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ })
/******/ ]);
});