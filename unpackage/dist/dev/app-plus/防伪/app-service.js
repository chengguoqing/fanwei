var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
var Component = Component || function() {};
var definePlugin = definePlugin || function() {};
var requirePlugin = requirePlugin || function() {};
var Behavior = Behavior || function() {};
var $gwx;
 
      

define('common/manifest.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = global["webpackJsonp"];
/******/ 	global["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/ 		if(executeModules) {
/******/ 			for(i=0; i < executeModules.length; i++) {
/******/ 				result = __webpack_require__(__webpack_require__.s = executeModules[i]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		7: 0
/******/ 	};
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/ })
/************************************************************************/
/******/ ([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
global.webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {// fix env\r\ntry {\r\n    if (!global) global = {}\r\n    global.process = global.process || {}\r\n    global.process.env = global.process.env || {}\r\n    global.App = global.App || App\r\n    global.Page = global.Page || Page\r\n    global.Component = global.Component || Component\r\n    global.getApp = global.getApp || getApp\r\n} catch (e) {}\r\n\r\n;(function(global, factory) {\r\n     true\r\n        ? (module.exports = factory())\r\n        : typeof define === \"function\" && define.amd\r\n            ? define(factory)\r\n            : (global.Vue = factory())\r\n})(this, function() {\r\n    \"use strict\"\r\n\r\n    //fixed by xxxxxx\r\n    function calcDiff(holder, key, newObj, oldObj) {\r\n        if (newObj === oldObj || newObj === undefined) {\r\n            return\r\n        }\r\n\r\n        if (newObj == null || oldObj == null || typeof newObj !== typeof oldObj) {\r\n            holder[key] = newObj\r\n        } else if (Array.isArray(newObj) && Array.isArray(oldObj)) {\r\n            if (newObj.length === oldObj.length) {\r\n                for (var i = 0, len = newObj.length; i < len; ++i) {\r\n                    calcDiff(holder, key + \"[\" + i + \"]\", newObj[i], oldObj[i])\r\n                }\r\n            } else {\r\n                holder[key] = newObj\r\n            }\r\n        } else if (typeof newObj === \"object\" && typeof oldObj === \"object\") {\r\n            var newKeys = Object.keys(newObj)\r\n            var oldKeys = Object.keys(oldObj)\r\n\r\n            if (newKeys.length !== oldKeys.length) {\r\n                holder[key] = newObj\r\n            } else {\r\n                var allKeysSet = Object.create(null)\r\n                for (var i = 0, len = newKeys.length; i < len; ++i) {\r\n                    allKeysSet[newKeys[i]] = true\r\n                    allKeysSet[oldKeys[i]] = true\r\n                }\r\n                if (Object.keys(allKeysSet).length !== newKeys.length) {\r\n                    holder[key] = newObj\r\n                } else {\r\n                    for (var i = 0, len = newKeys.length; i < len; ++i) {\r\n                        var k = newKeys[i]\r\n                        calcDiff(holder, key + \".\" + k, newObj[k], oldObj[k])\r\n                    }\r\n                }\r\n            }\r\n        } else if (newObj !== oldObj) {\r\n            holder[key] = newObj\r\n        }\r\n    }\r\n\r\n    function diff(newObj, oldObj) {\r\n        var keys = Object.keys(newObj)\r\n        var diffResult = {}\r\n        for (var i = 0, len = keys.length; i < len; ++i) {\r\n            var k = keys[i]\r\n            var oldKeyPath = k.split(\".\")\r\n            var oldValue = oldObj[oldKeyPath[0]]\r\n            for (var j = 1, jlen = oldKeyPath.length; j < jlen && oldValue !== undefined; ++j) {\r\n                oldValue = oldValue[oldKeyPath[j]]\r\n            }\r\n            calcDiff(diffResult, k, newObj[k], oldValue)\r\n        }\r\n        return diffResult\r\n    }\r\n\r\n    /*  */\r\n\r\n    // these helpers produces better vm code in JS engines due to their\r\n    // explicitness and function inlining\r\n    function isUndef(v) {\r\n        return v === undefined || v === null\r\n    }\r\n\r\n    function isDef(v) {\r\n        return v !== undefined && v !== null\r\n    }\r\n\r\n    function isTrue(v) {\r\n        return v === true\r\n    }\r\n\r\n    function isFalse(v) {\r\n        return v === false\r\n    }\r\n\r\n    /**\r\n     * Check if value is primitive\r\n     */\r\n    function isPrimitive(value) {\r\n        return typeof value === \"string\" || typeof value === \"number\"\r\n    }\r\n\r\n    /**\r\n     * Quick object check - this is primarily used to tell\r\n     * Objects from primitive values when we know the value\r\n     * is a JSON-compliant type.\r\n     */\r\n    function isObject(obj) {\r\n        return obj !== null && typeof obj === \"object\"\r\n    }\r\n\r\n    var _toString = Object.prototype.toString\r\n\r\n    /**\r\n     * Strict object type check. Only returns true\r\n     * for plain JavaScript objects.\r\n     */\r\n    function isPlainObject(obj) {\r\n        return _toString.call(obj) === \"[object Object]\"\r\n    }\r\n\r\n    function isRegExp(v) {\r\n        return _toString.call(v) === \"[object RegExp]\"\r\n    }\r\n\r\n    /**\r\n     * Check if val is a valid array index.\r\n     */\r\n    function isValidArrayIndex(val) {\r\n        var n = parseFloat(val)\r\n        return n >= 0 && Math.floor(n) === n && isFinite(val)\r\n    }\r\n\r\n    /**\r\n     * Convert a value to a string that is actually rendered.\r\n     */\r\n    function toString(val) {\r\n        return val == null\r\n            ? \"\"\r\n            : typeof val === \"object\"\r\n                ? JSON.stringify(val, null, 2)\r\n                : String(val)\r\n    }\r\n\r\n    /**\r\n     * Convert a input value to a number for persistence.\r\n     * If the conversion fails, return original string.\r\n     */\r\n    function toNumber(val) {\r\n        var n = parseFloat(val)\r\n        return isNaN(n) ? val : n\r\n    }\r\n\r\n    /**\r\n     * Make a map and return a function for checking if a key\r\n     * is in that map.\r\n     */\r\n    function makeMap(str, expectsLowerCase) {\r\n        var map = Object.create(null)\r\n        var list = str.split(\",\")\r\n        for (var i = 0; i < list.length; i++) {\r\n            map[list[i]] = true\r\n        }\r\n        return expectsLowerCase\r\n            ? function(val) {\r\n                  return map[val.toLowerCase()]\r\n              }\r\n            : function(val) {\r\n                  return map[val]\r\n              }\r\n    }\r\n\r\n    /**\r\n     * Check if a tag is a built-in tag.\r\n     */\r\n    var isBuiltInTag = makeMap(\"slot,component\", true)\r\n\r\n    /**\r\n     * Check if a attribute is a reserved attribute.\r\n     */\r\n    var isReservedAttribute = makeMap(\"key,ref,slot,is\")\r\n\r\n    /**\r\n     * Remove an item from an array\r\n     */\r\n    function remove(arr, item) {\r\n        if (arr.length) {\r\n            var index = arr.indexOf(item)\r\n            if (index > -1) {\r\n                return arr.splice(index, 1)\r\n            }\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Check whether the object has the property.\r\n     */\r\n    var hasOwnProperty = Object.prototype.hasOwnProperty\r\n\r\n    function hasOwn(obj, key) {\r\n        return hasOwnProperty.call(obj, key)\r\n    }\r\n\r\n    /**\r\n     * Create a cached version of a pure function.\r\n     */\r\n    function cached(fn) {\r\n        var cache = Object.create(null)\r\n        return function cachedFn(str) {\r\n            var hit = cache[str]\r\n            return hit || (cache[str] = fn(str))\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Camelize a hyphen-delimited string.\r\n     */\r\n    var camelizeRE = /-(\\w)/g\r\n    var camelize = cached(function(str) {\r\n        return str.replace(camelizeRE, function(_, c) {\r\n            return c ? c.toUpperCase() : \"\"\r\n        })\r\n    })\r\n\r\n    /**\r\n     * Capitalize a string.\r\n     */\r\n    var capitalize = cached(function(str) {\r\n        return str.charAt(0).toUpperCase() + str.slice(1)\r\n    })\r\n\r\n    /**\r\n     * Hyphenate a camelCase string.\r\n     */\r\n    var hyphenateRE = /([^-])([A-Z])/g\r\n    var hyphenate = cached(function(str) {\r\n        return str\r\n            .replace(hyphenateRE, \"$1-$2\")\r\n            .replace(hyphenateRE, \"$1-$2\")\r\n            .toLowerCase()\r\n    })\r\n\r\n    /**\r\n     * Simple bind, faster than native\r\n     */\r\n    function bind(fn, ctx) {\r\n        function boundFn(a) {\r\n            var l = arguments.length\r\n            return l ? (l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a)) : fn.call(ctx)\r\n        }\r\n        // record original fn length\r\n        boundFn._length = fn.length\r\n        return boundFn\r\n    }\r\n\r\n    /**\r\n     * Convert an Array-like object to a real Array.\r\n     */\r\n    function toArray(list, start) {\r\n        start = start || 0\r\n        var i = list.length - start\r\n        var ret = new Array(i)\r\n        while (i--) {\r\n            ret[i] = list[i + start]\r\n        }\r\n        return ret\r\n    }\r\n\r\n    /**\r\n     * Mix properties into target object.\r\n     */\r\n    function extend(to, _from) {\r\n        for (var key in _from) {\r\n            to[key] = _from[key]\r\n        }\r\n        return to\r\n    }\r\n\r\n    /**\r\n     * Merge an Array of Objects into a single Object.\r\n     */\r\n    function toObject(arr) {\r\n        var res = {}\r\n        for (var i = 0; i < arr.length; i++) {\r\n            if (arr[i]) {\r\n                extend(res, arr[i])\r\n            }\r\n        }\r\n        return res\r\n    }\r\n\r\n    /**\r\n     * Perform no operation.\r\n     * Stubbing args to make Flow happy without leaving useless transpiled code\r\n     * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)\r\n     */\r\n    function noop(a, b, c) {}\r\n\r\n    /**\r\n     * Always return false.\r\n     */\r\n    var no = function(a, b, c) {\r\n        return false\r\n    }\r\n\r\n    /**\r\n     * Return same value\r\n     */\r\n    var identity = function(_) {\r\n        return _\r\n    }\r\n\r\n    /**\r\n     * Generate a static keys string from compiler modules.\r\n     */\r\n\r\n    /**\r\n     * Check if two values are loosely equal - that is,\r\n     * if they are plain objects, do they have the same shape?\r\n     */\r\n    function looseEqual(a, b) {\r\n        var isObjectA = isObject(a)\r\n        var isObjectB = isObject(b)\r\n        if (isObjectA && isObjectB) {\r\n            try {\r\n                return JSON.stringify(a) === JSON.stringify(b)\r\n            } catch (e) {\r\n                // possible circular reference\r\n                return a === b\r\n            }\r\n        } else if (!isObjectA && !isObjectB) {\r\n            return String(a) === String(b)\r\n        } else {\r\n            return false\r\n        }\r\n    }\r\n\r\n    function looseIndexOf(arr, val) {\r\n        for (var i = 0; i < arr.length; i++) {\r\n            if (looseEqual(arr[i], val)) {\r\n                return i\r\n            }\r\n        }\r\n        return -1\r\n    }\r\n\r\n    /**\r\n     * Ensure a function is called only once.\r\n     */\r\n    function once(fn) {\r\n        var called = false\r\n        return function() {\r\n            if (!called) {\r\n                called = true\r\n                fn.apply(this, arguments)\r\n            }\r\n        }\r\n    }\r\n\r\n    var SSR_ATTR = \"data-server-rendered\"\r\n\r\n    var ASSET_TYPES = [\"component\", \"directive\", \"filter\"]\r\n\r\n    var LIFECYCLE_HOOKS = [\r\n        \"beforeCreate\",\r\n        \"created\",\r\n        \"beforeMount\",\r\n        \"mounted\",\r\n        \"beforeUpdate\",\r\n        \"updated\",\r\n        \"beforeDestroy\",\r\n        \"destroyed\",\r\n        \"activated\",\r\n        \"deactivated\",\r\n        \"onLaunch\",\r\n        \"onLoad\",\r\n        \"onShow\",\r\n        \"onReady\",\r\n        \"onHide\",\r\n        \"onUnload\",\r\n        \"onPullDownRefresh\",\r\n        \"onReachBottom\",\r\n        \"onShareAppMessage\",\r\n        \"onPageScroll\",\r\n        \"onTabItemTap\",\r\n        \"attached\",\r\n        \"ready\",\r\n        \"moved\",\r\n        \"detached\",\r\n        \"onUniNViewMessage\", //fixed by xxxxxx\r\n        \"onNavigationBarButtonTap\", //fixed by xxxxxx\n        \"onBackPress\",//fixed by xxxxxx\r\n    ]\r\n\r\n    /*  */\r\n\r\n    var config = {\r\n        /**\r\n         * Option merge strategies (used in core/util/options)\r\n         */\r\n        optionMergeStrategies: Object.create(null),\r\n\r\n        /**\r\n         * Whether to suppress warnings.\r\n         */\r\n        silent: false,\r\n\r\n        /**\r\n         * Show production mode tip message on boot?\r\n         */\r\n        productionTip: \"production\" !== \"production\",\r\n\r\n        /**\r\n         * Whether to enable devtools\r\n         */\r\n        devtools: \"production\" !== \"production\",\r\n\r\n        /**\r\n         * Whether to record perf\r\n         */\r\n        performance: false,\r\n\r\n        /**\r\n         * Error handler for watcher errors\r\n         */\r\n        errorHandler: null,\r\n\r\n        /**\r\n         * Warn handler for watcher warns\r\n         */\r\n        warnHandler: null,\r\n\r\n        /**\r\n         * Ignore certain custom elements\r\n         */\r\n        ignoredElements: [],\r\n\r\n        /**\r\n         * Custom user key aliases for v-on\r\n         */\r\n        keyCodes: Object.create(null),\r\n\r\n        /**\r\n         * Check if a tag is reserved so that it cannot be registered as a\r\n         * component. This is platform-dependent and may be overwritten.\r\n         */\r\n        isReservedTag: no,\r\n\r\n        /**\r\n         * Check if an attribute is reserved so that it cannot be used as a component\r\n         * prop. This is platform-dependent and may be overwritten.\r\n         */\r\n        isReservedAttr: no,\r\n\r\n        /**\r\n         * Check if a tag is an unknown element.\r\n         * Platform-dependent.\r\n         */\r\n        isUnknownElement: no,\r\n\r\n        /**\r\n         * Get the namespace of an element\r\n         */\r\n        getTagNamespace: noop,\r\n\r\n        /**\r\n         * Parse the real tag name for the specific platform.\r\n         */\r\n        parsePlatformTagName: identity,\r\n\r\n        /**\r\n         * Check if an attribute must be bound using property, e.g. value\r\n         * Platform-dependent.\r\n         */\r\n        mustUseProp: no,\r\n\r\n        /**\r\n         * Exposed for legacy reasons\r\n         */\r\n        _lifecycleHooks: LIFECYCLE_HOOKS\r\n    }\r\n\r\n    /*  */\r\n\r\n    var emptyObject = Object.freeze({})\r\n\r\n    /**\r\n     * Check if a string starts with $ or _\r\n     */\r\n    function isReserved(str) {\r\n        var c = (str + \"\").charCodeAt(0)\r\n        return c === 0x24 || c === 0x5f\r\n    }\r\n\r\n    /**\r\n     * Define a property.\r\n     */\r\n    function def(obj, key, val, enumerable) {\r\n        Object.defineProperty(obj, key, {\r\n            value: val,\r\n            enumerable: !!enumerable,\r\n            writable: true,\r\n            configurable: true\r\n        })\r\n    }\r\n\r\n    /**\r\n     * Parse simple path.\r\n     */\r\n    var bailRE = /[^\\w.$]/\r\n\r\n    function parsePath(path) {\r\n        if (bailRE.test(path)) {\r\n            return\r\n        }\r\n        var segments = path.split(\".\")\r\n        return function(obj) {\r\n            for (var i = 0; i < segments.length; i++) {\r\n                if (!obj) {\r\n                    return\r\n                }\r\n                obj = obj[segments[i]]\r\n            }\r\n            return obj\r\n        }\r\n    }\r\n\r\n    /*  */\r\n\r\n    var warn = noop\r\n\r\n    var formatComponentName = null // work around flow check\r\n\r\n    /*  */\r\n\r\n    function handleError(err, vm, info) {\r\n        if (config.errorHandler) {\r\n            config.errorHandler.call(null, err, vm, info)\r\n        } else {\r\n            if (inBrowser && typeof console !== \"undefined\") {\r\n                console.error(err)\r\n            } else {\r\n                throw err\r\n            }\r\n        }\r\n    }\r\n\r\n    /*  */\r\n\r\n    // can we use __proto__?\r\n    var hasProto = \"__proto__\" in {}\r\n\r\n    // Browser environment sniffing\r\n    var inBrowser = typeof window !== \"undefined\"\r\n    var UA = [\"mpvue-runtime\"].join()\r\n    var isIE = UA && /msie|trident/.test(UA)\r\n    var isIE9 = UA && UA.indexOf(\"msie 9.0\") > 0\r\n    var isEdge = UA && UA.indexOf(\"edge/\") > 0\r\n    var isAndroid = UA && UA.indexOf(\"android\") > 0\r\n    var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA)\r\n    var isChrome = UA && /chrome\\/\\d+/.test(UA) && !isEdge\r\n\r\n    // Firefix has a \"watch\" function on Object.prototype...\r\n    var nativeWatch = {}.watch\r\n\r\n    var supportsPassive = false\r\n    if (inBrowser) {\r\n        try {\r\n            var opts = {}\r\n            Object.defineProperty(opts, \"passive\", {\r\n                get: function get() {\r\n                    /* istanbul ignore next */\r\n                    supportsPassive = true\r\n                }\r\n            }) // https://github.com/facebook/flow/issues/285\r\n            window.addEventListener(\"test-passive\", null, opts)\r\n        } catch (e) {}\r\n    }\r\n\r\n    // this needs to be lazy-evaled because vue may be required before\r\n    // vue-server-renderer can set VUE_ENV\r\n    var _isServer\r\n    var isServerRendering = function() {\r\n        if (_isServer === undefined) {\r\n            /* istanbul ignore if */\r\n            if (!inBrowser && typeof global !== \"undefined\") {\r\n                // detect presence of vue-server-renderer and avoid\r\n                // Webpack shimming the process\r\n                _isServer = global[\"process\"].env.VUE_ENV === \"server\"\r\n            } else {\r\n                _isServer = false\r\n            }\r\n        }\r\n        return _isServer\r\n    }\r\n\r\n    // detect devtools\r\n    var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__\r\n\r\n    /* istanbul ignore next */\r\n    function isNative(Ctor) {\r\n        return typeof Ctor === \"function\" && /native code/.test(Ctor.toString())\r\n    }\r\n\r\n    var hasSymbol =\r\n        typeof Symbol !== \"undefined\" &&\r\n        isNative(Symbol) &&\r\n        typeof Reflect !== \"undefined\" &&\r\n        isNative(Reflect.ownKeys)\r\n\r\n    /**\r\n     * Defer a task to execute it asynchronously.\r\n     */\r\n    var nextTick = (function() {\r\n        var callbacks = []\r\n        var pending = false\r\n        var timerFunc\r\n\r\n        function nextTickHandler() {\r\n            pending = false\r\n            var copies = callbacks.slice(0)\r\n            callbacks.length = 0\r\n            for (var i = 0; i < copies.length; i++) {\r\n                copies[i]()\r\n            }\r\n        }\r\n\r\n        // the nextTick behavior leverages the microtask queue, which can be accessed\r\n        // via either native Promise.then or MutationObserver.\r\n        // MutationObserver has wider support, however it is seriously bugged in\r\n        // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It\r\n        // completely stops working after triggering a few times... so, if native\r\n        // Promise is available, we will use it:\r\n        /* istanbul ignore if */\r\n        if (typeof Promise !== \"undefined\" && isNative(Promise)) {\r\n            var p = Promise.resolve()\r\n            var logError = function(err) {\r\n                console.error(err)\r\n            }\r\n            timerFunc = function() {\r\n                p.then(nextTickHandler).catch(logError)\r\n                // in problematic UIWebViews, Promise.then doesn't completely break, but\r\n                // it can get stuck in a weird state where callbacks are pushed into the\r\n                // microtask queue but the queue isn't being flushed, until the browser\r\n                // needs to do some other work, e.g. handle a timer. Therefore we can\r\n                // \"force\" the microtask queue to be flushed by adding an empty timer.\r\n                if (isIOS) {\r\n                    setTimeout(noop)\r\n                }\r\n            }\r\n            // } else if (typeof MutationObserver !== 'undefined' && (\r\n            //   isNative(MutationObserver) ||\r\n            //   // PhantomJS and iOS 7.x\r\n            //   MutationObserver.toString() === '[object MutationObserverConstructor]'\r\n            // )) {\r\n            //   // use MutationObserver where native Promise is not available,\r\n            //   // e.g. PhantomJS IE11, iOS7, Android 4.4\r\n            //   var counter = 1\r\n            //   var observer = new MutationObserver(nextTickHandler)\r\n            //   var textNode = document.createTextNode(String(counter))\r\n            //   observer.observe(textNode, {\r\n            //     characterData: true\r\n            //   })\r\n            //   timerFunc = () => {\r\n            //     counter = (counter + 1) % 2\r\n            //     textNode.data = String(counter)\r\n            //   }\r\n        } else {\r\n            // fallback to setTimeout\r\n            /* istanbul ignore next */\r\n            timerFunc = function() {\r\n                setTimeout(nextTickHandler, 0)\r\n            }\r\n        }\r\n\r\n        return function queueNextTick(cb, ctx) {\r\n            var _resolve\r\n            callbacks.push(function() {\r\n                if (cb) {\r\n                    try {\r\n                        cb.call(ctx)\r\n                    } catch (e) {\r\n                        handleError(e, ctx, \"nextTick\")\r\n                    }\r\n                } else if (_resolve) {\r\n                    _resolve(ctx)\r\n                }\r\n            })\r\n            if (!pending) {\r\n                pending = true\r\n                timerFunc()\r\n            }\r\n            if (!cb && typeof Promise !== \"undefined\") {\r\n                return new Promise(function(resolve, reject) {\r\n                    _resolve = resolve\r\n                })\r\n            }\r\n        }\r\n    })()\r\n\r\n    var _Set\r\n    /* istanbul ignore if */\r\n    if (typeof Set !== \"undefined\" && isNative(Set)) {\r\n        // use native Set when available.\r\n        _Set = Set\r\n    } else {\r\n        // a non-standard Set polyfill that only works with primitive keys.\r\n        _Set = (function() {\r\n            function Set() {\r\n                this.set = Object.create(null)\r\n            }\r\n            Set.prototype.has = function has(key) {\r\n                return this.set[key] === true\r\n            }\r\n            Set.prototype.add = function add(key) {\r\n                this.set[key] = true\r\n            }\r\n            Set.prototype.clear = function clear() {\r\n                this.set = Object.create(null)\r\n            }\r\n\r\n            return Set\r\n        })()\r\n    }\r\n\r\n    /*  */\r\n\r\n    var uid$1 = 0\r\n\r\n    /**\r\n     * A dep is an observable that can have multiple\r\n     * directives subscribing to it.\r\n     */\r\n    var Dep = function Dep() {\r\n        this.id = uid$1++\r\n        this.subs = []\r\n    }\r\n\r\n    Dep.prototype.addSub = function addSub(sub) {\r\n        this.subs.push(sub)\r\n    }\r\n\r\n    Dep.prototype.removeSub = function removeSub(sub) {\r\n        remove(this.subs, sub)\r\n    }\r\n\r\n    Dep.prototype.depend = function depend() {\r\n        if (Dep.target) {\r\n            Dep.target.addDep(this)\r\n        }\r\n    }\r\n\r\n    Dep.prototype.notify = function notify() {\r\n        // stabilize the subscriber list first\r\n        var subs = this.subs.slice()\r\n        for (var i = 0, l = subs.length; i < l; i++) {\r\n            subs[i].update()\r\n        }\r\n    }\r\n\r\n    // the current target watcher being evaluated.\r\n    // this is globally unique because there could be only one\r\n    // watcher being evaluated at any time.\r\n    Dep.target = null\r\n    var targetStack = []\r\n\r\n    function pushTarget(_target) {\r\n        if (Dep.target) {\r\n            targetStack.push(Dep.target)\r\n        }\r\n        Dep.target = _target\r\n    }\r\n\r\n    function popTarget() {\r\n        Dep.target = targetStack.pop()\r\n    }\r\n\r\n    /*\r\n     * not type checking this file because flow doesn't play well with\r\n     * dynamically accessing methods on Array prototype\r\n     */\r\n\r\n    var arrayProto = Array.prototype\r\n    var arrayMethods = Object.create(arrayProto)\r\n    ;[\"push\", \"pop\", \"shift\", \"unshift\", \"splice\", \"sort\", \"reverse\"].forEach(function(method) {\r\n        // cache original method\r\n        var original = arrayProto[method]\r\n        def(arrayMethods, method, function mutator() {\r\n            var args = [],\r\n                len = arguments.length\r\n            while (len--) args[len] = arguments[len]\r\n\r\n            var result = original.apply(this, args)\r\n            var ob = this.__ob__\r\n            var inserted\r\n            switch (method) {\r\n                case \"push\":\r\n                case \"unshift\":\r\n                    inserted = args\r\n                    break\r\n                case \"splice\":\r\n                    inserted = args.slice(2)\r\n                    break\r\n            }\r\n            if (inserted) {\r\n                ob.observeArray(inserted)\r\n            }\r\n            // notify change\r\n            ob.dep.notify()\r\n            return result\r\n        })\r\n    })\r\n\r\n    /*  */\r\n\r\n    var arrayKeys = Object.getOwnPropertyNames(arrayMethods)\r\n\r\n    /**\r\n     * By default, when a reactive property is set, the new value is\r\n     * also converted to become reactive. However when passing down props,\r\n     * we don't want to force conversion because the value may be a nested value\r\n     * under a frozen data structure. Converting it would defeat the optimization.\r\n     */\r\n    var observerState = {\r\n        shouldConvert: true\r\n    }\r\n\r\n    /**\r\n     * Observer class that are attached to each observed\r\n     * object. Once attached, the observer converts target\r\n     * object's property keys into getter/setters that\r\n     * collect dependencies and dispatches updates.\r\n     */\r\n    var Observer = function Observer(value) {\r\n        this.value = value\r\n        this.dep = new Dep()\r\n        this.vmCount = 0\r\n        def(value, \"__ob__\", this)\r\n        if (Array.isArray(value)) {\r\n            var augment = hasProto ? protoAugment : copyAugment\r\n            augment(value, arrayMethods, arrayKeys)\r\n            this.observeArray(value)\r\n        } else {\r\n            this.walk(value)\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Walk through each property and convert them into\r\n     * getter/setters. This method should only be called when\r\n     * value type is Object.\r\n     */\r\n    Observer.prototype.walk = function walk(obj) {\r\n        var keys = Object.keys(obj)\r\n        for (var i = 0; i < keys.length; i++) {\r\n            defineReactive$$1(obj, keys[i], obj[keys[i]])\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Observe a list of Array items.\r\n     */\r\n    Observer.prototype.observeArray = function observeArray(items) {\r\n        for (var i = 0, l = items.length; i < l; i++) {\r\n            observe(items[i])\r\n        }\r\n    }\r\n\r\n    // helpers\r\n\r\n    /**\r\n     * Augment an target Object or Array by intercepting\r\n     * the prototype chain using __proto__\r\n     */\r\n    function protoAugment(target, src, keys) {\r\n        /* eslint-disable no-proto */\r\n        target.__proto__ = src\r\n        /* eslint-enable no-proto */\r\n    }\r\n\r\n    /**\r\n     * Augment an target Object or Array by defining\r\n     * hidden properties.\r\n     */\r\n    /* istanbul ignore next */\r\n    function copyAugment(target, src, keys) {\r\n        for (var i = 0, l = keys.length; i < l; i++) {\r\n            var key = keys[i]\r\n            def(target, key, src[key])\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Attempt to create an observer instance for a value,\r\n     * returns the new observer if successfully observed,\r\n     * or the existing observer if the value already has one.\r\n     */\r\n    function observe(value, asRootData) {\r\n        if (!isObject(value)) {\r\n            return\r\n        }\r\n        var ob\r\n        if (hasOwn(value, \"__ob__\") && value.__ob__ instanceof Observer) {\r\n            ob = value.__ob__\r\n        } else if (\r\n            observerState.shouldConvert &&\r\n            !isServerRendering() &&\r\n            (Array.isArray(value) || isPlainObject(value)) &&\r\n            Object.isExtensible(value) &&\r\n            !value._isVue\r\n        ) {\r\n            ob = new Observer(value)\r\n        }\r\n        if (asRootData && ob) {\r\n            ob.vmCount++\r\n        }\r\n        return ob\r\n    }\r\n\r\n    /**\r\n     * Define a reactive property on an Object.\r\n     */\r\n    function defineReactive$$1(obj, key, val, customSetter, shallow) {\r\n        var dep = new Dep()\r\n\r\n        var property = Object.getOwnPropertyDescriptor(obj, key)\r\n        if (property && property.configurable === false) {\r\n            return\r\n        }\r\n\r\n        // cater for pre-defined getter/setters\r\n        var getter = property && property.get\r\n        var setter = property && property.set\r\n\r\n        var childOb = !shallow && observe(val)\r\n        Object.defineProperty(obj, key, {\r\n            enumerable: true,\r\n            configurable: true,\r\n            get: function reactiveGetter() {\r\n                var value = getter ? getter.call(obj) : val\r\n                if (Dep.target) {\r\n                    dep.depend()\r\n                    if (childOb) {\r\n                        childOb.dep.depend()\r\n                    }\r\n                    if (Array.isArray(value)) {\r\n                        dependArray(value)\r\n                    }\r\n                }\r\n                return value\r\n            },\r\n            set: function reactiveSetter(newVal) {\r\n                var value = getter ? getter.call(obj) : val\r\n                /* eslint-disable no-self-compare */\r\n                if (newVal === value || (newVal !== newVal && value !== value)) {\r\n                    return\r\n                }\r\n                /* eslint-enable no-self-compare */\r\n                if (false) {\r\n                    customSetter()\r\n                }\r\n                if (setter) {\r\n                    setter.call(obj, newVal)\r\n                } else {\r\n                    val = newVal\r\n                }\r\n                childOb = !shallow && observe(newVal)\r\n                dep.notify()\r\n            }\r\n        })\r\n    }\r\n\r\n    /**\r\n     * Set a property on an object. Adds the new property and\r\n     * triggers change notification if the property doesn't\r\n     * already exist.\r\n     */\r\n    function set(target, key, val) {\r\n        if (Array.isArray(target) && isValidArrayIndex(key)) {\r\n            target.length = Math.max(target.length, key)\r\n            target.splice(key, 1, val)\r\n            return val\r\n        }\r\n        if (hasOwn(target, key)) {\r\n            target[key] = val\r\n            return val\r\n        }\r\n        var ob = target.__ob__\r\n        if (target._isVue || (ob && ob.vmCount)) {\r\n            \"production\" !== \"production\" &&\r\n                warn(\r\n                    \"Avoid adding reactive properties to a Vue instance or its root $data \" +\r\n                        \"at runtime - declare it upfront in the data option.\"\r\n                )\r\n            return val\r\n        }\r\n        if (!ob) {\r\n            target[key] = val\r\n            return val\r\n        }\r\n        defineReactive$$1(ob.value, key, val)\r\n        ob.dep.notify()\r\n        return val\r\n    }\r\n\r\n    /**\r\n     * Delete a property and trigger change if necessary.\r\n     */\r\n    function del(target, key) {\r\n        if (Array.isArray(target) && isValidArrayIndex(key)) {\r\n            target.splice(key, 1)\r\n            return\r\n        }\r\n        var ob = target.__ob__\r\n        if (target._isVue || (ob && ob.vmCount)) {\r\n            \"production\" !== \"production\" &&\r\n                warn(\r\n                    \"Avoid deleting properties on a Vue instance or its root $data \" +\r\n                        \"- just set it to null.\"\r\n                )\r\n            return\r\n        }\r\n        if (!hasOwn(target, key)) {\r\n            return\r\n        }\r\n        delete target[key]\r\n        if (!ob) {\r\n            return\r\n        }\r\n        ob.dep.notify()\r\n    }\r\n\r\n    /**\r\n     * Collect dependencies on array elements when the array is touched, since\r\n     * we cannot intercept array element access like property getters.\r\n     */\r\n    function dependArray(value) {\r\n        for (var e = void 0, i = 0, l = value.length; i < l; i++) {\r\n            e = value[i]\r\n            e && e.__ob__ && e.__ob__.dep.depend()\r\n            if (Array.isArray(e)) {\r\n                dependArray(e)\r\n            }\r\n        }\r\n    }\r\n\r\n    /*  */\r\n\r\n    /**\r\n     * Option overwriting strategies are functions that handle\r\n     * how to merge a parent option value and a child option\r\n     * value into the final value.\r\n     */\r\n    var strats = config.optionMergeStrategies\r\n\r\n    /**\r\n     * Options with restrictions\r\n     */\r\n    /**\r\n     * Helper that recursively merges two data objects together.\r\n     */\r\n    function mergeData(to, from) {\r\n        if (!from) {\r\n            return to\r\n        }\r\n        var key, toVal, fromVal\r\n        var keys = Object.keys(from)\r\n        for (var i = 0; i < keys.length; i++) {\r\n            key = keys[i]\r\n            toVal = to[key]\r\n            fromVal = from[key]\r\n            if (!hasOwn(to, key)) {\r\n                set(to, key, fromVal)\r\n            } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {\r\n                mergeData(toVal, fromVal)\r\n            }\r\n        }\r\n        return to\r\n    }\r\n\r\n    /**\r\n     * Data\r\n     */\r\n    function mergeDataOrFn(parentVal, childVal, vm) {\r\n        if (!vm) {\r\n            // in a Vue.extend merge, both should be functions\r\n            if (!childVal) {\r\n                return parentVal\r\n            }\r\n            if (!parentVal) {\r\n                return childVal\r\n            }\r\n            // when parentVal & childVal are both present,\r\n            // we need to return a function that returns the\r\n            // merged result of both functions... no need to\r\n            // check if parentVal is a function here because\r\n            // it has to be a function to pass previous merges.\r\n            return function mergedDataFn() {\r\n                return mergeData(\r\n                    typeof childVal === \"function\" ? childVal.call(this) : childVal,\r\n                    parentVal.call(this)\r\n                )\r\n            }\r\n        } else if (parentVal || childVal) {\r\n            return function mergedInstanceDataFn() {\r\n                // instance merge\r\n                var instanceData = typeof childVal === \"function\" ? childVal.call(vm) : childVal\r\n                var defaultData = typeof parentVal === \"function\" ? parentVal.call(vm) : undefined\r\n                if (instanceData) {\r\n                    return mergeData(instanceData, defaultData)\r\n                } else {\r\n                    return defaultData\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    strats.data = function(parentVal, childVal, vm) {\r\n        if (!vm) {\r\n            if (childVal && typeof childVal !== \"function\") {\r\n                \"production\" !== \"production\" &&\r\n                    warn(\r\n                        'The \"data\" option should be a function ' +\r\n                            \"that returns a per-instance value in component \" +\r\n                            \"definitions.\",\r\n                        vm\r\n                    )\r\n\r\n                return parentVal\r\n            }\r\n            return mergeDataOrFn.call(this, parentVal, childVal)\r\n        }\r\n\r\n        return mergeDataOrFn(parentVal, childVal, vm)\r\n    }\r\n\r\n    /**\r\n     * Hooks and props are merged as arrays.\r\n     */\r\n    function mergeHook(parentVal, childVal) {\r\n        return childVal\r\n            ? parentVal\r\n                ? parentVal.concat(childVal)\r\n                : Array.isArray(childVal)\r\n                    ? childVal\r\n                    : [childVal]\r\n            : parentVal\r\n    }\r\n\r\n    LIFECYCLE_HOOKS.forEach(function(hook) {\r\n        strats[hook] = mergeHook\r\n    })\r\n\r\n    /**\r\n     * Assets\r\n     *\r\n     * When a vm is present (instance creation), we need to do\r\n     * a three-way merge between constructor options, instance\r\n     * options and parent options.\r\n     */\r\n    function mergeAssets(parentVal, childVal) {\r\n        var res = Object.create(parentVal || null)\r\n        return childVal ? extend(res, childVal) : res\r\n    }\r\n\r\n    ASSET_TYPES.forEach(function(type) {\r\n        strats[type + \"s\"] = mergeAssets\r\n    })\r\n\r\n    /**\r\n     * Watchers.\r\n     *\r\n     * Watchers hashes should not overwrite one\r\n     * another, so we merge them as arrays.\r\n     */\r\n    strats.watch = function(parentVal, childVal) {\r\n        // work around Firefox's Object.prototype.watch...\r\n        if (parentVal === nativeWatch) {\r\n            parentVal = undefined\r\n        }\r\n        if (childVal === nativeWatch) {\r\n            childVal = undefined\r\n        }\r\n        /* istanbul ignore if */\r\n        if (!childVal) {\r\n            return Object.create(parentVal || null)\r\n        }\r\n        if (!parentVal) {\r\n            return childVal\r\n        }\r\n        var ret = {}\r\n        extend(ret, parentVal)\r\n        for (var key in childVal) {\r\n            var parent = ret[key]\r\n            var child = childVal[key]\r\n            if (parent && !Array.isArray(parent)) {\r\n                parent = [parent]\r\n            }\r\n            ret[key] = parent ? parent.concat(child) : Array.isArray(child) ? child : [child]\r\n        }\r\n        return ret\r\n    }\r\n\r\n    /**\r\n     * Other object hashes.\r\n     */\r\n    strats.props = strats.methods = strats.inject = strats.computed = function(\r\n        parentVal,\r\n        childVal\r\n    ) {\r\n        if (!childVal) {\r\n            return Object.create(parentVal || null)\r\n        }\r\n        if (!parentVal) {\r\n            return childVal\r\n        }\r\n        var ret = Object.create(null)\r\n        extend(ret, parentVal)\r\n        extend(ret, childVal)\r\n        return ret\r\n    }\r\n    strats.provide = mergeDataOrFn\r\n\r\n    /**\r\n     * Default strategy.\r\n     */\r\n    var defaultStrat = function(parentVal, childVal) {\r\n        return childVal === undefined ? parentVal : childVal\r\n    }\r\n\r\n    /**\r\n     * Ensure all props option syntax are normalized into the\r\n     * Object-based format.\r\n     */\r\n    function normalizeProps(options) {\r\n        var props = options.props\r\n        if (!props) {\r\n            return\r\n        }\r\n        var res = {}\r\n        var i, val, name\r\n        if (Array.isArray(props)) {\r\n            i = props.length\r\n            while (i--) {\r\n                val = props[i]\r\n                if (typeof val === \"string\") {\r\n                    name = camelize(val)\r\n                    res[name] = {\r\n                        type: null\r\n                    }\r\n                } else {\r\n                }\r\n            }\r\n        } else if (isPlainObject(props)) {\r\n            for (var key in props) {\r\n                val = props[key]\r\n                name = camelize(key)\r\n                res[name] = isPlainObject(val)\r\n                    ? val\r\n                    : {\r\n                          type: val\r\n                      }\r\n            }\r\n        }\r\n        options.props = res\r\n    }\r\n\r\n    /**\r\n     * Normalize all injections into Object-based format\r\n     */\r\n    function normalizeInject(options) {\r\n        var inject = options.inject\r\n        if (Array.isArray(inject)) {\r\n            var normalized = (options.inject = {})\r\n            for (var i = 0; i < inject.length; i++) {\r\n                normalized[inject[i]] = inject[i]\r\n            }\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Normalize raw function directives into object format.\r\n     */\r\n    function normalizeDirectives(options) {\r\n        var dirs = options.directives\r\n        if (dirs) {\r\n            for (var key in dirs) {\r\n                var def = dirs[key]\r\n                if (typeof def === \"function\") {\r\n                    dirs[key] = {\r\n                        bind: def,\r\n                        update: def\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Merge two option objects into a new one.\r\n     * Core utility used in both instantiation and inheritance.\r\n     */\r\n    function mergeOptions(parent, child, vm) {\r\n        if (typeof child === \"function\") {\r\n            child = child.options\r\n        }\r\n\r\n        normalizeProps(child)\r\n        normalizeInject(child)\r\n        normalizeDirectives(child)\r\n        var extendsFrom = child.extends\r\n        if (extendsFrom) {\r\n            parent = mergeOptions(parent, extendsFrom, vm)\r\n        }\r\n        if (child.mixins) {\r\n            for (var i = 0, l = child.mixins.length; i < l; i++) {\r\n                parent = mergeOptions(parent, child.mixins[i], vm)\r\n            }\r\n        }\r\n        var options = {}\r\n        var key\r\n        for (key in parent) {\r\n            mergeField(key)\r\n        }\r\n        for (key in child) {\r\n            if (!hasOwn(parent, key)) {\r\n                mergeField(key)\r\n            }\r\n        }\r\n\r\n        function mergeField(key) {\r\n            var strat = strats[key] || defaultStrat\r\n            options[key] = strat(parent[key], child[key], vm, key)\r\n        }\r\n        return options\r\n    }\r\n\r\n    /**\r\n     * Resolve an asset.\r\n     * This function is used because child instances need access\r\n     * to assets defined in its ancestor chain.\r\n     */\r\n    function resolveAsset(options, type, id, warnMissing) {\r\n        /* istanbul ignore if */\r\n        if (typeof id !== \"string\") {\r\n            return\r\n        }\r\n        var assets = options[type]\r\n        // check local registration variations first\r\n        if (hasOwn(assets, id)) {\r\n            return assets[id]\r\n        }\r\n        var camelizedId = camelize(id)\r\n        if (hasOwn(assets, camelizedId)) {\r\n            return assets[camelizedId]\r\n        }\r\n        var PascalCaseId = capitalize(camelizedId)\r\n        if (hasOwn(assets, PascalCaseId)) {\r\n            return assets[PascalCaseId]\r\n        }\r\n        // fallback to prototype chain\r\n        var res = assets[id] || assets[camelizedId] || assets[PascalCaseId]\r\n        if (false) {\r\n            warn(\"Failed to resolve \" + type.slice(0, -1) + \": \" + id, options)\r\n        }\r\n        return res\r\n    }\r\n\r\n    /*  */\r\n\r\n    function validateProp(key, propOptions, propsData, vm) {\r\n        var prop = propOptions[key]\r\n        var absent = !hasOwn(propsData, key)\r\n        var value = propsData[key]\r\n        // handle boolean props\r\n        if (isType(Boolean, prop.type)) {\r\n            if (absent && !hasOwn(prop, \"default\")) {\r\n                value = false\r\n            } else if (!isType(String, prop.type) && (value === \"\" || value === hyphenate(key))) {\r\n                value = true\r\n            }\r\n        }\r\n        // check default value\r\n        if (value === undefined) {\r\n            value = getPropDefaultValue(vm, prop, key)\r\n            // since the default value is a fresh copy,\r\n            // make sure to observe it.\r\n            var prevShouldConvert = observerState.shouldConvert\r\n            observerState.shouldConvert = true\r\n            observe(value)\r\n            observerState.shouldConvert = prevShouldConvert\r\n        }\r\n        return value\r\n    }\r\n\r\n    /**\r\n     * Get the default value of a prop.\r\n     */\r\n    function getPropDefaultValue(vm, prop, key) {\r\n        // no default, return undefined\r\n        if (!hasOwn(prop, \"default\")) {\r\n            return undefined\r\n        }\r\n        var def = prop.default\r\n        // warn against non-factory defaults for Object & Array\r\n        if (false) {\r\n            warn(\r\n                'Invalid default value for prop \"' +\r\n                    key +\r\n                    '\": ' +\r\n                    \"Props with type Object/Array must use a factory function \" +\r\n                    \"to return the default value.\",\r\n                vm\r\n            )\r\n        }\r\n        // the raw prop value was also undefined from previous render,\r\n        // return previous default value to avoid unnecessary watcher trigger\r\n        if (\r\n            vm &&\r\n            vm.$options.propsData &&\r\n            vm.$options.propsData[key] === undefined &&\r\n            vm._props[key] !== undefined\r\n        ) {\r\n            return vm._props[key]\r\n        }\r\n        // call factory function for non-Function types\r\n        // a value is Function if its prototype is function even across different execution context\r\n        return typeof def === \"function\" && getType(prop.type) !== \"Function\" ? def.call(vm) : def\r\n    }\r\n\r\n    /**\r\n     * Use function string name to check built-in types,\r\n     * because a simple equality check will fail when running\r\n     * across different vms / iframes.\r\n     */\r\n    function getType(fn) {\r\n        var match = fn && fn.toString().match(/^\\s*function (\\w+)/)\r\n        return match ? match[1] : \"\"\r\n    }\r\n\r\n    function isType(type, fn) {\r\n        if (!Array.isArray(fn)) {\r\n            return getType(fn) === getType(type)\r\n        }\r\n        for (var i = 0, len = fn.length; i < len; i++) {\r\n            if (getType(fn[i]) === getType(type)) {\r\n                return true\r\n            }\r\n        }\r\n        /* istanbul ignore next */\r\n        return false\r\n    }\r\n\r\n    /*  */\r\n\r\n    /* not type checking this file because flow doesn't play well with Proxy */\r\n\r\n    var mark\r\n    var measure\r\n\r\n    /*  */\r\n\r\n    var VNode = function VNode(\r\n        tag,\r\n        data,\r\n        children,\r\n        text,\r\n        elm,\r\n        context,\r\n        componentOptions,\r\n        asyncFactory\r\n    ) {\r\n        this.tag = tag\r\n        this.data = data\r\n        this.children = children\r\n        this.text = text\r\n        this.elm = elm\r\n        this.ns = undefined\r\n        this.context = context\r\n        this.functionalContext = undefined\r\n        this.key = data && data.key\r\n        this.componentOptions = componentOptions\r\n        this.componentInstance = undefined\r\n        this.parent = undefined\r\n        this.raw = false\r\n        this.isStatic = false\r\n        this.isRootInsert = true\r\n        this.isComment = false\r\n        this.isCloned = false\r\n        this.isOnce = false\r\n        this.asyncFactory = asyncFactory\r\n        this.asyncMeta = undefined\r\n        this.isAsyncPlaceholder = false\r\n    }\r\n\r\n    var prototypeAccessors = {\r\n        child: {}\r\n    }\r\n\r\n    // DEPRECATED: alias for componentInstance for backwards compat.\r\n    /* istanbul ignore next */\r\n    prototypeAccessors.child.get = function() {\r\n        return this.componentInstance\r\n    }\r\n\r\n    Object.defineProperties(VNode.prototype, prototypeAccessors)\r\n\r\n    var createEmptyVNode = function(text) {\r\n        if (text === void 0) text = \"\"\r\n\r\n        var node = new VNode()\r\n        node.text = text\r\n        node.isComment = true\r\n        return node\r\n    }\r\n\r\n    function createTextVNode(val) {\r\n        return new VNode(undefined, undefined, undefined, String(val))\r\n    }\r\n\r\n    // optimized shallow clone\r\n    // used for static nodes and slot nodes because they may be reused across\r\n    // multiple renders, cloning them avoids errors when DOM manipulations rely\r\n    // on their elm reference.\r\n    function cloneVNode(vnode) {\r\n        var cloned = new VNode(\r\n            vnode.tag,\r\n            vnode.data,\r\n            vnode.children,\r\n            vnode.text,\r\n            vnode.elm,\r\n            vnode.context,\r\n            vnode.componentOptions,\r\n            vnode.asyncFactory\r\n        )\r\n        cloned.ns = vnode.ns\r\n        cloned.isStatic = vnode.isStatic\r\n        cloned.key = vnode.key\r\n        cloned.isComment = vnode.isComment\r\n        cloned.isCloned = true\r\n        return cloned\r\n    }\r\n\r\n    function cloneVNodes(vnodes) {\r\n        var len = vnodes.length\r\n        var res = new Array(len)\r\n        for (var i = 0; i < len; i++) {\r\n            res[i] = cloneVNode(vnodes[i])\r\n        }\r\n        return res\r\n    }\r\n\r\n    /*  */\r\n\r\n    var normalizeEvent = cached(function(name) {\r\n        var passive = name.charAt(0) === \"&\"\r\n        name = passive ? name.slice(1) : name\r\n        var once$$1 = name.charAt(0) === \"~\" // Prefixed last, checked first\r\n        name = once$$1 ? name.slice(1) : name\r\n        var capture = name.charAt(0) === \"!\"\r\n        name = capture ? name.slice(1) : name\r\n        return {\r\n            name: name,\r\n            once: once$$1,\r\n            capture: capture,\r\n            passive: passive\r\n        }\r\n    })\r\n\r\n    function createFnInvoker(fns) {\r\n        function invoker() {\r\n            var arguments$1 = arguments\r\n\r\n            var fns = invoker.fns\r\n            if (Array.isArray(fns)) {\r\n                var cloned = fns.slice()\r\n                for (var i = 0; i < cloned.length; i++) {\r\n                    cloned[i].apply(null, arguments$1)\r\n                }\r\n            } else {\r\n                // return handler return value for single handlers\r\n                return fns.apply(null, arguments)\r\n            }\r\n        }\r\n        invoker.fns = fns\r\n        return invoker\r\n    }\r\n\r\n    function updateListeners(on, oldOn, add, remove$$1, vm) {\r\n        var name, cur, old, event\r\n        for (name in on) {\r\n            cur = on[name]\r\n            old = oldOn[name]\r\n            event = normalizeEvent(name)\r\n            if (isUndef(cur)) {\r\n                \"production\" !== \"production\" &&\r\n                    warn('Invalid handler for event \"' + event.name + '\": got ' + String(cur), vm)\r\n            } else if (isUndef(old)) {\r\n                if (isUndef(cur.fns)) {\r\n                    cur = on[name] = createFnInvoker(cur)\r\n                }\r\n                add(event.name, cur, event.once, event.capture, event.passive)\r\n            } else if (cur !== old) {\r\n                old.fns = cur\r\n                on[name] = old\r\n            }\r\n        }\r\n        for (name in oldOn) {\r\n            if (isUndef(on[name])) {\r\n                event = normalizeEvent(name)\r\n                remove$$1(event.name, oldOn[name], event.capture)\r\n            }\r\n        }\r\n    }\r\n\r\n    /*  */\r\n\r\n    /*  */\r\n\r\n    function extractPropsFromVNodeData(data, Ctor, tag) {\r\n        // we are only extracting raw values here.\r\n        // validation and default values are handled in the child\r\n        // component itself.\r\n        var propOptions = Ctor.options.props\r\n        if (isUndef(propOptions)) {\r\n            return\r\n        }\r\n        var res = {}\r\n        var attrs = data.attrs\r\n        var props = data.props\r\n        if (isDef(attrs) || isDef(props)) {\r\n            for (var key in propOptions) {\r\n                var altKey = hyphenate(key)\r\n                checkProp(res, props, key, altKey, true) ||\r\n                    checkProp(res, attrs, key, altKey, false)\r\n            }\r\n        }\r\n        return res\r\n    }\r\n\r\n    function checkProp(res, hash, key, altKey, preserve) {\r\n        if (isDef(hash)) {\r\n            if (hasOwn(hash, key)) {\r\n                res[key] = hash[key]\r\n                if (!preserve) {\r\n                    delete hash[key]\r\n                }\r\n                return true\r\n            } else if (hasOwn(hash, altKey)) {\r\n                res[key] = hash[altKey]\r\n                if (!preserve) {\r\n                    delete hash[altKey]\r\n                }\r\n                return true\r\n            }\r\n        }\r\n        return false\r\n    }\r\n\r\n    /*  */\r\n\r\n    // The template compiler attempts to minimize the need for normalization by\r\n    // statically analyzing the template at compile time.\r\n    //\r\n    // For plain HTML markup, normalization can be completely skipped because the\r\n    // generated render function is guaranteed to return Array<VNode>. There are\r\n    // two cases where extra normalization is needed:\r\n\r\n    // 1. When the children contains components - because a functional component\r\n    // may return an Array instead of a single root. In this case, just a simple\r\n    // normalization is needed - if any child is an Array, we flatten the whole\r\n    // thing with Array.prototype.concat. It is guaranteed to be only 1-level deep\r\n    // because functional components already normalize their own children.\r\n    function simpleNormalizeChildren(children) {\r\n        for (var i = 0; i < children.length; i++) {\r\n            if (Array.isArray(children[i])) {\r\n                return Array.prototype.concat.apply([], children)\r\n            }\r\n        }\r\n        return children\r\n    }\r\n\r\n    // 2. When the children contains constructs that always generated nested Arrays,\r\n    // e.g. <template>, <slot>, v-for, or when the children is provided by user\r\n    // with hand-written render functions / JSX. In such cases a full normalization\r\n    // is needed to cater to all possible types of children values.\r\n    function normalizeChildren(children) {\r\n        return isPrimitive(children)\r\n            ? [createTextVNode(children)]\r\n            : Array.isArray(children)\r\n                ? normalizeArrayChildren(children)\r\n                : undefined\r\n    }\r\n\r\n    function isTextNode(node) {\r\n        return isDef(node) && isDef(node.text) && isFalse(node.isComment)\r\n    }\r\n\r\n    function normalizeArrayChildren(children, nestedIndex) {\r\n        var res = []\r\n        var i, c, last\r\n        for (i = 0; i < children.length; i++) {\r\n            c = children[i]\r\n            if (isUndef(c) || typeof c === \"boolean\") {\r\n                continue\r\n            }\r\n            last = res[res.length - 1]\r\n            //  nested\r\n            if (Array.isArray(c)) {\r\n                res.push.apply(res, normalizeArrayChildren(c, (nestedIndex || \"\") + \"_\" + i))\r\n            } else if (isPrimitive(c)) {\r\n                if (isTextNode(last)) {\r\n                    // merge adjacent text nodes\r\n                    // this is necessary for SSR hydration because text nodes are\r\n                    // essentially merged when rendered to HTML strings\r\n                    last.text += String(c)\r\n                } else if (c !== \"\") {\r\n                    // convert primitive to vnode\r\n                    res.push(createTextVNode(c))\r\n                }\r\n            } else {\r\n                if (isTextNode(c) && isTextNode(last)) {\r\n                    // merge adjacent text nodes\r\n                    res[res.length - 1] = createTextVNode(last.text + c.text)\r\n                } else {\r\n                    // default key for nested array children (likely generated by v-for)\r\n                    if (\r\n                        isTrue(children._isVList) &&\r\n                        isDef(c.tag) &&\r\n                        isUndef(c.key) &&\r\n                        isDef(nestedIndex)\r\n                    ) {\r\n                        c.key = \"__vlist\" + nestedIndex + \"_\" + i + \"__\"\r\n                    }\r\n                    res.push(c)\r\n                }\r\n            }\r\n        }\r\n        return res\r\n    }\r\n\r\n    /*  */\r\n\r\n    function ensureCtor(comp, base) {\r\n        if (comp.__esModule && comp.default) {\r\n            comp = comp.default\r\n        }\r\n        return isObject(comp) ? base.extend(comp) : comp\r\n    }\r\n\r\n    function createAsyncPlaceholder(factory, data, context, children, tag) {\r\n        var node = createEmptyVNode()\r\n        node.asyncFactory = factory\r\n        node.asyncMeta = {\r\n            data: data,\r\n            context: context,\r\n            children: children,\r\n            tag: tag\r\n        }\r\n        return node\r\n    }\r\n\r\n    function resolveAsyncComponent(factory, baseCtor, context) {\r\n        if (isTrue(factory.error) && isDef(factory.errorComp)) {\r\n            return factory.errorComp\r\n        }\r\n\r\n        if (isDef(factory.resolved)) {\r\n            return factory.resolved\r\n        }\r\n\r\n        if (isTrue(factory.loading) && isDef(factory.loadingComp)) {\r\n            return factory.loadingComp\r\n        }\r\n\r\n        if (isDef(factory.contexts)) {\r\n            // already pending\r\n            factory.contexts.push(context)\r\n        } else {\r\n            var contexts = (factory.contexts = [context])\r\n            var sync = true\r\n\r\n            var forceRender = function() {\r\n                for (var i = 0, l = contexts.length; i < l; i++) {\r\n                    contexts[i].$forceUpdate()\r\n                }\r\n            }\r\n\r\n            var resolve = once(function(res) {\r\n                // cache resolved\r\n                factory.resolved = ensureCtor(res, baseCtor)\r\n                // invoke callbacks only if this is not a synchronous resolve\r\n                // (async resolves are shimmed as synchronous during SSR)\r\n                if (!sync) {\r\n                    forceRender()\r\n                }\r\n            })\r\n\r\n            var reject = once(function(reason) {\r\n                \"production\" !== \"production\" &&\r\n                    warn(\r\n                        \"Failed to resolve async component: \" +\r\n                            String(factory) +\r\n                            (reason ? \"\\nReason: \" + reason : \"\")\r\n                    )\r\n                if (isDef(factory.errorComp)) {\r\n                    factory.error = true\r\n                    forceRender()\r\n                }\r\n            })\r\n\r\n            var res = factory(resolve, reject)\r\n\r\n            if (isObject(res)) {\r\n                if (typeof res.then === \"function\") {\r\n                    // () => Promise\r\n                    if (isUndef(factory.resolved)) {\r\n                        res.then(resolve, reject)\r\n                    }\r\n                } else if (isDef(res.component) && typeof res.component.then === \"function\") {\r\n                    res.component.then(resolve, reject)\r\n\r\n                    if (isDef(res.error)) {\r\n                        factory.errorComp = ensureCtor(res.error, baseCtor)\r\n                    }\r\n\r\n                    if (isDef(res.loading)) {\r\n                        factory.loadingComp = ensureCtor(res.loading, baseCtor)\r\n                        if (res.delay === 0) {\r\n                            factory.loading = true\r\n                        } else {\r\n                            setTimeout(function() {\r\n                                if (isUndef(factory.resolved) && isUndef(factory.error)) {\r\n                                    factory.loading = true\r\n                                    forceRender()\r\n                                }\r\n                            }, res.delay || 200)\r\n                        }\r\n                    }\r\n\r\n                    if (isDef(res.timeout)) {\r\n                        setTimeout(function() {\r\n                            if (isUndef(factory.resolved)) {\r\n                                reject(null)\r\n                            }\r\n                        }, res.timeout)\r\n                    }\r\n                }\r\n            }\r\n\r\n            sync = false\r\n            // return in case resolved synchronously\r\n            return factory.loading ? factory.loadingComp : factory.resolved\r\n        }\r\n    }\r\n\r\n    /*  */\r\n\r\n    function getFirstComponentChild(children) {\r\n        if (Array.isArray(children)) {\r\n            for (var i = 0; i < children.length; i++) {\r\n                var c = children[i]\r\n                if (isDef(c) && isDef(c.componentOptions)) {\r\n                    return c\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    /*  */\r\n\r\n    /*  */\r\n\r\n    function initEvents(vm) {\r\n        vm._events = Object.create(null)\r\n        vm._hasHookEvent = false\r\n        // init parent attached events\r\n        var listeners = vm.$options._parentListeners\r\n        if (listeners) {\r\n            updateComponentListeners(vm, listeners)\r\n        }\r\n    }\r\n\r\n    var target\r\n\r\n    function add(event, fn, once$$1) {\r\n        if (once$$1) {\r\n            target.$once(event, fn)\r\n        } else {\r\n            target.$on(event, fn)\r\n        }\r\n    }\r\n\r\n    function remove$1(event, fn) {\r\n        target.$off(event, fn)\r\n    }\r\n\r\n    function updateComponentListeners(vm, listeners, oldListeners) {\r\n        target = vm\r\n        updateListeners(listeners, oldListeners || {}, add, remove$1, vm)\r\n    }\r\n\r\n    function eventsMixin(Vue) {\r\n        var hookRE = /^hook:/\r\n        Vue.prototype.$on = function(event, fn) {\r\n            var this$1 = this\r\n\r\n            var vm = this\r\n            if (Array.isArray(event)) {\r\n                for (var i = 0, l = event.length; i < l; i++) {\r\n                    this$1.$on(event[i], fn)\r\n                }\r\n            } else {\r\n                ;(vm._events[event] || (vm._events[event] = [])).push(fn)\r\n                // optimize hook:event cost by using a boolean flag marked at registration\r\n                // instead of a hash lookup\r\n                if (hookRE.test(event)) {\r\n                    vm._hasHookEvent = true\r\n                }\r\n            }\r\n            return vm\r\n        }\r\n\r\n        Vue.prototype.$once = function(event, fn) {\r\n            var vm = this\r\n\r\n            function on() {\r\n                vm.$off(event, on)\r\n                fn.apply(vm, arguments)\r\n            }\r\n            on.fn = fn\r\n            vm.$on(event, on)\r\n            return vm\r\n        }\r\n\r\n        Vue.prototype.$off = function(event, fn) {\r\n            var this$1 = this\r\n\r\n            var vm = this\r\n            // all\r\n            if (!arguments.length) {\r\n                vm._events = Object.create(null)\r\n                return vm\r\n            }\r\n            // array of events\r\n            if (Array.isArray(event)) {\r\n                for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {\r\n                    this$1.$off(event[i$1], fn)\r\n                }\r\n                return vm\r\n            }\r\n            // specific event\r\n            var cbs = vm._events[event]\r\n            if (!cbs) {\r\n                return vm\r\n            }\r\n            if (arguments.length === 1) {\r\n                vm._events[event] = null\r\n                return vm\r\n            }\r\n            // specific handler\r\n            var cb\r\n            var i = cbs.length\r\n            while (i--) {\r\n                cb = cbs[i]\r\n                if (cb === fn || cb.fn === fn) {\r\n                    cbs.splice(i, 1)\r\n                    break\r\n                }\r\n            }\r\n            return vm\r\n        }\r\n\r\n        Vue.prototype.$emit = function(event) {\r\n            var vm = this\r\n            var cbs = vm._events[event]\r\n            if (cbs) {\r\n                cbs = cbs.length > 1 ? toArray(cbs) : cbs\r\n                var args = toArray(arguments, 1)\r\n                for (var i = 0, l = cbs.length; i < l; i++) {\r\n                    try {\r\n                        cbs[i].apply(vm, args)\r\n                    } catch (e) {\r\n                        handleError(e, vm, 'event handler for \"' + event + '\"')\r\n                    }\r\n                }\r\n            }\r\n            return vm\r\n        }\r\n    }\r\n\r\n    /*  */\r\n\r\n    /**\r\n     * Runtime helper for resolving raw children VNodes into a slot object.\r\n     */\r\n    function resolveSlots(children, context) {\r\n        var slots = {}\r\n        if (!children) {\r\n            return slots\r\n        }\r\n        var defaultSlot = []\r\n        for (var i = 0, l = children.length; i < l; i++) {\r\n            var child = children[i]\r\n            // named slots should only be respected if the vnode was rendered in the\r\n            // same context.\r\n            if (\r\n                (child.context === context || child.functionalContext === context) &&\r\n                child.data &&\r\n                child.data.slot != null\r\n            ) {\r\n                var name = child.data.slot\r\n                var slot = slots[name] || (slots[name] = [])\r\n                if (child.tag === \"template\") {\r\n                    slot.push.apply(slot, child.children)\r\n                } else {\r\n                    slot.push(child)\r\n                }\r\n            } else {\r\n                defaultSlot.push(child)\r\n            }\r\n        }\r\n        // ignore whitespace\r\n        if (!defaultSlot.every(isWhitespace)) {\r\n            slots.default = defaultSlot\r\n        }\r\n        return slots\r\n    }\r\n\r\n    function isWhitespace(node) {\r\n        return node.isComment || node.text === \" \"\r\n    }\r\n\r\n    function resolveScopedSlots(\r\n        fns, // see flow/vnode\r\n        res\r\n    ) {\r\n        res = res || {}\r\n        for (var i = 0; i < fns.length; i++) {\r\n            if (Array.isArray(fns[i])) {\r\n                resolveScopedSlots(fns[i], res)\r\n            } else {\r\n                res[fns[i].key] = fns[i].fn\r\n            }\r\n        }\r\n        return res\r\n    }\r\n\r\n    /*  */\r\n\r\n    var activeInstance = null\r\n\r\n    function initLifecycle(vm) {\r\n        var options = vm.$options\r\n\r\n        // locate first non-abstract parent\r\n        var parent = options.parent\r\n        if (parent && !options.abstract) {\r\n            while (parent.$options.abstract && parent.$parent) {\r\n                parent = parent.$parent\r\n            }\r\n            parent.$children.push(vm)\r\n        }\r\n\r\n        vm.$parent = parent\r\n        vm.$root = parent ? parent.$root : vm\r\n\r\n        vm.$children = []\r\n        vm.$refs = {}\r\n\r\n        vm._watcher = null\r\n        vm._inactive = null\r\n        vm._directInactive = false\r\n        vm._isMounted = false\r\n        vm._isDestroyed = false\r\n        vm._isBeingDestroyed = false\r\n    }\r\n\r\n    function lifecycleMixin(Vue) {\r\n        Vue.prototype._update = function(vnode, hydrating) {\r\n            var vm = this\r\n            if (vm._isMounted) {\r\n                callHook(vm, \"beforeUpdate\")\r\n            }\r\n            var prevEl = vm.$el\r\n            var prevVnode = vm._vnode\r\n            var prevActiveInstance = activeInstance\r\n            activeInstance = vm\r\n            vm._vnode = vnode\r\n            // Vue.prototype.__patch__ is injected in entry points\r\n            // based on the rendering backend used.\r\n            if (!prevVnode) {\r\n                // initial render\r\n                vm.$el = vm.__patch__(\r\n                    vm.$el,\r\n                    vnode,\r\n                    hydrating,\r\n                    false /* removeOnly */,\r\n                    vm.$options._parentElm,\r\n                    vm.$options._refElm\r\n                )\r\n                // no need for the ref nodes after initial patch\r\n                // this prevents keeping a detached DOM tree in memory (#5851)\r\n                vm.$options._parentElm = vm.$options._refElm = null\r\n            } else {\r\n                // updates\r\n                vm.$el = vm.__patch__(prevVnode, vnode)\r\n            }\r\n            activeInstance = prevActiveInstance\r\n            // update __vue__ reference\r\n            if (prevEl) {\r\n                prevEl.__vue__ = null\r\n            }\r\n            if (vm.$el) {\r\n                vm.$el.__vue__ = vm\r\n            }\r\n            // if parent is an HOC, update its $el as well\r\n            if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {\r\n                vm.$parent.$el = vm.$el\r\n            }\r\n            // updated hook is called by the scheduler to ensure that children are\r\n            // updated in a parent's updated hook.\r\n        }\r\n\r\n        Vue.prototype.$forceUpdate = function() {\r\n            var vm = this\r\n            if (vm._watcher) {\r\n                vm._watcher.update()\r\n            }\r\n        }\r\n\r\n        Vue.prototype.$destroy = function() {\r\n            var vm = this\r\n            if (vm._isBeingDestroyed) {\r\n                return\r\n            }\r\n            callHook(vm, \"beforeDestroy\")\r\n            vm._isBeingDestroyed = true\r\n            // remove self from parent\r\n            var parent = vm.$parent\r\n            if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {\r\n                remove(parent.$children, vm)\r\n            }\r\n            // teardown watchers\r\n            if (vm._watcher) {\r\n                vm._watcher.teardown()\r\n            }\r\n            var i = vm._watchers.length\r\n            while (i--) {\r\n                vm._watchers[i].teardown()\r\n            }\r\n            // remove reference from data ob\r\n            // frozen object may not have observer.\r\n            if (vm._data.__ob__) {\r\n                vm._data.__ob__.vmCount--\r\n            }\r\n            // call the last hook...\r\n            vm._isDestroyed = true\r\n            // invoke destroy hooks on current rendered tree\r\n            vm.__patch__(vm._vnode, null)\r\n            // fire destroyed hook\r\n            callHook(vm, \"destroyed\")\r\n            // turn off all instance listeners.\r\n            vm.$off()\r\n            // remove __vue__ reference\r\n            if (vm.$el) {\r\n                vm.$el.__vue__ = null\r\n            }\r\n        }\r\n    }\r\n\r\n    function mountComponent(vm, el, hydrating) {\r\n        vm.$el = el\r\n        if (!vm.$options.render) {\r\n            vm.$options.render = createEmptyVNode\r\n        }\r\n        callHook(vm, \"beforeMount\")\r\n\r\n        var updateComponent\r\n        /* istanbul ignore if */\r\n        if (false) {\r\n            updateComponent = function() {\r\n                var name = vm._name\r\n                var id = vm._uid\r\n                var startTag = \"vue-perf-start:\" + id\r\n                var endTag = \"vue-perf-end:\" + id\r\n\r\n                mark(startTag)\r\n                var vnode = vm._render()\r\n                mark(endTag)\r\n                measure(name + \" render\", startTag, endTag)\r\n\r\n                mark(startTag)\r\n                vm._update(vnode, hydrating)\r\n                mark(endTag)\r\n                measure(name + \" patch\", startTag, endTag)\r\n            }\r\n        } else {\r\n            updateComponent = function() {\r\n                vm._update(vm._render(), hydrating)\r\n            }\r\n        }\r\n\r\n        vm._watcher = new Watcher(vm, updateComponent, noop)\r\n        hydrating = false\r\n\r\n        // manually mounted instance, call mounted on self\r\n        // mounted is called for render-created child components in its inserted hook\r\n        if (vm.$vnode == null) {\r\n            vm._isMounted = true\r\n            callHook(vm, \"mounted\")\r\n        }\r\n        return vm\r\n    }\r\n\r\n    function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {\r\n        var hasChildren = !!(\r\n            renderChildren || // has new static slots\r\n            vm.$options._renderChildren || // has old static slots\r\n            parentVnode.data.scopedSlots || // has new scoped slots\r\n            vm.$scopedSlots !== emptyObject\r\n        ) // has old scoped slots\r\n\r\n        vm.$options._parentVnode = parentVnode\r\n        vm.$vnode = parentVnode // update vm's placeholder node without re-render\r\n\r\n        if (vm._vnode) {\r\n            // update child tree's parent\r\n            vm._vnode.parent = parentVnode\r\n        }\r\n        vm.$options._renderChildren = renderChildren\r\n\r\n        // update $attrs and $listensers hash\r\n        // these are also reactive so they may trigger child update if the child\r\n        // used them during render\r\n        vm.$attrs = parentVnode.data && parentVnode.data.attrs\r\n        vm.$listeners = listeners\r\n\r\n        // update props\r\n        if (propsData && vm.$options.props) {\r\n            observerState.shouldConvert = false\r\n            var props = vm._props\r\n            var propKeys = vm.$options._propKeys || []\r\n            for (var i = 0; i < propKeys.length; i++) {\r\n                var key = propKeys[i]\r\n                props[key] = validateProp(key, vm.$options.props, propsData, vm)\r\n            }\r\n            observerState.shouldConvert = true\r\n            // keep a copy of raw propsData\r\n            vm.$options.propsData = propsData\r\n        }\r\n\r\n        // update listeners\r\n        if (listeners) {\r\n            var oldListeners = vm.$options._parentListeners\r\n            vm.$options._parentListeners = listeners\r\n            updateComponentListeners(vm, listeners, oldListeners)\r\n        }\r\n        // resolve slots + force update if has children\r\n        if (hasChildren) {\r\n            vm.$slots = resolveSlots(renderChildren, parentVnode.context)\r\n            vm.$forceUpdate()\r\n        }\r\n    }\r\n\r\n    function isInInactiveTree(vm) {\r\n        while (vm && (vm = vm.$parent)) {\r\n            if (vm._inactive) {\r\n                return true\r\n            }\r\n        }\r\n        return false\r\n    }\r\n\r\n    function activateChildComponent(vm, direct) {\r\n        if (direct) {\r\n            vm._directInactive = false\r\n            if (isInInactiveTree(vm)) {\r\n                return\r\n            }\r\n        } else if (vm._directInactive) {\r\n            return\r\n        }\r\n        if (vm._inactive || vm._inactive === null) {\r\n            vm._inactive = false\r\n            for (var i = 0; i < vm.$children.length; i++) {\r\n                activateChildComponent(vm.$children[i])\r\n            }\r\n            callHook(vm, \"activated\")\r\n        }\r\n    }\r\n\r\n    function deactivateChildComponent(vm, direct) {\r\n        if (direct) {\r\n            vm._directInactive = true\r\n            if (isInInactiveTree(vm)) {\r\n                return\r\n            }\r\n        }\r\n        if (!vm._inactive) {\r\n            vm._inactive = true\r\n            for (var i = 0; i < vm.$children.length; i++) {\r\n                deactivateChildComponent(vm.$children[i])\r\n            }\r\n            callHook(vm, \"deactivated\")\r\n        }\r\n    }\r\n\r\n    function callHook(vm, hook) {\r\n        var handlers = vm.$options[hook]\r\n        if (handlers) {\r\n            for (var i = 0, j = handlers.length; i < j; i++) {\r\n                try {\r\n                    handlers[i].call(vm)\r\n                } catch (e) {\r\n                    handleError(e, vm, hook + \" hook\")\r\n                }\r\n            }\r\n        }\r\n        if (vm._hasHookEvent) {\r\n            vm.$emit(\"hook:\" + hook)\r\n        }\r\n    }\r\n\r\n    /*  */\r\n\r\n    var MAX_UPDATE_COUNT = 100\r\n\r\n    var queue = []\r\n    var activatedChildren = []\r\n    var has = {}\r\n    var circular = {}\r\n    var waiting = false\r\n    var flushing = false\r\n    var index = 0\r\n\r\n    /**\r\n     * Reset the scheduler's state.\r\n     */\r\n    function resetSchedulerState() {\r\n        index = queue.length = activatedChildren.length = 0\r\n        has = {}\r\n        waiting = flushing = false\r\n    }\r\n\r\n    /**\r\n     * Flush both queues and run the watchers.\r\n     */\r\n    function flushSchedulerQueue() {\r\n        flushing = true\r\n        var watcher, id\r\n\r\n        // Sort queue before flush.\r\n        // This ensures that:\r\n        // 1. Components are updated from parent to child. (because parent is always\r\n        //    created before the child)\r\n        // 2. A component's user watchers are run before its render watcher (because\r\n        //    user watchers are created before the render watcher)\r\n        // 3. If a component is destroyed during a parent component's watcher run,\r\n        //    its watchers can be skipped.\r\n        queue.sort(function(a, b) {\r\n            return a.id - b.id\r\n        })\r\n\r\n        // do not cache length because more watchers might be pushed\r\n        // as we run existing watchers\r\n        for (index = 0; index < queue.length; index++) {\r\n            watcher = queue[index]\r\n            id = watcher.id\r\n            has[id] = null\r\n            watcher.run()\r\n            // in dev build, check and stop circular updates.\r\n            if (false) {\r\n                circular[id] = (circular[id] || 0) + 1\r\n                if (circular[id] > MAX_UPDATE_COUNT) {\r\n                    warn(\r\n                        \"You may have an infinite update loop \" +\r\n                            (watcher.user\r\n                                ? 'in watcher with expression \"' + watcher.expression + '\"'\r\n                                : \"in a component render function.\"),\r\n                        watcher.vm\r\n                    )\r\n                    break\r\n                }\r\n            }\r\n        }\r\n\r\n        // keep copies of post queues before resetting state\r\n        var activatedQueue = activatedChildren.slice()\r\n        var updatedQueue = queue.slice()\r\n\r\n        resetSchedulerState()\r\n\r\n        // call component updated and activated hooks\r\n        callActivatedHooks(activatedQueue)\r\n        callUpdatedHooks(updatedQueue)\r\n\r\n        // devtool hook\r\n        /* istanbul ignore if */\r\n        if (devtools && config.devtools) {\r\n            devtools.emit(\"flush\")\r\n        }\r\n    }\r\n\r\n    function callUpdatedHooks(queue) {\r\n        var i = queue.length\r\n        while (i--) {\r\n            var watcher = queue[i]\r\n            var vm = watcher.vm\r\n            if (vm._watcher === watcher && vm._isMounted) {\r\n                callHook(vm, \"updated\")\r\n            }\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Queue a kept-alive component that was activated during patch.\r\n     * The queue will be processed after the entire tree has been patched.\r\n     */\r\n    function queueActivatedComponent(vm) {\r\n        // setting _inactive to false here so that a render function can\r\n        // rely on checking whether it's in an inactive tree (e.g. router-view)\r\n        vm._inactive = false\r\n        activatedChildren.push(vm)\r\n    }\r\n\r\n    function callActivatedHooks(queue) {\r\n        for (var i = 0; i < queue.length; i++) {\r\n            queue[i]._inactive = true\r\n            activateChildComponent(queue[i], true /* true */)\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Push a watcher into the watcher queue.\r\n     * Jobs with duplicate IDs will be skipped unless it's\r\n     * pushed when the queue is being flushed.\r\n     */\r\n    function queueWatcher(watcher) {\r\n        var id = watcher.id\r\n        if (has[id] == null) {\r\n            has[id] = true\r\n            if (!flushing) {\r\n                queue.push(watcher)\r\n            } else {\r\n                // if already flushing, splice the watcher based on its id\r\n                // if already past its id, it will be run next immediately.\r\n                var i = queue.length - 1\r\n                while (i > index && queue[i].id > watcher.id) {\r\n                    i--\r\n                }\r\n                queue.splice(i + 1, 0, watcher)\r\n            }\r\n            // queue the flush\r\n            if (!waiting) {\r\n                waiting = true\r\n                nextTick(flushSchedulerQueue)\r\n            }\r\n        }\r\n    }\r\n\r\n    /*  */\r\n\r\n    var uid$2 = 0\r\n\r\n    /**\r\n     * A watcher parses an expression, collects dependencies,\r\n     * and fires callback when the expression value changes.\r\n     * This is used for both the $watch() api and directives.\r\n     */\r\n    var Watcher = function Watcher(vm, expOrFn, cb, options) {\r\n        this.vm = vm\r\n        vm._watchers.push(this)\r\n        // options\r\n        if (options) {\r\n            this.deep = !!options.deep\r\n            this.user = !!options.user\r\n            this.lazy = !!options.lazy\r\n            this.sync = !!options.sync\r\n        } else {\r\n            this.deep = this.user = this.lazy = this.sync = false\r\n        }\r\n        this.cb = cb\r\n        this.id = ++uid$2 // uid for batching\r\n        this.active = true\r\n        this.dirty = this.lazy // for lazy watchers\r\n        this.deps = []\r\n        this.newDeps = []\r\n        this.depIds = new _Set()\r\n        this.newDepIds = new _Set()\r\n        this.expression = \"\"\r\n        // parse expression for getter\r\n        if (typeof expOrFn === \"function\") {\r\n            this.getter = expOrFn\r\n        } else {\r\n            this.getter = parsePath(expOrFn)\r\n            if (!this.getter) {\r\n                this.getter = function() {}\r\n                \"production\" !== \"production\" &&\r\n                    warn(\r\n                        'Failed watching path: \"' +\r\n                            expOrFn +\r\n                            '\" ' +\r\n                            \"Watcher only accepts simple dot-delimited paths. \" +\r\n                            \"For full control, use a function instead.\",\r\n                        vm\r\n                    )\r\n            }\r\n        }\r\n        this.value = this.lazy ? undefined : this.get()\r\n    }\r\n\r\n    /**\r\n     * Evaluate the getter, and re-collect dependencies.\r\n     */\r\n    Watcher.prototype.get = function get() {\r\n        pushTarget(this)\r\n        var value\r\n        var vm = this.vm\r\n        try {\r\n            value = this.getter.call(vm, vm)\r\n        } catch (e) {\r\n            if (this.user) {\r\n                handleError(e, vm, 'getter for watcher \"' + this.expression + '\"')\r\n            } else {\r\n                throw e\r\n            }\r\n        } finally {\r\n            // \"touch\" every property so they are all tracked as\r\n            // dependencies for deep watching\r\n            if (this.deep) {\r\n                traverse(value)\r\n            }\r\n            popTarget()\r\n            this.cleanupDeps()\r\n        }\r\n        return value\r\n    }\r\n\r\n    /**\r\n     * Add a dependency to this directive.\r\n     */\r\n    Watcher.prototype.addDep = function addDep(dep) {\r\n        var id = dep.id\r\n        if (!this.newDepIds.has(id)) {\r\n            this.newDepIds.add(id)\r\n            this.newDeps.push(dep)\r\n            if (!this.depIds.has(id)) {\r\n                dep.addSub(this)\r\n            }\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Clean up for dependency collection.\r\n     */\r\n    Watcher.prototype.cleanupDeps = function cleanupDeps() {\r\n        var this$1 = this\r\n\r\n        var i = this.deps.length\r\n        while (i--) {\r\n            var dep = this$1.deps[i]\r\n            if (!this$1.newDepIds.has(dep.id)) {\r\n                dep.removeSub(this$1)\r\n            }\r\n        }\r\n        var tmp = this.depIds\r\n        this.depIds = this.newDepIds\r\n        this.newDepIds = tmp\r\n        this.newDepIds.clear()\r\n        tmp = this.deps\r\n        this.deps = this.newDeps\r\n        this.newDeps = tmp\r\n        this.newDeps.length = 0\r\n    }\r\n\r\n    /**\r\n     * Subscriber interface.\r\n     * Will be called when a dependency changes.\r\n     */\r\n    Watcher.prototype.update = function update() {\r\n        /* istanbul ignore else */\r\n        if (this.lazy) {\r\n            this.dirty = true\r\n        } else if (this.sync) {\r\n            this.run()\r\n        } else {\r\n            queueWatcher(this)\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Scheduler job interface.\r\n     * Will be called by the scheduler.\r\n     */\r\n    Watcher.prototype.run = function run() {\r\n        if (this.active) {\r\n            var value = this.get()\r\n            if (\r\n                value !== this.value ||\r\n                // Deep watchers and watchers on Object/Arrays should fire even\r\n                // when the value is the same, because the value may\r\n                // have mutated.\r\n                isObject(value) ||\r\n                this.deep\r\n            ) {\r\n                // set new value\r\n                var oldValue = this.value\r\n                this.value = value\r\n                if (this.user) {\r\n                    try {\r\n                        this.cb.call(this.vm, value, oldValue)\r\n                    } catch (e) {\r\n                        handleError(e, this.vm, 'callback for watcher \"' + this.expression + '\"')\r\n                    }\r\n                } else {\r\n                    this.cb.call(this.vm, value, oldValue)\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Evaluate the value of the watcher.\r\n     * This only gets called for lazy watchers.\r\n     */\r\n    Watcher.prototype.evaluate = function evaluate() {\r\n        this.value = this.get()\r\n        this.dirty = false\r\n    }\r\n\r\n    /**\r\n     * Depend on all deps collected by this watcher.\r\n     */\r\n    Watcher.prototype.depend = function depend() {\r\n        var this$1 = this\r\n\r\n        var i = this.deps.length\r\n        while (i--) {\r\n            this$1.deps[i].depend()\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Remove self from all dependencies' subscriber list.\r\n     */\r\n    Watcher.prototype.teardown = function teardown() {\r\n        var this$1 = this\r\n\r\n        if (this.active) {\r\n            // remove self from vm's watcher list\r\n            // this is a somewhat expensive operation so we skip it\r\n            // if the vm is being destroyed.\r\n            if (!this.vm._isBeingDestroyed) {\r\n                remove(this.vm._watchers, this)\r\n            }\r\n            var i = this.deps.length\r\n            while (i--) {\r\n                this$1.deps[i].removeSub(this$1)\r\n            }\r\n            this.active = false\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Recursively traverse an object to evoke all converted\r\n     * getters, so that every nested property inside the object\r\n     * is collected as a \"deep\" dependency.\r\n     */\r\n    var seenObjects = new _Set()\r\n\r\n    function traverse(val) {\r\n        seenObjects.clear()\r\n        _traverse(val, seenObjects)\r\n    }\r\n\r\n    function _traverse(val, seen) {\r\n        var i, keys\r\n        var isA = Array.isArray(val)\r\n        if ((!isA && !isObject(val)) || !Object.isExtensible(val)) {\r\n            return\r\n        }\r\n        if (val.__ob__) {\r\n            var depId = val.__ob__.dep.id\r\n            if (seen.has(depId)) {\r\n                return\r\n            }\r\n            seen.add(depId)\r\n        }\r\n        if (isA) {\r\n            i = val.length\r\n            while (i--) {\r\n                _traverse(val[i], seen)\r\n            }\r\n        } else {\r\n            keys = Object.keys(val)\r\n            i = keys.length\r\n            while (i--) {\r\n                _traverse(val[keys[i]], seen)\r\n            }\r\n        }\r\n    }\r\n\r\n    /*  */\r\n\r\n    var sharedPropertyDefinition = {\r\n        enumerable: true,\r\n        configurable: true,\r\n        get: noop,\r\n        set: noop\r\n    }\r\n\r\n    function proxy(target, sourceKey, key) {\r\n        sharedPropertyDefinition.get = function proxyGetter() {\r\n            return this[sourceKey][key]\r\n        }\r\n        sharedPropertyDefinition.set = function proxySetter(val) {\r\n            this[sourceKey][key] = val\r\n        }\r\n        Object.defineProperty(target, key, sharedPropertyDefinition)\r\n    }\r\n\r\n    function initState(vm) {\r\n        vm._watchers = []\r\n        var opts = vm.$options\r\n        if (opts.props) {\r\n            initProps(vm, opts.props)\r\n        }\r\n        if (opts.methods) {\r\n            initMethods(vm, opts.methods)\r\n        }\r\n        if (opts.data) {\r\n            initData(vm)\r\n        } else {\r\n            observe((vm._data = {}), true /* asRootData */)\r\n        }\r\n        if (opts.computed) {\r\n            initComputed(vm, opts.computed)\r\n        }\r\n        if (opts.watch && opts.watch !== nativeWatch) {\r\n            initWatch(vm, opts.watch)\r\n        }\r\n    }\r\n\r\n    function checkOptionType(vm, name) {\r\n        var option = vm.$options[name]\r\n        if (!isPlainObject(option)) {\r\n            warn('component option \"' + name + '\" should be an object.', vm)\r\n        }\r\n    }\r\n\r\n    function initProps(vm, propsOptions) {\r\n        var propsData = vm.$options.propsData || {}\r\n        var props = (vm._props = {})\r\n        // cache prop keys so that future props updates can iterate using Array\r\n        // instead of dynamic object key enumeration.\r\n        var keys = (vm.$options._propKeys = [])\r\n        var isRoot = !vm.$parent\r\n        // root instance props should be converted\r\n        observerState.shouldConvert = isRoot\r\n        var loop = function(key) {\r\n            keys.push(key)\r\n            var value = validateProp(key, propsOptions, propsData, vm)\r\n            /* istanbul ignore else */\r\n            {\r\n                defineReactive$$1(props, key, value)\r\n            }\r\n            // static props are already proxied on the component's prototype\r\n            // during Vue.extend(). We only need to proxy props defined at\r\n            // instantiation here.\r\n            if (!(key in vm)) {\r\n                proxy(vm, \"_props\", key)\r\n            }\r\n        }\r\n\r\n        for (var key in propsOptions) loop(key)\r\n        observerState.shouldConvert = true\r\n    }\r\n\r\n    function initData(vm) {\r\n        var data = vm.$options.data\r\n        data = vm._data = typeof data === \"function\" ? getData(data, vm) : data || {}\r\n        if (!isPlainObject(data)) {\r\n            data = {}\r\n            \"production\" !== \"production\" &&\r\n                warn(\r\n                    \"data functions should return an object:\\n\" +\r\n                        \"https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function\",\r\n                    vm\r\n                )\r\n        }\r\n        // proxy data on instance\r\n        var keys = Object.keys(data)\r\n        var props = vm.$options.props\r\n        var methods = vm.$options.methods\r\n        var i = keys.length\r\n        while (i--) {\r\n            var key = keys[i]\r\n            if (props && hasOwn(props, key)) {\r\n                \"production\" !== \"production\" &&\r\n                    warn(\r\n                        'The data property \"' +\r\n                            key +\r\n                            '\" is already declared as a prop. ' +\r\n                            \"Use prop default value instead.\",\r\n                        vm\r\n                    )\r\n            } else if (!isReserved(key)) {\r\n                proxy(vm, \"_data\", key)\r\n            }\r\n        }\r\n        // observe data\r\n        observe(data, true /* asRootData */)\r\n    }\r\n\r\n    function getData(data, vm) {\r\n        try {\r\n            return data.call(vm)\r\n        } catch (e) {\r\n            handleError(e, vm, \"data()\")\r\n            return {}\r\n        }\r\n    }\r\n\r\n    var computedWatcherOptions = {\r\n        lazy: true\r\n    }\r\n\r\n    function initComputed(vm, computed) {\r\n        \"production\" !== \"production\" && checkOptionType(vm, \"computed\")\r\n        var watchers = (vm._computedWatchers = Object.create(null))\r\n\r\n        for (var key in computed) {\r\n            var userDef = computed[key]\r\n            var getter = typeof userDef === \"function\" ? userDef : userDef.get\r\n            watchers[key] = new Watcher(vm, getter, noop, computedWatcherOptions)\r\n\r\n            // component-defined computed properties are already defined on the\r\n            // component prototype. We only need to define computed properties defined\r\n            // at instantiation here.\r\n            if (!(key in vm)) {\r\n                defineComputed(vm, key, userDef)\r\n            } else {\r\n            }\r\n        }\r\n    }\r\n\r\n    function defineComputed(target, key, userDef) {\r\n        if (typeof userDef === \"function\") {\r\n            sharedPropertyDefinition.get = createComputedGetter(key)\r\n            sharedPropertyDefinition.set = noop\r\n        } else {\r\n            sharedPropertyDefinition.get = userDef.get\r\n                ? userDef.cache !== false\r\n                    ? createComputedGetter(key)\r\n                    : userDef.get\r\n                : noop\r\n            sharedPropertyDefinition.set = userDef.set ? userDef.set : noop\r\n        }\r\n        Object.defineProperty(target, key, sharedPropertyDefinition)\r\n    }\r\n\r\n    function createComputedGetter(key) {\r\n        return function computedGetter() {\r\n            var watcher = this._computedWatchers && this._computedWatchers[key]\r\n            if (watcher) {\r\n                if (watcher.dirty) {\r\n                    watcher.evaluate()\r\n                }\r\n                if (Dep.target) {\r\n                    watcher.depend()\r\n                }\r\n                return watcher.value\r\n            }\r\n        }\r\n    }\r\n\r\n    function initMethods(vm, methods) {\r\n        \"production\" !== \"production\" && checkOptionType(vm, \"methods\")\r\n        var props = vm.$options.props\r\n        for (var key in methods) {\r\n            vm[key] = methods[key] == null ? noop : bind(methods[key], vm)\r\n        }\r\n    }\r\n\r\n    function initWatch(vm, watch) {\r\n        \"production\" !== \"production\" && checkOptionType(vm, \"watch\")\r\n        for (var key in watch) {\r\n            var handler = watch[key]\r\n            if (Array.isArray(handler)) {\r\n                for (var i = 0; i < handler.length; i++) {\r\n                    createWatcher(vm, key, handler[i])\r\n                }\r\n            } else {\r\n                createWatcher(vm, key, handler)\r\n            }\r\n        }\r\n    }\r\n\r\n    function createWatcher(vm, keyOrFn, handler, options) {\r\n        if (isPlainObject(handler)) {\r\n            options = handler\r\n            handler = handler.handler\r\n        }\r\n        if (typeof handler === \"string\") {\r\n            handler = vm[handler]\r\n        }\r\n        return vm.$watch(keyOrFn, handler, options)\r\n    }\r\n\r\n    function stateMixin(Vue) {\r\n        // flow somehow has problems with directly declared definition object\r\n        // when using Object.defineProperty, so we have to procedurally build up\r\n        // the object here.\r\n        var dataDef = {}\r\n        dataDef.get = function() {\r\n            return this._data\r\n        }\r\n        var propsDef = {}\r\n        propsDef.get = function() {\r\n            return this._props\r\n        }\r\n        Object.defineProperty(Vue.prototype, \"$data\", dataDef)\r\n        Object.defineProperty(Vue.prototype, \"$props\", propsDef)\r\n\r\n        Vue.prototype.$set = set\r\n        Vue.prototype.$delete = del\r\n\r\n        Vue.prototype.$watch = function(expOrFn, cb, options) {\r\n            var vm = this\r\n            if (isPlainObject(cb)) {\r\n                return createWatcher(vm, expOrFn, cb, options)\r\n            }\r\n            options = options || {}\r\n            options.user = true\r\n            var watcher = new Watcher(vm, expOrFn, cb, options)\r\n            if (options.immediate) {\r\n                cb.call(vm, watcher.value)\r\n            }\r\n            return function unwatchFn() {\r\n                watcher.teardown()\r\n            }\r\n        }\r\n    }\r\n\r\n    /*  */\r\n\r\n    function initProvide(vm) {\r\n        var provide = vm.$options.provide\r\n        if (provide) {\r\n            vm._provided = typeof provide === \"function\" ? provide.call(vm) : provide\r\n        }\r\n    }\r\n\r\n    function initInjections(vm) {\r\n        var result = resolveInject(vm.$options.inject, vm)\r\n        if (result) {\r\n            observerState.shouldConvert = false\r\n            Object.keys(result).forEach(function(key) {\r\n                /* istanbul ignore else */\r\n                {\r\n                    defineReactive$$1(vm, key, result[key])\r\n                }\r\n            })\r\n            observerState.shouldConvert = true\r\n        }\r\n    }\r\n\r\n    function resolveInject(inject, vm) {\r\n        if (inject) {\r\n            // inject is :any because flow is not smart enough to figure out cached\r\n            var result = Object.create(null)\r\n            var keys = hasSymbol ? Reflect.ownKeys(inject) : Object.keys(inject)\r\n\r\n            for (var i = 0; i < keys.length; i++) {\r\n                var key = keys[i]\r\n                var provideKey = inject[key]\r\n                var source = vm\r\n                while (source) {\r\n                    if (source._provided && provideKey in source._provided) {\r\n                        result[key] = source._provided[provideKey]\r\n                        break\r\n                    }\r\n                    source = source.$parent\r\n                }\r\n                if (false) {\r\n                    warn('Injection \"' + key + '\" not found', vm)\r\n                }\r\n            }\r\n            return result\r\n        }\r\n    }\r\n\r\n    /*  */\r\n\r\n    function createFunctionalComponent(Ctor, propsData, data, context, children) {\r\n        var props = {}\r\n        var propOptions = Ctor.options.props\r\n        if (isDef(propOptions)) {\r\n            for (var key in propOptions) {\r\n                props[key] = validateProp(key, propOptions, propsData || {})\r\n            }\r\n        } else {\r\n            if (isDef(data.attrs)) {\r\n                mergeProps(props, data.attrs)\r\n            }\r\n            if (isDef(data.props)) {\r\n                mergeProps(props, data.props)\r\n            }\r\n        }\r\n        // ensure the createElement function in functional components\r\n        // gets a unique context - this is necessary for correct named slot check\r\n        var _context = Object.create(context)\r\n        var h = function(a, b, c, d) {\r\n            return createElement(_context, a, b, c, d, true)\r\n        }\r\n        var vnode = Ctor.options.render.call(null, h, {\r\n            data: data,\r\n            props: props,\r\n            children: children,\r\n            parent: context,\r\n            listeners: data.on || {},\r\n            injections: resolveInject(Ctor.options.inject, context),\r\n            slots: function() {\r\n                return resolveSlots(children, context)\r\n            }\r\n        })\r\n        if (vnode instanceof VNode) {\r\n            vnode.functionalContext = context\r\n            vnode.functionalOptions = Ctor.options\r\n            if (data.slot) {\r\n                ;(vnode.data || (vnode.data = {})).slot = data.slot\r\n            }\r\n        }\r\n        return vnode\r\n    }\r\n\r\n    function mergeProps(to, from) {\r\n        for (var key in from) {\r\n            to[camelize(key)] = from[key]\r\n        }\r\n    }\r\n\r\n    /*  */\r\n\r\n    // hooks to be invoked on component VNodes during patch\r\n    var componentVNodeHooks = {\r\n        init: function init(vnode, hydrating, parentElm, refElm) {\r\n            if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {\r\n                var child = (vnode.componentInstance = createComponentInstanceForVnode(\r\n                    vnode,\r\n                    activeInstance,\r\n                    parentElm,\r\n                    refElm\r\n                ))\r\n                child.$mount(hydrating ? vnode.elm : undefined, hydrating)\r\n            } else if (vnode.data.keepAlive) {\r\n                // kept-alive components, treat as a patch\r\n                var mountedNode = vnode // work around flow\r\n                componentVNodeHooks.prepatch(mountedNode, mountedNode)\r\n            }\r\n        },\r\n\r\n        prepatch: function prepatch(oldVnode, vnode) {\r\n            var options = vnode.componentOptions\r\n            var child = (vnode.componentInstance = oldVnode.componentInstance)\r\n            updateChildComponent(\r\n                child,\r\n                options.propsData, // updated props\r\n                options.listeners, // updated listeners\r\n                vnode, // new parent vnode\r\n                options.children // new children\r\n            )\r\n        },\r\n\r\n        insert: function insert(vnode) {\r\n            var context = vnode.context\r\n            var componentInstance = vnode.componentInstance\r\n\r\n            if (!componentInstance._isMounted) {\r\n                componentInstance._isMounted = true\r\n                callHook(componentInstance, \"mounted\")\r\n            }\r\n            if (vnode.data.keepAlive) {\r\n                if (context._isMounted) {\r\n                    // vue-router#1212\r\n                    // During updates, a kept-alive component's child components may\r\n                    // change, so directly walking the tree here may call activated hooks\r\n                    // on incorrect children. Instead we push them into a queue which will\r\n                    // be processed after the whole patch process ended.\r\n                    queueActivatedComponent(componentInstance)\r\n                } else {\r\n                    activateChildComponent(componentInstance, true /* direct */)\r\n                }\r\n            }\r\n        },\r\n\r\n        destroy: function destroy(vnode) {\r\n            var componentInstance = vnode.componentInstance\r\n            if (!componentInstance._isDestroyed) {\r\n                if (!vnode.data.keepAlive) {\r\n                    componentInstance.$destroy()\r\n                } else {\r\n                    deactivateChildComponent(componentInstance, true /* direct */)\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    var hooksToMerge = Object.keys(componentVNodeHooks)\r\n\r\n    function createComponent(Ctor, data, context, children, tag) {\r\n        if (isUndef(Ctor)) {\r\n            return\r\n        }\r\n\r\n        var baseCtor = context.$options._base\r\n\r\n        // plain options object: turn it into a constructor\r\n        if (isObject(Ctor)) {\r\n            Ctor = baseCtor.extend(Ctor)\r\n        }\r\n\r\n        // if at this stage it's not a constructor or an async component factory,\r\n        // reject.\r\n        if (typeof Ctor !== \"function\") {\r\n            return\r\n        }\r\n\r\n        // async component\r\n        var asyncFactory\r\n        if (isUndef(Ctor.cid)) {\r\n            asyncFactory = Ctor\r\n            Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context)\r\n            if (Ctor === undefined) {\r\n                // return a placeholder node for async component, which is rendered\r\n                // as a comment node but preserves all the raw information for the node.\r\n                // the information will be used for async server-rendering and hydration.\r\n                return createAsyncPlaceholder(asyncFactory, data, context, children, tag)\r\n            }\r\n        }\r\n\r\n        data = data || {}\r\n\r\n        // resolve constructor options in case global mixins are applied after\r\n        // component constructor creation\r\n        resolveConstructorOptions(Ctor)\r\n\r\n        // transform component v-model data into props & events\r\n        if (isDef(data.model)) {\r\n            transformModel(Ctor.options, data)\r\n        }\r\n\r\n        // extract props\r\n        var propsData = extractPropsFromVNodeData(data, Ctor, tag)\r\n\r\n        // functional component\r\n        if (isTrue(Ctor.options.functional)) {\r\n            return createFunctionalComponent(Ctor, propsData, data, context, children)\r\n        }\r\n\r\n        // keep listeners\r\n        var listeners = data.on\r\n\r\n        if (isTrue(Ctor.options.abstract)) {\r\n            // abstract components do not keep anything\r\n            // other than props & listeners & slot\r\n\r\n            // work around flow\r\n            var slot = data.slot\r\n            data = {}\r\n            if (slot) {\r\n                data.slot = slot\r\n            }\r\n        }\r\n\r\n        // merge component management hooks onto the placeholder node\r\n        mergeHooks(data)\r\n\r\n        // return a placeholder vnode\r\n        var name = Ctor.options.name || tag\r\n        var vnode = new VNode(\r\n            \"vue-component-\" + Ctor.cid + (name ? \"-\" + name : \"\"),\r\n            data,\r\n            undefined,\r\n            undefined,\r\n            undefined,\r\n            context,\r\n            {\r\n                Ctor: Ctor,\r\n                propsData: propsData,\r\n                listeners: listeners,\r\n                tag: tag,\r\n                children: children\r\n            },\r\n            asyncFactory\r\n        )\r\n        return vnode\r\n    }\r\n\r\n    function createComponentInstanceForVnode(\r\n        vnode, // we know it's MountedComponentVNode but flow doesn't\r\n        parent, // activeInstance in lifecycle state\r\n        parentElm,\r\n        refElm\r\n    ) {\r\n        var vnodeComponentOptions = vnode.componentOptions\r\n        var options = {\r\n            _isComponent: true,\r\n            parent: parent,\r\n            propsData: vnodeComponentOptions.propsData,\r\n            _componentTag: vnodeComponentOptions.tag,\r\n            _parentVnode: vnode,\r\n            _parentListeners: vnodeComponentOptions.listeners,\r\n            _renderChildren: vnodeComponentOptions.children,\r\n            _parentElm: parentElm || null,\r\n            _refElm: refElm || null\r\n        }\r\n        // check inline-template render functions\r\n        var inlineTemplate = vnode.data.inlineTemplate\r\n        if (isDef(inlineTemplate)) {\r\n            options.render = inlineTemplate.render\r\n            options.staticRenderFns = inlineTemplate.staticRenderFns\r\n        }\r\n        return new vnodeComponentOptions.Ctor(options)\r\n    }\r\n\r\n    function mergeHooks(data) {\r\n        if (!data.hook) {\r\n            data.hook = {}\r\n        }\r\n        for (var i = 0; i < hooksToMerge.length; i++) {\r\n            var key = hooksToMerge[i]\r\n            var fromParent = data.hook[key]\r\n            var ours = componentVNodeHooks[key]\r\n            data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours\r\n        }\r\n    }\r\n\r\n    function mergeHook$1(one, two) {\r\n        return function(a, b, c, d) {\r\n            one(a, b, c, d)\r\n            two(a, b, c, d)\r\n        }\r\n    }\r\n\r\n    // transform component v-model info (value and callback) into\r\n    // prop and event handler respectively.\r\n    function transformModel(options, data) {\r\n        var prop = (options.model && options.model.prop) || \"value\"\r\n        var event = (options.model && options.model.event) || \"input\"\r\n        ;(data.props || (data.props = {}))[prop] = data.model.value\r\n        var on = data.on || (data.on = {})\r\n        if (isDef(on[event])) {\r\n            on[event] = [data.model.callback].concat(on[event])\r\n        } else {\r\n            on[event] = data.model.callback\r\n        }\r\n    }\r\n\r\n    /*  */\r\n\r\n    var SIMPLE_NORMALIZE = 1\r\n    var ALWAYS_NORMALIZE = 2\r\n\r\n    // wrapper function for providing a more flexible interface\r\n    // without getting yelled at by flow\r\n    function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {\r\n        if (Array.isArray(data) || isPrimitive(data)) {\r\n            normalizationType = children\r\n            children = data\r\n            data = undefined\r\n        }\r\n        if (isTrue(alwaysNormalize)) {\r\n            normalizationType = ALWAYS_NORMALIZE\r\n        }\r\n        return _createElement(context, tag, data, children, normalizationType)\r\n    }\r\n\r\n    function _createElement(context, tag, data, children, normalizationType) {\r\n        if (isDef(data) && isDef(data.__ob__)) {\r\n            \"production\" !== \"production\" &&\r\n                warn(\r\n                    \"Avoid using observed data object as vnode data: \" +\r\n                        JSON.stringify(data) +\r\n                        \"\\n\" +\r\n                        \"Always create fresh vnode data objects in each render!\",\r\n                    context\r\n                )\r\n            return createEmptyVNode()\r\n        }\r\n        // object syntax in v-bind\r\n        if (isDef(data) && isDef(data.is)) {\r\n            tag = data.is\r\n        }\r\n        if (!tag) {\r\n            // in case of component :is set to falsy value\r\n            return createEmptyVNode()\r\n        }\r\n        // warn against non-primitive key\r\n        if (\r\n            false\r\n        ) {\r\n            warn(\r\n                \"Avoid using non-primitive value as key, \" + \"use string/number value instead.\",\r\n                context\r\n            )\r\n        }\r\n        // support single function children as default scoped slot\r\n        if (Array.isArray(children) && typeof children[0] === \"function\") {\r\n            data = data || {}\r\n            data.scopedSlots = {\r\n                default: children[0]\r\n            }\r\n            children.length = 0\r\n        }\r\n        if (normalizationType === ALWAYS_NORMALIZE) {\r\n            children = normalizeChildren(children)\r\n        } else if (normalizationType === SIMPLE_NORMALIZE) {\r\n            children = simpleNormalizeChildren(children)\r\n        }\r\n        var vnode, ns\r\n        if (typeof tag === \"string\") {\r\n            var Ctor\r\n            ns = config.getTagNamespace(tag)\r\n            if (config.isReservedTag(tag)) {\r\n                // platform built-in elements\r\n                vnode = new VNode(\r\n                    config.parsePlatformTagName(tag),\r\n                    data,\r\n                    children,\r\n                    undefined,\r\n                    undefined,\r\n                    context\r\n                )\r\n            } else if (isDef((Ctor = resolveAsset(context.$options, \"components\", tag)))) {\r\n                // component\r\n                vnode = createComponent(Ctor, data, context, children, tag)\r\n            } else {\r\n                // unknown or unlisted namespaced elements\r\n                // check at runtime because it may get assigned a namespace when its\r\n                // parent normalizes children\r\n                vnode = new VNode(tag, data, children, undefined, undefined, context)\r\n            }\r\n        } else {\r\n            // direct component options / constructor\r\n            vnode = createComponent(tag, data, context, children)\r\n        }\r\n        if (isDef(vnode)) {\r\n            if (ns) {\r\n                applyNS(vnode, ns)\r\n            }\r\n            return vnode\r\n        } else {\r\n            return createEmptyVNode()\r\n        }\r\n    }\r\n\r\n    function applyNS(vnode, ns) {\r\n        vnode.ns = ns\r\n        if (vnode.tag === \"foreignObject\") {\r\n            // use default namespace inside foreignObject\r\n            return\r\n        }\r\n        if (isDef(vnode.children)) {\r\n            for (var i = 0, l = vnode.children.length; i < l; i++) {\r\n                var child = vnode.children[i]\r\n                if (isDef(child.tag) && isUndef(child.ns)) {\r\n                    applyNS(child, ns)\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    /*  */\r\n\r\n    /**\r\n     * Runtime helper for rendering v-for lists.\r\n     */\r\n    function renderList(val, render) {\r\n        var ret, i, l, keys, key\r\n        if (Array.isArray(val) || typeof val === \"string\") {\r\n            ret = new Array(val.length)\r\n            for (i = 0, l = val.length; i < l; i++) {\r\n                ret[i] = render(val[i], i)\r\n            }\r\n        } else if (typeof val === \"number\") {\r\n            ret = new Array(val)\r\n            for (i = 0; i < val; i++) {\r\n                ret[i] = render(i + 1, i)\r\n            }\r\n        } else if (isObject(val)) {\r\n            keys = Object.keys(val)\r\n            ret = new Array(keys.length)\r\n            for (i = 0, l = keys.length; i < l; i++) {\r\n                key = keys[i]\r\n                ret[i] = render(val[key], key, i)\r\n            }\r\n        }\r\n        if (isDef(ret)) {\r\n            ret._isVList = true\r\n        }\r\n        return ret\r\n    }\r\n\r\n    /*  */\r\n\r\n    /**\r\n     * Runtime helper for rendering <slot>\r\n     */\r\n    function renderSlot(name, fallback, props, bindObject) {\r\n        var scopedSlotFn = this.$scopedSlots[name]\r\n        if (scopedSlotFn) {\r\n            // scoped slot\r\n            props = props || {}\r\n            if (bindObject) {\r\n                props = extend(extend({}, bindObject), props)\r\n            }\r\n            return scopedSlotFn(props) || fallback\r\n        } else {\r\n            var slotNodes = this.$slots[name]\r\n            // warn duplicate slot usage\r\n            if (slotNodes && \"production\" !== \"production\") {\r\n                slotNodes._rendered &&\r\n                    warn(\r\n                        'Duplicate presence of slot \"' +\r\n                            name +\r\n                            '\" found in the same render tree ' +\r\n                            \"- this will likely cause render errors.\",\r\n                        this\r\n                    )\r\n                slotNodes._rendered = true\r\n            }\r\n            return slotNodes || fallback\r\n        }\r\n    }\r\n\r\n    /*  */\r\n\r\n    /**\r\n     * Runtime helper for resolving filters\r\n     */\r\n    function resolveFilter(id) {\r\n        return resolveAsset(this.$options, \"filters\", id, true) || identity\r\n    }\r\n\r\n    /*  */\r\n\r\n    /**\r\n     * Runtime helper for checking keyCodes from config.\r\n     */\r\n    function checkKeyCodes(eventKeyCode, key, builtInAlias) {\r\n        var keyCodes = config.keyCodes[key] || builtInAlias\r\n        if (Array.isArray(keyCodes)) {\r\n            return keyCodes.indexOf(eventKeyCode) === -1\r\n        } else {\r\n            return keyCodes !== eventKeyCode\r\n        }\r\n    }\r\n\r\n    /*  */\r\n\r\n    /**\r\n     * Runtime helper for merging v-bind=\"object\" into a VNode's data.\r\n     */\r\n    function bindObjectProps(data, tag, value, asProp, isSync) {\r\n        if (value) {\r\n            if (!isObject(value)) {\r\n                \"production\" !== \"production\" &&\r\n                    warn(\"v-bind without argument expects an Object or Array value\", this)\r\n            } else {\r\n                if (Array.isArray(value)) {\r\n                    value = toObject(value)\r\n                }\r\n                var hash\r\n                var loop = function(key) {\r\n                    if (key === \"class\" || key === \"style\" || isReservedAttribute(key)) {\r\n                        hash = data\r\n                    } else {\r\n                        var type = data.attrs && data.attrs.type\r\n                        hash =\r\n                            asProp || config.mustUseProp(tag, type, key)\r\n                                ? data.domProps || (data.domProps = {})\r\n                                : data.attrs || (data.attrs = {})\r\n                    }\r\n                    if (!(key in hash)) {\r\n                        hash[key] = value[key]\r\n\r\n                        if (isSync) {\r\n                            var on = data.on || (data.on = {})\r\n                            on[\"update:\" + key] = function($event) {\r\n                                value[key] = $event\r\n                            }\r\n                        }\r\n                    }\r\n                }\r\n\r\n                for (var key in value) loop(key)\r\n            }\r\n        }\r\n        return data\r\n    }\r\n\r\n    /*  */\r\n\r\n    /**\r\n     * Runtime helper for rendering static trees.\r\n     */\r\n    function renderStatic(index, isInFor) {\r\n        var tree = this._staticTrees[index]\r\n        // if has already-rendered static tree and not inside v-for,\r\n        // we can reuse the same tree by doing a shallow clone.\r\n        if (tree && !isInFor) {\r\n            return Array.isArray(tree) ? cloneVNodes(tree) : cloneVNode(tree)\r\n        }\r\n        // otherwise, render a fresh tree.\r\n        tree = this._staticTrees[index] = this.$options.staticRenderFns[index].call(\r\n            this._renderProxy\r\n        )\r\n        markStatic(tree, \"__static__\" + index, false)\r\n        return tree\r\n    }\r\n\r\n    /**\r\n     * Runtime helper for v-once.\r\n     * Effectively it means marking the node as static with a unique key.\r\n     */\r\n    function markOnce(tree, index, key) {\r\n        markStatic(tree, \"__once__\" + index + (key ? \"_\" + key : \"\"), true)\r\n        return tree\r\n    }\r\n\r\n    function markStatic(tree, key, isOnce) {\r\n        if (Array.isArray(tree)) {\r\n            for (var i = 0; i < tree.length; i++) {\r\n                if (tree[i] && typeof tree[i] !== \"string\") {\r\n                    markStaticNode(tree[i], key + \"_\" + i, isOnce)\r\n                }\r\n            }\r\n        } else {\r\n            markStaticNode(tree, key, isOnce)\r\n        }\r\n    }\r\n\r\n    function markStaticNode(node, key, isOnce) {\r\n        node.isStatic = true\r\n        node.key = key\r\n        node.isOnce = isOnce\r\n    }\r\n\r\n    /*  */\r\n\r\n    function bindObjectListeners(data, value) {\r\n        if (value) {\r\n            if (!isPlainObject(value)) {\r\n                \"production\" !== \"production\" &&\r\n                    warn(\"v-on without argument expects an Object value\", this)\r\n            } else {\r\n                var on = (data.on = data.on ? extend({}, data.on) : {})\r\n                for (var key in value) {\r\n                    var existing = on[key]\r\n                    var ours = value[key]\r\n                    on[key] = existing ? [].concat(ours, existing) : ours\r\n                }\r\n            }\r\n        }\r\n        return data\r\n    }\r\n\r\n    /*  */\r\n\r\n    function initRender(vm) {\r\n        vm._vnode = null // the root of the child tree\r\n        vm._staticTrees = null\r\n        var parentVnode = (vm.$vnode = vm.$options._parentVnode) // the placeholder node in parent tree\r\n        var renderContext = parentVnode && parentVnode.context\r\n        vm.$slots = resolveSlots(vm.$options._renderChildren, renderContext)\r\n        vm.$scopedSlots = emptyObject\r\n        // bind the createElement fn to this instance\r\n        // so that we get proper render context inside it.\r\n        // args order: tag, data, children, normalizationType, alwaysNormalize\r\n        // internal version is used by render functions compiled from templates\r\n        vm._c = function(a, b, c, d) {\r\n            return createElement(vm, a, b, c, d, false)\r\n        }\r\n        // normalization is always applied for the public version, used in\r\n        // user-written render functions.\r\n        vm.$createElement = function(a, b, c, d) {\r\n            return createElement(vm, a, b, c, d, true)\r\n        }\r\n\r\n        // $attrs & $listeners are exposed for easier HOC creation.\r\n        // they need to be reactive so that HOCs using them are always updated\r\n        var parentData = parentVnode && parentVnode.data\r\n        /* istanbul ignore else */\r\n        {\r\n            defineReactive$$1(vm, \"$attrs\", parentData && parentData.attrs, null, true)\r\n            defineReactive$$1(vm, \"$listeners\", parentData && parentData.on, null, true)\r\n        }\r\n    }\r\n\r\n    function renderMixin(Vue) {\r\n        Vue.prototype.$nextTick = function(fn) {\r\n            return nextTick(fn, this)\r\n        }\r\n\r\n        Vue.prototype._render = function() {\r\n            var vm = this\r\n            var ref = vm.$options\r\n            var render = ref.render\r\n            var staticRenderFns = ref.staticRenderFns\r\n            var _parentVnode = ref._parentVnode\r\n\r\n            if (vm._isMounted) {\r\n                // clone slot nodes on re-renders\r\n                for (var key in vm.$slots) {\r\n                    vm.$slots[key] = cloneVNodes(vm.$slots[key])\r\n                }\r\n            }\r\n\r\n            vm.$scopedSlots = (_parentVnode && _parentVnode.data.scopedSlots) || emptyObject\r\n\r\n            if (staticRenderFns && !vm._staticTrees) {\r\n                vm._staticTrees = []\r\n            }\r\n            // set parent vnode. this allows render functions to have access\r\n            // to the data on the placeholder node.\r\n            vm.$vnode = _parentVnode\r\n            // render self\r\n            var vnode\r\n            try {\r\n                vnode = render.call(vm._renderProxy, vm.$createElement)\r\n            } catch (e) {\r\n                handleError(e, vm, \"render function\")\r\n                // return error render result,\r\n                // or previous vnode to prevent render error causing blank component\r\n                /* istanbul ignore else */\r\n                {\r\n                    vnode = vm._vnode\r\n                }\r\n            }\r\n            // return empty vnode in case the render function errored out\r\n            if (!(vnode instanceof VNode)) {\r\n                if (false) {\r\n                    warn(\r\n                        \"Multiple root nodes returned from render function. Render function \" +\r\n                            \"should return a single root node.\",\r\n                        vm\r\n                    )\r\n                }\r\n                vnode = createEmptyVNode()\r\n            }\r\n            // set parent\r\n            vnode.parent = _parentVnode\r\n            return vnode\r\n        }\r\n\r\n        // internal render helpers.\r\n        // these are exposed on the instance prototype to reduce generated render\r\n        // code size.\r\n        Vue.prototype._o = markOnce\r\n        Vue.prototype._n = toNumber\r\n        Vue.prototype._s = toString\r\n        Vue.prototype._l = renderList\r\n        Vue.prototype._t = renderSlot\r\n        Vue.prototype._q = looseEqual\r\n        Vue.prototype._i = looseIndexOf\r\n        Vue.prototype._m = renderStatic\r\n        Vue.prototype._f = resolveFilter\r\n        Vue.prototype._k = checkKeyCodes\r\n        Vue.prototype._b = bindObjectProps\r\n        Vue.prototype._v = createTextVNode\r\n        Vue.prototype._e = createEmptyVNode\r\n        Vue.prototype._u = resolveScopedSlots\r\n        Vue.prototype._g = bindObjectListeners\r\n    }\r\n\r\n    /*  */\r\n\r\n    var uid = 0\r\n\r\n    function initMixin(Vue) {\r\n        Vue.prototype._init = function(options) {\r\n            var vm = this\r\n            // a uid\r\n            vm._uid = uid++\r\n\r\n            var startTag, endTag\r\n            /* istanbul ignore if */\r\n            if (false) {\r\n                startTag = \"vue-perf-init:\" + vm._uid\r\n                endTag = \"vue-perf-end:\" + vm._uid\r\n                mark(startTag)\r\n            }\r\n\r\n            // a flag to avoid this being observed\r\n            vm._isVue = true\r\n            // merge options\r\n            if (options && options._isComponent) {\r\n                // optimize internal component instantiation\r\n                // since dynamic options merging is pretty slow, and none of the\r\n                // internal component options needs special treatment.\r\n                initInternalComponent(vm, options)\r\n            } else {\r\n                vm.$options = mergeOptions(\r\n                    resolveConstructorOptions(vm.constructor),\r\n                    options || {},\r\n                    vm\r\n                )\r\n            }\r\n            /* istanbul ignore else */\r\n            {\r\n                vm._renderProxy = vm\r\n            }\r\n            // expose real self\r\n            vm._self = vm\r\n            initLifecycle(vm)\r\n            initEvents(vm)\r\n            initRender(vm)\r\n            callHook(vm, \"beforeCreate\")\r\n            initInjections(vm) // resolve injections before data/props\r\n            initState(vm)\r\n            initProvide(vm) // resolve provide after data/props\r\n            callHook(vm, \"created\")\r\n\r\n            /* istanbul ignore if */\r\n            if (false) {\r\n                vm._name = formatComponentName(vm, false)\r\n                mark(endTag)\r\n                measure(vm._name + \" init\", startTag, endTag)\r\n            }\r\n\r\n            if (vm.$options.el) {\r\n                vm.$mount(vm.$options.el)\r\n            }\r\n        }\r\n    }\r\n\r\n    function initInternalComponent(vm, options) {\r\n        var opts = (vm.$options = Object.create(vm.constructor.options))\r\n        // doing this because it's faster than dynamic enumeration.\r\n        opts.parent = options.parent\r\n        opts.propsData = options.propsData\r\n        opts._parentVnode = options._parentVnode\r\n        opts._parentListeners = options._parentListeners\r\n        opts._renderChildren = options._renderChildren\r\n        opts._componentTag = options._componentTag\r\n        opts._parentElm = options._parentElm\r\n        opts._refElm = options._refElm\r\n        if (options.render) {\r\n            opts.render = options.render\r\n            opts.staticRenderFns = options.staticRenderFns\r\n        }\r\n    }\r\n\r\n    function resolveConstructorOptions(Ctor) {\r\n        var options = Ctor.options\r\n        if (Ctor.super) {\r\n            var superOptions = resolveConstructorOptions(Ctor.super)\r\n            var cachedSuperOptions = Ctor.superOptions\r\n            if (superOptions !== cachedSuperOptions) {\r\n                // super option changed,\r\n                // need to resolve new options.\r\n                Ctor.superOptions = superOptions\r\n                // check if there are any late-modified/attached options (#4976)\r\n                var modifiedOptions = resolveModifiedOptions(Ctor)\r\n                // update base extend options\r\n                if (modifiedOptions) {\r\n                    extend(Ctor.extendOptions, modifiedOptions)\r\n                }\r\n                options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions)\r\n                if (options.name) {\r\n                    options.components[options.name] = Ctor\r\n                }\r\n            }\r\n        }\r\n        return options\r\n    }\r\n\r\n    function resolveModifiedOptions(Ctor) {\r\n        var modified\r\n        var latest = Ctor.options\r\n        var extended = Ctor.extendOptions\r\n        var sealed = Ctor.sealedOptions\r\n        for (var key in latest) {\r\n            if (latest[key] !== sealed[key]) {\r\n                if (!modified) {\r\n                    modified = {}\r\n                }\r\n                modified[key] = dedupe(latest[key], extended[key], sealed[key])\r\n            }\r\n        }\r\n        return modified\r\n    }\r\n\r\n    function dedupe(latest, extended, sealed) {\r\n        // compare latest and sealed to ensure lifecycle hooks won't be duplicated\r\n        // between merges\r\n        if (Array.isArray(latest)) {\r\n            var res = []\r\n            sealed = Array.isArray(sealed) ? sealed : [sealed]\r\n            extended = Array.isArray(extended) ? extended : [extended]\r\n            for (var i = 0; i < latest.length; i++) {\r\n                // push original options and not sealed options to exclude duplicated options\r\n                if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {\r\n                    res.push(latest[i])\r\n                }\r\n            }\r\n            return res\r\n        } else {\r\n            return latest\r\n        }\r\n    }\r\n\r\n    function Vue$3(options) {\r\n        if (false) {\r\n            warn(\"Vue is a constructor and should be called with the `new` keyword\")\r\n        }\r\n        this._init(options)\r\n    }\r\n\r\n    initMixin(Vue$3)\r\n    stateMixin(Vue$3)\r\n    eventsMixin(Vue$3)\r\n    lifecycleMixin(Vue$3)\r\n    renderMixin(Vue$3)\r\n\r\n    /*  */\r\n\r\n    function initUse(Vue) {\r\n        Vue.use = function(plugin) {\r\n            var installedPlugins = this._installedPlugins || (this._installedPlugins = [])\r\n            if (installedPlugins.indexOf(plugin) > -1) {\r\n                return this\r\n            }\r\n\r\n            // additional parameters\r\n            var args = toArray(arguments, 1)\r\n            args.unshift(this)\r\n            if (typeof plugin.install === \"function\") {\r\n                plugin.install.apply(plugin, args)\r\n            } else if (typeof plugin === \"function\") {\r\n                plugin.apply(null, args)\r\n            }\r\n            installedPlugins.push(plugin)\r\n            return this\r\n        }\r\n    }\r\n\r\n    /*  */\r\n\r\n    function initMixin$1(Vue) {\r\n        Vue.mixin = function(mixin) {\r\n            this.options = mergeOptions(this.options, mixin)\r\n            return this\r\n        }\r\n    }\r\n\r\n    /*  */\r\n\r\n    function initExtend(Vue) {\r\n        /**\r\n         * Each instance constructor, including Vue, has a unique\r\n         * cid. This enables us to create wrapped \"child\r\n         * constructors\" for prototypal inheritance and cache them.\r\n         */\r\n        Vue.cid = 0\r\n        var cid = 1\r\n\r\n        /**\r\n         * Class inheritance\r\n         */\r\n        Vue.extend = function(extendOptions) {\r\n            extendOptions = extendOptions || {}\r\n            var Super = this\r\n            var SuperId = Super.cid\r\n            var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {})\r\n            if (cachedCtors[SuperId]) {\r\n                return cachedCtors[SuperId]\r\n            }\r\n\r\n            var name = extendOptions.name || Super.options.name\r\n            var Sub = function VueComponent(options) {\r\n                this._init(options)\r\n            }\r\n            Sub.prototype = Object.create(Super.prototype)\r\n            Sub.prototype.constructor = Sub\r\n            Sub.cid = cid++\r\n            Sub.options = mergeOptions(Super.options, extendOptions)\r\n            Sub[\"super\"] = Super\r\n\r\n            // For props and computed properties, we define the proxy getters on\r\n            // the Vue instances at extension time, on the extended prototype. This\r\n            // avoids Object.defineProperty calls for each instance created.\r\n            if (Sub.options.props) {\r\n                initProps$1(Sub)\r\n            }\r\n            if (Sub.options.computed) {\r\n                initComputed$1(Sub)\r\n            }\r\n\r\n            // allow further extension/mixin/plugin usage\r\n            Sub.extend = Super.extend\r\n            Sub.mixin = Super.mixin\r\n            Sub.use = Super.use\r\n\r\n            // create asset registers, so extended classes\r\n            // can have their private assets too.\r\n            ASSET_TYPES.forEach(function(type) {\r\n                Sub[type] = Super[type]\r\n            })\r\n            // enable recursive self-lookup\r\n            if (name) {\r\n                Sub.options.components[name] = Sub\r\n            }\r\n\r\n            // keep a reference to the super options at extension time.\r\n            // later at instantiation we can check if Super's options have\r\n            // been updated.\r\n            Sub.superOptions = Super.options\r\n            Sub.extendOptions = extendOptions\r\n            Sub.sealedOptions = extend({}, Sub.options)\r\n\r\n            // cache constructor\r\n            cachedCtors[SuperId] = Sub\r\n            return Sub\r\n        }\r\n    }\r\n\r\n    function initProps$1(Comp) {\r\n        var props = Comp.options.props\r\n        for (var key in props) {\r\n            proxy(Comp.prototype, \"_props\", key)\r\n        }\r\n    }\r\n\r\n    function initComputed$1(Comp) {\r\n        var computed = Comp.options.computed\r\n        for (var key in computed) {\r\n            defineComputed(Comp.prototype, key, computed[key])\r\n        }\r\n    }\r\n\r\n    /*  */\r\n\r\n    function initAssetRegisters(Vue) {\r\n        /**\r\n         * Create asset registration methods.\r\n         */\r\n        ASSET_TYPES.forEach(function(type) {\r\n            Vue[type] = function(id, definition) {\r\n                if (!definition) {\r\n                    return this.options[type + \"s\"][id]\r\n                } else {\r\n                    /* istanbul ignore if */\r\n                    if (type === \"component\" && isPlainObject(definition)) {\r\n                        definition.name = definition.name || id\r\n                        definition = this.options._base.extend(definition)\r\n                    }\r\n                    if (type === \"directive\" && typeof definition === \"function\") {\r\n                        definition = {\r\n                            bind: definition,\r\n                            update: definition\r\n                        }\r\n                    }\r\n                    this.options[type + \"s\"][id] = definition\r\n                    return definition\r\n                }\r\n            }\r\n        })\r\n    }\r\n\r\n    /*  */\r\n\r\n    var patternTypes = [String, RegExp, Array]\r\n\r\n    function getComponentName(opts) {\r\n        return opts && (opts.Ctor.options.name || opts.tag)\r\n    }\r\n\r\n    function matches(pattern, name) {\r\n        if (Array.isArray(pattern)) {\r\n            return pattern.indexOf(name) > -1\r\n        } else if (typeof pattern === \"string\") {\r\n            return pattern.split(\",\").indexOf(name) > -1\r\n        } else if (isRegExp(pattern)) {\r\n            return pattern.test(name)\r\n        }\r\n        /* istanbul ignore next */\r\n        return false\r\n    }\r\n\r\n    function pruneCache(cache, current, filter) {\r\n        for (var key in cache) {\r\n            var cachedNode = cache[key]\r\n            if (cachedNode) {\r\n                var name = getComponentName(cachedNode.componentOptions)\r\n                if (name && !filter(name)) {\r\n                    if (cachedNode !== current) {\r\n                        pruneCacheEntry(cachedNode)\r\n                    }\r\n                    cache[key] = null\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    function pruneCacheEntry(vnode) {\r\n        if (vnode) {\r\n            vnode.componentInstance.$destroy()\r\n        }\r\n    }\r\n\r\n    var KeepAlive = {\r\n        name: \"keep-alive\",\r\n        abstract: true,\r\n\r\n        props: {\r\n            include: patternTypes,\r\n            exclude: patternTypes\r\n        },\r\n\r\n        created: function created() {\r\n            this.cache = Object.create(null)\r\n        },\r\n\r\n        destroyed: function destroyed() {\r\n            var this$1 = this\r\n\r\n            for (var key in this$1.cache) {\r\n                pruneCacheEntry(this$1.cache[key])\r\n            }\r\n        },\r\n\r\n        watch: {\r\n            include: function include(val) {\r\n                pruneCache(this.cache, this._vnode, function(name) {\r\n                    return matches(val, name)\r\n                })\r\n            },\r\n            exclude: function exclude(val) {\r\n                pruneCache(this.cache, this._vnode, function(name) {\r\n                    return !matches(val, name)\r\n                })\r\n            }\r\n        },\r\n\r\n        render: function render() {\r\n            var vnode = getFirstComponentChild(this.$slots.default)\r\n            var componentOptions = vnode && vnode.componentOptions\r\n            if (componentOptions) {\r\n                // check pattern\r\n                var name = getComponentName(componentOptions)\r\n                if (\r\n                    name &&\r\n                    ((this.include && !matches(this.include, name)) ||\r\n                        (this.exclude && matches(this.exclude, name)))\r\n                ) {\r\n                    return vnode\r\n                }\r\n                var key =\r\n                    vnode.key == null\r\n                        ? // same constructor may get registered as different local components\r\n                          // so cid alone is not enough (#3269)\r\n                          componentOptions.Ctor.cid +\r\n                          (componentOptions.tag ? \"::\" + componentOptions.tag : \"\")\r\n                        : vnode.key\r\n                if (this.cache[key]) {\r\n                    vnode.componentInstance = this.cache[key].componentInstance\r\n                } else {\r\n                    this.cache[key] = vnode\r\n                }\r\n                vnode.data.keepAlive = true\r\n            }\r\n            return vnode\r\n        }\r\n    }\r\n\r\n    var builtInComponents = {\r\n        KeepAlive: KeepAlive\r\n    }\r\n\r\n    /*  */\r\n\r\n    function initGlobalAPI(Vue) {\r\n        // config\r\n        var configDef = {}\r\n        configDef.get = function() {\r\n            return config\r\n        }\r\n        Object.defineProperty(Vue, \"config\", configDef)\r\n\r\n        // exposed util methods.\r\n        // NOTE: these are not considered part of the public API - avoid relying on\r\n        // them unless you are aware of the risk.\r\n        Vue.util = {\r\n            warn: warn,\r\n            extend: extend,\r\n            mergeOptions: mergeOptions,\r\n            defineReactive: defineReactive$$1\r\n        }\r\n\r\n        Vue.set = set\r\n        Vue.delete = del\r\n        Vue.nextTick = nextTick\r\n\r\n        Vue.options = Object.create(null)\r\n        ASSET_TYPES.forEach(function(type) {\r\n            Vue.options[type + \"s\"] = Object.create(null)\r\n        })\r\n\r\n        // this is used to identify the \"base\" constructor to extend all plain-object\r\n        // components with in Weex's multi-instance scenarios.\r\n        Vue.options._base = Vue\r\n\r\n        extend(Vue.options.components, builtInComponents)\r\n\r\n        initUse(Vue)\r\n        initMixin$1(Vue)\r\n        initExtend(Vue)\r\n        initAssetRegisters(Vue)\r\n    }\r\n\r\n    initGlobalAPI(Vue$3)\r\n\r\n    Object.defineProperty(Vue$3.prototype, \"$isServer\", {\r\n        get: isServerRendering\r\n    })\r\n\r\n    Object.defineProperty(Vue$3.prototype, \"$ssrContext\", {\r\n        get: function get() {\r\n            /* istanbul ignore next */\r\n            return this.$vnode && this.$vnode.ssrContext\r\n        }\r\n    })\r\n\r\n    Vue$3.version = \"2.4.1\"\r\n    Vue$3.mpvueVersion = \"1.0.12\"\r\n\r\n    /* globals renderer */\r\n\r\n    var isReservedTag = makeMap(\r\n        \"template,script,style,element,content,slot,link,meta,svg,view,\" +\r\n            \"a,div,img,image,text,span,richtext,input,switch,textarea,spinner,select,\" +\r\n            \"slider,slider-neighbor,indicator,trisition,trisition-group,canvas,\" +\r\n            \"list,cell,header,loading,loading-indicator,refresh,scrollable,scroller,\" +\r\n            \"video,web,embed,tabbar,tabheader,datepicker,timepicker,marquee,countdown\",\r\n        true\r\n    )\r\n\r\n    // these are reserved for web because they are directly compiled away\r\n    // during template compilation\r\n    var isReservedAttr = makeMap(\"style,class\")\r\n\r\n    // Elements that you can, intentionally, leave open (and which close themselves)\r\n    // more flexable than web\r\n    var canBeLeftOpenTag = makeMap(\r\n        \"web,spinner,switch,video,textarea,canvas,\" + \"indicator,marquee,countdown\",\r\n        true\r\n    )\r\n\r\n    var isUnaryTag = makeMap(\"embed,img,image,input,link,meta\", true)\r\n\r\n    function mustUseProp() {\r\n        /* console.log('mustUseProp') */\r\n    }\r\n\r\n    function getTagNamespace() {\r\n        /* console.log('getTagNamespace') */\r\n    }\r\n\r\n    function isUnknownElement() {\r\n        /* console.log('isUnknownElement') */\r\n    }\r\n\r\n    function getComKey(vm) {\r\n        return vm && vm.$attrs ? vm.$attrs[\"mpcomid\"] : \"0\"\r\n    }\r\n\r\n    // 用于小程序的 event type 到 web 的 event\r\n    var eventTypeMap = {\r\n        tap: [\"tap\", \"click\"],\r\n        touchstart: [\"touchstart\"],\r\n        touchmove: [\"touchmove\"],\r\n        touchcancel: [\"touchcancel\"],\r\n        touchend: [\"touchend\"],\r\n        longtap: [\"longtap\"],\r\n        input: [\"input\"],\r\n        blur: [\"change\", \"blur\"],\r\n        submit: [\"submit\"],\r\n        focus: [\"focus\"],\r\n        scrolltoupper: [\"scrolltoupper\"],\r\n        scrolltolower: [\"scrolltolower\"],\r\n        scroll: [\"scroll\"]\r\n    }\r\n\r\n    /*  */\r\n\r\n    // import { namespaceMap } from 'mp/util/index'\r\n\r\n    var obj = {}\r\n\r\n    function createElement$1(tagName, vnode) {\r\n        return obj\r\n    }\r\n\r\n    function createElementNS(namespace, tagName) {\r\n        return obj\r\n    }\r\n\r\n    function createTextNode(text) {\r\n        return obj\r\n    }\r\n\r\n    function createComment(text) {\r\n        return obj\r\n    }\r\n\r\n    function insertBefore(parentNode, newNode, referenceNode) {}\r\n\r\n    function removeChild(node, child) {}\r\n\r\n    function appendChild(node, child) {}\r\n\r\n    function parentNode(node) {\r\n        return obj\r\n    }\r\n\r\n    function nextSibling(node) {\r\n        return obj\r\n    }\r\n\r\n    function tagName(node) {\r\n        return \"div\"\r\n    }\r\n\r\n    function setTextContent(node, text) {\r\n        return obj\r\n    }\r\n\r\n    function setAttribute(node, key, val) {\r\n        return obj\r\n    }\r\n\r\n    var nodeOps = Object.freeze({\r\n        createElement: createElement$1,\r\n        createElementNS: createElementNS,\r\n        createTextNode: createTextNode,\r\n        createComment: createComment,\r\n        insertBefore: insertBefore,\r\n        removeChild: removeChild,\r\n        appendChild: appendChild,\r\n        parentNode: parentNode,\r\n        nextSibling: nextSibling,\r\n        tagName: tagName,\r\n        setTextContent: setTextContent,\r\n        setAttribute: setAttribute\r\n    })\r\n\r\n    /*  */\r\n\r\n    var ref = {\r\n        create: function create(_, vnode) {\r\n            registerRef(vnode)\r\n        },\r\n        update: function update(oldVnode, vnode) {\r\n            if (oldVnode.data.ref !== vnode.data.ref) {\r\n                registerRef(oldVnode, true)\r\n                registerRef(vnode)\r\n            }\r\n        },\r\n        destroy: function destroy(vnode) {\r\n            registerRef(vnode, true)\r\n        }\r\n    }\r\n\r\n    function registerRef(vnode, isRemoval) {\r\n        var key = vnode.data.ref\r\n        if (!key) {\r\n            return\r\n        }\r\n\r\n        var vm = vnode.context\r\n        var ref = vnode.componentInstance || vnode.elm\r\n        var refs = vm.$refs\r\n        if (isRemoval) {\r\n            if (Array.isArray(refs[key])) {\r\n                remove(refs[key], ref)\r\n            } else if (refs[key] === ref) {\r\n                refs[key] = undefined\r\n            }\r\n        } else {\r\n            if (vnode.data.refInFor) {\r\n                if (!Array.isArray(refs[key])) {\r\n                    refs[key] = [ref]\r\n                } else if (refs[key].indexOf(ref) < 0) {\r\n                    // $flow-disable-line\r\n                    refs[key].push(ref)\r\n                }\r\n            } else {\r\n                refs[key] = ref\r\n            }\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Virtual DOM patching algorithm based on Snabbdom by\r\n     * Simon Friis Vindum (@paldepind)\r\n     * Licensed under the MIT License\r\n     * https://github.com/paldepind/snabbdom/blob/master/LICENSE\r\n     *\r\n     * modified by Evan You (@yyx990803)\r\n     *\r\n\r\n    /*\r\n     * Not type-checking this because this file is perf-critical and the cost\r\n     * of making flow understand it is not worth it.\r\n     */\r\n\r\n    var emptyNode = new VNode(\"\", {}, [])\r\n\r\n    var hooks = [\"create\", \"activate\", \"update\", \"remove\", \"destroy\"]\r\n\r\n    function sameVnode(a, b) {\r\n        return (\r\n            a.key === b.key &&\r\n            ((a.tag === b.tag &&\r\n                a.isComment === b.isComment &&\r\n                isDef(a.data) === isDef(b.data) &&\r\n                sameInputType(a, b)) ||\r\n                (isTrue(a.isAsyncPlaceholder) &&\r\n                    a.asyncFactory === b.asyncFactory &&\r\n                    isUndef(b.asyncFactory.error)))\r\n        )\r\n    }\r\n\r\n    // Some browsers do not support dynamically changing type for <input>\r\n    // so they need to be treated as different nodes\r\n    function sameInputType(a, b) {\r\n        if (a.tag !== \"input\") {\r\n            return true\r\n        }\r\n        var i\r\n        var typeA = isDef((i = a.data)) && isDef((i = i.attrs)) && i.type\r\n        var typeB = isDef((i = b.data)) && isDef((i = i.attrs)) && i.type\r\n        return typeA === typeB\r\n    }\r\n\r\n    function createKeyToOldIdx(children, beginIdx, endIdx) {\r\n        var i, key\r\n        var map = {}\r\n        for (i = beginIdx; i <= endIdx; ++i) {\r\n            key = children[i].key\r\n            if (isDef(key)) {\r\n                map[key] = i\r\n            }\r\n        }\r\n        return map\r\n    }\r\n\r\n    function createPatchFunction(backend) {\r\n        var i, j\r\n        var cbs = {}\r\n\r\n        var modules = backend.modules\r\n        var nodeOps = backend.nodeOps\r\n\r\n        for (i = 0; i < hooks.length; ++i) {\r\n            cbs[hooks[i]] = []\r\n            for (j = 0; j < modules.length; ++j) {\r\n                if (isDef(modules[j][hooks[i]])) {\r\n                    cbs[hooks[i]].push(modules[j][hooks[i]])\r\n                }\r\n            }\r\n        }\r\n\r\n        function emptyNodeAt(elm) {\r\n            return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)\r\n        }\r\n\r\n        function createRmCb(childElm, listeners) {\r\n            function remove$$1() {\r\n                if (--remove$$1.listeners === 0) {\r\n                    removeNode(childElm)\r\n                }\r\n            }\r\n            remove$$1.listeners = listeners\r\n            return remove$$1\r\n        }\r\n\r\n        function removeNode(el) {\r\n            var parent = nodeOps.parentNode(el)\r\n            // element may have already been removed due to v-html / v-text\r\n            if (isDef(parent)) {\r\n                nodeOps.removeChild(parent, el)\r\n            }\r\n        }\r\n\r\n        var inPre = 0\r\n\r\n        function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested) {\r\n            vnode.isRootInsert = !nested // for transition enter check\r\n            if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {\r\n                return\r\n            }\r\n\r\n            var data = vnode.data\r\n            var children = vnode.children\r\n            var tag = vnode.tag\r\n            if (isDef(tag)) {\r\n                vnode.elm = vnode.ns\r\n                    ? nodeOps.createElementNS(vnode.ns, tag)\r\n                    : nodeOps.createElement(tag, vnode)\r\n                setScope(vnode)\r\n\r\n                /* istanbul ignore if */\r\n                {\r\n                    createChildren(vnode, children, insertedVnodeQueue)\r\n                    if (isDef(data)) {\r\n                        invokeCreateHooks(vnode, insertedVnodeQueue)\r\n                    }\r\n                    insert(parentElm, vnode.elm, refElm)\r\n                }\r\n\r\n                if (false) {\r\n                    inPre--\r\n                }\r\n            } else if (isTrue(vnode.isComment)) {\r\n                vnode.elm = nodeOps.createComment(vnode.text)\r\n                insert(parentElm, vnode.elm, refElm)\r\n            } else {\r\n                vnode.elm = nodeOps.createTextNode(vnode.text)\r\n                insert(parentElm, vnode.elm, refElm)\r\n            }\r\n        }\r\n\r\n        function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {\r\n            var i = vnode.data\r\n            if (isDef(i)) {\r\n                var isReactivated = isDef(vnode.componentInstance) && i.keepAlive\r\n                if (isDef((i = i.hook)) && isDef((i = i.init))) {\r\n                    i(vnode, false /* hydrating */, parentElm, refElm)\r\n                }\r\n                // after calling the init hook, if the vnode is a child component\r\n                // it should've created a child instance and mounted it. the child\r\n                // component also has set the placeholder vnode's elm.\r\n                // in that case we can just return the element and be done.\r\n                if (isDef(vnode.componentInstance)) {\r\n                    initComponent(vnode, insertedVnodeQueue)\r\n                    if (isTrue(isReactivated)) {\r\n                        reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm)\r\n                    }\r\n                    return true\r\n                }\r\n            }\r\n        }\r\n\r\n        function initComponent(vnode, insertedVnodeQueue) {\r\n            if (isDef(vnode.data.pendingInsert)) {\r\n                insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert)\r\n                vnode.data.pendingInsert = null\r\n            }\r\n            vnode.elm = vnode.componentInstance.$el\r\n            if (isPatchable(vnode)) {\r\n                invokeCreateHooks(vnode, insertedVnodeQueue)\r\n                setScope(vnode)\r\n            } else {\r\n                // empty component root.\r\n                // skip all element-related modules except for ref (#3455)\r\n                registerRef(vnode)\r\n                // make sure to invoke the insert hook\r\n                insertedVnodeQueue.push(vnode)\r\n            }\r\n        }\r\n\r\n        function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {\r\n            var i\r\n            // hack for #4339: a reactivated component with inner transition\r\n            // does not trigger because the inner node's created hooks are not called\r\n            // again. It's not ideal to involve module-specific logic in here but\r\n            // there doesn't seem to be a better way to do it.\r\n            var innerNode = vnode\r\n            while (innerNode.componentInstance) {\r\n                innerNode = innerNode.componentInstance._vnode\r\n                if (isDef((i = innerNode.data)) && isDef((i = i.transition))) {\r\n                    for (i = 0; i < cbs.activate.length; ++i) {\r\n                        cbs.activate[i](emptyNode, innerNode)\r\n                    }\r\n                    insertedVnodeQueue.push(innerNode)\r\n                    break\r\n                }\r\n            }\r\n            // unlike a newly created component,\r\n            // a reactivated keep-alive component doesn't insert itself\r\n            insert(parentElm, vnode.elm, refElm)\r\n        }\r\n\r\n        function insert(parent, elm, ref$$1) {\r\n            if (isDef(parent)) {\r\n                if (isDef(ref$$1)) {\r\n                    if (ref$$1.parentNode === parent) {\r\n                        nodeOps.insertBefore(parent, elm, ref$$1)\r\n                    }\r\n                } else {\r\n                    nodeOps.appendChild(parent, elm)\r\n                }\r\n            }\r\n        }\r\n\r\n        function createChildren(vnode, children, insertedVnodeQueue) {\r\n            if (Array.isArray(children)) {\r\n                for (var i = 0; i < children.length; ++i) {\r\n                    createElm(children[i], insertedVnodeQueue, vnode.elm, null, true)\r\n                }\r\n            } else if (isPrimitive(vnode.text)) {\r\n                nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text))\r\n            }\r\n        }\r\n\r\n        function isPatchable(vnode) {\r\n            while (vnode.componentInstance) {\r\n                vnode = vnode.componentInstance._vnode\r\n            }\r\n            return isDef(vnode.tag)\r\n        }\r\n\r\n        function invokeCreateHooks(vnode, insertedVnodeQueue) {\r\n            for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {\r\n                cbs.create[i$1](emptyNode, vnode)\r\n            }\r\n            i = vnode.data.hook // Reuse variable\r\n            if (isDef(i)) {\r\n                if (isDef(i.create)) {\r\n                    i.create(emptyNode, vnode)\r\n                }\r\n                if (isDef(i.insert)) {\r\n                    insertedVnodeQueue.push(vnode)\r\n                }\r\n            }\r\n        }\r\n\r\n        // set scope id attribute for scoped CSS.\r\n        // this is implemented as a special case to avoid the overhead\r\n        // of going through the normal attribute patching process.\r\n        function setScope(vnode) {\r\n            var i\r\n            var ancestor = vnode\r\n            while (ancestor) {\r\n                if (isDef((i = ancestor.context)) && isDef((i = i.$options._scopeId))) {\r\n                    nodeOps.setAttribute(vnode.elm, i, \"\")\r\n                }\r\n                ancestor = ancestor.parent\r\n            }\r\n            // for slot content they should also get the scopeId from the host instance.\r\n            if (\r\n                isDef((i = activeInstance)) &&\r\n                i !== vnode.context &&\r\n                isDef((i = i.$options._scopeId))\r\n            ) {\r\n                nodeOps.setAttribute(vnode.elm, i, \"\")\r\n            }\r\n        }\r\n\r\n        function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {\r\n            for (; startIdx <= endIdx; ++startIdx) {\r\n                createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm)\r\n            }\r\n        }\r\n\r\n        function invokeDestroyHook(vnode) {\r\n            var i, j\r\n            var data = vnode.data\r\n            if (isDef(data)) {\r\n                if (isDef((i = data.hook)) && isDef((i = i.destroy))) {\r\n                    i(vnode)\r\n                }\r\n                for (i = 0; i < cbs.destroy.length; ++i) {\r\n                    cbs.destroy[i](vnode)\r\n                }\r\n            }\r\n            if (isDef((i = vnode.children))) {\r\n                for (j = 0; j < vnode.children.length; ++j) {\r\n                    invokeDestroyHook(vnode.children[j])\r\n                }\r\n            }\r\n        }\r\n\r\n        function removeVnodes(parentElm, vnodes, startIdx, endIdx) {\r\n            for (; startIdx <= endIdx; ++startIdx) {\r\n                var ch = vnodes[startIdx]\r\n                if (isDef(ch)) {\r\n                    if (isDef(ch.tag)) {\r\n                        removeAndInvokeRemoveHook(ch)\r\n                        invokeDestroyHook(ch)\r\n                    } else {\r\n                        // Text node\r\n                        removeNode(ch.elm)\r\n                    }\r\n                }\r\n            }\r\n        }\r\n\r\n        function removeAndInvokeRemoveHook(vnode, rm) {\r\n            if (isDef(rm) || isDef(vnode.data)) {\r\n                var i\r\n                var listeners = cbs.remove.length + 1\r\n                if (isDef(rm)) {\r\n                    // we have a recursively passed down rm callback\r\n                    // increase the listeners count\r\n                    rm.listeners += listeners\r\n                } else {\r\n                    // directly removing\r\n                    rm = createRmCb(vnode.elm, listeners)\r\n                }\r\n                // recursively invoke hooks on child component root node\r\n                if (\r\n                    isDef((i = vnode.componentInstance)) &&\r\n                    isDef((i = i._vnode)) &&\r\n                    isDef(i.data)\r\n                ) {\r\n                    removeAndInvokeRemoveHook(i, rm)\r\n                }\r\n                for (i = 0; i < cbs.remove.length; ++i) {\r\n                    cbs.remove[i](vnode, rm)\r\n                }\r\n                if (isDef((i = vnode.data.hook)) && isDef((i = i.remove))) {\r\n                    i(vnode, rm)\r\n                } else {\r\n                    rm()\r\n                }\r\n            } else {\r\n                removeNode(vnode.elm)\r\n            }\r\n        }\r\n\r\n        function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {\r\n            var oldStartIdx = 0\r\n            var newStartIdx = 0\r\n            var oldEndIdx = oldCh.length - 1\r\n            var oldStartVnode = oldCh[0]\r\n            var oldEndVnode = oldCh[oldEndIdx]\r\n            var newEndIdx = newCh.length - 1\r\n            var newStartVnode = newCh[0]\r\n            var newEndVnode = newCh[newEndIdx]\r\n            var oldKeyToIdx, idxInOld, elmToMove, refElm\r\n\r\n            // removeOnly is a special flag used only by <transition-group>\r\n            // to ensure removed elements stay in correct relative positions\r\n            // during leaving transitions\r\n            var canMove = !removeOnly\r\n\r\n            while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {\r\n                if (isUndef(oldStartVnode)) {\r\n                    oldStartVnode = oldCh[++oldStartIdx] // Vnode has been moved left\r\n                } else if (isUndef(oldEndVnode)) {\r\n                    oldEndVnode = oldCh[--oldEndIdx]\r\n                } else if (sameVnode(oldStartVnode, newStartVnode)) {\r\n                    patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue)\r\n                    oldStartVnode = oldCh[++oldStartIdx]\r\n                    newStartVnode = newCh[++newStartIdx]\r\n                } else if (sameVnode(oldEndVnode, newEndVnode)) {\r\n                    patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue)\r\n                    oldEndVnode = oldCh[--oldEndIdx]\r\n                    newEndVnode = newCh[--newEndIdx]\r\n                } else if (sameVnode(oldStartVnode, newEndVnode)) {\r\n                    // Vnode moved right\r\n                    patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue)\r\n                    canMove &&\r\n                        nodeOps.insertBefore(\r\n                            parentElm,\r\n                            oldStartVnode.elm,\r\n                            nodeOps.nextSibling(oldEndVnode.elm)\r\n                        )\r\n                    oldStartVnode = oldCh[++oldStartIdx]\r\n                    newEndVnode = newCh[--newEndIdx]\r\n                } else if (sameVnode(oldEndVnode, newStartVnode)) {\r\n                    // Vnode moved left\r\n                    patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue)\r\n                    canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm)\r\n                    oldEndVnode = oldCh[--oldEndIdx]\r\n                    newStartVnode = newCh[++newStartIdx]\r\n                } else {\r\n                    if (isUndef(oldKeyToIdx)) {\r\n                        oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx)\r\n                    }\r\n                    idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null\r\n                    if (isUndef(idxInOld)) {\r\n                        // New element\r\n                        createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm)\r\n                        newStartVnode = newCh[++newStartIdx]\r\n                    } else {\r\n                        elmToMove = oldCh[idxInOld]\r\n                        /* istanbul ignore if */\r\n                        if (false) {\r\n                            warn(\r\n                                \"It seems there are duplicate keys that is causing an update error. \" +\r\n                                    \"Make sure each v-for item has a unique key.\"\r\n                            )\r\n                        }\r\n                        if (sameVnode(elmToMove, newStartVnode)) {\r\n                            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue)\r\n                            oldCh[idxInOld] = undefined\r\n                            canMove &&\r\n                                nodeOps.insertBefore(parentElm, elmToMove.elm, oldStartVnode.elm)\r\n                            newStartVnode = newCh[++newStartIdx]\r\n                        } else {\r\n                            // same key but different element. treat as new element\r\n                            createElm(\r\n                                newStartVnode,\r\n                                insertedVnodeQueue,\r\n                                parentElm,\r\n                                oldStartVnode.elm\r\n                            )\r\n                            newStartVnode = newCh[++newStartIdx]\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n            if (oldStartIdx > oldEndIdx) {\r\n                refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm\r\n                addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue)\r\n            } else if (newStartIdx > newEndIdx) {\r\n                removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx)\r\n            }\r\n        }\r\n\r\n        function patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly) {\r\n            if (oldVnode === vnode) {\r\n                return\r\n            }\r\n\r\n            var elm = (vnode.elm = oldVnode.elm)\r\n\r\n            if (isTrue(oldVnode.isAsyncPlaceholder)) {\r\n                if (isDef(vnode.asyncFactory.resolved)) {\r\n                    hydrate(oldVnode.elm, vnode, insertedVnodeQueue)\r\n                } else {\r\n                    vnode.isAsyncPlaceholder = true\r\n                }\r\n                return\r\n            }\r\n\r\n            // reuse element for static trees.\r\n            // note we only do this if the vnode is cloned -\r\n            // if the new node is not cloned it means the render functions have been\r\n            // reset by the hot-reload-api and we need to do a proper re-render.\r\n            if (\r\n                isTrue(vnode.isStatic) &&\r\n                isTrue(oldVnode.isStatic) &&\r\n                vnode.key === oldVnode.key &&\r\n                (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))\r\n            ) {\r\n                vnode.componentInstance = oldVnode.componentInstance\r\n                return\r\n            }\r\n\r\n            var i\r\n            var data = vnode.data\r\n            if (isDef(data) && isDef((i = data.hook)) && isDef((i = i.prepatch))) {\r\n                i(oldVnode, vnode)\r\n            }\r\n\r\n            var oldCh = oldVnode.children\r\n            var ch = vnode.children\r\n            if (isDef(data) && isPatchable(vnode)) {\r\n                for (i = 0; i < cbs.update.length; ++i) {\r\n                    cbs.update[i](oldVnode, vnode)\r\n                }\r\n                if (isDef((i = data.hook)) && isDef((i = i.update))) {\r\n                    i(oldVnode, vnode)\r\n                }\r\n            }\r\n            if (isUndef(vnode.text)) {\r\n                if (isDef(oldCh) && isDef(ch)) {\r\n                    if (oldCh !== ch) {\r\n                        updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly)\r\n                    }\r\n                } else if (isDef(ch)) {\r\n                    if (isDef(oldVnode.text)) {\r\n                        nodeOps.setTextContent(elm, \"\")\r\n                    }\r\n                    addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue)\r\n                } else if (isDef(oldCh)) {\r\n                    removeVnodes(elm, oldCh, 0, oldCh.length - 1)\r\n                } else if (isDef(oldVnode.text)) {\r\n                    nodeOps.setTextContent(elm, \"\")\r\n                }\r\n            } else if (oldVnode.text !== vnode.text) {\r\n                nodeOps.setTextContent(elm, vnode.text)\r\n            }\r\n            if (isDef(data)) {\r\n                if (isDef((i = data.hook)) && isDef((i = i.postpatch))) {\r\n                    i(oldVnode, vnode)\r\n                }\r\n            }\r\n        }\r\n\r\n        function invokeInsertHook(vnode, queue, initial) {\r\n            // delay insert hooks for component root nodes, invoke them after the\r\n            // element is really inserted\r\n            if (isTrue(initial) && isDef(vnode.parent)) {\r\n                vnode.parent.data.pendingInsert = queue\r\n            } else {\r\n                for (var i = 0; i < queue.length; ++i) {\r\n                    queue[i].data.hook.insert(queue[i])\r\n                }\r\n            }\r\n        }\r\n\r\n        var bailed = false\r\n        // list of modules that can skip create hook during hydration because they\r\n        // are already rendered on the client or has no need for initialization\r\n        var isRenderedModule = makeMap(\"attrs,style,class,staticClass,staticStyle,key\")\r\n\r\n        // Note: this is a browser-only function so we can assume elms are DOM nodes.\r\n        function hydrate(elm, vnode, insertedVnodeQueue) {\r\n            if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {\r\n                vnode.elm = elm\r\n                vnode.isAsyncPlaceholder = true\r\n                return true\r\n            }\r\n            vnode.elm = elm\r\n            var tag = vnode.tag\r\n            var data = vnode.data\r\n            var children = vnode.children\r\n            if (isDef(data)) {\r\n                if (isDef((i = data.hook)) && isDef((i = i.init))) {\r\n                    i(vnode, true /* hydrating */)\r\n                }\r\n                if (isDef((i = vnode.componentInstance))) {\r\n                    // child component. it should have hydrated its own tree.\r\n                    initComponent(vnode, insertedVnodeQueue)\r\n                    return true\r\n                }\r\n            }\r\n            if (isDef(tag)) {\r\n                if (isDef(children)) {\r\n                    // empty element, allow client to pick up and populate children\r\n                    if (!elm.hasChildNodes()) {\r\n                        createChildren(vnode, children, insertedVnodeQueue)\r\n                    } else {\r\n                        var childrenMatch = true\r\n                        var childNode = elm.firstChild\r\n                        for (var i$1 = 0; i$1 < children.length; i$1++) {\r\n                            if (\r\n                                !childNode ||\r\n                                !hydrate(childNode, children[i$1], insertedVnodeQueue)\r\n                            ) {\r\n                                childrenMatch = false\r\n                                break\r\n                            }\r\n                            childNode = childNode.nextSibling\r\n                        }\r\n                        // if childNode is not null, it means the actual childNodes list is\r\n                        // longer than the virtual children list.\r\n                        if (!childrenMatch || childNode) {\r\n                            if (\r\n                                false\r\n                            ) {\r\n                                bailed = true\r\n                                console.warn(\"Parent: \", elm)\r\n                                console.warn(\r\n                                    \"Mismatching childNodes vs. VNodes: \",\r\n                                    elm.childNodes,\r\n                                    children\r\n                                )\r\n                            }\r\n                            return false\r\n                        }\r\n                    }\r\n                }\r\n                if (isDef(data)) {\r\n                    for (var key in data) {\r\n                        if (!isRenderedModule(key)) {\r\n                            invokeCreateHooks(vnode, insertedVnodeQueue)\r\n                            break\r\n                        }\r\n                    }\r\n                }\r\n            } else if (elm.data !== vnode.text) {\r\n                elm.data = vnode.text\r\n            }\r\n            return true\r\n        }\r\n\r\n        return function patch(oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {\r\n            if (isUndef(vnode)) {\r\n                if (isDef(oldVnode)) {\r\n                    invokeDestroyHook(oldVnode)\r\n                }\r\n                return\r\n            }\r\n\r\n            var isInitialPatch = false\r\n            var insertedVnodeQueue = []\r\n\r\n            if (isUndef(oldVnode)) {\r\n                // empty mount (likely as component), create new root element\r\n                isInitialPatch = true\r\n                createElm(vnode, insertedVnodeQueue, parentElm, refElm)\r\n            } else {\r\n                var isRealElement = isDef(oldVnode.nodeType)\r\n                if (!isRealElement && sameVnode(oldVnode, vnode)) {\r\n                    // patch existing root node\r\n                    patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly)\r\n                } else {\r\n                    if (isRealElement) {\r\n                        // mounting to a real element\r\n                        // check if this is server-rendered content and if we can perform\r\n                        // a successful hydration.\r\n                        if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {\r\n                            oldVnode.removeAttribute(SSR_ATTR)\r\n                            hydrating = true\r\n                        }\r\n                        if (isTrue(hydrating)) {\r\n                            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {\r\n                                invokeInsertHook(vnode, insertedVnodeQueue, true)\r\n                                return oldVnode\r\n                            } else {\r\n                            }\r\n                        }\r\n                        // either not server-rendered, or hydration failed.\r\n                        // create an empty node and replace it\r\n                        oldVnode = emptyNodeAt(oldVnode)\r\n                    }\r\n                    // replacing existing element\r\n                    var oldElm = oldVnode.elm\r\n                    var parentElm$1 = nodeOps.parentNode(oldElm)\r\n                    createElm(\r\n                        vnode,\r\n                        insertedVnodeQueue,\r\n                        // extremely rare edge case: do not insert if old element is in a\r\n                        // leaving transition. Only happens when combining transition +\r\n                        // keep-alive + HOCs. (#4590)\r\n                        oldElm._leaveCb ? null : parentElm$1,\r\n                        nodeOps.nextSibling(oldElm)\r\n                    )\r\n\r\n                    if (isDef(vnode.parent)) {\r\n                        // component root element replaced.\r\n                        // update parent placeholder node element, recursively\r\n                        var ancestor = vnode.parent\r\n                        while (ancestor) {\r\n                            ancestor.elm = vnode.elm\r\n                            ancestor = ancestor.parent\r\n                        }\r\n                        if (isPatchable(vnode)) {\r\n                            for (var i = 0; i < cbs.create.length; ++i) {\r\n                                cbs.create[i](emptyNode, vnode.parent)\r\n                            }\r\n                        }\r\n                    }\r\n\r\n                    if (isDef(parentElm$1)) {\r\n                        removeVnodes(parentElm$1, [oldVnode], 0, 0)\r\n                    } else if (isDef(oldVnode.tag)) {\r\n                        invokeDestroyHook(oldVnode)\r\n                    }\r\n                }\r\n            }\r\n\r\n            invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch)\r\n            return vnode.elm\r\n        }\r\n    }\r\n\r\n    /*  */\r\n\r\n    // import baseModules from 'core/vdom/modules/index'\r\n    // const platformModules = []\r\n    // import platformModules from 'web/runtime/modules/index'\r\n\r\n    // the directive module should be applied last, after all\r\n    // built-in modules have been applied.\r\n    // const modules = platformModules.concat(baseModules)\r\n    var modules = [ref]\r\n\r\n    var corePatch = createPatchFunction({\r\n        nodeOps: nodeOps,\r\n        modules: modules\r\n    })\r\n\r\n    function patch() {\r\n        corePatch.apply(this, arguments)\r\n        this.$updateDataToMP()\r\n    }\r\n\r\n    function callHook$1(vm, hook, params) {\r\n        var handlers = vm.$options[hook]\r\n        if (hook === \"onError\" && handlers) {\r\n            handlers = [handlers]\r\n        }\r\n\r\n        var ret\r\n        if (handlers) {\r\n            for (var i = 0, j = handlers.length; i < j; i++) {\r\n                try {\r\n                    ret = handlers[i].call(vm, params)\r\n                } catch (e) {\r\n                    handleError(e, vm, hook + \" hook\")\r\n                }\r\n            }\r\n        }\r\n        if (vm._hasHookEvent) {\r\n            vm.$emit(\"hook:\" + hook)\r\n        }\r\n\r\n        // for child\r\n        if (vm.$children.length) {\r\n            vm.$children.forEach(function(v) {\r\n                return callHook$1(v, hook, params)\r\n            })\r\n        }\r\n\r\n        return ret\r\n    }\r\n\r\n    // mpType 小程序实例的类型，可能的值是 'app', 'page'\r\n    // rootVueVM 是 vue 的根组件实例，子组件中访问 this.$root 可得\r\n    function getGlobalData(app, rootVueVM) {\r\n        var mp = rootVueVM.$mp\r\n        if (app && app.globalData) {\r\n            mp.appOptions = app.globalData.appOptions\r\n        }\r\n    }\r\n\r\n    // 格式化 properties 属性，并给每个属性加上 observer 方法\r\n\r\n    // properties 的 一些类型 https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/component.html\r\n    // properties: {\r\n    //   paramA: Number,\r\n    //   myProperty: { // 属性名\r\n    //     type: String, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）\r\n    //     value: '', // 属性初始值（可选），如果未指定则会根据类型选择一个\r\n    //     observer: function(newVal, oldVal, changedPath) {\r\n    //        // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'\r\n    //        // 通常 newVal 就是新设置的数据， oldVal 是旧数据\r\n    //     }\r\n    //   },\r\n    // }\r\n\r\n    // props 的一些类型 https://cn.vuejs.org/v2/guide/components-props.html#ad\r\n    // props: {\r\n    //   // 基础的类型检查 (`null` 匹配任何类型)\r\n    //   propA: Number,\r\n    //   // 多个可能的类型\r\n    //   propB: [String, Number],\r\n    //   // 必填的字符串\r\n    //   propC: {\r\n    //     type: String,\r\n    //     required: true\r\n    //   },\r\n    //   // 带有默认值的数字\r\n    //   propD: {\r\n    //     type: Number,\r\n    //     default: 100\r\n    //   },\r\n    //   // 带有默认值的对象\r\n    //   propE: {\r\n    //     type: Object,\r\n    //     // 对象或数组且一定会从一个工厂函数返回默认值\r\n    //     default: function () {\r\n    //       return { message: 'hello' }\r\n    //     }\r\n    //   },\r\n    //   // 自定义验证函数\r\n    //   propF: {\r\n    //     validator: function (value) {\r\n    //       // 这个值必须匹配下列字符串中的一个\r\n    //       return ['success', 'warning', 'danger'].indexOf(value) !== -1\r\n    //     }\r\n    //   }\r\n    // }\r\n\r\n    // core/util/options\r\n    function normalizeProps$1(props, res, vm) {\r\n        if (!props) {\r\n            return\r\n        }\r\n        var i, val, name\r\n        if (Array.isArray(props)) {\r\n            i = props.length\r\n            while (i--) {\r\n                val = props[i]\r\n                if (typeof val === \"string\") {\r\n                    name = camelize(val)\r\n                    res[name] = {\r\n                        type: null\r\n                    }\r\n                } else {\r\n                }\r\n            }\r\n        } else if (isPlainObject(props)) {\r\n            for (var key in props) {\r\n                val = props[key]\r\n                name = camelize(key)\r\n                res[name] = isPlainObject(val)\r\n                    ? val\r\n                    : {\r\n                          type: val\r\n                      }\r\n            }\r\n        }\r\n\r\n        // fix vueProps to properties\r\n        for (var key$1 in res) {\r\n            if (res.hasOwnProperty(key$1)) {\r\n                var item = res[key$1]\r\n                if (item.default) {\r\n                    item.value = item.default\r\n                }\r\n                var oldObserver = item.observer\r\n                item.observer = function(newVal, oldVal) {\r\n                    vm[name] = newVal\r\n                    // 先修改值再触发原始的 observer，跟 watch 行为保持一致\r\n                    if (typeof oldObserver === \"function\") {\r\n                        oldObserver.call(vm, newVal, oldVal)\r\n                    }\r\n                }\r\n            }\r\n        }\r\n\r\n        return res\r\n    }\r\n\r\n    function normalizeProperties(vm) {\r\n        var properties = vm.$options.properties\r\n        var vueProps = vm.$options.props\r\n        var res = {}\r\n\r\n        normalizeProps$1(properties, res, vm)\r\n        normalizeProps$1(vueProps, res, vm)\r\n\r\n        return res\r\n    }\r\n\r\n    /**\r\n     * 把 properties 中的属性 proxy 到 vm 上\r\n     */\r\n    function initMpProps(vm) {\r\n        var mpProps = (vm._mpProps = {})\r\n        var keys = Object.keys(vm.$options.properties || {})\r\n        keys.forEach(function(key) {\r\n            if (!(key in vm)) {\r\n                proxy(vm, \"_mpProps\", key)\r\n                mpProps[key] = undefined // for observe\r\n            }\r\n        })\r\n        observe(mpProps, true)\r\n    }\r\n\r\n    function initMP(mpType, next) {\r\n        var rootVueVM = this.$root\r\n        if (!rootVueVM.$mp) {\r\n            rootVueVM.$mp = {}\r\n        }\r\n\r\n        var mp = rootVueVM.$mp\r\n\r\n        // Please do not register multiple Pages\r\n        // if (mp.registered) {\r\n        if (mp.status) {\r\n            // 处理子组件的小程序生命周期\r\n            if (mpType === \"app\") {\r\n                callHook$1(this, \"onLaunch\", mp.appOptions)\r\n            } else {\r\n                callHook$1(this, \"onLoad\", mp.query)\r\n                callHook$1(this, \"onReady\")\r\n            }\r\n            return next()\r\n        }\r\n        // mp.registered = true\r\n\r\n        mp.mpType = mpType\r\n        mp.status = \"register\"\r\n\r\n        if (mpType === \"app\") {\r\n            global.App({\r\n                // 页面的初始数据\r\n                globalData: {\r\n                    appOptions: {}\r\n                },\r\n\r\n                handleProxy: function handleProxy(e) {\r\n                    return rootVueVM.$handleProxyWithVue(e)\r\n                },\r\n\r\n                // Do something initial when launch.\r\n                onLaunch: function onLaunch(options) {\r\n                    if (options === void 0) options = {}\r\n\r\n                    mp.app = this\r\n                    mp.status = \"launch\"\r\n                    this.globalData.appOptions = mp.appOptions = options\r\n                    callHook$1(rootVueVM, \"onLaunch\", options)\r\n                    next()\r\n                },\r\n\r\n                // Do something when app show.\r\n                onShow: function onShow(options) {\r\n                    if (options === void 0) options = {}\r\n\r\n                    mp.status = \"show\"\r\n                    this.globalData.appOptions = mp.appOptions = options\r\n                    callHook$1(rootVueVM, \"onShow\", options)\r\n                },\r\n\r\n                // Do something when app hide.\r\n                onHide: function onHide() {\r\n                    mp.status = \"hide\"\r\n                    callHook$1(rootVueVM, \"onHide\")\r\n                },\r\n\r\n                onError: function onError(err) {\r\n                    callHook$1(rootVueVM, \"onError\", err)\r\n                },\r\n                //fixed by xxxxxx\r\n                onUniNViewMessage: function onUniNViewMessage(e) {\r\n                    callHook$1(rootVueVM, \"onUniNViewMessage\", e)\r\n                }\r\n            })\r\n        } else if (mpType === \"component\") {\r\n            initMpProps(rootVueVM)\r\n\r\n            global.Component({\r\n                // 小程序原生的组件属性\r\n                properties: normalizeProperties(rootVueVM),\r\n                // 页面的初始数据\r\n                data: {\r\n                    $root: {}\r\n                },\r\n                methods: {\r\n                    handleProxy: function handleProxy(e) {\r\n                        return rootVueVM.$handleProxyWithVue(e)\r\n                    }\r\n                },\r\n                // mp lifecycle for vue\r\n                // 组件生命周期函数，在组件实例进入页面节点树时执行，注意此时不能调用 setData\r\n                created: function created() {\r\n                    mp.status = \"created\"\r\n                    mp.page = this\r\n                },\r\n                // 组件生命周期函数，在组件实例进入页面节点树时执行\r\n                attached: function attached() {\r\n                    mp.status = \"attached\"\r\n                    callHook$1(rootVueVM, \"attached\")\r\n                },\r\n                // 组件生命周期函数，在组件布局完成后执行，此时可以获取节点信息（使用 SelectorQuery ）\r\n                ready: function ready() {\r\n                    mp.status = \"ready\"\r\n\r\n                    callHook$1(rootVueVM, \"ready\")\r\n                    next()\r\n\r\n                    // 只有页面需要 setData\r\n                    rootVueVM.$nextTick(function() {\r\n                        rootVueVM._initDataToMP()\r\n                    })\r\n                },\r\n                // 组件生命周期函数，在组件实例被移动到节点树另一个位置时执行\r\n                moved: function moved() {\r\n                    callHook$1(rootVueVM, \"moved\")\r\n                },\r\n                // 组件生命周期函数，在组件实例被从页面节点树移除时执行\r\n                detached: function detached() {\r\n                    mp.status = \"detached\"\r\n                    callHook$1(rootVueVM, \"detached\")\r\n                }\r\n            })\r\n        } else {\r\n            var app = global.getApp()\r\n            //fixed by xxxxxx (将将初始数据赋值 page.data，加快速度)\r\n            //             const pageData = {\r\n            //                 $root: {}\r\n            //             }\r\n            //             if (rootVueVM.$options) {\r\n            //                 if (typeof rootVueVM.$options.data === 'object') {\r\n            //                     Object.assign(pageData, rootVueVM.$options.data)\r\n            //                 } else if (typeof rootVueVM.$options.data === 'function') {\r\n            //                     Object.assign(pageData, rootVueVM.$options.data())\r\n            //                 }\r\n            //             }\n            //fixed by xxxxxx (临时方案)\n            var pageDatas = {}\n            \r\n            global.Page({\r\n                // 页面的初始数据\r\n                data: {\r\n                    $root: {}\r\n                },\r\n\r\n                handleProxy: function handleProxy(e) {\r\n                    return rootVueVM.$handleProxyWithVue(e)\r\n                },\r\n\r\n                // mp lifecycle for vue\r\n                // 生命周期函数--监听页面加载\r\n                onLoad: function onLoad(query) {\r\n                    rootVueVM.__wxWebviewId__ = this.__wxWebviewId__//fixed by xxxxxx(createIntersectionObserver)\r\n                    mp.page = this\r\n                    mp.query = query\r\n                    mp.status = \"load\"\r\n                    getGlobalData(app, rootVueVM)\n                    //仅load时重置数据\n                    if (rootVueVM.$options && typeof rootVueVM.$options.data === \"function\") {\n                    \t\tObject.assign(rootVueVM.$data, rootVueVM.$options.data())\n                    }\r\n                    callHook$1(rootVueVM, \"onLoad\", query)\n                    \n                    // 只有页面需要 setData\n                    rootVueVM.$nextTick(function() {\n                    \t//fixed by xxxxxx\n                    \t\trootVueVM._initDataToMP()\n                    })\r\n                },\r\n\r\n                // 生命周期函数--监听页面显示\r\n                onShow: function onShow() {\n                    rootVueVM.__wxWebviewId__ = this.__wxWebviewId__//fixed by xxxxxx(createIntersectionObserver)\r\n                    mp.page = this\r\n                    mp.status = \"show\"\n                    //fixed by xxxxxx\n\t\t\t\t\t\t\t\t\t\tif(rootVueVM.$needReloadPageData){\n                      var oldData = pageDatas[this.__wxWebviewId__]\n                      if(oldData){\n                        Object.assign(rootVueVM.$data, oldData)\n                      }\n                      rootVueVM.$needReloadPageData = false\n                    }\n                    \r\n                    callHook$1(rootVueVM, \"onShow\")\r\n                },\r\n\r\n                // 生命周期函数--监听页面初次渲染完成\r\n                onReady: function onReady() {\r\n                    mp.status = \"ready\"\r\n\r\n                    callHook$1(rootVueVM, \"onReady\")\r\n                    next()\r\n                },\r\n\r\n                // 生命周期函数--监听页面隐藏\r\n                onHide: function onHide() {\r\n                    mp.status = \"hide\"\r\n                    callHook$1(rootVueVM, \"onHide\")\n\t\t\t\t\t\t\t\t\t\t//fixed by xxxxxx\r\n                    //mp.page = null\n                    \n                    //fixed by xxxxxx(save page data)\n                    pageDatas[this.__wxWebviewId__] = JSON.parse(JSON.stringify(rootVueVM.$data))\r\n                },\r\n\r\n                // 生命周期函数--监听页面卸载\r\n                onUnload: function onUnload() {\r\n                    mp.status = \"unload\"\r\n                    callHook$1(rootVueVM, \"onUnload\")\r\n                    mp.page = null\n                    //fixed by xxxxxx\n                    delete pageDatas[this.__wxWebviewId__]\n                    rootVueVM.$needReloadPageData = true\r\n                },\r\n\r\n                // 页面相关事件处理函数--监听用户下拉动作\r\n                onPullDownRefresh: function onPullDownRefresh() {\r\n                    callHook$1(rootVueVM, \"onPullDownRefresh\")\r\n                },\r\n\r\n                // 页面上拉触底事件的处理函数\r\n                onReachBottom: function onReachBottom() {\r\n                    callHook$1(rootVueVM, \"onReachBottom\")\r\n                },\r\n\r\n                // 用户点击右上角分享\r\n                onShareAppMessage: rootVueVM.$options.onShareAppMessage\r\n                    ? function(options) {\r\n                          return callHook$1(rootVueVM, \"onShareAppMessage\", options)\r\n                      }\r\n                    : null,\r\n\r\n                // Do something when page scroll\r\n                onPageScroll: function onPageScroll(options) {\r\n                    callHook$1(rootVueVM, \"onPageScroll\", options)\r\n                },\r\n\r\n                // 当前是 tab 页时，点击 tab 时触发\r\n                onTabItemTap: function onTabItemTap(options) {\r\n                    callHook$1(rootVueVM, \"onTabItemTap\", options)\r\n                },\r\n                //fixed by xxxxxx\r\n                onNavigationBarButtonTap: function onNavigationBarButtonTap(options) {\r\n                    callHook$1(rootVueVM, \"onNavigationBarButtonTap\", options)\r\n                },\n                onBackPress: function onBackPress() {\n                \t\treturn callHook$1(rootVueVM, \"onBackPress\")\n                }\r\n            })\r\n        }\r\n    }\r\n\r\n    // 节流方法，性能优化\r\n    // 全局的命名约定，为了节省编译的包大小一律采取形象的缩写，说明如下。\r\n    // $c === $child\r\n    // $k === $comKey\r\n\r\n    // 新型的被拍平的数据结构\r\n    // {\r\n    //   $root: {\r\n    //     '1-1'{\r\n    //       // ... data\r\n    //     },\r\n    //     '1.2-1': {\r\n    //       // ... data1\r\n    //     },\r\n    //     '1.2-2': {\r\n    //       // ... data2\r\n    //     }\r\n    //   }\r\n    // }\r\n\r\n    function getVmData(vm) {\r\n        // 确保当前 vm 所有数据被同步\r\n        var dataKeys = [].concat(\r\n            Object.keys(vm._data || {}),\r\n            Object.keys(vm._props || {}),\r\n            Object.keys(vm._mpProps || {}),\r\n            Object.keys(vm._computedWatchers || {})\r\n        )\r\n        return dataKeys.reduce(function(res, key) {\r\n            res[key] = vm[key]\r\n            return res\r\n        }, {})\r\n    }\r\n\r\n    function getParentComKey(vm, res) {\r\n        if (res === void 0) res = []\r\n\r\n        var ref = vm || {}\r\n        var $parent = ref.$parent\r\n        if (!$parent) {\r\n            return res\r\n        }\r\n        res.unshift(getComKey($parent))\r\n        if ($parent.$parent) {\r\n            return getParentComKey($parent, res)\r\n        }\r\n        return res\r\n    }\r\n\r\n    function formatVmData(vm) {\r\n        var $p = getParentComKey(vm).join(\",\")\r\n        var $k = $p + ($p ? \",\" : \"\") + getComKey(vm)\r\n\r\n        // getVmData 这儿获取当前组件内的所有数据，包含 props、computed 的数据\r\n        // 改动 vue.runtime 所获的的核心能力\r\n        var data = Object.assign(getVmData(vm), {\r\n            $k: $k,\r\n            $kk: $k + \",\",\r\n            $p: $p\r\n        })\r\n        var key = \"$root.\" + $k\r\n        var res = {}\r\n        res[key] = data\r\n        return res\r\n    }\r\n\r\n    function collectVmData(vm, res) {\r\n        if (res === void 0) res = {}\r\n\r\n        var vms = vm.$children\r\n        if (vms && vms.length) {\r\n            vms.forEach(function(v) {\r\n                return collectVmData(v, res)\r\n            })\r\n        }\r\n        return Object.assign(res, formatVmData(vm))\r\n    }\r\n\r\n    /**\r\n     * 频率控制 返回函数连续调用时，func 执行频率限定为 次 / wait\r\n     * 自动合并 data\r\n     *\r\n     * @param  {function}   func      传入函数\r\n     * @param  {number}     wait      表示时间窗口的间隔\r\n     * @param  {object}     options   如果想忽略开始边界上的调用，传入{leading: false}。\r\n     *                                如果想忽略结尾边界上的调用，传入{trailing: false}\r\n     * @return {function}             返回客户调用函数\r\n     */\r\n    function throttle(func, wait, options) {\r\n        var context, args, result\r\n        var timeout = null\r\n        // 上次执行时间点\r\n        var previous = 0\r\n        if (!options) {\r\n            options = {}\r\n        }\r\n        // 延迟执行函数\r\n        function later() {\r\n            // 若设定了开始边界不执行选项，上次执行时间始终为0\r\n            previous = options.leading === false ? 0 : Date.now()\r\n            timeout = null\r\n            result = func.apply(context, args)\r\n            if (!timeout) {\r\n                context = args = null\r\n            }\r\n        }\r\n        return function(handle, data) {\r\n            var now = Date.now()\r\n            // 首次执行时，如果设定了开始边界不执行选项，将上次执行时间设定为当前时间。\r\n            if (!previous && options.leading === false) {\r\n                previous = now\r\n            }\r\n            // 延迟执行时间间隔\r\n            var remaining = wait - (now - previous)\r\n            context = this\r\n            args = args ? [handle, Object.assign(args[1], data)] : [handle, data]\r\n            // 延迟时间间隔remaining小于等于0，表示上次执行至此所间隔时间已经超过一个时间窗口\r\n            // remaining大于时间窗口wait，表示客户端系统时间被调整过\r\n            if (remaining <= 0 || remaining > wait) {\r\n                clearTimeout(timeout)\r\n                timeout = null\r\n                previous = now\r\n                result = func.apply(context, args)\r\n                if (!timeout) {\r\n                    context = args = null\r\n                }\r\n                // 如果延迟执行不存在，且没有设定结尾边界不执行选项\r\n            } else if (!timeout && options.trailing !== false) {\r\n                timeout = setTimeout(later, remaining)\r\n            }\r\n            return result\r\n        }\r\n    }\r\n\r\n    // 优化频繁的 setData: https://mp.weixin.qq.com/debug/wxadoc/dev/framework/performance/tips.html\r\n    var throttleSetData = throttle(function(handle, data) {\r\n        handle(data)\r\n    }, 50)\r\n\r\n    function getPage(vm) {\r\n        var rootVueVM = vm.$root\r\n        var ref = rootVueVM.$mp || {}\r\n        var mpType = ref.mpType\r\n        if (mpType === void 0) mpType = \"\"\r\n        var page = ref.page\r\n\r\n        // 优化后台态页面进行 setData: https://mp.weixin.qq.com/debug/wxadoc/dev/framework/performance/tips.html\r\n        if (mpType === \"app\" || !page || typeof page.setData !== \"function\") {\r\n            return\r\n        }\r\n        return page\r\n    }\r\n\r\n    // 优化每次 setData 都传递大量新数据\r\n    function updateDataToMP() {\r\n        var page = getPage(this)\r\n        if (!page) {\r\n            return\r\n        }\r\n\r\n        var data = formatVmData(this)\n        //fixed by xxxxxx\r\n        throttleSetData(page.setData.bind(page), JSON.parse(JSON.stringify(diff(data, page.data))))\r\n    }\r\n\r\n    function initDataToMP() {\r\n        var page = getPage(this)\r\n        if (!page) {\r\n            return\r\n        }\r\n\r\n        var data = collectVmData(this.$root)\n        //fixed by xxxxxx\r\n        page.setData(JSON.parse(JSON.stringify(data)))\r\n    }\r\n\r\n    function getVM(vm, comkeys) {\r\n        if (comkeys === void 0) comkeys = []\r\n\r\n        var keys = comkeys.slice(1)\r\n        if (!keys.length) {\r\n            return vm\r\n        }\r\n\r\n        return keys.reduce(function(res, key) {\r\n            var len = res.$children.length\r\n            for (var i = 0; i < len; i++) {\r\n                var v = res.$children[i]\r\n                var k = getComKey(v)\r\n                if (k === key) {\r\n                    res = v\r\n                    return res\r\n                }\r\n            }\r\n            return res\r\n        }, vm)\r\n    }\r\n\r\n    function getHandle(vnode, eventid, eventTypes) {\r\n        if (eventTypes === void 0) eventTypes = []\r\n\r\n        var res = []\r\n        if (!vnode || !vnode.tag) {\r\n            return res\r\n        }\r\n\r\n        var ref = vnode || {}\r\n        var data = ref.data\r\n        if (data === void 0) data = {}\r\n        var children = ref.children\r\n        if (children === void 0) children = []\r\n        var componentInstance = ref.componentInstance\r\n        if (componentInstance) {\r\n            // 增加 slot 情况的处理\r\n            // Object.values 会多增加几行编译后的代码\r\n            Object.keys(componentInstance.$slots).forEach(function(slotKey) {\r\n                var slot = componentInstance.$slots[slotKey]\r\n                var slots = Array.isArray(slot) ? slot : [slot]\r\n                slots.forEach(function(node) {\r\n                    res = res.concat(getHandle(node, eventid, eventTypes))\r\n                })\r\n            })\r\n        } else {\r\n            // 避免遍历超出当前组件的 vm\r\n            children.forEach(function(node) {\r\n                res = res.concat(getHandle(node, eventid, eventTypes))\r\n            })\r\n        }\r\n\r\n        var attrs = data.attrs\r\n        var on = data.on\r\n        if (attrs && on && attrs[\"eventid\"] === eventid) {\r\n            eventTypes.forEach(function(et) {\r\n                var h = on[et]\r\n                if (typeof h === \"function\") {\r\n                    res.push(h)\r\n                } else if (Array.isArray(h)) {\r\n                    res = res.concat(h)\r\n                }\r\n            })\r\n            return res\r\n        }\r\n\r\n        return res\r\n    }\r\n\r\n    function getWebEventByMP(e) {\r\n        var type = e.type\r\n        var timeStamp = e.timeStamp\r\n        var touches = e.touches\r\n        var detail = e.detail\r\n        if (detail === void 0) detail = {}\r\n        var target = e.target\r\n        if (target === void 0) target = {}\r\n        var currentTarget = e.currentTarget\r\n        if (currentTarget === void 0) currentTarget = {}\r\n        var x = detail.x\r\n        var y = detail.y\r\n        var event = {\r\n            mp: e,\r\n            type: type,\r\n            timeStamp: timeStamp,\r\n            x: x,\r\n            y: y,\r\n            target: Object.assign({}, target, detail),\r\n            detail: detail, //fixed by xxxxxx\r\n            currentTarget: currentTarget,\r\n            stopPropagation: noop,\r\n            preventDefault: noop\r\n        }\r\n\r\n        if (touches && touches.length) {\r\n            Object.assign(event, touches[0])\r\n            event.touches = touches\r\n        }\r\n        return event\r\n    }\r\n\r\n    function handleProxyWithVue(e) {\r\n        var rootVueVM = this.$root\r\n        var type = e.type\r\n        var target = e.target\r\n        if (target === void 0) target = {}\r\n        var currentTarget = e.currentTarget\r\n        var ref = currentTarget || target\r\n        var dataset = ref.dataset\r\n        if (dataset === void 0) dataset = {}\r\n        var comkey = dataset.comkey\r\n        if (comkey === void 0) comkey = \"\"\r\n        var eventid = dataset.eventid\r\n        var vm = getVM(rootVueVM, comkey.split(\",\"))\r\n\r\n        if (!vm) {\r\n            return\r\n        }\r\n\r\n        var webEventTypes = eventTypeMap[type] || [type]\r\n        var handles = getHandle(vm._vnode, eventid, webEventTypes)\r\n\r\n        // TODO, enevt 还需要处理更多\r\n        // https://developer.mozilla.org/zh-CN/docs/Web/API/Event\r\n        if (handles.length) {\r\n            var event = getWebEventByMP(e)\r\n            if (handles.length === 1) {\r\n                var result = handles[0](event)\r\n                return result\r\n            }\r\n            handles.forEach(function(h) {\r\n                return h(event)\r\n            })\r\n        }\r\n    }\r\n\r\n    // for platforms\r\n    // import config from 'core/config'\r\n    // install platform specific utils\r\n    Vue$3.config.mustUseProp = mustUseProp\r\n    Vue$3.config.isReservedTag = isReservedTag\r\n    Vue$3.config.isReservedAttr = isReservedAttr\r\n    Vue$3.config.getTagNamespace = getTagNamespace\r\n    Vue$3.config.isUnknownElement = isUnknownElement\r\n\r\n    // install platform patch function\r\n    Vue$3.prototype.__patch__ = patch\r\n\r\n    // public mount method\r\n    Vue$3.prototype.$mount = function(el, hydrating) {\r\n        var this$1 = this\r\n\r\n        // el = el && inBrowser ? query(el) : undefined\r\n        // return mountComponent(this, el, hydrating)\r\n\r\n        // 初始化小程序生命周期相关\r\n        var options = this.$options\r\n\r\n        if (options && (options.render || options.mpType)) {\r\n            var mpType = options.mpType\r\n            if (mpType === void 0) mpType = \"page\"\r\n            return this._initMP(mpType, function() {\r\n                return mountComponent(this$1, undefined, undefined)\r\n            })\r\n        } else {\r\n            return mountComponent(this, undefined, undefined)\r\n        }\r\n    }\r\n\r\n    // for mp\r\n    Vue$3.prototype._initMP = initMP\r\n\r\n    Vue$3.prototype.$updateDataToMP = updateDataToMP\r\n    Vue$3.prototype._initDataToMP = initDataToMP\r\n\r\n    Vue$3.prototype.$handleProxyWithVue = handleProxyWithVue\r\n\r\n    /*  */\r\n\r\n    return Vue$3\r\n})\n\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))\n\n//////////////////\n// WEBPACK FOOTER\n// ./lib/mpvue/index.js\n// module id = 0\n// module chunks = 0\n\n");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

eval("/* globals __VUE_SSR_CONTEXT__ */\n\n// this module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle\n\nmodule.exports = function normalizeComponent (\n  rawScriptExports,\n  compiledTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier /* server only */\n) {\n  var esModule\n  var scriptExports = rawScriptExports = rawScriptExports || {}\n\n  // ES6 modules interop\n  var type = typeof rawScriptExports.default\n  if (type === 'object' || type === 'function') {\n    esModule = rawScriptExports\n    scriptExports = rawScriptExports.default\n  }\n\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === 'function'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (compiledTemplate) {\n    options.render = compiledTemplate.render\n    options.staticRenderFns = compiledTemplate.staticRenderFns\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) { // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = injectStyles\n  }\n\n  if (hook) {\n    var functional = options.functional\n    var existing = functional\n      ? options.render\n      : options.beforeCreate\n    if (!functional) {\n      // inject component registration as beforeCreate hook\n      options.beforeCreate = existing\n        ? [].concat(existing, hook)\n        : [hook]\n    } else {\n      // register for functioal component in vue file\n      options.render = function renderWithStyleInjection (h, context) {\n        hook.call(context)\n        return existing(h, context)\n      }\n    }\n  }\n\n  return {\n    esModule: esModule,\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./lib/mpvue-loader/lib/component-normalizer.js\n// module id = 1\n// module chunks = 0\n\n");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });var isFn = function isFn(v) {\n  return typeof v === 'function';\n};\n\nvar handlePromise = function handlePromise(promise) {\n  return promise.then(function (data) {\n    return [null, data];\n  }).catch(function (err) {\n    return [err];\n  });\n};\n\nvar REGEX = /^on|^create|Sync$|Manager$|^pause/;\nvar API_NORMAL_LIST = ['os', 'stopRecord', 'stopVoice', 'stopBackgroundAudio', 'stopPullDownRefresh', 'hideKeyboard', 'hideToast', 'hideLoading', 'showNavigationBarLoading', 'hideNavigationBarLoading', 'canIUse', 'navigateBack', 'closeSocket', 'pageScrollTo', 'drawCanvas'];\n\nvar shouldPromise = function shouldPromise(name) {\n  if (REGEX.test(name) && name !== 'createBLEConnection') {\n    return false;\n  }\n  if (~API_NORMAL_LIST.indexOf(name)) {\n    return false;\n  }\n  return true;\n};\n\nvar promisify = function promisify(api) {\n  return function () {\n    for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n      params[_key - 1] = arguments[_key];\n    }\n\n    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {\n      return api.apply(undefined, [options].concat(params));\n    }\n    return handlePromise(new Promise(function (resolve, reject) {\n      api.apply(undefined, [Object.assign({}, options, {\n        success: resolve,\n        fail: reject })].\n      concat(params));\n      /* eslint-disable no-extend-native */\n      Promise.prototype.finally = function (callback) {\n        var promise = this.constructor;\n        return this.then(function (value) {\n          return promise.resolve(callback()).then(function () {\n            return value;\n          });\n        }, function (reason) {\n          return promise.resolve(callback()).then(function () {\n            throw reason;\n          });\n        });\n      };\n    }));\n  };\n};\n\nvar EPS = 1e-4;\nvar BASE_DEVICE_WIDTH = 750;\nvar isIOS = false;\nvar deviceWidth = 0;\nvar deviceDPR = 0;\n\nfunction checkDeviceWidth() {\n  var _wx$getSystemInfoSync = wx.getSystemInfoSync(),\n  platform = _wx$getSystemInfoSync.platform,\n  pixelRatio = _wx$getSystemInfoSync.pixelRatio,\n  windowWidth = _wx$getSystemInfoSync.windowWidth;\n\n  deviceWidth = windowWidth;\n  deviceDPR = pixelRatio;\n  isIOS = platform === 'ios';\n}\n\nfunction transformUpx(number, newDeviceWidth) {\n  if (deviceWidth === 0) {\n    checkDeviceWidth();\n  }\n\n  if (number === 0) {\n    return 0;\n  }\n\n  number = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);\n  number = Math.floor(number + EPS);\n\n  if (number === 0) {\n    if (deviceDPR === 1 || !isIOS) {\n      return 1;\n    } else {\n      return 0.5;\n    }\n  }\n  return number;\n}\n\nvar uni = {};\n\nvar baseUni = {\n  os: {\n    plus: true } };\n\n\n\nif (typeof Proxy !== 'undefined') {\n  uni = new Proxy({}, {\n    get: function get(target, name) {\n      if (baseUni.hasOwnProperty(name)) {\n        return baseUni[name];\n      }\n      if (name === 'upx2px') {\n        return transformUpx;\n      }\n      if (!wx.hasOwnProperty(name)) {\n        return;\n      }\n      if (shouldPromise(name)) {\n        return promisify(wx[name]);\n      }\n      return wx[name];\n    } });\n\n} else {\n  uni.upx2px = transformUpx;\n\n  Object.keys(baseUni).forEach(function (key) {\n    uni[key] = baseUni[key];\n  });\n\n  Object.keys(wx).forEach(function (key) {\n    if (wx.hasOwnProperty(key)) {\n      if (shouldPromise(key)) {\n        uni[key] = promisify(wx[key]);\n      } else {\n        uni[key] = wx[key];\n      }\n    }\n  });\n}\n\nvar uni$1 = uni;exports.default =\n\nuni$1;\n\n//////////////////\n// WEBPACK FOOTER\n// ./lib/uni.app-plus.js\n// module id = 2\n// module chunks = 0\n\n");

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

eval("var g;\r\n\r\n// This works in non-strict mode\r\ng = (function() {\r\n\treturn this;\r\n})();\r\n\r\ntry {\r\n\t// This works if eval is allowed (see CSP)\r\n\tg = g || Function(\"return this\")() || (1,eval)(\"this\");\r\n} catch(e) {\r\n\t// This works if the window reference is available\r\n\tif(typeof window === \"object\")\r\n\t\tg = window;\r\n}\r\n\r\n// g can still be undefined, but nothing to do about it...\r\n// We return undefined, instead of nothing here, so it's\r\n// easier to handle this case. if(!global) { ...}\r\n\r\nmodule.exports = g;\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// (webpack)/buildin/global.js\n// module id = 4\n// module chunks = 0\n\n");

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Store\", function() { return Store; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"install\", function() { return install; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mapState\", function() { return mapState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mapMutations\", function() { return mapMutations; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mapGetters\", function() { return mapGetters; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"mapActions\", function() { return mapActions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createNamespacedHelpers\", function() { return createNamespacedHelpers; });\n/**\n * vuex v3.0.1\n * (c) 2017 Evan You\n * @license MIT\n */\nvar applyMixin = function (Vue) {\n  var version = Number(Vue.version.split('.')[0]);\n\n  if (version >= 2) {\n    Vue.mixin({ beforeCreate: vuexInit });\n  } else {\n    // override init and inject vuex init procedure\n    // for 1.x backwards compatibility.\n    var _init = Vue.prototype._init;\n    Vue.prototype._init = function (options) {\n      if ( options === void 0 ) options = {};\n\n      options.init = options.init\n        ? [vuexInit].concat(options.init)\n        : vuexInit;\n      _init.call(this, options);\n    };\n  }\n\n  /**\n   * Vuex init hook, injected into each instances init hooks list.\n   */\n\n  function vuexInit () {\n    var options = this.$options;\n    // store injection\n    if (options.store) {\n      this.$store = typeof options.store === 'function'\n        ? options.store()\n        : options.store;\n    } else if (options.parent && options.parent.$store) {\n      this.$store = options.parent.$store;\n    }\n  }\n};\n\nvar devtoolHook =\n  typeof window !== 'undefined' &&\n  window.__VUE_DEVTOOLS_GLOBAL_HOOK__;\n\nfunction devtoolPlugin (store) {\n  if (!devtoolHook) { return }\n\n  store._devtoolHook = devtoolHook;\n\n  devtoolHook.emit('vuex:init', store);\n\n  devtoolHook.on('vuex:travel-to-state', function (targetState) {\n    store.replaceState(targetState);\n  });\n\n  store.subscribe(function (mutation, state) {\n    devtoolHook.emit('vuex:mutation', mutation, state);\n  });\n}\n\n/**\n * Get the first item that pass the test\n * by second argument function\n *\n * @param {Array} list\n * @param {Function} f\n * @return {*}\n */\n/**\n * Deep copy the given object considering circular structure.\n * This function caches all nested objects and its copies.\n * If it detects circular structure, use cached copy to avoid infinite loop.\n *\n * @param {*} obj\n * @param {Array<Object>} cache\n * @return {*}\n */\n\n\n/**\n * forEach for object\n */\nfunction forEachValue (obj, fn) {\n  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });\n}\n\nfunction isObject (obj) {\n  return obj !== null && typeof obj === 'object'\n}\n\nfunction isPromise (val) {\n  return val && typeof val.then === 'function'\n}\n\nfunction assert (condition, msg) {\n  if (!condition) { throw new Error((\"[vuex] \" + msg)) }\n}\n\nvar Module = function Module (rawModule, runtime) {\n  this.runtime = runtime;\n  this._children = Object.create(null);\n  this._rawModule = rawModule;\n  var rawState = rawModule.state;\n  this.state = (typeof rawState === 'function' ? rawState() : rawState) || {};\n};\n\nvar prototypeAccessors$1 = { namespaced: { configurable: true } };\n\nprototypeAccessors$1.namespaced.get = function () {\n  return !!this._rawModule.namespaced\n};\n\nModule.prototype.addChild = function addChild (key, module) {\n  this._children[key] = module;\n};\n\nModule.prototype.removeChild = function removeChild (key) {\n  delete this._children[key];\n};\n\nModule.prototype.getChild = function getChild (key) {\n  return this._children[key]\n};\n\nModule.prototype.update = function update (rawModule) {\n  this._rawModule.namespaced = rawModule.namespaced;\n  if (rawModule.actions) {\n    this._rawModule.actions = rawModule.actions;\n  }\n  if (rawModule.mutations) {\n    this._rawModule.mutations = rawModule.mutations;\n  }\n  if (rawModule.getters) {\n    this._rawModule.getters = rawModule.getters;\n  }\n};\n\nModule.prototype.forEachChild = function forEachChild (fn) {\n  forEachValue(this._children, fn);\n};\n\nModule.prototype.forEachGetter = function forEachGetter (fn) {\n  if (this._rawModule.getters) {\n    forEachValue(this._rawModule.getters, fn);\n  }\n};\n\nModule.prototype.forEachAction = function forEachAction (fn) {\n  if (this._rawModule.actions) {\n    forEachValue(this._rawModule.actions, fn);\n  }\n};\n\nModule.prototype.forEachMutation = function forEachMutation (fn) {\n  if (this._rawModule.mutations) {\n    forEachValue(this._rawModule.mutations, fn);\n  }\n};\n\nObject.defineProperties( Module.prototype, prototypeAccessors$1 );\n\nvar ModuleCollection = function ModuleCollection (rawRootModule) {\n  // register root module (Vuex.Store options)\n  this.register([], rawRootModule, false);\n};\n\nModuleCollection.prototype.get = function get (path) {\n  return path.reduce(function (module, key) {\n    return module.getChild(key)\n  }, this.root)\n};\n\nModuleCollection.prototype.getNamespace = function getNamespace (path) {\n  var module = this.root;\n  return path.reduce(function (namespace, key) {\n    module = module.getChild(key);\n    return namespace + (module.namespaced ? key + '/' : '')\n  }, '')\n};\n\nModuleCollection.prototype.update = function update$1 (rawRootModule) {\n  update([], this.root, rawRootModule);\n};\n\nModuleCollection.prototype.register = function register (path, rawModule, runtime) {\n    var this$1 = this;\n    if ( runtime === void 0 ) runtime = true;\n\n  if (true) {\n    assertRawModule(path, rawModule);\n  }\n\n  var newModule = new Module(rawModule, runtime);\n  if (path.length === 0) {\n    this.root = newModule;\n  } else {\n    var parent = this.get(path.slice(0, -1));\n    parent.addChild(path[path.length - 1], newModule);\n  }\n\n  // register nested modules\n  if (rawModule.modules) {\n    forEachValue(rawModule.modules, function (rawChildModule, key) {\n      this$1.register(path.concat(key), rawChildModule, runtime);\n    });\n  }\n};\n\nModuleCollection.prototype.unregister = function unregister (path) {\n  var parent = this.get(path.slice(0, -1));\n  var key = path[path.length - 1];\n  if (!parent.getChild(key).runtime) { return }\n\n  parent.removeChild(key);\n};\n\nfunction update (path, targetModule, newModule) {\n  if (true) {\n    assertRawModule(path, newModule);\n  }\n\n  // update target module\n  targetModule.update(newModule);\n\n  // update nested modules\n  if (newModule.modules) {\n    for (var key in newModule.modules) {\n      if (!targetModule.getChild(key)) {\n        if (true) {\n          console.warn(\n            \"[vuex] trying to add a new module '\" + key + \"' on hot reloading, \" +\n            'manual reload is needed'\n          );\n        }\n        return\n      }\n      update(\n        path.concat(key),\n        targetModule.getChild(key),\n        newModule.modules[key]\n      );\n    }\n  }\n}\n\nvar functionAssert = {\n  assert: function (value) { return typeof value === 'function'; },\n  expected: 'function'\n};\n\nvar objectAssert = {\n  assert: function (value) { return typeof value === 'function' ||\n    (typeof value === 'object' && typeof value.handler === 'function'); },\n  expected: 'function or object with \"handler\" function'\n};\n\nvar assertTypes = {\n  getters: functionAssert,\n  mutations: functionAssert,\n  actions: objectAssert\n};\n\nfunction assertRawModule (path, rawModule) {\n  Object.keys(assertTypes).forEach(function (key) {\n    if (!rawModule[key]) { return }\n\n    var assertOptions = assertTypes[key];\n\n    forEachValue(rawModule[key], function (value, type) {\n      assert(\n        assertOptions.assert(value),\n        makeAssertionMessage(path, key, type, value, assertOptions.expected)\n      );\n    });\n  });\n}\n\nfunction makeAssertionMessage (path, key, type, value, expected) {\n  var buf = key + \" should be \" + expected + \" but \\\"\" + key + \".\" + type + \"\\\"\";\n  if (path.length > 0) {\n    buf += \" in module \\\"\" + (path.join('.')) + \"\\\"\";\n  }\n  buf += \" is \" + (JSON.stringify(value)) + \".\";\n  return buf\n}\n\nvar Vue; // bind on install\n\nvar Store = function Store (options) {\n  var this$1 = this;\n  if ( options === void 0 ) options = {};\n\n  // Auto install if it is not done yet and `window` has `Vue`.\n  // To allow users to avoid auto-installation in some cases,\n  // this code should be placed here. See #731\n  if (!Vue && typeof window !== 'undefined' && window.Vue) {\n    install(window.Vue);\n  }\n\n  if (true) {\n    assert(Vue, \"must call Vue.use(Vuex) before creating a store instance.\");\n    assert(typeof Promise !== 'undefined', \"vuex requires a Promise polyfill in this browser.\");\n    assert(this instanceof Store, \"Store must be called with the new operator.\");\n  }\n\n  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];\n  var strict = options.strict; if ( strict === void 0 ) strict = false;\n\n  var state = options.state; if ( state === void 0 ) state = {};\n  if (typeof state === 'function') {\n    state = state() || {};\n  }\n\n  // store internal state\n  this._committing = false;\n  this._actions = Object.create(null);\n  this._actionSubscribers = [];\n  this._mutations = Object.create(null);\n  this._wrappedGetters = Object.create(null);\n  this._modules = new ModuleCollection(options);\n  this._modulesNamespaceMap = Object.create(null);\n  this._subscribers = [];\n  this._watcherVM = new Vue();\n\n  // bind commit and dispatch to self\n  var store = this;\n  var ref = this;\n  var dispatch = ref.dispatch;\n  var commit = ref.commit;\n  this.dispatch = function boundDispatch (type, payload) {\n    return dispatch.call(store, type, payload)\n  };\n  this.commit = function boundCommit (type, payload, options) {\n    return commit.call(store, type, payload, options)\n  };\n\n  // strict mode\n  this.strict = strict;\n\n  // init root module.\n  // this also recursively registers all sub-modules\n  // and collects all module getters inside this._wrappedGetters\n  installModule(this, state, [], this._modules.root);\n\n  // initialize the store vm, which is responsible for the reactivity\n  // (also registers _wrappedGetters as computed properties)\n  resetStoreVM(this, state);\n\n  // apply plugins\n  plugins.forEach(function (plugin) { return plugin(this$1); });\n\n  if (Vue.config.devtools) {\n    devtoolPlugin(this);\n  }\n};\n\nvar prototypeAccessors = { state: { configurable: true } };\n\nprototypeAccessors.state.get = function () {\n  return this._vm._data.$$state\n};\n\nprototypeAccessors.state.set = function (v) {\n  if (true) {\n    assert(false, \"Use store.replaceState() to explicit replace store state.\");\n  }\n};\n\nStore.prototype.commit = function commit (_type, _payload, _options) {\n    var this$1 = this;\n\n  // check object-style commit\n  var ref = unifyObjectStyle(_type, _payload, _options);\n    var type = ref.type;\n    var payload = ref.payload;\n    var options = ref.options;\n\n  var mutation = { type: type, payload: payload };\n  var entry = this._mutations[type];\n  if (!entry) {\n    if (true) {\n      console.error((\"[vuex] unknown mutation type: \" + type));\n    }\n    return\n  }\n  this._withCommit(function () {\n    entry.forEach(function commitIterator (handler) {\n      handler(payload);\n    });\n  });\n  this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); });\n\n  if (\n    \"development\" !== 'production' &&\n    options && options.silent\n  ) {\n    console.warn(\n      \"[vuex] mutation type: \" + type + \". Silent option has been removed. \" +\n      'Use the filter functionality in the vue-devtools'\n    );\n  }\n};\n\nStore.prototype.dispatch = function dispatch (_type, _payload) {\n    var this$1 = this;\n\n  // check object-style dispatch\n  var ref = unifyObjectStyle(_type, _payload);\n    var type = ref.type;\n    var payload = ref.payload;\n\n  var action = { type: type, payload: payload };\n  var entry = this._actions[type];\n  if (!entry) {\n    if (true) {\n      console.error((\"[vuex] unknown action type: \" + type));\n    }\n    return\n  }\n\n  this._actionSubscribers.forEach(function (sub) { return sub(action, this$1.state); });\n\n  return entry.length > 1\n    ? Promise.all(entry.map(function (handler) { return handler(payload); }))\n    : entry[0](payload)\n};\n\nStore.prototype.subscribe = function subscribe (fn) {\n  return genericSubscribe(fn, this._subscribers)\n};\n\nStore.prototype.subscribeAction = function subscribeAction (fn) {\n  return genericSubscribe(fn, this._actionSubscribers)\n};\n\nStore.prototype.watch = function watch (getter, cb, options) {\n    var this$1 = this;\n\n  if (true) {\n    assert(typeof getter === 'function', \"store.watch only accepts a function.\");\n  }\n  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)\n};\n\nStore.prototype.replaceState = function replaceState (state) {\n    var this$1 = this;\n\n  this._withCommit(function () {\n    this$1._vm._data.$$state = state;\n  });\n};\n\nStore.prototype.registerModule = function registerModule (path, rawModule, options) {\n    if ( options === void 0 ) options = {};\n\n  if (typeof path === 'string') { path = [path]; }\n\n  if (true) {\n    assert(Array.isArray(path), \"module path must be a string or an Array.\");\n    assert(path.length > 0, 'cannot register the root module by using registerModule.');\n  }\n\n  this._modules.register(path, rawModule);\n  installModule(this, this.state, path, this._modules.get(path), options.preserveState);\n  // reset store to update getters...\n  resetStoreVM(this, this.state);\n};\n\nStore.prototype.unregisterModule = function unregisterModule (path) {\n    var this$1 = this;\n\n  if (typeof path === 'string') { path = [path]; }\n\n  if (true) {\n    assert(Array.isArray(path), \"module path must be a string or an Array.\");\n  }\n\n  this._modules.unregister(path);\n  this._withCommit(function () {\n    var parentState = getNestedState(this$1.state, path.slice(0, -1));\n    Vue.delete(parentState, path[path.length - 1]);\n  });\n  resetStore(this);\n};\n\nStore.prototype.hotUpdate = function hotUpdate (newOptions) {\n  this._modules.update(newOptions);\n  resetStore(this, true);\n};\n\nStore.prototype._withCommit = function _withCommit (fn) {\n  var committing = this._committing;\n  this._committing = true;\n  fn();\n  this._committing = committing;\n};\n\nObject.defineProperties( Store.prototype, prototypeAccessors );\n\nfunction genericSubscribe (fn, subs) {\n  if (subs.indexOf(fn) < 0) {\n    subs.push(fn);\n  }\n  return function () {\n    var i = subs.indexOf(fn);\n    if (i > -1) {\n      subs.splice(i, 1);\n    }\n  }\n}\n\nfunction resetStore (store, hot) {\n  store._actions = Object.create(null);\n  store._mutations = Object.create(null);\n  store._wrappedGetters = Object.create(null);\n  store._modulesNamespaceMap = Object.create(null);\n  var state = store.state;\n  // init all modules\n  installModule(store, state, [], store._modules.root, true);\n  // reset vm\n  resetStoreVM(store, state, hot);\n}\n\nfunction resetStoreVM (store, state, hot) {\n  var oldVm = store._vm;\n\n  // bind store public getters\n  store.getters = {};\n  var wrappedGetters = store._wrappedGetters;\n  var computed = {};\n  forEachValue(wrappedGetters, function (fn, key) {\n    // use computed to leverage its lazy-caching mechanism\n    computed[key] = function () { return fn(store); };\n    Object.defineProperty(store.getters, key, {\n      get: function () { return store._vm[key]; },\n      enumerable: true // for local getters\n    });\n  });\n\n  // use a Vue instance to store the state tree\n  // suppress warnings just in case the user has added\n  // some funky global mixins\n  var silent = Vue.config.silent;\n  Vue.config.silent = true;\n  store._vm = new Vue({\n    data: {\n      $$state: state\n    },\n    computed: computed\n  });\n  Vue.config.silent = silent;\n\n  // enable strict mode for new vm\n  if (store.strict) {\n    enableStrictMode(store);\n  }\n\n  if (oldVm) {\n    if (hot) {\n      // dispatch changes in all subscribed watchers\n      // to force getter re-evaluation for hot reloading.\n      store._withCommit(function () {\n        oldVm._data.$$state = null;\n      });\n    }\n    Vue.nextTick(function () { return oldVm.$destroy(); });\n  }\n}\n\nfunction installModule (store, rootState, path, module, hot) {\n  var isRoot = !path.length;\n  var namespace = store._modules.getNamespace(path);\n\n  // register in namespace map\n  if (module.namespaced) {\n    store._modulesNamespaceMap[namespace] = module;\n  }\n\n  // set state\n  if (!isRoot && !hot) {\n    var parentState = getNestedState(rootState, path.slice(0, -1));\n    var moduleName = path[path.length - 1];\n    store._withCommit(function () {\n      Vue.set(parentState, moduleName, module.state);\n    });\n  }\n\n  var local = module.context = makeLocalContext(store, namespace, path);\n\n  module.forEachMutation(function (mutation, key) {\n    var namespacedType = namespace + key;\n    registerMutation(store, namespacedType, mutation, local);\n  });\n\n  module.forEachAction(function (action, key) {\n    var type = action.root ? key : namespace + key;\n    var handler = action.handler || action;\n    registerAction(store, type, handler, local);\n  });\n\n  module.forEachGetter(function (getter, key) {\n    var namespacedType = namespace + key;\n    registerGetter(store, namespacedType, getter, local);\n  });\n\n  module.forEachChild(function (child, key) {\n    installModule(store, rootState, path.concat(key), child, hot);\n  });\n}\n\n/**\n * make localized dispatch, commit, getters and state\n * if there is no namespace, just use root ones\n */\nfunction makeLocalContext (store, namespace, path) {\n  var noNamespace = namespace === '';\n\n  var local = {\n    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {\n      var args = unifyObjectStyle(_type, _payload, _options);\n      var payload = args.payload;\n      var options = args.options;\n      var type = args.type;\n\n      if (!options || !options.root) {\n        type = namespace + type;\n        if (\"development\" !== 'production' && !store._actions[type]) {\n          console.error((\"[vuex] unknown local action type: \" + (args.type) + \", global type: \" + type));\n          return\n        }\n      }\n\n      return store.dispatch(type, payload)\n    },\n\n    commit: noNamespace ? store.commit : function (_type, _payload, _options) {\n      var args = unifyObjectStyle(_type, _payload, _options);\n      var payload = args.payload;\n      var options = args.options;\n      var type = args.type;\n\n      if (!options || !options.root) {\n        type = namespace + type;\n        if (\"development\" !== 'production' && !store._mutations[type]) {\n          console.error((\"[vuex] unknown local mutation type: \" + (args.type) + \", global type: \" + type));\n          return\n        }\n      }\n\n      store.commit(type, payload, options);\n    }\n  };\n\n  // getters and state object must be gotten lazily\n  // because they will be changed by vm update\n  Object.defineProperties(local, {\n    getters: {\n      get: noNamespace\n        ? function () { return store.getters; }\n        : function () { return makeLocalGetters(store, namespace); }\n    },\n    state: {\n      get: function () { return getNestedState(store.state, path); }\n    }\n  });\n\n  return local\n}\n\nfunction makeLocalGetters (store, namespace) {\n  var gettersProxy = {};\n\n  var splitPos = namespace.length;\n  Object.keys(store.getters).forEach(function (type) {\n    // skip if the target getter is not match this namespace\n    if (type.slice(0, splitPos) !== namespace) { return }\n\n    // extract local getter type\n    var localType = type.slice(splitPos);\n\n    // Add a port to the getters proxy.\n    // Define as getter property because\n    // we do not want to evaluate the getters in this time.\n    Object.defineProperty(gettersProxy, localType, {\n      get: function () { return store.getters[type]; },\n      enumerable: true\n    });\n  });\n\n  return gettersProxy\n}\n\nfunction registerMutation (store, type, handler, local) {\n  var entry = store._mutations[type] || (store._mutations[type] = []);\n  entry.push(function wrappedMutationHandler (payload) {\n    handler.call(store, local.state, payload);\n  });\n}\n\nfunction registerAction (store, type, handler, local) {\n  var entry = store._actions[type] || (store._actions[type] = []);\n  entry.push(function wrappedActionHandler (payload, cb) {\n    var res = handler.call(store, {\n      dispatch: local.dispatch,\n      commit: local.commit,\n      getters: local.getters,\n      state: local.state,\n      rootGetters: store.getters,\n      rootState: store.state\n    }, payload, cb);\n    if (!isPromise(res)) {\n      res = Promise.resolve(res);\n    }\n    if (store._devtoolHook) {\n      return res.catch(function (err) {\n        store._devtoolHook.emit('vuex:error', err);\n        throw err\n      })\n    } else {\n      return res\n    }\n  });\n}\n\nfunction registerGetter (store, type, rawGetter, local) {\n  if (store._wrappedGetters[type]) {\n    if (true) {\n      console.error((\"[vuex] duplicate getter key: \" + type));\n    }\n    return\n  }\n  store._wrappedGetters[type] = function wrappedGetter (store) {\n    return rawGetter(\n      local.state, // local state\n      local.getters, // local getters\n      store.state, // root state\n      store.getters // root getters\n    )\n  };\n}\n\nfunction enableStrictMode (store) {\n  store._vm.$watch(function () { return this._data.$$state }, function () {\n    if (true) {\n      assert(store._committing, \"Do not mutate vuex store state outside mutation handlers.\");\n    }\n  }, { deep: true, sync: true });\n}\n\nfunction getNestedState (state, path) {\n  return path.length\n    ? path.reduce(function (state, key) { return state[key]; }, state)\n    : state\n}\n\nfunction unifyObjectStyle (type, payload, options) {\n  if (isObject(type) && type.type) {\n    options = payload;\n    payload = type;\n    type = type.type;\n  }\n\n  if (true) {\n    assert(typeof type === 'string', (\"Expects string as the type, but found \" + (typeof type) + \".\"));\n  }\n\n  return { type: type, payload: payload, options: options }\n}\n\nfunction install (_Vue) {\n  if (Vue && _Vue === Vue) {\n    if (true) {\n      console.error(\n        '[vuex] already installed. Vue.use(Vuex) should be called only once.'\n      );\n    }\n    return\n  }\n  Vue = _Vue;\n  applyMixin(Vue);\n}\n\nvar mapState = normalizeNamespace(function (namespace, states) {\n  var res = {};\n  normalizeMap(states).forEach(function (ref) {\n    var key = ref.key;\n    var val = ref.val;\n\n    res[key] = function mappedState () {\n      var state = this.$store.state;\n      var getters = this.$store.getters;\n      if (namespace) {\n        var module = getModuleByNamespace(this.$store, 'mapState', namespace);\n        if (!module) {\n          return\n        }\n        state = module.context.state;\n        getters = module.context.getters;\n      }\n      return typeof val === 'function'\n        ? val.call(this, state, getters)\n        : state[val]\n    };\n    // mark vuex getter for devtools\n    res[key].vuex = true;\n  });\n  return res\n});\n\nvar mapMutations = normalizeNamespace(function (namespace, mutations) {\n  var res = {};\n  normalizeMap(mutations).forEach(function (ref) {\n    var key = ref.key;\n    var val = ref.val;\n\n    res[key] = function mappedMutation () {\n      var args = [], len = arguments.length;\n      while ( len-- ) args[ len ] = arguments[ len ];\n\n      var commit = this.$store.commit;\n      if (namespace) {\n        var module = getModuleByNamespace(this.$store, 'mapMutations', namespace);\n        if (!module) {\n          return\n        }\n        commit = module.context.commit;\n      }\n      return typeof val === 'function'\n        ? val.apply(this, [commit].concat(args))\n        : commit.apply(this.$store, [val].concat(args))\n    };\n  });\n  return res\n});\n\nvar mapGetters = normalizeNamespace(function (namespace, getters) {\n  var res = {};\n  normalizeMap(getters).forEach(function (ref) {\n    var key = ref.key;\n    var val = ref.val;\n\n    val = namespace + val;\n    res[key] = function mappedGetter () {\n      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {\n        return\n      }\n      if (\"development\" !== 'production' && !(val in this.$store.getters)) {\n        console.error((\"[vuex] unknown getter: \" + val));\n        return\n      }\n      return this.$store.getters[val]\n    };\n    // mark vuex getter for devtools\n    res[key].vuex = true;\n  });\n  return res\n});\n\nvar mapActions = normalizeNamespace(function (namespace, actions) {\n  var res = {};\n  normalizeMap(actions).forEach(function (ref) {\n    var key = ref.key;\n    var val = ref.val;\n\n    res[key] = function mappedAction () {\n      var args = [], len = arguments.length;\n      while ( len-- ) args[ len ] = arguments[ len ];\n\n      var dispatch = this.$store.dispatch;\n      if (namespace) {\n        var module = getModuleByNamespace(this.$store, 'mapActions', namespace);\n        if (!module) {\n          return\n        }\n        dispatch = module.context.dispatch;\n      }\n      return typeof val === 'function'\n        ? val.apply(this, [dispatch].concat(args))\n        : dispatch.apply(this.$store, [val].concat(args))\n    };\n  });\n  return res\n});\n\nvar createNamespacedHelpers = function (namespace) { return ({\n  mapState: mapState.bind(null, namespace),\n  mapGetters: mapGetters.bind(null, namespace),\n  mapMutations: mapMutations.bind(null, namespace),\n  mapActions: mapActions.bind(null, namespace)\n}); };\n\nfunction normalizeMap (map) {\n  return Array.isArray(map)\n    ? map.map(function (key) { return ({ key: key, val: key }); })\n    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })\n}\n\nfunction normalizeNamespace (fn) {\n  return function (namespace, map) {\n    if (typeof namespace !== 'string') {\n      map = namespace;\n      namespace = '';\n    } else if (namespace.charAt(namespace.length - 1) !== '/') {\n      namespace += '/';\n    }\n    return fn(namespace, map)\n  }\n}\n\nfunction getModuleByNamespace (store, helper, namespace) {\n  var module = store._modulesNamespaceMap[namespace];\n  if (\"development\" !== 'production' && !module) {\n    console.error((\"[vuex] module namespace not found in \" + helper + \"(): \" + namespace));\n  }\n  return module\n}\n\nvar index_esm = {\n  Store: Store,\n  install: install,\n  version: '3.0.1',\n  mapState: mapState,\n  mapMutations: mapMutations,\n  mapGetters: mapGetters,\n  mapActions: mapActions,\n  createNamespacedHelpers: createNamespacedHelpers\n};\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (index_esm);\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/vuex/dist/vuex.esm.js\n// module id = 10\n// module chunks = 0\n\n");

/***/ })
]);
});
define('static/js/base.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

var url_d = "";
exports.base = {
	install: function install(Vue, options) {
		Vue.prototype.version = "9.2.1";

		Vue.prototype.parseParam = function (data) {
			var _result = [];
			for (var key in data) {
				var value = data[key];
				if (value.constructor == Array) {
					value.forEach(function (_value) {
						_result.push(key + '=' + value);
					});
				} else {
					_result.push(key + '=' + value);
				}
			}
			return _result.join('&');
		};

		Vue.prototype.post = function (url, canshu, call, ty) {
			ajax_e(url, canshu, call, ty);
		};
		Vue.prototype.get_TE = function (call_back, kje) {
			var sd_der = {};
			sd_der.event = kje || 1;
			ajax_e("/api/common/getQiniuToken", sd_der, function (data, all_data) {

				call_back(data);
			});
		};

		Vue.prototype.Base64 = Base64;
		Vue.prototype.getBase64Imageer = function (img) {
			getBase64Imageer(img);
		};

		Vue.prototype.time_c = function (t) {
			var time = new Date();
			time.setTime(t * 1000);
			var Year = time.getFullYear(),
			    Month = time.getMonth() + 1,
			    Data = time.getDate() < 10 ? 0 + '' + time.getDate() : time.getDate();
			Month < 10 ? Month = 0 + '' + Month : Month = Month;
			return Year + "-" + Month + "-" + Data;
		};

		Vue.prototype.yanza = {
			mail: function mail(a) {
				var b = !1;
				return (/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(a) && (b = !0), b
				);
			},
			phone: function phone(a) {
				var b = !1;
				return a.match(/^13[0-9]{9}|15[0-9]{9}|17[0-9]{9}|18[0-9]{9}$/) && 11 == a.length && (b = !0), b;
			},
			car_t: function car_t(a) {
				var b = !1;
				return (/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(a) && (b = !0), b
				);
			}
		};

		Vue.prototype.copyShareUrl = function (copy_content) {
			uni.getSystemInfo({
				success: function success(res) {
					if (res.platform == "android") {
						var context = plus.android.importClass("android.content.Context");
						var main = plus.android.runtimeMainActivity();
						var clip = main.getSystemService(context.CLIPBOARD_SERVICE);
						plus.android.invoke(clip, "setText", copy_content);
					} else {
						var UIPasteboard = plus.ios.importClass("UIPasteboard");
						var generalPasteboard = UIPasteboard.generalPasteboard();

						generalPasteboard.plusCallMethod({
							setValue: copy_content,
							forPasteboardType: "public.utf8-plain-text"
						});
						generalPasteboard.plusCallMethod({
							valueForPasteboardType: "public.utf8-plain-text"
						});
					}
				}
			});
		};

		Vue.prototype.pz = function (call, kje) {

			var sd_der = {};
			sd_der.event = kje || 1;

			ajax_e("/api/common/getQiniuToken", sd_der, function (data, all_data) {
				var token = data.token,
				    domain = data.domain;
				uni.chooseImage({
					count: 1,
					success: function success(res) {
						var key = res.tempFilePaths[0];
						key = Base64.encode(key);
						uni.showLoading({
							title: '图片上传中...',
							mask: true
						});
						uni.uploadFile({
							url: 'http://up.qiniu.com/',
							filePath: res.tempFilePaths[0],
							name: 'file',
							formData: {
								token: token,
								key: key
							},
							success: function success(uploadFileRes) {
								uni.hideLoading();
								var sdf_dr = JSON.parse(uploadFileRes.data);

								call(domain + sdf_dr.data.url);
							}
						});
					}
				});
			});
		};

		Vue.prototype.yjpz = function (dataer, kje, num) {

			var sd_der = {};
			sd_der.event = kje || 1;

			ajax_e("/api/common/getQiniuToken", sd_der, function (data, all_data) {
				var token = data.token,
				    domain = data.domain;
				uni.chooseImage({
					count: num,
					sourceType: ["album"],
					success: function success(res) {

						res.tempFilePaths.map(function (a, idx) {
							var key = a;
							key = Base64.encode(key);
							uni.showLoading({
								title: '图片上传中...',
								mask: true
							});
							uni.uploadFile({
								url: 'http://up.qiniu.com/',
								filePath: a,
								name: 'file',
								formData: {
									token: token,
									key: key
								},
								success: function success(uploadFileRes) {
									uni.hideLoading();
									var sdf_dr = JSON.parse(uploadFileRes.data);
									dataer[idx].url = domain + sdf_dr.data.url;
								}
							});
						});
					}
				});
			});
		};

		Vue.prototype.getClipbordText = function (call) {

			uni.getSystemInfo({
				success: function success(res) {
					if (res.platform == "android") {
						var Context = plus.android.importClass("android.content.Context");

						var main = plus.android.runtimeMainActivity();
						var clip = main.getSystemService(Context.CLIPBOARD_SERVICE);
						call(plus.android.invoke(clip, "getText"));
					} else {
						var UIPasteboard = plus.ios.importClass("UIPasteboard");
						var generalPasteboard = UIPasteboard.generalPasteboard();
						var _val = generalPasteboard.plusCallMethod({
							valueForPasteboardType: "public.utf8-plain-text"
						});
						console.log("ios复制返回的数据是：", _val);
						call(_val || '');
					}
				}

			});
		};
	}
};

function copyShareUrl(copy_content) {
	uni.getSystemInfo({
		success: function success(res) {
			if (res.platform == "android") {
				var context = plus.android.importClass("android.content.Context");
				var main = plus.android.runtimeMainActivity();
				var clip = main.getSystemService(context.CLIPBOARD_SERVICE);
				plus.android.invoke(clip, "setText", copy_content);
			} else {
				var UIPasteboard = plus.ios.importClass("UIPasteboard");
				var generalPasteboard = UIPasteboard.generalPasteboard();

				generalPasteboard.plusCallMethod({
					setValue: copy_content,
					forPasteboardType: "public.utf8-plain-text"
				});
				generalPasteboard.plusCallMethod({
					valueForPasteboardType: "public.utf8-plain-text"
				});
			}
		}
	});
}

function ajax_e(url, canshu, call, ty) {
	var urlsd = url_d + url;
	uni.showLoading({
		title: '处理中',
		mask: true
	});

	if (!ty) {
		canshu.key = uni.getStorageSync('token');
	}
	uni.request({
		url: urlsd,
		method: "POST",
		header: {
			"content-type": "application/x-www-form-urlencoded"
		},
		data: canshu,
		success: function success(res) {
			uni.hideLoading();

			if (res.data.status == 1) {
				call(res.data.data);
				return;
			}
			if (res.data.status == 0 || res.data.status == 3024) {
				call(res.data);
				return;
			}
			uni.showToast({
				icon: "none",
				title: res.data.msg
			});
			if (res.data.status == '1020') {
				setTimeout(function () {
					uni.navigateBack({
						delta: 1
					});
				}, 1000);
				return;
			}
			if (res.data.status == 40003) {

				uni.reLaunch({
					url: '/pages/user_center/Login'
				});
				return;
			}
		},
		fail: function fail() {
			uni.showToast({
				icon: "none",
				title: "接口请求异常"
			});
		}
	});
}

var Base64 = {
	_keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

	encode: function encode(input) {
		var output = "";
		var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
		var i = 0;

		input = Base64._utf8_encode(input);

		while (i < input.length) {

			chr1 = input.charCodeAt(i++);
			chr2 = input.charCodeAt(i++);
			chr3 = input.charCodeAt(i++);

			enc1 = chr1 >> 2;
			enc2 = (chr1 & 3) << 4 | chr2 >> 4;
			enc3 = (chr2 & 15) << 2 | chr3 >> 6;
			enc4 = chr3 & 63;

			if (isNaN(chr2)) {
				enc3 = enc4 = 64;
			} else if (isNaN(chr3)) {
				enc4 = 64;
			}

			output = output + this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) + this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
		}

		return output;
	},

	decode: function decode(input) {
		var output = "";
		var chr1, chr2, chr3;
		var enc1, enc2, enc3, enc4;
		var i = 0;

		input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

		while (i < input.length) {

			enc1 = this._keyStr.indexOf(input.charAt(i++));
			enc2 = this._keyStr.indexOf(input.charAt(i++));
			enc3 = this._keyStr.indexOf(input.charAt(i++));
			enc4 = this._keyStr.indexOf(input.charAt(i++));

			chr1 = enc1 << 2 | enc2 >> 4;
			chr2 = (enc2 & 15) << 4 | enc3 >> 2;
			chr3 = (enc3 & 3) << 6 | enc4;

			output = output + String.fromCharCode(chr1);

			if (enc3 != 64) {
				output = output + String.fromCharCode(chr2);
			}
			if (enc4 != 64) {
				output = output + String.fromCharCode(chr3);
			}
		}

		output = Base64._utf8_decode(output);

		return output;
	},

	_utf8_encode: function _utf8_encode(string) {
		string = string.replace(/\r\n/g, "\n");
		var utftext = "";

		for (var n = 0; n < string.length; n++) {

			var c = string.charCodeAt(n);

			if (c < 128) {
				utftext += String.fromCharCode(c);
			} else if (c > 127 && c < 2048) {
				utftext += String.fromCharCode(c >> 6 | 192);
				utftext += String.fromCharCode(c & 63 | 128);
			} else {
				utftext += String.fromCharCode(c >> 12 | 224);
				utftext += String.fromCharCode(c >> 6 & 63 | 128);
				utftext += String.fromCharCode(c & 63 | 128);
			}
		}

		return utftext;
	},

	_utf8_decode: function _utf8_decode(utftext) {
		var string = "";
		var i = 0;
		var c = c1 = c2 = 0;

		while (i < utftext.length) {

			c = utftext.charCodeAt(i);

			if (c < 128) {
				string += String.fromCharCode(c);
				i++;
			} else if (c > 191 && c < 224) {
				c2 = utftext.charCodeAt(i + 1);
				string += String.fromCharCode((c & 31) << 6 | c2 & 63);
				i += 2;
			} else {
				c2 = utftext.charCodeAt(i + 1);
				c3 = utftext.charCodeAt(i + 2);
				string += String.fromCharCode((c & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
				i += 3;
			}
		}

		return string;
	}

};

function getBase64Imageer(img) {
	var canvas = document.createElement("canvas");
	var width = img.width;
	var height = img.height;

	if (width > height) {
		if (width > 640) {
			height = Math.round(height *= 640 / width);
			width = 640;
		}
	} else {
		if (height > 640) {
			width = Math.round(width *= 640 / height);
			height = 640;
		}
	}
	canvas.width = width;
	canvas.height = height;
	var ctx = canvas.getContext("2d");
	ctx.drawImage(img, 0, 0, width, height);
	var dataURL = canvas.toDataURL("image/png", 0.8);
	return dataURL.replace("data:image/png;base64,", "");
}
});
define('static/js/city.data.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = [{
    value: '110000',
    label: '北京市',
    children: [{
        value: "110101",
        label: "东城区"
    }, {
        value: "110102",
        label: "西城区"
    }, {
        value: "110103",
        label: "崇文区"
    }, {
        value: "110104",
        label: "宣武区"
    }, {
        value: "110105",
        label: "朝阳区"
    }, {
        value: "110106",
        label: "丰台区"
    }, {
        value: "110107",
        label: "石景山区"
    }, {
        value: "110108",
        label: "海淀区"
    }, {
        value: "110109",
        label: "门头沟区"
    }, {
        value: "110111",
        label: "房山区"
    }, {
        value: "110112",
        label: "通州区"
    }, {
        value: "110113",
        label: "顺义区"
    }, {
        value: "110114",
        label: "昌平区"
    }, {
        value: "110115",
        label: "大兴区"
    }, {
        value: "110116",
        label: "怀柔区"
    }, {
        value: "110117",
        label: "平谷区"
    }, {
        value: "110228",
        label: "密云县"
    }, {
        value: "110229",
        label: "延庆县"
    }, {
        value: "110230",
        label: "其它区"
    }]
}, {
    value: '120000',
    label: '天津市',
    children: [{
        value: "120101",
        label: "和平区"
    }, {
        value: "120102",
        label: "河东区"
    }, {
        value: "120103",
        label: "河西区"
    }, {
        value: "120104",
        label: "南开区"
    }, {
        value: "120105",
        label: "河北区"
    }, {
        value: "120106",
        label: "红桥区"
    }, {
        value: "120107",
        label: "塘沽区"
    }, {
        value: "120108",
        label: "汉沽区"
    }, {
        value: "120109",
        label: "大港区"
    }, {
        value: "120110",
        label: "东丽区"
    }, {
        value: "120111",
        label: "西青区"
    }, {
        value: "120112",
        label: "津南区"
    }, {
        value: "120113",
        label: "北辰区"
    }, {
        value: "120114",
        label: "武清区"
    }, {
        value: "120115",
        label: "宝坻区"
    }, {
        value: "120116",
        label: "滨海新区"
    }, {
        value: "120221",
        label: "宁河县"
    }, {
        value: "120223",
        label: "静海县"
    }, {
        value: "120225",
        label: "蓟县"
    }, {
        value: "120226",
        label: "其它区"
    }]
}, {
    value: '130000',
    label: '河北省',
    children: [{
        value: "130100",
        label: "石家庄市"
    }, {
        value: "130200",
        label: "唐山市"
    }, {
        value: "130300",
        label: "秦皇岛市"
    }, {
        value: "130400",
        label: "邯郸市"
    }, {
        value: "130500",
        label: "邢台市"
    }, {
        value: "130600",
        label: "保定市"
    }, {
        value: "130700",
        label: "张家口市"
    }, {
        value: "130800",
        label: "承德市"
    }, {
        value: "130900",
        label: "沧州市"
    }, {
        value: "131000",
        label: "廊坊市"
    }, {
        value: "131100",
        label: "衡水市"
    }]
}, {
    value: '140000',
    label: '山西省',
    children: [{
        value: "140100",
        label: "太原市"
    }, {
        value: "140200",
        label: "大同市"
    }, {
        value: "140300",
        label: "阳泉市"
    }, {
        value: "140400",
        label: "长治市"
    }, {
        value: "140500",
        label: "晋城市"
    }, {
        value: "140600",
        label: "朔州市"
    }, {
        value: "140700",
        label: "晋中市"
    }, {
        value: "140800",
        label: "运城市"
    }, {
        value: "140900",
        label: "忻州市"
    }, {
        value: "141000",
        label: "临汾市"
    }, {
        value: "141100",
        label: "吕梁市"
    }]
}, {
    value: '150000',
    label: '内蒙古',
    children: [{
        value: "150100",
        label: "呼和浩特市"
    }, {
        value: "150200",
        label: "包头市"
    }, {
        value: "150300",
        label: "乌海市"
    }, {
        value: "150400",
        label: "赤峰市"
    }, {
        value: "150500",
        label: "通辽市"
    }, {
        value: "150600",
        label: "鄂尔多斯市"
    }, {
        value: "150700",
        label: "呼伦贝尔市"
    }, {
        value: "150800",
        label: "巴彦淖尔市"
    }, {
        value: "150900",
        label: "乌兰察布市"
    }, {
        value: "152200",
        label: "兴安盟"
    }, {
        value: "152500",
        label: "锡林郭勒盟"
    }, {
        value: "152900",
        label: "阿拉善盟"
    }]
}, {
    value: '210000',
    label: '辽宁省',
    children: [{
        value: "210100",
        label: "沈阳市"
    }, {
        value: "210200",
        label: "大连市"
    }, {
        value: "210300",
        label: "鞍山市"
    }, {
        value: "210400",
        label: "抚顺市"
    }, {
        value: "210500",
        label: "本溪市"
    }, {
        value: "210600",
        label: "丹东市"
    }, {
        value: "210700",
        label: "锦州市"
    }, {
        value: "210800",
        label: "营口市"
    }, {
        value: "210900",
        label: "阜新市"
    }, {
        value: "211000",
        label: "辽阳市"
    }, {
        value: "211100",
        label: "盘锦市"
    }, {
        value: "211200",
        label: "铁岭市"
    }, {
        value: "211300",
        label: "朝阳市"
    }, {
        value: "211400",
        label: "葫芦岛市"
    }]
}, {
    value: '220000',
    label: '吉林省',
    children: [{
        value: "220100",
        label: "长春市"
    }, {
        value: "220200",
        label: "吉林市"
    }, {
        value: "220300",
        label: "四平市"
    }, {
        value: "220400",
        label: "辽源市"
    }, {
        value: "220500",
        label: "通化市"
    }, {
        value: "220600",
        label: "白山市"
    }, {
        value: "220700",
        label: "松原市"
    }, {
        value: "220800",
        label: "白城市"
    }, {
        value: "222400",
        label: "延边朝鲜族自治州"
    }]
}, {
    value: '230000',
    label: '黑龙江省',
    children: [{
        value: "230100",
        label: "哈尔滨市"
    }, {
        value: "230200",
        label: "齐齐哈尔市"
    }, {
        value: "230300",
        label: "鸡西市"
    }, {
        value: "230400",
        label: "鹤岗市"
    }, {
        value: "230500",
        label: "双鸭山市"
    }, {
        value: "230600",
        label: "大庆市"
    }, {
        value: "230700",
        label: "伊春市"
    }, {
        value: "230800",
        label: "佳木斯市"
    }, {
        value: "230900",
        label: "七台河市"
    }, {
        value: "231000",
        label: "牡丹江市"
    }, {
        value: "231100",
        label: "黑河市"
    }, {
        value: "231200",
        label: "绥化市"
    }, {
        value: "232700",
        label: "大兴安岭地区"
    }]
}, {
    value: '310000',
    label: '上海市',
    children: [{
        value: "310101",
        label: "黄浦区"
    }, {
        value: "310103",
        label: "卢湾区"
    }, {
        value: "310104",
        label: "徐汇区"
    }, {
        value: "310105",
        label: "长宁区"
    }, {
        value: "310106",
        label: "静安区"
    }, {
        value: "310107",
        label: "普陀区"
    }, {
        value: "310108",
        label: "闸北区"
    }, {
        value: "310109",
        label: "虹口区"
    }, {
        value: "310110",
        label: "杨浦区"
    }, {
        value: "310112",
        label: "闵行区"
    }, {
        value: "310113",
        label: "宝山区"
    }, {
        value: "310114",
        label: "嘉定区"
    }, {
        value: "310115",
        label: "浦东新区"
    }, {
        value: "310116",
        label: "金山区"
    }, {
        value: "310117",
        label: "松江区"
    }, {
        value: "310118",
        label: "青浦区"
    }, {
        value: "310119",
        label: "南汇区"
    }, {
        value: "310120",
        label: "奉贤区"
    }, {
        value: "310152",
        label: "川沙区"
    }, {
        value: "310230",
        label: "崇明县"
    }, {
        value: "310231",
        label: "其它区"
    }]
}, {
    value: '320000',
    label: '江苏省',
    children: [{
        value: "320100",
        label: "南京市"
    }, {
        value: "320200",
        label: "无锡市"
    }, {
        value: "320300",
        label: "徐州市"
    }, {
        value: "320400",
        label: "常州市"
    }, {
        value: "320500",
        label: "苏州市"
    }, {
        value: "320600",
        label: "南通市"
    }, {
        value: "320700",
        label: "连云港市"
    }, {
        value: "320800",
        label: "淮安市"
    }, {
        value: "320900",
        label: "盐城市"
    }, {
        value: "321000",
        label: "扬州市"
    }, {
        value: "321100",
        label: "镇江市"
    }, {
        value: "321200",
        label: "泰州市"
    }, {
        value: "321300",
        label: "宿迁市"
    }]
}, {
    value: '330000',
    label: '浙江省',
    children: [{
        value: "330100",
        label: "杭州市"
    }, {
        value: "330200",
        label: "宁波市"
    }, {
        value: "330300",
        label: "温州市"
    }, {
        value: "330400",
        label: "嘉兴市"
    }, {
        value: "330500",
        label: "湖州市"
    }, {
        value: "330600",
        label: "绍兴市"
    }, {
        value: "330700",
        label: "金华市"
    }, {
        value: "330800",
        label: "衢州市"
    }, {
        value: "330900",
        label: "舟山市"
    }, {
        value: "331000",
        label: "台州市"
    }, {
        value: "331100",
        label: "丽水市"
    }]
}, {
    value: '340000',
    label: '安徽省',
    children: [{
        value: "340100",
        label: "合肥市"
    }, {
        value: "340200",
        label: "芜湖市"
    }, {
        value: "340300",
        label: "蚌埠市"
    }, {
        value: "340400",
        label: "淮南市"
    }, {
        value: "340500",
        label: "马鞍山市"
    }, {
        value: "340600",
        label: "淮北市"
    }, {
        value: "340700",
        label: "铜陵市"
    }, {
        value: "340800",
        label: "安庆市"
    }, {
        value: "341000",
        label: "黄山市"
    }, {
        value: "341100",
        label: "滁州市"
    }, {
        value: "341200",
        label: "阜阳市"
    }, {
        value: "341300",
        label: "宿州市"
    }, {
        value: "341500",
        label: "六安市"
    }, {
        value: "341600",
        label: "亳州市"
    }, {
        value: "341700",
        label: "池州市"
    }, {
        value: "341800",
        label: "宣城市"
    }]
}, {
    value: '350000',
    label: '福建省',
    children: [{
        value: "350100",
        label: "福州市"
    }, {
        value: "350200",
        label: "厦门市"
    }, {
        value: "350300",
        label: "莆田市"
    }, {
        value: "350400",
        label: "三明市"
    }, {
        value: "350500",
        label: "泉州市"
    }, {
        value: "350600",
        label: "漳州市"
    }, {
        value: "350700",
        label: "南平市"
    }, {
        value: "350800",
        label: "龙岩市"
    }, {
        value: "350900",
        label: "宁德市"
    }]
}, {
    value: '360000',
    label: '江西省',
    children: [{
        value: "360100",
        label: "南昌市"
    }, {
        value: "360200",
        label: "景德镇市"
    }, {
        value: "360300",
        label: "萍乡市"
    }, {
        value: "360400",
        label: "九江市"
    }, {
        value: "360500",
        label: "新余市"
    }, {
        value: "360600",
        label: "鹰潭市"
    }, {
        value: "360700",
        label: "赣州市"
    }, {
        value: "360800",
        label: "吉安市"
    }, {
        value: "360900",
        label: "宜春市"
    }, {
        value: "361000",
        label: "抚州市"
    }, {
        value: "361100",
        label: "上饶市"
    }]
}, {
    value: '370000',
    label: '山东省',
    children: [{
        value: "370100",
        label: "济南市"
    }, {
        value: "370200",
        label: "青岛市"
    }, {
        value: "370300",
        label: "淄博市"
    }, {
        value: "370400",
        label: "枣庄市"
    }, {
        value: "370500",
        label: "东营市"
    }, {
        value: "370600",
        label: "烟台市"
    }, {
        value: "370700",
        label: "潍坊市"
    }, {
        value: "370800",
        label: "济宁市"
    }, {
        value: "370900",
        label: "泰安市"
    }, {
        value: "371000",
        label: "威海市"
    }, {
        value: "371100",
        label: "日照市"
    }, {
        value: "371200",
        label: "莱芜市"
    }, {
        value: "371300",
        label: "临沂市"
    }, {
        value: "371400",
        label: "德州市"
    }, {
        value: "371500",
        label: "聊城市"
    }, {
        value: "371600",
        label: "滨州市"
    }, {
        value: "371700",
        label: "菏泽市"
    }]
}, {
    value: '410000',
    label: '河南省',
    children: [{
        value: "410100",
        label: "郑州市"
    }, {
        value: "410200",
        label: "开封市"
    }, {
        value: "410300",
        label: "洛阳市"
    }, {
        value: "410400",
        label: "平顶山市"
    }, {
        value: "410500",
        label: "安阳市"
    }, {
        value: "410600",
        label: "鹤壁市"
    }, {
        value: "410700",
        label: "新乡市"
    }, {
        value: "410800",
        label: "焦作市"
    }, {
        value: "410881",
        label: "济源市"
    }, {
        value: "410900",
        label: "濮阳市"
    }, {
        value: "411000",
        label: "许昌市"
    }, {
        value: "411100",
        label: "漯河市"
    }, {
        value: "411200",
        label: "三门峡市"
    }, {
        value: "411300",
        label: "南阳市"
    }, {
        value: "411400",
        label: "商丘市"
    }, {
        value: "411500",
        label: "信阳市"
    }, {
        value: "411600",
        label: "周口市"
    }, {
        value: "411700",
        label: "驻马店市"
    }]
}, {
    value: '420000',
    label: '湖北省',
    children: [{
        value: "420100",
        label: "武汉市"
    }, {
        value: "420200",
        label: "黄石市"
    }, {
        value: "420300",
        label: "十堰市"
    }, {
        value: "420500",
        label: "宜昌市"
    }, {
        value: "420600",
        label: "襄阳市"
    }, {
        value: "420700",
        label: "鄂州市"
    }, {
        value: "420800",
        label: "荆门市"
    }, {
        value: "420900",
        label: "孝感市"
    }, {
        value: "421000",
        label: "荆州市"
    }, {
        value: "421100",
        label: "黄冈市"
    }, {
        value: "421200",
        label: "咸宁市"
    }, {
        value: "421300",
        label: "随州市"
    }, {
        value: "422800",
        label: "恩施土家族苗族自治州"
    }, {
        value: "429004",
        label: "仙桃市"
    }, {
        value: "429005",
        label: "潜江市"
    }, {
        value: "429006",
        label: "天门市"
    }, {
        value: "429021",
        label: "神农架林区"
    }]
}, {
    value: '430000',
    label: '湖南省',
    children: [{
        value: "430100",
        label: "长沙市"
    }, {
        value: "430200",
        label: "株洲市"
    }, {
        value: "430300",
        label: "湘潭市"
    }, {
        value: "430400",
        label: "衡阳市"
    }, {
        value: "430500",
        label: "邵阳市"
    }, {
        value: "430600",
        label: "岳阳市"
    }, {
        value: "430700",
        label: "常德市"
    }, {
        value: "430800",
        label: "张家界市"
    }, {
        value: "430900",
        label: "益阳市"
    }, {
        value: "431000",
        label: "郴州市"
    }, {
        value: "431100",
        label: "永州市"
    }, {
        value: "431200",
        label: "怀化市"
    }, {
        value: "431300",
        label: "娄底市"
    }, {
        value: "433100",
        label: "湘西土家族苗族自治州"
    }]
}, {
    value: '440000',
    label: '广东省',
    children: [{
        value: "440100",
        label: "广州市"
    }, {
        value: "440200",
        label: "韶关市"
    }, {
        value: "440300",
        label: "深圳市"
    }, {
        value: "440400",
        label: "珠海市"
    }, {
        value: "440500",
        label: "汕头市"
    }, {
        value: "440600",
        label: "佛山市"
    }, {
        value: "440700",
        label: "江门市"
    }, {
        value: "440800",
        label: "湛江市"
    }, {
        value: "440900",
        label: "茂名市"
    }, {
        value: "441200",
        label: "肇庆市"
    }, {
        value: "441300",
        label: "惠州市"
    }, {
        value: "441400",
        label: "梅州市"
    }, {
        value: "441500",
        label: "汕尾市"
    }, {
        value: "441600",
        label: "河源市"
    }, {
        value: "441700",
        label: "阳江市"
    }, {
        value: "441800",
        label: "清远市"
    }, {
        value: "441900",
        label: "东莞市"
    }, {
        value: "442000",
        label: "中山市"
    }, {
        value: "445100",
        label: "潮州市"
    }, {
        value: "445200",
        label: "揭阳市"
    }, {
        value: "445300",
        label: "云浮市"
    }]
}, {
    value: '450000',
    label: '广西壮族',
    children: [{
        value: "450100",
        label: "南宁市"
    }, {
        value: "450200",
        label: "柳州市"
    }, {
        value: "450300",
        label: "桂林市"
    }, {
        value: "450400",
        label: "梧州市"
    }, {
        value: "450500",
        label: "北海市"
    }, {
        value: "450600",
        label: "防城港市"
    }, {
        value: "450700",
        label: "钦州市"
    }, {
        value: "450800",
        label: "贵港市"
    }, {
        value: "450900",
        label: "玉林市"
    }, {
        value: "451000",
        label: "百色市"
    }, {
        value: "451100",
        label: "贺州市"
    }, {
        value: "451200",
        label: "河池市"
    }, {
        value: "451300",
        label: "来宾市"
    }, {
        value: "451400",
        label: "崇左市"
    }]
}, {
    value: '460000',
    label: '海南省',
    children: [{
        value: "460100",
        label: "海口市"
    }, {
        value: "460200",
        label: "三亚市"
    }, {
        value: "469001",
        label: "五指山市"
    }, {
        value: "469002",
        label: "琼海市"
    }, {
        value: "469003",
        label: "儋州市"
    }, {
        value: "469005",
        label: "文昌市"
    }, {
        value: "469006",
        label: "万宁市"
    }, {
        value: "469007",
        label: "东方市"
    }, {
        value: "469025",
        label: "定安县"
    }, {
        value: "469026",
        label: "屯昌县"
    }, {
        value: "469027",
        label: "澄迈县"
    }, {
        value: "469028",
        label: "临高县"
    }, {
        value: "469030",
        label: "白沙黎族自治县"
    }, {
        value: "469031",
        label: "昌江黎族自治县"
    }, {
        value: "469033",
        label: "乐东黎族自治县"
    }, {
        value: "469034",
        label: "陵水黎族自治县"
    }, {
        value: "469035",
        label: "保亭黎族苗族自治县"
    }, {
        value: "469036",
        label: "琼中黎族苗族自治县"
    }, {
        value: "469037",
        label: "西沙群岛"
    }, {
        value: "469038",
        label: "南沙群岛"
    }, {
        value: "469039",
        label: "中沙群岛的岛礁及其海域"
    }]
}, {
    value: '500000',
    label: '重庆',
    children: [{
        value: "500101",
        label: "万州区"
    }, {
        value: "500102",
        label: "涪陵区"
    }, {
        value: "500103",
        label: "渝中区"
    }, {
        value: "500104",
        label: "大渡口区"
    }, {
        value: "500105",
        label: "江北区"
    }, {
        value: "500106",
        label: "沙坪坝区"
    }, {
        value: "500107",
        label: "九龙坡区"
    }, {
        value: "500108",
        label: "南岸区"
    }, {
        value: "500109",
        label: "北碚区"
    }, {
        value: "500110",
        label: "万盛区"
    }, {
        value: "500111",
        label: "双桥区"
    }, {
        value: "500112",
        label: "渝北区"
    }, {
        value: "500113",
        label: "巴南区"
    }, {
        value: "500114",
        label: "黔江区"
    }, {
        value: "500115",
        label: "长寿区"
    }, {
        value: "500222",
        label: "綦江县"
    }, {
        value: "500223",
        label: "潼南县"
    }, {
        value: "500224",
        label: "铜梁县"
    }, {
        value: "500225",
        label: "大足县"
    }, {
        value: "500226",
        label: "荣昌县"
    }, {
        value: "500227",
        label: "璧山县"
    }, {
        value: "500228",
        label: "梁平县"
    }, {
        value: "500229",
        label: "城口县"
    }, {
        value: "500230",
        label: "丰都县"
    }, {
        value: "500231",
        label: "垫江县"
    }, {
        value: "500232",
        label: "武隆县"
    }, {
        value: "500233",
        label: "忠县"
    }, {
        value: "500234",
        label: "开县"
    }, {
        value: "500235",
        label: "云阳县"
    }, {
        value: "500236",
        label: "奉节县"
    }, {
        value: "500237",
        label: "巫山县"
    }, {
        value: "500238",
        label: "巫溪县"
    }, {
        value: "500240",
        label: "石柱土家族自治县"
    }, {
        value: "500241",
        label: "秀山土家族苗族自治县"
    }, {
        value: "500242",
        label: "酉阳土家族苗族自治县"
    }, {
        value: "500243",
        label: "彭水苗族土家族自治县"
    }, {
        value: "500381",
        label: "江津区"
    }, {
        value: "500382",
        label: "合川区"
    }, {
        value: "500383",
        label: "永川区"
    }, {
        value: "500384",
        label: "南川区"
    }, {
        value: "500385",
        label: "其它区"
    }]
}, {
    value: '510000',
    label: '四川省',
    children: [{
        value: "510100",
        label: "成都市"
    }, {
        value: "510300",
        label: "自贡市"
    }, {
        value: "510400",
        label: "攀枝花市"
    }, {
        value: "510500",
        label: "泸州市"
    }, {
        value: "510600",
        label: "德阳市"
    }, {
        value: "510700",
        label: "绵阳市"
    }, {
        value: "510800",
        label: "广元市"
    }, {
        value: "510900",
        label: "遂宁市"
    }, {
        value: "511000",
        label: "内江市"
    }, {
        value: "511100",
        label: "乐山市"
    }, {
        value: "511300",
        label: "南充市"
    }, {
        value: "511400",
        label: "眉山市"
    }, {
        value: "511500",
        label: "宜宾市"
    }, {
        value: "511600",
        label: "广安市"
    }, {
        value: "511700",
        label: "达州市"
    }, {
        value: "511800",
        label: "雅安市"
    }, {
        value: "511900",
        label: "巴中市"
    }, {
        value: "512000",
        label: "资阳市"
    }, {
        value: "513200",
        label: "阿坝藏族羌族自治州"
    }, {
        value: "513300",
        label: "甘孜藏族自治州"
    }, {
        value: "513400",
        label: "凉山彝族自治州"
    }]
}, {
    value: '520000',
    label: '贵州省',
    children: [{
        value: "520100",
        label: "贵阳市"
    }, {
        value: "520200",
        label: "六盘水市"
    }, {
        value: "520300",
        label: "遵义市"
    }, {
        value: "520400",
        label: "安顺市"
    }, {
        value: "522200",
        label: "铜仁地区"
    }, {
        value: "522300",
        label: "黔西南布依族苗族自治州"
    }, {
        value: "522400",
        label: "毕节地区"
    }, {
        value: "522600",
        label: "黔东南苗族侗族自治州"
    }, {
        value: "522700",
        label: "黔南布依族苗族自治州"
    }]
}, {
    value: '530000',
    label: '云南省',
    children: [{
        value: "530100",
        label: "昆明市"
    }, {
        value: "530300",
        label: "曲靖市"
    }, {
        value: "530400",
        label: "玉溪市"
    }, {
        value: "530500",
        label: "保山市"
    }, {
        value: "530600",
        label: "昭通市"
    }, {
        value: "530700",
        label: "丽江市"
    }, {
        value: "530800",
        label: "普洱市"
    }, {
        value: "530900",
        label: "临沧市"
    }, {
        value: "532300",
        label: "楚雄彝族自治州"
    }, {
        value: "532500",
        label: "红河哈尼族彝族自治州"
    }, {
        value: "532600",
        label: "文山壮族苗族自治州"
    }, {
        value: "532800",
        label: "西双版纳傣族自治州"
    }, {
        value: "532900",
        label: "大理白族自治州"
    }, {
        value: "533100",
        label: "德宏傣族景颇族自治州"
    }, {
        value: "533300",
        label: "怒江傈僳族自治州"
    }, {
        value: "533400",
        label: "迪庆藏族自治州"
    }]
}, {
    value: '540000',
    label: '西藏',
    children: [{
        value: "540100",
        label: "拉萨市"
    }, {
        value: "542100",
        label: "昌都地区"
    }, {
        value: "542200",
        label: "山南地区"
    }, {
        value: "542300",
        label: "日喀则地区"
    }, {
        value: "542400",
        label: "那曲地区"
    }, {
        value: "542500",
        label: "阿里地区"
    }, {
        value: "542600",
        label: "林芝地区"
    }]
}, {
    value: '610000',
    label: '陕西省',
    children: [{
        value: "610100",
        label: "西安市"
    }, {
        value: "610200",
        label: "铜川市"
    }, {
        value: "610300",
        label: "宝鸡市"
    }, {
        value: "610400",
        label: "咸阳市"
    }, {
        value: "610500",
        label: "渭南市"
    }, {
        value: "610600",
        label: "延安市"
    }, {
        value: "610700",
        label: "汉中市"
    }, {
        value: "610800",
        label: "榆林市"
    }, {
        value: "610900",
        label: "安康市"
    }, {
        value: "611000",
        label: "商洛市"
    }]
}, {
    value: '620000',
    label: '甘肃省',
    children: [{
        value: "620100",
        label: "兰州市"
    }, {
        value: "620200",
        label: "嘉峪关市"
    }, {
        value: "620300",
        label: "金昌市"
    }, {
        value: "620400",
        label: "白银市"
    }, {
        value: "620500",
        label: "天水市"
    }, {
        value: "620600",
        label: "武威市"
    }, {
        value: "620700",
        label: "张掖市"
    }, {
        value: "620800",
        label: "平凉市"
    }, {
        value: "620900",
        label: "酒泉市"
    }, {
        value: "621000",
        label: "庆阳市"
    }, {
        value: "621100",
        label: "定西市"
    }, {
        value: "621200",
        label: "陇南市"
    }, {
        value: "622900",
        label: "临夏回族自治州"
    }, {
        value: "623000",
        label: "甘南藏族自治州"
    }]
}, {
    value: '630000',
    label: '青海省',
    children: [{
        value: "630100",
        label: "西宁市"
    }, {
        value: "632100",
        label: "海东地区"
    }, {
        value: "632200",
        label: "海北藏族自治州"
    }, {
        value: "632300",
        label: "黄南藏族自治州"
    }, {
        value: "632500",
        label: "海南藏族自治州"
    }, {
        value: "632600",
        label: "果洛藏族自治州"
    }, {
        value: "632700",
        label: "玉树藏族自治州"
    }, {
        value: "632800",
        label: "海西蒙古族藏族自治州"
    }]
}, {
    value: '640000',
    label: '宁夏',
    children: [{
        value: "640100",
        label: "银川市"
    }, {
        value: "640200",
        label: "石嘴山市"
    }, {
        value: "640300",
        label: "吴忠市"
    }, {
        value: "640400",
        label: "固原市"
    }, {
        value: "640500",
        label: "中卫市"
    }]
}, {
    value: '650000',
    label: '新疆',
    children: [{
        value: "650100",
        label: "乌鲁木齐市"
    }, {
        value: "650200",
        label: "克拉玛依市"
    }, {
        value: "652100",
        label: "吐鲁番地区"
    }, {
        value: "652200",
        label: "哈密地区"
    }, {
        value: "652300",
        label: "昌吉回族自治州"
    }, {
        value: "652700",
        label: "博尔塔拉蒙古自治州"
    }, {
        value: "652800",
        label: "巴音郭楞蒙古自治州"
    }, {
        value: "652900",
        label: "阿克苏地区"
    }, {
        value: "653000",
        label: "克孜勒苏柯尔克孜自治州"
    }, {
        value: "653100",
        label: "喀什地区"
    }, {
        value: "653200",
        label: "和田地区"
    }, {
        value: "654000",
        label: "伊犁哈萨克自治州"
    }, {
        value: "654200",
        label: "塔城地区"
    }, {
        value: "654300",
        label: "阿勒泰地区"
    }, {
        value: "659001",
        label: "石河子市"
    }, {
        value: "659002",
        label: "阿拉尔市"
    }, {
        value: "659003",
        label: "图木舒克市"
    }, {
        value: "659004",
        label: "五家渠市"
    }]
}, {
    value: '710000',
    label: '台湾省',
    children: [{
        value: "710100",
        label: "台北市"
    }, {
        value: "710200",
        label: "高雄市"
    }, {
        value: "710300",
        label: "台南市"
    }, {
        value: "710400",
        label: "台中市"
    }, {
        value: "710500",
        label: "金门县"
    }, {
        value: "710600",
        label: "南投县"
    }, {
        value: "710700",
        label: "基隆市"
    }, {
        value: "710800",
        label: "新竹市"
    }, {
        value: "710900",
        label: "嘉义市"
    }, {
        value: "711100",
        label: "新北市"
    }, {
        value: "711200",
        label: "宜兰县"
    }, {
        value: "711300",
        label: "新竹县"
    }, {
        value: "711400",
        label: "桃园县"
    }, {
        value: "711500",
        label: "苗栗县"
    }, {
        value: "711700",
        label: "彰化县"
    }, {
        value: "711900",
        label: "嘉义县"
    }, {
        value: "712100",
        label: "云林县"
    }, {
        value: "712400",
        label: "屏东县"
    }, {
        value: "712500",
        label: "台东县"
    }, {
        value: "712600",
        label: "花莲县"
    }, {
        value: "712700",
        label: "澎湖县"
    }]
}, {
    value: '810000',
    label: '香港',
    children: [{
        value: "810100",
        label: "香港岛"
    }, {
        value: "810200",
        label: "九龙"
    }, {
        value: "810300",
        label: "新界"
    }]
}, {
    value: '820000',
    label: '澳门',
    children: [{
        value: "820100",
        label: "澳门半岛"
    }, {
        value: "820200",
        label: "离岛"
    }]
}, {
    value: '990000',
    label: '海外',
    children: [{
        value: "990100",
        label: "海外"
    }]
}];
});
define('static/js/config.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
'use strict';

exports.config = {
	apiUrl: "",
	orderGroup: function orderGroup(id) {
		switch (id) {
			case 1:
				return '未完成';
				break;
			case 2:
				return '已完成';
				break;
			case 3:
				return '已撤销';
				break;
		}
	},
	orderStatus: function orderStatus(id) {
		switch (id) {
			case 1:
				return '待操作';
				break;
			case 2:
				return '待返款';
				break;
			case 3:
				return '待评价';
				break;
			case 4:
				return '待确认';
				break;
			case 5:
				return '已完成';
				break;
			case 6:
				return '已取消';
				break;
		}
	},
	cancelOrderReason: [{
		id: 1,
		cls: "",
		name: "系统取消"
	}, {
		id: 2,
		cls: "",

		name: "管理员取消"
	}, {
		id: 3,
		cls: "",

		name: "商家撤销任务"
	}, {
		id: 4,
		cls: "",

		name: "商品找不到"
	}, {
		id: 5,
		cls: "",

		name: "达不到商家要求"
	}, {
		id: 6,
		cls: "",

		name: "不想做了"
	}, {
		id: 7,
		cls: "",
		name: "问题任务"
	}],
	platformType: function platformType(id) {
		switch (id) {
			case 1:
				return '淘宝';
				break;
			case 2:
				return '京东';
				break;
			case 3:
				return '蘑菇街';
				break;
			case 4:
				return '美丽说';
				break;
			case 5:
				return '拼多多';
				break;
		}
	},
	isPc: function isPc(id) {
		switch (id) {
			case 1:
				return '手机淘宝';
				break;
			case 2:
				return '手机天猫';
				break;
			case 3:
				return '电脑淘宝';
				break;
		}
	},
	taskType: function taskType(id) {
		switch (id) {
			case 1:
				return '垫付任务';
				break;
			case 2:
				return '浏览任务';
				break;
			case 3:
				return '淘口令任务';
				break;
			case 4:
				return '活动任务';
				break;
			case 5:
				return '退款任务';
				break;
		}
	},
	positionType: function positionType(id) {
		switch (id) {
			case 1:
				return '销量';
				break;
			case 2:
				return '综合';
				break;
			case 3:
				return '综合直通车';
				break;
		}
	},
	doMode: function doMode(id) {
		id == 1 ? '找短词（原来叫找关键字）' : '截图浏览';
	},
	gender: function gender(id) {
		id == 1 ? '男' : '女';
	},
	showCategory: function showCategory(id) {
		switch (id) {
			case 1:
				return '服装鞋包';
				break;
			case 2:
				return '手机数码';
				break;
			case 3:
				return '家用电器';
				break;
			case 4:
				return '美妆饰品';
				break;
			case 5:
				return '母婴用品';
				break;
			case 6:
				return '家居建材';
				break;
			case 7:
				return '百货食品';
				break;
			case 8:
				return '运动户外';
				break;
			case 9:
				return '文化娱乐';
				break;
			case 10:
				return '生活服务';
				break;
			case 11:
				return '汽摩配件';
				break;
			case 12:
				return '游戏话费';
				break;
		}
	},
	showCategory_json: [{
		id: 1,
		name: "服装鞋包",
		cls: ""
	}, {
		id: 2,
		name: "手机数码",
		cls: ""
	}, {
		id: 3,
		name: "家用电器",
		cls: ""
	}, {
		id: 4,
		name: "美妆饰品",
		cls: ""
	}, {
		id: 5,
		name: "母婴用品",
		cls: ""
	}, {
		id: 6,
		name: "家居建材",
		cls: ""
	}, {
		id: 7,
		name: "百货食品",
		cls: ""
	}, {
		id: 8,
		name: "运动户外",
		cls: ""
	}, {
		id: 9,
		name: "文化娱乐",
		cls: ""
	}, {
		id: 10,
		name: "生活服务",
		cls: ""
	}, {
		id: 11,
		name: "汽摩配件",
		cls: ""
	}, {
		id: 12,
		name: "游戏话费",
		cls: ""
	}],
	complaintStatus: function complaintStatus(id) {
		switch (id) {
			case 1:
				return '处理中';
				break;
			case 2:
				return '已完结';
				break;
			case 3:
				return '已撤销';
				break;
		}
	},
	capitalType: function capitalType(id) {
		switch (id) {
			case 1:
				return '管理员操作';
				break;
			case 2:
				return '返还本金';
				break;
			case 3:
				return '本金提现';
				break;
		}
	},
	commissionType: function commissionType(id) {
		switch (id) {
			case 1:
				return '管理员操作';
				break;
			case 2:
				return '任务佣金';
				break;
			case 3:
				return '推广佣金';
				break;
			case 4:
				return '佣金提现';
				break;
			case 5:
				return '被邀请奖励金';
				break;
		}
	},
	withdrawalStatus: function withdrawalStatus(id) {
		switch (id) {
			case 1:
				return '申请中';
				break;
			case 2:
				return '付款完成';
				break;
			case 3:
				return '付款失败';
				break;
		}
	},
	taobaoGrade: function taobaoGrade(id) {
		switch (id) {
			case 1:
				return '3心';
				break;
			case 2:
				return '4心';
				break;
			case 3:
				return '5心';
				break;
			case 4:
				return '1钻';
				break;
			case 5:
				return '2钻';
				break;
			case 6:
				return '3钻以上';
				break;
		}
	},
	taobaoGrade_json: [{
		id: 1,
		name: "3心"
	}, {
		id: 2,
		name: "4心"
	}, {
		id: 3,
		name: "5心"
	}, {
		id: 4,
		name: "1钻"
	}, {
		id: 5,
		name: "2钻"
	}, {
		id: 6,
		name: "3钻以上"
	}],

	bankList: [{
		value: 1,
		label: "中国工商银行"
	}, {
		value: 2,
		label: "中国农业银行"
	}, {
		value: 3,
		label: "中国建设银行"
	}, {
		value: 4,
		label: "中国银行"
	}, {
		value: 5,
		label: "交通银行"
	}, {
		value: 6,
		label: "招商银行"
	}, {
		value: 7,
		label: "平安银行"
	}, {
		value: 8,
		label: "中信银行"
	}, {
		value: 9,
		label: "兴业银行"
	}, {
		value: 10,
		label: "中国民生银行"
	}, {
		value: 11,
		label: "中国光大银行"
	}, {
		value: 12,
		label: "邮政储蓄银行"
	}],
	identityStatus: function identityStatus(id) {
		switch (id) {
			case 0:
				return '默认值（未提交）';
				break;
			case 1:
				return '待审核';
				break;
			case 2:
				return '审核通过';
				break;
			case 3:
				return '审核失败';
				break;
		}
	},
	pingjiafs: function pingjiafs(id) {
		switch (id) {
			case 1:
				return '普通好评';
				break;
			case 2:
				return '文字好评';
				break;
			case 3:
				return '图片好评';
				break;
		}
	},
	taskTypeApp: function taskTypeApp(id) {
		switch (id) {
			case 0:
				return '全部';
				break;
			case 1:
				return '垫付';
				break;
			case 2:
				return '浏览';
				break;
		}
	},
	pcMobile: function pcMobile(id) {
		switch (id) {
			case 0:
				return '全部';
				break;
			case 1:
				return '手机';
				break;
			case 2:
				return '电脑';
				break;
		}
	}
};
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("common/manifest.js");
require("common/vendor.js");
global.webpackJsonp([2],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _vue = __webpack_require__(0);var _vue2 = _interopRequireDefault(_vue);\nvar _App = __webpack_require__(5);var _App2 = _interopRequireDefault(_App);\nvar _store = __webpack_require__(9);var _store2 = _interopRequireDefault(_store);\n\nvar _base = __webpack_require__(11);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}_vue2.default.prototype.$store = _store2.default;\n\n\n\n_vue2.default.config.productionTip = false;\n\n\n\n_App2.default.mpType = 'app';\n_vue2.default.use(_base.base);\nvar app = new _vue2.default(_extends({\n\tstore: _store2.default },\n_App2.default));\n\napp.$mount();\n\n//////////////////\n// WEBPACK FOOTER\n// F:/代码/防伪/main.js\n// module id = 3\n// module chunks = 2\n\n//# sourceURL=uni-app:///main.js?8760");

/***/ }),
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_D_HBuilderX_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_D_HBuilderX_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(8);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_D_HBuilderX_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_D_HBuilderX_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_D_HBuilderX_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_D_HBuilderX_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_App_vue__);\nvar disposed = false\nfunction injectStyle (ssrContext) {\n  if (disposed) return\n  __webpack_require__(6)\n}\nvar normalizeComponent = __webpack_require__(1)\n/* script */\n\n/* template */\nvar __vue_template__ = null\n/* styles */\nvar __vue_styles__ = injectStyle\n/* scopeId */\nvar __vue_scopeId__ = null\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\nvar Component = normalizeComponent(\n  __WEBPACK_IMPORTED_MODULE_0__D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_D_HBuilderX_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_D_HBuilderX_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_App_vue___default.a,\n  __vue_template__,\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"F:\\\\代码\\\\防伪\\\\App.vue\"\nif (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== \"default\" && key.substr(0, 2) !== \"__\"})) {console.error(\"named exports are not supported in *.vue files.\")}\n\n/* hot reload */\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-0140c480\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-0140c480\", Component.options)\n  }\n  module.hot.dispose(function (data) {\n    disposed = true\n  })\n})()}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component.exports);\n\n\n//////////////////\n// WEBPACK FOOTER\n// F:/代码/防伪/App.vue\n// module id = 5\n// module chunks = 2\n\n");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader!./lib/css-var-loader.js!./node_modules/css-loader?{\"minimize\":false,\"sourceMap\":false}!./lib/mpvue-loader/lib/style-compiler?{\"vue\":true,\"id\":\"data-v-0140c480\",\"scoped\":false,\"hasInlineConfig\":false}!./lib/css-upx-loader.js?{\"baseDpr\":1,\"rpxUnit\":1}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./node_modules/postcss-loader/lib?{\"config\":{\"path\":\"D://HBuilderX//HBuilderX//plugins//uniapp//.postcssrc.js\"},\"sourceMap\":true}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=styles&index=0!F:/代码/防伪/App.vue\n// module id = 6\n// module chunks = 2\n\n");

/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default =\n{\n\tonLaunch: function onLaunch() {\n\n\t},\n\tonShow: function onShow() {\n\n\t},\n\tonHide: function onHide() {\n\t\tconsole.log('App Hide');\n\t} };\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/babel-loader/lib?{\"babelrc\":false,\"retainLines\":true,\"presets\":[[\"D://HBuilderX//HBuilderX//plugins//uniapp//node_modules//babel-preset-env\",{\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"not ie <= 8\"]}}],\"D://HBuilderX//HBuilderX//plugins//uniapp//node_modules//babel-preset-stage-2\"],\"plugins\":[[\"D://HBuilderX//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-runtime\",{\"helpers\":false,\"polyfill\":false,\"regenerator\":true,\"moduleName\":\"D://HBuilderX//HBuilderX//plugins//uniapp//node_modules//babel-runtime\"}],\"D://HBuilderX//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-decorators-legacy\"]}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=script&index=0!F:/代码/防伪/App.vue\n// module id = 8\n// module chunks = 2\n\n//# sourceURL=uni-app:///App.vue?fe3a");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });var _vue = __webpack_require__(0);var _vue2 = _interopRequireDefault(_vue);\nvar _vuex = __webpack_require__(10);var _vuex2 = _interopRequireDefault(_vuex);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n\n_vue2.default.use(_vuex2.default);\n\nvar store = new _vuex2.default.Store({\n\tstate: {\n\t\tis_guiz: true //活动规则\n\t} });exports.default =\n\nstore;\n\n//////////////////\n// WEBPACK FOOTER\n// F:/代码/防伪/store/index.js\n// module id = 9\n// module chunks = 2\n\n//# sourceURL=uni-app:///store/index.js?98d9");

/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(uni) {var url_d = \"\";\nexports.base = {\n\tinstall: function install(Vue, options) {\n\t\tVue.prototype.version = \"9.2.1\";\n\n\n\t\tVue.prototype.parseParam = function (data) {\n\t\t\tvar _result = [];\n\t\t\tfor (var key in data) {\n\t\t\t\tvar value = data[key];\n\t\t\t\tif (value.constructor == Array) {\n\t\t\t\t\tvalue.forEach(function (_value) {\n\t\t\t\t\t\t_result.push(key + '=' + value);\n\t\t\t\t\t});\n\t\t\t\t} else {\n\t\t\t\t\t_result.push(key + '=' + value);\n\t\t\t\t}\n\t\t\t}\n\t\t\treturn _result.join('&');\n\t\t};\n\n\t\tVue.prototype.post = function (url, canshu, call, ty) {\n\t\t\tajax_e(url, canshu, call, ty);\n\t\t};\n\t\tVue.prototype.get_TE = function (call_back, kje) {\n\t\t\tvar sd_der = {};\n\t\t\tsd_der.event = kje || 1;\n\t\t\tajax_e(\"/api/common/getQiniuToken\", sd_der, function (data, all_data) {\n\n\t\t\t\tcall_back(data);\n\n\t\t\t});\n\t\t};\n\n\t\tVue.prototype.Base64 = Base64;\n\t\tVue.prototype.getBase64Imageer = function (img) {\n\t\t\tgetBase64Imageer(img);\n\t\t};\n\n\t\tVue.prototype.time_c = function (t) {\n\t\t\tvar time = new Date();\n\t\t\ttime.setTime(t * 1000);\n\t\t\tvar Year = time.getFullYear(),\n\t\t\tMonth = time.getMonth() + 1,\n\t\t\tData = time.getDate() < 10 ? 0 + '' + time.getDate() : time.getDate();\n\t\t\tMonth < 10 ? Month = 0 + '' + Month : Month = Month;\n\t\t\treturn Year + \"-\" + Month + \"-\" + Data;\n\t\t};\n\n\n\t\tVue.prototype.yanza = {\n\t\t\tmail: function mail(a) {\n\t\t\t\tvar b = !1;\n\t\t\t\treturn (/^(\\w-*\\.*)+@(\\w-?)+(\\.\\w{2,})+$/.test(a) && (b = !0), b);\n\t\t\t},\n\t\t\tphone: function phone(a) {\n\t\t\t\tvar b = !1;\n\t\t\t\treturn a.match(/^13[0-9]{9}|15[0-9]{9}|17[0-9]{9}|18[0-9]{9}$/) && 11 == a.length && (b = !0), b;\n\t\t\t},\n\t\t\tcar_t: function car_t(a) {\n\t\t\t\tvar b = !1;\n\t\t\t\treturn (/^(^[1-9]\\d{7}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}$)|(^[1-9]\\d{5}[1-9]\\d{3}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])((\\d{4})|\\d{3}[Xx])$)$/.\n\t\t\t\t\ttest(a) && (b = !0), b);\n\t\t\t} };\n\n\n\t\tVue.prototype.copyShareUrl = function (copy_content) {//复制\n\t\t\tuni.getSystemInfo({\n\t\t\t\tsuccess: function success(res) {\n\t\t\t\t\tif (res.platform == \"android\") {\n\n\t\t\t\t\t\t//安卓\n\t\t\t\t\t\tvar context = plus.android.importClass(\"android.content.Context\");\n\t\t\t\t\t\tvar main = plus.android.runtimeMainActivity();\n\t\t\t\t\t\tvar clip = main.getSystemService(context.CLIPBOARD_SERVICE);\n\t\t\t\t\t\tplus.android.invoke(clip, \"setText\", copy_content);\n\n\n\t\t\t\t\t} else {\n\t\t\t\t\t\t//ios\n\t\t\t\t\t\tvar UIPasteboard = plus.ios.importClass(\"UIPasteboard\");\n\t\t\t\t\t\tvar generalPasteboard = UIPasteboard.generalPasteboard();\n\t\t\t\t\t\t//设置/获取文本内容:\n\t\t\t\t\t\tgeneralPasteboard.plusCallMethod({\n\t\t\t\t\t\t\tsetValue: copy_content,\n\t\t\t\t\t\t\tforPasteboardType: \"public.utf8-plain-text\" });\n\n\t\t\t\t\t\tgeneralPasteboard.plusCallMethod({\n\t\t\t\t\t\t\tvalueForPasteboardType: \"public.utf8-plain-text\" });\n\n\t\t\t\t\t}\n\t\t\t\t} });\n\n\n\t\t};\n\n\t\tVue.prototype.pz = function (call, kje) {//拍照 \n\n\t\t\tvar sd_der = {};\n\t\t\tsd_der.event = kje || 1;\n\n\t\t\tajax_e(\"/api/common/getQiniuToken\", sd_der, function (data, all_data) {\n\t\t\t\tvar token = data.token,\n\t\t\t\tdomain = data.domain;\n\t\t\t\tuni.chooseImage({\n\t\t\t\t\tcount: 1,\n\t\t\t\t\tsuccess: function success(res) {\n\t\t\t\t\t\tvar key = res.tempFilePaths[0];\n\t\t\t\t\t\tkey = Base64.encode(key);\n\t\t\t\t\t\tuni.showLoading({\n\t\t\t\t\t\t\ttitle: '图片上传中...',\n\t\t\t\t\t\t\tmask: true });\n\n\t\t\t\t\t\tuni.uploadFile({\n\t\t\t\t\t\t\turl: 'http://up.qiniu.com/', //仅为示例，非真实的接口地址\n\t\t\t\t\t\t\tfilePath: res.tempFilePaths[0],\n\t\t\t\t\t\t\tname: 'file',\n\t\t\t\t\t\t\tformData: {\n\t\t\t\t\t\t\t\ttoken: token,\n\t\t\t\t\t\t\t\tkey: key },\n\n\t\t\t\t\t\t\tsuccess: function success(uploadFileRes) {\n\t\t\t\t\t\t\t\tuni.hideLoading();\n\t\t\t\t\t\t\t\tvar sdf_dr = JSON.parse(uploadFileRes.data);\n\n\t\t\t\t\t\t\t\tcall(domain + sdf_dr.data.url);\n\t\t\t\t\t\t\t} });\n\n\t\t\t\t\t} });\n\n\t\t\t});\n\n\n\n\t\t};\n\n\n\n\n\t\tVue.prototype.yjpz = function (dataer, kje, num) {//拍照 \n\n\t\t\tvar sd_der = {};\n\t\t\tsd_der.event = kje || 1;\n\n\t\t\tajax_e(\"/api/common/getQiniuToken\", sd_der, function (data, all_data) {\n\t\t\t\tvar token = data.token,\n\t\t\t\tdomain = data.domain;\n\t\t\t\tuni.chooseImage({\n\t\t\t\t\tcount: num,\n\t\t\t\t\tsourceType: [\"album\"],\n\t\t\t\t\tsuccess: function success(res) {\n\n\t\t\t\t\t\tres.tempFilePaths.map(function (a, idx) {\n\t\t\t\t\t\t\tvar key = a;\n\t\t\t\t\t\t\tkey = Base64.encode(key);\n\t\t\t\t\t\t\tuni.showLoading({\n\t\t\t\t\t\t\t\ttitle: '图片上传中...',\n\t\t\t\t\t\t\t\tmask: true });\n\n\t\t\t\t\t\t\tuni.uploadFile({\n\t\t\t\t\t\t\t\turl: 'http://up.qiniu.com/', //仅为示例，非真实的接口地址\n\t\t\t\t\t\t\t\tfilePath: a,\n\t\t\t\t\t\t\t\tname: 'file',\n\t\t\t\t\t\t\t\tformData: {\n\t\t\t\t\t\t\t\t\ttoken: token,\n\t\t\t\t\t\t\t\t\tkey: key },\n\n\t\t\t\t\t\t\t\tsuccess: function success(uploadFileRes) {\n\t\t\t\t\t\t\t\t\tuni.hideLoading();\n\t\t\t\t\t\t\t\t\tvar sdf_dr = JSON.parse(uploadFileRes.data);\n\t\t\t\t\t\t\t\t\tdataer[idx].url = domain + sdf_dr.data.url;\n\t\t\t\t\t\t\t\t\t// call(domain + sdf_dr.data.url)\n\t\t\t\t\t\t\t\t} });\n\n\n\t\t\t\t\t\t});\n\t\t\t\t\t} });\n\n\t\t\t});\n\n\n\n\t\t};\n\n\n\n\t\tVue.prototype.getClipbordText = function (call) {\n\n\t\t\tuni.getSystemInfo({\n\t\t\t\tsuccess: function success(res) {\n\t\t\t\t\tif (res.platform == \"android\") {\n\t\t\t\t\t\tvar Context = plus.android.importClass(\"android.content.Context\");\n\n\t\t\t\t\t\tvar main = plus.android.runtimeMainActivity();\n\t\t\t\t\t\tvar clip = main.getSystemService(Context.CLIPBOARD_SERVICE);\n\t\t\t\t\t\tcall(plus.android.invoke(clip, \"getText\"));\n\t\t\t\t\t} else {\n\t\t\t\t\t\tvar UIPasteboard = plus.ios.importClass(\"UIPasteboard\");\n\t\t\t\t\t\tvar generalPasteboard = UIPasteboard.generalPasteboard();\n\t\t\t\t\t\tvar _val = generalPasteboard.plusCallMethod({\n\t\t\t\t\t\t\tvalueForPasteboardType: \"public.utf8-plain-text\" });\n\n\t\t\t\t\t\tconsole.log(\"ios复制返回的数据是：\", _val);\n\t\t\t\t\t\tcall(_val || '');\n\t\t\t\t\t}\n\t\t\t\t} });\n\n\n\n\n\t\t};\n\n\n\n\t} };\n\n\n\nfunction copyShareUrl(copy_content) {//复制\n\tuni.getSystemInfo({\n\t\tsuccess: function success(res) {\n\t\t\tif (res.platform == \"android\") {\n\n\t\t\t\t//安卓\n\t\t\t\tvar context = plus.android.importClass(\"android.content.Context\");\n\t\t\t\tvar main = plus.android.runtimeMainActivity();\n\t\t\t\tvar clip = main.getSystemService(context.CLIPBOARD_SERVICE);\n\t\t\t\tplus.android.invoke(clip, \"setText\", copy_content);\n\n\n\t\t\t} else {\n\t\t\t\t//ios\n\t\t\t\tvar UIPasteboard = plus.ios.importClass(\"UIPasteboard\");\n\t\t\t\tvar generalPasteboard = UIPasteboard.generalPasteboard();\n\t\t\t\t//设置/获取文本内容:\n\t\t\t\tgeneralPasteboard.plusCallMethod({\n\t\t\t\t\tsetValue: copy_content,\n\t\t\t\t\tforPasteboardType: \"public.utf8-plain-text\" });\n\n\t\t\t\tgeneralPasteboard.plusCallMethod({\n\t\t\t\t\tvalueForPasteboardType: \"public.utf8-plain-text\" });\n\n\t\t\t}\n\t\t} });\n\n\n}\n\n\n\nfunction ajax_e(url, canshu, call, ty) {\n\tvar urlsd = url_d + url;\n\tuni.showLoading({\n\t\ttitle: '处理中',\n\t\tmask: true });\n\n\n\tif (!ty) {//为true可以不传token\n\t\tcanshu.key = uni.getStorageSync('token');\n\t}\n\tuni.request({\n\t\turl: urlsd,\n\t\tmethod: \"POST\",\n\t\theader: {\n\t\t\t\"content-type\": \"application/x-www-form-urlencoded\" },\n\n\t\tdata: canshu,\n\t\tsuccess: function success(res) {\n\t\t\tuni.hideLoading();\n\n\t\t\tif (res.data.status == 1) {\n\t\t\t\tcall(res.data.data);\n\t\t\t\treturn;\n\t\t\t}\n\t\t\tif (res.data.status == 0 || res.data.status == 3024) {\n\t\t\t\tcall(res.data);\n\t\t\t\treturn;\n\t\t\t}\n\t\t\tuni.showToast({\n\t\t\t\ticon: \"none\",\n\t\t\t\ttitle: res.data.msg });\n\n\t\t\tif (res.data.status == '1020') {\n\t\t\t\tsetTimeout(function () {\n\t\t\t\t\tuni.navigateBack({\n\t\t\t\t\t\tdelta: 1 });\n\n\t\t\t\t}, 1000);\n\t\t\t\treturn;\n\t\t\t}\n\t\t\tif (res.data.status == 40003) {//重新登录\n\n\t\t\t\tuni.reLaunch({\n\t\t\t\t\turl: '/pages/user_center/Login' });\n\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t},\n\t\tfail: function fail() {\n\t\t\tuni.showToast({\n\t\t\t\ticon: \"none\",\n\t\t\t\ttitle: \"接口请求异常\" });\n\n\t\t} });\n\n}\n\n\n\n\n\n\n\nvar Base64 = {\n\n\t// private property\n\t_keyStr: \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\",\n\n\t// public method for encoding\n\tencode: function encode(input) {\n\t\tvar output = \"\";\n\t\tvar chr1, chr2, chr3, enc1, enc2, enc3, enc4;\n\t\tvar i = 0;\n\n\t\tinput = Base64._utf8_encode(input);\n\n\t\twhile (i < input.length) {\n\n\t\t\tchr1 = input.charCodeAt(i++);\n\t\t\tchr2 = input.charCodeAt(i++);\n\t\t\tchr3 = input.charCodeAt(i++);\n\n\t\t\tenc1 = chr1 >> 2;\n\t\t\tenc2 = (chr1 & 3) << 4 | chr2 >> 4;\n\t\t\tenc3 = (chr2 & 15) << 2 | chr3 >> 6;\n\t\t\tenc4 = chr3 & 63;\n\n\t\t\tif (isNaN(chr2)) {\n\t\t\t\tenc3 = enc4 = 64;\n\t\t\t} else if (isNaN(chr3)) {\n\t\t\t\tenc4 = 64;\n\t\t\t}\n\n\t\t\toutput = output + this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) + this._keyStr.charAt(enc3) + this._keyStr.\n\t\t\tcharAt(enc4);\n\n\t\t}\n\n\t\treturn output;\n\t},\n\n\t// public method for decoding\n\tdecode: function decode(input) {\n\t\tvar output = \"\";\n\t\tvar chr1, chr2, chr3;\n\t\tvar enc1, enc2, enc3, enc4;\n\t\tvar i = 0;\n\n\t\tinput = input.replace(/[^A-Za-z0-9\\+\\/\\=]/g, \"\");\n\n\t\twhile (i < input.length) {\n\n\t\t\tenc1 = this._keyStr.indexOf(input.charAt(i++));\n\t\t\tenc2 = this._keyStr.indexOf(input.charAt(i++));\n\t\t\tenc3 = this._keyStr.indexOf(input.charAt(i++));\n\t\t\tenc4 = this._keyStr.indexOf(input.charAt(i++));\n\n\t\t\tchr1 = enc1 << 2 | enc2 >> 4;\n\t\t\tchr2 = (enc2 & 15) << 4 | enc3 >> 2;\n\t\t\tchr3 = (enc3 & 3) << 6 | enc4;\n\n\t\t\toutput = output + String.fromCharCode(chr1);\n\n\t\t\tif (enc3 != 64) {\n\t\t\t\toutput = output + String.fromCharCode(chr2);\n\t\t\t}\n\t\t\tif (enc4 != 64) {\n\t\t\t\toutput = output + String.fromCharCode(chr3);\n\t\t\t}\n\n\t\t}\n\n\t\toutput = Base64._utf8_decode(output);\n\n\t\treturn output;\n\n\t},\n\n\t// private method for UTF-8 encoding\n\t_utf8_encode: function _utf8_encode(string) {\n\t\tstring = string.replace(/\\r\\n/g, \"\\n\");\n\t\tvar utftext = \"\";\n\n\t\tfor (var n = 0; n < string.length; n++) {\n\n\t\t\tvar c = string.charCodeAt(n);\n\n\t\t\tif (c < 128) {\n\t\t\t\tutftext += String.fromCharCode(c);\n\t\t\t} else if (c > 127 && c < 2048) {\n\t\t\t\tutftext += String.fromCharCode(c >> 6 | 192);\n\t\t\t\tutftext += String.fromCharCode(c & 63 | 128);\n\t\t\t} else {\n\t\t\t\tutftext += String.fromCharCode(c >> 12 | 224);\n\t\t\t\tutftext += String.fromCharCode(c >> 6 & 63 | 128);\n\t\t\t\tutftext += String.fromCharCode(c & 63 | 128);\n\t\t\t}\n\n\t\t}\n\n\t\treturn utftext;\n\t},\n\n\t// private method for UTF-8 decoding\n\t_utf8_decode: function _utf8_decode(utftext) {\n\t\tvar string = \"\";\n\t\tvar i = 0;\n\t\tvar c = c1 = c2 = 0;\n\n\t\twhile (i < utftext.length) {\n\n\t\t\tc = utftext.charCodeAt(i);\n\n\t\t\tif (c < 128) {\n\t\t\t\tstring += String.fromCharCode(c);\n\t\t\t\ti++;\n\t\t\t} else if (c > 191 && c < 224) {\n\t\t\t\tc2 = utftext.charCodeAt(i + 1);\n\t\t\t\tstring += String.fromCharCode((c & 31) << 6 | c2 & 63);\n\t\t\t\ti += 2;\n\t\t\t} else {\n\t\t\t\tc2 = utftext.charCodeAt(i + 1);\n\t\t\t\tc3 = utftext.charCodeAt(i + 2);\n\t\t\t\tstring += String.fromCharCode((c & 15) << 12 | (c2 & 63) << 6 | c3 & 63);\n\t\t\t\ti += 3;\n\t\t\t}\n\n\t\t}\n\n\t\treturn string;\n\t}\n\n\n\n\n\n\n\n\t//将图片压缩转成base64 \n};function getBase64Imageer(img) {\n\tvar canvas = document.createElement(\"canvas\");\n\tvar width = img.width;\n\tvar height = img.height;\n\t// calculate the width and height, constraining the proportions \n\tif (width > height) {\n\t\tif (width > 640) {\n\t\t\theight = Math.round(height *= 640 / width);\n\t\t\twidth = 640;\n\t\t}\n\t} else {\n\t\tif (height > 640) {\n\t\t\twidth = Math.round(width *= 640 / height);\n\t\t\theight = 640;\n\t\t}\n\t}\n\tcanvas.width = width; /*设置新的图片的宽度*/\n\tcanvas.height = height; /*设置新的图片的长度*/\n\tvar ctx = canvas.getContext(\"2d\");\n\tctx.drawImage(img, 0, 0, width, height); /*绘图*/\n\tvar dataURL = canvas.toDataURL(\"image/png\", 0.8);\n\treturn dataURL.replace(\"data:image/png;base64,\", \"\");\n}\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)[\"default\"]))\n\n//////////////////\n// WEBPACK FOOTER\n// F:/代码/防伪/static/js/base.js\n// module id = 11\n// module chunks = 2\n\n//# sourceURL=uni-app:///static/js/base.js?b613");

/***/ })
],[3]);
});
require('app.js');


__wxRoute = 'pages/star/qidon_index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/star/qidon_index.js';

define('pages/star/qidon_index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([3],{

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar _vue = __webpack_require__(0);var _vue2 = _interopRequireDefault(_vue);\nvar _qidon_index = __webpack_require__(19);var _qidon_index2 = _interopRequireDefault(_qidon_index);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\nvar app = new _vue2.default(_qidon_index2.default);\napp.$mount();\n\n//////////////////\n// WEBPACK FOOTER\n// F:/代码/防伪/pages/star/qidon_index.js\n// module id = 18\n// module chunks = 3\n\n//# sourceURL=uni-app:///pages/star/qidon_index.js?8722");

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_D_HBuilderX_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_D_HBuilderX_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_qidon_index_vue__ = __webpack_require__(21);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_D_HBuilderX_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_D_HBuilderX_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_qidon_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_D_HBuilderX_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_D_HBuilderX_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_qidon_index_vue__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__D_HBuilderX_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_87072406_hasScoped_true_preserveWhitespace_false_D_HBuilderX_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_D_HBuilderX_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_qidon_index_vue__ = __webpack_require__(22);\nvar disposed = false\nfunction injectStyle (ssrContext) {\n  if (disposed) return\n  __webpack_require__(20)\n}\nvar normalizeComponent = __webpack_require__(1)\n/* script */\n\n/* template */\n\n/* styles */\nvar __vue_styles__ = injectStyle\n/* scopeId */\nvar __vue_scopeId__ = \"data-v-87072406\"\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\nvar Component = normalizeComponent(\n  __WEBPACK_IMPORTED_MODULE_0__D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_D_HBuilderX_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_D_HBuilderX_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_qidon_index_vue___default.a,\n  __WEBPACK_IMPORTED_MODULE_1__D_HBuilderX_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_87072406_hasScoped_true_preserveWhitespace_false_D_HBuilderX_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_D_HBuilderX_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_qidon_index_vue__[\"a\" /* default */],\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"F:\\\\代码\\\\防伪\\\\pages\\\\star\\\\qidon_index.vue\"\nif (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== \"default\" && key.substr(0, 2) !== \"__\"})) {console.error(\"named exports are not supported in *.vue files.\")}\nif (Component.options.functional) {console.error(\"[vue-loader] qidon_index.vue: functional components are not supported with templates, they should use render functions.\")}\n\n/* hot reload */\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-87072406\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-87072406\", Component.options)\n  }\n  module.hot.dispose(function (data) {\n    disposed = true\n  })\n})()}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component.exports);\n\n\n//////////////////\n// WEBPACK FOOTER\n// F:/代码/防伪/pages/star/qidon_index.vue\n// module id = 19\n// module chunks = 3\n\n");

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader!./lib/css-var-loader.js!./node_modules/css-loader?{\"minimize\":false,\"sourceMap\":false}!./lib/mpvue-loader/lib/style-compiler?{\"vue\":true,\"id\":\"data-v-87072406\",\"scoped\":true,\"hasInlineConfig\":false}!./lib/css-upx-loader.js?{\"baseDpr\":1,\"rpxUnit\":1}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./node_modules/postcss-loader/lib?{\"config\":{\"path\":\"D://HBuilderX//HBuilderX//plugins//uniapp//.postcssrc.js\"},\"sourceMap\":true}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=styles&index=0!F:/代码/防伪/pages/star/qidon_index.vue\n// module id = 20\n// module chunks = 3\n\n");

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default =\n\n\n\n\n\n{\n\tdata: function data() {\n\t\treturn {};\n\t},\n\tonLoad: function onLoad() {\n\t\tif (uni.getStorageSync('diyici') == 2) {//第一次启动了轮播图\n\n\t\t\tif (uni.getStorageSync('user_info')) {//已登录\n\t\t\t\tuni.redirectTo({\n\t\t\t\t\turl: '/pages/user/denglu' });\n\n\t\t\t} else {\n\t\t\t\tuni.redirectTo({\n\t\t\t\t\turl: '/pages/index/index' });\n\n\t\t\t}\n\n\n\n\t\t} else {\n\t\t\tuni.redirectTo({\n\t\t\t\turl: '/pages/star/index' });\n\n\t\t}\n\n\t},\n\tcomponents: {},\n\tmethods: {},\n\tmounted: function mounted() {} };\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)[\"default\"]))\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/babel-loader/lib?{\"babelrc\":false,\"retainLines\":true,\"presets\":[[\"D://HBuilderX//HBuilderX//plugins//uniapp//node_modules//babel-preset-env\",{\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"not ie <= 8\"]}}],\"D://HBuilderX//HBuilderX//plugins//uniapp//node_modules//babel-preset-stage-2\"],\"plugins\":[[\"D://HBuilderX//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-runtime\",{\"helpers\":false,\"polyfill\":false,\"regenerator\":true,\"moduleName\":\"D://HBuilderX//HBuilderX//plugins//uniapp//node_modules//babel-runtime\"}],\"D://HBuilderX//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-decorators-legacy\"]}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=script&index=0!F:/代码/防伪/pages/star/qidon_index.vue\n// module id = 21\n// module chunks = 3\n\n//# sourceURL=uni-app:///pages/star/qidon_index.vue?5fa0");

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('view')\n}\nvar staticRenderFns = []\nrender._withStripped = true\nvar esExports = { render: render, staticRenderFns: staticRenderFns }\n/* harmony default export */ __webpack_exports__[\"a\"] = (esExports);\nif (false) {\n  module.hot.accept()\n  if (module.hot.data) {\n     require(\"vue-hot-reload-api\").rerender(\"data-v-87072406\", esExports)\n  }\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./lib/mpvue-loader/lib/template-compiler?{\"id\":\"data-v-87072406\",\"hasScoped\":true,\"preserveWhitespace\":false}!./lib/preprocessor-loader.js?{\"type\":\"html\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=template&index=0!F:/代码/防伪/pages/star/qidon_index.vue\n// module id = 22\n// module chunks = 3\n\n");

/***/ })

},[18]);
});
require('pages/star/qidon_index.js');
__wxRoute = 'pages/user/denglu';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/denglu.js';

define('pages/user/denglu.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar _vue = __webpack_require__(0);var _vue2 = _interopRequireDefault(_vue);\nvar _denglu = __webpack_require__(13);var _denglu2 = _interopRequireDefault(_denglu);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\nvar app = new _vue2.default(_denglu2.default);\napp.$mount();\n\n//////////////////\n// WEBPACK FOOTER\n// F:/代码/防伪/pages/user/denglu.js\n// module id = 12\n// module chunks = 1\n\n//# sourceURL=uni-app:///pages/user/denglu.js?5db5");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_D_HBuilderX_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_D_HBuilderX_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_denglu_vue__ = __webpack_require__(16);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_D_HBuilderX_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_D_HBuilderX_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_denglu_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_D_HBuilderX_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_D_HBuilderX_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_denglu_vue__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__D_HBuilderX_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_7217c80a_hasScoped_true_preserveWhitespace_false_D_HBuilderX_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_D_HBuilderX_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_denglu_vue__ = __webpack_require__(17);\nvar disposed = false\nfunction injectStyle (ssrContext) {\n  if (disposed) return\n  __webpack_require__(14)\n  __webpack_require__(15)\n}\nvar normalizeComponent = __webpack_require__(1)\n/* script */\n\n/* template */\n\n/* styles */\nvar __vue_styles__ = injectStyle\n/* scopeId */\nvar __vue_scopeId__ = \"data-v-7217c80a\"\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\nvar Component = normalizeComponent(\n  __WEBPACK_IMPORTED_MODULE_0__D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_D_HBuilderX_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_D_HBuilderX_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_denglu_vue___default.a,\n  __WEBPACK_IMPORTED_MODULE_1__D_HBuilderX_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_7217c80a_hasScoped_true_preserveWhitespace_false_D_HBuilderX_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_D_HBuilderX_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_denglu_vue__[\"a\" /* default */],\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"F:\\\\代码\\\\防伪\\\\pages\\\\user\\\\denglu.vue\"\nif (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== \"default\" && key.substr(0, 2) !== \"__\"})) {console.error(\"named exports are not supported in *.vue files.\")}\nif (Component.options.functional) {console.error(\"[vue-loader] denglu.vue: functional components are not supported with templates, they should use render functions.\")}\n\n/* hot reload */\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-7217c80a\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-7217c80a\", Component.options)\n  }\n  module.hot.dispose(function (data) {\n    disposed = true\n  })\n})()}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component.exports);\n\n\n//////////////////\n// WEBPACK FOOTER\n// F:/代码/防伪/pages/user/denglu.vue\n// module id = 13\n// module chunks = 1\n\n");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader!./lib/css-var-loader.js!./node_modules/css-loader?{\"minimize\":false,\"sourceMap\":false}!./lib/mpvue-loader/lib/style-compiler?{\"vue\":true,\"id\":\"data-v-7217c80a\",\"scoped\":false,\"hasInlineConfig\":false}!./lib/css-upx-loader.js?{\"baseDpr\":1,\"rpxUnit\":1}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./node_modules/postcss-loader/lib?{\"config\":{\"path\":\"D://HBuilderX//HBuilderX//plugins//uniapp//.postcssrc.js\"},\"sourceMap\":true}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=styles&index=0!F:/代码/防伪/pages/user/denglu.vue\n// module id = 14\n// module chunks = 1\n\n");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader!./lib/css-var-loader.js!./node_modules/css-loader?{\"minimize\":false,\"sourceMap\":false}!./lib/mpvue-loader/lib/style-compiler?{\"vue\":true,\"id\":\"data-v-7217c80a\",\"scoped\":true,\"hasInlineConfig\":false}!./lib/css-upx-loader.js?{\"baseDpr\":1,\"rpxUnit\":1}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./node_modules/postcss-loader/lib?{\"config\":{\"path\":\"D://HBuilderX//HBuilderX//plugins//uniapp//.postcssrc.js\"},\"sourceMap\":true}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=styles&index=1!F:/代码/防伪/pages/user/denglu.vue\n// module id = 15\n// module chunks = 1\n\n");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default =\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{\n\tdata: function data() {\n\t\treturn {};\n\t},\n\tcomponents: {},\n\tmethods: {\n\t\tweixin: function weixin() {\n\t\t\tuni.login({\n\t\t\t\tprovider: 'weixin',\n\t\t\t\tsuccess: function success(loginRes) {\n\t\t\t\t\tconsole.log(JSON.stringify(loginRes));\n\t\t\t\t\tuni.getUserInfo({\n\t\t\t\t\t\tprovider: 'weixin',\n\t\t\t\t\t\tsuccess: function success(infoRes) {\n\t\t\t\t\t\t\tuni.setStorageSync('user_info', infoRes);\n\t\t\t\t\t\t\tuni.navigateTo({\n\t\t\t\t\t\t\t\turl: '/pages/index/index' });\n\n\n\t\t\t\t\t\t} });\n\n\t\t\t\t} });\n\n\t\t} },\n\n\tmounted: function mounted() {} };\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)[\"default\"]))\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/babel-loader/lib?{\"babelrc\":false,\"retainLines\":true,\"presets\":[[\"D://HBuilderX//HBuilderX//plugins//uniapp//node_modules//babel-preset-env\",{\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"not ie <= 8\"]}}],\"D://HBuilderX//HBuilderX//plugins//uniapp//node_modules//babel-preset-stage-2\"],\"plugins\":[[\"D://HBuilderX//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-runtime\",{\"helpers\":false,\"polyfill\":false,\"regenerator\":true,\"moduleName\":\"D://HBuilderX//HBuilderX//plugins//uniapp//node_modules//babel-runtime\"}],\"D://HBuilderX//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-decorators-legacy\"]}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=script&index=0!F:/代码/防伪/pages/user/denglu.vue\n// module id = 16\n// module chunks = 1\n\n//# sourceURL=uni-app:///pages/user/denglu.vue?2118");

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('view', {\n    staticClass: \"sd_jh_deer\"\n  }, [_c('view', {\n    staticClass: \"fz30 cf cen df_ddrtxdr\"\n  }, [_c('image', {\n    staticClass: \"logo_ert\",\n    attrs: {\n      \"src\": \"../../static/img/logo.png\"\n    }\n  }), _c('br'), _vm._v(\"\\n\\t\\t\\t苍鸟防伪\\n\\t\\t\")], 1), _c('view', {\n    staticClass: \"form_deng\"\n  }, [_c('view', {\n    staticClass: \"ls sdf_jh_dert yj4 bgff fz30\",\n    attrs: {\n      \"eventid\": 'F19-0'\n    },\n    on: {\n      \"click\": _vm.weixin\n    }\n  }, [_c('image', {\n    staticClass: \"cz\",\n    attrs: {\n      \"src\": \"../../static/img/weixin.png\"\n    }\n  }), _vm._v(\"\\n\\t\\t\\t\\t微信一键登录\\n\\n\\t\\t\\t\")])]), _c('image', {\n    staticClass: \"qiu_deet\",\n    attrs: {\n      \"src\": \"../../static/img/qiu.png\"\n    }\n  })])\n}\nvar staticRenderFns = []\nrender._withStripped = true\nvar esExports = { render: render, staticRenderFns: staticRenderFns }\n/* harmony default export */ __webpack_exports__[\"a\"] = (esExports);\nif (false) {\n  module.hot.accept()\n  if (module.hot.data) {\n     require(\"vue-hot-reload-api\").rerender(\"data-v-7217c80a\", esExports)\n  }\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./lib/mpvue-loader/lib/template-compiler?{\"id\":\"data-v-7217c80a\",\"hasScoped\":true,\"preserveWhitespace\":false}!./lib/preprocessor-loader.js?{\"type\":\"html\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=template&index=0!F:/代码/防伪/pages/user/denglu.vue\n// module id = 17\n// module chunks = 1\n\n");

/***/ })
],[12]);
});
require('pages/user/denglu.js');
__wxRoute = 'pages/star/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/star/index.js';

define('pages/star/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([4],{

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar _vue = __webpack_require__(0);var _vue2 = _interopRequireDefault(_vue);\nvar _index = __webpack_require__(24);var _index2 = _interopRequireDefault(_index);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\nvar app = new _vue2.default(_index2.default);\napp.$mount();\n\n//////////////////\n// WEBPACK FOOTER\n// F:/代码/防伪/pages/star/index.js\n// module id = 23\n// module chunks = 4\n\n//# sourceURL=uni-app:///pages/star/index.js?0f68");

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_D_HBuilderX_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_D_HBuilderX_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(26);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_D_HBuilderX_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_D_HBuilderX_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_D_HBuilderX_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_D_HBuilderX_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_index_vue__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__D_HBuilderX_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_c95ad35e_hasScoped_true_preserveWhitespace_false_D_HBuilderX_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_D_HBuilderX_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(27);\nvar disposed = false\nfunction injectStyle (ssrContext) {\n  if (disposed) return\n  __webpack_require__(25)\n}\nvar normalizeComponent = __webpack_require__(1)\n/* script */\n\n/* template */\n\n/* styles */\nvar __vue_styles__ = injectStyle\n/* scopeId */\nvar __vue_scopeId__ = \"data-v-c95ad35e\"\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\nvar Component = normalizeComponent(\n  __WEBPACK_IMPORTED_MODULE_0__D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_D_HBuilderX_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_D_HBuilderX_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_index_vue___default.a,\n  __WEBPACK_IMPORTED_MODULE_1__D_HBuilderX_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_c95ad35e_hasScoped_true_preserveWhitespace_false_D_HBuilderX_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_D_HBuilderX_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_index_vue__[\"a\" /* default */],\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"F:\\\\代码\\\\防伪\\\\pages\\\\star\\\\index.vue\"\nif (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== \"default\" && key.substr(0, 2) !== \"__\"})) {console.error(\"named exports are not supported in *.vue files.\")}\nif (Component.options.functional) {console.error(\"[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.\")}\n\n/* hot reload */\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-c95ad35e\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-c95ad35e\", Component.options)\n  }\n  module.hot.dispose(function (data) {\n    disposed = true\n  })\n})()}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component.exports);\n\n\n//////////////////\n// WEBPACK FOOTER\n// F:/代码/防伪/pages/star/index.vue\n// module id = 24\n// module chunks = 4\n\n");

/***/ }),

/***/ 25:
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader!./lib/css-var-loader.js!./node_modules/css-loader?{\"minimize\":false,\"sourceMap\":false}!./lib/mpvue-loader/lib/style-compiler?{\"vue\":true,\"id\":\"data-v-c95ad35e\",\"scoped\":true,\"hasInlineConfig\":false}!./lib/css-upx-loader.js?{\"baseDpr\":1,\"rpxUnit\":1}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./node_modules/postcss-loader/lib?{\"config\":{\"path\":\"D://HBuilderX//HBuilderX//plugins//uniapp//.postcssrc.js\"},\"sourceMap\":true}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=styles&index=0!F:/代码/防伪/pages/star/index.vue\n// module id = 25\n// module chunks = 4\n\n");

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default =\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{\n\tdata: {\n\t\tduration: 500 },\n\n\tmethods: {\n\t\tsd_jhgh_der: function sd_jhgh_der() {\n\t\t\tuni.setStorageSync('diyici', '2');\n\t\t\tuni.redirectTo({\n\t\t\t\turl: '/pages/user/denglu' });\n\n\t\t},\n\t\tchangeIndicatorDots: function changeIndicatorDots(e) {\n\t\t\tthis.indicatorDots = !this.indicatorDots;\n\t\t},\n\t\tchangeAutoplay: function changeAutoplay(e) {\n\t\t\tthis.autoplay = !this.autoplay;\n\t\t},\n\t\tintervalChange: function intervalChange(e) {\n\t\t\tthis.interval = e.detail.value;\n\t\t},\n\t\tdurationChange: function durationChange(e) {\n\t\t\tthis.duration = e.detail.value;\n\t\t} } };\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)[\"default\"]))\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/babel-loader/lib?{\"babelrc\":false,\"retainLines\":true,\"presets\":[[\"D://HBuilderX//HBuilderX//plugins//uniapp//node_modules//babel-preset-env\",{\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"not ie <= 8\"]}}],\"D://HBuilderX//HBuilderX//plugins//uniapp//node_modules//babel-preset-stage-2\"],\"plugins\":[[\"D://HBuilderX//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-runtime\",{\"helpers\":false,\"polyfill\":false,\"regenerator\":true,\"moduleName\":\"D://HBuilderX//HBuilderX//plugins//uniapp//node_modules//babel-runtime\"}],\"D://HBuilderX//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-decorators-legacy\"]}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=script&index=0!F:/代码/防伪/pages/star/index.vue\n// module id = 26\n// module chunks = 4\n\n//# sourceURL=uni-app:///pages/star/index.vue?b1c9");

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('view', [_c('swiper', {\n    staticClass: \"sd_deeerrt\",\n    attrs: {\n      \"duration\": _vm.duration\n    }\n  }, [_c('swiper-item', {\n    attrs: {\n      \"mpcomid\": '3kl-0'\n    }\n  }, [_c('image', {\n    attrs: {\n      \"src\": \"../../static/df_a.jpg\"\n    }\n  })]), _c('swiper-item', {\n    attrs: {\n      \"mpcomid\": 'mIu-1'\n    }\n  }, [_c('image', {\n    attrs: {\n      \"src\": \"../../static/df_b.jpg\"\n    }\n  })]), _c('swiper-item', {\n    attrs: {\n      \"mpcomid\": 'I7M-2'\n    }\n  }, [_c('image', {\n    attrs: {\n      \"src\": \"../../static/df_c.jpg\",\n      \"eventid\": 'uWW-0'\n    },\n    on: {\n      \"click\": _vm.sd_jhgh_der\n    }\n  })])], 1)], 1)\n}\nvar staticRenderFns = []\nrender._withStripped = true\nvar esExports = { render: render, staticRenderFns: staticRenderFns }\n/* harmony default export */ __webpack_exports__[\"a\"] = (esExports);\nif (false) {\n  module.hot.accept()\n  if (module.hot.data) {\n     require(\"vue-hot-reload-api\").rerender(\"data-v-c95ad35e\", esExports)\n  }\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./lib/mpvue-loader/lib/template-compiler?{\"id\":\"data-v-c95ad35e\",\"hasScoped\":true,\"preserveWhitespace\":false}!./lib/preprocessor-loader.js?{\"type\":\"html\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=template&index=0!F:/代码/防伪/pages/star/index.vue\n// module id = 27\n// module chunks = 4\n\n");

/***/ })

},[23]);
});
require('pages/star/index.js');
__wxRoute = 'pages/check_results/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/check_results/index.js';

define('pages/check_results/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([6],{

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar _vue = __webpack_require__(0);var _vue2 = _interopRequireDefault(_vue);\nvar _index = __webpack_require__(29);var _index2 = _interopRequireDefault(_index);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\nvar app = new _vue2.default(_index2.default);\napp.$mount();\n\n//////////////////\n// WEBPACK FOOTER\n// F:/代码/防伪/pages/check_results/index.js\n// module id = 28\n// module chunks = 6\n\n//# sourceURL=uni-app:///pages/check_results/index.js?7504");

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_D_HBuilderX_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_D_HBuilderX_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(31);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_D_HBuilderX_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_D_HBuilderX_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_D_HBuilderX_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_D_HBuilderX_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_index_vue__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__D_HBuilderX_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_76922594_hasScoped_true_preserveWhitespace_false_D_HBuilderX_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_D_HBuilderX_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(32);\nvar disposed = false\nfunction injectStyle (ssrContext) {\n  if (disposed) return\n  __webpack_require__(30)\n}\nvar normalizeComponent = __webpack_require__(1)\n/* script */\n\n/* template */\n\n/* styles */\nvar __vue_styles__ = injectStyle\n/* scopeId */\nvar __vue_scopeId__ = \"data-v-76922594\"\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\nvar Component = normalizeComponent(\n  __WEBPACK_IMPORTED_MODULE_0__D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_D_HBuilderX_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_D_HBuilderX_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_index_vue___default.a,\n  __WEBPACK_IMPORTED_MODULE_1__D_HBuilderX_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_76922594_hasScoped_true_preserveWhitespace_false_D_HBuilderX_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_D_HBuilderX_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_index_vue__[\"a\" /* default */],\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"F:\\\\代码\\\\防伪\\\\pages\\\\check_results\\\\index.vue\"\nif (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== \"default\" && key.substr(0, 2) !== \"__\"})) {console.error(\"named exports are not supported in *.vue files.\")}\nif (Component.options.functional) {console.error(\"[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.\")}\n\n/* hot reload */\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-76922594\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-76922594\", Component.options)\n  }\n  module.hot.dispose(function (data) {\n    disposed = true\n  })\n})()}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component.exports);\n\n\n//////////////////\n// WEBPACK FOOTER\n// F:/代码/防伪/pages/check_results/index.vue\n// module id = 29\n// module chunks = 6\n\n");

/***/ }),

/***/ 30:
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader!./lib/css-var-loader.js!./node_modules/css-loader?{\"minimize\":false,\"sourceMap\":false}!./lib/mpvue-loader/lib/style-compiler?{\"vue\":true,\"id\":\"data-v-76922594\",\"scoped\":true,\"hasInlineConfig\":false}!./lib/css-upx-loader.js?{\"baseDpr\":1,\"rpxUnit\":1}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./node_modules/postcss-loader/lib?{\"config\":{\"path\":\"D://HBuilderX//HBuilderX//plugins//uniapp//.postcssrc.js\"},\"sourceMap\":true}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=styles&index=0!F:/代码/防伪/pages/check_results/index.vue\n// module id = 30\n// module chunks = 6\n\n");

/***/ }),

/***/ 31:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default =\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{\n\tdata: function data() {\n\t\treturn {\n\t\t\tis_sdf: true //true伪  false 真\n\t\t};\n\t},\n\tcomponents: {},\n\tmethods: {},\n\tmounted: function mounted() {},\n\tonNavigationBarButtonTap: function onNavigationBarButtonTap() {\n\t\tuni.scanCode({\n\t\t\tsuccess: function success(res) {\n\t\t\t\tconsole.log('条码类型：' + res.scanType);\n\t\t\t\tconsole.log('条码内容：' + res.result);\n\t\t\t} });\n\n\t} };\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)[\"default\"]))\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/babel-loader/lib?{\"babelrc\":false,\"retainLines\":true,\"presets\":[[\"D://HBuilderX//HBuilderX//plugins//uniapp//node_modules//babel-preset-env\",{\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"not ie <= 8\"]}}],\"D://HBuilderX//HBuilderX//plugins//uniapp//node_modules//babel-preset-stage-2\"],\"plugins\":[[\"D://HBuilderX//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-runtime\",{\"helpers\":false,\"polyfill\":false,\"regenerator\":true,\"moduleName\":\"D://HBuilderX//HBuilderX//plugins//uniapp//node_modules//babel-runtime\"}],\"D://HBuilderX//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-decorators-legacy\"]}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=script&index=0!F:/代码/防伪/pages/check_results/index.vue\n// module id = 31\n// module chunks = 6\n\n//# sourceURL=uni-app:///pages/check_results/index.vue?7db0");

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('view', {\n    staticClass: \"pd pt20 pm20 sdf_df_Ddff \",\n    class: _vm.is_sdf ? 'act' : ''\n  }, [_vm._m(0), _c('view', {\n    staticClass: \"pd pt20 pm20 cf_jhhddfg yj4 pr\"\n  }, [(_vm.is_sdf) ? _c('image', {\n    staticClass: \"jiabao_der\",\n    attrs: {\n      \"src\": \"../../static/img/jiaobiao_b.png\"\n    }\n  }) : _c('image', {\n    staticClass: \"jiabao_der\",\n    attrs: {\n      \"src\": \"../../static/img/jiaobiao.png\"\n    }\n  }), _c('image', {\n    staticClass: \"logo_eertx\",\n    attrs: {\n      \"src\": \"../../static/img/logo.png\"\n    }\n  }), _c('view', {\n    staticClass: \"pd yj4 bgff cen pt20 pm20 \\tmt50 \"\n  }, [(_vm.is_sdf) ? _c('image', {\n    staticClass: \"success\",\n    attrs: {\n      \"src\": \"../../static/img/close.png\"\n    }\n  }) : _c('image', {\n    staticClass: \"success\",\n    attrs: {\n      \"src\": \"../../static/img/success.png\"\n    }\n  }), (_vm.is_sdf) ? _c('view', {\n    staticClass: \"z3 fz32\"\n  }, [_vm._v(\"\\n\\t\\t\\t\\t\\t二维码已失效 \"), _c('text', {\n    staticClass: \"zhuse\"\n  }, [_vm._v(\"谨防假冒\")])]) : _c('view', {\n    staticClass: \"z3 fz32\"\n  }, [_vm._v(\"\\n\\t\\t\\t\\t\\t正规商品\\n\\t\\t\\t\\t\")]), _c('view', {\n    staticClass: \"fz26 zhuse\"\n  }, [_vm._v(\"\\n\\t\\t\\t\\t\\t验证结果：【4047013456684270036】\\n\\t\\t\\t\\t\")])]), _c('view', {\n    staticClass: \"pd cen fz24 ln cf mt20\"\n  }, [_vm._v(\"\\n\\t\\t\\t\\t您所查询的是广州物美食品有限公司所生产的\\n\\t\\t\\t\\t“健齿乐健康蔬果礼包” ，经苍鸟唯一验证，为正规产品，\\n\\t\\t\\t\\t请放心使用\\n\\t\\t\\t\")])]), _vm._m(1), _c('view', {\n    staticClass: \"fz20 z3 tl derf_jh_e_cert pl10\"\n  }, [_vm._v(\"首次正品验证\\n\\t\\t\")]), _vm._m(2), _c('view', {\n    staticClass: \"fz20 z3 tl derf_jh_e_cert pl10 ab mt40\"\n  }, [_vm._v(\"失效验证\\n\\t\\t\\t\\t\")]), _vm._l((5), function(sd, index) {\n    return _c('view', {\n      staticClass: \"uyt_lit_list yj4 pd pt20 pm20 mt20 pr ab\"\n    }, [_c('image', {\n      staticClass: \"sd_jh_ceert yj cz fl\"\n    }), _vm._m(3, true), _c('image', {\n      staticClass: \"zheng_a_eerr\",\n      attrs: {\n        \"src\": \"../../static/img/zheng_b.png\"\n      }\n    }), _c('view', {\n      staticClass: \"qc\"\n    })])\n  })], 2)\n}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('view', {\n    staticClass: \"fmeg_def yj4\"\n  }, [_c('image', {\n    attrs: {\n      \"src\": \"../../static/img/sjhg_femian.jpg\"\n    }\n  })])\n},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('view', {\n    staticClass: \"pd er_jh_der mt40\"\n  }, [_c('text', [_vm._v(\"查询记录\")])])\n},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('view', {\n    staticClass: \"uyt_lit_list yj4 pd pt20 pm20 mt20 pr\"\n  }, [_c('image', {\n    staticClass: \"sd_jh_ceert yj cz fl\"\n  }), _c('view', {\n    staticClass: \"ov pl20 fz24 cf pt30\"\n  }, [_c('text', {\n    staticClass: \"ye\"\n  }, [_vm._v(\"大鼻子海盗LOL\")]), _vm._v(\" 于2018-10-26 10:27:26 \\n查询了本商品\\n\\t\\t\\t\")]), _c('image', {\n    staticClass: \"zheng_a_eerr\",\n    attrs: {\n      \"src\": \"../../static/img/zheng_a.png\"\n    }\n  }), _c('view', {\n    staticClass: \"qc\"\n  })])\n},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('view', {\n    staticClass: \"ov pl20 fz24 cf pt30\"\n  }, [_c('text', {\n    staticClass: \"ye\"\n  }, [_vm._v(\"大鼻子海盗LOL\")]), _vm._v(\" 于2018-10-26 10:27:26 \\n\\t\\t查询了本商品\\n\\t\\t\\t\\t\\t\")])\n}]\nrender._withStripped = true\nvar esExports = { render: render, staticRenderFns: staticRenderFns }\n/* harmony default export */ __webpack_exports__[\"a\"] = (esExports);\nif (false) {\n  module.hot.accept()\n  if (module.hot.data) {\n     require(\"vue-hot-reload-api\").rerender(\"data-v-76922594\", esExports)\n  }\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./lib/mpvue-loader/lib/template-compiler?{\"id\":\"data-v-76922594\",\"hasScoped\":true,\"preserveWhitespace\":false}!./lib/preprocessor-loader.js?{\"type\":\"html\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=template&index=0!F:/代码/防伪/pages/check_results/index.vue\n// module id = 32\n// module chunks = 6\n\n");

/***/ })

},[28]);
});
require('pages/check_results/index.js');
__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([5],{

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar _vue = __webpack_require__(0);var _vue2 = _interopRequireDefault(_vue);\nvar _index = __webpack_require__(34);var _index2 = _interopRequireDefault(_index);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\nvar app = new _vue2.default(_index2.default);\napp.$mount();\n\n//////////////////\n// WEBPACK FOOTER\n// F:/代码/防伪/pages/index/index.js\n// module id = 33\n// module chunks = 5\n\n//# sourceURL=uni-app:///pages/index/index.js?0b54");

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_D_HBuilderX_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_D_HBuilderX_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(36);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_D_HBuilderX_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_D_HBuilderX_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_D_HBuilderX_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_D_HBuilderX_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_index_vue__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__D_HBuilderX_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_5d67b689_hasScoped_true_preserveWhitespace_false_D_HBuilderX_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_D_HBuilderX_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(37);\nvar disposed = false\nfunction injectStyle (ssrContext) {\n  if (disposed) return\n  __webpack_require__(35)\n}\nvar normalizeComponent = __webpack_require__(1)\n/* script */\n\n/* template */\n\n/* styles */\nvar __vue_styles__ = injectStyle\n/* scopeId */\nvar __vue_scopeId__ = \"data-v-5d67b689\"\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\nvar Component = normalizeComponent(\n  __WEBPACK_IMPORTED_MODULE_0__D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_HBuilderX_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_D_HBuilderX_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_D_HBuilderX_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_index_vue___default.a,\n  __WEBPACK_IMPORTED_MODULE_1__D_HBuilderX_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_5d67b689_hasScoped_true_preserveWhitespace_false_D_HBuilderX_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_D_HBuilderX_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_index_vue__[\"a\" /* default */],\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"F:\\\\代码\\\\防伪\\\\pages\\\\index\\\\index.vue\"\nif (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== \"default\" && key.substr(0, 2) !== \"__\"})) {console.error(\"named exports are not supported in *.vue files.\")}\nif (Component.options.functional) {console.error(\"[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.\")}\n\n/* hot reload */\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-5d67b689\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-5d67b689\", Component.options)\n  }\n  module.hot.dispose(function (data) {\n    disposed = true\n  })\n})()}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component.exports);\n\n\n//////////////////\n// WEBPACK FOOTER\n// F:/代码/防伪/pages/index/index.vue\n// module id = 34\n// module chunks = 5\n\n");

/***/ }),

/***/ 35:
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader!./lib/css-var-loader.js!./node_modules/css-loader?{\"minimize\":false,\"sourceMap\":false}!./lib/mpvue-loader/lib/style-compiler?{\"vue\":true,\"id\":\"data-v-5d67b689\",\"scoped\":true,\"hasInlineConfig\":false}!./lib/css-upx-loader.js?{\"baseDpr\":1,\"rpxUnit\":1}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./node_modules/postcss-loader/lib?{\"config\":{\"path\":\"D://HBuilderX//HBuilderX//plugins//uniapp//.postcssrc.js\"},\"sourceMap\":true}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=styles&index=0!F:/代码/防伪/pages/index/index.vue\n// module id = 35\n// module chunks = 5\n\n");

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default =\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{\n\tdata: function data() {\n\t\treturn {};\n\t},\n\tcomponents: {},\n\tmethods: {\n\t\tsaoma: function saoma() {\n\t\t\tuni.scanCode({\n\t\t\t\tsuccess: function success(res) {\n\t\t\t\t\tuni.navigateTo({\n\t\t\t\t\t\turl: \"/pages/check_results/index\" });\n\n\t\t\t\t} });\n\n\t\t} },\n\n\tmounted: function mounted() {} };\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)[\"default\"]))\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/babel-loader/lib?{\"babelrc\":false,\"retainLines\":true,\"presets\":[[\"D://HBuilderX//HBuilderX//plugins//uniapp//node_modules//babel-preset-env\",{\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"not ie <= 8\"]}}],\"D://HBuilderX//HBuilderX//plugins//uniapp//node_modules//babel-preset-stage-2\"],\"plugins\":[[\"D://HBuilderX//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-runtime\",{\"helpers\":false,\"polyfill\":false,\"regenerator\":true,\"moduleName\":\"D://HBuilderX//HBuilderX//plugins//uniapp//node_modules//babel-runtime\"}],\"D://HBuilderX//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-decorators-legacy\"]}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=script&index=0!F:/代码/防伪/pages/index/index.vue\n// module id = 36\n// module chunks = 5\n\n//# sourceURL=uni-app:///pages/index/index.vue?c39e");

/***/ }),

/***/ 37:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('view', {\n    staticClass: \"sd_jh_deer\"\n  }, [_vm._m(0), _c('view', {\n    staticClass: \"s_qc_derdf\"\n  }, [_c('view', {\n    staticClass: \"saoma_sd cen\",\n    attrs: {\n      \"eventid\": '7TX-0'\n    },\n    on: {\n      \"click\": _vm.saoma\n    }\n  }, [_c('image', {\n    attrs: {\n      \"src\": \"../../static/img/qc_icon.png\"\n    }\n  }), _c('view', {\n    staticClass: \"fz32 ls\"\n  }, [_vm._v(\"开启扫描\")])]), _c('view', {\n    staticClass: \"ls cen fz32 sdf_jh_de4ert\"\n  }, [_vm._v(\"\\n\\t\\t\\t苍鸟如何做到防伪唯一性\\n\\t\\t\")])]), _c('view', {\n    staticClass: \"dibu_deer pt10 pm10 dx_row cen\"\n  }, [_vm._m(1), _c('view', {\n    staticClass: \"dx_col_12 \",\n    attrs: {\n      \"eventid\": 'p3V-1'\n    },\n    on: {\n      \"click\": _vm.saoma\n    }\n  }, [_c('image', {\n    staticClass: \"shouye_eet\",\n    attrs: {\n      \"src\": \"../../static/img/bottom/dsfdsfb_a.png\"\n    }\n  }), _c('view', {\n    staticClass: \"fz26 z9\"\n  }, [_vm._v(\"\\n\\t\\t\\t\\t查真伪\\n\\t\\t\\t\")])])])])\n}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('view', {\n    staticClass: \"fz30 cf cen\"\n  }, [_c('image', {\n    staticClass: \"logo_ert\",\n    attrs: {\n      \"src\": \"../../static/img/logo.png\"\n    }\n  }), _c('view', {\n    staticClass: \"mt20\"\n  }, [_c('image', {\n    staticClass: \"sd_deerty\",\n    attrs: {\n      \"src\": \"../../static/img/sjh_d.png\"\n    }\n  })])])\n},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('view', {\n    staticClass: \"dx_col_12 \"\n  }, [_c('image', {\n    staticClass: \"shouye_eet\",\n    attrs: {\n      \"src\": \"../../static/img/bottom/dsfdsfa_b.png\"\n    }\n  }), _c('view', {\n    staticClass: \"fz26 ls\"\n  }, [_vm._v(\"\\n\\t\\t\\t\\t首页\\n\\t\\t\\t\")])])\n}]\nrender._withStripped = true\nvar esExports = { render: render, staticRenderFns: staticRenderFns }\n/* harmony default export */ __webpack_exports__[\"a\"] = (esExports);\nif (false) {\n  module.hot.accept()\n  if (module.hot.data) {\n     require(\"vue-hot-reload-api\").rerender(\"data-v-5d67b689\", esExports)\n  }\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./lib/mpvue-loader/lib/template-compiler?{\"id\":\"data-v-5d67b689\",\"hasScoped\":true,\"preserveWhitespace\":false}!./lib/preprocessor-loader.js?{\"type\":\"html\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=template&index=0!F:/代码/防伪/pages/index/index.vue\n// module id = 37\n// module chunks = 5\n\n");

/***/ })

},[33]);
});
require('pages/index/index.js');

