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
!function(r){var e=global.webpackJsonp;global.webpackJsonp=function(n,u,c){for(var l,f,a,p=0,i=[];p<n.length;p++)f=n[p],o[f]&&i.push(o[f][0]),o[f]=0;for(l in u)Object.prototype.hasOwnProperty.call(u,l)&&(r[l]=u[l]);for(e&&e(n,u,c);i.length;)i.shift()();if(c)for(p=0;p<c.length;p++)a=t(t.s=c[p]);return a};var n={},o={7:0};function t(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return r[e].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=r,t.c=n,t.d=function(r,e,n){t.o(r,e)||Object.defineProperty(r,e,{configurable:!1,enumerable:!0,get:n})},t.n=function(r){var e=r&&r.__esModule?function(){return r.default}:function(){return r};return t.d(e,"a",e),e},t.o=function(r,e){return Object.prototype.hasOwnProperty.call(r,e)},t.p="/",t.oe=function(r){throw console.error(r),r}}([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
global.webpackJsonp([0],{0:function(t,e,n){(function(e){try{e||(e={}),e.process=e.process||{},e.process.env=e.process.env||{},e.App=e.App||App,e.Page=e.Page||Page,e.Component=e.Component||Component,e.getApp=e.getApp||getApp}catch(t){}var n;n=function(){"use strict";function t(e,n,r,o){if(r!==o&&void 0!==r)if(null==r||null==o||typeof r!=typeof o)e[n]=r;else if(Array.isArray(r)&&Array.isArray(o))if(r.length===o.length)for(var i=0,a=r.length;i<a;++i)t(e,n+"["+i+"]",r[i],o[i]);else e[n]=r;else if("object"==typeof r&&"object"==typeof o){var s=Object.keys(r),c=Object.keys(o);if(s.length!==c.length)e[n]=r;else{var u=Object.create(null);for(i=0,a=s.length;i<a;++i)u[s[i]]=!0,u[c[i]]=!0;if(Object.keys(u).length!==s.length)e[n]=r;else for(i=0,a=s.length;i<a;++i){var f=s[i];t(e,n+"."+f,r[f],o[f])}}}else r!==o&&(e[n]=r)}function n(t){return void 0===t||null===t}function r(t){return void 0!==t&&null!==t}function o(t){return!0===t}function i(t){return"string"==typeof t||"number"==typeof t}function a(t){return null!==t&&"object"==typeof t}var s=Object.prototype.toString;function c(t){return"[object Object]"===s.call(t)}function u(t){var e=parseFloat(t);return e>=0&&Math.floor(e)===e&&isFinite(t)}function f(t){return null==t?"":"object"==typeof t?JSON.stringify(t,null,2):String(t)}function p(t){var e=parseFloat(t);return isNaN(e)?t:e}function l(t,e){for(var n=Object.create(null),r=t.split(","),o=0;o<r.length;o++)n[r[o]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}l("slot,component",!0);var d=l("key,ref,slot,is");function h(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var v=Object.prototype.hasOwnProperty;function y(t,e){return v.call(t,e)}function m(t){var e=Object.create(null);return function(n){return e[n]||(e[n]=t(n))}}var g=/-(\w)/g,_=m(function(t){return t.replace(g,function(t,e){return e?e.toUpperCase():""})}),b=m(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),$=/([^-])([A-Z])/g,w=m(function(t){return t.replace($,"$1-$2").replace($,"$1-$2").toLowerCase()});function O(t,e){function n(n){var r=arguments.length;return r?r>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function x(t,e){e=e||0;for(var n=t.length-e,r=new Array(n);n--;)r[n]=t[n+e];return r}function A(t,e){for(var n in e)t[n]=e[n];return t}function C(t,e,n){}var k=function(t,e,n){return!1},j=function(t){return t};function S(t,e){var n=a(t),r=a(e);if(!n||!r)return!n&&!r&&String(t)===String(e);try{return JSON.stringify(t)===JSON.stringify(e)}catch(n){return t===e}}function P(t,e){for(var n=0;n<t.length;n++)if(S(t[n],e))return n;return-1}function E(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var T="data-server-rendered",M=["component","directive","filter"],D=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","onLaunch","onLoad","onShow","onReady","onHide","onUnload","onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onTabItemTap","attached","ready","moved","detached","onUniNViewMessage","onNavigationBarButtonTap","onBackPress"],I={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:k,isReservedAttr:k,isUnknownElement:k,getTagNamespace:C,parsePlatformTagName:j,mustUseProp:k,_lifecycleHooks:D},N=Object.freeze({});function R(t,e,n,r){Object.defineProperty(t,e,{value:n,enumerable:!!r,writable:!0,configurable:!0})}var B=/[^\w.$]/;var L=C;function U(t,e,n){if(I.errorHandler)I.errorHandler.call(null,t,e,n);else{if(!H||"undefined"==typeof console)throw t;console.error(t)}}var V,F="__proto__"in{},H="undefined"!=typeof window,W=["mpvue-runtime"].join(),G=(W&&/msie|trident/.test(W),W&&W.indexOf("msie 9.0"),W&&W.indexOf("edge/")>0),J=(W&&W.indexOf("android"),W&&/iphone|ipad|ipod|ios/.test(W)),z=(W&&/chrome\/\d+/.test(W),{}.watch);if(H)try{var K={};Object.defineProperty(K,"passive",{get:function(){!0}}),window.addEventListener("test-passive",null,K)}catch(t){}var q=function(){return void 0===V&&(V=!H&&void 0!==e&&"server"===e.process.env.VUE_ENV),V},X=H&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function Z(t){return"function"==typeof t&&/native code/.test(t.toString())}var Q,Y="undefined"!=typeof Symbol&&Z(Symbol)&&"undefined"!=typeof Reflect&&Z(Reflect.ownKeys),tt=function(){var t,e=[],n=!1;function r(){n=!1;var t=e.slice(0);e.length=0;for(var r=0;r<t.length;r++)t[r]()}if("undefined"!=typeof Promise&&Z(Promise)){var o=Promise.resolve(),i=function(t){console.error(t)};t=function(){o.then(r).catch(i),J&&setTimeout(C)}}else t=function(){setTimeout(r,0)};return function(r,o){var i;if(e.push(function(){if(r)try{r.call(o)}catch(t){U(t,o,"nextTick")}else i&&i(o)}),n||(n=!0,t()),!r&&"undefined"!=typeof Promise)return new Promise(function(t,e){i=t})}}();Q="undefined"!=typeof Set&&Z(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var et=0,nt=function(){this.id=et++,this.subs=[]};nt.prototype.addSub=function(t){this.subs.push(t)},nt.prototype.removeSub=function(t){h(this.subs,t)},nt.prototype.depend=function(){nt.target&&nt.target.addDep(this)},nt.prototype.notify=function(){for(var t=this.subs.slice(),e=0,n=t.length;e<n;e++)t[e].update()},nt.target=null;var rt=[];var ot=Array.prototype,it=Object.create(ot);["push","pop","shift","unshift","splice","sort","reverse"].forEach(function(t){var e=ot[t];R(it,t,function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];var o,i=e.apply(this,n),a=this.__ob__;switch(t){case"push":case"unshift":o=n;break;case"splice":o=n.slice(2)}return o&&a.observeArray(o),a.dep.notify(),i})});var at=Object.getOwnPropertyNames(it),st={shouldConvert:!0},ct=function(t){(this.value=t,this.dep=new nt,this.vmCount=0,R(t,"__ob__",this),Array.isArray(t))?((F?ut:ft)(t,it,at),this.observeArray(t)):this.walk(t)};function ut(t,e,n){t.__proto__=e}function ft(t,e,n){for(var r=0,o=n.length;r<o;r++){var i=n[r];R(t,i,e[i])}}function pt(t,e){var n;if(a(t))return y(t,"__ob__")&&t.__ob__ instanceof ct?n=t.__ob__:st.shouldConvert&&!q()&&(Array.isArray(t)||c(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new ct(t)),e&&n&&n.vmCount++,n}function lt(t,e,n,r,o){var i=new nt,a=Object.getOwnPropertyDescriptor(t,e);if(!a||!1!==a.configurable){var s=a&&a.get,c=a&&a.set,u=!o&&pt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return nt.target&&(i.depend(),u&&u.dep.depend(),Array.isArray(e)&&function t(e){for(var n=void 0,r=0,o=e.length;r<o;r++)(n=e[r])&&n.__ob__&&n.__ob__.dep.depend(),Array.isArray(n)&&t(n)}(e)),e},set:function(e){var r=s?s.call(t):n;e===r||e!=e&&r!=r||(c?c.call(t,e):n=e,u=!o&&pt(e),i.notify())}})}}function dt(t,e,n){if(Array.isArray(t)&&u(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(y(t,e))return t[e]=n,n;var r=t.__ob__;return t._isVue||r&&r.vmCount?n:r?(lt(r.value,e,n),r.dep.notify(),n):(t[e]=n,n)}function ht(t,e){if(Array.isArray(t)&&u(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||y(t,e)&&(delete t[e],n&&n.dep.notify())}}ct.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)lt(t,e[n],t[e[n]])},ct.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)pt(t[e])};var vt=I.optionMergeStrategies;function yt(t,e){if(!e)return t;for(var n,r,o,i=Object.keys(e),a=0;a<i.length;a++)r=t[n=i[a]],o=e[n],y(t,n)?c(r)&&c(o)&&yt(r,o):dt(t,n,o);return t}function mt(t,e,n){return n?t||e?function(){var r="function"==typeof e?e.call(n):e,o="function"==typeof t?t.call(n):void 0;return r?yt(r,o):o}:void 0:e?t?function(){return yt("function"==typeof e?e.call(this):e,t.call(this))}:e:t}function gt(t,e){return e?t?t.concat(e):Array.isArray(e)?e:[e]:t}function _t(t,e){var n=Object.create(t||null);return e?A(n,e):n}vt.data=function(t,e,n){return n?mt(t,e,n):e&&"function"!=typeof e?t:mt.call(this,t,e)},D.forEach(function(t){vt[t]=gt}),M.forEach(function(t){vt[t+"s"]=_t}),vt.watch=function(t,e){if(t===z&&(t=void 0),e===z&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var n={};for(var r in A(n,t),e){var o=n[r],i=e[r];o&&!Array.isArray(o)&&(o=[o]),n[r]=o?o.concat(i):Array.isArray(i)?i:[i]}return n},vt.props=vt.methods=vt.inject=vt.computed=function(t,e){if(!e)return Object.create(t||null);if(!t)return e;var n=Object.create(null);return A(n,t),A(n,e),n},vt.provide=mt;var bt=function(t,e){return void 0===e?t:e};function $t(t,e,n){"function"==typeof e&&(e=e.options),function(t){var e=t.props;if(e){var n,r,o={};if(Array.isArray(e))for(n=e.length;n--;)"string"==typeof(r=e[n])&&(o[_(r)]={type:null});else if(c(e))for(var i in e)r=e[i],o[_(i)]=c(r)?r:{type:r};t.props=o}}(e),function(t){var e=t.inject;if(Array.isArray(e))for(var n=t.inject={},r=0;r<e.length;r++)n[e[r]]=e[r]}(e),function(t){var e=t.directives;if(e)for(var n in e){var r=e[n];"function"==typeof r&&(e[n]={bind:r,update:r})}}(e);var r=e.extends;if(r&&(t=$t(t,r,n)),e.mixins)for(var o=0,i=e.mixins.length;o<i;o++)t=$t(t,e.mixins[o],n);var a,s={};for(a in t)u(a);for(a in e)y(t,a)||u(a);function u(r){var o=vt[r]||bt;s[r]=o(t[r],e[r],n,r)}return s}function wt(t,e,n,r){if("string"==typeof n){var o=t[e];if(y(o,n))return o[n];var i=_(n);if(y(o,i))return o[i];var a=b(i);return y(o,a)?o[a]:o[n]||o[i]||o[a]}}function Ot(t,e,n,r){var o=e[t],i=!y(n,t),a=n[t];if(At(Boolean,o.type)&&(i&&!y(o,"default")?a=!1:At(String,o.type)||""!==a&&a!==w(t)||(a=!0)),void 0===a){a=function(t,e,n){if(!y(e,"default"))return;var r=e.default;0;if(t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n])return t._props[n];return"function"==typeof r&&"Function"!==xt(e.type)?r.call(t):r}(r,o,t);var s=st.shouldConvert;st.shouldConvert=!0,pt(a),st.shouldConvert=s}return a}function xt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function At(t,e){if(!Array.isArray(e))return xt(e)===xt(t);for(var n=0,r=e.length;n<r;n++)if(xt(e[n])===xt(t))return!0;return!1}var Ct=function(t,e,n,r,o,i,a,s){this.tag=t,this.data=e,this.children=n,this.text=r,this.elm=o,this.ns=void 0,this.context=i,this.functionalContext=void 0,this.key=e&&e.key,this.componentOptions=a,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},kt={child:{}};kt.child.get=function(){return this.componentInstance},Object.defineProperties(Ct.prototype,kt);var jt=function(t){void 0===t&&(t="");var e=new Ct;return e.text=t,e.isComment=!0,e};function St(t){return new Ct(void 0,void 0,void 0,String(t))}function Pt(t){var e=new Ct(t.tag,t.data,t.children,t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.isCloned=!0,e}function Et(t){for(var e=t.length,n=new Array(e),r=0;r<e;r++)n[r]=Pt(t[r]);return n}var Tt,Mt=m(function(t){var e="&"===t.charAt(0),n="~"===(t=e?t.slice(1):t).charAt(0),r="!"===(t=n?t.slice(1):t).charAt(0);return{name:t=r?t.slice(1):t,once:n,capture:r,passive:e}});function Dt(t){function e(){var t=arguments,n=e.fns;if(!Array.isArray(n))return n.apply(null,arguments);for(var r=n.slice(),o=0;o<r.length;o++)r[o].apply(null,t)}return e.fns=t,e}function It(t,e,n,o,i){if(r(e)){if(y(e,n))return t[n]=e[n],i||delete e[n],!0;if(y(e,o))return t[n]=e[o],i||delete e[o],!0}return!1}function Nt(t){return i(t)?[St(t)]:Array.isArray(t)?function t(e,a){var s=[];var c,u,f;for(c=0;c<e.length;c++)n(u=e[c])||"boolean"==typeof u||(f=s[s.length-1],Array.isArray(u)?s.push.apply(s,t(u,(a||"")+"_"+c)):i(u)?Rt(f)?f.text+=String(u):""!==u&&s.push(St(u)):Rt(u)&&Rt(f)?s[s.length-1]=St(f.text+u.text):(o(e._isVList)&&r(u.tag)&&n(u.key)&&r(a)&&(u.key="__vlist"+a+"_"+c+"__"),s.push(u)));return s}(t):void 0}function Rt(t){return r(t)&&r(t.text)&&!1===t.isComment}function Bt(t,e){return t.__esModule&&t.default&&(t=t.default),a(t)?e.extend(t):t}function Lt(t,e,n){n?Tt.$once(t,e):Tt.$on(t,e)}function Ut(t,e){Tt.$off(t,e)}function Vt(t,e,r){Tt=t,function(t,e,r,o,i){var a,s,c,u;for(a in t)s=t[a],c=e[a],u=Mt(a),n(s)||(n(c)?(n(s.fns)&&(s=t[a]=Dt(s)),r(u.name,s,u.once,u.capture,u.passive)):s!==c&&(c.fns=s,t[a]=c));for(a in e)n(t[a])&&o((u=Mt(a)).name,e[a],u.capture)}(e,r||{},Lt,Ut)}function Ft(t,e){var n={};if(!t)return n;for(var r=[],o=0,i=t.length;o<i;o++){var a=t[o];if(a.context!==e&&a.functionalContext!==e||!a.data||null==a.data.slot)r.push(a);else{var s=a.data.slot,c=n[s]||(n[s]=[]);"template"===a.tag?c.push.apply(c,a.children):c.push(a)}}return r.every(Ht)||(n.default=r),n}function Ht(t){return t.isComment||" "===t.text}function Wt(t,e){e=e||{};for(var n=0;n<t.length;n++)Array.isArray(t[n])?Wt(t[n],e):e[t[n].key]=t[n].fn;return e}var Gt=null;function Jt(t,e,n){var r;return t.$el=e,t.$options.render||(t.$options.render=jt),qt(t,"beforeMount"),r=function(){t._update(t._render(),n)},t._watcher=new oe(t,r,C),n=!1,null==t.$vnode&&(t._isMounted=!0,qt(t,"mounted")),t}function zt(t){for(;t&&(t=t.$parent);)if(t._inactive)return!0;return!1}function Kt(t,e){if(e){if(t._directInactive=!1,zt(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)Kt(t.$children[n]);qt(t,"activated")}}function qt(t,e){var n=t.$options[e];if(n)for(var r=0,o=n.length;r<o;r++)try{n[r].call(t)}catch(n){U(n,t,e+" hook")}t._hasHookEvent&&t.$emit("hook:"+e)}var Xt=[],Zt=[],Qt={},Yt=!1,te=!1,ee=0;function ne(){var t,e;for(te=!0,Xt.sort(function(t,e){return t.id-e.id}),ee=0;ee<Xt.length;ee++)e=(t=Xt[ee]).id,Qt[e]=null,t.run();var n=Zt.slice(),r=Xt.slice();ee=Xt.length=Zt.length=0,Qt={},Yt=te=!1,function(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,Kt(t[e],!0)}(n),function(t){var e=t.length;for(;e--;){var n=t[e],r=n.vm;r._watcher===n&&r._isMounted&&qt(r,"updated")}}(r),X&&I.devtools&&X.emit("flush")}var re=0,oe=function(t,e,n,r){this.vm=t,t._watchers.push(this),r?(this.deep=!!r.deep,this.user=!!r.user,this.lazy=!!r.lazy,this.sync=!!r.sync):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++re,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new Q,this.newDepIds=new Q,this.expression="","function"==typeof e?this.getter=e:(this.getter=function(t){if(!B.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}(e),this.getter||(this.getter=function(){})),this.value=this.lazy?void 0:this.get()};oe.prototype.get=function(){var t,e;t=this,nt.target&&rt.push(nt.target),nt.target=t;var n,r=this.vm;try{e=this.getter.call(r,r)}catch(t){if(!this.user)throw t;U(t,r,'getter for watcher "'+this.expression+'"')}finally{this.deep&&(n=e,ie.clear(),function t(e,n){var r,o,i=Array.isArray(e);if((i||a(e))&&Object.isExtensible(e)){if(e.__ob__){var s=e.__ob__.dep.id;if(n.has(s))return;n.add(s)}if(i)for(r=e.length;r--;)t(e[r],n);else for(o=Object.keys(e),r=o.length;r--;)t(e[o[r]],n)}}(n,ie)),nt.target=rt.pop(),this.cleanupDeps()}return e},oe.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},oe.prototype.cleanupDeps=function(){for(var t=this.deps.length;t--;){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},oe.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():function(t){var e=t.id;if(null==Qt[e]){if(Qt[e]=!0,te){for(var n=Xt.length-1;n>ee&&Xt[n].id>t.id;)n--;Xt.splice(n+1,0,t)}else Xt.push(t);Yt||(Yt=!0,tt(ne))}}(this)},oe.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||a(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(t){U(t,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},oe.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},oe.prototype.depend=function(){for(var t=this.deps.length;t--;)this.deps[t].depend()},oe.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||h(this.vm._watchers,this);for(var t=this.deps.length;t--;)this.deps[t].removeSub(this);this.active=!1}};var ie=new Q;var ae={enumerable:!0,configurable:!0,get:C,set:C};function se(t,e,n){ae.get=function(){return this[e][n]},ae.set=function(t){this[e][n]=t},Object.defineProperty(t,n,ae)}function ce(t){t._watchers=[];var e=t.$options;e.props&&function(t,e){var n=t.$options.propsData||{},r=t._props={},o=t.$options._propKeys=[],i=!t.$parent;st.shouldConvert=i;var a=function(i){o.push(i);var a=Ot(i,e,n,t);lt(r,i,a),i in t||se(t,"_props",i)};for(var s in e)a(s);st.shouldConvert=!0}(t,e.props),e.methods&&function(t,e){t.$options.props;for(var n in e)t[n]=null==e[n]?C:O(e[n],t)}(t,e.methods),e.data?function(t){var e=t.$options.data;c(e=t._data="function"==typeof e?function(t,e){try{return t.call(e)}catch(t){return U(t,e,"data()"),{}}}(e,t):e||{})||(e={});var n=Object.keys(e),r=t.$options.props,o=(t.$options.methods,n.length);for(;o--;){var i=n[o];r&&y(r,i)||(void 0,36!==(a=(i+"").charCodeAt(0))&&95!==a&&se(t,"_data",i))}var a;pt(e,!0)}(t):pt(t._data={},!0),e.computed&&function(t,e){var n=t._computedWatchers=Object.create(null);for(var r in e){var o=e[r],i="function"==typeof o?o:o.get;n[r]=new oe(t,i,C,ue),r in t||fe(t,r,o)}}(t,e.computed),e.watch&&e.watch!==z&&function(t,e){for(var n in e){var r=e[n];if(Array.isArray(r))for(var o=0;o<r.length;o++)le(t,n,r[o]);else le(t,n,r)}}(t,e.watch)}var ue={lazy:!0};function fe(t,e,n){"function"==typeof n?(ae.get=pe(e),ae.set=C):(ae.get=n.get?!1!==n.cache?pe(e):n.get:C,ae.set=n.set?n.set:C),Object.defineProperty(t,e,ae)}function pe(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),nt.target&&e.depend(),e.value}}function le(t,e,n,r){return c(n)&&(r=n,n=n.handler),"string"==typeof n&&(n=t[n]),t.$watch(e,n,r)}function de(t,e){if(t){for(var n=Object.create(null),r=Y?Reflect.ownKeys(t):Object.keys(t),o=0;o<r.length;o++){for(var i=r[o],a=t[i],s=e;s;){if(s._provided&&a in s._provided){n[i]=s._provided[a];break}s=s.$parent}0}return n}}function he(t,e){for(var n in e)t[_(n)]=e[n]}var ve={init:function(t,e,n,o){if(!t.componentInstance||t.componentInstance._isDestroyed)(t.componentInstance=function(t,e,n,o){var i=t.componentOptions,a={_isComponent:!0,parent:e,propsData:i.propsData,_componentTag:i.tag,_parentVnode:t,_parentListeners:i.listeners,_renderChildren:i.children,_parentElm:n||null,_refElm:o||null},s=t.data.inlineTemplate;r(s)&&(a.render=s.render,a.staticRenderFns=s.staticRenderFns);return new i.Ctor(a)}(t,Gt,n,o)).$mount(e?t.elm:void 0,e);else if(t.data.keepAlive){var i=t;ve.prepatch(i,i)}},prepatch:function(t,e){var n=e.componentOptions;!function(t,e,n,r,o){var i=!!(o||t.$options._renderChildren||r.data.scopedSlots||t.$scopedSlots!==N);if(t.$options._parentVnode=r,t.$vnode=r,t._vnode&&(t._vnode.parent=r),t.$options._renderChildren=o,t.$attrs=r.data&&r.data.attrs,t.$listeners=n,e&&t.$options.props){st.shouldConvert=!1;for(var a=t._props,s=t.$options._propKeys||[],c=0;c<s.length;c++){var u=s[c];a[u]=Ot(u,t.$options.props,e,t)}st.shouldConvert=!0,t.$options.propsData=e}if(n){var f=t.$options._parentListeners;t.$options._parentListeners=n,Vt(t,n,f)}i&&(t.$slots=Ft(o,r.context),t.$forceUpdate())}(e.componentInstance=t.componentInstance,n.propsData,n.listeners,e,n.children)},insert:function(t){var e,n=t.context,r=t.componentInstance;r._isMounted||(r._isMounted=!0,qt(r,"mounted")),t.data.keepAlive&&(n._isMounted?((e=r)._inactive=!1,Zt.push(e)):Kt(r,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?function t(e,n){if(!(n&&(e._directInactive=!0,zt(e))||e._inactive)){e._inactive=!0;for(var r=0;r<e.$children.length;r++)t(e.$children[r]);qt(e,"deactivated")}}(e,!0):e.$destroy())}},ye=Object.keys(ve);function me(t,e,i,s,c){if(!n(t)){var u=i.$options._base;if(a(t)&&(t=u.extend(t)),"function"==typeof t){var f;if(n(t.cid)&&void 0===(t=function(t,e,i){if(o(t.error)&&r(t.errorComp))return t.errorComp;if(r(t.resolved))return t.resolved;if(o(t.loading)&&r(t.loadingComp))return t.loadingComp;if(!r(t.contexts)){var s=t.contexts=[i],c=!0,u=function(){for(var t=0,e=s.length;t<e;t++)s[t].$forceUpdate()},f=E(function(n){t.resolved=Bt(n,e),c||u()}),p=E(function(e){r(t.errorComp)&&(t.error=!0,u())}),l=t(f,p);return a(l)&&("function"==typeof l.then?n(t.resolved)&&l.then(f,p):r(l.component)&&"function"==typeof l.component.then&&(l.component.then(f,p),r(l.error)&&(t.errorComp=Bt(l.error,e)),r(l.loading)&&(t.loadingComp=Bt(l.loading,e),0===l.delay?t.loading=!0:setTimeout(function(){n(t.resolved)&&n(t.error)&&(t.loading=!0,u())},l.delay||200)),r(l.timeout)&&setTimeout(function(){n(t.resolved)&&p(null)},l.timeout))),c=!1,t.loading?t.loadingComp:t.resolved}t.contexts.push(i)}(f=t,u,i)))return function(t,e,n,r,o){var i=jt();return i.asyncFactory=t,i.asyncMeta={data:e,context:n,children:r,tag:o},i}(f,e,i,s,c);e=e||{},Me(t),r(e.model)&&function(t,e){var n=t.model&&t.model.prop||"value",o=t.model&&t.model.event||"input";(e.props||(e.props={}))[n]=e.model.value;var i=e.on||(e.on={});r(i[o])?i[o]=[e.model.callback].concat(i[o]):i[o]=e.model.callback}(t.options,e);var p=function(t,e,o){var i=e.options.props;if(!n(i)){var a={},s=t.attrs,c=t.props;if(r(s)||r(c))for(var u in i){var f=w(u);It(a,c,u,f,!0)||It(a,s,u,f,!1)}return a}}(e,t);if(o(t.options.functional))return function(t,e,n,o,i){var a={},s=t.options.props;if(r(s))for(var c in s)a[c]=Ot(c,s,e||{});else r(n.attrs)&&he(a,n.attrs),r(n.props)&&he(a,n.props);var u=Object.create(o),f=t.options.render.call(null,function(t,e,n,r){return $e(u,t,e,n,r,!0)},{data:n,props:a,children:i,parent:o,listeners:n.on||{},injections:de(t.options.inject,o),slots:function(){return Ft(i,o)}});return f instanceof Ct&&(f.functionalContext=o,f.functionalOptions=t.options,n.slot&&((f.data||(f.data={})).slot=n.slot)),f}(t,p,e,i,s);var l=e.on;if(o(t.options.abstract)){var d=e.slot;e={},d&&(e.slot=d)}!function(t){t.hook||(t.hook={});for(var e=0;e<ye.length;e++){var n=ye[e],r=t.hook[n],o=ve[n];t.hook[n]=r?ge(o,r):o}}(e);var h=t.options.name||c;return new Ct("vue-component-"+t.cid+(h?"-"+h:""),e,void 0,void 0,void 0,i,{Ctor:t,propsData:p,listeners:l,tag:c,children:s},f)}}}function ge(t,e){return function(n,r,o,i){t(n,r,o,i),e(n,r,o,i)}}var _e=1,be=2;function $e(t,e,a,s,c,u){return(Array.isArray(a)||i(a))&&(c=s,s=a,a=void 0),o(u)&&(c=be),function(t,e,o,i,a){if(r(o)&&r(o.__ob__))return jt();r(o)&&r(o.is)&&(e=o.is);if(!e)return jt();0;Array.isArray(i)&&"function"==typeof i[0]&&((o=o||{}).scopedSlots={default:i[0]},i.length=0);a===be?i=Nt(i):a===_e&&(i=function(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}(i));var s,c;if("string"==typeof e){var u;c=I.getTagNamespace(e),s=I.isReservedTag(e)?new Ct(I.parsePlatformTagName(e),o,i,void 0,void 0,t):r(u=wt(t.$options,"components",e))?me(u,o,t,i,e):new Ct(e,o,i,void 0,void 0,t)}else s=me(e,o,t,i);return r(s)?(c&&function t(e,o){e.ns=o;if("foreignObject"===e.tag)return;if(r(e.children))for(var i=0,a=e.children.length;i<a;i++){var s=e.children[i];r(s.tag)&&n(s.ns)&&t(s,o)}}(s,c),s):jt()}(t,e,a,s,c)}function we(t,e){var n,o,i,s,c;if(Array.isArray(t)||"string"==typeof t)for(n=new Array(t.length),o=0,i=t.length;o<i;o++)n[o]=e(t[o],o);else if("number"==typeof t)for(n=new Array(t),o=0;o<t;o++)n[o]=e(o+1,o);else if(a(t))for(s=Object.keys(t),n=new Array(s.length),o=0,i=s.length;o<i;o++)c=s[o],n[o]=e(t[c],c,o);return r(n)&&(n._isVList=!0),n}function Oe(t,e,n,r){var o=this.$scopedSlots[t];if(o)return n=n||{},r&&(n=A(A({},r),n)),o(n)||e;var i=this.$slots[t];return i||e}function xe(t){return wt(this.$options,"filters",t)||j}function Ae(t,e,n){var r=I.keyCodes[e]||n;return Array.isArray(r)?-1===r.indexOf(t):r!==t}function Ce(t,e,n,r,o){if(n)if(a(n)){var i;Array.isArray(n)&&(n=function(t){for(var e={},n=0;n<t.length;n++)t[n]&&A(e,t[n]);return e}(n));var s=function(a){if("class"===a||"style"===a||d(a))i=t;else{var s=t.attrs&&t.attrs.type;i=r||I.mustUseProp(e,s,a)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}a in i||(i[a]=n[a],o&&((t.on||(t.on={}))["update:"+a]=function(t){n[a]=t}))};for(var c in n)s(c)}else;return t}function ke(t,e){var n=this._staticTrees[t];return n&&!e?Array.isArray(n)?Et(n):Pt(n):(Se(n=this._staticTrees[t]=this.$options.staticRenderFns[t].call(this._renderProxy),"__static__"+t,!1),n)}function je(t,e,n){return Se(t,"__once__"+e+(n?"_"+n:""),!0),t}function Se(t,e,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)t[r]&&"string"!=typeof t[r]&&Pe(t[r],e+"_"+r,n);else Pe(t,e,n)}function Pe(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Ee(t,e){if(e)if(c(e)){var n=t.on=t.on?A({},t.on):{};for(var r in e){var o=n[r],i=e[r];n[r]=o?[].concat(i,o):i}}else;return t}var Te=0;function Me(t){var e=t.options;if(t.super){var n=Me(t.super);if(n!==t.superOptions){t.superOptions=n;var r=function(t){var e,n=t.options,r=t.extendOptions,o=t.sealedOptions;for(var i in n)n[i]!==o[i]&&(e||(e={}),e[i]=De(n[i],r[i],o[i]));return e}(t);r&&A(t.extendOptions,r),(e=t.options=$t(n,t.extendOptions)).name&&(e.components[e.name]=t)}}return e}function De(t,e,n){if(Array.isArray(t)){var r=[];n=Array.isArray(n)?n:[n],e=Array.isArray(e)?e:[e];for(var o=0;o<t.length;o++)(e.indexOf(t[o])>=0||n.indexOf(t[o])<0)&&r.push(t[o]);return r}return t}function Ie(t){this._init(t)}function Ne(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,r=n.cid,o=t._Ctor||(t._Ctor={});if(o[r])return o[r];var i=t.name||n.options.name,a=function(t){this._init(t)};return(a.prototype=Object.create(n.prototype)).constructor=a,a.cid=e++,a.options=$t(n.options,t),a.super=n,a.options.props&&function(t){var e=t.options.props;for(var n in e)se(t.prototype,"_props",n)}(a),a.options.computed&&function(t){var e=t.options.computed;for(var n in e)fe(t.prototype,n,e[n])}(a),a.extend=n.extend,a.mixin=n.mixin,a.use=n.use,M.forEach(function(t){a[t]=n[t]}),i&&(a.options.components[i]=a),a.superOptions=n.options,a.extendOptions=t,a.sealedOptions=A({},a.options),o[r]=a,a}}Ie.prototype._init=function(t){var e=this;e._uid=Te++,e._isVue=!0,t&&t._isComponent?function(t,e){var n=t.$options=Object.create(t.constructor.options);n.parent=e.parent,n.propsData=e.propsData,n._parentVnode=e._parentVnode,n._parentListeners=e._parentListeners,n._renderChildren=e._renderChildren,n._componentTag=e._componentTag,n._parentElm=e._parentElm,n._refElm=e._refElm,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}(e,t):e.$options=$t(Me(e.constructor),t||{},e),e._renderProxy=e,e._self=e,function(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){for(;n.$options.abstract&&n.$parent;)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}(e),function(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&Vt(t,e)}(e),function(t){t._vnode=null,t._staticTrees=null;var e=t.$vnode=t.$options._parentVnode,n=e&&e.context;t.$slots=Ft(t.$options._renderChildren,n),t.$scopedSlots=N,t._c=function(e,n,r,o){return $e(t,e,n,r,o,!1)},t.$createElement=function(e,n,r,o){return $e(t,e,n,r,o,!0)};var r=e&&e.data;lt(t,"$attrs",r&&r.attrs,0,!0),lt(t,"$listeners",r&&r.on,0,!0)}(e),qt(e,"beforeCreate"),function(t){var e=de(t.$options.inject,t);e&&(st.shouldConvert=!1,Object.keys(e).forEach(function(n){lt(t,n,e[n])}),st.shouldConvert=!0)}(e),ce(e),function(t){var e=t.$options.provide;e&&(t._provided="function"==typeof e?e.call(t):e)}(e),qt(e,"created"),e.$options.el&&e.$mount(e.$options.el)},function(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=dt,t.prototype.$delete=ht,t.prototype.$watch=function(t,e,n){if(c(e))return le(this,t,e,n);(n=n||{}).user=!0;var r=new oe(this,t,e,n);return n.immediate&&e.call(this,r.value),function(){r.teardown()}}}(Ie),function(t){var e=/^hook:/;t.prototype.$on=function(t,n){if(Array.isArray(t))for(var r=0,o=t.length;r<o;r++)this.$on(t[r],n);else(this._events[t]||(this._events[t]=[])).push(n),e.test(t)&&(this._hasHookEvent=!0);return this},t.prototype.$once=function(t,e){var n=this;function r(){n.$off(t,r),e.apply(n,arguments)}return r.fn=e,n.$on(t,r),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var r=0,o=t.length;r<o;r++)this.$off(t[r],e);return n}var i,a=n._events[t];if(!a)return n;if(1===arguments.length)return n._events[t]=null,n;for(var s=a.length;s--;)if((i=a[s])===e||i.fn===e){a.splice(s,1);break}return n},t.prototype.$emit=function(t){var e=this._events[t];if(e){e=e.length>1?x(e):e;for(var n=x(arguments,1),r=0,o=e.length;r<o;r++)try{e[r].apply(this,n)}catch(e){U(e,this,'event handler for "'+t+'"')}}return this}}(Ie),function(t){t.prototype._update=function(t,e){var n=this;n._isMounted&&qt(n,"beforeUpdate");var r=n.$el,o=n._vnode,i=Gt;Gt=n,n._vnode=t,o?n.$el=n.__patch__(o,t):(n.$el=n.__patch__(n.$el,t,e,!1,n.$options._parentElm,n.$options._refElm),n.$options._parentElm=n.$options._refElm=null),Gt=i,r&&(r.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){this._watcher&&this._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){qt(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||h(e.$children,t),t._watcher&&t._watcher.teardown();for(var n=t._watchers.length;n--;)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),qt(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null)}}}(Ie),function(t){t.prototype.$nextTick=function(t){return tt(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,r=n.render,o=n.staticRenderFns,i=n._parentVnode;if(e._isMounted)for(var a in e.$slots)e.$slots[a]=Et(e.$slots[a]);e.$scopedSlots=i&&i.data.scopedSlots||N,o&&!e._staticTrees&&(e._staticTrees=[]),e.$vnode=i;try{t=r.call(e._renderProxy,e.$createElement)}catch(n){U(n,e,"render function"),t=e._vnode}return t instanceof Ct||(t=jt()),t.parent=i,t},t.prototype._o=je,t.prototype._n=p,t.prototype._s=f,t.prototype._l=we,t.prototype._t=Oe,t.prototype._q=S,t.prototype._i=P,t.prototype._m=ke,t.prototype._f=xe,t.prototype._k=Ae,t.prototype._b=Ce,t.prototype._v=St,t.prototype._e=jt,t.prototype._u=Wt,t.prototype._g=Ee}(Ie);var Re=[String,RegExp,Array];function Be(t){return t&&(t.Ctor.options.name||t.tag)}function Le(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"==typeof t?t.split(",").indexOf(e)>-1:(n=t,"[object RegExp]"===s.call(n)&&t.test(e));var n}function Ue(t,e,n){for(var r in t){var o=t[r];if(o){var i=Be(o.componentOptions);i&&!n(i)&&(o!==e&&Ve(o),t[r]=null)}}}function Ve(t){t&&t.componentInstance.$destroy()}var Fe={KeepAlive:{name:"keep-alive",abstract:!0,props:{include:Re,exclude:Re},created:function(){this.cache=Object.create(null)},destroyed:function(){for(var t in this.cache)Ve(this.cache[t])},watch:{include:function(t){Ue(this.cache,this._vnode,function(e){return Le(t,e)})},exclude:function(t){Ue(this.cache,this._vnode,function(e){return!Le(t,e)})}},render:function(){var t=function(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(r(n)&&r(n.componentOptions))return n}}(this.$slots.default),e=t&&t.componentOptions;if(e){var n=Be(e);if(n&&(this.include&&!Le(this.include,n)||this.exclude&&Le(this.exclude,n)))return t;var o=null==t.key?e.Ctor.cid+(e.tag?"::"+e.tag:""):t.key;this.cache[o]?t.componentInstance=this.cache[o].componentInstance:this.cache[o]=t,t.data.keepAlive=!0}return t}}};!function(t){var e={get:function(){return I}};Object.defineProperty(t,"config",e),t.util={warn:L,extend:A,mergeOptions:$t,defineReactive:lt},t.set=dt,t.delete=ht,t.nextTick=tt,t.options=Object.create(null),M.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,A(t.options.components,Fe),function(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=x(arguments,1);return n.unshift(this),"function"==typeof t.install?t.install.apply(t,n):"function"==typeof t&&t.apply(null,n),e.push(t),this}}(t),function(t){t.mixin=function(t){return this.options=$t(this.options,t),this}}(t),Ne(t),function(t){M.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&c(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"==typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}(t)}(Ie),Object.defineProperty(Ie.prototype,"$isServer",{get:q}),Object.defineProperty(Ie.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Ie.version="2.4.1",Ie.mpvueVersion="1.0.12";var He=l("template,script,style,element,content,slot,link,meta,svg,view,a,div,img,image,text,span,richtext,input,switch,textarea,spinner,select,slider,slider-neighbor,indicator,trisition,trisition-group,canvas,list,cell,header,loading,loading-indicator,refresh,scrollable,scroller,video,web,embed,tabbar,tabheader,datepicker,timepicker,marquee,countdown",!0),We=l("style,class");l("web,spinner,switch,video,textarea,canvas,indicator,marquee,countdown",!0),l("embed,img,image,input,link,meta",!0);function Ge(t){return t&&t.$attrs?t.$attrs.mpcomid:"0"}var Je={tap:["tap","click"],touchstart:["touchstart"],touchmove:["touchmove"],touchcancel:["touchcancel"],touchend:["touchend"],longtap:["longtap"],input:["input"],blur:["change","blur"],submit:["submit"],focus:["focus"],scrolltoupper:["scrolltoupper"],scrolltolower:["scrolltolower"],scroll:["scroll"]},ze={};var Ke=Object.freeze({createElement:function(t,e){return ze},createElementNS:function(t,e){return ze},createTextNode:function(t){return ze},createComment:function(t){return ze},insertBefore:function(t,e,n){},removeChild:function(t,e){},appendChild:function(t,e){},parentNode:function(t){return ze},nextSibling:function(t){return ze},tagName:function(t){return"div"},setTextContent:function(t,e){return ze},setAttribute:function(t,e,n){return ze}}),qe={create:function(t,e){Xe(e)},update:function(t,e){t.data.ref!==e.data.ref&&(Xe(t,!0),Xe(e))},destroy:function(t){Xe(t,!0)}};function Xe(t,e){var n=t.data.ref;if(n){var r=t.context,o=t.componentInstance||t.elm,i=r.$refs;e?Array.isArray(i[n])?h(i[n],o):i[n]===o&&(i[n]=void 0):t.data.refInFor?Array.isArray(i[n])?i[n].indexOf(o)<0&&i[n].push(o):i[n]=[o]:i[n]=o}}var Ze=new Ct("",{},[]),Qe=["create","activate","update","remove","destroy"];function Ye(t,e){return t.key===e.key&&(t.tag===e.tag&&t.isComment===e.isComment&&r(t.data)===r(e.data)&&function(t,e){if("input"!==t.tag)return!0;var n,o=r(n=t.data)&&r(n=n.attrs)&&n.type,i=r(n=e.data)&&r(n=n.attrs)&&n.type;return o===i}(t,e)||o(t.isAsyncPlaceholder)&&t.asyncFactory===e.asyncFactory&&n(e.asyncFactory.error))}function tn(t,e,n){var o,i,a={};for(o=e;o<=n;++o)r(i=t[o].key)&&(a[i]=o);return a}var en=function(t){var e,a,s={},c=t.modules,u=t.nodeOps;for(e=0;e<Qe.length;++e)for(s[Qe[e]]=[],a=0;a<c.length;++a)r(c[a][Qe[e]])&&s[Qe[e]].push(c[a][Qe[e]]);function f(t){var e=u.parentNode(t);r(e)&&u.removeChild(e,t)}function p(t,e,n,i,a){if(t.isRootInsert=!a,!function(t,e,n,i){var a=t.data;if(r(a)){var c=r(t.componentInstance)&&a.keepAlive;if(r(a=a.hook)&&r(a=a.init)&&a(t,!1,n,i),r(t.componentInstance))return d(t,e),o(c)&&function(t,e,n,o){for(var i,a=t;a.componentInstance;)if(a=a.componentInstance._vnode,r(i=a.data)&&r(i=i.transition)){for(i=0;i<s.activate.length;++i)s.activate[i](Ze,a);e.push(a);break}h(n,t.elm,o)}(t,e,n,i),!0}}(t,e,n,i)){var c=t.data,f=t.children,p=t.tag;r(p)?(t.elm=t.ns?u.createElementNS(t.ns,p):u.createElement(p,t),g(t),v(t,f,e),r(c)&&m(t,e),h(n,t.elm,i)):o(t.isComment)?(t.elm=u.createComment(t.text),h(n,t.elm,i)):(t.elm=u.createTextNode(t.text),h(n,t.elm,i))}}function d(t,e){r(t.data.pendingInsert)&&(e.push.apply(e,t.data.pendingInsert),t.data.pendingInsert=null),t.elm=t.componentInstance.$el,y(t)?(m(t,e),g(t)):(Xe(t),e.push(t))}function h(t,e,n){r(t)&&(r(n)?n.parentNode===t&&u.insertBefore(t,e,n):u.appendChild(t,e))}function v(t,e,n){if(Array.isArray(e))for(var r=0;r<e.length;++r)p(e[r],n,t.elm,null,!0);else i(t.text)&&u.appendChild(t.elm,u.createTextNode(t.text))}function y(t){for(;t.componentInstance;)t=t.componentInstance._vnode;return r(t.tag)}function m(t,n){for(var o=0;o<s.create.length;++o)s.create[o](Ze,t);r(e=t.data.hook)&&(r(e.create)&&e.create(Ze,t),r(e.insert)&&n.push(t))}function g(t){for(var e,n=t;n;)r(e=n.context)&&r(e=e.$options._scopeId)&&u.setAttribute(t.elm,e,""),n=n.parent;r(e=Gt)&&e!==t.context&&r(e=e.$options._scopeId)&&u.setAttribute(t.elm,e,"")}function _(t,e,n,r,o,i){for(;r<=o;++r)p(n[r],i,t,e)}function b(t){var e,n,o=t.data;if(r(o))for(r(e=o.hook)&&r(e=e.destroy)&&e(t),e=0;e<s.destroy.length;++e)s.destroy[e](t);if(r(e=t.children))for(n=0;n<t.children.length;++n)b(t.children[n])}function $(t,e,n,o){for(;n<=o;++n){var i=e[n];r(i)&&(r(i.tag)?(w(i),b(i)):f(i.elm))}}function w(t,e){if(r(e)||r(t.data)){var n,o=s.remove.length+1;for(r(e)?e.listeners+=o:e=function(t,e){function n(){0==--n.listeners&&f(t)}return n.listeners=e,n}(t.elm,o),r(n=t.componentInstance)&&r(n=n._vnode)&&r(n.data)&&w(n,e),n=0;n<s.remove.length;++n)s.remove[n](t,e);r(n=t.data.hook)&&r(n=n.remove)?n(t,e):e()}else f(t.elm)}function O(t,e,i,a){if(t!==e){var c=e.elm=t.elm;if(o(t.isAsyncPlaceholder))r(e.asyncFactory.resolved)?C(t.elm,e,i):e.isAsyncPlaceholder=!0;else if(o(e.isStatic)&&o(t.isStatic)&&e.key===t.key&&(o(e.isCloned)||o(e.isOnce)))e.componentInstance=t.componentInstance;else{var f,l=e.data;r(l)&&r(f=l.hook)&&r(f=f.prepatch)&&f(t,e);var d=t.children,h=e.children;if(r(l)&&y(e)){for(f=0;f<s.update.length;++f)s.update[f](t,e);r(f=l.hook)&&r(f=f.update)&&f(t,e)}n(e.text)?r(d)&&r(h)?d!==h&&function(t,e,o,i,a){for(var s,c,f,l=0,d=0,h=e.length-1,v=e[0],y=e[h],m=o.length-1,g=o[0],b=o[m],w=!a;l<=h&&d<=m;)n(v)?v=e[++l]:n(y)?y=e[--h]:Ye(v,g)?(O(v,g,i),v=e[++l],g=o[++d]):Ye(y,b)?(O(y,b,i),y=e[--h],b=o[--m]):Ye(v,b)?(O(v,b,i),w&&u.insertBefore(t,v.elm,u.nextSibling(y.elm)),v=e[++l],b=o[--m]):Ye(y,g)?(O(y,g,i),w&&u.insertBefore(t,y.elm,v.elm),y=e[--h],g=o[++d]):(n(s)&&(s=tn(e,l,h)),n(c=r(g.key)?s[g.key]:null)?(p(g,i,t,v.elm),g=o[++d]):Ye(f=e[c],g)?(O(f,g,i),e[c]=void 0,w&&u.insertBefore(t,f.elm,v.elm),g=o[++d]):(p(g,i,t,v.elm),g=o[++d]));l>h?_(t,n(o[m+1])?null:o[m+1].elm,o,d,m,i):d>m&&$(0,e,l,h)}(c,d,h,i,a):r(h)?(r(t.text)&&u.setTextContent(c,""),_(c,null,h,0,h.length-1,i)):r(d)?$(0,d,0,d.length-1):r(t.text)&&u.setTextContent(c,""):t.text!==e.text&&u.setTextContent(c,e.text),r(l)&&r(f=l.hook)&&r(f=f.postpatch)&&f(t,e)}}}function x(t,e,n){if(o(n)&&r(t.parent))t.parent.data.pendingInsert=e;else for(var i=0;i<e.length;++i)e[i].data.hook.insert(e[i])}var A=l("attrs,style,class,staticClass,staticStyle,key");function C(t,n,i){if(o(n.isComment)&&r(n.asyncFactory))return n.elm=t,n.isAsyncPlaceholder=!0,!0;n.elm=t;var a=n.tag,s=n.data,c=n.children;if(r(s)&&(r(e=s.hook)&&r(e=e.init)&&e(n,!0),r(e=n.componentInstance)))return d(n,i),!0;if(r(a)){if(r(c))if(t.hasChildNodes()){for(var u=!0,f=t.firstChild,p=0;p<c.length;p++){if(!f||!C(f,c[p],i)){u=!1;break}f=f.nextSibling}if(!u||f)return!1}else v(n,c,i);if(r(s))for(var l in s)if(!A(l)){m(n,i);break}}else t.data!==n.text&&(t.data=n.text);return!0}return function(t,e,i,a,c,f){if(!n(e)){var l,d=!1,h=[];if(n(t))d=!0,p(e,h,c,f);else{var v=r(t.nodeType);if(!v&&Ye(t,e))O(t,e,h,a);else{if(v){if(1===t.nodeType&&t.hasAttribute(T)&&(t.removeAttribute(T),i=!0),o(i)&&C(t,e,h))return x(e,h,!0),t;l=t,t=new Ct(u.tagName(l).toLowerCase(),{},[],void 0,l)}var m=t.elm,g=u.parentNode(m);if(p(e,h,m._leaveCb?null:g,u.nextSibling(m)),r(e.parent)){for(var _=e.parent;_;)_.elm=e.elm,_=_.parent;if(y(e))for(var w=0;w<s.create.length;++w)s.create[w](Ze,e.parent)}r(g)?$(0,[t],0,0):r(t.tag)&&b(t)}}return x(e,h,d),e.elm}r(t)&&b(t)}}({nodeOps:Ke,modules:[qe]});function nn(t,e,n){var r,o=t.$options[e];if("onError"===e&&o&&(o=[o]),o)for(var i=0,a=o.length;i<a;i++)try{r=o[i].call(t,n)}catch(n){U(n,t,e+" hook")}return t._hasHookEvent&&t.$emit("hook:"+e),t.$children.length&&t.$children.forEach(function(t){return nn(t,e,n)}),r}function rn(t,e,n){if(t){var r,o,i;if(Array.isArray(t))for(r=t.length;r--;)"string"==typeof(o=t[r])&&(e[i=_(o)]={type:null});else if(c(t))for(var a in t)o=t[a],e[i=_(a)]=c(o)?o:{type:o};for(var s in e)if(e.hasOwnProperty(s)){var u=e[s];u.default&&(u.value=u.default);var f=u.observer;u.observer=function(t,e){n[i]=t,"function"==typeof f&&f.call(n,t,e)}}return e}}function on(t){var e=function t(e,n){void 0===n&&(n=[]);var r=(e||{}).$parent;return r?(n.unshift(Ge(r)),r.$parent?t(r,n):n):n}(t).join(","),n=e+(e?",":"")+Ge(t),r=Object.assign(function(t){return[].concat(Object.keys(t._data||{}),Object.keys(t._props||{}),Object.keys(t._mpProps||{}),Object.keys(t._computedWatchers||{})).reduce(function(e,n){return e[n]=t[n],e},{})}(t),{$k:n,$kk:n+",",$p:e}),o={};return o["$root."+n]=r,o}var an=function(t,e,n){var r,o,i,a=null,s=0;function c(){s=!1===n.leading?0:Date.now(),a=null,i=t.apply(r,o),a||(r=o=null)}return n||(n={}),function(u,f){var p=Date.now();s||!1!==n.leading||(s=p);var l=e-(p-s);return r=this,o=o?[u,Object.assign(o[1],f)]:[u,f],l<=0||l>e?(clearTimeout(a),a=null,s=p,i=t.apply(r,o),a||(r=o=null)):a||!1===n.trailing||(a=setTimeout(c,l)),i}}(function(t,e){t(e)},50);function sn(t){var e=t.$root.$mp||{},n=e.mpType;void 0===n&&(n="");var r=e.page;if("app"!==n&&r&&"function"==typeof r.setData)return r}return Ie.config.mustUseProp=function(){},Ie.config.isReservedTag=He,Ie.config.isReservedAttr=We,Ie.config.getTagNamespace=function(){},Ie.config.isUnknownElement=function(){},Ie.prototype.__patch__=function(){en.apply(this,arguments),this.$updateDataToMP()},Ie.prototype.$mount=function(t,e){var n=this,r=this.$options;if(r&&(r.render||r.mpType)){var o=r.mpType;return void 0===o&&(o="page"),this._initMP(o,function(){return Jt(n,void 0,void 0)})}return Jt(this,void 0,void 0)},Ie.prototype._initMP=function(t,n){var r=this.$root;r.$mp||(r.$mp={});var o,i,a=r.$mp;if(a.status)return"app"===t?nn(this,"onLaunch",a.appOptions):(nn(this,"onLoad",a.query),nn(this,"onReady")),n();if(a.mpType=t,a.status="register","app"===t)e.App({globalData:{appOptions:{}},handleProxy:function(t){return r.$handleProxyWithVue(t)},onLaunch:function(t){void 0===t&&(t={}),a.app=this,a.status="launch",this.globalData.appOptions=a.appOptions=t,nn(r,"onLaunch",t),n()},onShow:function(t){void 0===t&&(t={}),a.status="show",this.globalData.appOptions=a.appOptions=t,nn(r,"onShow",t)},onHide:function(){a.status="hide",nn(r,"onHide")},onError:function(t){nn(r,"onError",t)},onUniNViewMessage:function(t){nn(r,"onUniNViewMessage",t)}});else if("component"===t)i=(o=r)._mpProps={},Object.keys(o.$options.properties||{}).forEach(function(t){t in o||(se(o,"_mpProps",t),i[t]=void 0)}),pt(i,!0),e.Component({properties:function(t){var e=t.$options.properties,n=t.$options.props,r={};return rn(e,r,t),rn(n,r,t),r}(r),data:{$root:{}},methods:{handleProxy:function(t){return r.$handleProxyWithVue(t)}},created:function(){a.status="created",a.page=this},attached:function(){a.status="attached",nn(r,"attached")},ready:function(){a.status="ready",nn(r,"ready"),n(),r.$nextTick(function(){r._initDataToMP()})},moved:function(){nn(r,"moved")},detached:function(){a.status="detached",nn(r,"detached")}});else{var s=e.getApp(),c={};e.Page({data:{$root:{}},handleProxy:function(t){return r.$handleProxyWithVue(t)},onLoad:function(t){r.__wxWebviewId__=this.__wxWebviewId__,a.page=this,a.query=t,a.status="load",function(t,e){var n=e.$mp;t&&t.globalData&&(n.appOptions=t.globalData.appOptions)}(s,r),r.$options&&"function"==typeof r.$options.data&&Object.assign(r.$data,r.$options.data()),nn(r,"onLoad",t),r.$nextTick(function(){r._initDataToMP()})},onShow:function(){if(r.__wxWebviewId__=this.__wxWebviewId__,a.page=this,a.status="show",r.$needReloadPageData){var t=c[this.__wxWebviewId__];t&&Object.assign(r.$data,t),r.$needReloadPageData=!1}nn(r,"onShow")},onReady:function(){a.status="ready",nn(r,"onReady"),n()},onHide:function(){a.status="hide",nn(r,"onHide"),c[this.__wxWebviewId__]=JSON.parse(JSON.stringify(r.$data))},onUnload:function(){a.status="unload",nn(r,"onUnload"),a.page=null,delete c[this.__wxWebviewId__],r.$needReloadPageData=!0},onPullDownRefresh:function(){nn(r,"onPullDownRefresh")},onReachBottom:function(){nn(r,"onReachBottom")},onShareAppMessage:r.$options.onShareAppMessage?function(t){return nn(r,"onShareAppMessage",t)}:null,onPageScroll:function(t){nn(r,"onPageScroll",t)},onTabItemTap:function(t){nn(r,"onTabItemTap",t)},onNavigationBarButtonTap:function(t){nn(r,"onNavigationBarButtonTap",t)},onBackPress:function(){return nn(r,"onBackPress")}})}},Ie.prototype.$updateDataToMP=function(){var e=sn(this);if(e){var n=on(this);an(e.setData.bind(e),JSON.parse(JSON.stringify(function(e,n){for(var r=Object.keys(e),o={},i=0,a=r.length;i<a;++i){for(var s=r[i],c=s.split("."),u=n[c[0]],f=1,p=c.length;f<p&&void 0!==u;++f)u=u[c[f]];t(o,s,e[s],u)}return o}(n,e.data))))}},Ie.prototype._initDataToMP=function(){var t=sn(this);if(t){var e=function t(e,n){void 0===n&&(n={});var r=e.$children;return r&&r.length&&r.forEach(function(e){return t(e,n)}),Object.assign(n,on(e))}(this.$root);t.setData(JSON.parse(JSON.stringify(e)))}},Ie.prototype.$handleProxyWithVue=function(t){var e=this.$root,n=t.type,r=t.target;void 0===r&&(r={});var o=(t.currentTarget||r).dataset;void 0===o&&(o={});var i=o.comkey;void 0===i&&(i="");var a=o.eventid,s=function(t,e){void 0===e&&(e=[]);var n=e.slice(1);return n.length?n.reduce(function(t,e){for(var n=t.$children.length,r=0;r<n;r++){var o=t.$children[r];if(Ge(o)===e)return t=o}return t},t):t}(e,i.split(","));if(s){var c=Je[n]||[n],u=function t(e,n,r){void 0===r&&(r=[]);var o=[];if(!e||!e.tag)return o;var i=e||{},a=i.data;void 0===a&&(a={});var s=i.children;void 0===s&&(s=[]);var c=i.componentInstance;c?Object.keys(c.$slots).forEach(function(e){var i=c.$slots[e];(Array.isArray(i)?i:[i]).forEach(function(e){o=o.concat(t(e,n,r))})}):s.forEach(function(e){o=o.concat(t(e,n,r))});var u=a.attrs,f=a.on;return u&&f&&u.eventid===n?(r.forEach(function(t){var e=f[t];"function"==typeof e?o.push(e):Array.isArray(e)&&(o=o.concat(e))}),o):o}(s._vnode,a,c);if(u.length){var f=function(t){var e=t.type,n=t.timeStamp,r=t.touches,o=t.detail;void 0===o&&(o={});var i=t.target;void 0===i&&(i={});var a=t.currentTarget;void 0===a&&(a={});var s={mp:t,type:e,timeStamp:n,x:o.x,y:o.y,target:Object.assign({},i,o),detail:o,currentTarget:a,stopPropagation:C,preventDefault:C};return r&&r.length&&(Object.assign(s,r[0]),s.touches=r),s}(t);if(1===u.length)return u[0](f);u.forEach(function(t){return t(f)})}}},Ie},t.exports=n()}).call(e,n(4))},1:function(t,e){t.exports=function(t,e,n,r,o){var i,a=t=t||{},s=typeof t.default;"object"!==s&&"function"!==s||(i=t,a=t.default);var c,u="function"==typeof a?a.options:a;if(e&&(u.render=e.render,u.staticRenderFns=e.staticRenderFns),r&&(u._scopeId=r),o?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},u._ssrRegister=c):n&&(c=n),c){var f=u.functional,p=f?u.render:u.beforeCreate;f?u.render=function(t,e){return c.call(e),p(t,e)}:u.beforeCreate=p?[].concat(p,c):[c]}return{esModule:i,exports:a,options:u}}},10:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),n.d(e,"Store",function(){return f}),n.d(e,"install",function(){return g}),n.d(e,"mapState",function(){return _}),n.d(e,"mapMutations",function(){return b}),n.d(e,"mapGetters",function(){return $}),n.d(e,"mapActions",function(){return w}),n.d(e,"createNamespacedHelpers",function(){return O});
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var r=function(t){if(Number(t.version.split(".")[0])>=2)t.mixin({beforeCreate:n});else{var e=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[n].concat(t.init):n,e.call(this,t)}}function n(){var t=this.$options;t.store?this.$store="function"==typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}},o="undefined"!=typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function i(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}var a=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"==typeof n?n():n)||{}},s={namespaced:{configurable:!0}};s.namespaced.get=function(){return!!this._rawModule.namespaced},a.prototype.addChild=function(t,e){this._children[t]=e},a.prototype.removeChild=function(t){delete this._children[t]},a.prototype.getChild=function(t){return this._children[t]},a.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},a.prototype.forEachChild=function(t){i(this._children,t)},a.prototype.forEachGetter=function(t){this._rawModule.getters&&i(this._rawModule.getters,t)},a.prototype.forEachAction=function(t){this._rawModule.actions&&i(this._rawModule.actions,t)},a.prototype.forEachMutation=function(t){this._rawModule.mutations&&i(this._rawModule.mutations,t)},Object.defineProperties(a.prototype,s);var c=function(t){this.register([],t,!1)};c.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},c.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,n){return t+((e=e.getChild(n)).namespaced?n+"/":"")},"")},c.prototype.update=function(t){!function t(e,n,r){0;n.update(r);if(r.modules)for(var o in r.modules){if(!n.getChild(o))return void 0;t(e.concat(o),n.getChild(o),r.modules[o])}}([],this.root,t)},c.prototype.register=function(t,e,n){var r=this;void 0===n&&(n=!0);var o=new a(e,n);0===t.length?this.root=o:this.get(t.slice(0,-1)).addChild(t[t.length-1],o);e.modules&&i(e.modules,function(e,o){r.register(t.concat(o),e,n)})},c.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var u;var f=function(t){var e=this;void 0===t&&(t={}),!u&&"undefined"!=typeof window&&window.Vue&&g(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var r=t.strict;void 0===r&&(r=!1);var i=t.state;void 0===i&&(i={}),"function"==typeof i&&(i=i()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new c(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new u;var a=this,s=this.dispatch,f=this.commit;this.dispatch=function(t,e){return s.call(a,t,e)},this.commit=function(t,e,n){return f.call(a,t,e,n)},this.strict=r,v(this,i,[],this._modules.root),h(this,i),n.forEach(function(t){return t(e)}),u.config.devtools&&function(t){o&&(t._devtoolHook=o,o.emit("vuex:init",t),o.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){o.emit("vuex:mutation",t,e)}))}(this)},p={state:{configurable:!0}};function l(t,e){return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function d(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;v(t,n,[],t._modules.root,!0),h(t,n,e)}function h(t,e,n){var r=t._vm;t.getters={};var o={};i(t._wrappedGetters,function(e,n){o[n]=function(){return e(t)},Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})});var a=u.config.silent;u.config.silent=!0,t._vm=new u({data:{$$state:e},computed:o}),u.config.silent=a,t.strict&&function(t){t._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}(t),r&&(n&&t._withCommit(function(){r._data.$$state=null}),u.nextTick(function(){return r.$destroy()}))}function v(t,e,n,r,o){var i=!n.length,a=t._modules.getNamespace(n);if(r.namespaced&&(t._modulesNamespaceMap[a]=r),!i&&!o){var s=y(e,n.slice(0,-1)),c=n[n.length-1];t._withCommit(function(){u.set(s,c,r.state)})}var f=r.context=function(t,e,n){var r=""===e,o={dispatch:r?t.dispatch:function(n,r,o){var i=m(n,r,o),a=i.payload,s=i.options,c=i.type;return s&&s.root||(c=e+c),t.dispatch(c,a)},commit:r?t.commit:function(n,r,o){var i=m(n,r,o),a=i.payload,s=i.options,c=i.type;s&&s.root||(c=e+c),t.commit(c,a,s)}};return Object.defineProperties(o,{getters:{get:r?function(){return t.getters}:function(){return function(t,e){var n={},r=e.length;return Object.keys(t.getters).forEach(function(o){if(o.slice(0,r)===e){var i=o.slice(r);Object.defineProperty(n,i,{get:function(){return t.getters[o]},enumerable:!0})}}),n}(t,e)}},state:{get:function(){return y(t.state,n)}}}),o}(t,a,n);r.forEachMutation(function(e,n){!function(t,e,n,r){(t._mutations[e]||(t._mutations[e]=[])).push(function(e){n.call(t,r.state,e)})}(t,a+n,e,f)}),r.forEachAction(function(e,n){var r=e.root?n:a+n,o=e.handler||e;!function(t,e,n,r){(t._actions[e]||(t._actions[e]=[])).push(function(e,o){var i,a=n.call(t,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:t.getters,rootState:t.state},e,o);return(i=a)&&"function"==typeof i.then||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(e){throw t._devtoolHook.emit("vuex:error",e),e}):a})}(t,r,o,f)}),r.forEachGetter(function(e,n){!function(t,e,n,r){if(t._wrappedGetters[e])return void 0;t._wrappedGetters[e]=function(t){return n(r.state,r.getters,t.state,t.getters)}}(t,a+n,e,f)}),r.forEachChild(function(r,i){v(t,e,n.concat(i),r,o)})}function y(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function m(t,e,n){var r;return null!==(r=t)&&"object"==typeof r&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function g(t){u&&t===u||r(u=t)}p.state.get=function(){return this._vm._data.$$state},p.state.set=function(t){0},f.prototype.commit=function(t,e,n){var r=this,o=m(t,e,n),i=o.type,a=o.payload,s=(o.options,{type:i,payload:a}),c=this._mutations[i];c&&(this._withCommit(function(){c.forEach(function(t){t(a)})}),this._subscribers.forEach(function(t){return t(s,r.state)}))},f.prototype.dispatch=function(t,e){var n=this,r=m(t,e),o=r.type,i=r.payload,a={type:o,payload:i},s=this._actions[o];if(s)return this._actionSubscribers.forEach(function(t){return t(a,n.state)}),s.length>1?Promise.all(s.map(function(t){return t(i)})):s[0](i)},f.prototype.subscribe=function(t){return l(t,this._subscribers)},f.prototype.subscribeAction=function(t){return l(t,this._actionSubscribers)},f.prototype.watch=function(t,e,n){var r=this;return this._watcherVM.$watch(function(){return t(r.state,r.getters)},e,n)},f.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},f.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"==typeof t&&(t=[t]),this._modules.register(t,e),v(this,this.state,t,this._modules.get(t),n.preserveState),h(this,this.state)},f.prototype.unregisterModule=function(t){var e=this;"string"==typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var n=y(e.state,t.slice(0,-1));u.delete(n,t[t.length-1])}),d(this)},f.prototype.hotUpdate=function(t){this._modules.update(t),d(this,!0)},f.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(f.prototype,p);var _=A(function(t,e){var n={};return x(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var r=C(this.$store,"mapState",t);if(!r)return;e=r.context.state,n=r.context.getters}return"function"==typeof o?o.call(this,e,n):e[o]},n[r].vuex=!0}),n}),b=A(function(t,e){var n={};return x(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var r=this.$store.commit;if(t){var i=C(this.$store,"mapMutations",t);if(!i)return;r=i.context.commit}return"function"==typeof o?o.apply(this,[r].concat(e)):r.apply(this.$store,[o].concat(e))}}),n}),$=A(function(t,e){var n={};return x(e).forEach(function(e){var r=e.key,o=e.val;o=t+o,n[r]=function(){if(!t||C(this.$store,"mapGetters",t))return this.$store.getters[o]},n[r].vuex=!0}),n}),w=A(function(t,e){var n={};return x(e).forEach(function(e){var r=e.key,o=e.val;n[r]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];var r=this.$store.dispatch;if(t){var i=C(this.$store,"mapActions",t);if(!i)return;r=i.context.dispatch}return"function"==typeof o?o.apply(this,[r].concat(e)):r.apply(this.$store,[o].concat(e))}}),n}),O=function(t){return{mapState:_.bind(null,t),mapGetters:$.bind(null,t),mapMutations:b.bind(null,t),mapActions:w.bind(null,t)}};function x(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function A(t){return function(e,n){return"string"!=typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function C(t,e,n){return t._modulesNamespaceMap[n]}var k={Store:f,install:g,version:"3.0.1",mapState:_,mapMutations:b,mapGetters:$,mapActions:w,createNamespacedHelpers:O};e.default=k},2:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=function(t){return"function"==typeof t},o=/^on|^create|Sync$|Manager$|^pause/,i=["os","stopRecord","stopVoice","stopBackgroundAudio","stopPullDownRefresh","hideKeyboard","hideToast","hideLoading","showNavigationBarLoading","hideNavigationBarLoading","canIUse","navigateBack","closeSocket","pageScrollTo","drawCanvas"],a=function(t){return(!o.test(t)||"createBLEConnection"===t)&&!~i.indexOf(t)},s=function(t){return function(){for(var e=arguments.length,n=Array(e>1?e-1:0),o=1;o<e;o++)n[o-1]=arguments[o];var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r(i.success)||r(i.fail)||r(i.complete)?t.apply(void 0,[i].concat(n)):new Promise(function(e,r){t.apply(void 0,[Object.assign({},i,{success:e,fail:r})].concat(n)),Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})}}).then(function(t){return[null,t]}).catch(function(t){return[t]})}},c=1e-4,u=750,f=!1,p=0,l=0;function d(t,e){var n,r,o,i;return 0===p&&(n=wx.getSystemInfoSync(),r=n.platform,o=n.pixelRatio,i=n.windowWidth,p=i,l=o,f="ios"===r),0===t?0:(t=t/u*(e||p),0===(t=Math.floor(t+c))?1!==l&&f?.5:1:t)}var h={},v={os:{plus:!0}};"undefined"!=typeof Proxy?h=new Proxy({},{get:function(t,e){return v.hasOwnProperty(e)?v[e]:"upx2px"===e?d:wx.hasOwnProperty(e)?a(e)?s(wx[e]):wx[e]:void 0}}):(h.upx2px=d,Object.keys(v).forEach(function(t){h[t]=v[t]}),Object.keys(wx).forEach(function(t){wx.hasOwnProperty(t)&&(a(t)?h[t]=s(wx[t]):h[t]=wx[t])}));var y=h;e.default=y},38:function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(a=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[n].concat(i).concat([o]).join("\n")}var a;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<t.length;o++){var a=t[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},39:function(t,e,n){var r="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var o=n(7),i={},a=r&&(document.head||document.getElementsByTagName("head")[0]),s=null,c=0,u=!1,f=function(){},p=null,l="data-vue-ssr-id",d="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function h(t){for(var e=0;e<t.length;e++){var n=t[e],r=i[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(y(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{var a=[];for(o=0;o<n.parts.length;o++)a.push(y(n.parts[o]));i[n.id]={id:n.id,refs:1,parts:a}}}}function v(){var t=document.createElement("style");return t.type="text/css",a.appendChild(t),t}function y(t){var e,n,r=document.querySelector("style["+l+'~="'+t.id+'"]');if(r){if(u)return f;r.parentNode.removeChild(r)}if(d){var o=c++;r=s||(s=v()),e=_.bind(null,r,o,!1),n=_.bind(null,r,o,!0)}else r=v(),e=function(t,e){var n=e.css,r=e.media,o=e.sourceMap;r&&t.setAttribute("media",r);p.ssrId&&t.setAttribute(l,e.id);o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,r),n=function(){r.parentNode.removeChild(r)};return e(t),function(r){if(r){if(r.css===t.css&&r.media===t.media&&r.sourceMap===t.sourceMap)return;e(t=r)}else n()}}t.exports=function(t,e,n,r){u=n,p=r||{};var a=o(t,e);return h(a),function(e){for(var n=[],r=0;r<a.length;r++){var s=a[r];(c=i[s.id]).refs--,n.push(c)}e?h(a=o(t,e)):a=[];for(r=0;r<n.length;r++){var c;if(0===(c=n[r]).refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete i[c.id]}}}};var m,g=(m=[],function(t,e){return m[t]=e,m.filter(Boolean).join("\n")});function _(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=g(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},4:function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},7:function(t,e){t.exports=function(t,e){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=i[0],s={id:t+":"+o,css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(s):n.push(r[a]={id:a,parts:[s]})}return n}}});
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
global.webpackJsonp([2],[,,,function(t,e,a){"use strict";var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o])}return t},n=c(a(0)),r=c(a(5)),i=c(a(9)),u=a(11);function c(t){return t&&t.__esModule?t:{default:t}}n.default.prototype.$store=i.default,n.default.config.productionTip=!1,r.default.mpType="app",n.default.use(u.base),new n.default(o({store:i.default},r.default)).$mount()},,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a(8),n=a.n(o);var r=function(t){a(6)},i=a(1)(n.a,null,r,null,null);e.default=i.exports},function(t,e){},,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={onLaunch:function(){},onShow:function(){},onHide:function(){console.log("App Hide")}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=r(a(0)),n=r(a(10));function r(t){return t&&t.__esModule?t:{default:t}}o.default.use(n.default);var i=new n.default.Store({state:{is_guiz:!0}});e.default=i},,function(t,e,a){"use strict";(function(t){var a="";function o(e,o,n,r){var i=a+e;t.showLoading({title:"处理中",mask:!0}),r||(o.key=t.getStorageSync("token")),t.request({url:i,method:"POST",header:{"content-type":"application/x-www-form-urlencoded"},data:o,success:function(e){t.hideLoading(),1!=e.data.status?0!=e.data.status&&3024!=e.data.status?(t.showToast({icon:"none",title:e.data.msg}),"1020"!=e.data.status?40003!=e.data.status||t.reLaunch({url:"/pages/user_center/Login"}):setTimeout(function(){t.navigateBack({delta:1})},1e3)):n(e.data):n(e.data.data)},fail:function(){t.showToast({icon:"none",title:"接口请求异常"})}})}e.base={install:function(e,a){e.prototype.version="9.2.1",e.prototype.parseParam=function(t){var e=[];for(var a in t){var o=t[a];o.constructor==Array?o.forEach(function(t){e.push(a+"="+o)}):e.push(a+"="+o)}return e.join("&")},e.prototype.post=function(t,e,a,n){o(t,e,a,n)},e.prototype.get_TE=function(t,e){var a={};a.event=e||1,o("/api/common/getQiniuToken",a,function(e,a){t(e)})},e.prototype.Base64=n,e.prototype.getBase64Imageer=function(t){!function(t){var e=document.createElement("canvas"),a=t.width,o=t.height;a>o?a>640&&(o=Math.round(o*=640/a),a=640):o>640&&(a=Math.round(a*=640/o),o=640);e.width=a,e.height=o,e.getContext("2d").drawImage(t,0,0,a,o),e.toDataURL("image/png",.8).replace("data:image/png;base64,","")}(t)},e.prototype.time_c=function(t){var e=new Date;e.setTime(1e3*t);var a=e.getFullYear(),o=e.getMonth()+1,n=e.getDate()<10?"0"+e.getDate():e.getDate();return a+"-"+(o=o<10?"0"+o:o)+"-"+n},e.prototype.yanza={mail:function(t){var e=!1;return/^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(t)&&(e=!0),e},phone:function(t){var e=!1;return t.match(/^13[0-9]{9}|15[0-9]{9}|17[0-9]{9}|18[0-9]{9}$/)&&11==t.length&&(e=!0),e},car_t:function(t){var e=!1;return/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(t)&&(e=!0),e}},e.prototype.copyShareUrl=function(e){t.getSystemInfo({success:function(t){if("android"==t.platform){var a=plus.android.importClass("android.content.Context"),o=plus.android.runtimeMainActivity().getSystemService(a.CLIPBOARD_SERVICE);plus.android.invoke(o,"setText",e)}else{var n=plus.ios.importClass("UIPasteboard").generalPasteboard();n.plusCallMethod({setValue:e,forPasteboardType:"public.utf8-plain-text"}),n.plusCallMethod({valueForPasteboardType:"public.utf8-plain-text"})}}})},e.prototype.pz=function(e,a){var r={};r.event=a||1,o("/api/common/getQiniuToken",r,function(a,o){var r=a.token,i=a.domain;t.chooseImage({count:1,success:function(a){var o=a.tempFilePaths[0];o=n.encode(o),t.showLoading({title:"图片上传中...",mask:!0}),t.uploadFile({url:"http://up.qiniu.com/",filePath:a.tempFilePaths[0],name:"file",formData:{token:r,key:o},success:function(a){t.hideLoading();var o=JSON.parse(a.data);e(i+o.data.url)}})}})})},e.prototype.yjpz=function(e,a,r){var i={};i.event=a||1,o("/api/common/getQiniuToken",i,function(a,o){var i=a.token,u=a.domain;t.chooseImage({count:r,sourceType:["album"],success:function(a){a.tempFilePaths.map(function(a,o){var r=a;r=n.encode(r),t.showLoading({title:"图片上传中...",mask:!0}),t.uploadFile({url:"http://up.qiniu.com/",filePath:a,name:"file",formData:{token:i,key:r},success:function(a){t.hideLoading();var n=JSON.parse(a.data);e[o].url=u+n.data.url}})})}})})},e.prototype.getClipbordText=function(e){t.getSystemInfo({success:function(t){if("android"==t.platform){var a=plus.android.importClass("android.content.Context"),o=plus.android.runtimeMainActivity().getSystemService(a.CLIPBOARD_SERVICE);e(plus.android.invoke(o,"getText"))}else{var n=plus.ios.importClass("UIPasteboard").generalPasteboard().plusCallMethod({valueForPasteboardType:"public.utf8-plain-text"});console.log("ios复制返回的数据是：",n),e(n||"")}}})}}};var n={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(t){var e,a,o,r,i,u,c,s="",d=0;for(t=n._utf8_encode(t);d<t.length;)r=(e=t.charCodeAt(d++))>>2,i=(3&e)<<4|(a=t.charCodeAt(d++))>>4,u=(15&a)<<2|(o=t.charCodeAt(d++))>>6,c=63&o,isNaN(a)?u=c=64:isNaN(o)&&(c=64),s=s+this._keyStr.charAt(r)+this._keyStr.charAt(i)+this._keyStr.charAt(u)+this._keyStr.charAt(c);return s},decode:function(t){var e,a,o,r,i,u,c="",s=0;for(t=t.replace(/[^A-Za-z0-9\+\/\=]/g,"");s<t.length;)e=this._keyStr.indexOf(t.charAt(s++))<<2|(r=this._keyStr.indexOf(t.charAt(s++)))>>4,a=(15&r)<<4|(i=this._keyStr.indexOf(t.charAt(s++)))>>2,o=(3&i)<<6|(u=this._keyStr.indexOf(t.charAt(s++))),c+=String.fromCharCode(e),64!=i&&(c+=String.fromCharCode(a)),64!=u&&(c+=String.fromCharCode(o));return c=n._utf8_decode(c)},_utf8_encode:function(t){t=t.replace(/\r\n/g,"\n");for(var e="",a=0;a<t.length;a++){var o=t.charCodeAt(a);o<128?e+=String.fromCharCode(o):o>127&&o<2048?(e+=String.fromCharCode(o>>6|192),e+=String.fromCharCode(63&o|128)):(e+=String.fromCharCode(o>>12|224),e+=String.fromCharCode(o>>6&63|128),e+=String.fromCharCode(63&o|128))}return e},_utf8_decode:function(t){for(var e="",a=0,o=c1=c2=0;a<t.length;)(o=t.charCodeAt(a))<128?(e+=String.fromCharCode(o),a++):o>191&&o<224?(c2=t.charCodeAt(a+1),e+=String.fromCharCode((31&o)<<6|63&c2),a+=2):(c2=t.charCodeAt(a+1),c3=t.charCodeAt(a+2),e+=String.fromCharCode((15&o)<<12|(63&c2)<<6|63&c3),a+=3);return e}}}).call(e,a(2).default)}],[3]);
});
require('app.js');


__wxRoute = 'pages/star/qidon_index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/star/qidon_index.js';

define('pages/star/qidon_index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([3],[,,,,,,,,,,,,function(e,t,n){"use strict";var u=o(n(0)),r=o(n(13));function o(e){return e&&e.__esModule?e:{default:e}}new u.default(r.default).$mount()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var u=n(15),r=n.n(u),o=n(16);var a=function(e){n(14)},i=n(1)(r.a,o.a,a,"data-v-87072406",null);t.default=i.exports},function(e,t){},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{}},onLoad:function(){2==e.getStorageSync("diyici")?e.getStorageSync("user_info")?e.redirectTo({url:"/pages/user/denglu"}):e.redirectTo({url:"/pages/index/index"}):e.redirectTo({url:"/pages/star/index"})},components:{},methods:{},mounted:function(){}}}).call(t,n(2).default)},function(e,t,n){"use strict";var u={render:function(){var e=this.$createElement;return(this._self._c||e)("view")},staticRenderFns:[]};t.a=u}],[12]);
});
require('pages/star/qidon_index.js');
__wxRoute = 'pages/user/denglu';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/user/denglu.js';

define('pages/user/denglu.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([1],[,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";var i=a(n(0)),s=a(n(18));function a(t){return t&&t.__esModule?t:{default:t}}new i.default(s.default).$mount()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(21),s=n.n(i),a=n(22);var c=function(t){n(19),n(20)},r=n(1)(s.a,a.a,c,"data-v-7217c80a",null);e.default=r.exports},function(t,e){},function(t,e){},function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},components:{},methods:{weixin:function(){t.login({provider:"weixin",success:function(e){console.log(JSON.stringify(e)),t.getUserInfo({provider:"weixin",success:function(e){t.setStorageSync("user_info",e),t.navigateTo({url:"/pages/index/index"})}})}})}},mounted:function(){}}}).call(e,n(2).default)},function(t,e,n){"use strict";var i={render:function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"sd_jh_deer"},[e("view",{staticClass:"fz30 cf cen df_ddrtxdr"},[e("image",{staticClass:"logo_ert",attrs:{src:"../../static/img/logo.png"}}),e("br"),this._v("\n\t\t\t苍鸟防伪\n\t\t")],1),e("view",{staticClass:"form_deng"},[e("view",{staticClass:"ls sdf_jh_dert yj4 bgff fz30",attrs:{eventid:"qRU-0"},on:{click:this.weixin}},[e("image",{staticClass:"cz",attrs:{src:"../../static/img/weixin.png"}}),this._v("\n\t\t\t\t微信一键登录\n\n\t\t\t")])]),e("image",{staticClass:"qiu_deet",attrs:{src:"../../static/img/qiu.png"}})])},staticRenderFns:[]};e.a=i}],[17]);
});
require('pages/user/denglu.js');
__wxRoute = 'pages/star/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/star/index.js';

define('pages/star/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([4],{23:function(t,e,i){"use strict";var a=r(i(0)),n=r(i(24));function r(t){return t&&t.__esModule?t:{default:t}}new a.default(n.default).$mount()},24:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(26),n=i.n(a),r=i(27);var s=function(t){i(25)},c=i(1)(n.a,r.a,s,"data-v-c95ad35e",null);e.default=c.exports},25:function(t,e){},26:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:{duration:500},methods:{sd_jhgh_der:function(){t.setStorageSync("diyici","2"),t.redirectTo({url:"/pages/user/denglu"})},changeIndicatorDots:function(t){this.indicatorDots=!this.indicatorDots},changeAutoplay:function(t){this.autoplay=!this.autoplay},intervalChange:function(t){this.interval=t.detail.value},durationChange:function(t){this.duration=t.detail.value}}}}).call(e,i(2).default)},27:function(t,e,i){"use strict";var a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("view",[e("swiper",{staticClass:"sd_deeerrt",attrs:{duration:this.duration}},[e("swiper-item",{attrs:{mpcomid:"0Br-0"}},[e("image",{attrs:{src:"../../static/df_a.jpg"}})]),e("swiper-item",{attrs:{mpcomid:"VGw-1"}},[e("image",{attrs:{src:"../../static/df_b.jpg"}})]),e("swiper-item",{attrs:{mpcomid:"O6C-2"}},[e("image",{attrs:{src:"../../static/df_c.jpg",eventid:"FKc-0"},on:{click:this.sd_jhgh_der}})])],1)],1)},staticRenderFns:[]};e.a=a}},[23]);
});
require('pages/star/index.js');
__wxRoute = 'pages/check_results/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/check_results/index.js';

define('pages/check_results/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([6],{28:function(t,s,e){"use strict";var a=c(e(0)),i=c(e(29));function c(t){return t&&t.__esModule?t:{default:t}}new a.default(i.default).$mount()},29:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(31),i=e.n(a),c=e(32);var n=function(t){e(30)},l=e(1)(i.a,c.a,n,"data-v-76922594",null);s.default=l.exports},30:function(t,s){},31:function(t,s,e){"use strict";(function(t){Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{is_sdf:!0}},components:{},methods:{},mounted:function(){},onNavigationBarButtonTap:function(){t.scanCode({success:function(t){console.log("条码类型："+t.scanType),console.log("条码内容："+t.result)}})}}}).call(s,e(2).default)},32:function(t,s,e){"use strict";var a={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("view",{staticClass:"pd pt20 pm20 sdf_df_Ddff ",class:t.is_sdf?"act":""},[t._m(0),e("view",{staticClass:"pd pt20 pm20 cf_jhhddfg yj4 pr"},[t.is_sdf?e("image",{staticClass:"jiabao_der",attrs:{src:"../../static/img/jiaobiao_b.png"}}):e("image",{staticClass:"jiabao_der",attrs:{src:"../../static/img/jiaobiao.png"}}),e("image",{staticClass:"logo_eertx",attrs:{src:"../../static/img/logo.png"}}),e("view",{staticClass:"pd yj4 bgff cen pt20 pm20 \tmt50 "},[t.is_sdf?e("image",{staticClass:"success",attrs:{src:"../../static/img/close.png"}}):e("image",{staticClass:"success",attrs:{src:"../../static/img/success.png"}}),t.is_sdf?e("view",{staticClass:"z3 fz32"},[t._v("\n\t\t\t\t\t二维码已失效 "),e("text",{staticClass:"zhuse"},[t._v("谨防假冒")])]):e("view",{staticClass:"z3 fz32"},[t._v("\n\t\t\t\t\t正规商品\n\t\t\t\t")]),e("view",{staticClass:"fz26 zhuse"},[t._v("\n\t\t\t\t\t验证结果：【4047013456684270036】\n\t\t\t\t")])]),e("view",{staticClass:"pd cen fz24 ln cf mt20"},[t._v("\n\t\t\t\t您所查询的是广州物美食品有限公司所生产的\n\t\t\t\t“健齿乐健康蔬果礼包” ，经苍鸟唯一验证，为正规产品，\n\t\t\t\t请放心使用\n\t\t\t")])]),t._m(1),e("view",{staticClass:"fz20 z3 tl derf_jh_e_cert pl10"},[t._v("首次正品验证\n\t\t")]),t._m(2),e("view",{staticClass:"fz20 z3 tl derf_jh_e_cert pl10 ab mt40"},[t._v("失效验证\n\t\t\t\t")]),t._l(5,function(s,a){return e("view",{staticClass:"uyt_lit_list yj4 pd pt20 pm20 mt20 pr ab"},[e("image",{staticClass:"sd_jh_ceert yj cz fl"}),t._m(3,!0),e("image",{staticClass:"zheng_a_eerr",attrs:{src:"../../static/img/zheng_b.png"}}),e("view",{staticClass:"qc"})])})],2)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("view",{staticClass:"fmeg_def yj4"},[s("image",{attrs:{src:"../../static/img/sjhg_femian.jpg"}})])},function(){var t=this.$createElement,s=this._self._c||t;return s("view",{staticClass:"pd er_jh_der mt40"},[s("text",[this._v("查询记录")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("view",{staticClass:"uyt_lit_list yj4 pd pt20 pm20 mt20 pr"},[s("image",{staticClass:"sd_jh_ceert yj cz fl"}),s("view",{staticClass:"ov pl20 fz24 cf pt30"},[s("text",{staticClass:"ye"},[this._v("大鼻子海盗LOL")]),this._v(" 于2018-10-26 10:27:26 \n查询了本商品\n\t\t\t")]),s("image",{staticClass:"zheng_a_eerr",attrs:{src:"../../static/img/zheng_a.png"}}),s("view",{staticClass:"qc"})])},function(){var t=this.$createElement,s=this._self._c||t;return s("view",{staticClass:"ov pl20 fz24 cf pt30"},[s("text",{staticClass:"ye"},[this._v("大鼻子海盗LOL")]),this._v(" 于2018-10-26 10:27:26 \n\t\t查询了本商品\n\t\t\t\t\t")])}]};s.a=a}},[28]);
});
require('pages/check_results/index.js');
__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([5],{33:function(t,s,e){"use strict";var a=c(e(0)),i=c(e(34));function c(t){return t&&t.__esModule?t:{default:t}}new a.default(i.default).$mount()},34:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e(36),i=e.n(a),c=e(37);var n=function(t){e(35)},r=e(1)(i.a,c.a,n,"data-v-5d67b689",null);s.default=r.exports},35:function(t,s){},36:function(t,s,e){"use strict";(function(t){Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{}},components:{},methods:{saoma:function(){t.scanCode({success:function(s){t.navigateTo({url:"/pages/check_results/index"})}})}},mounted:function(){}}}).call(s,e(2).default)},37:function(t,s,e){"use strict";var a={render:function(){var t=this.$createElement,s=this._self._c||t;return s("view",{staticClass:"sd_jh_deer"},[this._m(0),s("view",{staticClass:"s_qc_derdf"},[s("view",{staticClass:"saoma_sd cen",attrs:{eventid:"k0l-0"},on:{click:this.saoma}},[s("image",{attrs:{src:"../../static/img/qc_icon.png"}}),s("view",{staticClass:"fz32 ls"},[this._v("开启扫描")])]),s("view",{staticClass:"ls cen fz32 sdf_jh_de4ert"},[this._v("\n\t\t\t苍鸟如何做到防伪唯一性\n\t\t")])]),s("view",{staticClass:"dibu_deer pt10 pm10 dx_row cen"},[this._m(1),s("view",{staticClass:"dx_col_12 ",attrs:{eventid:"kyS-1"},on:{click:this.saoma}},[s("image",{staticClass:"shouye_eet",attrs:{src:"../../static/img/bottom/dsfdsfb_a.png"}}),s("view",{staticClass:"fz26 z9"},[this._v("\n\t\t\t\t查真伪\n\t\t\t")])])])])},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("view",{staticClass:"fz30 cf cen"},[s("image",{staticClass:"logo_ert",attrs:{src:"../../static/img/logo.png"}}),s("view",{staticClass:"mt20"},[s("image",{staticClass:"sd_deerty",attrs:{src:"../../static/img/sjh_d.png"}})])])},function(){var t=this.$createElement,s=this._self._c||t;return s("view",{staticClass:"dx_col_12 "},[s("image",{staticClass:"shouye_eet",attrs:{src:"../../static/img/bottom/dsfdsfa_b.png"}}),s("view",{staticClass:"fz26 ls"},[this._v("\n\t\t\t\t首页\n\t\t\t")])])}]};s.a=a}},[33]);
});
require('pages/index/index.js');

