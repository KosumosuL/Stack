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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(4)
__webpack_require__(8)
var $app_template$ = __webpack_require__(12)
var $app_style$ = __webpack_require__(13)
var $app_script$ = __webpack_require__(14)

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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(5)
var $app_style$ = __webpack_require__(6)
var $app_script$ = __webpack_require__(7)

$app_define$('@app-component/comment_list', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "comment-container"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "content-list"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "content-left"
          ],
          "events": {
            "click": function (evt){this.clickToUserDetail(this.phonenum,evt)}
          },
          "children": [
            {
              "type": "image",
              "attr": {
                "src": function () {return this.image}
              },
              "classList": [
                "icon"
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "content-right"
          ],
          "children": [
            {
              "type": "text",
              "attr": {},
              "children": [
                {
                  "type": "a",
                  "attr": {
                    "color": "black",
                    "fontWeight": "bold",
                    "value": function () {return this.username}
                  },
                  "events": {
                    "click": function (evt){this.clickToUserDetail(this.phonenum,evt)}
                  }
                },
                {
                  "type": "span",
                  "attr": {
                    "value": " "
                  }
                },
                {
                  "type": "span",
                  "attr": {
                    "color": "black",
                    "value": function () {return this.comment}
                  }
                }
              ]
            },
            {
              "type": "text",
              "attr": {
                "color": "gray",
                "fontSize": "27px",
                "value": function () {return this.time}
              }
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "delete"
          ],
          "shown": function () {return this.isself===true},
          "children": [
            {
              "type": "image",
              "attr": {
                "src": "/Common/delete_gray.png"
              },
              "classList": [
                "btn"
              ],
              "events": {
                "click": "delete"
              }
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = {
  ".icon": {
    "width": "100%",
    "height": "100%",
    "objectFit": "cover",
    "borderRadius": "44px",
    "borderTopColor": "#dc143c",
    "borderRightColor": "#dc143c",
    "borderBottomColor": "#dc143c",
    "borderLeftColor": "#dc143c",
    "borderTopWidth": "4px",
    "borderRightWidth": "4px",
    "borderBottomWidth": "4px",
    "borderLeftWidth": "4px"
  },
  ".comment-container": {
    "marginTop": "0px",
    "marginRight": "34px",
    "marginBottom": "0px",
    "marginLeft": "34px",
    "flexDirection": "column"
  },
  ".btn": {
    "width": "50px",
    "height": "50px",
    "marginTop": "19px",
    "marginRight": "0px",
    "marginBottom": "19px",
    "marginLeft": "19px",
    "objectFit": "contain"
  },
  ".delete": {
    "justifyContent": "flex-end"
  },
  ".content-list": {
    "width": "100%",
    "marginTop": "20px"
  },
  ".content-left": {
    "width": "88px",
    "height": "88px",
    "marginRight": "33px",
    "marginTop": "10px"
  },
  ".content-right": {
    "width": "560px",
    "height": "100%",
    "flexDirection": "column",
    "justifyContent": "center"
  }
}

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.prompt"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.router"));

var _system3 = _interopRequireDefault($app_require$("@app-module/system.fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  props: ['info', 'idx', 'image', 'username', 'phonenum', 'comment', 'time', 'isself', 'cid', 'pid'],
  data: {
    postid: -1
  },
  post: function post(url, data) {
    return new Promise(function (resolve, reject) {
      _system3["default"].fetch({
        url: url,
        data: data,
        responseType: 'json',
        method: 'post',
        success: function success(data) {
          console.log("post success");
          resolve(data);
        },
        fail: function fail(errmsg, errcode) {
          console.log("post fail");
          reject(errcode, errmsg);
        }
      });
    });
  },
  "delete": function _delete() {
    var promise = this.post("http://114.116.248.233:12345/comment/uncomment_post", {
      "pid": this.pid,
      "cid": this.cid
    });

    _system["default"].showToast({
      message: 'delete',
      image: '/Common/logo.png'
    });

    this.info.deleteid = this.idx;
  },
  clickToUserDetail: function clickToUserDetail(pn) {
    if (pn === this.$app.$def.data.phonenum) {
      _system2["default"].push({
        uri: '/Mine'
      });
    } else {
      _system2["default"].push({
        uri: "/UserDetail",
        params: {
          phonenum: pn
        }
      });
    }
  },
  onInit: function onInit() {
    this.$watch('swiperdata', 'handleUpdate');
    this.postid = this.idx;
    this.pipe = this.info;
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

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(9)
var $app_style$ = __webpack_require__(10)
var $app_script$ = __webpack_require__(11)

$app_define$('@app-component/comment', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "comment-container"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "content-list"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "content-left"
          ],
          "children": [
            {
              "type": "image",
              "attr": {
                "src": function () {return this.userphoto}
              },
              "classList": [
                "icon"
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "content-mid"
          ],
          "children": [
            {
              "type": "textarea",
              "attr": {
                "id": "textarea",
                "placeholder": "Comment here..."
              },
              "classList": [
                "textarea"
              ],
              "id": "textarea",
              "events": {
                "change": "onGetComment"
              }
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "content-right"
          ],
          "children": [
            {
              "type": "text",
              "attr": {},
              "children": [
                {
                  "type": "a",
                  "attr": {
                    "color": "blue",
                    "value": function () {return 'Post'}
                  },
                  "events": {
                    "click": "clickToComment"
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = {
  ".icon": {
    "width": "100%",
    "height": "100%",
    "objectFit": "cover",
    "borderRadius": "44px",
    "borderTopColor": "#dc143c",
    "borderRightColor": "#dc143c",
    "borderBottomColor": "#dc143c",
    "borderLeftColor": "#dc143c",
    "borderTopWidth": "4px",
    "borderRightWidth": "4px",
    "borderBottomWidth": "4px",
    "borderLeftWidth": "4px"
  },
  ".comment-container": {
    "flexDirection": "column"
  },
  ".content-list": {
    "justifyContent": "space-between",
    "position": "fixed",
    "width": "100%",
    "bottom": "0px",
    "backgroundColor": "#FFFFFF"
  },
  ".content-left": {
    "width": "88px",
    "height": "88px",
    "marginLeft": "20px",
    "marginRight": "43px",
    "marginTop": "16px"
  },
  ".content-mid": {
    "width": "500px",
    "height": "100%",
    "flexDirection": "column",
    "justifyContent": "center"
  },
  ".textarea": {
    "marginTop": "30px"
  },
  ".content-right": {
    "width": "60px",
    "height": "100%",
    "marginRight": "20px",
    "flexDirection": "column",
    "justifyContent": "center"
  }
}

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  data: {
    comment: '',
    props: ['userphoto', 'pid', 'comments', 'commentnumber']
  },
  post: function post(url, data) {
    return new Promise(function (resolve, reject) {
      _system["default"].fetch({
        url: url,
        data: data,
        responseType: 'json',
        method: 'post',
        success: function success(data) {
          console.log("post success");
          resolve(data);
        },
        fail: function fail(errmsg, errcode) {
          console.log("post fail");
          reject(errcode, errmsg);
        }
      });
    });
  },
  onGetComment: function onGetComment(e) {
    this.comment = e.text;
  },
  clickToComment: function clickToComment() {
    console.log(this.comment);

    if (this.comment !== '') {
      var date = new Date();
      var ctime = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
      var promise = this.post("http://114.116.248.233:12345/comment/comment_post", {
        "phonenum": this.$app.$def.data.phonenum,
        "pid": this.pid,
        "ctime": ctime,
        "content": this.comment
      });
      this.comments.unshift({
        "comment": this.comment,
        "username": this.$app.$def.data.username,
        "phonenum": this.$app.$def.data.phonenum,
        "image": this.userphoto,
        "time": ctime
      });
      this.$element('textarea').focus({
        focus: false
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

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "container"
  ],
  "children": [
    {
      "type": "refresh",
      "attr": {
        "offset": "130px",
        "refreshing": function () {return this.isRefreshing}
      },
      "events": {
        "refresh": "refresh"
      },
      "classList": [
        "refresh"
      ],
      "children": [
        {
          "type": "list",
          "attr": {},
          "children": [
            {
              "type": "list-item",
              "attr": {
                "type": function () {return 'listItem'+(this.$idx)}
              },
              "repeat": function () {return this.comments},
              "children": [
                {
                  "type": "comment_list",
                  "attr": {
                    "image": function () {return this.$item.image},
                    "username": function () {return this.$item.username},
                    "phonenum": function () {return this.$item.phonenum},
                    "comment": function () {return this.$item.comment},
                    "time": function () {return this.$item.time},
                    "isself": function () {return this.$item.isself},
                    "cid": function () {return this.$item.cid},
                    "pid": function () {return this.pid},
                    "info": function () {return this.info},
                    "idx": function () {return this.$idx}
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "type": "comment",
      "attr": {
        "userphoto": function () {return this.userphoto},
        "pid": function () {return this.pid},
        "comments": function () {return this.comments}
      }
    }
  ]
}

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignContent": "center",
    "alignItems": "center",
    "backgroundColor": "#ffffff"
  },
  ".refresh": {
    "backgroundColor": "#ffffff",
    "progressColor": "#0faeff"
  }
}

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

var _system = _interopRequireDefault($app_require$("@app-module/system.fetch"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.prompt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = {
  data: {
    isRefreshing: false,
    pid: '',
    comments: [],
    userphoto: "https://lucaszhao-1258906334.cos.ap-guangzhou.myqcloud.com/stack/31626668.png",
    info: {
      deleteid: -1
    }
  },
  refreshComment: function refreshComment(that) {
    return function (data) {
      that.comments = data.data.message.map(that.mapPost);
      that.isRefreshing = false;
      clearTimeout(that.timeout);
    };
  },
  showError: function showError(that) {
    return function (errcode, errmsg) {
      console.log(errcode + ' ' + errmsg);

      _system2["default"].showToast({
        message: "请求错误",
        image: '/Common/logo.png'
      });

      that.isRefreshing = false;
      clearTimeout(that.timeout);
    };
  },
  post: function post(url, data) {
    return new Promise(function (resolve, reject) {
      _system["default"].fetch({
        url: url,
        data: data,
        responseType: 'json',
        method: 'post',
        success: function success(data) {
          console.log("post success");
          resolve(data);
        },
        fail: function fail(errmsg, errcode) {
          console.log("post fail");
          reject(errcode, errmsg);
        }
      });
    });
  },
  refresh: function refresh(e) {
    var that = this;
    this.isRefreshing = e.refreshing;
    var promise = this.post("http://114.116.248.233:12345/comment/get_all_comments", {
      "pid": that.pid,
      "phonenum": "18260071012"
    });
    this.timeout = setTimeout(function () {
      that.isRefreshing = false;

      _system2["default"].showToast({
        message: "请求超时",
        image: '/Common/logo.png'
      });
    }, 5000);
    promise.then(this.refreshComment(this), this.showError(this));
  },
  mapPost: function mapPost(item) {
    return {
      cid: item.cid,
      comment: item.content,
      username: item.user.username,
      phonenum: item.user.phonenum,
      image: item.user.photo,
      time: item.ctime,
      isself: item.isself
    };
  },
  onInit: function onInit() {
    this.$page.setTitleBar({
      text: '评论',
      textColor: '#1a1a1a',
      opacity: 1,
      backgroundColor: '#f2f2f2',
      menu: false
    });
    var promise = this.post("http://114.116.248.233:12345/comment/get_all_comments", {
      "pid": this.pid,
      "phonenum": "18260071012"
    });
    this.timeout = setTimeout(function () {
      _system2["default"].showToast({
        message: "请求超时",
        image: '/Common/logo.png'
      });
    }, 5000);
    promise.then(this.refreshComment(this), this.showError(this));
    this.$watch('info.deleteid', 'handleDelete');
  },
  handleDelete: function handleDelete(newVal, oldVal) {
    console.log('handleDelete ' + newVal);

    if (newVal >= 0 && newVal < this.comments.length) {
      this.comments.splice(newVal, 1);
      this.info.deleteid = -1;
    }
  }
};
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
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRcXENvbW1lbnRzXFxpbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vYzovVXNlcnMveGkvLmZhc3RhcHAtaWRlL3dvcmtzcGFjZS9jb20ubmp1c3Quc3RhY2svc3JjL0NvbW1lbnRzL2luZGV4LnV4Iiwid2VicGFjazovLy9jOi9Vc2Vycy94aS8uZmFzdGFwcC1pZGUvd29ya3NwYWNlL2NvbS5uanVzdC5zdGFjay9zcmMvQ29tbWVudHMvY29tcG9uZW50L2NvbW1lbnRfbGlzdC51eCIsIndlYnBhY2s6Ly8vYzovVXNlcnMveGkvLmZhc3RhcHAtaWRlL3dvcmtzcGFjZS9jb20ubmp1c3Quc3RhY2svc3JjL0NvbW1lbnRzL2NvbXBvbmVudC9jb21tZW50X2xpc3QudXg/MmM5ZCIsIndlYnBhY2s6Ly8vYzovVXNlcnMveGkvLmZhc3RhcHAtaWRlL3dvcmtzcGFjZS9jb20ubmp1c3Quc3RhY2svc3JjL0NvbW1lbnRzL2NvbXBvbmVudC9jb21tZW50X2xpc3QudXg/Zjc0ZCIsIndlYnBhY2s6Ly8vYzovVXNlcnMveGkvLmZhc3RhcHAtaWRlL3dvcmtzcGFjZS9jb20ubmp1c3Quc3RhY2svc3JjL0NvbW1lbnRzL2NvbXBvbmVudC9jb21tZW50X2xpc3QudXg/M2Y1YyIsIndlYnBhY2s6Ly8vYzovVXNlcnMveGkvLmZhc3RhcHAtaWRlL3dvcmtzcGFjZS9jb20ubmp1c3Quc3RhY2svc3JjL0NvbW1lbnRzL2NvbXBvbmVudC9jb21tZW50LnV4Iiwid2VicGFjazovLy9jOi9Vc2Vycy94aS8uZmFzdGFwcC1pZGUvd29ya3NwYWNlL2NvbS5uanVzdC5zdGFjay9zcmMvQ29tbWVudHMvY29tcG9uZW50L2NvbW1lbnQudXg/YTcyZiIsIndlYnBhY2s6Ly8vYzovVXNlcnMveGkvLmZhc3RhcHAtaWRlL3dvcmtzcGFjZS9jb20ubmp1c3Quc3RhY2svc3JjL0NvbW1lbnRzL2NvbXBvbmVudC9jb21tZW50LnV4P2MzYWYiLCJ3ZWJwYWNrOi8vL2M6L1VzZXJzL3hpLy5mYXN0YXBwLWlkZS93b3Jrc3BhY2UvY29tLm5qdXN0LnN0YWNrL3NyYy9Db21tZW50cy9jb21wb25lbnQvY29tbWVudC51eD82NTA4Iiwid2VicGFjazovLy9jOi9Vc2Vycy94aS8uZmFzdGFwcC1pZGUvd29ya3NwYWNlL2NvbS5uanVzdC5zdGFjay9zcmMvQ29tbWVudHMvaW5kZXgudXg/OTFmMSIsIndlYnBhY2s6Ly8vYzovVXNlcnMveGkvLmZhc3RhcHAtaWRlL3dvcmtzcGFjZS9jb20ubmp1c3Quc3RhY2svc3JjL0NvbW1lbnRzL2luZGV4LnV4PzdjZjAiLCJ3ZWJwYWNrOi8vL2M6L1VzZXJzL3hpLy5mYXN0YXBwLWlkZS93b3Jrc3BhY2UvY29tLm5qdXN0LnN0YWNrL3NyYy9Db21tZW50cy9pbmRleC51eD85OTk5Il0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiIsInJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2xvYWRlci5qcz90eXBlPWNvbXBvbmVudCEuL2NvbXBvbmVudC9jb21tZW50X2xpc3QudXg/bmFtZT1jb21tZW50X2xpc3RcIilcbnJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2xvYWRlci5qcz90eXBlPWNvbXBvbmVudCEuL2NvbXBvbmVudC9jb21tZW50LnV4P25hbWU9Y29tbWVudFwiKVxudmFyICRhcHBfdGVtcGxhdGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgRmFzdEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtanNvbi1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgRmFzdEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtdGVtcGxhdGUtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9dGVtcGxhdGVzIS4vaW5kZXgudXhcIilcbnZhciAkYXBwX3N0eWxlJCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXN0eWxlLWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1jOlxcXFxVc2Vyc1xcXFx4aVxcXFwuZmFzdGFwcC1pZGVcXFxcd29ya3NwYWNlXFxcXGNvbS5uanVzdC5zdGFja1xcXFxzcmNcXFxcQ29tbWVudHNcXFxcaW5kZXgudXghLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgRmFzdEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPWM6XFxcXFVzZXJzXFxcXHhpXFxcXC5mYXN0YXBwLWlkZVxcXFx3b3Jrc3BhY2VcXFxcY29tLm5qdXN0LnN0YWNrXFxcXHNyY1xcXFxDb21tZW50c1xcXFxpbmRleC51eCEuL2luZGV4LnV4XCIpXG52YXIgJGFwcF9zY3JpcHQkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgRmFzdEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc2NyaXB0LWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBGYXN0QXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1hY2Nlc3MtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlcj9wcmVzZXRzW109YzpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIdWF3ZWkgRmFzdEFwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHByZXNldC1lbnYmcGx1Z2luc1tdPWM6XFxcXFByb2dyYW0gRmlsZXNcXFxcSHVhd2VpIEZhc3RBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwbHVnaW4tdHJhbnNmb3JtLW1vZHVsZXMtY29tbW9uanMmcGx1Z2luc1tdPWM6XFxcXFByb2dyYW0gRmlsZXNcXFxcSHVhd2VpIEZhc3RBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGpzeC1sb2FkZXIuanMmY29tbWVudHM9ZmFsc2UhLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgRmFzdEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vaW5kZXgudXhcIilcblxuJGFwcF9kZWZpbmUkKCdAYXBwLWNvbXBvbmVudC9pbmRleCcsIFtdLCBmdW5jdGlvbigkYXBwX3JlcXVpcmUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX21vZHVsZSQpe1xuICAgICAkYXBwX3NjcmlwdCQoJGFwcF9tb2R1bGUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX3JlcXVpcmUkKVxuICAgICBpZiAoJGFwcF9leHBvcnRzJC5fX2VzTW9kdWxlICYmICRhcHBfZXhwb3J0cyQuZGVmYXVsdCkge1xuICAgICAgICAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMgPSAkYXBwX2V4cG9ydHMkLmRlZmF1bHRcbiAgICAgICAgfVxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy50ZW1wbGF0ZSA9ICRhcHBfdGVtcGxhdGUkXG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnN0eWxlID0gJGFwcF9zdHlsZSRcbn0pXG5cbiRhcHBfYm9vdHN0cmFwJCgnQGFwcC1jb21wb25lbnQvaW5kZXgnLHsgcGFja2FnZXJOYW1lOidmYS10b29sa2l0JywgcGFja2FnZXJWZXJzaW9uOiAnMi4wLjAtU3RhYmxlLjMwMSd9KSIsInZhciAkYXBwX3RlbXBsYXRlJCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXRlbXBsYXRlLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBGYXN0QXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXRlbXBsYXRlcyEuL2NvbW1lbnRfbGlzdC51eFwiKVxudmFyICRhcHBfc3R5bGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgRmFzdEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtanNvbi1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgRmFzdEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc3R5bGUtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPWM6XFxcXFVzZXJzXFxcXHhpXFxcXC5mYXN0YXBwLWlkZVxcXFx3b3Jrc3BhY2VcXFxcY29tLm5qdXN0LnN0YWNrXFxcXHNyY1xcXFxDb21tZW50c1xcXFxjb21wb25lbnRcXFxcY29tbWVudF9saXN0LnV4IS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1jOlxcXFxVc2Vyc1xcXFx4aVxcXFwuZmFzdGFwcC1pZGVcXFxcd29ya3NwYWNlXFxcXGNvbS5uanVzdC5zdGFja1xcXFxzcmNcXFxcQ29tbWVudHNcXFxcY29tcG9uZW50XFxcXGNvbW1lbnRfbGlzdC51eCEuL2NvbW1lbnRfbGlzdC51eFwiKVxudmFyICRhcHBfc2NyaXB0JCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXNjcmlwdC1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgRmFzdEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtYWNjZXNzLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBGYXN0QXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXI/cHJlc2V0c1tdPWM6XFxcXFByb2dyYW0gRmlsZXNcXFxcSHVhd2VpIEZhc3RBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwcmVzZXQtZW52JnBsdWdpbnNbXT1jOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEh1YXdlaSBGYXN0QXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccGx1Z2luLXRyYW5zZm9ybS1tb2R1bGVzLWNvbW1vbmpzJnBsdWdpbnNbXT1jOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEh1YXdlaSBGYXN0QXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxqc3gtbG9hZGVyLmpzJmNvbW1lbnRzPWZhbHNlIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL2NvbW1lbnRfbGlzdC51eFwiKVxuXG4kYXBwX2RlZmluZSQoJ0BhcHAtY29tcG9uZW50L2NvbW1lbnRfbGlzdCcsIFtdLCBmdW5jdGlvbigkYXBwX3JlcXVpcmUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX21vZHVsZSQpe1xuICAgICAkYXBwX3NjcmlwdCQoJGFwcF9tb2R1bGUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX3JlcXVpcmUkKVxuICAgICBpZiAoJGFwcF9leHBvcnRzJC5fX2VzTW9kdWxlICYmICRhcHBfZXhwb3J0cyQuZGVmYXVsdCkge1xuICAgICAgICAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMgPSAkYXBwX2V4cG9ydHMkLmRlZmF1bHRcbiAgICAgICAgfVxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy50ZW1wbGF0ZSA9ICRhcHBfdGVtcGxhdGUkXG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnN0eWxlID0gJGFwcF9zdHlsZSRcbn0pXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiYXR0clwiOiB7fSxcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwiY29tbWVudC1jb250YWluZXJcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJjb250ZW50LWxpc3RcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiY29udGVudC1sZWZ0XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24gKGV2dCl7dGhpcy5jbGlja1RvVXNlckRldGFpbCh0aGlzLnBob25lbnVtLGV2dCl9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaW1hZ2V9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImljb25cIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiY29udGVudC1yaWdodFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImFcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCJibGFja1wiLFxuICAgICAgICAgICAgICAgICAgICBcImZvbnRXZWlnaHRcIjogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnVzZXJuYW1lfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbiAoZXZ0KXt0aGlzLmNsaWNrVG9Vc2VyRGV0YWlsKHRoaXMucGhvbmVudW0sZXZ0KX1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLigIJcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcImJsYWNrXCIsXG4gICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmNvbW1lbnR9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcImdyYXlcIixcbiAgICAgICAgICAgICAgICBcImZvbnRTaXplXCI6IFwiMjdweFwiLFxuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRpbWV9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJkZWxldGVcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJzaG93blwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaXNzZWxmPT09dHJ1ZX0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJzcmNcIjogXCIvQ29tbW9uL2RlbGV0ZV9ncmF5LnBuZ1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImJ0blwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICBcImNsaWNrXCI6IFwiZGVsZXRlXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIi5pY29uXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTAwJVwiLFxuICAgIFwib2JqZWN0Rml0XCI6IFwiY292ZXJcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjQ0cHhcIixcbiAgICBcImJvcmRlclRvcENvbG9yXCI6IFwiI2RjMTQzY1wiLFxuICAgIFwiYm9yZGVyUmlnaHRDb2xvclwiOiBcIiNkYzE0M2NcIixcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yXCI6IFwiI2RjMTQzY1wiLFxuICAgIFwiYm9yZGVyTGVmdENvbG9yXCI6IFwiI2RjMTQzY1wiLFxuICAgIFwiYm9yZGVyVG9wV2lkdGhcIjogXCI0cHhcIixcbiAgICBcImJvcmRlclJpZ2h0V2lkdGhcIjogXCI0cHhcIixcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IFwiNHB4XCIsXG4gICAgXCJib3JkZXJMZWZ0V2lkdGhcIjogXCI0cHhcIlxuICB9LFxuICBcIi5jb21tZW50LWNvbnRhaW5lclwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIwcHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMzRweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMHB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMzRweFwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiXG4gIH0sXG4gIFwiLmJ0blwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjUwcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjUwcHhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjE5cHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMHB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxOXB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTlweFwiLFxuICAgIFwib2JqZWN0Rml0XCI6IFwiY29udGFpblwiXG4gIH0sXG4gIFwiLmRlbGV0ZVwiOiB7XG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImZsZXgtZW5kXCJcbiAgfSxcbiAgXCIuY29udGVudC1saXN0XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMjBweFwiXG4gIH0sXG4gIFwiLmNvbnRlbnQtbGVmdFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjg4cHhcIixcbiAgICBcImhlaWdodFwiOiBcIjg4cHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMzNweFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMTBweFwiXG4gIH0sXG4gIFwiLmNvbnRlbnQtcmlnaHRcIjoge1xuICAgIFwid2lkdGhcIjogXCI1NjBweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTAwJVwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIlxuICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsICRhcHBfcmVxdWlyZSQpe1widXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfc3lzdGVtID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdCgkYXBwX3JlcXVpcmUkKFwiQGFwcC1tb2R1bGUvc3lzdGVtLnByb21wdFwiKSk7XG5cbnZhciBfc3lzdGVtMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoJGFwcF9yZXF1aXJlJChcIkBhcHAtbW9kdWxlL3N5c3RlbS5yb3V0ZXJcIikpO1xuXG52YXIgX3N5c3RlbTMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KCRhcHBfcmVxdWlyZSQoXCJAYXBwLW1vZHVsZS9zeXN0ZW0uZmV0Y2hcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxudmFyIF9kZWZhdWx0ID0ge1xuICBwcm9wczogWydpbmZvJywgJ2lkeCcsICdpbWFnZScsICd1c2VybmFtZScsICdwaG9uZW51bScsICdjb21tZW50JywgJ3RpbWUnLCAnaXNzZWxmJywgJ2NpZCcsICdwaWQnXSxcbiAgZGF0YToge1xuICAgIHBvc3RpZDogLTFcbiAgfSxcbiAgcG9zdDogZnVuY3Rpb24gcG9zdCh1cmwsIGRhdGEpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgX3N5c3RlbTNbXCJkZWZhdWx0XCJdLmZldGNoKHtcbiAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nLFxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcyhkYXRhKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJwb3N0IHN1Y2Nlc3NcIik7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogZnVuY3Rpb24gZmFpbChlcnJtc2csIGVycmNvZGUpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInBvc3QgZmFpbFwiKTtcbiAgICAgICAgICByZWplY3QoZXJyY29kZSwgZXJybXNnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG4gIFwiZGVsZXRlXCI6IGZ1bmN0aW9uIF9kZWxldGUoKSB7XG4gICAgdmFyIHByb21pc2UgPSB0aGlzLnBvc3QoXCJodHRwOi8vMTE0LjExNi4yNDguMjMzOjEyMzQ1L2NvbW1lbnQvdW5jb21tZW50X3Bvc3RcIiwge1xuICAgICAgXCJwaWRcIjogdGhpcy5waWQsXG4gICAgICBcImNpZFwiOiB0aGlzLmNpZFxuICAgIH0pO1xuXG4gICAgX3N5c3RlbVtcImRlZmF1bHRcIl0uc2hvd1RvYXN0KHtcbiAgICAgIG1lc3NhZ2U6ICdkZWxldGUnLFxuICAgICAgaW1hZ2U6ICcvQ29tbW9uL2xvZ28ucG5nJ1xuICAgIH0pO1xuXG4gICAgdGhpcy5pbmZvLmRlbGV0ZWlkID0gdGhpcy5pZHg7XG4gIH0sXG4gIGNsaWNrVG9Vc2VyRGV0YWlsOiBmdW5jdGlvbiBjbGlja1RvVXNlckRldGFpbChwbikge1xuICAgIGlmIChwbiA9PT0gdGhpcy4kYXBwLiRkZWYuZGF0YS5waG9uZW51bSkge1xuICAgICAgX3N5c3RlbTJbXCJkZWZhdWx0XCJdLnB1c2goe1xuICAgICAgICB1cmk6ICcvTWluZSdcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBfc3lzdGVtMltcImRlZmF1bHRcIl0ucHVzaCh7XG4gICAgICAgIHVyaTogXCIvVXNlckRldGFpbFwiLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBwaG9uZW51bTogcG5cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICBvbkluaXQ6IGZ1bmN0aW9uIG9uSW5pdCgpIHtcbiAgICB0aGlzLiR3YXRjaCgnc3dpcGVyZGF0YScsICdoYW5kbGVVcGRhdGUnKTtcbiAgICB0aGlzLnBvc3RpZCA9IHRoaXMuaWR4O1xuICAgIHRoaXMucGlwZSA9IHRoaXMuaW5mbztcbiAgfVxufTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG52YXIgbW9kdWxlT3duID0gZXhwb3J0cy5kZWZhdWx0IHx8IG1vZHVsZS5leHBvcnRzO1xudmFyIGFjY2Vzc29ycyA9IFsncHVibGljJywgJ3Byb3RlY3RlZCcsICdwcml2YXRlJ107XG5pZiAobW9kdWxlT3duLmRhdGEgJiYgYWNjZXNzb3JzLnNvbWUoZnVuY3Rpb24gKGFjYykge1xuICAgIHJldHVybiBtb2R1bGVPd25bYWNjXTtcbiAgfSkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdGb3IgVk0gb2JqZWN0cywgYXR0cmlidXRlIGRhdGEgbXVzdCBub3QgY29leGlzdCB3aXRoIHB1YmxpYywgcHJvdGVjdGVkLCBvciBwcml2YXRlLiBQbGVhc2UgcmVwbGFjZSBkYXRhIHdpdGggcHVibGljLicpO1xufSBlbHNlIGlmICghbW9kdWxlT3duLmRhdGEpIHtcbiAgbW9kdWxlT3duLmRhdGEgPSB7fTtcbiAgbW9kdWxlT3duLl9kZXNjcmlwdG9yID0ge307XG4gIGFjY2Vzc29ycy5mb3JFYWNoKGZ1bmN0aW9uKGFjYykge1xuICAgIHZhciBhY2NUeXBlID0gdHlwZW9mIG1vZHVsZU93blthY2NdO1xuICAgIGlmIChhY2NUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgbW9kdWxlT3duLmRhdGEgPSBPYmplY3QuYXNzaWduKG1vZHVsZU93bi5kYXRhLCBtb2R1bGVPd25bYWNjXSk7XG4gICAgICBmb3IgKHZhciBuYW1lIGluIG1vZHVsZU93blthY2NdKSB7XG4gICAgICAgIG1vZHVsZU93bi5fZGVzY3JpcHRvcltuYW1lXSA9IHthY2Nlc3MgOiBhY2N9O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYWNjVHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc29sZS53YXJuKCdGb3IgVk0gb2JqZWN0cywgYXR0cmlidXRlICcgKyBhY2MgKyAnIHZhbHVlIG11c3Qgbm90IGJlIGEgZnVuY3Rpb24uIENoYW5nZSB0aGUgdmFsdWUgdG8gYW4gb2JqZWN0LicpO1xuICAgIH1cbiAgfSk7XG59fSIsInZhciAkYXBwX3RlbXBsYXRlJCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXRlbXBsYXRlLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBGYXN0QXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXRlbXBsYXRlcyEuL2NvbW1lbnQudXhcIilcbnZhciAkYXBwX3N0eWxlJCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXN0eWxlLWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1jOlxcXFxVc2Vyc1xcXFx4aVxcXFwuZmFzdGFwcC1pZGVcXFxcd29ya3NwYWNlXFxcXGNvbS5uanVzdC5zdGFja1xcXFxzcmNcXFxcQ29tbWVudHNcXFxcY29tcG9uZW50XFxcXGNvbW1lbnQudXghLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgRmFzdEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPWM6XFxcXFVzZXJzXFxcXHhpXFxcXC5mYXN0YXBwLWlkZVxcXFx3b3Jrc3BhY2VcXFxcY29tLm5qdXN0LnN0YWNrXFxcXHNyY1xcXFxDb21tZW50c1xcXFxjb21wb25lbnRcXFxcY29tbWVudC51eCEuL2NvbW1lbnQudXhcIilcbnZhciAkYXBwX3NjcmlwdCQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBGYXN0QXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1zY3JpcHQtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWFjY2Vzcy1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgRmFzdEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1jOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEh1YXdlaSBGYXN0QXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccHJlc2V0LWVudiZwbHVnaW5zW109YzpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIdWF3ZWkgRmFzdEFwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHBsdWdpbi10cmFuc2Zvcm0tbW9kdWxlcy1jb21tb25qcyZwbHVnaW5zW109YzpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIdWF3ZWkgRmFzdEFwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcanN4LWxvYWRlci5qcyZjb21tZW50cz1mYWxzZSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBGYXN0QXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi9jb21tZW50LnV4XCIpXG5cbiRhcHBfZGVmaW5lJCgnQGFwcC1jb21wb25lbnQvY29tbWVudCcsIFtdLCBmdW5jdGlvbigkYXBwX3JlcXVpcmUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX21vZHVsZSQpe1xuICAgICAkYXBwX3NjcmlwdCQoJGFwcF9tb2R1bGUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX3JlcXVpcmUkKVxuICAgICBpZiAoJGFwcF9leHBvcnRzJC5fX2VzTW9kdWxlICYmICRhcHBfZXhwb3J0cyQuZGVmYXVsdCkge1xuICAgICAgICAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMgPSAkYXBwX2V4cG9ydHMkLmRlZmF1bHRcbiAgICAgICAgfVxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy50ZW1wbGF0ZSA9ICRhcHBfdGVtcGxhdGUkXG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnN0eWxlID0gJGFwcF9zdHlsZSRcbn0pXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiYXR0clwiOiB7fSxcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwiY29tbWVudC1jb250YWluZXJcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJjb250ZW50LWxpc3RcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiY29udGVudC1sZWZ0XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwic3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy51c2VycGhvdG99XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImljb25cIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiY29udGVudC1taWRcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRhcmVhXCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJpZFwiOiBcInRleHRhcmVhXCIsXG4gICAgICAgICAgICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIkNvbW1lbnQgaGVyZS4uLlwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInRleHRhcmVhXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJpZFwiOiBcInRleHRhcmVhXCIsXG4gICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICBcImNoYW5nZVwiOiBcIm9uR2V0Q29tbWVudFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJjb250ZW50LXJpZ2h0XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYVwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJjb2xvclwiOiBcImJsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICdQb3N0J31cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogXCJjbGlja1RvQ29tbWVudFwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiLmljb25cIjoge1xuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJoZWlnaHRcIjogXCIxMDAlXCIsXG4gICAgXCJvYmplY3RGaXRcIjogXCJjb3ZlclwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiNDRweFwiLFxuICAgIFwiYm9yZGVyVG9wQ29sb3JcIjogXCIjZGMxNDNjXCIsXG4gICAgXCJib3JkZXJSaWdodENvbG9yXCI6IFwiI2RjMTQzY1wiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjZGMxNDNjXCIsXG4gICAgXCJib3JkZXJMZWZ0Q29sb3JcIjogXCIjZGMxNDNjXCIsXG4gICAgXCJib3JkZXJUb3BXaWR0aFwiOiBcIjRweFwiLFxuICAgIFwiYm9yZGVyUmlnaHRXaWR0aFwiOiBcIjRweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCI0cHhcIixcbiAgICBcImJvcmRlckxlZnRXaWR0aFwiOiBcIjRweFwiXG4gIH0sXG4gIFwiLmNvbW1lbnQtY29udGFpbmVyXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIlxuICB9LFxuICBcIi5jb250ZW50LWxpc3RcIjoge1xuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgXCJwb3NpdGlvblwiOiBcImZpeGVkXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcImJvdHRvbVwiOiBcIjBweFwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI0ZGRkZGRlwiXG4gIH0sXG4gIFwiLmNvbnRlbnQtbGVmdFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjg4cHhcIixcbiAgICBcImhlaWdodFwiOiBcIjg4cHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIyMHB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjQzcHhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjE2cHhcIlxuICB9LFxuICBcIi5jb250ZW50LW1pZFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjUwMHB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIxMDAlXCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLnRleHRhcmVhXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjMwcHhcIlxuICB9LFxuICBcIi5jb250ZW50LXJpZ2h0XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNjBweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTAwJVwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIyMHB4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiXG4gIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgJGFwcF9yZXF1aXJlJCl7XCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9zeXN0ZW0gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KCRhcHBfcmVxdWlyZSQoXCJAYXBwLW1vZHVsZS9zeXN0ZW0uZmV0Y2hcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxudmFyIF9kZWZhdWx0ID0ge1xuICBkYXRhOiB7XG4gICAgY29tbWVudDogJycsXG4gICAgcHJvcHM6IFsndXNlcnBob3RvJywgJ3BpZCcsICdjb21tZW50cycsICdjb21tZW50bnVtYmVyJ11cbiAgfSxcbiAgcG9zdDogZnVuY3Rpb24gcG9zdCh1cmwsIGRhdGEpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgX3N5c3RlbVtcImRlZmF1bHRcIl0uZmV0Y2goe1xuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbicsXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKGRhdGEpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInBvc3Qgc3VjY2Vzc1wiKTtcbiAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICB9LFxuICAgICAgICBmYWlsOiBmdW5jdGlvbiBmYWlsKGVycm1zZywgZXJyY29kZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwicG9zdCBmYWlsXCIpO1xuICAgICAgICAgIHJlamVjdChlcnJjb2RlLCBlcnJtc2cpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcbiAgb25HZXRDb21tZW50OiBmdW5jdGlvbiBvbkdldENvbW1lbnQoZSkge1xuICAgIHRoaXMuY29tbWVudCA9IGUudGV4dDtcbiAgfSxcbiAgY2xpY2tUb0NvbW1lbnQ6IGZ1bmN0aW9uIGNsaWNrVG9Db21tZW50KCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuY29tbWVudCk7XG5cbiAgICBpZiAodGhpcy5jb21tZW50ICE9PSAnJykge1xuICAgICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgdmFyIGN0aW1lID0gZGF0ZS5nZXRGdWxsWWVhcigpICsgXCItXCIgKyAoZGF0ZS5nZXRNb250aCgpICsgMSkgKyBcIi1cIiArIGRhdGUuZ2V0RGF0ZSgpICsgXCIgXCIgKyBkYXRlLmdldEhvdXJzKCkgKyBcIjpcIiArIGRhdGUuZ2V0TWludXRlcygpICsgXCI6XCIgKyBkYXRlLmdldFNlY29uZHMoKTtcbiAgICAgIHZhciBwcm9taXNlID0gdGhpcy5wb3N0KFwiaHR0cDovLzExNC4xMTYuMjQ4LjIzMzoxMjM0NS9jb21tZW50L2NvbW1lbnRfcG9zdFwiLCB7XG4gICAgICAgIFwicGhvbmVudW1cIjogdGhpcy4kYXBwLiRkZWYuZGF0YS5waG9uZW51bSxcbiAgICAgICAgXCJwaWRcIjogdGhpcy5waWQsXG4gICAgICAgIFwiY3RpbWVcIjogY3RpbWUsXG4gICAgICAgIFwiY29udGVudFwiOiB0aGlzLmNvbW1lbnRcbiAgICAgIH0pO1xuICAgICAgdGhpcy5jb21tZW50cy51bnNoaWZ0KHtcbiAgICAgICAgXCJjb21tZW50XCI6IHRoaXMuY29tbWVudCxcbiAgICAgICAgXCJ1c2VybmFtZVwiOiB0aGlzLiRhcHAuJGRlZi5kYXRhLnVzZXJuYW1lLFxuICAgICAgICBcInBob25lbnVtXCI6IHRoaXMuJGFwcC4kZGVmLmRhdGEucGhvbmVudW0sXG4gICAgICAgIFwiaW1hZ2VcIjogdGhpcy51c2VycGhvdG8sXG4gICAgICAgIFwidGltZVwiOiBjdGltZVxuICAgICAgfSk7XG4gICAgICB0aGlzLiRlbGVtZW50KCd0ZXh0YXJlYScpLmZvY3VzKHtcbiAgICAgICAgZm9jdXM6IGZhbHNlXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn07XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IF9kZWZhdWx0O1xudmFyIG1vZHVsZU93biA9IGV4cG9ydHMuZGVmYXVsdCB8fCBtb2R1bGUuZXhwb3J0cztcbnZhciBhY2Nlc3NvcnMgPSBbJ3B1YmxpYycsICdwcm90ZWN0ZWQnLCAncHJpdmF0ZSddO1xuaWYgKG1vZHVsZU93bi5kYXRhICYmIGFjY2Vzc29ycy5zb21lKGZ1bmN0aW9uIChhY2MpIHtcbiAgICByZXR1cm4gbW9kdWxlT3duW2FjY107XG4gIH0pKSB7XG4gIHRocm93IG5ldyBFcnJvcignRm9yIFZNIG9iamVjdHMsIGF0dHJpYnV0ZSBkYXRhIG11c3Qgbm90IGNvZXhpc3Qgd2l0aCBwdWJsaWMsIHByb3RlY3RlZCwgb3IgcHJpdmF0ZS4gUGxlYXNlIHJlcGxhY2UgZGF0YSB3aXRoIHB1YmxpYy4nKTtcbn0gZWxzZSBpZiAoIW1vZHVsZU93bi5kYXRhKSB7XG4gIG1vZHVsZU93bi5kYXRhID0ge307XG4gIG1vZHVsZU93bi5fZGVzY3JpcHRvciA9IHt9O1xuICBhY2Nlc3NvcnMuZm9yRWFjaChmdW5jdGlvbihhY2MpIHtcbiAgICB2YXIgYWNjVHlwZSA9IHR5cGVvZiBtb2R1bGVPd25bYWNjXTtcbiAgICBpZiAoYWNjVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG1vZHVsZU93bi5kYXRhID0gT2JqZWN0LmFzc2lnbihtb2R1bGVPd24uZGF0YSwgbW9kdWxlT3duW2FjY10pO1xuICAgICAgZm9yICh2YXIgbmFtZSBpbiBtb2R1bGVPd25bYWNjXSkge1xuICAgICAgICBtb2R1bGVPd24uX2Rlc2NyaXB0b3JbbmFtZV0gPSB7YWNjZXNzIDogYWNjfTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFjY1R5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUud2FybignRm9yIFZNIG9iamVjdHMsIGF0dHJpYnV0ZSAnICsgYWNjICsgJyB2YWx1ZSBtdXN0IG5vdCBiZSBhIGZ1bmN0aW9uLiBDaGFuZ2UgdGhlIHZhbHVlIHRvIGFuIG9iamVjdC4nKTtcbiAgICB9XG4gIH0pO1xufX0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiYXR0clwiOiB7fSxcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwiY29udGFpbmVyXCJcbiAgXSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwicmVmcmVzaFwiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJvZmZzZXRcIjogXCIxMzBweFwiLFxuICAgICAgICBcInJlZnJlc2hpbmdcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmlzUmVmcmVzaGluZ31cbiAgICAgIH0sXG4gICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgIFwicmVmcmVzaFwiOiBcInJlZnJlc2hcIlxuICAgICAgfSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJyZWZyZXNoXCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImxpc3RcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImxpc3QtaXRlbVwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICdsaXN0SXRlbScrKHRoaXMuJGlkeCl9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwicmVwZWF0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5jb21tZW50c30sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImNvbW1lbnRfbGlzdFwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJpbWFnZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGl0ZW0uaW1hZ2V9LFxuICAgICAgICAgICAgICAgICAgICBcInVzZXJuYW1lXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS51c2VybmFtZX0sXG4gICAgICAgICAgICAgICAgICAgIFwicGhvbmVudW1cIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiRpdGVtLnBob25lbnVtfSxcbiAgICAgICAgICAgICAgICAgICAgXCJjb21tZW50XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS5jb21tZW50fSxcbiAgICAgICAgICAgICAgICAgICAgXCJ0aW1lXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS50aW1lfSxcbiAgICAgICAgICAgICAgICAgICAgXCJpc3NlbGZcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiRpdGVtLmlzc2VsZn0sXG4gICAgICAgICAgICAgICAgICAgIFwiY2lkXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS5jaWR9LFxuICAgICAgICAgICAgICAgICAgICBcInBpZFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucGlkfSxcbiAgICAgICAgICAgICAgICAgICAgXCJpbmZvXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5pbmZvfSxcbiAgICAgICAgICAgICAgICAgICAgXCJpZHhcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiRpZHh9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJjb21tZW50XCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInVzZXJwaG90b1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudXNlcnBob3RvfSxcbiAgICAgICAgXCJwaWRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnBpZH0sXG4gICAgICAgIFwiY29tbWVudHNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmNvbW1lbnRzfVxuICAgICAgfVxuICAgIH1cbiAgXVxufSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIi5jb250YWluZXJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduQ29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwiLnJlZnJlc2hcIjoge1xuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwicHJvZ3Jlc3NDb2xvclwiOiBcIiMwZmFlZmZcIlxuICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsICRhcHBfcmVxdWlyZSQpe1widXNlIHN0cmljdFwiO1xuXG52YXIgX3N5c3RlbSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoJGFwcF9yZXF1aXJlJChcIkBhcHAtbW9kdWxlL3N5c3RlbS5mZXRjaFwiKSk7XG5cbnZhciBfc3lzdGVtMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoJGFwcF9yZXF1aXJlJChcIkBhcHAtbW9kdWxlL3N5c3RlbS5wcm9tcHRcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGRhdGE6IHtcbiAgICBpc1JlZnJlc2hpbmc6IGZhbHNlLFxuICAgIHBpZDogJycsXG4gICAgY29tbWVudHM6IFtdLFxuICAgIHVzZXJwaG90bzogXCJodHRwczovL2x1Y2Fzemhhby0xMjU4OTA2MzM0LmNvcy5hcC1ndWFuZ3pob3UubXlxY2xvdWQuY29tL3N0YWNrLzMxNjI2NjY4LnBuZ1wiLFxuICAgIGluZm86IHtcbiAgICAgIGRlbGV0ZWlkOiAtMVxuICAgIH1cbiAgfSxcbiAgcmVmcmVzaENvbW1lbnQ6IGZ1bmN0aW9uIHJlZnJlc2hDb21tZW50KHRoYXQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIHRoYXQuY29tbWVudHMgPSBkYXRhLmRhdGEubWVzc2FnZS5tYXAodGhhdC5tYXBQb3N0KTtcbiAgICAgIHRoYXQuaXNSZWZyZXNoaW5nID0gZmFsc2U7XG4gICAgICBjbGVhclRpbWVvdXQodGhhdC50aW1lb3V0KTtcbiAgICB9O1xuICB9LFxuICBzaG93RXJyb3I6IGZ1bmN0aW9uIHNob3dFcnJvcih0aGF0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChlcnJjb2RlLCBlcnJtc2cpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycmNvZGUgKyAnICcgKyBlcnJtc2cpO1xuXG4gICAgICBfc3lzdGVtMltcImRlZmF1bHRcIl0uc2hvd1RvYXN0KHtcbiAgICAgICAgbWVzc2FnZTogXCLor7fmsYLplJnor69cIixcbiAgICAgICAgaW1hZ2U6ICcvQ29tbW9uL2xvZ28ucG5nJ1xuICAgICAgfSk7XG5cbiAgICAgIHRoYXQuaXNSZWZyZXNoaW5nID0gZmFsc2U7XG4gICAgICBjbGVhclRpbWVvdXQodGhhdC50aW1lb3V0KTtcbiAgICB9O1xuICB9LFxuICBwb3N0OiBmdW5jdGlvbiBwb3N0KHVybCwgZGF0YSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBfc3lzdGVtW1wiZGVmYXVsdFwiXS5mZXRjaCh7XG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICByZXNwb25zZVR5cGU6ICdqc29uJyxcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MoZGF0YSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwicG9zdCBzdWNjZXNzXCIpO1xuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgIH0sXG4gICAgICAgIGZhaWw6IGZ1bmN0aW9uIGZhaWwoZXJybXNnLCBlcnJjb2RlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJwb3N0IGZhaWxcIik7XG4gICAgICAgICAgcmVqZWN0KGVycmNvZGUsIGVycm1zZyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuICByZWZyZXNoOiBmdW5jdGlvbiByZWZyZXNoKGUpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgdGhpcy5pc1JlZnJlc2hpbmcgPSBlLnJlZnJlc2hpbmc7XG4gICAgdmFyIHByb21pc2UgPSB0aGlzLnBvc3QoXCJodHRwOi8vMTE0LjExNi4yNDguMjMzOjEyMzQ1L2NvbW1lbnQvZ2V0X2FsbF9jb21tZW50c1wiLCB7XG4gICAgICBcInBpZFwiOiB0aGF0LnBpZCxcbiAgICAgIFwicGhvbmVudW1cIjogXCIxODI2MDA3MTAxMlwiXG4gICAgfSk7XG4gICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICB0aGF0LmlzUmVmcmVzaGluZyA9IGZhbHNlO1xuXG4gICAgICBfc3lzdGVtMltcImRlZmF1bHRcIl0uc2hvd1RvYXN0KHtcbiAgICAgICAgbWVzc2FnZTogXCLor7fmsYLotoXml7ZcIixcbiAgICAgICAgaW1hZ2U6ICcvQ29tbW9uL2xvZ28ucG5nJ1xuICAgICAgfSk7XG4gICAgfSwgNTAwMCk7XG4gICAgcHJvbWlzZS50aGVuKHRoaXMucmVmcmVzaENvbW1lbnQodGhpcyksIHRoaXMuc2hvd0Vycm9yKHRoaXMpKTtcbiAgfSxcbiAgbWFwUG9zdDogZnVuY3Rpb24gbWFwUG9zdChpdGVtKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNpZDogaXRlbS5jaWQsXG4gICAgICBjb21tZW50OiBpdGVtLmNvbnRlbnQsXG4gICAgICB1c2VybmFtZTogaXRlbS51c2VyLnVzZXJuYW1lLFxuICAgICAgcGhvbmVudW06IGl0ZW0udXNlci5waG9uZW51bSxcbiAgICAgIGltYWdlOiBpdGVtLnVzZXIucGhvdG8sXG4gICAgICB0aW1lOiBpdGVtLmN0aW1lLFxuICAgICAgaXNzZWxmOiBpdGVtLmlzc2VsZlxuICAgIH07XG4gIH0sXG4gIG9uSW5pdDogZnVuY3Rpb24gb25Jbml0KCkge1xuICAgIHRoaXMuJHBhZ2Uuc2V0VGl0bGVCYXIoe1xuICAgICAgdGV4dDogJ+ivhOiuuicsXG4gICAgICB0ZXh0Q29sb3I6ICcjMWExYTFhJyxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZjJmMmYyJyxcbiAgICAgIG1lbnU6IGZhbHNlXG4gICAgfSk7XG4gICAgdmFyIHByb21pc2UgPSB0aGlzLnBvc3QoXCJodHRwOi8vMTE0LjExNi4yNDguMjMzOjEyMzQ1L2NvbW1lbnQvZ2V0X2FsbF9jb21tZW50c1wiLCB7XG4gICAgICBcInBpZFwiOiB0aGlzLnBpZCxcbiAgICAgIFwicGhvbmVudW1cIjogXCIxODI2MDA3MTAxMlwiXG4gICAgfSk7XG4gICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBfc3lzdGVtMltcImRlZmF1bHRcIl0uc2hvd1RvYXN0KHtcbiAgICAgICAgbWVzc2FnZTogXCLor7fmsYLotoXml7ZcIixcbiAgICAgICAgaW1hZ2U6ICcvQ29tbW9uL2xvZ28ucG5nJ1xuICAgICAgfSk7XG4gICAgfSwgNTAwMCk7XG4gICAgcHJvbWlzZS50aGVuKHRoaXMucmVmcmVzaENvbW1lbnQodGhpcyksIHRoaXMuc2hvd0Vycm9yKHRoaXMpKTtcbiAgICB0aGlzLiR3YXRjaCgnaW5mby5kZWxldGVpZCcsICdoYW5kbGVEZWxldGUnKTtcbiAgfSxcbiAgaGFuZGxlRGVsZXRlOiBmdW5jdGlvbiBoYW5kbGVEZWxldGUobmV3VmFsLCBvbGRWYWwpIHtcbiAgICBjb25zb2xlLmxvZygnaGFuZGxlRGVsZXRlICcgKyBuZXdWYWwpO1xuXG4gICAgaWYgKG5ld1ZhbCA+PSAwICYmIG5ld1ZhbCA8IHRoaXMuY29tbWVudHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmNvbW1lbnRzLnNwbGljZShuZXdWYWwsIDEpO1xuICAgICAgdGhpcy5pbmZvLmRlbGV0ZWlkID0gLTE7XG4gICAgfVxuICB9XG59O1xudmFyIG1vZHVsZU93biA9IGV4cG9ydHMuZGVmYXVsdCB8fCBtb2R1bGUuZXhwb3J0cztcbnZhciBhY2Nlc3NvcnMgPSBbJ3B1YmxpYycsICdwcm90ZWN0ZWQnLCAncHJpdmF0ZSddO1xuaWYgKG1vZHVsZU93bi5kYXRhICYmIGFjY2Vzc29ycy5zb21lKGZ1bmN0aW9uIChhY2MpIHtcbiAgICByZXR1cm4gbW9kdWxlT3duW2FjY107XG4gIH0pKSB7XG4gIHRocm93IG5ldyBFcnJvcignRm9yIFZNIG9iamVjdHMsIGF0dHJpYnV0ZSBkYXRhIG11c3Qgbm90IGNvZXhpc3Qgd2l0aCBwdWJsaWMsIHByb3RlY3RlZCwgb3IgcHJpdmF0ZS4gUGxlYXNlIHJlcGxhY2UgZGF0YSB3aXRoIHB1YmxpYy4nKTtcbn0gZWxzZSBpZiAoIW1vZHVsZU93bi5kYXRhKSB7XG4gIG1vZHVsZU93bi5kYXRhID0ge307XG4gIG1vZHVsZU93bi5fZGVzY3JpcHRvciA9IHt9O1xuICBhY2Nlc3NvcnMuZm9yRWFjaChmdW5jdGlvbihhY2MpIHtcbiAgICB2YXIgYWNjVHlwZSA9IHR5cGVvZiBtb2R1bGVPd25bYWNjXTtcbiAgICBpZiAoYWNjVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG1vZHVsZU93bi5kYXRhID0gT2JqZWN0LmFzc2lnbihtb2R1bGVPd24uZGF0YSwgbW9kdWxlT3duW2FjY10pO1xuICAgICAgZm9yICh2YXIgbmFtZSBpbiBtb2R1bGVPd25bYWNjXSkge1xuICAgICAgICBtb2R1bGVPd24uX2Rlc2NyaXB0b3JbbmFtZV0gPSB7YWNjZXNzIDogYWNjfTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFjY1R5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUud2FybignRm9yIFZNIG9iamVjdHMsIGF0dHJpYnV0ZSAnICsgYWNjICsgJyB2YWx1ZSBtdXN0IG5vdCBiZSBhIGZ1bmN0aW9uLiBDaGFuZ2UgdGhlIHZhbHVlIHRvIGFuIG9iamVjdC4nKTtcbiAgICB9XG4gIH0pO1xufX0iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzNHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ2xEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzVGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ25GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDbkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QSIsInNvdXJjZVJvb3QiOiIifQ==