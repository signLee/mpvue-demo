require("../../common/manifest.js")
require("../../common/vendor.js")
global.webpackJsonpMpvue([2],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(9);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_58423898_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(15);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(10)
}
var normalizeComponent = __webpack_require__(1)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_template_compiler_index_id_data_v_58423898_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_fileExt_template_wxml_script_js_style_wxss_platform_wx_node_modules_mpvue_loader_2_0_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/counter/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-58423898", Component.options)
  } else {
    hotAPI.reload("data-v-58423898", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */,
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__store__ = __webpack_require__(13);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// Use Vuex


/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      x: 0,
      y: 0
    };
  },

  computed: {
    count: function count() {
      return __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].state.count;
    }
  },
  onReady: function onReady() {
    this.videoCtx = wx.createVideoContext('myVideo');
  },

  methods: {
    tap: function tap(e) {
      this.setData({
        x: 30,
        y: 30
      });
    },
    onChange: function onChange(e) {
      console.log(e.detail);
    },
    onScale: function onScale(e) {
      console.log(e.detail);
    },
    play: function play() {
      this.videoCtx.play();
    },
    pause: function pause() {
      this.videoCtx.pause();
    },
    scanBook: function scanBook() {
      console.log(1111);
      wx.scanCode({
        success: function success(res) {
          console.log(res);
        }
      });
    },
    increment: function increment() {
      __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].commit('increment');
    },
    decrement: function decrement() {
      __WEBPACK_IMPORTED_MODULE_0__store__["a" /* default */].commit('decrement');
    }
  }
});

/***/ }),
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "counter-warp"
  }, [_c('view', {
    staticClass: "section__title"
  }, [_vm._v("movable-view区域小于movable-area")]), _vm._v(" "), _c('movable-area', {
    staticStyle: {
      "height": "200px",
      "width": "200px",
      "background": "red"
    },
    attrs: {
      "mpcomid": '1'
    }
  }, [_c('movable-view', {
    staticStyle: {
      "height": "50px",
      "width": "50px",
      "background": "blue"
    },
    attrs: {
      "x": _vm.x,
      "y": _vm.y,
      "direction": "all",
      "mpcomid": '0'
    }
  })], 1), _vm._v(" "), _c('view', {
    staticClass: "btn-area"
  }, [_c('button', {
    attrs: {
      "size": "mini",
      "bindtap": "tap"
    }
  }, [_vm._v("click me to move to (30px, 30px)")])], 1), _vm._v(" "), _c('view', {
    staticClass: "section__title"
  }, [_vm._v("movable-view区域大于movable-area")]), _vm._v(" "), _c('movable-area', {
    staticStyle: {
      "height": "100px",
      "width": "100px",
      "background": "red"
    },
    attrs: {
      "mpcomid": '3'
    }
  }, [_c('movable-view', {
    staticStyle: {
      "height": "200px",
      "width": "200px",
      "background": "blue"
    },
    attrs: {
      "direction": "all",
      "mpcomid": '2'
    }
  })], 1), _vm._v(" "), _c('view', {
    staticClass: "section__title"
  }, [_vm._v("可放缩")]), _vm._v(" "), _c('movable-area', {
    staticStyle: {
      "height": "200px",
      "width": "200px",
      "background": "red"
    },
    attrs: {
      "scale-area": "",
      "mpcomid": '5'
    }
  }, [_c('movable-view', {
    staticStyle: {
      "height": "50px",
      "width": "50px",
      "background": "blue"
    },
    attrs: {
      "direction": "all",
      "bindchange": "onChange",
      "bindscale": "onScale",
      "scale": "",
      "scale-min": "0.5",
      "scale-max": "4",
      "scale-value": "2",
      "mpcomid": '4'
    }
  })], 1), _vm._v(" "), _c('p', [_vm._v("Vuex counter：" + _vm._s(_vm.count))]), _vm._v(" "), _c('p', [_c('button', {
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.increment
    }
  }, [_vm._v("+")]), _vm._v(" "), _c('button', {
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": _vm.decrement
    }
  }, [_vm._v("-")])], 1), _vm._v(" "), _c('button', {
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.scanBook
    }
  }, [_vm._v("\n    调试扫码\n  ")]), _vm._v(" "), _c('video', {
    attrs: {
      "id": "myVideo",
      "src": "http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400",
      "controls": false,
      "event-model": "bubble"
    }
  }, [_c('cover-view', {
    staticClass: "controls",
    attrs: {
      "mpcomid": '7'
    }
  }, [_c('cover-view', {
    staticClass: "time",
    attrs: {
      "mpcomid": '6'
    }
  }, [_vm._v("00:00")])], 1)], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-58423898", esExports)
  }
}

/***/ })
],[8]);