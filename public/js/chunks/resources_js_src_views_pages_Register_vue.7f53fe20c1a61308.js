"use strict";
(self["webpackChunkmaterio_vuetify_vuejs_laravel_admin_template_free"] = self["webpackChunkmaterio_vuetify_vuejs_laravel_admin_template_free"] || []).push([["resources_js_src_views_pages_Register_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/pages/Register.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/pages/Register.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mdi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mdi/js */ "./node_modules/@mdi/js/mdi.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// eslint-disable-next-line object-curly-newline


/* harmony default export */ __webpack_exports__["default"] = ({
  setup: function setup() {
    var isPasswordVisible = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var username = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var email = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var password = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__.ref)('');
    var socialLink = [{
      icon: _mdi_js__WEBPACK_IMPORTED_MODULE_1__.mdiFacebook,
      color: '#4267b2',
      colorInDark: '#4267b2'
    }, {
      icon: _mdi_js__WEBPACK_IMPORTED_MODULE_1__.mdiTwitter,
      color: '#1da1f2',
      colorInDark: '#1da1f2'
    }, {
      icon: _mdi_js__WEBPACK_IMPORTED_MODULE_1__.mdiGithub,
      color: '#272727',
      colorInDark: '#fff'
    }, {
      icon: _mdi_js__WEBPACK_IMPORTED_MODULE_1__.mdiGoogle,
      color: '#db4437',
      colorInDark: '#db4437'
    }];
    return {
      isPasswordVisible: isPasswordVisible,
      username: username,
      email: email,
      password: password,
      socialLink: socialLink,
      icons: {
        mdiEyeOutline: _mdi_js__WEBPACK_IMPORTED_MODULE_1__.mdiEyeOutline,
        mdiEyeOffOutline: _mdi_js__WEBPACK_IMPORTED_MODULE_1__.mdiEyeOffOutline
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/pages/Register.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/pages/Register.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".auth-wrapper {\n  display: flex;\n  min-height: calc(var(--vh, 1vh) * 100);\n  width: 100%;\n  flex-basis: 100%;\n  align-items: center;\n}\n.auth-wrapper a {\n  text-decoration: unset;\n}\n.auth-wrapper.auth-v1 {\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  padding: 1.5rem;\n}\n.auth-wrapper.auth-v1 .auth-mask-bg {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n}\n.auth-wrapper.auth-v1 .auth-tree,\n.auth-wrapper.auth-v1 .auth-tree-3 {\n  position: absolute;\n}\n.auth-wrapper.auth-v1 .auth-tree {\n  bottom: 0;\n  left: 0;\n}\n.auth-wrapper.auth-v1 .auth-tree-3 {\n  bottom: 0;\n  right: 0;\n}\n.auth-wrapper.auth-v1 .auth-inner {\n  width: 28rem;\n  z-index: 1;\n}\n.auth-wrapper.auth-v1 .auth-inner .auth-card {\n  padding: 0.9375rem 0.875rem;\n}\n@media (max-width: 600px) {\n.auth-v1 .auth-tree,\n.auth-v1 .auth-tree-3,\n.auth-v1 .auth-mask-bg {\n    display: none;\n}\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/pages/Register.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/pages/Register.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/pages/Register.vue?vue&type=style&index=0&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/views/pages/Register.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/pages/Register.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/pages/Register.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/Register.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/pages/Register.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/pages/Register.vue?vue&type=style&index=0&lang=scss&");


/***/ }),

/***/ "./resources/js/src/views/pages/Register.vue?vue&type=template&id=09126b38&":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/pages/Register.vue?vue&type=template&id=09126b38& ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_09126b38___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_09126b38___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_09126b38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Register.vue?vue&type=template&id=09126b38& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/pages/Register.vue?vue&type=template&id=09126b38&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/pages/Register.vue?vue&type=template&id=09126b38&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/pages/Register.vue?vue&type=template&id=09126b38& ***!
  \*************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "auth-wrapper auth-v1" },
    [
      _c(
        "div",
        { staticClass: "auth-inner" },
        [
          _c(
            "v-card",
            { staticClass: "auth-card" },
            [
              _c(
                "v-card-title",
                { staticClass: "d-flex align-center justify-center py-7" },
                [
                  _c(
                    "router-link",
                    { staticClass: "d-flex align-center", attrs: { to: "/" } },
                    [
                      _c("v-img", {
                        staticClass: "me-3",
                        attrs: {
                          src: (__webpack_require__(/*! @/assets/images/logos/logo.svg */ "./resources/js/src/assets/images/logos/logo.svg")["default"]),
                          "max-height": "30px",
                          "max-width": "30px",
                          alt: "logo",
                          contain: "",
                        },
                      }),
                      _vm._v(" "),
                      _c(
                        "h2",
                        { staticClass: "text-2xl font-weight-semibold" },
                        [_vm._v("Materio")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("v-card-text", [
                _c(
                  "p",
                  {
                    staticClass:
                      "text-2xl font-weight-semibold text--primary mb-2",
                  },
                  [_vm._v("Adventure starts here 🚀")]
                ),
                _vm._v(" "),
                _c("p", { staticClass: "mb-2" }, [
                  _vm._v("Make your app management easy and fun!"),
                ]),
              ]),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "v-form",
                    [
                      _c("v-text-field", {
                        staticClass: "mb-3",
                        attrs: {
                          outlined: "",
                          label: "Username",
                          placeholder: "JohnDoe",
                          "hide-details": "",
                        },
                        model: {
                          value: _vm.username,
                          callback: function ($$v) {
                            _vm.username = $$v
                          },
                          expression: "username",
                        },
                      }),
                      _vm._v(" "),
                      _c("v-text-field", {
                        staticClass: "mb-3",
                        attrs: {
                          outlined: "",
                          label: "Email",
                          placeholder: "john@example.com",
                          "hide-details": "",
                        },
                        model: {
                          value: _vm.email,
                          callback: function ($$v) {
                            _vm.email = $$v
                          },
                          expression: "email",
                        },
                      }),
                      _vm._v(" "),
                      _c("v-text-field", {
                        attrs: {
                          outlined: "",
                          type: _vm.isPasswordVisible ? "text" : "password",
                          label: "Password",
                          placeholder: "············",
                          "append-icon": _vm.isPasswordVisible
                            ? _vm.icons.mdiEyeOffOutline
                            : _vm.icons.mdiEyeOutline,
                          "hide-details": "",
                        },
                        on: {
                          "click:append": function ($event) {
                            _vm.isPasswordVisible = !_vm.isPasswordVisible
                          },
                        },
                        model: {
                          value: _vm.password,
                          callback: function ($$v) {
                            _vm.password = $$v
                          },
                          expression: "password",
                        },
                      }),
                      _vm._v(" "),
                      _c("v-checkbox", {
                        staticClass: "mt-1",
                        attrs: { "hide-details": "" },
                        scopedSlots: _vm._u([
                          {
                            key: "label",
                            fn: function () {
                              return [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "d-flex align-center flex-wrap",
                                  },
                                  [
                                    _c("span", { staticClass: "me-2" }, [
                                      _vm._v("I agree to"),
                                    ]),
                                    _c(
                                      "a",
                                      { attrs: { href: "javascript:void(0)" } },
                                      [_vm._v("privacy policy & terms")]
                                    ),
                                  ]
                                ),
                              ]
                            },
                            proxy: true,
                          },
                        ]),
                      }),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticClass: "mt-6",
                          attrs: { block: "", color: "primary" },
                        },
                        [_vm._v(" Sign Up ")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                {
                  staticClass:
                    "d-flex align-center justify-center flex-wrap mt-2",
                },
                [
                  _c("span", { staticClass: "me-2" }, [
                    _vm._v(" Already have an account? "),
                  ]),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    { attrs: { to: { name: "pages-login" } } },
                    [_vm._v(" Sign in instead ")]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                { staticClass: "d-flex align-center mt-2" },
                [
                  _c("v-divider"),
                  _vm._v(" "),
                  _c("span", { staticClass: "mx-5" }, [_vm._v("or")]),
                  _vm._v(" "),
                  _c("v-divider"),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-actions",
                { staticClass: "d-flex justify-center" },
                _vm._l(_vm.socialLink, function (link) {
                  return _c(
                    "v-btn",
                    {
                      key: link.icon,
                      staticClass: "ms-1",
                      attrs: { icon: "" },
                    },
                    [
                      _c(
                        "v-icon",
                        {
                          attrs: {
                            color: _vm.$vuetify.theme.dark
                              ? link.colorInDark
                              : link.color,
                          },
                        },
                        [
                          _vm._v(
                            "\n            " +
                              _vm._s(link.icon) +
                              "\n          "
                          ),
                        ]
                      ),
                    ],
                    1
                  )
                }),
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c("img", {
        staticClass: "auth-mask-bg",
        attrs: {
          height: "190",
          src: __webpack_require__("./resources/js/src/assets/images/misc sync recursive ^\\.\\/mask\\-.*\\.png$")("./mask-" +
            (_vm.$vuetify.theme.dark ? "dark" : "light") +
            ".png").default,
        },
      }),
      _vm._v(" "),
      _c("v-img", {
        staticClass: "auth-tree",
        attrs: {
          width: "247",
          height: "185",
          src: (__webpack_require__(/*! @/assets/images/misc/tree.png */ "./resources/js/src/assets/images/misc/tree.png")["default"]),
        },
      }),
      _vm._v(" "),
      _c("v-img", {
        staticClass: "auth-tree-3",
        attrs: {
          width: "377",
          height: "289",
          src: (__webpack_require__(/*! @/assets/images/misc/tree-3.png */ "./resources/js/src/assets/images/misc/tree-3.png")["default"]),
        },
      }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/pages/Register.vue":
/*!***************************************************!*\
  !*** ./resources/js/src/views/pages/Register.vue ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_09126b38___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=09126b38& */ "./resources/js/src/views/pages/Register.vue?vue&type=template&id=09126b38&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/Register.vue?vue&type=script&lang=js&");
/* harmony import */ var _Register_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Register.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/views/pages/Register.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/VBtn.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/VCard.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VCheckbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VCheckbox */ "./node_modules/vuetify/lib/components/VCheckbox/VCheckbox.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/VDivider.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/VForm.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/VIcon.js");
/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VImg */ "./node_modules/vuetify/lib/components/VImg/VImg.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/VTextField.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_09126b38___WEBPACK_IMPORTED_MODULE_0__.render,
  _Register_vue_vue_type_template_id_09126b38___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */
;











_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_5__["default"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__["default"],VCardActions: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_7__.VCardActions,VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_7__.VCardText,VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_7__.VCardTitle,VCheckbox: vuetify_lib_components_VCheckbox__WEBPACK_IMPORTED_MODULE_8__["default"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_9__["default"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_10__["default"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_11__["default"],VImg: vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_12__["default"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_13__["default"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ })

}]);