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
/******/ 	return __webpack_require__(__webpack_require__.s = 113);
/******/ })
/************************************************************************/
/******/ ({

/***/ 113:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(114)
var $app_template$ = __webpack_require__(118)
var $app_style$ = __webpack_require__(119)
var $app_script$ = __webpack_require__(120)

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

/***/ 114:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(115)
var $app_style$ = __webpack_require__(116)
var $app_script$ = __webpack_require__(117)

$app_define$('@app-component/component-post', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ 115:
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "item-container"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "header-container"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "header-poster"
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
              "type": "text",
              "attr": {
                "value": function () {return this.poster}
              },
              "classList": [
                "black",
                "bold"
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "header-time"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return this.posttime}
              }
            }
          ]
        }
      ]
    },
    {
      "type": "swiper",
      "attr": {
        "autoplay": "true",
        "id": "swiper"
      },
      "classList": [
        "swiper"
      ],
      "id": "swiper",
      "children": [
        {
          "type": "image",
          "attr": {
            "src": function () {return this.$item.src}
          },
          "repeat": function () {return this.swiperdata},
          "classList": [
            "image"
          ],
          "events": {
            "click": function(evt){this.viewImage(this,evt)}
          }
        }
      ]
    },
    {
      "type": "div",
      "attr": {},
      "classList": [
        "list-main"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "list-main-left"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return (this.likedata)+'个赞'}
              },
              "classList": [
                "black",
                "bold",
                "font-size-lg"
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "list-main-right"
          ],
          "children": [
            {
              "type": "image",
              "attr": {
                "src": "/Community/img/retweet.png"
              },
              "classList": [
                "btn"
              ],
              "events": {
                "click": "retweet"
              }
            },
            {
              "type": "image",
              "attr": {
                "src": "/Community/img/comment.png"
              },
              "classList": [
                "btn"
              ],
              "events": {
                "click": function(evt){this.clickToComments(this.pid,evt)}
              }
            },
            {
              "type": "image",
              "attr": {
                "src": function () {return this.liked===true?'/Community/img/like.png':'/Community/img/dislike.png'}
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
    },
    {
      "type": "text",
      "attr": {
        "lines": function () {return this.posterCommentLines}
      },
      "classList": [
        "poster-comment"
      ],
      "events": {
        "click": "expandPosterComment"
      },
      "children": [
        {
          "type": "a",
          "attr": {
            "value": function () {return this.poster}
          },
          "classList": [
            "black",
            "bold"
          ]
        },
        {
          "type": "a",
          "attr": {
            "value": " "
          }
        },
        {
          "type": "a",
          "attr": {
            "value": function () {return this.postercomment}
          },
          "classList": [
            "black"
          ]
        }
      ]
    },
    {
      "type": "text",
      "attr": {
        "value": function () {return '查看全部'+(this.commentnumber)+'则留言'}
      },
      "classList": [
        "comment-number",
        "gray",
        "font-size-sm"
      ],
      "events": {
        "click": function(evt){this.clickToComments(this.pid,evt)}
      }
    }
  ]
}

/***/ }),

/***/ 116:
/***/ (function(module, exports) {

module.exports = {
  ".item-container": {
    "flexDirection": "column",
    "backgroundColor": "#ffffff",
    "width": "100%",
    "marginBottom": "40px"
  },
  ".header-container": {
    "height": "72px",
    "justifyContent": "space-between",
    "marginLeft": "20px",
    "marginRight": "20px"
  },
  ".icon": {
    "height": "64px",
    "width": "64px",
    "borderRadius": "32px",
    "borderTopColor": "#dc143c",
    "borderRightColor": "#dc143c",
    "borderBottomColor": "#dc143c",
    "borderLeftColor": "#dc143c",
    "borderTopWidth": "2px",
    "borderRightWidth": "2px",
    "borderBottomWidth": "2px",
    "borderLeftWidth": "2px",
    "marginTop": "4px",
    "marginRight": "20px",
    "marginBottom": "4px",
    "marginLeft": "4px",
    "objectFit": "contain"
  },
  ".header-time": {
    "justifyContent": "flex-end"
  },
  ".swiper": {
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
  ".list-main": {
    "marginTop": "10px",
    "justifyContent": "space-between",
    "marginLeft": "20px",
    "marginRight": "5px"
  },
  ".list-main-right": {
    "justifyContent": "flex-end"
  },
  ".btn": {
    "width": "64px",
    "height": "64px",
    "marginRight": "10px",
    "marginLeft": "10px",
    "objectFit": "contain"
  },
  ".poster-comment": {
    "marginLeft": "20px",
    "marginRight": "20px",
    "textOverflow": "ellipsis"
  },
  ".comment-number": {
    "marginLeft": "20px",
    "marginRight": "20px"
  },
  ".font-size-sm": {
    "fontSize": "27px"
  },
  ".font-size-lg": {
    "fontSize": "33px"
  },
  ".bold": {
    "fontWeight": "bold"
  },
  ".black": {
    "color": "#000000"
  },
  ".gray": {
    "color": "#808080"
  }
}

/***/ }),

/***/ 117:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

var _system = _interopRequireDefault($app_require$("@app-module/system.media"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.prompt"));

var _system3 = _interopRequireDefault($app_require$("@app-module/system.router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = {
  props: ['swiperdata', 'likedata', 'poster', 'pid', 'phonenum', 'postercomment', 'commentnumber', 'postericon', 'posttime', 'liked'],
  data: {
    posterCommentLines: 2
  },
  retweet: function retweet() {
    _system2["default"].showToast({
      message: 'retweet',
      image: '/Common/logo.png'
    });
  },
  comment: function comment() {
    _system2["default"].showToast({
      message: 'comment',
      image: '/Common/logo.png'
    });
  },
  clickToComments: function clickToComments(pid) {
    _system3["default"].push({
      uri: '/Comments',
      params: {
        pid: pid
      }
    });
  },
  like: function like() {
    this.liked = !this.liked;

    _system2["default"].showToast({
      message: this.liked === true ? 'like' : 'dislike',
      image: '/Common/logo.png'
    });
  },
  expandPosterComment: function expandPosterComment() {
    this.posterCommentLines = this.posterCommentLines === -1 ? 2 : -1;
  },
  viewPoster: function viewPoster() {
    _system2["default"].showToast({
      message: 'viewPoster',
      image: '/Common/logo.png'
    });
  },
  clickToUserDetail: function clickToUserDetail(pn) {
    _system3["default"].push({
      uri: "/UserDetail",
      params: {
        phonenum: pn
      }
    });
  },
  viewImage: function viewImage(obj) {
    var that = this;

    _system["default"].previewImage({
      current: obj.$item.src,
      uris: that.swiperdata.map(function (item) {
        return item.src;
      }),
      success: function success() {
        console.log('previewImage success');
      },
      fail: function fail(errmsg, errcode) {
        console.log('previewImage fail (' + errcode + ') ' + errmsg);
      }
    });
  },
  onInit: function onInit() {
    this.$watch('swiperdata', 'handleUpdate');
  },
  handleUpdate: function handleUpdate(newVal, oldVal) {
    this.$element('swiper').swipeTo({
      index: 0
    });
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

/***/ }),

/***/ 118:
/***/ (function(module, exports) {

module.exports = {
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
          "repeat": function () {return this.postData},
          "children": [
            {
              "type": "component-post",
              "attr": {
                "swiperdata": function () {return this.$item.swiperdata},
                "pid": function () {return this.$item.pid},
                "phonenum": function () {return this.$item.phonenum},
                "likedata": function () {return this.$item.likedata},
                "poster": function () {return this.$item.poster},
                "postericon": function () {return this.$item.postericon},
                "postercomment": function () {return this.$item.postercomment},
                "commentnumber": function () {return this.$item.commentnumber},
                "posttime": function () {return this.$item.posttime},
                "liked": function () {return this.$item.liked}
              }
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),

/***/ 119:
/***/ (function(module, exports) {

module.exports = {
  ".circular-progress": {
    "width": "96px",
    "height": "96px"
  },
  ".font-size-lg": {
    "fontSize": "37px"
  },
  ".refresh": {
    "flexDirection": "column",
    "backgroundColor": "#ffffff",
    "progressColor": "#0faeff"
  }
}

/***/ }),

/***/ 120:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

var _system = _interopRequireDefault($app_require$("@app-module/system.fetch"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.prompt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = {
  data: {
    pid: '',
    isRefreshing: false,
    postData: []
  },
  refreshPost: function refreshPost(that) {
    return function (data) {
      console.log(data.data.message.phonenum);
      that.postData = data.data.message.map(that.mapPost);
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
    var promise = this.post("http://114.116.248.233:12345/post/get_one_post", {
      "phonenum": "18260071012",
      "pid": that.pid
    });
    this.timeout = setTimeout(function () {
      that.isRefreshing = false;

      _system2["default"].showToast({
        message: "请求超时",
        image: '/Common/logo.png'
      });
    }, 5000);
    promise.then(this.refreshPost(this), this.showError(this));
  },
  mapPost: function mapPost(item) {
    return {
      swiperdata: item.images.map(function (image) {
        return {
          src: image.url
        };
      }),
      likedata: item.likes,
      poster: item.user.username,
      phonenum: item.phonenum,
      pid: item.pid,
      postercomment: item.selfcomment,
      commentnumber: item.comments,
      postericon: item.user.photo,
      posttime: item.ptime,
      liked: item.isliked
    };
  },
  onInit: function onInit() {
    var promise = this.post("http://114.116.248.233:12345/post/get_one_post", {
      "phonenum": "18260071012",
      "pid": this.pid
    });
    this.timeout = setTimeout(function () {
      _system2["default"].showToast({
        message: "请求超时",
        image: '/Common/logo.png'
      });
    }, 5000);
    promise.then(this.refreshPost(this), this.showError(this));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRcXFBvc3REZXRhaWxcXGluZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL3NyYy9Qb3N0RGV0YWlsL2luZGV4LnV4Iiwid2VicGFjazovLy8uL3NyYy9Qb3N0RGV0YWlsL2NvbXBvbmVudC9jb21wb25lbnQtcG9zdC51eCIsIndlYnBhY2s6Ly8vLi9zcmMvUG9zdERldGFpbC9jb21wb25lbnQvY29tcG9uZW50LXBvc3QudXg/MWZiNiIsIndlYnBhY2s6Ly8vLi9zcmMvUG9zdERldGFpbC9jb21wb25lbnQvY29tcG9uZW50LXBvc3QudXg/NWQ4MCIsIndlYnBhY2s6Ly8vLi9zcmMvUG9zdERldGFpbC9jb21wb25lbnQvY29tcG9uZW50LXBvc3QudXg/NDU0YiIsIndlYnBhY2s6Ly8vLi9zcmMvUG9zdERldGFpbC9pbmRleC51eD82ZDMwIiwid2VicGFjazovLy8uL3NyYy9Qb3N0RGV0YWlsL2luZGV4LnV4P2JjY2YiLCJ3ZWJwYWNrOi8vLy4vc3JjL1Bvc3REZXRhaWwvaW5kZXgudXg/Y2UyMiJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMTEzKTtcbiIsInJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9sb2FkZXIuanM/dHlwZT1jb21wb25lbnQhLi9jb21wb25lbnQvY29tcG9uZW50LXBvc3QudXg/bmFtZT1jb21wb25lbnQtcG9zdFwiKVxudmFyICRhcHBfdGVtcGxhdGUkID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS10ZW1wbGF0ZS1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9dGVtcGxhdGVzIS4vaW5kZXgudXhcIilcbnZhciAkYXBwX3N0eWxlJCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc3R5bGUtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPWM6XFxcXFVzZXJzXFxcXDExMDk2XFxcXERlc2t0b3BcXFxcU3RhY2tcXFxcRmFzdEFQUFxcXFxjb20ubmp1c3Quc3RhY2tcXFxcc3JjXFxcXFBvc3REZXRhaWxcXFxcaW5kZXgudXghLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1jOlxcXFxVc2Vyc1xcXFwxMTA5NlxcXFxEZXNrdG9wXFxcXFN0YWNrXFxcXEZhc3RBUFBcXFxcY29tLm5qdXN0LnN0YWNrXFxcXHNyY1xcXFxQb3N0RGV0YWlsXFxcXGluZGV4LnV4IS4vaW5kZXgudXhcIilcbnZhciAkYXBwX3NjcmlwdCQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc2NyaXB0LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtYWNjZXNzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1jOlxcXFxVc2Vyc1xcXFwxMTA5NlxcXFxEZXNrdG9wXFxcXFN0YWNrXFxcXEZhc3RBUFBcXFxcY29tLm5qdXN0LnN0YWNrXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccHJlc2V0LWVudiZwbHVnaW5zW109YzpcXFxcVXNlcnNcXFxcMTEwOTZcXFxcRGVza3RvcFxcXFxTdGFja1xcXFxGYXN0QVBQXFxcXGNvbS5uanVzdC5zdGFja1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHBsdWdpbi10cmFuc2Zvcm0tbW9kdWxlcy1jb21tb25qcyZwbHVnaW5zW109YzpcXFxcVXNlcnNcXFxcMTEwOTZcXFxcRGVza3RvcFxcXFxTdGFja1xcXFxGYXN0QVBQXFxcXGNvbS5uanVzdC5zdGFja1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcanN4LWxvYWRlci5qcyZjb21tZW50cz1mYWxzZSEuLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vaW5kZXgudXhcIilcblxuJGFwcF9kZWZpbmUkKCdAYXBwLWNvbXBvbmVudC9pbmRleCcsIFtdLCBmdW5jdGlvbigkYXBwX3JlcXVpcmUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX21vZHVsZSQpe1xuICAgICAkYXBwX3NjcmlwdCQoJGFwcF9tb2R1bGUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX3JlcXVpcmUkKVxuICAgICBpZiAoJGFwcF9leHBvcnRzJC5fX2VzTW9kdWxlICYmICRhcHBfZXhwb3J0cyQuZGVmYXVsdCkge1xuICAgICAgICAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMgPSAkYXBwX2V4cG9ydHMkLmRlZmF1bHRcbiAgICAgICAgfVxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy50ZW1wbGF0ZSA9ICRhcHBfdGVtcGxhdGUkXG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnN0eWxlID0gJGFwcF9zdHlsZSRcbn0pXG5cbiRhcHBfYm9vdHN0cmFwJCgnQGFwcC1jb21wb25lbnQvaW5kZXgnLHsgcGFja2FnZXJOYW1lOidmYS10b29sa2l0JywgcGFja2FnZXJWZXJzaW9uOiAnMi4wLjAtU3RhYmxlLjMwMSd9KSIsInZhciAkYXBwX3RlbXBsYXRlJCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtdGVtcGxhdGUtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXRlbXBsYXRlcyEuL2NvbXBvbmVudC1wb3N0LnV4XCIpXG52YXIgJGFwcF9zdHlsZSQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtanNvbi1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXN0eWxlLWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1jOlxcXFxVc2Vyc1xcXFwxMTA5NlxcXFxEZXNrdG9wXFxcXFN0YWNrXFxcXEZhc3RBUFBcXFxcY29tLm5qdXN0LnN0YWNrXFxcXHNyY1xcXFxQb3N0RGV0YWlsXFxcXGNvbXBvbmVudFxcXFxjb21wb25lbnQtcG9zdC51eCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPWM6XFxcXFVzZXJzXFxcXDExMDk2XFxcXERlc2t0b3BcXFxcU3RhY2tcXFxcRmFzdEFQUFxcXFxjb20ubmp1c3Quc3RhY2tcXFxcc3JjXFxcXFBvc3REZXRhaWxcXFxcY29tcG9uZW50XFxcXGNvbXBvbmVudC1wb3N0LnV4IS4vY29tcG9uZW50LXBvc3QudXhcIilcbnZhciAkYXBwX3NjcmlwdCQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc2NyaXB0LWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtYWNjZXNzLWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1jOlxcXFxVc2Vyc1xcXFwxMTA5NlxcXFxEZXNrdG9wXFxcXFN0YWNrXFxcXEZhc3RBUFBcXFxcY29tLm5qdXN0LnN0YWNrXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccHJlc2V0LWVudiZwbHVnaW5zW109YzpcXFxcVXNlcnNcXFxcMTEwOTZcXFxcRGVza3RvcFxcXFxTdGFja1xcXFxGYXN0QVBQXFxcXGNvbS5uanVzdC5zdGFja1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHBsdWdpbi10cmFuc2Zvcm0tbW9kdWxlcy1jb21tb25qcyZwbHVnaW5zW109YzpcXFxcVXNlcnNcXFxcMTEwOTZcXFxcRGVza3RvcFxcXFxTdGFja1xcXFxGYXN0QVBQXFxcXGNvbS5uanVzdC5zdGFja1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcanN4LWxvYWRlci5qcyZjb21tZW50cz1mYWxzZSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vY29tcG9uZW50LXBvc3QudXhcIilcblxuJGFwcF9kZWZpbmUkKCdAYXBwLWNvbXBvbmVudC9jb21wb25lbnQtcG9zdCcsIFtdLCBmdW5jdGlvbigkYXBwX3JlcXVpcmUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX21vZHVsZSQpe1xuICAgICAkYXBwX3NjcmlwdCQoJGFwcF9tb2R1bGUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX3JlcXVpcmUkKVxuICAgICBpZiAoJGFwcF9leHBvcnRzJC5fX2VzTW9kdWxlICYmICRhcHBfZXhwb3J0cyQuZGVmYXVsdCkge1xuICAgICAgICAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMgPSAkYXBwX2V4cG9ydHMkLmRlZmF1bHRcbiAgICAgICAgfVxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy50ZW1wbGF0ZSA9ICRhcHBfdGVtcGxhdGUkXG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnN0eWxlID0gJGFwcF9zdHlsZSRcbn0pXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiYXR0clwiOiB7fSxcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwiaXRlbS1jb250YWluZXJcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJoZWFkZXItY29udGFpbmVyXCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImhlYWRlci1wb3N0ZXJcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbihldnQpe3RoaXMuY2xpY2tUb1VzZXJEZXRhaWwodGhpcy5waG9uZW51bSxldnQpfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnBvc3Rlcmljb259XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImljb25cIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucG9zdGVyfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJibGFja1wiLFxuICAgICAgICAgICAgICAgIFwiYm9sZFwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJoZWFkZXItdGltZVwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnBvc3R0aW1lfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJzd2lwZXJcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwiYXV0b3BsYXlcIjogXCJ0cnVlXCIsXG4gICAgICAgIFwiaWRcIjogXCJzd2lwZXJcIlxuICAgICAgfSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJzd2lwZXJcIlxuICAgICAgXSxcbiAgICAgIFwiaWRcIjogXCJzd2lwZXJcIixcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiRpdGVtLnNyY31cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVwZWF0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5zd2lwZXJkYXRhfSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImltYWdlXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oZXZ0KXt0aGlzLnZpZXdJbWFnZSh0aGlzLGV2dCl9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJsaXN0LW1haW5cIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwibGlzdC1tYWluLWxlZnRcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gKHRoaXMubGlrZWRhdGEpKyfkuKrotZ4nfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJibGFja1wiLFxuICAgICAgICAgICAgICAgIFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgIFwiZm9udC1zaXplLWxnXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImxpc3QtbWFpbi1yaWdodFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInNyY1wiOiBcIi9Db21tdW5pdHkvaW1nL3JldHdlZXQucG5nXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiYnRuXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogXCJyZXR3ZWV0XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInNyY1wiOiBcIi9Db21tdW5pdHkvaW1nL2NvbW1lbnQucG5nXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiYnRuXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oZXZ0KXt0aGlzLmNsaWNrVG9Db21tZW50cyh0aGlzLnBpZCxldnQpfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwic3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5saWtlZD09PXRydWU/Jy9Db21tdW5pdHkvaW1nL2xpa2UucG5nJzonL0NvbW11bml0eS9pbWcvZGlzbGlrZS5wbmcnfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJidG5cIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJjbGlja1wiOiBcImxpa2VcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcImxpbmVzXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5wb3N0ZXJDb21tZW50TGluZXN9XG4gICAgICB9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInBvc3Rlci1jb21tZW50XCJcbiAgICAgIF0sXG4gICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgIFwiY2xpY2tcIjogXCJleHBhbmRQb3N0ZXJDb21tZW50XCJcbiAgICAgIH0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImFcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucG9zdGVyfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJibGFja1wiLFxuICAgICAgICAgICAgXCJib2xkXCJcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJhXCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogXCLigIJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImFcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucG9zdGVyY29tbWVudH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiYmxhY2tcIlxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICfmn6XnnIvlhajpg6gnKyh0aGlzLmNvbW1lbnRudW1iZXIpKyfliJnnlZnoqIAnfVxuICAgICAgfSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJjb21tZW50LW51bWJlclwiLFxuICAgICAgICBcImdyYXlcIixcbiAgICAgICAgXCJmb250LXNpemUtc21cIlxuICAgICAgXSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbihldnQpe3RoaXMuY2xpY2tUb0NvbW1lbnRzKHRoaXMucGlkLGV2dCl9XG4gICAgICB9XG4gICAgfVxuICBdXG59IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiLml0ZW0tY29udGFpbmVyXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNDBweFwiXG4gIH0sXG4gIFwiLmhlYWRlci1jb250YWluZXJcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiNzJweFwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMjBweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIyMHB4XCJcbiAgfSxcbiAgXCIuaWNvblwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCI2NHB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjY0cHhcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjMycHhcIixcbiAgICBcImJvcmRlclRvcENvbG9yXCI6IFwiI2RjMTQzY1wiLFxuICAgIFwiYm9yZGVyUmlnaHRDb2xvclwiOiBcIiNkYzE0M2NcIixcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yXCI6IFwiI2RjMTQzY1wiLFxuICAgIFwiYm9yZGVyTGVmdENvbG9yXCI6IFwiI2RjMTQzY1wiLFxuICAgIFwiYm9yZGVyVG9wV2lkdGhcIjogXCIycHhcIixcbiAgICBcImJvcmRlclJpZ2h0V2lkdGhcIjogXCIycHhcIixcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IFwiMnB4XCIsXG4gICAgXCJib3JkZXJMZWZ0V2lkdGhcIjogXCIycHhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjRweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIyMHB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI0cHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI0cHhcIixcbiAgICBcIm9iamVjdEZpdFwiOiBcImNvbnRhaW5cIlxuICB9LFxuICBcIi5oZWFkZXItdGltZVwiOiB7XG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImZsZXgtZW5kXCJcbiAgfSxcbiAgXCIuc3dpcGVyXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjY4NHB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcImluZGljYXRvckNvbG9yXCI6IFwicmdiYSgwLDAsMCwwLjIpXCIsXG4gICAgXCJpbmRpY2F0b3JTZWxlY3RlZENvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwiLmltYWdlXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTAwJVwiLFxuICAgIFwib2JqZWN0Rml0XCI6IFwiY292ZXJcIlxuICB9LFxuICBcIi5saXN0LW1haW5cIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiMTBweFwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMjBweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI1cHhcIlxuICB9LFxuICBcIi5saXN0LW1haW4tcmlnaHRcIjoge1xuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJmbGV4LWVuZFwiXG4gIH0sXG4gIFwiLmJ0blwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjY0cHhcIixcbiAgICBcImhlaWdodFwiOiBcIjY0cHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMTBweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjEwcHhcIixcbiAgICBcIm9iamVjdEZpdFwiOiBcImNvbnRhaW5cIlxuICB9LFxuICBcIi5wb3N0ZXItY29tbWVudFwiOiB7XG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMjBweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIyMHB4XCIsXG4gICAgXCJ0ZXh0T3ZlcmZsb3dcIjogXCJlbGxpcHNpc1wiXG4gIH0sXG4gIFwiLmNvbW1lbnQtbnVtYmVyXCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIyMHB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjIwcHhcIlxuICB9LFxuICBcIi5mb250LXNpemUtc21cIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIyN3B4XCJcbiAgfSxcbiAgXCIuZm9udC1zaXplLWxnXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzNweFwiXG4gIH0sXG4gIFwiLmJvbGRcIjoge1xuICAgIFwiZm9udFdlaWdodFwiOiBcImJvbGRcIlxuICB9LFxuICBcIi5ibGFja1wiOiB7XG4gICAgXCJjb2xvclwiOiBcIiMwMDAwMDBcIlxuICB9LFxuICBcIi5ncmF5XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzgwODA4MFwiXG4gIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgJGFwcF9yZXF1aXJlJCl7XCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfc3lzdGVtID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdCgkYXBwX3JlcXVpcmUkKFwiQGFwcC1tb2R1bGUvc3lzdGVtLm1lZGlhXCIpKTtcblxudmFyIF9zeXN0ZW0yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdCgkYXBwX3JlcXVpcmUkKFwiQGFwcC1tb2R1bGUvc3lzdGVtLnByb21wdFwiKSk7XG5cbnZhciBfc3lzdGVtMyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoJGFwcF9yZXF1aXJlJChcIkBhcHAtbW9kdWxlL3N5c3RlbS5yb3V0ZXJcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHByb3BzOiBbJ3N3aXBlcmRhdGEnLCAnbGlrZWRhdGEnLCAncG9zdGVyJywgJ3BpZCcsICdwaG9uZW51bScsICdwb3N0ZXJjb21tZW50JywgJ2NvbW1lbnRudW1iZXInLCAncG9zdGVyaWNvbicsICdwb3N0dGltZScsICdsaWtlZCddLFxuICBkYXRhOiB7XG4gICAgcG9zdGVyQ29tbWVudExpbmVzOiAyXG4gIH0sXG4gIHJldHdlZXQ6IGZ1bmN0aW9uIHJldHdlZXQoKSB7XG4gICAgX3N5c3RlbTJbXCJkZWZhdWx0XCJdLnNob3dUb2FzdCh7XG4gICAgICBtZXNzYWdlOiAncmV0d2VldCcsXG4gICAgICBpbWFnZTogJy9Db21tb24vbG9nby5wbmcnXG4gICAgfSk7XG4gIH0sXG4gIGNvbW1lbnQ6IGZ1bmN0aW9uIGNvbW1lbnQoKSB7XG4gICAgX3N5c3RlbTJbXCJkZWZhdWx0XCJdLnNob3dUb2FzdCh7XG4gICAgICBtZXNzYWdlOiAnY29tbWVudCcsXG4gICAgICBpbWFnZTogJy9Db21tb24vbG9nby5wbmcnXG4gICAgfSk7XG4gIH0sXG4gIGNsaWNrVG9Db21tZW50czogZnVuY3Rpb24gY2xpY2tUb0NvbW1lbnRzKHBpZCkge1xuICAgIF9zeXN0ZW0zW1wiZGVmYXVsdFwiXS5wdXNoKHtcbiAgICAgIHVyaTogJy9Db21tZW50cycsXG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgcGlkOiBwaWRcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbiAgbGlrZTogZnVuY3Rpb24gbGlrZSgpIHtcbiAgICB0aGlzLmxpa2VkID0gIXRoaXMubGlrZWQ7XG5cbiAgICBfc3lzdGVtMltcImRlZmF1bHRcIl0uc2hvd1RvYXN0KHtcbiAgICAgIG1lc3NhZ2U6IHRoaXMubGlrZWQgPT09IHRydWUgPyAnbGlrZScgOiAnZGlzbGlrZScsXG4gICAgICBpbWFnZTogJy9Db21tb24vbG9nby5wbmcnXG4gICAgfSk7XG4gIH0sXG4gIGV4cGFuZFBvc3RlckNvbW1lbnQ6IGZ1bmN0aW9uIGV4cGFuZFBvc3RlckNvbW1lbnQoKSB7XG4gICAgdGhpcy5wb3N0ZXJDb21tZW50TGluZXMgPSB0aGlzLnBvc3RlckNvbW1lbnRMaW5lcyA9PT0gLTEgPyAyIDogLTE7XG4gIH0sXG4gIHZpZXdQb3N0ZXI6IGZ1bmN0aW9uIHZpZXdQb3N0ZXIoKSB7XG4gICAgX3N5c3RlbTJbXCJkZWZhdWx0XCJdLnNob3dUb2FzdCh7XG4gICAgICBtZXNzYWdlOiAndmlld1Bvc3RlcicsXG4gICAgICBpbWFnZTogJy9Db21tb24vbG9nby5wbmcnXG4gICAgfSk7XG4gIH0sXG4gIGNsaWNrVG9Vc2VyRGV0YWlsOiBmdW5jdGlvbiBjbGlja1RvVXNlckRldGFpbChwbikge1xuICAgIF9zeXN0ZW0zW1wiZGVmYXVsdFwiXS5wdXNoKHtcbiAgICAgIHVyaTogXCIvVXNlckRldGFpbFwiLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIHBob25lbnVtOiBwblxuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICB2aWV3SW1hZ2U6IGZ1bmN0aW9uIHZpZXdJbWFnZShvYmopIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgICBfc3lzdGVtW1wiZGVmYXVsdFwiXS5wcmV2aWV3SW1hZ2Uoe1xuICAgICAgY3VycmVudDogb2JqLiRpdGVtLnNyYyxcbiAgICAgIHVyaXM6IHRoYXQuc3dpcGVyZGF0YS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0uc3JjO1xuICAgICAgfSksXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKCkge1xuICAgICAgICBjb25zb2xlLmxvZygncHJldmlld0ltYWdlIHN1Y2Nlc3MnKTtcbiAgICAgIH0sXG4gICAgICBmYWlsOiBmdW5jdGlvbiBmYWlsKGVycm1zZywgZXJyY29kZSkge1xuICAgICAgICBjb25zb2xlLmxvZygncHJldmlld0ltYWdlIGZhaWwgKCcgKyBlcnJjb2RlICsgJykgJyArIGVycm1zZyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIG9uSW5pdDogZnVuY3Rpb24gb25Jbml0KCkge1xuICAgIHRoaXMuJHdhdGNoKCdzd2lwZXJkYXRhJywgJ2hhbmRsZVVwZGF0ZScpO1xuICB9LFxuICBoYW5kbGVVcGRhdGU6IGZ1bmN0aW9uIGhhbmRsZVVwZGF0ZShuZXdWYWwsIG9sZFZhbCkge1xuICAgIHRoaXMuJGVsZW1lbnQoJ3N3aXBlcicpLnN3aXBlVG8oe1xuICAgICAgaW5kZXg6IDBcbiAgICB9KTtcbiAgfVxufTtcbnZhciBtb2R1bGVPd24gPSBleHBvcnRzLmRlZmF1bHQgfHwgbW9kdWxlLmV4cG9ydHM7XG52YXIgYWNjZXNzb3JzID0gWydwdWJsaWMnLCAncHJvdGVjdGVkJywgJ3ByaXZhdGUnXTtcbmlmIChtb2R1bGVPd24uZGF0YSAmJiBhY2Nlc3NvcnMuc29tZShmdW5jdGlvbiAoYWNjKSB7XG4gICAgcmV0dXJuIG1vZHVsZU93blthY2NdO1xuICB9KSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgZGF0YSBtdXN0IG5vdCBjb2V4aXN0IHdpdGggcHVibGljLCBwcm90ZWN0ZWQsIG9yIHByaXZhdGUuIFBsZWFzZSByZXBsYWNlIGRhdGEgd2l0aCBwdWJsaWMuJyk7XG59IGVsc2UgaWYgKCFtb2R1bGVPd24uZGF0YSkge1xuICBtb2R1bGVPd24uZGF0YSA9IHt9O1xuICBtb2R1bGVPd24uX2Rlc2NyaXB0b3IgPSB7fTtcbiAgYWNjZXNzb3JzLmZvckVhY2goZnVuY3Rpb24oYWNjKSB7XG4gICAgdmFyIGFjY1R5cGUgPSB0eXBlb2YgbW9kdWxlT3duW2FjY107XG4gICAgaWYgKGFjY1R5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBtb2R1bGVPd24uZGF0YSA9IE9iamVjdC5hc3NpZ24obW9kdWxlT3duLmRhdGEsIG1vZHVsZU93blthY2NdKTtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gbW9kdWxlT3duW2FjY10pIHtcbiAgICAgICAgbW9kdWxlT3duLl9kZXNjcmlwdG9yW25hbWVdID0ge2FjY2VzcyA6IGFjY307XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhY2NUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgJyArIGFjYyArICcgdmFsdWUgbXVzdCBub3QgYmUgYSBmdW5jdGlvbi4gQ2hhbmdlIHRoZSB2YWx1ZSB0byBhbiBvYmplY3QuJyk7XG4gICAgfVxuICB9KTtcbn19IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcInJlZnJlc2hcIixcbiAgXCJhdHRyXCI6IHtcbiAgICBcIm9mZnNldFwiOiBcIjEzMHB4XCIsXG4gICAgXCJyZWZyZXNoaW5nXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5pc1JlZnJlc2hpbmd9XG4gIH0sXG4gIFwiZXZlbnRzXCI6IHtcbiAgICBcInJlZnJlc2hcIjogXCJyZWZyZXNoXCJcbiAgfSxcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwicmVmcmVzaFwiXG4gIF0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImxpc3RcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwibGlzdC1pdGVtXCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICdsaXN0SXRlbScrKHRoaXMuJGlkeCl9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlcGVhdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucG9zdERhdGF9LFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJjb21wb25lbnQtcG9zdFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwic3dpcGVyZGF0YVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGl0ZW0uc3dpcGVyZGF0YX0sXG4gICAgICAgICAgICAgICAgXCJwaWRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiRpdGVtLnBpZH0sXG4gICAgICAgICAgICAgICAgXCJwaG9uZW51bVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGl0ZW0ucGhvbmVudW19LFxuICAgICAgICAgICAgICAgIFwibGlrZWRhdGFcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiRpdGVtLmxpa2VkYXRhfSxcbiAgICAgICAgICAgICAgICBcInBvc3RlclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGl0ZW0ucG9zdGVyfSxcbiAgICAgICAgICAgICAgICBcInBvc3Rlcmljb25cIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiRpdGVtLnBvc3Rlcmljb259LFxuICAgICAgICAgICAgICAgIFwicG9zdGVyY29tbWVudFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGl0ZW0ucG9zdGVyY29tbWVudH0sXG4gICAgICAgICAgICAgICAgXCJjb21tZW50bnVtYmVyXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS5jb21tZW50bnVtYmVyfSxcbiAgICAgICAgICAgICAgICBcInBvc3R0aW1lXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS5wb3N0dGltZX0sXG4gICAgICAgICAgICAgICAgXCJsaWtlZFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGl0ZW0ubGlrZWR9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCIuY2lyY3VsYXItcHJvZ3Jlc3NcIjoge1xuICAgIFwid2lkdGhcIjogXCI5NnB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI5NnB4XCJcbiAgfSxcbiAgXCIuZm9udC1zaXplLWxnXCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzdweFwiXG4gIH0sXG4gIFwiLnJlZnJlc2hcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwicHJvZ3Jlc3NDb2xvclwiOiBcIiMwZmFlZmZcIlxuICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsICRhcHBfcmVxdWlyZSQpe1widXNlIHN0cmljdFwiO1xuXG52YXIgX3N5c3RlbSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoJGFwcF9yZXF1aXJlJChcIkBhcHAtbW9kdWxlL3N5c3RlbS5mZXRjaFwiKSk7XG5cbnZhciBfc3lzdGVtMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoJGFwcF9yZXF1aXJlJChcIkBhcHAtbW9kdWxlL3N5c3RlbS5wcm9tcHRcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGRhdGE6IHtcbiAgICBwaWQ6ICcnLFxuICAgIGlzUmVmcmVzaGluZzogZmFsc2UsXG4gICAgcG9zdERhdGE6IFtdXG4gIH0sXG4gIHJlZnJlc2hQb3N0OiBmdW5jdGlvbiByZWZyZXNoUG9zdCh0aGF0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhLmRhdGEubWVzc2FnZS5waG9uZW51bSk7XG4gICAgICB0aGF0LnBvc3REYXRhID0gZGF0YS5kYXRhLm1lc3NhZ2UubWFwKHRoYXQubWFwUG9zdCk7XG4gICAgICB0aGF0LmlzUmVmcmVzaGluZyA9IGZhbHNlO1xuICAgICAgY2xlYXJUaW1lb3V0KHRoYXQudGltZW91dCk7XG4gICAgfTtcbiAgfSxcbiAgc2hvd0Vycm9yOiBmdW5jdGlvbiBzaG93RXJyb3IodGhhdCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXJyY29kZSwgZXJybXNnKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJjb2RlICsgJyAnICsgZXJybXNnKTtcblxuICAgICAgX3N5c3RlbTJbXCJkZWZhdWx0XCJdLnNob3dUb2FzdCh7XG4gICAgICAgIG1lc3NhZ2U6IFwi6K+35rGC6ZSZ6K+vXCIsXG4gICAgICAgIGltYWdlOiAnL0NvbW1vbi9sb2dvLnBuZydcbiAgICAgIH0pO1xuXG4gICAgICB0aGF0LmlzUmVmcmVzaGluZyA9IGZhbHNlO1xuICAgICAgY2xlYXJUaW1lb3V0KHRoYXQudGltZW91dCk7XG4gICAgfTtcbiAgfSxcbiAgcG9zdDogZnVuY3Rpb24gcG9zdCh1cmwsIGRhdGEpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgX3N5c3RlbVtcImRlZmF1bHRcIl0uZmV0Y2goe1xuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbicsXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKGRhdGEpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInBvc3Qgc3VjY2Vzc1wiKTtcbiAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICB9LFxuICAgICAgICBmYWlsOiBmdW5jdGlvbiBmYWlsKGVycm1zZywgZXJyY29kZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwicG9zdCBmYWlsXCIpO1xuICAgICAgICAgIHJlamVjdChlcnJjb2RlLCBlcnJtc2cpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcbiAgcmVmcmVzaDogZnVuY3Rpb24gcmVmcmVzaChlKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIHRoaXMuaXNSZWZyZXNoaW5nID0gZS5yZWZyZXNoaW5nO1xuICAgIHZhciBwcm9taXNlID0gdGhpcy5wb3N0KFwiaHR0cDovLzExNC4xMTYuMjQ4LjIzMzoxMjM0NS9wb3N0L2dldF9vbmVfcG9zdFwiLCB7XG4gICAgICBcInBob25lbnVtXCI6IFwiMTgyNjAwNzEwMTJcIixcbiAgICAgIFwicGlkXCI6IHRoYXQucGlkXG4gICAgfSk7XG4gICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICB0aGF0LmlzUmVmcmVzaGluZyA9IGZhbHNlO1xuXG4gICAgICBfc3lzdGVtMltcImRlZmF1bHRcIl0uc2hvd1RvYXN0KHtcbiAgICAgICAgbWVzc2FnZTogXCLor7fmsYLotoXml7ZcIixcbiAgICAgICAgaW1hZ2U6ICcvQ29tbW9uL2xvZ28ucG5nJ1xuICAgICAgfSk7XG4gICAgfSwgNTAwMCk7XG4gICAgcHJvbWlzZS50aGVuKHRoaXMucmVmcmVzaFBvc3QodGhpcyksIHRoaXMuc2hvd0Vycm9yKHRoaXMpKTtcbiAgfSxcbiAgbWFwUG9zdDogZnVuY3Rpb24gbWFwUG9zdChpdGVtKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN3aXBlcmRhdGE6IGl0ZW0uaW1hZ2VzLm1hcChmdW5jdGlvbiAoaW1hZ2UpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzcmM6IGltYWdlLnVybFxuICAgICAgICB9O1xuICAgICAgfSksXG4gICAgICBsaWtlZGF0YTogaXRlbS5saWtlcyxcbiAgICAgIHBvc3RlcjogaXRlbS51c2VyLnVzZXJuYW1lLFxuICAgICAgcGhvbmVudW06IGl0ZW0ucGhvbmVudW0sXG4gICAgICBwaWQ6IGl0ZW0ucGlkLFxuICAgICAgcG9zdGVyY29tbWVudDogaXRlbS5zZWxmY29tbWVudCxcbiAgICAgIGNvbW1lbnRudW1iZXI6IGl0ZW0uY29tbWVudHMsXG4gICAgICBwb3N0ZXJpY29uOiBpdGVtLnVzZXIucGhvdG8sXG4gICAgICBwb3N0dGltZTogaXRlbS5wdGltZSxcbiAgICAgIGxpa2VkOiBpdGVtLmlzbGlrZWRcbiAgICB9O1xuICB9LFxuICBvbkluaXQ6IGZ1bmN0aW9uIG9uSW5pdCgpIHtcbiAgICB2YXIgcHJvbWlzZSA9IHRoaXMucG9zdChcImh0dHA6Ly8xMTQuMTE2LjI0OC4yMzM6MTIzNDUvcG9zdC9nZXRfb25lX3Bvc3RcIiwge1xuICAgICAgXCJwaG9uZW51bVwiOiBcIjE4MjYwMDcxMDEyXCIsXG4gICAgICBcInBpZFwiOiB0aGlzLnBpZFxuICAgIH0pO1xuICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgX3N5c3RlbTJbXCJkZWZhdWx0XCJdLnNob3dUb2FzdCh7XG4gICAgICAgIG1lc3NhZ2U6IFwi6K+35rGC6LaF5pe2XCIsXG4gICAgICAgIGltYWdlOiAnL0NvbW1vbi9sb2dvLnBuZydcbiAgICAgIH0pO1xuICAgIH0sIDUwMDApO1xuICAgIHByb21pc2UudGhlbih0aGlzLnJlZnJlc2hQb3N0KHRoaXMpLCB0aGlzLnNob3dFcnJvcih0aGlzKSk7XG4gIH1cbn07XG52YXIgbW9kdWxlT3duID0gZXhwb3J0cy5kZWZhdWx0IHx8IG1vZHVsZS5leHBvcnRzO1xudmFyIGFjY2Vzc29ycyA9IFsncHVibGljJywgJ3Byb3RlY3RlZCcsICdwcml2YXRlJ107XG5pZiAobW9kdWxlT3duLmRhdGEgJiYgYWNjZXNzb3JzLnNvbWUoZnVuY3Rpb24gKGFjYykge1xuICAgIHJldHVybiBtb2R1bGVPd25bYWNjXTtcbiAgfSkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdGb3IgVk0gb2JqZWN0cywgYXR0cmlidXRlIGRhdGEgbXVzdCBub3QgY29leGlzdCB3aXRoIHB1YmxpYywgcHJvdGVjdGVkLCBvciBwcml2YXRlLiBQbGVhc2UgcmVwbGFjZSBkYXRhIHdpdGggcHVibGljLicpO1xufSBlbHNlIGlmICghbW9kdWxlT3duLmRhdGEpIHtcbiAgbW9kdWxlT3duLmRhdGEgPSB7fTtcbiAgbW9kdWxlT3duLl9kZXNjcmlwdG9yID0ge307XG4gIGFjY2Vzc29ycy5mb3JFYWNoKGZ1bmN0aW9uKGFjYykge1xuICAgIHZhciBhY2NUeXBlID0gdHlwZW9mIG1vZHVsZU93blthY2NdO1xuICAgIGlmIChhY2NUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgbW9kdWxlT3duLmRhdGEgPSBPYmplY3QuYXNzaWduKG1vZHVsZU93bi5kYXRhLCBtb2R1bGVPd25bYWNjXSk7XG4gICAgICBmb3IgKHZhciBuYW1lIGluIG1vZHVsZU93blthY2NdKSB7XG4gICAgICAgIG1vZHVsZU93bi5fZGVzY3JpcHRvcltuYW1lXSA9IHthY2Nlc3MgOiBhY2N9O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYWNjVHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc29sZS53YXJuKCdGb3IgVk0gb2JqZWN0cywgYXR0cmlidXRlICcgKyBhY2MgKyAnIHZhbHVlIG11c3Qgbm90IGJlIGEgZnVuY3Rpb24uIENoYW5nZSB0aGUgdmFsdWUgdG8gYW4gb2JqZWN0LicpO1xuICAgIH1cbiAgfSk7XG59fSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3hOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDckZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDekdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=