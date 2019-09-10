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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var $app_script$ = __webpack_require__(1)

$app_define$('@app-application/app', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
})

$app_bootstrap$('@app-application/app',{ packagerName:'fa-toolkit', packagerVersion: '2.0.0-Stable.301'})

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){"use strict";

module.exports = {
  onCreate: function onCreate() {
    console.info('Application onCreate');
  },
  onDestroy: function onDestroy() {
    console.info('Application onDestroy');
  },
  data: {
    categories: {
      "-2": "其它",
      "-1": "其它",
      "0": "人像",
      "1": "美食",
      "2": "风景",
      "3": "文档",
      "4": "节日",
      "5": "活动",
      "6": "动物",
      "7": "运动",
      "8": "交通工具",
      "9": "家居",
      "10": "电器",
      "11": "艺术",
      "12": "工具",
      "13": "服饰",
      "14": "配饰",
      "15": "玩具"
    },
    labels: {
      "-2": "其它",
      "-1": "其它",
      "0": "人像",
      "1": "美食",
      "2": "风景",
      "3": "文档",
      "4": "身份证",
      "5": "护照",
      "6": "银行卡",
      "7": "自行车",
      "8": "巴士",
      "9": "船",
      "10": "火车",
      "11": "飞机",
      "12": "汽车",
      "13": "鸟",
      "14": "猫",
      "15": "狗",
      "16": "鱼",
      "18": "衣柜",
      "19": "手机",
      "20": "笔记本电脑",
      "24": "婚纱",
      "25": "花朵",
      "26": "积木",
      "27": "寿司",
      "28": "烧烤",
      "29": "香蕉",
      "31": "西瓜",
      "32": "面条",
      "34": "钢琴",
      "35": "婚礼",
      "36": "下棋",
      "37": "篮球",
      "38": "羽毛球",
      "39": "足球",
      "40": "城市俯瞰",
      "41": "日出日落",
      "42": "大海",
      "43": "桥",
      "44": "天空",
      "45": "草地",
      "46": "街道",
      "47": "夜景",
      "49": "树林",
      "50": "湖泊",
      "51": "雪",
      "52": "山",
      "53": "建筑",
      "54": "云",
      "55": "瀑布",
      "56": "雾",
      "57": "瓷器",
      "58": "模特",
      "59": "彩虹",
      "60": "蜡烛",
      "62": "自由女神像",
      "63": "演示文稿",
      "66": "婴儿车",
      "67": "合影",
      "68": "聚餐",
      "69": "埃菲尔铁塔",
      "70": "海豚",
      "71": "长颈鹿",
      "72": "企鹅",
      "73": "老虎",
      "74": "斑马",
      "76": "狮子",
      "77": "大象",
      "78": "豹",
      "79": "孔雀",
      "80": "黑板",
      "81": "气球",
      "83": "空调",
      "84": "洗衣机",
      "85": "冰箱",
      "86": "相机",
      "88": "枪",
      "89": "裙子",
      "91": "无人机",
      "92": "苹果",
      "93": "水饺",
      "94": "咖啡",
      "95": "葡萄",
      "96": "火锅",
      "97": "毕业照",
      "102": "手表",
      "103": "眼镜",
      "104": "摩天轮",
      "105": "喷泉",
      "106": "亭子",
      "107": "烟花",
      "108": "名片",
      "109": "骑马",
      "110": "演唱会",
      "111": "帆船",
      "112": "大熊猫",
      "113": "生日蛋糕",
      "114": "生日",
      "115": "圣诞",
      "116": "长城",
      "117": "东方明珠",
      "118": "小蛮腰",
      "120": "塔",
      "121": "兔子",
      "123": "拉杆箱",
      "124": "美甲",
      "125": "吉他"
    }
  }
};
(exports.default || module.exports).manifest = __webpack_require__(2)
}

/***/ }),
/* 2 */
/***/ (function(module) {

module.exports = JSON.parse("{\"package\":\"com.njust.stack\",\"name\":\"Stack\",\"versionName\":\"1.0.0\",\"versionCode\":1,\"icon\":\"/Common/logo.png\",\"minPlatformVersion\":1040,\"features\":[{\"name\":\"system.image\"},{\"name\":\"system.media\"},{\"name\":\"system.prompt\"},{\"name\":\"system.router\"},{\"name\":\"system.ai\"},{\"name\":\"system.fetch\"},{\"name\":\"system.request\"}],\"permissions\":[{\"origin\":\"*\"}],\"config\":{},\"router\":{\"entry\":\"Main\",\"pages\":{\"Comments\":{\"component\":\"index\",\"path\":\"/Comments\"},\"Community\":{\"component\":\"index\",\"path\":\"/Community\"},\"Discover\":{\"component\":\"index\",\"path\":\"/Discover\"},\"EditProfile\":{\"component\":\"index\",\"path\":\"/EditProfile\"},\"FollowInfo\":{\"component\":\"index\",\"path\":\"/FollowInfo\"},\"Main\":{\"component\":\"index\",\"path\":\"/Main\"},\"Mine\":{\"component\":\"index\",\"path\":\"/Mine\"},\"Photo\":{\"component\":\"index\",\"path\":\"/Photo\"},\"PostDetail\":{\"component\":\"index\",\"path\":\"/PostDetail\"},\"Rank\":{\"component\":\"index\",\"path\":\"/Rank\"},\"Search\":{\"component\":\"index\",\"path\":\"/Search\"},\"UserDetail\":{\"component\":\"index\",\"path\":\"/UserDetail\"}}},\"display\":{\"titleBar\":false,\"pages\":{}}}");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRcXGFwcC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vYzovVXNlcnMveGkvLmZhc3RhcHAtaWRlL3dvcmtzcGFjZS9jb20ubmp1c3Quc3RhY2svc3JjL2FwcC51eCIsIndlYnBhY2s6Ly8vYzovVXNlcnMveGkvLmZhc3RhcHAtaWRlL3dvcmtzcGFjZS9jb20ubmp1c3Quc3RhY2svc3JjL2FwcC51eD8wZTA4Il0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsInZhciAkYXBwX3NjcmlwdCQgPSByZXF1aXJlKFwiISFjOi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBGYXN0QXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1zY3JpcHQtbG9hZGVyLmpzIWM6L1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWFwcC1zY3JpcHQtbG9hZGVyLmpzP3BhdGg9YzpcXFxcVXNlcnNcXFxceGlcXFxcLmZhc3RhcHAtaWRlXFxcXHdvcmtzcGFjZVxcXFxjb20ubmp1c3Quc3RhY2tcXFxcc3JjXFxcXGFwcC51eCZ2ZXJzaW9uTnVtPTEwNDAhYzovUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgRmFzdEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1jOlxcXFxQcm9ncmFtIEZpbGVzXFxcXEh1YXdlaSBGYXN0QXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccHJlc2V0LWVudiZwbHVnaW5zW109YzpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIdWF3ZWkgRmFzdEFwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHBsdWdpbi10cmFuc2Zvcm0tbW9kdWxlcy1jb21tb25qcyZjb21tZW50cz1mYWxzZSFjOi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBGYXN0QXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhYzovVXNlcnMveGkvLmZhc3RhcHAtaWRlL3dvcmtzcGFjZS9jb20ubmp1c3Quc3RhY2svc3JjL2FwcC51eFwiKVxuXG4kYXBwX2RlZmluZSQoJ0BhcHAtYXBwbGljYXRpb24vYXBwJywgW10sIGZ1bmN0aW9uKCRhcHBfcmVxdWlyZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfbW9kdWxlJCl7XG4gICAgICRhcHBfc2NyaXB0JCgkYXBwX21vZHVsZSQsICRhcHBfZXhwb3J0cyQsICRhcHBfcmVxdWlyZSQpXG4gICAgIGlmICgkYXBwX2V4cG9ydHMkLl9fZXNNb2R1bGUgJiYgJGFwcF9leHBvcnRzJC5kZWZhdWx0KSB7XG4gICAgICAgICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cyA9ICRhcHBfZXhwb3J0cyQuZGVmYXVsdFxuICAgICAgICB9XG59KVxuXG4kYXBwX2Jvb3RzdHJhcCQoJ0BhcHAtYXBwbGljYXRpb24vYXBwJyx7IHBhY2thZ2VyTmFtZTonZmEtdG9vbGtpdCcsIHBhY2thZ2VyVmVyc2lvbjogJzIuMC4wLVN0YWJsZS4zMDEnfSkiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgJGFwcF9yZXF1aXJlJCl7XCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBvbkNyZWF0ZTogZnVuY3Rpb24gb25DcmVhdGUoKSB7XG4gICAgY29uc29sZS5pbmZvKCdBcHBsaWNhdGlvbiBvbkNyZWF0ZScpO1xuICB9LFxuICBvbkRlc3Ryb3k6IGZ1bmN0aW9uIG9uRGVzdHJveSgpIHtcbiAgICBjb25zb2xlLmluZm8oJ0FwcGxpY2F0aW9uIG9uRGVzdHJveScpO1xuICB9LFxuICBkYXRhOiB7XG4gICAgY2F0ZWdvcmllczoge1xuICAgICAgXCItMlwiOiBcIuWFtuWug1wiLFxuICAgICAgXCItMVwiOiBcIuWFtuWug1wiLFxuICAgICAgXCIwXCI6IFwi5Lq65YOPXCIsXG4gICAgICBcIjFcIjogXCLnvo7po59cIixcbiAgICAgIFwiMlwiOiBcIumjjuaZr1wiLFxuICAgICAgXCIzXCI6IFwi5paH5qGjXCIsXG4gICAgICBcIjRcIjogXCLoioLml6VcIixcbiAgICAgIFwiNVwiOiBcIua0u+WKqFwiLFxuICAgICAgXCI2XCI6IFwi5Yqo54mpXCIsXG4gICAgICBcIjdcIjogXCLov5DliqhcIixcbiAgICAgIFwiOFwiOiBcIuS6pOmAmuW3peWFt1wiLFxuICAgICAgXCI5XCI6IFwi5a625bGFXCIsXG4gICAgICBcIjEwXCI6IFwi55S15ZmoXCIsXG4gICAgICBcIjExXCI6IFwi6Im65pyvXCIsXG4gICAgICBcIjEyXCI6IFwi5bel5YW3XCIsXG4gICAgICBcIjEzXCI6IFwi5pyN6aWwXCIsXG4gICAgICBcIjE0XCI6IFwi6YWN6aWwXCIsXG4gICAgICBcIjE1XCI6IFwi546p5YW3XCJcbiAgICB9LFxuICAgIGxhYmVsczoge1xuICAgICAgXCItMlwiOiBcIuWFtuWug1wiLFxuICAgICAgXCItMVwiOiBcIuWFtuWug1wiLFxuICAgICAgXCIwXCI6IFwi5Lq65YOPXCIsXG4gICAgICBcIjFcIjogXCLnvo7po59cIixcbiAgICAgIFwiMlwiOiBcIumjjuaZr1wiLFxuICAgICAgXCIzXCI6IFwi5paH5qGjXCIsXG4gICAgICBcIjRcIjogXCLouqvku73or4FcIixcbiAgICAgIFwiNVwiOiBcIuaKpOeFp1wiLFxuICAgICAgXCI2XCI6IFwi6ZO26KGM5Y2hXCIsXG4gICAgICBcIjdcIjogXCLoh6rooYzovaZcIixcbiAgICAgIFwiOFwiOiBcIuW3tOWjq1wiLFxuICAgICAgXCI5XCI6IFwi6Ii5XCIsXG4gICAgICBcIjEwXCI6IFwi54Gr6L2mXCIsXG4gICAgICBcIjExXCI6IFwi6aOe5py6XCIsXG4gICAgICBcIjEyXCI6IFwi5rG96L2mXCIsXG4gICAgICBcIjEzXCI6IFwi6bifXCIsXG4gICAgICBcIjE0XCI6IFwi54yrXCIsXG4gICAgICBcIjE1XCI6IFwi54uXXCIsXG4gICAgICBcIjE2XCI6IFwi6bG8XCIsXG4gICAgICBcIjE4XCI6IFwi6KGj5p+cXCIsXG4gICAgICBcIjE5XCI6IFwi5omL5py6XCIsXG4gICAgICBcIjIwXCI6IFwi56yU6K6w5pys55S16ISRXCIsXG4gICAgICBcIjI0XCI6IFwi5ama57qxXCIsXG4gICAgICBcIjI1XCI6IFwi6Iqx5py1XCIsXG4gICAgICBcIjI2XCI6IFwi56ev5pyoXCIsXG4gICAgICBcIjI3XCI6IFwi5a+/5Y+4XCIsXG4gICAgICBcIjI4XCI6IFwi54On54OkXCIsXG4gICAgICBcIjI5XCI6IFwi6aaZ6JWJXCIsXG4gICAgICBcIjMxXCI6IFwi6KW/55OcXCIsXG4gICAgICBcIjMyXCI6IFwi6Z2i5p2hXCIsXG4gICAgICBcIjM0XCI6IFwi6ZKi55C0XCIsXG4gICAgICBcIjM1XCI6IFwi5ama56S8XCIsXG4gICAgICBcIjM2XCI6IFwi5LiL5qOLXCIsXG4gICAgICBcIjM3XCI6IFwi56+u55CDXCIsXG4gICAgICBcIjM4XCI6IFwi57695q+b55CDXCIsXG4gICAgICBcIjM5XCI6IFwi6Laz55CDXCIsXG4gICAgICBcIjQwXCI6IFwi5Z+O5biC5L+v556wXCIsXG4gICAgICBcIjQxXCI6IFwi5pel5Ye65pel6JC9XCIsXG4gICAgICBcIjQyXCI6IFwi5aSn5rW3XCIsXG4gICAgICBcIjQzXCI6IFwi5qGlXCIsXG4gICAgICBcIjQ0XCI6IFwi5aSp56m6XCIsXG4gICAgICBcIjQ1XCI6IFwi6I2J5ZywXCIsXG4gICAgICBcIjQ2XCI6IFwi6KGX6YGTXCIsXG4gICAgICBcIjQ3XCI6IFwi5aSc5pmvXCIsXG4gICAgICBcIjQ5XCI6IFwi5qCR5p6XXCIsXG4gICAgICBcIjUwXCI6IFwi5rmW5rOKXCIsXG4gICAgICBcIjUxXCI6IFwi6ZuqXCIsXG4gICAgICBcIjUyXCI6IFwi5bGxXCIsXG4gICAgICBcIjUzXCI6IFwi5bu6562RXCIsXG4gICAgICBcIjU0XCI6IFwi5LqRXCIsXG4gICAgICBcIjU1XCI6IFwi54CR5biDXCIsXG4gICAgICBcIjU2XCI6IFwi6Zu+XCIsXG4gICAgICBcIjU3XCI6IFwi55O35ZmoXCIsXG4gICAgICBcIjU4XCI6IFwi5qih54m5XCIsXG4gICAgICBcIjU5XCI6IFwi5b2p6Jm5XCIsXG4gICAgICBcIjYwXCI6IFwi6Jyh54ObXCIsXG4gICAgICBcIjYyXCI6IFwi6Ieq55Sx5aWz56We5YOPXCIsXG4gICAgICBcIjYzXCI6IFwi5ryU56S65paH56i/XCIsXG4gICAgICBcIjY2XCI6IFwi5am05YS/6L2mXCIsXG4gICAgICBcIjY3XCI6IFwi5ZCI5b2xXCIsXG4gICAgICBcIjY4XCI6IFwi6IGa6aSQXCIsXG4gICAgICBcIjY5XCI6IFwi5Z+D6I+y5bCU6ZOB5aGUXCIsXG4gICAgICBcIjcwXCI6IFwi5rW36LGaXCIsXG4gICAgICBcIjcxXCI6IFwi6ZW/6aKI6bm/XCIsXG4gICAgICBcIjcyXCI6IFwi5LyB6bmFXCIsXG4gICAgICBcIjczXCI6IFwi6ICB6JmOXCIsXG4gICAgICBcIjc0XCI6IFwi5paR6amsXCIsXG4gICAgICBcIjc2XCI6IFwi54uu5a2QXCIsXG4gICAgICBcIjc3XCI6IFwi5aSn6LGhXCIsXG4gICAgICBcIjc4XCI6IFwi6LG5XCIsXG4gICAgICBcIjc5XCI6IFwi5a2U6ZuAXCIsXG4gICAgICBcIjgwXCI6IFwi6buR5p2/XCIsXG4gICAgICBcIjgxXCI6IFwi5rCU55CDXCIsXG4gICAgICBcIjgzXCI6IFwi56m66LCDXCIsXG4gICAgICBcIjg0XCI6IFwi5rSX6KGj5py6XCIsXG4gICAgICBcIjg1XCI6IFwi5Yaw566xXCIsXG4gICAgICBcIjg2XCI6IFwi55u45py6XCIsXG4gICAgICBcIjg4XCI6IFwi5p6qXCIsXG4gICAgICBcIjg5XCI6IFwi6KOZ5a2QXCIsXG4gICAgICBcIjkxXCI6IFwi5peg5Lq65py6XCIsXG4gICAgICBcIjkyXCI6IFwi6Iu55p6cXCIsXG4gICAgICBcIjkzXCI6IFwi5rC06aW6XCIsXG4gICAgICBcIjk0XCI6IFwi5ZKW5ZWhXCIsXG4gICAgICBcIjk1XCI6IFwi6JGh6JCEXCIsXG4gICAgICBcIjk2XCI6IFwi54Gr6ZSFXCIsXG4gICAgICBcIjk3XCI6IFwi5q+V5Lia54WnXCIsXG4gICAgICBcIjEwMlwiOiBcIuaJi+ihqFwiLFxuICAgICAgXCIxMDNcIjogXCLnnLzplZxcIixcbiAgICAgIFwiMTA0XCI6IFwi5pGp5aSp6L2uXCIsXG4gICAgICBcIjEwNVwiOiBcIuWWt+aziVwiLFxuICAgICAgXCIxMDZcIjogXCLkuq3lrZBcIixcbiAgICAgIFwiMTA3XCI6IFwi54Of6IqxXCIsXG4gICAgICBcIjEwOFwiOiBcIuWQjeeJh1wiLFxuICAgICAgXCIxMDlcIjogXCLpqpHpqaxcIixcbiAgICAgIFwiMTEwXCI6IFwi5ryU5ZSx5LyaXCIsXG4gICAgICBcIjExMVwiOiBcIuW4huiIuVwiLFxuICAgICAgXCIxMTJcIjogXCLlpKfnhornjKtcIixcbiAgICAgIFwiMTEzXCI6IFwi55Sf5pel6JuL57OVXCIsXG4gICAgICBcIjExNFwiOiBcIueUn+aXpVwiLFxuICAgICAgXCIxMTVcIjogXCLlnKPor55cIixcbiAgICAgIFwiMTE2XCI6IFwi6ZW/5Z+OXCIsXG4gICAgICBcIjExN1wiOiBcIuS4nOaWueaYjuePoFwiLFxuICAgICAgXCIxMThcIjogXCLlsI/om67ohbBcIixcbiAgICAgIFwiMTIwXCI6IFwi5aGUXCIsXG4gICAgICBcIjEyMVwiOiBcIuWFlOWtkFwiLFxuICAgICAgXCIxMjNcIjogXCLmi4nmnYbnrrFcIixcbiAgICAgIFwiMTI0XCI6IFwi576O55SyXCIsXG4gICAgICBcIjEyNVwiOiBcIuWQieS7llwiXG4gICAgfVxuICB9XG59O1xuKGV4cG9ydHMuZGVmYXVsdCB8fCBtb2R1bGUuZXhwb3J0cykubWFuaWZlc3QgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBGYXN0QXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1tYW5pZmVzdC1sb2FkZXIuanMhLi9tYW5pZmVzdC5qc29uXCIpXG59Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==