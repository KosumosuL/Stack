/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 70);
/******/ })
/************************************************************************/
/******/ ({

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(71)
var $app_style$ = __webpack_require__(72)
var $app_script$ = __webpack_require__(73)

$app_define$('@app-component/index', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})

$app_bootstrap$('@app-component/index',{ packagerName:'fa-toolkit', packagerVersion: '2.0.0-Stable.301'})

/***/ }),

/***/ 71:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "container"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "camera"
      ],
      "children": [
        {
          "type": "image",
          "attr": {
            "src": function () {return this.displayuri}
          },
          "classList": [
            "image",
            "image-cover"
          ],
          "events": {
            "click": "viewPhoto",
            "longpress": "undoPhoto"
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "image-wall"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "image-wall-container"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "image-wall-list"
              ],
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "repeat": function () {return this.uris},
                  "classList": [
                    "image-wall-product"
                  ],
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "src": function () {return this.$item}
                      },
                      "classList": [
                        "image-wall-image"
                      ],
                      "events": {
                        "click": function (evt){this.selectPhoto(this,evt)},
                        "longpress": function (evt){this.deletePhoto(this,evt)}
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "list-center"
      ],
      "children": [
        {
          "type": "image",
          "attr": {
            "src": "/Photo/img/takePhoto.png"
          },
          "classList": [
            "btn",
            "image-contain"
          ],
          "events": {
            "click": "takePhoto"
          }
        },
        {
          "type": "image",
          "attr": {
            "src": "/Photo/img/pickPhoto.png"
          },
          "classList": [
            "btn",
            "image-contain"
          ],
          "events": {
            "click": "pickPhoto"
          }
        },
        {
          "type": "image",
          "attr": {
            "src": "/Photo/img/editPhoto.png"
          },
          "classList": [
            "btn",
            "image-contain"
          ],
          "events": {
            "click": "editPhoto"
          }
        },
        {
          "type": "image",
          "attr": {
            "src": "/Photo/img/clearPhoto.png"
          },
          "classList": [
            "btn",
            "image-contain"
          ],
          "events": {
            "click": "clearPhoto"
          }
        },
        {
          "type": "image",
          "attr": {
            "src": "/Photo/img/uploadPhoto.png"
          },
          "classList": [
            "btn",
            "image-contain"
          ],
          "events": {
            "click": "uploadPhoto"
          }
        }
      ]
    }
  ]
}

/***/ }),

/***/ 72:
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignContent": "center",
    "alignItems": "center",
    "backgroundColor": "#ffffff"
  },
  ".camera": {
    "height": "800px",
    "position": "fixed"
  },
  ".image": {
    "width": "100%",
    "height": "100%",
    "backgroundColor": "#ffffff"
  },
  ".image-wall": {
    "marginTop": "801px",
    "marginBottom": "100px"
  },
  ".image-wall-container": {
    "flexDirection": "column",
    "width": "100%"
  },
  ".image-wall-list": {
    "flexWrap": "wrap"
  },
  ".image-wall-product": {
    "height": "187.5px",
    "width": "25%"
  },
  ".image-wall-image": {
    "objectFit": "cover",
    "height": "100%",
    "width": "100%",
    "marginTop": "1px",
    "marginRight": "1px",
    "marginBottom": "1px",
    "marginLeft": "1px",
    "backgroundColor": "#ffffff"
  },
  ".list-center": {
    "position": "fixed",
    "bottom": "0px",
    "justifyContent": "space-between",
    "backgroundColor": "#f2f2f2",
    "width": "100%",
    "height": "100px"
  },
  ".btn": {
    "width": "64px",
    "height": "64px",
    "marginLeft": "40px",
    "marginRight": "40px",
    "marginTop": "16px"
  },
  ".image-contain": {
    "objectFit": "contain"
  },
  ".image-cover": {
    "objectFit": "cover"
  }
}

/***/ }),

/***/ 73:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.media"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.prompt"));

var _system3 = _interopRequireDefault($app_require$("@app-module/system.image"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  data: {
    uris: ['https://lucaszhao-1258906334.cos.ap-guangzhou.myqcloud.com/cover/73934916_p0.jpg', 'https://lucaszhao-1258906334.cos.ap-guangzhou.myqcloud.com/stack/post/01.jpg', 'https://lucaszhao-1258906334.cos.ap-guangzhou.myqcloud.com/stack/post/AM_Google_525.png', 'https://lucaszhao-1258906334.cos.ap-guangzhou.myqcloud.com/stack/post/AM_Bing_217.png', 'https://lucaszhao-1258906334.cos.ap-guangzhou.myqcloud.com/stack/post/AM_Bing_222.png', 'https://lucaszhao-1258906334.cos.ap-guangzhou.myqcloud.com/stack/post/AM_Google_067.png', 'https://lucaszhao-1258906334.cos.ap-guangzhou.myqcloud.com/cover/73934916_p0.jpg', 'https://lucaszhao-1258906334.cos.ap-guangzhou.myqcloud.com/stack/post/01.jpg', 'https://lucaszhao-1258906334.cos.ap-guangzhou.myqcloud.com/stack/post/AM_Google_525.png', 'https://lucaszhao-1258906334.cos.ap-guangzhou.myqcloud.com/stack/post/AM_Bing_217.png', 'https://lucaszhao-1258906334.cos.ap-guangzhou.myqcloud.com/stack/post/AM_Bing_222.png', 'https://lucaszhao-1258906334.cos.ap-guangzhou.myqcloud.com/stack/post/AM_Google_067.png', 'https://lucaszhao-1258906334.cos.ap-guangzhou.myqcloud.com/cover/73934916_p0.jpg', 'https://lucaszhao-1258906334.cos.ap-guangzhou.myqcloud.com/stack/post/01.jpg', 'https://lucaszhao-1258906334.cos.ap-guangzhou.myqcloud.com/stack/post/AM_Google_525.png', 'https://lucaszhao-1258906334.cos.ap-guangzhou.myqcloud.com/stack/post/AM_Bing_217.png', 'https://lucaszhao-1258906334.cos.ap-guangzhou.myqcloud.com/stack/post/AM_Bing_222.png', 'https://lucaszhao-1258906334.cos.ap-guangzhou.myqcloud.com/stack/post/AM_Google_067.png', 'https://lucaszhao-1258906334.cos.ap-guangzhou.myqcloud.com/cover/73934916_p0.jpg', 'https://lucaszhao-1258906334.cos.ap-guangzhou.myqcloud.com/stack/post/01.jpg'],
    idx: -1,
    displayuri: '',
    backup: []
  },
  takePhoto: function takePhoto() {
    var that = this;

    _system["default"].takePhoto({
      success: function success(data) {
        that.uris.push(data.uri);
        that.idx = that.uris.length - 1;
        that.displayuri = data.uri;
        that.backup = [];
        console.log('media.takePhoto success');
      },
      fail: function fail(errmsg, errcode) {
        _system2["default"].showToast({
          message: '拍摄失败',
          image: '/Common/logo.png'
        });

        console.log('media.takePhoto fail (' + errcode + ') ' + errmsg);
      }
    });
  },
  pickPhoto: function pickPhoto() {
    var that = this;

    _system["default"].pickImage({
      success: function success(data) {
        that.uris.push(data.uri);
        that.idx = that.uris.length - 1;
        that.displayuri = data.uri;
        that.backup = [];
        console.log('media.pickImage success');
      },
      fail: function fail(errmsg, errcode) {
        _system2["default"].showToast({
          message: "选取失败",
          image: '/Common/logo.png'
        });

        console.log('media.pickImage fail (' + errcode + ') ' + errmsg);
      }
    });
  },
  editPhoto: function editPhoto() {
    if (this.displayuri !== '') {
      var that = this;

      _system3["default"].editImage({
        uri: that.displayuri,
        success: function success(data) {
          that.uris.splice(that.idx, 1, data.uri);
          that.backup.push(that.displayuri);
          that.displayuri = data.uri;
          console.log('image.editImage success');
        },
        fail: function fail(errmsg, errcode) {
          _system2["default"].showToast({
            message: "编辑失败",
            image: '/Common/logo.png'
          });

          console.log('media.editImage fail (' + errcode + ') ' + errmsg);
        }
      });
    }
  },
  uploadPhoto: function uploadPhoto() {
    if (this.uris.length !== 0) {
      var that = this;
    }
  },
  clearPhoto: function clearPhoto() {
    if (this.uris.length !== 0) {
      this.uris = [];
      this.idx = -1;
      this.displayuri = '';
      this.backup = [];

      _system2["default"].showToast({
        message: "清空相片"
      });
    }
  },
  viewPhoto: function viewPhoto() {
    if (this.displayuri !== '') {
      var that = this;

      _system["default"].previewImage({
        current: that.displayuri,
        uris: that.uris,
        success: function success() {
          console.log('previewImage success');
        },
        fail: function fail(errmsg, errcode) {
          console.log('previewImage fail (' + errcode + ') ' + errmsg);
        }
      });
    }
  },
  selectPhoto: function selectPhoto(obj) {
    if (this.idx !== obj.$idx) {
      this.idx = obj.$idx;
      this.displayuri = this.uris[this.idx];
      this.backup = [];
    }
  },
  deletePhoto: function deletePhoto(obj) {
    var that = this;

    _system2["default"].showDialog({
      message: '删除该相片？',
      buttons: [{
        text: '确认',
        color: '#33dd44'
      }, {
        text: '取消',
        color: '#33dd44'
      }],
      success: function success(data) {
        console.log("prompt.showDialog success");

        if (data.index === 0) {
          that.uris.splice(obj.$idx, 1);

          if (that.uris.length === 0) {
            that.idx = -1;
            that.displayuri = '';
            that.backup = [];
          } else if (that.idx > obj.$idx) {
            that.idx -= 1;
          } else if (that.idx === obj.$idx) {
            if (that.idx >= that.uris.length) {
              that.idx = that.uris.length - 1;
            }

            that.displayuri = that.uris[that.idx];
            that.backup = [];
          }
        }
      },
      fail: function fail(errmsg, errcode) {
        console.log("prompt.showDialog fail (" + errcode + ") " + errmsg);
      }
    });
  },
  undoPhoto: function undoPhoto() {
    var that = this;

    if (this.backup !== '') {
      _system2["default"].showDialog({
        message: '取消编辑？',
        buttons: [{
          text: '确认',
          color: '#33dd44'
        }, {
          text: '取消',
          color: '#33dd44'
        }],
        success: function success(data) {
          console.log("prompt.showDialog success");

          if (data.index === 0) {
            that.uris.splice(that.idx, 1, that.backup.pop());
            that.displayuri = that.uris[that.idx];
          }
        },
        fail: function fail(errmsg, errcode) {
          console.log("prompt.showDialog fail (" + errcode + ") " + errmsg);
        }
      });
    }
  }
};
exports["default"] = _default;
var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];
if (moduleOwn.data && accessors.some(function (acc) {
    return moduleOwn[acc];
  })) {
  throw new Error('For VM objects, attribute data must not coexist with public, protected, or private. Please replace data with public.');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function(acc) {
    var accType = typeof moduleOwn[acc];
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {access : acc};
      }
    } else if (accType === 'function') {
      console.warn('For VM objects, attribute ' + acc + ' value must not be a function. Change the value to an object.');
    }
  });
}}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRcXFBob3RvXFxpbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vYzovVXNlcnMvMTEwOTYvRGVza3RvcC9TdGFjay9GYXN0QVBQL2NvbS5uanVzdC5zdGFjay9zcmMvUGhvdG8vaW5kZXgudXgiLCJ3ZWJwYWNrOi8vL2M6L1VzZXJzLzExMDk2L0Rlc2t0b3AvU3RhY2svRmFzdEFQUC9jb20ubmp1c3Quc3RhY2svc3JjL1Bob3RvL2luZGV4LnV4P2MyNDAiLCJ3ZWJwYWNrOi8vL2M6L1VzZXJzLzExMDk2L0Rlc2t0b3AvU3RhY2svRmFzdEFQUC9jb20ubmp1c3Quc3RhY2svc3JjL1Bob3RvL2luZGV4LnV4Pzk0N2MiLCJ3ZWJwYWNrOi8vL2M6L1VzZXJzLzExMDk2L0Rlc2t0b3AvU3RhY2svRmFzdEFQUC9jb20ubmp1c3Quc3RhY2svc3JjL1Bob3RvL2luZGV4LnV4P2I4ZjEiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDcwKTtcbiIsInZhciAkYXBwX3RlbXBsYXRlJCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXRlbXBsYXRlLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBGYXN0QXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXRlbXBsYXRlcyEuL2luZGV4LnV4XCIpXG52YXIgJGFwcF9zdHlsZSQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBGYXN0QXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBGYXN0QXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1zdHlsZS1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9YzpcXFxcVXNlcnNcXFxcMTEwOTZcXFxcRGVza3RvcFxcXFxTdGFja1xcXFxGYXN0QVBQXFxcXGNvbS5uanVzdC5zdGFja1xcXFxzcmNcXFxcUGhvdG9cXFxcaW5kZXgudXghLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgRmFzdEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPWM6XFxcXFVzZXJzXFxcXDExMDk2XFxcXERlc2t0b3BcXFxcU3RhY2tcXFxcRmFzdEFQUFxcXFxjb20ubmp1c3Quc3RhY2tcXFxcc3JjXFxcXFBob3RvXFxcXGluZGV4LnV4IS4vaW5kZXgudXhcIilcbnZhciAkYXBwX3NjcmlwdCQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBGYXN0QXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1zY3JpcHQtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWFjY2Vzcy1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgRmFzdEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1jOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEh1YXdlaSBGYXN0QXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccHJlc2V0LWVudiZwbHVnaW5zW109YzpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIdWF3ZWkgRmFzdEFwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHBsdWdpbi10cmFuc2Zvcm0tbW9kdWxlcy1jb21tb25qcyZwbHVnaW5zW109YzpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIdWF3ZWkgRmFzdEFwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcanN4LWxvYWRlci5qcyZjb21tZW50cz1mYWxzZSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBGYXN0QXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi9pbmRleC51eFwiKVxuXG4kYXBwX2RlZmluZSQoJ0BhcHAtY29tcG9uZW50L2luZGV4JywgW10sIGZ1bmN0aW9uKCRhcHBfcmVxdWlyZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfbW9kdWxlJCl7XG4gICAgICRhcHBfc2NyaXB0JCgkYXBwX21vZHVsZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfcmVxdWlyZSQpXG4gICAgIGlmICgkYXBwX2V4cG9ydHMkLl9fZXNNb2R1bGUgJiYgJGFwcF9leHBvcnRzJC5kZWZhdWx0KSB7XG4gICAgICAgICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cyA9ICRhcHBfZXhwb3J0cyQuZGVmYXVsdFxuICAgICAgICB9XG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnRlbXBsYXRlID0gJGFwcF90ZW1wbGF0ZSRcbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMuc3R5bGUgPSAkYXBwX3N0eWxlJFxufSlcblxuJGFwcF9ib290c3RyYXAkKCdAYXBwLWNvbXBvbmVudC9pbmRleCcseyBwYWNrYWdlck5hbWU6J2ZhLXRvb2xraXQnLCBwYWNrYWdlclZlcnNpb246ICcyLjAuMC1TdGFibGUuMzAxJ30pIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImF0dHJcIjoge30sXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcImNvbnRhaW5lclwiXG4gIF0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImNhbWVyYVwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuZGlzcGxheXVyaX1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiaW1hZ2VcIixcbiAgICAgICAgICAgIFwiaW1hZ2UtY292ZXJcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgXCJjbGlja1wiOiBcInZpZXdQaG90b1wiLFxuICAgICAgICAgICAgXCJsb25ncHJlc3NcIjogXCJ1bmRvUGhvdG9cIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiaW1hZ2Utd2FsbFwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJpbWFnZS13YWxsLWNvbnRhaW5lclwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiaW1hZ2Utd2FsbC1saXN0XCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICBcInJlcGVhdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudXJpc30sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiaW1hZ2Utd2FsbC1wcm9kdWN0XCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaW1hZ2Utd2FsbC1pbWFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uIChldnQpe3RoaXMuc2VsZWN0UGhvdG8odGhpcyxldnQpfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibG9uZ3ByZXNzXCI6IGZ1bmN0aW9uIChldnQpe3RoaXMuZGVsZXRlUGhvdG8odGhpcyxldnQpfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwibGlzdC1jZW50ZXJcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJzcmNcIjogXCIvUGhvdG8vaW1nL3Rha2VQaG90by5wbmdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJidG5cIixcbiAgICAgICAgICAgIFwiaW1hZ2UtY29udGFpblwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICBcImNsaWNrXCI6IFwidGFrZVBob3RvXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInNyY1wiOiBcIi9QaG90by9pbWcvcGlja1Bob3RvLnBuZ1wiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImJ0blwiLFxuICAgICAgICAgICAgXCJpbWFnZS1jb250YWluXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgIFwiY2xpY2tcIjogXCJwaWNrUGhvdG9cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwic3JjXCI6IFwiL1Bob3RvL2ltZy9lZGl0UGhvdG8ucG5nXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiYnRuXCIsXG4gICAgICAgICAgICBcImltYWdlLWNvbnRhaW5cIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgXCJjbGlja1wiOiBcImVkaXRQaG90b1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJzcmNcIjogXCIvUGhvdG8vaW1nL2NsZWFyUGhvdG8ucG5nXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiYnRuXCIsXG4gICAgICAgICAgICBcImltYWdlLWNvbnRhaW5cIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgXCJjbGlja1wiOiBcImNsZWFyUGhvdG9cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwic3JjXCI6IFwiL1Bob3RvL2ltZy91cGxvYWRQaG90by5wbmdcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJidG5cIixcbiAgICAgICAgICAgIFwiaW1hZ2UtY29udGFpblwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICBcImNsaWNrXCI6IFwidXBsb2FkUGhvdG9cIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIi5jb250YWluZXJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduQ29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwiLmNhbWVyYVwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCI4MDBweFwiLFxuICAgIFwicG9zaXRpb25cIjogXCJmaXhlZFwiXG4gIH0sXG4gIFwiLmltYWdlXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTAwJVwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwiLmltYWdlLXdhbGxcIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiODAxcHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjEwMHB4XCJcbiAgfSxcbiAgXCIuaW1hZ2Utd2FsbC1jb250YWluZXJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwid2lkdGhcIjogXCIxMDAlXCJcbiAgfSxcbiAgXCIuaW1hZ2Utd2FsbC1saXN0XCI6IHtcbiAgICBcImZsZXhXcmFwXCI6IFwid3JhcFwiXG4gIH0sXG4gIFwiLmltYWdlLXdhbGwtcHJvZHVjdFwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCIxODcuNXB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjI1JVwiXG4gIH0sXG4gIFwiLmltYWdlLXdhbGwtaW1hZ2VcIjoge1xuICAgIFwib2JqZWN0Rml0XCI6IFwiY292ZXJcIixcbiAgICBcImhlaWdodFwiOiBcIjEwMCVcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMXB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjFweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMXB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMXB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCIubGlzdC1jZW50ZXJcIjoge1xuICAgIFwicG9zaXRpb25cIjogXCJmaXhlZFwiLFxuICAgIFwiYm90dG9tXCI6IFwiMHB4XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmMmYyZjJcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTAwcHhcIlxuICB9LFxuICBcIi5idG5cIjoge1xuICAgIFwid2lkdGhcIjogXCI2NHB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI2NHB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiNDBweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI0MHB4XCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxNnB4XCJcbiAgfSxcbiAgXCIuaW1hZ2UtY29udGFpblwiOiB7XG4gICAgXCJvYmplY3RGaXRcIjogXCJjb250YWluXCJcbiAgfSxcbiAgXCIuaW1hZ2UtY292ZXJcIjoge1xuICAgIFwib2JqZWN0Rml0XCI6IFwiY292ZXJcIlxuICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsICRhcHBfcmVxdWlyZSQpe1widXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfc3lzdGVtID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdCgkYXBwX3JlcXVpcmUkKFwiQGFwcC1tb2R1bGUvc3lzdGVtLm1lZGlhXCIpKTtcblxudmFyIF9zeXN0ZW0yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdCgkYXBwX3JlcXVpcmUkKFwiQGFwcC1tb2R1bGUvc3lzdGVtLnByb21wdFwiKSk7XG5cbnZhciBfc3lzdGVtMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoJGFwcF9yZXF1aXJlJChcIkBhcHAtbW9kdWxlL3N5c3RlbS5pbWFnZVwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG52YXIgX2RlZmF1bHQgPSB7XG4gIGRhdGE6IHtcbiAgICB1cmlzOiBbJ2h0dHBzOi8vbHVjYXN6aGFvLTEyNTg5MDYzMzQuY29zLmFwLWd1YW5nemhvdS5teXFjbG91ZC5jb20vY292ZXIvNzM5MzQ5MTZfcDAuanBnJywgJ2h0dHBzOi8vbHVjYXN6aGFvLTEyNTg5MDYzMzQuY29zLmFwLWd1YW5nemhvdS5teXFjbG91ZC5jb20vc3RhY2svcG9zdC8wMS5qcGcnLCAnaHR0cHM6Ly9sdWNhc3poYW8tMTI1ODkwNjMzNC5jb3MuYXAtZ3Vhbmd6aG91Lm15cWNsb3VkLmNvbS9zdGFjay9wb3N0L0FNX0dvb2dsZV81MjUucG5nJywgJ2h0dHBzOi8vbHVjYXN6aGFvLTEyNTg5MDYzMzQuY29zLmFwLWd1YW5nemhvdS5teXFjbG91ZC5jb20vc3RhY2svcG9zdC9BTV9CaW5nXzIxNy5wbmcnLCAnaHR0cHM6Ly9sdWNhc3poYW8tMTI1ODkwNjMzNC5jb3MuYXAtZ3Vhbmd6aG91Lm15cWNsb3VkLmNvbS9zdGFjay9wb3N0L0FNX0JpbmdfMjIyLnBuZycsICdodHRwczovL2x1Y2Fzemhhby0xMjU4OTA2MzM0LmNvcy5hcC1ndWFuZ3pob3UubXlxY2xvdWQuY29tL3N0YWNrL3Bvc3QvQU1fR29vZ2xlXzA2Ny5wbmcnLCAnaHR0cHM6Ly9sdWNhc3poYW8tMTI1ODkwNjMzNC5jb3MuYXAtZ3Vhbmd6aG91Lm15cWNsb3VkLmNvbS9jb3Zlci83MzkzNDkxNl9wMC5qcGcnLCAnaHR0cHM6Ly9sdWNhc3poYW8tMTI1ODkwNjMzNC5jb3MuYXAtZ3Vhbmd6aG91Lm15cWNsb3VkLmNvbS9zdGFjay9wb3N0LzAxLmpwZycsICdodHRwczovL2x1Y2Fzemhhby0xMjU4OTA2MzM0LmNvcy5hcC1ndWFuZ3pob3UubXlxY2xvdWQuY29tL3N0YWNrL3Bvc3QvQU1fR29vZ2xlXzUyNS5wbmcnLCAnaHR0cHM6Ly9sdWNhc3poYW8tMTI1ODkwNjMzNC5jb3MuYXAtZ3Vhbmd6aG91Lm15cWNsb3VkLmNvbS9zdGFjay9wb3N0L0FNX0JpbmdfMjE3LnBuZycsICdodHRwczovL2x1Y2Fzemhhby0xMjU4OTA2MzM0LmNvcy5hcC1ndWFuZ3pob3UubXlxY2xvdWQuY29tL3N0YWNrL3Bvc3QvQU1fQmluZ18yMjIucG5nJywgJ2h0dHBzOi8vbHVjYXN6aGFvLTEyNTg5MDYzMzQuY29zLmFwLWd1YW5nemhvdS5teXFjbG91ZC5jb20vc3RhY2svcG9zdC9BTV9Hb29nbGVfMDY3LnBuZycsICdodHRwczovL2x1Y2Fzemhhby0xMjU4OTA2MzM0LmNvcy5hcC1ndWFuZ3pob3UubXlxY2xvdWQuY29tL2NvdmVyLzczOTM0OTE2X3AwLmpwZycsICdodHRwczovL2x1Y2Fzemhhby0xMjU4OTA2MzM0LmNvcy5hcC1ndWFuZ3pob3UubXlxY2xvdWQuY29tL3N0YWNrL3Bvc3QvMDEuanBnJywgJ2h0dHBzOi8vbHVjYXN6aGFvLTEyNTg5MDYzMzQuY29zLmFwLWd1YW5nemhvdS5teXFjbG91ZC5jb20vc3RhY2svcG9zdC9BTV9Hb29nbGVfNTI1LnBuZycsICdodHRwczovL2x1Y2Fzemhhby0xMjU4OTA2MzM0LmNvcy5hcC1ndWFuZ3pob3UubXlxY2xvdWQuY29tL3N0YWNrL3Bvc3QvQU1fQmluZ18yMTcucG5nJywgJ2h0dHBzOi8vbHVjYXN6aGFvLTEyNTg5MDYzMzQuY29zLmFwLWd1YW5nemhvdS5teXFjbG91ZC5jb20vc3RhY2svcG9zdC9BTV9CaW5nXzIyMi5wbmcnLCAnaHR0cHM6Ly9sdWNhc3poYW8tMTI1ODkwNjMzNC5jb3MuYXAtZ3Vhbmd6aG91Lm15cWNsb3VkLmNvbS9zdGFjay9wb3N0L0FNX0dvb2dsZV8wNjcucG5nJywgJ2h0dHBzOi8vbHVjYXN6aGFvLTEyNTg5MDYzMzQuY29zLmFwLWd1YW5nemhvdS5teXFjbG91ZC5jb20vY292ZXIvNzM5MzQ5MTZfcDAuanBnJywgJ2h0dHBzOi8vbHVjYXN6aGFvLTEyNTg5MDYzMzQuY29zLmFwLWd1YW5nemhvdS5teXFjbG91ZC5jb20vc3RhY2svcG9zdC8wMS5qcGcnXSxcbiAgICBpZHg6IC0xLFxuICAgIGRpc3BsYXl1cmk6ICcnLFxuICAgIGJhY2t1cDogW11cbiAgfSxcbiAgdGFrZVBob3RvOiBmdW5jdGlvbiB0YWtlUGhvdG8oKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gICAgX3N5c3RlbVtcImRlZmF1bHRcIl0udGFrZVBob3RvKHtcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MoZGF0YSkge1xuICAgICAgICB0aGF0LnVyaXMucHVzaChkYXRhLnVyaSk7XG4gICAgICAgIHRoYXQuaWR4ID0gdGhhdC51cmlzLmxlbmd0aCAtIDE7XG4gICAgICAgIHRoYXQuZGlzcGxheXVyaSA9IGRhdGEudXJpO1xuICAgICAgICB0aGF0LmJhY2t1cCA9IFtdO1xuICAgICAgICBjb25zb2xlLmxvZygnbWVkaWEudGFrZVBob3RvIHN1Y2Nlc3MnKTtcbiAgICAgIH0sXG4gICAgICBmYWlsOiBmdW5jdGlvbiBmYWlsKGVycm1zZywgZXJyY29kZSkge1xuICAgICAgICBfc3lzdGVtMltcImRlZmF1bHRcIl0uc2hvd1RvYXN0KHtcbiAgICAgICAgICBtZXNzYWdlOiAn5ouN5pGE5aSx6LSlJyxcbiAgICAgICAgICBpbWFnZTogJy9Db21tb24vbG9nby5wbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdtZWRpYS50YWtlUGhvdG8gZmFpbCAoJyArIGVycmNvZGUgKyAnKSAnICsgZXJybXNnKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgcGlja1Bob3RvOiBmdW5jdGlvbiBwaWNrUGhvdG8oKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gICAgX3N5c3RlbVtcImRlZmF1bHRcIl0ucGlja0ltYWdlKHtcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MoZGF0YSkge1xuICAgICAgICB0aGF0LnVyaXMucHVzaChkYXRhLnVyaSk7XG4gICAgICAgIHRoYXQuaWR4ID0gdGhhdC51cmlzLmxlbmd0aCAtIDE7XG4gICAgICAgIHRoYXQuZGlzcGxheXVyaSA9IGRhdGEudXJpO1xuICAgICAgICB0aGF0LmJhY2t1cCA9IFtdO1xuICAgICAgICBjb25zb2xlLmxvZygnbWVkaWEucGlja0ltYWdlIHN1Y2Nlc3MnKTtcbiAgICAgIH0sXG4gICAgICBmYWlsOiBmdW5jdGlvbiBmYWlsKGVycm1zZywgZXJyY29kZSkge1xuICAgICAgICBfc3lzdGVtMltcImRlZmF1bHRcIl0uc2hvd1RvYXN0KHtcbiAgICAgICAgICBtZXNzYWdlOiBcIumAieWPluWksei0pVwiLFxuICAgICAgICAgIGltYWdlOiAnL0NvbW1vbi9sb2dvLnBuZydcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ21lZGlhLnBpY2tJbWFnZSBmYWlsICgnICsgZXJyY29kZSArICcpICcgKyBlcnJtc2cpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBlZGl0UGhvdG86IGZ1bmN0aW9uIGVkaXRQaG90bygpIHtcbiAgICBpZiAodGhpcy5kaXNwbGF5dXJpICE9PSAnJykge1xuICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gICAgICBfc3lzdGVtM1tcImRlZmF1bHRcIl0uZWRpdEltYWdlKHtcbiAgICAgICAgdXJpOiB0aGF0LmRpc3BsYXl1cmksXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MoZGF0YSkge1xuICAgICAgICAgIHRoYXQudXJpcy5zcGxpY2UodGhhdC5pZHgsIDEsIGRhdGEudXJpKTtcbiAgICAgICAgICB0aGF0LmJhY2t1cC5wdXNoKHRoYXQuZGlzcGxheXVyaSk7XG4gICAgICAgICAgdGhhdC5kaXNwbGF5dXJpID0gZGF0YS51cmk7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2ltYWdlLmVkaXRJbWFnZSBzdWNjZXNzJyk7XG4gICAgICAgIH0sXG4gICAgICAgIGZhaWw6IGZ1bmN0aW9uIGZhaWwoZXJybXNnLCBlcnJjb2RlKSB7XG4gICAgICAgICAgX3N5c3RlbTJbXCJkZWZhdWx0XCJdLnNob3dUb2FzdCh7XG4gICAgICAgICAgICBtZXNzYWdlOiBcIue8lui+keWksei0pVwiLFxuICAgICAgICAgICAgaW1hZ2U6ICcvQ29tbW9uL2xvZ28ucG5nJ1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgY29uc29sZS5sb2coJ21lZGlhLmVkaXRJbWFnZSBmYWlsICgnICsgZXJyY29kZSArICcpICcgKyBlcnJtc2cpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIHVwbG9hZFBob3RvOiBmdW5jdGlvbiB1cGxvYWRQaG90bygpIHtcbiAgICBpZiAodGhpcy51cmlzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIH1cbiAgfSxcbiAgY2xlYXJQaG90bzogZnVuY3Rpb24gY2xlYXJQaG90bygpIHtcbiAgICBpZiAodGhpcy51cmlzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgdGhpcy51cmlzID0gW107XG4gICAgICB0aGlzLmlkeCA9IC0xO1xuICAgICAgdGhpcy5kaXNwbGF5dXJpID0gJyc7XG4gICAgICB0aGlzLmJhY2t1cCA9IFtdO1xuXG4gICAgICBfc3lzdGVtMltcImRlZmF1bHRcIl0uc2hvd1RvYXN0KHtcbiAgICAgICAgbWVzc2FnZTogXCLmuIXnqbrnm7jniYdcIlxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICB2aWV3UGhvdG86IGZ1bmN0aW9uIHZpZXdQaG90bygpIHtcbiAgICBpZiAodGhpcy5kaXNwbGF5dXJpICE9PSAnJykge1xuICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gICAgICBfc3lzdGVtW1wiZGVmYXVsdFwiXS5wcmV2aWV3SW1hZ2Uoe1xuICAgICAgICBjdXJyZW50OiB0aGF0LmRpc3BsYXl1cmksXG4gICAgICAgIHVyaXM6IHRoYXQudXJpcyxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcygpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygncHJldmlld0ltYWdlIHN1Y2Nlc3MnKTtcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogZnVuY3Rpb24gZmFpbChlcnJtc2csIGVycmNvZGUpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygncHJldmlld0ltYWdlIGZhaWwgKCcgKyBlcnJjb2RlICsgJykgJyArIGVycm1zZyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgc2VsZWN0UGhvdG86IGZ1bmN0aW9uIHNlbGVjdFBob3RvKG9iaikge1xuICAgIGlmICh0aGlzLmlkeCAhPT0gb2JqLiRpZHgpIHtcbiAgICAgIHRoaXMuaWR4ID0gb2JqLiRpZHg7XG4gICAgICB0aGlzLmRpc3BsYXl1cmkgPSB0aGlzLnVyaXNbdGhpcy5pZHhdO1xuICAgICAgdGhpcy5iYWNrdXAgPSBbXTtcbiAgICB9XG4gIH0sXG4gIGRlbGV0ZVBob3RvOiBmdW5jdGlvbiBkZWxldGVQaG90byhvYmopIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgICBfc3lzdGVtMltcImRlZmF1bHRcIl0uc2hvd0RpYWxvZyh7XG4gICAgICBtZXNzYWdlOiAn5Yig6Zmk6K+l55u454mH77yfJyxcbiAgICAgIGJ1dHRvbnM6IFt7XG4gICAgICAgIHRleHQ6ICfnoa7orqQnLFxuICAgICAgICBjb2xvcjogJyMzM2RkNDQnXG4gICAgICB9LCB7XG4gICAgICAgIHRleHQ6ICflj5bmtognLFxuICAgICAgICBjb2xvcjogJyMzM2RkNDQnXG4gICAgICB9XSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MoZGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInByb21wdC5zaG93RGlhbG9nIHN1Y2Nlc3NcIik7XG5cbiAgICAgICAgaWYgKGRhdGEuaW5kZXggPT09IDApIHtcbiAgICAgICAgICB0aGF0LnVyaXMuc3BsaWNlKG9iai4kaWR4LCAxKTtcblxuICAgICAgICAgIGlmICh0aGF0LnVyaXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICB0aGF0LmlkeCA9IC0xO1xuICAgICAgICAgICAgdGhhdC5kaXNwbGF5dXJpID0gJyc7XG4gICAgICAgICAgICB0aGF0LmJhY2t1cCA9IFtdO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhhdC5pZHggPiBvYmouJGlkeCkge1xuICAgICAgICAgICAgdGhhdC5pZHggLT0gMTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoYXQuaWR4ID09PSBvYmouJGlkeCkge1xuICAgICAgICAgICAgaWYgKHRoYXQuaWR4ID49IHRoYXQudXJpcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgdGhhdC5pZHggPSB0aGF0LnVyaXMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhhdC5kaXNwbGF5dXJpID0gdGhhdC51cmlzW3RoYXQuaWR4XTtcbiAgICAgICAgICAgIHRoYXQuYmFja3VwID0gW107XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24gZmFpbChlcnJtc2csIGVycmNvZGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJwcm9tcHQuc2hvd0RpYWxvZyBmYWlsIChcIiArIGVycmNvZGUgKyBcIikgXCIgKyBlcnJtc2cpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICB1bmRvUGhvdG86IGZ1bmN0aW9uIHVuZG9QaG90bygpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy5iYWNrdXAgIT09ICcnKSB7XG4gICAgICBfc3lzdGVtMltcImRlZmF1bHRcIl0uc2hvd0RpYWxvZyh7XG4gICAgICAgIG1lc3NhZ2U6ICflj5bmtojnvJbovpHvvJ8nLFxuICAgICAgICBidXR0b25zOiBbe1xuICAgICAgICAgIHRleHQ6ICfnoa7orqQnLFxuICAgICAgICAgIGNvbG9yOiAnIzMzZGQ0NCdcbiAgICAgICAgfSwge1xuICAgICAgICAgIHRleHQ6ICflj5bmtognLFxuICAgICAgICAgIGNvbG9yOiAnIzMzZGQ0NCdcbiAgICAgICAgfV0sXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MoZGF0YSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwicHJvbXB0LnNob3dEaWFsb2cgc3VjY2Vzc1wiKTtcblxuICAgICAgICAgIGlmIChkYXRhLmluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICB0aGF0LnVyaXMuc3BsaWNlKHRoYXQuaWR4LCAxLCB0aGF0LmJhY2t1cC5wb3AoKSk7XG4gICAgICAgICAgICB0aGF0LmRpc3BsYXl1cmkgPSB0aGF0LnVyaXNbdGhhdC5pZHhdO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogZnVuY3Rpb24gZmFpbChlcnJtc2csIGVycmNvZGUpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInByb21wdC5zaG93RGlhbG9nIGZhaWwgKFwiICsgZXJyY29kZSArIFwiKSBcIiArIGVycm1zZyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG52YXIgbW9kdWxlT3duID0gZXhwb3J0cy5kZWZhdWx0IHx8IG1vZHVsZS5leHBvcnRzO1xudmFyIGFjY2Vzc29ycyA9IFsncHVibGljJywgJ3Byb3RlY3RlZCcsICdwcml2YXRlJ107XG5pZiAobW9kdWxlT3duLmRhdGEgJiYgYWNjZXNzb3JzLnNvbWUoZnVuY3Rpb24gKGFjYykge1xuICAgIHJldHVybiBtb2R1bGVPd25bYWNjXTtcbiAgfSkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdGb3IgVk0gb2JqZWN0cywgYXR0cmlidXRlIGRhdGEgbXVzdCBub3QgY29leGlzdCB3aXRoIHB1YmxpYywgcHJvdGVjdGVkLCBvciBwcml2YXRlLiBQbGVhc2UgcmVwbGFjZSBkYXRhIHdpdGggcHVibGljLicpO1xufSBlbHNlIGlmICghbW9kdWxlT3duLmRhdGEpIHtcbiAgbW9kdWxlT3duLmRhdGEgPSB7fTtcbiAgbW9kdWxlT3duLl9kZXNjcmlwdG9yID0ge307XG4gIGFjY2Vzc29ycy5mb3JFYWNoKGZ1bmN0aW9uKGFjYykge1xuICAgIHZhciBhY2NUeXBlID0gdHlwZW9mIG1vZHVsZU93blthY2NdO1xuICAgIGlmIChhY2NUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgbW9kdWxlT3duLmRhdGEgPSBPYmplY3QuYXNzaWduKG1vZHVsZU93bi5kYXRhLCBtb2R1bGVPd25bYWNjXSk7XG4gICAgICBmb3IgKHZhciBuYW1lIGluIG1vZHVsZU93blthY2NdKSB7XG4gICAgICAgIG1vZHVsZU93bi5fZGVzY3JpcHRvcltuYW1lXSA9IHthY2Nlc3MgOiBhY2N9O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYWNjVHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc29sZS53YXJuKCdGb3IgVk0gb2JqZWN0cywgYXR0cmlidXRlICcgKyBhY2MgKyAnIHZhbHVlIG11c3Qgbm90IGJlIGEgZnVuY3Rpb24uIENoYW5nZSB0aGUgdmFsdWUgdG8gYW4gb2JqZWN0LicpO1xuICAgIH1cbiAgfSk7XG59fSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMzSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMvREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=