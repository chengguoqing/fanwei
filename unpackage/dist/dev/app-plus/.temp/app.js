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