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
/******/ 	return __webpack_require__(__webpack_require__.s = 47);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(17)
var $app_style$ = __webpack_require__(18)
var $app_script$ = __webpack_require__(19)

$app_define$('@app-component/component-post', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 17 */
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
            "click": "viewPoster"
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
            "click": function (evt){this.viewImage(this,evt)}
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
                "click": "comment"
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
        "click": "clickToComments"
      }
    }
  ]
}

/***/ }),
/* 18 */
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
/* 19 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

var _system = _interopRequireDefault($app_require$("@app-module/system.media"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.prompt"));

var _system3 = _interopRequireDefault($app_require$("@app-module/system.router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = {
  props: ['swiperdata', 'likedata', 'poster', 'postercomment', 'commentnumber', 'postericon', 'posttime', 'liked'],
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
  clickToComments: function clickToComments() {
    _system3["default"].push({
      uri: '/Comments'
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
/* 20 */
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
      "events": {
        "scrollbottom": "scrollBottom"
      },
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
        },
        {
          "type": "list-item",
          "attr": {
            "type": "loadMore",
            "show": function () {return this.isLoading}
          },
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "loadMore"
              ],
              "children": [
                {
                  "type": "progress",
                  "attr": {
                    "type": "circular"
                  },
                  "classList": [
                    "circular-progress"
                  ]
                },
                {
                  "type": "text",
                  "attr": {
                    "value": "加载更多"
                  },
                  "classList": [
                    "font-size-lg"
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
/* 21 */
/***/ (function(module, exports) {

module.exports = {
  ".refresh": {
    "backgroundColor": "#ffffff",
    "progressColor": "#0faeff"
  },
  ".loadMore": {
    "width": "100%",
    "marginBottom": "50px",
    "justifyContent": "center"
  },
  ".circular-progress": {
    "width": "96px",
    "height": "96px"
  },
  ".font-size-lg": {
    "fontSize": "37px"
  }
}

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

var _system = _interopRequireDefault($app_require$("@app-module/system.fetch"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.prompt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = {
  data: {
    isRefreshing: false,
    isLoading: false,
    postData: [{
      swiperdata: [{
        src: "https://lucaszhao-1258906334.cos.ap-guangzhou.myqcloud.com/stack/post/AM_Google_067.png"
      }, {
        src: "https://lucaszhao-1258906334.cos.ap-guangzhou.myqcloud.com/stack/post/01.jpg"
      }, {
        src: "/Community/img/01.jpg"
      }, {
        src: "/Community/img/02.jpg"
      }, {
        src: "/Community/img/03.jpg"
      }, {
        src: "/Community/img/05.jpg"
      }, {
        src: "/Community/img/06.jpg"
      }, {
        src: "/Community/img/07.jpg"
      }, {
        src: "/Community/img/08.jpg"
      }, {
        src: "/Community/img/09.jpg"
      }],
      likedata: "6,507,684",
      poster: 'instagram',
      postercomment: "Instagram (also known as IG or Insta[9]) is a photo and video-sharing social networking service owned by Facebook, Inc. It was created by Kevin Systrom and Mike Krieger, and launched in October 2010 exclusively on iOS. A version for Android devices was released a year and half later, in April 2012, followed by a feature-limited website interface in November 2012, and apps for Windows 10 Mobile and Windows 10 in April 2016 and October 2016 respectively. The app allows users to upload photos and videos to the service, which can be edited with various filters, and organized with tags and location information. An account's posts can be shared publicly or with pre-approved followers. Users can browse other users' content by tags and locations, and view trending content. Users can \"like\" photos, and follow other users to add their content to a feed.",
      commentnumber: "7,479",
      postericon: "/Common/logo.png",
      posttime: "2019-9-4 15:52:00",
      liked: false
    }, {
      swiperdata: [{
        src: "/Community/img/08.jpg"
      }, {
        src: "/Community/img/09.jpg"
      }],
      likedata: "1,234,567",
      poster: 'nike',
      postercomment: "Just do it.",
      commentnumber: "7",
      postericon: "/Common/logo.png",
      posttime: "2019-9-4 20:30:00",
      liked: true
    }]
  },
  refreshPost: function refreshPost(that) {
    return function (data) {
      that.postData = data.data.message.map(that.mapPost);
      that.isRefreshing = false;
      clearTimeout(that.timeout);
    };
  },
  loadMorePost: function loadMorePost(that) {
    return function (data) {
      that.postData = that.postData.concat(data.data.message.map(that.mapPost));
      that.isLoading = false;
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
      that.isLoading = false;
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
    var promise = this.post("http://114.116.248.233:12345/timeline/fresh", {
      "phonenum": "18260071011",
      "time": "2019-09-01 15:24:07"
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
  scrollBottom: function scrollBottom() {
    var that = this;
    this.isLoading = true;
    var promise = this.post("http://114.116.248.233:12345/timeline/fresh", {
      "phonenum": "18260071011",
      "time": "2019-09-01 15:24:07"
    });
    this.timeout = setTimeout(function () {
      that.isLoading = false;

      _system2["default"].showToast({
        message: "请求超时",
        image: '/Common/logo.png'
      });
    }, 5000);
    promise.then(this.loadMorePost(this), this.showError(this));
  },
  mapPost: function mapPost(item) {
    return {
      swiperdata: item.images.map(function (image) {
        return {
          src: image.url
        };
      }),
      likedata: item.likes,
      poster: item.cur_user.username,
      postercomment: item.selfcomment,
      commentnumber: item.comments,
      postericon: item.cur_user.photo,
      posttime: item.ptime,
      liked: item.isliked
    };
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
/* 23 */,
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(25)
var $app_style$ = __webpack_require__(26)
var $app_script$ = __webpack_require__(27)

$app_define$('@app-component/search_box', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "search-box-container"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "div_search"
      ],
      "events": {
        "click": "clickToSearch"
      },
      "children": [
        {
          "type": "image",
          "attr": {
            "src": function () {return this.searchbar}
          },
          "classList": [
            "image_search"
          ]
        },
        {
          "type": "text",
          "attr": {
            "value": function () {return this.placeholder}
          },
          "classList": [
            "place_holder"
          ]
        }
      ]
    }
  ]
}

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = {
  ".search-box-container": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignContent": "center",
    "alignItems": "center"
  },
  ".div_search": {
    "backgroundColor": "#f2f2f2",
    "width": "684px",
    "height": "67px",
    "marginLeft": "33px",
    "marginRight": "33px",
    "borderRadius": "8px",
    "alignItems": "center"
  },
  ".image_search": {
    "width": "33px",
    "height": "33px",
    "marginTop": "17px",
    "marginRight": "17px",
    "marginBottom": "17px",
    "marginLeft": "17px"
  },
  ".place_holder": {
    "width": "500px",
    "height": "40px",
    "fontSize": "27px",
    "color": "#1A1A1A",
    "opacity": 0.3
  }
}

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  data: {
    placeholder: '在这里，尽情发现'
  },
  props: ['searchbar'],
  onInit: function onInit() {},
  clickToSearch: function clickToSearch() {
    _system["default"].push({
      uri: '/Search'
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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(29)
var $app_style$ = __webpack_require__(30)
var $app_script$ = __webpack_require__(31)

$app_define$('@app-component/label_swiper', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "label-swiper-container"
  ],
  "children": [
    {
      "type": "list",
      "attr": {},
      "classList": [
        "label-swiper-list"
      ],
      "children": [
        {
          "type": "block",
          "attr": {},
          "repeat": function () {return this.list},
          "children": [
            {
              "type": "list-item",
              "attr": {
                "type": "prod"
              },
              "classList": [
                "label-swiper-list-item"
              ],
              "children": [
                {
                  "type": "stack",
                  "attr": {},
                  "classList": [
                    "label-swiper-stack"
                  ],
                  "children": [
                    {
                      "type": "a",
                      "attr": {
                        "value": function () {return this.$item.name}
                      },
                      "classList": [
                        "a_item"
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
/* 30 */
/***/ (function(module, exports) {

module.exports = {
  ".a_item": {
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "backgroundColor": "rgba(0,0,0,0)",
    "borderRadius": "8.3px",
    "borderTopColor": "#c9c0c0",
    "borderRightColor": "#c9c0c0",
    "borderBottomColor": "#c9c0c0",
    "borderLeftColor": "#c9c0c0",
    "borderTopWidth": "3px",
    "borderRightWidth": "3px",
    "borderBottomWidth": "3px",
    "borderLeftWidth": "3px",
    "paddingTop": "20px",
    "paddingRight": "20px",
    "paddingBottom": "20px",
    "paddingLeft": "20px",
    "fontSize": "35px",
    "color": "#000000",
    "lines": 1
  },
  ".label-swiper-container": {
    "flexDirection": "column"
  },
  ".label-swiper-stack": {
    "marginTop": "0px",
    "marginRight": "8px",
    "marginBottom": "0px",
    "marginLeft": "8px"
  },
  ".label-swiper-list": {
    "flexDirection": "row",
    "height": "67px"
  },
  ".label-swiper-list-item": {
    "flexDirection": "column"
  }
}

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

module.exports = {
  onInit: function onInit() {}
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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(33)
var $app_style$ = __webpack_require__(34)
var $app_script$ = __webpack_require__(35)

$app_define$('@app-component/image_wall', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = {
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
          "repeat": function () {return this.list},
          "classList": [
            "image-wall-product"
          ],
          "events": {
            "click": "routePage"
          },
          "children": [
            {
              "type": "image",
              "attr": {
                "src": function () {return this.$item.uri}
              },
              "classList": [
                "image-wall-image"
              ]
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = {
  ".image-wall-container": {
    "flexDirection": "column",
    "width": "100%"
  },
  ".image-wall-list": {
    "borderTopColor": "#0000ff",
    "borderRightColor": "#0000ff",
    "borderBottomColor": "#0000ff",
    "borderLeftColor": "#0000ff",
    "flexWrap": "wrap"
  },
  ".image-wall-product": {
    "flexDirection": "column",
    "height": "250px",
    "width": "33.3%"
  },
  ".image-wall-image": {
    "objectFit": "cover",
    "height": "100%",
    "width": "100%",
    "marginTop": "1px",
    "marginRight": "1px",
    "marginBottom": "1px",
    "marginLeft": "1px"
  }
}

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _system = _interopRequireDefault($app_require$("@app-module/system.router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  data: {
    props: ['list']
  },
  routePage: function routePage(url) {}
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
/* 36 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "discover-container"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "search-box"
      ],
      "children": [
        {
          "type": "search_box",
          "attr": {
            "searchbar": function () {return this.searchbar}
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
          "type": "image_wall",
          "attr": {
            "list": function () {return this.imgs}
          }
        }
      ]
    }
  ]
}

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = {
  ".discover-container": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignContent": "center",
    "alignItems": "center"
  },
  ".search-box": {
    "width": "683px",
    "marginTop": "17px",
    "marginRight": "34px",
    "marginBottom": "17px",
    "marginLeft": "34px"
  },
  ".image-wall": {
    "marginTop": "17px"
  }
}

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

module.exports = {
  props: [],
  data: {
    searchbar: "/Discover/img/search.png",
    imgs: [{
      uri: 'https://lucaszhao-1258906334.cos.ap-guangzhou.myqcloud.com/cover/73934916_p0.jpg'
    }, {
      uri: 'https://lucaszhao-1258906334.cos.ap-guangzhou.myqcloud.com/stack/post/01.jpg'
    }, {
      uri: 'https://lucaszhao-1258906334.cos.ap-guangzhou.myqcloud.com/stack/post/AM_Google_525.png'
    }, {
      uri: 'https://lucaszhao-1258906334.cos.ap-guangzhou.myqcloud.com/stack/post/AM_Bing_217.png'
    }, {
      uri: 'https://lucaszhao-1258906334.cos.ap-guangzhou.myqcloud.com/stack/post/AM_Bing_222.png'
    }, {
      uri: 'https://lucaszhao-1258906334.cos.ap-guangzhou.myqcloud.com/stack/post/AM_Google_067.png'
    }, {
      uri: 'https://lucaszhao-1258906334.cos.ap-guangzhou.myqcloud.com/cover/73934916_p0.jpg'
    }, {
      uri: 'https://lucaszhao-1258906334.cos.ap-guangzhou.myqcloud.com/stack/post/01.jpg'
    }, {
      uri: 'https://lucaszhao-1258906334.cos.ap-guangzhou.myqcloud.com/stack/post/AM_Google_525.png'
    }, {
      uri: 'https://lucaszhao-1258906334.cos.ap-guangzhou.myqcloud.com/stack/post/AM_Bing_217.png'
    }, {
      uri: 'https://lucaszhao-1258906334.cos.ap-guangzhou.myqcloud.com/stack/post/AM_Bing_222.png'
    }, {
      uri: 'https://lucaszhao-1258906334.cos.ap-guangzhou.myqcloud.com/stack/post/AM_Google_067.png'
    }, {
      uri: 'https://lucaszhao-1258906334.cos.ap-guangzhou.myqcloud.com/cover/73934916_p0.jpg'
    }, {
      uri: 'https://lucaszhao-1258906334.cos.ap-guangzhou.myqcloud.com/stack/post/01.jpg'
    }, {
      uri: 'https://lucaszhao-1258906334.cos.ap-guangzhou.myqcloud.com/stack/post/AM_Google_525.png'
    }, {
      uri: 'https://lucaszhao-1258906334.cos.ap-guangzhou.myqcloud.com/stack/post/AM_Bing_217.png'
    }, {
      uri: 'https://lucaszhao-1258906334.cos.ap-guangzhou.myqcloud.com/stack/post/AM_Bing_222.png'
    }, {
      uri: 'https://lucaszhao-1258906334.cos.ap-guangzhou.myqcloud.com/stack/post/AM_Google_067.png'
    }],
    labels: [{
      name: 'People'
    }, {
      name: 'Sea'
    }, {
      name: 'Car'
    }, {
      name: 'Cat'
    }, {
      name: 'Sports'
    }, {
      name: 'Cloud'
    }, {
      name: 'Forest'
    }, {
      name: 'Sun'
    }]
  },
  onInit: function onInit() {
    this.$page.setTitleBar({
      menu: false
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
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(48)
__webpack_require__(49)
__webpack_require__(50)
__webpack_require__(58)
var $app_template$ = __webpack_require__(66)
var $app_style$ = __webpack_require__(67)
var $app_script$ = __webpack_require__(68)

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
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(16)
var $app_template$ = __webpack_require__(20)
var $app_style$ = __webpack_require__(21)
var $app_script$ = __webpack_require__(22)

$app_define$('@app-component/community', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(24)
__webpack_require__(28)
__webpack_require__(32)
var $app_template$ = __webpack_require__(36)
var $app_style$ = __webpack_require__(37)
var $app_script$ = __webpack_require__(38)

$app_define$('@app-component/discover', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(51)
var $app_template$ = __webpack_require__(55)
var $app_style$ = __webpack_require__(56)
var $app_script$ = __webpack_require__(57)

$app_define$('@app-component/rank', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(52)
var $app_style$ = __webpack_require__(53)
var $app_script$ = __webpack_require__(54)

$app_define$('@app-component/rank_list', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "rank-container"
  ],
  "children": [
    {
      "type": "block",
      "attr": {},
      "repeat": function () {return this.rankinfos},
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
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": function () {return this.$item.url}
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
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "src": function () {return this.$item.postericon}
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
                            "value": function () {return this.$item.username}
                          },
                          "classList": [
                            "username"
                          ]
                        },
                        {
                          "type": "a",
                          "attr": {
                            "value": function () {return this.$item.name}
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
                        "value": function () {return (this.$item.likedata)+'个赞'}
                      },
                      "classList": [
                        "likedata"
                      ]
                    },
                    {
                      "type": "image",
                      "attr": {
                        "src": function () {return this.$item.liked===true?'/Rank/img/like.png':'/Rank/img/dislike.png'}
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
  ]
}

/***/ }),
/* 53 */
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
/* 54 */
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
  routePage: function routePage(url) {}
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
/* 55 */
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
                  "type": "rank_list",
                  "attr": {
                    "rankinfos": function () {return this.rankinfos}
                  }
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
                  "type": "rank_list",
                  "attr": {
                    "rankinfos": function () {return this.rankinfos}
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
/* 56 */
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
  }
}

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  data: {
    tabs: ["Day", "Week"],
    currIndex: 0,
    rankinfos: [{
      url: "https://lucaszhao-1258906334.cos.ap-guangzhou.myqcloud.com/stack/post/AM_Google_067.png",
      likedata: "6,507,684",
      username: 'instagram',
      name: 'inst',
      postericon: "https://lucaszhao-1258906334.cos.ap-guangzhou.myqcloud.com/stack/31626668.png",
      posttime: "2019-9-4 15:52:00",
      liked: false
    }, {
      url: "https://lucaszhao-1258906334.cos.ap-guangzhou.myqcloud.com/stack/post/01.jpg",
      likedata: "1,234,567",
      username: 'nike',
      name: 'dgdf',
      postericon: "https://lucaszhao-1258906334.cos.ap-guangzhou.myqcloud.com/stack/31626668.png",
      posttime: "2019-9-4 20:30:00",
      liked: true
    }]
  },
  onInit: function onInit() {
    this.$page.setTitleBar({
      text: '新闻',
      textColor: '#1A1A1A'
    });
  },
  showContent: function showContent(num) {
    this.type = 'content_' + num;
  },
  onChangeTabIndex: function onChangeTabIndex(evt) {
    this.currIndex = evt.index;
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
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(59)
var $app_template$ = __webpack_require__(63)
var $app_style$ = __webpack_require__(64)
var $app_script$ = __webpack_require__(65)

$app_define$('@app-component/mine', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(60)
var $app_style$ = __webpack_require__(61)
var $app_script$ = __webpack_require__(62)

$app_define$('@app-component/user_card', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "user-container"
  ],
  "children": [
    {
      "type": "div",
      "attr": {},
      "classList": [
        "content-up"
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
                "src": function () {return this.userinfos.postericon}
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
              "type": "div",
              "attr": {},
              "classList": [
                "usercard-bottom"
              ],
              "children": [
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "usercard-bottom-item"
                  ],
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.userinfos.posts}
                      },
                      "classList": [
                        "item-key"
                      ]
                    },
                    {
                      "type": "text",
                      "attr": {
                        "value": "Posts"
                      },
                      "classList": [
                        "item-mount"
                      ]
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "usercard-bottom-item"
                  ],
                  "events": {
                    "click": "clickToFollowInfo"
                  },
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.userinfos.followers}
                      },
                      "classList": [
                        "item-key"
                      ]
                    },
                    {
                      "type": "text",
                      "attr": {
                        "value": "Followers"
                      },
                      "classList": [
                        "item-mount"
                      ]
                    }
                  ]
                },
                {
                  "type": "div",
                  "attr": {},
                  "classList": [
                    "usercard-bottom-item"
                  ],
                  "events": {
                    "click": "clickToFollowInfo"
                  },
                  "children": [
                    {
                      "type": "text",
                      "attr": {
                        "value": function () {return this.userinfos.following}
                      },
                      "classList": [
                        "item-key"
                      ]
                    },
                    {
                      "type": "text",
                      "attr": {
                        "value": "Following"
                      },
                      "classList": [
                        "item-mount"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "type": "a",
              "attr": {
                "value": "Edit Profile"
              },
              "classList": [
                "a_item"
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
        "content-down"
      ],
      "children": [
        {
          "type": "a",
          "attr": {
            "value": function () {return this.userinfos.username}
          },
          "classList": [
            "username"
          ]
        },
        {
          "type": "a",
          "attr": {
            "value": function () {return this.userinfos.name}
          },
          "classList": [
            "name"
          ]
        },
        {
          "type": "a",
          "attr": {
            "value": function () {return this.userinfos.email}
          },
          "classList": [
            "email"
          ]
        },
        {
          "type": "a",
          "attr": {
            "value": function () {return this.userinfos.bio}
          },
          "classList": [
            "bio"
          ]
        }
      ]
    }
  ]
}

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = {
  ".user-container": {
    "flexDirection": "column"
  },
  ".content-up": {
    "height": "280px",
    "width": "100%",
    "indicatorColor": "rgba(0,0,0,0.2)",
    "indicatorSelectedColor": "#ffffff"
  },
  ".icon": {
    "width": "200px",
    "height": "200px",
    "objectFit": "cover",
    "borderRadius": "100px",
    "borderTopColor": "#dc143c",
    "borderRightColor": "#dc143c",
    "borderBottomColor": "#dc143c",
    "borderLeftColor": "#dc143c",
    "borderTopWidth": "5px",
    "borderRightWidth": "5px",
    "borderBottomWidth": "5px",
    "borderLeftWidth": "5px",
    "marginTop": "40px",
    "marginRight": "40px",
    "marginBottom": "0px",
    "marginLeft": "40px"
  },
  ".content-right": {
    "flexDirection": "column",
    "width": "430px",
    "marginRight": "40px"
  },
  ".usercard-bottom": {
    "marginTop": "55px",
    "marginBottom": "10px",
    "height": "100px",
    "width": "100%",
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  ".usercard-bottom-item": {
    "flexDirection": "column",
    "alignItems": "center",
    "width": "33.3%"
  },
  ".item-key": {
    "fontSize": "35px",
    "textAlign": "center",
    "color": "#000000",
    "fontWeight": "bold"
  },
  ".item-mount": {
    "color": "#808080",
    "fontSize": "25px",
    "textAlign": "center"
  },
  ".a_item": {
    "textAlign": "center",
    "backgroundColor": "rgba(0,0,0,0)",
    "height": "60px",
    "width": "100%",
    "borderRadius": "8.3px",
    "borderTopColor": "#bdbaba",
    "borderRightColor": "#bdbaba",
    "borderBottomColor": "#bdbaba",
    "borderLeftColor": "#bdbaba",
    "borderTopWidth": "2px",
    "borderRightWidth": "2px",
    "borderBottomWidth": "2px",
    "borderLeftWidth": "2px",
    "paddingTop": "20px",
    "paddingRight": "20px",
    "paddingBottom": "20px",
    "paddingLeft": "20px",
    "fontSize": "35px",
    "color": "#000000",
    "lines": 1
  },
  ".content-down": {
    "marginTop": "5px",
    "marginLeft": "40px",
    "flexDirection": "column",
    "borderBottomColor": "#F2F2F2",
    "borderBottomWidth": "1px",
    "justifyContent": "center"
  },
  ".username": {
    "color": "#000000",
    "fontWeight": "bold"
  },
  ".name": {
    "color": "#808080"
  },
  ".email": {
    "color": "rgb(5,5,155)"
  },
  ".bio": {
    "color": "#808080"
  },
  ".likedata": {
    "color": "#000000"
  }
}

/***/ }),
/* 62 */
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
    props: ['userinfos']
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
  routePage: function routePage(url) {},
  clickToFollowInfo: function clickToFollowInfo() {
    _system["default"].push({
      uri: '/FollowInfo'
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
/* 63 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "container"
  ],
  "children": [
    {
      "type": "user_card",
      "attr": {
        "userinfos": function () {return this.userinfos}
      }
    }
  ]
}

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "flexDirection": "column"
  }
}

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  data: {
    userinfos: {
      username: 'lucaszhao',
      name: 'liangzhao',
      postericon: "https://lucaszhao-1258906334.cos.ap-guangzhou.myqcloud.com/stack/31626668.png",
      email: 'hubukizhao@gmail.com',
      gender: 'male',
      bio: '鹦鹉来过吴江水，江上洲传鹦鹉名。鹦鹉西飞陇山去，芳洲之树何青青。烟开兰叶香风暖，岸夹桃花锦浪生。迁客此时徒极目，长洲孤月向谁明。',
      followers: '1k',
      following: '200',
      posts: '59'
    }
  },
  onInit: function onInit() {}
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
/* 66 */
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
      "attr": {
        "index": function () {return this.idx}
      },
      "events": {
        "change": "switchTab"
      },
      "children": [
        {
          "type": "tab-content",
          "attr": {},
          "children": [
            {
              "type": "community",
              "attr": {}
            },
            {
              "type": "discover",
              "attr": {}
            },
            {
              "type": "image",
              "attr": {
                "src": "/Common/logo.png"
              }
            },
            {
              "type": "rank",
              "attr": {}
            },
            {
              "type": "mine",
              "attr": {}
            }
          ]
        },
        {
          "type": "tab-bar",
          "attr": {},
          "children": [
            {
              "type": "div",
              "attr": {},
              "classList": [
                "tab-bar-item"
              ],
              "repeat": function () {return this.pages},
              "children": [
                {
                  "type": "image",
                  "attr": {
                    "src": function () {return this.$idx===this.idx?this.$item.icon_choice:this.$item.icon}
                  },
                  "classList": [
                    "icon"
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
/* 67 */
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignContent": "center",
    "alignItems": "center",
    "backgroundColor": "#ffffff"
  },
  ".tab-bar-item": {
    "backgroundColor": "#f2f2f2",
    "flexDirection": "column",
    "alignItems": "center",
    "paddingTop": "25px",
    "width": "200px",
    "height": "100px"
  },
  ".icon": {
    "width": "48px",
    "height": "48px",
    "objectFit": "contain"
  }
}

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

var _system = _interopRequireDefault($app_require$("@app-module/system.router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = {
  data: {
    idx: 0,
    pages: [{
      icon: './img/community.png',
      icon_choice: './img/selected-community.png',
      title: 'Stack社区'
    }, {
      icon: './img/discover.png',
      icon_choice: './img/selected-discover.png',
      title: '发现'
    }, {
      icon: './img/new.png',
      icon_choice: './img/selected-new.png',
      title: '发布'
    }, {
      icon: './img/rank.png',
      icon_choice: './img/selected-rank.png',
      title: '排行榜'
    }, {
      icon: './img/mine.png',
      icon_choice: './img/selected-mine.png',
      title: '个人'
    }]
  },
  switchTab: function switchTab(e) {
    this.idx = e.index;
    this.$page.setTitleBar({
      text: this.pages[this.idx].title
    });

    if (this.idx === 2) {
      _system["default"].push({
        uri: "/Photo"
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRcXE1haW5cXGluZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy9jOi9Vc2Vycy8xMTA5Ni9EZXNrdG9wL1N0YWNrL0Zhc3RBUFAvY29tLm5qdXN0LnN0YWNrL3NyYy9Db21tdW5pdHkvY29tcG9uZW50L2NvbXBvbmVudC1wb3N0LnV4Iiwid2VicGFjazovLy9jOi9Vc2Vycy8xMTA5Ni9EZXNrdG9wL1N0YWNrL0Zhc3RBUFAvY29tLm5qdXN0LnN0YWNrL3NyYy9Db21tdW5pdHkvY29tcG9uZW50L2NvbXBvbmVudC1wb3N0LnV4PzlmMTgiLCJ3ZWJwYWNrOi8vL2M6L1VzZXJzLzExMDk2L0Rlc2t0b3AvU3RhY2svRmFzdEFQUC9jb20ubmp1c3Quc3RhY2svc3JjL0NvbW11bml0eS9jb21wb25lbnQvY29tcG9uZW50LXBvc3QudXg/YTdhNyIsIndlYnBhY2s6Ly8vYzovVXNlcnMvMTEwOTYvRGVza3RvcC9TdGFjay9GYXN0QVBQL2NvbS5uanVzdC5zdGFjay9zcmMvQ29tbXVuaXR5L2NvbXBvbmVudC9jb21wb25lbnQtcG9zdC51eD9lZDM1Iiwid2VicGFjazovLy9jOi9Vc2Vycy8xMTA5Ni9EZXNrdG9wL1N0YWNrL0Zhc3RBUFAvY29tLm5qdXN0LnN0YWNrL3NyYy9Db21tdW5pdHkvaW5kZXgudXg/MmUyZiIsIndlYnBhY2s6Ly8vYzovVXNlcnMvMTEwOTYvRGVza3RvcC9TdGFjay9GYXN0QVBQL2NvbS5uanVzdC5zdGFjay9zcmMvQ29tbXVuaXR5L2luZGV4LnV4P2E3NjkiLCJ3ZWJwYWNrOi8vL2M6L1VzZXJzLzExMDk2L0Rlc2t0b3AvU3RhY2svRmFzdEFQUC9jb20ubmp1c3Quc3RhY2svc3JjL0NvbW11bml0eS9pbmRleC51eD9lZmQxIiwid2VicGFjazovLy9jOi9Vc2Vycy8xMTA5Ni9EZXNrdG9wL1N0YWNrL0Zhc3RBUFAvY29tLm5qdXN0LnN0YWNrL3NyYy9EaXNjb3Zlci9jb21wb25lbnQvc2VhcmNoX2JveC51eCIsIndlYnBhY2s6Ly8vYzovVXNlcnMvMTEwOTYvRGVza3RvcC9TdGFjay9GYXN0QVBQL2NvbS5uanVzdC5zdGFjay9zcmMvRGlzY292ZXIvY29tcG9uZW50L3NlYXJjaF9ib3gudXg/NDY5NyIsIndlYnBhY2s6Ly8vYzovVXNlcnMvMTEwOTYvRGVza3RvcC9TdGFjay9GYXN0QVBQL2NvbS5uanVzdC5zdGFjay9zcmMvRGlzY292ZXIvY29tcG9uZW50L3NlYXJjaF9ib3gudXg/NjE3NCIsIndlYnBhY2s6Ly8vYzovVXNlcnMvMTEwOTYvRGVza3RvcC9TdGFjay9GYXN0QVBQL2NvbS5uanVzdC5zdGFjay9zcmMvRGlzY292ZXIvY29tcG9uZW50L3NlYXJjaF9ib3gudXg/Mjg3MCIsIndlYnBhY2s6Ly8vYzovVXNlcnMvMTEwOTYvRGVza3RvcC9TdGFjay9GYXN0QVBQL2NvbS5uanVzdC5zdGFjay9zcmMvRGlzY292ZXIvY29tcG9uZW50L2xhYmVsX3N3aXBlci51eCIsIndlYnBhY2s6Ly8vYzovVXNlcnMvMTEwOTYvRGVza3RvcC9TdGFjay9GYXN0QVBQL2NvbS5uanVzdC5zdGFjay9zcmMvRGlzY292ZXIvY29tcG9uZW50L2xhYmVsX3N3aXBlci51eD8wZDQwIiwid2VicGFjazovLy9jOi9Vc2Vycy8xMTA5Ni9EZXNrdG9wL1N0YWNrL0Zhc3RBUFAvY29tLm5qdXN0LnN0YWNrL3NyYy9EaXNjb3Zlci9jb21wb25lbnQvbGFiZWxfc3dpcGVyLnV4PzIxOGYiLCJ3ZWJwYWNrOi8vL2M6L1VzZXJzLzExMDk2L0Rlc2t0b3AvU3RhY2svRmFzdEFQUC9jb20ubmp1c3Quc3RhY2svc3JjL0Rpc2NvdmVyL2NvbXBvbmVudC9sYWJlbF9zd2lwZXIudXg/ZDRjNyIsIndlYnBhY2s6Ly8vYzovVXNlcnMvMTEwOTYvRGVza3RvcC9TdGFjay9GYXN0QVBQL2NvbS5uanVzdC5zdGFjay9zcmMvRGlzY292ZXIvY29tcG9uZW50L2ltYWdlX3dhbGwudXgiLCJ3ZWJwYWNrOi8vL2M6L1VzZXJzLzExMDk2L0Rlc2t0b3AvU3RhY2svRmFzdEFQUC9jb20ubmp1c3Quc3RhY2svc3JjL0Rpc2NvdmVyL2NvbXBvbmVudC9pbWFnZV93YWxsLnV4PzUzZGEiLCJ3ZWJwYWNrOi8vL2M6L1VzZXJzLzExMDk2L0Rlc2t0b3AvU3RhY2svRmFzdEFQUC9jb20ubmp1c3Quc3RhY2svc3JjL0Rpc2NvdmVyL2NvbXBvbmVudC9pbWFnZV93YWxsLnV4PzUxYzEiLCJ3ZWJwYWNrOi8vL2M6L1VzZXJzLzExMDk2L0Rlc2t0b3AvU3RhY2svRmFzdEFQUC9jb20ubmp1c3Quc3RhY2svc3JjL0Rpc2NvdmVyL2NvbXBvbmVudC9pbWFnZV93YWxsLnV4P2ZjNjYiLCJ3ZWJwYWNrOi8vL2M6L1VzZXJzLzExMDk2L0Rlc2t0b3AvU3RhY2svRmFzdEFQUC9jb20ubmp1c3Quc3RhY2svc3JjL0Rpc2NvdmVyL2luZGV4LnV4PzVlYjgiLCJ3ZWJwYWNrOi8vL2M6L1VzZXJzLzExMDk2L0Rlc2t0b3AvU3RhY2svRmFzdEFQUC9jb20ubmp1c3Quc3RhY2svc3JjL0Rpc2NvdmVyL2luZGV4LnV4PzgxYWYiLCJ3ZWJwYWNrOi8vL2M6L1VzZXJzLzExMDk2L0Rlc2t0b3AvU3RhY2svRmFzdEFQUC9jb20ubmp1c3Quc3RhY2svc3JjL0Rpc2NvdmVyL2luZGV4LnV4PzBkN2IiLCJ3ZWJwYWNrOi8vL2M6L1VzZXJzLzExMDk2L0Rlc2t0b3AvU3RhY2svRmFzdEFQUC9jb20ubmp1c3Quc3RhY2svc3JjL01haW4vaW5kZXgudXgiLCJ3ZWJwYWNrOi8vL2M6L1VzZXJzLzExMDk2L0Rlc2t0b3AvU3RhY2svRmFzdEFQUC9jb20ubmp1c3Quc3RhY2svc3JjL0NvbW11bml0eS9pbmRleC51eD8yYWYzIiwid2VicGFjazovLy9jOi9Vc2Vycy8xMTA5Ni9EZXNrdG9wL1N0YWNrL0Zhc3RBUFAvY29tLm5qdXN0LnN0YWNrL3NyYy9EaXNjb3Zlci9pbmRleC51eD8xYmZmIiwid2VicGFjazovLy9jOi9Vc2Vycy8xMTA5Ni9EZXNrdG9wL1N0YWNrL0Zhc3RBUFAvY29tLm5qdXN0LnN0YWNrL3NyYy9SYW5rL2luZGV4LnV4PzlmZTgiLCJ3ZWJwYWNrOi8vL2M6L1VzZXJzLzExMDk2L0Rlc2t0b3AvU3RhY2svRmFzdEFQUC9jb20ubmp1c3Quc3RhY2svc3JjL1JhbmsvY29tcG9uZW50L3JhbmtfbGlzdC51eCIsIndlYnBhY2s6Ly8vYzovVXNlcnMvMTEwOTYvRGVza3RvcC9TdGFjay9GYXN0QVBQL2NvbS5uanVzdC5zdGFjay9zcmMvUmFuay9jb21wb25lbnQvcmFua19saXN0LnV4P2YzOGUiLCJ3ZWJwYWNrOi8vL2M6L1VzZXJzLzExMDk2L0Rlc2t0b3AvU3RhY2svRmFzdEFQUC9jb20ubmp1c3Quc3RhY2svc3JjL1JhbmsvY29tcG9uZW50L3JhbmtfbGlzdC51eD8xNjNmIiwid2VicGFjazovLy9jOi9Vc2Vycy8xMTA5Ni9EZXNrdG9wL1N0YWNrL0Zhc3RBUFAvY29tLm5qdXN0LnN0YWNrL3NyYy9SYW5rL2NvbXBvbmVudC9yYW5rX2xpc3QudXg/ODhjOSIsIndlYnBhY2s6Ly8vYzovVXNlcnMvMTEwOTYvRGVza3RvcC9TdGFjay9GYXN0QVBQL2NvbS5uanVzdC5zdGFjay9zcmMvUmFuay9pbmRleC51eD8yZjAyIiwid2VicGFjazovLy9jOi9Vc2Vycy8xMTA5Ni9EZXNrdG9wL1N0YWNrL0Zhc3RBUFAvY29tLm5qdXN0LnN0YWNrL3NyYy9SYW5rL2luZGV4LnV4Pzk4NjQiLCJ3ZWJwYWNrOi8vL2M6L1VzZXJzLzExMDk2L0Rlc2t0b3AvU3RhY2svRmFzdEFQUC9jb20ubmp1c3Quc3RhY2svc3JjL1JhbmsvaW5kZXgudXg/OGU5ZSIsIndlYnBhY2s6Ly8vYzovVXNlcnMvMTEwOTYvRGVza3RvcC9TdGFjay9GYXN0QVBQL2NvbS5uanVzdC5zdGFjay9zcmMvTWluZS9pbmRleC51eD84ODNjIiwid2VicGFjazovLy9jOi9Vc2Vycy8xMTA5Ni9EZXNrdG9wL1N0YWNrL0Zhc3RBUFAvY29tLm5qdXN0LnN0YWNrL3NyYy9NaW5lL2NvbXBvbmVudC91c2VyX2NhcmQudXgiLCJ3ZWJwYWNrOi8vL2M6L1VzZXJzLzExMDk2L0Rlc2t0b3AvU3RhY2svRmFzdEFQUC9jb20ubmp1c3Quc3RhY2svc3JjL01pbmUvY29tcG9uZW50L3VzZXJfY2FyZC51eD8yNDI0Iiwid2VicGFjazovLy9jOi9Vc2Vycy8xMTA5Ni9EZXNrdG9wL1N0YWNrL0Zhc3RBUFAvY29tLm5qdXN0LnN0YWNrL3NyYy9NaW5lL2NvbXBvbmVudC91c2VyX2NhcmQudXg/YWRhZiIsIndlYnBhY2s6Ly8vYzovVXNlcnMvMTEwOTYvRGVza3RvcC9TdGFjay9GYXN0QVBQL2NvbS5uanVzdC5zdGFjay9zcmMvTWluZS9jb21wb25lbnQvdXNlcl9jYXJkLnV4PzNmMDYiLCJ3ZWJwYWNrOi8vL2M6L1VzZXJzLzExMDk2L0Rlc2t0b3AvU3RhY2svRmFzdEFQUC9jb20ubmp1c3Quc3RhY2svc3JjL01pbmUvaW5kZXgudXg/MmMxYiIsIndlYnBhY2s6Ly8vYzovVXNlcnMvMTEwOTYvRGVza3RvcC9TdGFjay9GYXN0QVBQL2NvbS5uanVzdC5zdGFjay9zcmMvTWluZS9pbmRleC51eD83NThjIiwid2VicGFjazovLy9jOi9Vc2Vycy8xMTA5Ni9EZXNrdG9wL1N0YWNrL0Zhc3RBUFAvY29tLm5qdXN0LnN0YWNrL3NyYy9NaW5lL2luZGV4LnV4P2MzYzciLCJ3ZWJwYWNrOi8vL2M6L1VzZXJzLzExMDk2L0Rlc2t0b3AvU3RhY2svRmFzdEFQUC9jb20ubmp1c3Quc3RhY2svc3JjL01haW4vaW5kZXgudXg/NjczNSIsIndlYnBhY2s6Ly8vYzovVXNlcnMvMTEwOTYvRGVza3RvcC9TdGFjay9GYXN0QVBQL2NvbS5uanVzdC5zdGFjay9zcmMvTWFpbi9pbmRleC51eD8wMTBjIiwid2VicGFjazovLy9jOi9Vc2Vycy8xMTA5Ni9EZXNrdG9wL1N0YWNrL0Zhc3RBUFAvY29tLm5qdXN0LnN0YWNrL3NyYy9NYWluL2luZGV4LnV4P2MzODMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQ3KTtcbiIsInZhciAkYXBwX3RlbXBsYXRlJCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXRlbXBsYXRlLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBGYXN0QXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXRlbXBsYXRlcyEuL2NvbXBvbmVudC1wb3N0LnV4XCIpXG52YXIgJGFwcF9zdHlsZSQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBGYXN0QXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBGYXN0QXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1zdHlsZS1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9YzpcXFxcVXNlcnNcXFxcMTEwOTZcXFxcRGVza3RvcFxcXFxTdGFja1xcXFxGYXN0QVBQXFxcXGNvbS5uanVzdC5zdGFja1xcXFxzcmNcXFxcQ29tbXVuaXR5XFxcXGNvbXBvbmVudFxcXFxjb21wb25lbnQtcG9zdC51eCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBGYXN0QXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9YzpcXFxcVXNlcnNcXFxcMTEwOTZcXFxcRGVza3RvcFxcXFxTdGFja1xcXFxGYXN0QVBQXFxcXGNvbS5uanVzdC5zdGFja1xcXFxzcmNcXFxcQ29tbXVuaXR5XFxcXGNvbXBvbmVudFxcXFxjb21wb25lbnQtcG9zdC51eCEuL2NvbXBvbmVudC1wb3N0LnV4XCIpXG52YXIgJGFwcF9zY3JpcHQkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgRmFzdEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc2NyaXB0LWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBGYXN0QXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1hY2Nlc3MtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlcj9wcmVzZXRzW109YzpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIdWF3ZWkgRmFzdEFwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHByZXNldC1lbnYmcGx1Z2luc1tdPWM6XFxcXFByb2dyYW0gRmlsZXNcXFxcSHVhd2VpIEZhc3RBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwbHVnaW4tdHJhbnNmb3JtLW1vZHVsZXMtY29tbW9uanMmcGx1Z2luc1tdPWM6XFxcXFByb2dyYW0gRmlsZXNcXFxcSHVhd2VpIEZhc3RBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGpzeC1sb2FkZXIuanMmY29tbWVudHM9ZmFsc2UhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgRmFzdEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vY29tcG9uZW50LXBvc3QudXhcIilcblxuJGFwcF9kZWZpbmUkKCdAYXBwLWNvbXBvbmVudC9jb21wb25lbnQtcG9zdCcsIFtdLCBmdW5jdGlvbigkYXBwX3JlcXVpcmUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX21vZHVsZSQpe1xuICAgICAkYXBwX3NjcmlwdCQoJGFwcF9tb2R1bGUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX3JlcXVpcmUkKVxuICAgICBpZiAoJGFwcF9leHBvcnRzJC5fX2VzTW9kdWxlICYmICRhcHBfZXhwb3J0cyQuZGVmYXVsdCkge1xuICAgICAgICAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMgPSAkYXBwX2V4cG9ydHMkLmRlZmF1bHRcbiAgICAgICAgfVxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy50ZW1wbGF0ZSA9ICRhcHBfdGVtcGxhdGUkXG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnN0eWxlID0gJGFwcF9zdHlsZSRcbn0pXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiYXR0clwiOiB7fSxcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwiaXRlbS1jb250YWluZXJcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJoZWFkZXItY29udGFpbmVyXCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImhlYWRlci1wb3N0ZXJcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgXCJjbGlja1wiOiBcInZpZXdQb3N0ZXJcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnBvc3Rlcmljb259XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImljb25cIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucG9zdGVyfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJibGFja1wiLFxuICAgICAgICAgICAgICAgIFwiYm9sZFwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJoZWFkZXItdGltZVwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnBvc3R0aW1lfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJzd2lwZXJcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwiYXV0b3BsYXlcIjogXCJ0cnVlXCIsXG4gICAgICAgIFwiaWRcIjogXCJzd2lwZXJcIlxuICAgICAgfSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJzd2lwZXJcIlxuICAgICAgXSxcbiAgICAgIFwiaWRcIjogXCJzd2lwZXJcIixcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiRpdGVtLnNyY31cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwicmVwZWF0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5zd2lwZXJkYXRhfSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImltYWdlXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24gKGV2dCl7dGhpcy52aWV3SW1hZ2UodGhpcyxldnQpfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwibGlzdC1tYWluXCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImxpc3QtbWFpbi1sZWZ0XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICh0aGlzLmxpa2VkYXRhKSsn5Liq6LWeJ31cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiYmxhY2tcIixcbiAgICAgICAgICAgICAgICBcImJvbGRcIixcbiAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZS1sZ1wiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJsaXN0LW1haW4tcmlnaHRcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJzcmNcIjogXCIvQ29tbXVuaXR5L2ltZy9yZXR3ZWV0LnBuZ1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImJ0blwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICBcImNsaWNrXCI6IFwicmV0d2VldFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJzcmNcIjogXCIvQ29tbXVuaXR5L2ltZy9jb21tZW50LnBuZ1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImJ0blwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICBcImNsaWNrXCI6IFwiY29tbWVudFwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxpa2VkPT09dHJ1ZT8nL0NvbW11bml0eS9pbWcvbGlrZS5wbmcnOicvQ29tbXVuaXR5L2ltZy9kaXNsaWtlLnBuZyd9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImJ0blwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICBcImNsaWNrXCI6IFwibGlrZVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwibGluZXNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnBvc3RlckNvbW1lbnRMaW5lc31cbiAgICAgIH0sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwicG9zdGVyLWNvbW1lbnRcIlxuICAgICAgXSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJjbGlja1wiOiBcImV4cGFuZFBvc3RlckNvbW1lbnRcIlxuICAgICAgfSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiYVwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5wb3N0ZXJ9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImJsYWNrXCIsXG4gICAgICAgICAgICBcImJvbGRcIlxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImFcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuKAglwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiYVwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5wb3N0ZXJjb21tZW50fVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJibGFja1wiXG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gJ+afpeeci+WFqOmDqCcrKHRoaXMuY29tbWVudG51bWJlcikrJ+WImeeVmeiogCd9XG4gICAgICB9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImNvbW1lbnQtbnVtYmVyXCIsXG4gICAgICAgIFwiZ3JheVwiLFxuICAgICAgICBcImZvbnQtc2l6ZS1zbVwiXG4gICAgICBdLFxuICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICBcImNsaWNrXCI6IFwiY2xpY2tUb0NvbW1lbnRzXCJcbiAgICAgIH1cbiAgICB9XG4gIF1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCIuaXRlbS1jb250YWluZXJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI0MHB4XCJcbiAgfSxcbiAgXCIuaGVhZGVyLWNvbnRhaW5lclwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCI3MnB4XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIyMHB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjIwcHhcIlxuICB9LFxuICBcIi5pY29uXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjY0cHhcIixcbiAgICBcIndpZHRoXCI6IFwiNjRweFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMzJweFwiLFxuICAgIFwiYm9yZGVyVG9wQ29sb3JcIjogXCIjZGMxNDNjXCIsXG4gICAgXCJib3JkZXJSaWdodENvbG9yXCI6IFwiI2RjMTQzY1wiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjZGMxNDNjXCIsXG4gICAgXCJib3JkZXJMZWZ0Q29sb3JcIjogXCIjZGMxNDNjXCIsXG4gICAgXCJib3JkZXJUb3BXaWR0aFwiOiBcIjJweFwiLFxuICAgIFwiYm9yZGVyUmlnaHRXaWR0aFwiOiBcIjJweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCIycHhcIixcbiAgICBcImJvcmRlckxlZnRXaWR0aFwiOiBcIjJweFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNHB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjIwcHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjRweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjRweFwiLFxuICAgIFwib2JqZWN0Rml0XCI6IFwiY29udGFpblwiXG4gIH0sXG4gIFwiLmhlYWRlci10aW1lXCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiZmxleC1lbmRcIlxuICB9LFxuICBcIi5zd2lwZXJcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiNjg0cHhcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwiaW5kaWNhdG9yQ29sb3JcIjogXCJyZ2JhKDAsMCwwLDAuMilcIixcbiAgICBcImluZGljYXRvclNlbGVjdGVkQ29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCIuaW1hZ2VcIjoge1xuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJoZWlnaHRcIjogXCIxMDAlXCIsXG4gICAgXCJvYmplY3RGaXRcIjogXCJjb3ZlclwiXG4gIH0sXG4gIFwiLmxpc3QtbWFpblwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxMHB4XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIyMHB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVweFwiXG4gIH0sXG4gIFwiLmxpc3QtbWFpbi1yaWdodFwiOiB7XG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImZsZXgtZW5kXCJcbiAgfSxcbiAgXCIuYnRuXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNjRweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNjRweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxMHB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTBweFwiLFxuICAgIFwib2JqZWN0Rml0XCI6IFwiY29udGFpblwiXG4gIH0sXG4gIFwiLnBvc3Rlci1jb21tZW50XCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIyMHB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjIwcHhcIixcbiAgICBcInRleHRPdmVyZmxvd1wiOiBcImVsbGlwc2lzXCJcbiAgfSxcbiAgXCIuY29tbWVudC1udW1iZXJcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjIwcHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMjBweFwiXG4gIH0sXG4gIFwiLmZvbnQtc2l6ZS1zbVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI3cHhcIlxuICB9LFxuICBcIi5mb250LXNpemUtbGdcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzM3B4XCJcbiAgfSxcbiAgXCIuYm9sZFwiOiB7XG4gICAgXCJmb250V2VpZ2h0XCI6IFwiYm9sZFwiXG4gIH0sXG4gIFwiLmJsYWNrXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzAwMDAwMFwiXG4gIH0sXG4gIFwiLmdyYXlcIjoge1xuICAgIFwiY29sb3JcIjogXCIjODA4MDgwXCJcbiAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCAkYXBwX3JlcXVpcmUkKXtcInVzZSBzdHJpY3RcIjtcblxudmFyIF9zeXN0ZW0gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KCRhcHBfcmVxdWlyZSQoXCJAYXBwLW1vZHVsZS9zeXN0ZW0ubWVkaWFcIikpO1xuXG52YXIgX3N5c3RlbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KCRhcHBfcmVxdWlyZSQoXCJAYXBwLW1vZHVsZS9zeXN0ZW0ucHJvbXB0XCIpKTtcblxudmFyIF9zeXN0ZW0zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdCgkYXBwX3JlcXVpcmUkKFwiQGFwcC1tb2R1bGUvc3lzdGVtLnJvdXRlclwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcHJvcHM6IFsnc3dpcGVyZGF0YScsICdsaWtlZGF0YScsICdwb3N0ZXInLCAncG9zdGVyY29tbWVudCcsICdjb21tZW50bnVtYmVyJywgJ3Bvc3Rlcmljb24nLCAncG9zdHRpbWUnLCAnbGlrZWQnXSxcbiAgZGF0YToge1xuICAgIHBvc3RlckNvbW1lbnRMaW5lczogMlxuICB9LFxuICByZXR3ZWV0OiBmdW5jdGlvbiByZXR3ZWV0KCkge1xuICAgIF9zeXN0ZW0yW1wiZGVmYXVsdFwiXS5zaG93VG9hc3Qoe1xuICAgICAgbWVzc2FnZTogJ3JldHdlZXQnLFxuICAgICAgaW1hZ2U6ICcvQ29tbW9uL2xvZ28ucG5nJ1xuICAgIH0pO1xuICB9LFxuICBjb21tZW50OiBmdW5jdGlvbiBjb21tZW50KCkge1xuICAgIF9zeXN0ZW0yW1wiZGVmYXVsdFwiXS5zaG93VG9hc3Qoe1xuICAgICAgbWVzc2FnZTogJ2NvbW1lbnQnLFxuICAgICAgaW1hZ2U6ICcvQ29tbW9uL2xvZ28ucG5nJ1xuICAgIH0pO1xuICB9LFxuICBjbGlja1RvQ29tbWVudHM6IGZ1bmN0aW9uIGNsaWNrVG9Db21tZW50cygpIHtcbiAgICBfc3lzdGVtM1tcImRlZmF1bHRcIl0ucHVzaCh7XG4gICAgICB1cmk6ICcvQ29tbWVudHMnXG4gICAgfSk7XG4gIH0sXG4gIGxpa2U6IGZ1bmN0aW9uIGxpa2UoKSB7XG4gICAgdGhpcy5saWtlZCA9ICF0aGlzLmxpa2VkO1xuXG4gICAgX3N5c3RlbTJbXCJkZWZhdWx0XCJdLnNob3dUb2FzdCh7XG4gICAgICBtZXNzYWdlOiB0aGlzLmxpa2VkID09PSB0cnVlID8gJ2xpa2UnIDogJ2Rpc2xpa2UnLFxuICAgICAgaW1hZ2U6ICcvQ29tbW9uL2xvZ28ucG5nJ1xuICAgIH0pO1xuICB9LFxuICBleHBhbmRQb3N0ZXJDb21tZW50OiBmdW5jdGlvbiBleHBhbmRQb3N0ZXJDb21tZW50KCkge1xuICAgIHRoaXMucG9zdGVyQ29tbWVudExpbmVzID0gdGhpcy5wb3N0ZXJDb21tZW50TGluZXMgPT09IC0xID8gMiA6IC0xO1xuICB9LFxuICB2aWV3UG9zdGVyOiBmdW5jdGlvbiB2aWV3UG9zdGVyKCkge1xuICAgIF9zeXN0ZW0yW1wiZGVmYXVsdFwiXS5zaG93VG9hc3Qoe1xuICAgICAgbWVzc2FnZTogJ3ZpZXdQb3N0ZXInLFxuICAgICAgaW1hZ2U6ICcvQ29tbW9uL2xvZ28ucG5nJ1xuICAgIH0pO1xuICB9LFxuICB2aWV3SW1hZ2U6IGZ1bmN0aW9uIHZpZXdJbWFnZShvYmopIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgICBfc3lzdGVtW1wiZGVmYXVsdFwiXS5wcmV2aWV3SW1hZ2Uoe1xuICAgICAgY3VycmVudDogb2JqLiRpdGVtLnNyYyxcbiAgICAgIHVyaXM6IHRoYXQuc3dpcGVyZGF0YS5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0uc3JjO1xuICAgICAgfSksXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKCkge1xuICAgICAgICBjb25zb2xlLmxvZygncHJldmlld0ltYWdlIHN1Y2Nlc3MnKTtcbiAgICAgIH0sXG4gICAgICBmYWlsOiBmdW5jdGlvbiBmYWlsKGVycm1zZywgZXJyY29kZSkge1xuICAgICAgICBjb25zb2xlLmxvZygncHJldmlld0ltYWdlIGZhaWwgKCcgKyBlcnJjb2RlICsgJykgJyArIGVycm1zZyk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIG9uSW5pdDogZnVuY3Rpb24gb25Jbml0KCkge1xuICAgIHRoaXMuJHdhdGNoKCdzd2lwZXJkYXRhJywgJ2hhbmRsZVVwZGF0ZScpO1xuICB9LFxuICBoYW5kbGVVcGRhdGU6IGZ1bmN0aW9uIGhhbmRsZVVwZGF0ZShuZXdWYWwsIG9sZFZhbCkge1xuICAgIHRoaXMuJGVsZW1lbnQoJ3N3aXBlcicpLnN3aXBlVG8oe1xuICAgICAgaW5kZXg6IDBcbiAgICB9KTtcbiAgfVxufTtcbnZhciBtb2R1bGVPd24gPSBleHBvcnRzLmRlZmF1bHQgfHwgbW9kdWxlLmV4cG9ydHM7XG52YXIgYWNjZXNzb3JzID0gWydwdWJsaWMnLCAncHJvdGVjdGVkJywgJ3ByaXZhdGUnXTtcbmlmIChtb2R1bGVPd24uZGF0YSAmJiBhY2Nlc3NvcnMuc29tZShmdW5jdGlvbiAoYWNjKSB7XG4gICAgcmV0dXJuIG1vZHVsZU93blthY2NdO1xuICB9KSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgZGF0YSBtdXN0IG5vdCBjb2V4aXN0IHdpdGggcHVibGljLCBwcm90ZWN0ZWQsIG9yIHByaXZhdGUuIFBsZWFzZSByZXBsYWNlIGRhdGEgd2l0aCBwdWJsaWMuJyk7XG59IGVsc2UgaWYgKCFtb2R1bGVPd24uZGF0YSkge1xuICBtb2R1bGVPd24uZGF0YSA9IHt9O1xuICBtb2R1bGVPd24uX2Rlc2NyaXB0b3IgPSB7fTtcbiAgYWNjZXNzb3JzLmZvckVhY2goZnVuY3Rpb24oYWNjKSB7XG4gICAgdmFyIGFjY1R5cGUgPSB0eXBlb2YgbW9kdWxlT3duW2FjY107XG4gICAgaWYgKGFjY1R5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBtb2R1bGVPd24uZGF0YSA9IE9iamVjdC5hc3NpZ24obW9kdWxlT3duLmRhdGEsIG1vZHVsZU93blthY2NdKTtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gbW9kdWxlT3duW2FjY10pIHtcbiAgICAgICAgbW9kdWxlT3duLl9kZXNjcmlwdG9yW25hbWVdID0ge2FjY2VzcyA6IGFjY307XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhY2NUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgJyArIGFjYyArICcgdmFsdWUgbXVzdCBub3QgYmUgYSBmdW5jdGlvbi4gQ2hhbmdlIHRoZSB2YWx1ZSB0byBhbiBvYmplY3QuJyk7XG4gICAgfVxuICB9KTtcbn19IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcInJlZnJlc2hcIixcbiAgXCJhdHRyXCI6IHtcbiAgICBcIm9mZnNldFwiOiBcIjEzMHB4XCIsXG4gICAgXCJyZWZyZXNoaW5nXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5pc1JlZnJlc2hpbmd9XG4gIH0sXG4gIFwiZXZlbnRzXCI6IHtcbiAgICBcInJlZnJlc2hcIjogXCJyZWZyZXNoXCJcbiAgfSxcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwicmVmcmVzaFwiXG4gIF0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImxpc3RcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJzY3JvbGxib3R0b21cIjogXCJzY3JvbGxCb3R0b21cIlxuICAgICAgfSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwibGlzdC1pdGVtXCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICdsaXN0SXRlbScrKHRoaXMuJGlkeCl9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlcGVhdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucG9zdERhdGF9LFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJjb21wb25lbnQtcG9zdFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwic3dpcGVyZGF0YVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGl0ZW0uc3dpcGVyZGF0YX0sXG4gICAgICAgICAgICAgICAgXCJsaWtlZGF0YVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGl0ZW0ubGlrZWRhdGF9LFxuICAgICAgICAgICAgICAgIFwicG9zdGVyXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS5wb3N0ZXJ9LFxuICAgICAgICAgICAgICAgIFwicG9zdGVyaWNvblwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGl0ZW0ucG9zdGVyaWNvbn0sXG4gICAgICAgICAgICAgICAgXCJwb3N0ZXJjb21tZW50XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS5wb3N0ZXJjb21tZW50fSxcbiAgICAgICAgICAgICAgICBcImNvbW1lbnRudW1iZXJcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiRpdGVtLmNvbW1lbnRudW1iZXJ9LFxuICAgICAgICAgICAgICAgIFwicG9zdHRpbWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiRpdGVtLnBvc3R0aW1lfSxcbiAgICAgICAgICAgICAgICBcImxpa2VkXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS5saWtlZH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImxpc3QtaXRlbVwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJsb2FkTW9yZVwiLFxuICAgICAgICAgICAgXCJzaG93XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5pc0xvYWRpbmd9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwibG9hZE1vcmVcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwcm9ncmVzc1wiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY2lyY3VsYXJcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJjaXJjdWxhci1wcm9ncmVzc1wiXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi5Yqg6L295pu05aSaXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiZm9udC1zaXplLWxnXCJcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCIucmVmcmVzaFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgXCJwcm9ncmVzc0NvbG9yXCI6IFwiIzBmYWVmZlwiXG4gIH0sXG4gIFwiLmxvYWRNb3JlXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNTBweFwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi5jaXJjdWxhci1wcm9ncmVzc1wiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjk2cHhcIixcbiAgICBcImhlaWdodFwiOiBcIjk2cHhcIlxuICB9LFxuICBcIi5mb250LXNpemUtbGdcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzN3B4XCJcbiAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCAkYXBwX3JlcXVpcmUkKXtcInVzZSBzdHJpY3RcIjtcblxudmFyIF9zeXN0ZW0gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KCRhcHBfcmVxdWlyZSQoXCJAYXBwLW1vZHVsZS9zeXN0ZW0uZmV0Y2hcIikpO1xuXG52YXIgX3N5c3RlbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KCRhcHBfcmVxdWlyZSQoXCJAYXBwLW1vZHVsZS9zeXN0ZW0ucHJvbXB0XCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBkYXRhOiB7XG4gICAgaXNSZWZyZXNoaW5nOiBmYWxzZSxcbiAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgIHBvc3REYXRhOiBbe1xuICAgICAgc3dpcGVyZGF0YTogW3tcbiAgICAgICAgc3JjOiBcImh0dHBzOi8vbHVjYXN6aGFvLTEyNTg5MDYzMzQuY29zLmFwLWd1YW5nemhvdS5teXFjbG91ZC5jb20vc3RhY2svcG9zdC9BTV9Hb29nbGVfMDY3LnBuZ1wiXG4gICAgICB9LCB7XG4gICAgICAgIHNyYzogXCJodHRwczovL2x1Y2Fzemhhby0xMjU4OTA2MzM0LmNvcy5hcC1ndWFuZ3pob3UubXlxY2xvdWQuY29tL3N0YWNrL3Bvc3QvMDEuanBnXCJcbiAgICAgIH0sIHtcbiAgICAgICAgc3JjOiBcIi9Db21tdW5pdHkvaW1nLzAxLmpwZ1wiXG4gICAgICB9LCB7XG4gICAgICAgIHNyYzogXCIvQ29tbXVuaXR5L2ltZy8wMi5qcGdcIlxuICAgICAgfSwge1xuICAgICAgICBzcmM6IFwiL0NvbW11bml0eS9pbWcvMDMuanBnXCJcbiAgICAgIH0sIHtcbiAgICAgICAgc3JjOiBcIi9Db21tdW5pdHkvaW1nLzA1LmpwZ1wiXG4gICAgICB9LCB7XG4gICAgICAgIHNyYzogXCIvQ29tbXVuaXR5L2ltZy8wNi5qcGdcIlxuICAgICAgfSwge1xuICAgICAgICBzcmM6IFwiL0NvbW11bml0eS9pbWcvMDcuanBnXCJcbiAgICAgIH0sIHtcbiAgICAgICAgc3JjOiBcIi9Db21tdW5pdHkvaW1nLzA4LmpwZ1wiXG4gICAgICB9LCB7XG4gICAgICAgIHNyYzogXCIvQ29tbXVuaXR5L2ltZy8wOS5qcGdcIlxuICAgICAgfV0sXG4gICAgICBsaWtlZGF0YTogXCI2LDUwNyw2ODRcIixcbiAgICAgIHBvc3RlcjogJ2luc3RhZ3JhbScsXG4gICAgICBwb3N0ZXJjb21tZW50OiBcIkluc3RhZ3JhbSAoYWxzbyBrbm93biBhcyBJRyBvciBJbnN0YVs5XSkgaXMgYSBwaG90byBhbmQgdmlkZW8tc2hhcmluZyBzb2NpYWwgbmV0d29ya2luZyBzZXJ2aWNlIG93bmVkIGJ5IEZhY2Vib29rLCBJbmMuIEl0IHdhcyBjcmVhdGVkIGJ5IEtldmluIFN5c3Ryb20gYW5kIE1pa2UgS3JpZWdlciwgYW5kIGxhdW5jaGVkIGluIE9jdG9iZXIgMjAxMCBleGNsdXNpdmVseSBvbiBpT1MuIEEgdmVyc2lvbiBmb3IgQW5kcm9pZCBkZXZpY2VzIHdhcyByZWxlYXNlZCBhIHllYXIgYW5kIGhhbGYgbGF0ZXIsIGluIEFwcmlsIDIwMTIsIGZvbGxvd2VkIGJ5IGEgZmVhdHVyZS1saW1pdGVkIHdlYnNpdGUgaW50ZXJmYWNlIGluIE5vdmVtYmVyIDIwMTIsIGFuZCBhcHBzIGZvciBXaW5kb3dzIDEwIE1vYmlsZSBhbmQgV2luZG93cyAxMCBpbiBBcHJpbCAyMDE2IGFuZCBPY3RvYmVyIDIwMTYgcmVzcGVjdGl2ZWx5LiBUaGUgYXBwIGFsbG93cyB1c2VycyB0byB1cGxvYWQgcGhvdG9zIGFuZCB2aWRlb3MgdG8gdGhlIHNlcnZpY2UsIHdoaWNoIGNhbiBiZSBlZGl0ZWQgd2l0aCB2YXJpb3VzIGZpbHRlcnMsIGFuZCBvcmdhbml6ZWQgd2l0aCB0YWdzIGFuZCBsb2NhdGlvbiBpbmZvcm1hdGlvbi4gQW4gYWNjb3VudCdzIHBvc3RzIGNhbiBiZSBzaGFyZWQgcHVibGljbHkgb3Igd2l0aCBwcmUtYXBwcm92ZWQgZm9sbG93ZXJzLiBVc2VycyBjYW4gYnJvd3NlIG90aGVyIHVzZXJzJyBjb250ZW50IGJ5IHRhZ3MgYW5kIGxvY2F0aW9ucywgYW5kIHZpZXcgdHJlbmRpbmcgY29udGVudC4gVXNlcnMgY2FuIFxcXCJsaWtlXFxcIiBwaG90b3MsIGFuZCBmb2xsb3cgb3RoZXIgdXNlcnMgdG8gYWRkIHRoZWlyIGNvbnRlbnQgdG8gYSBmZWVkLlwiLFxuICAgICAgY29tbWVudG51bWJlcjogXCI3LDQ3OVwiLFxuICAgICAgcG9zdGVyaWNvbjogXCIvQ29tbW9uL2xvZ28ucG5nXCIsXG4gICAgICBwb3N0dGltZTogXCIyMDE5LTktNCAxNTo1MjowMFwiLFxuICAgICAgbGlrZWQ6IGZhbHNlXG4gICAgfSwge1xuICAgICAgc3dpcGVyZGF0YTogW3tcbiAgICAgICAgc3JjOiBcIi9Db21tdW5pdHkvaW1nLzA4LmpwZ1wiXG4gICAgICB9LCB7XG4gICAgICAgIHNyYzogXCIvQ29tbXVuaXR5L2ltZy8wOS5qcGdcIlxuICAgICAgfV0sXG4gICAgICBsaWtlZGF0YTogXCIxLDIzNCw1NjdcIixcbiAgICAgIHBvc3RlcjogJ25pa2UnLFxuICAgICAgcG9zdGVyY29tbWVudDogXCJKdXN0IGRvIGl0LlwiLFxuICAgICAgY29tbWVudG51bWJlcjogXCI3XCIsXG4gICAgICBwb3N0ZXJpY29uOiBcIi9Db21tb24vbG9nby5wbmdcIixcbiAgICAgIHBvc3R0aW1lOiBcIjIwMTktOS00IDIwOjMwOjAwXCIsXG4gICAgICBsaWtlZDogdHJ1ZVxuICAgIH1dXG4gIH0sXG4gIHJlZnJlc2hQb3N0OiBmdW5jdGlvbiByZWZyZXNoUG9zdCh0aGF0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICB0aGF0LnBvc3REYXRhID0gZGF0YS5kYXRhLm1lc3NhZ2UubWFwKHRoYXQubWFwUG9zdCk7XG4gICAgICB0aGF0LmlzUmVmcmVzaGluZyA9IGZhbHNlO1xuICAgICAgY2xlYXJUaW1lb3V0KHRoYXQudGltZW91dCk7XG4gICAgfTtcbiAgfSxcbiAgbG9hZE1vcmVQb3N0OiBmdW5jdGlvbiBsb2FkTW9yZVBvc3QodGhhdCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgdGhhdC5wb3N0RGF0YSA9IHRoYXQucG9zdERhdGEuY29uY2F0KGRhdGEuZGF0YS5tZXNzYWdlLm1hcCh0aGF0Lm1hcFBvc3QpKTtcbiAgICAgIHRoYXQuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICBjbGVhclRpbWVvdXQodGhhdC50aW1lb3V0KTtcbiAgICB9O1xuICB9LFxuICBzaG93RXJyb3I6IGZ1bmN0aW9uIHNob3dFcnJvcih0aGF0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChlcnJjb2RlLCBlcnJtc2cpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycmNvZGUgKyAnICcgKyBlcnJtc2cpO1xuXG4gICAgICBfc3lzdGVtMltcImRlZmF1bHRcIl0uc2hvd1RvYXN0KHtcbiAgICAgICAgbWVzc2FnZTogXCLor7fmsYLplJnor69cIixcbiAgICAgICAgaW1hZ2U6ICcvQ29tbW9uL2xvZ28ucG5nJ1xuICAgICAgfSk7XG5cbiAgICAgIHRoYXQuaXNSZWZyZXNoaW5nID0gZmFsc2U7XG4gICAgICB0aGF0LmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgY2xlYXJUaW1lb3V0KHRoYXQudGltZW91dCk7XG4gICAgfTtcbiAgfSxcbiAgcG9zdDogZnVuY3Rpb24gcG9zdCh1cmwsIGRhdGEpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgX3N5c3RlbVtcImRlZmF1bHRcIl0uZmV0Y2goe1xuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbicsXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKGRhdGEpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInBvc3Qgc3VjY2Vzc1wiKTtcbiAgICAgICAgICByZXNvbHZlKGRhdGEpO1xuICAgICAgICB9LFxuICAgICAgICBmYWlsOiBmdW5jdGlvbiBmYWlsKGVycm1zZywgZXJyY29kZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwicG9zdCBmYWlsXCIpO1xuICAgICAgICAgIHJlamVjdChlcnJjb2RlLCBlcnJtc2cpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfSxcbiAgcmVmcmVzaDogZnVuY3Rpb24gcmVmcmVzaChlKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIHRoaXMuaXNSZWZyZXNoaW5nID0gZS5yZWZyZXNoaW5nO1xuICAgIHZhciBwcm9taXNlID0gdGhpcy5wb3N0KFwiaHR0cDovLzExNC4xMTYuMjQ4LjIzMzoxMjM0NS90aW1lbGluZS9mcmVzaFwiLCB7XG4gICAgICBcInBob25lbnVtXCI6IFwiMTgyNjAwNzEwMTFcIixcbiAgICAgIFwidGltZVwiOiBcIjIwMTktMDktMDEgMTU6MjQ6MDdcIlxuICAgIH0pO1xuICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgdGhhdC5pc1JlZnJlc2hpbmcgPSBmYWxzZTtcblxuICAgICAgX3N5c3RlbTJbXCJkZWZhdWx0XCJdLnNob3dUb2FzdCh7XG4gICAgICAgIG1lc3NhZ2U6IFwi6K+35rGC6LaF5pe2XCIsXG4gICAgICAgIGltYWdlOiAnL0NvbW1vbi9sb2dvLnBuZydcbiAgICAgIH0pO1xuICAgIH0sIDUwMDApO1xuICAgIHByb21pc2UudGhlbih0aGlzLnJlZnJlc2hQb3N0KHRoaXMpLCB0aGlzLnNob3dFcnJvcih0aGlzKSk7XG4gIH0sXG4gIHNjcm9sbEJvdHRvbTogZnVuY3Rpb24gc2Nyb2xsQm90dG9tKCkge1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgdmFyIHByb21pc2UgPSB0aGlzLnBvc3QoXCJodHRwOi8vMTE0LjExNi4yNDguMjMzOjEyMzQ1L3RpbWVsaW5lL2ZyZXNoXCIsIHtcbiAgICAgIFwicGhvbmVudW1cIjogXCIxODI2MDA3MTAxMVwiLFxuICAgICAgXCJ0aW1lXCI6IFwiMjAxOS0wOS0wMSAxNToyNDowN1wiXG4gICAgfSk7XG4gICAgdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICB0aGF0LmlzTG9hZGluZyA9IGZhbHNlO1xuXG4gICAgICBfc3lzdGVtMltcImRlZmF1bHRcIl0uc2hvd1RvYXN0KHtcbiAgICAgICAgbWVzc2FnZTogXCLor7fmsYLotoXml7ZcIixcbiAgICAgICAgaW1hZ2U6ICcvQ29tbW9uL2xvZ28ucG5nJ1xuICAgICAgfSk7XG4gICAgfSwgNTAwMCk7XG4gICAgcHJvbWlzZS50aGVuKHRoaXMubG9hZE1vcmVQb3N0KHRoaXMpLCB0aGlzLnNob3dFcnJvcih0aGlzKSk7XG4gIH0sXG4gIG1hcFBvc3Q6IGZ1bmN0aW9uIG1hcFBvc3QoaXRlbSkge1xuICAgIHJldHVybiB7XG4gICAgICBzd2lwZXJkYXRhOiBpdGVtLmltYWdlcy5tYXAoZnVuY3Rpb24gKGltYWdlKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3JjOiBpbWFnZS51cmxcbiAgICAgICAgfTtcbiAgICAgIH0pLFxuICAgICAgbGlrZWRhdGE6IGl0ZW0ubGlrZXMsXG4gICAgICBwb3N0ZXI6IGl0ZW0uY3VyX3VzZXIudXNlcm5hbWUsXG4gICAgICBwb3N0ZXJjb21tZW50OiBpdGVtLnNlbGZjb21tZW50LFxuICAgICAgY29tbWVudG51bWJlcjogaXRlbS5jb21tZW50cyxcbiAgICAgIHBvc3Rlcmljb246IGl0ZW0uY3VyX3VzZXIucGhvdG8sXG4gICAgICBwb3N0dGltZTogaXRlbS5wdGltZSxcbiAgICAgIGxpa2VkOiBpdGVtLmlzbGlrZWRcbiAgICB9O1xuICB9XG59O1xudmFyIG1vZHVsZU93biA9IGV4cG9ydHMuZGVmYXVsdCB8fCBtb2R1bGUuZXhwb3J0cztcbnZhciBhY2Nlc3NvcnMgPSBbJ3B1YmxpYycsICdwcm90ZWN0ZWQnLCAncHJpdmF0ZSddO1xuaWYgKG1vZHVsZU93bi5kYXRhICYmIGFjY2Vzc29ycy5zb21lKGZ1bmN0aW9uIChhY2MpIHtcbiAgICByZXR1cm4gbW9kdWxlT3duW2FjY107XG4gIH0pKSB7XG4gIHRocm93IG5ldyBFcnJvcignRm9yIFZNIG9iamVjdHMsIGF0dHJpYnV0ZSBkYXRhIG11c3Qgbm90IGNvZXhpc3Qgd2l0aCBwdWJsaWMsIHByb3RlY3RlZCwgb3IgcHJpdmF0ZS4gUGxlYXNlIHJlcGxhY2UgZGF0YSB3aXRoIHB1YmxpYy4nKTtcbn0gZWxzZSBpZiAoIW1vZHVsZU93bi5kYXRhKSB7XG4gIG1vZHVsZU93bi5kYXRhID0ge307XG4gIG1vZHVsZU93bi5fZGVzY3JpcHRvciA9IHt9O1xuICBhY2Nlc3NvcnMuZm9yRWFjaChmdW5jdGlvbihhY2MpIHtcbiAgICB2YXIgYWNjVHlwZSA9IHR5cGVvZiBtb2R1bGVPd25bYWNjXTtcbiAgICBpZiAoYWNjVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG1vZHVsZU93bi5kYXRhID0gT2JqZWN0LmFzc2lnbihtb2R1bGVPd24uZGF0YSwgbW9kdWxlT3duW2FjY10pO1xuICAgICAgZm9yICh2YXIgbmFtZSBpbiBtb2R1bGVPd25bYWNjXSkge1xuICAgICAgICBtb2R1bGVPd24uX2Rlc2NyaXB0b3JbbmFtZV0gPSB7YWNjZXNzIDogYWNjfTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFjY1R5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUud2FybignRm9yIFZNIG9iamVjdHMsIGF0dHJpYnV0ZSAnICsgYWNjICsgJyB2YWx1ZSBtdXN0IG5vdCBiZSBhIGZ1bmN0aW9uLiBDaGFuZ2UgdGhlIHZhbHVlIHRvIGFuIG9iamVjdC4nKTtcbiAgICB9XG4gIH0pO1xufX0iLCJ2YXIgJGFwcF90ZW1wbGF0ZSQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBGYXN0QXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBGYXN0QXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS10ZW1wbGF0ZS1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgRmFzdEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT10ZW1wbGF0ZXMhLi9zZWFyY2hfYm94LnV4XCIpXG52YXIgJGFwcF9zdHlsZSQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBGYXN0QXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBGYXN0QXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1zdHlsZS1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9YzpcXFxcVXNlcnNcXFxcMTEwOTZcXFxcRGVza3RvcFxcXFxTdGFja1xcXFxGYXN0QVBQXFxcXGNvbS5uanVzdC5zdGFja1xcXFxzcmNcXFxcRGlzY292ZXJcXFxcY29tcG9uZW50XFxcXHNlYXJjaF9ib3gudXghLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgRmFzdEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPWM6XFxcXFVzZXJzXFxcXDExMDk2XFxcXERlc2t0b3BcXFxcU3RhY2tcXFxcRmFzdEFQUFxcXFxjb20ubmp1c3Quc3RhY2tcXFxcc3JjXFxcXERpc2NvdmVyXFxcXGNvbXBvbmVudFxcXFxzZWFyY2hfYm94LnV4IS4vc2VhcmNoX2JveC51eFwiKVxudmFyICRhcHBfc2NyaXB0JCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXNjcmlwdC1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgRmFzdEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtYWNjZXNzLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBGYXN0QXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXI/cHJlc2V0c1tdPWM6XFxcXFByb2dyYW0gRmlsZXNcXFxcSHVhd2VpIEZhc3RBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwcmVzZXQtZW52JnBsdWdpbnNbXT1jOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEh1YXdlaSBGYXN0QXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccGx1Z2luLXRyYW5zZm9ybS1tb2R1bGVzLWNvbW1vbmpzJnBsdWdpbnNbXT1jOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEh1YXdlaSBGYXN0QXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxqc3gtbG9hZGVyLmpzJmNvbW1lbnRzPWZhbHNlIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL3NlYXJjaF9ib3gudXhcIilcblxuJGFwcF9kZWZpbmUkKCdAYXBwLWNvbXBvbmVudC9zZWFyY2hfYm94JywgW10sIGZ1bmN0aW9uKCRhcHBfcmVxdWlyZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfbW9kdWxlJCl7XG4gICAgICRhcHBfc2NyaXB0JCgkYXBwX21vZHVsZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfcmVxdWlyZSQpXG4gICAgIGlmICgkYXBwX2V4cG9ydHMkLl9fZXNNb2R1bGUgJiYgJGFwcF9leHBvcnRzJC5kZWZhdWx0KSB7XG4gICAgICAgICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cyA9ICRhcHBfZXhwb3J0cyQuZGVmYXVsdFxuICAgICAgICB9XG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnRlbXBsYXRlID0gJGFwcF90ZW1wbGF0ZSRcbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMuc3R5bGUgPSAkYXBwX3N0eWxlJFxufSlcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJhdHRyXCI6IHt9LFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJzZWFyY2gtYm94LWNvbnRhaW5lclwiXG4gIF0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImRpdl9zZWFyY2hcIlxuICAgICAgXSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJjbGlja1wiOiBcImNsaWNrVG9TZWFyY2hcIlxuICAgICAgfSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnNlYXJjaGJhcn1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiaW1hZ2Vfc2VhcmNoXCJcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnBsYWNlaG9sZGVyfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJwbGFjZV9ob2xkZXJcIlxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIi5zZWFyY2gtYm94LWNvbnRhaW5lclwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25Db250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIuZGl2X3NlYXJjaFwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZjJmMmYyXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjY4NHB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI2N3B4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMzNweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIzM3B4XCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCI4cHhcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi5pbWFnZV9zZWFyY2hcIjoge1xuICAgIFwid2lkdGhcIjogXCIzM3B4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIzM3B4XCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxN3B4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjE3cHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjE3cHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxN3B4XCJcbiAgfSxcbiAgXCIucGxhY2VfaG9sZGVyXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNTAwcHhcIixcbiAgICBcImhlaWdodFwiOiBcIjQwcHhcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjdweFwiLFxuICAgIFwiY29sb3JcIjogXCIjMUExQTFBXCIsXG4gICAgXCJvcGFjaXR5XCI6IDAuM1xuICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsICRhcHBfcmVxdWlyZSQpe1widXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfc3lzdGVtID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdCgkYXBwX3JlcXVpcmUkKFwiQGFwcC1tb2R1bGUvc3lzdGVtLnJvdXRlclwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG52YXIgX2RlZmF1bHQgPSB7XG4gIGRhdGE6IHtcbiAgICBwbGFjZWhvbGRlcjogJ+WcqOi/memHjO+8jOWwveaDheWPkeeOsCdcbiAgfSxcbiAgcHJvcHM6IFsnc2VhcmNoYmFyJ10sXG4gIG9uSW5pdDogZnVuY3Rpb24gb25Jbml0KCkge30sXG4gIGNsaWNrVG9TZWFyY2g6IGZ1bmN0aW9uIGNsaWNrVG9TZWFyY2goKSB7XG4gICAgX3N5c3RlbVtcImRlZmF1bHRcIl0ucHVzaCh7XG4gICAgICB1cmk6ICcvU2VhcmNoJ1xuICAgIH0pO1xuICB9XG59O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbnZhciBtb2R1bGVPd24gPSBleHBvcnRzLmRlZmF1bHQgfHwgbW9kdWxlLmV4cG9ydHM7XG52YXIgYWNjZXNzb3JzID0gWydwdWJsaWMnLCAncHJvdGVjdGVkJywgJ3ByaXZhdGUnXTtcbmlmIChtb2R1bGVPd24uZGF0YSAmJiBhY2Nlc3NvcnMuc29tZShmdW5jdGlvbiAoYWNjKSB7XG4gICAgcmV0dXJuIG1vZHVsZU93blthY2NdO1xuICB9KSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgZGF0YSBtdXN0IG5vdCBjb2V4aXN0IHdpdGggcHVibGljLCBwcm90ZWN0ZWQsIG9yIHByaXZhdGUuIFBsZWFzZSByZXBsYWNlIGRhdGEgd2l0aCBwdWJsaWMuJyk7XG59IGVsc2UgaWYgKCFtb2R1bGVPd24uZGF0YSkge1xuICBtb2R1bGVPd24uZGF0YSA9IHt9O1xuICBtb2R1bGVPd24uX2Rlc2NyaXB0b3IgPSB7fTtcbiAgYWNjZXNzb3JzLmZvckVhY2goZnVuY3Rpb24oYWNjKSB7XG4gICAgdmFyIGFjY1R5cGUgPSB0eXBlb2YgbW9kdWxlT3duW2FjY107XG4gICAgaWYgKGFjY1R5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBtb2R1bGVPd24uZGF0YSA9IE9iamVjdC5hc3NpZ24obW9kdWxlT3duLmRhdGEsIG1vZHVsZU93blthY2NdKTtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gbW9kdWxlT3duW2FjY10pIHtcbiAgICAgICAgbW9kdWxlT3duLl9kZXNjcmlwdG9yW25hbWVdID0ge2FjY2VzcyA6IGFjY307XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhY2NUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgJyArIGFjYyArICcgdmFsdWUgbXVzdCBub3QgYmUgYSBmdW5jdGlvbi4gQ2hhbmdlIHRoZSB2YWx1ZSB0byBhbiBvYmplY3QuJyk7XG4gICAgfVxuICB9KTtcbn19IiwidmFyICRhcHBfdGVtcGxhdGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgRmFzdEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtanNvbi1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgRmFzdEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtdGVtcGxhdGUtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9dGVtcGxhdGVzIS4vbGFiZWxfc3dpcGVyLnV4XCIpXG52YXIgJGFwcF9zdHlsZSQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBGYXN0QXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBGYXN0QXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1zdHlsZS1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9YzpcXFxcVXNlcnNcXFxcMTEwOTZcXFxcRGVza3RvcFxcXFxTdGFja1xcXFxGYXN0QVBQXFxcXGNvbS5uanVzdC5zdGFja1xcXFxzcmNcXFxcRGlzY292ZXJcXFxcY29tcG9uZW50XFxcXGxhYmVsX3N3aXBlci51eCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBGYXN0QXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9YzpcXFxcVXNlcnNcXFxcMTEwOTZcXFxcRGVza3RvcFxcXFxTdGFja1xcXFxGYXN0QVBQXFxcXGNvbS5uanVzdC5zdGFja1xcXFxzcmNcXFxcRGlzY292ZXJcXFxcY29tcG9uZW50XFxcXGxhYmVsX3N3aXBlci51eCEuL2xhYmVsX3N3aXBlci51eFwiKVxudmFyICRhcHBfc2NyaXB0JCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXNjcmlwdC1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgRmFzdEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtYWNjZXNzLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBGYXN0QXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXI/cHJlc2V0c1tdPWM6XFxcXFByb2dyYW0gRmlsZXNcXFxcSHVhd2VpIEZhc3RBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwcmVzZXQtZW52JnBsdWdpbnNbXT1jOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEh1YXdlaSBGYXN0QXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccGx1Z2luLXRyYW5zZm9ybS1tb2R1bGVzLWNvbW1vbmpzJnBsdWdpbnNbXT1jOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEh1YXdlaSBGYXN0QXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxqc3gtbG9hZGVyLmpzJmNvbW1lbnRzPWZhbHNlIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL2xhYmVsX3N3aXBlci51eFwiKVxuXG4kYXBwX2RlZmluZSQoJ0BhcHAtY29tcG9uZW50L2xhYmVsX3N3aXBlcicsIFtdLCBmdW5jdGlvbigkYXBwX3JlcXVpcmUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX21vZHVsZSQpe1xuICAgICAkYXBwX3NjcmlwdCQoJGFwcF9tb2R1bGUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX3JlcXVpcmUkKVxuICAgICBpZiAoJGFwcF9leHBvcnRzJC5fX2VzTW9kdWxlICYmICRhcHBfZXhwb3J0cyQuZGVmYXVsdCkge1xuICAgICAgICAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMgPSAkYXBwX2V4cG9ydHMkLmRlZmF1bHRcbiAgICAgICAgfVxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy50ZW1wbGF0ZSA9ICRhcHBfdGVtcGxhdGUkXG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnN0eWxlID0gJGFwcF9zdHlsZSRcbn0pXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiYXR0clwiOiB7fSxcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwibGFiZWwtc3dpcGVyLWNvbnRhaW5lclwiXG4gIF0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImxpc3RcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJsYWJlbC1zd2lwZXItbGlzdFwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJibG9ja1wiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcInJlcGVhdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubGlzdH0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImxpc3QtaXRlbVwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInByb2RcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJsYWJlbC1zd2lwZXItbGlzdC1pdGVtXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic3RhY2tcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJsYWJlbC1zd2lwZXItc3RhY2tcIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJhX2l0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIi5hX2l0ZW1cIjoge1xuICAgIFwiZGlzcGxheVwiOiBcImZsZXhcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDAsMCwwLDApXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCI4LjNweFwiLFxuICAgIFwiYm9yZGVyVG9wQ29sb3JcIjogXCIjYzljMGMwXCIsXG4gICAgXCJib3JkZXJSaWdodENvbG9yXCI6IFwiI2M5YzBjMFwiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjYzljMGMwXCIsXG4gICAgXCJib3JkZXJMZWZ0Q29sb3JcIjogXCIjYzljMGMwXCIsXG4gICAgXCJib3JkZXJUb3BXaWR0aFwiOiBcIjNweFwiLFxuICAgIFwiYm9yZGVyUmlnaHRXaWR0aFwiOiBcIjNweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCIzcHhcIixcbiAgICBcImJvcmRlckxlZnRXaWR0aFwiOiBcIjNweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjIwcHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwcHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyMHB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwcHhcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzVweFwiLFxuICAgIFwiY29sb3JcIjogXCIjMDAwMDAwXCIsXG4gICAgXCJsaW5lc1wiOiAxXG4gIH0sXG4gIFwiLmxhYmVsLXN3aXBlci1jb250YWluZXJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiXG4gIH0sXG4gIFwiLmxhYmVsLXN3aXBlci1zdGFja1wiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIwcHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiOHB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIwcHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI4cHhcIlxuICB9LFxuICBcIi5sYWJlbC1zd2lwZXItbGlzdFwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwicm93XCIsXG4gICAgXCJoZWlnaHRcIjogXCI2N3B4XCJcbiAgfSxcbiAgXCIubGFiZWwtc3dpcGVyLWxpc3QtaXRlbVwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCJcbiAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCAkYXBwX3JlcXVpcmUkKXtcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG9uSW5pdDogZnVuY3Rpb24gb25Jbml0KCkge31cbn07XG52YXIgbW9kdWxlT3duID0gZXhwb3J0cy5kZWZhdWx0IHx8IG1vZHVsZS5leHBvcnRzO1xudmFyIGFjY2Vzc29ycyA9IFsncHVibGljJywgJ3Byb3RlY3RlZCcsICdwcml2YXRlJ107XG5pZiAobW9kdWxlT3duLmRhdGEgJiYgYWNjZXNzb3JzLnNvbWUoZnVuY3Rpb24gKGFjYykge1xuICAgIHJldHVybiBtb2R1bGVPd25bYWNjXTtcbiAgfSkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdGb3IgVk0gb2JqZWN0cywgYXR0cmlidXRlIGRhdGEgbXVzdCBub3QgY29leGlzdCB3aXRoIHB1YmxpYywgcHJvdGVjdGVkLCBvciBwcml2YXRlLiBQbGVhc2UgcmVwbGFjZSBkYXRhIHdpdGggcHVibGljLicpO1xufSBlbHNlIGlmICghbW9kdWxlT3duLmRhdGEpIHtcbiAgbW9kdWxlT3duLmRhdGEgPSB7fTtcbiAgbW9kdWxlT3duLl9kZXNjcmlwdG9yID0ge307XG4gIGFjY2Vzc29ycy5mb3JFYWNoKGZ1bmN0aW9uKGFjYykge1xuICAgIHZhciBhY2NUeXBlID0gdHlwZW9mIG1vZHVsZU93blthY2NdO1xuICAgIGlmIChhY2NUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgbW9kdWxlT3duLmRhdGEgPSBPYmplY3QuYXNzaWduKG1vZHVsZU93bi5kYXRhLCBtb2R1bGVPd25bYWNjXSk7XG4gICAgICBmb3IgKHZhciBuYW1lIGluIG1vZHVsZU93blthY2NdKSB7XG4gICAgICAgIG1vZHVsZU93bi5fZGVzY3JpcHRvcltuYW1lXSA9IHthY2Nlc3MgOiBhY2N9O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYWNjVHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc29sZS53YXJuKCdGb3IgVk0gb2JqZWN0cywgYXR0cmlidXRlICcgKyBhY2MgKyAnIHZhbHVlIG11c3Qgbm90IGJlIGEgZnVuY3Rpb24uIENoYW5nZSB0aGUgdmFsdWUgdG8gYW4gb2JqZWN0LicpO1xuICAgIH1cbiAgfSk7XG59fSIsInZhciAkYXBwX3RlbXBsYXRlJCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXRlbXBsYXRlLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBGYXN0QXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXRlbXBsYXRlcyEuL2ltYWdlX3dhbGwudXhcIilcbnZhciAkYXBwX3N0eWxlJCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXN0eWxlLWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1jOlxcXFxVc2Vyc1xcXFwxMTA5NlxcXFxEZXNrdG9wXFxcXFN0YWNrXFxcXEZhc3RBUFBcXFxcY29tLm5qdXN0LnN0YWNrXFxcXHNyY1xcXFxEaXNjb3ZlclxcXFxjb21wb25lbnRcXFxcaW1hZ2Vfd2FsbC51eCEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBGYXN0QXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9YzpcXFxcVXNlcnNcXFxcMTEwOTZcXFxcRGVza3RvcFxcXFxTdGFja1xcXFxGYXN0QVBQXFxcXGNvbS5uanVzdC5zdGFja1xcXFxzcmNcXFxcRGlzY292ZXJcXFxcY29tcG9uZW50XFxcXGltYWdlX3dhbGwudXghLi9pbWFnZV93YWxsLnV4XCIpXG52YXIgJGFwcF9zY3JpcHQkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgRmFzdEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc2NyaXB0LWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBGYXN0QXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1hY2Nlc3MtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlcj9wcmVzZXRzW109YzpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIdWF3ZWkgRmFzdEFwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHByZXNldC1lbnYmcGx1Z2luc1tdPWM6XFxcXFByb2dyYW0gRmlsZXNcXFxcSHVhd2VpIEZhc3RBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwbHVnaW4tdHJhbnNmb3JtLW1vZHVsZXMtY29tbW9uanMmcGx1Z2luc1tdPWM6XFxcXFByb2dyYW0gRmlsZXNcXFxcSHVhd2VpIEZhc3RBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGpzeC1sb2FkZXIuanMmY29tbWVudHM9ZmFsc2UhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgRmFzdEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vaW1hZ2Vfd2FsbC51eFwiKVxuXG4kYXBwX2RlZmluZSQoJ0BhcHAtY29tcG9uZW50L2ltYWdlX3dhbGwnLCBbXSwgZnVuY3Rpb24oJGFwcF9yZXF1aXJlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9tb2R1bGUkKXtcbiAgICAgJGFwcF9zY3JpcHQkKCRhcHBfbW9kdWxlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9yZXF1aXJlJClcbiAgICAgaWYgKCRhcHBfZXhwb3J0cyQuX19lc01vZHVsZSAmJiAkYXBwX2V4cG9ydHMkLmRlZmF1bHQpIHtcbiAgICAgICAgICAgICRhcHBfbW9kdWxlJC5leHBvcnRzID0gJGFwcF9leHBvcnRzJC5kZWZhdWx0XG4gICAgICAgIH1cbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMudGVtcGxhdGUgPSAkYXBwX3RlbXBsYXRlJFxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy5zdHlsZSA9ICRhcHBfc3R5bGUkXG59KVxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImF0dHJcIjoge30sXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcImltYWdlLXdhbGwtY29udGFpbmVyXCJcbiAgXSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiaW1hZ2Utd2FsbC1saXN0XCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcInJlcGVhdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMubGlzdH0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJpbWFnZS13YWxsLXByb2R1Y3RcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgXCJjbGlja1wiOiBcInJvdXRlUGFnZVwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGl0ZW0udXJpfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJpbWFnZS13YWxsLWltYWdlXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIi5pbWFnZS13YWxsLWNvbnRhaW5lclwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIlxuICB9LFxuICBcIi5pbWFnZS13YWxsLWxpc3RcIjoge1xuICAgIFwiYm9yZGVyVG9wQ29sb3JcIjogXCIjMDAwMGZmXCIsXG4gICAgXCJib3JkZXJSaWdodENvbG9yXCI6IFwiIzAwMDBmZlwiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjMDAwMGZmXCIsXG4gICAgXCJib3JkZXJMZWZ0Q29sb3JcIjogXCIjMDAwMGZmXCIsXG4gICAgXCJmbGV4V3JhcFwiOiBcIndyYXBcIlxuICB9LFxuICBcIi5pbWFnZS13YWxsLXByb2R1Y3RcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMjUwcHhcIixcbiAgICBcIndpZHRoXCI6IFwiMzMuMyVcIlxuICB9LFxuICBcIi5pbWFnZS13YWxsLWltYWdlXCI6IHtcbiAgICBcIm9iamVjdEZpdFwiOiBcImNvdmVyXCIsXG4gICAgXCJoZWlnaHRcIjogXCIxMDAlXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjFweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxcHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjFweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjFweFwiXG4gIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgJGFwcF9yZXF1aXJlJCl7XCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9zeXN0ZW0gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KCRhcHBfcmVxdWlyZSQoXCJAYXBwLW1vZHVsZS9zeXN0ZW0ucm91dGVyXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbnZhciBfZGVmYXVsdCA9IHtcbiAgZGF0YToge1xuICAgIHByb3BzOiBbJ2xpc3QnXVxuICB9LFxuICByb3V0ZVBhZ2U6IGZ1bmN0aW9uIHJvdXRlUGFnZSh1cmwpIHt9XG59O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbnZhciBtb2R1bGVPd24gPSBleHBvcnRzLmRlZmF1bHQgfHwgbW9kdWxlLmV4cG9ydHM7XG52YXIgYWNjZXNzb3JzID0gWydwdWJsaWMnLCAncHJvdGVjdGVkJywgJ3ByaXZhdGUnXTtcbmlmIChtb2R1bGVPd24uZGF0YSAmJiBhY2Nlc3NvcnMuc29tZShmdW5jdGlvbiAoYWNjKSB7XG4gICAgcmV0dXJuIG1vZHVsZU93blthY2NdO1xuICB9KSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgZGF0YSBtdXN0IG5vdCBjb2V4aXN0IHdpdGggcHVibGljLCBwcm90ZWN0ZWQsIG9yIHByaXZhdGUuIFBsZWFzZSByZXBsYWNlIGRhdGEgd2l0aCBwdWJsaWMuJyk7XG59IGVsc2UgaWYgKCFtb2R1bGVPd24uZGF0YSkge1xuICBtb2R1bGVPd24uZGF0YSA9IHt9O1xuICBtb2R1bGVPd24uX2Rlc2NyaXB0b3IgPSB7fTtcbiAgYWNjZXNzb3JzLmZvckVhY2goZnVuY3Rpb24oYWNjKSB7XG4gICAgdmFyIGFjY1R5cGUgPSB0eXBlb2YgbW9kdWxlT3duW2FjY107XG4gICAgaWYgKGFjY1R5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBtb2R1bGVPd24uZGF0YSA9IE9iamVjdC5hc3NpZ24obW9kdWxlT3duLmRhdGEsIG1vZHVsZU93blthY2NdKTtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gbW9kdWxlT3duW2FjY10pIHtcbiAgICAgICAgbW9kdWxlT3duLl9kZXNjcmlwdG9yW25hbWVdID0ge2FjY2VzcyA6IGFjY307XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhY2NUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgJyArIGFjYyArICcgdmFsdWUgbXVzdCBub3QgYmUgYSBmdW5jdGlvbi4gQ2hhbmdlIHRoZSB2YWx1ZSB0byBhbiBvYmplY3QuJyk7XG4gICAgfVxuICB9KTtcbn19IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImF0dHJcIjoge30sXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcImRpc2NvdmVyLWNvbnRhaW5lclwiXG4gIF0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInNlYXJjaC1ib3hcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwic2VhcmNoX2JveFwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInNlYXJjaGJhclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuc2VhcmNoYmFyfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiaW1hZ2Utd2FsbFwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZV93YWxsXCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwibGlzdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaW1nc31cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCIuZGlzY292ZXItY29udGFpbmVyXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi5zZWFyY2gtYm94XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNjgzcHhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjE3cHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMzRweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTdweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjM0cHhcIlxuICB9LFxuICBcIi5pbWFnZS13YWxsXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjE3cHhcIlxuICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsICRhcHBfcmVxdWlyZSQpe1widXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcHJvcHM6IFtdLFxuICBkYXRhOiB7XG4gICAgc2VhcmNoYmFyOiBcIi9EaXNjb3Zlci9pbWcvc2VhcmNoLnBuZ1wiLFxuICAgIGltZ3M6IFt7XG4gICAgICB1cmk6ICdodHRwczovL2x1Y2Fzemhhby0xMjU4OTA2MzM0LmNvcy5hcC1ndWFuZ3pob3UubXlxY2xvdWQuY29tL2NvdmVyLzczOTM0OTE2X3AwLmpwZydcbiAgICB9LCB7XG4gICAgICB1cmk6ICdodHRwczovL2x1Y2Fzemhhby0xMjU4OTA2MzM0LmNvcy5hcC1ndWFuZ3pob3UubXlxY2xvdWQuY29tL3N0YWNrL3Bvc3QvMDEuanBnJ1xuICAgIH0sIHtcbiAgICAgIHVyaTogJ2h0dHBzOi8vbHVjYXN6aGFvLTEyNTg5MDYzMzQuY29zLmFwLWd1YW5nemhvdS5teXFjbG91ZC5jb20vc3RhY2svcG9zdC9BTV9Hb29nbGVfNTI1LnBuZydcbiAgICB9LCB7XG4gICAgICB1cmk6ICdodHRwczovL2x1Y2Fzemhhby0xMjU4OTA2MzM0LmNvcy5hcC1ndWFuZ3pob3UubXlxY2xvdWQuY29tL3N0YWNrL3Bvc3QvQU1fQmluZ18yMTcucG5nJ1xuICAgIH0sIHtcbiAgICAgIHVyaTogJ2h0dHBzOi8vbHVjYXN6aGFvLTEyNTg5MDYzMzQuY29zLmFwLWd1YW5nemhvdS5teXFjbG91ZC5jb20vc3RhY2svcG9zdC9BTV9CaW5nXzIyMi5wbmcnXG4gICAgfSwge1xuICAgICAgdXJpOiAnaHR0cHM6Ly9sdWNhc3poYW8tMTI1ODkwNjMzNC5jb3MuYXAtZ3Vhbmd6aG91Lm15cWNsb3VkLmNvbS9zdGFjay9wb3N0L0FNX0dvb2dsZV8wNjcucG5nJ1xuICAgIH0sIHtcbiAgICAgIHVyaTogJ2h0dHBzOi8vbHVjYXN6aGFvLTEyNTg5MDYzMzQuY29zLmFwLWd1YW5nemhvdS5teXFjbG91ZC5jb20vY292ZXIvNzM5MzQ5MTZfcDAuanBnJ1xuICAgIH0sIHtcbiAgICAgIHVyaTogJ2h0dHBzOi8vbHVjYXN6aGFvLTEyNTg5MDYzMzQuY29zLmFwLWd1YW5nemhvdS5teXFjbG91ZC5jb20vc3RhY2svcG9zdC8wMS5qcGcnXG4gICAgfSwge1xuICAgICAgdXJpOiAnaHR0cHM6Ly9sdWNhc3poYW8tMTI1ODkwNjMzNC5jb3MuYXAtZ3Vhbmd6aG91Lm15cWNsb3VkLmNvbS9zdGFjay9wb3N0L0FNX0dvb2dsZV81MjUucG5nJ1xuICAgIH0sIHtcbiAgICAgIHVyaTogJ2h0dHBzOi8vbHVjYXN6aGFvLTEyNTg5MDYzMzQuY29zLmFwLWd1YW5nemhvdS5teXFjbG91ZC5jb20vc3RhY2svcG9zdC9BTV9CaW5nXzIxNy5wbmcnXG4gICAgfSwge1xuICAgICAgdXJpOiAnaHR0cHM6Ly9sdWNhc3poYW8tMTI1ODkwNjMzNC5jb3MuYXAtZ3Vhbmd6aG91Lm15cWNsb3VkLmNvbS9zdGFjay9wb3N0L0FNX0JpbmdfMjIyLnBuZydcbiAgICB9LCB7XG4gICAgICB1cmk6ICdodHRwczovL2x1Y2Fzemhhby0xMjU4OTA2MzM0LmNvcy5hcC1ndWFuZ3pob3UubXlxY2xvdWQuY29tL3N0YWNrL3Bvc3QvQU1fR29vZ2xlXzA2Ny5wbmcnXG4gICAgfSwge1xuICAgICAgdXJpOiAnaHR0cHM6Ly9sdWNhc3poYW8tMTI1ODkwNjMzNC5jb3MuYXAtZ3Vhbmd6aG91Lm15cWNsb3VkLmNvbS9jb3Zlci83MzkzNDkxNl9wMC5qcGcnXG4gICAgfSwge1xuICAgICAgdXJpOiAnaHR0cHM6Ly9sdWNhc3poYW8tMTI1ODkwNjMzNC5jb3MuYXAtZ3Vhbmd6aG91Lm15cWNsb3VkLmNvbS9zdGFjay9wb3N0LzAxLmpwZydcbiAgICB9LCB7XG4gICAgICB1cmk6ICdodHRwczovL2x1Y2Fzemhhby0xMjU4OTA2MzM0LmNvcy5hcC1ndWFuZ3pob3UubXlxY2xvdWQuY29tL3N0YWNrL3Bvc3QvQU1fR29vZ2xlXzUyNS5wbmcnXG4gICAgfSwge1xuICAgICAgdXJpOiAnaHR0cHM6Ly9sdWNhc3poYW8tMTI1ODkwNjMzNC5jb3MuYXAtZ3Vhbmd6aG91Lm15cWNsb3VkLmNvbS9zdGFjay9wb3N0L0FNX0JpbmdfMjE3LnBuZydcbiAgICB9LCB7XG4gICAgICB1cmk6ICdodHRwczovL2x1Y2Fzemhhby0xMjU4OTA2MzM0LmNvcy5hcC1ndWFuZ3pob3UubXlxY2xvdWQuY29tL3N0YWNrL3Bvc3QvQU1fQmluZ18yMjIucG5nJ1xuICAgIH0sIHtcbiAgICAgIHVyaTogJ2h0dHBzOi8vbHVjYXN6aGFvLTEyNTg5MDYzMzQuY29zLmFwLWd1YW5nemhvdS5teXFjbG91ZC5jb20vc3RhY2svcG9zdC9BTV9Hb29nbGVfMDY3LnBuZydcbiAgICB9XSxcbiAgICBsYWJlbHM6IFt7XG4gICAgICBuYW1lOiAnUGVvcGxlJ1xuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdTZWEnXG4gICAgfSwge1xuICAgICAgbmFtZTogJ0NhcidcbiAgICB9LCB7XG4gICAgICBuYW1lOiAnQ2F0J1xuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdTcG9ydHMnXG4gICAgfSwge1xuICAgICAgbmFtZTogJ0Nsb3VkJ1xuICAgIH0sIHtcbiAgICAgIG5hbWU6ICdGb3Jlc3QnXG4gICAgfSwge1xuICAgICAgbmFtZTogJ1N1bidcbiAgICB9XVxuICB9LFxuICBvbkluaXQ6IGZ1bmN0aW9uIG9uSW5pdCgpIHtcbiAgICB0aGlzLiRwYWdlLnNldFRpdGxlQmFyKHtcbiAgICAgIG1lbnU6IGZhbHNlXG4gICAgfSk7XG4gIH1cbn07XG52YXIgbW9kdWxlT3duID0gZXhwb3J0cy5kZWZhdWx0IHx8IG1vZHVsZS5leHBvcnRzO1xudmFyIGFjY2Vzc29ycyA9IFsncHVibGljJywgJ3Byb3RlY3RlZCcsICdwcml2YXRlJ107XG5pZiAobW9kdWxlT3duLmRhdGEgJiYgYWNjZXNzb3JzLnNvbWUoZnVuY3Rpb24gKGFjYykge1xuICAgIHJldHVybiBtb2R1bGVPd25bYWNjXTtcbiAgfSkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdGb3IgVk0gb2JqZWN0cywgYXR0cmlidXRlIGRhdGEgbXVzdCBub3QgY29leGlzdCB3aXRoIHB1YmxpYywgcHJvdGVjdGVkLCBvciBwcml2YXRlLiBQbGVhc2UgcmVwbGFjZSBkYXRhIHdpdGggcHVibGljLicpO1xufSBlbHNlIGlmICghbW9kdWxlT3duLmRhdGEpIHtcbiAgbW9kdWxlT3duLmRhdGEgPSB7fTtcbiAgbW9kdWxlT3duLl9kZXNjcmlwdG9yID0ge307XG4gIGFjY2Vzc29ycy5mb3JFYWNoKGZ1bmN0aW9uKGFjYykge1xuICAgIHZhciBhY2NUeXBlID0gdHlwZW9mIG1vZHVsZU93blthY2NdO1xuICAgIGlmIChhY2NUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgbW9kdWxlT3duLmRhdGEgPSBPYmplY3QuYXNzaWduKG1vZHVsZU93bi5kYXRhLCBtb2R1bGVPd25bYWNjXSk7XG4gICAgICBmb3IgKHZhciBuYW1lIGluIG1vZHVsZU93blthY2NdKSB7XG4gICAgICAgIG1vZHVsZU93bi5fZGVzY3JpcHRvcltuYW1lXSA9IHthY2Nlc3MgOiBhY2N9O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYWNjVHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc29sZS53YXJuKCdGb3IgVk0gb2JqZWN0cywgYXR0cmlidXRlICcgKyBhY2MgKyAnIHZhbHVlIG11c3Qgbm90IGJlIGEgZnVuY3Rpb24uIENoYW5nZSB0aGUgdmFsdWUgdG8gYW4gb2JqZWN0LicpO1xuICAgIH1cbiAgfSk7XG59fSIsInJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2xvYWRlci5qcz90eXBlPWNvbXBvbmVudCEuLi9Db21tdW5pdHkvaW5kZXgudXg/bmFtZT1jb21tdW5pdHlcIilcbnJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2xvYWRlci5qcz90eXBlPWNvbXBvbmVudCEuLi9EaXNjb3Zlci9pbmRleC51eD9uYW1lPWRpc2NvdmVyXCIpXG5yZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBGYXN0QXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9sb2FkZXIuanM/dHlwZT1jb21wb25lbnQhLi4vUmFuay9pbmRleC51eD9uYW1lPXJhbmtcIilcbnJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2xvYWRlci5qcz90eXBlPWNvbXBvbmVudCEuLi9NaW5lL2luZGV4LnV4P25hbWU9bWluZVwiKVxudmFyICRhcHBfdGVtcGxhdGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgRmFzdEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtanNvbi1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgRmFzdEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtdGVtcGxhdGUtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9dGVtcGxhdGVzIS4vaW5kZXgudXhcIilcbnZhciAkYXBwX3N0eWxlJCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXN0eWxlLWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1jOlxcXFxVc2Vyc1xcXFwxMTA5NlxcXFxEZXNrdG9wXFxcXFN0YWNrXFxcXEZhc3RBUFBcXFxcY29tLm5qdXN0LnN0YWNrXFxcXHNyY1xcXFxNYWluXFxcXGluZGV4LnV4IS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1jOlxcXFxVc2Vyc1xcXFwxMTA5NlxcXFxEZXNrdG9wXFxcXFN0YWNrXFxcXEZhc3RBUFBcXFxcY29tLm5qdXN0LnN0YWNrXFxcXHNyY1xcXFxNYWluXFxcXGluZGV4LnV4IS4vaW5kZXgudXhcIilcbnZhciAkYXBwX3NjcmlwdCQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBGYXN0QXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1zY3JpcHQtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWFjY2Vzcy1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgRmFzdEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1jOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEh1YXdlaSBGYXN0QXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccHJlc2V0LWVudiZwbHVnaW5zW109YzpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIdWF3ZWkgRmFzdEFwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHBsdWdpbi10cmFuc2Zvcm0tbW9kdWxlcy1jb21tb25qcyZwbHVnaW5zW109YzpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIdWF3ZWkgRmFzdEFwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcanN4LWxvYWRlci5qcyZjb21tZW50cz1mYWxzZSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBGYXN0QXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi9pbmRleC51eFwiKVxuXG4kYXBwX2RlZmluZSQoJ0BhcHAtY29tcG9uZW50L2luZGV4JywgW10sIGZ1bmN0aW9uKCRhcHBfcmVxdWlyZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfbW9kdWxlJCl7XG4gICAgICRhcHBfc2NyaXB0JCgkYXBwX21vZHVsZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfcmVxdWlyZSQpXG4gICAgIGlmICgkYXBwX2V4cG9ydHMkLl9fZXNNb2R1bGUgJiYgJGFwcF9leHBvcnRzJC5kZWZhdWx0KSB7XG4gICAgICAgICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cyA9ICRhcHBfZXhwb3J0cyQuZGVmYXVsdFxuICAgICAgICB9XG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnRlbXBsYXRlID0gJGFwcF90ZW1wbGF0ZSRcbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMuc3R5bGUgPSAkYXBwX3N0eWxlJFxufSlcblxuJGFwcF9ib290c3RyYXAkKCdAYXBwLWNvbXBvbmVudC9pbmRleCcseyBwYWNrYWdlck5hbWU6J2ZhLXRvb2xraXQnLCBwYWNrYWdlclZlcnNpb246ICcyLjAuMC1TdGFibGUuMzAxJ30pIiwicmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgRmFzdEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvbG9hZGVyLmpzP3R5cGU9Y29tcG9uZW50IS4vY29tcG9uZW50L2NvbXBvbmVudC1wb3N0LnV4P25hbWU9Y29tcG9uZW50LXBvc3RcIilcbnZhciAkYXBwX3RlbXBsYXRlJCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXRlbXBsYXRlLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBGYXN0QXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXRlbXBsYXRlcyEuL2luZGV4LnV4XCIpXG52YXIgJGFwcF9zdHlsZSQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBGYXN0QXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBGYXN0QXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1zdHlsZS1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9YzpcXFxcVXNlcnNcXFxcMTEwOTZcXFxcRGVza3RvcFxcXFxTdGFja1xcXFxGYXN0QVBQXFxcXGNvbS5uanVzdC5zdGFja1xcXFxzcmNcXFxcQ29tbXVuaXR5XFxcXGluZGV4LnV4IS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1jOlxcXFxVc2Vyc1xcXFwxMTA5NlxcXFxEZXNrdG9wXFxcXFN0YWNrXFxcXEZhc3RBUFBcXFxcY29tLm5qdXN0LnN0YWNrXFxcXHNyY1xcXFxDb21tdW5pdHlcXFxcaW5kZXgudXghLi9pbmRleC51eFwiKVxudmFyICRhcHBfc2NyaXB0JCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXNjcmlwdC1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgRmFzdEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtYWNjZXNzLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBGYXN0QXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXI/cHJlc2V0c1tdPWM6XFxcXFByb2dyYW0gRmlsZXNcXFxcSHVhd2VpIEZhc3RBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwcmVzZXQtZW52JnBsdWdpbnNbXT1jOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEh1YXdlaSBGYXN0QXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccGx1Z2luLXRyYW5zZm9ybS1tb2R1bGVzLWNvbW1vbmpzJnBsdWdpbnNbXT1jOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEh1YXdlaSBGYXN0QXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxqc3gtbG9hZGVyLmpzJmNvbW1lbnRzPWZhbHNlIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL2luZGV4LnV4XCIpXG5cbiRhcHBfZGVmaW5lJCgnQGFwcC1jb21wb25lbnQvY29tbXVuaXR5JywgW10sIGZ1bmN0aW9uKCRhcHBfcmVxdWlyZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfbW9kdWxlJCl7XG4gICAgICRhcHBfc2NyaXB0JCgkYXBwX21vZHVsZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfcmVxdWlyZSQpXG4gICAgIGlmICgkYXBwX2V4cG9ydHMkLl9fZXNNb2R1bGUgJiYgJGFwcF9leHBvcnRzJC5kZWZhdWx0KSB7XG4gICAgICAgICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cyA9ICRhcHBfZXhwb3J0cyQuZGVmYXVsdFxuICAgICAgICB9XG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnRlbXBsYXRlID0gJGFwcF90ZW1wbGF0ZSRcbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMuc3R5bGUgPSAkYXBwX3N0eWxlJFxufSlcbiIsInJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2xvYWRlci5qcz90eXBlPWNvbXBvbmVudCEuL2NvbXBvbmVudC9zZWFyY2hfYm94LnV4P25hbWU9c2VhcmNoX2JveFwiKVxucmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgRmFzdEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvbG9hZGVyLmpzP3R5cGU9Y29tcG9uZW50IS4vY29tcG9uZW50L2xhYmVsX3N3aXBlci51eD9uYW1lPWxhYmVsX3N3aXBlclwiKVxucmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgRmFzdEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvbG9hZGVyLmpzP3R5cGU9Y29tcG9uZW50IS4vY29tcG9uZW50L2ltYWdlX3dhbGwudXg/bmFtZT1pbWFnZV93YWxsXCIpXG52YXIgJGFwcF90ZW1wbGF0ZSQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBGYXN0QXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBGYXN0QXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS10ZW1wbGF0ZS1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgRmFzdEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT10ZW1wbGF0ZXMhLi9pbmRleC51eFwiKVxudmFyICRhcHBfc3R5bGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgRmFzdEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtanNvbi1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgRmFzdEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc3R5bGUtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPWM6XFxcXFVzZXJzXFxcXDExMDk2XFxcXERlc2t0b3BcXFxcU3RhY2tcXFxcRmFzdEFQUFxcXFxjb20ubmp1c3Quc3RhY2tcXFxcc3JjXFxcXERpc2NvdmVyXFxcXGluZGV4LnV4IS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1jOlxcXFxVc2Vyc1xcXFwxMTA5NlxcXFxEZXNrdG9wXFxcXFN0YWNrXFxcXEZhc3RBUFBcXFxcY29tLm5qdXN0LnN0YWNrXFxcXHNyY1xcXFxEaXNjb3ZlclxcXFxpbmRleC51eCEuL2luZGV4LnV4XCIpXG52YXIgJGFwcF9zY3JpcHQkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgRmFzdEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc2NyaXB0LWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBGYXN0QXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1hY2Nlc3MtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlcj9wcmVzZXRzW109YzpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIdWF3ZWkgRmFzdEFwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHByZXNldC1lbnYmcGx1Z2luc1tdPWM6XFxcXFByb2dyYW0gRmlsZXNcXFxcSHVhd2VpIEZhc3RBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwbHVnaW4tdHJhbnNmb3JtLW1vZHVsZXMtY29tbW9uanMmcGx1Z2luc1tdPWM6XFxcXFByb2dyYW0gRmlsZXNcXFxcSHVhd2VpIEZhc3RBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGpzeC1sb2FkZXIuanMmY29tbWVudHM9ZmFsc2UhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgRmFzdEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vaW5kZXgudXhcIilcblxuJGFwcF9kZWZpbmUkKCdAYXBwLWNvbXBvbmVudC9kaXNjb3ZlcicsIFtdLCBmdW5jdGlvbigkYXBwX3JlcXVpcmUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX21vZHVsZSQpe1xuICAgICAkYXBwX3NjcmlwdCQoJGFwcF9tb2R1bGUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX3JlcXVpcmUkKVxuICAgICBpZiAoJGFwcF9leHBvcnRzJC5fX2VzTW9kdWxlICYmICRhcHBfZXhwb3J0cyQuZGVmYXVsdCkge1xuICAgICAgICAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMgPSAkYXBwX2V4cG9ydHMkLmRlZmF1bHRcbiAgICAgICAgfVxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy50ZW1wbGF0ZSA9ICRhcHBfdGVtcGxhdGUkXG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnN0eWxlID0gJGFwcF9zdHlsZSRcbn0pXG4iLCJyZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBGYXN0QXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9sb2FkZXIuanM/dHlwZT1jb21wb25lbnQhLi9jb21wb25lbnQvcmFua19saXN0LnV4P25hbWU9cmFua19saXN0XCIpXG52YXIgJGFwcF90ZW1wbGF0ZSQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBGYXN0QXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBGYXN0QXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS10ZW1wbGF0ZS1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgRmFzdEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT10ZW1wbGF0ZXMhLi9pbmRleC51eFwiKVxudmFyICRhcHBfc3R5bGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgRmFzdEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtanNvbi1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgRmFzdEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc3R5bGUtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPWM6XFxcXFVzZXJzXFxcXDExMDk2XFxcXERlc2t0b3BcXFxcU3RhY2tcXFxcRmFzdEFQUFxcXFxjb20ubmp1c3Quc3RhY2tcXFxcc3JjXFxcXFJhbmtcXFxcaW5kZXgudXghLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgRmFzdEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPWM6XFxcXFVzZXJzXFxcXDExMDk2XFxcXERlc2t0b3BcXFxcU3RhY2tcXFxcRmFzdEFQUFxcXFxjb20ubmp1c3Quc3RhY2tcXFxcc3JjXFxcXFJhbmtcXFxcaW5kZXgudXghLi9pbmRleC51eFwiKVxudmFyICRhcHBfc2NyaXB0JCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXNjcmlwdC1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgRmFzdEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtYWNjZXNzLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBGYXN0QXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXI/cHJlc2V0c1tdPWM6XFxcXFByb2dyYW0gRmlsZXNcXFxcSHVhd2VpIEZhc3RBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwcmVzZXQtZW52JnBsdWdpbnNbXT1jOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEh1YXdlaSBGYXN0QXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccGx1Z2luLXRyYW5zZm9ybS1tb2R1bGVzLWNvbW1vbmpzJnBsdWdpbnNbXT1jOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEh1YXdlaSBGYXN0QXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxqc3gtbG9hZGVyLmpzJmNvbW1lbnRzPWZhbHNlIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL2luZGV4LnV4XCIpXG5cbiRhcHBfZGVmaW5lJCgnQGFwcC1jb21wb25lbnQvcmFuaycsIFtdLCBmdW5jdGlvbigkYXBwX3JlcXVpcmUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX21vZHVsZSQpe1xuICAgICAkYXBwX3NjcmlwdCQoJGFwcF9tb2R1bGUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX3JlcXVpcmUkKVxuICAgICBpZiAoJGFwcF9leHBvcnRzJC5fX2VzTW9kdWxlICYmICRhcHBfZXhwb3J0cyQuZGVmYXVsdCkge1xuICAgICAgICAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMgPSAkYXBwX2V4cG9ydHMkLmRlZmF1bHRcbiAgICAgICAgfVxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy50ZW1wbGF0ZSA9ICRhcHBfdGVtcGxhdGUkXG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnN0eWxlID0gJGFwcF9zdHlsZSRcbn0pXG4iLCJ2YXIgJGFwcF90ZW1wbGF0ZSQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBGYXN0QXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBGYXN0QXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS10ZW1wbGF0ZS1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgRmFzdEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT10ZW1wbGF0ZXMhLi9yYW5rX2xpc3QudXhcIilcbnZhciAkYXBwX3N0eWxlJCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXN0eWxlLWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1jOlxcXFxVc2Vyc1xcXFwxMTA5NlxcXFxEZXNrdG9wXFxcXFN0YWNrXFxcXEZhc3RBUFBcXFxcY29tLm5qdXN0LnN0YWNrXFxcXHNyY1xcXFxSYW5rXFxcXGNvbXBvbmVudFxcXFxyYW5rX2xpc3QudXghLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgRmFzdEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPWM6XFxcXFVzZXJzXFxcXDExMDk2XFxcXERlc2t0b3BcXFxcU3RhY2tcXFxcRmFzdEFQUFxcXFxjb20ubmp1c3Quc3RhY2tcXFxcc3JjXFxcXFJhbmtcXFxcY29tcG9uZW50XFxcXHJhbmtfbGlzdC51eCEuL3JhbmtfbGlzdC51eFwiKVxudmFyICRhcHBfc2NyaXB0JCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXNjcmlwdC1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgRmFzdEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtYWNjZXNzLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBGYXN0QXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXI/cHJlc2V0c1tdPWM6XFxcXFByb2dyYW0gRmlsZXNcXFxcSHVhd2VpIEZhc3RBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwcmVzZXQtZW52JnBsdWdpbnNbXT1jOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEh1YXdlaSBGYXN0QXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccGx1Z2luLXRyYW5zZm9ybS1tb2R1bGVzLWNvbW1vbmpzJnBsdWdpbnNbXT1jOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEh1YXdlaSBGYXN0QXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxqc3gtbG9hZGVyLmpzJmNvbW1lbnRzPWZhbHNlIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL3JhbmtfbGlzdC51eFwiKVxuXG4kYXBwX2RlZmluZSQoJ0BhcHAtY29tcG9uZW50L3JhbmtfbGlzdCcsIFtdLCBmdW5jdGlvbigkYXBwX3JlcXVpcmUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX21vZHVsZSQpe1xuICAgICAkYXBwX3NjcmlwdCQoJGFwcF9tb2R1bGUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX3JlcXVpcmUkKVxuICAgICBpZiAoJGFwcF9leHBvcnRzJC5fX2VzTW9kdWxlICYmICRhcHBfZXhwb3J0cyQuZGVmYXVsdCkge1xuICAgICAgICAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMgPSAkYXBwX2V4cG9ydHMkLmRlZmF1bHRcbiAgICAgICAgfVxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy50ZW1wbGF0ZSA9ICRhcHBfdGVtcGxhdGUkXG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnN0eWxlID0gJGFwcF9zdHlsZSRcbn0pXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiYXR0clwiOiB7fSxcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwicmFuay1jb250YWluZXJcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJibG9ja1wiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJyZXBlYXRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnJhbmtpbmZvc30sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImNvbnRlbnQtbGlzdFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiY29udGVudC11cFwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGl0ZW0udXJsfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJpbWFnZVwiXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJjb250ZW50LWRvd25cIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJjb250ZW50LWxlZnRcIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiRpdGVtLnBvc3Rlcmljb259XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcImljb25cIlxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNvbnRlbnQtbWlkXCJcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGl0ZW0udXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiRpdGVtLm5hbWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJjb250ZW50LXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICh0aGlzLiRpdGVtLmxpa2VkYXRhKSsn5Liq6LWeJ31cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibGlrZWRhdGFcIlxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS5saWtlZD09PXRydWU/Jy9SYW5rL2ltZy9saWtlLnBuZyc6Jy9SYW5rL2ltZy9kaXNsaWtlLnBuZyd9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcImJ0blwiXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImNsaWNrXCI6IFwibGlrZVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiLnJhbmstY29udGFpbmVyXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIlxuICB9LFxuICBcIi5jb250ZW50LWxpc3RcIjoge1xuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCJcbiAgfSxcbiAgXCIuY29udGVudC11cFwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCI2ODRweFwiLFxuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJpbmRpY2F0b3JDb2xvclwiOiBcInJnYmEoMCwwLDAsMC4yKVwiLFxuICAgIFwiaW5kaWNhdG9yU2VsZWN0ZWRDb2xvclwiOiBcIiNmZmZmZmZcIlxuICB9LFxuICBcIi5pbWFnZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcImhlaWdodFwiOiBcIjEwMCVcIixcbiAgICBcIm9iamVjdEZpdFwiOiBcImNvdmVyXCJcbiAgfSxcbiAgXCIuY29udGVudC1kb3duXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjExNHB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIxMHB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjEwcHhcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiXG4gIH0sXG4gIFwiLmljb25cIjoge1xuICAgIFwid2lkdGhcIjogXCI4MHB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCI4MHB4XCIsXG4gICAgXCJvYmplY3RGaXRcIjogXCJjb3ZlclwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiNDBweFwiLFxuICAgIFwiYm9yZGVyVG9wQ29sb3JcIjogXCIjZGMxNDNjXCIsXG4gICAgXCJib3JkZXJSaWdodENvbG9yXCI6IFwiI2RjMTQzY1wiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjZGMxNDNjXCIsXG4gICAgXCJib3JkZXJMZWZ0Q29sb3JcIjogXCIjZGMxNDNjXCIsXG4gICAgXCJib3JkZXJUb3BXaWR0aFwiOiBcIjNweFwiLFxuICAgIFwiYm9yZGVyUmlnaHRXaWR0aFwiOiBcIjNweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCIzcHhcIixcbiAgICBcImJvcmRlckxlZnRXaWR0aFwiOiBcIjNweFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMTdweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxN3B4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxN3B4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTdweFwiXG4gIH0sXG4gIFwiLmNvbnRlbnQtbWlkXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjEwMCVcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yXCI6IFwiI0YyRjJGMlwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCIxcHhcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIudXNlcm5hbWVcIjoge1xuICAgIFwiY29sb3JcIjogXCIjMDAwMDAwXCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiYm9sZFwiLFxuICAgIFwibGluZXNcIjogMSxcbiAgICBcInRleHRPdmVyZmxvd1wiOiBcImVsbGlwc2lzXCJcbiAgfSxcbiAgXCIubmFtZVwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM4MDgwODBcIixcbiAgICBcImxpbmVzXCI6IDEsXG4gICAgXCJ0ZXh0T3ZlcmZsb3dcIjogXCJlbGxpcHNpc1wiXG4gIH0sXG4gIFwiLmNvbnRlbnQtcmlnaHRcIjoge1xuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJmbGV4LWVuZFwiXG4gIH0sXG4gIFwiLmxpa2VkYXRhXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzAwMDAwMFwiXG4gIH0sXG4gIFwiLmJ0blwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjY0cHhcIixcbiAgICBcImhlaWdodFwiOiBcIjY0cHhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjI1cHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMjVweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMjVweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjI1cHhcIixcbiAgICBcIm9iamVjdEZpdFwiOiBcImNvbnRhaW5cIlxuICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsICRhcHBfcmVxdWlyZSQpe1widXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG5cbnZhciBfc3lzdGVtID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdCgkYXBwX3JlcXVpcmUkKFwiQGFwcC1tb2R1bGUvc3lzdGVtLnJvdXRlclwiKSk7XG5cbnZhciBfc3lzdGVtMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoJGFwcF9yZXF1aXJlJChcIkBhcHAtbW9kdWxlL3N5c3RlbS5wcm9tcHRcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxudmFyIF9kZWZhdWx0ID0ge1xuICBkYXRhOiB7XG4gICAgcHJvcHM6IFsncmFua2luZm9zJ11cbiAgfSxcbiAgcHJlc3M6IGZ1bmN0aW9uIHByZXNzKGl0ZW0pIHtcbiAgICBjb25zb2xlLmVycm9yKFwib24gcHJlc3MgZXZlbnQgcGFyYW0gOiBcIiArIGl0ZW0pO1xuICB9LFxuICBsaWtlOiBmdW5jdGlvbiBsaWtlKCkge1xuICAgIHRoaXMubGlrZWQgPSAhdGhpcy5saWtlZDtcblxuICAgIF9zeXN0ZW0yW1wiZGVmYXVsdFwiXS5zaG93VG9hc3Qoe1xuICAgICAgbWVzc2FnZTogdGhpcy5saWtlZCA9PT0gdHJ1ZSA/ICdsaWtlJyA6ICdkaXNsaWtlJyxcbiAgICAgIGltYWdlOiAnL0NvbW1vbi9sb2dvLnBuZydcbiAgICB9KTtcbiAgfSxcbiAgcm91dGVQYWdlOiBmdW5jdGlvbiByb3V0ZVBhZ2UodXJsKSB7fVxufTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG52YXIgbW9kdWxlT3duID0gZXhwb3J0cy5kZWZhdWx0IHx8IG1vZHVsZS5leHBvcnRzO1xudmFyIGFjY2Vzc29ycyA9IFsncHVibGljJywgJ3Byb3RlY3RlZCcsICdwcml2YXRlJ107XG5pZiAobW9kdWxlT3duLmRhdGEgJiYgYWNjZXNzb3JzLnNvbWUoZnVuY3Rpb24gKGFjYykge1xuICAgIHJldHVybiBtb2R1bGVPd25bYWNjXTtcbiAgfSkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdGb3IgVk0gb2JqZWN0cywgYXR0cmlidXRlIGRhdGEgbXVzdCBub3QgY29leGlzdCB3aXRoIHB1YmxpYywgcHJvdGVjdGVkLCBvciBwcml2YXRlLiBQbGVhc2UgcmVwbGFjZSBkYXRhIHdpdGggcHVibGljLicpO1xufSBlbHNlIGlmICghbW9kdWxlT3duLmRhdGEpIHtcbiAgbW9kdWxlT3duLmRhdGEgPSB7fTtcbiAgbW9kdWxlT3duLl9kZXNjcmlwdG9yID0ge307XG4gIGFjY2Vzc29ycy5mb3JFYWNoKGZ1bmN0aW9uKGFjYykge1xuICAgIHZhciBhY2NUeXBlID0gdHlwZW9mIG1vZHVsZU93blthY2NdO1xuICAgIGlmIChhY2NUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgbW9kdWxlT3duLmRhdGEgPSBPYmplY3QuYXNzaWduKG1vZHVsZU93bi5kYXRhLCBtb2R1bGVPd25bYWNjXSk7XG4gICAgICBmb3IgKHZhciBuYW1lIGluIG1vZHVsZU93blthY2NdKSB7XG4gICAgICAgIG1vZHVsZU93bi5fZGVzY3JpcHRvcltuYW1lXSA9IHthY2Nlc3MgOiBhY2N9O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYWNjVHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc29sZS53YXJuKCdGb3IgVk0gb2JqZWN0cywgYXR0cmlidXRlICcgKyBhY2MgKyAnIHZhbHVlIG11c3Qgbm90IGJlIGEgZnVuY3Rpb24uIENoYW5nZSB0aGUgdmFsdWUgdG8gYW4gb2JqZWN0LicpO1xuICAgIH1cbiAgfSk7XG59fSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJhdHRyXCI6IHt9LFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJjb250YWluZXJcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ0YWJzXCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgIFwiY2hhbmdlXCI6IFwib25DaGFuZ2VUYWJJbmRleFwiXG4gICAgICB9LFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0YWItYmFyXCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwibW9kZVwiOiBcInNjcm9sbGFibGVcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJ0YWItYmFyXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJibG9ja1wiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwicmVwZWF0XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy50YWJzfSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwidGFiLWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogZnVuY3Rpb24gKCkge3JldHVybiBbdGhpcy4kaWR4PT10aGlzLmN1cnJJbmRleD8naXRlbV9iZ19hY3RpdmUnOidpdGVtX2JnJ119XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0YWItY29udGVudFwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInRhYl9jb250ZW50XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJkaXZfdGFiY29udGVudFwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInJhbmtfbGlzdFwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJyYW5raW5mb3NcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnJhbmtpbmZvc31cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImRpdl90YWJjb250ZW50XCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicmFua19saXN0XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInJhbmtpbmZvc1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucmFua2luZm9zfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIi5jb250YWluZXJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwiYWxpZ25Db250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImZsZXgtc3RhcnRcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNGRkZGRkZcIlxuICB9LFxuICBcIi5pdGVtX2JnXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMnB4XCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDAsMCwwLDApXCJcbiAgfSxcbiAgXCIuaXRlbV9iZ19hY3RpdmVcIjoge1xuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJoZWlnaHRcIjogXCIycHhcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMwMDAwMDBcIlxuICB9LFxuICBcIi5kaXZfdGFiY29udGVudFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIlxuICB9LFxuICBcIi5kaXZfdGFiY29udGVudCB0ZXh0XCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIudGFiLWJhclwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcImhlaWdodFwiOiBcIjkwcHhcIlxuICB9LFxuICBcIi50YWItaXRlbVwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjUwJVwiXG4gIH0sXG4gIFwiLnRhYi1pdGVtIHRleHRcIjoge1xuICAgIFwib3BhY2l0eVwiOiAwLjUsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCIyNy41cHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjI3LjVweFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzNXB4XCIsXG4gICAgXCJmb250U2l6ZTphY3RpdmVcIjogXCIzNXB4XCIsXG4gICAgXCJtYXJnaW5Ub3A6YWN0aXZlXCI6IFwiMjcuNXB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b206YWN0aXZlXCI6IFwiMjcuNXB4XCIsXG4gICAgXCJmb250V2VpZ2h0OmFjdGl2ZVwiOiBcImJvbGRcIixcbiAgICBcImNvbG9yOmFjdGl2ZVwiOiBcIiMwMDAwMDBcIlxuICB9LFxuICBcIi50YWJfY29udGVudFwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIlxuICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsICRhcHBfcmVxdWlyZSQpe1widXNlIHN0cmljdFwiO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSB2b2lkIDA7XG52YXIgX2RlZmF1bHQgPSB7XG4gIGRhdGE6IHtcbiAgICB0YWJzOiBbXCJEYXlcIiwgXCJXZWVrXCJdLFxuICAgIGN1cnJJbmRleDogMCxcbiAgICByYW5raW5mb3M6IFt7XG4gICAgICB1cmw6IFwiaHR0cHM6Ly9sdWNhc3poYW8tMTI1ODkwNjMzNC5jb3MuYXAtZ3Vhbmd6aG91Lm15cWNsb3VkLmNvbS9zdGFjay9wb3N0L0FNX0dvb2dsZV8wNjcucG5nXCIsXG4gICAgICBsaWtlZGF0YTogXCI2LDUwNyw2ODRcIixcbiAgICAgIHVzZXJuYW1lOiAnaW5zdGFncmFtJyxcbiAgICAgIG5hbWU6ICdpbnN0JyxcbiAgICAgIHBvc3Rlcmljb246IFwiaHR0cHM6Ly9sdWNhc3poYW8tMTI1ODkwNjMzNC5jb3MuYXAtZ3Vhbmd6aG91Lm15cWNsb3VkLmNvbS9zdGFjay8zMTYyNjY2OC5wbmdcIixcbiAgICAgIHBvc3R0aW1lOiBcIjIwMTktOS00IDE1OjUyOjAwXCIsXG4gICAgICBsaWtlZDogZmFsc2VcbiAgICB9LCB7XG4gICAgICB1cmw6IFwiaHR0cHM6Ly9sdWNhc3poYW8tMTI1ODkwNjMzNC5jb3MuYXAtZ3Vhbmd6aG91Lm15cWNsb3VkLmNvbS9zdGFjay9wb3N0LzAxLmpwZ1wiLFxuICAgICAgbGlrZWRhdGE6IFwiMSwyMzQsNTY3XCIsXG4gICAgICB1c2VybmFtZTogJ25pa2UnLFxuICAgICAgbmFtZTogJ2RnZGYnLFxuICAgICAgcG9zdGVyaWNvbjogXCJodHRwczovL2x1Y2Fzemhhby0xMjU4OTA2MzM0LmNvcy5hcC1ndWFuZ3pob3UubXlxY2xvdWQuY29tL3N0YWNrLzMxNjI2NjY4LnBuZ1wiLFxuICAgICAgcG9zdHRpbWU6IFwiMjAxOS05LTQgMjA6MzA6MDBcIixcbiAgICAgIGxpa2VkOiB0cnVlXG4gICAgfV1cbiAgfSxcbiAgb25Jbml0OiBmdW5jdGlvbiBvbkluaXQoKSB7XG4gICAgdGhpcy4kcGFnZS5zZXRUaXRsZUJhcih7XG4gICAgICB0ZXh0OiAn5paw6Ze7JyxcbiAgICAgIHRleHRDb2xvcjogJyMxQTFBMUEnXG4gICAgfSk7XG4gIH0sXG4gIHNob3dDb250ZW50OiBmdW5jdGlvbiBzaG93Q29udGVudChudW0pIHtcbiAgICB0aGlzLnR5cGUgPSAnY29udGVudF8nICsgbnVtO1xuICB9LFxuICBvbkNoYW5nZVRhYkluZGV4OiBmdW5jdGlvbiBvbkNoYW5nZVRhYkluZGV4KGV2dCkge1xuICAgIHRoaXMuY3VyckluZGV4ID0gZXZ0LmluZGV4O1xuICB9XG59O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbnZhciBtb2R1bGVPd24gPSBleHBvcnRzLmRlZmF1bHQgfHwgbW9kdWxlLmV4cG9ydHM7XG52YXIgYWNjZXNzb3JzID0gWydwdWJsaWMnLCAncHJvdGVjdGVkJywgJ3ByaXZhdGUnXTtcbmlmIChtb2R1bGVPd24uZGF0YSAmJiBhY2Nlc3NvcnMuc29tZShmdW5jdGlvbiAoYWNjKSB7XG4gICAgcmV0dXJuIG1vZHVsZU93blthY2NdO1xuICB9KSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgZGF0YSBtdXN0IG5vdCBjb2V4aXN0IHdpdGggcHVibGljLCBwcm90ZWN0ZWQsIG9yIHByaXZhdGUuIFBsZWFzZSByZXBsYWNlIGRhdGEgd2l0aCBwdWJsaWMuJyk7XG59IGVsc2UgaWYgKCFtb2R1bGVPd24uZGF0YSkge1xuICBtb2R1bGVPd24uZGF0YSA9IHt9O1xuICBtb2R1bGVPd24uX2Rlc2NyaXB0b3IgPSB7fTtcbiAgYWNjZXNzb3JzLmZvckVhY2goZnVuY3Rpb24oYWNjKSB7XG4gICAgdmFyIGFjY1R5cGUgPSB0eXBlb2YgbW9kdWxlT3duW2FjY107XG4gICAgaWYgKGFjY1R5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBtb2R1bGVPd24uZGF0YSA9IE9iamVjdC5hc3NpZ24obW9kdWxlT3duLmRhdGEsIG1vZHVsZU93blthY2NdKTtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gbW9kdWxlT3duW2FjY10pIHtcbiAgICAgICAgbW9kdWxlT3duLl9kZXNjcmlwdG9yW25hbWVdID0ge2FjY2VzcyA6IGFjY307XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhY2NUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgJyArIGFjYyArICcgdmFsdWUgbXVzdCBub3QgYmUgYSBmdW5jdGlvbi4gQ2hhbmdlIHRoZSB2YWx1ZSB0byBhbiBvYmplY3QuJyk7XG4gICAgfVxuICB9KTtcbn19IiwicmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgRmFzdEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvbG9hZGVyLmpzP3R5cGU9Y29tcG9uZW50IS4vY29tcG9uZW50L3VzZXJfY2FyZC51eD9uYW1lPXVzZXJfY2FyZFwiKVxudmFyICRhcHBfdGVtcGxhdGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgRmFzdEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtanNvbi1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgRmFzdEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtdGVtcGxhdGUtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9dGVtcGxhdGVzIS4vaW5kZXgudXhcIilcbnZhciAkYXBwX3N0eWxlJCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXN0eWxlLWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1jOlxcXFxVc2Vyc1xcXFwxMTA5NlxcXFxEZXNrdG9wXFxcXFN0YWNrXFxcXEZhc3RBUFBcXFxcY29tLm5qdXN0LnN0YWNrXFxcXHNyY1xcXFxNaW5lXFxcXGluZGV4LnV4IS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1jOlxcXFxVc2Vyc1xcXFwxMTA5NlxcXFxEZXNrdG9wXFxcXFN0YWNrXFxcXEZhc3RBUFBcXFxcY29tLm5qdXN0LnN0YWNrXFxcXHNyY1xcXFxNaW5lXFxcXGluZGV4LnV4IS4vaW5kZXgudXhcIilcbnZhciAkYXBwX3NjcmlwdCQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBGYXN0QXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1zY3JpcHQtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWFjY2Vzcy1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgRmFzdEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1jOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEh1YXdlaSBGYXN0QXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccHJlc2V0LWVudiZwbHVnaW5zW109YzpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIdWF3ZWkgRmFzdEFwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHBsdWdpbi10cmFuc2Zvcm0tbW9kdWxlcy1jb21tb25qcyZwbHVnaW5zW109YzpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIdWF3ZWkgRmFzdEFwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcanN4LWxvYWRlci5qcyZjb21tZW50cz1mYWxzZSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBGYXN0QXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi9pbmRleC51eFwiKVxuXG4kYXBwX2RlZmluZSQoJ0BhcHAtY29tcG9uZW50L21pbmUnLCBbXSwgZnVuY3Rpb24oJGFwcF9yZXF1aXJlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9tb2R1bGUkKXtcbiAgICAgJGFwcF9zY3JpcHQkKCRhcHBfbW9kdWxlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9yZXF1aXJlJClcbiAgICAgaWYgKCRhcHBfZXhwb3J0cyQuX19lc01vZHVsZSAmJiAkYXBwX2V4cG9ydHMkLmRlZmF1bHQpIHtcbiAgICAgICAgICAgICRhcHBfbW9kdWxlJC5leHBvcnRzID0gJGFwcF9leHBvcnRzJC5kZWZhdWx0XG4gICAgICAgIH1cbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMudGVtcGxhdGUgPSAkYXBwX3RlbXBsYXRlJFxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy5zdHlsZSA9ICRhcHBfc3R5bGUkXG59KVxuIiwidmFyICRhcHBfdGVtcGxhdGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgRmFzdEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtanNvbi1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgRmFzdEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtdGVtcGxhdGUtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9dGVtcGxhdGVzIS4vdXNlcl9jYXJkLnV4XCIpXG52YXIgJGFwcF9zdHlsZSQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBGYXN0QXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBGYXN0QXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1zdHlsZS1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9YzpcXFxcVXNlcnNcXFxcMTEwOTZcXFxcRGVza3RvcFxcXFxTdGFja1xcXFxGYXN0QVBQXFxcXGNvbS5uanVzdC5zdGFja1xcXFxzcmNcXFxcTWluZVxcXFxjb21wb25lbnRcXFxcdXNlcl9jYXJkLnV4IS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1jOlxcXFxVc2Vyc1xcXFwxMTA5NlxcXFxEZXNrdG9wXFxcXFN0YWNrXFxcXEZhc3RBUFBcXFxcY29tLm5qdXN0LnN0YWNrXFxcXHNyY1xcXFxNaW5lXFxcXGNvbXBvbmVudFxcXFx1c2VyX2NhcmQudXghLi91c2VyX2NhcmQudXhcIilcbnZhciAkYXBwX3NjcmlwdCQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBGYXN0QXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1zY3JpcHQtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWFjY2Vzcy1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgRmFzdEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1jOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEh1YXdlaSBGYXN0QXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccHJlc2V0LWVudiZwbHVnaW5zW109YzpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIdWF3ZWkgRmFzdEFwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHBsdWdpbi10cmFuc2Zvcm0tbW9kdWxlcy1jb21tb25qcyZwbHVnaW5zW109YzpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIdWF3ZWkgRmFzdEFwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcanN4LWxvYWRlci5qcyZjb21tZW50cz1mYWxzZSEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBGYXN0QXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi91c2VyX2NhcmQudXhcIilcblxuJGFwcF9kZWZpbmUkKCdAYXBwLWNvbXBvbmVudC91c2VyX2NhcmQnLCBbXSwgZnVuY3Rpb24oJGFwcF9yZXF1aXJlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9tb2R1bGUkKXtcbiAgICAgJGFwcF9zY3JpcHQkKCRhcHBfbW9kdWxlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9yZXF1aXJlJClcbiAgICAgaWYgKCRhcHBfZXhwb3J0cyQuX19lc01vZHVsZSAmJiAkYXBwX2V4cG9ydHMkLmRlZmF1bHQpIHtcbiAgICAgICAgICAgICRhcHBfbW9kdWxlJC5leHBvcnRzID0gJGFwcF9leHBvcnRzJC5kZWZhdWx0XG4gICAgICAgIH1cbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMudGVtcGxhdGUgPSAkYXBwX3RlbXBsYXRlJFxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy5zdHlsZSA9ICRhcHBfc3R5bGUkXG59KVxuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImF0dHJcIjoge30sXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcInVzZXItY29udGFpbmVyXCJcbiAgXSxcbiAgXCJjaGlsZHJlblwiOiBbXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiY29udGVudC11cFwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJjb250ZW50LWxlZnRcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnVzZXJpbmZvcy5wb3N0ZXJpY29ufVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJpY29uXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImNvbnRlbnQtcmlnaHRcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInVzZXJjYXJkLWJvdHRvbVwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcInVzZXJjYXJkLWJvdHRvbS1pdGVtXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudXNlcmluZm9zLnBvc3RzfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJpdGVtLWtleVwiXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiUG9zdHNcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJpdGVtLW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcInVzZXJjYXJkLWJvdHRvbS1pdGVtXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogXCJjbGlja1RvRm9sbG93SW5mb1wiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnVzZXJpbmZvcy5mb2xsb3dlcnN9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcIml0ZW0ta2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJGb2xsb3dlcnNcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJpdGVtLW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcInVzZXJjYXJkLWJvdHRvbS1pdGVtXCJcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogXCJjbGlja1RvRm9sbG93SW5mb1wiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnVzZXJpbmZvcy5mb2xsb3dpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcIml0ZW0ta2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJGb2xsb3dpbmdcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJpdGVtLW1vdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImFcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwiRWRpdCBQcm9maWxlXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiYV9pdGVtXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiY29udGVudC1kb3duXCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImFcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudXNlcmluZm9zLnVzZXJuYW1lfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJ1c2VybmFtZVwiXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiYVwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy51c2VyaW5mb3MubmFtZX1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwibmFtZVwiXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiYVwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy51c2VyaW5mb3MuZW1haWx9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImVtYWlsXCJcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJhXCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnVzZXJpbmZvcy5iaW99XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImJpb1wiXG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiLnVzZXItY29udGFpbmVyXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIlxuICB9LFxuICBcIi5jb250ZW50LXVwXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjI4MHB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcImluZGljYXRvckNvbG9yXCI6IFwicmdiYSgwLDAsMCwwLjIpXCIsXG4gICAgXCJpbmRpY2F0b3JTZWxlY3RlZENvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwiLmljb25cIjoge1xuICAgIFwid2lkdGhcIjogXCIyMDBweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMjAwcHhcIixcbiAgICBcIm9iamVjdEZpdFwiOiBcImNvdmVyXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIxMDBweFwiLFxuICAgIFwiYm9yZGVyVG9wQ29sb3JcIjogXCIjZGMxNDNjXCIsXG4gICAgXCJib3JkZXJSaWdodENvbG9yXCI6IFwiI2RjMTQzY1wiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjZGMxNDNjXCIsXG4gICAgXCJib3JkZXJMZWZ0Q29sb3JcIjogXCIjZGMxNDNjXCIsXG4gICAgXCJib3JkZXJUb3BXaWR0aFwiOiBcIjVweFwiLFxuICAgIFwiYm9yZGVyUmlnaHRXaWR0aFwiOiBcIjVweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCI1cHhcIixcbiAgICBcImJvcmRlckxlZnRXaWR0aFwiOiBcIjVweFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNDBweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCI0MHB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIwcHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI0MHB4XCJcbiAgfSxcbiAgXCIuY29udGVudC1yaWdodFwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjQzMHB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjQwcHhcIlxuICB9LFxuICBcIi51c2VyY2FyZC1ib3R0b21cIjoge1xuICAgIFwibWFyZ2luVG9wXCI6IFwiNTVweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMTBweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTAwcHhcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIudXNlcmNhcmQtYm90dG9tLWl0ZW1cIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwid2lkdGhcIjogXCIzMy4zJVwiXG4gIH0sXG4gIFwiLml0ZW0ta2V5XCI6IHtcbiAgICBcImZvbnRTaXplXCI6IFwiMzVweFwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJjb2xvclwiOiBcIiMwMDAwMDBcIixcbiAgICBcImZvbnRXZWlnaHRcIjogXCJib2xkXCJcbiAgfSxcbiAgXCIuaXRlbS1tb3VudFwiOiB7XG4gICAgXCJjb2xvclwiOiBcIiM4MDgwODBcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMjVweFwiLFxuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIuYV9pdGVtXCI6IHtcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSgwLDAsMCwwKVwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNjBweFwiLFxuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCI4LjNweFwiLFxuICAgIFwiYm9yZGVyVG9wQ29sb3JcIjogXCIjYmRiYWJhXCIsXG4gICAgXCJib3JkZXJSaWdodENvbG9yXCI6IFwiI2JkYmFiYVwiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjYmRiYWJhXCIsXG4gICAgXCJib3JkZXJMZWZ0Q29sb3JcIjogXCIjYmRiYWJhXCIsXG4gICAgXCJib3JkZXJUb3BXaWR0aFwiOiBcIjJweFwiLFxuICAgIFwiYm9yZGVyUmlnaHRXaWR0aFwiOiBcIjJweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCIycHhcIixcbiAgICBcImJvcmRlckxlZnRXaWR0aFwiOiBcIjJweFwiLFxuICAgIFwicGFkZGluZ1RvcFwiOiBcIjIwcHhcIixcbiAgICBcInBhZGRpbmdSaWdodFwiOiBcIjIwcHhcIixcbiAgICBcInBhZGRpbmdCb3R0b21cIjogXCIyMHB4XCIsXG4gICAgXCJwYWRkaW5nTGVmdFwiOiBcIjIwcHhcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzVweFwiLFxuICAgIFwiY29sb3JcIjogXCIjMDAwMDAwXCIsXG4gICAgXCJsaW5lc1wiOiAxXG4gIH0sXG4gIFwiLmNvbnRlbnQtZG93blwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1cHhcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCI0MHB4XCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcIiNGMkYyRjJcIixcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IFwiMXB4XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLnVzZXJuYW1lXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzAwMDAwMFwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcImJvbGRcIlxuICB9LFxuICBcIi5uYW1lXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzgwODA4MFwiXG4gIH0sXG4gIFwiLmVtYWlsXCI6IHtcbiAgICBcImNvbG9yXCI6IFwicmdiKDUsNSwxNTUpXCJcbiAgfSxcbiAgXCIuYmlvXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzgwODA4MFwiXG4gIH0sXG4gIFwiLmxpa2VkYXRhXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzAwMDAwMFwiXG4gIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgJGFwcF9yZXF1aXJlJCl7XCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IHZvaWQgMDtcblxudmFyIF9zeXN0ZW0gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KCRhcHBfcmVxdWlyZSQoXCJAYXBwLW1vZHVsZS9zeXN0ZW0ucm91dGVyXCIpKTtcblxudmFyIF9zeXN0ZW0yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdCgkYXBwX3JlcXVpcmUkKFwiQGFwcC1tb2R1bGUvc3lzdGVtLnByb21wdFwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG52YXIgX2RlZmF1bHQgPSB7XG4gIGRhdGE6IHtcbiAgICBwcm9wczogWyd1c2VyaW5mb3MnXVxuICB9LFxuICBwcmVzczogZnVuY3Rpb24gcHJlc3MoaXRlbSkge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJvbiBwcmVzcyBldmVudCBwYXJhbSA6IFwiICsgaXRlbSk7XG4gIH0sXG4gIGxpa2U6IGZ1bmN0aW9uIGxpa2UoKSB7XG4gICAgdGhpcy5saWtlZCA9ICF0aGlzLmxpa2VkO1xuXG4gICAgX3N5c3RlbTJbXCJkZWZhdWx0XCJdLnNob3dUb2FzdCh7XG4gICAgICBtZXNzYWdlOiB0aGlzLmxpa2VkID09PSB0cnVlID8gJ2xpa2UnIDogJ2Rpc2xpa2UnLFxuICAgICAgaW1hZ2U6ICcvQ29tbW9uL2xvZ28ucG5nJ1xuICAgIH0pO1xuICB9LFxuICByb3V0ZVBhZ2U6IGZ1bmN0aW9uIHJvdXRlUGFnZSh1cmwpIHt9LFxuICBjbGlja1RvRm9sbG93SW5mbzogZnVuY3Rpb24gY2xpY2tUb0ZvbGxvd0luZm8oKSB7XG4gICAgX3N5c3RlbVtcImRlZmF1bHRcIl0ucHVzaCh7XG4gICAgICB1cmk6ICcvRm9sbG93SW5mbydcbiAgICB9KTtcbiAgfVxufTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gX2RlZmF1bHQ7XG52YXIgbW9kdWxlT3duID0gZXhwb3J0cy5kZWZhdWx0IHx8IG1vZHVsZS5leHBvcnRzO1xudmFyIGFjY2Vzc29ycyA9IFsncHVibGljJywgJ3Byb3RlY3RlZCcsICdwcml2YXRlJ107XG5pZiAobW9kdWxlT3duLmRhdGEgJiYgYWNjZXNzb3JzLnNvbWUoZnVuY3Rpb24gKGFjYykge1xuICAgIHJldHVybiBtb2R1bGVPd25bYWNjXTtcbiAgfSkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdGb3IgVk0gb2JqZWN0cywgYXR0cmlidXRlIGRhdGEgbXVzdCBub3QgY29leGlzdCB3aXRoIHB1YmxpYywgcHJvdGVjdGVkLCBvciBwcml2YXRlLiBQbGVhc2UgcmVwbGFjZSBkYXRhIHdpdGggcHVibGljLicpO1xufSBlbHNlIGlmICghbW9kdWxlT3duLmRhdGEpIHtcbiAgbW9kdWxlT3duLmRhdGEgPSB7fTtcbiAgbW9kdWxlT3duLl9kZXNjcmlwdG9yID0ge307XG4gIGFjY2Vzc29ycy5mb3JFYWNoKGZ1bmN0aW9uKGFjYykge1xuICAgIHZhciBhY2NUeXBlID0gdHlwZW9mIG1vZHVsZU93blthY2NdO1xuICAgIGlmIChhY2NUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgbW9kdWxlT3duLmRhdGEgPSBPYmplY3QuYXNzaWduKG1vZHVsZU93bi5kYXRhLCBtb2R1bGVPd25bYWNjXSk7XG4gICAgICBmb3IgKHZhciBuYW1lIGluIG1vZHVsZU93blthY2NdKSB7XG4gICAgICAgIG1vZHVsZU93bi5fZGVzY3JpcHRvcltuYW1lXSA9IHthY2Nlc3MgOiBhY2N9O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYWNjVHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc29sZS53YXJuKCdGb3IgVk0gb2JqZWN0cywgYXR0cmlidXRlICcgKyBhY2MgKyAnIHZhbHVlIG11c3Qgbm90IGJlIGEgZnVuY3Rpb24uIENoYW5nZSB0aGUgdmFsdWUgdG8gYW4gb2JqZWN0LicpO1xuICAgIH1cbiAgfSk7XG59fSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJhdHRyXCI6IHt9LFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJjb250YWluZXJcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ1c2VyX2NhcmRcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwidXNlcmluZm9zXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy51c2VyaW5mb3N9XG4gICAgICB9XG4gICAgfVxuICBdXG59IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiLmNvbnRhaW5lclwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCJcbiAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCAkYXBwX3JlcXVpcmUkKXtcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xudmFyIF9kZWZhdWx0ID0ge1xuICBkYXRhOiB7XG4gICAgdXNlcmluZm9zOiB7XG4gICAgICB1c2VybmFtZTogJ2x1Y2FzemhhbycsXG4gICAgICBuYW1lOiAnbGlhbmd6aGFvJyxcbiAgICAgIHBvc3Rlcmljb246IFwiaHR0cHM6Ly9sdWNhc3poYW8tMTI1ODkwNjMzNC5jb3MuYXAtZ3Vhbmd6aG91Lm15cWNsb3VkLmNvbS9zdGFjay8zMTYyNjY2OC5wbmdcIixcbiAgICAgIGVtYWlsOiAnaHVidWtpemhhb0BnbWFpbC5jb20nLFxuICAgICAgZ2VuZGVyOiAnbWFsZScsXG4gICAgICBiaW86ICfpuabpuYnmnaXov4flkLTmsZ/msLTvvIzmsZ/kuIrmtLLkvKDpuabpuYnlkI3jgILpuabpuYnopb/po57pmYflsbHljrvvvIzoirPmtLLkuYvmoJHkvZXpnZLpnZLjgILng5/lvIDlhbDlj7bpppnpo47mmpbvvIzlsrjlpLnmoYPoirHplKbmtarnlJ/jgILov4HlrqLmraTml7blvpLmnoHnm67vvIzplb/mtLLlraTmnIjlkJHosIHmmI7jgIInLFxuICAgICAgZm9sbG93ZXJzOiAnMWsnLFxuICAgICAgZm9sbG93aW5nOiAnMjAwJyxcbiAgICAgIHBvc3RzOiAnNTknXG4gICAgfVxuICB9LFxuICBvbkluaXQ6IGZ1bmN0aW9uIG9uSW5pdCgpIHt9XG59O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbnZhciBtb2R1bGVPd24gPSBleHBvcnRzLmRlZmF1bHQgfHwgbW9kdWxlLmV4cG9ydHM7XG52YXIgYWNjZXNzb3JzID0gWydwdWJsaWMnLCAncHJvdGVjdGVkJywgJ3ByaXZhdGUnXTtcbmlmIChtb2R1bGVPd24uZGF0YSAmJiBhY2Nlc3NvcnMuc29tZShmdW5jdGlvbiAoYWNjKSB7XG4gICAgcmV0dXJuIG1vZHVsZU93blthY2NdO1xuICB9KSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgZGF0YSBtdXN0IG5vdCBjb2V4aXN0IHdpdGggcHVibGljLCBwcm90ZWN0ZWQsIG9yIHByaXZhdGUuIFBsZWFzZSByZXBsYWNlIGRhdGEgd2l0aCBwdWJsaWMuJyk7XG59IGVsc2UgaWYgKCFtb2R1bGVPd24uZGF0YSkge1xuICBtb2R1bGVPd24uZGF0YSA9IHt9O1xuICBtb2R1bGVPd24uX2Rlc2NyaXB0b3IgPSB7fTtcbiAgYWNjZXNzb3JzLmZvckVhY2goZnVuY3Rpb24oYWNjKSB7XG4gICAgdmFyIGFjY1R5cGUgPSB0eXBlb2YgbW9kdWxlT3duW2FjY107XG4gICAgaWYgKGFjY1R5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBtb2R1bGVPd24uZGF0YSA9IE9iamVjdC5hc3NpZ24obW9kdWxlT3duLmRhdGEsIG1vZHVsZU93blthY2NdKTtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gbW9kdWxlT3duW2FjY10pIHtcbiAgICAgICAgbW9kdWxlT3duLl9kZXNjcmlwdG9yW25hbWVdID0ge2FjY2VzcyA6IGFjY307XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhY2NUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgJyArIGFjYyArICcgdmFsdWUgbXVzdCBub3QgYmUgYSBmdW5jdGlvbi4gQ2hhbmdlIHRoZSB2YWx1ZSB0byBhbiBvYmplY3QuJyk7XG4gICAgfVxuICB9KTtcbn19IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImF0dHJcIjoge30sXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcImNvbnRhaW5lclwiXG4gIF0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcInRhYnNcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwiaW5kZXhcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmlkeH1cbiAgICAgIH0sXG4gICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgIFwiY2hhbmdlXCI6IFwic3dpdGNoVGFiXCJcbiAgICAgIH0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRhYi1jb250ZW50XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJjb21tdW5pdHlcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJkaXNjb3ZlclwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge31cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJzcmNcIjogXCIvQ29tbW9uL2xvZ28ucG5nXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwicmFua1wiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge31cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcIm1pbmVcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHt9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGFiLWJhclwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwidGFiLWJhci1pdGVtXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJyZXBlYXRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnBhZ2VzfSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwic3JjXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaWR4PT09dGhpcy5pZHg/dGhpcy4kaXRlbS5pY29uX2Nob2ljZTp0aGlzLiRpdGVtLmljb259XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgICAgICBcImljb25cIlxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIi5jb250YWluZXJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduQ29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwiLnRhYi1iYXItaXRlbVwiOiB7XG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZjJmMmYyXCIsXG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjVweFwiLFxuICAgIFwid2lkdGhcIjogXCIyMDBweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMTAwcHhcIlxuICB9LFxuICBcIi5pY29uXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNDhweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNDhweFwiLFxuICAgIFwib2JqZWN0Rml0XCI6IFwiY29udGFpblwiXG4gIH1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgJGFwcF9yZXF1aXJlJCl7XCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBfc3lzdGVtID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdCgkYXBwX3JlcXVpcmUkKFwiQGFwcC1tb2R1bGUvc3lzdGVtLnJvdXRlclwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZGF0YToge1xuICAgIGlkeDogMCxcbiAgICBwYWdlczogW3tcbiAgICAgIGljb246ICcuL2ltZy9jb21tdW5pdHkucG5nJyxcbiAgICAgIGljb25fY2hvaWNlOiAnLi9pbWcvc2VsZWN0ZWQtY29tbXVuaXR5LnBuZycsXG4gICAgICB0aXRsZTogJ1N0YWNr56S+5Yy6J1xuICAgIH0sIHtcbiAgICAgIGljb246ICcuL2ltZy9kaXNjb3Zlci5wbmcnLFxuICAgICAgaWNvbl9jaG9pY2U6ICcuL2ltZy9zZWxlY3RlZC1kaXNjb3Zlci5wbmcnLFxuICAgICAgdGl0bGU6ICflj5HnjrAnXG4gICAgfSwge1xuICAgICAgaWNvbjogJy4vaW1nL25ldy5wbmcnLFxuICAgICAgaWNvbl9jaG9pY2U6ICcuL2ltZy9zZWxlY3RlZC1uZXcucG5nJyxcbiAgICAgIHRpdGxlOiAn5Y+R5biDJ1xuICAgIH0sIHtcbiAgICAgIGljb246ICcuL2ltZy9yYW5rLnBuZycsXG4gICAgICBpY29uX2Nob2ljZTogJy4vaW1nL3NlbGVjdGVkLXJhbmsucG5nJyxcbiAgICAgIHRpdGxlOiAn5o6S6KGM5qacJ1xuICAgIH0sIHtcbiAgICAgIGljb246ICcuL2ltZy9taW5lLnBuZycsXG4gICAgICBpY29uX2Nob2ljZTogJy4vaW1nL3NlbGVjdGVkLW1pbmUucG5nJyxcbiAgICAgIHRpdGxlOiAn5Liq5Lq6J1xuICAgIH1dXG4gIH0sXG4gIHN3aXRjaFRhYjogZnVuY3Rpb24gc3dpdGNoVGFiKGUpIHtcbiAgICB0aGlzLmlkeCA9IGUuaW5kZXg7XG4gICAgdGhpcy4kcGFnZS5zZXRUaXRsZUJhcih7XG4gICAgICB0ZXh0OiB0aGlzLnBhZ2VzW3RoaXMuaWR4XS50aXRsZVxuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuaWR4ID09PSAyKSB7XG4gICAgICBfc3lzdGVtW1wiZGVmYXVsdFwiXS5wdXNoKHtcbiAgICAgICAgdXJpOiBcIi9QaG90b1wiXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn07XG52YXIgbW9kdWxlT3duID0gZXhwb3J0cy5kZWZhdWx0IHx8IG1vZHVsZS5leHBvcnRzO1xudmFyIGFjY2Vzc29ycyA9IFsncHVibGljJywgJ3Byb3RlY3RlZCcsICdwcml2YXRlJ107XG5pZiAobW9kdWxlT3duLmRhdGEgJiYgYWNjZXNzb3JzLnNvbWUoZnVuY3Rpb24gKGFjYykge1xuICAgIHJldHVybiBtb2R1bGVPd25bYWNjXTtcbiAgfSkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdGb3IgVk0gb2JqZWN0cywgYXR0cmlidXRlIGRhdGEgbXVzdCBub3QgY29leGlzdCB3aXRoIHB1YmxpYywgcHJvdGVjdGVkLCBvciBwcml2YXRlLiBQbGVhc2UgcmVwbGFjZSBkYXRhIHdpdGggcHVibGljLicpO1xufSBlbHNlIGlmICghbW9kdWxlT3duLmRhdGEpIHtcbiAgbW9kdWxlT3duLmRhdGEgPSB7fTtcbiAgbW9kdWxlT3duLl9kZXNjcmlwdG9yID0ge307XG4gIGFjY2Vzc29ycy5mb3JFYWNoKGZ1bmN0aW9uKGFjYykge1xuICAgIHZhciBhY2NUeXBlID0gdHlwZW9mIG1vZHVsZU93blthY2NdO1xuICAgIGlmIChhY2NUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgbW9kdWxlT3duLmRhdGEgPSBPYmplY3QuYXNzaWduKG1vZHVsZU93bi5kYXRhLCBtb2R1bGVPd25bYWNjXSk7XG4gICAgICBmb3IgKHZhciBuYW1lIGluIG1vZHVsZU93blthY2NdKSB7XG4gICAgICAgIG1vZHVsZU93bi5fZGVzY3JpcHRvcltuYW1lXSA9IHthY2Nlc3MgOiBhY2N9O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYWNjVHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc29sZS53YXJuKCdGb3IgVk0gb2JqZWN0cywgYXR0cmlidXRlICcgKyBhY2MgKyAnIHZhbHVlIG11c3Qgbm90IGJlIGEgZnVuY3Rpb24uIENoYW5nZSB0aGUgdmFsdWUgdG8gYW4gb2JqZWN0LicpO1xuICAgIH1cbiAgfSk7XG59fSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN4TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDckZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzlGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDakZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzdLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN2RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM5SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzlFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzlGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDOURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNsTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDdkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QSIsInNvdXJjZVJvb3QiOiIifQ==