require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([1],[,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";var s=o(n(0)),i=o(n(18));function o(t){return t&&t.__esModule?t:{default:t}}new s.default(i.default).$mount()},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(21),i=n.n(s),o=n(22),r=!1;var a=function(t){r||(n(19),n(20))},u=n(1)(i.a,o.a,a,"data-v-7217c80a",null);u.options.__file="F:\\代码\\防伪\\pages\\user\\denglu.vue",u.esModule&&Object.keys(u.esModule).some(function(t){return"default"!==t&&"__"!==t.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),u.options.functional&&console.error("[vue-loader] denglu.vue: functional components are not supported with templates, they should use render functions."),e.default=u.exports},function(t,e){},function(t,e){},function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},components:{},methods:{weixin:function(){t.login({provider:"weixin",success:function(e){console.log(JSON.stringify(e)),t.getUserInfo({provider:"weixin",success:function(e){t.setStorageSync("user_info",e),t.navigateTo({url:"/pages/index/index"})}})}})}},mounted:function(){}}}).call(e,n(2).default)},function(t,e,n){"use strict";var s=function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"sd_jh_deer"},[e("view",{staticClass:"fz30 cf cen df_ddrtxdr"},[e("image",{staticClass:"logo_ert",attrs:{src:"../../static/img/logo.png"}}),e("br"),this._v("\n\t\t\t苍鸟防伪\n\t\t")],1),e("view",{staticClass:"form_deng"},[e("view",{staticClass:"ls sdf_jh_dert yj4 bgff fz30",attrs:{eventid:"3Pq-0"},on:{click:this.weixin}},[e("image",{staticClass:"cz",attrs:{src:"../../static/img/weixin.png"}}),this._v("\n\t\t\t\t微信一键登录\n\n\t\t\t")])]),e("image",{staticClass:"qiu_deet",attrs:{src:"../../static/img/qiu.png"}})])};s._withStripped=!0;var i={render:s,staticRenderFns:[]};e.a=i}],[17]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/user/denglu.js.map