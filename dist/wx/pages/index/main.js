require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([4],{

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(17);



// add this to handle exception
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.errorHandler = function (err) {
  if (console && console.error) {
    console.error(err);
  }
};

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_f432b7a4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(23);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(18)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-f432b7a4"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_f432b7a4_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/index/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f432b7a4", Component.options)
  } else {
    hotAPI.reload("data-v-f432b7a4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 18:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 19:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_card__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_counter_store__ = __webpack_require__(13);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      progressPercent: 0,
      showMsg: ''
    };
  },


  components: {
    card: __WEBPACK_IMPORTED_MODULE_0__components_card__["a" /* default */]
  },
  computed: {
    year: function year() {
      return new Date().getFullYear();
    },
    day: function day() {
      return parseInt(this.calcDay() / 1000 / 60 / 60 / 24);
    },
    percent: function percent() {
      return (this.day / this.getDayOfYear() * 100).toFixed(1);
    }
  },
  methods: {
    getDayOfYear: function getDayOfYear() {
      return this.isLeapYear() ? 366 : 365;
    },
    isLeapYear: function isLeapYear() {
      if (this.year % 400 === 0) {
        return true;
      } else if (this.year % 4 === 0 && this.year % 100 !== 0) {
        return true;
      } else {
        return false;
      }
    },
    calcDay: function calcDay() {
      var startDay = new Date();
      startDay.setMonth(0);
      startDay.setDate(1);
      return new Date().getTime() - startDay.getTime();
    },
    bindViewTap: function bindViewTap() {
      var url = '../logs/main';
      if (global.mpvuePlatform === 'wx') {
        global.mpvue.switchTab({ url: url });
      } else {
        global.mpvue.navigateTo({ url: url });
      }
    },
    clickHandle: function clickHandle(ev) {
      console.log('clickHandle:', ev);
      // throw {message: 'custom test'}
    }
  },
  mounted: function mounted() {},
  onShow: function onShow() {
    console.log(__WEBPACK_IMPORTED_MODULE_1__pages_counter_store__["a" /* default */]);
  },
  created: function created() {
    this.progressPercent = 1;
    this.showMsg = new Date().getFullYear();
    // let app = getApp()
  }
});

/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": _vm.clickHandle
    }
  }, [_c('div', {
    staticClass: "userinfo",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.bindViewTap
    }
  }, [_c('open-data', {
    attrs: {
      "type": "userNickName",
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('open-data', {
    attrs: {
      "type": "userAvatarUrl",
      "mpcomid": '1'
    }
  })], 1), _vm._v(" "), _c('progress', {
    attrs: {
      "percent": _vm.percent,
      "show-info": ""
    }
  }), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.year) + "年已经过去了" + _vm._s(_vm.day) + "天，" + _vm._s(_vm.percent) + "%")]), _vm._v(" "), _c('form', {
    staticClass: "form-container"
  }, [_c('input', {
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "value": _vm.motto,
      "placeholder": "v-model"
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.motto),
      expression: "motto"
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "v-model",
      "eventid": '1'
    },
    domProps: {
      "value": (_vm.motto)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.motto = $event.target.value
      }
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.lazy",
      value: (_vm.motto),
      expression: "motto",
      modifiers: {
        "lazy": true
      }
    }],
    staticClass: "form-control",
    attrs: {
      "type": "text",
      "placeholder": "v-model.lazy",
      "eventid": '2'
    },
    domProps: {
      "value": (_vm.motto)
    },
    on: {
      "change": function($event) {
        _vm.motto = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('button', {
    attrs: {
      "open-type": "share",
      "lang": "zh_CN",
      "eventid": '3'
    },
    on: {
      "getuserinfo": _vm.onGotUserInfo
    }
  }, [_vm._v("\n    分享页面\n  ")]), _vm._v(" "), _c('button', {
    attrs: {
      "open-type": "getUserInfo",
      "lang": "zh_CN",
      "eventid": '4'
    },
    on: {
      "getuserinfo": _vm.onGotUserInfo
    }
  }, [_vm._v("\n    获取用户信息\n  ")]), _vm._v(" "), _c('a', {
    staticClass: "counter",
    attrs: {
      "href": "/pages/test/main"
    }
  }, [_vm._v("去往测试页面")]), _vm._v(" "), _c('a', {
    staticClass: "counter",
    attrs: {
      "href": "/pages/counter/main"
    }
  }, [_vm._v("去往Vuex示例页面")]), _vm._v(" "), _vm._m(0)], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "all"
  }, [_c('div', {
    staticClass: "left"
  }), _vm._v(" "), _c('div', {
    staticClass: "right"
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-f432b7a4", esExports)
  }
}

/***/ })

},[16]);