(self["webpackChunkmaterio_vuetify_vuejs_laravel_admin_template_free"] = self["webpackChunkmaterio_vuetify_vuejs_laravel_admin_template_free"] || []).push([["resources_js_src_views_pages_account-settings_profile_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/pages/account-settings/AccountSettingsAccount.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/pages/account-settings/AccountSettingsAccount.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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



/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    accountData: {
      type: Object,
      "default": function _default() {}
    }
  },
  setup: function setup(props) {
    var status = ['Active', 'Inactive', 'Pending', 'Closed'];
    var accountDataLocale = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__.ref)(JSON.parse(JSON.stringify(props.accountData)));
    var resetForm = function resetForm() {
      accountDataLocale.value = JSON.parse(JSON.stringify(props.accountData));
    };
    return {
      status: status,
      accountDataLocale: accountDataLocale,
      resetForm: resetForm,
      icons: {
        mdiAlertOutline: _mdi_js__WEBPACK_IMPORTED_MODULE_1__.mdiAlertOutline,
        mdiCloudUploadOutline: _mdi_js__WEBPACK_IMPORTED_MODULE_1__.mdiCloudUploadOutline
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/pages/account-settings/AccountSettingsInfo.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/pages/account-settings/AccountSettingsInfo.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    informationData: {
      type: Object,
      "default": function _default() {}
    }
  },
  setup: function setup(props) {
    var optionsLocal = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__.ref)(JSON.parse(JSON.stringify(props.informationData)));
    var resetForm = function resetForm() {
      optionsLocal.value = JSON.parse(JSON.stringify(props.informationData));
    };
    return {
      optionsLocal: optionsLocal,
      resetForm: resetForm
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/pages/account-settings/AccountSettingsSecurity.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/pages/account-settings/AccountSettingsSecurity.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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

// eslint-disable-next-line object-curly-newline


/* harmony default export */ __webpack_exports__["default"] = ({
  setup: function setup() {
    var isCurrentPasswordVisible = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var isNewPasswordVisible = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var isCPasswordVisible = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__.ref)(false);
    var currentPassword = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__.ref)('12345678');
    var newPassword = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__.ref)('87654321');
    var cPassword = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_0__.ref)('87654321');
    return {
      isCurrentPasswordVisible: isCurrentPasswordVisible,
      isNewPasswordVisible: isNewPasswordVisible,
      currentPassword: currentPassword,
      isCPasswordVisible: isCPasswordVisible,
      newPassword: newPassword,
      cPassword: cPassword,
      icons: {
        mdiKeyOutline: _mdi_js__WEBPACK_IMPORTED_MODULE_1__.mdiKeyOutline,
        mdiLockOpenOutline: _mdi_js__WEBPACK_IMPORTED_MODULE_1__.mdiLockOpenOutline,
        mdiEyeOffOutline: _mdi_js__WEBPACK_IMPORTED_MODULE_1__.mdiEyeOffOutline,
        mdiEyeOutline: _mdi_js__WEBPACK_IMPORTED_MODULE_1__.mdiEyeOutline
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/pages/account-settings/profile.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/pages/account-settings/profile.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mdi_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mdi/js */ "./node_modules/@mdi/js/mdi.js");
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vue/composition-api */ "./node_modules/@vue/composition-api/dist/vue-composition-api.mjs");
/* harmony import */ var _AccountSettingsAccount_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccountSettingsAccount.vue */ "./resources/js/src/views/pages/account-settings/AccountSettingsAccount.vue");
/* harmony import */ var _AccountSettingsSecurity_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccountSettingsSecurity.vue */ "./resources/js/src/views/pages/account-settings/AccountSettingsSecurity.vue");
/* harmony import */ var _AccountSettingsInfo_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AccountSettingsInfo.vue */ "./resources/js/src/views/pages/account-settings/AccountSettingsInfo.vue");
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




// demos



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    AccountSettingsAccount: _AccountSettingsAccount_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    AccountSettingsSecurity: _AccountSettingsSecurity_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    AccountSettingsInfo: _AccountSettingsInfo_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  setup: function setup() {
    var tab = (0,_vue_composition_api__WEBPACK_IMPORTED_MODULE_3__.ref)('');

    // tabs
    var tabs = [{
      title: 'Account',
      icon: _mdi_js__WEBPACK_IMPORTED_MODULE_4__.mdiAccountOutline
    }, {
      title: 'Security',
      icon: _mdi_js__WEBPACK_IMPORTED_MODULE_4__.mdiLockOpenOutline
    }, {
      title: 'Info',
      icon: _mdi_js__WEBPACK_IMPORTED_MODULE_4__.mdiInformationOutline
    }];

    // account settings data
    var accountSettingData = {
      account: {
        avatarImg: (__webpack_require__(/*! @/assets/images/avatars/1.png */ "./resources/js/src/assets/images/avatars/1.png")["default"]),
        username: 'johnDoe',
        name: 'john Doe',
        email: 'johnDoe@example.com',
        role: 'Admin',
        status: 'Active',
        company: 'Google.inc'
      },
      information: {
        bio: 'The name’s John Deo. I am a tireless seeker of knowledge, occasional purveyor of wisdom and also, coincidentally, a graphic designer. Algolia helps businesses across industries quickly create relevant 😎, scaLabel 😀, and lightning 😍 fast search and discovery experiences.',
        birthday: 'February 22, 1995',
        phone: '954-006-0844',
        website: 'https://themeselection.com/',
        country: 'USA',
        languages: ['English', 'Spanish'],
        gender: 'male'
      }
    };
    return {
      tab: tab,
      tabs: tabs,
      accountSettingData: accountSettingData,
      icons: {
        mdiAccountOutline: _mdi_js__WEBPACK_IMPORTED_MODULE_4__.mdiAccountOutline,
        mdiLockOpenOutline: _mdi_js__WEBPACK_IMPORTED_MODULE_4__.mdiLockOpenOutline,
        mdiInformationOutline: _mdi_js__WEBPACK_IMPORTED_MODULE_4__.mdiInformationOutline
      }
    };
  }
});

/***/ }),

/***/ "./resources/js/src/assets/images/3d-characters/pose-m-1.png":
/*!*******************************************************************!*\
  !*** ./resources/js/src/assets/images/3d-characters/pose-m-1.png ***!
  \*******************************************************************/
/***/ (function(module) {

module.exports = "/images/pose-m-1.png?547d2e96e65471e3f8aa68001a550d59";

/***/ }),

/***/ "./resources/js/src/assets/images/avatars/1.png":
/*!******************************************************!*\
  !*** ./resources/js/src/assets/images/avatars/1.png ***!
  \******************************************************/
/***/ (function(module) {

module.exports = "/images/1.png?d79cbd6eda5ee96bfdfc8773ab6c1ee7";

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/pages/account-settings/AccountSettingsSecurity.vue?vue&type=style&index=0&id=0da4d34e&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/pages/account-settings/AccountSettingsSecurity.vue?vue&type=style&index=0&id=0da4d34e&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".two-factor-auth[data-v-0da4d34e] {\n  max-width: 25rem;\n}\n.security-character[data-v-0da4d34e] {\n  position: absolute;\n  bottom: -0.5rem;\n}", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/pages/account-settings/AccountSettingsSecurity.vue?vue&type=style&index=0&id=0da4d34e&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/pages/account-settings/AccountSettingsSecurity.vue?vue&type=style&index=0&id=0da4d34e&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingsSecurity_vue_vue_type_style_index_0_id_0da4d34e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AccountSettingsSecurity.vue?vue&type=style&index=0&id=0da4d34e&lang=scss&scoped=true& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/pages/account-settings/AccountSettingsSecurity.vue?vue&type=style&index=0&id=0da4d34e&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingsSecurity_vue_vue_type_style_index_0_id_0da4d34e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingsSecurity_vue_vue_type_style_index_0_id_0da4d34e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/src/views/pages/account-settings/AccountSettingsAccount.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/account-settings/AccountSettingsAccount.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingsAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AccountSettingsAccount.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/pages/account-settings/AccountSettingsAccount.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingsAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/account-settings/AccountSettingsInfo.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/account-settings/AccountSettingsInfo.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingsInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AccountSettingsInfo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/pages/account-settings/AccountSettingsInfo.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingsInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/account-settings/AccountSettingsSecurity.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/account-settings/AccountSettingsSecurity.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingsSecurity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AccountSettingsSecurity.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/pages/account-settings/AccountSettingsSecurity.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingsSecurity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/account-settings/profile.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/pages/account-settings/profile.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./profile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/pages/account-settings/profile.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/pages/account-settings/AccountSettingsSecurity.vue?vue&type=style&index=0&id=0da4d34e&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/account-settings/AccountSettingsSecurity.vue?vue&type=style&index=0&id=0da4d34e&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_11_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingsSecurity_vue_vue_type_style_index_0_id_0da4d34e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader/dist/cjs.js!../../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!../../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AccountSettingsSecurity.vue?vue&type=style&index=0&id=0da4d34e&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-11[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/pages/account-settings/AccountSettingsSecurity.vue?vue&type=style&index=0&id=0da4d34e&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/src/views/pages/account-settings/AccountSettingsAccount.vue?vue&type=template&id=208d84b8&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/account-settings/AccountSettingsAccount.vue?vue&type=template&id=208d84b8& ***!
  \*****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingsAccount_vue_vue_type_template_id_208d84b8___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingsAccount_vue_vue_type_template_id_208d84b8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingsAccount_vue_vue_type_template_id_208d84b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AccountSettingsAccount.vue?vue&type=template&id=208d84b8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/pages/account-settings/AccountSettingsAccount.vue?vue&type=template&id=208d84b8&");


/***/ }),

/***/ "./resources/js/src/views/pages/account-settings/AccountSettingsInfo.vue?vue&type=template&id=75d08547&":
/*!**************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/account-settings/AccountSettingsInfo.vue?vue&type=template&id=75d08547& ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingsInfo_vue_vue_type_template_id_75d08547___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingsInfo_vue_vue_type_template_id_75d08547___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingsInfo_vue_vue_type_template_id_75d08547___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AccountSettingsInfo.vue?vue&type=template&id=75d08547& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/pages/account-settings/AccountSettingsInfo.vue?vue&type=template&id=75d08547&");


/***/ }),

/***/ "./resources/js/src/views/pages/account-settings/AccountSettingsSecurity.vue?vue&type=template&id=0da4d34e&scoped=true&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/account-settings/AccountSettingsSecurity.vue?vue&type=template&id=0da4d34e&scoped=true& ***!
  \******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingsSecurity_vue_vue_type_template_id_0da4d34e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingsSecurity_vue_vue_type_template_id_0da4d34e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountSettingsSecurity_vue_vue_type_template_id_0da4d34e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AccountSettingsSecurity.vue?vue&type=template&id=0da4d34e&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/pages/account-settings/AccountSettingsSecurity.vue?vue&type=template&id=0da4d34e&scoped=true&");


/***/ }),

/***/ "./resources/js/src/views/pages/account-settings/profile.vue?vue&type=template&id=12dbccd2&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/src/views/pages/account-settings/profile.vue?vue&type=template&id=12dbccd2& ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_template_id_12dbccd2___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_template_id_12dbccd2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_profile_vue_vue_type_template_id_12dbccd2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./profile.vue?vue&type=template&id=12dbccd2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/pages/account-settings/profile.vue?vue&type=template&id=12dbccd2&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/pages/account-settings/AccountSettingsAccount.vue?vue&type=template&id=208d84b8&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/pages/account-settings/AccountSettingsAccount.vue?vue&type=template&id=208d84b8& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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
    "v-card",
    { staticClass: "pa-3 mt-2", attrs: { flat: "" } },
    [
      _c(
        "v-card-text",
        { staticClass: "d-flex" },
        [
          _c(
            "v-avatar",
            { staticClass: "me-6", attrs: { rounded: "", size: "120" } },
            [_c("v-img", { attrs: { src: _vm.accountDataLocale.avatarImg } })],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            [
              _c(
                "v-btn",
                {
                  staticClass: "me-3 mt-5",
                  attrs: { color: "primary" },
                  on: {
                    click: function ($event) {
                      return _vm.$refs.refInputEl.click()
                    },
                  },
                },
                [
                  _c("v-icon", { staticClass: "d-sm-none" }, [
                    _vm._v(
                      "\n          " +
                        _vm._s(_vm.icons.mdiCloudUploadOutline) +
                        "\n        "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "d-none d-sm-block" }, [
                    _vm._v("Upload new photo"),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _c("input", {
                ref: "refInputEl",
                attrs: {
                  type: "file",
                  accept: ".jpeg,.png,.jpg,GIF",
                  hidden: true,
                },
              }),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  staticClass: "mt-5",
                  attrs: { color: "error", outlined: "" },
                },
                [_vm._v("\n        Reset\n      ")]
              ),
              _vm._v(" "),
              _c("p", { staticClass: "text-sm mt-5" }, [
                _vm._v(
                  "\n        Allowed JPG, GIF or PNG. Max size of 800K\n      "
                ),
              ]),
            ],
            1
          ),
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-card-text",
        [
          _c(
            "v-form",
            { staticClass: "multi-col-validation mt-6" },
            [
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { attrs: { md: "6", cols: "12" } },
                    [
                      _c("v-text-field", {
                        attrs: { label: "Username", dense: "", outlined: "" },
                        model: {
                          value: _vm.accountDataLocale.username,
                          callback: function ($$v) {
                            _vm.$set(_vm.accountDataLocale, "username", $$v)
                          },
                          expression: "accountDataLocale.username",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { md: "6", cols: "12" } },
                    [
                      _c("v-text-field", {
                        attrs: { label: "Name", dense: "", outlined: "" },
                        model: {
                          value: _vm.accountDataLocale.name,
                          callback: function ($$v) {
                            _vm.$set(_vm.accountDataLocale, "name", $$v)
                          },
                          expression: "accountDataLocale.name",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "6" } },
                    [
                      _c("v-text-field", {
                        attrs: { label: "E-mail", dense: "", outlined: "" },
                        model: {
                          value: _vm.accountDataLocale.email,
                          callback: function ($$v) {
                            _vm.$set(_vm.accountDataLocale, "email", $$v)
                          },
                          expression: "accountDataLocale.email",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "6" } },
                    [
                      _c("v-text-field", {
                        attrs: { dense: "", label: "Role", outlined: "" },
                        model: {
                          value: _vm.accountDataLocale.role,
                          callback: function ($$v) {
                            _vm.$set(_vm.accountDataLocale, "role", $$v)
                          },
                          expression: "accountDataLocale.role",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "6" } },
                    [
                      _c("v-select", {
                        attrs: {
                          dense: "",
                          outlined: "",
                          label: "Status",
                          items: _vm.status,
                        },
                        model: {
                          value: _vm.accountDataLocale.status,
                          callback: function ($$v) {
                            _vm.$set(_vm.accountDataLocale, "status", $$v)
                          },
                          expression: "accountDataLocale.status",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "6" } },
                    [
                      _c("v-text-field", {
                        attrs: { dense: "", outlined: "", label: "Company" },
                        model: {
                          value: _vm.accountDataLocale.company,
                          callback: function ($$v) {
                            _vm.$set(_vm.accountDataLocale, "company", $$v)
                          },
                          expression: "accountDataLocale.company",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12" } },
                    [
                      _c(
                        "v-alert",
                        {
                          staticClass: "mb-0",
                          attrs: { color: "warning", text: "" },
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "d-flex align-start" },
                            [
                              _c("v-icon", { attrs: { color: "warning" } }, [
                                _vm._v(
                                  "\n                " +
                                    _vm._s(_vm.icons.mdiAlertOutline) +
                                    "\n              "
                                ),
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "ms-3" }, [
                                _c(
                                  "p",
                                  {
                                    staticClass:
                                      "text-base font-weight-medium mb-1",
                                  },
                                  [
                                    _vm._v(
                                      "\n                  Your email is not confirmed. Please check your inbox.\n                "
                                    ),
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  {
                                    staticClass:
                                      "text-decoration-none warning--text",
                                    attrs: { href: "javascript:void(0)" },
                                  },
                                  [
                                    _c("span", { staticClass: "text-sm" }, [
                                      _vm._v("Resend Confirmation"),
                                    ]),
                                  ]
                                ),
                              ]),
                            ],
                            1
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12" } },
                    [
                      _c(
                        "v-btn",
                        {
                          staticClass: "me-3 mt-4",
                          attrs: { color: "primary" },
                        },
                        [_vm._v("\n            Save changes\n          ")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticClass: "mt-4",
                          attrs: {
                            color: "secondary",
                            outlined: "",
                            type: "reset",
                          },
                          on: {
                            click: function ($event) {
                              $event.preventDefault()
                              return _vm.resetForm.apply(null, arguments)
                            },
                          },
                        },
                        [_vm._v("\n            Cancel\n          ")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/pages/account-settings/AccountSettingsInfo.vue?vue&type=template&id=75d08547&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/pages/account-settings/AccountSettingsInfo.vue?vue&type=template&id=75d08547& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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
    "v-card",
    { staticClass: "pa-3 mt-2", attrs: { flat: "" } },
    [
      _c(
        "v-form",
        { staticClass: "multi-col-validation" },
        [
          _c(
            "v-card-text",
            { staticClass: "pt-5" },
            [
              _c(
                "v-row",
                [
                  _c(
                    "v-col",
                    { attrs: { cols: "12" } },
                    [
                      _c("v-textarea", {
                        attrs: { outlined: "", rows: "3", label: "Bio" },
                        model: {
                          value: _vm.optionsLocal.bio,
                          callback: function ($$v) {
                            _vm.$set(_vm.optionsLocal, "bio", $$v)
                          },
                          expression: "optionsLocal.bio",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "6" } },
                    [
                      _c("v-text-field", {
                        attrs: { outlined: "", dense: "", label: "Birthday" },
                        model: {
                          value: _vm.optionsLocal.birthday,
                          callback: function ($$v) {
                            _vm.$set(_vm.optionsLocal, "birthday", $$v)
                          },
                          expression: "optionsLocal.birthday",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "6" } },
                    [
                      _c("v-text-field", {
                        attrs: { outlined: "", dense: "", label: "Phone" },
                        model: {
                          value: _vm.optionsLocal.phone,
                          callback: function ($$v) {
                            _vm.$set(_vm.optionsLocal, "phone", $$v)
                          },
                          expression: "optionsLocal.phone",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "6" } },
                    [
                      _c("v-text-field", {
                        attrs: { outlined: "", dense: "", label: "Website" },
                        model: {
                          value: _vm.optionsLocal.website,
                          callback: function ($$v) {
                            _vm.$set(_vm.optionsLocal, "website", $$v)
                          },
                          expression: "optionsLocal.website",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "6" } },
                    [
                      _c("v-select", {
                        attrs: {
                          outlined: "",
                          dense: "",
                          label: "Country",
                          items: ["USA", "UK", "AUSTRALIA", "BRAZIL"],
                        },
                        model: {
                          value: _vm.optionsLocal.country,
                          callback: function ($$v) {
                            _vm.$set(_vm.optionsLocal, "country", $$v)
                          },
                          expression: "optionsLocal.country",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "6" } },
                    [
                      _c("v-select", {
                        attrs: {
                          outlined: "",
                          dense: "",
                          multiple: "",
                          chips: "",
                          "small-chips": "",
                          label: "Languages",
                          items: ["English", "Spanish", "French", "German"],
                        },
                        model: {
                          value: _vm.optionsLocal.languages,
                          callback: function ($$v) {
                            _vm.$set(_vm.optionsLocal, "languages", $$v)
                          },
                          expression: "optionsLocal.languages",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-col",
                    { attrs: { cols: "12", md: "6" } },
                    [
                      _c("p", { staticClass: "text--primary mt-n3 mb-2" }, [
                        _vm._v("\n            Gender\n          "),
                      ]),
                      _vm._v(" "),
                      _c(
                        "v-radio-group",
                        {
                          staticClass: "mt-0",
                          attrs: { row: "", "hide-details": "" },
                          model: {
                            value: _vm.optionsLocal.gender,
                            callback: function ($$v) {
                              _vm.$set(_vm.optionsLocal, "gender", $$v)
                            },
                            expression: "optionsLocal.gender",
                          },
                        },
                        [
                          _c("v-radio", {
                            attrs: { value: "male", label: "Male" },
                          }),
                          _vm._v(" "),
                          _c("v-radio", {
                            attrs: { value: "female", label: "Female" },
                          }),
                          _vm._v(" "),
                          _c("v-radio", {
                            attrs: { value: "other", label: "Other" },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
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
            [
              _c(
                "v-btn",
                { staticClass: "me-3 mt-3", attrs: { color: "primary" } },
                [_vm._v("\n        Save changes\n      ")]
              ),
              _vm._v(" "),
              _c(
                "v-btn",
                {
                  staticClass: "mt-3",
                  attrs: { outlined: "", color: "secondary", type: "reset" },
                  on: {
                    click: function ($event) {
                      $event.preventDefault()
                      return _vm.resetForm.apply(null, arguments)
                    },
                  },
                },
                [_vm._v("\n        Cancel\n      ")]
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/pages/account-settings/AccountSettingsSecurity.vue?vue&type=template&id=0da4d34e&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/pages/account-settings/AccountSettingsSecurity.vue?vue&type=template&id=0da4d34e&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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
    "v-card",
    { staticClass: "mt-5", attrs: { flat: "" } },
    [
      _c(
        "v-form",
        [
          _c(
            "div",
            { staticClass: "px-3" },
            [
              _c(
                "v-card-text",
                { staticClass: "pt-5" },
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12", sm: "8", md: "6" } },
                        [
                          _c("v-text-field", {
                            attrs: {
                              type: _vm.isCurrentPasswordVisible
                                ? "text"
                                : "password",
                              "append-icon": _vm.isCurrentPasswordVisible
                                ? _vm.icons.mdiEyeOffOutline
                                : _vm.icons.mdiEyeOutline,
                              label: "Current Password",
                              outlined: "",
                              dense: "",
                            },
                            on: {
                              "click:append": function ($event) {
                                _vm.isCurrentPasswordVisible =
                                  !_vm.isCurrentPasswordVisible
                              },
                            },
                            model: {
                              value: _vm.currentPassword,
                              callback: function ($$v) {
                                _vm.currentPassword = $$v
                              },
                              expression: "currentPassword",
                            },
                          }),
                          _vm._v(" "),
                          _c("v-text-field", {
                            attrs: {
                              type: _vm.isNewPasswordVisible
                                ? "text"
                                : "password",
                              "append-icon": _vm.isNewPasswordVisible
                                ? _vm.icons.mdiEyeOffOutline
                                : _vm.icons.mdiEyeOutline,
                              label: "New Password",
                              outlined: "",
                              dense: "",
                              hint: "Make sure it's at least 8 characters.",
                              "persistent-hint": "",
                            },
                            on: {
                              "click:append": function ($event) {
                                _vm.isNewPasswordVisible =
                                  !_vm.isNewPasswordVisible
                              },
                            },
                            model: {
                              value: _vm.newPassword,
                              callback: function ($$v) {
                                _vm.newPassword = $$v
                              },
                              expression: "newPassword",
                            },
                          }),
                          _vm._v(" "),
                          _c("v-text-field", {
                            staticClass: "mt-3",
                            attrs: {
                              type: _vm.isCPasswordVisible
                                ? "text"
                                : "password",
                              "append-icon": _vm.isCPasswordVisible
                                ? _vm.icons.mdiEyeOffOutline
                                : _vm.icons.mdiEyeOutline,
                              label: "Confirm New Password",
                              outlined: "",
                              dense: "",
                            },
                            on: {
                              "click:append": function ($event) {
                                _vm.isCPasswordVisible = !_vm.isCPasswordVisible
                              },
                            },
                            model: {
                              value: _vm.cPassword,
                              callback: function ($$v) {
                                _vm.cPassword = $$v
                              },
                              expression: "cPassword",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-col",
                        {
                          staticClass:
                            "d-none d-sm-flex justify-center position-relative",
                          attrs: { cols: "12", sm: "4", md: "6" },
                        },
                        [
                          _c("v-img", {
                            staticClass: "security-character",
                            attrs: {
                              contain: "",
                              "max-width": "170",
                              src: (__webpack_require__(/*! @/assets/images/3d-characters/pose-m-1.png */ "./resources/js/src/assets/images/3d-characters/pose-m-1.png")["default"]),
                            },
                          }),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("v-divider"),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "pa-3" },
            [
              _c(
                "v-card-title",
                { staticClass: "flex-nowrap" },
                [
                  _c("v-icon", { staticClass: "text--primary me-3" }, [
                    _vm._v(
                      "\n          " +
                        _vm._s(_vm.icons.mdiKeyOutline) +
                        "\n        "
                    ),
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "text-break" }, [
                    _vm._v("Two-factor authentication"),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                { staticClass: "two-factor-auth text-center mx-auto" },
                [
                  _c(
                    "v-avatar",
                    {
                      staticClass: "primary mb-4",
                      attrs: { color: "primary", rounded: "" },
                    },
                    [
                      _c("v-icon", { attrs: { size: "25", color: "white" } }, [
                        _vm._v(
                          "\n            " +
                            _vm._s(_vm.icons.mdiLockOpenOutline) +
                            "\n          "
                        ),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "p",
                    {
                      staticClass:
                        "text-base text--primary font-weight-semibold",
                    },
                    [_vm._v("Two factor authentication is not enabled yet.")]
                  ),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-sm text--primary" }, [
                    _vm._v(
                      "\n          Two-factor authentication adds an additional layer of security to your account by requiring more than just a\n          password to log in. Learn more.\n        "
                    ),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "v-btn",
                    { staticClass: "me-3 mt-3", attrs: { color: "primary" } },
                    [_vm._v(" Save changes ")]
                  ),
                  _vm._v(" "),
                  _c(
                    "v-btn",
                    {
                      staticClass: "mt-3",
                      attrs: { color: "secondary", outlined: "" },
                    },
                    [_vm._v(" Cancel ")]
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/pages/account-settings/profile.vue?vue&type=template&id=12dbccd2&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/src/views/pages/account-settings/profile.vue?vue&type=template&id=12dbccd2& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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
    "v-card",
    { attrs: { id: "account-setting-card" } },
    [
      _c(
        "v-tabs",
        {
          attrs: { "show-arrows": "" },
          model: {
            value: _vm.tab,
            callback: function ($$v) {
              _vm.tab = $$v
            },
            expression: "tab",
          },
        },
        _vm._l(_vm.tabs, function (tab) {
          return _c(
            "v-tab",
            { key: tab.icon },
            [
              _c("v-icon", { staticClass: "me-3", attrs: { size: "20" } }, [
                _vm._v("\n        " + _vm._s(tab.icon) + "\n      "),
              ]),
              _vm._v(" "),
              _c("span", [_vm._v(_vm._s(tab.title))]),
            ],
            1
          )
        }),
        1
      ),
      _vm._v(" "),
      _c(
        "v-tabs-items",
        {
          model: {
            value: _vm.tab,
            callback: function ($$v) {
              _vm.tab = $$v
            },
            expression: "tab",
          },
        },
        [
          _c(
            "v-tab-item",
            [
              _c("account-settings-account", {
                attrs: { "account-data": _vm.accountSettingData.account },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c("v-tab-item", [_c("account-settings-security")], 1),
          _vm._v(" "),
          _c(
            "v-tab-item",
            [
              _c("account-settings-info", {
                attrs: {
                  "information-data": _vm.accountSettingData.information,
                },
              }),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/pages/account-settings/AccountSettingsAccount.vue":
/*!**********************************************************************************!*\
  !*** ./resources/js/src/views/pages/account-settings/AccountSettingsAccount.vue ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AccountSettingsAccount_vue_vue_type_template_id_208d84b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccountSettingsAccount.vue?vue&type=template&id=208d84b8& */ "./resources/js/src/views/pages/account-settings/AccountSettingsAccount.vue?vue&type=template&id=208d84b8&");
/* harmony import */ var _AccountSettingsAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccountSettingsAccount.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/account-settings/AccountSettingsAccount.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VAlert */ "./node_modules/vuetify/lib/components/VAlert/VAlert.js");
/* harmony import */ var vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VAvatar */ "./node_modules/vuetify/lib/components/VAvatar/VAvatar.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/VBtn.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/VCard.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VCol.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/VForm.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/VIcon.js");
/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VImg */ "./node_modules/vuetify/lib/components/VImg/VImg.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VRow.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/VSelect.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/VTextField.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AccountSettingsAccount_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AccountSettingsAccount_vue_vue_type_template_id_208d84b8___WEBPACK_IMPORTED_MODULE_0__.render,
  _AccountSettingsAccount_vue_vue_type_template_id_208d84b8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */
;












_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VAlert: vuetify_lib_components_VAlert__WEBPACK_IMPORTED_MODULE_4__["default"],VAvatar: vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_5__["default"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_6__["default"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_7__["default"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_8__.VCardText,VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["default"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_10__["default"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_11__["default"],VImg: vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_12__["default"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_13__["default"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_14__["default"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_15__["default"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/account-settings/AccountSettingsAccount.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/account-settings/AccountSettingsInfo.vue":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/views/pages/account-settings/AccountSettingsInfo.vue ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AccountSettingsInfo_vue_vue_type_template_id_75d08547___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccountSettingsInfo.vue?vue&type=template&id=75d08547& */ "./resources/js/src/views/pages/account-settings/AccountSettingsInfo.vue?vue&type=template&id=75d08547&");
/* harmony import */ var _AccountSettingsInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccountSettingsInfo.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/account-settings/AccountSettingsInfo.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/VBtn.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/VCard.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VCol.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/VForm.js");
/* harmony import */ var vuetify_lib_components_VRadioGroup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VRadioGroup */ "./node_modules/vuetify/lib/components/VRadioGroup/VRadio.js");
/* harmony import */ var vuetify_lib_components_VRadioGroup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VRadioGroup */ "./node_modules/vuetify/lib/components/VRadioGroup/VRadioGroup.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VRow.js");
/* harmony import */ var vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VSelect */ "./node_modules/vuetify/lib/components/VSelect/VSelect.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/VTextField.js");
/* harmony import */ var vuetify_lib_components_VTextarea__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VTextarea */ "./node_modules/vuetify/lib/components/VTextarea/VTextarea.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AccountSettingsInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AccountSettingsInfo_vue_vue_type_template_id_75d08547___WEBPACK_IMPORTED_MODULE_0__.render,
  _AccountSettingsInfo_vue_vue_type_template_id_75d08547___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */
;











_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["default"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["default"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_6__.VCardText,VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_7__["default"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_8__["default"],VRadio: vuetify_lib_components_VRadioGroup__WEBPACK_IMPORTED_MODULE_9__["default"],VRadioGroup: vuetify_lib_components_VRadioGroup__WEBPACK_IMPORTED_MODULE_10__["default"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_11__["default"],VSelect: vuetify_lib_components_VSelect__WEBPACK_IMPORTED_MODULE_12__["default"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_13__["default"],VTextarea: vuetify_lib_components_VTextarea__WEBPACK_IMPORTED_MODULE_14__["default"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/account-settings/AccountSettingsInfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/account-settings/AccountSettingsSecurity.vue":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/pages/account-settings/AccountSettingsSecurity.vue ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AccountSettingsSecurity_vue_vue_type_template_id_0da4d34e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccountSettingsSecurity.vue?vue&type=template&id=0da4d34e&scoped=true& */ "./resources/js/src/views/pages/account-settings/AccountSettingsSecurity.vue?vue&type=template&id=0da4d34e&scoped=true&");
/* harmony import */ var _AccountSettingsSecurity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccountSettingsSecurity.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/account-settings/AccountSettingsSecurity.vue?vue&type=script&lang=js&");
/* harmony import */ var _AccountSettingsSecurity_vue_vue_type_style_index_0_id_0da4d34e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AccountSettingsSecurity.vue?vue&type=style&index=0&id=0da4d34e&lang=scss&scoped=true& */ "./resources/js/src/views/pages/account-settings/AccountSettingsSecurity.vue?vue&type=style&index=0&id=0da4d34e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VAvatar */ "./node_modules/vuetify/lib/components/VAvatar/VAvatar.js");
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/VBtn.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/VCard.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VCol.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/VDivider.js");
/* harmony import */ var vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VForm */ "./node_modules/vuetify/lib/components/VForm/VForm.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/VIcon.js");
/* harmony import */ var vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuetify/lib/components/VImg */ "./node_modules/vuetify/lib/components/VImg/VImg.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/VRow.js");
/* harmony import */ var vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! vuetify/lib/components/VTextField */ "./node_modules/vuetify/lib/components/VTextField/VTextField.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AccountSettingsSecurity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AccountSettingsSecurity_vue_vue_type_template_id_0da4d34e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _AccountSettingsSecurity_vue_vue_type_template_id_0da4d34e_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0da4d34e",
  null
  
)

/* vuetify-loader */
;












_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_4___default()(component, {VAvatar: vuetify_lib_components_VAvatar__WEBPACK_IMPORTED_MODULE_5__["default"],VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_6__["default"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_7__["default"],VCardText: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_8__.VCardText,VCardTitle: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_8__.VCardTitle,VCol: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_9__["default"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_10__["default"],VForm: vuetify_lib_components_VForm__WEBPACK_IMPORTED_MODULE_11__["default"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_12__["default"],VImg: vuetify_lib_components_VImg__WEBPACK_IMPORTED_MODULE_13__["default"],VRow: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_14__["default"],VTextField: vuetify_lib_components_VTextField__WEBPACK_IMPORTED_MODULE_15__["default"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/account-settings/AccountSettingsSecurity.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/pages/account-settings/profile.vue":
/*!*******************************************************************!*\
  !*** ./resources/js/src/views/pages/account-settings/profile.vue ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _profile_vue_vue_type_template_id_12dbccd2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./profile.vue?vue&type=template&id=12dbccd2& */ "./resources/js/src/views/pages/account-settings/profile.vue?vue&type=template&id=12dbccd2&");
/* harmony import */ var _profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.vue?vue&type=script&lang=js& */ "./resources/js/src/views/pages/account-settings/profile.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/VCard.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/VIcon.js");
/* harmony import */ var vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VTabs */ "./node_modules/vuetify/lib/components/VTabs/VTab.js");
/* harmony import */ var vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VTabs */ "./node_modules/vuetify/lib/components/VTabs/VTabItem.js");
/* harmony import */ var vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VTabs */ "./node_modules/vuetify/lib/components/VTabs/VTabs.js");
/* harmony import */ var vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VTabs */ "./node_modules/vuetify/lib/components/VTabs/VTabsItems.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _profile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _profile_vue_vue_type_template_id_12dbccd2___WEBPACK_IMPORTED_MODULE_0__.render,
  _profile_vue_vue_type_template_id_12dbccd2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */
;






_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_4__["default"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_5__["default"],VTab: vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_6__["default"],VTabItem: vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_7__["default"],VTabs: vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_8__["default"],VTabsItems: vuetify_lib_components_VTabs__WEBPACK_IMPORTED_MODULE_9__["default"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/pages/account-settings/profile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ })

}]);