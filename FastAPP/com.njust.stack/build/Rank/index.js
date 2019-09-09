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
/******/ 	return __webpack_require__(__webpack_require__.s = 125);
/******/ })
/************************************************************************/
/******/ ({

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(93)
var $app_template$ = __webpack_require__(97)
var $app_style$ = __webpack_require__(98)
var $app_script$ = __webpack_require__(99)

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

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(94)
var $app_style$ = __webpack_require__(95)
var $app_script$ = __webpack_require__(96)

$app_define$('@app-component/rank_list', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ 94:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "rank-container"
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
            "content-up"
          ],
          "events": {
            "click": function(evt){this.clickToPostDetail(this.pid,evt)}
          },
          "children": [
            {
              "type": "image",
              "attr": {
                "src": function () {return this.url}
              },
              "classList": [
                "image"
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "content-down"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "content-left"
              ],
              "events": {
                "click": function(evt){this.clickToUserDetail(this.phonenum,evt)}
              },
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": function () {return this.postericon}
                  },
                  "classList": [
                    "icon"
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
                      "type": "a",
                      "attr": {
                        "value": function () {return this.username}
                      },
                      "classList": [
                        "username"
                      ]
                    },
                    {
                      "type": "a",
                      "attr": {
                        "value": function () {return this.name}
                      },
                      "classList": [
                        "name"
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
                "content-right"
              ],
              "children": [
                {
                  "type": "a",
                  "attr": {
                    "value": function () {return (this.likedata)+'个赞'}
                  },
                  "classList": [
                    "likedata"
                  ]
                },
                {
                  "type": "image",
                  "attr": {
                    "src": function () {return this.liked===true?'/Rank/img/like.png':'/Rank/img/dislike.png'}
                  },
                  "classList": [
                    "btn"
                  ],
                  "events": {
                    "click": "like"
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

/***/ 95:
/***/ (function(module, exports) {

module.exports = {
  ".rank-container": {
    "flexDirection": "column"
  },
  ".content-list": {
    "width": "100%",
    "alignItems": "center",
    "flexDirection": "column"
  },
  ".content-up": {
    "height": "684px",
    "width": "100%",
    "indicatorColor": "rgba(0,0,0,0.2)",
    "indicatorSelectedColor": "#ffffff"
  },
  ".image": {
    "width": "100%",
    "height": "100%",
    "objectFit": "cover"
  },
  ".content-down": {
    "height": "114px",
    "width": "100%",
    "marginLeft": "10px",
    "marginRight": "10px",
    "justifyContent": "space-between"
  },
  ".icon": {
    "width": "80px",
    "height": "80px",
    "objectFit": "cover",
    "borderRadius": "40px",
    "borderTopColor": "#dc143c",
    "borderRightColor": "#dc143c",
    "borderBottomColor": "#dc143c",
    "borderLeftColor": "#dc143c",
    "borderTopWidth": "3px",
    "borderRightWidth": "3px",
    "borderBottomWidth": "3px",
    "borderLeftWidth": "3px",
    "marginTop": "17px",
    "marginRight": "17px",
    "marginBottom": "17px",
    "marginLeft": "17px"
  },
  ".content-mid": {
    "height": "100%",
    "flexDirection": "column",
    "borderBottomColor": "#F2F2F2",
    "borderBottomWidth": "1px",
    "justifyContent": "center"
  },
  ".username": {
    "color": "#000000",
    "fontWeight": "bold",
    "lines": 1,
    "textOverflow": "ellipsis"
  },
  ".name": {
    "color": "#808080",
    "lines": 1,
    "textOverflow": "ellipsis"
  },
  ".content-right": {
    "justifyContent": "flex-end"
  },
  ".likedata": {
    "color": "#000000"
  },
  ".btn": {
    "width": "64px",
    "height": "64px",
    "marginTop": "25px",
    "marginRight": "25px",
    "marginBottom": "25px",
    "marginLeft": "25px",
    "objectFit": "contain"
  }
}

/***/ }),

/***/ 96:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.router"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.prompt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  data: {
    props: ['rankinfos']
  },
  press: function press(item) {
    console.error("on press event param : " + item);
  },
  like: function like() {
    this.liked = !this.liked;

    _system2["default"].showToast({
      message: this.liked === true ? 'like' : 'dislike',
      image: '/Common/logo.png'
    });
  },
  clickToUserDetail: function clickToUserDetail(pn) {
    if (pn === '18260071012') {
      _system["default"].push({
        uri: '/Mine'
      });
    } else {
      _system["default"].push({
        uri: "/UserDetail",
        params: {
          phonenum: pn
        }
      });
    }
  },
  clickToPostDetail: function clickToPostDetail(pid) {
    _system["default"].push({
      uri: "/PostDetail",
      params: {
        pid: pid
      }
    });
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

/***/ 97:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "container"
  ],
  "children": [
    {
      "type": "tabs",
      "attr": {},
      "events": {
        "change": "onChangeTabIndex"
      },
      "children": [
        {
          "type": "tab-bar",
          "attr": {
            "mode": "scrollable"
          },
          "classList": [
            "tab-bar"
          ],
          "children": [
            {
              "type": "block",
              "attr": {},
              "repeat": function () {return this.tabs},
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "tab-item"
                  ],
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.$item}
                      }
                    },
                    {
                      "type": "div",
                      "attr": {},
                      "classList": function () {return [this.$idx==this.currIndex?'item_bg_active':'item_bg']}
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "type": "tab-content",
          "attr": {},
          "classList": [
            "tab_content"
          ],
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "div_tabcontent"
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
                          "repeat": function () {return this.rankinfos_day},
                          "children": [
                            {
                              "type": "rank_list",
                              "attr": {
                                "url": function () {return this.$item.url},
                                "postericon": function () {return this.$item.postericon},
                                "phonenum": function () {return this.$item.phonenum},
                                "pid": function () {return this.$item.pid},
                                "username": function () {return this.$item.username},
                                "name": function () {return this.$item.name},
                                "likedata": function () {return this.$item.likedata},
                                "liked": function () {return this.$item.liked}
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
                "div_tabcontent"
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
                          "repeat": function () {return this.rankinfos_week},
                          "children": [
                            {
                              "type": "rank_list",
                              "attr": {
                                "url": function () {return this.$item.url},
                                "postericon": function () {return this.$item.postericon},
                                "phonenum": function () {return this.$item.phonenum},
                                "pid": function () {return this.$item.pid},
                                "username": function () {return this.$item.username},
                                "name": function () {return this.$item.name},
                                "likedata": function () {return this.$item.likedata},
                                "liked": function () {return this.$item.liked}
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
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ 98:
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "flexDirection": "column",
    "alignContent": "center",
    "justifyContent": "center",
    "alignItems": "flex-start",
    "backgroundColor": "#FFFFFF"
  },
  ".item_bg": {
    "width": "100%",
    "height": "2px",
    "backgroundColor": "rgba(0,0,0,0)"
  },
  ".item_bg_active": {
    "width": "100%",
    "height": "2px",
    "backgroundColor": "#000000"
  },
  ".div_tabcontent": {
    "width": "100%"
  },
  ".div_tabcontent text": {
    "width": "100%",
    "textAlign": "center"
  },
  ".tab-bar": {
    "width": "100%",
    "height": "90px"
  },
  ".tab-item": {
    "flexDirection": "column",
    "alignItems": "center",
    "width": "50%"
  },
  ".tab-item text": {
    "opacity": 0.5,
    "marginTop": "27.5px",
    "marginBottom": "27.5px",
    "fontSize": "35px",
    "fontSize:active": "35px",
    "marginTop:active": "27.5px",
    "marginBottom:active": "27.5px",
    "fontWeight:active": "bold",
    "color:active": "#000000"
  },
  ".tab_content": {
    "width": "100%"
  },
  ".refresh": {
    "backgroundColor": "#ffffff",
    "progressColor": "#0faeff"
  }
}

/***/ }),

/***/ 99:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

var _system = _interopRequireDefault($app_require$("@app-module/system.fetch"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.prompt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = {
  data: {
    tabs: ["Day", "Week"],
    currIndex: 0,
    isRefreshing: false,
    rankinfos_day: [],
    rankinfos_week: []
  },
  onChangeTabIndex: function onChangeTabIndex(evt) {
    this.currIndex = evt.index;
  },
  refreshDailyRank: function refreshDailyRank(that) {
    return function (data) {
      that.rankinfos_day = data.data.message.map(that.mapPost);
      that.isRefreshing = false;
      clearTimeout(that.timeout);
    };
  },
  refreshWeeklyRank: function refreshWeeklyRank(that) {
    return function (data) {
      that.rankinfos_week = data.data.message.map(that.mapPost);
      that.isRefreshing = false;
      clearTimeout(that.timeout1);
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
      clearTimeout(that.timeout1);
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
    var promise = this.post("http://114.116.248.233:12345/rank/get_rank", {
      "phonenum": "18260071011",
      "time": "2019-09-08 15:24:07",
      "period": "1"
    });
    this.timeout = setTimeout(function () {
      that.isRefreshing = false;

      _system2["default"].showToast({
        message: "请求超时",
        image: '/Common/logo.png'
      });
    }, 5000);
    promise.then(this.refreshDailyRank(this), this.showError(this));
    var promise1 = this.post("http://114.116.248.233:12345/rank/get_rank", {
      "phonenum": "18260071011",
      "time": "2019-09-08 15:24:07",
      "period": "30"
    });
    this.timeout1 = setTimeout(function () {
      that.isRefreshing = false;

      _system2["default"].showToast({
        message: "请求超时",
        image: '/Common/logo.png'
      });
    }, 5000);
    promise1.then(this.refreshWeeklyRank(this), this.showError(this));
  },
  mapPost: function mapPost(item) {
    return {
      url: item.url,
      likedata: item.likes,
      username: item.user.username,
      phonenum: item.user.phonenum,
      pid: item.pid,
      name: item.user.name,
      postericon: item.user.photo,
      liked: item.isliked
    };
  },
  onInit: function onInit() {
    var promise = this.post("http://114.116.248.233:12345/rank/get_rank", {
      "phonenum": "18260071011",
      "time": "2019-09-08 15:24:07",
      "period": "1"
    });
    this.timeout = setTimeout(function () {
      _system2["default"].showToast({
        message: "请求超时",
        image: '/Common/logo.png'
      });
    }, 5000);
    promise.then(this.refreshDailyRank(this), this.showError(this));
    var promise1 = this.post("http://114.116.248.233:12345/rank/get_rank", {
      "phonenum": "18260071011",
      "time": "2019-09-08 15:24:07",
      "period": "30"
    });
    this.timeout1 = setTimeout(function () {
      _system2["default"].showToast({
        message: "请求超时",
        image: '/Common/logo.png'
      });
    }, 5000);
    promise1.then(this.refreshWeeklyRank(this), this.showError(this));
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

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRcXFJhbmtcXGluZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL3NyYy9SYW5rL2luZGV4LnV4Iiwid2VicGFjazovLy8uL3NyYy9SYW5rL2NvbXBvbmVudC9yYW5rX2xpc3QudXgiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JhbmsvY29tcG9uZW50L3JhbmtfbGlzdC51eD9hZTgyIiwid2VicGFjazovLy8uL3NyYy9SYW5rL2NvbXBvbmVudC9yYW5rX2xpc3QudXg/ZjZmZiIsIndlYnBhY2s6Ly8vLi9zcmMvUmFuay9jb21wb25lbnQvcmFua19saXN0LnV4PzQ0M2IiLCJ3ZWJwYWNrOi8vLy4vc3JjL1JhbmsvaW5kZXgudXg/Zjk4OCIsIndlYnBhY2s6Ly8vLi9zcmMvUmFuay9pbmRleC51eD80MGM5Iiwid2VicGFjazovLy8uL3NyYy9SYW5rL2luZGV4LnV4PzkxZmYiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDEyNSk7XG4iLCJyZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvbG9hZGVyLmpzP3R5cGU9Y29tcG9uZW50IS4vY29tcG9uZW50L3JhbmtfbGlzdC51eD9uYW1lPXJhbmtfbGlzdFwiKVxudmFyICRhcHBfdGVtcGxhdGUkID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS10ZW1wbGF0ZS1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9dGVtcGxhdGVzIS4vaW5kZXgudXhcIilcbnZhciAkYXBwX3N0eWxlJCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc3R5bGUtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPWM6XFxcXFVzZXJzXFxcXDExMDk2XFxcXERlc2t0b3BcXFxcU3RhY2tcXFxcRmFzdEFQUFxcXFxjb20ubmp1c3Quc3RhY2tcXFxcc3JjXFxcXFJhbmtcXFxcaW5kZXgudXghLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1jOlxcXFxVc2Vyc1xcXFwxMTA5NlxcXFxEZXNrdG9wXFxcXFN0YWNrXFxcXEZhc3RBUFBcXFxcY29tLm5qdXN0LnN0YWNrXFxcXHNyY1xcXFxSYW5rXFxcXGluZGV4LnV4IS4vaW5kZXgudXhcIilcbnZhciAkYXBwX3NjcmlwdCQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc2NyaXB0LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtYWNjZXNzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1jOlxcXFxVc2Vyc1xcXFwxMTA5NlxcXFxEZXNrdG9wXFxcXFN0YWNrXFxcXEZhc3RBUFBcXFxcY29tLm5qdXN0LnN0YWNrXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccHJlc2V0LWVudiZwbHVnaW5zW109YzpcXFxcVXNlcnNcXFxcMTEwOTZcXFxcRGVza3RvcFxcXFxTdGFja1xcXFxGYXN0QVBQXFxcXGNvbS5uanVzdC5zdGFja1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHBsdWdpbi10cmFuc2Zvcm0tbW9kdWxlcy1jb21tb25qcyZwbHVnaW5zW109YzpcXFxcVXNlcnNcXFxcMTEwOTZcXFxcRGVza3RvcFxcXFxTdGFja1xcXFxGYXN0QVBQXFxcXGNvbS5uanVzdC5zdGFja1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcanN4LWxvYWRlci5qcyZjb21tZW50cz1mYWxzZSEuLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vaW5kZXgudXhcIilcblxuJGFwcF9kZWZpbmUkKCdAYXBwLWNvbXBvbmVudC9pbmRleCcsIFtdLCBmdW5jdGlvbigkYXBwX3JlcXVpcmUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX21vZHVsZSQpe1xuICAgICAkYXBwX3NjcmlwdCQoJGFwcF9tb2R1bGUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX3JlcXVpcmUkKVxuICAgICBpZiAoJGFwcF9leHBvcnRzJC5fX2VzTW9kdWxlICYmICRhcHBfZXhwb3J0cyQuZGVmYXVsdCkge1xuICAgICAgICAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMgPSAkYXBwX2V4cG9ydHMkLmRlZmF1bHRcbiAgICAgICAgfVxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy50ZW1wbGF0ZSA9ICRhcHBfdGVtcGxhdGUkXG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnN0eWxlID0gJGFwcF9zdHlsZSRcbn0pXG5cbiRhcHBfYm9vdHN0cmFwJCgnQGFwcC1jb21wb25lbnQvaW5kZXgnLHsgcGFja2FnZXJOYW1lOidmYS10b29sa2l0JywgcGFja2FnZXJWZXJzaW9uOiAnMi4wLjAtU3RhYmxlLjMwMSd9KSIsInZhciAkYXBwX3RlbXBsYXRlJCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtdGVtcGxhdGUtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXRlbXBsYXRlcyEuL3JhbmtfbGlzdC51eFwiKVxudmFyICRhcHBfc3R5bGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1zdHlsZS1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9YzpcXFxcVXNlcnNcXFxcMTEwOTZcXFxcRGVza3RvcFxcXFxTdGFja1xcXFxGYXN0QVBQXFxcXGNvbS5uanVzdC5zdGFja1xcXFxzcmNcXFxcUmFua1xcXFxjb21wb25lbnRcXFxccmFua19saXN0LnV4IS4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9YzpcXFxcVXNlcnNcXFxcMTEwOTZcXFxcRGVza3RvcFxcXFxTdGFja1xcXFxGYXN0QVBQXFxcXGNvbS5uanVzdC5zdGFja1xcXFxzcmNcXFxcUmFua1xcXFxjb21wb25lbnRcXFxccmFua19saXN0LnV4IS4vcmFua19saXN0LnV4XCIpXG52YXIgJGFwcF9zY3JpcHQkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXNjcmlwdC1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWFjY2Vzcy1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlcj9wcmVzZXRzW109YzpcXFxcVXNlcnNcXFxcMTEwOTZcXFxcRGVza3RvcFxcXFxTdGFja1xcXFxGYXN0QVBQXFxcXGNvbS5uanVzdC5zdGFja1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHByZXNldC1lbnYmcGx1Z2luc1tdPWM6XFxcXFVzZXJzXFxcXDExMDk2XFxcXERlc2t0b3BcXFxcU3RhY2tcXFxcRmFzdEFQUFxcXFxjb20ubmp1c3Quc3RhY2tcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwbHVnaW4tdHJhbnNmb3JtLW1vZHVsZXMtY29tbW9uanMmcGx1Z2luc1tdPWM6XFxcXFVzZXJzXFxcXDExMDk2XFxcXERlc2t0b3BcXFxcU3RhY2tcXFxcRmFzdEFQUFxcXFxjb20ubmp1c3Quc3RhY2tcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGpzeC1sb2FkZXIuanMmY29tbWVudHM9ZmFsc2UhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL3JhbmtfbGlzdC51eFwiKVxuXG4kYXBwX2RlZmluZSQoJ0BhcHAtY29tcG9uZW50L3JhbmtfbGlzdCcsIFtdLCBmdW5jdGlvbigkYXBwX3JlcXVpcmUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX21vZHVsZSQpe1xuICAgICAkYXBwX3NjcmlwdCQoJGFwcF9tb2R1bGUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX3JlcXVpcmUkKVxuICAgICBpZiAoJGFwcF9leHBvcnRzJC5fX2VzTW9kdWxlICYmICRhcHBfZXhwb3J0cyQuZGVmYXVsdCkge1xuICAgICAgICAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMgPSAkYXBwX2V4cG9ydHMkLmRlZmF1bHRcbiAgICAgICAgfVxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy50ZW1wbGF0ZSA9ICRhcHBfdGVtcGxhdGUkXG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnN0eWxlID0gJGFwcF9zdHlsZSRcbn0pXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiYXR0clwiOiB7fSxcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwicmFuay1jb250YWluZXJcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJjb250ZW50LWxpc3RcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiY29udGVudC11cFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKGV2dCl7dGhpcy5jbGlja1RvUG9zdERldGFpbCh0aGlzLnBpZCxldnQpfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnVybH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiaW1hZ2VcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiY29udGVudC1kb3duXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJjb250ZW50LWxlZnRcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbihldnQpe3RoaXMuY2xpY2tUb1VzZXJEZXRhaWwodGhpcy5waG9uZW51bSxldnQpfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnBvc3Rlcmljb259XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcImljb25cIlxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiY29udGVudC1taWRcIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy51c2VybmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJjb250ZW50LXJpZ2h0XCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYVwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICh0aGlzLmxpa2VkYXRhKSsn5Liq6LWeJ31cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwibGlrZWRhdGFcIlxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwic3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5saWtlZD09PXRydWU/Jy9SYW5rL2ltZy9saWtlLnBuZyc6Jy9SYW5rL2ltZy9kaXNsaWtlLnBuZyd9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcImJ0blwiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgICAgICBcImNsaWNrXCI6IFwibGlrZVwiXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiLnJhbmstY29udGFpbmVyXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIlxuICB9LFxuICBcIi5jb250ZW50LWxpc3RcIjoge1xuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCJcbiAgfSxcbiAgXCIuY29udGVudC11cFwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCI2ODRweFwiLFxuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJpbmRpY2F0b3JDb2xvclwiOiBcInJnYmEoMCwwLDAsMC4yKVwiLFxuICAgIFwiaW5kaWNhdG9yU2VsZWN0ZWRDb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcIi5pbWFnZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcImhlaWdodFwiOiBcIjEwMCVcIixcbiAgICBcIm9iamVjdEZpdFwiOiBcImNvdmVyXCJcbiAgfSxcbiAgXCIuY29udGVudC1kb3duXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjExNHB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxMHB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjEwcHhcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiXG4gIH0sXG4gIFwiLmljb25cIjoge1xuICAgIFwid2lkdGhcIjogXCI4MHB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI4MHB4XCIsXG4gICAgXCJvYmplY3RGaXRcIjogXCJjb3ZlclwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiNDBweFwiLFxuICAgIFwiYm9yZGVyVG9wQ29sb3JcIjogXCIjZGMxNDNjXCIsXG4gICAgXCJib3JkZXJSaWdodENvbG9yXCI6IFwiI2RjMTQzY1wiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjZGMxNDNjXCIsXG4gICAgXCJib3JkZXJMZWZ0Q29sb3JcIjogXCIjZGMxNDNjXCIsXG4gICAgXCJib3JkZXJUb3BXaWR0aFwiOiBcIjNweFwiLFxuICAgIFwiYm9yZGVyUmlnaHRXaWR0aFwiOiBcIjNweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCIzcHhcIixcbiAgICBcImJvcmRlckxlZnRXaWR0aFwiOiBcIjNweFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMTdweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxN3B4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxN3B4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTdweFwiXG4gIH0sXG4gIFwiLmNvbnRlbnQtbWlkXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjEwMCVcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yXCI6IFwiI0YyRjJGMlwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCIxcHhcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIudXNlcm5hbWVcIjoge1xuICAgIFwiY29sb3JcIjogXCIjMDAwMDAwXCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiYm9sZFwiLFxuICAgIFwibGluZXNcIjogMSxcbiAgICBcInRleHRPdmVyZmxvd1wiOiBcImVsbGlwc2lzXCJcbiAgfSxcbiAgXCIubmFtZVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM4MDgwODBcIixcbiAgICBcImxpbmVzXCI6IDEsXG4gICAgXCJ0ZXh0T3ZlcmZsb3dcIjogXCJlbGxpcHNpc1wiXG4gIH0sXG4gIFwiLmNvbnRlbnQtcmlnaHRcIjoge1xuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJmbGV4LWVuZFwiXG4gIH0sXG4gIFwiLmxpa2VkYXRhXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzAwMDAwMFwiXG4gIH0sXG4gIFwiLmJ0blwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjY0cHhcIixcbiAgICBcImhlaWdodFwiOiBcIjY0cHhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjI1cHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMjVweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMjVweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjI1cHhcIixcbiAgICBcIm9iamVjdEZpdFwiOiBcImNvbnRhaW5cIlxuICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsICRhcHBfcmVxdWlyZSQpe1widXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfc3lzdGVtID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdCgkYXBwX3JlcXVpcmUkKFwiQGFwcC1tb2R1bGUvc3lzdGVtLnJvdXRlclwiKSk7XG5cbnZhciBfc3lzdGVtMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoJGFwcF9yZXF1aXJlJChcIkBhcHAtbW9kdWxlL3N5c3RlbS5wcm9tcHRcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxudmFyIF9kZWZhdWx0ID0ge1xuICBkYXRhOiB7XG4gICAgcHJvcHM6IFsncmFua2luZm9zJ11cbiAgfSxcbiAgcHJlc3M6IGZ1bmN0aW9uIHByZXNzKGl0ZW0pIHtcbiAgICBjb25zb2xlLmVycm9yKFwib24gcHJlc3MgZXZlbnQgcGFyYW0gOiBcIiArIGl0ZW0pO1xuICB9LFxuICBsaWtlOiBmdW5jdGlvbiBsaWtlKCkge1xuICAgIHRoaXMubGlrZWQgPSAhdGhpcy5saWtlZDtcblxuICAgIF9zeXN0ZW0yW1wiZGVmYXVsdFwiXS5zaG93VG9hc3Qoe1xuICAgICAgbWVzc2FnZTogdGhpcy5saWtlZCA9PT0gdHJ1ZSA/ICdsaWtlJyA6ICdkaXNsaWtlJyxcbiAgICAgIGltYWdlOiAnL0NvbW1vbi9sb2dvLnBuZydcbiAgICB9KTtcbiAgfSxcbiAgY2xpY2tUb1VzZXJEZXRhaWw6IGZ1bmN0aW9uIGNsaWNrVG9Vc2VyRGV0YWlsKHBuKSB7XG4gICAgaWYgKHBuID09PSAnMTgyNjAwNzEwMTInKSB7XG4gICAgICBfc3lzdGVtW1wiZGVmYXVsdFwiXS5wdXNoKHtcbiAgICAgICAgdXJpOiAnL01pbmUnXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgX3N5c3RlbVtcImRlZmF1bHRcIl0ucHVzaCh7XG4gICAgICAgIHVyaTogXCIvVXNlckRldGFpbFwiLFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBwaG9uZW51bTogcG5cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LFxuICBjbGlja1RvUG9zdERldGFpbDogZnVuY3Rpb24gY2xpY2tUb1Bvc3REZXRhaWwocGlkKSB7XG4gICAgX3N5c3RlbVtcImRlZmF1bHRcIl0ucHVzaCh7XG4gICAgICB1cmk6IFwiL1Bvc3REZXRhaWxcIixcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBwaWQ6IHBpZFxuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbnZhciBtb2R1bGVPd24gPSBleHBvcnRzLmRlZmF1bHQgfHwgbW9kdWxlLmV4cG9ydHM7XG52YXIgYWNjZXNzb3JzID0gWydwdWJsaWMnLCAncHJvdGVjdGVkJywgJ3ByaXZhdGUnXTtcbmlmIChtb2R1bGVPd24uZGF0YSAmJiBhY2Nlc3NvcnMuc29tZShmdW5jdGlvbiAoYWNjKSB7XG4gICAgcmV0dXJuIG1vZHVsZU93blthY2NdO1xuICB9KSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgZGF0YSBtdXN0IG5vdCBjb2V4aXN0IHdpdGggcHVibGljLCBwcm90ZWN0ZWQsIG9yIHByaXZhdGUuIFBsZWFzZSByZXBsYWNlIGRhdGEgd2l0aCBwdWJsaWMuJyk7XG59IGVsc2UgaWYgKCFtb2R1bGVPd24uZGF0YSkge1xuICBtb2R1bGVPd24uZGF0YSA9IHt9O1xuICBtb2R1bGVPd24uX2Rlc2NyaXB0b3IgPSB7fTtcbiAgYWNjZXNzb3JzLmZvckVhY2goZnVuY3Rpb24oYWNjKSB7XG4gICAgdmFyIGFjY1R5cGUgPSB0eXBlb2YgbW9kdWxlT3duW2FjY107XG4gICAgaWYgKGFjY1R5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBtb2R1bGVPd24uZGF0YSA9IE9iamVjdC5hc3NpZ24obW9kdWxlT3duLmRhdGEsIG1vZHVsZU93blthY2NdKTtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gbW9kdWxlT3duW2FjY10pIHtcbiAgICAgICAgbW9kdWxlT3duLl9kZXNjcmlwdG9yW25hbWVdID0ge2FjY2VzcyA6IGFjY307XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhY2NUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgJyArIGFjYyArICcgdmFsdWUgbXVzdCBub3QgYmUgYSBmdW5jdGlvbi4gQ2hhbmdlIHRoZSB2YWx1ZSB0byBhbiBvYmplY3QuJyk7XG4gICAgfVxuICB9KTtcbn19IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImF0dHJcIjoge30sXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcImNvbnRhaW5lclwiXG4gIF0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcInRhYnNcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJjaGFuZ2VcIjogXCJvbkNoYW5nZVRhYkluZGV4XCJcbiAgICAgIH0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRhYi1iYXJcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJtb2RlXCI6IFwic2Nyb2xsYWJsZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInRhYi1iYXJcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImJsb2NrXCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJyZXBlYXRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRhYnN9LFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJ0YWItaXRlbVwiXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiRpdGVtfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIFt0aGlzLiRpZHg9PXRoaXMuY3VyckluZGV4PydpdGVtX2JnX2FjdGl2ZSc6J2l0ZW1fYmcnXX1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRhYi1jb250ZW50XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwidGFiX2NvbnRlbnRcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImRpdl90YWJjb250ZW50XCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicmVmcmVzaFwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJvZmZzZXRcIjogXCIxMzBweFwiLFxuICAgICAgICAgICAgICAgICAgICBcInJlZnJlc2hpbmdcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmlzUmVmcmVzaGluZ31cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwicmVmcmVzaFwiOiBcInJlZnJlc2hcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJyZWZyZXNoXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImxpc3RcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImxpc3QtaXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICdsaXN0SXRlbScrKHRoaXMuJGlkeCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVwZWF0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5yYW5raW5mb3NfZGF5fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicmFua19saXN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVybFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGl0ZW0udXJsfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwb3N0ZXJpY29uXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS5wb3N0ZXJpY29ufSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwaG9uZW51bVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGl0ZW0ucGhvbmVudW19LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBpZFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGl0ZW0ucGlkfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1c2VybmFtZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGl0ZW0udXNlcm5hbWV9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiRpdGVtLm5hbWV9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpa2VkYXRhXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS5saWtlZGF0YX0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGlrZWRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiRpdGVtLmxpa2VkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiZGl2X3RhYmNvbnRlbnRcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJyZWZyZXNoXCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcIm9mZnNldFwiOiBcIjEzMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgIFwicmVmcmVzaGluZ1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaXNSZWZyZXNoaW5nfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJyZWZyZXNoXCI6IFwicmVmcmVzaFwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcInJlZnJlc2hcIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibGlzdFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwibGlzdC1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gJ2xpc3RJdGVtJysodGhpcy4kaWR4KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZXBlYXRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnJhbmtpbmZvc193ZWVrfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicmFua19saXN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVybFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGl0ZW0udXJsfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwb3N0ZXJpY29uXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS5wb3N0ZXJpY29ufSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJwaG9uZW51bVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGl0ZW0ucGhvbmVudW19LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBpZFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGl0ZW0ucGlkfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1c2VybmFtZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGl0ZW0udXNlcm5hbWV9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiRpdGVtLm5hbWV9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpa2VkYXRhXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS5saWtlZGF0YX0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGlrZWRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiRpdGVtLmxpa2VkfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIi5jb250YWluZXJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwiYWxpZ25Db250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImZsZXgtc3RhcnRcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRkZGRkZcIlxuICB9LFxuICBcIi5pdGVtX2JnXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMnB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDAsMCwwLDApXCJcbiAgfSxcbiAgXCIuaXRlbV9iZ19hY3RpdmVcIjoge1xuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJoZWlnaHRcIjogXCIycHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMwMDAwMDBcIlxuICB9LFxuICBcIi5kaXZfdGFiY29udGVudFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIlxuICB9LFxuICBcIi5kaXZfdGFiY29udGVudCB0ZXh0XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIudGFiLWJhclwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcImhlaWdodFwiOiBcIjkwcHhcIlxuICB9LFxuICBcIi50YWItaXRlbVwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjUwJVwiXG4gIH0sXG4gIFwiLnRhYi1pdGVtIHRleHRcIjoge1xuICAgIFwib3BhY2l0eVwiOiAwLjUsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIyNy41cHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjI3LjVweFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzNXB4XCIsXG4gICAgXCJmb250U2l6ZTphY3RpdmVcIjogXCIzNXB4XCIsXG4gICAgXCJtYXJnaW5Ub3A6YWN0aXZlXCI6IFwiMjcuNXB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b206YWN0aXZlXCI6IFwiMjcuNXB4XCIsXG4gICAgXCJmb250V2VpZ2h0OmFjdGl2ZVwiOiBcImJvbGRcIixcbiAgICBcImNvbG9yOmFjdGl2ZVwiOiBcIiMwMDAwMDBcIlxuICB9LFxuICBcIi50YWJfY29udGVudFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIlxuICB9LFxuICBcIi5yZWZyZXNoXCI6IHtcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcInByb2dyZXNzQ29sb3JcIjogXCIjMGZhZWZmXCJcbiAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCAkYXBwX3JlcXVpcmUkKXtcInVzZSBzdHJpY3RcIjtcblxudmFyIF9zeXN0ZW0gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KCRhcHBfcmVxdWlyZSQoXCJAYXBwLW1vZHVsZS9zeXN0ZW0uZmV0Y2hcIikpO1xuXG52YXIgX3N5c3RlbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KCRhcHBfcmVxdWlyZSQoXCJAYXBwLW1vZHVsZS9zeXN0ZW0ucHJvbXB0XCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBkYXRhOiB7XG4gICAgdGFiczogW1wiRGF5XCIsIFwiV2Vla1wiXSxcbiAgICBjdXJySW5kZXg6IDAsXG4gICAgaXNSZWZyZXNoaW5nOiBmYWxzZSxcbiAgICByYW5raW5mb3NfZGF5OiBbXSxcbiAgICByYW5raW5mb3Nfd2VlazogW11cbiAgfSxcbiAgb25DaGFuZ2VUYWJJbmRleDogZnVuY3Rpb24gb25DaGFuZ2VUYWJJbmRleChldnQpIHtcbiAgICB0aGlzLmN1cnJJbmRleCA9IGV2dC5pbmRleDtcbiAgfSxcbiAgcmVmcmVzaERhaWx5UmFuazogZnVuY3Rpb24gcmVmcmVzaERhaWx5UmFuayh0aGF0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICB0aGF0LnJhbmtpbmZvc19kYXkgPSBkYXRhLmRhdGEubWVzc2FnZS5tYXAodGhhdC5tYXBQb3N0KTtcbiAgICAgIHRoYXQuaXNSZWZyZXNoaW5nID0gZmFsc2U7XG4gICAgICBjbGVhclRpbWVvdXQodGhhdC50aW1lb3V0KTtcbiAgICB9O1xuICB9LFxuICByZWZyZXNoV2Vla2x5UmFuazogZnVuY3Rpb24gcmVmcmVzaFdlZWtseVJhbmsodGhhdCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgdGhhdC5yYW5raW5mb3Nfd2VlayA9IGRhdGEuZGF0YS5tZXNzYWdlLm1hcCh0aGF0Lm1hcFBvc3QpO1xuICAgICAgdGhhdC5pc1JlZnJlc2hpbmcgPSBmYWxzZTtcbiAgICAgIGNsZWFyVGltZW91dCh0aGF0LnRpbWVvdXQxKTtcbiAgICB9O1xuICB9LFxuICBzaG93RXJyb3I6IGZ1bmN0aW9uIHNob3dFcnJvcih0aGF0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChlcnJjb2RlLCBlcnJtc2cpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycmNvZGUgKyAnICcgKyBlcnJtc2cpO1xuXG4gICAgICBfc3lzdGVtMltcImRlZmF1bHRcIl0uc2hvd1RvYXN0KHtcbiAgICAgICAgbWVzc2FnZTogXCLor7fmsYLplJnor69cIixcbiAgICAgICAgaW1hZ2U6ICcvQ29tbW9uL2xvZ28ucG5nJ1xuICAgICAgfSk7XG5cbiAgICAgIHRoYXQuaXNSZWZyZXNoaW5nID0gZmFsc2U7XG4gICAgICBjbGVhclRpbWVvdXQodGhhdC50aW1lb3V0KTtcbiAgICAgIGNsZWFyVGltZW91dCh0aGF0LnRpbWVvdXQxKTtcbiAgICB9O1xuICB9LFxuICBwb3N0OiBmdW5jdGlvbiBwb3N0KHVybCwgZGF0YSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICBfc3lzdGVtW1wiZGVmYXVsdFwiXS5mZXRjaCh7XG4gICAgICAgIHVybDogdXJsLFxuICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICByZXNwb25zZVR5cGU6ICdqc29uJyxcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MoZGF0YSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwicG9zdCBzdWNjZXNzXCIpO1xuICAgICAgICAgIHJlc29sdmUoZGF0YSk7XG4gICAgICAgIH0sXG4gICAgICAgIGZhaWw6IGZ1bmN0aW9uIGZhaWwoZXJybXNnLCBlcnJjb2RlKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJwb3N0IGZhaWxcIik7XG4gICAgICAgICAgcmVqZWN0KGVycmNvZGUsIGVycm1zZyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9LFxuICByZWZyZXNoOiBmdW5jdGlvbiByZWZyZXNoKGUpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgdGhpcy5pc1JlZnJlc2hpbmcgPSBlLnJlZnJlc2hpbmc7XG4gICAgdmFyIHByb21pc2UgPSB0aGlzLnBvc3QoXCJodHRwOi8vMTE0LjExNi4yNDguMjMzOjEyMzQ1L3JhbmsvZ2V0X3JhbmtcIiwge1xuICAgICAgXCJwaG9uZW51bVwiOiBcIjE4MjYwMDcxMDExXCIsXG4gICAgICBcInRpbWVcIjogXCIyMDE5LTA5LTA4IDE1OjI0OjA3XCIsXG4gICAgICBcInBlcmlvZFwiOiBcIjFcIlxuICAgIH0pO1xuICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgdGhhdC5pc1JlZnJlc2hpbmcgPSBmYWxzZTtcblxuICAgICAgX3N5c3RlbTJbXCJkZWZhdWx0XCJdLnNob3dUb2FzdCh7XG4gICAgICAgIG1lc3NhZ2U6IFwi6K+35rGC6LaF5pe2XCIsXG4gICAgICAgIGltYWdlOiAnL0NvbW1vbi9sb2dvLnBuZydcbiAgICAgIH0pO1xuICAgIH0sIDUwMDApO1xuICAgIHByb21pc2UudGhlbih0aGlzLnJlZnJlc2hEYWlseVJhbmsodGhpcyksIHRoaXMuc2hvd0Vycm9yKHRoaXMpKTtcbiAgICB2YXIgcHJvbWlzZTEgPSB0aGlzLnBvc3QoXCJodHRwOi8vMTE0LjExNi4yNDguMjMzOjEyMzQ1L3JhbmsvZ2V0X3JhbmtcIiwge1xuICAgICAgXCJwaG9uZW51bVwiOiBcIjE4MjYwMDcxMDExXCIsXG4gICAgICBcInRpbWVcIjogXCIyMDE5LTA5LTA4IDE1OjI0OjA3XCIsXG4gICAgICBcInBlcmlvZFwiOiBcIjMwXCJcbiAgICB9KTtcbiAgICB0aGlzLnRpbWVvdXQxID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICB0aGF0LmlzUmVmcmVzaGluZyA9IGZhbHNlO1xuXG4gICAgICBfc3lzdGVtMltcImRlZmF1bHRcIl0uc2hvd1RvYXN0KHtcbiAgICAgICAgbWVzc2FnZTogXCLor7fmsYLotoXml7ZcIixcbiAgICAgICAgaW1hZ2U6ICcvQ29tbW9uL2xvZ28ucG5nJ1xuICAgICAgfSk7XG4gICAgfSwgNTAwMCk7XG4gICAgcHJvbWlzZTEudGhlbih0aGlzLnJlZnJlc2hXZWVrbHlSYW5rKHRoaXMpLCB0aGlzLnNob3dFcnJvcih0aGlzKSk7XG4gIH0sXG4gIG1hcFBvc3Q6IGZ1bmN0aW9uIG1hcFBvc3QoaXRlbSkge1xuICAgIHJldHVybiB7XG4gICAgICB1cmw6IGl0ZW0udXJsLFxuICAgICAgbGlrZWRhdGE6IGl0ZW0ubGlrZXMsXG4gICAgICB1c2VybmFtZTogaXRlbS51c2VyLnVzZXJuYW1lLFxuICAgICAgcGhvbmVudW06IGl0ZW0udXNlci5waG9uZW51bSxcbiAgICAgIHBpZDogaXRlbS5waWQsXG4gICAgICBuYW1lOiBpdGVtLnVzZXIubmFtZSxcbiAgICAgIHBvc3Rlcmljb246IGl0ZW0udXNlci5waG90byxcbiAgICAgIGxpa2VkOiBpdGVtLmlzbGlrZWRcbiAgICB9O1xuICB9LFxuICBvbkluaXQ6IGZ1bmN0aW9uIG9uSW5pdCgpIHtcbiAgICB2YXIgcHJvbWlzZSA9IHRoaXMucG9zdChcImh0dHA6Ly8xMTQuMTE2LjI0OC4yMzM6MTIzNDUvcmFuay9nZXRfcmFua1wiLCB7XG4gICAgICBcInBob25lbnVtXCI6IFwiMTgyNjAwNzEwMTFcIixcbiAgICAgIFwidGltZVwiOiBcIjIwMTktMDktMDggMTU6MjQ6MDdcIixcbiAgICAgIFwicGVyaW9kXCI6IFwiMVwiXG4gICAgfSk7XG4gICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBfc3lzdGVtMltcImRlZmF1bHRcIl0uc2hvd1RvYXN0KHtcbiAgICAgICAgbWVzc2FnZTogXCLor7fmsYLotoXml7ZcIixcbiAgICAgICAgaW1hZ2U6ICcvQ29tbW9uL2xvZ28ucG5nJ1xuICAgICAgfSk7XG4gICAgfSwgNTAwMCk7XG4gICAgcHJvbWlzZS50aGVuKHRoaXMucmVmcmVzaERhaWx5UmFuayh0aGlzKSwgdGhpcy5zaG93RXJyb3IodGhpcykpO1xuICAgIHZhciBwcm9taXNlMSA9IHRoaXMucG9zdChcImh0dHA6Ly8xMTQuMTE2LjI0OC4yMzM6MTIzNDUvcmFuay9nZXRfcmFua1wiLCB7XG4gICAgICBcInBob25lbnVtXCI6IFwiMTgyNjAwNzEwMTFcIixcbiAgICAgIFwidGltZVwiOiBcIjIwMTktMDktMDggMTU6MjQ6MDdcIixcbiAgICAgIFwicGVyaW9kXCI6IFwiMzBcIlxuICAgIH0pO1xuICAgIHRoaXMudGltZW91dDEgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIF9zeXN0ZW0yW1wiZGVmYXVsdFwiXS5zaG93VG9hc3Qoe1xuICAgICAgICBtZXNzYWdlOiBcIuivt+axgui2heaXtlwiLFxuICAgICAgICBpbWFnZTogJy9Db21tb24vbG9nby5wbmcnXG4gICAgICB9KTtcbiAgICB9LCA1MDAwKTtcbiAgICBwcm9taXNlMS50aGVuKHRoaXMucmVmcmVzaFdlZWtseVJhbmsodGhpcyksIHRoaXMuc2hvd0Vycm9yKHRoaXMpKTtcbiAgfVxufTtcbnZhciBtb2R1bGVPd24gPSBleHBvcnRzLmRlZmF1bHQgfHwgbW9kdWxlLmV4cG9ydHM7XG52YXIgYWNjZXNzb3JzID0gWydwdWJsaWMnLCAncHJvdGVjdGVkJywgJ3ByaXZhdGUnXTtcbmlmIChtb2R1bGVPd24uZGF0YSAmJiBhY2Nlc3NvcnMuc29tZShmdW5jdGlvbiAoYWNjKSB7XG4gICAgcmV0dXJuIG1vZHVsZU93blthY2NdO1xuICB9KSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgZGF0YSBtdXN0IG5vdCBjb2V4aXN0IHdpdGggcHVibGljLCBwcm90ZWN0ZWQsIG9yIHByaXZhdGUuIFBsZWFzZSByZXBsYWNlIGRhdGEgd2l0aCBwdWJsaWMuJyk7XG59IGVsc2UgaWYgKCFtb2R1bGVPd24uZGF0YSkge1xuICBtb2R1bGVPd24uZGF0YSA9IHt9O1xuICBtb2R1bGVPd24uX2Rlc2NyaXB0b3IgPSB7fTtcbiAgYWNjZXNzb3JzLmZvckVhY2goZnVuY3Rpb24oYWNjKSB7XG4gICAgdmFyIGFjY1R5cGUgPSB0eXBlb2YgbW9kdWxlT3duW2FjY107XG4gICAgaWYgKGFjY1R5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBtb2R1bGVPd24uZGF0YSA9IE9iamVjdC5hc3NpZ24obW9kdWxlT3duLmRhdGEsIG1vZHVsZU93blthY2NdKTtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gbW9kdWxlT3duW2FjY10pIHtcbiAgICAgICAgbW9kdWxlT3duLl9kZXNjcmlwdG9yW25hbWVdID0ge2FjY2VzcyA6IGFjY307XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhY2NUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgJyArIGFjYyArICcgdmFsdWUgbXVzdCBub3QgYmUgYSBmdW5jdGlvbi4gQ2hhbmdlIHRoZSB2YWx1ZSB0byBhbiBvYmplY3QuJyk7XG4gICAgfVxuICB9KTtcbn19Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzdIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3hFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3hLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=