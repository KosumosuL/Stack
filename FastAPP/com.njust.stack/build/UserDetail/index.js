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
/******/ 	return __webpack_require__(__webpack_require__.s = 138);
/******/ })
/************************************************************************/
/******/ ({

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(139)
__webpack_require__(143)
var $app_template$ = __webpack_require__(147)
var $app_style$ = __webpack_require__(148)
var $app_script$ = __webpack_require__(149)

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

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(140)
var $app_style$ = __webpack_require__(141)
var $app_script$ = __webpack_require__(142)

$app_define$('@app-component/user_card', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ 140:
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
                "value": "Follow"
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

/***/ 141:
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

/***/ 142:
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

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(144)
var $app_style$ = __webpack_require__(145)
var $app_script$ = __webpack_require__(146)

$app_define$('@app-component/component-post', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})


/***/ }),

/***/ 144:
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

/***/ 145:
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

/***/ 146:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

var _system = _interopRequireDefault($app_require$("@app-module/system.media"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.prompt"));

var _system3 = _interopRequireDefault($app_require$("@app-module/system.router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = {
  props: ['swiperdata', 'likedata', 'poster', 'pid', 'postercomment', 'commentnumber', 'postericon', 'posttime', 'liked'],
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

/***/ 147:
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
            "type": "card"
          },
          "children": [
            {
              "type": "user_card",
              "attr": {
                "userinfos": function () {return this.userinfos}
              }
            }
          ]
        },
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

/***/ 148:
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "flexDirection": "column",
    "height": "50%"
  },
  ".refresh": {
    "flexDirection": "column",
    "backgroundColor": "#ffffff",
    "progressColor": "#0faeff"
  }
}

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

var _system = _interopRequireDefault($app_require$("@app-module/system.fetch"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.prompt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = {
  data: {
    phonenum: '',
    isRefreshing: false,
    isLoading: false,
    userinfos: [],
    postData: []
  },
  refreshPost: function refreshPost(that) {
    return function (data) {
      that.postData = data.data.message.map(that.mapPost);
      that.isRefreshing = false;
      clearTimeout(that.timeout);
    };
  },
  refreshUser: function refreshUser(that) {
    return function (data) {
      that.userinfos = data.data.message.map(that.mapUser)[0];
      that.isRefreshing = false;
      clearTimeout(that.timeout1);
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
    var promise = this.post("http://114.116.248.233:12345/timeline/get_posts", {
      "phonenum": "18260071012",
      "tar_phonenum": that.phonenum,
      "time": "2019-09-08 15:24:07"
    });
    this.timeout = setTimeout(function () {
      that.isRefreshing = false;

      _system2["default"].showToast({
        message: "请求超时",
        image: '/Common/logo.png'
      });
    }, 5000);
    promise.then(this.refreshPost(this), this.showError(this));
    var promise1 = this.post("http://114.116.248.233:12345/timeline/get_posts", {
      "phonenum": "18260071012",
      "tar_phonenum": "18260071012",
      "time": "2019-09-08 15:24:07"
    });
    this.timeout1 = setTimeout(function () {
      that.isRefreshing = false;

      _system2["default"].showToast({
        message: "请求超时",
        image: '/Common/logo.png'
      });
    }, 5000);
    promise1.then(this.refreshUser(this), this.showError(this));
  },
  scrollBottom: function scrollBottom() {
    var that = this;
    this.isLoading = true;
    var promise = this.post("http://114.116.248.233:12345/timeline/get_posts", {
      "phonenum": "18260071012",
      "tar_phonenum": that.phonenum,
      "time": "2019-09-08 15:24:07"
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
      poster: item.user.username,
      pid: item.pid,
      postercomment: item.selfcomment,
      commentnumber: item.comments,
      postericon: item.user.photo,
      posttime: item.ptime,
      liked: item.isliked
    };
  },
  mapUser: function mapUser(item) {
    return {
      username: item.username,
      name: item.name,
      postericon: item.photo,
      email: item.email,
      gender: item.gender,
      bio: item.bio,
      followers: item.followers,
      following: item.following,
      posts: item.posts
    };
  },
  onInit: function onInit() {
    var promise = this.post("http://114.116.248.233:12345/timeline/get_posts", {
      "phonenum": "18260071012",
      "tar_phonenum": this.phonenum,
      "time": "2019-09-08 15:24:07"
    });
    this.timeout = setTimeout(function () {
      _system2["default"].showToast({
        message: "请求超时",
        image: '/Common/logo.png'
      });
    }, 5000);
    promise.then(this.refreshPost(this), this.showError(this));
    var promise1 = this.post("http://114.116.248.233:12345/user/get_user_info", {
      "phonenum": this.phonenum
    });
    this.timeout1 = setTimeout(function () {
      _system2["default"].showToast({
        message: "请求超时",
        image: '/Common/logo.png'
      });
    }, 5000);
    promise1.then(this.refreshUser(this), this.showError(this));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRcXFVzZXJEZXRhaWxcXGluZGV4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL3NyYy9Vc2VyRGV0YWlsL2luZGV4LnV4Iiwid2VicGFjazovLy8uL3NyYy9Vc2VyRGV0YWlsL2NvbXBvbmVudC91c2VyX2NhcmQudXgiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXJEZXRhaWwvY29tcG9uZW50L3VzZXJfY2FyZC51eD9jNTJhIiwid2VicGFjazovLy8uL3NyYy9Vc2VyRGV0YWlsL2NvbXBvbmVudC91c2VyX2NhcmQudXg/YjA1NSIsIndlYnBhY2s6Ly8vLi9zcmMvVXNlckRldGFpbC9jb21wb25lbnQvdXNlcl9jYXJkLnV4P2ZiNmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXJEZXRhaWwvY29tcG9uZW50L2NvbXBvbmVudC1wb3N0LnV4Iiwid2VicGFjazovLy8uL3NyYy9Vc2VyRGV0YWlsL2NvbXBvbmVudC9jb21wb25lbnQtcG9zdC51eD9kMzVkIiwid2VicGFjazovLy8uL3NyYy9Vc2VyRGV0YWlsL2NvbXBvbmVudC9jb21wb25lbnQtcG9zdC51eD9mNWE3Iiwid2VicGFjazovLy8uL3NyYy9Vc2VyRGV0YWlsL2NvbXBvbmVudC9jb21wb25lbnQtcG9zdC51eD81YTA4Iiwid2VicGFjazovLy8uL3NyYy9Vc2VyRGV0YWlsL2luZGV4LnV4PzRlNGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL1VzZXJEZXRhaWwvaW5kZXgudXg/MTVmNSIsIndlYnBhY2s6Ly8vLi9zcmMvVXNlckRldGFpbC9pbmRleC51eD8yODA0Il0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxMzgpO1xuIiwicmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2xvYWRlci5qcz90eXBlPWNvbXBvbmVudCEuL2NvbXBvbmVudC91c2VyX2NhcmQudXg/bmFtZT11c2VyX2NhcmRcIilcbnJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9sb2FkZXIuanM/dHlwZT1jb21wb25lbnQhLi9jb21wb25lbnQvY29tcG9uZW50LXBvc3QudXg/bmFtZT1jb21wb25lbnQtcG9zdFwiKVxudmFyICRhcHBfdGVtcGxhdGUkID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS10ZW1wbGF0ZS1sb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9dGVtcGxhdGVzIS4vaW5kZXgudXhcIilcbnZhciAkYXBwX3N0eWxlJCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc3R5bGUtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPWM6XFxcXFVzZXJzXFxcXDExMDk2XFxcXERlc2t0b3BcXFxcU3RhY2tcXFxcRmFzdEFQUFxcXFxjb20ubmp1c3Quc3RhY2tcXFxcc3JjXFxcXFVzZXJEZXRhaWxcXFxcaW5kZXgudXghLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1jOlxcXFxVc2Vyc1xcXFwxMTA5NlxcXFxEZXNrdG9wXFxcXFN0YWNrXFxcXEZhc3RBUFBcXFxcY29tLm5qdXN0LnN0YWNrXFxcXHNyY1xcXFxVc2VyRGV0YWlsXFxcXGluZGV4LnV4IS4vaW5kZXgudXhcIilcbnZhciAkYXBwX3NjcmlwdCQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc2NyaXB0LWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtYWNjZXNzLWxvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1jOlxcXFxVc2Vyc1xcXFwxMTA5NlxcXFxEZXNrdG9wXFxcXFN0YWNrXFxcXEZhc3RBUFBcXFxcY29tLm5qdXN0LnN0YWNrXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccHJlc2V0LWVudiZwbHVnaW5zW109YzpcXFxcVXNlcnNcXFxcMTEwOTZcXFxcRGVza3RvcFxcXFxTdGFja1xcXFxGYXN0QVBQXFxcXGNvbS5uanVzdC5zdGFja1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHBsdWdpbi10cmFuc2Zvcm0tbW9kdWxlcy1jb21tb25qcyZwbHVnaW5zW109YzpcXFxcVXNlcnNcXFxcMTEwOTZcXFxcRGVza3RvcFxcXFxTdGFja1xcXFxGYXN0QVBQXFxcXGNvbS5uanVzdC5zdGFja1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcanN4LWxvYWRlci5qcyZjb21tZW50cz1mYWxzZSEuLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vaW5kZXgudXhcIilcblxuJGFwcF9kZWZpbmUkKCdAYXBwLWNvbXBvbmVudC9pbmRleCcsIFtdLCBmdW5jdGlvbigkYXBwX3JlcXVpcmUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX21vZHVsZSQpe1xuICAgICAkYXBwX3NjcmlwdCQoJGFwcF9tb2R1bGUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX3JlcXVpcmUkKVxuICAgICBpZiAoJGFwcF9leHBvcnRzJC5fX2VzTW9kdWxlICYmICRhcHBfZXhwb3J0cyQuZGVmYXVsdCkge1xuICAgICAgICAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMgPSAkYXBwX2V4cG9ydHMkLmRlZmF1bHRcbiAgICAgICAgfVxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy50ZW1wbGF0ZSA9ICRhcHBfdGVtcGxhdGUkXG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnN0eWxlID0gJGFwcF9zdHlsZSRcbn0pXG5cbiRhcHBfYm9vdHN0cmFwJCgnQGFwcC1jb21wb25lbnQvaW5kZXgnLHsgcGFja2FnZXJOYW1lOidmYS10b29sa2l0JywgcGFja2FnZXJWZXJzaW9uOiAnMi4wLjAtU3RhYmxlLjMwMSd9KSIsInZhciAkYXBwX3RlbXBsYXRlJCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtdGVtcGxhdGUtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXRlbXBsYXRlcyEuL3VzZXJfY2FyZC51eFwiKVxudmFyICRhcHBfc3R5bGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1zdHlsZS1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9YzpcXFxcVXNlcnNcXFxcMTEwOTZcXFxcRGVza3RvcFxcXFxTdGFja1xcXFxGYXN0QVBQXFxcXGNvbS5uanVzdC5zdGFja1xcXFxzcmNcXFxcVXNlckRldGFpbFxcXFxjb21wb25lbnRcXFxcdXNlcl9jYXJkLnV4IS4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9YzpcXFxcVXNlcnNcXFxcMTEwOTZcXFxcRGVza3RvcFxcXFxTdGFja1xcXFxGYXN0QVBQXFxcXGNvbS5uanVzdC5zdGFja1xcXFxzcmNcXFxcVXNlckRldGFpbFxcXFxjb21wb25lbnRcXFxcdXNlcl9jYXJkLnV4IS4vdXNlcl9jYXJkLnV4XCIpXG52YXIgJGFwcF9zY3JpcHQkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXNjcmlwdC1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWFjY2Vzcy1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlcj9wcmVzZXRzW109YzpcXFxcVXNlcnNcXFxcMTEwOTZcXFxcRGVza3RvcFxcXFxTdGFja1xcXFxGYXN0QVBQXFxcXGNvbS5uanVzdC5zdGFja1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHByZXNldC1lbnYmcGx1Z2luc1tdPWM6XFxcXFVzZXJzXFxcXDExMDk2XFxcXERlc2t0b3BcXFxcU3RhY2tcXFxcRmFzdEFQUFxcXFxjb20ubmp1c3Quc3RhY2tcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwbHVnaW4tdHJhbnNmb3JtLW1vZHVsZXMtY29tbW9uanMmcGx1Z2luc1tdPWM6XFxcXFVzZXJzXFxcXDExMDk2XFxcXERlc2t0b3BcXFxcU3RhY2tcXFxcRmFzdEFQUFxcXFxjb20ubmp1c3Quc3RhY2tcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGpzeC1sb2FkZXIuanMmY29tbWVudHM9ZmFsc2UhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c2NyaXB0cyEuL3VzZXJfY2FyZC51eFwiKVxuXG4kYXBwX2RlZmluZSQoJ0BhcHAtY29tcG9uZW50L3VzZXJfY2FyZCcsIFtdLCBmdW5jdGlvbigkYXBwX3JlcXVpcmUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX21vZHVsZSQpe1xuICAgICAkYXBwX3NjcmlwdCQoJGFwcF9tb2R1bGUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX3JlcXVpcmUkKVxuICAgICBpZiAoJGFwcF9leHBvcnRzJC5fX2VzTW9kdWxlICYmICRhcHBfZXhwb3J0cyQuZGVmYXVsdCkge1xuICAgICAgICAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMgPSAkYXBwX2V4cG9ydHMkLmRlZmF1bHRcbiAgICAgICAgfVxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy50ZW1wbGF0ZSA9ICRhcHBfdGVtcGxhdGUkXG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnN0eWxlID0gJGFwcF9zdHlsZSRcbn0pXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gIFwiYXR0clwiOiB7fSxcbiAgXCJjbGFzc0xpc3RcIjogW1xuICAgIFwidXNlci1jb250YWluZXJcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJjb250ZW50LXVwXCJcbiAgICAgIF0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImNvbnRlbnQtbGVmdFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudXNlcmluZm9zLnBvc3Rlcmljb259XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImljb25cIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiY29udGVudC1yaWdodFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwidXNlcmNhcmQtYm90dG9tXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwidXNlcmNhcmQtYm90dG9tLWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy51c2VyaW5mb3MucG9zdHN9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcIml0ZW0ta2V5XCJcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJQb3N0c1wiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcIml0ZW0tbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwidXNlcmNhcmQtYm90dG9tLWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJjbGlja1wiOiBcImNsaWNrVG9Gb2xsb3dJbmZvXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudXNlcmluZm9zLmZvbGxvd2Vyc31cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaXRlbS1rZXlcIlxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIkZvbGxvd2Vyc1wiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcIml0ZW0tbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwidXNlcmNhcmQtYm90dG9tLWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJjbGlja1wiOiBcImNsaWNrVG9Gb2xsb3dJbmZvXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudXNlcmluZm9zLmZvbGxvd2luZ31cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaXRlbS1rZXlcIlxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIkZvbGxvd2luZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcIml0ZW0tbW91bnRcIlxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYVwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCJGb2xsb3dcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJhX2l0ZW1cIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJjb250ZW50LWRvd25cIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiYVwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy51c2VyaW5mb3MudXNlcm5hbWV9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcInVzZXJuYW1lXCJcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJhXCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnVzZXJpbmZvcy5uYW1lfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJuYW1lXCJcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJhXCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnVzZXJpbmZvcy5lbWFpbH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiZW1haWxcIlxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImFcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudXNlcmluZm9zLmJpb31cbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiYmlvXCJcbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCIudXNlci1jb250YWluZXJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiXG4gIH0sXG4gIFwiLmNvbnRlbnQtdXBcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiMjgwcHhcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwiaW5kaWNhdG9yQ29sb3JcIjogXCJyZ2JhKDAsMCwwLDAuMilcIixcbiAgICBcImluZGljYXRvclNlbGVjdGVkQ29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCIuaWNvblwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjIwMHB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIyMDBweFwiLFxuICAgIFwib2JqZWN0Rml0XCI6IFwiY292ZXJcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjEwMHB4XCIsXG4gICAgXCJib3JkZXJUb3BDb2xvclwiOiBcIiNkYzE0M2NcIixcbiAgICBcImJvcmRlclJpZ2h0Q29sb3JcIjogXCIjZGMxNDNjXCIsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcIiNkYzE0M2NcIixcbiAgICBcImJvcmRlckxlZnRDb2xvclwiOiBcIiNkYzE0M2NcIixcbiAgICBcImJvcmRlclRvcFdpZHRoXCI6IFwiNXB4XCIsXG4gICAgXCJib3JkZXJSaWdodFdpZHRoXCI6IFwiNXB4XCIsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiBcIjVweFwiLFxuICAgIFwiYm9yZGVyTGVmdFdpZHRoXCI6IFwiNXB4XCIsXG4gICAgXCJtYXJnaW5Ub3BcIjogXCI0MHB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjQwcHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjBweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjQwcHhcIlxuICB9LFxuICBcIi5jb250ZW50LXJpZ2h0XCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcIndpZHRoXCI6IFwiNDMwcHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiNDBweFwiXG4gIH0sXG4gIFwiLnVzZXJjYXJkLWJvdHRvbVwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1NXB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxMHB4XCIsXG4gICAgXCJoZWlnaHRcIjogXCIxMDBweFwiLFxuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBcImFsaWduSXRlbXNcIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi51c2VyY2FyZC1ib3R0b20taXRlbVwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgXCJ3aWR0aFwiOiBcIjMzLjMlXCJcbiAgfSxcbiAgXCIuaXRlbS1rZXlcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzNXB4XCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICBcImNvbG9yXCI6IFwiIzAwMDAwMFwiLFxuICAgIFwiZm9udFdlaWdodFwiOiBcImJvbGRcIlxuICB9LFxuICBcIi5pdGVtLW1vdW50XCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzgwODA4MFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIyNXB4XCIsXG4gICAgXCJ0ZXh0QWxpZ25cIjogXCJjZW50ZXJcIlxuICB9LFxuICBcIi5hX2l0ZW1cIjoge1xuICAgIFwidGV4dEFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCJyZ2JhKDAsMCwwLDApXCIsXG4gICAgXCJoZWlnaHRcIjogXCI2MHB4XCIsXG4gICAgXCJ3aWR0aFwiOiBcIjEwMCVcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjguM3B4XCIsXG4gICAgXCJib3JkZXJUb3BDb2xvclwiOiBcIiNiZGJhYmFcIixcbiAgICBcImJvcmRlclJpZ2h0Q29sb3JcIjogXCIjYmRiYWJhXCIsXG4gICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBcIiNiZGJhYmFcIixcbiAgICBcImJvcmRlckxlZnRDb2xvclwiOiBcIiNiZGJhYmFcIixcbiAgICBcImJvcmRlclRvcFdpZHRoXCI6IFwiMnB4XCIsXG4gICAgXCJib3JkZXJSaWdodFdpZHRoXCI6IFwiMnB4XCIsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiBcIjJweFwiLFxuICAgIFwiYm9yZGVyTGVmdFdpZHRoXCI6IFwiMnB4XCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjBweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjIwcHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjBweFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzNXB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiMwMDAwMDBcIixcbiAgICBcImxpbmVzXCI6IDFcbiAgfSxcbiAgXCIuY29udGVudC1kb3duXCI6IHtcbiAgICBcIm1hcmdpblRvcFwiOiBcIjVweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjQwcHhcIixcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yXCI6IFwiI0YyRjJGMlwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCIxcHhcIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIudXNlcm5hbWVcIjoge1xuICAgIFwiY29sb3JcIjogXCIjMDAwMDAwXCIsXG4gICAgXCJmb250V2VpZ2h0XCI6IFwiYm9sZFwiXG4gIH0sXG4gIFwiLm5hbWVcIjoge1xuICAgIFwiY29sb3JcIjogXCIjODA4MDgwXCJcbiAgfSxcbiAgXCIuZW1haWxcIjoge1xuICAgIFwiY29sb3JcIjogXCJyZ2IoNSw1LDE1NSlcIlxuICB9LFxuICBcIi5iaW9cIjoge1xuICAgIFwiY29sb3JcIjogXCIjODA4MDgwXCJcbiAgfSxcbiAgXCIubGlrZWRhdGFcIjoge1xuICAgIFwiY29sb3JcIjogXCIjMDAwMDAwXCJcbiAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCAkYXBwX3JlcXVpcmUkKXtcInVzZSBzdHJpY3RcIjtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gdm9pZCAwO1xuXG52YXIgX3N5c3RlbSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoJGFwcF9yZXF1aXJlJChcIkBhcHAtbW9kdWxlL3N5c3RlbS5yb3V0ZXJcIikpO1xuXG52YXIgX3N5c3RlbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KCRhcHBfcmVxdWlyZSQoXCJAYXBwLW1vZHVsZS9zeXN0ZW0ucHJvbXB0XCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbnZhciBfZGVmYXVsdCA9IHtcbiAgZGF0YToge1xuICAgIHByb3BzOiBbJ3VzZXJpbmZvcyddXG4gIH0sXG4gIHByZXNzOiBmdW5jdGlvbiBwcmVzcyhpdGVtKSB7XG4gICAgY29uc29sZS5lcnJvcihcIm9uIHByZXNzIGV2ZW50IHBhcmFtIDogXCIgKyBpdGVtKTtcbiAgfSxcbiAgbGlrZTogZnVuY3Rpb24gbGlrZSgpIHtcbiAgICB0aGlzLmxpa2VkID0gIXRoaXMubGlrZWQ7XG5cbiAgICBfc3lzdGVtMltcImRlZmF1bHRcIl0uc2hvd1RvYXN0KHtcbiAgICAgIG1lc3NhZ2U6IHRoaXMubGlrZWQgPT09IHRydWUgPyAnbGlrZScgOiAnZGlzbGlrZScsXG4gICAgICBpbWFnZTogJy9Db21tb24vbG9nby5wbmcnXG4gICAgfSk7XG4gIH0sXG4gIHJvdXRlUGFnZTogZnVuY3Rpb24gcm91dGVQYWdlKHVybCkge30sXG4gIGNsaWNrVG9Gb2xsb3dJbmZvOiBmdW5jdGlvbiBjbGlja1RvRm9sbG93SW5mbygpIHtcbiAgICBfc3lzdGVtW1wiZGVmYXVsdFwiXS5wdXNoKHtcbiAgICAgIHVyaTogJy9Gb2xsb3dJbmZvJ1xuICAgIH0pO1xuICB9XG59O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBfZGVmYXVsdDtcbnZhciBtb2R1bGVPd24gPSBleHBvcnRzLmRlZmF1bHQgfHwgbW9kdWxlLmV4cG9ydHM7XG52YXIgYWNjZXNzb3JzID0gWydwdWJsaWMnLCAncHJvdGVjdGVkJywgJ3ByaXZhdGUnXTtcbmlmIChtb2R1bGVPd24uZGF0YSAmJiBhY2Nlc3NvcnMuc29tZShmdW5jdGlvbiAoYWNjKSB7XG4gICAgcmV0dXJuIG1vZHVsZU93blthY2NdO1xuICB9KSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgZGF0YSBtdXN0IG5vdCBjb2V4aXN0IHdpdGggcHVibGljLCBwcm90ZWN0ZWQsIG9yIHByaXZhdGUuIFBsZWFzZSByZXBsYWNlIGRhdGEgd2l0aCBwdWJsaWMuJyk7XG59IGVsc2UgaWYgKCFtb2R1bGVPd24uZGF0YSkge1xuICBtb2R1bGVPd24uZGF0YSA9IHt9O1xuICBtb2R1bGVPd24uX2Rlc2NyaXB0b3IgPSB7fTtcbiAgYWNjZXNzb3JzLmZvckVhY2goZnVuY3Rpb24oYWNjKSB7XG4gICAgdmFyIGFjY1R5cGUgPSB0eXBlb2YgbW9kdWxlT3duW2FjY107XG4gICAgaWYgKGFjY1R5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBtb2R1bGVPd24uZGF0YSA9IE9iamVjdC5hc3NpZ24obW9kdWxlT3duLmRhdGEsIG1vZHVsZU93blthY2NdKTtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gbW9kdWxlT3duW2FjY10pIHtcbiAgICAgICAgbW9kdWxlT3duLl9kZXNjcmlwdG9yW25hbWVdID0ge2FjY2VzcyA6IGFjY307XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhY2NUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgJyArIGFjYyArICcgdmFsdWUgbXVzdCBub3QgYmUgYSBmdW5jdGlvbi4gQ2hhbmdlIHRoZSB2YWx1ZSB0byBhbiBvYmplY3QuJyk7XG4gICAgfVxuICB9KTtcbn19IiwidmFyICRhcHBfdGVtcGxhdGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS10ZW1wbGF0ZS1sb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9dGVtcGxhdGVzIS4vY29tcG9uZW50LXBvc3QudXhcIilcbnZhciAkYXBwX3N0eWxlJCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1qc29uLWxvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc3R5bGUtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPWM6XFxcXFVzZXJzXFxcXDExMDk2XFxcXERlc2t0b3BcXFxcU3RhY2tcXFxcRmFzdEFQUFxcXFxjb20ubmp1c3Quc3RhY2tcXFxcc3JjXFxcXFVzZXJEZXRhaWxcXFxcY29tcG9uZW50XFxcXGNvbXBvbmVudC1wb3N0LnV4IS4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXN0eWxlcyZyZXNvdXJjZVBhdGg9YzpcXFxcVXNlcnNcXFxcMTEwOTZcXFxcRGVza3RvcFxcXFxTdGFja1xcXFxGYXN0QVBQXFxcXGNvbS5uanVzdC5zdGFja1xcXFxzcmNcXFxcVXNlckRldGFpbFxcXFxjb21wb25lbnRcXFxcY29tcG9uZW50LXBvc3QudXghLi9jb21wb25lbnQtcG9zdC51eFwiKVxudmFyICRhcHBfc2NyaXB0JCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1zY3JpcHQtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1hY2Nlc3MtbG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXI/cHJlc2V0c1tdPWM6XFxcXFVzZXJzXFxcXDExMDk2XFxcXERlc2t0b3BcXFxcU3RhY2tcXFxcRmFzdEFQUFxcXFxjb20ubmp1c3Quc3RhY2tcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwcmVzZXQtZW52JnBsdWdpbnNbXT1jOlxcXFxVc2Vyc1xcXFwxMTA5NlxcXFxEZXNrdG9wXFxcXFN0YWNrXFxcXEZhc3RBUFBcXFxcY29tLm5qdXN0LnN0YWNrXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccGx1Z2luLXRyYW5zZm9ybS1tb2R1bGVzLWNvbW1vbmpzJnBsdWdpbnNbXT1jOlxcXFxVc2Vyc1xcXFwxMTA5NlxcXFxEZXNrdG9wXFxcXFN0YWNrXFxcXEZhc3RBUFBcXFxcY29tLm5qdXN0LnN0YWNrXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxqc3gtbG9hZGVyLmpzJmNvbW1lbnRzPWZhbHNlIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi9jb21wb25lbnQtcG9zdC51eFwiKVxuXG4kYXBwX2RlZmluZSQoJ0BhcHAtY29tcG9uZW50L2NvbXBvbmVudC1wb3N0JywgW10sIGZ1bmN0aW9uKCRhcHBfcmVxdWlyZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfbW9kdWxlJCl7XG4gICAgICRhcHBfc2NyaXB0JCgkYXBwX21vZHVsZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfcmVxdWlyZSQpXG4gICAgIGlmICgkYXBwX2V4cG9ydHMkLl9fZXNNb2R1bGUgJiYgJGFwcF9leHBvcnRzJC5kZWZhdWx0KSB7XG4gICAgICAgICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cyA9ICRhcHBfZXhwb3J0cyQuZGVmYXVsdFxuICAgICAgICB9XG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnRlbXBsYXRlID0gJGFwcF90ZW1wbGF0ZSRcbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMuc3R5bGUgPSAkYXBwX3N0eWxlJFxufSlcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJhdHRyXCI6IHt9LFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJpdGVtLWNvbnRhaW5lclwiXG4gIF0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImhlYWRlci1jb250YWluZXJcIlxuICAgICAgXSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiaGVhZGVyLXBvc3RlclwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICBcImNsaWNrXCI6IFwidmlld1Bvc3RlclwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucG9zdGVyaWNvbn1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiaWNvblwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5wb3N0ZXJ9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImJsYWNrXCIsXG4gICAgICAgICAgICAgICAgXCJib2xkXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImhlYWRlci10aW1lXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucG9zdHRpbWV9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcInN3aXBlclwiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJhdXRvcGxheVwiOiBcInRydWVcIixcbiAgICAgICAgXCJpZFwiOiBcInN3aXBlclwiXG4gICAgICB9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInN3aXBlclwiXG4gICAgICBdLFxuICAgICAgXCJpZFwiOiBcInN3aXBlclwiLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGl0ZW0uc3JjfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJyZXBlYXRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnN3aXBlcmRhdGF9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiaW1hZ2VcIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbihldnQpe3RoaXMudmlld0ltYWdlKHRoaXMsZXZ0KX1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImxpc3QtbWFpblwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJsaXN0LW1haW4tbGVmdFwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiAodGhpcy5saWtlZGF0YSkrJ+S4qui1nid9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImJsYWNrXCIsXG4gICAgICAgICAgICAgICAgXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgXCJmb250LXNpemUtbGdcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwibGlzdC1tYWluLXJpZ2h0XCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwic3JjXCI6IFwiL0NvbW11bml0eS9pbWcvcmV0d2VldC5wbmdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJidG5cIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJjbGlja1wiOiBcInJldHdlZXRcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwic3JjXCI6IFwiL0NvbW11bml0eS9pbWcvY29tbWVudC5wbmdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJidG5cIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbihldnQpe3RoaXMuY2xpY2tUb0NvbW1lbnRzKHRoaXMucGlkLGV2dCl9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImltYWdlXCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJzcmNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmxpa2VkPT09dHJ1ZT8nL0NvbW11bml0eS9pbWcvbGlrZS5wbmcnOicvQ29tbXVuaXR5L2ltZy9kaXNsaWtlLnBuZyd9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImJ0blwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICBcImNsaWNrXCI6IFwibGlrZVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwibGluZXNcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnBvc3RlckNvbW1lbnRMaW5lc31cbiAgICAgIH0sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwicG9zdGVyLWNvbW1lbnRcIlxuICAgICAgXSxcbiAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgXCJjbGlja1wiOiBcImV4cGFuZFBvc3RlckNvbW1lbnRcIlxuICAgICAgfSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiYVwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5wb3N0ZXJ9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImJsYWNrXCIsXG4gICAgICAgICAgICBcImJvbGRcIlxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImFcIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuKAglwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiYVwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5wb3N0ZXJjb21tZW50fVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJibGFja1wiXG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICBcImF0dHJcIjoge1xuICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gJ+afpeeci+WFqOmDqCcrKHRoaXMuY29tbWVudG51bWJlcikrJ+WImeeVmeiogCd9XG4gICAgICB9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcImNvbW1lbnQtbnVtYmVyXCIsXG4gICAgICAgIFwiZ3JheVwiLFxuICAgICAgICBcImZvbnQtc2l6ZS1zbVwiXG4gICAgICBdLFxuICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKGV2dCl7dGhpcy5jbGlja1RvQ29tbWVudHModGhpcy5waWQsZXZ0KX1cbiAgICAgIH1cbiAgICB9XG4gIF1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCIuaXRlbS1jb250YWluZXJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCI0MHB4XCJcbiAgfSxcbiAgXCIuaGVhZGVyLWNvbnRhaW5lclwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCI3MnB4XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIyMHB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjIwcHhcIlxuICB9LFxuICBcIi5pY29uXCI6IHtcbiAgICBcImhlaWdodFwiOiBcIjY0cHhcIixcbiAgICBcIndpZHRoXCI6IFwiNjRweFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMzJweFwiLFxuICAgIFwiYm9yZGVyVG9wQ29sb3JcIjogXCIjZGMxNDNjXCIsXG4gICAgXCJib3JkZXJSaWdodENvbG9yXCI6IFwiI2RjMTQzY1wiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjZGMxNDNjXCIsXG4gICAgXCJib3JkZXJMZWZ0Q29sb3JcIjogXCIjZGMxNDNjXCIsXG4gICAgXCJib3JkZXJUb3BXaWR0aFwiOiBcIjJweFwiLFxuICAgIFwiYm9yZGVyUmlnaHRXaWR0aFwiOiBcIjJweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCIycHhcIixcbiAgICBcImJvcmRlckxlZnRXaWR0aFwiOiBcIjJweFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNHB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjIwcHhcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjRweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjRweFwiLFxuICAgIFwib2JqZWN0Rml0XCI6IFwiY29udGFpblwiXG4gIH0sXG4gIFwiLmhlYWRlci10aW1lXCI6IHtcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiZmxleC1lbmRcIlxuICB9LFxuICBcIi5zd2lwZXJcIjoge1xuICAgIFwiaGVpZ2h0XCI6IFwiNjg0cHhcIixcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwiaW5kaWNhdG9yQ29sb3JcIjogXCJyZ2JhKDAsMCwwLDAuMilcIixcbiAgICBcImluZGljYXRvclNlbGVjdGVkQ29sb3JcIjogXCIjZmZmZmZmXCJcbiAgfSxcbiAgXCIuaW1hZ2VcIjoge1xuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJoZWlnaHRcIjogXCIxMDAlXCIsXG4gICAgXCJvYmplY3RGaXRcIjogXCJjb3ZlclwiXG4gIH0sXG4gIFwiLmxpc3QtbWFpblwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCIxMHB4XCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIyMHB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjVweFwiXG4gIH0sXG4gIFwiLmxpc3QtbWFpbi1yaWdodFwiOiB7XG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImZsZXgtZW5kXCJcbiAgfSxcbiAgXCIuYnRuXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiNjRweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNjRweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxMHB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTBweFwiLFxuICAgIFwib2JqZWN0Rml0XCI6IFwiY29udGFpblwiXG4gIH0sXG4gIFwiLnBvc3Rlci1jb21tZW50XCI6IHtcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIyMHB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjIwcHhcIixcbiAgICBcInRleHRPdmVyZmxvd1wiOiBcImVsbGlwc2lzXCJcbiAgfSxcbiAgXCIuY29tbWVudC1udW1iZXJcIjoge1xuICAgIFwibWFyZ2luTGVmdFwiOiBcIjIwcHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMjBweFwiXG4gIH0sXG4gIFwiLmZvbnQtc2l6ZS1zbVwiOiB7XG4gICAgXCJmb250U2l6ZVwiOiBcIjI3cHhcIlxuICB9LFxuICBcIi5mb250LXNpemUtbGdcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCIzM3B4XCJcbiAgfSxcbiAgXCIuYm9sZFwiOiB7XG4gICAgXCJmb250V2VpZ2h0XCI6IFwiYm9sZFwiXG4gIH0sXG4gIFwiLmJsYWNrXCI6IHtcbiAgICBcImNvbG9yXCI6IFwiIzAwMDAwMFwiXG4gIH0sXG4gIFwiLmdyYXlcIjoge1xuICAgIFwiY29sb3JcIjogXCIjODA4MDgwXCJcbiAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCAkYXBwX3JlcXVpcmUkKXtcInVzZSBzdHJpY3RcIjtcblxudmFyIF9zeXN0ZW0gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KCRhcHBfcmVxdWlyZSQoXCJAYXBwLW1vZHVsZS9zeXN0ZW0ubWVkaWFcIikpO1xuXG52YXIgX3N5c3RlbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KCRhcHBfcmVxdWlyZSQoXCJAYXBwLW1vZHVsZS9zeXN0ZW0ucHJvbXB0XCIpKTtcblxudmFyIF9zeXN0ZW0zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdCgkYXBwX3JlcXVpcmUkKFwiQGFwcC1tb2R1bGUvc3lzdGVtLnJvdXRlclwiKSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IFwiZGVmYXVsdFwiOiBvYmogfTsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcHJvcHM6IFsnc3dpcGVyZGF0YScsICdsaWtlZGF0YScsICdwb3N0ZXInLCAncGlkJywgJ3Bvc3RlcmNvbW1lbnQnLCAnY29tbWVudG51bWJlcicsICdwb3N0ZXJpY29uJywgJ3Bvc3R0aW1lJywgJ2xpa2VkJ10sXG4gIGRhdGE6IHtcbiAgICBwb3N0ZXJDb21tZW50TGluZXM6IDJcbiAgfSxcbiAgcmV0d2VldDogZnVuY3Rpb24gcmV0d2VldCgpIHtcbiAgICBfc3lzdGVtMltcImRlZmF1bHRcIl0uc2hvd1RvYXN0KHtcbiAgICAgIG1lc3NhZ2U6ICdyZXR3ZWV0JyxcbiAgICAgIGltYWdlOiAnL0NvbW1vbi9sb2dvLnBuZydcbiAgICB9KTtcbiAgfSxcbiAgY29tbWVudDogZnVuY3Rpb24gY29tbWVudCgpIHtcbiAgICBfc3lzdGVtMltcImRlZmF1bHRcIl0uc2hvd1RvYXN0KHtcbiAgICAgIG1lc3NhZ2U6ICdjb21tZW50JyxcbiAgICAgIGltYWdlOiAnL0NvbW1vbi9sb2dvLnBuZydcbiAgICB9KTtcbiAgfSxcbiAgY2xpY2tUb0NvbW1lbnRzOiBmdW5jdGlvbiBjbGlja1RvQ29tbWVudHMocGlkKSB7XG4gICAgX3N5c3RlbTNbXCJkZWZhdWx0XCJdLnB1c2goe1xuICAgICAgdXJpOiAnL0NvbW1lbnRzJyxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBwaWQ6IHBpZFxuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBsaWtlOiBmdW5jdGlvbiBsaWtlKCkge1xuICAgIHRoaXMubGlrZWQgPSAhdGhpcy5saWtlZDtcblxuICAgIF9zeXN0ZW0yW1wiZGVmYXVsdFwiXS5zaG93VG9hc3Qoe1xuICAgICAgbWVzc2FnZTogdGhpcy5saWtlZCA9PT0gdHJ1ZSA/ICdsaWtlJyA6ICdkaXNsaWtlJyxcbiAgICAgIGltYWdlOiAnL0NvbW1vbi9sb2dvLnBuZydcbiAgICB9KTtcbiAgfSxcbiAgZXhwYW5kUG9zdGVyQ29tbWVudDogZnVuY3Rpb24gZXhwYW5kUG9zdGVyQ29tbWVudCgpIHtcbiAgICB0aGlzLnBvc3RlckNvbW1lbnRMaW5lcyA9IHRoaXMucG9zdGVyQ29tbWVudExpbmVzID09PSAtMSA/IDIgOiAtMTtcbiAgfSxcbiAgdmlld1Bvc3RlcjogZnVuY3Rpb24gdmlld1Bvc3RlcigpIHtcbiAgICBfc3lzdGVtMltcImRlZmF1bHRcIl0uc2hvd1RvYXN0KHtcbiAgICAgIG1lc3NhZ2U6ICd2aWV3UG9zdGVyJyxcbiAgICAgIGltYWdlOiAnL0NvbW1vbi9sb2dvLnBuZydcbiAgICB9KTtcbiAgfSxcbiAgdmlld0ltYWdlOiBmdW5jdGlvbiB2aWV3SW1hZ2Uob2JqKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuXG4gICAgX3N5c3RlbVtcImRlZmF1bHRcIl0ucHJldmlld0ltYWdlKHtcbiAgICAgIGN1cnJlbnQ6IG9iai4kaXRlbS5zcmMsXG4gICAgICB1cmlzOiB0aGF0LnN3aXBlcmRhdGEubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtLnNyYztcbiAgICAgIH0pLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcygpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3ByZXZpZXdJbWFnZSBzdWNjZXNzJyk7XG4gICAgICB9LFxuICAgICAgZmFpbDogZnVuY3Rpb24gZmFpbChlcnJtc2csIGVycmNvZGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3ByZXZpZXdJbWFnZSBmYWlsICgnICsgZXJyY29kZSArICcpICcgKyBlcnJtc2cpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBvbkluaXQ6IGZ1bmN0aW9uIG9uSW5pdCgpIHtcbiAgICB0aGlzLiR3YXRjaCgnc3dpcGVyZGF0YScsICdoYW5kbGVVcGRhdGUnKTtcbiAgfSxcbiAgaGFuZGxlVXBkYXRlOiBmdW5jdGlvbiBoYW5kbGVVcGRhdGUobmV3VmFsLCBvbGRWYWwpIHtcbiAgICB0aGlzLiRlbGVtZW50KCdzd2lwZXInKS5zd2lwZVRvKHtcbiAgICAgIGluZGV4OiAwXG4gICAgfSk7XG4gIH1cbn07XG52YXIgbW9kdWxlT3duID0gZXhwb3J0cy5kZWZhdWx0IHx8IG1vZHVsZS5leHBvcnRzO1xudmFyIGFjY2Vzc29ycyA9IFsncHVibGljJywgJ3Byb3RlY3RlZCcsICdwcml2YXRlJ107XG5pZiAobW9kdWxlT3duLmRhdGEgJiYgYWNjZXNzb3JzLnNvbWUoZnVuY3Rpb24gKGFjYykge1xuICAgIHJldHVybiBtb2R1bGVPd25bYWNjXTtcbiAgfSkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdGb3IgVk0gb2JqZWN0cywgYXR0cmlidXRlIGRhdGEgbXVzdCBub3QgY29leGlzdCB3aXRoIHB1YmxpYywgcHJvdGVjdGVkLCBvciBwcml2YXRlLiBQbGVhc2UgcmVwbGFjZSBkYXRhIHdpdGggcHVibGljLicpO1xufSBlbHNlIGlmICghbW9kdWxlT3duLmRhdGEpIHtcbiAgbW9kdWxlT3duLmRhdGEgPSB7fTtcbiAgbW9kdWxlT3duLl9kZXNjcmlwdG9yID0ge307XG4gIGFjY2Vzc29ycy5mb3JFYWNoKGZ1bmN0aW9uKGFjYykge1xuICAgIHZhciBhY2NUeXBlID0gdHlwZW9mIG1vZHVsZU93blthY2NdO1xuICAgIGlmIChhY2NUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgbW9kdWxlT3duLmRhdGEgPSBPYmplY3QuYXNzaWduKG1vZHVsZU93bi5kYXRhLCBtb2R1bGVPd25bYWNjXSk7XG4gICAgICBmb3IgKHZhciBuYW1lIGluIG1vZHVsZU93blthY2NdKSB7XG4gICAgICAgIG1vZHVsZU93bi5fZGVzY3JpcHRvcltuYW1lXSA9IHthY2Nlc3MgOiBhY2N9O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYWNjVHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc29sZS53YXJuKCdGb3IgVk0gb2JqZWN0cywgYXR0cmlidXRlICcgKyBhY2MgKyAnIHZhbHVlIG11c3Qgbm90IGJlIGEgZnVuY3Rpb24uIENoYW5nZSB0aGUgdmFsdWUgdG8gYW4gb2JqZWN0LicpO1xuICAgIH1cbiAgfSk7XG59fSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJyZWZyZXNoXCIsXG4gIFwiYXR0clwiOiB7XG4gICAgXCJvZmZzZXRcIjogXCIxMzBweFwiLFxuICAgIFwicmVmcmVzaGluZ1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaXNSZWZyZXNoaW5nfVxuICB9LFxuICBcImV2ZW50c1wiOiB7XG4gICAgXCJyZWZyZXNoXCI6IFwicmVmcmVzaFwiXG4gIH0sXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcInJlZnJlc2hcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJsaXN0XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgIFwic2Nyb2xsYm90dG9tXCI6IFwic2Nyb2xsQm90dG9tXCJcbiAgICAgIH0sXG4gICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImxpc3QtaXRlbVwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJjYXJkXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ1c2VyX2NhcmRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInVzZXJpbmZvc1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMudXNlcmluZm9zfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwibGlzdC1pdGVtXCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgIFwidHlwZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuICdsaXN0SXRlbScrKHRoaXMuJGlkeCl9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInJlcGVhdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucG9zdERhdGF9LFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJjb21wb25lbnQtcG9zdFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwic3dpcGVyZGF0YVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGl0ZW0uc3dpcGVyZGF0YX0sXG4gICAgICAgICAgICAgICAgXCJwaWRcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiRpdGVtLnBpZH0sXG4gICAgICAgICAgICAgICAgXCJsaWtlZGF0YVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGl0ZW0ubGlrZWRhdGF9LFxuICAgICAgICAgICAgICAgIFwicG9zdGVyXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS5wb3N0ZXJ9LFxuICAgICAgICAgICAgICAgIFwicG9zdGVyaWNvblwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuJGl0ZW0ucG9zdGVyaWNvbn0sXG4gICAgICAgICAgICAgICAgXCJwb3N0ZXJjb21tZW50XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS5wb3N0ZXJjb21tZW50fSxcbiAgICAgICAgICAgICAgICBcImNvbW1lbnRudW1iZXJcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiRpdGVtLmNvbW1lbnRudW1iZXJ9LFxuICAgICAgICAgICAgICAgIFwicG9zdHRpbWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLiRpdGVtLnBvc3R0aW1lfSxcbiAgICAgICAgICAgICAgICBcImxpa2VkXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy4kaXRlbS5saWtlZH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImxpc3QtaXRlbVwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInR5cGVcIjogXCJsb2FkTW9yZVwiLFxuICAgICAgICAgICAgXCJzaG93XCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5pc0xvYWRpbmd9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwibG9hZE1vcmVcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJwcm9ncmVzc1wiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiY2lyY3VsYXJcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICAgICAgXCJjaXJjdWxhci1wcm9ncmVzc1wiXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi5Yqg6L295pu05aSaXCJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgICAgIFwiZm9udC1zaXplLWxnXCJcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIF1cbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHtcbiAgXCIuY29udGFpbmVyXCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImhlaWdodFwiOiBcIjUwJVwiXG4gIH0sXG4gIFwiLnJlZnJlc2hcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgIFwicHJvZ3Jlc3NDb2xvclwiOiBcIiMwZmFlZmZcIlxuICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsICRhcHBfcmVxdWlyZSQpe1widXNlIHN0cmljdFwiO1xuXG52YXIgX3N5c3RlbSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoJGFwcF9yZXF1aXJlJChcIkBhcHAtbW9kdWxlL3N5c3RlbS5mZXRjaFwiKSk7XG5cbnZhciBfc3lzdGVtMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoJGFwcF9yZXF1aXJlJChcIkBhcHAtbW9kdWxlL3N5c3RlbS5wcm9tcHRcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGRhdGE6IHtcbiAgICBwaG9uZW51bTogJycsXG4gICAgaXNSZWZyZXNoaW5nOiBmYWxzZSxcbiAgICBpc0xvYWRpbmc6IGZhbHNlLFxuICAgIHVzZXJpbmZvczogW10sXG4gICAgcG9zdERhdGE6IFtdXG4gIH0sXG4gIHJlZnJlc2hQb3N0OiBmdW5jdGlvbiByZWZyZXNoUG9zdCh0aGF0KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICB0aGF0LnBvc3REYXRhID0gZGF0YS5kYXRhLm1lc3NhZ2UubWFwKHRoYXQubWFwUG9zdCk7XG4gICAgICB0aGF0LmlzUmVmcmVzaGluZyA9IGZhbHNlO1xuICAgICAgY2xlYXJUaW1lb3V0KHRoYXQudGltZW91dCk7XG4gICAgfTtcbiAgfSxcbiAgcmVmcmVzaFVzZXI6IGZ1bmN0aW9uIHJlZnJlc2hVc2VyKHRoYXQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIHRoYXQudXNlcmluZm9zID0gZGF0YS5kYXRhLm1lc3NhZ2UubWFwKHRoYXQubWFwVXNlcilbMF07XG4gICAgICB0aGF0LmlzUmVmcmVzaGluZyA9IGZhbHNlO1xuICAgICAgY2xlYXJUaW1lb3V0KHRoYXQudGltZW91dDEpO1xuICAgIH07XG4gIH0sXG4gIGxvYWRNb3JlUG9zdDogZnVuY3Rpb24gbG9hZE1vcmVQb3N0KHRoYXQpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgIHRoYXQucG9zdERhdGEgPSB0aGF0LnBvc3REYXRhLmNvbmNhdChkYXRhLmRhdGEubWVzc2FnZS5tYXAodGhhdC5tYXBQb3N0KSk7XG4gICAgICB0aGF0LmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgY2xlYXJUaW1lb3V0KHRoYXQudGltZW91dCk7XG4gICAgfTtcbiAgfSxcbiAgc2hvd0Vycm9yOiBmdW5jdGlvbiBzaG93RXJyb3IodGhhdCkge1xuICAgIHJldHVybiBmdW5jdGlvbiAoZXJyY29kZSwgZXJybXNnKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJjb2RlICsgJyAnICsgZXJybXNnKTtcblxuICAgICAgX3N5c3RlbTJbXCJkZWZhdWx0XCJdLnNob3dUb2FzdCh7XG4gICAgICAgIG1lc3NhZ2U6IFwi6K+35rGC6ZSZ6K+vXCIsXG4gICAgICAgIGltYWdlOiAnL0NvbW1vbi9sb2dvLnBuZydcbiAgICAgIH0pO1xuXG4gICAgICB0aGF0LmlzUmVmcmVzaGluZyA9IGZhbHNlO1xuICAgICAgdGhhdC5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgIGNsZWFyVGltZW91dCh0aGF0LnRpbWVvdXQpO1xuICAgICAgY2xlYXJUaW1lb3V0KHRoYXQudGltZW91dDEpO1xuICAgIH07XG4gIH0sXG4gIHBvc3Q6IGZ1bmN0aW9uIHBvc3QodXJsLCBkYXRhKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIF9zeXN0ZW1bXCJkZWZhdWx0XCJdLmZldGNoKHtcbiAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgIHJlc3BvbnNlVHlwZTogJ2pzb24nLFxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcyhkYXRhKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coXCJwb3N0IHN1Y2Nlc3NcIik7XG4gICAgICAgICAgcmVzb2x2ZShkYXRhKTtcbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogZnVuY3Rpb24gZmFpbChlcnJtc2csIGVycmNvZGUpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcInBvc3QgZmFpbFwiKTtcbiAgICAgICAgICByZWplY3QoZXJyY29kZSwgZXJybXNnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH0sXG4gIHJlZnJlc2g6IGZ1bmN0aW9uIHJlZnJlc2goZSkge1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICB0aGlzLmlzUmVmcmVzaGluZyA9IGUucmVmcmVzaGluZztcbiAgICB2YXIgcHJvbWlzZSA9IHRoaXMucG9zdChcImh0dHA6Ly8xMTQuMTE2LjI0OC4yMzM6MTIzNDUvdGltZWxpbmUvZ2V0X3Bvc3RzXCIsIHtcbiAgICAgIFwicGhvbmVudW1cIjogXCIxODI2MDA3MTAxMlwiLFxuICAgICAgXCJ0YXJfcGhvbmVudW1cIjogdGhhdC5waG9uZW51bSxcbiAgICAgIFwidGltZVwiOiBcIjIwMTktMDktMDggMTU6MjQ6MDdcIlxuICAgIH0pO1xuICAgIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgdGhhdC5pc1JlZnJlc2hpbmcgPSBmYWxzZTtcblxuICAgICAgX3N5c3RlbTJbXCJkZWZhdWx0XCJdLnNob3dUb2FzdCh7XG4gICAgICAgIG1lc3NhZ2U6IFwi6K+35rGC6LaF5pe2XCIsXG4gICAgICAgIGltYWdlOiAnL0NvbW1vbi9sb2dvLnBuZydcbiAgICAgIH0pO1xuICAgIH0sIDUwMDApO1xuICAgIHByb21pc2UudGhlbih0aGlzLnJlZnJlc2hQb3N0KHRoaXMpLCB0aGlzLnNob3dFcnJvcih0aGlzKSk7XG4gICAgdmFyIHByb21pc2UxID0gdGhpcy5wb3N0KFwiaHR0cDovLzExNC4xMTYuMjQ4LjIzMzoxMjM0NS90aW1lbGluZS9nZXRfcG9zdHNcIiwge1xuICAgICAgXCJwaG9uZW51bVwiOiBcIjE4MjYwMDcxMDEyXCIsXG4gICAgICBcInRhcl9waG9uZW51bVwiOiBcIjE4MjYwMDcxMDEyXCIsXG4gICAgICBcInRpbWVcIjogXCIyMDE5LTA5LTA4IDE1OjI0OjA3XCJcbiAgICB9KTtcbiAgICB0aGlzLnRpbWVvdXQxID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICB0aGF0LmlzUmVmcmVzaGluZyA9IGZhbHNlO1xuXG4gICAgICBfc3lzdGVtMltcImRlZmF1bHRcIl0uc2hvd1RvYXN0KHtcbiAgICAgICAgbWVzc2FnZTogXCLor7fmsYLotoXml7ZcIixcbiAgICAgICAgaW1hZ2U6ICcvQ29tbW9uL2xvZ28ucG5nJ1xuICAgICAgfSk7XG4gICAgfSwgNTAwMCk7XG4gICAgcHJvbWlzZTEudGhlbih0aGlzLnJlZnJlc2hVc2VyKHRoaXMpLCB0aGlzLnNob3dFcnJvcih0aGlzKSk7XG4gIH0sXG4gIHNjcm9sbEJvdHRvbTogZnVuY3Rpb24gc2Nyb2xsQm90dG9tKCkge1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICB0aGlzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgdmFyIHByb21pc2UgPSB0aGlzLnBvc3QoXCJodHRwOi8vMTE0LjExNi4yNDguMjMzOjEyMzQ1L3RpbWVsaW5lL2dldF9wb3N0c1wiLCB7XG4gICAgICBcInBob25lbnVtXCI6IFwiMTgyNjAwNzEwMTJcIixcbiAgICAgIFwidGFyX3Bob25lbnVtXCI6IHRoYXQucGhvbmVudW0sXG4gICAgICBcInRpbWVcIjogXCIyMDE5LTA5LTA4IDE1OjI0OjA3XCJcbiAgICB9KTtcbiAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIHRoYXQuaXNMb2FkaW5nID0gZmFsc2U7XG5cbiAgICAgIF9zeXN0ZW0yW1wiZGVmYXVsdFwiXS5zaG93VG9hc3Qoe1xuICAgICAgICBtZXNzYWdlOiBcIuivt+axgui2heaXtlwiLFxuICAgICAgICBpbWFnZTogJy9Db21tb24vbG9nby5wbmcnXG4gICAgICB9KTtcbiAgICB9LCA1MDAwKTtcbiAgICBwcm9taXNlLnRoZW4odGhpcy5sb2FkTW9yZVBvc3QodGhpcyksIHRoaXMuc2hvd0Vycm9yKHRoaXMpKTtcbiAgfSxcbiAgbWFwUG9zdDogZnVuY3Rpb24gbWFwUG9zdChpdGVtKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN3aXBlcmRhdGE6IGl0ZW0uaW1hZ2VzLm1hcChmdW5jdGlvbiAoaW1hZ2UpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzcmM6IGltYWdlLnVybFxuICAgICAgICB9O1xuICAgICAgfSksXG4gICAgICBsaWtlZGF0YTogaXRlbS5saWtlcyxcbiAgICAgIHBvc3RlcjogaXRlbS51c2VyLnVzZXJuYW1lLFxuICAgICAgcGlkOiBpdGVtLnBpZCxcbiAgICAgIHBvc3RlcmNvbW1lbnQ6IGl0ZW0uc2VsZmNvbW1lbnQsXG4gICAgICBjb21tZW50bnVtYmVyOiBpdGVtLmNvbW1lbnRzLFxuICAgICAgcG9zdGVyaWNvbjogaXRlbS51c2VyLnBob3RvLFxuICAgICAgcG9zdHRpbWU6IGl0ZW0ucHRpbWUsXG4gICAgICBsaWtlZDogaXRlbS5pc2xpa2VkXG4gICAgfTtcbiAgfSxcbiAgbWFwVXNlcjogZnVuY3Rpb24gbWFwVXNlcihpdGVtKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVzZXJuYW1lOiBpdGVtLnVzZXJuYW1lLFxuICAgICAgbmFtZTogaXRlbS5uYW1lLFxuICAgICAgcG9zdGVyaWNvbjogaXRlbS5waG90byxcbiAgICAgIGVtYWlsOiBpdGVtLmVtYWlsLFxuICAgICAgZ2VuZGVyOiBpdGVtLmdlbmRlcixcbiAgICAgIGJpbzogaXRlbS5iaW8sXG4gICAgICBmb2xsb3dlcnM6IGl0ZW0uZm9sbG93ZXJzLFxuICAgICAgZm9sbG93aW5nOiBpdGVtLmZvbGxvd2luZyxcbiAgICAgIHBvc3RzOiBpdGVtLnBvc3RzXG4gICAgfTtcbiAgfSxcbiAgb25Jbml0OiBmdW5jdGlvbiBvbkluaXQoKSB7XG4gICAgdmFyIHByb21pc2UgPSB0aGlzLnBvc3QoXCJodHRwOi8vMTE0LjExNi4yNDguMjMzOjEyMzQ1L3RpbWVsaW5lL2dldF9wb3N0c1wiLCB7XG4gICAgICBcInBob25lbnVtXCI6IFwiMTgyNjAwNzEwMTJcIixcbiAgICAgIFwidGFyX3Bob25lbnVtXCI6IHRoaXMucGhvbmVudW0sXG4gICAgICBcInRpbWVcIjogXCIyMDE5LTA5LTA4IDE1OjI0OjA3XCJcbiAgICB9KTtcbiAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIF9zeXN0ZW0yW1wiZGVmYXVsdFwiXS5zaG93VG9hc3Qoe1xuICAgICAgICBtZXNzYWdlOiBcIuivt+axgui2heaXtlwiLFxuICAgICAgICBpbWFnZTogJy9Db21tb24vbG9nby5wbmcnXG4gICAgICB9KTtcbiAgICB9LCA1MDAwKTtcbiAgICBwcm9taXNlLnRoZW4odGhpcy5yZWZyZXNoUG9zdCh0aGlzKSwgdGhpcy5zaG93RXJyb3IodGhpcykpO1xuICAgIHZhciBwcm9taXNlMSA9IHRoaXMucG9zdChcImh0dHA6Ly8xMTQuMTE2LjI0OC4yMzM6MTIzNDUvdXNlci9nZXRfdXNlcl9pbmZvXCIsIHtcbiAgICAgIFwicGhvbmVudW1cIjogdGhpcy5waG9uZW51bVxuICAgIH0pO1xuICAgIHRoaXMudGltZW91dDEgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIF9zeXN0ZW0yW1wiZGVmYXVsdFwiXS5zaG93VG9hc3Qoe1xuICAgICAgICBtZXNzYWdlOiBcIuivt+axgui2heaXtlwiLFxuICAgICAgICBpbWFnZTogJy9Db21tb24vbG9nby5wbmcnXG4gICAgICB9KTtcbiAgICB9LCA1MDAwKTtcbiAgICBwcm9taXNlMS50aGVuKHRoaXMucmVmcmVzaFVzZXIodGhpcyksIHRoaXMuc2hvd0Vycm9yKHRoaXMpKTtcbiAgfVxufTtcbnZhciBtb2R1bGVPd24gPSBleHBvcnRzLmRlZmF1bHQgfHwgbW9kdWxlLmV4cG9ydHM7XG52YXIgYWNjZXNzb3JzID0gWydwdWJsaWMnLCAncHJvdGVjdGVkJywgJ3ByaXZhdGUnXTtcbmlmIChtb2R1bGVPd24uZGF0YSAmJiBhY2Nlc3NvcnMuc29tZShmdW5jdGlvbiAoYWNjKSB7XG4gICAgcmV0dXJuIG1vZHVsZU93blthY2NdO1xuICB9KSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgZGF0YSBtdXN0IG5vdCBjb2V4aXN0IHdpdGggcHVibGljLCBwcm90ZWN0ZWQsIG9yIHByaXZhdGUuIFBsZWFzZSByZXBsYWNlIGRhdGEgd2l0aCBwdWJsaWMuJyk7XG59IGVsc2UgaWYgKCFtb2R1bGVPd24uZGF0YSkge1xuICBtb2R1bGVPd24uZGF0YSA9IHt9O1xuICBtb2R1bGVPd24uX2Rlc2NyaXB0b3IgPSB7fTtcbiAgYWNjZXNzb3JzLmZvckVhY2goZnVuY3Rpb24oYWNjKSB7XG4gICAgdmFyIGFjY1R5cGUgPSB0eXBlb2YgbW9kdWxlT3duW2FjY107XG4gICAgaWYgKGFjY1R5cGUgPT09ICdvYmplY3QnKSB7XG4gICAgICBtb2R1bGVPd24uZGF0YSA9IE9iamVjdC5hc3NpZ24obW9kdWxlT3duLmRhdGEsIG1vZHVsZU93blthY2NdKTtcbiAgICAgIGZvciAodmFyIG5hbWUgaW4gbW9kdWxlT3duW2FjY10pIHtcbiAgICAgICAgbW9kdWxlT3duLl9kZXNjcmlwdG9yW25hbWVdID0ge2FjY2VzcyA6IGFjY307XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChhY2NUeXBlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0ZvciBWTSBvYmplY3RzLCBhdHRyaWJ1dGUgJyArIGFjYyArICcgdmFsdWUgbXVzdCBub3QgYmUgYSBmdW5jdGlvbi4gQ2hhbmdlIHRoZSB2YWx1ZSB0byBhbiBvYmplY3QuJyk7XG4gICAgfVxuICB9KTtcbn19Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDbE1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN2R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3hOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDckZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNqR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNoR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=