(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/tabbar/extend/extend"],{

/***/ 72:
/*!***********************************************************************************!*\
  !*** C:/projects/wechat/jnmc/main.js?{"page":"pages%2Ftabbar%2Fextend%2Fextend"} ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 4);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 2));
var _extend = _interopRequireDefault(__webpack_require__(/*! ./pages/tabbar/extend/extend.vue */ 73));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}
createPage(_extend.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 73:
/*!**************************************************************!*\
  !*** C:/projects/wechat/jnmc/pages/tabbar/extend/extend.vue ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _extend_vue_vue_type_template_id_d8a936a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./extend.vue?vue&type=template&id=d8a936a8& */ 74);
/* harmony import */ var _extend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extend.vue?vue&type=script&lang=js& */ 76);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _extend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _extend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _extend_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./extend.vue?vue&type=style&index=0&lang=css& */ 78);
/* harmony import */ var _soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../soft/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 10);

var renderjs





/* normalize component */

var component = Object(_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _extend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _extend_vue_vue_type_template_id_d8a936a8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _extend_vue_vue_type_template_id_d8a936a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _extend_vue_vue_type_template_id_d8a936a8___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "projects/wechat/jnmc/pages/tabbar/extend/extend.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 74:
/*!*********************************************************************************************!*\
  !*** C:/projects/wechat/jnmc/pages/tabbar/extend/extend.vue?vue&type=template&id=d8a936a8& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_extend_vue_vue_type_template_id_d8a936a8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../soft/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../soft/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../../soft/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../../soft/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../soft/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../soft/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./extend.vue?vue&type=template&id=d8a936a8& */ 75);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_extend_vue_vue_type_template_id_d8a936a8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_extend_vue_vue_type_template_id_d8a936a8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_extend_vue_vue_type_template_id_d8a936a8___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_extend_vue_vue_type_template_id_d8a936a8___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 75:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/projects/wechat/jnmc/pages/tabbar/extend/extend.vue?vue&type=template&id=d8a936a8& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components = {
  tuiTag: function() {
    return __webpack_require__.e(/*! import() | components/thorui/tui-tag/tui-tag */ "components/thorui/tui-tag/tui-tag").then(__webpack_require__.bind(null, /*! @/components/thorui/tui-tag/tui-tag.vue */ 88))
  },
  tuiIcon: function() {
    return __webpack_require__.e(/*! import() | components/thorui/tui-icon/tui-icon */ "components/thorui/tui-icon/tui-icon").then(__webpack_require__.bind(null, /*! @/components/thorui/tui-icon/tui-icon.vue */ 95))
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 76:
/*!***************************************************************************************!*\
  !*** C:/projects/wechat/jnmc/pages/tabbar/extend/extend.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _soft_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_extend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../soft/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../soft/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../../soft/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../../soft/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../soft/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./extend.vue?vue&type=script&lang=js& */ 77);
/* harmony import */ var _soft_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_extend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_soft_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_extend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _soft_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_extend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _soft_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_extend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_soft_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_extend_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 77:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/projects/wechat/jnmc/pages/tabbar/extend/extend.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@vue/babel-preset-app/node_modules/@babel/runtime/regenerator */ 33));











































var _vuex = __webpack_require__(/*! vuex */ 68);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}var _default =
{
  data: function data() {
    return {
      list: [],
      listOnline: [
      {
        name: '字体图标',
        desc: 'icon：常用字体图标，支持基本样式设置，支持nvue。',
        page: '/pages/extend/icon/icon',
        like: false,
        bg: this.getRandom() },

      {
        name: 'Button按钮',
        desc: 'Button按钮:可自定义宽高，设置字体大小，阴影，圆角，镂空等。',
        page: '/pages/extend/button/button',
        like: false,
        bg: this.getRandom() },

      {
        name: 'Tag标签',
        desc: 'Tag标签：可自定义大小，设置字体大小，圆角，镂空等。',
        page: '/pages/extend/tag/tag',
        like: false,
        bg: this.getRandom() },

      {
        name: 'Badge 徽章',
        desc: 'Badge：可设置成圆点或数字角标，支持缩放以及定位设置。',
        page: '/pages/extend/badge/badge',
        like: false,
        bg: this.getRandom() },

      {
        name: 'List 列表',
        desc: 'List：可设置点击效果，可设置是否显示箭头。',
        page: '/pages/extend/list/list',
        like: false,
        bg: this.getRandom() },

      {
        name: 'Card 卡片',
        desc: 'Card 卡片：根据需要设置内容，可设置是否通栏。',
        page: '/pages/extend/card/card',
        like: false,
        bg: this.getRandom() },

      {
        name: 'Grid 宫格',
        desc: 'Grid 宫格：可设置2~5列，以及基本样式设置。',
        page: '/pages/extend/grid/grid',
        like: false,
        bg: this.getRandom() },

      {
        name: 'Loading 加载',
        desc: '加载效果以及加载完成或无数据时的效果。',
        page: '/pages/extend/loading/loading',
        like: false,
        bg: this.getRandom() },

      {
        name: 'Footer 页脚',
        desc: 'Footer 页脚：支持基本样式设置，可设置是否固定在底部。',
        page: '/pages/extend/footer/footer',
        like: false,
        bg: this.getRandom() },

      {
        name: '消息提示',
        desc: '包括顶部提示，居中提示，底部提示。可切换提示框背景颜色。',
        page: '/pages/extend/msgTips/msgTips',
        like: false,
        bg: this.getRandom() },

      {
        name: '吸顶容器',
        desc: 'sticky吸顶容器，支持设置吸顶容器距离顶部距离，支持异步加载。',
        page: '/pages/extend/sticky/sticky',
        like: false,
        bg: this.getRandom() },

      {
        name: '数字键盘',
        desc: '例子包括6位数和4位数输入，长度动态传入，根据实际情况使用。',
        page: '/pages/extend/keyboard/keyboard',
        like: false,
        bg: this.getRandom() },

      {
        name: '时间轴',
        desc: 'time-axis时间轴，样式可自定义，例子实现了物流时间轴，在【thor=>日志】中也有使用。',
        page: '/pages/extend/timeaxis/timeaxis',
        like: false,
        bg: this.getRandom() },

      {
        name: '滚动消息',
        desc: '滚动消息：包括顶部通告栏，滚动新闻，以及搜索框中出现的热搜产品。',
        page: '/pages/extend/rollingNews/rollingNews',
        like: false,
        bg: this.getRandom() },

      {
        name: '弹层下拉选择',
        desc: '包含顶部下拉选择列表、输入框下拉选择以及底部分享弹层。',
        page: '/pages/extend/popup/popup',
        like: false,
        bg: this.getRandom() },

      {
        name: 'ActionSheet',
        desc: '操作菜单:可加入提示信息，可单独设置字体样式。',
        page: '/pages/extend/actionsheet/actionsheet',
        like: false,
        bg: this.getRandom() },

      {
        name: 'NumberBox',
        desc: '数字框:可设置步长，支持浮点数，支持调整样式(可单独设置)。',
        page: '/pages/extend/numberbox/numberbox',
        like: false,
        bg: this.getRandom() },

      {
        name: 'Rate评分',
        desc: 'Rate评分:可设置大小颜色，支持半星，支持手势touch选择。',
        page: '/pages/extend/rate/rate',
        like: false,
        bg: this.getRandom() },

      {
        name: 'Modal弹框',
        desc: 'Modal弹框:可设置按钮数，按钮样式，提示文字样式等，还可自定义弹框内容。',
        page: '/pages/extend/modal/modal',
        like: false,
        bg: this.getRandom() },

      {
        name: '倒计时',
        desc: '倒计时:时分秒倒计时，支持设置大小，颜色等。',
        page: '/pages/extend/countdown/countdown',
        like: false,
        bg: this.getRandom() },

      {
        name: '分隔符',
        desc: 'Divider分隔符：可设置占据高度，线条宽度，颜色等。',
        page: '/pages/extend/divider/divider',
        like: false,
        bg: this.getRandom() },

      {
        name: '卡片轮播',
        desc: '卡片轮播：包含顶部轮播，秒杀商品轮播等。',
        page: '/pages/extend/carousel/carousel',
        like: false,
        bg: this.getRandom() },

      {
        name: '回到顶部',
        desc: '回到顶部：可设置bottom，right值，可设置距离顶部多少距离显示。',
        page: '/pages/extend/goTop/goTop',
        like: false,
        bg: this.getRandom() },

      {
        name: 'alert弹框',
        desc: 'alert弹框：可设置提示文本，按钮文本及样式。',
        page: '/pages/extend/alert/alert',
        like: false,
        bg: this.getRandom() },

      {
        name: 'No Data',
        desc: '无数据提示：默认居中显示，可设置。带操作按钮，可隐藏。',
        page: '/pages/extend/nodata/nodata',
        like: false,
        bg: this.getRandom() },

      {
        name: 'toast提示',
        desc: 'toast提示：带icon提示，可隐藏，居中显示。',
        page: '/pages/extend/toast/toast',
        like: false,
        bg: this.getRandom() },

      {
        name: '表单验证',
        desc: 'Form Validation：常用的表单验证,具体查看详情。',
        page: '/pages/extend/formValidation/formValidation',
        like: false,
        bg: this.getRandom() },

      {
        name: '日期时间选择',
        desc: 'picker-view扩展，日期时间选择器，可设置默认显示，可根据需要调整选择的类型。',
        page: '/pages/extend/picker-dateTime/picker-dateTime',
        like: false,
        bg: this.getRandom() },

      {
        name: '复制文本',
        desc: 'clipboard，复制到剪贴板，兼容H5，APP和小程序依然使用平台自带api。',
        page: '/pages/extend/clipboard/clipboard',
        like: false,
        bg: this.getRandom() },

      {
        name: '悬浮按钮',
        desc: 'fab，拓展出来的按钮不应多于6个，否则违反了作为悬浮按钮的快速、高效的原则。',
        page: '/pages/extend/fab/fab',
        like: false,
        bg: this.getRandom() },

      {
        name: 'Tabbar',
        desc: 'Tabbar，类似uni-app原生tabbar组件，可用于自定义tabbar。',
        page: '/pages/extend/tabbar/tabbar',
        like: false,
        bg: this.getRandom() },

      {
        name: 'tabs标签页',
        desc: 'tabs标签页，支持设置字体颜色、字体大小、背景色、高度等。',
        page: '/pages/extend/tabs/tabs',
        like: false,
        bg: this.getRandom() },

      {
        name: '折叠面板',
        desc: 'collapse折叠面板，用来折叠/显示过长的内容或者是列表。内容及样式自定义。',
        page: '/pages/extend/collapse/collapse',
        like: false,
        bg: this.getRandom() },

      {
        name: '图片上传',
        desc: 'upload，图片上传，需要根据上传接口实际返回数据进行适当调整 。',
        page: '/pages/extend/upload/upload',
        like: false,
        bg: this.getRandom() },

      {
        name: '骨架屏',
        desc: '数据请求时常见到锁屏的loading动画，而现在越来越多的产品倾向于使用Skeleton Screen替代 。',
        page: '/pages/extend/skeleton/skeleton',
        like: false,
        bg: this.getRandom() },

      {
        name: '日历',
        desc: 'calendar日历： 可选择单个日期，可选择日期区间(可跨年跨月)，支持设置日期可选范围，支持设置状态。',
        page: '/pages/extend/calendar/calendar',
        like: false,
        bg: this.getRandom() },

      {
        name: '步骤条',
        desc: 'Steps步骤条： 支持横向与纵向以及基本样式设置。',
        page: '/pages/extend/steps/steps',
        like: false,
        bg: this.getRandom() },

      {
        name: 'drawer 抽屉',
        desc: 'drawer： 左右抽屉，内容超过一屏时建议使用scroll-view。',
        page: '/pages/extend/drawer/drawer',
        like: false,
        bg: this.getRandom() },

      {
        name: '滑动菜单',
        desc: 'swipeAction滑动菜单：actions长度为0时，插槽可直接自定义操作菜单按钮。',
        page: '/pages/extend/swipeAction/swipeAction',
        like: false,
        bg: this.getRandom() },

      {
        name: '底部导航菜单',
        desc: 'Bottom Navigation：支持二级菜单，支持暗黑模式，具体使用参考文档。',
        page: '/pages/extend/bottom-navigation/bottom-navigation',
        like: false,
        bg: this.getRandom() },

      {
        name: '级联选择',
        desc: 'Cascade Selection：支持一次性传入所有数据，支持分级请求返回数据，支持N级，直至没有下一级数据。',
        page: '/pages/extend/selection/selection',
        like: false,
        bg: this.getRandom() },

      {
        name: '圆形进度条',
        desc: 'Circular Progress：圆形进度条，可设置大小颜色等基本样式，可显示进度或自定义显示内容。',
        page: '/pages/extend/circular-progress/circular-progress',
        like: false,
        bg: this.getRandom() },

      {
        name: '图片裁剪',
        desc: 'Image Cropper：图片裁剪，组件提供了默认裁剪，可自定义操作栏。',
        page: '/pages/extend/cropper/cropper',
        like: false,
        bg: this.getRandom() },

      {
        name: 'NavBar',
        desc: 'NavBar自定义导航栏，支持自定义NavBar内容，支持渐变，支持沉浸式。',
        page: '/pages/extend/navigation-bar/navigation-bar',
        like: false,
        bg: this.getRandom() },

      {
        name: '气泡弹框',
        desc: 'Bubble Popup：最常见的右上角弹出菜单，可以做聊天对话框使用。可设置不同方向。',
        page: '/pages/extend/bubble/bubble',
        like: false,
        bg: this.getRandom() },

      {
        name: '图片组合',
        desc: 'Image Group图片组合，可设置图片宽高，圆角，偏移距离等，可设置排列方向。',
        page: '/pages/extend/image/image',
        like: false,
        bg: this.getRandom() },

      {
        name: '网络请求',
        desc: 'Network request，发起网络请求，简单的封装与使用 。',
        page: '/pages/extend/request/request',
        like: false,
        bg: this.getRandom() },

      {
        name: '抽奖转盘',
        desc: '抽奖转盘，例子使用随机值进行抽奖，可以指定中奖奖项。',
        page: '/pages/extend/luckdraw/luckdraw',
        like: false,
        bg: this.getRandom() },

      {
        name: '新闻模板',
        desc: '新闻模板包含：新闻列表，新闻详情，评论等。',
        page: '/pages/template/news/index/index',
        like: false,
        bg: this.getRandom() },

      {
        name: '聊天模板',
        desc: '聊天模板包含：消息列表，好友列表，聊天界面等。',
        page: '/pages/template/chat/msgList/msgList',
        like: false,
        bg: this.getRandom() },

      {
        name: '商城模板',
        desc: '商城模板包含：商城首页，商城列表，商城详情，购物车等。',
        page: '/pages/template/mall/mall/mall',
        like: false,
        bg: this.getRandom() },

      {
        name: '模板',
        desc: '计划前三套模板：新闻，聊天，商城。敬请期待！',
        page: '/pages/extend/template/template',
        like: false,
        bg: this.getRandom() }] };



  },
  computed: _objectSpread({},
  (0, _vuex.mapState)(['networkConnected', 'isOnline'])),

  watch: {
    networkConnected: function networkConnected(isConnected) {
      if (isConnected) {
        this.statusChange();
      }
    },
    isOnline: function isOnline(val) {
      if (val) {
        this.statusChange();
      }
    } },

  onLoad: function onLoad() {
    this.statusChange();
  },
  methods: _objectSpread({},
  (0, _vuex.mapActions)(['getOnlineStatus']), {
    statusChange: function statusChange() {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var isOnline;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (
                  _this.getOnlineStatus());case 2:isOnline = _context.sent;
                if (isOnline) {
                  _this.list = _this.listOnline;
                } else {
                  _this.list = _this.listOnline.splice(0, 48);
                }case 4:case "end":return _context.stop();}}}, _callee);}))();
    },
    getRandom: function getRandom(index) {
      var rnd = Math.floor(Math.random() * 6 + 1);
      return rnd;
    },
    detail: function detail(pageUrl) {
      this.tui.href(pageUrl);
    },
    like: function like(index) {
      this.$set(this.list[index], 'like', !this.list[index].like);
    },
    onshare: function onshare(e) {
















      return false;
    } }),

  onShareAppMessage: function onShareAppMessage(e) {
    var index = e.target.dataset.id;
    var title = this.list[index].name;
    return {
      title: title };

  } };exports.default = _default;

/***/ }),

/***/ 78:
/*!***********************************************************************************************!*\
  !*** C:/projects/wechat/jnmc/pages/tabbar/extend/extend.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _soft_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_soft_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_soft_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_extend_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../soft/HBuilderX/plugins/uniapp-cli/node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!../../../../../../soft/HBuilderX/plugins/uniapp-cli/node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../../../../../../soft/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../soft/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!../../../../../../soft/HBuilderX/plugins/uniapp-cli/node_modules/postcss-loader/src??ref--6-oneOf-1-3!../../../../../../soft/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../../soft/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./extend.vue?vue&type=style&index=0&lang=css& */ 79);
/* harmony import */ var _soft_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_soft_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_soft_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_extend_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_soft_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_soft_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_soft_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_extend_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _soft_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_soft_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_soft_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_extend_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _soft_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_soft_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_soft_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_extend_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_soft_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_soft_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_soft_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_soft_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_extend_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 79:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/projects/wechat/jnmc/pages/tabbar/extend/extend.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[72,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../../.sourcemap/mp-weixin/pages/tabbar/extend/extend.js.map