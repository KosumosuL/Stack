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
/******/ 	return __webpack_require__(__webpack_require__.s = 77);
/******/ })
/************************************************************************/
/******/ (Array(43).concat([
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(44), __webpack_require__(45), __webpack_require__(46), __webpack_require__(47), __webpack_require__(48), __webpack_require__(49), __webpack_require__(50), __webpack_require__(51), __webpack_require__(52), __webpack_require__(53), __webpack_require__(54), __webpack_require__(55), __webpack_require__(56), __webpack_require__(57), __webpack_require__(58), __webpack_require__(59), __webpack_require__(60), __webpack_require__(61), __webpack_require__(62), __webpack_require__(63), __webpack_require__(64), __webpack_require__(65), __webpack_require__(66), __webpack_require__(67), __webpack_require__(68), __webpack_require__(69), __webpack_require__(70), __webpack_require__(71), __webpack_require__(72), __webpack_require__(73), __webpack_require__(74), __webpack_require__(75), __webpack_require__(76));
	}
	else {}
}(this, function (CryptoJS) {

	return CryptoJS;

}));

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory();
	}
	else {}
}(this, function () {

	/**
	 * CryptoJS core components.
	 */
	var CryptoJS = CryptoJS || (function (Math, undefined) {
	    /*
	     * Local polyfil of Object.create
	     */
	    var create = Object.create || (function () {
	        function F() {};

	        return function (obj) {
	            var subtype;

	            F.prototype = obj;

	            subtype = new F();

	            F.prototype = null;

	            return subtype;
	        };
	    }())

	    /**
	     * CryptoJS namespace.
	     */
	    var C = {};

	    /**
	     * Library namespace.
	     */
	    var C_lib = C.lib = {};

	    /**
	     * Base object for prototypal inheritance.
	     */
	    var Base = C_lib.Base = (function () {


	        return {
	            /**
	             * Creates a new object that inherits from this object.
	             *
	             * @param {Object} overrides Properties to copy into the new object.
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         field: 'value',
	             *
	             *         method: function () {
	             *         }
	             *     });
	             */
	            extend: function (overrides) {
	                // Spawn
	                var subtype = create(this);

	                // Augment
	                if (overrides) {
	                    subtype.mixIn(overrides);
	                }

	                // Create default initializer
	                if (!subtype.hasOwnProperty('init') || this.init === subtype.init) {
	                    subtype.init = function () {
	                        subtype.$super.init.apply(this, arguments);
	                    };
	                }

	                // Initializer's prototype is the subtype object
	                subtype.init.prototype = subtype;

	                // Reference supertype
	                subtype.$super = this;

	                return subtype;
	            },

	            /**
	             * Extends this object and runs the init method.
	             * Arguments to create() will be passed to init().
	             *
	             * @return {Object} The new object.
	             *
	             * @static
	             *
	             * @example
	             *
	             *     var instance = MyType.create();
	             */
	            create: function () {
	                var instance = this.extend();
	                instance.init.apply(instance, arguments);

	                return instance;
	            },

	            /**
	             * Initializes a newly created object.
	             * Override this method to add some logic when your objects are created.
	             *
	             * @example
	             *
	             *     var MyType = CryptoJS.lib.Base.extend({
	             *         init: function () {
	             *             // ...
	             *         }
	             *     });
	             */
	            init: function () {
	            },

	            /**
	             * Copies properties into this object.
	             *
	             * @param {Object} properties The properties to mix in.
	             *
	             * @example
	             *
	             *     MyType.mixIn({
	             *         field: 'value'
	             *     });
	             */
	            mixIn: function (properties) {
	                for (var propertyName in properties) {
	                    if (properties.hasOwnProperty(propertyName)) {
	                        this[propertyName] = properties[propertyName];
	                    }
	                }

	                // IE won't copy toString using the loop above
	                if (properties.hasOwnProperty('toString')) {
	                    this.toString = properties.toString;
	                }
	            },

	            /**
	             * Creates a copy of this object.
	             *
	             * @return {Object} The clone.
	             *
	             * @example
	             *
	             *     var clone = instance.clone();
	             */
	            clone: function () {
	                return this.init.prototype.extend(this);
	            }
	        };
	    }());

	    /**
	     * An array of 32-bit words.
	     *
	     * @property {Array} words The array of 32-bit words.
	     * @property {number} sigBytes The number of significant bytes in this word array.
	     */
	    var WordArray = C_lib.WordArray = Base.extend({
	        /**
	         * Initializes a newly created word array.
	         *
	         * @param {Array} words (Optional) An array of 32-bit words.
	         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.create();
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
	         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
	         */
	        init: function (words, sigBytes) {
	            words = this.words = words || [];

	            if (sigBytes != undefined) {
	                this.sigBytes = sigBytes;
	            } else {
	                this.sigBytes = words.length * 4;
	            }
	        },

	        /**
	         * Converts this word array to a string.
	         *
	         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
	         *
	         * @return {string} The stringified word array.
	         *
	         * @example
	         *
	         *     var string = wordArray + '';
	         *     var string = wordArray.toString();
	         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
	         */
	        toString: function (encoder) {
	            return (encoder || Hex).stringify(this);
	        },

	        /**
	         * Concatenates a word array to this word array.
	         *
	         * @param {WordArray} wordArray The word array to append.
	         *
	         * @return {WordArray} This word array.
	         *
	         * @example
	         *
	         *     wordArray1.concat(wordArray2);
	         */
	        concat: function (wordArray) {
	            // Shortcuts
	            var thisWords = this.words;
	            var thatWords = wordArray.words;
	            var thisSigBytes = this.sigBytes;
	            var thatSigBytes = wordArray.sigBytes;

	            // Clamp excess bits
	            this.clamp();

	            // Concat
	            if (thisSigBytes % 4) {
	                // Copy one byte at a time
	                for (var i = 0; i < thatSigBytes; i++) {
	                    var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                    thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
	                }
	            } else {
	                // Copy one word at a time
	                for (var i = 0; i < thatSigBytes; i += 4) {
	                    thisWords[(thisSigBytes + i) >>> 2] = thatWords[i >>> 2];
	                }
	            }
	            this.sigBytes += thatSigBytes;

	            // Chainable
	            return this;
	        },

	        /**
	         * Removes insignificant bits.
	         *
	         * @example
	         *
	         *     wordArray.clamp();
	         */
	        clamp: function () {
	            // Shortcuts
	            var words = this.words;
	            var sigBytes = this.sigBytes;

	            // Clamp
	            words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
	            words.length = Math.ceil(sigBytes / 4);
	        },

	        /**
	         * Creates a copy of this word array.
	         *
	         * @return {WordArray} The clone.
	         *
	         * @example
	         *
	         *     var clone = wordArray.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone.words = this.words.slice(0);

	            return clone;
	        },

	        /**
	         * Creates a word array filled with random bytes.
	         *
	         * @param {number} nBytes The number of random bytes to generate.
	         *
	         * @return {WordArray} The random word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.lib.WordArray.random(16);
	         */
	        random: function (nBytes) {
	            var words = [];

	            var r = (function (m_w) {
	                var m_w = m_w;
	                var m_z = 0x3ade68b1;
	                var mask = 0xffffffff;

	                return function () {
	                    m_z = (0x9069 * (m_z & 0xFFFF) + (m_z >> 0x10)) & mask;
	                    m_w = (0x4650 * (m_w & 0xFFFF) + (m_w >> 0x10)) & mask;
	                    var result = ((m_z << 0x10) + m_w) & mask;
	                    result /= 0x100000000;
	                    result += 0.5;
	                    return result * (Math.random() > .5 ? 1 : -1);
	                }
	            });

	            for (var i = 0, rcache; i < nBytes; i += 4) {
	                var _r = r((rcache || Math.random()) * 0x100000000);

	                rcache = _r() * 0x3ade67b7;
	                words.push((_r() * 0x100000000) | 0);
	            }

	            return new WordArray.init(words, nBytes);
	        }
	    });

	    /**
	     * Encoder namespace.
	     */
	    var C_enc = C.enc = {};

	    /**
	     * Hex encoding strategy.
	     */
	    var Hex = C_enc.Hex = {
	        /**
	         * Converts a word array to a hex string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The hex string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var hexChars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                hexChars.push((bite >>> 4).toString(16));
	                hexChars.push((bite & 0x0f).toString(16));
	            }

	            return hexChars.join('');
	        },

	        /**
	         * Converts a hex string to a word array.
	         *
	         * @param {string} hexStr The hex string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
	         */
	        parse: function (hexStr) {
	            // Shortcut
	            var hexStrLength = hexStr.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < hexStrLength; i += 2) {
	                words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
	            }

	            return new WordArray.init(words, hexStrLength / 2);
	        }
	    };

	    /**
	     * Latin1 encoding strategy.
	     */
	    var Latin1 = C_enc.Latin1 = {
	        /**
	         * Converts a word array to a Latin1 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Latin1 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var latin1Chars = [];
	            for (var i = 0; i < sigBytes; i++) {
	                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
	                latin1Chars.push(String.fromCharCode(bite));
	            }

	            return latin1Chars.join('');
	        },

	        /**
	         * Converts a Latin1 string to a word array.
	         *
	         * @param {string} latin1Str The Latin1 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
	         */
	        parse: function (latin1Str) {
	            // Shortcut
	            var latin1StrLength = latin1Str.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < latin1StrLength; i++) {
	                words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
	            }

	            return new WordArray.init(words, latin1StrLength);
	        }
	    };

	    /**
	     * UTF-8 encoding strategy.
	     */
	    var Utf8 = C_enc.Utf8 = {
	        /**
	         * Converts a word array to a UTF-8 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-8 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            try {
	                return decodeURIComponent(escape(Latin1.stringify(wordArray)));
	            } catch (e) {
	                throw new Error('Malformed UTF-8 data');
	            }
	        },

	        /**
	         * Converts a UTF-8 string to a word array.
	         *
	         * @param {string} utf8Str The UTF-8 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
	         */
	        parse: function (utf8Str) {
	            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
	        }
	    };

	    /**
	     * Abstract buffered block algorithm template.
	     *
	     * The property blockSize must be implemented in a concrete subtype.
	     *
	     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
	     */
	    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
	        /**
	         * Resets this block algorithm's data buffer to its initial state.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm.reset();
	         */
	        reset: function () {
	            // Initial values
	            this._data = new WordArray.init();
	            this._nDataBytes = 0;
	        },

	        /**
	         * Adds new data to this block algorithm's buffer.
	         *
	         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
	         *
	         * @example
	         *
	         *     bufferedBlockAlgorithm._append('data');
	         *     bufferedBlockAlgorithm._append(wordArray);
	         */
	        _append: function (data) {
	            // Convert string to WordArray, else assume WordArray already
	            if (typeof data == 'string') {
	                data = Utf8.parse(data);
	            }

	            // Append
	            this._data.concat(data);
	            this._nDataBytes += data.sigBytes;
	        },

	        /**
	         * Processes available data blocks.
	         *
	         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
	         *
	         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
	         *
	         * @return {WordArray} The processed data.
	         *
	         * @example
	         *
	         *     var processedData = bufferedBlockAlgorithm._process();
	         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
	         */
	        _process: function (doFlush) {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;
	            var dataSigBytes = data.sigBytes;
	            var blockSize = this.blockSize;
	            var blockSizeBytes = blockSize * 4;

	            // Count blocks ready
	            var nBlocksReady = dataSigBytes / blockSizeBytes;
	            if (doFlush) {
	                // Round up to include partial blocks
	                nBlocksReady = Math.ceil(nBlocksReady);
	            } else {
	                // Round down to include only full blocks,
	                // less the number of blocks that must remain in the buffer
	                nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
	            }

	            // Count words ready
	            var nWordsReady = nBlocksReady * blockSize;

	            // Count bytes ready
	            var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);

	            // Process blocks
	            if (nWordsReady) {
	                for (var offset = 0; offset < nWordsReady; offset += blockSize) {
	                    // Perform concrete-algorithm logic
	                    this._doProcessBlock(dataWords, offset);
	                }

	                // Remove processed words
	                var processedWords = dataWords.splice(0, nWordsReady);
	                data.sigBytes -= nBytesReady;
	            }

	            // Return processed words
	            return new WordArray.init(processedWords, nBytesReady);
	        },

	        /**
	         * Creates a copy of this object.
	         *
	         * @return {Object} The clone.
	         *
	         * @example
	         *
	         *     var clone = bufferedBlockAlgorithm.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);
	            clone._data = this._data.clone();

	            return clone;
	        },

	        _minBufferSize: 0
	    });

	    /**
	     * Abstract hasher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
	     */
	    var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
	        /**
	         * Configuration options.
	         */
	        cfg: Base.extend(),

	        /**
	         * Initializes a newly created hasher.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
	         *
	         * @example
	         *
	         *     var hasher = CryptoJS.algo.SHA256.create();
	         */
	        init: function (cfg) {
	            // Apply config defaults
	            this.cfg = this.cfg.extend(cfg);

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this hasher to its initial state.
	         *
	         * @example
	         *
	         *     hasher.reset();
	         */
	        reset: function () {
	            // Reset data buffer
	            BufferedBlockAlgorithm.reset.call(this);

	            // Perform concrete-hasher logic
	            this._doReset();
	        },

	        /**
	         * Updates this hasher with a message.
	         *
	         * @param {WordArray|string} messageUpdate The message to append.
	         *
	         * @return {Hasher} This hasher.
	         *
	         * @example
	         *
	         *     hasher.update('message');
	         *     hasher.update(wordArray);
	         */
	        update: function (messageUpdate) {
	            // Append
	            this._append(messageUpdate);

	            // Update the hash
	            this._process();

	            // Chainable
	            return this;
	        },

	        /**
	         * Finalizes the hash computation.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
	         *
	         * @return {WordArray} The hash.
	         *
	         * @example
	         *
	         *     var hash = hasher.finalize();
	         *     var hash = hasher.finalize('message');
	         *     var hash = hasher.finalize(wordArray);
	         */
	        finalize: function (messageUpdate) {
	            // Final message update
	            if (messageUpdate) {
	                this._append(messageUpdate);
	            }

	            // Perform concrete-hasher logic
	            var hash = this._doFinalize();

	            return hash;
	        },

	        blockSize: 512/32,

	        /**
	         * Creates a shortcut function to a hasher's object interface.
	         *
	         * @param {Hasher} hasher The hasher to create a helper for.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
	         */
	        _createHelper: function (hasher) {
	            return function (message, cfg) {
	                return new hasher.init(cfg).finalize(message);
	            };
	        },

	        /**
	         * Creates a shortcut function to the HMAC's object interface.
	         *
	         * @param {Hasher} hasher The hasher to use in this HMAC helper.
	         *
	         * @return {Function} The shortcut function.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
	         */
	        _createHmacHelper: function (hasher) {
	            return function (message, key) {
	                return new C_algo.HMAC.init(hasher, key).finalize(message);
	            };
	        }
	    });

	    /**
	     * Algorithm namespace.
	     */
	    var C_algo = C.algo = {};

	    return C;
	}(Math));


	return CryptoJS;

}));

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(44));
	}
	else {}
}(this, function (CryptoJS) {

	(function (undefined) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var X32WordArray = C_lib.WordArray;

	    /**
	     * x64 namespace.
	     */
	    var C_x64 = C.x64 = {};

	    /**
	     * A 64-bit word.
	     */
	    var X64Word = C_x64.Word = Base.extend({
	        /**
	         * Initializes a newly created 64-bit word.
	         *
	         * @param {number} high The high 32 bits.
	         * @param {number} low The low 32 bits.
	         *
	         * @example
	         *
	         *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
	         */
	        init: function (high, low) {
	            this.high = high;
	            this.low = low;
	        }

	        /**
	         * Bitwise NOTs this word.
	         *
	         * @return {X64Word} A new x64-Word object after negating.
	         *
	         * @example
	         *
	         *     var negated = x64Word.not();
	         */
	        // not: function () {
	            // var high = ~this.high;
	            // var low = ~this.low;

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Bitwise ANDs this word with the passed word.
	         *
	         * @param {X64Word} word The x64-Word to AND with this word.
	         *
	         * @return {X64Word} A new x64-Word object after ANDing.
	         *
	         * @example
	         *
	         *     var anded = x64Word.and(anotherX64Word);
	         */
	        // and: function (word) {
	            // var high = this.high & word.high;
	            // var low = this.low & word.low;

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Bitwise ORs this word with the passed word.
	         *
	         * @param {X64Word} word The x64-Word to OR with this word.
	         *
	         * @return {X64Word} A new x64-Word object after ORing.
	         *
	         * @example
	         *
	         *     var ored = x64Word.or(anotherX64Word);
	         */
	        // or: function (word) {
	            // var high = this.high | word.high;
	            // var low = this.low | word.low;

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Bitwise XORs this word with the passed word.
	         *
	         * @param {X64Word} word The x64-Word to XOR with this word.
	         *
	         * @return {X64Word} A new x64-Word object after XORing.
	         *
	         * @example
	         *
	         *     var xored = x64Word.xor(anotherX64Word);
	         */
	        // xor: function (word) {
	            // var high = this.high ^ word.high;
	            // var low = this.low ^ word.low;

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Shifts this word n bits to the left.
	         *
	         * @param {number} n The number of bits to shift.
	         *
	         * @return {X64Word} A new x64-Word object after shifting.
	         *
	         * @example
	         *
	         *     var shifted = x64Word.shiftL(25);
	         */
	        // shiftL: function (n) {
	            // if (n < 32) {
	                // var high = (this.high << n) | (this.low >>> (32 - n));
	                // var low = this.low << n;
	            // } else {
	                // var high = this.low << (n - 32);
	                // var low = 0;
	            // }

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Shifts this word n bits to the right.
	         *
	         * @param {number} n The number of bits to shift.
	         *
	         * @return {X64Word} A new x64-Word object after shifting.
	         *
	         * @example
	         *
	         *     var shifted = x64Word.shiftR(7);
	         */
	        // shiftR: function (n) {
	            // if (n < 32) {
	                // var low = (this.low >>> n) | (this.high << (32 - n));
	                // var high = this.high >>> n;
	            // } else {
	                // var low = this.high >>> (n - 32);
	                // var high = 0;
	            // }

	            // return X64Word.create(high, low);
	        // },

	        /**
	         * Rotates this word n bits to the left.
	         *
	         * @param {number} n The number of bits to rotate.
	         *
	         * @return {X64Word} A new x64-Word object after rotating.
	         *
	         * @example
	         *
	         *     var rotated = x64Word.rotL(25);
	         */
	        // rotL: function (n) {
	            // return this.shiftL(n).or(this.shiftR(64 - n));
	        // },

	        /**
	         * Rotates this word n bits to the right.
	         *
	         * @param {number} n The number of bits to rotate.
	         *
	         * @return {X64Word} A new x64-Word object after rotating.
	         *
	         * @example
	         *
	         *     var rotated = x64Word.rotR(7);
	         */
	        // rotR: function (n) {
	            // return this.shiftR(n).or(this.shiftL(64 - n));
	        // },

	        /**
	         * Adds this word with the passed word.
	         *
	         * @param {X64Word} word The x64-Word to add with this word.
	         *
	         * @return {X64Word} A new x64-Word object after adding.
	         *
	         * @example
	         *
	         *     var added = x64Word.add(anotherX64Word);
	         */
	        // add: function (word) {
	            // var low = (this.low + word.low) | 0;
	            // var carry = (low >>> 0) < (this.low >>> 0) ? 1 : 0;
	            // var high = (this.high + word.high + carry) | 0;

	            // return X64Word.create(high, low);
	        // }
	    });

	    /**
	     * An array of 64-bit words.
	     *
	     * @property {Array} words The array of CryptoJS.x64.Word objects.
	     * @property {number} sigBytes The number of significant bytes in this word array.
	     */
	    var X64WordArray = C_x64.WordArray = Base.extend({
	        /**
	         * Initializes a newly created word array.
	         *
	         * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
	         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.x64.WordArray.create();
	         *
	         *     var wordArray = CryptoJS.x64.WordArray.create([
	         *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
	         *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
	         *     ]);
	         *
	         *     var wordArray = CryptoJS.x64.WordArray.create([
	         *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
	         *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
	         *     ], 10);
	         */
	        init: function (words, sigBytes) {
	            words = this.words = words || [];

	            if (sigBytes != undefined) {
	                this.sigBytes = sigBytes;
	            } else {
	                this.sigBytes = words.length * 8;
	            }
	        },

	        /**
	         * Converts this 64-bit word array to a 32-bit word array.
	         *
	         * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
	         *
	         * @example
	         *
	         *     var x32WordArray = x64WordArray.toX32();
	         */
	        toX32: function () {
	            // Shortcuts
	            var x64Words = this.words;
	            var x64WordsLength = x64Words.length;

	            // Convert
	            var x32Words = [];
	            for (var i = 0; i < x64WordsLength; i++) {
	                var x64Word = x64Words[i];
	                x32Words.push(x64Word.high);
	                x32Words.push(x64Word.low);
	            }

	            return X32WordArray.create(x32Words, this.sigBytes);
	        },

	        /**
	         * Creates a copy of this word array.
	         *
	         * @return {X64WordArray} The clone.
	         *
	         * @example
	         *
	         *     var clone = x64WordArray.clone();
	         */
	        clone: function () {
	            var clone = Base.clone.call(this);

	            // Clone "words" array
	            var words = clone.words = this.words.slice(0);

	            // Clone each X64Word object
	            var wordsLength = words.length;
	            for (var i = 0; i < wordsLength; i++) {
	                words[i] = words[i].clone();
	            }

	            return clone;
	        }
	    });
	}());


	return CryptoJS;

}));

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(44));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Check if typed arrays are supported
	    if (typeof ArrayBuffer != 'function') {
	        return;
	    }

	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;

	    // Reference original init
	    var superInit = WordArray.init;

	    // Augment WordArray.init to handle typed arrays
	    var subInit = WordArray.init = function (typedArray) {
	        // Convert buffers to uint8
	        if (typedArray instanceof ArrayBuffer) {
	            typedArray = new Uint8Array(typedArray);
	        }

	        // Convert other array views to uint8
	        if (
	            typedArray instanceof Int8Array ||
	            (typeof Uint8ClampedArray !== "undefined" && typedArray instanceof Uint8ClampedArray) ||
	            typedArray instanceof Int16Array ||
	            typedArray instanceof Uint16Array ||
	            typedArray instanceof Int32Array ||
	            typedArray instanceof Uint32Array ||
	            typedArray instanceof Float32Array ||
	            typedArray instanceof Float64Array
	        ) {
	            typedArray = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
	        }

	        // Handle Uint8Array
	        if (typedArray instanceof Uint8Array) {
	            // Shortcut
	            var typedArrayByteLength = typedArray.byteLength;

	            // Extract bytes
	            var words = [];
	            for (var i = 0; i < typedArrayByteLength; i++) {
	                words[i >>> 2] |= typedArray[i] << (24 - (i % 4) * 8);
	            }

	            // Initialize this word array
	            superInit.call(this, words, typedArrayByteLength);
	        } else {
	            // Else call normal init
	            superInit.apply(this, arguments);
	        }
	    };

	    subInit.prototype = WordArray;
	}());


	return CryptoJS.lib.WordArray;

}));

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(44));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var C_enc = C.enc;

	    /**
	     * UTF-16 BE encoding strategy.
	     */
	    var Utf16BE = C_enc.Utf16 = C_enc.Utf16BE = {
	        /**
	         * Converts a word array to a UTF-16 BE string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-16 BE string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf16String = CryptoJS.enc.Utf16.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var utf16Chars = [];
	            for (var i = 0; i < sigBytes; i += 2) {
	                var codePoint = (words[i >>> 2] >>> (16 - (i % 4) * 8)) & 0xffff;
	                utf16Chars.push(String.fromCharCode(codePoint));
	            }

	            return utf16Chars.join('');
	        },

	        /**
	         * Converts a UTF-16 BE string to a word array.
	         *
	         * @param {string} utf16Str The UTF-16 BE string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf16.parse(utf16String);
	         */
	        parse: function (utf16Str) {
	            // Shortcut
	            var utf16StrLength = utf16Str.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < utf16StrLength; i++) {
	                words[i >>> 1] |= utf16Str.charCodeAt(i) << (16 - (i % 2) * 16);
	            }

	            return WordArray.create(words, utf16StrLength * 2);
	        }
	    };

	    /**
	     * UTF-16 LE encoding strategy.
	     */
	    C_enc.Utf16LE = {
	        /**
	         * Converts a word array to a UTF-16 LE string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The UTF-16 LE string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var utf16Str = CryptoJS.enc.Utf16LE.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;

	            // Convert
	            var utf16Chars = [];
	            for (var i = 0; i < sigBytes; i += 2) {
	                var codePoint = swapEndian((words[i >>> 2] >>> (16 - (i % 4) * 8)) & 0xffff);
	                utf16Chars.push(String.fromCharCode(codePoint));
	            }

	            return utf16Chars.join('');
	        },

	        /**
	         * Converts a UTF-16 LE string to a word array.
	         *
	         * @param {string} utf16Str The UTF-16 LE string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Utf16LE.parse(utf16Str);
	         */
	        parse: function (utf16Str) {
	            // Shortcut
	            var utf16StrLength = utf16Str.length;

	            // Convert
	            var words = [];
	            for (var i = 0; i < utf16StrLength; i++) {
	                words[i >>> 1] |= swapEndian(utf16Str.charCodeAt(i) << (16 - (i % 2) * 16));
	            }

	            return WordArray.create(words, utf16StrLength * 2);
	        }
	    };

	    function swapEndian(word) {
	        return ((word << 8) & 0xff00ff00) | ((word >>> 8) & 0x00ff00ff);
	    }
	}());


	return CryptoJS.enc.Utf16;

}));

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(44));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var C_enc = C.enc;

	    /**
	     * Base64 encoding strategy.
	     */
	    var Base64 = C_enc.Base64 = {
	        /**
	         * Converts a word array to a Base64 string.
	         *
	         * @param {WordArray} wordArray The word array.
	         *
	         * @return {string} The Base64 string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
	         */
	        stringify: function (wordArray) {
	            // Shortcuts
	            var words = wordArray.words;
	            var sigBytes = wordArray.sigBytes;
	            var map = this._map;

	            // Clamp excess bits
	            wordArray.clamp();

	            // Convert
	            var base64Chars = [];
	            for (var i = 0; i < sigBytes; i += 3) {
	                var byte1 = (words[i >>> 2]       >>> (24 - (i % 4) * 8))       & 0xff;
	                var byte2 = (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
	                var byte3 = (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;

	                var triplet = (byte1 << 16) | (byte2 << 8) | byte3;

	                for (var j = 0; (j < 4) && (i + j * 0.75 < sigBytes); j++) {
	                    base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
	                }
	            }

	            // Add padding
	            var paddingChar = map.charAt(64);
	            if (paddingChar) {
	                while (base64Chars.length % 4) {
	                    base64Chars.push(paddingChar);
	                }
	            }

	            return base64Chars.join('');
	        },

	        /**
	         * Converts a Base64 string to a word array.
	         *
	         * @param {string} base64Str The Base64 string.
	         *
	         * @return {WordArray} The word array.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
	         */
	        parse: function (base64Str) {
	            // Shortcuts
	            var base64StrLength = base64Str.length;
	            var map = this._map;
	            var reverseMap = this._reverseMap;

	            if (!reverseMap) {
	                    reverseMap = this._reverseMap = [];
	                    for (var j = 0; j < map.length; j++) {
	                        reverseMap[map.charCodeAt(j)] = j;
	                    }
	            }

	            // Ignore padding
	            var paddingChar = map.charAt(64);
	            if (paddingChar) {
	                var paddingIndex = base64Str.indexOf(paddingChar);
	                if (paddingIndex !== -1) {
	                    base64StrLength = paddingIndex;
	                }
	            }

	            // Convert
	            return parseLoop(base64Str, base64StrLength, reverseMap);

	        },

	        _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
	    };

	    function parseLoop(base64Str, base64StrLength, reverseMap) {
	      var words = [];
	      var nBytes = 0;
	      for (var i = 0; i < base64StrLength; i++) {
	          if (i % 4) {
	              var bits1 = reverseMap[base64Str.charCodeAt(i - 1)] << ((i % 4) * 2);
	              var bits2 = reverseMap[base64Str.charCodeAt(i)] >>> (6 - (i % 4) * 2);
	              words[nBytes >>> 2] |= (bits1 | bits2) << (24 - (nBytes % 4) * 8);
	              nBytes++;
	          }
	      }
	      return WordArray.create(words, nBytes);
	    }
	}());


	return CryptoJS.enc.Base64;

}));

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(44));
	}
	else {}
}(this, function (CryptoJS) {

	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Constants table
	    var T = [];

	    // Compute constants
	    (function () {
	        for (var i = 0; i < 64; i++) {
	            T[i] = (Math.abs(Math.sin(i + 1)) * 0x100000000) | 0;
	        }
	    }());

	    /**
	     * MD5 hash algorithm.
	     */
	    var MD5 = C_algo.MD5 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init([
	                0x67452301, 0xefcdab89,
	                0x98badcfe, 0x10325476
	            ]);
	        },

	        _doProcessBlock: function (M, offset) {
	            // Swap endian
	            for (var i = 0; i < 16; i++) {
	                // Shortcuts
	                var offset_i = offset + i;
	                var M_offset_i = M[offset_i];

	                M[offset_i] = (
	                    (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
	                    (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
	                );
	            }

	            // Shortcuts
	            var H = this._hash.words;

	            var M_offset_0  = M[offset + 0];
	            var M_offset_1  = M[offset + 1];
	            var M_offset_2  = M[offset + 2];
	            var M_offset_3  = M[offset + 3];
	            var M_offset_4  = M[offset + 4];
	            var M_offset_5  = M[offset + 5];
	            var M_offset_6  = M[offset + 6];
	            var M_offset_7  = M[offset + 7];
	            var M_offset_8  = M[offset + 8];
	            var M_offset_9  = M[offset + 9];
	            var M_offset_10 = M[offset + 10];
	            var M_offset_11 = M[offset + 11];
	            var M_offset_12 = M[offset + 12];
	            var M_offset_13 = M[offset + 13];
	            var M_offset_14 = M[offset + 14];
	            var M_offset_15 = M[offset + 15];

	            // Working varialbes
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];

	            // Computation
	            a = FF(a, b, c, d, M_offset_0,  7,  T[0]);
	            d = FF(d, a, b, c, M_offset_1,  12, T[1]);
	            c = FF(c, d, a, b, M_offset_2,  17, T[2]);
	            b = FF(b, c, d, a, M_offset_3,  22, T[3]);
	            a = FF(a, b, c, d, M_offset_4,  7,  T[4]);
	            d = FF(d, a, b, c, M_offset_5,  12, T[5]);
	            c = FF(c, d, a, b, M_offset_6,  17, T[6]);
	            b = FF(b, c, d, a, M_offset_7,  22, T[7]);
	            a = FF(a, b, c, d, M_offset_8,  7,  T[8]);
	            d = FF(d, a, b, c, M_offset_9,  12, T[9]);
	            c = FF(c, d, a, b, M_offset_10, 17, T[10]);
	            b = FF(b, c, d, a, M_offset_11, 22, T[11]);
	            a = FF(a, b, c, d, M_offset_12, 7,  T[12]);
	            d = FF(d, a, b, c, M_offset_13, 12, T[13]);
	            c = FF(c, d, a, b, M_offset_14, 17, T[14]);
	            b = FF(b, c, d, a, M_offset_15, 22, T[15]);

	            a = GG(a, b, c, d, M_offset_1,  5,  T[16]);
	            d = GG(d, a, b, c, M_offset_6,  9,  T[17]);
	            c = GG(c, d, a, b, M_offset_11, 14, T[18]);
	            b = GG(b, c, d, a, M_offset_0,  20, T[19]);
	            a = GG(a, b, c, d, M_offset_5,  5,  T[20]);
	            d = GG(d, a, b, c, M_offset_10, 9,  T[21]);
	            c = GG(c, d, a, b, M_offset_15, 14, T[22]);
	            b = GG(b, c, d, a, M_offset_4,  20, T[23]);
	            a = GG(a, b, c, d, M_offset_9,  5,  T[24]);
	            d = GG(d, a, b, c, M_offset_14, 9,  T[25]);
	            c = GG(c, d, a, b, M_offset_3,  14, T[26]);
	            b = GG(b, c, d, a, M_offset_8,  20, T[27]);
	            a = GG(a, b, c, d, M_offset_13, 5,  T[28]);
	            d = GG(d, a, b, c, M_offset_2,  9,  T[29]);
	            c = GG(c, d, a, b, M_offset_7,  14, T[30]);
	            b = GG(b, c, d, a, M_offset_12, 20, T[31]);

	            a = HH(a, b, c, d, M_offset_5,  4,  T[32]);
	            d = HH(d, a, b, c, M_offset_8,  11, T[33]);
	            c = HH(c, d, a, b, M_offset_11, 16, T[34]);
	            b = HH(b, c, d, a, M_offset_14, 23, T[35]);
	            a = HH(a, b, c, d, M_offset_1,  4,  T[36]);
	            d = HH(d, a, b, c, M_offset_4,  11, T[37]);
	            c = HH(c, d, a, b, M_offset_7,  16, T[38]);
	            b = HH(b, c, d, a, M_offset_10, 23, T[39]);
	            a = HH(a, b, c, d, M_offset_13, 4,  T[40]);
	            d = HH(d, a, b, c, M_offset_0,  11, T[41]);
	            c = HH(c, d, a, b, M_offset_3,  16, T[42]);
	            b = HH(b, c, d, a, M_offset_6,  23, T[43]);
	            a = HH(a, b, c, d, M_offset_9,  4,  T[44]);
	            d = HH(d, a, b, c, M_offset_12, 11, T[45]);
	            c = HH(c, d, a, b, M_offset_15, 16, T[46]);
	            b = HH(b, c, d, a, M_offset_2,  23, T[47]);

	            a = II(a, b, c, d, M_offset_0,  6,  T[48]);
	            d = II(d, a, b, c, M_offset_7,  10, T[49]);
	            c = II(c, d, a, b, M_offset_14, 15, T[50]);
	            b = II(b, c, d, a, M_offset_5,  21, T[51]);
	            a = II(a, b, c, d, M_offset_12, 6,  T[52]);
	            d = II(d, a, b, c, M_offset_3,  10, T[53]);
	            c = II(c, d, a, b, M_offset_10, 15, T[54]);
	            b = II(b, c, d, a, M_offset_1,  21, T[55]);
	            a = II(a, b, c, d, M_offset_8,  6,  T[56]);
	            d = II(d, a, b, c, M_offset_15, 10, T[57]);
	            c = II(c, d, a, b, M_offset_6,  15, T[58]);
	            b = II(b, c, d, a, M_offset_13, 21, T[59]);
	            a = II(a, b, c, d, M_offset_4,  6,  T[60]);
	            d = II(d, a, b, c, M_offset_11, 10, T[61]);
	            c = II(c, d, a, b, M_offset_2,  15, T[62]);
	            b = II(b, c, d, a, M_offset_9,  21, T[63]);

	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);

	            var nBitsTotalH = Math.floor(nBitsTotal / 0x100000000);
	            var nBitsTotalL = nBitsTotal;
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = (
	                (((nBitsTotalH << 8)  | (nBitsTotalH >>> 24)) & 0x00ff00ff) |
	                (((nBitsTotalH << 24) | (nBitsTotalH >>> 8))  & 0xff00ff00)
	            );
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
	                (((nBitsTotalL << 8)  | (nBitsTotalL >>> 24)) & 0x00ff00ff) |
	                (((nBitsTotalL << 24) | (nBitsTotalL >>> 8))  & 0xff00ff00)
	            );

	            data.sigBytes = (dataWords.length + 1) * 4;

	            // Hash final blocks
	            this._process();

	            // Shortcuts
	            var hash = this._hash;
	            var H = hash.words;

	            // Swap endian
	            for (var i = 0; i < 4; i++) {
	                // Shortcut
	                var H_i = H[i];

	                H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
	                       (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
	            }

	            // Return final computed hash
	            return hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });

	    function FF(a, b, c, d, x, s, t) {
	        var n = a + ((b & c) | (~b & d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function GG(a, b, c, d, x, s, t) {
	        var n = a + ((b & d) | (c & ~d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function HH(a, b, c, d, x, s, t) {
	        var n = a + (b ^ c ^ d) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    function II(a, b, c, d, x, s, t) {
	        var n = a + (c ^ (b | ~d)) + x + t;
	        return ((n << s) | (n >>> (32 - s))) + b;
	    }

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.MD5('message');
	     *     var hash = CryptoJS.MD5(wordArray);
	     */
	    C.MD5 = Hasher._createHelper(MD5);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacMD5(message, key);
	     */
	    C.HmacMD5 = Hasher._createHmacHelper(MD5);
	}(Math));


	return CryptoJS.MD5;

}));

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(44));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Reusable object
	    var W = [];

	    /**
	     * SHA-1 hash algorithm.
	     */
	    var SHA1 = C_algo.SHA1 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init([
	                0x67452301, 0xefcdab89,
	                0x98badcfe, 0x10325476,
	                0xc3d2e1f0
	            ]);
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var H = this._hash.words;

	            // Working variables
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];
	            var e = H[4];

	            // Computation
	            for (var i = 0; i < 80; i++) {
	                if (i < 16) {
	                    W[i] = M[offset + i] | 0;
	                } else {
	                    var n = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
	                    W[i] = (n << 1) | (n >>> 31);
	                }

	                var t = ((a << 5) | (a >>> 27)) + e + W[i];
	                if (i < 20) {
	                    t += ((b & c) | (~b & d)) + 0x5a827999;
	                } else if (i < 40) {
	                    t += (b ^ c ^ d) + 0x6ed9eba1;
	                } else if (i < 60) {
	                    t += ((b & c) | (b & d) | (c & d)) - 0x70e44324;
	                } else /* if (i < 80) */ {
	                    t += (b ^ c ^ d) - 0x359d3e2a;
	                }

	                e = d;
	                d = c;
	                c = (b << 30) | (b >>> 2);
	                b = a;
	                a = t;
	            }

	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	            H[4] = (H[4] + e) | 0;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Return final computed hash
	            return this._hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA1('message');
	     *     var hash = CryptoJS.SHA1(wordArray);
	     */
	    C.SHA1 = Hasher._createHelper(SHA1);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA1(message, key);
	     */
	    C.HmacSHA1 = Hasher._createHmacHelper(SHA1);
	}());


	return CryptoJS.SHA1;

}));

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(44));
	}
	else {}
}(this, function (CryptoJS) {

	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Initialization and round constants tables
	    var H = [];
	    var K = [];

	    // Compute constants
	    (function () {
	        function isPrime(n) {
	            var sqrtN = Math.sqrt(n);
	            for (var factor = 2; factor <= sqrtN; factor++) {
	                if (!(n % factor)) {
	                    return false;
	                }
	            }

	            return true;
	        }

	        function getFractionalBits(n) {
	            return ((n - (n | 0)) * 0x100000000) | 0;
	        }

	        var n = 2;
	        var nPrime = 0;
	        while (nPrime < 64) {
	            if (isPrime(n)) {
	                if (nPrime < 8) {
	                    H[nPrime] = getFractionalBits(Math.pow(n, 1 / 2));
	                }
	                K[nPrime] = getFractionalBits(Math.pow(n, 1 / 3));

	                nPrime++;
	            }

	            n++;
	        }
	    }());

	    // Reusable object
	    var W = [];

	    /**
	     * SHA-256 hash algorithm.
	     */
	    var SHA256 = C_algo.SHA256 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init(H.slice(0));
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var H = this._hash.words;

	            // Working variables
	            var a = H[0];
	            var b = H[1];
	            var c = H[2];
	            var d = H[3];
	            var e = H[4];
	            var f = H[5];
	            var g = H[6];
	            var h = H[7];

	            // Computation
	            for (var i = 0; i < 64; i++) {
	                if (i < 16) {
	                    W[i] = M[offset + i] | 0;
	                } else {
	                    var gamma0x = W[i - 15];
	                    var gamma0  = ((gamma0x << 25) | (gamma0x >>> 7))  ^
	                                  ((gamma0x << 14) | (gamma0x >>> 18)) ^
	                                   (gamma0x >>> 3);

	                    var gamma1x = W[i - 2];
	                    var gamma1  = ((gamma1x << 15) | (gamma1x >>> 17)) ^
	                                  ((gamma1x << 13) | (gamma1x >>> 19)) ^
	                                   (gamma1x >>> 10);

	                    W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
	                }

	                var ch  = (e & f) ^ (~e & g);
	                var maj = (a & b) ^ (a & c) ^ (b & c);

	                var sigma0 = ((a << 30) | (a >>> 2)) ^ ((a << 19) | (a >>> 13)) ^ ((a << 10) | (a >>> 22));
	                var sigma1 = ((e << 26) | (e >>> 6)) ^ ((e << 21) | (e >>> 11)) ^ ((e << 7)  | (e >>> 25));

	                var t1 = h + sigma1 + ch + K[i] + W[i];
	                var t2 = sigma0 + maj;

	                h = g;
	                g = f;
	                f = e;
	                e = (d + t1) | 0;
	                d = c;
	                c = b;
	                b = a;
	                a = (t1 + t2) | 0;
	            }

	            // Intermediate hash value
	            H[0] = (H[0] + a) | 0;
	            H[1] = (H[1] + b) | 0;
	            H[2] = (H[2] + c) | 0;
	            H[3] = (H[3] + d) | 0;
	            H[4] = (H[4] + e) | 0;
	            H[5] = (H[5] + f) | 0;
	            H[6] = (H[6] + g) | 0;
	            H[7] = (H[7] + h) | 0;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Return final computed hash
	            return this._hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA256('message');
	     *     var hash = CryptoJS.SHA256(wordArray);
	     */
	    C.SHA256 = Hasher._createHelper(SHA256);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA256(message, key);
	     */
	    C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
	}(Math));


	return CryptoJS.SHA256;

}));

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(44), __webpack_require__(51));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var C_algo = C.algo;
	    var SHA256 = C_algo.SHA256;

	    /**
	     * SHA-224 hash algorithm.
	     */
	    var SHA224 = C_algo.SHA224 = SHA256.extend({
	        _doReset: function () {
	            this._hash = new WordArray.init([
	                0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939,
	                0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4
	            ]);
	        },

	        _doFinalize: function () {
	            var hash = SHA256._doFinalize.call(this);

	            hash.sigBytes -= 4;

	            return hash;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA224('message');
	     *     var hash = CryptoJS.SHA224(wordArray);
	     */
	    C.SHA224 = SHA256._createHelper(SHA224);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA224(message, key);
	     */
	    C.HmacSHA224 = SHA256._createHmacHelper(SHA224);
	}());


	return CryptoJS.SHA224;

}));

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(44), __webpack_require__(45));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Hasher = C_lib.Hasher;
	    var C_x64 = C.x64;
	    var X64Word = C_x64.Word;
	    var X64WordArray = C_x64.WordArray;
	    var C_algo = C.algo;

	    function X64Word_create() {
	        return X64Word.create.apply(X64Word, arguments);
	    }

	    // Constants
	    var K = [
	        X64Word_create(0x428a2f98, 0xd728ae22), X64Word_create(0x71374491, 0x23ef65cd),
	        X64Word_create(0xb5c0fbcf, 0xec4d3b2f), X64Word_create(0xe9b5dba5, 0x8189dbbc),
	        X64Word_create(0x3956c25b, 0xf348b538), X64Word_create(0x59f111f1, 0xb605d019),
	        X64Word_create(0x923f82a4, 0xaf194f9b), X64Word_create(0xab1c5ed5, 0xda6d8118),
	        X64Word_create(0xd807aa98, 0xa3030242), X64Word_create(0x12835b01, 0x45706fbe),
	        X64Word_create(0x243185be, 0x4ee4b28c), X64Word_create(0x550c7dc3, 0xd5ffb4e2),
	        X64Word_create(0x72be5d74, 0xf27b896f), X64Word_create(0x80deb1fe, 0x3b1696b1),
	        X64Word_create(0x9bdc06a7, 0x25c71235), X64Word_create(0xc19bf174, 0xcf692694),
	        X64Word_create(0xe49b69c1, 0x9ef14ad2), X64Word_create(0xefbe4786, 0x384f25e3),
	        X64Word_create(0x0fc19dc6, 0x8b8cd5b5), X64Word_create(0x240ca1cc, 0x77ac9c65),
	        X64Word_create(0x2de92c6f, 0x592b0275), X64Word_create(0x4a7484aa, 0x6ea6e483),
	        X64Word_create(0x5cb0a9dc, 0xbd41fbd4), X64Word_create(0x76f988da, 0x831153b5),
	        X64Word_create(0x983e5152, 0xee66dfab), X64Word_create(0xa831c66d, 0x2db43210),
	        X64Word_create(0xb00327c8, 0x98fb213f), X64Word_create(0xbf597fc7, 0xbeef0ee4),
	        X64Word_create(0xc6e00bf3, 0x3da88fc2), X64Word_create(0xd5a79147, 0x930aa725),
	        X64Word_create(0x06ca6351, 0xe003826f), X64Word_create(0x14292967, 0x0a0e6e70),
	        X64Word_create(0x27b70a85, 0x46d22ffc), X64Word_create(0x2e1b2138, 0x5c26c926),
	        X64Word_create(0x4d2c6dfc, 0x5ac42aed), X64Word_create(0x53380d13, 0x9d95b3df),
	        X64Word_create(0x650a7354, 0x8baf63de), X64Word_create(0x766a0abb, 0x3c77b2a8),
	        X64Word_create(0x81c2c92e, 0x47edaee6), X64Word_create(0x92722c85, 0x1482353b),
	        X64Word_create(0xa2bfe8a1, 0x4cf10364), X64Word_create(0xa81a664b, 0xbc423001),
	        X64Word_create(0xc24b8b70, 0xd0f89791), X64Word_create(0xc76c51a3, 0x0654be30),
	        X64Word_create(0xd192e819, 0xd6ef5218), X64Word_create(0xd6990624, 0x5565a910),
	        X64Word_create(0xf40e3585, 0x5771202a), X64Word_create(0x106aa070, 0x32bbd1b8),
	        X64Word_create(0x19a4c116, 0xb8d2d0c8), X64Word_create(0x1e376c08, 0x5141ab53),
	        X64Word_create(0x2748774c, 0xdf8eeb99), X64Word_create(0x34b0bcb5, 0xe19b48a8),
	        X64Word_create(0x391c0cb3, 0xc5c95a63), X64Word_create(0x4ed8aa4a, 0xe3418acb),
	        X64Word_create(0x5b9cca4f, 0x7763e373), X64Word_create(0x682e6ff3, 0xd6b2b8a3),
	        X64Word_create(0x748f82ee, 0x5defb2fc), X64Word_create(0x78a5636f, 0x43172f60),
	        X64Word_create(0x84c87814, 0xa1f0ab72), X64Word_create(0x8cc70208, 0x1a6439ec),
	        X64Word_create(0x90befffa, 0x23631e28), X64Word_create(0xa4506ceb, 0xde82bde9),
	        X64Word_create(0xbef9a3f7, 0xb2c67915), X64Word_create(0xc67178f2, 0xe372532b),
	        X64Word_create(0xca273ece, 0xea26619c), X64Word_create(0xd186b8c7, 0x21c0c207),
	        X64Word_create(0xeada7dd6, 0xcde0eb1e), X64Word_create(0xf57d4f7f, 0xee6ed178),
	        X64Word_create(0x06f067aa, 0x72176fba), X64Word_create(0x0a637dc5, 0xa2c898a6),
	        X64Word_create(0x113f9804, 0xbef90dae), X64Word_create(0x1b710b35, 0x131c471b),
	        X64Word_create(0x28db77f5, 0x23047d84), X64Word_create(0x32caab7b, 0x40c72493),
	        X64Word_create(0x3c9ebe0a, 0x15c9bebc), X64Word_create(0x431d67c4, 0x9c100d4c),
	        X64Word_create(0x4cc5d4be, 0xcb3e42b6), X64Word_create(0x597f299c, 0xfc657e2a),
	        X64Word_create(0x5fcb6fab, 0x3ad6faec), X64Word_create(0x6c44198c, 0x4a475817)
	    ];

	    // Reusable objects
	    var W = [];
	    (function () {
	        for (var i = 0; i < 80; i++) {
	            W[i] = X64Word_create();
	        }
	    }());

	    /**
	     * SHA-512 hash algorithm.
	     */
	    var SHA512 = C_algo.SHA512 = Hasher.extend({
	        _doReset: function () {
	            this._hash = new X64WordArray.init([
	                new X64Word.init(0x6a09e667, 0xf3bcc908), new X64Word.init(0xbb67ae85, 0x84caa73b),
	                new X64Word.init(0x3c6ef372, 0xfe94f82b), new X64Word.init(0xa54ff53a, 0x5f1d36f1),
	                new X64Word.init(0x510e527f, 0xade682d1), new X64Word.init(0x9b05688c, 0x2b3e6c1f),
	                new X64Word.init(0x1f83d9ab, 0xfb41bd6b), new X64Word.init(0x5be0cd19, 0x137e2179)
	            ]);
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcuts
	            var H = this._hash.words;

	            var H0 = H[0];
	            var H1 = H[1];
	            var H2 = H[2];
	            var H3 = H[3];
	            var H4 = H[4];
	            var H5 = H[5];
	            var H6 = H[6];
	            var H7 = H[7];

	            var H0h = H0.high;
	            var H0l = H0.low;
	            var H1h = H1.high;
	            var H1l = H1.low;
	            var H2h = H2.high;
	            var H2l = H2.low;
	            var H3h = H3.high;
	            var H3l = H3.low;
	            var H4h = H4.high;
	            var H4l = H4.low;
	            var H5h = H5.high;
	            var H5l = H5.low;
	            var H6h = H6.high;
	            var H6l = H6.low;
	            var H7h = H7.high;
	            var H7l = H7.low;

	            // Working variables
	            var ah = H0h;
	            var al = H0l;
	            var bh = H1h;
	            var bl = H1l;
	            var ch = H2h;
	            var cl = H2l;
	            var dh = H3h;
	            var dl = H3l;
	            var eh = H4h;
	            var el = H4l;
	            var fh = H5h;
	            var fl = H5l;
	            var gh = H6h;
	            var gl = H6l;
	            var hh = H7h;
	            var hl = H7l;

	            // Rounds
	            for (var i = 0; i < 80; i++) {
	                // Shortcut
	                var Wi = W[i];

	                // Extend message
	                if (i < 16) {
	                    var Wih = Wi.high = M[offset + i * 2]     | 0;
	                    var Wil = Wi.low  = M[offset + i * 2 + 1] | 0;
	                } else {
	                    // Gamma0
	                    var gamma0x  = W[i - 15];
	                    var gamma0xh = gamma0x.high;
	                    var gamma0xl = gamma0x.low;
	                    var gamma0h  = ((gamma0xh >>> 1) | (gamma0xl << 31)) ^ ((gamma0xh >>> 8) | (gamma0xl << 24)) ^ (gamma0xh >>> 7);
	                    var gamma0l  = ((gamma0xl >>> 1) | (gamma0xh << 31)) ^ ((gamma0xl >>> 8) | (gamma0xh << 24)) ^ ((gamma0xl >>> 7) | (gamma0xh << 25));

	                    // Gamma1
	                    var gamma1x  = W[i - 2];
	                    var gamma1xh = gamma1x.high;
	                    var gamma1xl = gamma1x.low;
	                    var gamma1h  = ((gamma1xh >>> 19) | (gamma1xl << 13)) ^ ((gamma1xh << 3) | (gamma1xl >>> 29)) ^ (gamma1xh >>> 6);
	                    var gamma1l  = ((gamma1xl >>> 19) | (gamma1xh << 13)) ^ ((gamma1xl << 3) | (gamma1xh >>> 29)) ^ ((gamma1xl >>> 6) | (gamma1xh << 26));

	                    // W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]
	                    var Wi7  = W[i - 7];
	                    var Wi7h = Wi7.high;
	                    var Wi7l = Wi7.low;

	                    var Wi16  = W[i - 16];
	                    var Wi16h = Wi16.high;
	                    var Wi16l = Wi16.low;

	                    var Wil = gamma0l + Wi7l;
	                    var Wih = gamma0h + Wi7h + ((Wil >>> 0) < (gamma0l >>> 0) ? 1 : 0);
	                    var Wil = Wil + gamma1l;
	                    var Wih = Wih + gamma1h + ((Wil >>> 0) < (gamma1l >>> 0) ? 1 : 0);
	                    var Wil = Wil + Wi16l;
	                    var Wih = Wih + Wi16h + ((Wil >>> 0) < (Wi16l >>> 0) ? 1 : 0);

	                    Wi.high = Wih;
	                    Wi.low  = Wil;
	                }

	                var chh  = (eh & fh) ^ (~eh & gh);
	                var chl  = (el & fl) ^ (~el & gl);
	                var majh = (ah & bh) ^ (ah & ch) ^ (bh & ch);
	                var majl = (al & bl) ^ (al & cl) ^ (bl & cl);

	                var sigma0h = ((ah >>> 28) | (al << 4))  ^ ((ah << 30)  | (al >>> 2)) ^ ((ah << 25) | (al >>> 7));
	                var sigma0l = ((al >>> 28) | (ah << 4))  ^ ((al << 30)  | (ah >>> 2)) ^ ((al << 25) | (ah >>> 7));
	                var sigma1h = ((eh >>> 14) | (el << 18)) ^ ((eh >>> 18) | (el << 14)) ^ ((eh << 23) | (el >>> 9));
	                var sigma1l = ((el >>> 14) | (eh << 18)) ^ ((el >>> 18) | (eh << 14)) ^ ((el << 23) | (eh >>> 9));

	                // t1 = h + sigma1 + ch + K[i] + W[i]
	                var Ki  = K[i];
	                var Kih = Ki.high;
	                var Kil = Ki.low;

	                var t1l = hl + sigma1l;
	                var t1h = hh + sigma1h + ((t1l >>> 0) < (hl >>> 0) ? 1 : 0);
	                var t1l = t1l + chl;
	                var t1h = t1h + chh + ((t1l >>> 0) < (chl >>> 0) ? 1 : 0);
	                var t1l = t1l + Kil;
	                var t1h = t1h + Kih + ((t1l >>> 0) < (Kil >>> 0) ? 1 : 0);
	                var t1l = t1l + Wil;
	                var t1h = t1h + Wih + ((t1l >>> 0) < (Wil >>> 0) ? 1 : 0);

	                // t2 = sigma0 + maj
	                var t2l = sigma0l + majl;
	                var t2h = sigma0h + majh + ((t2l >>> 0) < (sigma0l >>> 0) ? 1 : 0);

	                // Update working variables
	                hh = gh;
	                hl = gl;
	                gh = fh;
	                gl = fl;
	                fh = eh;
	                fl = el;
	                el = (dl + t1l) | 0;
	                eh = (dh + t1h + ((el >>> 0) < (dl >>> 0) ? 1 : 0)) | 0;
	                dh = ch;
	                dl = cl;
	                ch = bh;
	                cl = bl;
	                bh = ah;
	                bl = al;
	                al = (t1l + t2l) | 0;
	                ah = (t1h + t2h + ((al >>> 0) < (t1l >>> 0) ? 1 : 0)) | 0;
	            }

	            // Intermediate hash value
	            H0l = H0.low  = (H0l + al);
	            H0.high = (H0h + ah + ((H0l >>> 0) < (al >>> 0) ? 1 : 0));
	            H1l = H1.low  = (H1l + bl);
	            H1.high = (H1h + bh + ((H1l >>> 0) < (bl >>> 0) ? 1 : 0));
	            H2l = H2.low  = (H2l + cl);
	            H2.high = (H2h + ch + ((H2l >>> 0) < (cl >>> 0) ? 1 : 0));
	            H3l = H3.low  = (H3l + dl);
	            H3.high = (H3h + dh + ((H3l >>> 0) < (dl >>> 0) ? 1 : 0));
	            H4l = H4.low  = (H4l + el);
	            H4.high = (H4h + eh + ((H4l >>> 0) < (el >>> 0) ? 1 : 0));
	            H5l = H5.low  = (H5l + fl);
	            H5.high = (H5h + fh + ((H5l >>> 0) < (fl >>> 0) ? 1 : 0));
	            H6l = H6.low  = (H6l + gl);
	            H6.high = (H6h + gh + ((H6l >>> 0) < (gl >>> 0) ? 1 : 0));
	            H7l = H7.low  = (H7l + hl);
	            H7.high = (H7h + hh + ((H7l >>> 0) < (hl >>> 0) ? 1 : 0));
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 128) >>> 10) << 5) + 30] = Math.floor(nBitsTotal / 0x100000000);
	            dataWords[(((nBitsLeft + 128) >>> 10) << 5) + 31] = nBitsTotal;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Convert hash to 32-bit word array before returning
	            var hash = this._hash.toX32();

	            // Return final computed hash
	            return hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        },

	        blockSize: 1024/32
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA512('message');
	     *     var hash = CryptoJS.SHA512(wordArray);
	     */
	    C.SHA512 = Hasher._createHelper(SHA512);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA512(message, key);
	     */
	    C.HmacSHA512 = Hasher._createHmacHelper(SHA512);
	}());


	return CryptoJS.SHA512;

}));

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(44), __webpack_require__(45), __webpack_require__(53));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_x64 = C.x64;
	    var X64Word = C_x64.Word;
	    var X64WordArray = C_x64.WordArray;
	    var C_algo = C.algo;
	    var SHA512 = C_algo.SHA512;

	    /**
	     * SHA-384 hash algorithm.
	     */
	    var SHA384 = C_algo.SHA384 = SHA512.extend({
	        _doReset: function () {
	            this._hash = new X64WordArray.init([
	                new X64Word.init(0xcbbb9d5d, 0xc1059ed8), new X64Word.init(0x629a292a, 0x367cd507),
	                new X64Word.init(0x9159015a, 0x3070dd17), new X64Word.init(0x152fecd8, 0xf70e5939),
	                new X64Word.init(0x67332667, 0xffc00b31), new X64Word.init(0x8eb44a87, 0x68581511),
	                new X64Word.init(0xdb0c2e0d, 0x64f98fa7), new X64Word.init(0x47b5481d, 0xbefa4fa4)
	            ]);
	        },

	        _doFinalize: function () {
	            var hash = SHA512._doFinalize.call(this);

	            hash.sigBytes -= 16;

	            return hash;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA384('message');
	     *     var hash = CryptoJS.SHA384(wordArray);
	     */
	    C.SHA384 = SHA512._createHelper(SHA384);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA384(message, key);
	     */
	    C.HmacSHA384 = SHA512._createHmacHelper(SHA384);
	}());


	return CryptoJS.SHA384;

}));

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(44), __webpack_require__(45));
	}
	else {}
}(this, function (CryptoJS) {

	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_x64 = C.x64;
	    var X64Word = C_x64.Word;
	    var C_algo = C.algo;

	    // Constants tables
	    var RHO_OFFSETS = [];
	    var PI_INDEXES  = [];
	    var ROUND_CONSTANTS = [];

	    // Compute Constants
	    (function () {
	        // Compute rho offset constants
	        var x = 1, y = 0;
	        for (var t = 0; t < 24; t++) {
	            RHO_OFFSETS[x + 5 * y] = ((t + 1) * (t + 2) / 2) % 64;

	            var newX = y % 5;
	            var newY = (2 * x + 3 * y) % 5;
	            x = newX;
	            y = newY;
	        }

	        // Compute pi index constants
	        for (var x = 0; x < 5; x++) {
	            for (var y = 0; y < 5; y++) {
	                PI_INDEXES[x + 5 * y] = y + ((2 * x + 3 * y) % 5) * 5;
	            }
	        }

	        // Compute round constants
	        var LFSR = 0x01;
	        for (var i = 0; i < 24; i++) {
	            var roundConstantMsw = 0;
	            var roundConstantLsw = 0;

	            for (var j = 0; j < 7; j++) {
	                if (LFSR & 0x01) {
	                    var bitPosition = (1 << j) - 1;
	                    if (bitPosition < 32) {
	                        roundConstantLsw ^= 1 << bitPosition;
	                    } else /* if (bitPosition >= 32) */ {
	                        roundConstantMsw ^= 1 << (bitPosition - 32);
	                    }
	                }

	                // Compute next LFSR
	                if (LFSR & 0x80) {
	                    // Primitive polynomial over GF(2): x^8 + x^6 + x^5 + x^4 + 1
	                    LFSR = (LFSR << 1) ^ 0x71;
	                } else {
	                    LFSR <<= 1;
	                }
	            }

	            ROUND_CONSTANTS[i] = X64Word.create(roundConstantMsw, roundConstantLsw);
	        }
	    }());

	    // Reusable objects for temporary values
	    var T = [];
	    (function () {
	        for (var i = 0; i < 25; i++) {
	            T[i] = X64Word.create();
	        }
	    }());

	    /**
	     * SHA-3 hash algorithm.
	     */
	    var SHA3 = C_algo.SHA3 = Hasher.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {number} outputLength
	         *   The desired number of bits in the output hash.
	         *   Only values permitted are: 224, 256, 384, 512.
	         *   Default: 512
	         */
	        cfg: Hasher.cfg.extend({
	            outputLength: 512
	        }),

	        _doReset: function () {
	            var state = this._state = []
	            for (var i = 0; i < 25; i++) {
	                state[i] = new X64Word.init();
	            }

	            this.blockSize = (1600 - 2 * this.cfg.outputLength) / 32;
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcuts
	            var state = this._state;
	            var nBlockSizeLanes = this.blockSize / 2;

	            // Absorb
	            for (var i = 0; i < nBlockSizeLanes; i++) {
	                // Shortcuts
	                var M2i  = M[offset + 2 * i];
	                var M2i1 = M[offset + 2 * i + 1];

	                // Swap endian
	                M2i = (
	                    (((M2i << 8)  | (M2i >>> 24)) & 0x00ff00ff) |
	                    (((M2i << 24) | (M2i >>> 8))  & 0xff00ff00)
	                );
	                M2i1 = (
	                    (((M2i1 << 8)  | (M2i1 >>> 24)) & 0x00ff00ff) |
	                    (((M2i1 << 24) | (M2i1 >>> 8))  & 0xff00ff00)
	                );

	                // Absorb message into state
	                var lane = state[i];
	                lane.high ^= M2i1;
	                lane.low  ^= M2i;
	            }

	            // Rounds
	            for (var round = 0; round < 24; round++) {
	                // Theta
	                for (var x = 0; x < 5; x++) {
	                    // Mix column lanes
	                    var tMsw = 0, tLsw = 0;
	                    for (var y = 0; y < 5; y++) {
	                        var lane = state[x + 5 * y];
	                        tMsw ^= lane.high;
	                        tLsw ^= lane.low;
	                    }

	                    // Temporary values
	                    var Tx = T[x];
	                    Tx.high = tMsw;
	                    Tx.low  = tLsw;
	                }
	                for (var x = 0; x < 5; x++) {
	                    // Shortcuts
	                    var Tx4 = T[(x + 4) % 5];
	                    var Tx1 = T[(x + 1) % 5];
	                    var Tx1Msw = Tx1.high;
	                    var Tx1Lsw = Tx1.low;

	                    // Mix surrounding columns
	                    var tMsw = Tx4.high ^ ((Tx1Msw << 1) | (Tx1Lsw >>> 31));
	                    var tLsw = Tx4.low  ^ ((Tx1Lsw << 1) | (Tx1Msw >>> 31));
	                    for (var y = 0; y < 5; y++) {
	                        var lane = state[x + 5 * y];
	                        lane.high ^= tMsw;
	                        lane.low  ^= tLsw;
	                    }
	                }

	                // Rho Pi
	                for (var laneIndex = 1; laneIndex < 25; laneIndex++) {
	                    // Shortcuts
	                    var lane = state[laneIndex];
	                    var laneMsw = lane.high;
	                    var laneLsw = lane.low;
	                    var rhoOffset = RHO_OFFSETS[laneIndex];

	                    // Rotate lanes
	                    if (rhoOffset < 32) {
	                        var tMsw = (laneMsw << rhoOffset) | (laneLsw >>> (32 - rhoOffset));
	                        var tLsw = (laneLsw << rhoOffset) | (laneMsw >>> (32 - rhoOffset));
	                    } else /* if (rhoOffset >= 32) */ {
	                        var tMsw = (laneLsw << (rhoOffset - 32)) | (laneMsw >>> (64 - rhoOffset));
	                        var tLsw = (laneMsw << (rhoOffset - 32)) | (laneLsw >>> (64 - rhoOffset));
	                    }

	                    // Transpose lanes
	                    var TPiLane = T[PI_INDEXES[laneIndex]];
	                    TPiLane.high = tMsw;
	                    TPiLane.low  = tLsw;
	                }

	                // Rho pi at x = y = 0
	                var T0 = T[0];
	                var state0 = state[0];
	                T0.high = state0.high;
	                T0.low  = state0.low;

	                // Chi
	                for (var x = 0; x < 5; x++) {
	                    for (var y = 0; y < 5; y++) {
	                        // Shortcuts
	                        var laneIndex = x + 5 * y;
	                        var lane = state[laneIndex];
	                        var TLane = T[laneIndex];
	                        var Tx1Lane = T[((x + 1) % 5) + 5 * y];
	                        var Tx2Lane = T[((x + 2) % 5) + 5 * y];

	                        // Mix rows
	                        lane.high = TLane.high ^ (~Tx1Lane.high & Tx2Lane.high);
	                        lane.low  = TLane.low  ^ (~Tx1Lane.low  & Tx2Lane.low);
	                    }
	                }

	                // Iota
	                var lane = state[0];
	                var roundConstant = ROUND_CONSTANTS[round];
	                lane.high ^= roundConstant.high;
	                lane.low  ^= roundConstant.low;;
	            }
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;
	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;
	            var blockSizeBits = this.blockSize * 32;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x1 << (24 - nBitsLeft % 32);
	            dataWords[((Math.ceil((nBitsLeft + 1) / blockSizeBits) * blockSizeBits) >>> 5) - 1] |= 0x80;
	            data.sigBytes = dataWords.length * 4;

	            // Hash final blocks
	            this._process();

	            // Shortcuts
	            var state = this._state;
	            var outputLengthBytes = this.cfg.outputLength / 8;
	            var outputLengthLanes = outputLengthBytes / 8;

	            // Squeeze
	            var hashWords = [];
	            for (var i = 0; i < outputLengthLanes; i++) {
	                // Shortcuts
	                var lane = state[i];
	                var laneMsw = lane.high;
	                var laneLsw = lane.low;

	                // Swap endian
	                laneMsw = (
	                    (((laneMsw << 8)  | (laneMsw >>> 24)) & 0x00ff00ff) |
	                    (((laneMsw << 24) | (laneMsw >>> 8))  & 0xff00ff00)
	                );
	                laneLsw = (
	                    (((laneLsw << 8)  | (laneLsw >>> 24)) & 0x00ff00ff) |
	                    (((laneLsw << 24) | (laneLsw >>> 8))  & 0xff00ff00)
	                );

	                // Squeeze state to retrieve hash
	                hashWords.push(laneLsw);
	                hashWords.push(laneMsw);
	            }

	            // Return final computed hash
	            return new WordArray.init(hashWords, outputLengthBytes);
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);

	            var state = clone._state = this._state.slice(0);
	            for (var i = 0; i < 25; i++) {
	                state[i] = state[i].clone();
	            }

	            return clone;
	        }
	    });

	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.SHA3('message');
	     *     var hash = CryptoJS.SHA3(wordArray);
	     */
	    C.SHA3 = Hasher._createHelper(SHA3);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacSHA3(message, key);
	     */
	    C.HmacSHA3 = Hasher._createHmacHelper(SHA3);
	}(Math));


	return CryptoJS.SHA3;

}));

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(44));
	}
	else {}
}(this, function (CryptoJS) {

	/** @preserve
	(c) 2012 by Cédric Mesnil. All rights reserved.

	Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

	    - Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
	    - Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

	THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	*/

	(function (Math) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var Hasher = C_lib.Hasher;
	    var C_algo = C.algo;

	    // Constants table
	    var _zl = WordArray.create([
	        0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11, 12, 13, 14, 15,
	        7,  4, 13,  1, 10,  6, 15,  3, 12,  0,  9,  5,  2, 14, 11,  8,
	        3, 10, 14,  4,  9, 15,  8,  1,  2,  7,  0,  6, 13, 11,  5, 12,
	        1,  9, 11, 10,  0,  8, 12,  4, 13,  3,  7, 15, 14,  5,  6,  2,
	        4,  0,  5,  9,  7, 12,  2, 10, 14,  1,  3,  8, 11,  6, 15, 13]);
	    var _zr = WordArray.create([
	        5, 14,  7,  0,  9,  2, 11,  4, 13,  6, 15,  8,  1, 10,  3, 12,
	        6, 11,  3,  7,  0, 13,  5, 10, 14, 15,  8, 12,  4,  9,  1,  2,
	        15,  5,  1,  3,  7, 14,  6,  9, 11,  8, 12,  2, 10,  0,  4, 13,
	        8,  6,  4,  1,  3, 11, 15,  0,  5, 12,  2, 13,  9,  7, 10, 14,
	        12, 15, 10,  4,  1,  5,  8,  7,  6,  2, 13, 14,  0,  3,  9, 11]);
	    var _sl = WordArray.create([
	         11, 14, 15, 12,  5,  8,  7,  9, 11, 13, 14, 15,  6,  7,  9,  8,
	        7, 6,   8, 13, 11,  9,  7, 15,  7, 12, 15,  9, 11,  7, 13, 12,
	        11, 13,  6,  7, 14,  9, 13, 15, 14,  8, 13,  6,  5, 12,  7,  5,
	          11, 12, 14, 15, 14, 15,  9,  8,  9, 14,  5,  6,  8,  6,  5, 12,
	        9, 15,  5, 11,  6,  8, 13, 12,  5, 12, 13, 14, 11,  8,  5,  6 ]);
	    var _sr = WordArray.create([
	        8,  9,  9, 11, 13, 15, 15,  5,  7,  7,  8, 11, 14, 14, 12,  6,
	        9, 13, 15,  7, 12,  8,  9, 11,  7,  7, 12,  7,  6, 15, 13, 11,
	        9,  7, 15, 11,  8,  6,  6, 14, 12, 13,  5, 14, 13, 13,  7,  5,
	        15,  5,  8, 11, 14, 14,  6, 14,  6,  9, 12,  9, 12,  5, 15,  8,
	        8,  5, 12,  9, 12,  5, 14,  6,  8, 13,  6,  5, 15, 13, 11, 11 ]);

	    var _hl =  WordArray.create([ 0x00000000, 0x5A827999, 0x6ED9EBA1, 0x8F1BBCDC, 0xA953FD4E]);
	    var _hr =  WordArray.create([ 0x50A28BE6, 0x5C4DD124, 0x6D703EF3, 0x7A6D76E9, 0x00000000]);

	    /**
	     * RIPEMD160 hash algorithm.
	     */
	    var RIPEMD160 = C_algo.RIPEMD160 = Hasher.extend({
	        _doReset: function () {
	            this._hash  = WordArray.create([0x67452301, 0xEFCDAB89, 0x98BADCFE, 0x10325476, 0xC3D2E1F0]);
	        },

	        _doProcessBlock: function (M, offset) {

	            // Swap endian
	            for (var i = 0; i < 16; i++) {
	                // Shortcuts
	                var offset_i = offset + i;
	                var M_offset_i = M[offset_i];

	                // Swap
	                M[offset_i] = (
	                    (((M_offset_i << 8)  | (M_offset_i >>> 24)) & 0x00ff00ff) |
	                    (((M_offset_i << 24) | (M_offset_i >>> 8))  & 0xff00ff00)
	                );
	            }
	            // Shortcut
	            var H  = this._hash.words;
	            var hl = _hl.words;
	            var hr = _hr.words;
	            var zl = _zl.words;
	            var zr = _zr.words;
	            var sl = _sl.words;
	            var sr = _sr.words;

	            // Working variables
	            var al, bl, cl, dl, el;
	            var ar, br, cr, dr, er;

	            ar = al = H[0];
	            br = bl = H[1];
	            cr = cl = H[2];
	            dr = dl = H[3];
	            er = el = H[4];
	            // Computation
	            var t;
	            for (var i = 0; i < 80; i += 1) {
	                t = (al +  M[offset+zl[i]])|0;
	                if (i<16){
		            t +=  f1(bl,cl,dl) + hl[0];
	                } else if (i<32) {
		            t +=  f2(bl,cl,dl) + hl[1];
	                } else if (i<48) {
		            t +=  f3(bl,cl,dl) + hl[2];
	                } else if (i<64) {
		            t +=  f4(bl,cl,dl) + hl[3];
	                } else {// if (i<80) {
		            t +=  f5(bl,cl,dl) + hl[4];
	                }
	                t = t|0;
	                t =  rotl(t,sl[i]);
	                t = (t+el)|0;
	                al = el;
	                el = dl;
	                dl = rotl(cl, 10);
	                cl = bl;
	                bl = t;

	                t = (ar + M[offset+zr[i]])|0;
	                if (i<16){
		            t +=  f5(br,cr,dr) + hr[0];
	                } else if (i<32) {
		            t +=  f4(br,cr,dr) + hr[1];
	                } else if (i<48) {
		            t +=  f3(br,cr,dr) + hr[2];
	                } else if (i<64) {
		            t +=  f2(br,cr,dr) + hr[3];
	                } else {// if (i<80) {
		            t +=  f1(br,cr,dr) + hr[4];
	                }
	                t = t|0;
	                t =  rotl(t,sr[i]) ;
	                t = (t+er)|0;
	                ar = er;
	                er = dr;
	                dr = rotl(cr, 10);
	                cr = br;
	                br = t;
	            }
	            // Intermediate hash value
	            t    = (H[1] + cl + dr)|0;
	            H[1] = (H[2] + dl + er)|0;
	            H[2] = (H[3] + el + ar)|0;
	            H[3] = (H[4] + al + br)|0;
	            H[4] = (H[0] + bl + cr)|0;
	            H[0] =  t;
	        },

	        _doFinalize: function () {
	            // Shortcuts
	            var data = this._data;
	            var dataWords = data.words;

	            var nBitsTotal = this._nDataBytes * 8;
	            var nBitsLeft = data.sigBytes * 8;

	            // Add padding
	            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
	            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = (
	                (((nBitsTotal << 8)  | (nBitsTotal >>> 24)) & 0x00ff00ff) |
	                (((nBitsTotal << 24) | (nBitsTotal >>> 8))  & 0xff00ff00)
	            );
	            data.sigBytes = (dataWords.length + 1) * 4;

	            // Hash final blocks
	            this._process();

	            // Shortcuts
	            var hash = this._hash;
	            var H = hash.words;

	            // Swap endian
	            for (var i = 0; i < 5; i++) {
	                // Shortcut
	                var H_i = H[i];

	                // Swap
	                H[i] = (((H_i << 8)  | (H_i >>> 24)) & 0x00ff00ff) |
	                       (((H_i << 24) | (H_i >>> 8))  & 0xff00ff00);
	            }

	            // Return final computed hash
	            return hash;
	        },

	        clone: function () {
	            var clone = Hasher.clone.call(this);
	            clone._hash = this._hash.clone();

	            return clone;
	        }
	    });


	    function f1(x, y, z) {
	        return ((x) ^ (y) ^ (z));

	    }

	    function f2(x, y, z) {
	        return (((x)&(y)) | ((~x)&(z)));
	    }

	    function f3(x, y, z) {
	        return (((x) | (~(y))) ^ (z));
	    }

	    function f4(x, y, z) {
	        return (((x) & (z)) | ((y)&(~(z))));
	    }

	    function f5(x, y, z) {
	        return ((x) ^ ((y) |(~(z))));

	    }

	    function rotl(x,n) {
	        return (x<<n) | (x>>>(32-n));
	    }


	    /**
	     * Shortcut function to the hasher's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     *
	     * @return {WordArray} The hash.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hash = CryptoJS.RIPEMD160('message');
	     *     var hash = CryptoJS.RIPEMD160(wordArray);
	     */
	    C.RIPEMD160 = Hasher._createHelper(RIPEMD160);

	    /**
	     * Shortcut function to the HMAC's object interface.
	     *
	     * @param {WordArray|string} message The message to hash.
	     * @param {WordArray|string} key The secret key.
	     *
	     * @return {WordArray} The HMAC.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var hmac = CryptoJS.HmacRIPEMD160(message, key);
	     */
	    C.HmacRIPEMD160 = Hasher._createHmacHelper(RIPEMD160);
	}(Math));


	return CryptoJS.RIPEMD160;

}));

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(44));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var C_enc = C.enc;
	    var Utf8 = C_enc.Utf8;
	    var C_algo = C.algo;

	    /**
	     * HMAC algorithm.
	     */
	    var HMAC = C_algo.HMAC = Base.extend({
	        /**
	         * Initializes a newly created HMAC.
	         *
	         * @param {Hasher} hasher The hash algorithm to use.
	         * @param {WordArray|string} key The secret key.
	         *
	         * @example
	         *
	         *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
	         */
	        init: function (hasher, key) {
	            // Init hasher
	            hasher = this._hasher = new hasher.init();

	            // Convert string to WordArray, else assume WordArray already
	            if (typeof key == 'string') {
	                key = Utf8.parse(key);
	            }

	            // Shortcuts
	            var hasherBlockSize = hasher.blockSize;
	            var hasherBlockSizeBytes = hasherBlockSize * 4;

	            // Allow arbitrary length keys
	            if (key.sigBytes > hasherBlockSizeBytes) {
	                key = hasher.finalize(key);
	            }

	            // Clamp excess bits
	            key.clamp();

	            // Clone key for inner and outer pads
	            var oKey = this._oKey = key.clone();
	            var iKey = this._iKey = key.clone();

	            // Shortcuts
	            var oKeyWords = oKey.words;
	            var iKeyWords = iKey.words;

	            // XOR keys with pad constants
	            for (var i = 0; i < hasherBlockSize; i++) {
	                oKeyWords[i] ^= 0x5c5c5c5c;
	                iKeyWords[i] ^= 0x36363636;
	            }
	            oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes;

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this HMAC to its initial state.
	         *
	         * @example
	         *
	         *     hmacHasher.reset();
	         */
	        reset: function () {
	            // Shortcut
	            var hasher = this._hasher;

	            // Reset
	            hasher.reset();
	            hasher.update(this._iKey);
	        },

	        /**
	         * Updates this HMAC with a message.
	         *
	         * @param {WordArray|string} messageUpdate The message to append.
	         *
	         * @return {HMAC} This HMAC instance.
	         *
	         * @example
	         *
	         *     hmacHasher.update('message');
	         *     hmacHasher.update(wordArray);
	         */
	        update: function (messageUpdate) {
	            this._hasher.update(messageUpdate);

	            // Chainable
	            return this;
	        },

	        /**
	         * Finalizes the HMAC computation.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} messageUpdate (Optional) A final message update.
	         *
	         * @return {WordArray} The HMAC.
	         *
	         * @example
	         *
	         *     var hmac = hmacHasher.finalize();
	         *     var hmac = hmacHasher.finalize('message');
	         *     var hmac = hmacHasher.finalize(wordArray);
	         */
	        finalize: function (messageUpdate) {
	            // Shortcut
	            var hasher = this._hasher;

	            // Compute HMAC
	            var innerHash = hasher.finalize(messageUpdate);
	            hasher.reset();
	            var hmac = hasher.finalize(this._oKey.clone().concat(innerHash));

	            return hmac;
	        }
	    });
	}());


}));

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(44), __webpack_require__(50), __webpack_require__(57));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var WordArray = C_lib.WordArray;
	    var C_algo = C.algo;
	    var SHA1 = C_algo.SHA1;
	    var HMAC = C_algo.HMAC;

	    /**
	     * Password-Based Key Derivation Function 2 algorithm.
	     */
	    var PBKDF2 = C_algo.PBKDF2 = Base.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
	         * @property {Hasher} hasher The hasher to use. Default: SHA1
	         * @property {number} iterations The number of iterations to perform. Default: 1
	         */
	        cfg: Base.extend({
	            keySize: 128/32,
	            hasher: SHA1,
	            iterations: 1
	        }),

	        /**
	         * Initializes a newly created key derivation function.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for the derivation.
	         *
	         * @example
	         *
	         *     var kdf = CryptoJS.algo.PBKDF2.create();
	         *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8 });
	         *     var kdf = CryptoJS.algo.PBKDF2.create({ keySize: 8, iterations: 1000 });
	         */
	        init: function (cfg) {
	            this.cfg = this.cfg.extend(cfg);
	        },

	        /**
	         * Computes the Password-Based Key Derivation Function 2.
	         *
	         * @param {WordArray|string} password The password.
	         * @param {WordArray|string} salt A salt.
	         *
	         * @return {WordArray} The derived key.
	         *
	         * @example
	         *
	         *     var key = kdf.compute(password, salt);
	         */
	        compute: function (password, salt) {
	            // Shortcut
	            var cfg = this.cfg;

	            // Init HMAC
	            var hmac = HMAC.create(cfg.hasher, password);

	            // Initial values
	            var derivedKey = WordArray.create();
	            var blockIndex = WordArray.create([0x00000001]);

	            // Shortcuts
	            var derivedKeyWords = derivedKey.words;
	            var blockIndexWords = blockIndex.words;
	            var keySize = cfg.keySize;
	            var iterations = cfg.iterations;

	            // Generate key
	            while (derivedKeyWords.length < keySize) {
	                var block = hmac.update(salt).finalize(blockIndex);
	                hmac.reset();

	                // Shortcuts
	                var blockWords = block.words;
	                var blockWordsLength = blockWords.length;

	                // Iterations
	                var intermediate = block;
	                for (var i = 1; i < iterations; i++) {
	                    intermediate = hmac.finalize(intermediate);
	                    hmac.reset();

	                    // Shortcut
	                    var intermediateWords = intermediate.words;

	                    // XOR intermediate with block
	                    for (var j = 0; j < blockWordsLength; j++) {
	                        blockWords[j] ^= intermediateWords[j];
	                    }
	                }

	                derivedKey.concat(block);
	                blockIndexWords[0]++;
	            }
	            derivedKey.sigBytes = keySize * 4;

	            return derivedKey;
	        }
	    });

	    /**
	     * Computes the Password-Based Key Derivation Function 2.
	     *
	     * @param {WordArray|string} password The password.
	     * @param {WordArray|string} salt A salt.
	     * @param {Object} cfg (Optional) The configuration options to use for this computation.
	     *
	     * @return {WordArray} The derived key.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var key = CryptoJS.PBKDF2(password, salt);
	     *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8 });
	     *     var key = CryptoJS.PBKDF2(password, salt, { keySize: 8, iterations: 1000 });
	     */
	    C.PBKDF2 = function (password, salt, cfg) {
	        return PBKDF2.create(cfg).compute(password, salt);
	    };
	}());


	return CryptoJS.PBKDF2;

}));

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(44), __webpack_require__(50), __webpack_require__(57));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var WordArray = C_lib.WordArray;
	    var C_algo = C.algo;
	    var MD5 = C_algo.MD5;

	    /**
	     * This key derivation function is meant to conform with EVP_BytesToKey.
	     * www.openssl.org/docs/crypto/EVP_BytesToKey.html
	     */
	    var EvpKDF = C_algo.EvpKDF = Base.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {number} keySize The key size in words to generate. Default: 4 (128 bits)
	         * @property {Hasher} hasher The hash algorithm to use. Default: MD5
	         * @property {number} iterations The number of iterations to perform. Default: 1
	         */
	        cfg: Base.extend({
	            keySize: 128/32,
	            hasher: MD5,
	            iterations: 1
	        }),

	        /**
	         * Initializes a newly created key derivation function.
	         *
	         * @param {Object} cfg (Optional) The configuration options to use for the derivation.
	         *
	         * @example
	         *
	         *     var kdf = CryptoJS.algo.EvpKDF.create();
	         *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8 });
	         *     var kdf = CryptoJS.algo.EvpKDF.create({ keySize: 8, iterations: 1000 });
	         */
	        init: function (cfg) {
	            this.cfg = this.cfg.extend(cfg);
	        },

	        /**
	         * Derives a key from a password.
	         *
	         * @param {WordArray|string} password The password.
	         * @param {WordArray|string} salt A salt.
	         *
	         * @return {WordArray} The derived key.
	         *
	         * @example
	         *
	         *     var key = kdf.compute(password, salt);
	         */
	        compute: function (password, salt) {
	            // Shortcut
	            var cfg = this.cfg;

	            // Init hasher
	            var hasher = cfg.hasher.create();

	            // Initial values
	            var derivedKey = WordArray.create();

	            // Shortcuts
	            var derivedKeyWords = derivedKey.words;
	            var keySize = cfg.keySize;
	            var iterations = cfg.iterations;

	            // Generate key
	            while (derivedKeyWords.length < keySize) {
	                if (block) {
	                    hasher.update(block);
	                }
	                var block = hasher.update(password).finalize(salt);
	                hasher.reset();

	                // Iterations
	                for (var i = 1; i < iterations; i++) {
	                    block = hasher.finalize(block);
	                    hasher.reset();
	                }

	                derivedKey.concat(block);
	            }
	            derivedKey.sigBytes = keySize * 4;

	            return derivedKey;
	        }
	    });

	    /**
	     * Derives a key from a password.
	     *
	     * @param {WordArray|string} password The password.
	     * @param {WordArray|string} salt A salt.
	     * @param {Object} cfg (Optional) The configuration options to use for this computation.
	     *
	     * @return {WordArray} The derived key.
	     *
	     * @static
	     *
	     * @example
	     *
	     *     var key = CryptoJS.EvpKDF(password, salt);
	     *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8 });
	     *     var key = CryptoJS.EvpKDF(password, salt, { keySize: 8, iterations: 1000 });
	     */
	    C.EvpKDF = function (password, salt, cfg) {
	        return EvpKDF.create(cfg).compute(password, salt);
	    };
	}());


	return CryptoJS.EvpKDF;

}));

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(44), __webpack_require__(59));
	}
	else {}
}(this, function (CryptoJS) {

	/**
	 * Cipher core components.
	 */
	CryptoJS.lib.Cipher || (function (undefined) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var Base = C_lib.Base;
	    var WordArray = C_lib.WordArray;
	    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm;
	    var C_enc = C.enc;
	    var Utf8 = C_enc.Utf8;
	    var Base64 = C_enc.Base64;
	    var C_algo = C.algo;
	    var EvpKDF = C_algo.EvpKDF;

	    /**
	     * Abstract base cipher template.
	     *
	     * @property {number} keySize This cipher's key size. Default: 4 (128 bits)
	     * @property {number} ivSize This cipher's IV size. Default: 4 (128 bits)
	     * @property {number} _ENC_XFORM_MODE A constant representing encryption mode.
	     * @property {number} _DEC_XFORM_MODE A constant representing decryption mode.
	     */
	    var Cipher = C_lib.Cipher = BufferedBlockAlgorithm.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {WordArray} iv The IV to use for this operation.
	         */
	        cfg: Base.extend(),

	        /**
	         * Creates this cipher in encryption mode.
	         *
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {Cipher} A cipher instance.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipher = CryptoJS.algo.AES.createEncryptor(keyWordArray, { iv: ivWordArray });
	         */
	        createEncryptor: function (key, cfg) {
	            return this.create(this._ENC_XFORM_MODE, key, cfg);
	        },

	        /**
	         * Creates this cipher in decryption mode.
	         *
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {Cipher} A cipher instance.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipher = CryptoJS.algo.AES.createDecryptor(keyWordArray, { iv: ivWordArray });
	         */
	        createDecryptor: function (key, cfg) {
	            return this.create(this._DEC_XFORM_MODE, key, cfg);
	        },

	        /**
	         * Initializes a newly created cipher.
	         *
	         * @param {number} xformMode Either the encryption or decryption transormation mode constant.
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @example
	         *
	         *     var cipher = CryptoJS.algo.AES.create(CryptoJS.algo.AES._ENC_XFORM_MODE, keyWordArray, { iv: ivWordArray });
	         */
	        init: function (xformMode, key, cfg) {
	            // Apply config defaults
	            this.cfg = this.cfg.extend(cfg);

	            // Store transform mode and key
	            this._xformMode = xformMode;
	            this._key = key;

	            // Set initial values
	            this.reset();
	        },

	        /**
	         * Resets this cipher to its initial state.
	         *
	         * @example
	         *
	         *     cipher.reset();
	         */
	        reset: function () {
	            // Reset data buffer
	            BufferedBlockAlgorithm.reset.call(this);

	            // Perform concrete-cipher logic
	            this._doReset();
	        },

	        /**
	         * Adds data to be encrypted or decrypted.
	         *
	         * @param {WordArray|string} dataUpdate The data to encrypt or decrypt.
	         *
	         * @return {WordArray} The data after processing.
	         *
	         * @example
	         *
	         *     var encrypted = cipher.process('data');
	         *     var encrypted = cipher.process(wordArray);
	         */
	        process: function (dataUpdate) {
	            // Append
	            this._append(dataUpdate);

	            // Process available blocks
	            return this._process();
	        },

	        /**
	         * Finalizes the encryption or decryption process.
	         * Note that the finalize operation is effectively a destructive, read-once operation.
	         *
	         * @param {WordArray|string} dataUpdate The final data to encrypt or decrypt.
	         *
	         * @return {WordArray} The data after final processing.
	         *
	         * @example
	         *
	         *     var encrypted = cipher.finalize();
	         *     var encrypted = cipher.finalize('data');
	         *     var encrypted = cipher.finalize(wordArray);
	         */
	        finalize: function (dataUpdate) {
	            // Final data update
	            if (dataUpdate) {
	                this._append(dataUpdate);
	            }

	            // Perform concrete-cipher logic
	            var finalProcessedData = this._doFinalize();

	            return finalProcessedData;
	        },

	        keySize: 128/32,

	        ivSize: 128/32,

	        _ENC_XFORM_MODE: 1,

	        _DEC_XFORM_MODE: 2,

	        /**
	         * Creates shortcut functions to a cipher's object interface.
	         *
	         * @param {Cipher} cipher The cipher to create a helper for.
	         *
	         * @return {Object} An object with encrypt and decrypt shortcut functions.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var AES = CryptoJS.lib.Cipher._createHelper(CryptoJS.algo.AES);
	         */
	        _createHelper: (function () {
	            function selectCipherStrategy(key) {
	                if (typeof key == 'string') {
	                    return PasswordBasedCipher;
	                } else {
	                    return SerializableCipher;
	                }
	            }

	            return function (cipher) {
	                return {
	                    encrypt: function (message, key, cfg) {
	                        return selectCipherStrategy(key).encrypt(cipher, message, key, cfg);
	                    },

	                    decrypt: function (ciphertext, key, cfg) {
	                        return selectCipherStrategy(key).decrypt(cipher, ciphertext, key, cfg);
	                    }
	                };
	            };
	        }())
	    });

	    /**
	     * Abstract base stream cipher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 1 (32 bits)
	     */
	    var StreamCipher = C_lib.StreamCipher = Cipher.extend({
	        _doFinalize: function () {
	            // Process partial blocks
	            var finalProcessedBlocks = this._process(!!'flush');

	            return finalProcessedBlocks;
	        },

	        blockSize: 1
	    });

	    /**
	     * Mode namespace.
	     */
	    var C_mode = C.mode = {};

	    /**
	     * Abstract base block cipher mode template.
	     */
	    var BlockCipherMode = C_lib.BlockCipherMode = Base.extend({
	        /**
	         * Creates this mode for encryption.
	         *
	         * @param {Cipher} cipher A block cipher instance.
	         * @param {Array} iv The IV words.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var mode = CryptoJS.mode.CBC.createEncryptor(cipher, iv.words);
	         */
	        createEncryptor: function (cipher, iv) {
	            return this.Encryptor.create(cipher, iv);
	        },

	        /**
	         * Creates this mode for decryption.
	         *
	         * @param {Cipher} cipher A block cipher instance.
	         * @param {Array} iv The IV words.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var mode = CryptoJS.mode.CBC.createDecryptor(cipher, iv.words);
	         */
	        createDecryptor: function (cipher, iv) {
	            return this.Decryptor.create(cipher, iv);
	        },

	        /**
	         * Initializes a newly created mode.
	         *
	         * @param {Cipher} cipher A block cipher instance.
	         * @param {Array} iv The IV words.
	         *
	         * @example
	         *
	         *     var mode = CryptoJS.mode.CBC.Encryptor.create(cipher, iv.words);
	         */
	        init: function (cipher, iv) {
	            this._cipher = cipher;
	            this._iv = iv;
	        }
	    });

	    /**
	     * Cipher Block Chaining mode.
	     */
	    var CBC = C_mode.CBC = (function () {
	        /**
	         * Abstract base CBC mode.
	         */
	        var CBC = BlockCipherMode.extend();

	        /**
	         * CBC encryptor.
	         */
	        CBC.Encryptor = CBC.extend({
	            /**
	             * Processes the data block at offset.
	             *
	             * @param {Array} words The data words to operate on.
	             * @param {number} offset The offset where the block starts.
	             *
	             * @example
	             *
	             *     mode.processBlock(data.words, offset);
	             */
	            processBlock: function (words, offset) {
	                // Shortcuts
	                var cipher = this._cipher;
	                var blockSize = cipher.blockSize;

	                // XOR and encrypt
	                xorBlock.call(this, words, offset, blockSize);
	                cipher.encryptBlock(words, offset);

	                // Remember this block to use with next block
	                this._prevBlock = words.slice(offset, offset + blockSize);
	            }
	        });

	        /**
	         * CBC decryptor.
	         */
	        CBC.Decryptor = CBC.extend({
	            /**
	             * Processes the data block at offset.
	             *
	             * @param {Array} words The data words to operate on.
	             * @param {number} offset The offset where the block starts.
	             *
	             * @example
	             *
	             *     mode.processBlock(data.words, offset);
	             */
	            processBlock: function (words, offset) {
	                // Shortcuts
	                var cipher = this._cipher;
	                var blockSize = cipher.blockSize;

	                // Remember this block to use with next block
	                var thisBlock = words.slice(offset, offset + blockSize);

	                // Decrypt and XOR
	                cipher.decryptBlock(words, offset);
	                xorBlock.call(this, words, offset, blockSize);

	                // This block becomes the previous block
	                this._prevBlock = thisBlock;
	            }
	        });

	        function xorBlock(words, offset, blockSize) {
	            // Shortcut
	            var iv = this._iv;

	            // Choose mixing block
	            if (iv) {
	                var block = iv;

	                // Remove IV for subsequent blocks
	                this._iv = undefined;
	            } else {
	                var block = this._prevBlock;
	            }

	            // XOR blocks
	            for (var i = 0; i < blockSize; i++) {
	                words[offset + i] ^= block[i];
	            }
	        }

	        return CBC;
	    }());

	    /**
	     * Padding namespace.
	     */
	    var C_pad = C.pad = {};

	    /**
	     * PKCS #5/7 padding strategy.
	     */
	    var Pkcs7 = C_pad.Pkcs7 = {
	        /**
	         * Pads data using the algorithm defined in PKCS #5/7.
	         *
	         * @param {WordArray} data The data to pad.
	         * @param {number} blockSize The multiple that the data should be padded to.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     CryptoJS.pad.Pkcs7.pad(wordArray, 4);
	         */
	        pad: function (data, blockSize) {
	            // Shortcut
	            var blockSizeBytes = blockSize * 4;

	            // Count padding bytes
	            var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;

	            // Create padding word
	            var paddingWord = (nPaddingBytes << 24) | (nPaddingBytes << 16) | (nPaddingBytes << 8) | nPaddingBytes;

	            // Create padding
	            var paddingWords = [];
	            for (var i = 0; i < nPaddingBytes; i += 4) {
	                paddingWords.push(paddingWord);
	            }
	            var padding = WordArray.create(paddingWords, nPaddingBytes);

	            // Add padding
	            data.concat(padding);
	        },

	        /**
	         * Unpads data that had been padded using the algorithm defined in PKCS #5/7.
	         *
	         * @param {WordArray} data The data to unpad.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     CryptoJS.pad.Pkcs7.unpad(wordArray);
	         */
	        unpad: function (data) {
	            // Get number of padding bytes from last byte
	            var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

	            // Remove padding
	            data.sigBytes -= nPaddingBytes;
	        }
	    };

	    /**
	     * Abstract base block cipher template.
	     *
	     * @property {number} blockSize The number of 32-bit words this cipher operates on. Default: 4 (128 bits)
	     */
	    var BlockCipher = C_lib.BlockCipher = Cipher.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {Mode} mode The block mode to use. Default: CBC
	         * @property {Padding} padding The padding strategy to use. Default: Pkcs7
	         */
	        cfg: Cipher.cfg.extend({
	            mode: CBC,
	            padding: Pkcs7
	        }),

	        reset: function () {
	            // Reset cipher
	            Cipher.reset.call(this);

	            // Shortcuts
	            var cfg = this.cfg;
	            var iv = cfg.iv;
	            var mode = cfg.mode;

	            // Reset block mode
	            if (this._xformMode == this._ENC_XFORM_MODE) {
	                var modeCreator = mode.createEncryptor;
	            } else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
	                var modeCreator = mode.createDecryptor;
	                // Keep at least one block in the buffer for unpadding
	                this._minBufferSize = 1;
	            }

	            if (this._mode && this._mode.__creator == modeCreator) {
	                this._mode.init(this, iv && iv.words);
	            } else {
	                this._mode = modeCreator.call(mode, this, iv && iv.words);
	                this._mode.__creator = modeCreator;
	            }
	        },

	        _doProcessBlock: function (words, offset) {
	            this._mode.processBlock(words, offset);
	        },

	        _doFinalize: function () {
	            // Shortcut
	            var padding = this.cfg.padding;

	            // Finalize
	            if (this._xformMode == this._ENC_XFORM_MODE) {
	                // Pad data
	                padding.pad(this._data, this.blockSize);

	                // Process final blocks
	                var finalProcessedBlocks = this._process(!!'flush');
	            } else /* if (this._xformMode == this._DEC_XFORM_MODE) */ {
	                // Process final blocks
	                var finalProcessedBlocks = this._process(!!'flush');

	                // Unpad data
	                padding.unpad(finalProcessedBlocks);
	            }

	            return finalProcessedBlocks;
	        },

	        blockSize: 128/32
	    });

	    /**
	     * A collection of cipher parameters.
	     *
	     * @property {WordArray} ciphertext The raw ciphertext.
	     * @property {WordArray} key The key to this ciphertext.
	     * @property {WordArray} iv The IV used in the ciphering operation.
	     * @property {WordArray} salt The salt used with a key derivation function.
	     * @property {Cipher} algorithm The cipher algorithm.
	     * @property {Mode} mode The block mode used in the ciphering operation.
	     * @property {Padding} padding The padding scheme used in the ciphering operation.
	     * @property {number} blockSize The block size of the cipher.
	     * @property {Format} formatter The default formatting strategy to convert this cipher params object to a string.
	     */
	    var CipherParams = C_lib.CipherParams = Base.extend({
	        /**
	         * Initializes a newly created cipher params object.
	         *
	         * @param {Object} cipherParams An object with any of the possible cipher parameters.
	         *
	         * @example
	         *
	         *     var cipherParams = CryptoJS.lib.CipherParams.create({
	         *         ciphertext: ciphertextWordArray,
	         *         key: keyWordArray,
	         *         iv: ivWordArray,
	         *         salt: saltWordArray,
	         *         algorithm: CryptoJS.algo.AES,
	         *         mode: CryptoJS.mode.CBC,
	         *         padding: CryptoJS.pad.PKCS7,
	         *         blockSize: 4,
	         *         formatter: CryptoJS.format.OpenSSL
	         *     });
	         */
	        init: function (cipherParams) {
	            this.mixIn(cipherParams);
	        },

	        /**
	         * Converts this cipher params object to a string.
	         *
	         * @param {Format} formatter (Optional) The formatting strategy to use.
	         *
	         * @return {string} The stringified cipher params.
	         *
	         * @throws Error If neither the formatter nor the default formatter is set.
	         *
	         * @example
	         *
	         *     var string = cipherParams + '';
	         *     var string = cipherParams.toString();
	         *     var string = cipherParams.toString(CryptoJS.format.OpenSSL);
	         */
	        toString: function (formatter) {
	            return (formatter || this.formatter).stringify(this);
	        }
	    });

	    /**
	     * Format namespace.
	     */
	    var C_format = C.format = {};

	    /**
	     * OpenSSL formatting strategy.
	     */
	    var OpenSSLFormatter = C_format.OpenSSL = {
	        /**
	         * Converts a cipher params object to an OpenSSL-compatible string.
	         *
	         * @param {CipherParams} cipherParams The cipher params object.
	         *
	         * @return {string} The OpenSSL-compatible string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var openSSLString = CryptoJS.format.OpenSSL.stringify(cipherParams);
	         */
	        stringify: function (cipherParams) {
	            // Shortcuts
	            var ciphertext = cipherParams.ciphertext;
	            var salt = cipherParams.salt;

	            // Format
	            if (salt) {
	                var wordArray = WordArray.create([0x53616c74, 0x65645f5f]).concat(salt).concat(ciphertext);
	            } else {
	                var wordArray = ciphertext;
	            }

	            return wordArray.toString(Base64);
	        },

	        /**
	         * Converts an OpenSSL-compatible string to a cipher params object.
	         *
	         * @param {string} openSSLStr The OpenSSL-compatible string.
	         *
	         * @return {CipherParams} The cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipherParams = CryptoJS.format.OpenSSL.parse(openSSLString);
	         */
	        parse: function (openSSLStr) {
	            // Parse base64
	            var ciphertext = Base64.parse(openSSLStr);

	            // Shortcut
	            var ciphertextWords = ciphertext.words;

	            // Test for salt
	            if (ciphertextWords[0] == 0x53616c74 && ciphertextWords[1] == 0x65645f5f) {
	                // Extract salt
	                var salt = WordArray.create(ciphertextWords.slice(2, 4));

	                // Remove salt from ciphertext
	                ciphertextWords.splice(0, 4);
	                ciphertext.sigBytes -= 16;
	            }

	            return CipherParams.create({ ciphertext: ciphertext, salt: salt });
	        }
	    };

	    /**
	     * A cipher wrapper that returns ciphertext as a serializable cipher params object.
	     */
	    var SerializableCipher = C_lib.SerializableCipher = Base.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {Formatter} format The formatting strategy to convert cipher param objects to and from a string. Default: OpenSSL
	         */
	        cfg: Base.extend({
	            format: OpenSSLFormatter
	        }),

	        /**
	         * Encrypts a message.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {WordArray|string} message The message to encrypt.
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {CipherParams} A cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key);
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv });
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher.encrypt(CryptoJS.algo.AES, message, key, { iv: iv, format: CryptoJS.format.OpenSSL });
	         */
	        encrypt: function (cipher, message, key, cfg) {
	            // Apply config defaults
	            cfg = this.cfg.extend(cfg);

	            // Encrypt
	            var encryptor = cipher.createEncryptor(key, cfg);
	            var ciphertext = encryptor.finalize(message);

	            // Shortcut
	            var cipherCfg = encryptor.cfg;

	            // Create and return serializable cipher params
	            return CipherParams.create({
	                ciphertext: ciphertext,
	                key: key,
	                iv: cipherCfg.iv,
	                algorithm: cipher,
	                mode: cipherCfg.mode,
	                padding: cipherCfg.padding,
	                blockSize: cipher.blockSize,
	                formatter: cfg.format
	            });
	        },

	        /**
	         * Decrypts serialized ciphertext.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
	         * @param {WordArray} key The key.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {WordArray} The plaintext.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, key, { iv: iv, format: CryptoJS.format.OpenSSL });
	         *     var plaintext = CryptoJS.lib.SerializableCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, key, { iv: iv, format: CryptoJS.format.OpenSSL });
	         */
	        decrypt: function (cipher, ciphertext, key, cfg) {
	            // Apply config defaults
	            cfg = this.cfg.extend(cfg);

	            // Convert string to CipherParams
	            ciphertext = this._parse(ciphertext, cfg.format);

	            // Decrypt
	            var plaintext = cipher.createDecryptor(key, cfg).finalize(ciphertext.ciphertext);

	            return plaintext;
	        },

	        /**
	         * Converts serialized ciphertext to CipherParams,
	         * else assumed CipherParams already and returns ciphertext unchanged.
	         *
	         * @param {CipherParams|string} ciphertext The ciphertext.
	         * @param {Formatter} format The formatting strategy to use to parse serialized ciphertext.
	         *
	         * @return {CipherParams} The unserialized ciphertext.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var ciphertextParams = CryptoJS.lib.SerializableCipher._parse(ciphertextStringOrParams, format);
	         */
	        _parse: function (ciphertext, format) {
	            if (typeof ciphertext == 'string') {
	                return format.parse(ciphertext, this);
	            } else {
	                return ciphertext;
	            }
	        }
	    });

	    /**
	     * Key derivation function namespace.
	     */
	    var C_kdf = C.kdf = {};

	    /**
	     * OpenSSL key derivation function.
	     */
	    var OpenSSLKdf = C_kdf.OpenSSL = {
	        /**
	         * Derives a key and IV from a password.
	         *
	         * @param {string} password The password to derive from.
	         * @param {number} keySize The size in words of the key to generate.
	         * @param {number} ivSize The size in words of the IV to generate.
	         * @param {WordArray|string} salt (Optional) A 64-bit salt to use. If omitted, a salt will be generated randomly.
	         *
	         * @return {CipherParams} A cipher params object with the key, IV, and salt.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32);
	         *     var derivedParams = CryptoJS.kdf.OpenSSL.execute('Password', 256/32, 128/32, 'saltsalt');
	         */
	        execute: function (password, keySize, ivSize, salt) {
	            // Generate random salt
	            if (!salt) {
	                salt = WordArray.random(64/8);
	            }

	            // Derive key and IV
	            var key = EvpKDF.create({ keySize: keySize + ivSize }).compute(password, salt);

	            // Separate key and IV
	            var iv = WordArray.create(key.words.slice(keySize), ivSize * 4);
	            key.sigBytes = keySize * 4;

	            // Return params
	            return CipherParams.create({ key: key, iv: iv, salt: salt });
	        }
	    };

	    /**
	     * A serializable cipher wrapper that derives the key from a password,
	     * and returns ciphertext as a serializable cipher params object.
	     */
	    var PasswordBasedCipher = C_lib.PasswordBasedCipher = SerializableCipher.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {KDF} kdf The key derivation function to use to generate a key and IV from a password. Default: OpenSSL
	         */
	        cfg: SerializableCipher.cfg.extend({
	            kdf: OpenSSLKdf
	        }),

	        /**
	         * Encrypts a message using a password.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {WordArray|string} message The message to encrypt.
	         * @param {string} password The password.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {CipherParams} A cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password');
	         *     var ciphertextParams = CryptoJS.lib.PasswordBasedCipher.encrypt(CryptoJS.algo.AES, message, 'password', { format: CryptoJS.format.OpenSSL });
	         */
	        encrypt: function (cipher, message, password, cfg) {
	            // Apply config defaults
	            cfg = this.cfg.extend(cfg);

	            // Derive key and other params
	            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize);

	            // Add IV to config
	            cfg.iv = derivedParams.iv;

	            // Encrypt
	            var ciphertext = SerializableCipher.encrypt.call(this, cipher, message, derivedParams.key, cfg);

	            // Mix in derived params
	            ciphertext.mixIn(derivedParams);

	            return ciphertext;
	        },

	        /**
	         * Decrypts serialized ciphertext using a password.
	         *
	         * @param {Cipher} cipher The cipher algorithm to use.
	         * @param {CipherParams|string} ciphertext The ciphertext to decrypt.
	         * @param {string} password The password.
	         * @param {Object} cfg (Optional) The configuration options to use for this operation.
	         *
	         * @return {WordArray} The plaintext.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, formattedCiphertext, 'password', { format: CryptoJS.format.OpenSSL });
	         *     var plaintext = CryptoJS.lib.PasswordBasedCipher.decrypt(CryptoJS.algo.AES, ciphertextParams, 'password', { format: CryptoJS.format.OpenSSL });
	         */
	        decrypt: function (cipher, ciphertext, password, cfg) {
	            // Apply config defaults
	            cfg = this.cfg.extend(cfg);

	            // Convert string to CipherParams
	            ciphertext = this._parse(ciphertext, cfg.format);

	            // Derive key and other params
	            var derivedParams = cfg.kdf.execute(password, cipher.keySize, cipher.ivSize, ciphertext.salt);

	            // Add IV to config
	            cfg.iv = derivedParams.iv;

	            // Decrypt
	            var plaintext = SerializableCipher.decrypt.call(this, cipher, ciphertext, derivedParams.key, cfg);

	            return plaintext;
	        }
	    });
	}());


}));

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(44), __webpack_require__(60));
	}
	else {}
}(this, function (CryptoJS) {

	/**
	 * Cipher Feedback block mode.
	 */
	CryptoJS.mode.CFB = (function () {
	    var CFB = CryptoJS.lib.BlockCipherMode.extend();

	    CFB.Encryptor = CFB.extend({
	        processBlock: function (words, offset) {
	            // Shortcuts
	            var cipher = this._cipher;
	            var blockSize = cipher.blockSize;

	            generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);

	            // Remember this block to use with next block
	            this._prevBlock = words.slice(offset, offset + blockSize);
	        }
	    });

	    CFB.Decryptor = CFB.extend({
	        processBlock: function (words, offset) {
	            // Shortcuts
	            var cipher = this._cipher;
	            var blockSize = cipher.blockSize;

	            // Remember this block to use with next block
	            var thisBlock = words.slice(offset, offset + blockSize);

	            generateKeystreamAndEncrypt.call(this, words, offset, blockSize, cipher);

	            // This block becomes the previous block
	            this._prevBlock = thisBlock;
	        }
	    });

	    function generateKeystreamAndEncrypt(words, offset, blockSize, cipher) {
	        // Shortcut
	        var iv = this._iv;

	        // Generate keystream
	        if (iv) {
	            var keystream = iv.slice(0);

	            // Remove IV for subsequent blocks
	            this._iv = undefined;
	        } else {
	            var keystream = this._prevBlock;
	        }
	        cipher.encryptBlock(keystream, 0);

	        // Encrypt
	        for (var i = 0; i < blockSize; i++) {
	            words[offset + i] ^= keystream[i];
	        }
	    }

	    return CFB;
	}());


	return CryptoJS.mode.CFB;

}));

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(44), __webpack_require__(60));
	}
	else {}
}(this, function (CryptoJS) {

	/**
	 * Counter block mode.
	 */
	CryptoJS.mode.CTR = (function () {
	    var CTR = CryptoJS.lib.BlockCipherMode.extend();

	    var Encryptor = CTR.Encryptor = CTR.extend({
	        processBlock: function (words, offset) {
	            // Shortcuts
	            var cipher = this._cipher
	            var blockSize = cipher.blockSize;
	            var iv = this._iv;
	            var counter = this._counter;

	            // Generate keystream
	            if (iv) {
	                counter = this._counter = iv.slice(0);

	                // Remove IV for subsequent blocks
	                this._iv = undefined;
	            }
	            var keystream = counter.slice(0);
	            cipher.encryptBlock(keystream, 0);

	            // Increment counter
	            counter[blockSize - 1] = (counter[blockSize - 1] + 1) | 0

	            // Encrypt
	            for (var i = 0; i < blockSize; i++) {
	                words[offset + i] ^= keystream[i];
	            }
	        }
	    });

	    CTR.Decryptor = Encryptor;

	    return CTR;
	}());


	return CryptoJS.mode.CTR;

}));

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(44), __webpack_require__(60));
	}
	else {}
}(this, function (CryptoJS) {

	/** @preserve
	 * Counter block mode compatible with  Dr Brian Gladman fileenc.c
	 * derived from CryptoJS.mode.CTR
	 * Jan Hruby jhruby.web@gmail.com
	 */
	CryptoJS.mode.CTRGladman = (function () {
	    var CTRGladman = CryptoJS.lib.BlockCipherMode.extend();

		function incWord(word)
		{
			if (((word >> 24) & 0xff) === 0xff) { //overflow
			var b1 = (word >> 16)&0xff;
			var b2 = (word >> 8)&0xff;
			var b3 = word & 0xff;

			if (b1 === 0xff) // overflow b1
			{
			b1 = 0;
			if (b2 === 0xff)
			{
				b2 = 0;
				if (b3 === 0xff)
				{
					b3 = 0;
				}
				else
				{
					++b3;
				}
			}
			else
			{
				++b2;
			}
			}
			else
			{
			++b1;
			}

			word = 0;
			word += (b1 << 16);
			word += (b2 << 8);
			word += b3;
			}
			else
			{
			word += (0x01 << 24);
			}
			return word;
		}

		function incCounter(counter)
		{
			if ((counter[0] = incWord(counter[0])) === 0)
			{
				// encr_data in fileenc.c from  Dr Brian Gladman's counts only with DWORD j < 8
				counter[1] = incWord(counter[1]);
			}
			return counter;
		}

	    var Encryptor = CTRGladman.Encryptor = CTRGladman.extend({
	        processBlock: function (words, offset) {
	            // Shortcuts
	            var cipher = this._cipher
	            var blockSize = cipher.blockSize;
	            var iv = this._iv;
	            var counter = this._counter;

	            // Generate keystream
	            if (iv) {
	                counter = this._counter = iv.slice(0);

	                // Remove IV for subsequent blocks
	                this._iv = undefined;
	            }

				incCounter(counter);

				var keystream = counter.slice(0);
	            cipher.encryptBlock(keystream, 0);

	            // Encrypt
	            for (var i = 0; i < blockSize; i++) {
	                words[offset + i] ^= keystream[i];
	            }
	        }
	    });

	    CTRGladman.Decryptor = Encryptor;

	    return CTRGladman;
	}());




	return CryptoJS.mode.CTRGladman;

}));

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(44), __webpack_require__(60));
	}
	else {}
}(this, function (CryptoJS) {

	/**
	 * Output Feedback block mode.
	 */
	CryptoJS.mode.OFB = (function () {
	    var OFB = CryptoJS.lib.BlockCipherMode.extend();

	    var Encryptor = OFB.Encryptor = OFB.extend({
	        processBlock: function (words, offset) {
	            // Shortcuts
	            var cipher = this._cipher
	            var blockSize = cipher.blockSize;
	            var iv = this._iv;
	            var keystream = this._keystream;

	            // Generate keystream
	            if (iv) {
	                keystream = this._keystream = iv.slice(0);

	                // Remove IV for subsequent blocks
	                this._iv = undefined;
	            }
	            cipher.encryptBlock(keystream, 0);

	            // Encrypt
	            for (var i = 0; i < blockSize; i++) {
	                words[offset + i] ^= keystream[i];
	            }
	        }
	    });

	    OFB.Decryptor = Encryptor;

	    return OFB;
	}());


	return CryptoJS.mode.OFB;

}));

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(44), __webpack_require__(60));
	}
	else {}
}(this, function (CryptoJS) {

	/**
	 * Electronic Codebook block mode.
	 */
	CryptoJS.mode.ECB = (function () {
	    var ECB = CryptoJS.lib.BlockCipherMode.extend();

	    ECB.Encryptor = ECB.extend({
	        processBlock: function (words, offset) {
	            this._cipher.encryptBlock(words, offset);
	        }
	    });

	    ECB.Decryptor = ECB.extend({
	        processBlock: function (words, offset) {
	            this._cipher.decryptBlock(words, offset);
	        }
	    });

	    return ECB;
	}());


	return CryptoJS.mode.ECB;

}));

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(44), __webpack_require__(60));
	}
	else {}
}(this, function (CryptoJS) {

	/**
	 * ANSI X.923 padding strategy.
	 */
	CryptoJS.pad.AnsiX923 = {
	    pad: function (data, blockSize) {
	        // Shortcuts
	        var dataSigBytes = data.sigBytes;
	        var blockSizeBytes = blockSize * 4;

	        // Count padding bytes
	        var nPaddingBytes = blockSizeBytes - dataSigBytes % blockSizeBytes;

	        // Compute last byte position
	        var lastBytePos = dataSigBytes + nPaddingBytes - 1;

	        // Pad
	        data.clamp();
	        data.words[lastBytePos >>> 2] |= nPaddingBytes << (24 - (lastBytePos % 4) * 8);
	        data.sigBytes += nPaddingBytes;
	    },

	    unpad: function (data) {
	        // Get number of padding bytes from last byte
	        var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

	        // Remove padding
	        data.sigBytes -= nPaddingBytes;
	    }
	};


	return CryptoJS.pad.Ansix923;

}));

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(44), __webpack_require__(60));
	}
	else {}
}(this, function (CryptoJS) {

	/**
	 * ISO 10126 padding strategy.
	 */
	CryptoJS.pad.Iso10126 = {
	    pad: function (data, blockSize) {
	        // Shortcut
	        var blockSizeBytes = blockSize * 4;

	        // Count padding bytes
	        var nPaddingBytes = blockSizeBytes - data.sigBytes % blockSizeBytes;

	        // Pad
	        data.concat(CryptoJS.lib.WordArray.random(nPaddingBytes - 1)).
	             concat(CryptoJS.lib.WordArray.create([nPaddingBytes << 24], 1));
	    },

	    unpad: function (data) {
	        // Get number of padding bytes from last byte
	        var nPaddingBytes = data.words[(data.sigBytes - 1) >>> 2] & 0xff;

	        // Remove padding
	        data.sigBytes -= nPaddingBytes;
	    }
	};


	return CryptoJS.pad.Iso10126;

}));

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(44), __webpack_require__(60));
	}
	else {}
}(this, function (CryptoJS) {

	/**
	 * ISO/IEC 9797-1 Padding Method 2.
	 */
	CryptoJS.pad.Iso97971 = {
	    pad: function (data, blockSize) {
	        // Add 0x80 byte
	        data.concat(CryptoJS.lib.WordArray.create([0x80000000], 1));

	        // Zero pad the rest
	        CryptoJS.pad.ZeroPadding.pad(data, blockSize);
	    },

	    unpad: function (data) {
	        // Remove zero padding
	        CryptoJS.pad.ZeroPadding.unpad(data);

	        // Remove one more byte -- the 0x80 byte
	        data.sigBytes--;
	    }
	};


	return CryptoJS.pad.Iso97971;

}));

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(44), __webpack_require__(60));
	}
	else {}
}(this, function (CryptoJS) {

	/**
	 * Zero padding strategy.
	 */
	CryptoJS.pad.ZeroPadding = {
	    pad: function (data, blockSize) {
	        // Shortcut
	        var blockSizeBytes = blockSize * 4;

	        // Pad
	        data.clamp();
	        data.sigBytes += blockSizeBytes - ((data.sigBytes % blockSizeBytes) || blockSizeBytes);
	    },

	    unpad: function (data) {
	        // Shortcut
	        var dataWords = data.words;

	        // Unpad
	        var i = data.sigBytes - 1;
	        while (!((dataWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff)) {
	            i--;
	        }
	        data.sigBytes = i + 1;
	    }
	};


	return CryptoJS.pad.ZeroPadding;

}));

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(44), __webpack_require__(60));
	}
	else {}
}(this, function (CryptoJS) {

	/**
	 * A noop padding strategy.
	 */
	CryptoJS.pad.NoPadding = {
	    pad: function () {
	    },

	    unpad: function () {
	    }
	};


	return CryptoJS.pad.NoPadding;

}));

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(44), __webpack_require__(60));
	}
	else {}
}(this, function (CryptoJS) {

	(function (undefined) {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var CipherParams = C_lib.CipherParams;
	    var C_enc = C.enc;
	    var Hex = C_enc.Hex;
	    var C_format = C.format;

	    var HexFormatter = C_format.Hex = {
	        /**
	         * Converts the ciphertext of a cipher params object to a hexadecimally encoded string.
	         *
	         * @param {CipherParams} cipherParams The cipher params object.
	         *
	         * @return {string} The hexadecimally encoded string.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var hexString = CryptoJS.format.Hex.stringify(cipherParams);
	         */
	        stringify: function (cipherParams) {
	            return cipherParams.ciphertext.toString(Hex);
	        },

	        /**
	         * Converts a hexadecimally encoded ciphertext string to a cipher params object.
	         *
	         * @param {string} input The hexadecimally encoded string.
	         *
	         * @return {CipherParams} The cipher params object.
	         *
	         * @static
	         *
	         * @example
	         *
	         *     var cipherParams = CryptoJS.format.Hex.parse(hexString);
	         */
	        parse: function (input) {
	            var ciphertext = Hex.parse(input);
	            return CipherParams.create({ ciphertext: ciphertext });
	        }
	    };
	}());


	return CryptoJS.format.Hex;

}));

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(44), __webpack_require__(48), __webpack_require__(49), __webpack_require__(59), __webpack_require__(60));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var BlockCipher = C_lib.BlockCipher;
	    var C_algo = C.algo;

	    // Lookup tables
	    var SBOX = [];
	    var INV_SBOX = [];
	    var SUB_MIX_0 = [];
	    var SUB_MIX_1 = [];
	    var SUB_MIX_2 = [];
	    var SUB_MIX_3 = [];
	    var INV_SUB_MIX_0 = [];
	    var INV_SUB_MIX_1 = [];
	    var INV_SUB_MIX_2 = [];
	    var INV_SUB_MIX_3 = [];

	    // Compute lookup tables
	    (function () {
	        // Compute double table
	        var d = [];
	        for (var i = 0; i < 256; i++) {
	            if (i < 128) {
	                d[i] = i << 1;
	            } else {
	                d[i] = (i << 1) ^ 0x11b;
	            }
	        }

	        // Walk GF(2^8)
	        var x = 0;
	        var xi = 0;
	        for (var i = 0; i < 256; i++) {
	            // Compute sbox
	            var sx = xi ^ (xi << 1) ^ (xi << 2) ^ (xi << 3) ^ (xi << 4);
	            sx = (sx >>> 8) ^ (sx & 0xff) ^ 0x63;
	            SBOX[x] = sx;
	            INV_SBOX[sx] = x;

	            // Compute multiplication
	            var x2 = d[x];
	            var x4 = d[x2];
	            var x8 = d[x4];

	            // Compute sub bytes, mix columns tables
	            var t = (d[sx] * 0x101) ^ (sx * 0x1010100);
	            SUB_MIX_0[x] = (t << 24) | (t >>> 8);
	            SUB_MIX_1[x] = (t << 16) | (t >>> 16);
	            SUB_MIX_2[x] = (t << 8)  | (t >>> 24);
	            SUB_MIX_3[x] = t;

	            // Compute inv sub bytes, inv mix columns tables
	            var t = (x8 * 0x1010101) ^ (x4 * 0x10001) ^ (x2 * 0x101) ^ (x * 0x1010100);
	            INV_SUB_MIX_0[sx] = (t << 24) | (t >>> 8);
	            INV_SUB_MIX_1[sx] = (t << 16) | (t >>> 16);
	            INV_SUB_MIX_2[sx] = (t << 8)  | (t >>> 24);
	            INV_SUB_MIX_3[sx] = t;

	            // Compute next counter
	            if (!x) {
	                x = xi = 1;
	            } else {
	                x = x2 ^ d[d[d[x8 ^ x2]]];
	                xi ^= d[d[xi]];
	            }
	        }
	    }());

	    // Precomputed Rcon lookup
	    var RCON = [0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36];

	    /**
	     * AES block cipher algorithm.
	     */
	    var AES = C_algo.AES = BlockCipher.extend({
	        _doReset: function () {
	            // Skip reset of nRounds has been set before and key did not change
	            if (this._nRounds && this._keyPriorReset === this._key) {
	                return;
	            }

	            // Shortcuts
	            var key = this._keyPriorReset = this._key;
	            var keyWords = key.words;
	            var keySize = key.sigBytes / 4;

	            // Compute number of rounds
	            var nRounds = this._nRounds = keySize + 6;

	            // Compute number of key schedule rows
	            var ksRows = (nRounds + 1) * 4;

	            // Compute key schedule
	            var keySchedule = this._keySchedule = [];
	            for (var ksRow = 0; ksRow < ksRows; ksRow++) {
	                if (ksRow < keySize) {
	                    keySchedule[ksRow] = keyWords[ksRow];
	                } else {
	                    var t = keySchedule[ksRow - 1];

	                    if (!(ksRow % keySize)) {
	                        // Rot word
	                        t = (t << 8) | (t >>> 24);

	                        // Sub word
	                        t = (SBOX[t >>> 24] << 24) | (SBOX[(t >>> 16) & 0xff] << 16) | (SBOX[(t >>> 8) & 0xff] << 8) | SBOX[t & 0xff];

	                        // Mix Rcon
	                        t ^= RCON[(ksRow / keySize) | 0] << 24;
	                    } else if (keySize > 6 && ksRow % keySize == 4) {
	                        // Sub word
	                        t = (SBOX[t >>> 24] << 24) | (SBOX[(t >>> 16) & 0xff] << 16) | (SBOX[(t >>> 8) & 0xff] << 8) | SBOX[t & 0xff];
	                    }

	                    keySchedule[ksRow] = keySchedule[ksRow - keySize] ^ t;
	                }
	            }

	            // Compute inv key schedule
	            var invKeySchedule = this._invKeySchedule = [];
	            for (var invKsRow = 0; invKsRow < ksRows; invKsRow++) {
	                var ksRow = ksRows - invKsRow;

	                if (invKsRow % 4) {
	                    var t = keySchedule[ksRow];
	                } else {
	                    var t = keySchedule[ksRow - 4];
	                }

	                if (invKsRow < 4 || ksRow <= 4) {
	                    invKeySchedule[invKsRow] = t;
	                } else {
	                    invKeySchedule[invKsRow] = INV_SUB_MIX_0[SBOX[t >>> 24]] ^ INV_SUB_MIX_1[SBOX[(t >>> 16) & 0xff]] ^
	                                               INV_SUB_MIX_2[SBOX[(t >>> 8) & 0xff]] ^ INV_SUB_MIX_3[SBOX[t & 0xff]];
	                }
	            }
	        },

	        encryptBlock: function (M, offset) {
	            this._doCryptBlock(M, offset, this._keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX);
	        },

	        decryptBlock: function (M, offset) {
	            // Swap 2nd and 4th rows
	            var t = M[offset + 1];
	            M[offset + 1] = M[offset + 3];
	            M[offset + 3] = t;

	            this._doCryptBlock(M, offset, this._invKeySchedule, INV_SUB_MIX_0, INV_SUB_MIX_1, INV_SUB_MIX_2, INV_SUB_MIX_3, INV_SBOX);

	            // Inv swap 2nd and 4th rows
	            var t = M[offset + 1];
	            M[offset + 1] = M[offset + 3];
	            M[offset + 3] = t;
	        },

	        _doCryptBlock: function (M, offset, keySchedule, SUB_MIX_0, SUB_MIX_1, SUB_MIX_2, SUB_MIX_3, SBOX) {
	            // Shortcut
	            var nRounds = this._nRounds;

	            // Get input, add round key
	            var s0 = M[offset]     ^ keySchedule[0];
	            var s1 = M[offset + 1] ^ keySchedule[1];
	            var s2 = M[offset + 2] ^ keySchedule[2];
	            var s3 = M[offset + 3] ^ keySchedule[3];

	            // Key schedule row counter
	            var ksRow = 4;

	            // Rounds
	            for (var round = 1; round < nRounds; round++) {
	                // Shift rows, sub bytes, mix columns, add round key
	                var t0 = SUB_MIX_0[s0 >>> 24] ^ SUB_MIX_1[(s1 >>> 16) & 0xff] ^ SUB_MIX_2[(s2 >>> 8) & 0xff] ^ SUB_MIX_3[s3 & 0xff] ^ keySchedule[ksRow++];
	                var t1 = SUB_MIX_0[s1 >>> 24] ^ SUB_MIX_1[(s2 >>> 16) & 0xff] ^ SUB_MIX_2[(s3 >>> 8) & 0xff] ^ SUB_MIX_3[s0 & 0xff] ^ keySchedule[ksRow++];
	                var t2 = SUB_MIX_0[s2 >>> 24] ^ SUB_MIX_1[(s3 >>> 16) & 0xff] ^ SUB_MIX_2[(s0 >>> 8) & 0xff] ^ SUB_MIX_3[s1 & 0xff] ^ keySchedule[ksRow++];
	                var t3 = SUB_MIX_0[s3 >>> 24] ^ SUB_MIX_1[(s0 >>> 16) & 0xff] ^ SUB_MIX_2[(s1 >>> 8) & 0xff] ^ SUB_MIX_3[s2 & 0xff] ^ keySchedule[ksRow++];

	                // Update state
	                s0 = t0;
	                s1 = t1;
	                s2 = t2;
	                s3 = t3;
	            }

	            // Shift rows, sub bytes, add round key
	            var t0 = ((SBOX[s0 >>> 24] << 24) | (SBOX[(s1 >>> 16) & 0xff] << 16) | (SBOX[(s2 >>> 8) & 0xff] << 8) | SBOX[s3 & 0xff]) ^ keySchedule[ksRow++];
	            var t1 = ((SBOX[s1 >>> 24] << 24) | (SBOX[(s2 >>> 16) & 0xff] << 16) | (SBOX[(s3 >>> 8) & 0xff] << 8) | SBOX[s0 & 0xff]) ^ keySchedule[ksRow++];
	            var t2 = ((SBOX[s2 >>> 24] << 24) | (SBOX[(s3 >>> 16) & 0xff] << 16) | (SBOX[(s0 >>> 8) & 0xff] << 8) | SBOX[s1 & 0xff]) ^ keySchedule[ksRow++];
	            var t3 = ((SBOX[s3 >>> 24] << 24) | (SBOX[(s0 >>> 16) & 0xff] << 16) | (SBOX[(s1 >>> 8) & 0xff] << 8) | SBOX[s2 & 0xff]) ^ keySchedule[ksRow++];

	            // Set output
	            M[offset]     = t0;
	            M[offset + 1] = t1;
	            M[offset + 2] = t2;
	            M[offset + 3] = t3;
	        },

	        keySize: 256/32
	    });

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.AES.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.AES.decrypt(ciphertext, key, cfg);
	     */
	    C.AES = BlockCipher._createHelper(AES);
	}());


	return CryptoJS.AES;

}));

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(44), __webpack_require__(48), __webpack_require__(49), __webpack_require__(59), __webpack_require__(60));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var WordArray = C_lib.WordArray;
	    var BlockCipher = C_lib.BlockCipher;
	    var C_algo = C.algo;

	    // Permuted Choice 1 constants
	    var PC1 = [
	        57, 49, 41, 33, 25, 17, 9,  1,
	        58, 50, 42, 34, 26, 18, 10, 2,
	        59, 51, 43, 35, 27, 19, 11, 3,
	        60, 52, 44, 36, 63, 55, 47, 39,
	        31, 23, 15, 7,  62, 54, 46, 38,
	        30, 22, 14, 6,  61, 53, 45, 37,
	        29, 21, 13, 5,  28, 20, 12, 4
	    ];

	    // Permuted Choice 2 constants
	    var PC2 = [
	        14, 17, 11, 24, 1,  5,
	        3,  28, 15, 6,  21, 10,
	        23, 19, 12, 4,  26, 8,
	        16, 7,  27, 20, 13, 2,
	        41, 52, 31, 37, 47, 55,
	        30, 40, 51, 45, 33, 48,
	        44, 49, 39, 56, 34, 53,
	        46, 42, 50, 36, 29, 32
	    ];

	    // Cumulative bit shift constants
	    var BIT_SHIFTS = [1,  2,  4,  6,  8,  10, 12, 14, 15, 17, 19, 21, 23, 25, 27, 28];

	    // SBOXes and round permutation constants
	    var SBOX_P = [
	        {
	            0x0: 0x808200,
	            0x10000000: 0x8000,
	            0x20000000: 0x808002,
	            0x30000000: 0x2,
	            0x40000000: 0x200,
	            0x50000000: 0x808202,
	            0x60000000: 0x800202,
	            0x70000000: 0x800000,
	            0x80000000: 0x202,
	            0x90000000: 0x800200,
	            0xa0000000: 0x8200,
	            0xb0000000: 0x808000,
	            0xc0000000: 0x8002,
	            0xd0000000: 0x800002,
	            0xe0000000: 0x0,
	            0xf0000000: 0x8202,
	            0x8000000: 0x0,
	            0x18000000: 0x808202,
	            0x28000000: 0x8202,
	            0x38000000: 0x8000,
	            0x48000000: 0x808200,
	            0x58000000: 0x200,
	            0x68000000: 0x808002,
	            0x78000000: 0x2,
	            0x88000000: 0x800200,
	            0x98000000: 0x8200,
	            0xa8000000: 0x808000,
	            0xb8000000: 0x800202,
	            0xc8000000: 0x800002,
	            0xd8000000: 0x8002,
	            0xe8000000: 0x202,
	            0xf8000000: 0x800000,
	            0x1: 0x8000,
	            0x10000001: 0x2,
	            0x20000001: 0x808200,
	            0x30000001: 0x800000,
	            0x40000001: 0x808002,
	            0x50000001: 0x8200,
	            0x60000001: 0x200,
	            0x70000001: 0x800202,
	            0x80000001: 0x808202,
	            0x90000001: 0x808000,
	            0xa0000001: 0x800002,
	            0xb0000001: 0x8202,
	            0xc0000001: 0x202,
	            0xd0000001: 0x800200,
	            0xe0000001: 0x8002,
	            0xf0000001: 0x0,
	            0x8000001: 0x808202,
	            0x18000001: 0x808000,
	            0x28000001: 0x800000,
	            0x38000001: 0x200,
	            0x48000001: 0x8000,
	            0x58000001: 0x800002,
	            0x68000001: 0x2,
	            0x78000001: 0x8202,
	            0x88000001: 0x8002,
	            0x98000001: 0x800202,
	            0xa8000001: 0x202,
	            0xb8000001: 0x808200,
	            0xc8000001: 0x800200,
	            0xd8000001: 0x0,
	            0xe8000001: 0x8200,
	            0xf8000001: 0x808002
	        },
	        {
	            0x0: 0x40084010,
	            0x1000000: 0x4000,
	            0x2000000: 0x80000,
	            0x3000000: 0x40080010,
	            0x4000000: 0x40000010,
	            0x5000000: 0x40084000,
	            0x6000000: 0x40004000,
	            0x7000000: 0x10,
	            0x8000000: 0x84000,
	            0x9000000: 0x40004010,
	            0xa000000: 0x40000000,
	            0xb000000: 0x84010,
	            0xc000000: 0x80010,
	            0xd000000: 0x0,
	            0xe000000: 0x4010,
	            0xf000000: 0x40080000,
	            0x800000: 0x40004000,
	            0x1800000: 0x84010,
	            0x2800000: 0x10,
	            0x3800000: 0x40004010,
	            0x4800000: 0x40084010,
	            0x5800000: 0x40000000,
	            0x6800000: 0x80000,
	            0x7800000: 0x40080010,
	            0x8800000: 0x80010,
	            0x9800000: 0x0,
	            0xa800000: 0x4000,
	            0xb800000: 0x40080000,
	            0xc800000: 0x40000010,
	            0xd800000: 0x84000,
	            0xe800000: 0x40084000,
	            0xf800000: 0x4010,
	            0x10000000: 0x0,
	            0x11000000: 0x40080010,
	            0x12000000: 0x40004010,
	            0x13000000: 0x40084000,
	            0x14000000: 0x40080000,
	            0x15000000: 0x10,
	            0x16000000: 0x84010,
	            0x17000000: 0x4000,
	            0x18000000: 0x4010,
	            0x19000000: 0x80000,
	            0x1a000000: 0x80010,
	            0x1b000000: 0x40000010,
	            0x1c000000: 0x84000,
	            0x1d000000: 0x40004000,
	            0x1e000000: 0x40000000,
	            0x1f000000: 0x40084010,
	            0x10800000: 0x84010,
	            0x11800000: 0x80000,
	            0x12800000: 0x40080000,
	            0x13800000: 0x4000,
	            0x14800000: 0x40004000,
	            0x15800000: 0x40084010,
	            0x16800000: 0x10,
	            0x17800000: 0x40000000,
	            0x18800000: 0x40084000,
	            0x19800000: 0x40000010,
	            0x1a800000: 0x40004010,
	            0x1b800000: 0x80010,
	            0x1c800000: 0x0,
	            0x1d800000: 0x4010,
	            0x1e800000: 0x40080010,
	            0x1f800000: 0x84000
	        },
	        {
	            0x0: 0x104,
	            0x100000: 0x0,
	            0x200000: 0x4000100,
	            0x300000: 0x10104,
	            0x400000: 0x10004,
	            0x500000: 0x4000004,
	            0x600000: 0x4010104,
	            0x700000: 0x4010000,
	            0x800000: 0x4000000,
	            0x900000: 0x4010100,
	            0xa00000: 0x10100,
	            0xb00000: 0x4010004,
	            0xc00000: 0x4000104,
	            0xd00000: 0x10000,
	            0xe00000: 0x4,
	            0xf00000: 0x100,
	            0x80000: 0x4010100,
	            0x180000: 0x4010004,
	            0x280000: 0x0,
	            0x380000: 0x4000100,
	            0x480000: 0x4000004,
	            0x580000: 0x10000,
	            0x680000: 0x10004,
	            0x780000: 0x104,
	            0x880000: 0x4,
	            0x980000: 0x100,
	            0xa80000: 0x4010000,
	            0xb80000: 0x10104,
	            0xc80000: 0x10100,
	            0xd80000: 0x4000104,
	            0xe80000: 0x4010104,
	            0xf80000: 0x4000000,
	            0x1000000: 0x4010100,
	            0x1100000: 0x10004,
	            0x1200000: 0x10000,
	            0x1300000: 0x4000100,
	            0x1400000: 0x100,
	            0x1500000: 0x4010104,
	            0x1600000: 0x4000004,
	            0x1700000: 0x0,
	            0x1800000: 0x4000104,
	            0x1900000: 0x4000000,
	            0x1a00000: 0x4,
	            0x1b00000: 0x10100,
	            0x1c00000: 0x4010000,
	            0x1d00000: 0x104,
	            0x1e00000: 0x10104,
	            0x1f00000: 0x4010004,
	            0x1080000: 0x4000000,
	            0x1180000: 0x104,
	            0x1280000: 0x4010100,
	            0x1380000: 0x0,
	            0x1480000: 0x10004,
	            0x1580000: 0x4000100,
	            0x1680000: 0x100,
	            0x1780000: 0x4010004,
	            0x1880000: 0x10000,
	            0x1980000: 0x4010104,
	            0x1a80000: 0x10104,
	            0x1b80000: 0x4000004,
	            0x1c80000: 0x4000104,
	            0x1d80000: 0x4010000,
	            0x1e80000: 0x4,
	            0x1f80000: 0x10100
	        },
	        {
	            0x0: 0x80401000,
	            0x10000: 0x80001040,
	            0x20000: 0x401040,
	            0x30000: 0x80400000,
	            0x40000: 0x0,
	            0x50000: 0x401000,
	            0x60000: 0x80000040,
	            0x70000: 0x400040,
	            0x80000: 0x80000000,
	            0x90000: 0x400000,
	            0xa0000: 0x40,
	            0xb0000: 0x80001000,
	            0xc0000: 0x80400040,
	            0xd0000: 0x1040,
	            0xe0000: 0x1000,
	            0xf0000: 0x80401040,
	            0x8000: 0x80001040,
	            0x18000: 0x40,
	            0x28000: 0x80400040,
	            0x38000: 0x80001000,
	            0x48000: 0x401000,
	            0x58000: 0x80401040,
	            0x68000: 0x0,
	            0x78000: 0x80400000,
	            0x88000: 0x1000,
	            0x98000: 0x80401000,
	            0xa8000: 0x400000,
	            0xb8000: 0x1040,
	            0xc8000: 0x80000000,
	            0xd8000: 0x400040,
	            0xe8000: 0x401040,
	            0xf8000: 0x80000040,
	            0x100000: 0x400040,
	            0x110000: 0x401000,
	            0x120000: 0x80000040,
	            0x130000: 0x0,
	            0x140000: 0x1040,
	            0x150000: 0x80400040,
	            0x160000: 0x80401000,
	            0x170000: 0x80001040,
	            0x180000: 0x80401040,
	            0x190000: 0x80000000,
	            0x1a0000: 0x80400000,
	            0x1b0000: 0x401040,
	            0x1c0000: 0x80001000,
	            0x1d0000: 0x400000,
	            0x1e0000: 0x40,
	            0x1f0000: 0x1000,
	            0x108000: 0x80400000,
	            0x118000: 0x80401040,
	            0x128000: 0x0,
	            0x138000: 0x401000,
	            0x148000: 0x400040,
	            0x158000: 0x80000000,
	            0x168000: 0x80001040,
	            0x178000: 0x40,
	            0x188000: 0x80000040,
	            0x198000: 0x1000,
	            0x1a8000: 0x80001000,
	            0x1b8000: 0x80400040,
	            0x1c8000: 0x1040,
	            0x1d8000: 0x80401000,
	            0x1e8000: 0x400000,
	            0x1f8000: 0x401040
	        },
	        {
	            0x0: 0x80,
	            0x1000: 0x1040000,
	            0x2000: 0x40000,
	            0x3000: 0x20000000,
	            0x4000: 0x20040080,
	            0x5000: 0x1000080,
	            0x6000: 0x21000080,
	            0x7000: 0x40080,
	            0x8000: 0x1000000,
	            0x9000: 0x20040000,
	            0xa000: 0x20000080,
	            0xb000: 0x21040080,
	            0xc000: 0x21040000,
	            0xd000: 0x0,
	            0xe000: 0x1040080,
	            0xf000: 0x21000000,
	            0x800: 0x1040080,
	            0x1800: 0x21000080,
	            0x2800: 0x80,
	            0x3800: 0x1040000,
	            0x4800: 0x40000,
	            0x5800: 0x20040080,
	            0x6800: 0x21040000,
	            0x7800: 0x20000000,
	            0x8800: 0x20040000,
	            0x9800: 0x0,
	            0xa800: 0x21040080,
	            0xb800: 0x1000080,
	            0xc800: 0x20000080,
	            0xd800: 0x21000000,
	            0xe800: 0x1000000,
	            0xf800: 0x40080,
	            0x10000: 0x40000,
	            0x11000: 0x80,
	            0x12000: 0x20000000,
	            0x13000: 0x21000080,
	            0x14000: 0x1000080,
	            0x15000: 0x21040000,
	            0x16000: 0x20040080,
	            0x17000: 0x1000000,
	            0x18000: 0x21040080,
	            0x19000: 0x21000000,
	            0x1a000: 0x1040000,
	            0x1b000: 0x20040000,
	            0x1c000: 0x40080,
	            0x1d000: 0x20000080,
	            0x1e000: 0x0,
	            0x1f000: 0x1040080,
	            0x10800: 0x21000080,
	            0x11800: 0x1000000,
	            0x12800: 0x1040000,
	            0x13800: 0x20040080,
	            0x14800: 0x20000000,
	            0x15800: 0x1040080,
	            0x16800: 0x80,
	            0x17800: 0x21040000,
	            0x18800: 0x40080,
	            0x19800: 0x21040080,
	            0x1a800: 0x0,
	            0x1b800: 0x21000000,
	            0x1c800: 0x1000080,
	            0x1d800: 0x40000,
	            0x1e800: 0x20040000,
	            0x1f800: 0x20000080
	        },
	        {
	            0x0: 0x10000008,
	            0x100: 0x2000,
	            0x200: 0x10200000,
	            0x300: 0x10202008,
	            0x400: 0x10002000,
	            0x500: 0x200000,
	            0x600: 0x200008,
	            0x700: 0x10000000,
	            0x800: 0x0,
	            0x900: 0x10002008,
	            0xa00: 0x202000,
	            0xb00: 0x8,
	            0xc00: 0x10200008,
	            0xd00: 0x202008,
	            0xe00: 0x2008,
	            0xf00: 0x10202000,
	            0x80: 0x10200000,
	            0x180: 0x10202008,
	            0x280: 0x8,
	            0x380: 0x200000,
	            0x480: 0x202008,
	            0x580: 0x10000008,
	            0x680: 0x10002000,
	            0x780: 0x2008,
	            0x880: 0x200008,
	            0x980: 0x2000,
	            0xa80: 0x10002008,
	            0xb80: 0x10200008,
	            0xc80: 0x0,
	            0xd80: 0x10202000,
	            0xe80: 0x202000,
	            0xf80: 0x10000000,
	            0x1000: 0x10002000,
	            0x1100: 0x10200008,
	            0x1200: 0x10202008,
	            0x1300: 0x2008,
	            0x1400: 0x200000,
	            0x1500: 0x10000000,
	            0x1600: 0x10000008,
	            0x1700: 0x202000,
	            0x1800: 0x202008,
	            0x1900: 0x0,
	            0x1a00: 0x8,
	            0x1b00: 0x10200000,
	            0x1c00: 0x2000,
	            0x1d00: 0x10002008,
	            0x1e00: 0x10202000,
	            0x1f00: 0x200008,
	            0x1080: 0x8,
	            0x1180: 0x202000,
	            0x1280: 0x200000,
	            0x1380: 0x10000008,
	            0x1480: 0x10002000,
	            0x1580: 0x2008,
	            0x1680: 0x10202008,
	            0x1780: 0x10200000,
	            0x1880: 0x10202000,
	            0x1980: 0x10200008,
	            0x1a80: 0x2000,
	            0x1b80: 0x202008,
	            0x1c80: 0x200008,
	            0x1d80: 0x0,
	            0x1e80: 0x10000000,
	            0x1f80: 0x10002008
	        },
	        {
	            0x0: 0x100000,
	            0x10: 0x2000401,
	            0x20: 0x400,
	            0x30: 0x100401,
	            0x40: 0x2100401,
	            0x50: 0x0,
	            0x60: 0x1,
	            0x70: 0x2100001,
	            0x80: 0x2000400,
	            0x90: 0x100001,
	            0xa0: 0x2000001,
	            0xb0: 0x2100400,
	            0xc0: 0x2100000,
	            0xd0: 0x401,
	            0xe0: 0x100400,
	            0xf0: 0x2000000,
	            0x8: 0x2100001,
	            0x18: 0x0,
	            0x28: 0x2000401,
	            0x38: 0x2100400,
	            0x48: 0x100000,
	            0x58: 0x2000001,
	            0x68: 0x2000000,
	            0x78: 0x401,
	            0x88: 0x100401,
	            0x98: 0x2000400,
	            0xa8: 0x2100000,
	            0xb8: 0x100001,
	            0xc8: 0x400,
	            0xd8: 0x2100401,
	            0xe8: 0x1,
	            0xf8: 0x100400,
	            0x100: 0x2000000,
	            0x110: 0x100000,
	            0x120: 0x2000401,
	            0x130: 0x2100001,
	            0x140: 0x100001,
	            0x150: 0x2000400,
	            0x160: 0x2100400,
	            0x170: 0x100401,
	            0x180: 0x401,
	            0x190: 0x2100401,
	            0x1a0: 0x100400,
	            0x1b0: 0x1,
	            0x1c0: 0x0,
	            0x1d0: 0x2100000,
	            0x1e0: 0x2000001,
	            0x1f0: 0x400,
	            0x108: 0x100400,
	            0x118: 0x2000401,
	            0x128: 0x2100001,
	            0x138: 0x1,
	            0x148: 0x2000000,
	            0x158: 0x100000,
	            0x168: 0x401,
	            0x178: 0x2100400,
	            0x188: 0x2000001,
	            0x198: 0x2100000,
	            0x1a8: 0x0,
	            0x1b8: 0x2100401,
	            0x1c8: 0x100401,
	            0x1d8: 0x400,
	            0x1e8: 0x2000400,
	            0x1f8: 0x100001
	        },
	        {
	            0x0: 0x8000820,
	            0x1: 0x20000,
	            0x2: 0x8000000,
	            0x3: 0x20,
	            0x4: 0x20020,
	            0x5: 0x8020820,
	            0x6: 0x8020800,
	            0x7: 0x800,
	            0x8: 0x8020000,
	            0x9: 0x8000800,
	            0xa: 0x20800,
	            0xb: 0x8020020,
	            0xc: 0x820,
	            0xd: 0x0,
	            0xe: 0x8000020,
	            0xf: 0x20820,
	            0x80000000: 0x800,
	            0x80000001: 0x8020820,
	            0x80000002: 0x8000820,
	            0x80000003: 0x8000000,
	            0x80000004: 0x8020000,
	            0x80000005: 0x20800,
	            0x80000006: 0x20820,
	            0x80000007: 0x20,
	            0x80000008: 0x8000020,
	            0x80000009: 0x820,
	            0x8000000a: 0x20020,
	            0x8000000b: 0x8020800,
	            0x8000000c: 0x0,
	            0x8000000d: 0x8020020,
	            0x8000000e: 0x8000800,
	            0x8000000f: 0x20000,
	            0x10: 0x20820,
	            0x11: 0x8020800,
	            0x12: 0x20,
	            0x13: 0x800,
	            0x14: 0x8000800,
	            0x15: 0x8000020,
	            0x16: 0x8020020,
	            0x17: 0x20000,
	            0x18: 0x0,
	            0x19: 0x20020,
	            0x1a: 0x8020000,
	            0x1b: 0x8000820,
	            0x1c: 0x8020820,
	            0x1d: 0x20800,
	            0x1e: 0x820,
	            0x1f: 0x8000000,
	            0x80000010: 0x20000,
	            0x80000011: 0x800,
	            0x80000012: 0x8020020,
	            0x80000013: 0x20820,
	            0x80000014: 0x20,
	            0x80000015: 0x8020000,
	            0x80000016: 0x8000000,
	            0x80000017: 0x8000820,
	            0x80000018: 0x8020820,
	            0x80000019: 0x8000020,
	            0x8000001a: 0x8000800,
	            0x8000001b: 0x0,
	            0x8000001c: 0x20800,
	            0x8000001d: 0x820,
	            0x8000001e: 0x20020,
	            0x8000001f: 0x8020800
	        }
	    ];

	    // Masks that select the SBOX input
	    var SBOX_MASK = [
	        0xf8000001, 0x1f800000, 0x01f80000, 0x001f8000,
	        0x0001f800, 0x00001f80, 0x000001f8, 0x8000001f
	    ];

	    /**
	     * DES block cipher algorithm.
	     */
	    var DES = C_algo.DES = BlockCipher.extend({
	        _doReset: function () {
	            // Shortcuts
	            var key = this._key;
	            var keyWords = key.words;

	            // Select 56 bits according to PC1
	            var keyBits = [];
	            for (var i = 0; i < 56; i++) {
	                var keyBitPos = PC1[i] - 1;
	                keyBits[i] = (keyWords[keyBitPos >>> 5] >>> (31 - keyBitPos % 32)) & 1;
	            }

	            // Assemble 16 subkeys
	            var subKeys = this._subKeys = [];
	            for (var nSubKey = 0; nSubKey < 16; nSubKey++) {
	                // Create subkey
	                var subKey = subKeys[nSubKey] = [];

	                // Shortcut
	                var bitShift = BIT_SHIFTS[nSubKey];

	                // Select 48 bits according to PC2
	                for (var i = 0; i < 24; i++) {
	                    // Select from the left 28 key bits
	                    subKey[(i / 6) | 0] |= keyBits[((PC2[i] - 1) + bitShift) % 28] << (31 - i % 6);

	                    // Select from the right 28 key bits
	                    subKey[4 + ((i / 6) | 0)] |= keyBits[28 + (((PC2[i + 24] - 1) + bitShift) % 28)] << (31 - i % 6);
	                }

	                // Since each subkey is applied to an expanded 32-bit input,
	                // the subkey can be broken into 8 values scaled to 32-bits,
	                // which allows the key to be used without expansion
	                subKey[0] = (subKey[0] << 1) | (subKey[0] >>> 31);
	                for (var i = 1; i < 7; i++) {
	                    subKey[i] = subKey[i] >>> ((i - 1) * 4 + 3);
	                }
	                subKey[7] = (subKey[7] << 5) | (subKey[7] >>> 27);
	            }

	            // Compute inverse subkeys
	            var invSubKeys = this._invSubKeys = [];
	            for (var i = 0; i < 16; i++) {
	                invSubKeys[i] = subKeys[15 - i];
	            }
	        },

	        encryptBlock: function (M, offset) {
	            this._doCryptBlock(M, offset, this._subKeys);
	        },

	        decryptBlock: function (M, offset) {
	            this._doCryptBlock(M, offset, this._invSubKeys);
	        },

	        _doCryptBlock: function (M, offset, subKeys) {
	            // Get input
	            this._lBlock = M[offset];
	            this._rBlock = M[offset + 1];

	            // Initial permutation
	            exchangeLR.call(this, 4,  0x0f0f0f0f);
	            exchangeLR.call(this, 16, 0x0000ffff);
	            exchangeRL.call(this, 2,  0x33333333);
	            exchangeRL.call(this, 8,  0x00ff00ff);
	            exchangeLR.call(this, 1,  0x55555555);

	            // Rounds
	            for (var round = 0; round < 16; round++) {
	                // Shortcuts
	                var subKey = subKeys[round];
	                var lBlock = this._lBlock;
	                var rBlock = this._rBlock;

	                // Feistel function
	                var f = 0;
	                for (var i = 0; i < 8; i++) {
	                    f |= SBOX_P[i][((rBlock ^ subKey[i]) & SBOX_MASK[i]) >>> 0];
	                }
	                this._lBlock = rBlock;
	                this._rBlock = lBlock ^ f;
	            }

	            // Undo swap from last round
	            var t = this._lBlock;
	            this._lBlock = this._rBlock;
	            this._rBlock = t;

	            // Final permutation
	            exchangeLR.call(this, 1,  0x55555555);
	            exchangeRL.call(this, 8,  0x00ff00ff);
	            exchangeRL.call(this, 2,  0x33333333);
	            exchangeLR.call(this, 16, 0x0000ffff);
	            exchangeLR.call(this, 4,  0x0f0f0f0f);

	            // Set output
	            M[offset] = this._lBlock;
	            M[offset + 1] = this._rBlock;
	        },

	        keySize: 64/32,

	        ivSize: 64/32,

	        blockSize: 64/32
	    });

	    // Swap bits across the left and right words
	    function exchangeLR(offset, mask) {
	        var t = ((this._lBlock >>> offset) ^ this._rBlock) & mask;
	        this._rBlock ^= t;
	        this._lBlock ^= t << offset;
	    }

	    function exchangeRL(offset, mask) {
	        var t = ((this._rBlock >>> offset) ^ this._lBlock) & mask;
	        this._lBlock ^= t;
	        this._rBlock ^= t << offset;
	    }

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.DES.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.DES.decrypt(ciphertext, key, cfg);
	     */
	    C.DES = BlockCipher._createHelper(DES);

	    /**
	     * Triple-DES block cipher algorithm.
	     */
	    var TripleDES = C_algo.TripleDES = BlockCipher.extend({
	        _doReset: function () {
	            // Shortcuts
	            var key = this._key;
	            var keyWords = key.words;

	            // Create DES instances
	            this._des1 = DES.createEncryptor(WordArray.create(keyWords.slice(0, 2)));
	            this._des2 = DES.createEncryptor(WordArray.create(keyWords.slice(2, 4)));
	            this._des3 = DES.createEncryptor(WordArray.create(keyWords.slice(4, 6)));
	        },

	        encryptBlock: function (M, offset) {
	            this._des1.encryptBlock(M, offset);
	            this._des2.decryptBlock(M, offset);
	            this._des3.encryptBlock(M, offset);
	        },

	        decryptBlock: function (M, offset) {
	            this._des3.decryptBlock(M, offset);
	            this._des2.encryptBlock(M, offset);
	            this._des1.decryptBlock(M, offset);
	        },

	        keySize: 192/32,

	        ivSize: 64/32,

	        blockSize: 64/32
	    });

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.TripleDES.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.TripleDES.decrypt(ciphertext, key, cfg);
	     */
	    C.TripleDES = BlockCipher._createHelper(TripleDES);
	}());


	return CryptoJS.TripleDES;

}));

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(44), __webpack_require__(48), __webpack_require__(49), __webpack_require__(59), __webpack_require__(60));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var StreamCipher = C_lib.StreamCipher;
	    var C_algo = C.algo;

	    /**
	     * RC4 stream cipher algorithm.
	     */
	    var RC4 = C_algo.RC4 = StreamCipher.extend({
	        _doReset: function () {
	            // Shortcuts
	            var key = this._key;
	            var keyWords = key.words;
	            var keySigBytes = key.sigBytes;

	            // Init sbox
	            var S = this._S = [];
	            for (var i = 0; i < 256; i++) {
	                S[i] = i;
	            }

	            // Key setup
	            for (var i = 0, j = 0; i < 256; i++) {
	                var keyByteIndex = i % keySigBytes;
	                var keyByte = (keyWords[keyByteIndex >>> 2] >>> (24 - (keyByteIndex % 4) * 8)) & 0xff;

	                j = (j + S[i] + keyByte) % 256;

	                // Swap
	                var t = S[i];
	                S[i] = S[j];
	                S[j] = t;
	            }

	            // Counters
	            this._i = this._j = 0;
	        },

	        _doProcessBlock: function (M, offset) {
	            M[offset] ^= generateKeystreamWord.call(this);
	        },

	        keySize: 256/32,

	        ivSize: 0
	    });

	    function generateKeystreamWord() {
	        // Shortcuts
	        var S = this._S;
	        var i = this._i;
	        var j = this._j;

	        // Generate keystream word
	        var keystreamWord = 0;
	        for (var n = 0; n < 4; n++) {
	            i = (i + 1) % 256;
	            j = (j + S[i]) % 256;

	            // Swap
	            var t = S[i];
	            S[i] = S[j];
	            S[j] = t;

	            keystreamWord |= S[(S[i] + S[j]) % 256] << (24 - n * 8);
	        }

	        // Update counters
	        this._i = i;
	        this._j = j;

	        return keystreamWord;
	    }

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.RC4.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.RC4.decrypt(ciphertext, key, cfg);
	     */
	    C.RC4 = StreamCipher._createHelper(RC4);

	    /**
	     * Modified RC4 stream cipher algorithm.
	     */
	    var RC4Drop = C_algo.RC4Drop = RC4.extend({
	        /**
	         * Configuration options.
	         *
	         * @property {number} drop The number of keystream words to drop. Default 192
	         */
	        cfg: RC4.cfg.extend({
	            drop: 192
	        }),

	        _doReset: function () {
	            RC4._doReset.call(this);

	            // Drop
	            for (var i = this.cfg.drop; i > 0; i--) {
	                generateKeystreamWord.call(this);
	            }
	        }
	    });

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.RC4Drop.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.RC4Drop.decrypt(ciphertext, key, cfg);
	     */
	    C.RC4Drop = StreamCipher._createHelper(RC4Drop);
	}());


	return CryptoJS.RC4;

}));

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(44), __webpack_require__(48), __webpack_require__(49), __webpack_require__(59), __webpack_require__(60));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var StreamCipher = C_lib.StreamCipher;
	    var C_algo = C.algo;

	    // Reusable objects
	    var S  = [];
	    var C_ = [];
	    var G  = [];

	    /**
	     * Rabbit stream cipher algorithm
	     */
	    var Rabbit = C_algo.Rabbit = StreamCipher.extend({
	        _doReset: function () {
	            // Shortcuts
	            var K = this._key.words;
	            var iv = this.cfg.iv;

	            // Swap endian
	            for (var i = 0; i < 4; i++) {
	                K[i] = (((K[i] << 8)  | (K[i] >>> 24)) & 0x00ff00ff) |
	                       (((K[i] << 24) | (K[i] >>> 8))  & 0xff00ff00);
	            }

	            // Generate initial state values
	            var X = this._X = [
	                K[0], (K[3] << 16) | (K[2] >>> 16),
	                K[1], (K[0] << 16) | (K[3] >>> 16),
	                K[2], (K[1] << 16) | (K[0] >>> 16),
	                K[3], (K[2] << 16) | (K[1] >>> 16)
	            ];

	            // Generate initial counter values
	            var C = this._C = [
	                (K[2] << 16) | (K[2] >>> 16), (K[0] & 0xffff0000) | (K[1] & 0x0000ffff),
	                (K[3] << 16) | (K[3] >>> 16), (K[1] & 0xffff0000) | (K[2] & 0x0000ffff),
	                (K[0] << 16) | (K[0] >>> 16), (K[2] & 0xffff0000) | (K[3] & 0x0000ffff),
	                (K[1] << 16) | (K[1] >>> 16), (K[3] & 0xffff0000) | (K[0] & 0x0000ffff)
	            ];

	            // Carry bit
	            this._b = 0;

	            // Iterate the system four times
	            for (var i = 0; i < 4; i++) {
	                nextState.call(this);
	            }

	            // Modify the counters
	            for (var i = 0; i < 8; i++) {
	                C[i] ^= X[(i + 4) & 7];
	            }

	            // IV setup
	            if (iv) {
	                // Shortcuts
	                var IV = iv.words;
	                var IV_0 = IV[0];
	                var IV_1 = IV[1];

	                // Generate four subvectors
	                var i0 = (((IV_0 << 8) | (IV_0 >>> 24)) & 0x00ff00ff) | (((IV_0 << 24) | (IV_0 >>> 8)) & 0xff00ff00);
	                var i2 = (((IV_1 << 8) | (IV_1 >>> 24)) & 0x00ff00ff) | (((IV_1 << 24) | (IV_1 >>> 8)) & 0xff00ff00);
	                var i1 = (i0 >>> 16) | (i2 & 0xffff0000);
	                var i3 = (i2 << 16)  | (i0 & 0x0000ffff);

	                // Modify counter values
	                C[0] ^= i0;
	                C[1] ^= i1;
	                C[2] ^= i2;
	                C[3] ^= i3;
	                C[4] ^= i0;
	                C[5] ^= i1;
	                C[6] ^= i2;
	                C[7] ^= i3;

	                // Iterate the system four times
	                for (var i = 0; i < 4; i++) {
	                    nextState.call(this);
	                }
	            }
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var X = this._X;

	            // Iterate the system
	            nextState.call(this);

	            // Generate four keystream words
	            S[0] = X[0] ^ (X[5] >>> 16) ^ (X[3] << 16);
	            S[1] = X[2] ^ (X[7] >>> 16) ^ (X[5] << 16);
	            S[2] = X[4] ^ (X[1] >>> 16) ^ (X[7] << 16);
	            S[3] = X[6] ^ (X[3] >>> 16) ^ (X[1] << 16);

	            for (var i = 0; i < 4; i++) {
	                // Swap endian
	                S[i] = (((S[i] << 8)  | (S[i] >>> 24)) & 0x00ff00ff) |
	                       (((S[i] << 24) | (S[i] >>> 8))  & 0xff00ff00);

	                // Encrypt
	                M[offset + i] ^= S[i];
	            }
	        },

	        blockSize: 128/32,

	        ivSize: 64/32
	    });

	    function nextState() {
	        // Shortcuts
	        var X = this._X;
	        var C = this._C;

	        // Save old counter values
	        for (var i = 0; i < 8; i++) {
	            C_[i] = C[i];
	        }

	        // Calculate new counter values
	        C[0] = (C[0] + 0x4d34d34d + this._b) | 0;
	        C[1] = (C[1] + 0xd34d34d3 + ((C[0] >>> 0) < (C_[0] >>> 0) ? 1 : 0)) | 0;
	        C[2] = (C[2] + 0x34d34d34 + ((C[1] >>> 0) < (C_[1] >>> 0) ? 1 : 0)) | 0;
	        C[3] = (C[3] + 0x4d34d34d + ((C[2] >>> 0) < (C_[2] >>> 0) ? 1 : 0)) | 0;
	        C[4] = (C[4] + 0xd34d34d3 + ((C[3] >>> 0) < (C_[3] >>> 0) ? 1 : 0)) | 0;
	        C[5] = (C[5] + 0x34d34d34 + ((C[4] >>> 0) < (C_[4] >>> 0) ? 1 : 0)) | 0;
	        C[6] = (C[6] + 0x4d34d34d + ((C[5] >>> 0) < (C_[5] >>> 0) ? 1 : 0)) | 0;
	        C[7] = (C[7] + 0xd34d34d3 + ((C[6] >>> 0) < (C_[6] >>> 0) ? 1 : 0)) | 0;
	        this._b = (C[7] >>> 0) < (C_[7] >>> 0) ? 1 : 0;

	        // Calculate the g-values
	        for (var i = 0; i < 8; i++) {
	            var gx = X[i] + C[i];

	            // Construct high and low argument for squaring
	            var ga = gx & 0xffff;
	            var gb = gx >>> 16;

	            // Calculate high and low result of squaring
	            var gh = ((((ga * ga) >>> 17) + ga * gb) >>> 15) + gb * gb;
	            var gl = (((gx & 0xffff0000) * gx) | 0) + (((gx & 0x0000ffff) * gx) | 0);

	            // High XOR low
	            G[i] = gh ^ gl;
	        }

	        // Calculate new state values
	        X[0] = (G[0] + ((G[7] << 16) | (G[7] >>> 16)) + ((G[6] << 16) | (G[6] >>> 16))) | 0;
	        X[1] = (G[1] + ((G[0] << 8)  | (G[0] >>> 24)) + G[7]) | 0;
	        X[2] = (G[2] + ((G[1] << 16) | (G[1] >>> 16)) + ((G[0] << 16) | (G[0] >>> 16))) | 0;
	        X[3] = (G[3] + ((G[2] << 8)  | (G[2] >>> 24)) + G[1]) | 0;
	        X[4] = (G[4] + ((G[3] << 16) | (G[3] >>> 16)) + ((G[2] << 16) | (G[2] >>> 16))) | 0;
	        X[5] = (G[5] + ((G[4] << 8)  | (G[4] >>> 24)) + G[3]) | 0;
	        X[6] = (G[6] + ((G[5] << 16) | (G[5] >>> 16)) + ((G[4] << 16) | (G[4] >>> 16))) | 0;
	        X[7] = (G[7] + ((G[6] << 8)  | (G[6] >>> 24)) + G[5]) | 0;
	    }

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.Rabbit.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.Rabbit.decrypt(ciphertext, key, cfg);
	     */
	    C.Rabbit = StreamCipher._createHelper(Rabbit);
	}());


	return CryptoJS.Rabbit;

}));

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

;(function (root, factory, undef) {
	if (true) {
		// CommonJS
		module.exports = exports = factory(__webpack_require__(44), __webpack_require__(48), __webpack_require__(49), __webpack_require__(59), __webpack_require__(60));
	}
	else {}
}(this, function (CryptoJS) {

	(function () {
	    // Shortcuts
	    var C = CryptoJS;
	    var C_lib = C.lib;
	    var StreamCipher = C_lib.StreamCipher;
	    var C_algo = C.algo;

	    // Reusable objects
	    var S  = [];
	    var C_ = [];
	    var G  = [];

	    /**
	     * Rabbit stream cipher algorithm.
	     *
	     * This is a legacy version that neglected to convert the key to little-endian.
	     * This error doesn't affect the cipher's security,
	     * but it does affect its compatibility with other implementations.
	     */
	    var RabbitLegacy = C_algo.RabbitLegacy = StreamCipher.extend({
	        _doReset: function () {
	            // Shortcuts
	            var K = this._key.words;
	            var iv = this.cfg.iv;

	            // Generate initial state values
	            var X = this._X = [
	                K[0], (K[3] << 16) | (K[2] >>> 16),
	                K[1], (K[0] << 16) | (K[3] >>> 16),
	                K[2], (K[1] << 16) | (K[0] >>> 16),
	                K[3], (K[2] << 16) | (K[1] >>> 16)
	            ];

	            // Generate initial counter values
	            var C = this._C = [
	                (K[2] << 16) | (K[2] >>> 16), (K[0] & 0xffff0000) | (K[1] & 0x0000ffff),
	                (K[3] << 16) | (K[3] >>> 16), (K[1] & 0xffff0000) | (K[2] & 0x0000ffff),
	                (K[0] << 16) | (K[0] >>> 16), (K[2] & 0xffff0000) | (K[3] & 0x0000ffff),
	                (K[1] << 16) | (K[1] >>> 16), (K[3] & 0xffff0000) | (K[0] & 0x0000ffff)
	            ];

	            // Carry bit
	            this._b = 0;

	            // Iterate the system four times
	            for (var i = 0; i < 4; i++) {
	                nextState.call(this);
	            }

	            // Modify the counters
	            for (var i = 0; i < 8; i++) {
	                C[i] ^= X[(i + 4) & 7];
	            }

	            // IV setup
	            if (iv) {
	                // Shortcuts
	                var IV = iv.words;
	                var IV_0 = IV[0];
	                var IV_1 = IV[1];

	                // Generate four subvectors
	                var i0 = (((IV_0 << 8) | (IV_0 >>> 24)) & 0x00ff00ff) | (((IV_0 << 24) | (IV_0 >>> 8)) & 0xff00ff00);
	                var i2 = (((IV_1 << 8) | (IV_1 >>> 24)) & 0x00ff00ff) | (((IV_1 << 24) | (IV_1 >>> 8)) & 0xff00ff00);
	                var i1 = (i0 >>> 16) | (i2 & 0xffff0000);
	                var i3 = (i2 << 16)  | (i0 & 0x0000ffff);

	                // Modify counter values
	                C[0] ^= i0;
	                C[1] ^= i1;
	                C[2] ^= i2;
	                C[3] ^= i3;
	                C[4] ^= i0;
	                C[5] ^= i1;
	                C[6] ^= i2;
	                C[7] ^= i3;

	                // Iterate the system four times
	                for (var i = 0; i < 4; i++) {
	                    nextState.call(this);
	                }
	            }
	        },

	        _doProcessBlock: function (M, offset) {
	            // Shortcut
	            var X = this._X;

	            // Iterate the system
	            nextState.call(this);

	            // Generate four keystream words
	            S[0] = X[0] ^ (X[5] >>> 16) ^ (X[3] << 16);
	            S[1] = X[2] ^ (X[7] >>> 16) ^ (X[5] << 16);
	            S[2] = X[4] ^ (X[1] >>> 16) ^ (X[7] << 16);
	            S[3] = X[6] ^ (X[3] >>> 16) ^ (X[1] << 16);

	            for (var i = 0; i < 4; i++) {
	                // Swap endian
	                S[i] = (((S[i] << 8)  | (S[i] >>> 24)) & 0x00ff00ff) |
	                       (((S[i] << 24) | (S[i] >>> 8))  & 0xff00ff00);

	                // Encrypt
	                M[offset + i] ^= S[i];
	            }
	        },

	        blockSize: 128/32,

	        ivSize: 64/32
	    });

	    function nextState() {
	        // Shortcuts
	        var X = this._X;
	        var C = this._C;

	        // Save old counter values
	        for (var i = 0; i < 8; i++) {
	            C_[i] = C[i];
	        }

	        // Calculate new counter values
	        C[0] = (C[0] + 0x4d34d34d + this._b) | 0;
	        C[1] = (C[1] + 0xd34d34d3 + ((C[0] >>> 0) < (C_[0] >>> 0) ? 1 : 0)) | 0;
	        C[2] = (C[2] + 0x34d34d34 + ((C[1] >>> 0) < (C_[1] >>> 0) ? 1 : 0)) | 0;
	        C[3] = (C[3] + 0x4d34d34d + ((C[2] >>> 0) < (C_[2] >>> 0) ? 1 : 0)) | 0;
	        C[4] = (C[4] + 0xd34d34d3 + ((C[3] >>> 0) < (C_[3] >>> 0) ? 1 : 0)) | 0;
	        C[5] = (C[5] + 0x34d34d34 + ((C[4] >>> 0) < (C_[4] >>> 0) ? 1 : 0)) | 0;
	        C[6] = (C[6] + 0x4d34d34d + ((C[5] >>> 0) < (C_[5] >>> 0) ? 1 : 0)) | 0;
	        C[7] = (C[7] + 0xd34d34d3 + ((C[6] >>> 0) < (C_[6] >>> 0) ? 1 : 0)) | 0;
	        this._b = (C[7] >>> 0) < (C_[7] >>> 0) ? 1 : 0;

	        // Calculate the g-values
	        for (var i = 0; i < 8; i++) {
	            var gx = X[i] + C[i];

	            // Construct high and low argument for squaring
	            var ga = gx & 0xffff;
	            var gb = gx >>> 16;

	            // Calculate high and low result of squaring
	            var gh = ((((ga * ga) >>> 17) + ga * gb) >>> 15) + gb * gb;
	            var gl = (((gx & 0xffff0000) * gx) | 0) + (((gx & 0x0000ffff) * gx) | 0);

	            // High XOR low
	            G[i] = gh ^ gl;
	        }

	        // Calculate new state values
	        X[0] = (G[0] + ((G[7] << 16) | (G[7] >>> 16)) + ((G[6] << 16) | (G[6] >>> 16))) | 0;
	        X[1] = (G[1] + ((G[0] << 8)  | (G[0] >>> 24)) + G[7]) | 0;
	        X[2] = (G[2] + ((G[1] << 16) | (G[1] >>> 16)) + ((G[0] << 16) | (G[0] >>> 16))) | 0;
	        X[3] = (G[3] + ((G[2] << 8)  | (G[2] >>> 24)) + G[1]) | 0;
	        X[4] = (G[4] + ((G[3] << 16) | (G[3] >>> 16)) + ((G[2] << 16) | (G[2] >>> 16))) | 0;
	        X[5] = (G[5] + ((G[4] << 8)  | (G[4] >>> 24)) + G[3]) | 0;
	        X[6] = (G[6] + ((G[5] << 16) | (G[5] >>> 16)) + ((G[4] << 16) | (G[4] >>> 16))) | 0;
	        X[7] = (G[7] + ((G[6] << 8)  | (G[6] >>> 24)) + G[5]) | 0;
	    }

	    /**
	     * Shortcut functions to the cipher's object interface.
	     *
	     * @example
	     *
	     *     var ciphertext = CryptoJS.RabbitLegacy.encrypt(message, key, cfg);
	     *     var plaintext  = CryptoJS.RabbitLegacy.decrypt(ciphertext, key, cfg);
	     */
	    C.RabbitLegacy = StreamCipher._createHelper(RabbitLegacy);
	}());


	return CryptoJS.RabbitLegacy;

}));

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(78)
var $app_style$ = __webpack_require__(79)
var $app_script$ = __webpack_require__(80)

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
/* 78 */
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
        "top-content"
      ],
      "children": [
        {
          "type": "div",
          "attr": {},
          "classList": [
            "poster-item"
          ],
          "children": [
            {
              "type": "image",
              "attr": {
                "src": function () {return this.iconuri}
              },
              "classList": [
                "icon"
              ],
              "events": {
                "click": "pickPhoto",
                "longpress": "viewPhoto"
              }
            },
            {
              "type": "a",
              "attr": {
                "value": "个人信息"
              },
              "classList": [
                "a_item"
              ]
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "account-item"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "姓名"
              },
              "classList": [
                "account-subtitle"
              ]
            },
            {
              "type": "input",
              "attr": {
                "maxlength": "20",
                "borderBottomColor": function () {return this.focusItem===0?'#0066ff':'#cccccc'}
              },
              "classList": [
                "account-input"
              ],
              "events": {
                "focus": "onFocusName",
                "blur": "onBlur",
                "change": "getName"
              }
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "account-item"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "用户名"
              },
              "classList": [
                "account-subtitle"
              ]
            },
            {
              "type": "input",
              "attr": {
                "maxlength": "20",
                "borderBottomColor": function () {return this.focusItem===1?'#0066ff':'#cccccc'}
              },
              "classList": [
                "account-input"
              ],
              "events": {
                "focus": "onFocusUserName",
                "blur": "onBlur",
                "change": "getUserName"
              }
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "account-item"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "Email"
              },
              "classList": [
                "account-subtitle"
              ]
            },
            {
              "type": "input",
              "attr": {
                "borderBottomColor": function () {return this.focusItem===2?'#0066ff':'#cccccc'}
              },
              "classList": [
                "account-input"
              ],
              "events": {
                "focus": "onFocusEmail",
                "blur": "onBlur",
                "change": "getEmail"
              }
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "account-item"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "经历"
              },
              "classList": [
                "account-subtitle"
              ]
            },
            {
              "type": "input",
              "attr": {
                "maxlength": "100",
                "borderBottomColor": function () {return this.focusItem===3?'#0066ff':'#cccccc'}
              },
              "classList": [
                "account-input"
              ],
              "events": {
                "focus": "onFocusBio",
                "blur": "onBlur",
                "change": "getBio"
              }
            }
          ]
        },
        {
          "type": "div",
          "attr": {},
          "classList": [
            "account-item"
          ],
          "children": [
            {
              "type": "text",
              "attr": {
                "value": "性别"
              },
              "classList": [
                "account-subtitle"
              ]
            },
            {
              "type": "select",
              "attr": {},
              "style": {
                "fontSize": "29.3px"
              },
              "classList": [
                "selection"
              ],
              "events": {
                "change": "getGender"
              },
              "children": [
                {
                  "type": "option",
                  "attr": {
                    "value": function () {return false},
                    "selected": "false",
                    "content": "先生"
                  },
                  "style": {
                    "color": "#666666",
                    "fontSize": "27.3px"
                  }
                },
                {
                  "type": "option",
                  "attr": {
                    "value": function () {return true},
                    "selected": "true",
                    "content": "女士"
                  },
                  "style": {
                    "color": "#666666",
                    "fontSize": "27.3px"
                  }
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
        "account-btn-box"
      ],
      "events": {
        "click": "registerRequest"
      },
      "children": [
        {
          "type": "text",
          "attr": {
            "value": "确认"
          },
          "classList": [
            "account-btn"
          ]
        }
      ]
    }
  ]
}

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignContent": "center",
    "alignItems": "center",
    "backgroundColor": "#ffffff"
  },
  ".top-content": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignContent": "center",
    "marginLeft": "20px",
    "marginRight": "20px"
  },
  ".account-item": {
    "flexDirection": "column",
    "marginTop": "20px"
  },
  ".poster-item": {
    "width": "100%",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignContent": "center"
  },
  ".icon": {
    "width": "250px",
    "height": "250px",
    "objectFit": "cover",
    "borderRadius": "125px",
    "borderTopColor": "#dc143c",
    "borderRightColor": "#dc143c",
    "borderBottomColor": "#dc143c",
    "borderLeftColor": "#dc143c",
    "borderTopWidth": "5px",
    "borderRightWidth": "5px",
    "borderBottomWidth": "5px",
    "borderLeftWidth": "5px",
    "marginTop": "40px",
    "marginRight": "230px",
    "marginBottom": "40px",
    "marginLeft": "230px"
  },
  ".a_item": {
    "textAlign": "center",
    "backgroundColor": "rgba(0,0,0,0)",
    "height": "60px",
    "width": "100%",
    "paddingTop": "20px",
    "paddingRight": "20px",
    "paddingBottom": "20px",
    "paddingLeft": "20px",
    "fontSize": "35px",
    "color": "#0066ff",
    "lines": 1
  },
  ".account-subtitle": {
    "width": "147px",
    "fontSize": "31.3px",
    "color": "#808080"
  },
  ".account-input": {
    "height": "67px",
    "flex": 1,
    "fontSize": "31.3px",
    "color": "#1A1A1A",
    "borderBottomWidth": "1px"
  },
  ".selection": {
    "borderBottomWidth": "1px"
  },
  ".account-btn-box": {
    "marginTop": "50px",
    "marginBottom": "150px"
  },
  ".account-btn": {
    "paddingTop": "20px",
    "paddingRight": "155px",
    "paddingBottom": "20px",
    "paddingLeft": "155px",
    "marginTop": "0px",
    "marginRight": "188px",
    "marginBottom": "0px",
    "marginLeft": "188px",
    "fontSize": "31.3px",
    "color": "#ffffff",
    "backgroundColor": "#0066ff",
    "borderRadius": "8.3px"
  }
}

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = function(module, exports, $app_require$){"use strict";

var _system = _interopRequireDefault($app_require$("@app-module/system.media"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.prompt"));

var _system3 = _interopRequireDefault($app_require$("@app-module/system.request"));

var _system4 = _interopRequireDefault($app_require$("@app-module/system.fetch"));

var _system5 = _interopRequireDefault($app_require$("@app-module/system.router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CryptoJS = __webpack_require__(43);

var SecretId = 'AKIDz5p6FkpkyaY8HZTzMvpEmn1vUUeUsZ4w';
var SecretKey = '45XrRwHdsCRdu7B5rfOwtmbIvbxADxZ4';
var bucket = 'lucaszhao-1258906334';
var period = 3600;
module.exports = {
  props: ['phonenum', 'password'],
  data: {
    iconuri: '/Common/default.jpg',
    focusItem: -1,
    inputName: '',
    inputUserName: '',
    inputEmail: '',
    inputBio: '',
    inputGender: true,
    inputURI: '',
    inputPhoneNum: '',
    inputPassword: '',
    directory: ''
  },
  onFocusName: function onFocusName() {
    this.focusItem = 0;
  },
  onFocusUserName: function onFocusUserName() {
    this.focusItem = 1;
  },
  onFocusEmail: function onFocusEmail() {
    this.focusItem = 2;
  },
  onFocusBio: function onFocusBio() {
    this.focusItem = 3;
  },
  onBlur: function onBlur() {
    this.focusItem = -1;
  },
  getName: function getName(e) {
    this.inputName = e.value;
  },
  getUserName: function getUserName(e) {
    this.inputUserName = e.value;
  },
  getEmail: function getEmail(e) {
    this.inputEmail = e.value;
  },
  getBio: function getBio(e) {
    this.inputBio = e.value;
  },
  getGender: function getGender(e) {
    this.inputGender = e.newValue;
  },
  registerRequest: function registerRequest() {
    var that = this;
    var date = new Date();
    var StartTimestamp = Math.floor(date.getTime() / 1000);
    var EndTimestamp = StartTimestamp + period;
    var KeyTime = StartTimestamp + ';' + EndTimestamp;
    var SignKey = CryptoJS.HmacSHA1(KeyTime, SecretKey).toString();
    var Policy = JSON.stringify({
      "expiration": "2050-01-01T00:00:00.000Z",
      "conditions": [{
        "bucket": bucket
      }, {
        "q-sign-algorithm": "sha1"
      }, {
        "q-ak": SecretId
      }, {
        "q-sign-time": KeyTime
      }]
    });
    var StringToSign = CryptoJS.SHA1(Policy).toString();
    var Signature = CryptoJS.HmacSHA1(StringToSign, SignKey).toString();
    var words = CryptoJS.enc.Utf8.parse(Policy);
    var base64 = CryptoJS.enc.Base64.stringify(words);

    _system3["default"].upload({
      "url": 'https://lucaszhao-1258906334.cos.ap-guangzhou.myqcloud.com',
      "files": [{
        uri: that.iconuri
      }],
      "data": [{
        "name": "key",
        "value": that.directory + "${filename}"
      }, {
        "name": "policy",
        "value": base64
      }, {
        "name": "q-sign-algorithm",
        "value": "sha1"
      }, {
        "name": "q-ak",
        "value": SecretId
      }, {
        "name": "q-key-time",
        "value": KeyTime
      }, {
        "name": "q-signature",
        "value": Signature
      }],
      success: function success(data) {
        console.log("request.upload success (" + data.code + ")");
        console.log(data.data);
        console.log(data.headers.Location);
        that.inputURI = data.headers.Location;
      },
      fail: function fail(errmsg, errcode) {
        console.log("request.upload fail (" + errcode + ")");
        console.log(errmsg);

        _system2["default"].showToast({
          message: '网络错误',
          image: '/Common/logo.png'
        });
      }
    });
  },
  pickPhoto: function pickPhoto() {
    var that = this;

    _system["default"].pickImage({
      success: function success(data) {
        that.iconuri = data.uri;
        console.log('media.pickImage success');
      },
      fail: function fail(errmsg, errcode) {
        _system2["default"].showToast({
          message: "选取失败",
          image: '/Common/logo.png'
        });

        console.log('media.pickImage fail ' + errcode);
        console.log(errmsg);
      }
    });
  },
  viewPhoto: function viewPhoto() {
    var that = this;

    _system["default"].previewImage({
      current: that.iconuri,
      uris: [that.iconuri],
      success: function success() {
        console.log('media.previewImage success');
      },
      fail: function fail(errmsg, errcode) {
        console.log('media.previewImage fail ' + errcode);
        console.log(errmsg);
      }
    });
  },
  onInit: function onInit() {
    this.inputPhoneNum = this.phonenum;
    this.inputPassword = this.password;
    this.directory = 'stack/' + this.phonenum + '/';
    this.$watch('inputURI', 'handleRegister');
  },
  randomStr: function randomStr() {
    return '啊' + Math.random().toString(36).slice(-8);
  },
  handleRegister: function handleRegister(newVal, oldVal) {
    if (newVal !== '') {
      var data = {
        "phoneNum": this.inputPhoneNum,
        "password": this.inputPassword,
        "name": this.inputName,
        "email": this.inputEmail,
        "gender": this.inputGender === "false" ? 0 : 1,
        "photo": this.inputURI,
        "username": this.inputUserName !== '' ? this.inputUserName : this.randomStr(),
        "bio": this.inputBio
      };
      var that = this;

      _system4["default"].fetch({
        url: "http://101.132.227.218:8080/stackUserManagement/signin",
        data: data,
        responseType: 'json',
        method: 'post',
        success: function success(data) {
          console.log("fetch.fetch success");
          var code = data.data.errNo;

          if (code === "200") {
            _system2["default"].showDialog({
              message: '注册成功',
              buttons: [{
                text: '确认',
                color: '#33dd44'
              }],
              success: function success(data) {
                console.log("handling callback");

                _system5["default"].replace({
                  uri: '/Login',
                  params: {
                    phonenum: that.inputPhoneNum
                  }
                });
              },
              fail: function fail(data, code) {
                console.log("handling fail, code = " + code);
              }
            });
          } else if (code === "500") {
            _system2["default"].showDialog({
              message: '您的手机号已注册过，请直接登录',
              buttons: [{
                text: '确认',
                color: '#33dd44'
              }],
              success: function success(data) {
                console.log("handling callback");

                _system5["default"].replace({
                  uri: '/Login',
                  params: {
                    phonenum: that.inputPhoneNum
                  }
                });
              },
              fail: function fail(data, code) {
                console.log("handling fail, code = " + code);
              }
            });
          }
        },
        fail: function fail(errmsg, errcode) {
          console.log("fetch.fetch fail " + errcode);
          console.log(errmsg);

          _system2["default"].showToast({
            message: "网络错误",
            image: '/Common/logo.png'
          });
        },
        complete: function complete() {
          that.inputURI = '';
        }
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
/******/ ]));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRcXEVudHJ5UGVySW5mb1xcaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2M6L1VzZXJzLzExMDk2L0Rlc2t0b3AvU3RhY2svRmFzdEFQUC9jb20ubmp1c3Quc3RhY2svbm9kZV9tb2R1bGVzL2NyeXB0by1qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vYzovVXNlcnMvMTEwOTYvRGVza3RvcC9TdGFjay9GYXN0QVBQL2NvbS5uanVzdC5zdGFjay9ub2RlX21vZHVsZXMvY3J5cHRvLWpzL2NvcmUuanMiLCJ3ZWJwYWNrOi8vL2M6L1VzZXJzLzExMDk2L0Rlc2t0b3AvU3RhY2svRmFzdEFQUC9jb20ubmp1c3Quc3RhY2svbm9kZV9tb2R1bGVzL2NyeXB0by1qcy94NjQtY29yZS5qcyIsIndlYnBhY2s6Ly8vYzovVXNlcnMvMTEwOTYvRGVza3RvcC9TdGFjay9GYXN0QVBQL2NvbS5uanVzdC5zdGFjay9ub2RlX21vZHVsZXMvY3J5cHRvLWpzL2xpYi10eXBlZGFycmF5cy5qcyIsIndlYnBhY2s6Ly8vYzovVXNlcnMvMTEwOTYvRGVza3RvcC9TdGFjay9GYXN0QVBQL2NvbS5uanVzdC5zdGFjay9ub2RlX21vZHVsZXMvY3J5cHRvLWpzL2VuYy11dGYxNi5qcyIsIndlYnBhY2s6Ly8vYzovVXNlcnMvMTEwOTYvRGVza3RvcC9TdGFjay9GYXN0QVBQL2NvbS5uanVzdC5zdGFjay9ub2RlX21vZHVsZXMvY3J5cHRvLWpzL2VuYy1iYXNlNjQuanMiLCJ3ZWJwYWNrOi8vL2M6L1VzZXJzLzExMDk2L0Rlc2t0b3AvU3RhY2svRmFzdEFQUC9jb20ubmp1c3Quc3RhY2svbm9kZV9tb2R1bGVzL2NyeXB0by1qcy9tZDUuanMiLCJ3ZWJwYWNrOi8vL2M6L1VzZXJzLzExMDk2L0Rlc2t0b3AvU3RhY2svRmFzdEFQUC9jb20ubmp1c3Quc3RhY2svbm9kZV9tb2R1bGVzL2NyeXB0by1qcy9zaGExLmpzIiwid2VicGFjazovLy9jOi9Vc2Vycy8xMTA5Ni9EZXNrdG9wL1N0YWNrL0Zhc3RBUFAvY29tLm5qdXN0LnN0YWNrL25vZGVfbW9kdWxlcy9jcnlwdG8tanMvc2hhMjU2LmpzIiwid2VicGFjazovLy9jOi9Vc2Vycy8xMTA5Ni9EZXNrdG9wL1N0YWNrL0Zhc3RBUFAvY29tLm5qdXN0LnN0YWNrL25vZGVfbW9kdWxlcy9jcnlwdG8tanMvc2hhMjI0LmpzIiwid2VicGFjazovLy9jOi9Vc2Vycy8xMTA5Ni9EZXNrdG9wL1N0YWNrL0Zhc3RBUFAvY29tLm5qdXN0LnN0YWNrL25vZGVfbW9kdWxlcy9jcnlwdG8tanMvc2hhNTEyLmpzIiwid2VicGFjazovLy9jOi9Vc2Vycy8xMTA5Ni9EZXNrdG9wL1N0YWNrL0Zhc3RBUFAvY29tLm5qdXN0LnN0YWNrL25vZGVfbW9kdWxlcy9jcnlwdG8tanMvc2hhMzg0LmpzIiwid2VicGFjazovLy9jOi9Vc2Vycy8xMTA5Ni9EZXNrdG9wL1N0YWNrL0Zhc3RBUFAvY29tLm5qdXN0LnN0YWNrL25vZGVfbW9kdWxlcy9jcnlwdG8tanMvc2hhMy5qcyIsIndlYnBhY2s6Ly8vYzovVXNlcnMvMTEwOTYvRGVza3RvcC9TdGFjay9GYXN0QVBQL2NvbS5uanVzdC5zdGFjay9ub2RlX21vZHVsZXMvY3J5cHRvLWpzL3JpcGVtZDE2MC5qcyIsIndlYnBhY2s6Ly8vYzovVXNlcnMvMTEwOTYvRGVza3RvcC9TdGFjay9GYXN0QVBQL2NvbS5uanVzdC5zdGFjay9ub2RlX21vZHVsZXMvY3J5cHRvLWpzL2htYWMuanMiLCJ3ZWJwYWNrOi8vL2M6L1VzZXJzLzExMDk2L0Rlc2t0b3AvU3RhY2svRmFzdEFQUC9jb20ubmp1c3Quc3RhY2svbm9kZV9tb2R1bGVzL2NyeXB0by1qcy9wYmtkZjIuanMiLCJ3ZWJwYWNrOi8vL2M6L1VzZXJzLzExMDk2L0Rlc2t0b3AvU3RhY2svRmFzdEFQUC9jb20ubmp1c3Quc3RhY2svbm9kZV9tb2R1bGVzL2NyeXB0by1qcy9ldnBrZGYuanMiLCJ3ZWJwYWNrOi8vL2M6L1VzZXJzLzExMDk2L0Rlc2t0b3AvU3RhY2svRmFzdEFQUC9jb20ubmp1c3Quc3RhY2svbm9kZV9tb2R1bGVzL2NyeXB0by1qcy9jaXBoZXItY29yZS5qcyIsIndlYnBhY2s6Ly8vYzovVXNlcnMvMTEwOTYvRGVza3RvcC9TdGFjay9GYXN0QVBQL2NvbS5uanVzdC5zdGFjay9ub2RlX21vZHVsZXMvY3J5cHRvLWpzL21vZGUtY2ZiLmpzIiwid2VicGFjazovLy9jOi9Vc2Vycy8xMTA5Ni9EZXNrdG9wL1N0YWNrL0Zhc3RBUFAvY29tLm5qdXN0LnN0YWNrL25vZGVfbW9kdWxlcy9jcnlwdG8tanMvbW9kZS1jdHIuanMiLCJ3ZWJwYWNrOi8vL2M6L1VzZXJzLzExMDk2L0Rlc2t0b3AvU3RhY2svRmFzdEFQUC9jb20ubmp1c3Quc3RhY2svbm9kZV9tb2R1bGVzL2NyeXB0by1qcy9tb2RlLWN0ci1nbGFkbWFuLmpzIiwid2VicGFjazovLy9jOi9Vc2Vycy8xMTA5Ni9EZXNrdG9wL1N0YWNrL0Zhc3RBUFAvY29tLm5qdXN0LnN0YWNrL25vZGVfbW9kdWxlcy9jcnlwdG8tanMvbW9kZS1vZmIuanMiLCJ3ZWJwYWNrOi8vL2M6L1VzZXJzLzExMDk2L0Rlc2t0b3AvU3RhY2svRmFzdEFQUC9jb20ubmp1c3Quc3RhY2svbm9kZV9tb2R1bGVzL2NyeXB0by1qcy9tb2RlLWVjYi5qcyIsIndlYnBhY2s6Ly8vYzovVXNlcnMvMTEwOTYvRGVza3RvcC9TdGFjay9GYXN0QVBQL2NvbS5uanVzdC5zdGFjay9ub2RlX21vZHVsZXMvY3J5cHRvLWpzL3BhZC1hbnNpeDkyMy5qcyIsIndlYnBhY2s6Ly8vYzovVXNlcnMvMTEwOTYvRGVza3RvcC9TdGFjay9GYXN0QVBQL2NvbS5uanVzdC5zdGFjay9ub2RlX21vZHVsZXMvY3J5cHRvLWpzL3BhZC1pc28xMDEyNi5qcyIsIndlYnBhY2s6Ly8vYzovVXNlcnMvMTEwOTYvRGVza3RvcC9TdGFjay9GYXN0QVBQL2NvbS5uanVzdC5zdGFjay9ub2RlX21vZHVsZXMvY3J5cHRvLWpzL3BhZC1pc285Nzk3MS5qcyIsIndlYnBhY2s6Ly8vYzovVXNlcnMvMTEwOTYvRGVza3RvcC9TdGFjay9GYXN0QVBQL2NvbS5uanVzdC5zdGFjay9ub2RlX21vZHVsZXMvY3J5cHRvLWpzL3BhZC16ZXJvcGFkZGluZy5qcyIsIndlYnBhY2s6Ly8vYzovVXNlcnMvMTEwOTYvRGVza3RvcC9TdGFjay9GYXN0QVBQL2NvbS5uanVzdC5zdGFjay9ub2RlX21vZHVsZXMvY3J5cHRvLWpzL3BhZC1ub3BhZGRpbmcuanMiLCJ3ZWJwYWNrOi8vL2M6L1VzZXJzLzExMDk2L0Rlc2t0b3AvU3RhY2svRmFzdEFQUC9jb20ubmp1c3Quc3RhY2svbm9kZV9tb2R1bGVzL2NyeXB0by1qcy9mb3JtYXQtaGV4LmpzIiwid2VicGFjazovLy9jOi9Vc2Vycy8xMTA5Ni9EZXNrdG9wL1N0YWNrL0Zhc3RBUFAvY29tLm5qdXN0LnN0YWNrL25vZGVfbW9kdWxlcy9jcnlwdG8tanMvYWVzLmpzIiwid2VicGFjazovLy9jOi9Vc2Vycy8xMTA5Ni9EZXNrdG9wL1N0YWNrL0Zhc3RBUFAvY29tLm5qdXN0LnN0YWNrL25vZGVfbW9kdWxlcy9jcnlwdG8tanMvdHJpcGxlZGVzLmpzIiwid2VicGFjazovLy9jOi9Vc2Vycy8xMTA5Ni9EZXNrdG9wL1N0YWNrL0Zhc3RBUFAvY29tLm5qdXN0LnN0YWNrL25vZGVfbW9kdWxlcy9jcnlwdG8tanMvcmM0LmpzIiwid2VicGFjazovLy9jOi9Vc2Vycy8xMTA5Ni9EZXNrdG9wL1N0YWNrL0Zhc3RBUFAvY29tLm5qdXN0LnN0YWNrL25vZGVfbW9kdWxlcy9jcnlwdG8tanMvcmFiYml0LmpzIiwid2VicGFjazovLy9jOi9Vc2Vycy8xMTA5Ni9EZXNrdG9wL1N0YWNrL0Zhc3RBUFAvY29tLm5qdXN0LnN0YWNrL25vZGVfbW9kdWxlcy9jcnlwdG8tanMvcmFiYml0LWxlZ2FjeS5qcyIsIndlYnBhY2s6Ly8vYzovVXNlcnMvMTEwOTYvRGVza3RvcC9TdGFjay9GYXN0QVBQL2NvbS5uanVzdC5zdGFjay9zcmMvRW50cnlQZXJJbmZvL2luZGV4LnV4Iiwid2VicGFjazovLy9jOi9Vc2Vycy8xMTA5Ni9EZXNrdG9wL1N0YWNrL0Zhc3RBUFAvY29tLm5qdXN0LnN0YWNrL3NyYy9FbnRyeVBlckluZm8vaW5kZXgudXg/ZjMzZCIsIndlYnBhY2s6Ly8vYzovVXNlcnMvMTEwOTYvRGVza3RvcC9TdGFjay9GYXN0QVBQL2NvbS5uanVzdC5zdGFjay9zcmMvRW50cnlQZXJJbmZvL2luZGV4LnV4PzAyMmMiLCJ3ZWJwYWNrOi8vL2M6L1VzZXJzLzExMDk2L0Rlc2t0b3AvU3RhY2svRmFzdEFQUC9jb20ubmp1c3Quc3RhY2svc3JjL0VudHJ5UGVySW5mby9pbmRleC51eD8yZDgyIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA3Nyk7XG4iLCI7KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5LCB1bmRlZikge1xyXG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xyXG5cdFx0Ly8gQ29tbW9uSlNcclxuXHRcdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vY29yZVwiKSwgcmVxdWlyZShcIi4veDY0LWNvcmVcIiksIHJlcXVpcmUoXCIuL2xpYi10eXBlZGFycmF5c1wiKSwgcmVxdWlyZShcIi4vZW5jLXV0ZjE2XCIpLCByZXF1aXJlKFwiLi9lbmMtYmFzZTY0XCIpLCByZXF1aXJlKFwiLi9tZDVcIiksIHJlcXVpcmUoXCIuL3NoYTFcIiksIHJlcXVpcmUoXCIuL3NoYTI1NlwiKSwgcmVxdWlyZShcIi4vc2hhMjI0XCIpLCByZXF1aXJlKFwiLi9zaGE1MTJcIiksIHJlcXVpcmUoXCIuL3NoYTM4NFwiKSwgcmVxdWlyZShcIi4vc2hhM1wiKSwgcmVxdWlyZShcIi4vcmlwZW1kMTYwXCIpLCByZXF1aXJlKFwiLi9obWFjXCIpLCByZXF1aXJlKFwiLi9wYmtkZjJcIiksIHJlcXVpcmUoXCIuL2V2cGtkZlwiKSwgcmVxdWlyZShcIi4vY2lwaGVyLWNvcmVcIiksIHJlcXVpcmUoXCIuL21vZGUtY2ZiXCIpLCByZXF1aXJlKFwiLi9tb2RlLWN0clwiKSwgcmVxdWlyZShcIi4vbW9kZS1jdHItZ2xhZG1hblwiKSwgcmVxdWlyZShcIi4vbW9kZS1vZmJcIiksIHJlcXVpcmUoXCIuL21vZGUtZWNiXCIpLCByZXF1aXJlKFwiLi9wYWQtYW5zaXg5MjNcIiksIHJlcXVpcmUoXCIuL3BhZC1pc28xMDEyNlwiKSwgcmVxdWlyZShcIi4vcGFkLWlzbzk3OTcxXCIpLCByZXF1aXJlKFwiLi9wYWQtemVyb3BhZGRpbmdcIiksIHJlcXVpcmUoXCIuL3BhZC1ub3BhZGRpbmdcIiksIHJlcXVpcmUoXCIuL2Zvcm1hdC1oZXhcIiksIHJlcXVpcmUoXCIuL2Flc1wiKSwgcmVxdWlyZShcIi4vdHJpcGxlZGVzXCIpLCByZXF1aXJlKFwiLi9yYzRcIiksIHJlcXVpcmUoXCIuL3JhYmJpdFwiKSwgcmVxdWlyZShcIi4vcmFiYml0LWxlZ2FjeVwiKSk7XHJcblx0fVxyXG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XHJcblx0XHQvLyBBTURcclxuXHRcdGRlZmluZShbXCIuL2NvcmVcIiwgXCIuL3g2NC1jb3JlXCIsIFwiLi9saWItdHlwZWRhcnJheXNcIiwgXCIuL2VuYy11dGYxNlwiLCBcIi4vZW5jLWJhc2U2NFwiLCBcIi4vbWQ1XCIsIFwiLi9zaGExXCIsIFwiLi9zaGEyNTZcIiwgXCIuL3NoYTIyNFwiLCBcIi4vc2hhNTEyXCIsIFwiLi9zaGEzODRcIiwgXCIuL3NoYTNcIiwgXCIuL3JpcGVtZDE2MFwiLCBcIi4vaG1hY1wiLCBcIi4vcGJrZGYyXCIsIFwiLi9ldnBrZGZcIiwgXCIuL2NpcGhlci1jb3JlXCIsIFwiLi9tb2RlLWNmYlwiLCBcIi4vbW9kZS1jdHJcIiwgXCIuL21vZGUtY3RyLWdsYWRtYW5cIiwgXCIuL21vZGUtb2ZiXCIsIFwiLi9tb2RlLWVjYlwiLCBcIi4vcGFkLWFuc2l4OTIzXCIsIFwiLi9wYWQtaXNvMTAxMjZcIiwgXCIuL3BhZC1pc285Nzk3MVwiLCBcIi4vcGFkLXplcm9wYWRkaW5nXCIsIFwiLi9wYWQtbm9wYWRkaW5nXCIsIFwiLi9mb3JtYXQtaGV4XCIsIFwiLi9hZXNcIiwgXCIuL3RyaXBsZWRlc1wiLCBcIi4vcmM0XCIsIFwiLi9yYWJiaXRcIiwgXCIuL3JhYmJpdC1sZWdhY3lcIl0sIGZhY3RvcnkpO1xyXG5cdH1cclxuXHRlbHNlIHtcclxuXHRcdC8vIEdsb2JhbCAoYnJvd3NlcilcclxuXHRcdHJvb3QuQ3J5cHRvSlMgPSBmYWN0b3J5KHJvb3QuQ3J5cHRvSlMpO1xyXG5cdH1cclxufSh0aGlzLCBmdW5jdGlvbiAoQ3J5cHRvSlMpIHtcclxuXHJcblx0cmV0dXJuIENyeXB0b0pTO1xyXG5cclxufSkpOyIsIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcclxuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcclxuXHRcdC8vIENvbW1vbkpTXHJcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KCk7XHJcblx0fVxyXG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XHJcblx0XHQvLyBBTURcclxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XHJcblx0fVxyXG5cdGVsc2Uge1xyXG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxyXG5cdFx0cm9vdC5DcnlwdG9KUyA9IGZhY3RvcnkoKTtcclxuXHR9XHJcbn0odGhpcywgZnVuY3Rpb24gKCkge1xyXG5cclxuXHQvKipcclxuXHQgKiBDcnlwdG9KUyBjb3JlIGNvbXBvbmVudHMuXHJcblx0ICovXHJcblx0dmFyIENyeXB0b0pTID0gQ3J5cHRvSlMgfHwgKGZ1bmN0aW9uIChNYXRoLCB1bmRlZmluZWQpIHtcclxuXHQgICAgLypcclxuXHQgICAgICogTG9jYWwgcG9seWZpbCBvZiBPYmplY3QuY3JlYXRlXHJcblx0ICAgICAqL1xyXG5cdCAgICB2YXIgY3JlYXRlID0gT2JqZWN0LmNyZWF0ZSB8fCAoZnVuY3Rpb24gKCkge1xyXG5cdCAgICAgICAgZnVuY3Rpb24gRigpIHt9O1xyXG5cclxuXHQgICAgICAgIHJldHVybiBmdW5jdGlvbiAob2JqKSB7XHJcblx0ICAgICAgICAgICAgdmFyIHN1YnR5cGU7XHJcblxyXG5cdCAgICAgICAgICAgIEYucHJvdG90eXBlID0gb2JqO1xyXG5cclxuXHQgICAgICAgICAgICBzdWJ0eXBlID0gbmV3IEYoKTtcclxuXHJcblx0ICAgICAgICAgICAgRi5wcm90b3R5cGUgPSBudWxsO1xyXG5cclxuXHQgICAgICAgICAgICByZXR1cm4gc3VidHlwZTtcclxuXHQgICAgICAgIH07XHJcblx0ICAgIH0oKSlcclxuXHJcblx0ICAgIC8qKlxyXG5cdCAgICAgKiBDcnlwdG9KUyBuYW1lc3BhY2UuXHJcblx0ICAgICAqL1xyXG5cdCAgICB2YXIgQyA9IHt9O1xyXG5cclxuXHQgICAgLyoqXHJcblx0ICAgICAqIExpYnJhcnkgbmFtZXNwYWNlLlxyXG5cdCAgICAgKi9cclxuXHQgICAgdmFyIENfbGliID0gQy5saWIgPSB7fTtcclxuXHJcblx0ICAgIC8qKlxyXG5cdCAgICAgKiBCYXNlIG9iamVjdCBmb3IgcHJvdG90eXBhbCBpbmhlcml0YW5jZS5cclxuXHQgICAgICovXHJcblx0ICAgIHZhciBCYXNlID0gQ19saWIuQmFzZSA9IChmdW5jdGlvbiAoKSB7XHJcblxyXG5cclxuXHQgICAgICAgIHJldHVybiB7XHJcblx0ICAgICAgICAgICAgLyoqXHJcblx0ICAgICAgICAgICAgICogQ3JlYXRlcyBhIG5ldyBvYmplY3QgdGhhdCBpbmhlcml0cyBmcm9tIHRoaXMgb2JqZWN0LlxyXG5cdCAgICAgICAgICAgICAqXHJcblx0ICAgICAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IG92ZXJyaWRlcyBQcm9wZXJ0aWVzIHRvIGNvcHkgaW50byB0aGUgbmV3IG9iamVjdC5cclxuXHQgICAgICAgICAgICAgKlxyXG5cdCAgICAgICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gVGhlIG5ldyBvYmplY3QuXHJcblx0ICAgICAgICAgICAgICpcclxuXHQgICAgICAgICAgICAgKiBAc3RhdGljXHJcblx0ICAgICAgICAgICAgICpcclxuXHQgICAgICAgICAgICAgKiBAZXhhbXBsZVxyXG5cdCAgICAgICAgICAgICAqXHJcblx0ICAgICAgICAgICAgICogICAgIHZhciBNeVR5cGUgPSBDcnlwdG9KUy5saWIuQmFzZS5leHRlbmQoe1xyXG5cdCAgICAgICAgICAgICAqICAgICAgICAgZmllbGQ6ICd2YWx1ZScsXHJcblx0ICAgICAgICAgICAgICpcclxuXHQgICAgICAgICAgICAgKiAgICAgICAgIG1ldGhvZDogZnVuY3Rpb24gKCkge1xyXG5cdCAgICAgICAgICAgICAqICAgICAgICAgfVxyXG5cdCAgICAgICAgICAgICAqICAgICB9KTtcclxuXHQgICAgICAgICAgICAgKi9cclxuXHQgICAgICAgICAgICBleHRlbmQ6IGZ1bmN0aW9uIChvdmVycmlkZXMpIHtcclxuXHQgICAgICAgICAgICAgICAgLy8gU3Bhd25cclxuXHQgICAgICAgICAgICAgICAgdmFyIHN1YnR5cGUgPSBjcmVhdGUodGhpcyk7XHJcblxyXG5cdCAgICAgICAgICAgICAgICAvLyBBdWdtZW50XHJcblx0ICAgICAgICAgICAgICAgIGlmIChvdmVycmlkZXMpIHtcclxuXHQgICAgICAgICAgICAgICAgICAgIHN1YnR5cGUubWl4SW4ob3ZlcnJpZGVzKTtcclxuXHQgICAgICAgICAgICAgICAgfVxyXG5cclxuXHQgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGRlZmF1bHQgaW5pdGlhbGl6ZXJcclxuXHQgICAgICAgICAgICAgICAgaWYgKCFzdWJ0eXBlLmhhc093blByb3BlcnR5KCdpbml0JykgfHwgdGhpcy5pbml0ID09PSBzdWJ0eXBlLmluaXQpIHtcclxuXHQgICAgICAgICAgICAgICAgICAgIHN1YnR5cGUuaW5pdCA9IGZ1bmN0aW9uICgpIHtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICBzdWJ0eXBlLiRzdXBlci5pbml0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0ICAgICAgICAgICAgICAgICAgICB9O1xyXG5cdCAgICAgICAgICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgICAgICAgICAvLyBJbml0aWFsaXplcidzIHByb3RvdHlwZSBpcyB0aGUgc3VidHlwZSBvYmplY3RcclxuXHQgICAgICAgICAgICAgICAgc3VidHlwZS5pbml0LnByb3RvdHlwZSA9IHN1YnR5cGU7XHJcblxyXG5cdCAgICAgICAgICAgICAgICAvLyBSZWZlcmVuY2Ugc3VwZXJ0eXBlXHJcblx0ICAgICAgICAgICAgICAgIHN1YnR5cGUuJHN1cGVyID0gdGhpcztcclxuXHJcblx0ICAgICAgICAgICAgICAgIHJldHVybiBzdWJ0eXBlO1xyXG5cdCAgICAgICAgICAgIH0sXHJcblxyXG5cdCAgICAgICAgICAgIC8qKlxyXG5cdCAgICAgICAgICAgICAqIEV4dGVuZHMgdGhpcyBvYmplY3QgYW5kIHJ1bnMgdGhlIGluaXQgbWV0aG9kLlxyXG5cdCAgICAgICAgICAgICAqIEFyZ3VtZW50cyB0byBjcmVhdGUoKSB3aWxsIGJlIHBhc3NlZCB0byBpbml0KCkuXHJcblx0ICAgICAgICAgICAgICpcclxuXHQgICAgICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBuZXcgb2JqZWN0LlxyXG5cdCAgICAgICAgICAgICAqXHJcblx0ICAgICAgICAgICAgICogQHN0YXRpY1xyXG5cdCAgICAgICAgICAgICAqXHJcblx0ICAgICAgICAgICAgICogQGV4YW1wbGVcclxuXHQgICAgICAgICAgICAgKlxyXG5cdCAgICAgICAgICAgICAqICAgICB2YXIgaW5zdGFuY2UgPSBNeVR5cGUuY3JlYXRlKCk7XHJcblx0ICAgICAgICAgICAgICovXHJcblx0ICAgICAgICAgICAgY3JlYXRlOiBmdW5jdGlvbiAoKSB7XHJcblx0ICAgICAgICAgICAgICAgIHZhciBpbnN0YW5jZSA9IHRoaXMuZXh0ZW5kKCk7XHJcblx0ICAgICAgICAgICAgICAgIGluc3RhbmNlLmluaXQuYXBwbHkoaW5zdGFuY2UsIGFyZ3VtZW50cyk7XHJcblxyXG5cdCAgICAgICAgICAgICAgICByZXR1cm4gaW5zdGFuY2U7XHJcblx0ICAgICAgICAgICAgfSxcclxuXHJcblx0ICAgICAgICAgICAgLyoqXHJcblx0ICAgICAgICAgICAgICogSW5pdGlhbGl6ZXMgYSBuZXdseSBjcmVhdGVkIG9iamVjdC5cclxuXHQgICAgICAgICAgICAgKiBPdmVycmlkZSB0aGlzIG1ldGhvZCB0byBhZGQgc29tZSBsb2dpYyB3aGVuIHlvdXIgb2JqZWN0cyBhcmUgY3JlYXRlZC5cclxuXHQgICAgICAgICAgICAgKlxyXG5cdCAgICAgICAgICAgICAqIEBleGFtcGxlXHJcblx0ICAgICAgICAgICAgICpcclxuXHQgICAgICAgICAgICAgKiAgICAgdmFyIE15VHlwZSA9IENyeXB0b0pTLmxpYi5CYXNlLmV4dGVuZCh7XHJcblx0ICAgICAgICAgICAgICogICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcblx0ICAgICAgICAgICAgICogICAgICAgICAgICAgLy8gLi4uXHJcblx0ICAgICAgICAgICAgICogICAgICAgICB9XHJcblx0ICAgICAgICAgICAgICogICAgIH0pO1xyXG5cdCAgICAgICAgICAgICAqL1xyXG5cdCAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuXHQgICAgICAgICAgICB9LFxyXG5cclxuXHQgICAgICAgICAgICAvKipcclxuXHQgICAgICAgICAgICAgKiBDb3BpZXMgcHJvcGVydGllcyBpbnRvIHRoaXMgb2JqZWN0LlxyXG5cdCAgICAgICAgICAgICAqXHJcblx0ICAgICAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IHByb3BlcnRpZXMgVGhlIHByb3BlcnRpZXMgdG8gbWl4IGluLlxyXG5cdCAgICAgICAgICAgICAqXHJcblx0ICAgICAgICAgICAgICogQGV4YW1wbGVcclxuXHQgICAgICAgICAgICAgKlxyXG5cdCAgICAgICAgICAgICAqICAgICBNeVR5cGUubWl4SW4oe1xyXG5cdCAgICAgICAgICAgICAqICAgICAgICAgZmllbGQ6ICd2YWx1ZSdcclxuXHQgICAgICAgICAgICAgKiAgICAgfSk7XHJcblx0ICAgICAgICAgICAgICovXHJcblx0ICAgICAgICAgICAgbWl4SW46IGZ1bmN0aW9uIChwcm9wZXJ0aWVzKSB7XHJcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIHByb3BlcnR5TmFtZSBpbiBwcm9wZXJ0aWVzKSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICBpZiAocHJvcGVydGllcy5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eU5hbWUpKSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1twcm9wZXJ0eU5hbWVdID0gcHJvcGVydGllc1twcm9wZXJ0eU5hbWVdO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgICAgICAgICAvLyBJRSB3b24ndCBjb3B5IHRvU3RyaW5nIHVzaW5nIHRoZSBsb29wIGFib3ZlXHJcblx0ICAgICAgICAgICAgICAgIGlmIChwcm9wZXJ0aWVzLmhhc093blByb3BlcnR5KCd0b1N0cmluZycpKSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLnRvU3RyaW5nID0gcHJvcGVydGllcy50b1N0cmluZztcclxuXHQgICAgICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgICAgIH0sXHJcblxyXG5cdCAgICAgICAgICAgIC8qKlxyXG5cdCAgICAgICAgICAgICAqIENyZWF0ZXMgYSBjb3B5IG9mIHRoaXMgb2JqZWN0LlxyXG5cdCAgICAgICAgICAgICAqXHJcblx0ICAgICAgICAgICAgICogQHJldHVybiB7T2JqZWN0fSBUaGUgY2xvbmUuXHJcblx0ICAgICAgICAgICAgICpcclxuXHQgICAgICAgICAgICAgKiBAZXhhbXBsZVxyXG5cdCAgICAgICAgICAgICAqXHJcblx0ICAgICAgICAgICAgICogICAgIHZhciBjbG9uZSA9IGluc3RhbmNlLmNsb25lKCk7XHJcblx0ICAgICAgICAgICAgICovXHJcblx0ICAgICAgICAgICAgY2xvbmU6IGZ1bmN0aW9uICgpIHtcclxuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5pdC5wcm90b3R5cGUuZXh0ZW5kKHRoaXMpO1xyXG5cdCAgICAgICAgICAgIH1cclxuXHQgICAgICAgIH07XHJcblx0ICAgIH0oKSk7XHJcblxyXG5cdCAgICAvKipcclxuXHQgICAgICogQW4gYXJyYXkgb2YgMzItYml0IHdvcmRzLlxyXG5cdCAgICAgKlxyXG5cdCAgICAgKiBAcHJvcGVydHkge0FycmF5fSB3b3JkcyBUaGUgYXJyYXkgb2YgMzItYml0IHdvcmRzLlxyXG5cdCAgICAgKiBAcHJvcGVydHkge251bWJlcn0gc2lnQnl0ZXMgVGhlIG51bWJlciBvZiBzaWduaWZpY2FudCBieXRlcyBpbiB0aGlzIHdvcmQgYXJyYXkuXHJcblx0ICAgICAqL1xyXG5cdCAgICB2YXIgV29yZEFycmF5ID0gQ19saWIuV29yZEFycmF5ID0gQmFzZS5leHRlbmQoe1xyXG5cdCAgICAgICAgLyoqXHJcblx0ICAgICAgICAgKiBJbml0aWFsaXplcyBhIG5ld2x5IGNyZWF0ZWQgd29yZCBhcnJheS5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSB3b3JkcyAoT3B0aW9uYWwpIEFuIGFycmF5IG9mIDMyLWJpdCB3b3Jkcy5cclxuXHQgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaWdCeXRlcyAoT3B0aW9uYWwpIFRoZSBudW1iZXIgb2Ygc2lnbmlmaWNhbnQgYnl0ZXMgaW4gdGhlIHdvcmRzLlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEBleGFtcGxlXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5saWIuV29yZEFycmF5LmNyZWF0ZSgpO1xyXG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5saWIuV29yZEFycmF5LmNyZWF0ZShbMHgwMDAxMDIwMywgMHgwNDA1MDYwN10pO1xyXG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5saWIuV29yZEFycmF5LmNyZWF0ZShbMHgwMDAxMDIwMywgMHgwNDA1MDYwN10sIDYpO1xyXG5cdCAgICAgICAgICovXHJcblx0ICAgICAgICBpbml0OiBmdW5jdGlvbiAod29yZHMsIHNpZ0J5dGVzKSB7XHJcblx0ICAgICAgICAgICAgd29yZHMgPSB0aGlzLndvcmRzID0gd29yZHMgfHwgW107XHJcblxyXG5cdCAgICAgICAgICAgIGlmIChzaWdCeXRlcyAhPSB1bmRlZmluZWQpIHtcclxuXHQgICAgICAgICAgICAgICAgdGhpcy5zaWdCeXRlcyA9IHNpZ0J5dGVzO1xyXG5cdCAgICAgICAgICAgIH0gZWxzZSB7XHJcblx0ICAgICAgICAgICAgICAgIHRoaXMuc2lnQnl0ZXMgPSB3b3Jkcy5sZW5ndGggKiA0O1xyXG5cdCAgICAgICAgICAgIH1cclxuXHQgICAgICAgIH0sXHJcblxyXG5cdCAgICAgICAgLyoqXHJcblx0ICAgICAgICAgKiBDb252ZXJ0cyB0aGlzIHdvcmQgYXJyYXkgdG8gYSBzdHJpbmcuXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQHBhcmFtIHtFbmNvZGVyfSBlbmNvZGVyIChPcHRpb25hbCkgVGhlIGVuY29kaW5nIHN0cmF0ZWd5IHRvIHVzZS4gRGVmYXVsdDogQ3J5cHRvSlMuZW5jLkhleFxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIHN0cmluZ2lmaWVkIHdvcmQgYXJyYXkuXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQGV4YW1wbGVcclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiAgICAgdmFyIHN0cmluZyA9IHdvcmRBcnJheSArICcnO1xyXG5cdCAgICAgICAgICogICAgIHZhciBzdHJpbmcgPSB3b3JkQXJyYXkudG9TdHJpbmcoKTtcclxuXHQgICAgICAgICAqICAgICB2YXIgc3RyaW5nID0gd29yZEFycmF5LnRvU3RyaW5nKENyeXB0b0pTLmVuYy5VdGY4KTtcclxuXHQgICAgICAgICAqL1xyXG5cdCAgICAgICAgdG9TdHJpbmc6IGZ1bmN0aW9uIChlbmNvZGVyKSB7XHJcblx0ICAgICAgICAgICAgcmV0dXJuIChlbmNvZGVyIHx8IEhleCkuc3RyaW5naWZ5KHRoaXMpO1xyXG5cdCAgICAgICAgfSxcclxuXHJcblx0ICAgICAgICAvKipcclxuXHQgICAgICAgICAqIENvbmNhdGVuYXRlcyBhIHdvcmQgYXJyYXkgdG8gdGhpcyB3b3JkIGFycmF5LlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fSB3b3JkQXJyYXkgVGhlIHdvcmQgYXJyYXkgdG8gYXBwZW5kLlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhpcyB3b3JkIGFycmF5LlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEBleGFtcGxlXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogICAgIHdvcmRBcnJheTEuY29uY2F0KHdvcmRBcnJheTIpO1xyXG5cdCAgICAgICAgICovXHJcblx0ICAgICAgICBjb25jYXQ6IGZ1bmN0aW9uICh3b3JkQXJyYXkpIHtcclxuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcclxuXHQgICAgICAgICAgICB2YXIgdGhpc1dvcmRzID0gdGhpcy53b3JkcztcclxuXHQgICAgICAgICAgICB2YXIgdGhhdFdvcmRzID0gd29yZEFycmF5LndvcmRzO1xyXG5cdCAgICAgICAgICAgIHZhciB0aGlzU2lnQnl0ZXMgPSB0aGlzLnNpZ0J5dGVzO1xyXG5cdCAgICAgICAgICAgIHZhciB0aGF0U2lnQnl0ZXMgPSB3b3JkQXJyYXkuc2lnQnl0ZXM7XHJcblxyXG5cdCAgICAgICAgICAgIC8vIENsYW1wIGV4Y2VzcyBiaXRzXHJcblx0ICAgICAgICAgICAgdGhpcy5jbGFtcCgpO1xyXG5cclxuXHQgICAgICAgICAgICAvLyBDb25jYXRcclxuXHQgICAgICAgICAgICBpZiAodGhpc1NpZ0J5dGVzICUgNCkge1xyXG5cdCAgICAgICAgICAgICAgICAvLyBDb3B5IG9uZSBieXRlIGF0IGEgdGltZVxyXG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoYXRTaWdCeXRlczsgaSsrKSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgdGhhdEJ5dGUgPSAodGhhdFdvcmRzW2kgPj4+IDJdID4+PiAoMjQgLSAoaSAlIDQpICogOCkpICYgMHhmZjtcclxuXHQgICAgICAgICAgICAgICAgICAgIHRoaXNXb3Jkc1sodGhpc1NpZ0J5dGVzICsgaSkgPj4+IDJdIHw9IHRoYXRCeXRlIDw8ICgyNCAtICgodGhpc1NpZ0J5dGVzICsgaSkgJSA0KSAqIDgpO1xyXG5cdCAgICAgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgfSBlbHNlIHtcclxuXHQgICAgICAgICAgICAgICAgLy8gQ29weSBvbmUgd29yZCBhdCBhIHRpbWVcclxuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGF0U2lnQnl0ZXM7IGkgKz0gNCkge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgdGhpc1dvcmRzWyh0aGlzU2lnQnl0ZXMgKyBpKSA+Pj4gMl0gPSB0aGF0V29yZHNbaSA+Pj4gMl07XHJcblx0ICAgICAgICAgICAgICAgIH1cclxuXHQgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgdGhpcy5zaWdCeXRlcyArPSB0aGF0U2lnQnl0ZXM7XHJcblxyXG5cdCAgICAgICAgICAgIC8vIENoYWluYWJsZVxyXG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG5cdCAgICAgICAgfSxcclxuXHJcblx0ICAgICAgICAvKipcclxuXHQgICAgICAgICAqIFJlbW92ZXMgaW5zaWduaWZpY2FudCBiaXRzLlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEBleGFtcGxlXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogICAgIHdvcmRBcnJheS5jbGFtcCgpO1xyXG5cdCAgICAgICAgICovXHJcblx0ICAgICAgICBjbGFtcDogZnVuY3Rpb24gKCkge1xyXG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xyXG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IHRoaXMud29yZHM7XHJcblx0ICAgICAgICAgICAgdmFyIHNpZ0J5dGVzID0gdGhpcy5zaWdCeXRlcztcclxuXHJcblx0ICAgICAgICAgICAgLy8gQ2xhbXBcclxuXHQgICAgICAgICAgICB3b3Jkc1tzaWdCeXRlcyA+Pj4gMl0gJj0gMHhmZmZmZmZmZiA8PCAoMzIgLSAoc2lnQnl0ZXMgJSA0KSAqIDgpO1xyXG5cdCAgICAgICAgICAgIHdvcmRzLmxlbmd0aCA9IE1hdGguY2VpbChzaWdCeXRlcyAvIDQpO1xyXG5cdCAgICAgICAgfSxcclxuXHJcblx0ICAgICAgICAvKipcclxuXHQgICAgICAgICAqIENyZWF0ZXMgYSBjb3B5IG9mIHRoaXMgd29yZCBhcnJheS5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBjbG9uZS5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAZXhhbXBsZVxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqICAgICB2YXIgY2xvbmUgPSB3b3JkQXJyYXkuY2xvbmUoKTtcclxuXHQgICAgICAgICAqL1xyXG5cdCAgICAgICAgY2xvbmU6IGZ1bmN0aW9uICgpIHtcclxuXHQgICAgICAgICAgICB2YXIgY2xvbmUgPSBCYXNlLmNsb25lLmNhbGwodGhpcyk7XHJcblx0ICAgICAgICAgICAgY2xvbmUud29yZHMgPSB0aGlzLndvcmRzLnNsaWNlKDApO1xyXG5cclxuXHQgICAgICAgICAgICByZXR1cm4gY2xvbmU7XHJcblx0ICAgICAgICB9LFxyXG5cclxuXHQgICAgICAgIC8qKlxyXG5cdCAgICAgICAgICogQ3JlYXRlcyBhIHdvcmQgYXJyYXkgZmlsbGVkIHdpdGggcmFuZG9tIGJ5dGVzLlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBuQnl0ZXMgVGhlIG51bWJlciBvZiByYW5kb20gYnl0ZXMgdG8gZ2VuZXJhdGUuXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgcmFuZG9tIHdvcmQgYXJyYXkuXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQHN0YXRpY1xyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEBleGFtcGxlXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5saWIuV29yZEFycmF5LnJhbmRvbSgxNik7XHJcblx0ICAgICAgICAgKi9cclxuXHQgICAgICAgIHJhbmRvbTogZnVuY3Rpb24gKG5CeXRlcykge1xyXG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IFtdO1xyXG5cclxuXHQgICAgICAgICAgICB2YXIgciA9IChmdW5jdGlvbiAobV93KSB7XHJcblx0ICAgICAgICAgICAgICAgIHZhciBtX3cgPSBtX3c7XHJcblx0ICAgICAgICAgICAgICAgIHZhciBtX3ogPSAweDNhZGU2OGIxO1xyXG5cdCAgICAgICAgICAgICAgICB2YXIgbWFzayA9IDB4ZmZmZmZmZmY7XHJcblxyXG5cdCAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgbV96ID0gKDB4OTA2OSAqIChtX3ogJiAweEZGRkYpICsgKG1feiA+PiAweDEwKSkgJiBtYXNrO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgbV93ID0gKDB4NDY1MCAqIChtX3cgJiAweEZGRkYpICsgKG1fdyA+PiAweDEwKSkgJiBtYXNrO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIHJlc3VsdCA9ICgobV96IDw8IDB4MTApICsgbV93KSAmIG1hc2s7XHJcblx0ICAgICAgICAgICAgICAgICAgICByZXN1bHQgLz0gMHgxMDAwMDAwMDA7XHJcblx0ICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gMC41O1xyXG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdCAqIChNYXRoLnJhbmRvbSgpID4gLjUgPyAxIDogLTEpO1xyXG5cdCAgICAgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgfSk7XHJcblxyXG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCByY2FjaGU7IGkgPCBuQnl0ZXM7IGkgKz0gNCkge1xyXG5cdCAgICAgICAgICAgICAgICB2YXIgX3IgPSByKChyY2FjaGUgfHwgTWF0aC5yYW5kb20oKSkgKiAweDEwMDAwMDAwMCk7XHJcblxyXG5cdCAgICAgICAgICAgICAgICByY2FjaGUgPSBfcigpICogMHgzYWRlNjdiNztcclxuXHQgICAgICAgICAgICAgICAgd29yZHMucHVzaCgoX3IoKSAqIDB4MTAwMDAwMDAwKSB8IDApO1xyXG5cdCAgICAgICAgICAgIH1cclxuXHJcblx0ICAgICAgICAgICAgcmV0dXJuIG5ldyBXb3JkQXJyYXkuaW5pdCh3b3JkcywgbkJ5dGVzKTtcclxuXHQgICAgICAgIH1cclxuXHQgICAgfSk7XHJcblxyXG5cdCAgICAvKipcclxuXHQgICAgICogRW5jb2RlciBuYW1lc3BhY2UuXHJcblx0ICAgICAqL1xyXG5cdCAgICB2YXIgQ19lbmMgPSBDLmVuYyA9IHt9O1xyXG5cclxuXHQgICAgLyoqXHJcblx0ICAgICAqIEhleCBlbmNvZGluZyBzdHJhdGVneS5cclxuXHQgICAgICovXHJcblx0ICAgIHZhciBIZXggPSBDX2VuYy5IZXggPSB7XHJcblx0ICAgICAgICAvKipcclxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgd29yZCBhcnJheSB0byBhIGhleCBzdHJpbmcuXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl9IHdvcmRBcnJheSBUaGUgd29yZCBhcnJheS5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBoZXggc3RyaW5nLlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEBzdGF0aWNcclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAZXhhbXBsZVxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqICAgICB2YXIgaGV4U3RyaW5nID0gQ3J5cHRvSlMuZW5jLkhleC5zdHJpbmdpZnkod29yZEFycmF5KTtcclxuXHQgICAgICAgICAqL1xyXG5cdCAgICAgICAgc3RyaW5naWZ5OiBmdW5jdGlvbiAod29yZEFycmF5KSB7XHJcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXHJcblx0ICAgICAgICAgICAgdmFyIHdvcmRzID0gd29yZEFycmF5LndvcmRzO1xyXG5cdCAgICAgICAgICAgIHZhciBzaWdCeXRlcyA9IHdvcmRBcnJheS5zaWdCeXRlcztcclxuXHJcblx0ICAgICAgICAgICAgLy8gQ29udmVydFxyXG5cdCAgICAgICAgICAgIHZhciBoZXhDaGFycyA9IFtdO1xyXG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2lnQnl0ZXM7IGkrKykge1xyXG5cdCAgICAgICAgICAgICAgICB2YXIgYml0ZSA9ICh3b3Jkc1tpID4+PiAyXSA+Pj4gKDI0IC0gKGkgJSA0KSAqIDgpKSAmIDB4ZmY7XHJcblx0ICAgICAgICAgICAgICAgIGhleENoYXJzLnB1c2goKGJpdGUgPj4+IDQpLnRvU3RyaW5nKDE2KSk7XHJcblx0ICAgICAgICAgICAgICAgIGhleENoYXJzLnB1c2goKGJpdGUgJiAweDBmKS50b1N0cmluZygxNikpO1xyXG5cdCAgICAgICAgICAgIH1cclxuXHJcblx0ICAgICAgICAgICAgcmV0dXJuIGhleENoYXJzLmpvaW4oJycpO1xyXG5cdCAgICAgICAgfSxcclxuXHJcblx0ICAgICAgICAvKipcclxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgaGV4IHN0cmluZyB0byBhIHdvcmQgYXJyYXkuXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGhleFN0ciBUaGUgaGV4IHN0cmluZy5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSB3b3JkIGFycmF5LlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEBzdGF0aWNcclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAZXhhbXBsZVxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMuZW5jLkhleC5wYXJzZShoZXhTdHJpbmcpO1xyXG5cdCAgICAgICAgICovXHJcblx0ICAgICAgICBwYXJzZTogZnVuY3Rpb24gKGhleFN0cikge1xyXG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0XHJcblx0ICAgICAgICAgICAgdmFyIGhleFN0ckxlbmd0aCA9IGhleFN0ci5sZW5ndGg7XHJcblxyXG5cdCAgICAgICAgICAgIC8vIENvbnZlcnRcclxuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSBbXTtcclxuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhleFN0ckxlbmd0aDsgaSArPSAyKSB7XHJcblx0ICAgICAgICAgICAgICAgIHdvcmRzW2kgPj4+IDNdIHw9IHBhcnNlSW50KGhleFN0ci5zdWJzdHIoaSwgMiksIDE2KSA8PCAoMjQgLSAoaSAlIDgpICogNCk7XHJcblx0ICAgICAgICAgICAgfVxyXG5cclxuXHQgICAgICAgICAgICByZXR1cm4gbmV3IFdvcmRBcnJheS5pbml0KHdvcmRzLCBoZXhTdHJMZW5ndGggLyAyKTtcclxuXHQgICAgICAgIH1cclxuXHQgICAgfTtcclxuXHJcblx0ICAgIC8qKlxyXG5cdCAgICAgKiBMYXRpbjEgZW5jb2Rpbmcgc3RyYXRlZ3kuXHJcblx0ICAgICAqL1xyXG5cdCAgICB2YXIgTGF0aW4xID0gQ19lbmMuTGF0aW4xID0ge1xyXG5cdCAgICAgICAgLyoqXHJcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIHdvcmQgYXJyYXkgdG8gYSBMYXRpbjEgc3RyaW5nLlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fSB3b3JkQXJyYXkgVGhlIHdvcmQgYXJyYXkuXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgTGF0aW4xIHN0cmluZy5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAc3RhdGljXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQGV4YW1wbGVcclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiAgICAgdmFyIGxhdGluMVN0cmluZyA9IENyeXB0b0pTLmVuYy5MYXRpbjEuc3RyaW5naWZ5KHdvcmRBcnJheSk7XHJcblx0ICAgICAgICAgKi9cclxuXHQgICAgICAgIHN0cmluZ2lmeTogZnVuY3Rpb24gKHdvcmRBcnJheSkge1xyXG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xyXG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IHdvcmRBcnJheS53b3JkcztcclxuXHQgICAgICAgICAgICB2YXIgc2lnQnl0ZXMgPSB3b3JkQXJyYXkuc2lnQnl0ZXM7XHJcblxyXG5cdCAgICAgICAgICAgIC8vIENvbnZlcnRcclxuXHQgICAgICAgICAgICB2YXIgbGF0aW4xQ2hhcnMgPSBbXTtcclxuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpZ0J5dGVzOyBpKyspIHtcclxuXHQgICAgICAgICAgICAgICAgdmFyIGJpdGUgPSAod29yZHNbaSA+Pj4gMl0gPj4+ICgyNCAtIChpICUgNCkgKiA4KSkgJiAweGZmO1xyXG5cdCAgICAgICAgICAgICAgICBsYXRpbjFDaGFycy5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoYml0ZSkpO1xyXG5cdCAgICAgICAgICAgIH1cclxuXHJcblx0ICAgICAgICAgICAgcmV0dXJuIGxhdGluMUNoYXJzLmpvaW4oJycpO1xyXG5cdCAgICAgICAgfSxcclxuXHJcblx0ICAgICAgICAvKipcclxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgTGF0aW4xIHN0cmluZyB0byBhIHdvcmQgYXJyYXkuXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGxhdGluMVN0ciBUaGUgTGF0aW4xIHN0cmluZy5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSB3b3JkIGFycmF5LlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEBzdGF0aWNcclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAZXhhbXBsZVxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMuZW5jLkxhdGluMS5wYXJzZShsYXRpbjFTdHJpbmcpO1xyXG5cdCAgICAgICAgICovXHJcblx0ICAgICAgICBwYXJzZTogZnVuY3Rpb24gKGxhdGluMVN0cikge1xyXG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0XHJcblx0ICAgICAgICAgICAgdmFyIGxhdGluMVN0ckxlbmd0aCA9IGxhdGluMVN0ci5sZW5ndGg7XHJcblxyXG5cdCAgICAgICAgICAgIC8vIENvbnZlcnRcclxuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSBbXTtcclxuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhdGluMVN0ckxlbmd0aDsgaSsrKSB7XHJcblx0ICAgICAgICAgICAgICAgIHdvcmRzW2kgPj4+IDJdIHw9IChsYXRpbjFTdHIuY2hhckNvZGVBdChpKSAmIDB4ZmYpIDw8ICgyNCAtIChpICUgNCkgKiA4KTtcclxuXHQgICAgICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgICAgIHJldHVybiBuZXcgV29yZEFycmF5LmluaXQod29yZHMsIGxhdGluMVN0ckxlbmd0aCk7XHJcblx0ICAgICAgICB9XHJcblx0ICAgIH07XHJcblxyXG5cdCAgICAvKipcclxuXHQgICAgICogVVRGLTggZW5jb2Rpbmcgc3RyYXRlZ3kuXHJcblx0ICAgICAqL1xyXG5cdCAgICB2YXIgVXRmOCA9IENfZW5jLlV0ZjggPSB7XHJcblx0ICAgICAgICAvKipcclxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgd29yZCBhcnJheSB0byBhIFVURi04IHN0cmluZy5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheX0gd29yZEFycmF5IFRoZSB3b3JkIGFycmF5LlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIFVURi04IHN0cmluZy5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAc3RhdGljXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQGV4YW1wbGVcclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiAgICAgdmFyIHV0ZjhTdHJpbmcgPSBDcnlwdG9KUy5lbmMuVXRmOC5zdHJpbmdpZnkod29yZEFycmF5KTtcclxuXHQgICAgICAgICAqL1xyXG5cdCAgICAgICAgc3RyaW5naWZ5OiBmdW5jdGlvbiAod29yZEFycmF5KSB7XHJcblx0ICAgICAgICAgICAgdHJ5IHtcclxuXHQgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChlc2NhcGUoTGF0aW4xLnN0cmluZ2lmeSh3b3JkQXJyYXkpKSk7XHJcblx0ICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG5cdCAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01hbGZvcm1lZCBVVEYtOCBkYXRhJyk7XHJcblx0ICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgfSxcclxuXHJcblx0ICAgICAgICAvKipcclxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgVVRGLTggc3RyaW5nIHRvIGEgd29yZCBhcnJheS5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXRmOFN0ciBUaGUgVVRGLTggc3RyaW5nLlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIHdvcmQgYXJyYXkuXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQHN0YXRpY1xyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEBleGFtcGxlXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy5lbmMuVXRmOC5wYXJzZSh1dGY4U3RyaW5nKTtcclxuXHQgICAgICAgICAqL1xyXG5cdCAgICAgICAgcGFyc2U6IGZ1bmN0aW9uICh1dGY4U3RyKSB7XHJcblx0ICAgICAgICAgICAgcmV0dXJuIExhdGluMS5wYXJzZSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQodXRmOFN0cikpKTtcclxuXHQgICAgICAgIH1cclxuXHQgICAgfTtcclxuXHJcblx0ICAgIC8qKlxyXG5cdCAgICAgKiBBYnN0cmFjdCBidWZmZXJlZCBibG9jayBhbGdvcml0aG0gdGVtcGxhdGUuXHJcblx0ICAgICAqXHJcblx0ICAgICAqIFRoZSBwcm9wZXJ0eSBibG9ja1NpemUgbXVzdCBiZSBpbXBsZW1lbnRlZCBpbiBhIGNvbmNyZXRlIHN1YnR5cGUuXHJcblx0ICAgICAqXHJcblx0ICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBfbWluQnVmZmVyU2l6ZSBUaGUgbnVtYmVyIG9mIGJsb2NrcyB0aGF0IHNob3VsZCBiZSBrZXB0IHVucHJvY2Vzc2VkIGluIHRoZSBidWZmZXIuIERlZmF1bHQ6IDBcclxuXHQgICAgICovXHJcblx0ICAgIHZhciBCdWZmZXJlZEJsb2NrQWxnb3JpdGhtID0gQ19saWIuQnVmZmVyZWRCbG9ja0FsZ29yaXRobSA9IEJhc2UuZXh0ZW5kKHtcclxuXHQgICAgICAgIC8qKlxyXG5cdCAgICAgICAgICogUmVzZXRzIHRoaXMgYmxvY2sgYWxnb3JpdGhtJ3MgZGF0YSBidWZmZXIgdG8gaXRzIGluaXRpYWwgc3RhdGUuXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQGV4YW1wbGVcclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiAgICAgYnVmZmVyZWRCbG9ja0FsZ29yaXRobS5yZXNldCgpO1xyXG5cdCAgICAgICAgICovXHJcblx0ICAgICAgICByZXNldDogZnVuY3Rpb24gKCkge1xyXG5cdCAgICAgICAgICAgIC8vIEluaXRpYWwgdmFsdWVzXHJcblx0ICAgICAgICAgICAgdGhpcy5fZGF0YSA9IG5ldyBXb3JkQXJyYXkuaW5pdCgpO1xyXG5cdCAgICAgICAgICAgIHRoaXMuX25EYXRhQnl0ZXMgPSAwO1xyXG5cdCAgICAgICAgfSxcclxuXHJcblx0ICAgICAgICAvKipcclxuXHQgICAgICAgICAqIEFkZHMgbmV3IGRhdGEgdG8gdGhpcyBibG9jayBhbGdvcml0aG0ncyBidWZmZXIuXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBkYXRhIFRoZSBkYXRhIHRvIGFwcGVuZC4gU3RyaW5ncyBhcmUgY29udmVydGVkIHRvIGEgV29yZEFycmF5IHVzaW5nIFVURi04LlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEBleGFtcGxlXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogICAgIGJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0uX2FwcGVuZCgnZGF0YScpO1xyXG5cdCAgICAgICAgICogICAgIGJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0uX2FwcGVuZCh3b3JkQXJyYXkpO1xyXG5cdCAgICAgICAgICovXHJcblx0ICAgICAgICBfYXBwZW5kOiBmdW5jdGlvbiAoZGF0YSkge1xyXG5cdCAgICAgICAgICAgIC8vIENvbnZlcnQgc3RyaW5nIHRvIFdvcmRBcnJheSwgZWxzZSBhc3N1bWUgV29yZEFycmF5IGFscmVhZHlcclxuXHQgICAgICAgICAgICBpZiAodHlwZW9mIGRhdGEgPT0gJ3N0cmluZycpIHtcclxuXHQgICAgICAgICAgICAgICAgZGF0YSA9IFV0ZjgucGFyc2UoZGF0YSk7XHJcblx0ICAgICAgICAgICAgfVxyXG5cclxuXHQgICAgICAgICAgICAvLyBBcHBlbmRcclxuXHQgICAgICAgICAgICB0aGlzLl9kYXRhLmNvbmNhdChkYXRhKTtcclxuXHQgICAgICAgICAgICB0aGlzLl9uRGF0YUJ5dGVzICs9IGRhdGEuc2lnQnl0ZXM7XHJcblx0ICAgICAgICB9LFxyXG5cclxuXHQgICAgICAgIC8qKlxyXG5cdCAgICAgICAgICogUHJvY2Vzc2VzIGF2YWlsYWJsZSBkYXRhIGJsb2Nrcy5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBUaGlzIG1ldGhvZCBpbnZva2VzIF9kb1Byb2Nlc3NCbG9jayhvZmZzZXQpLCB3aGljaCBtdXN0IGJlIGltcGxlbWVudGVkIGJ5IGEgY29uY3JldGUgc3VidHlwZS5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGRvRmx1c2ggV2hldGhlciBhbGwgYmxvY2tzIGFuZCBwYXJ0aWFsIGJsb2NrcyBzaG91bGQgYmUgcHJvY2Vzc2VkLlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIHByb2Nlc3NlZCBkYXRhLlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEBleGFtcGxlXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogICAgIHZhciBwcm9jZXNzZWREYXRhID0gYnVmZmVyZWRCbG9ja0FsZ29yaXRobS5fcHJvY2VzcygpO1xyXG5cdCAgICAgICAgICogICAgIHZhciBwcm9jZXNzZWREYXRhID0gYnVmZmVyZWRCbG9ja0FsZ29yaXRobS5fcHJvY2VzcyghISdmbHVzaCcpO1xyXG5cdCAgICAgICAgICovXHJcblx0ICAgICAgICBfcHJvY2VzczogZnVuY3Rpb24gKGRvRmx1c2gpIHtcclxuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcclxuXHQgICAgICAgICAgICB2YXIgZGF0YSA9IHRoaXMuX2RhdGE7XHJcblx0ICAgICAgICAgICAgdmFyIGRhdGFXb3JkcyA9IGRhdGEud29yZHM7XHJcblx0ICAgICAgICAgICAgdmFyIGRhdGFTaWdCeXRlcyA9IGRhdGEuc2lnQnl0ZXM7XHJcblx0ICAgICAgICAgICAgdmFyIGJsb2NrU2l6ZSA9IHRoaXMuYmxvY2tTaXplO1xyXG5cdCAgICAgICAgICAgIHZhciBibG9ja1NpemVCeXRlcyA9IGJsb2NrU2l6ZSAqIDQ7XHJcblxyXG5cdCAgICAgICAgICAgIC8vIENvdW50IGJsb2NrcyByZWFkeVxyXG5cdCAgICAgICAgICAgIHZhciBuQmxvY2tzUmVhZHkgPSBkYXRhU2lnQnl0ZXMgLyBibG9ja1NpemVCeXRlcztcclxuXHQgICAgICAgICAgICBpZiAoZG9GbHVzaCkge1xyXG5cdCAgICAgICAgICAgICAgICAvLyBSb3VuZCB1cCB0byBpbmNsdWRlIHBhcnRpYWwgYmxvY2tzXHJcblx0ICAgICAgICAgICAgICAgIG5CbG9ja3NSZWFkeSA9IE1hdGguY2VpbChuQmxvY2tzUmVhZHkpO1xyXG5cdCAgICAgICAgICAgIH0gZWxzZSB7XHJcblx0ICAgICAgICAgICAgICAgIC8vIFJvdW5kIGRvd24gdG8gaW5jbHVkZSBvbmx5IGZ1bGwgYmxvY2tzLFxyXG5cdCAgICAgICAgICAgICAgICAvLyBsZXNzIHRoZSBudW1iZXIgb2YgYmxvY2tzIHRoYXQgbXVzdCByZW1haW4gaW4gdGhlIGJ1ZmZlclxyXG5cdCAgICAgICAgICAgICAgICBuQmxvY2tzUmVhZHkgPSBNYXRoLm1heCgobkJsb2Nrc1JlYWR5IHwgMCkgLSB0aGlzLl9taW5CdWZmZXJTaXplLCAwKTtcclxuXHQgICAgICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgICAgIC8vIENvdW50IHdvcmRzIHJlYWR5XHJcblx0ICAgICAgICAgICAgdmFyIG5Xb3Jkc1JlYWR5ID0gbkJsb2Nrc1JlYWR5ICogYmxvY2tTaXplO1xyXG5cclxuXHQgICAgICAgICAgICAvLyBDb3VudCBieXRlcyByZWFkeVxyXG5cdCAgICAgICAgICAgIHZhciBuQnl0ZXNSZWFkeSA9IE1hdGgubWluKG5Xb3Jkc1JlYWR5ICogNCwgZGF0YVNpZ0J5dGVzKTtcclxuXHJcblx0ICAgICAgICAgICAgLy8gUHJvY2VzcyBibG9ja3NcclxuXHQgICAgICAgICAgICBpZiAobldvcmRzUmVhZHkpIHtcclxuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgb2Zmc2V0ID0gMDsgb2Zmc2V0IDwgbldvcmRzUmVhZHk7IG9mZnNldCArPSBibG9ja1NpemUpIHtcclxuXHQgICAgICAgICAgICAgICAgICAgIC8vIFBlcmZvcm0gY29uY3JldGUtYWxnb3JpdGhtIGxvZ2ljXHJcblx0ICAgICAgICAgICAgICAgICAgICB0aGlzLl9kb1Byb2Nlc3NCbG9jayhkYXRhV29yZHMsIG9mZnNldCk7XHJcblx0ICAgICAgICAgICAgICAgIH1cclxuXHJcblx0ICAgICAgICAgICAgICAgIC8vIFJlbW92ZSBwcm9jZXNzZWQgd29yZHNcclxuXHQgICAgICAgICAgICAgICAgdmFyIHByb2Nlc3NlZFdvcmRzID0gZGF0YVdvcmRzLnNwbGljZSgwLCBuV29yZHNSZWFkeSk7XHJcblx0ICAgICAgICAgICAgICAgIGRhdGEuc2lnQnl0ZXMgLT0gbkJ5dGVzUmVhZHk7XHJcblx0ICAgICAgICAgICAgfVxyXG5cclxuXHQgICAgICAgICAgICAvLyBSZXR1cm4gcHJvY2Vzc2VkIHdvcmRzXHJcblx0ICAgICAgICAgICAgcmV0dXJuIG5ldyBXb3JkQXJyYXkuaW5pdChwcm9jZXNzZWRXb3JkcywgbkJ5dGVzUmVhZHkpO1xyXG5cdCAgICAgICAgfSxcclxuXHJcblx0ICAgICAgICAvKipcclxuXHQgICAgICAgICAqIENyZWF0ZXMgYSBjb3B5IG9mIHRoaXMgb2JqZWN0LlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEByZXR1cm4ge09iamVjdH0gVGhlIGNsb25lLlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEBleGFtcGxlXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogICAgIHZhciBjbG9uZSA9IGJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0uY2xvbmUoKTtcclxuXHQgICAgICAgICAqL1xyXG5cdCAgICAgICAgY2xvbmU6IGZ1bmN0aW9uICgpIHtcclxuXHQgICAgICAgICAgICB2YXIgY2xvbmUgPSBCYXNlLmNsb25lLmNhbGwodGhpcyk7XHJcblx0ICAgICAgICAgICAgY2xvbmUuX2RhdGEgPSB0aGlzLl9kYXRhLmNsb25lKCk7XHJcblxyXG5cdCAgICAgICAgICAgIHJldHVybiBjbG9uZTtcclxuXHQgICAgICAgIH0sXHJcblxyXG5cdCAgICAgICAgX21pbkJ1ZmZlclNpemU6IDBcclxuXHQgICAgfSk7XHJcblxyXG5cdCAgICAvKipcclxuXHQgICAgICogQWJzdHJhY3QgaGFzaGVyIHRlbXBsYXRlLlxyXG5cdCAgICAgKlxyXG5cdCAgICAgKiBAcHJvcGVydHkge251bWJlcn0gYmxvY2tTaXplIFRoZSBudW1iZXIgb2YgMzItYml0IHdvcmRzIHRoaXMgaGFzaGVyIG9wZXJhdGVzIG9uLiBEZWZhdWx0OiAxNiAoNTEyIGJpdHMpXHJcblx0ICAgICAqL1xyXG5cdCAgICB2YXIgSGFzaGVyID0gQ19saWIuSGFzaGVyID0gQnVmZmVyZWRCbG9ja0FsZ29yaXRobS5leHRlbmQoe1xyXG5cdCAgICAgICAgLyoqXHJcblx0ICAgICAgICAgKiBDb25maWd1cmF0aW9uIG9wdGlvbnMuXHJcblx0ICAgICAgICAgKi9cclxuXHQgICAgICAgIGNmZzogQmFzZS5leHRlbmQoKSxcclxuXHJcblx0ICAgICAgICAvKipcclxuXHQgICAgICAgICAqIEluaXRpYWxpemVzIGEgbmV3bHkgY3JlYXRlZCBoYXNoZXIuXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNmZyAoT3B0aW9uYWwpIFRoZSBjb25maWd1cmF0aW9uIG9wdGlvbnMgdG8gdXNlIGZvciB0aGlzIGhhc2ggY29tcHV0YXRpb24uXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQGV4YW1wbGVcclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiAgICAgdmFyIGhhc2hlciA9IENyeXB0b0pTLmFsZ28uU0hBMjU2LmNyZWF0ZSgpO1xyXG5cdCAgICAgICAgICovXHJcblx0ICAgICAgICBpbml0OiBmdW5jdGlvbiAoY2ZnKSB7XHJcblx0ICAgICAgICAgICAgLy8gQXBwbHkgY29uZmlnIGRlZmF1bHRzXHJcblx0ICAgICAgICAgICAgdGhpcy5jZmcgPSB0aGlzLmNmZy5leHRlbmQoY2ZnKTtcclxuXHJcblx0ICAgICAgICAgICAgLy8gU2V0IGluaXRpYWwgdmFsdWVzXHJcblx0ICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xyXG5cdCAgICAgICAgfSxcclxuXHJcblx0ICAgICAgICAvKipcclxuXHQgICAgICAgICAqIFJlc2V0cyB0aGlzIGhhc2hlciB0byBpdHMgaW5pdGlhbCBzdGF0ZS5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAZXhhbXBsZVxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqICAgICBoYXNoZXIucmVzZXQoKTtcclxuXHQgICAgICAgICAqL1xyXG5cdCAgICAgICAgcmVzZXQ6IGZ1bmN0aW9uICgpIHtcclxuXHQgICAgICAgICAgICAvLyBSZXNldCBkYXRhIGJ1ZmZlclxyXG5cdCAgICAgICAgICAgIEJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0ucmVzZXQuY2FsbCh0aGlzKTtcclxuXHJcblx0ICAgICAgICAgICAgLy8gUGVyZm9ybSBjb25jcmV0ZS1oYXNoZXIgbG9naWNcclxuXHQgICAgICAgICAgICB0aGlzLl9kb1Jlc2V0KCk7XHJcblx0ICAgICAgICB9LFxyXG5cclxuXHQgICAgICAgIC8qKlxyXG5cdCAgICAgICAgICogVXBkYXRlcyB0aGlzIGhhc2hlciB3aXRoIGEgbWVzc2FnZS5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2VVcGRhdGUgVGhlIG1lc3NhZ2UgdG8gYXBwZW5kLlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEByZXR1cm4ge0hhc2hlcn0gVGhpcyBoYXNoZXIuXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQGV4YW1wbGVcclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiAgICAgaGFzaGVyLnVwZGF0ZSgnbWVzc2FnZScpO1xyXG5cdCAgICAgICAgICogICAgIGhhc2hlci51cGRhdGUod29yZEFycmF5KTtcclxuXHQgICAgICAgICAqL1xyXG5cdCAgICAgICAgdXBkYXRlOiBmdW5jdGlvbiAobWVzc2FnZVVwZGF0ZSkge1xyXG5cdCAgICAgICAgICAgIC8vIEFwcGVuZFxyXG5cdCAgICAgICAgICAgIHRoaXMuX2FwcGVuZChtZXNzYWdlVXBkYXRlKTtcclxuXHJcblx0ICAgICAgICAgICAgLy8gVXBkYXRlIHRoZSBoYXNoXHJcblx0ICAgICAgICAgICAgdGhpcy5fcHJvY2VzcygpO1xyXG5cclxuXHQgICAgICAgICAgICAvLyBDaGFpbmFibGVcclxuXHQgICAgICAgICAgICByZXR1cm4gdGhpcztcclxuXHQgICAgICAgIH0sXHJcblxyXG5cdCAgICAgICAgLyoqXHJcblx0ICAgICAgICAgKiBGaW5hbGl6ZXMgdGhlIGhhc2ggY29tcHV0YXRpb24uXHJcblx0ICAgICAgICAgKiBOb3RlIHRoYXQgdGhlIGZpbmFsaXplIG9wZXJhdGlvbiBpcyBlZmZlY3RpdmVseSBhIGRlc3RydWN0aXZlLCByZWFkLW9uY2Ugb3BlcmF0aW9uLlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZVVwZGF0ZSAoT3B0aW9uYWwpIEEgZmluYWwgbWVzc2FnZSB1cGRhdGUuXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgaGFzaC5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAZXhhbXBsZVxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqICAgICB2YXIgaGFzaCA9IGhhc2hlci5maW5hbGl6ZSgpO1xyXG5cdCAgICAgICAgICogICAgIHZhciBoYXNoID0gaGFzaGVyLmZpbmFsaXplKCdtZXNzYWdlJyk7XHJcblx0ICAgICAgICAgKiAgICAgdmFyIGhhc2ggPSBoYXNoZXIuZmluYWxpemUod29yZEFycmF5KTtcclxuXHQgICAgICAgICAqL1xyXG5cdCAgICAgICAgZmluYWxpemU6IGZ1bmN0aW9uIChtZXNzYWdlVXBkYXRlKSB7XHJcblx0ICAgICAgICAgICAgLy8gRmluYWwgbWVzc2FnZSB1cGRhdGVcclxuXHQgICAgICAgICAgICBpZiAobWVzc2FnZVVwZGF0ZSkge1xyXG5cdCAgICAgICAgICAgICAgICB0aGlzLl9hcHBlbmQobWVzc2FnZVVwZGF0ZSk7XHJcblx0ICAgICAgICAgICAgfVxyXG5cclxuXHQgICAgICAgICAgICAvLyBQZXJmb3JtIGNvbmNyZXRlLWhhc2hlciBsb2dpY1xyXG5cdCAgICAgICAgICAgIHZhciBoYXNoID0gdGhpcy5fZG9GaW5hbGl6ZSgpO1xyXG5cclxuXHQgICAgICAgICAgICByZXR1cm4gaGFzaDtcclxuXHQgICAgICAgIH0sXHJcblxyXG5cdCAgICAgICAgYmxvY2tTaXplOiA1MTIvMzIsXHJcblxyXG5cdCAgICAgICAgLyoqXHJcblx0ICAgICAgICAgKiBDcmVhdGVzIGEgc2hvcnRjdXQgZnVuY3Rpb24gdG8gYSBoYXNoZXIncyBvYmplY3QgaW50ZXJmYWNlLlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEBwYXJhbSB7SGFzaGVyfSBoYXNoZXIgVGhlIGhhc2hlciB0byBjcmVhdGUgYSBoZWxwZXIgZm9yLlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEByZXR1cm4ge0Z1bmN0aW9ufSBUaGUgc2hvcnRjdXQgZnVuY3Rpb24uXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQHN0YXRpY1xyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEBleGFtcGxlXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogICAgIHZhciBTSEEyNTYgPSBDcnlwdG9KUy5saWIuSGFzaGVyLl9jcmVhdGVIZWxwZXIoQ3J5cHRvSlMuYWxnby5TSEEyNTYpO1xyXG5cdCAgICAgICAgICovXHJcblx0ICAgICAgICBfY3JlYXRlSGVscGVyOiBmdW5jdGlvbiAoaGFzaGVyKSB7XHJcblx0ICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChtZXNzYWdlLCBjZmcpIHtcclxuXHQgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBoYXNoZXIuaW5pdChjZmcpLmZpbmFsaXplKG1lc3NhZ2UpO1xyXG5cdCAgICAgICAgICAgIH07XHJcblx0ICAgICAgICB9LFxyXG5cclxuXHQgICAgICAgIC8qKlxyXG5cdCAgICAgICAgICogQ3JlYXRlcyBhIHNob3J0Y3V0IGZ1bmN0aW9uIHRvIHRoZSBITUFDJ3Mgb2JqZWN0IGludGVyZmFjZS5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAcGFyYW0ge0hhc2hlcn0gaGFzaGVyIFRoZSBoYXNoZXIgdG8gdXNlIGluIHRoaXMgSE1BQyBoZWxwZXIuXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQHJldHVybiB7RnVuY3Rpb259IFRoZSBzaG9ydGN1dCBmdW5jdGlvbi5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAc3RhdGljXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQGV4YW1wbGVcclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiAgICAgdmFyIEhtYWNTSEEyNTYgPSBDcnlwdG9KUy5saWIuSGFzaGVyLl9jcmVhdGVIbWFjSGVscGVyKENyeXB0b0pTLmFsZ28uU0hBMjU2KTtcclxuXHQgICAgICAgICAqL1xyXG5cdCAgICAgICAgX2NyZWF0ZUhtYWNIZWxwZXI6IGZ1bmN0aW9uIChoYXNoZXIpIHtcclxuXHQgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKG1lc3NhZ2UsIGtleSkge1xyXG5cdCAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENfYWxnby5ITUFDLmluaXQoaGFzaGVyLCBrZXkpLmZpbmFsaXplKG1lc3NhZ2UpO1xyXG5cdCAgICAgICAgICAgIH07XHJcblx0ICAgICAgICB9XHJcblx0ICAgIH0pO1xyXG5cclxuXHQgICAgLyoqXHJcblx0ICAgICAqIEFsZ29yaXRobSBuYW1lc3BhY2UuXHJcblx0ICAgICAqL1xyXG5cdCAgICB2YXIgQ19hbGdvID0gQy5hbGdvID0ge307XHJcblxyXG5cdCAgICByZXR1cm4gQztcclxuXHR9KE1hdGgpKTtcclxuXHJcblxyXG5cdHJldHVybiBDcnlwdG9KUztcclxuXHJcbn0pKTsiLCI7KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XHJcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XHJcblx0XHQvLyBDb21tb25KU1xyXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9jb3JlXCIpKTtcclxuXHR9XHJcblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcclxuXHRcdC8vIEFNRFxyXG5cdFx0ZGVmaW5lKFtcIi4vY29yZVwiXSwgZmFjdG9yeSk7XHJcblx0fVxyXG5cdGVsc2Uge1xyXG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxyXG5cdFx0ZmFjdG9yeShyb290LkNyeXB0b0pTKTtcclxuXHR9XHJcbn0odGhpcywgZnVuY3Rpb24gKENyeXB0b0pTKSB7XHJcblxyXG5cdChmdW5jdGlvbiAodW5kZWZpbmVkKSB7XHJcblx0ICAgIC8vIFNob3J0Y3V0c1xyXG5cdCAgICB2YXIgQyA9IENyeXB0b0pTO1xyXG5cdCAgICB2YXIgQ19saWIgPSBDLmxpYjtcclxuXHQgICAgdmFyIEJhc2UgPSBDX2xpYi5CYXNlO1xyXG5cdCAgICB2YXIgWDMyV29yZEFycmF5ID0gQ19saWIuV29yZEFycmF5O1xyXG5cclxuXHQgICAgLyoqXHJcblx0ICAgICAqIHg2NCBuYW1lc3BhY2UuXHJcblx0ICAgICAqL1xyXG5cdCAgICB2YXIgQ194NjQgPSBDLng2NCA9IHt9O1xyXG5cclxuXHQgICAgLyoqXHJcblx0ICAgICAqIEEgNjQtYml0IHdvcmQuXHJcblx0ICAgICAqL1xyXG5cdCAgICB2YXIgWDY0V29yZCA9IENfeDY0LldvcmQgPSBCYXNlLmV4dGVuZCh7XHJcblx0ICAgICAgICAvKipcclxuXHQgICAgICAgICAqIEluaXRpYWxpemVzIGEgbmV3bHkgY3JlYXRlZCA2NC1iaXQgd29yZC5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gaGlnaCBUaGUgaGlnaCAzMiBiaXRzLlxyXG5cdCAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGxvdyBUaGUgbG93IDMyIGJpdHMuXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQGV4YW1wbGVcclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiAgICAgdmFyIHg2NFdvcmQgPSBDcnlwdG9KUy54NjQuV29yZC5jcmVhdGUoMHgwMDAxMDIwMywgMHgwNDA1MDYwNyk7XHJcblx0ICAgICAgICAgKi9cclxuXHQgICAgICAgIGluaXQ6IGZ1bmN0aW9uIChoaWdoLCBsb3cpIHtcclxuXHQgICAgICAgICAgICB0aGlzLmhpZ2ggPSBoaWdoO1xyXG5cdCAgICAgICAgICAgIHRoaXMubG93ID0gbG93O1xyXG5cdCAgICAgICAgfVxyXG5cclxuXHQgICAgICAgIC8qKlxyXG5cdCAgICAgICAgICogQml0d2lzZSBOT1RzIHRoaXMgd29yZC5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAcmV0dXJuIHtYNjRXb3JkfSBBIG5ldyB4NjQtV29yZCBvYmplY3QgYWZ0ZXIgbmVnYXRpbmcuXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQGV4YW1wbGVcclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiAgICAgdmFyIG5lZ2F0ZWQgPSB4NjRXb3JkLm5vdCgpO1xyXG5cdCAgICAgICAgICovXHJcblx0ICAgICAgICAvLyBub3Q6IGZ1bmN0aW9uICgpIHtcclxuXHQgICAgICAgICAgICAvLyB2YXIgaGlnaCA9IH50aGlzLmhpZ2g7XHJcblx0ICAgICAgICAgICAgLy8gdmFyIGxvdyA9IH50aGlzLmxvdztcclxuXHJcblx0ICAgICAgICAgICAgLy8gcmV0dXJuIFg2NFdvcmQuY3JlYXRlKGhpZ2gsIGxvdyk7XHJcblx0ICAgICAgICAvLyB9LFxyXG5cclxuXHQgICAgICAgIC8qKlxyXG5cdCAgICAgICAgICogQml0d2lzZSBBTkRzIHRoaXMgd29yZCB3aXRoIHRoZSBwYXNzZWQgd29yZC5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAcGFyYW0ge1g2NFdvcmR9IHdvcmQgVGhlIHg2NC1Xb3JkIHRvIEFORCB3aXRoIHRoaXMgd29yZC5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAcmV0dXJuIHtYNjRXb3JkfSBBIG5ldyB4NjQtV29yZCBvYmplY3QgYWZ0ZXIgQU5EaW5nLlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEBleGFtcGxlXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogICAgIHZhciBhbmRlZCA9IHg2NFdvcmQuYW5kKGFub3RoZXJYNjRXb3JkKTtcclxuXHQgICAgICAgICAqL1xyXG5cdCAgICAgICAgLy8gYW5kOiBmdW5jdGlvbiAod29yZCkge1xyXG5cdCAgICAgICAgICAgIC8vIHZhciBoaWdoID0gdGhpcy5oaWdoICYgd29yZC5oaWdoO1xyXG5cdCAgICAgICAgICAgIC8vIHZhciBsb3cgPSB0aGlzLmxvdyAmIHdvcmQubG93O1xyXG5cclxuXHQgICAgICAgICAgICAvLyByZXR1cm4gWDY0V29yZC5jcmVhdGUoaGlnaCwgbG93KTtcclxuXHQgICAgICAgIC8vIH0sXHJcblxyXG5cdCAgICAgICAgLyoqXHJcblx0ICAgICAgICAgKiBCaXR3aXNlIE9ScyB0aGlzIHdvcmQgd2l0aCB0aGUgcGFzc2VkIHdvcmQuXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQHBhcmFtIHtYNjRXb3JkfSB3b3JkIFRoZSB4NjQtV29yZCB0byBPUiB3aXRoIHRoaXMgd29yZC5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAcmV0dXJuIHtYNjRXb3JkfSBBIG5ldyB4NjQtV29yZCBvYmplY3QgYWZ0ZXIgT1JpbmcuXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQGV4YW1wbGVcclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiAgICAgdmFyIG9yZWQgPSB4NjRXb3JkLm9yKGFub3RoZXJYNjRXb3JkKTtcclxuXHQgICAgICAgICAqL1xyXG5cdCAgICAgICAgLy8gb3I6IGZ1bmN0aW9uICh3b3JkKSB7XHJcblx0ICAgICAgICAgICAgLy8gdmFyIGhpZ2ggPSB0aGlzLmhpZ2ggfCB3b3JkLmhpZ2g7XHJcblx0ICAgICAgICAgICAgLy8gdmFyIGxvdyA9IHRoaXMubG93IHwgd29yZC5sb3c7XHJcblxyXG5cdCAgICAgICAgICAgIC8vIHJldHVybiBYNjRXb3JkLmNyZWF0ZShoaWdoLCBsb3cpO1xyXG5cdCAgICAgICAgLy8gfSxcclxuXHJcblx0ICAgICAgICAvKipcclxuXHQgICAgICAgICAqIEJpdHdpc2UgWE9ScyB0aGlzIHdvcmQgd2l0aCB0aGUgcGFzc2VkIHdvcmQuXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQHBhcmFtIHtYNjRXb3JkfSB3b3JkIFRoZSB4NjQtV29yZCB0byBYT1Igd2l0aCB0aGlzIHdvcmQuXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQHJldHVybiB7WDY0V29yZH0gQSBuZXcgeDY0LVdvcmQgb2JqZWN0IGFmdGVyIFhPUmluZy5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAZXhhbXBsZVxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqICAgICB2YXIgeG9yZWQgPSB4NjRXb3JkLnhvcihhbm90aGVyWDY0V29yZCk7XHJcblx0ICAgICAgICAgKi9cclxuXHQgICAgICAgIC8vIHhvcjogZnVuY3Rpb24gKHdvcmQpIHtcclxuXHQgICAgICAgICAgICAvLyB2YXIgaGlnaCA9IHRoaXMuaGlnaCBeIHdvcmQuaGlnaDtcclxuXHQgICAgICAgICAgICAvLyB2YXIgbG93ID0gdGhpcy5sb3cgXiB3b3JkLmxvdztcclxuXHJcblx0ICAgICAgICAgICAgLy8gcmV0dXJuIFg2NFdvcmQuY3JlYXRlKGhpZ2gsIGxvdyk7XHJcblx0ICAgICAgICAvLyB9LFxyXG5cclxuXHQgICAgICAgIC8qKlxyXG5cdCAgICAgICAgICogU2hpZnRzIHRoaXMgd29yZCBuIGJpdHMgdG8gdGhlIGxlZnQuXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiBiaXRzIHRvIHNoaWZ0LlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEByZXR1cm4ge1g2NFdvcmR9IEEgbmV3IHg2NC1Xb3JkIG9iamVjdCBhZnRlciBzaGlmdGluZy5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAZXhhbXBsZVxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqICAgICB2YXIgc2hpZnRlZCA9IHg2NFdvcmQuc2hpZnRMKDI1KTtcclxuXHQgICAgICAgICAqL1xyXG5cdCAgICAgICAgLy8gc2hpZnRMOiBmdW5jdGlvbiAobikge1xyXG5cdCAgICAgICAgICAgIC8vIGlmIChuIDwgMzIpIHtcclxuXHQgICAgICAgICAgICAgICAgLy8gdmFyIGhpZ2ggPSAodGhpcy5oaWdoIDw8IG4pIHwgKHRoaXMubG93ID4+PiAoMzIgLSBuKSk7XHJcblx0ICAgICAgICAgICAgICAgIC8vIHZhciBsb3cgPSB0aGlzLmxvdyA8PCBuO1xyXG5cdCAgICAgICAgICAgIC8vIH0gZWxzZSB7XHJcblx0ICAgICAgICAgICAgICAgIC8vIHZhciBoaWdoID0gdGhpcy5sb3cgPDwgKG4gLSAzMik7XHJcblx0ICAgICAgICAgICAgICAgIC8vIHZhciBsb3cgPSAwO1xyXG5cdCAgICAgICAgICAgIC8vIH1cclxuXHJcblx0ICAgICAgICAgICAgLy8gcmV0dXJuIFg2NFdvcmQuY3JlYXRlKGhpZ2gsIGxvdyk7XHJcblx0ICAgICAgICAvLyB9LFxyXG5cclxuXHQgICAgICAgIC8qKlxyXG5cdCAgICAgICAgICogU2hpZnRzIHRoaXMgd29yZCBuIGJpdHMgdG8gdGhlIHJpZ2h0LlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBuIFRoZSBudW1iZXIgb2YgYml0cyB0byBzaGlmdC5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAcmV0dXJuIHtYNjRXb3JkfSBBIG5ldyB4NjQtV29yZCBvYmplY3QgYWZ0ZXIgc2hpZnRpbmcuXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQGV4YW1wbGVcclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiAgICAgdmFyIHNoaWZ0ZWQgPSB4NjRXb3JkLnNoaWZ0Uig3KTtcclxuXHQgICAgICAgICAqL1xyXG5cdCAgICAgICAgLy8gc2hpZnRSOiBmdW5jdGlvbiAobikge1xyXG5cdCAgICAgICAgICAgIC8vIGlmIChuIDwgMzIpIHtcclxuXHQgICAgICAgICAgICAgICAgLy8gdmFyIGxvdyA9ICh0aGlzLmxvdyA+Pj4gbikgfCAodGhpcy5oaWdoIDw8ICgzMiAtIG4pKTtcclxuXHQgICAgICAgICAgICAgICAgLy8gdmFyIGhpZ2ggPSB0aGlzLmhpZ2ggPj4+IG47XHJcblx0ICAgICAgICAgICAgLy8gfSBlbHNlIHtcclxuXHQgICAgICAgICAgICAgICAgLy8gdmFyIGxvdyA9IHRoaXMuaGlnaCA+Pj4gKG4gLSAzMik7XHJcblx0ICAgICAgICAgICAgICAgIC8vIHZhciBoaWdoID0gMDtcclxuXHQgICAgICAgICAgICAvLyB9XHJcblxyXG5cdCAgICAgICAgICAgIC8vIHJldHVybiBYNjRXb3JkLmNyZWF0ZShoaWdoLCBsb3cpO1xyXG5cdCAgICAgICAgLy8gfSxcclxuXHJcblx0ICAgICAgICAvKipcclxuXHQgICAgICAgICAqIFJvdGF0ZXMgdGhpcyB3b3JkIG4gYml0cyB0byB0aGUgbGVmdC5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gbiBUaGUgbnVtYmVyIG9mIGJpdHMgdG8gcm90YXRlLlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEByZXR1cm4ge1g2NFdvcmR9IEEgbmV3IHg2NC1Xb3JkIG9iamVjdCBhZnRlciByb3RhdGluZy5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAZXhhbXBsZVxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqICAgICB2YXIgcm90YXRlZCA9IHg2NFdvcmQucm90TCgyNSk7XHJcblx0ICAgICAgICAgKi9cclxuXHQgICAgICAgIC8vIHJvdEw6IGZ1bmN0aW9uIChuKSB7XHJcblx0ICAgICAgICAgICAgLy8gcmV0dXJuIHRoaXMuc2hpZnRMKG4pLm9yKHRoaXMuc2hpZnRSKDY0IC0gbikpO1xyXG5cdCAgICAgICAgLy8gfSxcclxuXHJcblx0ICAgICAgICAvKipcclxuXHQgICAgICAgICAqIFJvdGF0ZXMgdGhpcyB3b3JkIG4gYml0cyB0byB0aGUgcmlnaHQuXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IG4gVGhlIG51bWJlciBvZiBiaXRzIHRvIHJvdGF0ZS5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAcmV0dXJuIHtYNjRXb3JkfSBBIG5ldyB4NjQtV29yZCBvYmplY3QgYWZ0ZXIgcm90YXRpbmcuXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQGV4YW1wbGVcclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiAgICAgdmFyIHJvdGF0ZWQgPSB4NjRXb3JkLnJvdFIoNyk7XHJcblx0ICAgICAgICAgKi9cclxuXHQgICAgICAgIC8vIHJvdFI6IGZ1bmN0aW9uIChuKSB7XHJcblx0ICAgICAgICAgICAgLy8gcmV0dXJuIHRoaXMuc2hpZnRSKG4pLm9yKHRoaXMuc2hpZnRMKDY0IC0gbikpO1xyXG5cdCAgICAgICAgLy8gfSxcclxuXHJcblx0ICAgICAgICAvKipcclxuXHQgICAgICAgICAqIEFkZHMgdGhpcyB3b3JkIHdpdGggdGhlIHBhc3NlZCB3b3JkLlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEBwYXJhbSB7WDY0V29yZH0gd29yZCBUaGUgeDY0LVdvcmQgdG8gYWRkIHdpdGggdGhpcyB3b3JkLlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEByZXR1cm4ge1g2NFdvcmR9IEEgbmV3IHg2NC1Xb3JkIG9iamVjdCBhZnRlciBhZGRpbmcuXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQGV4YW1wbGVcclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiAgICAgdmFyIGFkZGVkID0geDY0V29yZC5hZGQoYW5vdGhlclg2NFdvcmQpO1xyXG5cdCAgICAgICAgICovXHJcblx0ICAgICAgICAvLyBhZGQ6IGZ1bmN0aW9uICh3b3JkKSB7XHJcblx0ICAgICAgICAgICAgLy8gdmFyIGxvdyA9ICh0aGlzLmxvdyArIHdvcmQubG93KSB8IDA7XHJcblx0ICAgICAgICAgICAgLy8gdmFyIGNhcnJ5ID0gKGxvdyA+Pj4gMCkgPCAodGhpcy5sb3cgPj4+IDApID8gMSA6IDA7XHJcblx0ICAgICAgICAgICAgLy8gdmFyIGhpZ2ggPSAodGhpcy5oaWdoICsgd29yZC5oaWdoICsgY2FycnkpIHwgMDtcclxuXHJcblx0ICAgICAgICAgICAgLy8gcmV0dXJuIFg2NFdvcmQuY3JlYXRlKGhpZ2gsIGxvdyk7XHJcblx0ICAgICAgICAvLyB9XHJcblx0ICAgIH0pO1xyXG5cclxuXHQgICAgLyoqXHJcblx0ICAgICAqIEFuIGFycmF5IG9mIDY0LWJpdCB3b3Jkcy5cclxuXHQgICAgICpcclxuXHQgICAgICogQHByb3BlcnR5IHtBcnJheX0gd29yZHMgVGhlIGFycmF5IG9mIENyeXB0b0pTLng2NC5Xb3JkIG9iamVjdHMuXHJcblx0ICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzaWdCeXRlcyBUaGUgbnVtYmVyIG9mIHNpZ25pZmljYW50IGJ5dGVzIGluIHRoaXMgd29yZCBhcnJheS5cclxuXHQgICAgICovXHJcblx0ICAgIHZhciBYNjRXb3JkQXJyYXkgPSBDX3g2NC5Xb3JkQXJyYXkgPSBCYXNlLmV4dGVuZCh7XHJcblx0ICAgICAgICAvKipcclxuXHQgICAgICAgICAqIEluaXRpYWxpemVzIGEgbmV3bHkgY3JlYXRlZCB3b3JkIGFycmF5LlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IHdvcmRzIChPcHRpb25hbCkgQW4gYXJyYXkgb2YgQ3J5cHRvSlMueDY0LldvcmQgb2JqZWN0cy5cclxuXHQgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaWdCeXRlcyAoT3B0aW9uYWwpIFRoZSBudW1iZXIgb2Ygc2lnbmlmaWNhbnQgYnl0ZXMgaW4gdGhlIHdvcmRzLlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEBleGFtcGxlXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogICAgIHZhciB3b3JkQXJyYXkgPSBDcnlwdG9KUy54NjQuV29yZEFycmF5LmNyZWF0ZSgpO1xyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMueDY0LldvcmRBcnJheS5jcmVhdGUoW1xyXG5cdCAgICAgICAgICogICAgICAgICBDcnlwdG9KUy54NjQuV29yZC5jcmVhdGUoMHgwMDAxMDIwMywgMHgwNDA1MDYwNyksXHJcblx0ICAgICAgICAgKiAgICAgICAgIENyeXB0b0pTLng2NC5Xb3JkLmNyZWF0ZSgweDE4MTkxYTFiLCAweDFjMWQxZTFmKVxyXG5cdCAgICAgICAgICogICAgIF0pO1xyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMueDY0LldvcmRBcnJheS5jcmVhdGUoW1xyXG5cdCAgICAgICAgICogICAgICAgICBDcnlwdG9KUy54NjQuV29yZC5jcmVhdGUoMHgwMDAxMDIwMywgMHgwNDA1MDYwNyksXHJcblx0ICAgICAgICAgKiAgICAgICAgIENyeXB0b0pTLng2NC5Xb3JkLmNyZWF0ZSgweDE4MTkxYTFiLCAweDFjMWQxZTFmKVxyXG5cdCAgICAgICAgICogICAgIF0sIDEwKTtcclxuXHQgICAgICAgICAqL1xyXG5cdCAgICAgICAgaW5pdDogZnVuY3Rpb24gKHdvcmRzLCBzaWdCeXRlcykge1xyXG5cdCAgICAgICAgICAgIHdvcmRzID0gdGhpcy53b3JkcyA9IHdvcmRzIHx8IFtdO1xyXG5cclxuXHQgICAgICAgICAgICBpZiAoc2lnQnl0ZXMgIT0gdW5kZWZpbmVkKSB7XHJcblx0ICAgICAgICAgICAgICAgIHRoaXMuc2lnQnl0ZXMgPSBzaWdCeXRlcztcclxuXHQgICAgICAgICAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgICAgICAgICB0aGlzLnNpZ0J5dGVzID0gd29yZHMubGVuZ3RoICogODtcclxuXHQgICAgICAgICAgICB9XHJcblx0ICAgICAgICB9LFxyXG5cclxuXHQgICAgICAgIC8qKlxyXG5cdCAgICAgICAgICogQ29udmVydHMgdGhpcyA2NC1iaXQgd29yZCBhcnJheSB0byBhIDMyLWJpdCB3b3JkIGFycmF5LlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEByZXR1cm4ge0NyeXB0b0pTLmxpYi5Xb3JkQXJyYXl9IFRoaXMgd29yZCBhcnJheSdzIGRhdGEgYXMgYSAzMi1iaXQgd29yZCBhcnJheS5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAZXhhbXBsZVxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqICAgICB2YXIgeDMyV29yZEFycmF5ID0geDY0V29yZEFycmF5LnRvWDMyKCk7XHJcblx0ICAgICAgICAgKi9cclxuXHQgICAgICAgIHRvWDMyOiBmdW5jdGlvbiAoKSB7XHJcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXHJcblx0ICAgICAgICAgICAgdmFyIHg2NFdvcmRzID0gdGhpcy53b3JkcztcclxuXHQgICAgICAgICAgICB2YXIgeDY0V29yZHNMZW5ndGggPSB4NjRXb3Jkcy5sZW5ndGg7XHJcblxyXG5cdCAgICAgICAgICAgIC8vIENvbnZlcnRcclxuXHQgICAgICAgICAgICB2YXIgeDMyV29yZHMgPSBbXTtcclxuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHg2NFdvcmRzTGVuZ3RoOyBpKyspIHtcclxuXHQgICAgICAgICAgICAgICAgdmFyIHg2NFdvcmQgPSB4NjRXb3Jkc1tpXTtcclxuXHQgICAgICAgICAgICAgICAgeDMyV29yZHMucHVzaCh4NjRXb3JkLmhpZ2gpO1xyXG5cdCAgICAgICAgICAgICAgICB4MzJXb3Jkcy5wdXNoKHg2NFdvcmQubG93KTtcclxuXHQgICAgICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgICAgIHJldHVybiBYMzJXb3JkQXJyYXkuY3JlYXRlKHgzMldvcmRzLCB0aGlzLnNpZ0J5dGVzKTtcclxuXHQgICAgICAgIH0sXHJcblxyXG5cdCAgICAgICAgLyoqXHJcblx0ICAgICAgICAgKiBDcmVhdGVzIGEgY29weSBvZiB0aGlzIHdvcmQgYXJyYXkuXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQHJldHVybiB7WDY0V29yZEFycmF5fSBUaGUgY2xvbmUuXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQGV4YW1wbGVcclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiAgICAgdmFyIGNsb25lID0geDY0V29yZEFycmF5LmNsb25lKCk7XHJcblx0ICAgICAgICAgKi9cclxuXHQgICAgICAgIGNsb25lOiBmdW5jdGlvbiAoKSB7XHJcblx0ICAgICAgICAgICAgdmFyIGNsb25lID0gQmFzZS5jbG9uZS5jYWxsKHRoaXMpO1xyXG5cclxuXHQgICAgICAgICAgICAvLyBDbG9uZSBcIndvcmRzXCIgYXJyYXlcclxuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSBjbG9uZS53b3JkcyA9IHRoaXMud29yZHMuc2xpY2UoMCk7XHJcblxyXG5cdCAgICAgICAgICAgIC8vIENsb25lIGVhY2ggWDY0V29yZCBvYmplY3RcclxuXHQgICAgICAgICAgICB2YXIgd29yZHNMZW5ndGggPSB3b3Jkcy5sZW5ndGg7XHJcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB3b3Jkc0xlbmd0aDsgaSsrKSB7XHJcblx0ICAgICAgICAgICAgICAgIHdvcmRzW2ldID0gd29yZHNbaV0uY2xvbmUoKTtcclxuXHQgICAgICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgICAgIHJldHVybiBjbG9uZTtcclxuXHQgICAgICAgIH1cclxuXHQgICAgfSk7XHJcblx0fSgpKTtcclxuXHJcblxyXG5cdHJldHVybiBDcnlwdG9KUztcclxuXHJcbn0pKTsiLCI7KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XHJcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XHJcblx0XHQvLyBDb21tb25KU1xyXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9jb3JlXCIpKTtcclxuXHR9XHJcblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcclxuXHRcdC8vIEFNRFxyXG5cdFx0ZGVmaW5lKFtcIi4vY29yZVwiXSwgZmFjdG9yeSk7XHJcblx0fVxyXG5cdGVsc2Uge1xyXG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxyXG5cdFx0ZmFjdG9yeShyb290LkNyeXB0b0pTKTtcclxuXHR9XHJcbn0odGhpcywgZnVuY3Rpb24gKENyeXB0b0pTKSB7XHJcblxyXG5cdChmdW5jdGlvbiAoKSB7XHJcblx0ICAgIC8vIENoZWNrIGlmIHR5cGVkIGFycmF5cyBhcmUgc3VwcG9ydGVkXHJcblx0ICAgIGlmICh0eXBlb2YgQXJyYXlCdWZmZXIgIT0gJ2Z1bmN0aW9uJykge1xyXG5cdCAgICAgICAgcmV0dXJuO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICAvLyBTaG9ydGN1dHNcclxuXHQgICAgdmFyIEMgPSBDcnlwdG9KUztcclxuXHQgICAgdmFyIENfbGliID0gQy5saWI7XHJcblx0ICAgIHZhciBXb3JkQXJyYXkgPSBDX2xpYi5Xb3JkQXJyYXk7XHJcblxyXG5cdCAgICAvLyBSZWZlcmVuY2Ugb3JpZ2luYWwgaW5pdFxyXG5cdCAgICB2YXIgc3VwZXJJbml0ID0gV29yZEFycmF5LmluaXQ7XHJcblxyXG5cdCAgICAvLyBBdWdtZW50IFdvcmRBcnJheS5pbml0IHRvIGhhbmRsZSB0eXBlZCBhcnJheXNcclxuXHQgICAgdmFyIHN1YkluaXQgPSBXb3JkQXJyYXkuaW5pdCA9IGZ1bmN0aW9uICh0eXBlZEFycmF5KSB7XHJcblx0ICAgICAgICAvLyBDb252ZXJ0IGJ1ZmZlcnMgdG8gdWludDhcclxuXHQgICAgICAgIGlmICh0eXBlZEFycmF5IGluc3RhbmNlb2YgQXJyYXlCdWZmZXIpIHtcclxuXHQgICAgICAgICAgICB0eXBlZEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkodHlwZWRBcnJheSk7XHJcblx0ICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgLy8gQ29udmVydCBvdGhlciBhcnJheSB2aWV3cyB0byB1aW50OFxyXG5cdCAgICAgICAgaWYgKFxyXG5cdCAgICAgICAgICAgIHR5cGVkQXJyYXkgaW5zdGFuY2VvZiBJbnQ4QXJyYXkgfHxcclxuXHQgICAgICAgICAgICAodHlwZW9mIFVpbnQ4Q2xhbXBlZEFycmF5ICE9PSBcInVuZGVmaW5lZFwiICYmIHR5cGVkQXJyYXkgaW5zdGFuY2VvZiBVaW50OENsYW1wZWRBcnJheSkgfHxcclxuXHQgICAgICAgICAgICB0eXBlZEFycmF5IGluc3RhbmNlb2YgSW50MTZBcnJheSB8fFxyXG5cdCAgICAgICAgICAgIHR5cGVkQXJyYXkgaW5zdGFuY2VvZiBVaW50MTZBcnJheSB8fFxyXG5cdCAgICAgICAgICAgIHR5cGVkQXJyYXkgaW5zdGFuY2VvZiBJbnQzMkFycmF5IHx8XHJcblx0ICAgICAgICAgICAgdHlwZWRBcnJheSBpbnN0YW5jZW9mIFVpbnQzMkFycmF5IHx8XHJcblx0ICAgICAgICAgICAgdHlwZWRBcnJheSBpbnN0YW5jZW9mIEZsb2F0MzJBcnJheSB8fFxyXG5cdCAgICAgICAgICAgIHR5cGVkQXJyYXkgaW5zdGFuY2VvZiBGbG9hdDY0QXJyYXlcclxuXHQgICAgICAgICkge1xyXG5cdCAgICAgICAgICAgIHR5cGVkQXJyYXkgPSBuZXcgVWludDhBcnJheSh0eXBlZEFycmF5LmJ1ZmZlciwgdHlwZWRBcnJheS5ieXRlT2Zmc2V0LCB0eXBlZEFycmF5LmJ5dGVMZW5ndGgpO1xyXG5cdCAgICAgICAgfVxyXG5cclxuXHQgICAgICAgIC8vIEhhbmRsZSBVaW50OEFycmF5XHJcblx0ICAgICAgICBpZiAodHlwZWRBcnJheSBpbnN0YW5jZW9mIFVpbnQ4QXJyYXkpIHtcclxuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dFxyXG5cdCAgICAgICAgICAgIHZhciB0eXBlZEFycmF5Qnl0ZUxlbmd0aCA9IHR5cGVkQXJyYXkuYnl0ZUxlbmd0aDtcclxuXHJcblx0ICAgICAgICAgICAgLy8gRXh0cmFjdCBieXRlc1xyXG5cdCAgICAgICAgICAgIHZhciB3b3JkcyA9IFtdO1xyXG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdHlwZWRBcnJheUJ5dGVMZW5ndGg7IGkrKykge1xyXG5cdCAgICAgICAgICAgICAgICB3b3Jkc1tpID4+PiAyXSB8PSB0eXBlZEFycmF5W2ldIDw8ICgyNCAtIChpICUgNCkgKiA4KTtcclxuXHQgICAgICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgICAgIC8vIEluaXRpYWxpemUgdGhpcyB3b3JkIGFycmF5XHJcblx0ICAgICAgICAgICAgc3VwZXJJbml0LmNhbGwodGhpcywgd29yZHMsIHR5cGVkQXJyYXlCeXRlTGVuZ3RoKTtcclxuXHQgICAgICAgIH0gZWxzZSB7XHJcblx0ICAgICAgICAgICAgLy8gRWxzZSBjYWxsIG5vcm1hbCBpbml0XHJcblx0ICAgICAgICAgICAgc3VwZXJJbml0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcblx0ICAgICAgICB9XHJcblx0ICAgIH07XHJcblxyXG5cdCAgICBzdWJJbml0LnByb3RvdHlwZSA9IFdvcmRBcnJheTtcclxuXHR9KCkpO1xyXG5cclxuXHJcblx0cmV0dXJuIENyeXB0b0pTLmxpYi5Xb3JkQXJyYXk7XHJcblxyXG59KSk7IiwiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xyXG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xyXG5cdFx0Ly8gQ29tbW9uSlNcclxuXHRcdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vY29yZVwiKSk7XHJcblx0fVxyXG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XHJcblx0XHQvLyBBTURcclxuXHRcdGRlZmluZShbXCIuL2NvcmVcIl0sIGZhY3RvcnkpO1xyXG5cdH1cclxuXHRlbHNlIHtcclxuXHRcdC8vIEdsb2JhbCAoYnJvd3NlcilcclxuXHRcdGZhY3Rvcnkocm9vdC5DcnlwdG9KUyk7XHJcblx0fVxyXG59KHRoaXMsIGZ1bmN0aW9uIChDcnlwdG9KUykge1xyXG5cclxuXHQoZnVuY3Rpb24gKCkge1xyXG5cdCAgICAvLyBTaG9ydGN1dHNcclxuXHQgICAgdmFyIEMgPSBDcnlwdG9KUztcclxuXHQgICAgdmFyIENfbGliID0gQy5saWI7XHJcblx0ICAgIHZhciBXb3JkQXJyYXkgPSBDX2xpYi5Xb3JkQXJyYXk7XHJcblx0ICAgIHZhciBDX2VuYyA9IEMuZW5jO1xyXG5cclxuXHQgICAgLyoqXHJcblx0ICAgICAqIFVURi0xNiBCRSBlbmNvZGluZyBzdHJhdGVneS5cclxuXHQgICAgICovXHJcblx0ICAgIHZhciBVdGYxNkJFID0gQ19lbmMuVXRmMTYgPSBDX2VuYy5VdGYxNkJFID0ge1xyXG5cdCAgICAgICAgLyoqXHJcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIHdvcmQgYXJyYXkgdG8gYSBVVEYtMTYgQkUgc3RyaW5nLlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fSB3b3JkQXJyYXkgVGhlIHdvcmQgYXJyYXkuXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgVVRGLTE2IEJFIHN0cmluZy5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAc3RhdGljXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQGV4YW1wbGVcclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiAgICAgdmFyIHV0ZjE2U3RyaW5nID0gQ3J5cHRvSlMuZW5jLlV0ZjE2LnN0cmluZ2lmeSh3b3JkQXJyYXkpO1xyXG5cdCAgICAgICAgICovXHJcblx0ICAgICAgICBzdHJpbmdpZnk6IGZ1bmN0aW9uICh3b3JkQXJyYXkpIHtcclxuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcclxuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSB3b3JkQXJyYXkud29yZHM7XHJcblx0ICAgICAgICAgICAgdmFyIHNpZ0J5dGVzID0gd29yZEFycmF5LnNpZ0J5dGVzO1xyXG5cclxuXHQgICAgICAgICAgICAvLyBDb252ZXJ0XHJcblx0ICAgICAgICAgICAgdmFyIHV0ZjE2Q2hhcnMgPSBbXTtcclxuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpZ0J5dGVzOyBpICs9IDIpIHtcclxuXHQgICAgICAgICAgICAgICAgdmFyIGNvZGVQb2ludCA9ICh3b3Jkc1tpID4+PiAyXSA+Pj4gKDE2IC0gKGkgJSA0KSAqIDgpKSAmIDB4ZmZmZjtcclxuXHQgICAgICAgICAgICAgICAgdXRmMTZDaGFycy5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoY29kZVBvaW50KSk7XHJcblx0ICAgICAgICAgICAgfVxyXG5cclxuXHQgICAgICAgICAgICByZXR1cm4gdXRmMTZDaGFycy5qb2luKCcnKTtcclxuXHQgICAgICAgIH0sXHJcblxyXG5cdCAgICAgICAgLyoqXHJcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIFVURi0xNiBCRSBzdHJpbmcgdG8gYSB3b3JkIGFycmF5LlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1dGYxNlN0ciBUaGUgVVRGLTE2IEJFIHN0cmluZy5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSB3b3JkIGFycmF5LlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEBzdGF0aWNcclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAZXhhbXBsZVxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqICAgICB2YXIgd29yZEFycmF5ID0gQ3J5cHRvSlMuZW5jLlV0ZjE2LnBhcnNlKHV0ZjE2U3RyaW5nKTtcclxuXHQgICAgICAgICAqL1xyXG5cdCAgICAgICAgcGFyc2U6IGZ1bmN0aW9uICh1dGYxNlN0cikge1xyXG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0XHJcblx0ICAgICAgICAgICAgdmFyIHV0ZjE2U3RyTGVuZ3RoID0gdXRmMTZTdHIubGVuZ3RoO1xyXG5cclxuXHQgICAgICAgICAgICAvLyBDb252ZXJ0XHJcblx0ICAgICAgICAgICAgdmFyIHdvcmRzID0gW107XHJcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB1dGYxNlN0ckxlbmd0aDsgaSsrKSB7XHJcblx0ICAgICAgICAgICAgICAgIHdvcmRzW2kgPj4+IDFdIHw9IHV0ZjE2U3RyLmNoYXJDb2RlQXQoaSkgPDwgKDE2IC0gKGkgJSAyKSAqIDE2KTtcclxuXHQgICAgICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgICAgIHJldHVybiBXb3JkQXJyYXkuY3JlYXRlKHdvcmRzLCB1dGYxNlN0ckxlbmd0aCAqIDIpO1xyXG5cdCAgICAgICAgfVxyXG5cdCAgICB9O1xyXG5cclxuXHQgICAgLyoqXHJcblx0ICAgICAqIFVURi0xNiBMRSBlbmNvZGluZyBzdHJhdGVneS5cclxuXHQgICAgICovXHJcblx0ICAgIENfZW5jLlV0ZjE2TEUgPSB7XHJcblx0ICAgICAgICAvKipcclxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgd29yZCBhcnJheSB0byBhIFVURi0xNiBMRSBzdHJpbmcuXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl9IHdvcmRBcnJheSBUaGUgd29yZCBhcnJheS5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBVVEYtMTYgTEUgc3RyaW5nLlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEBzdGF0aWNcclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAZXhhbXBsZVxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqICAgICB2YXIgdXRmMTZTdHIgPSBDcnlwdG9KUy5lbmMuVXRmMTZMRS5zdHJpbmdpZnkod29yZEFycmF5KTtcclxuXHQgICAgICAgICAqL1xyXG5cdCAgICAgICAgc3RyaW5naWZ5OiBmdW5jdGlvbiAod29yZEFycmF5KSB7XHJcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXHJcblx0ICAgICAgICAgICAgdmFyIHdvcmRzID0gd29yZEFycmF5LndvcmRzO1xyXG5cdCAgICAgICAgICAgIHZhciBzaWdCeXRlcyA9IHdvcmRBcnJheS5zaWdCeXRlcztcclxuXHJcblx0ICAgICAgICAgICAgLy8gQ29udmVydFxyXG5cdCAgICAgICAgICAgIHZhciB1dGYxNkNoYXJzID0gW107XHJcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaWdCeXRlczsgaSArPSAyKSB7XHJcblx0ICAgICAgICAgICAgICAgIHZhciBjb2RlUG9pbnQgPSBzd2FwRW5kaWFuKCh3b3Jkc1tpID4+PiAyXSA+Pj4gKDE2IC0gKGkgJSA0KSAqIDgpKSAmIDB4ZmZmZik7XHJcblx0ICAgICAgICAgICAgICAgIHV0ZjE2Q2hhcnMucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKGNvZGVQb2ludCkpO1xyXG5cdCAgICAgICAgICAgIH1cclxuXHJcblx0ICAgICAgICAgICAgcmV0dXJuIHV0ZjE2Q2hhcnMuam9pbignJyk7XHJcblx0ICAgICAgICB9LFxyXG5cclxuXHQgICAgICAgIC8qKlxyXG5cdCAgICAgICAgICogQ29udmVydHMgYSBVVEYtMTYgTEUgc3RyaW5nIHRvIGEgd29yZCBhcnJheS5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXRmMTZTdHIgVGhlIFVURi0xNiBMRSBzdHJpbmcuXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgd29yZCBhcnJheS5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAc3RhdGljXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQGV4YW1wbGVcclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmVuYy5VdGYxNkxFLnBhcnNlKHV0ZjE2U3RyKTtcclxuXHQgICAgICAgICAqL1xyXG5cdCAgICAgICAgcGFyc2U6IGZ1bmN0aW9uICh1dGYxNlN0cikge1xyXG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0XHJcblx0ICAgICAgICAgICAgdmFyIHV0ZjE2U3RyTGVuZ3RoID0gdXRmMTZTdHIubGVuZ3RoO1xyXG5cclxuXHQgICAgICAgICAgICAvLyBDb252ZXJ0XHJcblx0ICAgICAgICAgICAgdmFyIHdvcmRzID0gW107XHJcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB1dGYxNlN0ckxlbmd0aDsgaSsrKSB7XHJcblx0ICAgICAgICAgICAgICAgIHdvcmRzW2kgPj4+IDFdIHw9IHN3YXBFbmRpYW4odXRmMTZTdHIuY2hhckNvZGVBdChpKSA8PCAoMTYgLSAoaSAlIDIpICogMTYpKTtcclxuXHQgICAgICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgICAgIHJldHVybiBXb3JkQXJyYXkuY3JlYXRlKHdvcmRzLCB1dGYxNlN0ckxlbmd0aCAqIDIpO1xyXG5cdCAgICAgICAgfVxyXG5cdCAgICB9O1xyXG5cclxuXHQgICAgZnVuY3Rpb24gc3dhcEVuZGlhbih3b3JkKSB7XHJcblx0ICAgICAgICByZXR1cm4gKCh3b3JkIDw8IDgpICYgMHhmZjAwZmYwMCkgfCAoKHdvcmQgPj4+IDgpICYgMHgwMGZmMDBmZik7XHJcblx0ICAgIH1cclxuXHR9KCkpO1xyXG5cclxuXHJcblx0cmV0dXJuIENyeXB0b0pTLmVuYy5VdGYxNjtcclxuXHJcbn0pKTsiLCI7KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XHJcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XHJcblx0XHQvLyBDb21tb25KU1xyXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9jb3JlXCIpKTtcclxuXHR9XHJcblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcclxuXHRcdC8vIEFNRFxyXG5cdFx0ZGVmaW5lKFtcIi4vY29yZVwiXSwgZmFjdG9yeSk7XHJcblx0fVxyXG5cdGVsc2Uge1xyXG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxyXG5cdFx0ZmFjdG9yeShyb290LkNyeXB0b0pTKTtcclxuXHR9XHJcbn0odGhpcywgZnVuY3Rpb24gKENyeXB0b0pTKSB7XHJcblxyXG5cdChmdW5jdGlvbiAoKSB7XHJcblx0ICAgIC8vIFNob3J0Y3V0c1xyXG5cdCAgICB2YXIgQyA9IENyeXB0b0pTO1xyXG5cdCAgICB2YXIgQ19saWIgPSBDLmxpYjtcclxuXHQgICAgdmFyIFdvcmRBcnJheSA9IENfbGliLldvcmRBcnJheTtcclxuXHQgICAgdmFyIENfZW5jID0gQy5lbmM7XHJcblxyXG5cdCAgICAvKipcclxuXHQgICAgICogQmFzZTY0IGVuY29kaW5nIHN0cmF0ZWd5LlxyXG5cdCAgICAgKi9cclxuXHQgICAgdmFyIEJhc2U2NCA9IENfZW5jLkJhc2U2NCA9IHtcclxuXHQgICAgICAgIC8qKlxyXG5cdCAgICAgICAgICogQ29udmVydHMgYSB3b3JkIGFycmF5IHRvIGEgQmFzZTY0IHN0cmluZy5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheX0gd29yZEFycmF5IFRoZSB3b3JkIGFycmF5LlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIEJhc2U2NCBzdHJpbmcuXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQHN0YXRpY1xyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEBleGFtcGxlXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogICAgIHZhciBiYXNlNjRTdHJpbmcgPSBDcnlwdG9KUy5lbmMuQmFzZTY0LnN0cmluZ2lmeSh3b3JkQXJyYXkpO1xyXG5cdCAgICAgICAgICovXHJcblx0ICAgICAgICBzdHJpbmdpZnk6IGZ1bmN0aW9uICh3b3JkQXJyYXkpIHtcclxuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcclxuXHQgICAgICAgICAgICB2YXIgd29yZHMgPSB3b3JkQXJyYXkud29yZHM7XHJcblx0ICAgICAgICAgICAgdmFyIHNpZ0J5dGVzID0gd29yZEFycmF5LnNpZ0J5dGVzO1xyXG5cdCAgICAgICAgICAgIHZhciBtYXAgPSB0aGlzLl9tYXA7XHJcblxyXG5cdCAgICAgICAgICAgIC8vIENsYW1wIGV4Y2VzcyBiaXRzXHJcblx0ICAgICAgICAgICAgd29yZEFycmF5LmNsYW1wKCk7XHJcblxyXG5cdCAgICAgICAgICAgIC8vIENvbnZlcnRcclxuXHQgICAgICAgICAgICB2YXIgYmFzZTY0Q2hhcnMgPSBbXTtcclxuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpZ0J5dGVzOyBpICs9IDMpIHtcclxuXHQgICAgICAgICAgICAgICAgdmFyIGJ5dGUxID0gKHdvcmRzW2kgPj4+IDJdICAgICAgID4+PiAoMjQgLSAoaSAlIDQpICogOCkpICAgICAgICYgMHhmZjtcclxuXHQgICAgICAgICAgICAgICAgdmFyIGJ5dGUyID0gKHdvcmRzWyhpICsgMSkgPj4+IDJdID4+PiAoMjQgLSAoKGkgKyAxKSAlIDQpICogOCkpICYgMHhmZjtcclxuXHQgICAgICAgICAgICAgICAgdmFyIGJ5dGUzID0gKHdvcmRzWyhpICsgMikgPj4+IDJdID4+PiAoMjQgLSAoKGkgKyAyKSAlIDQpICogOCkpICYgMHhmZjtcclxuXHJcblx0ICAgICAgICAgICAgICAgIHZhciB0cmlwbGV0ID0gKGJ5dGUxIDw8IDE2KSB8IChieXRlMiA8PCA4KSB8IGJ5dGUzO1xyXG5cclxuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IChqIDwgNCkgJiYgKGkgKyBqICogMC43NSA8IHNpZ0J5dGVzKTsgaisrKSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICBiYXNlNjRDaGFycy5wdXNoKG1hcC5jaGFyQXQoKHRyaXBsZXQgPj4+ICg2ICogKDMgLSBqKSkpICYgMHgzZikpO1xyXG5cdCAgICAgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgfVxyXG5cclxuXHQgICAgICAgICAgICAvLyBBZGQgcGFkZGluZ1xyXG5cdCAgICAgICAgICAgIHZhciBwYWRkaW5nQ2hhciA9IG1hcC5jaGFyQXQoNjQpO1xyXG5cdCAgICAgICAgICAgIGlmIChwYWRkaW5nQ2hhcikge1xyXG5cdCAgICAgICAgICAgICAgICB3aGlsZSAoYmFzZTY0Q2hhcnMubGVuZ3RoICUgNCkge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgYmFzZTY0Q2hhcnMucHVzaChwYWRkaW5nQ2hhcik7XHJcblx0ICAgICAgICAgICAgICAgIH1cclxuXHQgICAgICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgICAgIHJldHVybiBiYXNlNjRDaGFycy5qb2luKCcnKTtcclxuXHQgICAgICAgIH0sXHJcblxyXG5cdCAgICAgICAgLyoqXHJcblx0ICAgICAgICAgKiBDb252ZXJ0cyBhIEJhc2U2NCBzdHJpbmcgdG8gYSB3b3JkIGFycmF5LlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBiYXNlNjRTdHIgVGhlIEJhc2U2NCBzdHJpbmcuXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgd29yZCBhcnJheS5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAc3RhdGljXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQGV4YW1wbGVcclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiAgICAgdmFyIHdvcmRBcnJheSA9IENyeXB0b0pTLmVuYy5CYXNlNjQucGFyc2UoYmFzZTY0U3RyaW5nKTtcclxuXHQgICAgICAgICAqL1xyXG5cdCAgICAgICAgcGFyc2U6IGZ1bmN0aW9uIChiYXNlNjRTdHIpIHtcclxuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcclxuXHQgICAgICAgICAgICB2YXIgYmFzZTY0U3RyTGVuZ3RoID0gYmFzZTY0U3RyLmxlbmd0aDtcclxuXHQgICAgICAgICAgICB2YXIgbWFwID0gdGhpcy5fbWFwO1xyXG5cdCAgICAgICAgICAgIHZhciByZXZlcnNlTWFwID0gdGhpcy5fcmV2ZXJzZU1hcDtcclxuXHJcblx0ICAgICAgICAgICAgaWYgKCFyZXZlcnNlTWFwKSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICByZXZlcnNlTWFwID0gdGhpcy5fcmV2ZXJzZU1hcCA9IFtdO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBtYXAubGVuZ3RoOyBqKyspIHtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICByZXZlcnNlTWFwW21hcC5jaGFyQ29kZUF0KGopXSA9IGo7XHJcblx0ICAgICAgICAgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgfVxyXG5cclxuXHQgICAgICAgICAgICAvLyBJZ25vcmUgcGFkZGluZ1xyXG5cdCAgICAgICAgICAgIHZhciBwYWRkaW5nQ2hhciA9IG1hcC5jaGFyQXQoNjQpO1xyXG5cdCAgICAgICAgICAgIGlmIChwYWRkaW5nQ2hhcikge1xyXG5cdCAgICAgICAgICAgICAgICB2YXIgcGFkZGluZ0luZGV4ID0gYmFzZTY0U3RyLmluZGV4T2YocGFkZGluZ0NoYXIpO1xyXG5cdCAgICAgICAgICAgICAgICBpZiAocGFkZGluZ0luZGV4ICE9PSAtMSkge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgYmFzZTY0U3RyTGVuZ3RoID0gcGFkZGluZ0luZGV4O1xyXG5cdCAgICAgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgfVxyXG5cclxuXHQgICAgICAgICAgICAvLyBDb252ZXJ0XHJcblx0ICAgICAgICAgICAgcmV0dXJuIHBhcnNlTG9vcChiYXNlNjRTdHIsIGJhc2U2NFN0ckxlbmd0aCwgcmV2ZXJzZU1hcCk7XHJcblxyXG5cdCAgICAgICAgfSxcclxuXHJcblx0ICAgICAgICBfbWFwOiAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0nXHJcblx0ICAgIH07XHJcblxyXG5cdCAgICBmdW5jdGlvbiBwYXJzZUxvb3AoYmFzZTY0U3RyLCBiYXNlNjRTdHJMZW5ndGgsIHJldmVyc2VNYXApIHtcclxuXHQgICAgICB2YXIgd29yZHMgPSBbXTtcclxuXHQgICAgICB2YXIgbkJ5dGVzID0gMDtcclxuXHQgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJhc2U2NFN0ckxlbmd0aDsgaSsrKSB7XHJcblx0ICAgICAgICAgIGlmIChpICUgNCkge1xyXG5cdCAgICAgICAgICAgICAgdmFyIGJpdHMxID0gcmV2ZXJzZU1hcFtiYXNlNjRTdHIuY2hhckNvZGVBdChpIC0gMSldIDw8ICgoaSAlIDQpICogMik7XHJcblx0ICAgICAgICAgICAgICB2YXIgYml0czIgPSByZXZlcnNlTWFwW2Jhc2U2NFN0ci5jaGFyQ29kZUF0KGkpXSA+Pj4gKDYgLSAoaSAlIDQpICogMik7XHJcblx0ICAgICAgICAgICAgICB3b3Jkc1tuQnl0ZXMgPj4+IDJdIHw9IChiaXRzMSB8IGJpdHMyKSA8PCAoMjQgLSAobkJ5dGVzICUgNCkgKiA4KTtcclxuXHQgICAgICAgICAgICAgIG5CeXRlcysrO1xyXG5cdCAgICAgICAgICB9XHJcblx0ICAgICAgfVxyXG5cdCAgICAgIHJldHVybiBXb3JkQXJyYXkuY3JlYXRlKHdvcmRzLCBuQnl0ZXMpO1xyXG5cdCAgICB9XHJcblx0fSgpKTtcclxuXHJcblxyXG5cdHJldHVybiBDcnlwdG9KUy5lbmMuQmFzZTY0O1xyXG5cclxufSkpOyIsIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcclxuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcclxuXHRcdC8vIENvbW1vbkpTXHJcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2NvcmVcIikpO1xyXG5cdH1cclxuXHRlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xyXG5cdFx0Ly8gQU1EXHJcblx0XHRkZWZpbmUoW1wiLi9jb3JlXCJdLCBmYWN0b3J5KTtcclxuXHR9XHJcblx0ZWxzZSB7XHJcblx0XHQvLyBHbG9iYWwgKGJyb3dzZXIpXHJcblx0XHRmYWN0b3J5KHJvb3QuQ3J5cHRvSlMpO1xyXG5cdH1cclxufSh0aGlzLCBmdW5jdGlvbiAoQ3J5cHRvSlMpIHtcclxuXHJcblx0KGZ1bmN0aW9uIChNYXRoKSB7XHJcblx0ICAgIC8vIFNob3J0Y3V0c1xyXG5cdCAgICB2YXIgQyA9IENyeXB0b0pTO1xyXG5cdCAgICB2YXIgQ19saWIgPSBDLmxpYjtcclxuXHQgICAgdmFyIFdvcmRBcnJheSA9IENfbGliLldvcmRBcnJheTtcclxuXHQgICAgdmFyIEhhc2hlciA9IENfbGliLkhhc2hlcjtcclxuXHQgICAgdmFyIENfYWxnbyA9IEMuYWxnbztcclxuXHJcblx0ICAgIC8vIENvbnN0YW50cyB0YWJsZVxyXG5cdCAgICB2YXIgVCA9IFtdO1xyXG5cclxuXHQgICAgLy8gQ29tcHV0ZSBjb25zdGFudHNcclxuXHQgICAgKGZ1bmN0aW9uICgpIHtcclxuXHQgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNjQ7IGkrKykge1xyXG5cdCAgICAgICAgICAgIFRbaV0gPSAoTWF0aC5hYnMoTWF0aC5zaW4oaSArIDEpKSAqIDB4MTAwMDAwMDAwKSB8IDA7XHJcblx0ICAgICAgICB9XHJcblx0ICAgIH0oKSk7XHJcblxyXG5cdCAgICAvKipcclxuXHQgICAgICogTUQ1IGhhc2ggYWxnb3JpdGhtLlxyXG5cdCAgICAgKi9cclxuXHQgICAgdmFyIE1ENSA9IENfYWxnby5NRDUgPSBIYXNoZXIuZXh0ZW5kKHtcclxuXHQgICAgICAgIF9kb1Jlc2V0OiBmdW5jdGlvbiAoKSB7XHJcblx0ICAgICAgICAgICAgdGhpcy5faGFzaCA9IG5ldyBXb3JkQXJyYXkuaW5pdChbXHJcblx0ICAgICAgICAgICAgICAgIDB4Njc0NTIzMDEsIDB4ZWZjZGFiODksXHJcblx0ICAgICAgICAgICAgICAgIDB4OThiYWRjZmUsIDB4MTAzMjU0NzZcclxuXHQgICAgICAgICAgICBdKTtcclxuXHQgICAgICAgIH0sXHJcblxyXG5cdCAgICAgICAgX2RvUHJvY2Vzc0Jsb2NrOiBmdW5jdGlvbiAoTSwgb2Zmc2V0KSB7XHJcblx0ICAgICAgICAgICAgLy8gU3dhcCBlbmRpYW5cclxuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDE2OyBpKyspIHtcclxuXHQgICAgICAgICAgICAgICAgLy8gU2hvcnRjdXRzXHJcblx0ICAgICAgICAgICAgICAgIHZhciBvZmZzZXRfaSA9IG9mZnNldCArIGk7XHJcblx0ICAgICAgICAgICAgICAgIHZhciBNX29mZnNldF9pID0gTVtvZmZzZXRfaV07XHJcblxyXG5cdCAgICAgICAgICAgICAgICBNW29mZnNldF9pXSA9IChcclxuXHQgICAgICAgICAgICAgICAgICAgICgoKE1fb2Zmc2V0X2kgPDwgOCkgIHwgKE1fb2Zmc2V0X2kgPj4+IDI0KSkgJiAweDAwZmYwMGZmKSB8XHJcblx0ICAgICAgICAgICAgICAgICAgICAoKChNX29mZnNldF9pIDw8IDI0KSB8IChNX29mZnNldF9pID4+PiA4KSkgICYgMHhmZjAwZmYwMClcclxuXHQgICAgICAgICAgICAgICAgKTtcclxuXHQgICAgICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xyXG5cdCAgICAgICAgICAgIHZhciBIID0gdGhpcy5faGFzaC53b3JkcztcclxuXHJcblx0ICAgICAgICAgICAgdmFyIE1fb2Zmc2V0XzAgID0gTVtvZmZzZXQgKyAwXTtcclxuXHQgICAgICAgICAgICB2YXIgTV9vZmZzZXRfMSAgPSBNW29mZnNldCArIDFdO1xyXG5cdCAgICAgICAgICAgIHZhciBNX29mZnNldF8yICA9IE1bb2Zmc2V0ICsgMl07XHJcblx0ICAgICAgICAgICAgdmFyIE1fb2Zmc2V0XzMgID0gTVtvZmZzZXQgKyAzXTtcclxuXHQgICAgICAgICAgICB2YXIgTV9vZmZzZXRfNCAgPSBNW29mZnNldCArIDRdO1xyXG5cdCAgICAgICAgICAgIHZhciBNX29mZnNldF81ICA9IE1bb2Zmc2V0ICsgNV07XHJcblx0ICAgICAgICAgICAgdmFyIE1fb2Zmc2V0XzYgID0gTVtvZmZzZXQgKyA2XTtcclxuXHQgICAgICAgICAgICB2YXIgTV9vZmZzZXRfNyAgPSBNW29mZnNldCArIDddO1xyXG5cdCAgICAgICAgICAgIHZhciBNX29mZnNldF84ICA9IE1bb2Zmc2V0ICsgOF07XHJcblx0ICAgICAgICAgICAgdmFyIE1fb2Zmc2V0XzkgID0gTVtvZmZzZXQgKyA5XTtcclxuXHQgICAgICAgICAgICB2YXIgTV9vZmZzZXRfMTAgPSBNW29mZnNldCArIDEwXTtcclxuXHQgICAgICAgICAgICB2YXIgTV9vZmZzZXRfMTEgPSBNW29mZnNldCArIDExXTtcclxuXHQgICAgICAgICAgICB2YXIgTV9vZmZzZXRfMTIgPSBNW29mZnNldCArIDEyXTtcclxuXHQgICAgICAgICAgICB2YXIgTV9vZmZzZXRfMTMgPSBNW29mZnNldCArIDEzXTtcclxuXHQgICAgICAgICAgICB2YXIgTV9vZmZzZXRfMTQgPSBNW29mZnNldCArIDE0XTtcclxuXHQgICAgICAgICAgICB2YXIgTV9vZmZzZXRfMTUgPSBNW29mZnNldCArIDE1XTtcclxuXHJcblx0ICAgICAgICAgICAgLy8gV29ya2luZyB2YXJpYWxiZXNcclxuXHQgICAgICAgICAgICB2YXIgYSA9IEhbMF07XHJcblx0ICAgICAgICAgICAgdmFyIGIgPSBIWzFdO1xyXG5cdCAgICAgICAgICAgIHZhciBjID0gSFsyXTtcclxuXHQgICAgICAgICAgICB2YXIgZCA9IEhbM107XHJcblxyXG5cdCAgICAgICAgICAgIC8vIENvbXB1dGF0aW9uXHJcblx0ICAgICAgICAgICAgYSA9IEZGKGEsIGIsIGMsIGQsIE1fb2Zmc2V0XzAsICA3LCAgVFswXSk7XHJcblx0ICAgICAgICAgICAgZCA9IEZGKGQsIGEsIGIsIGMsIE1fb2Zmc2V0XzEsICAxMiwgVFsxXSk7XHJcblx0ICAgICAgICAgICAgYyA9IEZGKGMsIGQsIGEsIGIsIE1fb2Zmc2V0XzIsICAxNywgVFsyXSk7XHJcblx0ICAgICAgICAgICAgYiA9IEZGKGIsIGMsIGQsIGEsIE1fb2Zmc2V0XzMsICAyMiwgVFszXSk7XHJcblx0ICAgICAgICAgICAgYSA9IEZGKGEsIGIsIGMsIGQsIE1fb2Zmc2V0XzQsICA3LCAgVFs0XSk7XHJcblx0ICAgICAgICAgICAgZCA9IEZGKGQsIGEsIGIsIGMsIE1fb2Zmc2V0XzUsICAxMiwgVFs1XSk7XHJcblx0ICAgICAgICAgICAgYyA9IEZGKGMsIGQsIGEsIGIsIE1fb2Zmc2V0XzYsICAxNywgVFs2XSk7XHJcblx0ICAgICAgICAgICAgYiA9IEZGKGIsIGMsIGQsIGEsIE1fb2Zmc2V0XzcsICAyMiwgVFs3XSk7XHJcblx0ICAgICAgICAgICAgYSA9IEZGKGEsIGIsIGMsIGQsIE1fb2Zmc2V0XzgsICA3LCAgVFs4XSk7XHJcblx0ICAgICAgICAgICAgZCA9IEZGKGQsIGEsIGIsIGMsIE1fb2Zmc2V0XzksICAxMiwgVFs5XSk7XHJcblx0ICAgICAgICAgICAgYyA9IEZGKGMsIGQsIGEsIGIsIE1fb2Zmc2V0XzEwLCAxNywgVFsxMF0pO1xyXG5cdCAgICAgICAgICAgIGIgPSBGRihiLCBjLCBkLCBhLCBNX29mZnNldF8xMSwgMjIsIFRbMTFdKTtcclxuXHQgICAgICAgICAgICBhID0gRkYoYSwgYiwgYywgZCwgTV9vZmZzZXRfMTIsIDcsICBUWzEyXSk7XHJcblx0ICAgICAgICAgICAgZCA9IEZGKGQsIGEsIGIsIGMsIE1fb2Zmc2V0XzEzLCAxMiwgVFsxM10pO1xyXG5cdCAgICAgICAgICAgIGMgPSBGRihjLCBkLCBhLCBiLCBNX29mZnNldF8xNCwgMTcsIFRbMTRdKTtcclxuXHQgICAgICAgICAgICBiID0gRkYoYiwgYywgZCwgYSwgTV9vZmZzZXRfMTUsIDIyLCBUWzE1XSk7XHJcblxyXG5cdCAgICAgICAgICAgIGEgPSBHRyhhLCBiLCBjLCBkLCBNX29mZnNldF8xLCAgNSwgIFRbMTZdKTtcclxuXHQgICAgICAgICAgICBkID0gR0coZCwgYSwgYiwgYywgTV9vZmZzZXRfNiwgIDksICBUWzE3XSk7XHJcblx0ICAgICAgICAgICAgYyA9IEdHKGMsIGQsIGEsIGIsIE1fb2Zmc2V0XzExLCAxNCwgVFsxOF0pO1xyXG5cdCAgICAgICAgICAgIGIgPSBHRyhiLCBjLCBkLCBhLCBNX29mZnNldF8wLCAgMjAsIFRbMTldKTtcclxuXHQgICAgICAgICAgICBhID0gR0coYSwgYiwgYywgZCwgTV9vZmZzZXRfNSwgIDUsICBUWzIwXSk7XHJcblx0ICAgICAgICAgICAgZCA9IEdHKGQsIGEsIGIsIGMsIE1fb2Zmc2V0XzEwLCA5LCAgVFsyMV0pO1xyXG5cdCAgICAgICAgICAgIGMgPSBHRyhjLCBkLCBhLCBiLCBNX29mZnNldF8xNSwgMTQsIFRbMjJdKTtcclxuXHQgICAgICAgICAgICBiID0gR0coYiwgYywgZCwgYSwgTV9vZmZzZXRfNCwgIDIwLCBUWzIzXSk7XHJcblx0ICAgICAgICAgICAgYSA9IEdHKGEsIGIsIGMsIGQsIE1fb2Zmc2V0XzksICA1LCAgVFsyNF0pO1xyXG5cdCAgICAgICAgICAgIGQgPSBHRyhkLCBhLCBiLCBjLCBNX29mZnNldF8xNCwgOSwgIFRbMjVdKTtcclxuXHQgICAgICAgICAgICBjID0gR0coYywgZCwgYSwgYiwgTV9vZmZzZXRfMywgIDE0LCBUWzI2XSk7XHJcblx0ICAgICAgICAgICAgYiA9IEdHKGIsIGMsIGQsIGEsIE1fb2Zmc2V0XzgsICAyMCwgVFsyN10pO1xyXG5cdCAgICAgICAgICAgIGEgPSBHRyhhLCBiLCBjLCBkLCBNX29mZnNldF8xMywgNSwgIFRbMjhdKTtcclxuXHQgICAgICAgICAgICBkID0gR0coZCwgYSwgYiwgYywgTV9vZmZzZXRfMiwgIDksICBUWzI5XSk7XHJcblx0ICAgICAgICAgICAgYyA9IEdHKGMsIGQsIGEsIGIsIE1fb2Zmc2V0XzcsICAxNCwgVFszMF0pO1xyXG5cdCAgICAgICAgICAgIGIgPSBHRyhiLCBjLCBkLCBhLCBNX29mZnNldF8xMiwgMjAsIFRbMzFdKTtcclxuXHJcblx0ICAgICAgICAgICAgYSA9IEhIKGEsIGIsIGMsIGQsIE1fb2Zmc2V0XzUsICA0LCAgVFszMl0pO1xyXG5cdCAgICAgICAgICAgIGQgPSBISChkLCBhLCBiLCBjLCBNX29mZnNldF84LCAgMTEsIFRbMzNdKTtcclxuXHQgICAgICAgICAgICBjID0gSEgoYywgZCwgYSwgYiwgTV9vZmZzZXRfMTEsIDE2LCBUWzM0XSk7XHJcblx0ICAgICAgICAgICAgYiA9IEhIKGIsIGMsIGQsIGEsIE1fb2Zmc2V0XzE0LCAyMywgVFszNV0pO1xyXG5cdCAgICAgICAgICAgIGEgPSBISChhLCBiLCBjLCBkLCBNX29mZnNldF8xLCAgNCwgIFRbMzZdKTtcclxuXHQgICAgICAgICAgICBkID0gSEgoZCwgYSwgYiwgYywgTV9vZmZzZXRfNCwgIDExLCBUWzM3XSk7XHJcblx0ICAgICAgICAgICAgYyA9IEhIKGMsIGQsIGEsIGIsIE1fb2Zmc2V0XzcsICAxNiwgVFszOF0pO1xyXG5cdCAgICAgICAgICAgIGIgPSBISChiLCBjLCBkLCBhLCBNX29mZnNldF8xMCwgMjMsIFRbMzldKTtcclxuXHQgICAgICAgICAgICBhID0gSEgoYSwgYiwgYywgZCwgTV9vZmZzZXRfMTMsIDQsICBUWzQwXSk7XHJcblx0ICAgICAgICAgICAgZCA9IEhIKGQsIGEsIGIsIGMsIE1fb2Zmc2V0XzAsICAxMSwgVFs0MV0pO1xyXG5cdCAgICAgICAgICAgIGMgPSBISChjLCBkLCBhLCBiLCBNX29mZnNldF8zLCAgMTYsIFRbNDJdKTtcclxuXHQgICAgICAgICAgICBiID0gSEgoYiwgYywgZCwgYSwgTV9vZmZzZXRfNiwgIDIzLCBUWzQzXSk7XHJcblx0ICAgICAgICAgICAgYSA9IEhIKGEsIGIsIGMsIGQsIE1fb2Zmc2V0XzksICA0LCAgVFs0NF0pO1xyXG5cdCAgICAgICAgICAgIGQgPSBISChkLCBhLCBiLCBjLCBNX29mZnNldF8xMiwgMTEsIFRbNDVdKTtcclxuXHQgICAgICAgICAgICBjID0gSEgoYywgZCwgYSwgYiwgTV9vZmZzZXRfMTUsIDE2LCBUWzQ2XSk7XHJcblx0ICAgICAgICAgICAgYiA9IEhIKGIsIGMsIGQsIGEsIE1fb2Zmc2V0XzIsICAyMywgVFs0N10pO1xyXG5cclxuXHQgICAgICAgICAgICBhID0gSUkoYSwgYiwgYywgZCwgTV9vZmZzZXRfMCwgIDYsICBUWzQ4XSk7XHJcblx0ICAgICAgICAgICAgZCA9IElJKGQsIGEsIGIsIGMsIE1fb2Zmc2V0XzcsICAxMCwgVFs0OV0pO1xyXG5cdCAgICAgICAgICAgIGMgPSBJSShjLCBkLCBhLCBiLCBNX29mZnNldF8xNCwgMTUsIFRbNTBdKTtcclxuXHQgICAgICAgICAgICBiID0gSUkoYiwgYywgZCwgYSwgTV9vZmZzZXRfNSwgIDIxLCBUWzUxXSk7XHJcblx0ICAgICAgICAgICAgYSA9IElJKGEsIGIsIGMsIGQsIE1fb2Zmc2V0XzEyLCA2LCAgVFs1Ml0pO1xyXG5cdCAgICAgICAgICAgIGQgPSBJSShkLCBhLCBiLCBjLCBNX29mZnNldF8zLCAgMTAsIFRbNTNdKTtcclxuXHQgICAgICAgICAgICBjID0gSUkoYywgZCwgYSwgYiwgTV9vZmZzZXRfMTAsIDE1LCBUWzU0XSk7XHJcblx0ICAgICAgICAgICAgYiA9IElJKGIsIGMsIGQsIGEsIE1fb2Zmc2V0XzEsICAyMSwgVFs1NV0pO1xyXG5cdCAgICAgICAgICAgIGEgPSBJSShhLCBiLCBjLCBkLCBNX29mZnNldF84LCAgNiwgIFRbNTZdKTtcclxuXHQgICAgICAgICAgICBkID0gSUkoZCwgYSwgYiwgYywgTV9vZmZzZXRfMTUsIDEwLCBUWzU3XSk7XHJcblx0ICAgICAgICAgICAgYyA9IElJKGMsIGQsIGEsIGIsIE1fb2Zmc2V0XzYsICAxNSwgVFs1OF0pO1xyXG5cdCAgICAgICAgICAgIGIgPSBJSShiLCBjLCBkLCBhLCBNX29mZnNldF8xMywgMjEsIFRbNTldKTtcclxuXHQgICAgICAgICAgICBhID0gSUkoYSwgYiwgYywgZCwgTV9vZmZzZXRfNCwgIDYsICBUWzYwXSk7XHJcblx0ICAgICAgICAgICAgZCA9IElJKGQsIGEsIGIsIGMsIE1fb2Zmc2V0XzExLCAxMCwgVFs2MV0pO1xyXG5cdCAgICAgICAgICAgIGMgPSBJSShjLCBkLCBhLCBiLCBNX29mZnNldF8yLCAgMTUsIFRbNjJdKTtcclxuXHQgICAgICAgICAgICBiID0gSUkoYiwgYywgZCwgYSwgTV9vZmZzZXRfOSwgIDIxLCBUWzYzXSk7XHJcblxyXG5cdCAgICAgICAgICAgIC8vIEludGVybWVkaWF0ZSBoYXNoIHZhbHVlXHJcblx0ICAgICAgICAgICAgSFswXSA9IChIWzBdICsgYSkgfCAwO1xyXG5cdCAgICAgICAgICAgIEhbMV0gPSAoSFsxXSArIGIpIHwgMDtcclxuXHQgICAgICAgICAgICBIWzJdID0gKEhbMl0gKyBjKSB8IDA7XHJcblx0ICAgICAgICAgICAgSFszXSA9IChIWzNdICsgZCkgfCAwO1xyXG5cdCAgICAgICAgfSxcclxuXHJcblx0ICAgICAgICBfZG9GaW5hbGl6ZTogZnVuY3Rpb24gKCkge1xyXG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xyXG5cdCAgICAgICAgICAgIHZhciBkYXRhID0gdGhpcy5fZGF0YTtcclxuXHQgICAgICAgICAgICB2YXIgZGF0YVdvcmRzID0gZGF0YS53b3JkcztcclxuXHJcblx0ICAgICAgICAgICAgdmFyIG5CaXRzVG90YWwgPSB0aGlzLl9uRGF0YUJ5dGVzICogODtcclxuXHQgICAgICAgICAgICB2YXIgbkJpdHNMZWZ0ID0gZGF0YS5zaWdCeXRlcyAqIDg7XHJcblxyXG5cdCAgICAgICAgICAgIC8vIEFkZCBwYWRkaW5nXHJcblx0ICAgICAgICAgICAgZGF0YVdvcmRzW25CaXRzTGVmdCA+Pj4gNV0gfD0gMHg4MCA8PCAoMjQgLSBuQml0c0xlZnQgJSAzMik7XHJcblxyXG5cdCAgICAgICAgICAgIHZhciBuQml0c1RvdGFsSCA9IE1hdGguZmxvb3IobkJpdHNUb3RhbCAvIDB4MTAwMDAwMDAwKTtcclxuXHQgICAgICAgICAgICB2YXIgbkJpdHNUb3RhbEwgPSBuQml0c1RvdGFsO1xyXG5cdCAgICAgICAgICAgIGRhdGFXb3Jkc1soKChuQml0c0xlZnQgKyA2NCkgPj4+IDkpIDw8IDQpICsgMTVdID0gKFxyXG5cdCAgICAgICAgICAgICAgICAoKChuQml0c1RvdGFsSCA8PCA4KSAgfCAobkJpdHNUb3RhbEggPj4+IDI0KSkgJiAweDAwZmYwMGZmKSB8XHJcblx0ICAgICAgICAgICAgICAgICgoKG5CaXRzVG90YWxIIDw8IDI0KSB8IChuQml0c1RvdGFsSCA+Pj4gOCkpICAmIDB4ZmYwMGZmMDApXHJcblx0ICAgICAgICAgICAgKTtcclxuXHQgICAgICAgICAgICBkYXRhV29yZHNbKCgobkJpdHNMZWZ0ICsgNjQpID4+PiA5KSA8PCA0KSArIDE0XSA9IChcclxuXHQgICAgICAgICAgICAgICAgKCgobkJpdHNUb3RhbEwgPDwgOCkgIHwgKG5CaXRzVG90YWxMID4+PiAyNCkpICYgMHgwMGZmMDBmZikgfFxyXG5cdCAgICAgICAgICAgICAgICAoKChuQml0c1RvdGFsTCA8PCAyNCkgfCAobkJpdHNUb3RhbEwgPj4+IDgpKSAgJiAweGZmMDBmZjAwKVxyXG5cdCAgICAgICAgICAgICk7XHJcblxyXG5cdCAgICAgICAgICAgIGRhdGEuc2lnQnl0ZXMgPSAoZGF0YVdvcmRzLmxlbmd0aCArIDEpICogNDtcclxuXHJcblx0ICAgICAgICAgICAgLy8gSGFzaCBmaW5hbCBibG9ja3NcclxuXHQgICAgICAgICAgICB0aGlzLl9wcm9jZXNzKCk7XHJcblxyXG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xyXG5cdCAgICAgICAgICAgIHZhciBoYXNoID0gdGhpcy5faGFzaDtcclxuXHQgICAgICAgICAgICB2YXIgSCA9IGhhc2gud29yZHM7XHJcblxyXG5cdCAgICAgICAgICAgIC8vIFN3YXAgZW5kaWFuXHJcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuXHQgICAgICAgICAgICAgICAgLy8gU2hvcnRjdXRcclxuXHQgICAgICAgICAgICAgICAgdmFyIEhfaSA9IEhbaV07XHJcblxyXG5cdCAgICAgICAgICAgICAgICBIW2ldID0gKCgoSF9pIDw8IDgpICB8IChIX2kgPj4+IDI0KSkgJiAweDAwZmYwMGZmKSB8XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAoKChIX2kgPDwgMjQpIHwgKEhfaSA+Pj4gOCkpICAmIDB4ZmYwMGZmMDApO1xyXG5cdCAgICAgICAgICAgIH1cclxuXHJcblx0ICAgICAgICAgICAgLy8gUmV0dXJuIGZpbmFsIGNvbXB1dGVkIGhhc2hcclxuXHQgICAgICAgICAgICByZXR1cm4gaGFzaDtcclxuXHQgICAgICAgIH0sXHJcblxyXG5cdCAgICAgICAgY2xvbmU6IGZ1bmN0aW9uICgpIHtcclxuXHQgICAgICAgICAgICB2YXIgY2xvbmUgPSBIYXNoZXIuY2xvbmUuY2FsbCh0aGlzKTtcclxuXHQgICAgICAgICAgICBjbG9uZS5faGFzaCA9IHRoaXMuX2hhc2guY2xvbmUoKTtcclxuXHJcblx0ICAgICAgICAgICAgcmV0dXJuIGNsb25lO1xyXG5cdCAgICAgICAgfVxyXG5cdCAgICB9KTtcclxuXHJcblx0ICAgIGZ1bmN0aW9uIEZGKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcclxuXHQgICAgICAgIHZhciBuID0gYSArICgoYiAmIGMpIHwgKH5iICYgZCkpICsgeCArIHQ7XHJcblx0ICAgICAgICByZXR1cm4gKChuIDw8IHMpIHwgKG4gPj4+ICgzMiAtIHMpKSkgKyBiO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICBmdW5jdGlvbiBHRyhhLCBiLCBjLCBkLCB4LCBzLCB0KSB7XHJcblx0ICAgICAgICB2YXIgbiA9IGEgKyAoKGIgJiBkKSB8IChjICYgfmQpKSArIHggKyB0O1xyXG5cdCAgICAgICAgcmV0dXJuICgobiA8PCBzKSB8IChuID4+PiAoMzIgLSBzKSkpICsgYjtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgZnVuY3Rpb24gSEgoYSwgYiwgYywgZCwgeCwgcywgdCkge1xyXG5cdCAgICAgICAgdmFyIG4gPSBhICsgKGIgXiBjIF4gZCkgKyB4ICsgdDtcclxuXHQgICAgICAgIHJldHVybiAoKG4gPDwgcykgfCAobiA+Pj4gKDMyIC0gcykpKSArIGI7XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGZ1bmN0aW9uIElJKGEsIGIsIGMsIGQsIHgsIHMsIHQpIHtcclxuXHQgICAgICAgIHZhciBuID0gYSArIChjIF4gKGIgfCB+ZCkpICsgeCArIHQ7XHJcblx0ICAgICAgICByZXR1cm4gKChuIDw8IHMpIHwgKG4gPj4+ICgzMiAtIHMpKSkgKyBiO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICAvKipcclxuXHQgICAgICogU2hvcnRjdXQgZnVuY3Rpb24gdG8gdGhlIGhhc2hlcidzIG9iamVjdCBpbnRlcmZhY2UuXHJcblx0ICAgICAqXHJcblx0ICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBoYXNoLlxyXG5cdCAgICAgKlxyXG5cdCAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBoYXNoLlxyXG5cdCAgICAgKlxyXG5cdCAgICAgKiBAc3RhdGljXHJcblx0ICAgICAqXHJcblx0ICAgICAqIEBleGFtcGxlXHJcblx0ICAgICAqXHJcblx0ICAgICAqICAgICB2YXIgaGFzaCA9IENyeXB0b0pTLk1ENSgnbWVzc2FnZScpO1xyXG5cdCAgICAgKiAgICAgdmFyIGhhc2ggPSBDcnlwdG9KUy5NRDUod29yZEFycmF5KTtcclxuXHQgICAgICovXHJcblx0ICAgIEMuTUQ1ID0gSGFzaGVyLl9jcmVhdGVIZWxwZXIoTUQ1KTtcclxuXHJcblx0ICAgIC8qKlxyXG5cdCAgICAgKiBTaG9ydGN1dCBmdW5jdGlvbiB0byB0aGUgSE1BQydzIG9iamVjdCBpbnRlcmZhY2UuXHJcblx0ICAgICAqXHJcblx0ICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBoYXNoLlxyXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IGtleSBUaGUgc2VjcmV0IGtleS5cclxuXHQgICAgICpcclxuXHQgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgSE1BQy5cclxuXHQgICAgICpcclxuXHQgICAgICogQHN0YXRpY1xyXG5cdCAgICAgKlxyXG5cdCAgICAgKiBAZXhhbXBsZVxyXG5cdCAgICAgKlxyXG5cdCAgICAgKiAgICAgdmFyIGhtYWMgPSBDcnlwdG9KUy5IbWFjTUQ1KG1lc3NhZ2UsIGtleSk7XHJcblx0ICAgICAqL1xyXG5cdCAgICBDLkhtYWNNRDUgPSBIYXNoZXIuX2NyZWF0ZUhtYWNIZWxwZXIoTUQ1KTtcclxuXHR9KE1hdGgpKTtcclxuXHJcblxyXG5cdHJldHVybiBDcnlwdG9KUy5NRDU7XHJcblxyXG59KSk7IiwiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xyXG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xyXG5cdFx0Ly8gQ29tbW9uSlNcclxuXHRcdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vY29yZVwiKSk7XHJcblx0fVxyXG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XHJcblx0XHQvLyBBTURcclxuXHRcdGRlZmluZShbXCIuL2NvcmVcIl0sIGZhY3RvcnkpO1xyXG5cdH1cclxuXHRlbHNlIHtcclxuXHRcdC8vIEdsb2JhbCAoYnJvd3NlcilcclxuXHRcdGZhY3Rvcnkocm9vdC5DcnlwdG9KUyk7XHJcblx0fVxyXG59KHRoaXMsIGZ1bmN0aW9uIChDcnlwdG9KUykge1xyXG5cclxuXHQoZnVuY3Rpb24gKCkge1xyXG5cdCAgICAvLyBTaG9ydGN1dHNcclxuXHQgICAgdmFyIEMgPSBDcnlwdG9KUztcclxuXHQgICAgdmFyIENfbGliID0gQy5saWI7XHJcblx0ICAgIHZhciBXb3JkQXJyYXkgPSBDX2xpYi5Xb3JkQXJyYXk7XHJcblx0ICAgIHZhciBIYXNoZXIgPSBDX2xpYi5IYXNoZXI7XHJcblx0ICAgIHZhciBDX2FsZ28gPSBDLmFsZ287XHJcblxyXG5cdCAgICAvLyBSZXVzYWJsZSBvYmplY3RcclxuXHQgICAgdmFyIFcgPSBbXTtcclxuXHJcblx0ICAgIC8qKlxyXG5cdCAgICAgKiBTSEEtMSBoYXNoIGFsZ29yaXRobS5cclxuXHQgICAgICovXHJcblx0ICAgIHZhciBTSEExID0gQ19hbGdvLlNIQTEgPSBIYXNoZXIuZXh0ZW5kKHtcclxuXHQgICAgICAgIF9kb1Jlc2V0OiBmdW5jdGlvbiAoKSB7XHJcblx0ICAgICAgICAgICAgdGhpcy5faGFzaCA9IG5ldyBXb3JkQXJyYXkuaW5pdChbXHJcblx0ICAgICAgICAgICAgICAgIDB4Njc0NTIzMDEsIDB4ZWZjZGFiODksXHJcblx0ICAgICAgICAgICAgICAgIDB4OThiYWRjZmUsIDB4MTAzMjU0NzYsXHJcblx0ICAgICAgICAgICAgICAgIDB4YzNkMmUxZjBcclxuXHQgICAgICAgICAgICBdKTtcclxuXHQgICAgICAgIH0sXHJcblxyXG5cdCAgICAgICAgX2RvUHJvY2Vzc0Jsb2NrOiBmdW5jdGlvbiAoTSwgb2Zmc2V0KSB7XHJcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRcclxuXHQgICAgICAgICAgICB2YXIgSCA9IHRoaXMuX2hhc2gud29yZHM7XHJcblxyXG5cdCAgICAgICAgICAgIC8vIFdvcmtpbmcgdmFyaWFibGVzXHJcblx0ICAgICAgICAgICAgdmFyIGEgPSBIWzBdO1xyXG5cdCAgICAgICAgICAgIHZhciBiID0gSFsxXTtcclxuXHQgICAgICAgICAgICB2YXIgYyA9IEhbMl07XHJcblx0ICAgICAgICAgICAgdmFyIGQgPSBIWzNdO1xyXG5cdCAgICAgICAgICAgIHZhciBlID0gSFs0XTtcclxuXHJcblx0ICAgICAgICAgICAgLy8gQ29tcHV0YXRpb25cclxuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDgwOyBpKyspIHtcclxuXHQgICAgICAgICAgICAgICAgaWYgKGkgPCAxNikge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgV1tpXSA9IE1bb2Zmc2V0ICsgaV0gfCAwO1xyXG5cdCAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIG4gPSBXW2kgLSAzXSBeIFdbaSAtIDhdIF4gV1tpIC0gMTRdIF4gV1tpIC0gMTZdO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgV1tpXSA9IChuIDw8IDEpIHwgKG4gPj4+IDMxKTtcclxuXHQgICAgICAgICAgICAgICAgfVxyXG5cclxuXHQgICAgICAgICAgICAgICAgdmFyIHQgPSAoKGEgPDwgNSkgfCAoYSA+Pj4gMjcpKSArIGUgKyBXW2ldO1xyXG5cdCAgICAgICAgICAgICAgICBpZiAoaSA8IDIwKSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICB0ICs9ICgoYiAmIGMpIHwgKH5iICYgZCkpICsgMHg1YTgyNzk5OTtcclxuXHQgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpIDwgNDApIHtcclxuXHQgICAgICAgICAgICAgICAgICAgIHQgKz0gKGIgXiBjIF4gZCkgKyAweDZlZDllYmExO1xyXG5cdCAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGkgPCA2MCkge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgdCArPSAoKGIgJiBjKSB8IChiICYgZCkgfCAoYyAmIGQpKSAtIDB4NzBlNDQzMjQ7XHJcblx0ICAgICAgICAgICAgICAgIH0gZWxzZSAvKiBpZiAoaSA8IDgwKSAqLyB7XHJcblx0ICAgICAgICAgICAgICAgICAgICB0ICs9IChiIF4gYyBeIGQpIC0gMHgzNTlkM2UyYTtcclxuXHQgICAgICAgICAgICAgICAgfVxyXG5cclxuXHQgICAgICAgICAgICAgICAgZSA9IGQ7XHJcblx0ICAgICAgICAgICAgICAgIGQgPSBjO1xyXG5cdCAgICAgICAgICAgICAgICBjID0gKGIgPDwgMzApIHwgKGIgPj4+IDIpO1xyXG5cdCAgICAgICAgICAgICAgICBiID0gYTtcclxuXHQgICAgICAgICAgICAgICAgYSA9IHQ7XHJcblx0ICAgICAgICAgICAgfVxyXG5cclxuXHQgICAgICAgICAgICAvLyBJbnRlcm1lZGlhdGUgaGFzaCB2YWx1ZVxyXG5cdCAgICAgICAgICAgIEhbMF0gPSAoSFswXSArIGEpIHwgMDtcclxuXHQgICAgICAgICAgICBIWzFdID0gKEhbMV0gKyBiKSB8IDA7XHJcblx0ICAgICAgICAgICAgSFsyXSA9IChIWzJdICsgYykgfCAwO1xyXG5cdCAgICAgICAgICAgIEhbM10gPSAoSFszXSArIGQpIHwgMDtcclxuXHQgICAgICAgICAgICBIWzRdID0gKEhbNF0gKyBlKSB8IDA7XHJcblx0ICAgICAgICB9LFxyXG5cclxuXHQgICAgICAgIF9kb0ZpbmFsaXplOiBmdW5jdGlvbiAoKSB7XHJcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXHJcblx0ICAgICAgICAgICAgdmFyIGRhdGEgPSB0aGlzLl9kYXRhO1xyXG5cdCAgICAgICAgICAgIHZhciBkYXRhV29yZHMgPSBkYXRhLndvcmRzO1xyXG5cclxuXHQgICAgICAgICAgICB2YXIgbkJpdHNUb3RhbCA9IHRoaXMuX25EYXRhQnl0ZXMgKiA4O1xyXG5cdCAgICAgICAgICAgIHZhciBuQml0c0xlZnQgPSBkYXRhLnNpZ0J5dGVzICogODtcclxuXHJcblx0ICAgICAgICAgICAgLy8gQWRkIHBhZGRpbmdcclxuXHQgICAgICAgICAgICBkYXRhV29yZHNbbkJpdHNMZWZ0ID4+PiA1XSB8PSAweDgwIDw8ICgyNCAtIG5CaXRzTGVmdCAlIDMyKTtcclxuXHQgICAgICAgICAgICBkYXRhV29yZHNbKCgobkJpdHNMZWZ0ICsgNjQpID4+PiA5KSA8PCA0KSArIDE0XSA9IE1hdGguZmxvb3IobkJpdHNUb3RhbCAvIDB4MTAwMDAwMDAwKTtcclxuXHQgICAgICAgICAgICBkYXRhV29yZHNbKCgobkJpdHNMZWZ0ICsgNjQpID4+PiA5KSA8PCA0KSArIDE1XSA9IG5CaXRzVG90YWw7XHJcblx0ICAgICAgICAgICAgZGF0YS5zaWdCeXRlcyA9IGRhdGFXb3Jkcy5sZW5ndGggKiA0O1xyXG5cclxuXHQgICAgICAgICAgICAvLyBIYXNoIGZpbmFsIGJsb2Nrc1xyXG5cdCAgICAgICAgICAgIHRoaXMuX3Byb2Nlc3MoKTtcclxuXHJcblx0ICAgICAgICAgICAgLy8gUmV0dXJuIGZpbmFsIGNvbXB1dGVkIGhhc2hcclxuXHQgICAgICAgICAgICByZXR1cm4gdGhpcy5faGFzaDtcclxuXHQgICAgICAgIH0sXHJcblxyXG5cdCAgICAgICAgY2xvbmU6IGZ1bmN0aW9uICgpIHtcclxuXHQgICAgICAgICAgICB2YXIgY2xvbmUgPSBIYXNoZXIuY2xvbmUuY2FsbCh0aGlzKTtcclxuXHQgICAgICAgICAgICBjbG9uZS5faGFzaCA9IHRoaXMuX2hhc2guY2xvbmUoKTtcclxuXHJcblx0ICAgICAgICAgICAgcmV0dXJuIGNsb25lO1xyXG5cdCAgICAgICAgfVxyXG5cdCAgICB9KTtcclxuXHJcblx0ICAgIC8qKlxyXG5cdCAgICAgKiBTaG9ydGN1dCBmdW5jdGlvbiB0byB0aGUgaGFzaGVyJ3Mgb2JqZWN0IGludGVyZmFjZS5cclxuXHQgICAgICpcclxuXHQgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGhhc2guXHJcblx0ICAgICAqXHJcblx0ICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIGhhc2guXHJcblx0ICAgICAqXHJcblx0ICAgICAqIEBzdGF0aWNcclxuXHQgICAgICpcclxuXHQgICAgICogQGV4YW1wbGVcclxuXHQgICAgICpcclxuXHQgICAgICogICAgIHZhciBoYXNoID0gQ3J5cHRvSlMuU0hBMSgnbWVzc2FnZScpO1xyXG5cdCAgICAgKiAgICAgdmFyIGhhc2ggPSBDcnlwdG9KUy5TSEExKHdvcmRBcnJheSk7XHJcblx0ICAgICAqL1xyXG5cdCAgICBDLlNIQTEgPSBIYXNoZXIuX2NyZWF0ZUhlbHBlcihTSEExKTtcclxuXHJcblx0ICAgIC8qKlxyXG5cdCAgICAgKiBTaG9ydGN1dCBmdW5jdGlvbiB0byB0aGUgSE1BQydzIG9iamVjdCBpbnRlcmZhY2UuXHJcblx0ICAgICAqXHJcblx0ICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBoYXNoLlxyXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IGtleSBUaGUgc2VjcmV0IGtleS5cclxuXHQgICAgICpcclxuXHQgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgSE1BQy5cclxuXHQgICAgICpcclxuXHQgICAgICogQHN0YXRpY1xyXG5cdCAgICAgKlxyXG5cdCAgICAgKiBAZXhhbXBsZVxyXG5cdCAgICAgKlxyXG5cdCAgICAgKiAgICAgdmFyIGhtYWMgPSBDcnlwdG9KUy5IbWFjU0hBMShtZXNzYWdlLCBrZXkpO1xyXG5cdCAgICAgKi9cclxuXHQgICAgQy5IbWFjU0hBMSA9IEhhc2hlci5fY3JlYXRlSG1hY0hlbHBlcihTSEExKTtcclxuXHR9KCkpO1xyXG5cclxuXHJcblx0cmV0dXJuIENyeXB0b0pTLlNIQTE7XHJcblxyXG59KSk7IiwiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xyXG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xyXG5cdFx0Ly8gQ29tbW9uSlNcclxuXHRcdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vY29yZVwiKSk7XHJcblx0fVxyXG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XHJcblx0XHQvLyBBTURcclxuXHRcdGRlZmluZShbXCIuL2NvcmVcIl0sIGZhY3RvcnkpO1xyXG5cdH1cclxuXHRlbHNlIHtcclxuXHRcdC8vIEdsb2JhbCAoYnJvd3NlcilcclxuXHRcdGZhY3Rvcnkocm9vdC5DcnlwdG9KUyk7XHJcblx0fVxyXG59KHRoaXMsIGZ1bmN0aW9uIChDcnlwdG9KUykge1xyXG5cclxuXHQoZnVuY3Rpb24gKE1hdGgpIHtcclxuXHQgICAgLy8gU2hvcnRjdXRzXHJcblx0ICAgIHZhciBDID0gQ3J5cHRvSlM7XHJcblx0ICAgIHZhciBDX2xpYiA9IEMubGliO1xyXG5cdCAgICB2YXIgV29yZEFycmF5ID0gQ19saWIuV29yZEFycmF5O1xyXG5cdCAgICB2YXIgSGFzaGVyID0gQ19saWIuSGFzaGVyO1xyXG5cdCAgICB2YXIgQ19hbGdvID0gQy5hbGdvO1xyXG5cclxuXHQgICAgLy8gSW5pdGlhbGl6YXRpb24gYW5kIHJvdW5kIGNvbnN0YW50cyB0YWJsZXNcclxuXHQgICAgdmFyIEggPSBbXTtcclxuXHQgICAgdmFyIEsgPSBbXTtcclxuXHJcblx0ICAgIC8vIENvbXB1dGUgY29uc3RhbnRzXHJcblx0ICAgIChmdW5jdGlvbiAoKSB7XHJcblx0ICAgICAgICBmdW5jdGlvbiBpc1ByaW1lKG4pIHtcclxuXHQgICAgICAgICAgICB2YXIgc3FydE4gPSBNYXRoLnNxcnQobik7XHJcblx0ICAgICAgICAgICAgZm9yICh2YXIgZmFjdG9yID0gMjsgZmFjdG9yIDw9IHNxcnROOyBmYWN0b3IrKykge1xyXG5cdCAgICAgICAgICAgICAgICBpZiAoIShuICUgZmFjdG9yKSkge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cdCAgICAgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgfVxyXG5cclxuXHQgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuXHQgICAgICAgIH1cclxuXHJcblx0ICAgICAgICBmdW5jdGlvbiBnZXRGcmFjdGlvbmFsQml0cyhuKSB7XHJcblx0ICAgICAgICAgICAgcmV0dXJuICgobiAtIChuIHwgMCkpICogMHgxMDAwMDAwMDApIHwgMDtcclxuXHQgICAgICAgIH1cclxuXHJcblx0ICAgICAgICB2YXIgbiA9IDI7XHJcblx0ICAgICAgICB2YXIgblByaW1lID0gMDtcclxuXHQgICAgICAgIHdoaWxlIChuUHJpbWUgPCA2NCkge1xyXG5cdCAgICAgICAgICAgIGlmIChpc1ByaW1lKG4pKSB7XHJcblx0ICAgICAgICAgICAgICAgIGlmIChuUHJpbWUgPCA4KSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICBIW25QcmltZV0gPSBnZXRGcmFjdGlvbmFsQml0cyhNYXRoLnBvdyhuLCAxIC8gMikpO1xyXG5cdCAgICAgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgICAgIEtbblByaW1lXSA9IGdldEZyYWN0aW9uYWxCaXRzKE1hdGgucG93KG4sIDEgLyAzKSk7XHJcblxyXG5cdCAgICAgICAgICAgICAgICBuUHJpbWUrKztcclxuXHQgICAgICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgICAgIG4rKztcclxuXHQgICAgICAgIH1cclxuXHQgICAgfSgpKTtcclxuXHJcblx0ICAgIC8vIFJldXNhYmxlIG9iamVjdFxyXG5cdCAgICB2YXIgVyA9IFtdO1xyXG5cclxuXHQgICAgLyoqXHJcblx0ICAgICAqIFNIQS0yNTYgaGFzaCBhbGdvcml0aG0uXHJcblx0ICAgICAqL1xyXG5cdCAgICB2YXIgU0hBMjU2ID0gQ19hbGdvLlNIQTI1NiA9IEhhc2hlci5leHRlbmQoe1xyXG5cdCAgICAgICAgX2RvUmVzZXQ6IGZ1bmN0aW9uICgpIHtcclxuXHQgICAgICAgICAgICB0aGlzLl9oYXNoID0gbmV3IFdvcmRBcnJheS5pbml0KEguc2xpY2UoMCkpO1xyXG5cdCAgICAgICAgfSxcclxuXHJcblx0ICAgICAgICBfZG9Qcm9jZXNzQmxvY2s6IGZ1bmN0aW9uIChNLCBvZmZzZXQpIHtcclxuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dFxyXG5cdCAgICAgICAgICAgIHZhciBIID0gdGhpcy5faGFzaC53b3JkcztcclxuXHJcblx0ICAgICAgICAgICAgLy8gV29ya2luZyB2YXJpYWJsZXNcclxuXHQgICAgICAgICAgICB2YXIgYSA9IEhbMF07XHJcblx0ICAgICAgICAgICAgdmFyIGIgPSBIWzFdO1xyXG5cdCAgICAgICAgICAgIHZhciBjID0gSFsyXTtcclxuXHQgICAgICAgICAgICB2YXIgZCA9IEhbM107XHJcblx0ICAgICAgICAgICAgdmFyIGUgPSBIWzRdO1xyXG5cdCAgICAgICAgICAgIHZhciBmID0gSFs1XTtcclxuXHQgICAgICAgICAgICB2YXIgZyA9IEhbNl07XHJcblx0ICAgICAgICAgICAgdmFyIGggPSBIWzddO1xyXG5cclxuXHQgICAgICAgICAgICAvLyBDb21wdXRhdGlvblxyXG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNjQ7IGkrKykge1xyXG5cdCAgICAgICAgICAgICAgICBpZiAoaSA8IDE2KSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICBXW2ldID0gTVtvZmZzZXQgKyBpXSB8IDA7XHJcblx0ICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgZ2FtbWEweCA9IFdbaSAtIDE1XTtcclxuXHQgICAgICAgICAgICAgICAgICAgIHZhciBnYW1tYTAgID0gKChnYW1tYTB4IDw8IDI1KSB8IChnYW1tYTB4ID4+PiA3KSkgIF5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKChnYW1tYTB4IDw8IDE0KSB8IChnYW1tYTB4ID4+PiAxOCkpIF5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChnYW1tYTB4ID4+PiAzKTtcclxuXHJcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgZ2FtbWExeCA9IFdbaSAtIDJdO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGdhbW1hMSAgPSAoKGdhbW1hMXggPDwgMTUpIHwgKGdhbW1hMXggPj4+IDE3KSkgXlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoKGdhbW1hMXggPDwgMTMpIHwgKGdhbW1hMXggPj4+IDE5KSkgXlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGdhbW1hMXggPj4+IDEwKTtcclxuXHJcblx0ICAgICAgICAgICAgICAgICAgICBXW2ldID0gZ2FtbWEwICsgV1tpIC0gN10gKyBnYW1tYTEgKyBXW2kgLSAxNl07XHJcblx0ICAgICAgICAgICAgICAgIH1cclxuXHJcblx0ICAgICAgICAgICAgICAgIHZhciBjaCAgPSAoZSAmIGYpIF4gKH5lICYgZyk7XHJcblx0ICAgICAgICAgICAgICAgIHZhciBtYWogPSAoYSAmIGIpIF4gKGEgJiBjKSBeIChiICYgYyk7XHJcblxyXG5cdCAgICAgICAgICAgICAgICB2YXIgc2lnbWEwID0gKChhIDw8IDMwKSB8IChhID4+PiAyKSkgXiAoKGEgPDwgMTkpIHwgKGEgPj4+IDEzKSkgXiAoKGEgPDwgMTApIHwgKGEgPj4+IDIyKSk7XHJcblx0ICAgICAgICAgICAgICAgIHZhciBzaWdtYTEgPSAoKGUgPDwgMjYpIHwgKGUgPj4+IDYpKSBeICgoZSA8PCAyMSkgfCAoZSA+Pj4gMTEpKSBeICgoZSA8PCA3KSAgfCAoZSA+Pj4gMjUpKTtcclxuXHJcblx0ICAgICAgICAgICAgICAgIHZhciB0MSA9IGggKyBzaWdtYTEgKyBjaCArIEtbaV0gKyBXW2ldO1xyXG5cdCAgICAgICAgICAgICAgICB2YXIgdDIgPSBzaWdtYTAgKyBtYWo7XHJcblxyXG5cdCAgICAgICAgICAgICAgICBoID0gZztcclxuXHQgICAgICAgICAgICAgICAgZyA9IGY7XHJcblx0ICAgICAgICAgICAgICAgIGYgPSBlO1xyXG5cdCAgICAgICAgICAgICAgICBlID0gKGQgKyB0MSkgfCAwO1xyXG5cdCAgICAgICAgICAgICAgICBkID0gYztcclxuXHQgICAgICAgICAgICAgICAgYyA9IGI7XHJcblx0ICAgICAgICAgICAgICAgIGIgPSBhO1xyXG5cdCAgICAgICAgICAgICAgICBhID0gKHQxICsgdDIpIHwgMDtcclxuXHQgICAgICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgICAgIC8vIEludGVybWVkaWF0ZSBoYXNoIHZhbHVlXHJcblx0ICAgICAgICAgICAgSFswXSA9IChIWzBdICsgYSkgfCAwO1xyXG5cdCAgICAgICAgICAgIEhbMV0gPSAoSFsxXSArIGIpIHwgMDtcclxuXHQgICAgICAgICAgICBIWzJdID0gKEhbMl0gKyBjKSB8IDA7XHJcblx0ICAgICAgICAgICAgSFszXSA9IChIWzNdICsgZCkgfCAwO1xyXG5cdCAgICAgICAgICAgIEhbNF0gPSAoSFs0XSArIGUpIHwgMDtcclxuXHQgICAgICAgICAgICBIWzVdID0gKEhbNV0gKyBmKSB8IDA7XHJcblx0ICAgICAgICAgICAgSFs2XSA9IChIWzZdICsgZykgfCAwO1xyXG5cdCAgICAgICAgICAgIEhbN10gPSAoSFs3XSArIGgpIHwgMDtcclxuXHQgICAgICAgIH0sXHJcblxyXG5cdCAgICAgICAgX2RvRmluYWxpemU6IGZ1bmN0aW9uICgpIHtcclxuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcclxuXHQgICAgICAgICAgICB2YXIgZGF0YSA9IHRoaXMuX2RhdGE7XHJcblx0ICAgICAgICAgICAgdmFyIGRhdGFXb3JkcyA9IGRhdGEud29yZHM7XHJcblxyXG5cdCAgICAgICAgICAgIHZhciBuQml0c1RvdGFsID0gdGhpcy5fbkRhdGFCeXRlcyAqIDg7XHJcblx0ICAgICAgICAgICAgdmFyIG5CaXRzTGVmdCA9IGRhdGEuc2lnQnl0ZXMgKiA4O1xyXG5cclxuXHQgICAgICAgICAgICAvLyBBZGQgcGFkZGluZ1xyXG5cdCAgICAgICAgICAgIGRhdGFXb3Jkc1tuQml0c0xlZnQgPj4+IDVdIHw9IDB4ODAgPDwgKDI0IC0gbkJpdHNMZWZ0ICUgMzIpO1xyXG5cdCAgICAgICAgICAgIGRhdGFXb3Jkc1soKChuQml0c0xlZnQgKyA2NCkgPj4+IDkpIDw8IDQpICsgMTRdID0gTWF0aC5mbG9vcihuQml0c1RvdGFsIC8gMHgxMDAwMDAwMDApO1xyXG5cdCAgICAgICAgICAgIGRhdGFXb3Jkc1soKChuQml0c0xlZnQgKyA2NCkgPj4+IDkpIDw8IDQpICsgMTVdID0gbkJpdHNUb3RhbDtcclxuXHQgICAgICAgICAgICBkYXRhLnNpZ0J5dGVzID0gZGF0YVdvcmRzLmxlbmd0aCAqIDQ7XHJcblxyXG5cdCAgICAgICAgICAgIC8vIEhhc2ggZmluYWwgYmxvY2tzXHJcblx0ICAgICAgICAgICAgdGhpcy5fcHJvY2VzcygpO1xyXG5cclxuXHQgICAgICAgICAgICAvLyBSZXR1cm4gZmluYWwgY29tcHV0ZWQgaGFzaFxyXG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzLl9oYXNoO1xyXG5cdCAgICAgICAgfSxcclxuXHJcblx0ICAgICAgICBjbG9uZTogZnVuY3Rpb24gKCkge1xyXG5cdCAgICAgICAgICAgIHZhciBjbG9uZSA9IEhhc2hlci5jbG9uZS5jYWxsKHRoaXMpO1xyXG5cdCAgICAgICAgICAgIGNsb25lLl9oYXNoID0gdGhpcy5faGFzaC5jbG9uZSgpO1xyXG5cclxuXHQgICAgICAgICAgICByZXR1cm4gY2xvbmU7XHJcblx0ICAgICAgICB9XHJcblx0ICAgIH0pO1xyXG5cclxuXHQgICAgLyoqXHJcblx0ICAgICAqIFNob3J0Y3V0IGZ1bmN0aW9uIHRvIHRoZSBoYXNoZXIncyBvYmplY3QgaW50ZXJmYWNlLlxyXG5cdCAgICAgKlxyXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gaGFzaC5cclxuXHQgICAgICpcclxuXHQgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgaGFzaC5cclxuXHQgICAgICpcclxuXHQgICAgICogQHN0YXRpY1xyXG5cdCAgICAgKlxyXG5cdCAgICAgKiBAZXhhbXBsZVxyXG5cdCAgICAgKlxyXG5cdCAgICAgKiAgICAgdmFyIGhhc2ggPSBDcnlwdG9KUy5TSEEyNTYoJ21lc3NhZ2UnKTtcclxuXHQgICAgICogICAgIHZhciBoYXNoID0gQ3J5cHRvSlMuU0hBMjU2KHdvcmRBcnJheSk7XHJcblx0ICAgICAqL1xyXG5cdCAgICBDLlNIQTI1NiA9IEhhc2hlci5fY3JlYXRlSGVscGVyKFNIQTI1Nik7XHJcblxyXG5cdCAgICAvKipcclxuXHQgICAgICogU2hvcnRjdXQgZnVuY3Rpb24gdG8gdGhlIEhNQUMncyBvYmplY3QgaW50ZXJmYWNlLlxyXG5cdCAgICAgKlxyXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gaGFzaC5cclxuXHQgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBrZXkgVGhlIHNlY3JldCBrZXkuXHJcblx0ICAgICAqXHJcblx0ICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIEhNQUMuXHJcblx0ICAgICAqXHJcblx0ICAgICAqIEBzdGF0aWNcclxuXHQgICAgICpcclxuXHQgICAgICogQGV4YW1wbGVcclxuXHQgICAgICpcclxuXHQgICAgICogICAgIHZhciBobWFjID0gQ3J5cHRvSlMuSG1hY1NIQTI1NihtZXNzYWdlLCBrZXkpO1xyXG5cdCAgICAgKi9cclxuXHQgICAgQy5IbWFjU0hBMjU2ID0gSGFzaGVyLl9jcmVhdGVIbWFjSGVscGVyKFNIQTI1Nik7XHJcblx0fShNYXRoKSk7XHJcblxyXG5cclxuXHRyZXR1cm4gQ3J5cHRvSlMuU0hBMjU2O1xyXG5cclxufSkpOyIsIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnksIHVuZGVmKSB7XHJcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XHJcblx0XHQvLyBDb21tb25KU1xyXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9jb3JlXCIpLCByZXF1aXJlKFwiLi9zaGEyNTZcIikpO1xyXG5cdH1cclxuXHRlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xyXG5cdFx0Ly8gQU1EXHJcblx0XHRkZWZpbmUoW1wiLi9jb3JlXCIsIFwiLi9zaGEyNTZcIl0sIGZhY3RvcnkpO1xyXG5cdH1cclxuXHRlbHNlIHtcclxuXHRcdC8vIEdsb2JhbCAoYnJvd3NlcilcclxuXHRcdGZhY3Rvcnkocm9vdC5DcnlwdG9KUyk7XHJcblx0fVxyXG59KHRoaXMsIGZ1bmN0aW9uIChDcnlwdG9KUykge1xyXG5cclxuXHQoZnVuY3Rpb24gKCkge1xyXG5cdCAgICAvLyBTaG9ydGN1dHNcclxuXHQgICAgdmFyIEMgPSBDcnlwdG9KUztcclxuXHQgICAgdmFyIENfbGliID0gQy5saWI7XHJcblx0ICAgIHZhciBXb3JkQXJyYXkgPSBDX2xpYi5Xb3JkQXJyYXk7XHJcblx0ICAgIHZhciBDX2FsZ28gPSBDLmFsZ287XHJcblx0ICAgIHZhciBTSEEyNTYgPSBDX2FsZ28uU0hBMjU2O1xyXG5cclxuXHQgICAgLyoqXHJcblx0ICAgICAqIFNIQS0yMjQgaGFzaCBhbGdvcml0aG0uXHJcblx0ICAgICAqL1xyXG5cdCAgICB2YXIgU0hBMjI0ID0gQ19hbGdvLlNIQTIyNCA9IFNIQTI1Ni5leHRlbmQoe1xyXG5cdCAgICAgICAgX2RvUmVzZXQ6IGZ1bmN0aW9uICgpIHtcclxuXHQgICAgICAgICAgICB0aGlzLl9oYXNoID0gbmV3IFdvcmRBcnJheS5pbml0KFtcclxuXHQgICAgICAgICAgICAgICAgMHhjMTA1OWVkOCwgMHgzNjdjZDUwNywgMHgzMDcwZGQxNywgMHhmNzBlNTkzOSxcclxuXHQgICAgICAgICAgICAgICAgMHhmZmMwMGIzMSwgMHg2ODU4MTUxMSwgMHg2NGY5OGZhNywgMHhiZWZhNGZhNFxyXG5cdCAgICAgICAgICAgIF0pO1xyXG5cdCAgICAgICAgfSxcclxuXHJcblx0ICAgICAgICBfZG9GaW5hbGl6ZTogZnVuY3Rpb24gKCkge1xyXG5cdCAgICAgICAgICAgIHZhciBoYXNoID0gU0hBMjU2Ll9kb0ZpbmFsaXplLmNhbGwodGhpcyk7XHJcblxyXG5cdCAgICAgICAgICAgIGhhc2guc2lnQnl0ZXMgLT0gNDtcclxuXHJcblx0ICAgICAgICAgICAgcmV0dXJuIGhhc2g7XHJcblx0ICAgICAgICB9XHJcblx0ICAgIH0pO1xyXG5cclxuXHQgICAgLyoqXHJcblx0ICAgICAqIFNob3J0Y3V0IGZ1bmN0aW9uIHRvIHRoZSBoYXNoZXIncyBvYmplY3QgaW50ZXJmYWNlLlxyXG5cdCAgICAgKlxyXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gaGFzaC5cclxuXHQgICAgICpcclxuXHQgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgaGFzaC5cclxuXHQgICAgICpcclxuXHQgICAgICogQHN0YXRpY1xyXG5cdCAgICAgKlxyXG5cdCAgICAgKiBAZXhhbXBsZVxyXG5cdCAgICAgKlxyXG5cdCAgICAgKiAgICAgdmFyIGhhc2ggPSBDcnlwdG9KUy5TSEEyMjQoJ21lc3NhZ2UnKTtcclxuXHQgICAgICogICAgIHZhciBoYXNoID0gQ3J5cHRvSlMuU0hBMjI0KHdvcmRBcnJheSk7XHJcblx0ICAgICAqL1xyXG5cdCAgICBDLlNIQTIyNCA9IFNIQTI1Ni5fY3JlYXRlSGVscGVyKFNIQTIyNCk7XHJcblxyXG5cdCAgICAvKipcclxuXHQgICAgICogU2hvcnRjdXQgZnVuY3Rpb24gdG8gdGhlIEhNQUMncyBvYmplY3QgaW50ZXJmYWNlLlxyXG5cdCAgICAgKlxyXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gaGFzaC5cclxuXHQgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBrZXkgVGhlIHNlY3JldCBrZXkuXHJcblx0ICAgICAqXHJcblx0ICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIEhNQUMuXHJcblx0ICAgICAqXHJcblx0ICAgICAqIEBzdGF0aWNcclxuXHQgICAgICpcclxuXHQgICAgICogQGV4YW1wbGVcclxuXHQgICAgICpcclxuXHQgICAgICogICAgIHZhciBobWFjID0gQ3J5cHRvSlMuSG1hY1NIQTIyNChtZXNzYWdlLCBrZXkpO1xyXG5cdCAgICAgKi9cclxuXHQgICAgQy5IbWFjU0hBMjI0ID0gU0hBMjU2Ll9jcmVhdGVIbWFjSGVscGVyKFNIQTIyNCk7XHJcblx0fSgpKTtcclxuXHJcblxyXG5cdHJldHVybiBDcnlwdG9KUy5TSEEyMjQ7XHJcblxyXG59KSk7IiwiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSwgdW5kZWYpIHtcclxuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcclxuXHRcdC8vIENvbW1vbkpTXHJcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2NvcmVcIiksIHJlcXVpcmUoXCIuL3g2NC1jb3JlXCIpKTtcclxuXHR9XHJcblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcclxuXHRcdC8vIEFNRFxyXG5cdFx0ZGVmaW5lKFtcIi4vY29yZVwiLCBcIi4veDY0LWNvcmVcIl0sIGZhY3RvcnkpO1xyXG5cdH1cclxuXHRlbHNlIHtcclxuXHRcdC8vIEdsb2JhbCAoYnJvd3NlcilcclxuXHRcdGZhY3Rvcnkocm9vdC5DcnlwdG9KUyk7XHJcblx0fVxyXG59KHRoaXMsIGZ1bmN0aW9uIChDcnlwdG9KUykge1xyXG5cclxuXHQoZnVuY3Rpb24gKCkge1xyXG5cdCAgICAvLyBTaG9ydGN1dHNcclxuXHQgICAgdmFyIEMgPSBDcnlwdG9KUztcclxuXHQgICAgdmFyIENfbGliID0gQy5saWI7XHJcblx0ICAgIHZhciBIYXNoZXIgPSBDX2xpYi5IYXNoZXI7XHJcblx0ICAgIHZhciBDX3g2NCA9IEMueDY0O1xyXG5cdCAgICB2YXIgWDY0V29yZCA9IENfeDY0LldvcmQ7XHJcblx0ICAgIHZhciBYNjRXb3JkQXJyYXkgPSBDX3g2NC5Xb3JkQXJyYXk7XHJcblx0ICAgIHZhciBDX2FsZ28gPSBDLmFsZ287XHJcblxyXG5cdCAgICBmdW5jdGlvbiBYNjRXb3JkX2NyZWF0ZSgpIHtcclxuXHQgICAgICAgIHJldHVybiBYNjRXb3JkLmNyZWF0ZS5hcHBseShYNjRXb3JkLCBhcmd1bWVudHMpO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICAvLyBDb25zdGFudHNcclxuXHQgICAgdmFyIEsgPSBbXHJcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweDQyOGEyZjk4LCAweGQ3MjhhZTIyKSwgWDY0V29yZF9jcmVhdGUoMHg3MTM3NDQ5MSwgMHgyM2VmNjVjZCksXHJcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweGI1YzBmYmNmLCAweGVjNGQzYjJmKSwgWDY0V29yZF9jcmVhdGUoMHhlOWI1ZGJhNSwgMHg4MTg5ZGJiYyksXHJcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweDM5NTZjMjViLCAweGYzNDhiNTM4KSwgWDY0V29yZF9jcmVhdGUoMHg1OWYxMTFmMSwgMHhiNjA1ZDAxOSksXHJcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweDkyM2Y4MmE0LCAweGFmMTk0ZjliKSwgWDY0V29yZF9jcmVhdGUoMHhhYjFjNWVkNSwgMHhkYTZkODExOCksXHJcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweGQ4MDdhYTk4LCAweGEzMDMwMjQyKSwgWDY0V29yZF9jcmVhdGUoMHgxMjgzNWIwMSwgMHg0NTcwNmZiZSksXHJcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweDI0MzE4NWJlLCAweDRlZTRiMjhjKSwgWDY0V29yZF9jcmVhdGUoMHg1NTBjN2RjMywgMHhkNWZmYjRlMiksXHJcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweDcyYmU1ZDc0LCAweGYyN2I4OTZmKSwgWDY0V29yZF9jcmVhdGUoMHg4MGRlYjFmZSwgMHgzYjE2OTZiMSksXHJcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweDliZGMwNmE3LCAweDI1YzcxMjM1KSwgWDY0V29yZF9jcmVhdGUoMHhjMTliZjE3NCwgMHhjZjY5MjY5NCksXHJcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweGU0OWI2OWMxLCAweDllZjE0YWQyKSwgWDY0V29yZF9jcmVhdGUoMHhlZmJlNDc4NiwgMHgzODRmMjVlMyksXHJcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweDBmYzE5ZGM2LCAweDhiOGNkNWI1KSwgWDY0V29yZF9jcmVhdGUoMHgyNDBjYTFjYywgMHg3N2FjOWM2NSksXHJcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweDJkZTkyYzZmLCAweDU5MmIwMjc1KSwgWDY0V29yZF9jcmVhdGUoMHg0YTc0ODRhYSwgMHg2ZWE2ZTQ4MyksXHJcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweDVjYjBhOWRjLCAweGJkNDFmYmQ0KSwgWDY0V29yZF9jcmVhdGUoMHg3NmY5ODhkYSwgMHg4MzExNTNiNSksXHJcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweDk4M2U1MTUyLCAweGVlNjZkZmFiKSwgWDY0V29yZF9jcmVhdGUoMHhhODMxYzY2ZCwgMHgyZGI0MzIxMCksXHJcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweGIwMDMyN2M4LCAweDk4ZmIyMTNmKSwgWDY0V29yZF9jcmVhdGUoMHhiZjU5N2ZjNywgMHhiZWVmMGVlNCksXHJcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweGM2ZTAwYmYzLCAweDNkYTg4ZmMyKSwgWDY0V29yZF9jcmVhdGUoMHhkNWE3OTE0NywgMHg5MzBhYTcyNSksXHJcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweDA2Y2E2MzUxLCAweGUwMDM4MjZmKSwgWDY0V29yZF9jcmVhdGUoMHgxNDI5Mjk2NywgMHgwYTBlNmU3MCksXHJcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweDI3YjcwYTg1LCAweDQ2ZDIyZmZjKSwgWDY0V29yZF9jcmVhdGUoMHgyZTFiMjEzOCwgMHg1YzI2YzkyNiksXHJcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweDRkMmM2ZGZjLCAweDVhYzQyYWVkKSwgWDY0V29yZF9jcmVhdGUoMHg1MzM4MGQxMywgMHg5ZDk1YjNkZiksXHJcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweDY1MGE3MzU0LCAweDhiYWY2M2RlKSwgWDY0V29yZF9jcmVhdGUoMHg3NjZhMGFiYiwgMHgzYzc3YjJhOCksXHJcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweDgxYzJjOTJlLCAweDQ3ZWRhZWU2KSwgWDY0V29yZF9jcmVhdGUoMHg5MjcyMmM4NSwgMHgxNDgyMzUzYiksXHJcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweGEyYmZlOGExLCAweDRjZjEwMzY0KSwgWDY0V29yZF9jcmVhdGUoMHhhODFhNjY0YiwgMHhiYzQyMzAwMSksXHJcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweGMyNGI4YjcwLCAweGQwZjg5NzkxKSwgWDY0V29yZF9jcmVhdGUoMHhjNzZjNTFhMywgMHgwNjU0YmUzMCksXHJcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweGQxOTJlODE5LCAweGQ2ZWY1MjE4KSwgWDY0V29yZF9jcmVhdGUoMHhkNjk5MDYyNCwgMHg1NTY1YTkxMCksXHJcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweGY0MGUzNTg1LCAweDU3NzEyMDJhKSwgWDY0V29yZF9jcmVhdGUoMHgxMDZhYTA3MCwgMHgzMmJiZDFiOCksXHJcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweDE5YTRjMTE2LCAweGI4ZDJkMGM4KSwgWDY0V29yZF9jcmVhdGUoMHgxZTM3NmMwOCwgMHg1MTQxYWI1MyksXHJcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweDI3NDg3NzRjLCAweGRmOGVlYjk5KSwgWDY0V29yZF9jcmVhdGUoMHgzNGIwYmNiNSwgMHhlMTliNDhhOCksXHJcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweDM5MWMwY2IzLCAweGM1Yzk1YTYzKSwgWDY0V29yZF9jcmVhdGUoMHg0ZWQ4YWE0YSwgMHhlMzQxOGFjYiksXHJcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweDViOWNjYTRmLCAweDc3NjNlMzczKSwgWDY0V29yZF9jcmVhdGUoMHg2ODJlNmZmMywgMHhkNmIyYjhhMyksXHJcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweDc0OGY4MmVlLCAweDVkZWZiMmZjKSwgWDY0V29yZF9jcmVhdGUoMHg3OGE1NjM2ZiwgMHg0MzE3MmY2MCksXHJcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweDg0Yzg3ODE0LCAweGExZjBhYjcyKSwgWDY0V29yZF9jcmVhdGUoMHg4Y2M3MDIwOCwgMHgxYTY0MzllYyksXHJcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweDkwYmVmZmZhLCAweDIzNjMxZTI4KSwgWDY0V29yZF9jcmVhdGUoMHhhNDUwNmNlYiwgMHhkZTgyYmRlOSksXHJcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweGJlZjlhM2Y3LCAweGIyYzY3OTE1KSwgWDY0V29yZF9jcmVhdGUoMHhjNjcxNzhmMiwgMHhlMzcyNTMyYiksXHJcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweGNhMjczZWNlLCAweGVhMjY2MTljKSwgWDY0V29yZF9jcmVhdGUoMHhkMTg2YjhjNywgMHgyMWMwYzIwNyksXHJcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweGVhZGE3ZGQ2LCAweGNkZTBlYjFlKSwgWDY0V29yZF9jcmVhdGUoMHhmNTdkNGY3ZiwgMHhlZTZlZDE3OCksXHJcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweDA2ZjA2N2FhLCAweDcyMTc2ZmJhKSwgWDY0V29yZF9jcmVhdGUoMHgwYTYzN2RjNSwgMHhhMmM4OThhNiksXHJcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweDExM2Y5ODA0LCAweGJlZjkwZGFlKSwgWDY0V29yZF9jcmVhdGUoMHgxYjcxMGIzNSwgMHgxMzFjNDcxYiksXHJcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweDI4ZGI3N2Y1LCAweDIzMDQ3ZDg0KSwgWDY0V29yZF9jcmVhdGUoMHgzMmNhYWI3YiwgMHg0MGM3MjQ5MyksXHJcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweDNjOWViZTBhLCAweDE1YzliZWJjKSwgWDY0V29yZF9jcmVhdGUoMHg0MzFkNjdjNCwgMHg5YzEwMGQ0YyksXHJcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweDRjYzVkNGJlLCAweGNiM2U0MmI2KSwgWDY0V29yZF9jcmVhdGUoMHg1OTdmMjk5YywgMHhmYzY1N2UyYSksXHJcblx0ICAgICAgICBYNjRXb3JkX2NyZWF0ZSgweDVmY2I2ZmFiLCAweDNhZDZmYWVjKSwgWDY0V29yZF9jcmVhdGUoMHg2YzQ0MTk4YywgMHg0YTQ3NTgxNylcclxuXHQgICAgXTtcclxuXHJcblx0ICAgIC8vIFJldXNhYmxlIG9iamVjdHNcclxuXHQgICAgdmFyIFcgPSBbXTtcclxuXHQgICAgKGZ1bmN0aW9uICgpIHtcclxuXHQgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgODA7IGkrKykge1xyXG5cdCAgICAgICAgICAgIFdbaV0gPSBYNjRXb3JkX2NyZWF0ZSgpO1xyXG5cdCAgICAgICAgfVxyXG5cdCAgICB9KCkpO1xyXG5cclxuXHQgICAgLyoqXHJcblx0ICAgICAqIFNIQS01MTIgaGFzaCBhbGdvcml0aG0uXHJcblx0ICAgICAqL1xyXG5cdCAgICB2YXIgU0hBNTEyID0gQ19hbGdvLlNIQTUxMiA9IEhhc2hlci5leHRlbmQoe1xyXG5cdCAgICAgICAgX2RvUmVzZXQ6IGZ1bmN0aW9uICgpIHtcclxuXHQgICAgICAgICAgICB0aGlzLl9oYXNoID0gbmV3IFg2NFdvcmRBcnJheS5pbml0KFtcclxuXHQgICAgICAgICAgICAgICAgbmV3IFg2NFdvcmQuaW5pdCgweDZhMDllNjY3LCAweGYzYmNjOTA4KSwgbmV3IFg2NFdvcmQuaW5pdCgweGJiNjdhZTg1LCAweDg0Y2FhNzNiKSxcclxuXHQgICAgICAgICAgICAgICAgbmV3IFg2NFdvcmQuaW5pdCgweDNjNmVmMzcyLCAweGZlOTRmODJiKSwgbmV3IFg2NFdvcmQuaW5pdCgweGE1NGZmNTNhLCAweDVmMWQzNmYxKSxcclxuXHQgICAgICAgICAgICAgICAgbmV3IFg2NFdvcmQuaW5pdCgweDUxMGU1MjdmLCAweGFkZTY4MmQxKSwgbmV3IFg2NFdvcmQuaW5pdCgweDliMDU2ODhjLCAweDJiM2U2YzFmKSxcclxuXHQgICAgICAgICAgICAgICAgbmV3IFg2NFdvcmQuaW5pdCgweDFmODNkOWFiLCAweGZiNDFiZDZiKSwgbmV3IFg2NFdvcmQuaW5pdCgweDViZTBjZDE5LCAweDEzN2UyMTc5KVxyXG5cdCAgICAgICAgICAgIF0pO1xyXG5cdCAgICAgICAgfSxcclxuXHJcblx0ICAgICAgICBfZG9Qcm9jZXNzQmxvY2s6IGZ1bmN0aW9uIChNLCBvZmZzZXQpIHtcclxuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcclxuXHQgICAgICAgICAgICB2YXIgSCA9IHRoaXMuX2hhc2gud29yZHM7XHJcblxyXG5cdCAgICAgICAgICAgIHZhciBIMCA9IEhbMF07XHJcblx0ICAgICAgICAgICAgdmFyIEgxID0gSFsxXTtcclxuXHQgICAgICAgICAgICB2YXIgSDIgPSBIWzJdO1xyXG5cdCAgICAgICAgICAgIHZhciBIMyA9IEhbM107XHJcblx0ICAgICAgICAgICAgdmFyIEg0ID0gSFs0XTtcclxuXHQgICAgICAgICAgICB2YXIgSDUgPSBIWzVdO1xyXG5cdCAgICAgICAgICAgIHZhciBINiA9IEhbNl07XHJcblx0ICAgICAgICAgICAgdmFyIEg3ID0gSFs3XTtcclxuXHJcblx0ICAgICAgICAgICAgdmFyIEgwaCA9IEgwLmhpZ2g7XHJcblx0ICAgICAgICAgICAgdmFyIEgwbCA9IEgwLmxvdztcclxuXHQgICAgICAgICAgICB2YXIgSDFoID0gSDEuaGlnaDtcclxuXHQgICAgICAgICAgICB2YXIgSDFsID0gSDEubG93O1xyXG5cdCAgICAgICAgICAgIHZhciBIMmggPSBIMi5oaWdoO1xyXG5cdCAgICAgICAgICAgIHZhciBIMmwgPSBIMi5sb3c7XHJcblx0ICAgICAgICAgICAgdmFyIEgzaCA9IEgzLmhpZ2g7XHJcblx0ICAgICAgICAgICAgdmFyIEgzbCA9IEgzLmxvdztcclxuXHQgICAgICAgICAgICB2YXIgSDRoID0gSDQuaGlnaDtcclxuXHQgICAgICAgICAgICB2YXIgSDRsID0gSDQubG93O1xyXG5cdCAgICAgICAgICAgIHZhciBINWggPSBINS5oaWdoO1xyXG5cdCAgICAgICAgICAgIHZhciBINWwgPSBINS5sb3c7XHJcblx0ICAgICAgICAgICAgdmFyIEg2aCA9IEg2LmhpZ2g7XHJcblx0ICAgICAgICAgICAgdmFyIEg2bCA9IEg2LmxvdztcclxuXHQgICAgICAgICAgICB2YXIgSDdoID0gSDcuaGlnaDtcclxuXHQgICAgICAgICAgICB2YXIgSDdsID0gSDcubG93O1xyXG5cclxuXHQgICAgICAgICAgICAvLyBXb3JraW5nIHZhcmlhYmxlc1xyXG5cdCAgICAgICAgICAgIHZhciBhaCA9IEgwaDtcclxuXHQgICAgICAgICAgICB2YXIgYWwgPSBIMGw7XHJcblx0ICAgICAgICAgICAgdmFyIGJoID0gSDFoO1xyXG5cdCAgICAgICAgICAgIHZhciBibCA9IEgxbDtcclxuXHQgICAgICAgICAgICB2YXIgY2ggPSBIMmg7XHJcblx0ICAgICAgICAgICAgdmFyIGNsID0gSDJsO1xyXG5cdCAgICAgICAgICAgIHZhciBkaCA9IEgzaDtcclxuXHQgICAgICAgICAgICB2YXIgZGwgPSBIM2w7XHJcblx0ICAgICAgICAgICAgdmFyIGVoID0gSDRoO1xyXG5cdCAgICAgICAgICAgIHZhciBlbCA9IEg0bDtcclxuXHQgICAgICAgICAgICB2YXIgZmggPSBINWg7XHJcblx0ICAgICAgICAgICAgdmFyIGZsID0gSDVsO1xyXG5cdCAgICAgICAgICAgIHZhciBnaCA9IEg2aDtcclxuXHQgICAgICAgICAgICB2YXIgZ2wgPSBINmw7XHJcblx0ICAgICAgICAgICAgdmFyIGhoID0gSDdoO1xyXG5cdCAgICAgICAgICAgIHZhciBobCA9IEg3bDtcclxuXHJcblx0ICAgICAgICAgICAgLy8gUm91bmRzXHJcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA4MDsgaSsrKSB7XHJcblx0ICAgICAgICAgICAgICAgIC8vIFNob3J0Y3V0XHJcblx0ICAgICAgICAgICAgICAgIHZhciBXaSA9IFdbaV07XHJcblxyXG5cdCAgICAgICAgICAgICAgICAvLyBFeHRlbmQgbWVzc2FnZVxyXG5cdCAgICAgICAgICAgICAgICBpZiAoaSA8IDE2KSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgV2loID0gV2kuaGlnaCA9IE1bb2Zmc2V0ICsgaSAqIDJdICAgICB8IDA7XHJcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgV2lsID0gV2kubG93ICA9IE1bb2Zmc2V0ICsgaSAqIDIgKyAxXSB8IDA7XHJcblx0ICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICAvLyBHYW1tYTBcclxuXHQgICAgICAgICAgICAgICAgICAgIHZhciBnYW1tYTB4ICA9IFdbaSAtIDE1XTtcclxuXHQgICAgICAgICAgICAgICAgICAgIHZhciBnYW1tYTB4aCA9IGdhbW1hMHguaGlnaDtcclxuXHQgICAgICAgICAgICAgICAgICAgIHZhciBnYW1tYTB4bCA9IGdhbW1hMHgubG93O1xyXG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGdhbW1hMGggID0gKChnYW1tYTB4aCA+Pj4gMSkgfCAoZ2FtbWEweGwgPDwgMzEpKSBeICgoZ2FtbWEweGggPj4+IDgpIHwgKGdhbW1hMHhsIDw8IDI0KSkgXiAoZ2FtbWEweGggPj4+IDcpO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGdhbW1hMGwgID0gKChnYW1tYTB4bCA+Pj4gMSkgfCAoZ2FtbWEweGggPDwgMzEpKSBeICgoZ2FtbWEweGwgPj4+IDgpIHwgKGdhbW1hMHhoIDw8IDI0KSkgXiAoKGdhbW1hMHhsID4+PiA3KSB8IChnYW1tYTB4aCA8PCAyNSkpO1xyXG5cclxuXHQgICAgICAgICAgICAgICAgICAgIC8vIEdhbW1hMVxyXG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGdhbW1hMXggID0gV1tpIC0gMl07XHJcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgZ2FtbWExeGggPSBnYW1tYTF4LmhpZ2g7XHJcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgZ2FtbWExeGwgPSBnYW1tYTF4LmxvdztcclxuXHQgICAgICAgICAgICAgICAgICAgIHZhciBnYW1tYTFoICA9ICgoZ2FtbWExeGggPj4+IDE5KSB8IChnYW1tYTF4bCA8PCAxMykpIF4gKChnYW1tYTF4aCA8PCAzKSB8IChnYW1tYTF4bCA+Pj4gMjkpKSBeIChnYW1tYTF4aCA+Pj4gNik7XHJcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgZ2FtbWExbCAgPSAoKGdhbW1hMXhsID4+PiAxOSkgfCAoZ2FtbWExeGggPDwgMTMpKSBeICgoZ2FtbWExeGwgPDwgMykgfCAoZ2FtbWExeGggPj4+IDI5KSkgXiAoKGdhbW1hMXhsID4+PiA2KSB8IChnYW1tYTF4aCA8PCAyNikpO1xyXG5cclxuXHQgICAgICAgICAgICAgICAgICAgIC8vIFdbaV0gPSBnYW1tYTAgKyBXW2kgLSA3XSArIGdhbW1hMSArIFdbaSAtIDE2XVxyXG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIFdpNyAgPSBXW2kgLSA3XTtcclxuXHQgICAgICAgICAgICAgICAgICAgIHZhciBXaTdoID0gV2k3LmhpZ2g7XHJcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgV2k3bCA9IFdpNy5sb3c7XHJcblxyXG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIFdpMTYgID0gV1tpIC0gMTZdO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIFdpMTZoID0gV2kxNi5oaWdoO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIFdpMTZsID0gV2kxNi5sb3c7XHJcblxyXG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIFdpbCA9IGdhbW1hMGwgKyBXaTdsO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIFdpaCA9IGdhbW1hMGggKyBXaTdoICsgKChXaWwgPj4+IDApIDwgKGdhbW1hMGwgPj4+IDApID8gMSA6IDApO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIFdpbCA9IFdpbCArIGdhbW1hMWw7XHJcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgV2loID0gV2loICsgZ2FtbWExaCArICgoV2lsID4+PiAwKSA8IChnYW1tYTFsID4+PiAwKSA/IDEgOiAwKTtcclxuXHQgICAgICAgICAgICAgICAgICAgIHZhciBXaWwgPSBXaWwgKyBXaTE2bDtcclxuXHQgICAgICAgICAgICAgICAgICAgIHZhciBXaWggPSBXaWggKyBXaTE2aCArICgoV2lsID4+PiAwKSA8IChXaTE2bCA+Pj4gMCkgPyAxIDogMCk7XHJcblxyXG5cdCAgICAgICAgICAgICAgICAgICAgV2kuaGlnaCA9IFdpaDtcclxuXHQgICAgICAgICAgICAgICAgICAgIFdpLmxvdyAgPSBXaWw7XHJcblx0ICAgICAgICAgICAgICAgIH1cclxuXHJcblx0ICAgICAgICAgICAgICAgIHZhciBjaGggID0gKGVoICYgZmgpIF4gKH5laCAmIGdoKTtcclxuXHQgICAgICAgICAgICAgICAgdmFyIGNobCAgPSAoZWwgJiBmbCkgXiAofmVsICYgZ2wpO1xyXG5cdCAgICAgICAgICAgICAgICB2YXIgbWFqaCA9IChhaCAmIGJoKSBeIChhaCAmIGNoKSBeIChiaCAmIGNoKTtcclxuXHQgICAgICAgICAgICAgICAgdmFyIG1hamwgPSAoYWwgJiBibCkgXiAoYWwgJiBjbCkgXiAoYmwgJiBjbCk7XHJcblxyXG5cdCAgICAgICAgICAgICAgICB2YXIgc2lnbWEwaCA9ICgoYWggPj4+IDI4KSB8IChhbCA8PCA0KSkgIF4gKChhaCA8PCAzMCkgIHwgKGFsID4+PiAyKSkgXiAoKGFoIDw8IDI1KSB8IChhbCA+Pj4gNykpO1xyXG5cdCAgICAgICAgICAgICAgICB2YXIgc2lnbWEwbCA9ICgoYWwgPj4+IDI4KSB8IChhaCA8PCA0KSkgIF4gKChhbCA8PCAzMCkgIHwgKGFoID4+PiAyKSkgXiAoKGFsIDw8IDI1KSB8IChhaCA+Pj4gNykpO1xyXG5cdCAgICAgICAgICAgICAgICB2YXIgc2lnbWExaCA9ICgoZWggPj4+IDE0KSB8IChlbCA8PCAxOCkpIF4gKChlaCA+Pj4gMTgpIHwgKGVsIDw8IDE0KSkgXiAoKGVoIDw8IDIzKSB8IChlbCA+Pj4gOSkpO1xyXG5cdCAgICAgICAgICAgICAgICB2YXIgc2lnbWExbCA9ICgoZWwgPj4+IDE0KSB8IChlaCA8PCAxOCkpIF4gKChlbCA+Pj4gMTgpIHwgKGVoIDw8IDE0KSkgXiAoKGVsIDw8IDIzKSB8IChlaCA+Pj4gOSkpO1xyXG5cclxuXHQgICAgICAgICAgICAgICAgLy8gdDEgPSBoICsgc2lnbWExICsgY2ggKyBLW2ldICsgV1tpXVxyXG5cdCAgICAgICAgICAgICAgICB2YXIgS2kgID0gS1tpXTtcclxuXHQgICAgICAgICAgICAgICAgdmFyIEtpaCA9IEtpLmhpZ2g7XHJcblx0ICAgICAgICAgICAgICAgIHZhciBLaWwgPSBLaS5sb3c7XHJcblxyXG5cdCAgICAgICAgICAgICAgICB2YXIgdDFsID0gaGwgKyBzaWdtYTFsO1xyXG5cdCAgICAgICAgICAgICAgICB2YXIgdDFoID0gaGggKyBzaWdtYTFoICsgKCh0MWwgPj4+IDApIDwgKGhsID4+PiAwKSA/IDEgOiAwKTtcclxuXHQgICAgICAgICAgICAgICAgdmFyIHQxbCA9IHQxbCArIGNobDtcclxuXHQgICAgICAgICAgICAgICAgdmFyIHQxaCA9IHQxaCArIGNoaCArICgodDFsID4+PiAwKSA8IChjaGwgPj4+IDApID8gMSA6IDApO1xyXG5cdCAgICAgICAgICAgICAgICB2YXIgdDFsID0gdDFsICsgS2lsO1xyXG5cdCAgICAgICAgICAgICAgICB2YXIgdDFoID0gdDFoICsgS2loICsgKCh0MWwgPj4+IDApIDwgKEtpbCA+Pj4gMCkgPyAxIDogMCk7XHJcblx0ICAgICAgICAgICAgICAgIHZhciB0MWwgPSB0MWwgKyBXaWw7XHJcblx0ICAgICAgICAgICAgICAgIHZhciB0MWggPSB0MWggKyBXaWggKyAoKHQxbCA+Pj4gMCkgPCAoV2lsID4+PiAwKSA/IDEgOiAwKTtcclxuXHJcblx0ICAgICAgICAgICAgICAgIC8vIHQyID0gc2lnbWEwICsgbWFqXHJcblx0ICAgICAgICAgICAgICAgIHZhciB0MmwgPSBzaWdtYTBsICsgbWFqbDtcclxuXHQgICAgICAgICAgICAgICAgdmFyIHQyaCA9IHNpZ21hMGggKyBtYWpoICsgKCh0MmwgPj4+IDApIDwgKHNpZ21hMGwgPj4+IDApID8gMSA6IDApO1xyXG5cclxuXHQgICAgICAgICAgICAgICAgLy8gVXBkYXRlIHdvcmtpbmcgdmFyaWFibGVzXHJcblx0ICAgICAgICAgICAgICAgIGhoID0gZ2g7XHJcblx0ICAgICAgICAgICAgICAgIGhsID0gZ2w7XHJcblx0ICAgICAgICAgICAgICAgIGdoID0gZmg7XHJcblx0ICAgICAgICAgICAgICAgIGdsID0gZmw7XHJcblx0ICAgICAgICAgICAgICAgIGZoID0gZWg7XHJcblx0ICAgICAgICAgICAgICAgIGZsID0gZWw7XHJcblx0ICAgICAgICAgICAgICAgIGVsID0gKGRsICsgdDFsKSB8IDA7XHJcblx0ICAgICAgICAgICAgICAgIGVoID0gKGRoICsgdDFoICsgKChlbCA+Pj4gMCkgPCAoZGwgPj4+IDApID8gMSA6IDApKSB8IDA7XHJcblx0ICAgICAgICAgICAgICAgIGRoID0gY2g7XHJcblx0ICAgICAgICAgICAgICAgIGRsID0gY2w7XHJcblx0ICAgICAgICAgICAgICAgIGNoID0gYmg7XHJcblx0ICAgICAgICAgICAgICAgIGNsID0gYmw7XHJcblx0ICAgICAgICAgICAgICAgIGJoID0gYWg7XHJcblx0ICAgICAgICAgICAgICAgIGJsID0gYWw7XHJcblx0ICAgICAgICAgICAgICAgIGFsID0gKHQxbCArIHQybCkgfCAwO1xyXG5cdCAgICAgICAgICAgICAgICBhaCA9ICh0MWggKyB0MmggKyAoKGFsID4+PiAwKSA8ICh0MWwgPj4+IDApID8gMSA6IDApKSB8IDA7XHJcblx0ICAgICAgICAgICAgfVxyXG5cclxuXHQgICAgICAgICAgICAvLyBJbnRlcm1lZGlhdGUgaGFzaCB2YWx1ZVxyXG5cdCAgICAgICAgICAgIEgwbCA9IEgwLmxvdyAgPSAoSDBsICsgYWwpO1xyXG5cdCAgICAgICAgICAgIEgwLmhpZ2ggPSAoSDBoICsgYWggKyAoKEgwbCA+Pj4gMCkgPCAoYWwgPj4+IDApID8gMSA6IDApKTtcclxuXHQgICAgICAgICAgICBIMWwgPSBIMS5sb3cgID0gKEgxbCArIGJsKTtcclxuXHQgICAgICAgICAgICBIMS5oaWdoID0gKEgxaCArIGJoICsgKChIMWwgPj4+IDApIDwgKGJsID4+PiAwKSA/IDEgOiAwKSk7XHJcblx0ICAgICAgICAgICAgSDJsID0gSDIubG93ICA9IChIMmwgKyBjbCk7XHJcblx0ICAgICAgICAgICAgSDIuaGlnaCA9IChIMmggKyBjaCArICgoSDJsID4+PiAwKSA8IChjbCA+Pj4gMCkgPyAxIDogMCkpO1xyXG5cdCAgICAgICAgICAgIEgzbCA9IEgzLmxvdyAgPSAoSDNsICsgZGwpO1xyXG5cdCAgICAgICAgICAgIEgzLmhpZ2ggPSAoSDNoICsgZGggKyAoKEgzbCA+Pj4gMCkgPCAoZGwgPj4+IDApID8gMSA6IDApKTtcclxuXHQgICAgICAgICAgICBINGwgPSBINC5sb3cgID0gKEg0bCArIGVsKTtcclxuXHQgICAgICAgICAgICBINC5oaWdoID0gKEg0aCArIGVoICsgKChINGwgPj4+IDApIDwgKGVsID4+PiAwKSA/IDEgOiAwKSk7XHJcblx0ICAgICAgICAgICAgSDVsID0gSDUubG93ICA9IChINWwgKyBmbCk7XHJcblx0ICAgICAgICAgICAgSDUuaGlnaCA9IChINWggKyBmaCArICgoSDVsID4+PiAwKSA8IChmbCA+Pj4gMCkgPyAxIDogMCkpO1xyXG5cdCAgICAgICAgICAgIEg2bCA9IEg2LmxvdyAgPSAoSDZsICsgZ2wpO1xyXG5cdCAgICAgICAgICAgIEg2LmhpZ2ggPSAoSDZoICsgZ2ggKyAoKEg2bCA+Pj4gMCkgPCAoZ2wgPj4+IDApID8gMSA6IDApKTtcclxuXHQgICAgICAgICAgICBIN2wgPSBINy5sb3cgID0gKEg3bCArIGhsKTtcclxuXHQgICAgICAgICAgICBINy5oaWdoID0gKEg3aCArIGhoICsgKChIN2wgPj4+IDApIDwgKGhsID4+PiAwKSA/IDEgOiAwKSk7XHJcblx0ICAgICAgICB9LFxyXG5cclxuXHQgICAgICAgIF9kb0ZpbmFsaXplOiBmdW5jdGlvbiAoKSB7XHJcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXHJcblx0ICAgICAgICAgICAgdmFyIGRhdGEgPSB0aGlzLl9kYXRhO1xyXG5cdCAgICAgICAgICAgIHZhciBkYXRhV29yZHMgPSBkYXRhLndvcmRzO1xyXG5cclxuXHQgICAgICAgICAgICB2YXIgbkJpdHNUb3RhbCA9IHRoaXMuX25EYXRhQnl0ZXMgKiA4O1xyXG5cdCAgICAgICAgICAgIHZhciBuQml0c0xlZnQgPSBkYXRhLnNpZ0J5dGVzICogODtcclxuXHJcblx0ICAgICAgICAgICAgLy8gQWRkIHBhZGRpbmdcclxuXHQgICAgICAgICAgICBkYXRhV29yZHNbbkJpdHNMZWZ0ID4+PiA1XSB8PSAweDgwIDw8ICgyNCAtIG5CaXRzTGVmdCAlIDMyKTtcclxuXHQgICAgICAgICAgICBkYXRhV29yZHNbKCgobkJpdHNMZWZ0ICsgMTI4KSA+Pj4gMTApIDw8IDUpICsgMzBdID0gTWF0aC5mbG9vcihuQml0c1RvdGFsIC8gMHgxMDAwMDAwMDApO1xyXG5cdCAgICAgICAgICAgIGRhdGFXb3Jkc1soKChuQml0c0xlZnQgKyAxMjgpID4+PiAxMCkgPDwgNSkgKyAzMV0gPSBuQml0c1RvdGFsO1xyXG5cdCAgICAgICAgICAgIGRhdGEuc2lnQnl0ZXMgPSBkYXRhV29yZHMubGVuZ3RoICogNDtcclxuXHJcblx0ICAgICAgICAgICAgLy8gSGFzaCBmaW5hbCBibG9ja3NcclxuXHQgICAgICAgICAgICB0aGlzLl9wcm9jZXNzKCk7XHJcblxyXG5cdCAgICAgICAgICAgIC8vIENvbnZlcnQgaGFzaCB0byAzMi1iaXQgd29yZCBhcnJheSBiZWZvcmUgcmV0dXJuaW5nXHJcblx0ICAgICAgICAgICAgdmFyIGhhc2ggPSB0aGlzLl9oYXNoLnRvWDMyKCk7XHJcblxyXG5cdCAgICAgICAgICAgIC8vIFJldHVybiBmaW5hbCBjb21wdXRlZCBoYXNoXHJcblx0ICAgICAgICAgICAgcmV0dXJuIGhhc2g7XHJcblx0ICAgICAgICB9LFxyXG5cclxuXHQgICAgICAgIGNsb25lOiBmdW5jdGlvbiAoKSB7XHJcblx0ICAgICAgICAgICAgdmFyIGNsb25lID0gSGFzaGVyLmNsb25lLmNhbGwodGhpcyk7XHJcblx0ICAgICAgICAgICAgY2xvbmUuX2hhc2ggPSB0aGlzLl9oYXNoLmNsb25lKCk7XHJcblxyXG5cdCAgICAgICAgICAgIHJldHVybiBjbG9uZTtcclxuXHQgICAgICAgIH0sXHJcblxyXG5cdCAgICAgICAgYmxvY2tTaXplOiAxMDI0LzMyXHJcblx0ICAgIH0pO1xyXG5cclxuXHQgICAgLyoqXHJcblx0ICAgICAqIFNob3J0Y3V0IGZ1bmN0aW9uIHRvIHRoZSBoYXNoZXIncyBvYmplY3QgaW50ZXJmYWNlLlxyXG5cdCAgICAgKlxyXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gaGFzaC5cclxuXHQgICAgICpcclxuXHQgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgaGFzaC5cclxuXHQgICAgICpcclxuXHQgICAgICogQHN0YXRpY1xyXG5cdCAgICAgKlxyXG5cdCAgICAgKiBAZXhhbXBsZVxyXG5cdCAgICAgKlxyXG5cdCAgICAgKiAgICAgdmFyIGhhc2ggPSBDcnlwdG9KUy5TSEE1MTIoJ21lc3NhZ2UnKTtcclxuXHQgICAgICogICAgIHZhciBoYXNoID0gQ3J5cHRvSlMuU0hBNTEyKHdvcmRBcnJheSk7XHJcblx0ICAgICAqL1xyXG5cdCAgICBDLlNIQTUxMiA9IEhhc2hlci5fY3JlYXRlSGVscGVyKFNIQTUxMik7XHJcblxyXG5cdCAgICAvKipcclxuXHQgICAgICogU2hvcnRjdXQgZnVuY3Rpb24gdG8gdGhlIEhNQUMncyBvYmplY3QgaW50ZXJmYWNlLlxyXG5cdCAgICAgKlxyXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gaGFzaC5cclxuXHQgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBrZXkgVGhlIHNlY3JldCBrZXkuXHJcblx0ICAgICAqXHJcblx0ICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIEhNQUMuXHJcblx0ICAgICAqXHJcblx0ICAgICAqIEBzdGF0aWNcclxuXHQgICAgICpcclxuXHQgICAgICogQGV4YW1wbGVcclxuXHQgICAgICpcclxuXHQgICAgICogICAgIHZhciBobWFjID0gQ3J5cHRvSlMuSG1hY1NIQTUxMihtZXNzYWdlLCBrZXkpO1xyXG5cdCAgICAgKi9cclxuXHQgICAgQy5IbWFjU0hBNTEyID0gSGFzaGVyLl9jcmVhdGVIbWFjSGVscGVyKFNIQTUxMik7XHJcblx0fSgpKTtcclxuXHJcblxyXG5cdHJldHVybiBDcnlwdG9KUy5TSEE1MTI7XHJcblxyXG59KSk7IiwiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSwgdW5kZWYpIHtcclxuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcclxuXHRcdC8vIENvbW1vbkpTXHJcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2NvcmVcIiksIHJlcXVpcmUoXCIuL3g2NC1jb3JlXCIpLCByZXF1aXJlKFwiLi9zaGE1MTJcIikpO1xyXG5cdH1cclxuXHRlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xyXG5cdFx0Ly8gQU1EXHJcblx0XHRkZWZpbmUoW1wiLi9jb3JlXCIsIFwiLi94NjQtY29yZVwiLCBcIi4vc2hhNTEyXCJdLCBmYWN0b3J5KTtcclxuXHR9XHJcblx0ZWxzZSB7XHJcblx0XHQvLyBHbG9iYWwgKGJyb3dzZXIpXHJcblx0XHRmYWN0b3J5KHJvb3QuQ3J5cHRvSlMpO1xyXG5cdH1cclxufSh0aGlzLCBmdW5jdGlvbiAoQ3J5cHRvSlMpIHtcclxuXHJcblx0KGZ1bmN0aW9uICgpIHtcclxuXHQgICAgLy8gU2hvcnRjdXRzXHJcblx0ICAgIHZhciBDID0gQ3J5cHRvSlM7XHJcblx0ICAgIHZhciBDX3g2NCA9IEMueDY0O1xyXG5cdCAgICB2YXIgWDY0V29yZCA9IENfeDY0LldvcmQ7XHJcblx0ICAgIHZhciBYNjRXb3JkQXJyYXkgPSBDX3g2NC5Xb3JkQXJyYXk7XHJcblx0ICAgIHZhciBDX2FsZ28gPSBDLmFsZ287XHJcblx0ICAgIHZhciBTSEE1MTIgPSBDX2FsZ28uU0hBNTEyO1xyXG5cclxuXHQgICAgLyoqXHJcblx0ICAgICAqIFNIQS0zODQgaGFzaCBhbGdvcml0aG0uXHJcblx0ICAgICAqL1xyXG5cdCAgICB2YXIgU0hBMzg0ID0gQ19hbGdvLlNIQTM4NCA9IFNIQTUxMi5leHRlbmQoe1xyXG5cdCAgICAgICAgX2RvUmVzZXQ6IGZ1bmN0aW9uICgpIHtcclxuXHQgICAgICAgICAgICB0aGlzLl9oYXNoID0gbmV3IFg2NFdvcmRBcnJheS5pbml0KFtcclxuXHQgICAgICAgICAgICAgICAgbmV3IFg2NFdvcmQuaW5pdCgweGNiYmI5ZDVkLCAweGMxMDU5ZWQ4KSwgbmV3IFg2NFdvcmQuaW5pdCgweDYyOWEyOTJhLCAweDM2N2NkNTA3KSxcclxuXHQgICAgICAgICAgICAgICAgbmV3IFg2NFdvcmQuaW5pdCgweDkxNTkwMTVhLCAweDMwNzBkZDE3KSwgbmV3IFg2NFdvcmQuaW5pdCgweDE1MmZlY2Q4LCAweGY3MGU1OTM5KSxcclxuXHQgICAgICAgICAgICAgICAgbmV3IFg2NFdvcmQuaW5pdCgweDY3MzMyNjY3LCAweGZmYzAwYjMxKSwgbmV3IFg2NFdvcmQuaW5pdCgweDhlYjQ0YTg3LCAweDY4NTgxNTExKSxcclxuXHQgICAgICAgICAgICAgICAgbmV3IFg2NFdvcmQuaW5pdCgweGRiMGMyZTBkLCAweDY0Zjk4ZmE3KSwgbmV3IFg2NFdvcmQuaW5pdCgweDQ3YjU0ODFkLCAweGJlZmE0ZmE0KVxyXG5cdCAgICAgICAgICAgIF0pO1xyXG5cdCAgICAgICAgfSxcclxuXHJcblx0ICAgICAgICBfZG9GaW5hbGl6ZTogZnVuY3Rpb24gKCkge1xyXG5cdCAgICAgICAgICAgIHZhciBoYXNoID0gU0hBNTEyLl9kb0ZpbmFsaXplLmNhbGwodGhpcyk7XHJcblxyXG5cdCAgICAgICAgICAgIGhhc2guc2lnQnl0ZXMgLT0gMTY7XHJcblxyXG5cdCAgICAgICAgICAgIHJldHVybiBoYXNoO1xyXG5cdCAgICAgICAgfVxyXG5cdCAgICB9KTtcclxuXHJcblx0ICAgIC8qKlxyXG5cdCAgICAgKiBTaG9ydGN1dCBmdW5jdGlvbiB0byB0aGUgaGFzaGVyJ3Mgb2JqZWN0IGludGVyZmFjZS5cclxuXHQgICAgICpcclxuXHQgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGhhc2guXHJcblx0ICAgICAqXHJcblx0ICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIGhhc2guXHJcblx0ICAgICAqXHJcblx0ICAgICAqIEBzdGF0aWNcclxuXHQgICAgICpcclxuXHQgICAgICogQGV4YW1wbGVcclxuXHQgICAgICpcclxuXHQgICAgICogICAgIHZhciBoYXNoID0gQ3J5cHRvSlMuU0hBMzg0KCdtZXNzYWdlJyk7XHJcblx0ICAgICAqICAgICB2YXIgaGFzaCA9IENyeXB0b0pTLlNIQTM4NCh3b3JkQXJyYXkpO1xyXG5cdCAgICAgKi9cclxuXHQgICAgQy5TSEEzODQgPSBTSEE1MTIuX2NyZWF0ZUhlbHBlcihTSEEzODQpO1xyXG5cclxuXHQgICAgLyoqXHJcblx0ICAgICAqIFNob3J0Y3V0IGZ1bmN0aW9uIHRvIHRoZSBITUFDJ3Mgb2JqZWN0IGludGVyZmFjZS5cclxuXHQgICAgICpcclxuXHQgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGhhc2guXHJcblx0ICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30ga2V5IFRoZSBzZWNyZXQga2V5LlxyXG5cdCAgICAgKlxyXG5cdCAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBITUFDLlxyXG5cdCAgICAgKlxyXG5cdCAgICAgKiBAc3RhdGljXHJcblx0ICAgICAqXHJcblx0ICAgICAqIEBleGFtcGxlXHJcblx0ICAgICAqXHJcblx0ICAgICAqICAgICB2YXIgaG1hYyA9IENyeXB0b0pTLkhtYWNTSEEzODQobWVzc2FnZSwga2V5KTtcclxuXHQgICAgICovXHJcblx0ICAgIEMuSG1hY1NIQTM4NCA9IFNIQTUxMi5fY3JlYXRlSG1hY0hlbHBlcihTSEEzODQpO1xyXG5cdH0oKSk7XHJcblxyXG5cclxuXHRyZXR1cm4gQ3J5cHRvSlMuU0hBMzg0O1xyXG5cclxufSkpOyIsIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnksIHVuZGVmKSB7XHJcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XHJcblx0XHQvLyBDb21tb25KU1xyXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9jb3JlXCIpLCByZXF1aXJlKFwiLi94NjQtY29yZVwiKSk7XHJcblx0fVxyXG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XHJcblx0XHQvLyBBTURcclxuXHRcdGRlZmluZShbXCIuL2NvcmVcIiwgXCIuL3g2NC1jb3JlXCJdLCBmYWN0b3J5KTtcclxuXHR9XHJcblx0ZWxzZSB7XHJcblx0XHQvLyBHbG9iYWwgKGJyb3dzZXIpXHJcblx0XHRmYWN0b3J5KHJvb3QuQ3J5cHRvSlMpO1xyXG5cdH1cclxufSh0aGlzLCBmdW5jdGlvbiAoQ3J5cHRvSlMpIHtcclxuXHJcblx0KGZ1bmN0aW9uIChNYXRoKSB7XHJcblx0ICAgIC8vIFNob3J0Y3V0c1xyXG5cdCAgICB2YXIgQyA9IENyeXB0b0pTO1xyXG5cdCAgICB2YXIgQ19saWIgPSBDLmxpYjtcclxuXHQgICAgdmFyIFdvcmRBcnJheSA9IENfbGliLldvcmRBcnJheTtcclxuXHQgICAgdmFyIEhhc2hlciA9IENfbGliLkhhc2hlcjtcclxuXHQgICAgdmFyIENfeDY0ID0gQy54NjQ7XHJcblx0ICAgIHZhciBYNjRXb3JkID0gQ194NjQuV29yZDtcclxuXHQgICAgdmFyIENfYWxnbyA9IEMuYWxnbztcclxuXHJcblx0ICAgIC8vIENvbnN0YW50cyB0YWJsZXNcclxuXHQgICAgdmFyIFJIT19PRkZTRVRTID0gW107XHJcblx0ICAgIHZhciBQSV9JTkRFWEVTICA9IFtdO1xyXG5cdCAgICB2YXIgUk9VTkRfQ09OU1RBTlRTID0gW107XHJcblxyXG5cdCAgICAvLyBDb21wdXRlIENvbnN0YW50c1xyXG5cdCAgICAoZnVuY3Rpb24gKCkge1xyXG5cdCAgICAgICAgLy8gQ29tcHV0ZSByaG8gb2Zmc2V0IGNvbnN0YW50c1xyXG5cdCAgICAgICAgdmFyIHggPSAxLCB5ID0gMDtcclxuXHQgICAgICAgIGZvciAodmFyIHQgPSAwOyB0IDwgMjQ7IHQrKykge1xyXG5cdCAgICAgICAgICAgIFJIT19PRkZTRVRTW3ggKyA1ICogeV0gPSAoKHQgKyAxKSAqICh0ICsgMikgLyAyKSAlIDY0O1xyXG5cclxuXHQgICAgICAgICAgICB2YXIgbmV3WCA9IHkgJSA1O1xyXG5cdCAgICAgICAgICAgIHZhciBuZXdZID0gKDIgKiB4ICsgMyAqIHkpICUgNTtcclxuXHQgICAgICAgICAgICB4ID0gbmV3WDtcclxuXHQgICAgICAgICAgICB5ID0gbmV3WTtcclxuXHQgICAgICAgIH1cclxuXHJcblx0ICAgICAgICAvLyBDb21wdXRlIHBpIGluZGV4IGNvbnN0YW50c1xyXG5cdCAgICAgICAgZm9yICh2YXIgeCA9IDA7IHggPCA1OyB4KyspIHtcclxuXHQgICAgICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IDU7IHkrKykge1xyXG5cdCAgICAgICAgICAgICAgICBQSV9JTkRFWEVTW3ggKyA1ICogeV0gPSB5ICsgKCgyICogeCArIDMgKiB5KSAlIDUpICogNTtcclxuXHQgICAgICAgICAgICB9XHJcblx0ICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgLy8gQ29tcHV0ZSByb3VuZCBjb25zdGFudHNcclxuXHQgICAgICAgIHZhciBMRlNSID0gMHgwMTtcclxuXHQgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMjQ7IGkrKykge1xyXG5cdCAgICAgICAgICAgIHZhciByb3VuZENvbnN0YW50TXN3ID0gMDtcclxuXHQgICAgICAgICAgICB2YXIgcm91bmRDb25zdGFudExzdyA9IDA7XHJcblxyXG5cdCAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgNzsgaisrKSB7XHJcblx0ICAgICAgICAgICAgICAgIGlmIChMRlNSICYgMHgwMSkge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIGJpdFBvc2l0aW9uID0gKDEgPDwgaikgLSAxO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKGJpdFBvc2l0aW9uIDwgMzIpIHtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICByb3VuZENvbnN0YW50THN3IF49IDEgPDwgYml0UG9zaXRpb247XHJcblx0ICAgICAgICAgICAgICAgICAgICB9IGVsc2UgLyogaWYgKGJpdFBvc2l0aW9uID49IDMyKSAqLyB7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgcm91bmRDb25zdGFudE1zdyBePSAxIDw8IChiaXRQb3NpdGlvbiAtIDMyKTtcclxuXHQgICAgICAgICAgICAgICAgICAgIH1cclxuXHQgICAgICAgICAgICAgICAgfVxyXG5cclxuXHQgICAgICAgICAgICAgICAgLy8gQ29tcHV0ZSBuZXh0IExGU1JcclxuXHQgICAgICAgICAgICAgICAgaWYgKExGU1IgJiAweDgwKSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICAvLyBQcmltaXRpdmUgcG9seW5vbWlhbCBvdmVyIEdGKDIpOiB4XjggKyB4XjYgKyB4XjUgKyB4XjQgKyAxXHJcblx0ICAgICAgICAgICAgICAgICAgICBMRlNSID0gKExGU1IgPDwgMSkgXiAweDcxO1xyXG5cdCAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgTEZTUiA8PD0gMTtcclxuXHQgICAgICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgICAgIH1cclxuXHJcblx0ICAgICAgICAgICAgUk9VTkRfQ09OU1RBTlRTW2ldID0gWDY0V29yZC5jcmVhdGUocm91bmRDb25zdGFudE1zdywgcm91bmRDb25zdGFudExzdyk7XHJcblx0ICAgICAgICB9XHJcblx0ICAgIH0oKSk7XHJcblxyXG5cdCAgICAvLyBSZXVzYWJsZSBvYmplY3RzIGZvciB0ZW1wb3JhcnkgdmFsdWVzXHJcblx0ICAgIHZhciBUID0gW107XHJcblx0ICAgIChmdW5jdGlvbiAoKSB7XHJcblx0ICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDI1OyBpKyspIHtcclxuXHQgICAgICAgICAgICBUW2ldID0gWDY0V29yZC5jcmVhdGUoKTtcclxuXHQgICAgICAgIH1cclxuXHQgICAgfSgpKTtcclxuXHJcblx0ICAgIC8qKlxyXG5cdCAgICAgKiBTSEEtMyBoYXNoIGFsZ29yaXRobS5cclxuXHQgICAgICovXHJcblx0ICAgIHZhciBTSEEzID0gQ19hbGdvLlNIQTMgPSBIYXNoZXIuZXh0ZW5kKHtcclxuXHQgICAgICAgIC8qKlxyXG5cdCAgICAgICAgICogQ29uZmlndXJhdGlvbiBvcHRpb25zLlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBvdXRwdXRMZW5ndGhcclxuXHQgICAgICAgICAqICAgVGhlIGRlc2lyZWQgbnVtYmVyIG9mIGJpdHMgaW4gdGhlIG91dHB1dCBoYXNoLlxyXG5cdCAgICAgICAgICogICBPbmx5IHZhbHVlcyBwZXJtaXR0ZWQgYXJlOiAyMjQsIDI1NiwgMzg0LCA1MTIuXHJcblx0ICAgICAgICAgKiAgIERlZmF1bHQ6IDUxMlxyXG5cdCAgICAgICAgICovXHJcblx0ICAgICAgICBjZmc6IEhhc2hlci5jZmcuZXh0ZW5kKHtcclxuXHQgICAgICAgICAgICBvdXRwdXRMZW5ndGg6IDUxMlxyXG5cdCAgICAgICAgfSksXHJcblxyXG5cdCAgICAgICAgX2RvUmVzZXQ6IGZ1bmN0aW9uICgpIHtcclxuXHQgICAgICAgICAgICB2YXIgc3RhdGUgPSB0aGlzLl9zdGF0ZSA9IFtdXHJcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAyNTsgaSsrKSB7XHJcblx0ICAgICAgICAgICAgICAgIHN0YXRlW2ldID0gbmV3IFg2NFdvcmQuaW5pdCgpO1xyXG5cdCAgICAgICAgICAgIH1cclxuXHJcblx0ICAgICAgICAgICAgdGhpcy5ibG9ja1NpemUgPSAoMTYwMCAtIDIgKiB0aGlzLmNmZy5vdXRwdXRMZW5ndGgpIC8gMzI7XHJcblx0ICAgICAgICB9LFxyXG5cclxuXHQgICAgICAgIF9kb1Byb2Nlc3NCbG9jazogZnVuY3Rpb24gKE0sIG9mZnNldCkge1xyXG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xyXG5cdCAgICAgICAgICAgIHZhciBzdGF0ZSA9IHRoaXMuX3N0YXRlO1xyXG5cdCAgICAgICAgICAgIHZhciBuQmxvY2tTaXplTGFuZXMgPSB0aGlzLmJsb2NrU2l6ZSAvIDI7XHJcblxyXG5cdCAgICAgICAgICAgIC8vIEFic29yYlxyXG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbkJsb2NrU2l6ZUxhbmVzOyBpKyspIHtcclxuXHQgICAgICAgICAgICAgICAgLy8gU2hvcnRjdXRzXHJcblx0ICAgICAgICAgICAgICAgIHZhciBNMmkgID0gTVtvZmZzZXQgKyAyICogaV07XHJcblx0ICAgICAgICAgICAgICAgIHZhciBNMmkxID0gTVtvZmZzZXQgKyAyICogaSArIDFdO1xyXG5cclxuXHQgICAgICAgICAgICAgICAgLy8gU3dhcCBlbmRpYW5cclxuXHQgICAgICAgICAgICAgICAgTTJpID0gKFxyXG5cdCAgICAgICAgICAgICAgICAgICAgKCgoTTJpIDw8IDgpICB8IChNMmkgPj4+IDI0KSkgJiAweDAwZmYwMGZmKSB8XHJcblx0ICAgICAgICAgICAgICAgICAgICAoKChNMmkgPDwgMjQpIHwgKE0yaSA+Pj4gOCkpICAmIDB4ZmYwMGZmMDApXHJcblx0ICAgICAgICAgICAgICAgICk7XHJcblx0ICAgICAgICAgICAgICAgIE0yaTEgPSAoXHJcblx0ICAgICAgICAgICAgICAgICAgICAoKChNMmkxIDw8IDgpICB8IChNMmkxID4+PiAyNCkpICYgMHgwMGZmMDBmZikgfFxyXG5cdCAgICAgICAgICAgICAgICAgICAgKCgoTTJpMSA8PCAyNCkgfCAoTTJpMSA+Pj4gOCkpICAmIDB4ZmYwMGZmMDApXHJcblx0ICAgICAgICAgICAgICAgICk7XHJcblxyXG5cdCAgICAgICAgICAgICAgICAvLyBBYnNvcmIgbWVzc2FnZSBpbnRvIHN0YXRlXHJcblx0ICAgICAgICAgICAgICAgIHZhciBsYW5lID0gc3RhdGVbaV07XHJcblx0ICAgICAgICAgICAgICAgIGxhbmUuaGlnaCBePSBNMmkxO1xyXG5cdCAgICAgICAgICAgICAgICBsYW5lLmxvdyAgXj0gTTJpO1xyXG5cdCAgICAgICAgICAgIH1cclxuXHJcblx0ICAgICAgICAgICAgLy8gUm91bmRzXHJcblx0ICAgICAgICAgICAgZm9yICh2YXIgcm91bmQgPSAwOyByb3VuZCA8IDI0OyByb3VuZCsrKSB7XHJcblx0ICAgICAgICAgICAgICAgIC8vIFRoZXRhXHJcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgNTsgeCsrKSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICAvLyBNaXggY29sdW1uIGxhbmVzXHJcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgdE1zdyA9IDAsIHRMc3cgPSAwO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgeSA9IDA7IHkgPCA1OyB5KyspIHtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGFuZSA9IHN0YXRlW3ggKyA1ICogeV07XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdE1zdyBePSBsYW5lLmhpZ2g7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdExzdyBePSBsYW5lLmxvdztcclxuXHQgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblx0ICAgICAgICAgICAgICAgICAgICAvLyBUZW1wb3JhcnkgdmFsdWVzXHJcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgVHggPSBUW3hdO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgVHguaGlnaCA9IHRNc3c7XHJcblx0ICAgICAgICAgICAgICAgICAgICBUeC5sb3cgID0gdExzdztcclxuXHQgICAgICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciB4ID0gMDsgeCA8IDU7IHgrKykge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgLy8gU2hvcnRjdXRzXHJcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgVHg0ID0gVFsoeCArIDQpICUgNV07XHJcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgVHgxID0gVFsoeCArIDEpICUgNV07XHJcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgVHgxTXN3ID0gVHgxLmhpZ2g7XHJcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgVHgxTHN3ID0gVHgxLmxvdztcclxuXHJcblx0ICAgICAgICAgICAgICAgICAgICAvLyBNaXggc3Vycm91bmRpbmcgY29sdW1uc1xyXG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIHRNc3cgPSBUeDQuaGlnaCBeICgoVHgxTXN3IDw8IDEpIHwgKFR4MUxzdyA+Pj4gMzEpKTtcclxuXHQgICAgICAgICAgICAgICAgICAgIHZhciB0THN3ID0gVHg0LmxvdyAgXiAoKFR4MUxzdyA8PCAxKSB8IChUeDFNc3cgPj4+IDMxKSk7XHJcblx0ICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IDU7IHkrKykge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsYW5lID0gc3RhdGVbeCArIDUgKiB5XTtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICBsYW5lLmhpZ2ggXj0gdE1zdztcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICBsYW5lLmxvdyAgXj0gdExzdztcclxuXHQgICAgICAgICAgICAgICAgICAgIH1cclxuXHQgICAgICAgICAgICAgICAgfVxyXG5cclxuXHQgICAgICAgICAgICAgICAgLy8gUmhvIFBpXHJcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIGxhbmVJbmRleCA9IDE7IGxhbmVJbmRleCA8IDI1OyBsYW5lSW5kZXgrKykge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgLy8gU2hvcnRjdXRzXHJcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgbGFuZSA9IHN0YXRlW2xhbmVJbmRleF07XHJcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgbGFuZU1zdyA9IGxhbmUuaGlnaDtcclxuXHQgICAgICAgICAgICAgICAgICAgIHZhciBsYW5lTHN3ID0gbGFuZS5sb3c7XHJcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgcmhvT2Zmc2V0ID0gUkhPX09GRlNFVFNbbGFuZUluZGV4XTtcclxuXHJcblx0ICAgICAgICAgICAgICAgICAgICAvLyBSb3RhdGUgbGFuZXNcclxuXHQgICAgICAgICAgICAgICAgICAgIGlmIChyaG9PZmZzZXQgPCAzMikge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0TXN3ID0gKGxhbmVNc3cgPDwgcmhvT2Zmc2V0KSB8IChsYW5lTHN3ID4+PiAoMzIgLSByaG9PZmZzZXQpKTtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdExzdyA9IChsYW5lTHN3IDw8IHJob09mZnNldCkgfCAobGFuZU1zdyA+Pj4gKDMyIC0gcmhvT2Zmc2V0KSk7XHJcblx0ICAgICAgICAgICAgICAgICAgICB9IGVsc2UgLyogaWYgKHJob09mZnNldCA+PSAzMikgKi8ge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0TXN3ID0gKGxhbmVMc3cgPDwgKHJob09mZnNldCAtIDMyKSkgfCAobGFuZU1zdyA+Pj4gKDY0IC0gcmhvT2Zmc2V0KSk7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRMc3cgPSAobGFuZU1zdyA8PCAocmhvT2Zmc2V0IC0gMzIpKSB8IChsYW5lTHN3ID4+PiAoNjQgLSByaG9PZmZzZXQpKTtcclxuXHQgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblx0ICAgICAgICAgICAgICAgICAgICAvLyBUcmFuc3Bvc2UgbGFuZXNcclxuXHQgICAgICAgICAgICAgICAgICAgIHZhciBUUGlMYW5lID0gVFtQSV9JTkRFWEVTW2xhbmVJbmRleF1dO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgVFBpTGFuZS5oaWdoID0gdE1zdztcclxuXHQgICAgICAgICAgICAgICAgICAgIFRQaUxhbmUubG93ICA9IHRMc3c7XHJcblx0ICAgICAgICAgICAgICAgIH1cclxuXHJcblx0ICAgICAgICAgICAgICAgIC8vIFJobyBwaSBhdCB4ID0geSA9IDBcclxuXHQgICAgICAgICAgICAgICAgdmFyIFQwID0gVFswXTtcclxuXHQgICAgICAgICAgICAgICAgdmFyIHN0YXRlMCA9IHN0YXRlWzBdO1xyXG5cdCAgICAgICAgICAgICAgICBUMC5oaWdoID0gc3RhdGUwLmhpZ2g7XHJcblx0ICAgICAgICAgICAgICAgIFQwLmxvdyAgPSBzdGF0ZTAubG93O1xyXG5cclxuXHQgICAgICAgICAgICAgICAgLy8gQ2hpXHJcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIHggPSAwOyB4IDwgNTsgeCsrKSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB5ID0gMDsgeSA8IDU7IHkrKykge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsYW5lSW5kZXggPSB4ICsgNSAqIHk7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGxhbmUgPSBzdGF0ZVtsYW5lSW5kZXhdO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHZhciBUTGFuZSA9IFRbbGFuZUluZGV4XTtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICB2YXIgVHgxTGFuZSA9IFRbKCh4ICsgMSkgJSA1KSArIDUgKiB5XTtcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICB2YXIgVHgyTGFuZSA9IFRbKCh4ICsgMikgJSA1KSArIDUgKiB5XTtcclxuXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWl4IHJvd3NcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICBsYW5lLmhpZ2ggPSBUTGFuZS5oaWdoIF4gKH5UeDFMYW5lLmhpZ2ggJiBUeDJMYW5lLmhpZ2gpO1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIGxhbmUubG93ICA9IFRMYW5lLmxvdyAgXiAoflR4MUxhbmUubG93ICAmIFR4MkxhbmUubG93KTtcclxuXHQgICAgICAgICAgICAgICAgICAgIH1cclxuXHQgICAgICAgICAgICAgICAgfVxyXG5cclxuXHQgICAgICAgICAgICAgICAgLy8gSW90YVxyXG5cdCAgICAgICAgICAgICAgICB2YXIgbGFuZSA9IHN0YXRlWzBdO1xyXG5cdCAgICAgICAgICAgICAgICB2YXIgcm91bmRDb25zdGFudCA9IFJPVU5EX0NPTlNUQU5UU1tyb3VuZF07XHJcblx0ICAgICAgICAgICAgICAgIGxhbmUuaGlnaCBePSByb3VuZENvbnN0YW50LmhpZ2g7XHJcblx0ICAgICAgICAgICAgICAgIGxhbmUubG93ICBePSByb3VuZENvbnN0YW50Lmxvdzs7XHJcblx0ICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgfSxcclxuXHJcblx0ICAgICAgICBfZG9GaW5hbGl6ZTogZnVuY3Rpb24gKCkge1xyXG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xyXG5cdCAgICAgICAgICAgIHZhciBkYXRhID0gdGhpcy5fZGF0YTtcclxuXHQgICAgICAgICAgICB2YXIgZGF0YVdvcmRzID0gZGF0YS53b3JkcztcclxuXHQgICAgICAgICAgICB2YXIgbkJpdHNUb3RhbCA9IHRoaXMuX25EYXRhQnl0ZXMgKiA4O1xyXG5cdCAgICAgICAgICAgIHZhciBuQml0c0xlZnQgPSBkYXRhLnNpZ0J5dGVzICogODtcclxuXHQgICAgICAgICAgICB2YXIgYmxvY2tTaXplQml0cyA9IHRoaXMuYmxvY2tTaXplICogMzI7XHJcblxyXG5cdCAgICAgICAgICAgIC8vIEFkZCBwYWRkaW5nXHJcblx0ICAgICAgICAgICAgZGF0YVdvcmRzW25CaXRzTGVmdCA+Pj4gNV0gfD0gMHgxIDw8ICgyNCAtIG5CaXRzTGVmdCAlIDMyKTtcclxuXHQgICAgICAgICAgICBkYXRhV29yZHNbKChNYXRoLmNlaWwoKG5CaXRzTGVmdCArIDEpIC8gYmxvY2tTaXplQml0cykgKiBibG9ja1NpemVCaXRzKSA+Pj4gNSkgLSAxXSB8PSAweDgwO1xyXG5cdCAgICAgICAgICAgIGRhdGEuc2lnQnl0ZXMgPSBkYXRhV29yZHMubGVuZ3RoICogNDtcclxuXHJcblx0ICAgICAgICAgICAgLy8gSGFzaCBmaW5hbCBibG9ja3NcclxuXHQgICAgICAgICAgICB0aGlzLl9wcm9jZXNzKCk7XHJcblxyXG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xyXG5cdCAgICAgICAgICAgIHZhciBzdGF0ZSA9IHRoaXMuX3N0YXRlO1xyXG5cdCAgICAgICAgICAgIHZhciBvdXRwdXRMZW5ndGhCeXRlcyA9IHRoaXMuY2ZnLm91dHB1dExlbmd0aCAvIDg7XHJcblx0ICAgICAgICAgICAgdmFyIG91dHB1dExlbmd0aExhbmVzID0gb3V0cHV0TGVuZ3RoQnl0ZXMgLyA4O1xyXG5cclxuXHQgICAgICAgICAgICAvLyBTcXVlZXplXHJcblx0ICAgICAgICAgICAgdmFyIGhhc2hXb3JkcyA9IFtdO1xyXG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb3V0cHV0TGVuZ3RoTGFuZXM7IGkrKykge1xyXG5cdCAgICAgICAgICAgICAgICAvLyBTaG9ydGN1dHNcclxuXHQgICAgICAgICAgICAgICAgdmFyIGxhbmUgPSBzdGF0ZVtpXTtcclxuXHQgICAgICAgICAgICAgICAgdmFyIGxhbmVNc3cgPSBsYW5lLmhpZ2g7XHJcblx0ICAgICAgICAgICAgICAgIHZhciBsYW5lTHN3ID0gbGFuZS5sb3c7XHJcblxyXG5cdCAgICAgICAgICAgICAgICAvLyBTd2FwIGVuZGlhblxyXG5cdCAgICAgICAgICAgICAgICBsYW5lTXN3ID0gKFxyXG5cdCAgICAgICAgICAgICAgICAgICAgKCgobGFuZU1zdyA8PCA4KSAgfCAobGFuZU1zdyA+Pj4gMjQpKSAmIDB4MDBmZjAwZmYpIHxcclxuXHQgICAgICAgICAgICAgICAgICAgICgoKGxhbmVNc3cgPDwgMjQpIHwgKGxhbmVNc3cgPj4+IDgpKSAgJiAweGZmMDBmZjAwKVxyXG5cdCAgICAgICAgICAgICAgICApO1xyXG5cdCAgICAgICAgICAgICAgICBsYW5lTHN3ID0gKFxyXG5cdCAgICAgICAgICAgICAgICAgICAgKCgobGFuZUxzdyA8PCA4KSAgfCAobGFuZUxzdyA+Pj4gMjQpKSAmIDB4MDBmZjAwZmYpIHxcclxuXHQgICAgICAgICAgICAgICAgICAgICgoKGxhbmVMc3cgPDwgMjQpIHwgKGxhbmVMc3cgPj4+IDgpKSAgJiAweGZmMDBmZjAwKVxyXG5cdCAgICAgICAgICAgICAgICApO1xyXG5cclxuXHQgICAgICAgICAgICAgICAgLy8gU3F1ZWV6ZSBzdGF0ZSB0byByZXRyaWV2ZSBoYXNoXHJcblx0ICAgICAgICAgICAgICAgIGhhc2hXb3Jkcy5wdXNoKGxhbmVMc3cpO1xyXG5cdCAgICAgICAgICAgICAgICBoYXNoV29yZHMucHVzaChsYW5lTXN3KTtcclxuXHQgICAgICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgICAgIC8vIFJldHVybiBmaW5hbCBjb21wdXRlZCBoYXNoXHJcblx0ICAgICAgICAgICAgcmV0dXJuIG5ldyBXb3JkQXJyYXkuaW5pdChoYXNoV29yZHMsIG91dHB1dExlbmd0aEJ5dGVzKTtcclxuXHQgICAgICAgIH0sXHJcblxyXG5cdCAgICAgICAgY2xvbmU6IGZ1bmN0aW9uICgpIHtcclxuXHQgICAgICAgICAgICB2YXIgY2xvbmUgPSBIYXNoZXIuY2xvbmUuY2FsbCh0aGlzKTtcclxuXHJcblx0ICAgICAgICAgICAgdmFyIHN0YXRlID0gY2xvbmUuX3N0YXRlID0gdGhpcy5fc3RhdGUuc2xpY2UoMCk7XHJcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAyNTsgaSsrKSB7XHJcblx0ICAgICAgICAgICAgICAgIHN0YXRlW2ldID0gc3RhdGVbaV0uY2xvbmUoKTtcclxuXHQgICAgICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgICAgIHJldHVybiBjbG9uZTtcclxuXHQgICAgICAgIH1cclxuXHQgICAgfSk7XHJcblxyXG5cdCAgICAvKipcclxuXHQgICAgICogU2hvcnRjdXQgZnVuY3Rpb24gdG8gdGhlIGhhc2hlcidzIG9iamVjdCBpbnRlcmZhY2UuXHJcblx0ICAgICAqXHJcblx0ICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZSBUaGUgbWVzc2FnZSB0byBoYXNoLlxyXG5cdCAgICAgKlxyXG5cdCAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBoYXNoLlxyXG5cdCAgICAgKlxyXG5cdCAgICAgKiBAc3RhdGljXHJcblx0ICAgICAqXHJcblx0ICAgICAqIEBleGFtcGxlXHJcblx0ICAgICAqXHJcblx0ICAgICAqICAgICB2YXIgaGFzaCA9IENyeXB0b0pTLlNIQTMoJ21lc3NhZ2UnKTtcclxuXHQgICAgICogICAgIHZhciBoYXNoID0gQ3J5cHRvSlMuU0hBMyh3b3JkQXJyYXkpO1xyXG5cdCAgICAgKi9cclxuXHQgICAgQy5TSEEzID0gSGFzaGVyLl9jcmVhdGVIZWxwZXIoU0hBMyk7XHJcblxyXG5cdCAgICAvKipcclxuXHQgICAgICogU2hvcnRjdXQgZnVuY3Rpb24gdG8gdGhlIEhNQUMncyBvYmplY3QgaW50ZXJmYWNlLlxyXG5cdCAgICAgKlxyXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gaGFzaC5cclxuXHQgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBrZXkgVGhlIHNlY3JldCBrZXkuXHJcblx0ICAgICAqXHJcblx0ICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIEhNQUMuXHJcblx0ICAgICAqXHJcblx0ICAgICAqIEBzdGF0aWNcclxuXHQgICAgICpcclxuXHQgICAgICogQGV4YW1wbGVcclxuXHQgICAgICpcclxuXHQgICAgICogICAgIHZhciBobWFjID0gQ3J5cHRvSlMuSG1hY1NIQTMobWVzc2FnZSwga2V5KTtcclxuXHQgICAgICovXHJcblx0ICAgIEMuSG1hY1NIQTMgPSBIYXNoZXIuX2NyZWF0ZUhtYWNIZWxwZXIoU0hBMyk7XHJcblx0fShNYXRoKSk7XHJcblxyXG5cclxuXHRyZXR1cm4gQ3J5cHRvSlMuU0hBMztcclxuXHJcbn0pKTsiLCI7KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XHJcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XHJcblx0XHQvLyBDb21tb25KU1xyXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9jb3JlXCIpKTtcclxuXHR9XHJcblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcclxuXHRcdC8vIEFNRFxyXG5cdFx0ZGVmaW5lKFtcIi4vY29yZVwiXSwgZmFjdG9yeSk7XHJcblx0fVxyXG5cdGVsc2Uge1xyXG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxyXG5cdFx0ZmFjdG9yeShyb290LkNyeXB0b0pTKTtcclxuXHR9XHJcbn0odGhpcywgZnVuY3Rpb24gKENyeXB0b0pTKSB7XHJcblxyXG5cdC8qKiBAcHJlc2VydmVcclxuXHQoYykgMjAxMiBieSBDw6lkcmljIE1lc25pbC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuXHJcblx0UmVkaXN0cmlidXRpb24gYW5kIHVzZSBpbiBzb3VyY2UgYW5kIGJpbmFyeSBmb3Jtcywgd2l0aCBvciB3aXRob3V0IG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxyXG5cclxuXHQgICAgLSBSZWRpc3RyaWJ1dGlvbnMgb2Ygc291cmNlIGNvZGUgbXVzdCByZXRhaW4gdGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXHJcblx0ICAgIC0gUmVkaXN0cmlidXRpb25zIGluIGJpbmFyeSBmb3JtIG11c3QgcmVwcm9kdWNlIHRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZSBkb2N1bWVudGF0aW9uIGFuZC9vciBvdGhlciBtYXRlcmlhbHMgcHJvdmlkZWQgd2l0aCB0aGUgZGlzdHJpYnV0aW9uLlxyXG5cclxuXHRUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIEJZIFRIRSBDT1BZUklHSFQgSE9MREVSUyBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1MgT1IgSU1QTElFRCBXQVJSQU5USUVTLCBJTkNMVURJTkcsIEJVVCBOT1QgTElNSVRFRCBUTywgVEhFIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFkgQU5EIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFSRSBESVNDTEFJTUVELiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQ09QWVJJR0hUIEhPTERFUiBPUiBDT05UUklCVVRPUlMgQkUgTElBQkxFIEZPUiBBTlkgRElSRUNULCBJTkRJUkVDVCwgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBQUk9DVVJFTUVOVCBPRiBTVUJTVElUVVRFIEdPT0RTIE9SIFNFUlZJQ0VTOyBMT1NTIE9GIFVTRSwgREFUQSwgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQ09OVFJBQ1QsIFNUUklDVCBMSUFCSUxJVFksIE9SIFRPUlQgKElOQ0xVRElORyBORUdMSUdFTkNFIE9SIE9USEVSV0lTRSkgQVJJU0lORyBJTiBBTlkgV0FZIE9VVCBPRiBUSEUgVVNFIE9GIFRISVMgU09GVFdBUkUsIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXHJcblx0Ki9cclxuXHJcblx0KGZ1bmN0aW9uIChNYXRoKSB7XHJcblx0ICAgIC8vIFNob3J0Y3V0c1xyXG5cdCAgICB2YXIgQyA9IENyeXB0b0pTO1xyXG5cdCAgICB2YXIgQ19saWIgPSBDLmxpYjtcclxuXHQgICAgdmFyIFdvcmRBcnJheSA9IENfbGliLldvcmRBcnJheTtcclxuXHQgICAgdmFyIEhhc2hlciA9IENfbGliLkhhc2hlcjtcclxuXHQgICAgdmFyIENfYWxnbyA9IEMuYWxnbztcclxuXHJcblx0ICAgIC8vIENvbnN0YW50cyB0YWJsZVxyXG5cdCAgICB2YXIgX3psID0gV29yZEFycmF5LmNyZWF0ZShbXHJcblx0ICAgICAgICAwLCAgMSwgIDIsICAzLCAgNCwgIDUsICA2LCAgNywgIDgsICA5LCAxMCwgMTEsIDEyLCAxMywgMTQsIDE1LFxyXG5cdCAgICAgICAgNywgIDQsIDEzLCAgMSwgMTAsICA2LCAxNSwgIDMsIDEyLCAgMCwgIDksICA1LCAgMiwgMTQsIDExLCAgOCxcclxuXHQgICAgICAgIDMsIDEwLCAxNCwgIDQsICA5LCAxNSwgIDgsICAxLCAgMiwgIDcsICAwLCAgNiwgMTMsIDExLCAgNSwgMTIsXHJcblx0ICAgICAgICAxLCAgOSwgMTEsIDEwLCAgMCwgIDgsIDEyLCAgNCwgMTMsICAzLCAgNywgMTUsIDE0LCAgNSwgIDYsICAyLFxyXG5cdCAgICAgICAgNCwgIDAsICA1LCAgOSwgIDcsIDEyLCAgMiwgMTAsIDE0LCAgMSwgIDMsICA4LCAxMSwgIDYsIDE1LCAxM10pO1xyXG5cdCAgICB2YXIgX3pyID0gV29yZEFycmF5LmNyZWF0ZShbXHJcblx0ICAgICAgICA1LCAxNCwgIDcsICAwLCAgOSwgIDIsIDExLCAgNCwgMTMsICA2LCAxNSwgIDgsICAxLCAxMCwgIDMsIDEyLFxyXG5cdCAgICAgICAgNiwgMTEsICAzLCAgNywgIDAsIDEzLCAgNSwgMTAsIDE0LCAxNSwgIDgsIDEyLCAgNCwgIDksICAxLCAgMixcclxuXHQgICAgICAgIDE1LCAgNSwgIDEsICAzLCAgNywgMTQsICA2LCAgOSwgMTEsICA4LCAxMiwgIDIsIDEwLCAgMCwgIDQsIDEzLFxyXG5cdCAgICAgICAgOCwgIDYsICA0LCAgMSwgIDMsIDExLCAxNSwgIDAsICA1LCAxMiwgIDIsIDEzLCAgOSwgIDcsIDEwLCAxNCxcclxuXHQgICAgICAgIDEyLCAxNSwgMTAsICA0LCAgMSwgIDUsICA4LCAgNywgIDYsICAyLCAxMywgMTQsICAwLCAgMywgIDksIDExXSk7XHJcblx0ICAgIHZhciBfc2wgPSBXb3JkQXJyYXkuY3JlYXRlKFtcclxuXHQgICAgICAgICAxMSwgMTQsIDE1LCAxMiwgIDUsICA4LCAgNywgIDksIDExLCAxMywgMTQsIDE1LCAgNiwgIDcsICA5LCAgOCxcclxuXHQgICAgICAgIDcsIDYsICAgOCwgMTMsIDExLCAgOSwgIDcsIDE1LCAgNywgMTIsIDE1LCAgOSwgMTEsICA3LCAxMywgMTIsXHJcblx0ICAgICAgICAxMSwgMTMsICA2LCAgNywgMTQsICA5LCAxMywgMTUsIDE0LCAgOCwgMTMsICA2LCAgNSwgMTIsICA3LCAgNSxcclxuXHQgICAgICAgICAgMTEsIDEyLCAxNCwgMTUsIDE0LCAxNSwgIDksICA4LCAgOSwgMTQsICA1LCAgNiwgIDgsICA2LCAgNSwgMTIsXHJcblx0ICAgICAgICA5LCAxNSwgIDUsIDExLCAgNiwgIDgsIDEzLCAxMiwgIDUsIDEyLCAxMywgMTQsIDExLCAgOCwgIDUsICA2IF0pO1xyXG5cdCAgICB2YXIgX3NyID0gV29yZEFycmF5LmNyZWF0ZShbXHJcblx0ICAgICAgICA4LCAgOSwgIDksIDExLCAxMywgMTUsIDE1LCAgNSwgIDcsICA3LCAgOCwgMTEsIDE0LCAxNCwgMTIsICA2LFxyXG5cdCAgICAgICAgOSwgMTMsIDE1LCAgNywgMTIsICA4LCAgOSwgMTEsICA3LCAgNywgMTIsICA3LCAgNiwgMTUsIDEzLCAxMSxcclxuXHQgICAgICAgIDksICA3LCAxNSwgMTEsICA4LCAgNiwgIDYsIDE0LCAxMiwgMTMsICA1LCAxNCwgMTMsIDEzLCAgNywgIDUsXHJcblx0ICAgICAgICAxNSwgIDUsICA4LCAxMSwgMTQsIDE0LCAgNiwgMTQsICA2LCAgOSwgMTIsICA5LCAxMiwgIDUsIDE1LCAgOCxcclxuXHQgICAgICAgIDgsICA1LCAxMiwgIDksIDEyLCAgNSwgMTQsICA2LCAgOCwgMTMsICA2LCAgNSwgMTUsIDEzLCAxMSwgMTEgXSk7XHJcblxyXG5cdCAgICB2YXIgX2hsID0gIFdvcmRBcnJheS5jcmVhdGUoWyAweDAwMDAwMDAwLCAweDVBODI3OTk5LCAweDZFRDlFQkExLCAweDhGMUJCQ0RDLCAweEE5NTNGRDRFXSk7XHJcblx0ICAgIHZhciBfaHIgPSAgV29yZEFycmF5LmNyZWF0ZShbIDB4NTBBMjhCRTYsIDB4NUM0REQxMjQsIDB4NkQ3MDNFRjMsIDB4N0E2RDc2RTksIDB4MDAwMDAwMDBdKTtcclxuXHJcblx0ICAgIC8qKlxyXG5cdCAgICAgKiBSSVBFTUQxNjAgaGFzaCBhbGdvcml0aG0uXHJcblx0ICAgICAqL1xyXG5cdCAgICB2YXIgUklQRU1EMTYwID0gQ19hbGdvLlJJUEVNRDE2MCA9IEhhc2hlci5leHRlbmQoe1xyXG5cdCAgICAgICAgX2RvUmVzZXQ6IGZ1bmN0aW9uICgpIHtcclxuXHQgICAgICAgICAgICB0aGlzLl9oYXNoICA9IFdvcmRBcnJheS5jcmVhdGUoWzB4Njc0NTIzMDEsIDB4RUZDREFCODksIDB4OThCQURDRkUsIDB4MTAzMjU0NzYsIDB4QzNEMkUxRjBdKTtcclxuXHQgICAgICAgIH0sXHJcblxyXG5cdCAgICAgICAgX2RvUHJvY2Vzc0Jsb2NrOiBmdW5jdGlvbiAoTSwgb2Zmc2V0KSB7XHJcblxyXG5cdCAgICAgICAgICAgIC8vIFN3YXAgZW5kaWFuXHJcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XHJcblx0ICAgICAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xyXG5cdCAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0X2kgPSBvZmZzZXQgKyBpO1xyXG5cdCAgICAgICAgICAgICAgICB2YXIgTV9vZmZzZXRfaSA9IE1bb2Zmc2V0X2ldO1xyXG5cclxuXHQgICAgICAgICAgICAgICAgLy8gU3dhcFxyXG5cdCAgICAgICAgICAgICAgICBNW29mZnNldF9pXSA9IChcclxuXHQgICAgICAgICAgICAgICAgICAgICgoKE1fb2Zmc2V0X2kgPDwgOCkgIHwgKE1fb2Zmc2V0X2kgPj4+IDI0KSkgJiAweDAwZmYwMGZmKSB8XHJcblx0ICAgICAgICAgICAgICAgICAgICAoKChNX29mZnNldF9pIDw8IDI0KSB8IChNX29mZnNldF9pID4+PiA4KSkgICYgMHhmZjAwZmYwMClcclxuXHQgICAgICAgICAgICAgICAgKTtcclxuXHQgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRcclxuXHQgICAgICAgICAgICB2YXIgSCAgPSB0aGlzLl9oYXNoLndvcmRzO1xyXG5cdCAgICAgICAgICAgIHZhciBobCA9IF9obC53b3JkcztcclxuXHQgICAgICAgICAgICB2YXIgaHIgPSBfaHIud29yZHM7XHJcblx0ICAgICAgICAgICAgdmFyIHpsID0gX3psLndvcmRzO1xyXG5cdCAgICAgICAgICAgIHZhciB6ciA9IF96ci53b3JkcztcclxuXHQgICAgICAgICAgICB2YXIgc2wgPSBfc2wud29yZHM7XHJcblx0ICAgICAgICAgICAgdmFyIHNyID0gX3NyLndvcmRzO1xyXG5cclxuXHQgICAgICAgICAgICAvLyBXb3JraW5nIHZhcmlhYmxlc1xyXG5cdCAgICAgICAgICAgIHZhciBhbCwgYmwsIGNsLCBkbCwgZWw7XHJcblx0ICAgICAgICAgICAgdmFyIGFyLCBiciwgY3IsIGRyLCBlcjtcclxuXHJcblx0ICAgICAgICAgICAgYXIgPSBhbCA9IEhbMF07XHJcblx0ICAgICAgICAgICAgYnIgPSBibCA9IEhbMV07XHJcblx0ICAgICAgICAgICAgY3IgPSBjbCA9IEhbMl07XHJcblx0ICAgICAgICAgICAgZHIgPSBkbCA9IEhbM107XHJcblx0ICAgICAgICAgICAgZXIgPSBlbCA9IEhbNF07XHJcblx0ICAgICAgICAgICAgLy8gQ29tcHV0YXRpb25cclxuXHQgICAgICAgICAgICB2YXIgdDtcclxuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDgwOyBpICs9IDEpIHtcclxuXHQgICAgICAgICAgICAgICAgdCA9IChhbCArICBNW29mZnNldCt6bFtpXV0pfDA7XHJcblx0ICAgICAgICAgICAgICAgIGlmIChpPDE2KXtcclxuXHRcdCAgICAgICAgICAgIHQgKz0gIGYxKGJsLGNsLGRsKSArIGhsWzBdO1xyXG5cdCAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGk8MzIpIHtcclxuXHRcdCAgICAgICAgICAgIHQgKz0gIGYyKGJsLGNsLGRsKSArIGhsWzFdO1xyXG5cdCAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGk8NDgpIHtcclxuXHRcdCAgICAgICAgICAgIHQgKz0gIGYzKGJsLGNsLGRsKSArIGhsWzJdO1xyXG5cdCAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGk8NjQpIHtcclxuXHRcdCAgICAgICAgICAgIHQgKz0gIGY0KGJsLGNsLGRsKSArIGhsWzNdO1xyXG5cdCAgICAgICAgICAgICAgICB9IGVsc2Ugey8vIGlmIChpPDgwKSB7XHJcblx0XHQgICAgICAgICAgICB0ICs9ICBmNShibCxjbCxkbCkgKyBobFs0XTtcclxuXHQgICAgICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgICAgICAgICB0ID0gdHwwO1xyXG5cdCAgICAgICAgICAgICAgICB0ID0gIHJvdGwodCxzbFtpXSk7XHJcblx0ICAgICAgICAgICAgICAgIHQgPSAodCtlbCl8MDtcclxuXHQgICAgICAgICAgICAgICAgYWwgPSBlbDtcclxuXHQgICAgICAgICAgICAgICAgZWwgPSBkbDtcclxuXHQgICAgICAgICAgICAgICAgZGwgPSByb3RsKGNsLCAxMCk7XHJcblx0ICAgICAgICAgICAgICAgIGNsID0gYmw7XHJcblx0ICAgICAgICAgICAgICAgIGJsID0gdDtcclxuXHJcblx0ICAgICAgICAgICAgICAgIHQgPSAoYXIgKyBNW29mZnNldCt6cltpXV0pfDA7XHJcblx0ICAgICAgICAgICAgICAgIGlmIChpPDE2KXtcclxuXHRcdCAgICAgICAgICAgIHQgKz0gIGY1KGJyLGNyLGRyKSArIGhyWzBdO1xyXG5cdCAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGk8MzIpIHtcclxuXHRcdCAgICAgICAgICAgIHQgKz0gIGY0KGJyLGNyLGRyKSArIGhyWzFdO1xyXG5cdCAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGk8NDgpIHtcclxuXHRcdCAgICAgICAgICAgIHQgKz0gIGYzKGJyLGNyLGRyKSArIGhyWzJdO1xyXG5cdCAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGk8NjQpIHtcclxuXHRcdCAgICAgICAgICAgIHQgKz0gIGYyKGJyLGNyLGRyKSArIGhyWzNdO1xyXG5cdCAgICAgICAgICAgICAgICB9IGVsc2Ugey8vIGlmIChpPDgwKSB7XHJcblx0XHQgICAgICAgICAgICB0ICs9ICBmMShicixjcixkcikgKyBocls0XTtcclxuXHQgICAgICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgICAgICAgICB0ID0gdHwwO1xyXG5cdCAgICAgICAgICAgICAgICB0ID0gIHJvdGwodCxzcltpXSkgO1xyXG5cdCAgICAgICAgICAgICAgICB0ID0gKHQrZXIpfDA7XHJcblx0ICAgICAgICAgICAgICAgIGFyID0gZXI7XHJcblx0ICAgICAgICAgICAgICAgIGVyID0gZHI7XHJcblx0ICAgICAgICAgICAgICAgIGRyID0gcm90bChjciwgMTApO1xyXG5cdCAgICAgICAgICAgICAgICBjciA9IGJyO1xyXG5cdCAgICAgICAgICAgICAgICBiciA9IHQ7XHJcblx0ICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgICAgIC8vIEludGVybWVkaWF0ZSBoYXNoIHZhbHVlXHJcblx0ICAgICAgICAgICAgdCAgICA9IChIWzFdICsgY2wgKyBkcil8MDtcclxuXHQgICAgICAgICAgICBIWzFdID0gKEhbMl0gKyBkbCArIGVyKXwwO1xyXG5cdCAgICAgICAgICAgIEhbMl0gPSAoSFszXSArIGVsICsgYXIpfDA7XHJcblx0ICAgICAgICAgICAgSFszXSA9IChIWzRdICsgYWwgKyBicil8MDtcclxuXHQgICAgICAgICAgICBIWzRdID0gKEhbMF0gKyBibCArIGNyKXwwO1xyXG5cdCAgICAgICAgICAgIEhbMF0gPSAgdDtcclxuXHQgICAgICAgIH0sXHJcblxyXG5cdCAgICAgICAgX2RvRmluYWxpemU6IGZ1bmN0aW9uICgpIHtcclxuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcclxuXHQgICAgICAgICAgICB2YXIgZGF0YSA9IHRoaXMuX2RhdGE7XHJcblx0ICAgICAgICAgICAgdmFyIGRhdGFXb3JkcyA9IGRhdGEud29yZHM7XHJcblxyXG5cdCAgICAgICAgICAgIHZhciBuQml0c1RvdGFsID0gdGhpcy5fbkRhdGFCeXRlcyAqIDg7XHJcblx0ICAgICAgICAgICAgdmFyIG5CaXRzTGVmdCA9IGRhdGEuc2lnQnl0ZXMgKiA4O1xyXG5cclxuXHQgICAgICAgICAgICAvLyBBZGQgcGFkZGluZ1xyXG5cdCAgICAgICAgICAgIGRhdGFXb3Jkc1tuQml0c0xlZnQgPj4+IDVdIHw9IDB4ODAgPDwgKDI0IC0gbkJpdHNMZWZ0ICUgMzIpO1xyXG5cdCAgICAgICAgICAgIGRhdGFXb3Jkc1soKChuQml0c0xlZnQgKyA2NCkgPj4+IDkpIDw8IDQpICsgMTRdID0gKFxyXG5cdCAgICAgICAgICAgICAgICAoKChuQml0c1RvdGFsIDw8IDgpICB8IChuQml0c1RvdGFsID4+PiAyNCkpICYgMHgwMGZmMDBmZikgfFxyXG5cdCAgICAgICAgICAgICAgICAoKChuQml0c1RvdGFsIDw8IDI0KSB8IChuQml0c1RvdGFsID4+PiA4KSkgICYgMHhmZjAwZmYwMClcclxuXHQgICAgICAgICAgICApO1xyXG5cdCAgICAgICAgICAgIGRhdGEuc2lnQnl0ZXMgPSAoZGF0YVdvcmRzLmxlbmd0aCArIDEpICogNDtcclxuXHJcblx0ICAgICAgICAgICAgLy8gSGFzaCBmaW5hbCBibG9ja3NcclxuXHQgICAgICAgICAgICB0aGlzLl9wcm9jZXNzKCk7XHJcblxyXG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xyXG5cdCAgICAgICAgICAgIHZhciBoYXNoID0gdGhpcy5faGFzaDtcclxuXHQgICAgICAgICAgICB2YXIgSCA9IGhhc2gud29yZHM7XHJcblxyXG5cdCAgICAgICAgICAgIC8vIFN3YXAgZW5kaWFuXHJcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuXHQgICAgICAgICAgICAgICAgLy8gU2hvcnRjdXRcclxuXHQgICAgICAgICAgICAgICAgdmFyIEhfaSA9IEhbaV07XHJcblxyXG5cdCAgICAgICAgICAgICAgICAvLyBTd2FwXHJcblx0ICAgICAgICAgICAgICAgIEhbaV0gPSAoKChIX2kgPDwgOCkgIHwgKEhfaSA+Pj4gMjQpKSAmIDB4MDBmZjAwZmYpIHxcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICgoKEhfaSA8PCAyNCkgfCAoSF9pID4+PiA4KSkgICYgMHhmZjAwZmYwMCk7XHJcblx0ICAgICAgICAgICAgfVxyXG5cclxuXHQgICAgICAgICAgICAvLyBSZXR1cm4gZmluYWwgY29tcHV0ZWQgaGFzaFxyXG5cdCAgICAgICAgICAgIHJldHVybiBoYXNoO1xyXG5cdCAgICAgICAgfSxcclxuXHJcblx0ICAgICAgICBjbG9uZTogZnVuY3Rpb24gKCkge1xyXG5cdCAgICAgICAgICAgIHZhciBjbG9uZSA9IEhhc2hlci5jbG9uZS5jYWxsKHRoaXMpO1xyXG5cdCAgICAgICAgICAgIGNsb25lLl9oYXNoID0gdGhpcy5faGFzaC5jbG9uZSgpO1xyXG5cclxuXHQgICAgICAgICAgICByZXR1cm4gY2xvbmU7XHJcblx0ICAgICAgICB9XHJcblx0ICAgIH0pO1xyXG5cclxuXHJcblx0ICAgIGZ1bmN0aW9uIGYxKHgsIHksIHopIHtcclxuXHQgICAgICAgIHJldHVybiAoKHgpIF4gKHkpIF4gKHopKTtcclxuXHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGZ1bmN0aW9uIGYyKHgsIHksIHopIHtcclxuXHQgICAgICAgIHJldHVybiAoKCh4KSYoeSkpIHwgKCh+eCkmKHopKSk7XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGZ1bmN0aW9uIGYzKHgsIHksIHopIHtcclxuXHQgICAgICAgIHJldHVybiAoKCh4KSB8ICh+KHkpKSkgXiAoeikpO1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICBmdW5jdGlvbiBmNCh4LCB5LCB6KSB7XHJcblx0ICAgICAgICByZXR1cm4gKCgoeCkgJiAoeikpIHwgKCh5KSYofih6KSkpKTtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgZnVuY3Rpb24gZjUoeCwgeSwgeikge1xyXG5cdCAgICAgICAgcmV0dXJuICgoeCkgXiAoKHkpIHwofih6KSkpKTtcclxuXHJcblx0ICAgIH1cclxuXHJcblx0ICAgIGZ1bmN0aW9uIHJvdGwoeCxuKSB7XHJcblx0ICAgICAgICByZXR1cm4gKHg8PG4pIHwgKHg+Pj4oMzItbikpO1xyXG5cdCAgICB9XHJcblxyXG5cclxuXHQgICAgLyoqXHJcblx0ICAgICAqIFNob3J0Y3V0IGZ1bmN0aW9uIHRvIHRoZSBoYXNoZXIncyBvYmplY3QgaW50ZXJmYWNlLlxyXG5cdCAgICAgKlxyXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gaGFzaC5cclxuXHQgICAgICpcclxuXHQgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgaGFzaC5cclxuXHQgICAgICpcclxuXHQgICAgICogQHN0YXRpY1xyXG5cdCAgICAgKlxyXG5cdCAgICAgKiBAZXhhbXBsZVxyXG5cdCAgICAgKlxyXG5cdCAgICAgKiAgICAgdmFyIGhhc2ggPSBDcnlwdG9KUy5SSVBFTUQxNjAoJ21lc3NhZ2UnKTtcclxuXHQgICAgICogICAgIHZhciBoYXNoID0gQ3J5cHRvSlMuUklQRU1EMTYwKHdvcmRBcnJheSk7XHJcblx0ICAgICAqL1xyXG5cdCAgICBDLlJJUEVNRDE2MCA9IEhhc2hlci5fY3JlYXRlSGVscGVyKFJJUEVNRDE2MCk7XHJcblxyXG5cdCAgICAvKipcclxuXHQgICAgICogU2hvcnRjdXQgZnVuY3Rpb24gdG8gdGhlIEhNQUMncyBvYmplY3QgaW50ZXJmYWNlLlxyXG5cdCAgICAgKlxyXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IG1lc3NhZ2UgVGhlIG1lc3NhZ2UgdG8gaGFzaC5cclxuXHQgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBrZXkgVGhlIHNlY3JldCBrZXkuXHJcblx0ICAgICAqXHJcblx0ICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIEhNQUMuXHJcblx0ICAgICAqXHJcblx0ICAgICAqIEBzdGF0aWNcclxuXHQgICAgICpcclxuXHQgICAgICogQGV4YW1wbGVcclxuXHQgICAgICpcclxuXHQgICAgICogICAgIHZhciBobWFjID0gQ3J5cHRvSlMuSG1hY1JJUEVNRDE2MChtZXNzYWdlLCBrZXkpO1xyXG5cdCAgICAgKi9cclxuXHQgICAgQy5IbWFjUklQRU1EMTYwID0gSGFzaGVyLl9jcmVhdGVIbWFjSGVscGVyKFJJUEVNRDE2MCk7XHJcblx0fShNYXRoKSk7XHJcblxyXG5cclxuXHRyZXR1cm4gQ3J5cHRvSlMuUklQRU1EMTYwO1xyXG5cclxufSkpOyIsIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcclxuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcclxuXHRcdC8vIENvbW1vbkpTXHJcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2NvcmVcIikpO1xyXG5cdH1cclxuXHRlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xyXG5cdFx0Ly8gQU1EXHJcblx0XHRkZWZpbmUoW1wiLi9jb3JlXCJdLCBmYWN0b3J5KTtcclxuXHR9XHJcblx0ZWxzZSB7XHJcblx0XHQvLyBHbG9iYWwgKGJyb3dzZXIpXHJcblx0XHRmYWN0b3J5KHJvb3QuQ3J5cHRvSlMpO1xyXG5cdH1cclxufSh0aGlzLCBmdW5jdGlvbiAoQ3J5cHRvSlMpIHtcclxuXHJcblx0KGZ1bmN0aW9uICgpIHtcclxuXHQgICAgLy8gU2hvcnRjdXRzXHJcblx0ICAgIHZhciBDID0gQ3J5cHRvSlM7XHJcblx0ICAgIHZhciBDX2xpYiA9IEMubGliO1xyXG5cdCAgICB2YXIgQmFzZSA9IENfbGliLkJhc2U7XHJcblx0ICAgIHZhciBDX2VuYyA9IEMuZW5jO1xyXG5cdCAgICB2YXIgVXRmOCA9IENfZW5jLlV0Zjg7XHJcblx0ICAgIHZhciBDX2FsZ28gPSBDLmFsZ287XHJcblxyXG5cdCAgICAvKipcclxuXHQgICAgICogSE1BQyBhbGdvcml0aG0uXHJcblx0ICAgICAqL1xyXG5cdCAgICB2YXIgSE1BQyA9IENfYWxnby5ITUFDID0gQmFzZS5leHRlbmQoe1xyXG5cdCAgICAgICAgLyoqXHJcblx0ICAgICAgICAgKiBJbml0aWFsaXplcyBhIG5ld2x5IGNyZWF0ZWQgSE1BQy5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAcGFyYW0ge0hhc2hlcn0gaGFzaGVyIFRoZSBoYXNoIGFsZ29yaXRobSB0byB1c2UuXHJcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IGtleSBUaGUgc2VjcmV0IGtleS5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAZXhhbXBsZVxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqICAgICB2YXIgaG1hY0hhc2hlciA9IENyeXB0b0pTLmFsZ28uSE1BQy5jcmVhdGUoQ3J5cHRvSlMuYWxnby5TSEEyNTYsIGtleSk7XHJcblx0ICAgICAgICAgKi9cclxuXHQgICAgICAgIGluaXQ6IGZ1bmN0aW9uIChoYXNoZXIsIGtleSkge1xyXG5cdCAgICAgICAgICAgIC8vIEluaXQgaGFzaGVyXHJcblx0ICAgICAgICAgICAgaGFzaGVyID0gdGhpcy5faGFzaGVyID0gbmV3IGhhc2hlci5pbml0KCk7XHJcblxyXG5cdCAgICAgICAgICAgIC8vIENvbnZlcnQgc3RyaW5nIHRvIFdvcmRBcnJheSwgZWxzZSBhc3N1bWUgV29yZEFycmF5IGFscmVhZHlcclxuXHQgICAgICAgICAgICBpZiAodHlwZW9mIGtleSA9PSAnc3RyaW5nJykge1xyXG5cdCAgICAgICAgICAgICAgICBrZXkgPSBVdGY4LnBhcnNlKGtleSk7XHJcblx0ICAgICAgICAgICAgfVxyXG5cclxuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcclxuXHQgICAgICAgICAgICB2YXIgaGFzaGVyQmxvY2tTaXplID0gaGFzaGVyLmJsb2NrU2l6ZTtcclxuXHQgICAgICAgICAgICB2YXIgaGFzaGVyQmxvY2tTaXplQnl0ZXMgPSBoYXNoZXJCbG9ja1NpemUgKiA0O1xyXG5cclxuXHQgICAgICAgICAgICAvLyBBbGxvdyBhcmJpdHJhcnkgbGVuZ3RoIGtleXNcclxuXHQgICAgICAgICAgICBpZiAoa2V5LnNpZ0J5dGVzID4gaGFzaGVyQmxvY2tTaXplQnl0ZXMpIHtcclxuXHQgICAgICAgICAgICAgICAga2V5ID0gaGFzaGVyLmZpbmFsaXplKGtleSk7XHJcblx0ICAgICAgICAgICAgfVxyXG5cclxuXHQgICAgICAgICAgICAvLyBDbGFtcCBleGNlc3MgYml0c1xyXG5cdCAgICAgICAgICAgIGtleS5jbGFtcCgpO1xyXG5cclxuXHQgICAgICAgICAgICAvLyBDbG9uZSBrZXkgZm9yIGlubmVyIGFuZCBvdXRlciBwYWRzXHJcblx0ICAgICAgICAgICAgdmFyIG9LZXkgPSB0aGlzLl9vS2V5ID0ga2V5LmNsb25lKCk7XHJcblx0ICAgICAgICAgICAgdmFyIGlLZXkgPSB0aGlzLl9pS2V5ID0ga2V5LmNsb25lKCk7XHJcblxyXG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xyXG5cdCAgICAgICAgICAgIHZhciBvS2V5V29yZHMgPSBvS2V5LndvcmRzO1xyXG5cdCAgICAgICAgICAgIHZhciBpS2V5V29yZHMgPSBpS2V5LndvcmRzO1xyXG5cclxuXHQgICAgICAgICAgICAvLyBYT1Iga2V5cyB3aXRoIHBhZCBjb25zdGFudHNcclxuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhhc2hlckJsb2NrU2l6ZTsgaSsrKSB7XHJcblx0ICAgICAgICAgICAgICAgIG9LZXlXb3Jkc1tpXSBePSAweDVjNWM1YzVjO1xyXG5cdCAgICAgICAgICAgICAgICBpS2V5V29yZHNbaV0gXj0gMHgzNjM2MzYzNjtcclxuXHQgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgb0tleS5zaWdCeXRlcyA9IGlLZXkuc2lnQnl0ZXMgPSBoYXNoZXJCbG9ja1NpemVCeXRlcztcclxuXHJcblx0ICAgICAgICAgICAgLy8gU2V0IGluaXRpYWwgdmFsdWVzXHJcblx0ICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xyXG5cdCAgICAgICAgfSxcclxuXHJcblx0ICAgICAgICAvKipcclxuXHQgICAgICAgICAqIFJlc2V0cyB0aGlzIEhNQUMgdG8gaXRzIGluaXRpYWwgc3RhdGUuXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQGV4YW1wbGVcclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiAgICAgaG1hY0hhc2hlci5yZXNldCgpO1xyXG5cdCAgICAgICAgICovXHJcblx0ICAgICAgICByZXNldDogZnVuY3Rpb24gKCkge1xyXG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0XHJcblx0ICAgICAgICAgICAgdmFyIGhhc2hlciA9IHRoaXMuX2hhc2hlcjtcclxuXHJcblx0ICAgICAgICAgICAgLy8gUmVzZXRcclxuXHQgICAgICAgICAgICBoYXNoZXIucmVzZXQoKTtcclxuXHQgICAgICAgICAgICBoYXNoZXIudXBkYXRlKHRoaXMuX2lLZXkpO1xyXG5cdCAgICAgICAgfSxcclxuXHJcblx0ICAgICAgICAvKipcclxuXHQgICAgICAgICAqIFVwZGF0ZXMgdGhpcyBITUFDIHdpdGggYSBtZXNzYWdlLlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gbWVzc2FnZVVwZGF0ZSBUaGUgbWVzc2FnZSB0byBhcHBlbmQuXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQHJldHVybiB7SE1BQ30gVGhpcyBITUFDIGluc3RhbmNlLlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEBleGFtcGxlXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogICAgIGhtYWNIYXNoZXIudXBkYXRlKCdtZXNzYWdlJyk7XHJcblx0ICAgICAgICAgKiAgICAgaG1hY0hhc2hlci51cGRhdGUod29yZEFycmF5KTtcclxuXHQgICAgICAgICAqL1xyXG5cdCAgICAgICAgdXBkYXRlOiBmdW5jdGlvbiAobWVzc2FnZVVwZGF0ZSkge1xyXG5cdCAgICAgICAgICAgIHRoaXMuX2hhc2hlci51cGRhdGUobWVzc2FnZVVwZGF0ZSk7XHJcblxyXG5cdCAgICAgICAgICAgIC8vIENoYWluYWJsZVxyXG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG5cdCAgICAgICAgfSxcclxuXHJcblx0ICAgICAgICAvKipcclxuXHQgICAgICAgICAqIEZpbmFsaXplcyB0aGUgSE1BQyBjb21wdXRhdGlvbi5cclxuXHQgICAgICAgICAqIE5vdGUgdGhhdCB0aGUgZmluYWxpemUgb3BlcmF0aW9uIGlzIGVmZmVjdGl2ZWx5IGEgZGVzdHJ1Y3RpdmUsIHJlYWQtb25jZSBvcGVyYXRpb24uXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBtZXNzYWdlVXBkYXRlIChPcHRpb25hbCkgQSBmaW5hbCBtZXNzYWdlIHVwZGF0ZS5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBITUFDLlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEBleGFtcGxlXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogICAgIHZhciBobWFjID0gaG1hY0hhc2hlci5maW5hbGl6ZSgpO1xyXG5cdCAgICAgICAgICogICAgIHZhciBobWFjID0gaG1hY0hhc2hlci5maW5hbGl6ZSgnbWVzc2FnZScpO1xyXG5cdCAgICAgICAgICogICAgIHZhciBobWFjID0gaG1hY0hhc2hlci5maW5hbGl6ZSh3b3JkQXJyYXkpO1xyXG5cdCAgICAgICAgICovXHJcblx0ICAgICAgICBmaW5hbGl6ZTogZnVuY3Rpb24gKG1lc3NhZ2VVcGRhdGUpIHtcclxuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dFxyXG5cdCAgICAgICAgICAgIHZhciBoYXNoZXIgPSB0aGlzLl9oYXNoZXI7XHJcblxyXG5cdCAgICAgICAgICAgIC8vIENvbXB1dGUgSE1BQ1xyXG5cdCAgICAgICAgICAgIHZhciBpbm5lckhhc2ggPSBoYXNoZXIuZmluYWxpemUobWVzc2FnZVVwZGF0ZSk7XHJcblx0ICAgICAgICAgICAgaGFzaGVyLnJlc2V0KCk7XHJcblx0ICAgICAgICAgICAgdmFyIGhtYWMgPSBoYXNoZXIuZmluYWxpemUodGhpcy5fb0tleS5jbG9uZSgpLmNvbmNhdChpbm5lckhhc2gpKTtcclxuXHJcblx0ICAgICAgICAgICAgcmV0dXJuIGhtYWM7XHJcblx0ICAgICAgICB9XHJcblx0ICAgIH0pO1xyXG5cdH0oKSk7XHJcblxyXG5cclxufSkpOyIsIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnksIHVuZGVmKSB7XHJcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XHJcblx0XHQvLyBDb21tb25KU1xyXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9jb3JlXCIpLCByZXF1aXJlKFwiLi9zaGExXCIpLCByZXF1aXJlKFwiLi9obWFjXCIpKTtcclxuXHR9XHJcblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcclxuXHRcdC8vIEFNRFxyXG5cdFx0ZGVmaW5lKFtcIi4vY29yZVwiLCBcIi4vc2hhMVwiLCBcIi4vaG1hY1wiXSwgZmFjdG9yeSk7XHJcblx0fVxyXG5cdGVsc2Uge1xyXG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxyXG5cdFx0ZmFjdG9yeShyb290LkNyeXB0b0pTKTtcclxuXHR9XHJcbn0odGhpcywgZnVuY3Rpb24gKENyeXB0b0pTKSB7XHJcblxyXG5cdChmdW5jdGlvbiAoKSB7XHJcblx0ICAgIC8vIFNob3J0Y3V0c1xyXG5cdCAgICB2YXIgQyA9IENyeXB0b0pTO1xyXG5cdCAgICB2YXIgQ19saWIgPSBDLmxpYjtcclxuXHQgICAgdmFyIEJhc2UgPSBDX2xpYi5CYXNlO1xyXG5cdCAgICB2YXIgV29yZEFycmF5ID0gQ19saWIuV29yZEFycmF5O1xyXG5cdCAgICB2YXIgQ19hbGdvID0gQy5hbGdvO1xyXG5cdCAgICB2YXIgU0hBMSA9IENfYWxnby5TSEExO1xyXG5cdCAgICB2YXIgSE1BQyA9IENfYWxnby5ITUFDO1xyXG5cclxuXHQgICAgLyoqXHJcblx0ICAgICAqIFBhc3N3b3JkLUJhc2VkIEtleSBEZXJpdmF0aW9uIEZ1bmN0aW9uIDIgYWxnb3JpdGhtLlxyXG5cdCAgICAgKi9cclxuXHQgICAgdmFyIFBCS0RGMiA9IENfYWxnby5QQktERjIgPSBCYXNlLmV4dGVuZCh7XHJcblx0ICAgICAgICAvKipcclxuXHQgICAgICAgICAqIENvbmZpZ3VyYXRpb24gb3B0aW9ucy5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcn0ga2V5U2l6ZSBUaGUga2V5IHNpemUgaW4gd29yZHMgdG8gZ2VuZXJhdGUuIERlZmF1bHQ6IDQgKDEyOCBiaXRzKVxyXG5cdCAgICAgICAgICogQHByb3BlcnR5IHtIYXNoZXJ9IGhhc2hlciBUaGUgaGFzaGVyIHRvIHVzZS4gRGVmYXVsdDogU0hBMVxyXG5cdCAgICAgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IGl0ZXJhdGlvbnMgVGhlIG51bWJlciBvZiBpdGVyYXRpb25zIHRvIHBlcmZvcm0uIERlZmF1bHQ6IDFcclxuXHQgICAgICAgICAqL1xyXG5cdCAgICAgICAgY2ZnOiBCYXNlLmV4dGVuZCh7XHJcblx0ICAgICAgICAgICAga2V5U2l6ZTogMTI4LzMyLFxyXG5cdCAgICAgICAgICAgIGhhc2hlcjogU0hBMSxcclxuXHQgICAgICAgICAgICBpdGVyYXRpb25zOiAxXHJcblx0ICAgICAgICB9KSxcclxuXHJcblx0ICAgICAgICAvKipcclxuXHQgICAgICAgICAqIEluaXRpYWxpemVzIGEgbmV3bHkgY3JlYXRlZCBrZXkgZGVyaXZhdGlvbiBmdW5jdGlvbi5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2ZnIChPcHRpb25hbCkgVGhlIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyB0byB1c2UgZm9yIHRoZSBkZXJpdmF0aW9uLlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEBleGFtcGxlXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogICAgIHZhciBrZGYgPSBDcnlwdG9KUy5hbGdvLlBCS0RGMi5jcmVhdGUoKTtcclxuXHQgICAgICAgICAqICAgICB2YXIga2RmID0gQ3J5cHRvSlMuYWxnby5QQktERjIuY3JlYXRlKHsga2V5U2l6ZTogOCB9KTtcclxuXHQgICAgICAgICAqICAgICB2YXIga2RmID0gQ3J5cHRvSlMuYWxnby5QQktERjIuY3JlYXRlKHsga2V5U2l6ZTogOCwgaXRlcmF0aW9uczogMTAwMCB9KTtcclxuXHQgICAgICAgICAqL1xyXG5cdCAgICAgICAgaW5pdDogZnVuY3Rpb24gKGNmZykge1xyXG5cdCAgICAgICAgICAgIHRoaXMuY2ZnID0gdGhpcy5jZmcuZXh0ZW5kKGNmZyk7XHJcblx0ICAgICAgICB9LFxyXG5cclxuXHQgICAgICAgIC8qKlxyXG5cdCAgICAgICAgICogQ29tcHV0ZXMgdGhlIFBhc3N3b3JkLUJhc2VkIEtleSBEZXJpdmF0aW9uIEZ1bmN0aW9uIDIuXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBwYXNzd29yZCBUaGUgcGFzc3dvcmQuXHJcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IHNhbHQgQSBzYWx0LlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIGRlcml2ZWQga2V5LlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEBleGFtcGxlXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogICAgIHZhciBrZXkgPSBrZGYuY29tcHV0ZShwYXNzd29yZCwgc2FsdCk7XHJcblx0ICAgICAgICAgKi9cclxuXHQgICAgICAgIGNvbXB1dGU6IGZ1bmN0aW9uIChwYXNzd29yZCwgc2FsdCkge1xyXG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0XHJcblx0ICAgICAgICAgICAgdmFyIGNmZyA9IHRoaXMuY2ZnO1xyXG5cclxuXHQgICAgICAgICAgICAvLyBJbml0IEhNQUNcclxuXHQgICAgICAgICAgICB2YXIgaG1hYyA9IEhNQUMuY3JlYXRlKGNmZy5oYXNoZXIsIHBhc3N3b3JkKTtcclxuXHJcblx0ICAgICAgICAgICAgLy8gSW5pdGlhbCB2YWx1ZXNcclxuXHQgICAgICAgICAgICB2YXIgZGVyaXZlZEtleSA9IFdvcmRBcnJheS5jcmVhdGUoKTtcclxuXHQgICAgICAgICAgICB2YXIgYmxvY2tJbmRleCA9IFdvcmRBcnJheS5jcmVhdGUoWzB4MDAwMDAwMDFdKTtcclxuXHJcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXHJcblx0ICAgICAgICAgICAgdmFyIGRlcml2ZWRLZXlXb3JkcyA9IGRlcml2ZWRLZXkud29yZHM7XHJcblx0ICAgICAgICAgICAgdmFyIGJsb2NrSW5kZXhXb3JkcyA9IGJsb2NrSW5kZXgud29yZHM7XHJcblx0ICAgICAgICAgICAgdmFyIGtleVNpemUgPSBjZmcua2V5U2l6ZTtcclxuXHQgICAgICAgICAgICB2YXIgaXRlcmF0aW9ucyA9IGNmZy5pdGVyYXRpb25zO1xyXG5cclxuXHQgICAgICAgICAgICAvLyBHZW5lcmF0ZSBrZXlcclxuXHQgICAgICAgICAgICB3aGlsZSAoZGVyaXZlZEtleVdvcmRzLmxlbmd0aCA8IGtleVNpemUpIHtcclxuXHQgICAgICAgICAgICAgICAgdmFyIGJsb2NrID0gaG1hYy51cGRhdGUoc2FsdCkuZmluYWxpemUoYmxvY2tJbmRleCk7XHJcblx0ICAgICAgICAgICAgICAgIGhtYWMucmVzZXQoKTtcclxuXHJcblx0ICAgICAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xyXG5cdCAgICAgICAgICAgICAgICB2YXIgYmxvY2tXb3JkcyA9IGJsb2NrLndvcmRzO1xyXG5cdCAgICAgICAgICAgICAgICB2YXIgYmxvY2tXb3Jkc0xlbmd0aCA9IGJsb2NrV29yZHMubGVuZ3RoO1xyXG5cclxuXHQgICAgICAgICAgICAgICAgLy8gSXRlcmF0aW9uc1xyXG5cdCAgICAgICAgICAgICAgICB2YXIgaW50ZXJtZWRpYXRlID0gYmxvY2s7XHJcblx0ICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgaXRlcmF0aW9uczsgaSsrKSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICBpbnRlcm1lZGlhdGUgPSBobWFjLmZpbmFsaXplKGludGVybWVkaWF0ZSk7XHJcblx0ICAgICAgICAgICAgICAgICAgICBobWFjLnJlc2V0KCk7XHJcblxyXG5cdCAgICAgICAgICAgICAgICAgICAgLy8gU2hvcnRjdXRcclxuXHQgICAgICAgICAgICAgICAgICAgIHZhciBpbnRlcm1lZGlhdGVXb3JkcyA9IGludGVybWVkaWF0ZS53b3JkcztcclxuXHJcblx0ICAgICAgICAgICAgICAgICAgICAvLyBYT1IgaW50ZXJtZWRpYXRlIHdpdGggYmxvY2tcclxuXHQgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgYmxvY2tXb3Jkc0xlbmd0aDsgaisrKSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tXb3Jkc1tqXSBePSBpbnRlcm1lZGlhdGVXb3Jkc1tqXTtcclxuXHQgICAgICAgICAgICAgICAgICAgIH1cclxuXHQgICAgICAgICAgICAgICAgfVxyXG5cclxuXHQgICAgICAgICAgICAgICAgZGVyaXZlZEtleS5jb25jYXQoYmxvY2spO1xyXG5cdCAgICAgICAgICAgICAgICBibG9ja0luZGV4V29yZHNbMF0rKztcclxuXHQgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgZGVyaXZlZEtleS5zaWdCeXRlcyA9IGtleVNpemUgKiA0O1xyXG5cclxuXHQgICAgICAgICAgICByZXR1cm4gZGVyaXZlZEtleTtcclxuXHQgICAgICAgIH1cclxuXHQgICAgfSk7XHJcblxyXG5cdCAgICAvKipcclxuXHQgICAgICogQ29tcHV0ZXMgdGhlIFBhc3N3b3JkLUJhc2VkIEtleSBEZXJpdmF0aW9uIEZ1bmN0aW9uIDIuXHJcblx0ICAgICAqXHJcblx0ICAgICAqIEBwYXJhbSB7V29yZEFycmF5fHN0cmluZ30gcGFzc3dvcmQgVGhlIHBhc3N3b3JkLlxyXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IHNhbHQgQSBzYWx0LlxyXG5cdCAgICAgKiBAcGFyYW0ge09iamVjdH0gY2ZnIChPcHRpb25hbCkgVGhlIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyB0byB1c2UgZm9yIHRoaXMgY29tcHV0YXRpb24uXHJcblx0ICAgICAqXHJcblx0ICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIGRlcml2ZWQga2V5LlxyXG5cdCAgICAgKlxyXG5cdCAgICAgKiBAc3RhdGljXHJcblx0ICAgICAqXHJcblx0ICAgICAqIEBleGFtcGxlXHJcblx0ICAgICAqXHJcblx0ICAgICAqICAgICB2YXIga2V5ID0gQ3J5cHRvSlMuUEJLREYyKHBhc3N3b3JkLCBzYWx0KTtcclxuXHQgICAgICogICAgIHZhciBrZXkgPSBDcnlwdG9KUy5QQktERjIocGFzc3dvcmQsIHNhbHQsIHsga2V5U2l6ZTogOCB9KTtcclxuXHQgICAgICogICAgIHZhciBrZXkgPSBDcnlwdG9KUy5QQktERjIocGFzc3dvcmQsIHNhbHQsIHsga2V5U2l6ZTogOCwgaXRlcmF0aW9uczogMTAwMCB9KTtcclxuXHQgICAgICovXHJcblx0ICAgIEMuUEJLREYyID0gZnVuY3Rpb24gKHBhc3N3b3JkLCBzYWx0LCBjZmcpIHtcclxuXHQgICAgICAgIHJldHVybiBQQktERjIuY3JlYXRlKGNmZykuY29tcHV0ZShwYXNzd29yZCwgc2FsdCk7XHJcblx0ICAgIH07XHJcblx0fSgpKTtcclxuXHJcblxyXG5cdHJldHVybiBDcnlwdG9KUy5QQktERjI7XHJcblxyXG59KSk7IiwiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSwgdW5kZWYpIHtcclxuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcclxuXHRcdC8vIENvbW1vbkpTXHJcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2NvcmVcIiksIHJlcXVpcmUoXCIuL3NoYTFcIiksIHJlcXVpcmUoXCIuL2htYWNcIikpO1xyXG5cdH1cclxuXHRlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xyXG5cdFx0Ly8gQU1EXHJcblx0XHRkZWZpbmUoW1wiLi9jb3JlXCIsIFwiLi9zaGExXCIsIFwiLi9obWFjXCJdLCBmYWN0b3J5KTtcclxuXHR9XHJcblx0ZWxzZSB7XHJcblx0XHQvLyBHbG9iYWwgKGJyb3dzZXIpXHJcblx0XHRmYWN0b3J5KHJvb3QuQ3J5cHRvSlMpO1xyXG5cdH1cclxufSh0aGlzLCBmdW5jdGlvbiAoQ3J5cHRvSlMpIHtcclxuXHJcblx0KGZ1bmN0aW9uICgpIHtcclxuXHQgICAgLy8gU2hvcnRjdXRzXHJcblx0ICAgIHZhciBDID0gQ3J5cHRvSlM7XHJcblx0ICAgIHZhciBDX2xpYiA9IEMubGliO1xyXG5cdCAgICB2YXIgQmFzZSA9IENfbGliLkJhc2U7XHJcblx0ICAgIHZhciBXb3JkQXJyYXkgPSBDX2xpYi5Xb3JkQXJyYXk7XHJcblx0ICAgIHZhciBDX2FsZ28gPSBDLmFsZ287XHJcblx0ICAgIHZhciBNRDUgPSBDX2FsZ28uTUQ1O1xyXG5cclxuXHQgICAgLyoqXHJcblx0ICAgICAqIFRoaXMga2V5IGRlcml2YXRpb24gZnVuY3Rpb24gaXMgbWVhbnQgdG8gY29uZm9ybSB3aXRoIEVWUF9CeXRlc1RvS2V5LlxyXG5cdCAgICAgKiB3d3cub3BlbnNzbC5vcmcvZG9jcy9jcnlwdG8vRVZQX0J5dGVzVG9LZXkuaHRtbFxyXG5cdCAgICAgKi9cclxuXHQgICAgdmFyIEV2cEtERiA9IENfYWxnby5FdnBLREYgPSBCYXNlLmV4dGVuZCh7XHJcblx0ICAgICAgICAvKipcclxuXHQgICAgICAgICAqIENvbmZpZ3VyYXRpb24gb3B0aW9ucy5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAcHJvcGVydHkge251bWJlcn0ga2V5U2l6ZSBUaGUga2V5IHNpemUgaW4gd29yZHMgdG8gZ2VuZXJhdGUuIERlZmF1bHQ6IDQgKDEyOCBiaXRzKVxyXG5cdCAgICAgICAgICogQHByb3BlcnR5IHtIYXNoZXJ9IGhhc2hlciBUaGUgaGFzaCBhbGdvcml0aG0gdG8gdXNlLiBEZWZhdWx0OiBNRDVcclxuXHQgICAgICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBpdGVyYXRpb25zIFRoZSBudW1iZXIgb2YgaXRlcmF0aW9ucyB0byBwZXJmb3JtLiBEZWZhdWx0OiAxXHJcblx0ICAgICAgICAgKi9cclxuXHQgICAgICAgIGNmZzogQmFzZS5leHRlbmQoe1xyXG5cdCAgICAgICAgICAgIGtleVNpemU6IDEyOC8zMixcclxuXHQgICAgICAgICAgICBoYXNoZXI6IE1ENSxcclxuXHQgICAgICAgICAgICBpdGVyYXRpb25zOiAxXHJcblx0ICAgICAgICB9KSxcclxuXHJcblx0ICAgICAgICAvKipcclxuXHQgICAgICAgICAqIEluaXRpYWxpemVzIGEgbmV3bHkgY3JlYXRlZCBrZXkgZGVyaXZhdGlvbiBmdW5jdGlvbi5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2ZnIChPcHRpb25hbCkgVGhlIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyB0byB1c2UgZm9yIHRoZSBkZXJpdmF0aW9uLlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEBleGFtcGxlXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogICAgIHZhciBrZGYgPSBDcnlwdG9KUy5hbGdvLkV2cEtERi5jcmVhdGUoKTtcclxuXHQgICAgICAgICAqICAgICB2YXIga2RmID0gQ3J5cHRvSlMuYWxnby5FdnBLREYuY3JlYXRlKHsga2V5U2l6ZTogOCB9KTtcclxuXHQgICAgICAgICAqICAgICB2YXIga2RmID0gQ3J5cHRvSlMuYWxnby5FdnBLREYuY3JlYXRlKHsga2V5U2l6ZTogOCwgaXRlcmF0aW9uczogMTAwMCB9KTtcclxuXHQgICAgICAgICAqL1xyXG5cdCAgICAgICAgaW5pdDogZnVuY3Rpb24gKGNmZykge1xyXG5cdCAgICAgICAgICAgIHRoaXMuY2ZnID0gdGhpcy5jZmcuZXh0ZW5kKGNmZyk7XHJcblx0ICAgICAgICB9LFxyXG5cclxuXHQgICAgICAgIC8qKlxyXG5cdCAgICAgICAgICogRGVyaXZlcyBhIGtleSBmcm9tIGEgcGFzc3dvcmQuXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBwYXNzd29yZCBUaGUgcGFzc3dvcmQuXHJcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IHNhbHQgQSBzYWx0LlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIGRlcml2ZWQga2V5LlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEBleGFtcGxlXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogICAgIHZhciBrZXkgPSBrZGYuY29tcHV0ZShwYXNzd29yZCwgc2FsdCk7XHJcblx0ICAgICAgICAgKi9cclxuXHQgICAgICAgIGNvbXB1dGU6IGZ1bmN0aW9uIChwYXNzd29yZCwgc2FsdCkge1xyXG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0XHJcblx0ICAgICAgICAgICAgdmFyIGNmZyA9IHRoaXMuY2ZnO1xyXG5cclxuXHQgICAgICAgICAgICAvLyBJbml0IGhhc2hlclxyXG5cdCAgICAgICAgICAgIHZhciBoYXNoZXIgPSBjZmcuaGFzaGVyLmNyZWF0ZSgpO1xyXG5cclxuXHQgICAgICAgICAgICAvLyBJbml0aWFsIHZhbHVlc1xyXG5cdCAgICAgICAgICAgIHZhciBkZXJpdmVkS2V5ID0gV29yZEFycmF5LmNyZWF0ZSgpO1xyXG5cclxuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcclxuXHQgICAgICAgICAgICB2YXIgZGVyaXZlZEtleVdvcmRzID0gZGVyaXZlZEtleS53b3JkcztcclxuXHQgICAgICAgICAgICB2YXIga2V5U2l6ZSA9IGNmZy5rZXlTaXplO1xyXG5cdCAgICAgICAgICAgIHZhciBpdGVyYXRpb25zID0gY2ZnLml0ZXJhdGlvbnM7XHJcblxyXG5cdCAgICAgICAgICAgIC8vIEdlbmVyYXRlIGtleVxyXG5cdCAgICAgICAgICAgIHdoaWxlIChkZXJpdmVkS2V5V29yZHMubGVuZ3RoIDwga2V5U2l6ZSkge1xyXG5cdCAgICAgICAgICAgICAgICBpZiAoYmxvY2spIHtcclxuXHQgICAgICAgICAgICAgICAgICAgIGhhc2hlci51cGRhdGUoYmxvY2spO1xyXG5cdCAgICAgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgICAgIHZhciBibG9jayA9IGhhc2hlci51cGRhdGUocGFzc3dvcmQpLmZpbmFsaXplKHNhbHQpO1xyXG5cdCAgICAgICAgICAgICAgICBoYXNoZXIucmVzZXQoKTtcclxuXHJcblx0ICAgICAgICAgICAgICAgIC8vIEl0ZXJhdGlvbnNcclxuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBpdGVyYXRpb25zOyBpKyspIHtcclxuXHQgICAgICAgICAgICAgICAgICAgIGJsb2NrID0gaGFzaGVyLmZpbmFsaXplKGJsb2NrKTtcclxuXHQgICAgICAgICAgICAgICAgICAgIGhhc2hlci5yZXNldCgpO1xyXG5cdCAgICAgICAgICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgICAgICAgICBkZXJpdmVkS2V5LmNvbmNhdChibG9jayk7XHJcblx0ICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgICAgIGRlcml2ZWRLZXkuc2lnQnl0ZXMgPSBrZXlTaXplICogNDtcclxuXHJcblx0ICAgICAgICAgICAgcmV0dXJuIGRlcml2ZWRLZXk7XHJcblx0ICAgICAgICB9XHJcblx0ICAgIH0pO1xyXG5cclxuXHQgICAgLyoqXHJcblx0ICAgICAqIERlcml2ZXMgYSBrZXkgZnJvbSBhIHBhc3N3b3JkLlxyXG5cdCAgICAgKlxyXG5cdCAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IHBhc3N3b3JkIFRoZSBwYXNzd29yZC5cclxuXHQgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBzYWx0IEEgc2FsdC5cclxuXHQgICAgICogQHBhcmFtIHtPYmplY3R9IGNmZyAoT3B0aW9uYWwpIFRoZSBjb25maWd1cmF0aW9uIG9wdGlvbnMgdG8gdXNlIGZvciB0aGlzIGNvbXB1dGF0aW9uLlxyXG5cdCAgICAgKlxyXG5cdCAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBkZXJpdmVkIGtleS5cclxuXHQgICAgICpcclxuXHQgICAgICogQHN0YXRpY1xyXG5cdCAgICAgKlxyXG5cdCAgICAgKiBAZXhhbXBsZVxyXG5cdCAgICAgKlxyXG5cdCAgICAgKiAgICAgdmFyIGtleSA9IENyeXB0b0pTLkV2cEtERihwYXNzd29yZCwgc2FsdCk7XHJcblx0ICAgICAqICAgICB2YXIga2V5ID0gQ3J5cHRvSlMuRXZwS0RGKHBhc3N3b3JkLCBzYWx0LCB7IGtleVNpemU6IDggfSk7XHJcblx0ICAgICAqICAgICB2YXIga2V5ID0gQ3J5cHRvSlMuRXZwS0RGKHBhc3N3b3JkLCBzYWx0LCB7IGtleVNpemU6IDgsIGl0ZXJhdGlvbnM6IDEwMDAgfSk7XHJcblx0ICAgICAqL1xyXG5cdCAgICBDLkV2cEtERiA9IGZ1bmN0aW9uIChwYXNzd29yZCwgc2FsdCwgY2ZnKSB7XHJcblx0ICAgICAgICByZXR1cm4gRXZwS0RGLmNyZWF0ZShjZmcpLmNvbXB1dGUocGFzc3dvcmQsIHNhbHQpO1xyXG5cdCAgICB9O1xyXG5cdH0oKSk7XHJcblxyXG5cclxuXHRyZXR1cm4gQ3J5cHRvSlMuRXZwS0RGO1xyXG5cclxufSkpOyIsIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnksIHVuZGVmKSB7XHJcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XHJcblx0XHQvLyBDb21tb25KU1xyXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9jb3JlXCIpLCByZXF1aXJlKFwiLi9ldnBrZGZcIikpO1xyXG5cdH1cclxuXHRlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xyXG5cdFx0Ly8gQU1EXHJcblx0XHRkZWZpbmUoW1wiLi9jb3JlXCIsIFwiLi9ldnBrZGZcIl0sIGZhY3RvcnkpO1xyXG5cdH1cclxuXHRlbHNlIHtcclxuXHRcdC8vIEdsb2JhbCAoYnJvd3NlcilcclxuXHRcdGZhY3Rvcnkocm9vdC5DcnlwdG9KUyk7XHJcblx0fVxyXG59KHRoaXMsIGZ1bmN0aW9uIChDcnlwdG9KUykge1xyXG5cclxuXHQvKipcclxuXHQgKiBDaXBoZXIgY29yZSBjb21wb25lbnRzLlxyXG5cdCAqL1xyXG5cdENyeXB0b0pTLmxpYi5DaXBoZXIgfHwgKGZ1bmN0aW9uICh1bmRlZmluZWQpIHtcclxuXHQgICAgLy8gU2hvcnRjdXRzXHJcblx0ICAgIHZhciBDID0gQ3J5cHRvSlM7XHJcblx0ICAgIHZhciBDX2xpYiA9IEMubGliO1xyXG5cdCAgICB2YXIgQmFzZSA9IENfbGliLkJhc2U7XHJcblx0ICAgIHZhciBXb3JkQXJyYXkgPSBDX2xpYi5Xb3JkQXJyYXk7XHJcblx0ICAgIHZhciBCdWZmZXJlZEJsb2NrQWxnb3JpdGhtID0gQ19saWIuQnVmZmVyZWRCbG9ja0FsZ29yaXRobTtcclxuXHQgICAgdmFyIENfZW5jID0gQy5lbmM7XHJcblx0ICAgIHZhciBVdGY4ID0gQ19lbmMuVXRmODtcclxuXHQgICAgdmFyIEJhc2U2NCA9IENfZW5jLkJhc2U2NDtcclxuXHQgICAgdmFyIENfYWxnbyA9IEMuYWxnbztcclxuXHQgICAgdmFyIEV2cEtERiA9IENfYWxnby5FdnBLREY7XHJcblxyXG5cdCAgICAvKipcclxuXHQgICAgICogQWJzdHJhY3QgYmFzZSBjaXBoZXIgdGVtcGxhdGUuXHJcblx0ICAgICAqXHJcblx0ICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBrZXlTaXplIFRoaXMgY2lwaGVyJ3Mga2V5IHNpemUuIERlZmF1bHQ6IDQgKDEyOCBiaXRzKVxyXG5cdCAgICAgKiBAcHJvcGVydHkge251bWJlcn0gaXZTaXplIFRoaXMgY2lwaGVyJ3MgSVYgc2l6ZS4gRGVmYXVsdDogNCAoMTI4IGJpdHMpXHJcblx0ICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBfRU5DX1hGT1JNX01PREUgQSBjb25zdGFudCByZXByZXNlbnRpbmcgZW5jcnlwdGlvbiBtb2RlLlxyXG5cdCAgICAgKiBAcHJvcGVydHkge251bWJlcn0gX0RFQ19YRk9STV9NT0RFIEEgY29uc3RhbnQgcmVwcmVzZW50aW5nIGRlY3J5cHRpb24gbW9kZS5cclxuXHQgICAgICovXHJcblx0ICAgIHZhciBDaXBoZXIgPSBDX2xpYi5DaXBoZXIgPSBCdWZmZXJlZEJsb2NrQWxnb3JpdGhtLmV4dGVuZCh7XHJcblx0ICAgICAgICAvKipcclxuXHQgICAgICAgICAqIENvbmZpZ3VyYXRpb24gb3B0aW9ucy5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAcHJvcGVydHkge1dvcmRBcnJheX0gaXYgVGhlIElWIHRvIHVzZSBmb3IgdGhpcyBvcGVyYXRpb24uXHJcblx0ICAgICAgICAgKi9cclxuXHQgICAgICAgIGNmZzogQmFzZS5leHRlbmQoKSxcclxuXHJcblx0ICAgICAgICAvKipcclxuXHQgICAgICAgICAqIENyZWF0ZXMgdGhpcyBjaXBoZXIgaW4gZW5jcnlwdGlvbiBtb2RlLlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fSBrZXkgVGhlIGtleS5cclxuXHQgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjZmcgKE9wdGlvbmFsKSBUaGUgY29uZmlndXJhdGlvbiBvcHRpb25zIHRvIHVzZSBmb3IgdGhpcyBvcGVyYXRpb24uXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQHJldHVybiB7Q2lwaGVyfSBBIGNpcGhlciBpbnN0YW5jZS5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAc3RhdGljXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQGV4YW1wbGVcclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiAgICAgdmFyIGNpcGhlciA9IENyeXB0b0pTLmFsZ28uQUVTLmNyZWF0ZUVuY3J5cHRvcihrZXlXb3JkQXJyYXksIHsgaXY6IGl2V29yZEFycmF5IH0pO1xyXG5cdCAgICAgICAgICovXHJcblx0ICAgICAgICBjcmVhdGVFbmNyeXB0b3I6IGZ1bmN0aW9uIChrZXksIGNmZykge1xyXG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZSh0aGlzLl9FTkNfWEZPUk1fTU9ERSwga2V5LCBjZmcpO1xyXG5cdCAgICAgICAgfSxcclxuXHJcblx0ICAgICAgICAvKipcclxuXHQgICAgICAgICAqIENyZWF0ZXMgdGhpcyBjaXBoZXIgaW4gZGVjcnlwdGlvbiBtb2RlLlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fSBrZXkgVGhlIGtleS5cclxuXHQgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjZmcgKE9wdGlvbmFsKSBUaGUgY29uZmlndXJhdGlvbiBvcHRpb25zIHRvIHVzZSBmb3IgdGhpcyBvcGVyYXRpb24uXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQHJldHVybiB7Q2lwaGVyfSBBIGNpcGhlciBpbnN0YW5jZS5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAc3RhdGljXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQGV4YW1wbGVcclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiAgICAgdmFyIGNpcGhlciA9IENyeXB0b0pTLmFsZ28uQUVTLmNyZWF0ZURlY3J5cHRvcihrZXlXb3JkQXJyYXksIHsgaXY6IGl2V29yZEFycmF5IH0pO1xyXG5cdCAgICAgICAgICovXHJcblx0ICAgICAgICBjcmVhdGVEZWNyeXB0b3I6IGZ1bmN0aW9uIChrZXksIGNmZykge1xyXG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZSh0aGlzLl9ERUNfWEZPUk1fTU9ERSwga2V5LCBjZmcpO1xyXG5cdCAgICAgICAgfSxcclxuXHJcblx0ICAgICAgICAvKipcclxuXHQgICAgICAgICAqIEluaXRpYWxpemVzIGEgbmV3bHkgY3JlYXRlZCBjaXBoZXIuXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IHhmb3JtTW9kZSBFaXRoZXIgdGhlIGVuY3J5cHRpb24gb3IgZGVjcnlwdGlvbiB0cmFuc29ybWF0aW9uIG1vZGUgY29uc3RhbnQuXHJcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheX0ga2V5IFRoZSBrZXkuXHJcblx0ICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2ZnIChPcHRpb25hbCkgVGhlIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyB0byB1c2UgZm9yIHRoaXMgb3BlcmF0aW9uLlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEBleGFtcGxlXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogICAgIHZhciBjaXBoZXIgPSBDcnlwdG9KUy5hbGdvLkFFUy5jcmVhdGUoQ3J5cHRvSlMuYWxnby5BRVMuX0VOQ19YRk9STV9NT0RFLCBrZXlXb3JkQXJyYXksIHsgaXY6IGl2V29yZEFycmF5IH0pO1xyXG5cdCAgICAgICAgICovXHJcblx0ICAgICAgICBpbml0OiBmdW5jdGlvbiAoeGZvcm1Nb2RlLCBrZXksIGNmZykge1xyXG5cdCAgICAgICAgICAgIC8vIEFwcGx5IGNvbmZpZyBkZWZhdWx0c1xyXG5cdCAgICAgICAgICAgIHRoaXMuY2ZnID0gdGhpcy5jZmcuZXh0ZW5kKGNmZyk7XHJcblxyXG5cdCAgICAgICAgICAgIC8vIFN0b3JlIHRyYW5zZm9ybSBtb2RlIGFuZCBrZXlcclxuXHQgICAgICAgICAgICB0aGlzLl94Zm9ybU1vZGUgPSB4Zm9ybU1vZGU7XHJcblx0ICAgICAgICAgICAgdGhpcy5fa2V5ID0ga2V5O1xyXG5cclxuXHQgICAgICAgICAgICAvLyBTZXQgaW5pdGlhbCB2YWx1ZXNcclxuXHQgICAgICAgICAgICB0aGlzLnJlc2V0KCk7XHJcblx0ICAgICAgICB9LFxyXG5cclxuXHQgICAgICAgIC8qKlxyXG5cdCAgICAgICAgICogUmVzZXRzIHRoaXMgY2lwaGVyIHRvIGl0cyBpbml0aWFsIHN0YXRlLlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEBleGFtcGxlXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogICAgIGNpcGhlci5yZXNldCgpO1xyXG5cdCAgICAgICAgICovXHJcblx0ICAgICAgICByZXNldDogZnVuY3Rpb24gKCkge1xyXG5cdCAgICAgICAgICAgIC8vIFJlc2V0IGRhdGEgYnVmZmVyXHJcblx0ICAgICAgICAgICAgQnVmZmVyZWRCbG9ja0FsZ29yaXRobS5yZXNldC5jYWxsKHRoaXMpO1xyXG5cclxuXHQgICAgICAgICAgICAvLyBQZXJmb3JtIGNvbmNyZXRlLWNpcGhlciBsb2dpY1xyXG5cdCAgICAgICAgICAgIHRoaXMuX2RvUmVzZXQoKTtcclxuXHQgICAgICAgIH0sXHJcblxyXG5cdCAgICAgICAgLyoqXHJcblx0ICAgICAgICAgKiBBZGRzIGRhdGEgdG8gYmUgZW5jcnlwdGVkIG9yIGRlY3J5cHRlZC5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheXxzdHJpbmd9IGRhdGFVcGRhdGUgVGhlIGRhdGEgdG8gZW5jcnlwdCBvciBkZWNyeXB0LlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIGRhdGEgYWZ0ZXIgcHJvY2Vzc2luZy5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAZXhhbXBsZVxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqICAgICB2YXIgZW5jcnlwdGVkID0gY2lwaGVyLnByb2Nlc3MoJ2RhdGEnKTtcclxuXHQgICAgICAgICAqICAgICB2YXIgZW5jcnlwdGVkID0gY2lwaGVyLnByb2Nlc3Mod29yZEFycmF5KTtcclxuXHQgICAgICAgICAqL1xyXG5cdCAgICAgICAgcHJvY2VzczogZnVuY3Rpb24gKGRhdGFVcGRhdGUpIHtcclxuXHQgICAgICAgICAgICAvLyBBcHBlbmRcclxuXHQgICAgICAgICAgICB0aGlzLl9hcHBlbmQoZGF0YVVwZGF0ZSk7XHJcblxyXG5cdCAgICAgICAgICAgIC8vIFByb2Nlc3MgYXZhaWxhYmxlIGJsb2Nrc1xyXG5cdCAgICAgICAgICAgIHJldHVybiB0aGlzLl9wcm9jZXNzKCk7XHJcblx0ICAgICAgICB9LFxyXG5cclxuXHQgICAgICAgIC8qKlxyXG5cdCAgICAgICAgICogRmluYWxpemVzIHRoZSBlbmNyeXB0aW9uIG9yIGRlY3J5cHRpb24gcHJvY2Vzcy5cclxuXHQgICAgICAgICAqIE5vdGUgdGhhdCB0aGUgZmluYWxpemUgb3BlcmF0aW9uIGlzIGVmZmVjdGl2ZWx5IGEgZGVzdHJ1Y3RpdmUsIHJlYWQtb25jZSBvcGVyYXRpb24uXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBkYXRhVXBkYXRlIFRoZSBmaW5hbCBkYXRhIHRvIGVuY3J5cHQgb3IgZGVjcnlwdC5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAcmV0dXJuIHtXb3JkQXJyYXl9IFRoZSBkYXRhIGFmdGVyIGZpbmFsIHByb2Nlc3NpbmcuXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQGV4YW1wbGVcclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiAgICAgdmFyIGVuY3J5cHRlZCA9IGNpcGhlci5maW5hbGl6ZSgpO1xyXG5cdCAgICAgICAgICogICAgIHZhciBlbmNyeXB0ZWQgPSBjaXBoZXIuZmluYWxpemUoJ2RhdGEnKTtcclxuXHQgICAgICAgICAqICAgICB2YXIgZW5jcnlwdGVkID0gY2lwaGVyLmZpbmFsaXplKHdvcmRBcnJheSk7XHJcblx0ICAgICAgICAgKi9cclxuXHQgICAgICAgIGZpbmFsaXplOiBmdW5jdGlvbiAoZGF0YVVwZGF0ZSkge1xyXG5cdCAgICAgICAgICAgIC8vIEZpbmFsIGRhdGEgdXBkYXRlXHJcblx0ICAgICAgICAgICAgaWYgKGRhdGFVcGRhdGUpIHtcclxuXHQgICAgICAgICAgICAgICAgdGhpcy5fYXBwZW5kKGRhdGFVcGRhdGUpO1xyXG5cdCAgICAgICAgICAgIH1cclxuXHJcblx0ICAgICAgICAgICAgLy8gUGVyZm9ybSBjb25jcmV0ZS1jaXBoZXIgbG9naWNcclxuXHQgICAgICAgICAgICB2YXIgZmluYWxQcm9jZXNzZWREYXRhID0gdGhpcy5fZG9GaW5hbGl6ZSgpO1xyXG5cclxuXHQgICAgICAgICAgICByZXR1cm4gZmluYWxQcm9jZXNzZWREYXRhO1xyXG5cdCAgICAgICAgfSxcclxuXHJcblx0ICAgICAgICBrZXlTaXplOiAxMjgvMzIsXHJcblxyXG5cdCAgICAgICAgaXZTaXplOiAxMjgvMzIsXHJcblxyXG5cdCAgICAgICAgX0VOQ19YRk9STV9NT0RFOiAxLFxyXG5cclxuXHQgICAgICAgIF9ERUNfWEZPUk1fTU9ERTogMixcclxuXHJcblx0ICAgICAgICAvKipcclxuXHQgICAgICAgICAqIENyZWF0ZXMgc2hvcnRjdXQgZnVuY3Rpb25zIHRvIGEgY2lwaGVyJ3Mgb2JqZWN0IGludGVyZmFjZS5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAcGFyYW0ge0NpcGhlcn0gY2lwaGVyIFRoZSBjaXBoZXIgdG8gY3JlYXRlIGEgaGVscGVyIGZvci5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAcmV0dXJuIHtPYmplY3R9IEFuIG9iamVjdCB3aXRoIGVuY3J5cHQgYW5kIGRlY3J5cHQgc2hvcnRjdXQgZnVuY3Rpb25zLlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEBzdGF0aWNcclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAZXhhbXBsZVxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqICAgICB2YXIgQUVTID0gQ3J5cHRvSlMubGliLkNpcGhlci5fY3JlYXRlSGVscGVyKENyeXB0b0pTLmFsZ28uQUVTKTtcclxuXHQgICAgICAgICAqL1xyXG5cdCAgICAgICAgX2NyZWF0ZUhlbHBlcjogKGZ1bmN0aW9uICgpIHtcclxuXHQgICAgICAgICAgICBmdW5jdGlvbiBzZWxlY3RDaXBoZXJTdHJhdGVneShrZXkpIHtcclxuXHQgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBrZXkgPT0gJ3N0cmluZycpIHtcclxuXHQgICAgICAgICAgICAgICAgICAgIHJldHVybiBQYXNzd29yZEJhc2VkQ2lwaGVyO1xyXG5cdCAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFNlcmlhbGl6YWJsZUNpcGhlcjtcclxuXHQgICAgICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgICAgIH1cclxuXHJcblx0ICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChjaXBoZXIpIHtcclxuXHQgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuXHQgICAgICAgICAgICAgICAgICAgIGVuY3J5cHQ6IGZ1bmN0aW9uIChtZXNzYWdlLCBrZXksIGNmZykge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxlY3RDaXBoZXJTdHJhdGVneShrZXkpLmVuY3J5cHQoY2lwaGVyLCBtZXNzYWdlLCBrZXksIGNmZyk7XHJcblx0ICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuXHQgICAgICAgICAgICAgICAgICAgIGRlY3J5cHQ6IGZ1bmN0aW9uIChjaXBoZXJ0ZXh0LCBrZXksIGNmZykge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZWxlY3RDaXBoZXJTdHJhdGVneShrZXkpLmRlY3J5cHQoY2lwaGVyLCBjaXBoZXJ0ZXh0LCBrZXksIGNmZyk7XHJcblx0ICAgICAgICAgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgICAgIH07XHJcblx0ICAgICAgICAgICAgfTtcclxuXHQgICAgICAgIH0oKSlcclxuXHQgICAgfSk7XHJcblxyXG5cdCAgICAvKipcclxuXHQgICAgICogQWJzdHJhY3QgYmFzZSBzdHJlYW0gY2lwaGVyIHRlbXBsYXRlLlxyXG5cdCAgICAgKlxyXG5cdCAgICAgKiBAcHJvcGVydHkge251bWJlcn0gYmxvY2tTaXplIFRoZSBudW1iZXIgb2YgMzItYml0IHdvcmRzIHRoaXMgY2lwaGVyIG9wZXJhdGVzIG9uLiBEZWZhdWx0OiAxICgzMiBiaXRzKVxyXG5cdCAgICAgKi9cclxuXHQgICAgdmFyIFN0cmVhbUNpcGhlciA9IENfbGliLlN0cmVhbUNpcGhlciA9IENpcGhlci5leHRlbmQoe1xyXG5cdCAgICAgICAgX2RvRmluYWxpemU6IGZ1bmN0aW9uICgpIHtcclxuXHQgICAgICAgICAgICAvLyBQcm9jZXNzIHBhcnRpYWwgYmxvY2tzXHJcblx0ICAgICAgICAgICAgdmFyIGZpbmFsUHJvY2Vzc2VkQmxvY2tzID0gdGhpcy5fcHJvY2VzcyghISdmbHVzaCcpO1xyXG5cclxuXHQgICAgICAgICAgICByZXR1cm4gZmluYWxQcm9jZXNzZWRCbG9ja3M7XHJcblx0ICAgICAgICB9LFxyXG5cclxuXHQgICAgICAgIGJsb2NrU2l6ZTogMVxyXG5cdCAgICB9KTtcclxuXHJcblx0ICAgIC8qKlxyXG5cdCAgICAgKiBNb2RlIG5hbWVzcGFjZS5cclxuXHQgICAgICovXHJcblx0ICAgIHZhciBDX21vZGUgPSBDLm1vZGUgPSB7fTtcclxuXHJcblx0ICAgIC8qKlxyXG5cdCAgICAgKiBBYnN0cmFjdCBiYXNlIGJsb2NrIGNpcGhlciBtb2RlIHRlbXBsYXRlLlxyXG5cdCAgICAgKi9cclxuXHQgICAgdmFyIEJsb2NrQ2lwaGVyTW9kZSA9IENfbGliLkJsb2NrQ2lwaGVyTW9kZSA9IEJhc2UuZXh0ZW5kKHtcclxuXHQgICAgICAgIC8qKlxyXG5cdCAgICAgICAgICogQ3JlYXRlcyB0aGlzIG1vZGUgZm9yIGVuY3J5cHRpb24uXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQHBhcmFtIHtDaXBoZXJ9IGNpcGhlciBBIGJsb2NrIGNpcGhlciBpbnN0YW5jZS5cclxuXHQgICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IGl2IFRoZSBJViB3b3Jkcy5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAc3RhdGljXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQGV4YW1wbGVcclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiAgICAgdmFyIG1vZGUgPSBDcnlwdG9KUy5tb2RlLkNCQy5jcmVhdGVFbmNyeXB0b3IoY2lwaGVyLCBpdi53b3Jkcyk7XHJcblx0ICAgICAgICAgKi9cclxuXHQgICAgICAgIGNyZWF0ZUVuY3J5cHRvcjogZnVuY3Rpb24gKGNpcGhlciwgaXYpIHtcclxuXHQgICAgICAgICAgICByZXR1cm4gdGhpcy5FbmNyeXB0b3IuY3JlYXRlKGNpcGhlciwgaXYpO1xyXG5cdCAgICAgICAgfSxcclxuXHJcblx0ICAgICAgICAvKipcclxuXHQgICAgICAgICAqIENyZWF0ZXMgdGhpcyBtb2RlIGZvciBkZWNyeXB0aW9uLlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEBwYXJhbSB7Q2lwaGVyfSBjaXBoZXIgQSBibG9jayBjaXBoZXIgaW5zdGFuY2UuXHJcblx0ICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSBpdiBUaGUgSVYgd29yZHMuXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQHN0YXRpY1xyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEBleGFtcGxlXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogICAgIHZhciBtb2RlID0gQ3J5cHRvSlMubW9kZS5DQkMuY3JlYXRlRGVjcnlwdG9yKGNpcGhlciwgaXYud29yZHMpO1xyXG5cdCAgICAgICAgICovXHJcblx0ICAgICAgICBjcmVhdGVEZWNyeXB0b3I6IGZ1bmN0aW9uIChjaXBoZXIsIGl2KSB7XHJcblx0ICAgICAgICAgICAgcmV0dXJuIHRoaXMuRGVjcnlwdG9yLmNyZWF0ZShjaXBoZXIsIGl2KTtcclxuXHQgICAgICAgIH0sXHJcblxyXG5cdCAgICAgICAgLyoqXHJcblx0ICAgICAgICAgKiBJbml0aWFsaXplcyBhIG5ld2x5IGNyZWF0ZWQgbW9kZS5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAcGFyYW0ge0NpcGhlcn0gY2lwaGVyIEEgYmxvY2sgY2lwaGVyIGluc3RhbmNlLlxyXG5cdCAgICAgICAgICogQHBhcmFtIHtBcnJheX0gaXYgVGhlIElWIHdvcmRzLlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEBleGFtcGxlXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogICAgIHZhciBtb2RlID0gQ3J5cHRvSlMubW9kZS5DQkMuRW5jcnlwdG9yLmNyZWF0ZShjaXBoZXIsIGl2LndvcmRzKTtcclxuXHQgICAgICAgICAqL1xyXG5cdCAgICAgICAgaW5pdDogZnVuY3Rpb24gKGNpcGhlciwgaXYpIHtcclxuXHQgICAgICAgICAgICB0aGlzLl9jaXBoZXIgPSBjaXBoZXI7XHJcblx0ICAgICAgICAgICAgdGhpcy5faXYgPSBpdjtcclxuXHQgICAgICAgIH1cclxuXHQgICAgfSk7XHJcblxyXG5cdCAgICAvKipcclxuXHQgICAgICogQ2lwaGVyIEJsb2NrIENoYWluaW5nIG1vZGUuXHJcblx0ICAgICAqL1xyXG5cdCAgICB2YXIgQ0JDID0gQ19tb2RlLkNCQyA9IChmdW5jdGlvbiAoKSB7XHJcblx0ICAgICAgICAvKipcclxuXHQgICAgICAgICAqIEFic3RyYWN0IGJhc2UgQ0JDIG1vZGUuXHJcblx0ICAgICAgICAgKi9cclxuXHQgICAgICAgIHZhciBDQkMgPSBCbG9ja0NpcGhlck1vZGUuZXh0ZW5kKCk7XHJcblxyXG5cdCAgICAgICAgLyoqXHJcblx0ICAgICAgICAgKiBDQkMgZW5jcnlwdG9yLlxyXG5cdCAgICAgICAgICovXHJcblx0ICAgICAgICBDQkMuRW5jcnlwdG9yID0gQ0JDLmV4dGVuZCh7XHJcblx0ICAgICAgICAgICAgLyoqXHJcblx0ICAgICAgICAgICAgICogUHJvY2Vzc2VzIHRoZSBkYXRhIGJsb2NrIGF0IG9mZnNldC5cclxuXHQgICAgICAgICAgICAgKlxyXG5cdCAgICAgICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IHdvcmRzIFRoZSBkYXRhIHdvcmRzIHRvIG9wZXJhdGUgb24uXHJcblx0ICAgICAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IG9mZnNldCBUaGUgb2Zmc2V0IHdoZXJlIHRoZSBibG9jayBzdGFydHMuXHJcblx0ICAgICAgICAgICAgICpcclxuXHQgICAgICAgICAgICAgKiBAZXhhbXBsZVxyXG5cdCAgICAgICAgICAgICAqXHJcblx0ICAgICAgICAgICAgICogICAgIG1vZGUucHJvY2Vzc0Jsb2NrKGRhdGEud29yZHMsIG9mZnNldCk7XHJcblx0ICAgICAgICAgICAgICovXHJcblx0ICAgICAgICAgICAgcHJvY2Vzc0Jsb2NrOiBmdW5jdGlvbiAod29yZHMsIG9mZnNldCkge1xyXG5cdCAgICAgICAgICAgICAgICAvLyBTaG9ydGN1dHNcclxuXHQgICAgICAgICAgICAgICAgdmFyIGNpcGhlciA9IHRoaXMuX2NpcGhlcjtcclxuXHQgICAgICAgICAgICAgICAgdmFyIGJsb2NrU2l6ZSA9IGNpcGhlci5ibG9ja1NpemU7XHJcblxyXG5cdCAgICAgICAgICAgICAgICAvLyBYT1IgYW5kIGVuY3J5cHRcclxuXHQgICAgICAgICAgICAgICAgeG9yQmxvY2suY2FsbCh0aGlzLCB3b3Jkcywgb2Zmc2V0LCBibG9ja1NpemUpO1xyXG5cdCAgICAgICAgICAgICAgICBjaXBoZXIuZW5jcnlwdEJsb2NrKHdvcmRzLCBvZmZzZXQpO1xyXG5cclxuXHQgICAgICAgICAgICAgICAgLy8gUmVtZW1iZXIgdGhpcyBibG9jayB0byB1c2Ugd2l0aCBuZXh0IGJsb2NrXHJcblx0ICAgICAgICAgICAgICAgIHRoaXMuX3ByZXZCbG9jayA9IHdvcmRzLnNsaWNlKG9mZnNldCwgb2Zmc2V0ICsgYmxvY2tTaXplKTtcclxuXHQgICAgICAgICAgICB9XHJcblx0ICAgICAgICB9KTtcclxuXHJcblx0ICAgICAgICAvKipcclxuXHQgICAgICAgICAqIENCQyBkZWNyeXB0b3IuXHJcblx0ICAgICAgICAgKi9cclxuXHQgICAgICAgIENCQy5EZWNyeXB0b3IgPSBDQkMuZXh0ZW5kKHtcclxuXHQgICAgICAgICAgICAvKipcclxuXHQgICAgICAgICAgICAgKiBQcm9jZXNzZXMgdGhlIGRhdGEgYmxvY2sgYXQgb2Zmc2V0LlxyXG5cdCAgICAgICAgICAgICAqXHJcblx0ICAgICAgICAgICAgICogQHBhcmFtIHtBcnJheX0gd29yZHMgVGhlIGRhdGEgd29yZHMgdG8gb3BlcmF0ZSBvbi5cclxuXHQgICAgICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gb2Zmc2V0IFRoZSBvZmZzZXQgd2hlcmUgdGhlIGJsb2NrIHN0YXJ0cy5cclxuXHQgICAgICAgICAgICAgKlxyXG5cdCAgICAgICAgICAgICAqIEBleGFtcGxlXHJcblx0ICAgICAgICAgICAgICpcclxuXHQgICAgICAgICAgICAgKiAgICAgbW9kZS5wcm9jZXNzQmxvY2soZGF0YS53b3Jkcywgb2Zmc2V0KTtcclxuXHQgICAgICAgICAgICAgKi9cclxuXHQgICAgICAgICAgICBwcm9jZXNzQmxvY2s6IGZ1bmN0aW9uICh3b3Jkcywgb2Zmc2V0KSB7XHJcblx0ICAgICAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xyXG5cdCAgICAgICAgICAgICAgICB2YXIgY2lwaGVyID0gdGhpcy5fY2lwaGVyO1xyXG5cdCAgICAgICAgICAgICAgICB2YXIgYmxvY2tTaXplID0gY2lwaGVyLmJsb2NrU2l6ZTtcclxuXHJcblx0ICAgICAgICAgICAgICAgIC8vIFJlbWVtYmVyIHRoaXMgYmxvY2sgdG8gdXNlIHdpdGggbmV4dCBibG9ja1xyXG5cdCAgICAgICAgICAgICAgICB2YXIgdGhpc0Jsb2NrID0gd29yZHMuc2xpY2Uob2Zmc2V0LCBvZmZzZXQgKyBibG9ja1NpemUpO1xyXG5cclxuXHQgICAgICAgICAgICAgICAgLy8gRGVjcnlwdCBhbmQgWE9SXHJcblx0ICAgICAgICAgICAgICAgIGNpcGhlci5kZWNyeXB0QmxvY2sod29yZHMsIG9mZnNldCk7XHJcblx0ICAgICAgICAgICAgICAgIHhvckJsb2NrLmNhbGwodGhpcywgd29yZHMsIG9mZnNldCwgYmxvY2tTaXplKTtcclxuXHJcblx0ICAgICAgICAgICAgICAgIC8vIFRoaXMgYmxvY2sgYmVjb21lcyB0aGUgcHJldmlvdXMgYmxvY2tcclxuXHQgICAgICAgICAgICAgICAgdGhpcy5fcHJldkJsb2NrID0gdGhpc0Jsb2NrO1xyXG5cdCAgICAgICAgICAgIH1cclxuXHQgICAgICAgIH0pO1xyXG5cclxuXHQgICAgICAgIGZ1bmN0aW9uIHhvckJsb2NrKHdvcmRzLCBvZmZzZXQsIGJsb2NrU2l6ZSkge1xyXG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0XHJcblx0ICAgICAgICAgICAgdmFyIGl2ID0gdGhpcy5faXY7XHJcblxyXG5cdCAgICAgICAgICAgIC8vIENob29zZSBtaXhpbmcgYmxvY2tcclxuXHQgICAgICAgICAgICBpZiAoaXYpIHtcclxuXHQgICAgICAgICAgICAgICAgdmFyIGJsb2NrID0gaXY7XHJcblxyXG5cdCAgICAgICAgICAgICAgICAvLyBSZW1vdmUgSVYgZm9yIHN1YnNlcXVlbnQgYmxvY2tzXHJcblx0ICAgICAgICAgICAgICAgIHRoaXMuX2l2ID0gdW5kZWZpbmVkO1xyXG5cdCAgICAgICAgICAgIH0gZWxzZSB7XHJcblx0ICAgICAgICAgICAgICAgIHZhciBibG9jayA9IHRoaXMuX3ByZXZCbG9jaztcclxuXHQgICAgICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgICAgIC8vIFhPUiBibG9ja3NcclxuXHQgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJsb2NrU2l6ZTsgaSsrKSB7XHJcblx0ICAgICAgICAgICAgICAgIHdvcmRzW29mZnNldCArIGldIF49IGJsb2NrW2ldO1xyXG5cdCAgICAgICAgICAgIH1cclxuXHQgICAgICAgIH1cclxuXHJcblx0ICAgICAgICByZXR1cm4gQ0JDO1xyXG5cdCAgICB9KCkpO1xyXG5cclxuXHQgICAgLyoqXHJcblx0ICAgICAqIFBhZGRpbmcgbmFtZXNwYWNlLlxyXG5cdCAgICAgKi9cclxuXHQgICAgdmFyIENfcGFkID0gQy5wYWQgPSB7fTtcclxuXHJcblx0ICAgIC8qKlxyXG5cdCAgICAgKiBQS0NTICM1LzcgcGFkZGluZyBzdHJhdGVneS5cclxuXHQgICAgICovXHJcblx0ICAgIHZhciBQa2NzNyA9IENfcGFkLlBrY3M3ID0ge1xyXG5cdCAgICAgICAgLyoqXHJcblx0ICAgICAgICAgKiBQYWRzIGRhdGEgdXNpbmcgdGhlIGFsZ29yaXRobSBkZWZpbmVkIGluIFBLQ1MgIzUvNy5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheX0gZGF0YSBUaGUgZGF0YSB0byBwYWQuXHJcblx0ICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gYmxvY2tTaXplIFRoZSBtdWx0aXBsZSB0aGF0IHRoZSBkYXRhIHNob3VsZCBiZSBwYWRkZWQgdG8uXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQHN0YXRpY1xyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEBleGFtcGxlXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogICAgIENyeXB0b0pTLnBhZC5Qa2NzNy5wYWQod29yZEFycmF5LCA0KTtcclxuXHQgICAgICAgICAqL1xyXG5cdCAgICAgICAgcGFkOiBmdW5jdGlvbiAoZGF0YSwgYmxvY2tTaXplKSB7XHJcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRcclxuXHQgICAgICAgICAgICB2YXIgYmxvY2tTaXplQnl0ZXMgPSBibG9ja1NpemUgKiA0O1xyXG5cclxuXHQgICAgICAgICAgICAvLyBDb3VudCBwYWRkaW5nIGJ5dGVzXHJcblx0ICAgICAgICAgICAgdmFyIG5QYWRkaW5nQnl0ZXMgPSBibG9ja1NpemVCeXRlcyAtIGRhdGEuc2lnQnl0ZXMgJSBibG9ja1NpemVCeXRlcztcclxuXHJcblx0ICAgICAgICAgICAgLy8gQ3JlYXRlIHBhZGRpbmcgd29yZFxyXG5cdCAgICAgICAgICAgIHZhciBwYWRkaW5nV29yZCA9IChuUGFkZGluZ0J5dGVzIDw8IDI0KSB8IChuUGFkZGluZ0J5dGVzIDw8IDE2KSB8IChuUGFkZGluZ0J5dGVzIDw8IDgpIHwgblBhZGRpbmdCeXRlcztcclxuXHJcblx0ICAgICAgICAgICAgLy8gQ3JlYXRlIHBhZGRpbmdcclxuXHQgICAgICAgICAgICB2YXIgcGFkZGluZ1dvcmRzID0gW107XHJcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuUGFkZGluZ0J5dGVzOyBpICs9IDQpIHtcclxuXHQgICAgICAgICAgICAgICAgcGFkZGluZ1dvcmRzLnB1c2gocGFkZGluZ1dvcmQpO1xyXG5cdCAgICAgICAgICAgIH1cclxuXHQgICAgICAgICAgICB2YXIgcGFkZGluZyA9IFdvcmRBcnJheS5jcmVhdGUocGFkZGluZ1dvcmRzLCBuUGFkZGluZ0J5dGVzKTtcclxuXHJcblx0ICAgICAgICAgICAgLy8gQWRkIHBhZGRpbmdcclxuXHQgICAgICAgICAgICBkYXRhLmNvbmNhdChwYWRkaW5nKTtcclxuXHQgICAgICAgIH0sXHJcblxyXG5cdCAgICAgICAgLyoqXHJcblx0ICAgICAgICAgKiBVbnBhZHMgZGF0YSB0aGF0IGhhZCBiZWVuIHBhZGRlZCB1c2luZyB0aGUgYWxnb3JpdGhtIGRlZmluZWQgaW4gUEtDUyAjNS83LlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fSBkYXRhIFRoZSBkYXRhIHRvIHVucGFkLlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEBzdGF0aWNcclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAZXhhbXBsZVxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqICAgICBDcnlwdG9KUy5wYWQuUGtjczcudW5wYWQod29yZEFycmF5KTtcclxuXHQgICAgICAgICAqL1xyXG5cdCAgICAgICAgdW5wYWQ6IGZ1bmN0aW9uIChkYXRhKSB7XHJcblx0ICAgICAgICAgICAgLy8gR2V0IG51bWJlciBvZiBwYWRkaW5nIGJ5dGVzIGZyb20gbGFzdCBieXRlXHJcblx0ICAgICAgICAgICAgdmFyIG5QYWRkaW5nQnl0ZXMgPSBkYXRhLndvcmRzWyhkYXRhLnNpZ0J5dGVzIC0gMSkgPj4+IDJdICYgMHhmZjtcclxuXHJcblx0ICAgICAgICAgICAgLy8gUmVtb3ZlIHBhZGRpbmdcclxuXHQgICAgICAgICAgICBkYXRhLnNpZ0J5dGVzIC09IG5QYWRkaW5nQnl0ZXM7XHJcblx0ICAgICAgICB9XHJcblx0ICAgIH07XHJcblxyXG5cdCAgICAvKipcclxuXHQgICAgICogQWJzdHJhY3QgYmFzZSBibG9jayBjaXBoZXIgdGVtcGxhdGUuXHJcblx0ICAgICAqXHJcblx0ICAgICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBibG9ja1NpemUgVGhlIG51bWJlciBvZiAzMi1iaXQgd29yZHMgdGhpcyBjaXBoZXIgb3BlcmF0ZXMgb24uIERlZmF1bHQ6IDQgKDEyOCBiaXRzKVxyXG5cdCAgICAgKi9cclxuXHQgICAgdmFyIEJsb2NrQ2lwaGVyID0gQ19saWIuQmxvY2tDaXBoZXIgPSBDaXBoZXIuZXh0ZW5kKHtcclxuXHQgICAgICAgIC8qKlxyXG5cdCAgICAgICAgICogQ29uZmlndXJhdGlvbiBvcHRpb25zLlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEBwcm9wZXJ0eSB7TW9kZX0gbW9kZSBUaGUgYmxvY2sgbW9kZSB0byB1c2UuIERlZmF1bHQ6IENCQ1xyXG5cdCAgICAgICAgICogQHByb3BlcnR5IHtQYWRkaW5nfSBwYWRkaW5nIFRoZSBwYWRkaW5nIHN0cmF0ZWd5IHRvIHVzZS4gRGVmYXVsdDogUGtjczdcclxuXHQgICAgICAgICAqL1xyXG5cdCAgICAgICAgY2ZnOiBDaXBoZXIuY2ZnLmV4dGVuZCh7XHJcblx0ICAgICAgICAgICAgbW9kZTogQ0JDLFxyXG5cdCAgICAgICAgICAgIHBhZGRpbmc6IFBrY3M3XHJcblx0ICAgICAgICB9KSxcclxuXHJcblx0ICAgICAgICByZXNldDogZnVuY3Rpb24gKCkge1xyXG5cdCAgICAgICAgICAgIC8vIFJlc2V0IGNpcGhlclxyXG5cdCAgICAgICAgICAgIENpcGhlci5yZXNldC5jYWxsKHRoaXMpO1xyXG5cclxuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcclxuXHQgICAgICAgICAgICB2YXIgY2ZnID0gdGhpcy5jZmc7XHJcblx0ICAgICAgICAgICAgdmFyIGl2ID0gY2ZnLml2O1xyXG5cdCAgICAgICAgICAgIHZhciBtb2RlID0gY2ZnLm1vZGU7XHJcblxyXG5cdCAgICAgICAgICAgIC8vIFJlc2V0IGJsb2NrIG1vZGVcclxuXHQgICAgICAgICAgICBpZiAodGhpcy5feGZvcm1Nb2RlID09IHRoaXMuX0VOQ19YRk9STV9NT0RFKSB7XHJcblx0ICAgICAgICAgICAgICAgIHZhciBtb2RlQ3JlYXRvciA9IG1vZGUuY3JlYXRlRW5jcnlwdG9yO1xyXG5cdCAgICAgICAgICAgIH0gZWxzZSAvKiBpZiAodGhpcy5feGZvcm1Nb2RlID09IHRoaXMuX0RFQ19YRk9STV9NT0RFKSAqLyB7XHJcblx0ICAgICAgICAgICAgICAgIHZhciBtb2RlQ3JlYXRvciA9IG1vZGUuY3JlYXRlRGVjcnlwdG9yO1xyXG5cdCAgICAgICAgICAgICAgICAvLyBLZWVwIGF0IGxlYXN0IG9uZSBibG9jayBpbiB0aGUgYnVmZmVyIGZvciB1bnBhZGRpbmdcclxuXHQgICAgICAgICAgICAgICAgdGhpcy5fbWluQnVmZmVyU2l6ZSA9IDE7XHJcblx0ICAgICAgICAgICAgfVxyXG5cclxuXHQgICAgICAgICAgICBpZiAodGhpcy5fbW9kZSAmJiB0aGlzLl9tb2RlLl9fY3JlYXRvciA9PSBtb2RlQ3JlYXRvcikge1xyXG5cdCAgICAgICAgICAgICAgICB0aGlzLl9tb2RlLmluaXQodGhpcywgaXYgJiYgaXYud29yZHMpO1xyXG5cdCAgICAgICAgICAgIH0gZWxzZSB7XHJcblx0ICAgICAgICAgICAgICAgIHRoaXMuX21vZGUgPSBtb2RlQ3JlYXRvci5jYWxsKG1vZGUsIHRoaXMsIGl2ICYmIGl2LndvcmRzKTtcclxuXHQgICAgICAgICAgICAgICAgdGhpcy5fbW9kZS5fX2NyZWF0b3IgPSBtb2RlQ3JlYXRvcjtcclxuXHQgICAgICAgICAgICB9XHJcblx0ICAgICAgICB9LFxyXG5cclxuXHQgICAgICAgIF9kb1Byb2Nlc3NCbG9jazogZnVuY3Rpb24gKHdvcmRzLCBvZmZzZXQpIHtcclxuXHQgICAgICAgICAgICB0aGlzLl9tb2RlLnByb2Nlc3NCbG9jayh3b3Jkcywgb2Zmc2V0KTtcclxuXHQgICAgICAgIH0sXHJcblxyXG5cdCAgICAgICAgX2RvRmluYWxpemU6IGZ1bmN0aW9uICgpIHtcclxuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dFxyXG5cdCAgICAgICAgICAgIHZhciBwYWRkaW5nID0gdGhpcy5jZmcucGFkZGluZztcclxuXHJcblx0ICAgICAgICAgICAgLy8gRmluYWxpemVcclxuXHQgICAgICAgICAgICBpZiAodGhpcy5feGZvcm1Nb2RlID09IHRoaXMuX0VOQ19YRk9STV9NT0RFKSB7XHJcblx0ICAgICAgICAgICAgICAgIC8vIFBhZCBkYXRhXHJcblx0ICAgICAgICAgICAgICAgIHBhZGRpbmcucGFkKHRoaXMuX2RhdGEsIHRoaXMuYmxvY2tTaXplKTtcclxuXHJcblx0ICAgICAgICAgICAgICAgIC8vIFByb2Nlc3MgZmluYWwgYmxvY2tzXHJcblx0ICAgICAgICAgICAgICAgIHZhciBmaW5hbFByb2Nlc3NlZEJsb2NrcyA9IHRoaXMuX3Byb2Nlc3MoISEnZmx1c2gnKTtcclxuXHQgICAgICAgICAgICB9IGVsc2UgLyogaWYgKHRoaXMuX3hmb3JtTW9kZSA9PSB0aGlzLl9ERUNfWEZPUk1fTU9ERSkgKi8ge1xyXG5cdCAgICAgICAgICAgICAgICAvLyBQcm9jZXNzIGZpbmFsIGJsb2Nrc1xyXG5cdCAgICAgICAgICAgICAgICB2YXIgZmluYWxQcm9jZXNzZWRCbG9ja3MgPSB0aGlzLl9wcm9jZXNzKCEhJ2ZsdXNoJyk7XHJcblxyXG5cdCAgICAgICAgICAgICAgICAvLyBVbnBhZCBkYXRhXHJcblx0ICAgICAgICAgICAgICAgIHBhZGRpbmcudW5wYWQoZmluYWxQcm9jZXNzZWRCbG9ja3MpO1xyXG5cdCAgICAgICAgICAgIH1cclxuXHJcblx0ICAgICAgICAgICAgcmV0dXJuIGZpbmFsUHJvY2Vzc2VkQmxvY2tzO1xyXG5cdCAgICAgICAgfSxcclxuXHJcblx0ICAgICAgICBibG9ja1NpemU6IDEyOC8zMlxyXG5cdCAgICB9KTtcclxuXHJcblx0ICAgIC8qKlxyXG5cdCAgICAgKiBBIGNvbGxlY3Rpb24gb2YgY2lwaGVyIHBhcmFtZXRlcnMuXHJcblx0ICAgICAqXHJcblx0ICAgICAqIEBwcm9wZXJ0eSB7V29yZEFycmF5fSBjaXBoZXJ0ZXh0IFRoZSByYXcgY2lwaGVydGV4dC5cclxuXHQgICAgICogQHByb3BlcnR5IHtXb3JkQXJyYXl9IGtleSBUaGUga2V5IHRvIHRoaXMgY2lwaGVydGV4dC5cclxuXHQgICAgICogQHByb3BlcnR5IHtXb3JkQXJyYXl9IGl2IFRoZSBJViB1c2VkIGluIHRoZSBjaXBoZXJpbmcgb3BlcmF0aW9uLlxyXG5cdCAgICAgKiBAcHJvcGVydHkge1dvcmRBcnJheX0gc2FsdCBUaGUgc2FsdCB1c2VkIHdpdGggYSBrZXkgZGVyaXZhdGlvbiBmdW5jdGlvbi5cclxuXHQgICAgICogQHByb3BlcnR5IHtDaXBoZXJ9IGFsZ29yaXRobSBUaGUgY2lwaGVyIGFsZ29yaXRobS5cclxuXHQgICAgICogQHByb3BlcnR5IHtNb2RlfSBtb2RlIFRoZSBibG9jayBtb2RlIHVzZWQgaW4gdGhlIGNpcGhlcmluZyBvcGVyYXRpb24uXHJcblx0ICAgICAqIEBwcm9wZXJ0eSB7UGFkZGluZ30gcGFkZGluZyBUaGUgcGFkZGluZyBzY2hlbWUgdXNlZCBpbiB0aGUgY2lwaGVyaW5nIG9wZXJhdGlvbi5cclxuXHQgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IGJsb2NrU2l6ZSBUaGUgYmxvY2sgc2l6ZSBvZiB0aGUgY2lwaGVyLlxyXG5cdCAgICAgKiBAcHJvcGVydHkge0Zvcm1hdH0gZm9ybWF0dGVyIFRoZSBkZWZhdWx0IGZvcm1hdHRpbmcgc3RyYXRlZ3kgdG8gY29udmVydCB0aGlzIGNpcGhlciBwYXJhbXMgb2JqZWN0IHRvIGEgc3RyaW5nLlxyXG5cdCAgICAgKi9cclxuXHQgICAgdmFyIENpcGhlclBhcmFtcyA9IENfbGliLkNpcGhlclBhcmFtcyA9IEJhc2UuZXh0ZW5kKHtcclxuXHQgICAgICAgIC8qKlxyXG5cdCAgICAgICAgICogSW5pdGlhbGl6ZXMgYSBuZXdseSBjcmVhdGVkIGNpcGhlciBwYXJhbXMgb2JqZWN0LlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjaXBoZXJQYXJhbXMgQW4gb2JqZWN0IHdpdGggYW55IG9mIHRoZSBwb3NzaWJsZSBjaXBoZXIgcGFyYW1ldGVycy5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAZXhhbXBsZVxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqICAgICB2YXIgY2lwaGVyUGFyYW1zID0gQ3J5cHRvSlMubGliLkNpcGhlclBhcmFtcy5jcmVhdGUoe1xyXG5cdCAgICAgICAgICogICAgICAgICBjaXBoZXJ0ZXh0OiBjaXBoZXJ0ZXh0V29yZEFycmF5LFxyXG5cdCAgICAgICAgICogICAgICAgICBrZXk6IGtleVdvcmRBcnJheSxcclxuXHQgICAgICAgICAqICAgICAgICAgaXY6IGl2V29yZEFycmF5LFxyXG5cdCAgICAgICAgICogICAgICAgICBzYWx0OiBzYWx0V29yZEFycmF5LFxyXG5cdCAgICAgICAgICogICAgICAgICBhbGdvcml0aG06IENyeXB0b0pTLmFsZ28uQUVTLFxyXG5cdCAgICAgICAgICogICAgICAgICBtb2RlOiBDcnlwdG9KUy5tb2RlLkNCQyxcclxuXHQgICAgICAgICAqICAgICAgICAgcGFkZGluZzogQ3J5cHRvSlMucGFkLlBLQ1M3LFxyXG5cdCAgICAgICAgICogICAgICAgICBibG9ja1NpemU6IDQsXHJcblx0ICAgICAgICAgKiAgICAgICAgIGZvcm1hdHRlcjogQ3J5cHRvSlMuZm9ybWF0Lk9wZW5TU0xcclxuXHQgICAgICAgICAqICAgICB9KTtcclxuXHQgICAgICAgICAqL1xyXG5cdCAgICAgICAgaW5pdDogZnVuY3Rpb24gKGNpcGhlclBhcmFtcykge1xyXG5cdCAgICAgICAgICAgIHRoaXMubWl4SW4oY2lwaGVyUGFyYW1zKTtcclxuXHQgICAgICAgIH0sXHJcblxyXG5cdCAgICAgICAgLyoqXHJcblx0ICAgICAgICAgKiBDb252ZXJ0cyB0aGlzIGNpcGhlciBwYXJhbXMgb2JqZWN0IHRvIGEgc3RyaW5nLlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEBwYXJhbSB7Rm9ybWF0fSBmb3JtYXR0ZXIgKE9wdGlvbmFsKSBUaGUgZm9ybWF0dGluZyBzdHJhdGVneSB0byB1c2UuXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgc3RyaW5naWZpZWQgY2lwaGVyIHBhcmFtcy5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAdGhyb3dzIEVycm9yIElmIG5laXRoZXIgdGhlIGZvcm1hdHRlciBub3IgdGhlIGRlZmF1bHQgZm9ybWF0dGVyIGlzIHNldC5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAZXhhbXBsZVxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqICAgICB2YXIgc3RyaW5nID0gY2lwaGVyUGFyYW1zICsgJyc7XHJcblx0ICAgICAgICAgKiAgICAgdmFyIHN0cmluZyA9IGNpcGhlclBhcmFtcy50b1N0cmluZygpO1xyXG5cdCAgICAgICAgICogICAgIHZhciBzdHJpbmcgPSBjaXBoZXJQYXJhbXMudG9TdHJpbmcoQ3J5cHRvSlMuZm9ybWF0Lk9wZW5TU0wpO1xyXG5cdCAgICAgICAgICovXHJcblx0ICAgICAgICB0b1N0cmluZzogZnVuY3Rpb24gKGZvcm1hdHRlcikge1xyXG5cdCAgICAgICAgICAgIHJldHVybiAoZm9ybWF0dGVyIHx8IHRoaXMuZm9ybWF0dGVyKS5zdHJpbmdpZnkodGhpcyk7XHJcblx0ICAgICAgICB9XHJcblx0ICAgIH0pO1xyXG5cclxuXHQgICAgLyoqXHJcblx0ICAgICAqIEZvcm1hdCBuYW1lc3BhY2UuXHJcblx0ICAgICAqL1xyXG5cdCAgICB2YXIgQ19mb3JtYXQgPSBDLmZvcm1hdCA9IHt9O1xyXG5cclxuXHQgICAgLyoqXHJcblx0ICAgICAqIE9wZW5TU0wgZm9ybWF0dGluZyBzdHJhdGVneS5cclxuXHQgICAgICovXHJcblx0ICAgIHZhciBPcGVuU1NMRm9ybWF0dGVyID0gQ19mb3JtYXQuT3BlblNTTCA9IHtcclxuXHQgICAgICAgIC8qKlxyXG5cdCAgICAgICAgICogQ29udmVydHMgYSBjaXBoZXIgcGFyYW1zIG9iamVjdCB0byBhbiBPcGVuU1NMLWNvbXBhdGlibGUgc3RyaW5nLlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEBwYXJhbSB7Q2lwaGVyUGFyYW1zfSBjaXBoZXJQYXJhbXMgVGhlIGNpcGhlciBwYXJhbXMgb2JqZWN0LlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gVGhlIE9wZW5TU0wtY29tcGF0aWJsZSBzdHJpbmcuXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQHN0YXRpY1xyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEBleGFtcGxlXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogICAgIHZhciBvcGVuU1NMU3RyaW5nID0gQ3J5cHRvSlMuZm9ybWF0Lk9wZW5TU0wuc3RyaW5naWZ5KGNpcGhlclBhcmFtcyk7XHJcblx0ICAgICAgICAgKi9cclxuXHQgICAgICAgIHN0cmluZ2lmeTogZnVuY3Rpb24gKGNpcGhlclBhcmFtcykge1xyXG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xyXG5cdCAgICAgICAgICAgIHZhciBjaXBoZXJ0ZXh0ID0gY2lwaGVyUGFyYW1zLmNpcGhlcnRleHQ7XHJcblx0ICAgICAgICAgICAgdmFyIHNhbHQgPSBjaXBoZXJQYXJhbXMuc2FsdDtcclxuXHJcblx0ICAgICAgICAgICAgLy8gRm9ybWF0XHJcblx0ICAgICAgICAgICAgaWYgKHNhbHQpIHtcclxuXHQgICAgICAgICAgICAgICAgdmFyIHdvcmRBcnJheSA9IFdvcmRBcnJheS5jcmVhdGUoWzB4NTM2MTZjNzQsIDB4NjU2NDVmNWZdKS5jb25jYXQoc2FsdCkuY29uY2F0KGNpcGhlcnRleHQpO1xyXG5cdCAgICAgICAgICAgIH0gZWxzZSB7XHJcblx0ICAgICAgICAgICAgICAgIHZhciB3b3JkQXJyYXkgPSBjaXBoZXJ0ZXh0O1xyXG5cdCAgICAgICAgICAgIH1cclxuXHJcblx0ICAgICAgICAgICAgcmV0dXJuIHdvcmRBcnJheS50b1N0cmluZyhCYXNlNjQpO1xyXG5cdCAgICAgICAgfSxcclxuXHJcblx0ICAgICAgICAvKipcclxuXHQgICAgICAgICAqIENvbnZlcnRzIGFuIE9wZW5TU0wtY29tcGF0aWJsZSBzdHJpbmcgdG8gYSBjaXBoZXIgcGFyYW1zIG9iamVjdC5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gb3BlblNTTFN0ciBUaGUgT3BlblNTTC1jb21wYXRpYmxlIHN0cmluZy5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAcmV0dXJuIHtDaXBoZXJQYXJhbXN9IFRoZSBjaXBoZXIgcGFyYW1zIG9iamVjdC5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAc3RhdGljXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQGV4YW1wbGVcclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiAgICAgdmFyIGNpcGhlclBhcmFtcyA9IENyeXB0b0pTLmZvcm1hdC5PcGVuU1NMLnBhcnNlKG9wZW5TU0xTdHJpbmcpO1xyXG5cdCAgICAgICAgICovXHJcblx0ICAgICAgICBwYXJzZTogZnVuY3Rpb24gKG9wZW5TU0xTdHIpIHtcclxuXHQgICAgICAgICAgICAvLyBQYXJzZSBiYXNlNjRcclxuXHQgICAgICAgICAgICB2YXIgY2lwaGVydGV4dCA9IEJhc2U2NC5wYXJzZShvcGVuU1NMU3RyKTtcclxuXHJcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRcclxuXHQgICAgICAgICAgICB2YXIgY2lwaGVydGV4dFdvcmRzID0gY2lwaGVydGV4dC53b3JkcztcclxuXHJcblx0ICAgICAgICAgICAgLy8gVGVzdCBmb3Igc2FsdFxyXG5cdCAgICAgICAgICAgIGlmIChjaXBoZXJ0ZXh0V29yZHNbMF0gPT0gMHg1MzYxNmM3NCAmJiBjaXBoZXJ0ZXh0V29yZHNbMV0gPT0gMHg2NTY0NWY1Zikge1xyXG5cdCAgICAgICAgICAgICAgICAvLyBFeHRyYWN0IHNhbHRcclxuXHQgICAgICAgICAgICAgICAgdmFyIHNhbHQgPSBXb3JkQXJyYXkuY3JlYXRlKGNpcGhlcnRleHRXb3Jkcy5zbGljZSgyLCA0KSk7XHJcblxyXG5cdCAgICAgICAgICAgICAgICAvLyBSZW1vdmUgc2FsdCBmcm9tIGNpcGhlcnRleHRcclxuXHQgICAgICAgICAgICAgICAgY2lwaGVydGV4dFdvcmRzLnNwbGljZSgwLCA0KTtcclxuXHQgICAgICAgICAgICAgICAgY2lwaGVydGV4dC5zaWdCeXRlcyAtPSAxNjtcclxuXHQgICAgICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgICAgIHJldHVybiBDaXBoZXJQYXJhbXMuY3JlYXRlKHsgY2lwaGVydGV4dDogY2lwaGVydGV4dCwgc2FsdDogc2FsdCB9KTtcclxuXHQgICAgICAgIH1cclxuXHQgICAgfTtcclxuXHJcblx0ICAgIC8qKlxyXG5cdCAgICAgKiBBIGNpcGhlciB3cmFwcGVyIHRoYXQgcmV0dXJucyBjaXBoZXJ0ZXh0IGFzIGEgc2VyaWFsaXphYmxlIGNpcGhlciBwYXJhbXMgb2JqZWN0LlxyXG5cdCAgICAgKi9cclxuXHQgICAgdmFyIFNlcmlhbGl6YWJsZUNpcGhlciA9IENfbGliLlNlcmlhbGl6YWJsZUNpcGhlciA9IEJhc2UuZXh0ZW5kKHtcclxuXHQgICAgICAgIC8qKlxyXG5cdCAgICAgICAgICogQ29uZmlndXJhdGlvbiBvcHRpb25zLlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEBwcm9wZXJ0eSB7Rm9ybWF0dGVyfSBmb3JtYXQgVGhlIGZvcm1hdHRpbmcgc3RyYXRlZ3kgdG8gY29udmVydCBjaXBoZXIgcGFyYW0gb2JqZWN0cyB0byBhbmQgZnJvbSBhIHN0cmluZy4gRGVmYXVsdDogT3BlblNTTFxyXG5cdCAgICAgICAgICovXHJcblx0ICAgICAgICBjZmc6IEJhc2UuZXh0ZW5kKHtcclxuXHQgICAgICAgICAgICBmb3JtYXQ6IE9wZW5TU0xGb3JtYXR0ZXJcclxuXHQgICAgICAgIH0pLFxyXG5cclxuXHQgICAgICAgIC8qKlxyXG5cdCAgICAgICAgICogRW5jcnlwdHMgYSBtZXNzYWdlLlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEBwYXJhbSB7Q2lwaGVyfSBjaXBoZXIgVGhlIGNpcGhlciBhbGdvcml0aG0gdG8gdXNlLlxyXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGVuY3J5cHQuXHJcblx0ICAgICAgICAgKiBAcGFyYW0ge1dvcmRBcnJheX0ga2V5IFRoZSBrZXkuXHJcblx0ICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2ZnIChPcHRpb25hbCkgVGhlIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyB0byB1c2UgZm9yIHRoaXMgb3BlcmF0aW9uLlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEByZXR1cm4ge0NpcGhlclBhcmFtc30gQSBjaXBoZXIgcGFyYW1zIG9iamVjdC5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAc3RhdGljXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQGV4YW1wbGVcclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiAgICAgdmFyIGNpcGhlcnRleHRQYXJhbXMgPSBDcnlwdG9KUy5saWIuU2VyaWFsaXphYmxlQ2lwaGVyLmVuY3J5cHQoQ3J5cHRvSlMuYWxnby5BRVMsIG1lc3NhZ2UsIGtleSk7XHJcblx0ICAgICAgICAgKiAgICAgdmFyIGNpcGhlcnRleHRQYXJhbXMgPSBDcnlwdG9KUy5saWIuU2VyaWFsaXphYmxlQ2lwaGVyLmVuY3J5cHQoQ3J5cHRvSlMuYWxnby5BRVMsIG1lc3NhZ2UsIGtleSwgeyBpdjogaXYgfSk7XHJcblx0ICAgICAgICAgKiAgICAgdmFyIGNpcGhlcnRleHRQYXJhbXMgPSBDcnlwdG9KUy5saWIuU2VyaWFsaXphYmxlQ2lwaGVyLmVuY3J5cHQoQ3J5cHRvSlMuYWxnby5BRVMsIG1lc3NhZ2UsIGtleSwgeyBpdjogaXYsIGZvcm1hdDogQ3J5cHRvSlMuZm9ybWF0Lk9wZW5TU0wgfSk7XHJcblx0ICAgICAgICAgKi9cclxuXHQgICAgICAgIGVuY3J5cHQ6IGZ1bmN0aW9uIChjaXBoZXIsIG1lc3NhZ2UsIGtleSwgY2ZnKSB7XHJcblx0ICAgICAgICAgICAgLy8gQXBwbHkgY29uZmlnIGRlZmF1bHRzXHJcblx0ICAgICAgICAgICAgY2ZnID0gdGhpcy5jZmcuZXh0ZW5kKGNmZyk7XHJcblxyXG5cdCAgICAgICAgICAgIC8vIEVuY3J5cHRcclxuXHQgICAgICAgICAgICB2YXIgZW5jcnlwdG9yID0gY2lwaGVyLmNyZWF0ZUVuY3J5cHRvcihrZXksIGNmZyk7XHJcblx0ICAgICAgICAgICAgdmFyIGNpcGhlcnRleHQgPSBlbmNyeXB0b3IuZmluYWxpemUobWVzc2FnZSk7XHJcblxyXG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0XHJcblx0ICAgICAgICAgICAgdmFyIGNpcGhlckNmZyA9IGVuY3J5cHRvci5jZmc7XHJcblxyXG5cdCAgICAgICAgICAgIC8vIENyZWF0ZSBhbmQgcmV0dXJuIHNlcmlhbGl6YWJsZSBjaXBoZXIgcGFyYW1zXHJcblx0ICAgICAgICAgICAgcmV0dXJuIENpcGhlclBhcmFtcy5jcmVhdGUoe1xyXG5cdCAgICAgICAgICAgICAgICBjaXBoZXJ0ZXh0OiBjaXBoZXJ0ZXh0LFxyXG5cdCAgICAgICAgICAgICAgICBrZXk6IGtleSxcclxuXHQgICAgICAgICAgICAgICAgaXY6IGNpcGhlckNmZy5pdixcclxuXHQgICAgICAgICAgICAgICAgYWxnb3JpdGhtOiBjaXBoZXIsXHJcblx0ICAgICAgICAgICAgICAgIG1vZGU6IGNpcGhlckNmZy5tb2RlLFxyXG5cdCAgICAgICAgICAgICAgICBwYWRkaW5nOiBjaXBoZXJDZmcucGFkZGluZyxcclxuXHQgICAgICAgICAgICAgICAgYmxvY2tTaXplOiBjaXBoZXIuYmxvY2tTaXplLFxyXG5cdCAgICAgICAgICAgICAgICBmb3JtYXR0ZXI6IGNmZy5mb3JtYXRcclxuXHQgICAgICAgICAgICB9KTtcclxuXHQgICAgICAgIH0sXHJcblxyXG5cdCAgICAgICAgLyoqXHJcblx0ICAgICAgICAgKiBEZWNyeXB0cyBzZXJpYWxpemVkIGNpcGhlcnRleHQuXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQHBhcmFtIHtDaXBoZXJ9IGNpcGhlciBUaGUgY2lwaGVyIGFsZ29yaXRobSB0byB1c2UuXHJcblx0ICAgICAgICAgKiBAcGFyYW0ge0NpcGhlclBhcmFtc3xzdHJpbmd9IGNpcGhlcnRleHQgVGhlIGNpcGhlcnRleHQgdG8gZGVjcnlwdC5cclxuXHQgICAgICAgICAqIEBwYXJhbSB7V29yZEFycmF5fSBrZXkgVGhlIGtleS5cclxuXHQgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjZmcgKE9wdGlvbmFsKSBUaGUgY29uZmlndXJhdGlvbiBvcHRpb25zIHRvIHVzZSBmb3IgdGhpcyBvcGVyYXRpb24uXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQHJldHVybiB7V29yZEFycmF5fSBUaGUgcGxhaW50ZXh0LlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEBzdGF0aWNcclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAZXhhbXBsZVxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqICAgICB2YXIgcGxhaW50ZXh0ID0gQ3J5cHRvSlMubGliLlNlcmlhbGl6YWJsZUNpcGhlci5kZWNyeXB0KENyeXB0b0pTLmFsZ28uQUVTLCBmb3JtYXR0ZWRDaXBoZXJ0ZXh0LCBrZXksIHsgaXY6IGl2LCBmb3JtYXQ6IENyeXB0b0pTLmZvcm1hdC5PcGVuU1NMIH0pO1xyXG5cdCAgICAgICAgICogICAgIHZhciBwbGFpbnRleHQgPSBDcnlwdG9KUy5saWIuU2VyaWFsaXphYmxlQ2lwaGVyLmRlY3J5cHQoQ3J5cHRvSlMuYWxnby5BRVMsIGNpcGhlcnRleHRQYXJhbXMsIGtleSwgeyBpdjogaXYsIGZvcm1hdDogQ3J5cHRvSlMuZm9ybWF0Lk9wZW5TU0wgfSk7XHJcblx0ICAgICAgICAgKi9cclxuXHQgICAgICAgIGRlY3J5cHQ6IGZ1bmN0aW9uIChjaXBoZXIsIGNpcGhlcnRleHQsIGtleSwgY2ZnKSB7XHJcblx0ICAgICAgICAgICAgLy8gQXBwbHkgY29uZmlnIGRlZmF1bHRzXHJcblx0ICAgICAgICAgICAgY2ZnID0gdGhpcy5jZmcuZXh0ZW5kKGNmZyk7XHJcblxyXG5cdCAgICAgICAgICAgIC8vIENvbnZlcnQgc3RyaW5nIHRvIENpcGhlclBhcmFtc1xyXG5cdCAgICAgICAgICAgIGNpcGhlcnRleHQgPSB0aGlzLl9wYXJzZShjaXBoZXJ0ZXh0LCBjZmcuZm9ybWF0KTtcclxuXHJcblx0ICAgICAgICAgICAgLy8gRGVjcnlwdFxyXG5cdCAgICAgICAgICAgIHZhciBwbGFpbnRleHQgPSBjaXBoZXIuY3JlYXRlRGVjcnlwdG9yKGtleSwgY2ZnKS5maW5hbGl6ZShjaXBoZXJ0ZXh0LmNpcGhlcnRleHQpO1xyXG5cclxuXHQgICAgICAgICAgICByZXR1cm4gcGxhaW50ZXh0O1xyXG5cdCAgICAgICAgfSxcclxuXHJcblx0ICAgICAgICAvKipcclxuXHQgICAgICAgICAqIENvbnZlcnRzIHNlcmlhbGl6ZWQgY2lwaGVydGV4dCB0byBDaXBoZXJQYXJhbXMsXHJcblx0ICAgICAgICAgKiBlbHNlIGFzc3VtZWQgQ2lwaGVyUGFyYW1zIGFscmVhZHkgYW5kIHJldHVybnMgY2lwaGVydGV4dCB1bmNoYW5nZWQuXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQHBhcmFtIHtDaXBoZXJQYXJhbXN8c3RyaW5nfSBjaXBoZXJ0ZXh0IFRoZSBjaXBoZXJ0ZXh0LlxyXG5cdCAgICAgICAgICogQHBhcmFtIHtGb3JtYXR0ZXJ9IGZvcm1hdCBUaGUgZm9ybWF0dGluZyBzdHJhdGVneSB0byB1c2UgdG8gcGFyc2Ugc2VyaWFsaXplZCBjaXBoZXJ0ZXh0LlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEByZXR1cm4ge0NpcGhlclBhcmFtc30gVGhlIHVuc2VyaWFsaXplZCBjaXBoZXJ0ZXh0LlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEBzdGF0aWNcclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAZXhhbXBsZVxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqICAgICB2YXIgY2lwaGVydGV4dFBhcmFtcyA9IENyeXB0b0pTLmxpYi5TZXJpYWxpemFibGVDaXBoZXIuX3BhcnNlKGNpcGhlcnRleHRTdHJpbmdPclBhcmFtcywgZm9ybWF0KTtcclxuXHQgICAgICAgICAqL1xyXG5cdCAgICAgICAgX3BhcnNlOiBmdW5jdGlvbiAoY2lwaGVydGV4dCwgZm9ybWF0KSB7XHJcblx0ICAgICAgICAgICAgaWYgKHR5cGVvZiBjaXBoZXJ0ZXh0ID09ICdzdHJpbmcnKSB7XHJcblx0ICAgICAgICAgICAgICAgIHJldHVybiBmb3JtYXQucGFyc2UoY2lwaGVydGV4dCwgdGhpcyk7XHJcblx0ICAgICAgICAgICAgfSBlbHNlIHtcclxuXHQgICAgICAgICAgICAgICAgcmV0dXJuIGNpcGhlcnRleHQ7XHJcblx0ICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgfVxyXG5cdCAgICB9KTtcclxuXHJcblx0ICAgIC8qKlxyXG5cdCAgICAgKiBLZXkgZGVyaXZhdGlvbiBmdW5jdGlvbiBuYW1lc3BhY2UuXHJcblx0ICAgICAqL1xyXG5cdCAgICB2YXIgQ19rZGYgPSBDLmtkZiA9IHt9O1xyXG5cclxuXHQgICAgLyoqXHJcblx0ICAgICAqIE9wZW5TU0wga2V5IGRlcml2YXRpb24gZnVuY3Rpb24uXHJcblx0ICAgICAqL1xyXG5cdCAgICB2YXIgT3BlblNTTEtkZiA9IENfa2RmLk9wZW5TU0wgPSB7XHJcblx0ICAgICAgICAvKipcclxuXHQgICAgICAgICAqIERlcml2ZXMgYSBrZXkgYW5kIElWIGZyb20gYSBwYXNzd29yZC5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFzc3dvcmQgVGhlIHBhc3N3b3JkIHRvIGRlcml2ZSBmcm9tLlxyXG5cdCAgICAgICAgICogQHBhcmFtIHtudW1iZXJ9IGtleVNpemUgVGhlIHNpemUgaW4gd29yZHMgb2YgdGhlIGtleSB0byBnZW5lcmF0ZS5cclxuXHQgICAgICAgICAqIEBwYXJhbSB7bnVtYmVyfSBpdlNpemUgVGhlIHNpemUgaW4gd29yZHMgb2YgdGhlIElWIHRvIGdlbmVyYXRlLlxyXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBzYWx0IChPcHRpb25hbCkgQSA2NC1iaXQgc2FsdCB0byB1c2UuIElmIG9taXR0ZWQsIGEgc2FsdCB3aWxsIGJlIGdlbmVyYXRlZCByYW5kb21seS5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAcmV0dXJuIHtDaXBoZXJQYXJhbXN9IEEgY2lwaGVyIHBhcmFtcyBvYmplY3Qgd2l0aCB0aGUga2V5LCBJViwgYW5kIHNhbHQuXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQHN0YXRpY1xyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEBleGFtcGxlXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogICAgIHZhciBkZXJpdmVkUGFyYW1zID0gQ3J5cHRvSlMua2RmLk9wZW5TU0wuZXhlY3V0ZSgnUGFzc3dvcmQnLCAyNTYvMzIsIDEyOC8zMik7XHJcblx0ICAgICAgICAgKiAgICAgdmFyIGRlcml2ZWRQYXJhbXMgPSBDcnlwdG9KUy5rZGYuT3BlblNTTC5leGVjdXRlKCdQYXNzd29yZCcsIDI1Ni8zMiwgMTI4LzMyLCAnc2FsdHNhbHQnKTtcclxuXHQgICAgICAgICAqL1xyXG5cdCAgICAgICAgZXhlY3V0ZTogZnVuY3Rpb24gKHBhc3N3b3JkLCBrZXlTaXplLCBpdlNpemUsIHNhbHQpIHtcclxuXHQgICAgICAgICAgICAvLyBHZW5lcmF0ZSByYW5kb20gc2FsdFxyXG5cdCAgICAgICAgICAgIGlmICghc2FsdCkge1xyXG5cdCAgICAgICAgICAgICAgICBzYWx0ID0gV29yZEFycmF5LnJhbmRvbSg2NC84KTtcclxuXHQgICAgICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgICAgIC8vIERlcml2ZSBrZXkgYW5kIElWXHJcblx0ICAgICAgICAgICAgdmFyIGtleSA9IEV2cEtERi5jcmVhdGUoeyBrZXlTaXplOiBrZXlTaXplICsgaXZTaXplIH0pLmNvbXB1dGUocGFzc3dvcmQsIHNhbHQpO1xyXG5cclxuXHQgICAgICAgICAgICAvLyBTZXBhcmF0ZSBrZXkgYW5kIElWXHJcblx0ICAgICAgICAgICAgdmFyIGl2ID0gV29yZEFycmF5LmNyZWF0ZShrZXkud29yZHMuc2xpY2Uoa2V5U2l6ZSksIGl2U2l6ZSAqIDQpO1xyXG5cdCAgICAgICAgICAgIGtleS5zaWdCeXRlcyA9IGtleVNpemUgKiA0O1xyXG5cclxuXHQgICAgICAgICAgICAvLyBSZXR1cm4gcGFyYW1zXHJcblx0ICAgICAgICAgICAgcmV0dXJuIENpcGhlclBhcmFtcy5jcmVhdGUoeyBrZXk6IGtleSwgaXY6IGl2LCBzYWx0OiBzYWx0IH0pO1xyXG5cdCAgICAgICAgfVxyXG5cdCAgICB9O1xyXG5cclxuXHQgICAgLyoqXHJcblx0ICAgICAqIEEgc2VyaWFsaXphYmxlIGNpcGhlciB3cmFwcGVyIHRoYXQgZGVyaXZlcyB0aGUga2V5IGZyb20gYSBwYXNzd29yZCxcclxuXHQgICAgICogYW5kIHJldHVybnMgY2lwaGVydGV4dCBhcyBhIHNlcmlhbGl6YWJsZSBjaXBoZXIgcGFyYW1zIG9iamVjdC5cclxuXHQgICAgICovXHJcblx0ICAgIHZhciBQYXNzd29yZEJhc2VkQ2lwaGVyID0gQ19saWIuUGFzc3dvcmRCYXNlZENpcGhlciA9IFNlcmlhbGl6YWJsZUNpcGhlci5leHRlbmQoe1xyXG5cdCAgICAgICAgLyoqXHJcblx0ICAgICAgICAgKiBDb25maWd1cmF0aW9uIG9wdGlvbnMuXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQHByb3BlcnR5IHtLREZ9IGtkZiBUaGUga2V5IGRlcml2YXRpb24gZnVuY3Rpb24gdG8gdXNlIHRvIGdlbmVyYXRlIGEga2V5IGFuZCBJViBmcm9tIGEgcGFzc3dvcmQuIERlZmF1bHQ6IE9wZW5TU0xcclxuXHQgICAgICAgICAqL1xyXG5cdCAgICAgICAgY2ZnOiBTZXJpYWxpemFibGVDaXBoZXIuY2ZnLmV4dGVuZCh7XHJcblx0ICAgICAgICAgICAga2RmOiBPcGVuU1NMS2RmXHJcblx0ICAgICAgICB9KSxcclxuXHJcblx0ICAgICAgICAvKipcclxuXHQgICAgICAgICAqIEVuY3J5cHRzIGEgbWVzc2FnZSB1c2luZyBhIHBhc3N3b3JkLlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEBwYXJhbSB7Q2lwaGVyfSBjaXBoZXIgVGhlIGNpcGhlciBhbGdvcml0aG0gdG8gdXNlLlxyXG5cdCAgICAgICAgICogQHBhcmFtIHtXb3JkQXJyYXl8c3RyaW5nfSBtZXNzYWdlIFRoZSBtZXNzYWdlIHRvIGVuY3J5cHQuXHJcblx0ICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFzc3dvcmQgVGhlIHBhc3N3b3JkLlxyXG5cdCAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGNmZyAoT3B0aW9uYWwpIFRoZSBjb25maWd1cmF0aW9uIG9wdGlvbnMgdG8gdXNlIGZvciB0aGlzIG9wZXJhdGlvbi5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAcmV0dXJuIHtDaXBoZXJQYXJhbXN9IEEgY2lwaGVyIHBhcmFtcyBvYmplY3QuXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQHN0YXRpY1xyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEBleGFtcGxlXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogICAgIHZhciBjaXBoZXJ0ZXh0UGFyYW1zID0gQ3J5cHRvSlMubGliLlBhc3N3b3JkQmFzZWRDaXBoZXIuZW5jcnlwdChDcnlwdG9KUy5hbGdvLkFFUywgbWVzc2FnZSwgJ3Bhc3N3b3JkJyk7XHJcblx0ICAgICAgICAgKiAgICAgdmFyIGNpcGhlcnRleHRQYXJhbXMgPSBDcnlwdG9KUy5saWIuUGFzc3dvcmRCYXNlZENpcGhlci5lbmNyeXB0KENyeXB0b0pTLmFsZ28uQUVTLCBtZXNzYWdlLCAncGFzc3dvcmQnLCB7IGZvcm1hdDogQ3J5cHRvSlMuZm9ybWF0Lk9wZW5TU0wgfSk7XHJcblx0ICAgICAgICAgKi9cclxuXHQgICAgICAgIGVuY3J5cHQ6IGZ1bmN0aW9uIChjaXBoZXIsIG1lc3NhZ2UsIHBhc3N3b3JkLCBjZmcpIHtcclxuXHQgICAgICAgICAgICAvLyBBcHBseSBjb25maWcgZGVmYXVsdHNcclxuXHQgICAgICAgICAgICBjZmcgPSB0aGlzLmNmZy5leHRlbmQoY2ZnKTtcclxuXHJcblx0ICAgICAgICAgICAgLy8gRGVyaXZlIGtleSBhbmQgb3RoZXIgcGFyYW1zXHJcblx0ICAgICAgICAgICAgdmFyIGRlcml2ZWRQYXJhbXMgPSBjZmcua2RmLmV4ZWN1dGUocGFzc3dvcmQsIGNpcGhlci5rZXlTaXplLCBjaXBoZXIuaXZTaXplKTtcclxuXHJcblx0ICAgICAgICAgICAgLy8gQWRkIElWIHRvIGNvbmZpZ1xyXG5cdCAgICAgICAgICAgIGNmZy5pdiA9IGRlcml2ZWRQYXJhbXMuaXY7XHJcblxyXG5cdCAgICAgICAgICAgIC8vIEVuY3J5cHRcclxuXHQgICAgICAgICAgICB2YXIgY2lwaGVydGV4dCA9IFNlcmlhbGl6YWJsZUNpcGhlci5lbmNyeXB0LmNhbGwodGhpcywgY2lwaGVyLCBtZXNzYWdlLCBkZXJpdmVkUGFyYW1zLmtleSwgY2ZnKTtcclxuXHJcblx0ICAgICAgICAgICAgLy8gTWl4IGluIGRlcml2ZWQgcGFyYW1zXHJcblx0ICAgICAgICAgICAgY2lwaGVydGV4dC5taXhJbihkZXJpdmVkUGFyYW1zKTtcclxuXHJcblx0ICAgICAgICAgICAgcmV0dXJuIGNpcGhlcnRleHQ7XHJcblx0ICAgICAgICB9LFxyXG5cclxuXHQgICAgICAgIC8qKlxyXG5cdCAgICAgICAgICogRGVjcnlwdHMgc2VyaWFsaXplZCBjaXBoZXJ0ZXh0IHVzaW5nIGEgcGFzc3dvcmQuXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQHBhcmFtIHtDaXBoZXJ9IGNpcGhlciBUaGUgY2lwaGVyIGFsZ29yaXRobSB0byB1c2UuXHJcblx0ICAgICAgICAgKiBAcGFyYW0ge0NpcGhlclBhcmFtc3xzdHJpbmd9IGNpcGhlcnRleHQgVGhlIGNpcGhlcnRleHQgdG8gZGVjcnlwdC5cclxuXHQgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXNzd29yZCBUaGUgcGFzc3dvcmQuXHJcblx0ICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gY2ZnIChPcHRpb25hbCkgVGhlIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyB0byB1c2UgZm9yIHRoaXMgb3BlcmF0aW9uLlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEByZXR1cm4ge1dvcmRBcnJheX0gVGhlIHBsYWludGV4dC5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAc3RhdGljXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQGV4YW1wbGVcclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiAgICAgdmFyIHBsYWludGV4dCA9IENyeXB0b0pTLmxpYi5QYXNzd29yZEJhc2VkQ2lwaGVyLmRlY3J5cHQoQ3J5cHRvSlMuYWxnby5BRVMsIGZvcm1hdHRlZENpcGhlcnRleHQsICdwYXNzd29yZCcsIHsgZm9ybWF0OiBDcnlwdG9KUy5mb3JtYXQuT3BlblNTTCB9KTtcclxuXHQgICAgICAgICAqICAgICB2YXIgcGxhaW50ZXh0ID0gQ3J5cHRvSlMubGliLlBhc3N3b3JkQmFzZWRDaXBoZXIuZGVjcnlwdChDcnlwdG9KUy5hbGdvLkFFUywgY2lwaGVydGV4dFBhcmFtcywgJ3Bhc3N3b3JkJywgeyBmb3JtYXQ6IENyeXB0b0pTLmZvcm1hdC5PcGVuU1NMIH0pO1xyXG5cdCAgICAgICAgICovXHJcblx0ICAgICAgICBkZWNyeXB0OiBmdW5jdGlvbiAoY2lwaGVyLCBjaXBoZXJ0ZXh0LCBwYXNzd29yZCwgY2ZnKSB7XHJcblx0ICAgICAgICAgICAgLy8gQXBwbHkgY29uZmlnIGRlZmF1bHRzXHJcblx0ICAgICAgICAgICAgY2ZnID0gdGhpcy5jZmcuZXh0ZW5kKGNmZyk7XHJcblxyXG5cdCAgICAgICAgICAgIC8vIENvbnZlcnQgc3RyaW5nIHRvIENpcGhlclBhcmFtc1xyXG5cdCAgICAgICAgICAgIGNpcGhlcnRleHQgPSB0aGlzLl9wYXJzZShjaXBoZXJ0ZXh0LCBjZmcuZm9ybWF0KTtcclxuXHJcblx0ICAgICAgICAgICAgLy8gRGVyaXZlIGtleSBhbmQgb3RoZXIgcGFyYW1zXHJcblx0ICAgICAgICAgICAgdmFyIGRlcml2ZWRQYXJhbXMgPSBjZmcua2RmLmV4ZWN1dGUocGFzc3dvcmQsIGNpcGhlci5rZXlTaXplLCBjaXBoZXIuaXZTaXplLCBjaXBoZXJ0ZXh0LnNhbHQpO1xyXG5cclxuXHQgICAgICAgICAgICAvLyBBZGQgSVYgdG8gY29uZmlnXHJcblx0ICAgICAgICAgICAgY2ZnLml2ID0gZGVyaXZlZFBhcmFtcy5pdjtcclxuXHJcblx0ICAgICAgICAgICAgLy8gRGVjcnlwdFxyXG5cdCAgICAgICAgICAgIHZhciBwbGFpbnRleHQgPSBTZXJpYWxpemFibGVDaXBoZXIuZGVjcnlwdC5jYWxsKHRoaXMsIGNpcGhlciwgY2lwaGVydGV4dCwgZGVyaXZlZFBhcmFtcy5rZXksIGNmZyk7XHJcblxyXG5cdCAgICAgICAgICAgIHJldHVybiBwbGFpbnRleHQ7XHJcblx0ICAgICAgICB9XHJcblx0ICAgIH0pO1xyXG5cdH0oKSk7XHJcblxyXG5cclxufSkpOyIsIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnksIHVuZGVmKSB7XHJcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XHJcblx0XHQvLyBDb21tb25KU1xyXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9jb3JlXCIpLCByZXF1aXJlKFwiLi9jaXBoZXItY29yZVwiKSk7XHJcblx0fVxyXG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XHJcblx0XHQvLyBBTURcclxuXHRcdGRlZmluZShbXCIuL2NvcmVcIiwgXCIuL2NpcGhlci1jb3JlXCJdLCBmYWN0b3J5KTtcclxuXHR9XHJcblx0ZWxzZSB7XHJcblx0XHQvLyBHbG9iYWwgKGJyb3dzZXIpXHJcblx0XHRmYWN0b3J5KHJvb3QuQ3J5cHRvSlMpO1xyXG5cdH1cclxufSh0aGlzLCBmdW5jdGlvbiAoQ3J5cHRvSlMpIHtcclxuXHJcblx0LyoqXHJcblx0ICogQ2lwaGVyIEZlZWRiYWNrIGJsb2NrIG1vZGUuXHJcblx0ICovXHJcblx0Q3J5cHRvSlMubW9kZS5DRkIgPSAoZnVuY3Rpb24gKCkge1xyXG5cdCAgICB2YXIgQ0ZCID0gQ3J5cHRvSlMubGliLkJsb2NrQ2lwaGVyTW9kZS5leHRlbmQoKTtcclxuXHJcblx0ICAgIENGQi5FbmNyeXB0b3IgPSBDRkIuZXh0ZW5kKHtcclxuXHQgICAgICAgIHByb2Nlc3NCbG9jazogZnVuY3Rpb24gKHdvcmRzLCBvZmZzZXQpIHtcclxuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcclxuXHQgICAgICAgICAgICB2YXIgY2lwaGVyID0gdGhpcy5fY2lwaGVyO1xyXG5cdCAgICAgICAgICAgIHZhciBibG9ja1NpemUgPSBjaXBoZXIuYmxvY2tTaXplO1xyXG5cclxuXHQgICAgICAgICAgICBnZW5lcmF0ZUtleXN0cmVhbUFuZEVuY3J5cHQuY2FsbCh0aGlzLCB3b3Jkcywgb2Zmc2V0LCBibG9ja1NpemUsIGNpcGhlcik7XHJcblxyXG5cdCAgICAgICAgICAgIC8vIFJlbWVtYmVyIHRoaXMgYmxvY2sgdG8gdXNlIHdpdGggbmV4dCBibG9ja1xyXG5cdCAgICAgICAgICAgIHRoaXMuX3ByZXZCbG9jayA9IHdvcmRzLnNsaWNlKG9mZnNldCwgb2Zmc2V0ICsgYmxvY2tTaXplKTtcclxuXHQgICAgICAgIH1cclxuXHQgICAgfSk7XHJcblxyXG5cdCAgICBDRkIuRGVjcnlwdG9yID0gQ0ZCLmV4dGVuZCh7XHJcblx0ICAgICAgICBwcm9jZXNzQmxvY2s6IGZ1bmN0aW9uICh3b3Jkcywgb2Zmc2V0KSB7XHJcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXHJcblx0ICAgICAgICAgICAgdmFyIGNpcGhlciA9IHRoaXMuX2NpcGhlcjtcclxuXHQgICAgICAgICAgICB2YXIgYmxvY2tTaXplID0gY2lwaGVyLmJsb2NrU2l6ZTtcclxuXHJcblx0ICAgICAgICAgICAgLy8gUmVtZW1iZXIgdGhpcyBibG9jayB0byB1c2Ugd2l0aCBuZXh0IGJsb2NrXHJcblx0ICAgICAgICAgICAgdmFyIHRoaXNCbG9jayA9IHdvcmRzLnNsaWNlKG9mZnNldCwgb2Zmc2V0ICsgYmxvY2tTaXplKTtcclxuXHJcblx0ICAgICAgICAgICAgZ2VuZXJhdGVLZXlzdHJlYW1BbmRFbmNyeXB0LmNhbGwodGhpcywgd29yZHMsIG9mZnNldCwgYmxvY2tTaXplLCBjaXBoZXIpO1xyXG5cclxuXHQgICAgICAgICAgICAvLyBUaGlzIGJsb2NrIGJlY29tZXMgdGhlIHByZXZpb3VzIGJsb2NrXHJcblx0ICAgICAgICAgICAgdGhpcy5fcHJldkJsb2NrID0gdGhpc0Jsb2NrO1xyXG5cdCAgICAgICAgfVxyXG5cdCAgICB9KTtcclxuXHJcblx0ICAgIGZ1bmN0aW9uIGdlbmVyYXRlS2V5c3RyZWFtQW5kRW5jcnlwdCh3b3Jkcywgb2Zmc2V0LCBibG9ja1NpemUsIGNpcGhlcikge1xyXG5cdCAgICAgICAgLy8gU2hvcnRjdXRcclxuXHQgICAgICAgIHZhciBpdiA9IHRoaXMuX2l2O1xyXG5cclxuXHQgICAgICAgIC8vIEdlbmVyYXRlIGtleXN0cmVhbVxyXG5cdCAgICAgICAgaWYgKGl2KSB7XHJcblx0ICAgICAgICAgICAgdmFyIGtleXN0cmVhbSA9IGl2LnNsaWNlKDApO1xyXG5cclxuXHQgICAgICAgICAgICAvLyBSZW1vdmUgSVYgZm9yIHN1YnNlcXVlbnQgYmxvY2tzXHJcblx0ICAgICAgICAgICAgdGhpcy5faXYgPSB1bmRlZmluZWQ7XHJcblx0ICAgICAgICB9IGVsc2Uge1xyXG5cdCAgICAgICAgICAgIHZhciBrZXlzdHJlYW0gPSB0aGlzLl9wcmV2QmxvY2s7XHJcblx0ICAgICAgICB9XHJcblx0ICAgICAgICBjaXBoZXIuZW5jcnlwdEJsb2NrKGtleXN0cmVhbSwgMCk7XHJcblxyXG5cdCAgICAgICAgLy8gRW5jcnlwdFxyXG5cdCAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBibG9ja1NpemU7IGkrKykge1xyXG5cdCAgICAgICAgICAgIHdvcmRzW29mZnNldCArIGldIF49IGtleXN0cmVhbVtpXTtcclxuXHQgICAgICAgIH1cclxuXHQgICAgfVxyXG5cclxuXHQgICAgcmV0dXJuIENGQjtcclxuXHR9KCkpO1xyXG5cclxuXHJcblx0cmV0dXJuIENyeXB0b0pTLm1vZGUuQ0ZCO1xyXG5cclxufSkpOyIsIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnksIHVuZGVmKSB7XHJcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XHJcblx0XHQvLyBDb21tb25KU1xyXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9jb3JlXCIpLCByZXF1aXJlKFwiLi9jaXBoZXItY29yZVwiKSk7XHJcblx0fVxyXG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XHJcblx0XHQvLyBBTURcclxuXHRcdGRlZmluZShbXCIuL2NvcmVcIiwgXCIuL2NpcGhlci1jb3JlXCJdLCBmYWN0b3J5KTtcclxuXHR9XHJcblx0ZWxzZSB7XHJcblx0XHQvLyBHbG9iYWwgKGJyb3dzZXIpXHJcblx0XHRmYWN0b3J5KHJvb3QuQ3J5cHRvSlMpO1xyXG5cdH1cclxufSh0aGlzLCBmdW5jdGlvbiAoQ3J5cHRvSlMpIHtcclxuXHJcblx0LyoqXHJcblx0ICogQ291bnRlciBibG9jayBtb2RlLlxyXG5cdCAqL1xyXG5cdENyeXB0b0pTLm1vZGUuQ1RSID0gKGZ1bmN0aW9uICgpIHtcclxuXHQgICAgdmFyIENUUiA9IENyeXB0b0pTLmxpYi5CbG9ja0NpcGhlck1vZGUuZXh0ZW5kKCk7XHJcblxyXG5cdCAgICB2YXIgRW5jcnlwdG9yID0gQ1RSLkVuY3J5cHRvciA9IENUUi5leHRlbmQoe1xyXG5cdCAgICAgICAgcHJvY2Vzc0Jsb2NrOiBmdW5jdGlvbiAod29yZHMsIG9mZnNldCkge1xyXG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xyXG5cdCAgICAgICAgICAgIHZhciBjaXBoZXIgPSB0aGlzLl9jaXBoZXJcclxuXHQgICAgICAgICAgICB2YXIgYmxvY2tTaXplID0gY2lwaGVyLmJsb2NrU2l6ZTtcclxuXHQgICAgICAgICAgICB2YXIgaXYgPSB0aGlzLl9pdjtcclxuXHQgICAgICAgICAgICB2YXIgY291bnRlciA9IHRoaXMuX2NvdW50ZXI7XHJcblxyXG5cdCAgICAgICAgICAgIC8vIEdlbmVyYXRlIGtleXN0cmVhbVxyXG5cdCAgICAgICAgICAgIGlmIChpdikge1xyXG5cdCAgICAgICAgICAgICAgICBjb3VudGVyID0gdGhpcy5fY291bnRlciA9IGl2LnNsaWNlKDApO1xyXG5cclxuXHQgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIElWIGZvciBzdWJzZXF1ZW50IGJsb2Nrc1xyXG5cdCAgICAgICAgICAgICAgICB0aGlzLl9pdiA9IHVuZGVmaW5lZDtcclxuXHQgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgdmFyIGtleXN0cmVhbSA9IGNvdW50ZXIuc2xpY2UoMCk7XHJcblx0ICAgICAgICAgICAgY2lwaGVyLmVuY3J5cHRCbG9jayhrZXlzdHJlYW0sIDApO1xyXG5cclxuXHQgICAgICAgICAgICAvLyBJbmNyZW1lbnQgY291bnRlclxyXG5cdCAgICAgICAgICAgIGNvdW50ZXJbYmxvY2tTaXplIC0gMV0gPSAoY291bnRlcltibG9ja1NpemUgLSAxXSArIDEpIHwgMFxyXG5cclxuXHQgICAgICAgICAgICAvLyBFbmNyeXB0XHJcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBibG9ja1NpemU7IGkrKykge1xyXG5cdCAgICAgICAgICAgICAgICB3b3Jkc1tvZmZzZXQgKyBpXSBePSBrZXlzdHJlYW1baV07XHJcblx0ICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgfVxyXG5cdCAgICB9KTtcclxuXHJcblx0ICAgIENUUi5EZWNyeXB0b3IgPSBFbmNyeXB0b3I7XHJcblxyXG5cdCAgICByZXR1cm4gQ1RSO1xyXG5cdH0oKSk7XHJcblxyXG5cclxuXHRyZXR1cm4gQ3J5cHRvSlMubW9kZS5DVFI7XHJcblxyXG59KSk7IiwiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSwgdW5kZWYpIHtcclxuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcclxuXHRcdC8vIENvbW1vbkpTXHJcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2NvcmVcIiksIHJlcXVpcmUoXCIuL2NpcGhlci1jb3JlXCIpKTtcclxuXHR9XHJcblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcclxuXHRcdC8vIEFNRFxyXG5cdFx0ZGVmaW5lKFtcIi4vY29yZVwiLCBcIi4vY2lwaGVyLWNvcmVcIl0sIGZhY3RvcnkpO1xyXG5cdH1cclxuXHRlbHNlIHtcclxuXHRcdC8vIEdsb2JhbCAoYnJvd3NlcilcclxuXHRcdGZhY3Rvcnkocm9vdC5DcnlwdG9KUyk7XHJcblx0fVxyXG59KHRoaXMsIGZ1bmN0aW9uIChDcnlwdG9KUykge1xyXG5cclxuXHQvKiogQHByZXNlcnZlXHJcblx0ICogQ291bnRlciBibG9jayBtb2RlIGNvbXBhdGlibGUgd2l0aCAgRHIgQnJpYW4gR2xhZG1hbiBmaWxlZW5jLmNcclxuXHQgKiBkZXJpdmVkIGZyb20gQ3J5cHRvSlMubW9kZS5DVFJcclxuXHQgKiBKYW4gSHJ1YnkgamhydWJ5LndlYkBnbWFpbC5jb21cclxuXHQgKi9cclxuXHRDcnlwdG9KUy5tb2RlLkNUUkdsYWRtYW4gPSAoZnVuY3Rpb24gKCkge1xyXG5cdCAgICB2YXIgQ1RSR2xhZG1hbiA9IENyeXB0b0pTLmxpYi5CbG9ja0NpcGhlck1vZGUuZXh0ZW5kKCk7XHJcblxyXG5cdFx0ZnVuY3Rpb24gaW5jV29yZCh3b3JkKVxyXG5cdFx0e1xyXG5cdFx0XHRpZiAoKCh3b3JkID4+IDI0KSAmIDB4ZmYpID09PSAweGZmKSB7IC8vb3ZlcmZsb3dcclxuXHRcdFx0dmFyIGIxID0gKHdvcmQgPj4gMTYpJjB4ZmY7XHJcblx0XHRcdHZhciBiMiA9ICh3b3JkID4+IDgpJjB4ZmY7XHJcblx0XHRcdHZhciBiMyA9IHdvcmQgJiAweGZmO1xyXG5cclxuXHRcdFx0aWYgKGIxID09PSAweGZmKSAvLyBvdmVyZmxvdyBiMVxyXG5cdFx0XHR7XHJcblx0XHRcdGIxID0gMDtcclxuXHRcdFx0aWYgKGIyID09PSAweGZmKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0YjIgPSAwO1xyXG5cdFx0XHRcdGlmIChiMyA9PT0gMHhmZilcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHRiMyA9IDA7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2VcclxuXHRcdFx0XHR7XHJcblx0XHRcdFx0XHQrK2IzO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRlbHNlXHJcblx0XHRcdHtcclxuXHRcdFx0XHQrK2IyO1xyXG5cdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0ZWxzZVxyXG5cdFx0XHR7XHJcblx0XHRcdCsrYjE7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHdvcmQgPSAwO1xyXG5cdFx0XHR3b3JkICs9IChiMSA8PCAxNik7XHJcblx0XHRcdHdvcmQgKz0gKGIyIDw8IDgpO1xyXG5cdFx0XHR3b3JkICs9IGIzO1xyXG5cdFx0XHR9XHJcblx0XHRcdGVsc2VcclxuXHRcdFx0e1xyXG5cdFx0XHR3b3JkICs9ICgweDAxIDw8IDI0KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gd29yZDtcclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBpbmNDb3VudGVyKGNvdW50ZXIpXHJcblx0XHR7XHJcblx0XHRcdGlmICgoY291bnRlclswXSA9IGluY1dvcmQoY291bnRlclswXSkpID09PSAwKVxyXG5cdFx0XHR7XHJcblx0XHRcdFx0Ly8gZW5jcl9kYXRhIGluIGZpbGVlbmMuYyBmcm9tICBEciBCcmlhbiBHbGFkbWFuJ3MgY291bnRzIG9ubHkgd2l0aCBEV09SRCBqIDwgOFxyXG5cdFx0XHRcdGNvdW50ZXJbMV0gPSBpbmNXb3JkKGNvdW50ZXJbMV0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdHJldHVybiBjb3VudGVyO1xyXG5cdFx0fVxyXG5cclxuXHQgICAgdmFyIEVuY3J5cHRvciA9IENUUkdsYWRtYW4uRW5jcnlwdG9yID0gQ1RSR2xhZG1hbi5leHRlbmQoe1xyXG5cdCAgICAgICAgcHJvY2Vzc0Jsb2NrOiBmdW5jdGlvbiAod29yZHMsIG9mZnNldCkge1xyXG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xyXG5cdCAgICAgICAgICAgIHZhciBjaXBoZXIgPSB0aGlzLl9jaXBoZXJcclxuXHQgICAgICAgICAgICB2YXIgYmxvY2tTaXplID0gY2lwaGVyLmJsb2NrU2l6ZTtcclxuXHQgICAgICAgICAgICB2YXIgaXYgPSB0aGlzLl9pdjtcclxuXHQgICAgICAgICAgICB2YXIgY291bnRlciA9IHRoaXMuX2NvdW50ZXI7XHJcblxyXG5cdCAgICAgICAgICAgIC8vIEdlbmVyYXRlIGtleXN0cmVhbVxyXG5cdCAgICAgICAgICAgIGlmIChpdikge1xyXG5cdCAgICAgICAgICAgICAgICBjb3VudGVyID0gdGhpcy5fY291bnRlciA9IGl2LnNsaWNlKDApO1xyXG5cclxuXHQgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIElWIGZvciBzdWJzZXF1ZW50IGJsb2Nrc1xyXG5cdCAgICAgICAgICAgICAgICB0aGlzLl9pdiA9IHVuZGVmaW5lZDtcclxuXHQgICAgICAgICAgICB9XHJcblxyXG5cdFx0XHRcdGluY0NvdW50ZXIoY291bnRlcik7XHJcblxyXG5cdFx0XHRcdHZhciBrZXlzdHJlYW0gPSBjb3VudGVyLnNsaWNlKDApO1xyXG5cdCAgICAgICAgICAgIGNpcGhlci5lbmNyeXB0QmxvY2soa2V5c3RyZWFtLCAwKTtcclxuXHJcblx0ICAgICAgICAgICAgLy8gRW5jcnlwdFxyXG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYmxvY2tTaXplOyBpKyspIHtcclxuXHQgICAgICAgICAgICAgICAgd29yZHNbb2Zmc2V0ICsgaV0gXj0ga2V5c3RyZWFtW2ldO1xyXG5cdCAgICAgICAgICAgIH1cclxuXHQgICAgICAgIH1cclxuXHQgICAgfSk7XHJcblxyXG5cdCAgICBDVFJHbGFkbWFuLkRlY3J5cHRvciA9IEVuY3J5cHRvcjtcclxuXHJcblx0ICAgIHJldHVybiBDVFJHbGFkbWFuO1xyXG5cdH0oKSk7XHJcblxyXG5cclxuXHJcblxyXG5cdHJldHVybiBDcnlwdG9KUy5tb2RlLkNUUkdsYWRtYW47XHJcblxyXG59KSk7IiwiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSwgdW5kZWYpIHtcclxuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcclxuXHRcdC8vIENvbW1vbkpTXHJcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2NvcmVcIiksIHJlcXVpcmUoXCIuL2NpcGhlci1jb3JlXCIpKTtcclxuXHR9XHJcblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcclxuXHRcdC8vIEFNRFxyXG5cdFx0ZGVmaW5lKFtcIi4vY29yZVwiLCBcIi4vY2lwaGVyLWNvcmVcIl0sIGZhY3RvcnkpO1xyXG5cdH1cclxuXHRlbHNlIHtcclxuXHRcdC8vIEdsb2JhbCAoYnJvd3NlcilcclxuXHRcdGZhY3Rvcnkocm9vdC5DcnlwdG9KUyk7XHJcblx0fVxyXG59KHRoaXMsIGZ1bmN0aW9uIChDcnlwdG9KUykge1xyXG5cclxuXHQvKipcclxuXHQgKiBPdXRwdXQgRmVlZGJhY2sgYmxvY2sgbW9kZS5cclxuXHQgKi9cclxuXHRDcnlwdG9KUy5tb2RlLk9GQiA9IChmdW5jdGlvbiAoKSB7XHJcblx0ICAgIHZhciBPRkIgPSBDcnlwdG9KUy5saWIuQmxvY2tDaXBoZXJNb2RlLmV4dGVuZCgpO1xyXG5cclxuXHQgICAgdmFyIEVuY3J5cHRvciA9IE9GQi5FbmNyeXB0b3IgPSBPRkIuZXh0ZW5kKHtcclxuXHQgICAgICAgIHByb2Nlc3NCbG9jazogZnVuY3Rpb24gKHdvcmRzLCBvZmZzZXQpIHtcclxuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcclxuXHQgICAgICAgICAgICB2YXIgY2lwaGVyID0gdGhpcy5fY2lwaGVyXHJcblx0ICAgICAgICAgICAgdmFyIGJsb2NrU2l6ZSA9IGNpcGhlci5ibG9ja1NpemU7XHJcblx0ICAgICAgICAgICAgdmFyIGl2ID0gdGhpcy5faXY7XHJcblx0ICAgICAgICAgICAgdmFyIGtleXN0cmVhbSA9IHRoaXMuX2tleXN0cmVhbTtcclxuXHJcblx0ICAgICAgICAgICAgLy8gR2VuZXJhdGUga2V5c3RyZWFtXHJcblx0ICAgICAgICAgICAgaWYgKGl2KSB7XHJcblx0ICAgICAgICAgICAgICAgIGtleXN0cmVhbSA9IHRoaXMuX2tleXN0cmVhbSA9IGl2LnNsaWNlKDApO1xyXG5cclxuXHQgICAgICAgICAgICAgICAgLy8gUmVtb3ZlIElWIGZvciBzdWJzZXF1ZW50IGJsb2Nrc1xyXG5cdCAgICAgICAgICAgICAgICB0aGlzLl9pdiA9IHVuZGVmaW5lZDtcclxuXHQgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgY2lwaGVyLmVuY3J5cHRCbG9jayhrZXlzdHJlYW0sIDApO1xyXG5cclxuXHQgICAgICAgICAgICAvLyBFbmNyeXB0XHJcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBibG9ja1NpemU7IGkrKykge1xyXG5cdCAgICAgICAgICAgICAgICB3b3Jkc1tvZmZzZXQgKyBpXSBePSBrZXlzdHJlYW1baV07XHJcblx0ICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgfVxyXG5cdCAgICB9KTtcclxuXHJcblx0ICAgIE9GQi5EZWNyeXB0b3IgPSBFbmNyeXB0b3I7XHJcblxyXG5cdCAgICByZXR1cm4gT0ZCO1xyXG5cdH0oKSk7XHJcblxyXG5cclxuXHRyZXR1cm4gQ3J5cHRvSlMubW9kZS5PRkI7XHJcblxyXG59KSk7IiwiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSwgdW5kZWYpIHtcclxuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcclxuXHRcdC8vIENvbW1vbkpTXHJcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2NvcmVcIiksIHJlcXVpcmUoXCIuL2NpcGhlci1jb3JlXCIpKTtcclxuXHR9XHJcblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcclxuXHRcdC8vIEFNRFxyXG5cdFx0ZGVmaW5lKFtcIi4vY29yZVwiLCBcIi4vY2lwaGVyLWNvcmVcIl0sIGZhY3RvcnkpO1xyXG5cdH1cclxuXHRlbHNlIHtcclxuXHRcdC8vIEdsb2JhbCAoYnJvd3NlcilcclxuXHRcdGZhY3Rvcnkocm9vdC5DcnlwdG9KUyk7XHJcblx0fVxyXG59KHRoaXMsIGZ1bmN0aW9uIChDcnlwdG9KUykge1xyXG5cclxuXHQvKipcclxuXHQgKiBFbGVjdHJvbmljIENvZGVib29rIGJsb2NrIG1vZGUuXHJcblx0ICovXHJcblx0Q3J5cHRvSlMubW9kZS5FQ0IgPSAoZnVuY3Rpb24gKCkge1xyXG5cdCAgICB2YXIgRUNCID0gQ3J5cHRvSlMubGliLkJsb2NrQ2lwaGVyTW9kZS5leHRlbmQoKTtcclxuXHJcblx0ICAgIEVDQi5FbmNyeXB0b3IgPSBFQ0IuZXh0ZW5kKHtcclxuXHQgICAgICAgIHByb2Nlc3NCbG9jazogZnVuY3Rpb24gKHdvcmRzLCBvZmZzZXQpIHtcclxuXHQgICAgICAgICAgICB0aGlzLl9jaXBoZXIuZW5jcnlwdEJsb2NrKHdvcmRzLCBvZmZzZXQpO1xyXG5cdCAgICAgICAgfVxyXG5cdCAgICB9KTtcclxuXHJcblx0ICAgIEVDQi5EZWNyeXB0b3IgPSBFQ0IuZXh0ZW5kKHtcclxuXHQgICAgICAgIHByb2Nlc3NCbG9jazogZnVuY3Rpb24gKHdvcmRzLCBvZmZzZXQpIHtcclxuXHQgICAgICAgICAgICB0aGlzLl9jaXBoZXIuZGVjcnlwdEJsb2NrKHdvcmRzLCBvZmZzZXQpO1xyXG5cdCAgICAgICAgfVxyXG5cdCAgICB9KTtcclxuXHJcblx0ICAgIHJldHVybiBFQ0I7XHJcblx0fSgpKTtcclxuXHJcblxyXG5cdHJldHVybiBDcnlwdG9KUy5tb2RlLkVDQjtcclxuXHJcbn0pKTsiLCI7KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5LCB1bmRlZikge1xyXG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xyXG5cdFx0Ly8gQ29tbW9uSlNcclxuXHRcdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vY29yZVwiKSwgcmVxdWlyZShcIi4vY2lwaGVyLWNvcmVcIikpO1xyXG5cdH1cclxuXHRlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xyXG5cdFx0Ly8gQU1EXHJcblx0XHRkZWZpbmUoW1wiLi9jb3JlXCIsIFwiLi9jaXBoZXItY29yZVwiXSwgZmFjdG9yeSk7XHJcblx0fVxyXG5cdGVsc2Uge1xyXG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxyXG5cdFx0ZmFjdG9yeShyb290LkNyeXB0b0pTKTtcclxuXHR9XHJcbn0odGhpcywgZnVuY3Rpb24gKENyeXB0b0pTKSB7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEFOU0kgWC45MjMgcGFkZGluZyBzdHJhdGVneS5cclxuXHQgKi9cclxuXHRDcnlwdG9KUy5wYWQuQW5zaVg5MjMgPSB7XHJcblx0ICAgIHBhZDogZnVuY3Rpb24gKGRhdGEsIGJsb2NrU2l6ZSkge1xyXG5cdCAgICAgICAgLy8gU2hvcnRjdXRzXHJcblx0ICAgICAgICB2YXIgZGF0YVNpZ0J5dGVzID0gZGF0YS5zaWdCeXRlcztcclxuXHQgICAgICAgIHZhciBibG9ja1NpemVCeXRlcyA9IGJsb2NrU2l6ZSAqIDQ7XHJcblxyXG5cdCAgICAgICAgLy8gQ291bnQgcGFkZGluZyBieXRlc1xyXG5cdCAgICAgICAgdmFyIG5QYWRkaW5nQnl0ZXMgPSBibG9ja1NpemVCeXRlcyAtIGRhdGFTaWdCeXRlcyAlIGJsb2NrU2l6ZUJ5dGVzO1xyXG5cclxuXHQgICAgICAgIC8vIENvbXB1dGUgbGFzdCBieXRlIHBvc2l0aW9uXHJcblx0ICAgICAgICB2YXIgbGFzdEJ5dGVQb3MgPSBkYXRhU2lnQnl0ZXMgKyBuUGFkZGluZ0J5dGVzIC0gMTtcclxuXHJcblx0ICAgICAgICAvLyBQYWRcclxuXHQgICAgICAgIGRhdGEuY2xhbXAoKTtcclxuXHQgICAgICAgIGRhdGEud29yZHNbbGFzdEJ5dGVQb3MgPj4+IDJdIHw9IG5QYWRkaW5nQnl0ZXMgPDwgKDI0IC0gKGxhc3RCeXRlUG9zICUgNCkgKiA4KTtcclxuXHQgICAgICAgIGRhdGEuc2lnQnl0ZXMgKz0gblBhZGRpbmdCeXRlcztcclxuXHQgICAgfSxcclxuXHJcblx0ICAgIHVucGFkOiBmdW5jdGlvbiAoZGF0YSkge1xyXG5cdCAgICAgICAgLy8gR2V0IG51bWJlciBvZiBwYWRkaW5nIGJ5dGVzIGZyb20gbGFzdCBieXRlXHJcblx0ICAgICAgICB2YXIgblBhZGRpbmdCeXRlcyA9IGRhdGEud29yZHNbKGRhdGEuc2lnQnl0ZXMgLSAxKSA+Pj4gMl0gJiAweGZmO1xyXG5cclxuXHQgICAgICAgIC8vIFJlbW92ZSBwYWRkaW5nXHJcblx0ICAgICAgICBkYXRhLnNpZ0J5dGVzIC09IG5QYWRkaW5nQnl0ZXM7XHJcblx0ICAgIH1cclxuXHR9O1xyXG5cclxuXHJcblx0cmV0dXJuIENyeXB0b0pTLnBhZC5BbnNpeDkyMztcclxuXHJcbn0pKTsiLCI7KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5LCB1bmRlZikge1xyXG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xyXG5cdFx0Ly8gQ29tbW9uSlNcclxuXHRcdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vY29yZVwiKSwgcmVxdWlyZShcIi4vY2lwaGVyLWNvcmVcIikpO1xyXG5cdH1cclxuXHRlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xyXG5cdFx0Ly8gQU1EXHJcblx0XHRkZWZpbmUoW1wiLi9jb3JlXCIsIFwiLi9jaXBoZXItY29yZVwiXSwgZmFjdG9yeSk7XHJcblx0fVxyXG5cdGVsc2Uge1xyXG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxyXG5cdFx0ZmFjdG9yeShyb290LkNyeXB0b0pTKTtcclxuXHR9XHJcbn0odGhpcywgZnVuY3Rpb24gKENyeXB0b0pTKSB7XHJcblxyXG5cdC8qKlxyXG5cdCAqIElTTyAxMDEyNiBwYWRkaW5nIHN0cmF0ZWd5LlxyXG5cdCAqL1xyXG5cdENyeXB0b0pTLnBhZC5Jc28xMDEyNiA9IHtcclxuXHQgICAgcGFkOiBmdW5jdGlvbiAoZGF0YSwgYmxvY2tTaXplKSB7XHJcblx0ICAgICAgICAvLyBTaG9ydGN1dFxyXG5cdCAgICAgICAgdmFyIGJsb2NrU2l6ZUJ5dGVzID0gYmxvY2tTaXplICogNDtcclxuXHJcblx0ICAgICAgICAvLyBDb3VudCBwYWRkaW5nIGJ5dGVzXHJcblx0ICAgICAgICB2YXIgblBhZGRpbmdCeXRlcyA9IGJsb2NrU2l6ZUJ5dGVzIC0gZGF0YS5zaWdCeXRlcyAlIGJsb2NrU2l6ZUJ5dGVzO1xyXG5cclxuXHQgICAgICAgIC8vIFBhZFxyXG5cdCAgICAgICAgZGF0YS5jb25jYXQoQ3J5cHRvSlMubGliLldvcmRBcnJheS5yYW5kb20oblBhZGRpbmdCeXRlcyAtIDEpKS5cclxuXHQgICAgICAgICAgICAgY29uY2F0KENyeXB0b0pTLmxpYi5Xb3JkQXJyYXkuY3JlYXRlKFtuUGFkZGluZ0J5dGVzIDw8IDI0XSwgMSkpO1xyXG5cdCAgICB9LFxyXG5cclxuXHQgICAgdW5wYWQ6IGZ1bmN0aW9uIChkYXRhKSB7XHJcblx0ICAgICAgICAvLyBHZXQgbnVtYmVyIG9mIHBhZGRpbmcgYnl0ZXMgZnJvbSBsYXN0IGJ5dGVcclxuXHQgICAgICAgIHZhciBuUGFkZGluZ0J5dGVzID0gZGF0YS53b3Jkc1soZGF0YS5zaWdCeXRlcyAtIDEpID4+PiAyXSAmIDB4ZmY7XHJcblxyXG5cdCAgICAgICAgLy8gUmVtb3ZlIHBhZGRpbmdcclxuXHQgICAgICAgIGRhdGEuc2lnQnl0ZXMgLT0gblBhZGRpbmdCeXRlcztcclxuXHQgICAgfVxyXG5cdH07XHJcblxyXG5cclxuXHRyZXR1cm4gQ3J5cHRvSlMucGFkLklzbzEwMTI2O1xyXG5cclxufSkpOyIsIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnksIHVuZGVmKSB7XHJcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XHJcblx0XHQvLyBDb21tb25KU1xyXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9jb3JlXCIpLCByZXF1aXJlKFwiLi9jaXBoZXItY29yZVwiKSk7XHJcblx0fVxyXG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XHJcblx0XHQvLyBBTURcclxuXHRcdGRlZmluZShbXCIuL2NvcmVcIiwgXCIuL2NpcGhlci1jb3JlXCJdLCBmYWN0b3J5KTtcclxuXHR9XHJcblx0ZWxzZSB7XHJcblx0XHQvLyBHbG9iYWwgKGJyb3dzZXIpXHJcblx0XHRmYWN0b3J5KHJvb3QuQ3J5cHRvSlMpO1xyXG5cdH1cclxufSh0aGlzLCBmdW5jdGlvbiAoQ3J5cHRvSlMpIHtcclxuXHJcblx0LyoqXHJcblx0ICogSVNPL0lFQyA5Nzk3LTEgUGFkZGluZyBNZXRob2QgMi5cclxuXHQgKi9cclxuXHRDcnlwdG9KUy5wYWQuSXNvOTc5NzEgPSB7XHJcblx0ICAgIHBhZDogZnVuY3Rpb24gKGRhdGEsIGJsb2NrU2l6ZSkge1xyXG5cdCAgICAgICAgLy8gQWRkIDB4ODAgYnl0ZVxyXG5cdCAgICAgICAgZGF0YS5jb25jYXQoQ3J5cHRvSlMubGliLldvcmRBcnJheS5jcmVhdGUoWzB4ODAwMDAwMDBdLCAxKSk7XHJcblxyXG5cdCAgICAgICAgLy8gWmVybyBwYWQgdGhlIHJlc3RcclxuXHQgICAgICAgIENyeXB0b0pTLnBhZC5aZXJvUGFkZGluZy5wYWQoZGF0YSwgYmxvY2tTaXplKTtcclxuXHQgICAgfSxcclxuXHJcblx0ICAgIHVucGFkOiBmdW5jdGlvbiAoZGF0YSkge1xyXG5cdCAgICAgICAgLy8gUmVtb3ZlIHplcm8gcGFkZGluZ1xyXG5cdCAgICAgICAgQ3J5cHRvSlMucGFkLlplcm9QYWRkaW5nLnVucGFkKGRhdGEpO1xyXG5cclxuXHQgICAgICAgIC8vIFJlbW92ZSBvbmUgbW9yZSBieXRlIC0tIHRoZSAweDgwIGJ5dGVcclxuXHQgICAgICAgIGRhdGEuc2lnQnl0ZXMtLTtcclxuXHQgICAgfVxyXG5cdH07XHJcblxyXG5cclxuXHRyZXR1cm4gQ3J5cHRvSlMucGFkLklzbzk3OTcxO1xyXG5cclxufSkpOyIsIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnksIHVuZGVmKSB7XHJcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XHJcblx0XHQvLyBDb21tb25KU1xyXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9jb3JlXCIpLCByZXF1aXJlKFwiLi9jaXBoZXItY29yZVwiKSk7XHJcblx0fVxyXG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XHJcblx0XHQvLyBBTURcclxuXHRcdGRlZmluZShbXCIuL2NvcmVcIiwgXCIuL2NpcGhlci1jb3JlXCJdLCBmYWN0b3J5KTtcclxuXHR9XHJcblx0ZWxzZSB7XHJcblx0XHQvLyBHbG9iYWwgKGJyb3dzZXIpXHJcblx0XHRmYWN0b3J5KHJvb3QuQ3J5cHRvSlMpO1xyXG5cdH1cclxufSh0aGlzLCBmdW5jdGlvbiAoQ3J5cHRvSlMpIHtcclxuXHJcblx0LyoqXHJcblx0ICogWmVybyBwYWRkaW5nIHN0cmF0ZWd5LlxyXG5cdCAqL1xyXG5cdENyeXB0b0pTLnBhZC5aZXJvUGFkZGluZyA9IHtcclxuXHQgICAgcGFkOiBmdW5jdGlvbiAoZGF0YSwgYmxvY2tTaXplKSB7XHJcblx0ICAgICAgICAvLyBTaG9ydGN1dFxyXG5cdCAgICAgICAgdmFyIGJsb2NrU2l6ZUJ5dGVzID0gYmxvY2tTaXplICogNDtcclxuXHJcblx0ICAgICAgICAvLyBQYWRcclxuXHQgICAgICAgIGRhdGEuY2xhbXAoKTtcclxuXHQgICAgICAgIGRhdGEuc2lnQnl0ZXMgKz0gYmxvY2tTaXplQnl0ZXMgLSAoKGRhdGEuc2lnQnl0ZXMgJSBibG9ja1NpemVCeXRlcykgfHwgYmxvY2tTaXplQnl0ZXMpO1xyXG5cdCAgICB9LFxyXG5cclxuXHQgICAgdW5wYWQ6IGZ1bmN0aW9uIChkYXRhKSB7XHJcblx0ICAgICAgICAvLyBTaG9ydGN1dFxyXG5cdCAgICAgICAgdmFyIGRhdGFXb3JkcyA9IGRhdGEud29yZHM7XHJcblxyXG5cdCAgICAgICAgLy8gVW5wYWRcclxuXHQgICAgICAgIHZhciBpID0gZGF0YS5zaWdCeXRlcyAtIDE7XHJcblx0ICAgICAgICB3aGlsZSAoISgoZGF0YVdvcmRzW2kgPj4+IDJdID4+PiAoMjQgLSAoaSAlIDQpICogOCkpICYgMHhmZikpIHtcclxuXHQgICAgICAgICAgICBpLS07XHJcblx0ICAgICAgICB9XHJcblx0ICAgICAgICBkYXRhLnNpZ0J5dGVzID0gaSArIDE7XHJcblx0ICAgIH1cclxuXHR9O1xyXG5cclxuXHJcblx0cmV0dXJuIENyeXB0b0pTLnBhZC5aZXJvUGFkZGluZztcclxuXHJcbn0pKTsiLCI7KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5LCB1bmRlZikge1xyXG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xyXG5cdFx0Ly8gQ29tbW9uSlNcclxuXHRcdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vY29yZVwiKSwgcmVxdWlyZShcIi4vY2lwaGVyLWNvcmVcIikpO1xyXG5cdH1cclxuXHRlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xyXG5cdFx0Ly8gQU1EXHJcblx0XHRkZWZpbmUoW1wiLi9jb3JlXCIsIFwiLi9jaXBoZXItY29yZVwiXSwgZmFjdG9yeSk7XHJcblx0fVxyXG5cdGVsc2Uge1xyXG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxyXG5cdFx0ZmFjdG9yeShyb290LkNyeXB0b0pTKTtcclxuXHR9XHJcbn0odGhpcywgZnVuY3Rpb24gKENyeXB0b0pTKSB7XHJcblxyXG5cdC8qKlxyXG5cdCAqIEEgbm9vcCBwYWRkaW5nIHN0cmF0ZWd5LlxyXG5cdCAqL1xyXG5cdENyeXB0b0pTLnBhZC5Ob1BhZGRpbmcgPSB7XHJcblx0ICAgIHBhZDogZnVuY3Rpb24gKCkge1xyXG5cdCAgICB9LFxyXG5cclxuXHQgICAgdW5wYWQ6IGZ1bmN0aW9uICgpIHtcclxuXHQgICAgfVxyXG5cdH07XHJcblxyXG5cclxuXHRyZXR1cm4gQ3J5cHRvSlMucGFkLk5vUGFkZGluZztcclxuXHJcbn0pKTsiLCI7KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5LCB1bmRlZikge1xyXG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xyXG5cdFx0Ly8gQ29tbW9uSlNcclxuXHRcdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vY29yZVwiKSwgcmVxdWlyZShcIi4vY2lwaGVyLWNvcmVcIikpO1xyXG5cdH1cclxuXHRlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xyXG5cdFx0Ly8gQU1EXHJcblx0XHRkZWZpbmUoW1wiLi9jb3JlXCIsIFwiLi9jaXBoZXItY29yZVwiXSwgZmFjdG9yeSk7XHJcblx0fVxyXG5cdGVsc2Uge1xyXG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxyXG5cdFx0ZmFjdG9yeShyb290LkNyeXB0b0pTKTtcclxuXHR9XHJcbn0odGhpcywgZnVuY3Rpb24gKENyeXB0b0pTKSB7XHJcblxyXG5cdChmdW5jdGlvbiAodW5kZWZpbmVkKSB7XHJcblx0ICAgIC8vIFNob3J0Y3V0c1xyXG5cdCAgICB2YXIgQyA9IENyeXB0b0pTO1xyXG5cdCAgICB2YXIgQ19saWIgPSBDLmxpYjtcclxuXHQgICAgdmFyIENpcGhlclBhcmFtcyA9IENfbGliLkNpcGhlclBhcmFtcztcclxuXHQgICAgdmFyIENfZW5jID0gQy5lbmM7XHJcblx0ICAgIHZhciBIZXggPSBDX2VuYy5IZXg7XHJcblx0ICAgIHZhciBDX2Zvcm1hdCA9IEMuZm9ybWF0O1xyXG5cclxuXHQgICAgdmFyIEhleEZvcm1hdHRlciA9IENfZm9ybWF0LkhleCA9IHtcclxuXHQgICAgICAgIC8qKlxyXG5cdCAgICAgICAgICogQ29udmVydHMgdGhlIGNpcGhlcnRleHQgb2YgYSBjaXBoZXIgcGFyYW1zIG9iamVjdCB0byBhIGhleGFkZWNpbWFsbHkgZW5jb2RlZCBzdHJpbmcuXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQHBhcmFtIHtDaXBoZXJQYXJhbXN9IGNpcGhlclBhcmFtcyBUaGUgY2lwaGVyIHBhcmFtcyBvYmplY3QuXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBUaGUgaGV4YWRlY2ltYWxseSBlbmNvZGVkIHN0cmluZy5cclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAc3RhdGljXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQGV4YW1wbGVcclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiAgICAgdmFyIGhleFN0cmluZyA9IENyeXB0b0pTLmZvcm1hdC5IZXguc3RyaW5naWZ5KGNpcGhlclBhcmFtcyk7XHJcblx0ICAgICAgICAgKi9cclxuXHQgICAgICAgIHN0cmluZ2lmeTogZnVuY3Rpb24gKGNpcGhlclBhcmFtcykge1xyXG5cdCAgICAgICAgICAgIHJldHVybiBjaXBoZXJQYXJhbXMuY2lwaGVydGV4dC50b1N0cmluZyhIZXgpO1xyXG5cdCAgICAgICAgfSxcclxuXHJcblx0ICAgICAgICAvKipcclxuXHQgICAgICAgICAqIENvbnZlcnRzIGEgaGV4YWRlY2ltYWxseSBlbmNvZGVkIGNpcGhlcnRleHQgc3RyaW5nIHRvIGEgY2lwaGVyIHBhcmFtcyBvYmplY3QuXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGlucHV0IFRoZSBoZXhhZGVjaW1hbGx5IGVuY29kZWQgc3RyaW5nLlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEByZXR1cm4ge0NpcGhlclBhcmFtc30gVGhlIGNpcGhlciBwYXJhbXMgb2JqZWN0LlxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqIEBzdGF0aWNcclxuXHQgICAgICAgICAqXHJcblx0ICAgICAgICAgKiBAZXhhbXBsZVxyXG5cdCAgICAgICAgICpcclxuXHQgICAgICAgICAqICAgICB2YXIgY2lwaGVyUGFyYW1zID0gQ3J5cHRvSlMuZm9ybWF0LkhleC5wYXJzZShoZXhTdHJpbmcpO1xyXG5cdCAgICAgICAgICovXHJcblx0ICAgICAgICBwYXJzZTogZnVuY3Rpb24gKGlucHV0KSB7XHJcblx0ICAgICAgICAgICAgdmFyIGNpcGhlcnRleHQgPSBIZXgucGFyc2UoaW5wdXQpO1xyXG5cdCAgICAgICAgICAgIHJldHVybiBDaXBoZXJQYXJhbXMuY3JlYXRlKHsgY2lwaGVydGV4dDogY2lwaGVydGV4dCB9KTtcclxuXHQgICAgICAgIH1cclxuXHQgICAgfTtcclxuXHR9KCkpO1xyXG5cclxuXHJcblx0cmV0dXJuIENyeXB0b0pTLmZvcm1hdC5IZXg7XHJcblxyXG59KSk7IiwiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSwgdW5kZWYpIHtcclxuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcclxuXHRcdC8vIENvbW1vbkpTXHJcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2NvcmVcIiksIHJlcXVpcmUoXCIuL2VuYy1iYXNlNjRcIiksIHJlcXVpcmUoXCIuL21kNVwiKSwgcmVxdWlyZShcIi4vZXZwa2RmXCIpLCByZXF1aXJlKFwiLi9jaXBoZXItY29yZVwiKSk7XHJcblx0fVxyXG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XHJcblx0XHQvLyBBTURcclxuXHRcdGRlZmluZShbXCIuL2NvcmVcIiwgXCIuL2VuYy1iYXNlNjRcIiwgXCIuL21kNVwiLCBcIi4vZXZwa2RmXCIsIFwiLi9jaXBoZXItY29yZVwiXSwgZmFjdG9yeSk7XHJcblx0fVxyXG5cdGVsc2Uge1xyXG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxyXG5cdFx0ZmFjdG9yeShyb290LkNyeXB0b0pTKTtcclxuXHR9XHJcbn0odGhpcywgZnVuY3Rpb24gKENyeXB0b0pTKSB7XHJcblxyXG5cdChmdW5jdGlvbiAoKSB7XHJcblx0ICAgIC8vIFNob3J0Y3V0c1xyXG5cdCAgICB2YXIgQyA9IENyeXB0b0pTO1xyXG5cdCAgICB2YXIgQ19saWIgPSBDLmxpYjtcclxuXHQgICAgdmFyIEJsb2NrQ2lwaGVyID0gQ19saWIuQmxvY2tDaXBoZXI7XHJcblx0ICAgIHZhciBDX2FsZ28gPSBDLmFsZ287XHJcblxyXG5cdCAgICAvLyBMb29rdXAgdGFibGVzXHJcblx0ICAgIHZhciBTQk9YID0gW107XHJcblx0ICAgIHZhciBJTlZfU0JPWCA9IFtdO1xyXG5cdCAgICB2YXIgU1VCX01JWF8wID0gW107XHJcblx0ICAgIHZhciBTVUJfTUlYXzEgPSBbXTtcclxuXHQgICAgdmFyIFNVQl9NSVhfMiA9IFtdO1xyXG5cdCAgICB2YXIgU1VCX01JWF8zID0gW107XHJcblx0ICAgIHZhciBJTlZfU1VCX01JWF8wID0gW107XHJcblx0ICAgIHZhciBJTlZfU1VCX01JWF8xID0gW107XHJcblx0ICAgIHZhciBJTlZfU1VCX01JWF8yID0gW107XHJcblx0ICAgIHZhciBJTlZfU1VCX01JWF8zID0gW107XHJcblxyXG5cdCAgICAvLyBDb21wdXRlIGxvb2t1cCB0YWJsZXNcclxuXHQgICAgKGZ1bmN0aW9uICgpIHtcclxuXHQgICAgICAgIC8vIENvbXB1dGUgZG91YmxlIHRhYmxlXHJcblx0ICAgICAgICB2YXIgZCA9IFtdO1xyXG5cdCAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7IGkrKykge1xyXG5cdCAgICAgICAgICAgIGlmIChpIDwgMTI4KSB7XHJcblx0ICAgICAgICAgICAgICAgIGRbaV0gPSBpIDw8IDE7XHJcblx0ICAgICAgICAgICAgfSBlbHNlIHtcclxuXHQgICAgICAgICAgICAgICAgZFtpXSA9IChpIDw8IDEpIF4gMHgxMWI7XHJcblx0ICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgfVxyXG5cclxuXHQgICAgICAgIC8vIFdhbGsgR0YoMl44KVxyXG5cdCAgICAgICAgdmFyIHggPSAwO1xyXG5cdCAgICAgICAgdmFyIHhpID0gMDtcclxuXHQgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgMjU2OyBpKyspIHtcclxuXHQgICAgICAgICAgICAvLyBDb21wdXRlIHNib3hcclxuXHQgICAgICAgICAgICB2YXIgc3ggPSB4aSBeICh4aSA8PCAxKSBeICh4aSA8PCAyKSBeICh4aSA8PCAzKSBeICh4aSA8PCA0KTtcclxuXHQgICAgICAgICAgICBzeCA9IChzeCA+Pj4gOCkgXiAoc3ggJiAweGZmKSBeIDB4NjM7XHJcblx0ICAgICAgICAgICAgU0JPWFt4XSA9IHN4O1xyXG5cdCAgICAgICAgICAgIElOVl9TQk9YW3N4XSA9IHg7XHJcblxyXG5cdCAgICAgICAgICAgIC8vIENvbXB1dGUgbXVsdGlwbGljYXRpb25cclxuXHQgICAgICAgICAgICB2YXIgeDIgPSBkW3hdO1xyXG5cdCAgICAgICAgICAgIHZhciB4NCA9IGRbeDJdO1xyXG5cdCAgICAgICAgICAgIHZhciB4OCA9IGRbeDRdO1xyXG5cclxuXHQgICAgICAgICAgICAvLyBDb21wdXRlIHN1YiBieXRlcywgbWl4IGNvbHVtbnMgdGFibGVzXHJcblx0ICAgICAgICAgICAgdmFyIHQgPSAoZFtzeF0gKiAweDEwMSkgXiAoc3ggKiAweDEwMTAxMDApO1xyXG5cdCAgICAgICAgICAgIFNVQl9NSVhfMFt4XSA9ICh0IDw8IDI0KSB8ICh0ID4+PiA4KTtcclxuXHQgICAgICAgICAgICBTVUJfTUlYXzFbeF0gPSAodCA8PCAxNikgfCAodCA+Pj4gMTYpO1xyXG5cdCAgICAgICAgICAgIFNVQl9NSVhfMlt4XSA9ICh0IDw8IDgpICB8ICh0ID4+PiAyNCk7XHJcblx0ICAgICAgICAgICAgU1VCX01JWF8zW3hdID0gdDtcclxuXHJcblx0ICAgICAgICAgICAgLy8gQ29tcHV0ZSBpbnYgc3ViIGJ5dGVzLCBpbnYgbWl4IGNvbHVtbnMgdGFibGVzXHJcblx0ICAgICAgICAgICAgdmFyIHQgPSAoeDggKiAweDEwMTAxMDEpIF4gKHg0ICogMHgxMDAwMSkgXiAoeDIgKiAweDEwMSkgXiAoeCAqIDB4MTAxMDEwMCk7XHJcblx0ICAgICAgICAgICAgSU5WX1NVQl9NSVhfMFtzeF0gPSAodCA8PCAyNCkgfCAodCA+Pj4gOCk7XHJcblx0ICAgICAgICAgICAgSU5WX1NVQl9NSVhfMVtzeF0gPSAodCA8PCAxNikgfCAodCA+Pj4gMTYpO1xyXG5cdCAgICAgICAgICAgIElOVl9TVUJfTUlYXzJbc3hdID0gKHQgPDwgOCkgIHwgKHQgPj4+IDI0KTtcclxuXHQgICAgICAgICAgICBJTlZfU1VCX01JWF8zW3N4XSA9IHQ7XHJcblxyXG5cdCAgICAgICAgICAgIC8vIENvbXB1dGUgbmV4dCBjb3VudGVyXHJcblx0ICAgICAgICAgICAgaWYgKCF4KSB7XHJcblx0ICAgICAgICAgICAgICAgIHggPSB4aSA9IDE7XHJcblx0ICAgICAgICAgICAgfSBlbHNlIHtcclxuXHQgICAgICAgICAgICAgICAgeCA9IHgyIF4gZFtkW2RbeDggXiB4Ml1dXTtcclxuXHQgICAgICAgICAgICAgICAgeGkgXj0gZFtkW3hpXV07XHJcblx0ICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgfVxyXG5cdCAgICB9KCkpO1xyXG5cclxuXHQgICAgLy8gUHJlY29tcHV0ZWQgUmNvbiBsb29rdXBcclxuXHQgICAgdmFyIFJDT04gPSBbMHgwMCwgMHgwMSwgMHgwMiwgMHgwNCwgMHgwOCwgMHgxMCwgMHgyMCwgMHg0MCwgMHg4MCwgMHgxYiwgMHgzNl07XHJcblxyXG5cdCAgICAvKipcclxuXHQgICAgICogQUVTIGJsb2NrIGNpcGhlciBhbGdvcml0aG0uXHJcblx0ICAgICAqL1xyXG5cdCAgICB2YXIgQUVTID0gQ19hbGdvLkFFUyA9IEJsb2NrQ2lwaGVyLmV4dGVuZCh7XHJcblx0ICAgICAgICBfZG9SZXNldDogZnVuY3Rpb24gKCkge1xyXG5cdCAgICAgICAgICAgIC8vIFNraXAgcmVzZXQgb2YgblJvdW5kcyBoYXMgYmVlbiBzZXQgYmVmb3JlIGFuZCBrZXkgZGlkIG5vdCBjaGFuZ2VcclxuXHQgICAgICAgICAgICBpZiAodGhpcy5fblJvdW5kcyAmJiB0aGlzLl9rZXlQcmlvclJlc2V0ID09PSB0aGlzLl9rZXkpIHtcclxuXHQgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG5cdCAgICAgICAgICAgIH1cclxuXHJcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXHJcblx0ICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMuX2tleVByaW9yUmVzZXQgPSB0aGlzLl9rZXk7XHJcblx0ICAgICAgICAgICAgdmFyIGtleVdvcmRzID0ga2V5LndvcmRzO1xyXG5cdCAgICAgICAgICAgIHZhciBrZXlTaXplID0ga2V5LnNpZ0J5dGVzIC8gNDtcclxuXHJcblx0ICAgICAgICAgICAgLy8gQ29tcHV0ZSBudW1iZXIgb2Ygcm91bmRzXHJcblx0ICAgICAgICAgICAgdmFyIG5Sb3VuZHMgPSB0aGlzLl9uUm91bmRzID0ga2V5U2l6ZSArIDY7XHJcblxyXG5cdCAgICAgICAgICAgIC8vIENvbXB1dGUgbnVtYmVyIG9mIGtleSBzY2hlZHVsZSByb3dzXHJcblx0ICAgICAgICAgICAgdmFyIGtzUm93cyA9IChuUm91bmRzICsgMSkgKiA0O1xyXG5cclxuXHQgICAgICAgICAgICAvLyBDb21wdXRlIGtleSBzY2hlZHVsZVxyXG5cdCAgICAgICAgICAgIHZhciBrZXlTY2hlZHVsZSA9IHRoaXMuX2tleVNjaGVkdWxlID0gW107XHJcblx0ICAgICAgICAgICAgZm9yICh2YXIga3NSb3cgPSAwOyBrc1JvdyA8IGtzUm93czsga3NSb3crKykge1xyXG5cdCAgICAgICAgICAgICAgICBpZiAoa3NSb3cgPCBrZXlTaXplKSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICBrZXlTY2hlZHVsZVtrc1Jvd10gPSBrZXlXb3Jkc1trc1Jvd107XHJcblx0ICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IGtleVNjaGVkdWxlW2tzUm93IC0gMV07XHJcblxyXG5cdCAgICAgICAgICAgICAgICAgICAgaWYgKCEoa3NSb3cgJSBrZXlTaXplKSkge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJvdCB3b3JkXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdCA9ICh0IDw8IDgpIHwgKHQgPj4+IDI0KTtcclxuXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3ViIHdvcmRcclxuXHQgICAgICAgICAgICAgICAgICAgICAgICB0ID0gKFNCT1hbdCA+Pj4gMjRdIDw8IDI0KSB8IChTQk9YWyh0ID4+PiAxNikgJiAweGZmXSA8PCAxNikgfCAoU0JPWFsodCA+Pj4gOCkgJiAweGZmXSA8PCA4KSB8IFNCT1hbdCAmIDB4ZmZdO1xyXG5cclxuXHQgICAgICAgICAgICAgICAgICAgICAgICAvLyBNaXggUmNvblxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIHQgXj0gUkNPTlsoa3NSb3cgLyBrZXlTaXplKSB8IDBdIDw8IDI0O1xyXG5cdCAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChrZXlTaXplID4gNiAmJiBrc1JvdyAlIGtleVNpemUgPT0gNCkge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN1YiB3b3JkXHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAgdCA9IChTQk9YW3QgPj4+IDI0XSA8PCAyNCkgfCAoU0JPWFsodCA+Pj4gMTYpICYgMHhmZl0gPDwgMTYpIHwgKFNCT1hbKHQgPj4+IDgpICYgMHhmZl0gPDwgOCkgfCBTQk9YW3QgJiAweGZmXTtcclxuXHQgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcblx0ICAgICAgICAgICAgICAgICAgICBrZXlTY2hlZHVsZVtrc1Jvd10gPSBrZXlTY2hlZHVsZVtrc1JvdyAtIGtleVNpemVdIF4gdDtcclxuXHQgICAgICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgICAgIH1cclxuXHJcblx0ICAgICAgICAgICAgLy8gQ29tcHV0ZSBpbnYga2V5IHNjaGVkdWxlXHJcblx0ICAgICAgICAgICAgdmFyIGludktleVNjaGVkdWxlID0gdGhpcy5faW52S2V5U2NoZWR1bGUgPSBbXTtcclxuXHQgICAgICAgICAgICBmb3IgKHZhciBpbnZLc1JvdyA9IDA7IGludktzUm93IDwga3NSb3dzOyBpbnZLc1JvdysrKSB7XHJcblx0ICAgICAgICAgICAgICAgIHZhciBrc1JvdyA9IGtzUm93cyAtIGludktzUm93O1xyXG5cclxuXHQgICAgICAgICAgICAgICAgaWYgKGludktzUm93ICUgNCkge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSBrZXlTY2hlZHVsZVtrc1Jvd107XHJcblx0ICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICB2YXIgdCA9IGtleVNjaGVkdWxlW2tzUm93IC0gNF07XHJcblx0ICAgICAgICAgICAgICAgIH1cclxuXHJcblx0ICAgICAgICAgICAgICAgIGlmIChpbnZLc1JvdyA8IDQgfHwga3NSb3cgPD0gNCkge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgaW52S2V5U2NoZWR1bGVbaW52S3NSb3ddID0gdDtcclxuXHQgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHQgICAgICAgICAgICAgICAgICAgIGludktleVNjaGVkdWxlW2ludktzUm93XSA9IElOVl9TVUJfTUlYXzBbU0JPWFt0ID4+PiAyNF1dIF4gSU5WX1NVQl9NSVhfMVtTQk9YWyh0ID4+PiAxNikgJiAweGZmXV0gXlxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSU5WX1NVQl9NSVhfMltTQk9YWyh0ID4+PiA4KSAmIDB4ZmZdXSBeIElOVl9TVUJfTUlYXzNbU0JPWFt0ICYgMHhmZl1dO1xyXG5cdCAgICAgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgfSxcclxuXHJcblx0ICAgICAgICBlbmNyeXB0QmxvY2s6IGZ1bmN0aW9uIChNLCBvZmZzZXQpIHtcclxuXHQgICAgICAgICAgICB0aGlzLl9kb0NyeXB0QmxvY2soTSwgb2Zmc2V0LCB0aGlzLl9rZXlTY2hlZHVsZSwgU1VCX01JWF8wLCBTVUJfTUlYXzEsIFNVQl9NSVhfMiwgU1VCX01JWF8zLCBTQk9YKTtcclxuXHQgICAgICAgIH0sXHJcblxyXG5cdCAgICAgICAgZGVjcnlwdEJsb2NrOiBmdW5jdGlvbiAoTSwgb2Zmc2V0KSB7XHJcblx0ICAgICAgICAgICAgLy8gU3dhcCAybmQgYW5kIDR0aCByb3dzXHJcblx0ICAgICAgICAgICAgdmFyIHQgPSBNW29mZnNldCArIDFdO1xyXG5cdCAgICAgICAgICAgIE1bb2Zmc2V0ICsgMV0gPSBNW29mZnNldCArIDNdO1xyXG5cdCAgICAgICAgICAgIE1bb2Zmc2V0ICsgM10gPSB0O1xyXG5cclxuXHQgICAgICAgICAgICB0aGlzLl9kb0NyeXB0QmxvY2soTSwgb2Zmc2V0LCB0aGlzLl9pbnZLZXlTY2hlZHVsZSwgSU5WX1NVQl9NSVhfMCwgSU5WX1NVQl9NSVhfMSwgSU5WX1NVQl9NSVhfMiwgSU5WX1NVQl9NSVhfMywgSU5WX1NCT1gpO1xyXG5cclxuXHQgICAgICAgICAgICAvLyBJbnYgc3dhcCAybmQgYW5kIDR0aCByb3dzXHJcblx0ICAgICAgICAgICAgdmFyIHQgPSBNW29mZnNldCArIDFdO1xyXG5cdCAgICAgICAgICAgIE1bb2Zmc2V0ICsgMV0gPSBNW29mZnNldCArIDNdO1xyXG5cdCAgICAgICAgICAgIE1bb2Zmc2V0ICsgM10gPSB0O1xyXG5cdCAgICAgICAgfSxcclxuXHJcblx0ICAgICAgICBfZG9DcnlwdEJsb2NrOiBmdW5jdGlvbiAoTSwgb2Zmc2V0LCBrZXlTY2hlZHVsZSwgU1VCX01JWF8wLCBTVUJfTUlYXzEsIFNVQl9NSVhfMiwgU1VCX01JWF8zLCBTQk9YKSB7XHJcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRcclxuXHQgICAgICAgICAgICB2YXIgblJvdW5kcyA9IHRoaXMuX25Sb3VuZHM7XHJcblxyXG5cdCAgICAgICAgICAgIC8vIEdldCBpbnB1dCwgYWRkIHJvdW5kIGtleVxyXG5cdCAgICAgICAgICAgIHZhciBzMCA9IE1bb2Zmc2V0XSAgICAgXiBrZXlTY2hlZHVsZVswXTtcclxuXHQgICAgICAgICAgICB2YXIgczEgPSBNW29mZnNldCArIDFdIF4ga2V5U2NoZWR1bGVbMV07XHJcblx0ICAgICAgICAgICAgdmFyIHMyID0gTVtvZmZzZXQgKyAyXSBeIGtleVNjaGVkdWxlWzJdO1xyXG5cdCAgICAgICAgICAgIHZhciBzMyA9IE1bb2Zmc2V0ICsgM10gXiBrZXlTY2hlZHVsZVszXTtcclxuXHJcblx0ICAgICAgICAgICAgLy8gS2V5IHNjaGVkdWxlIHJvdyBjb3VudGVyXHJcblx0ICAgICAgICAgICAgdmFyIGtzUm93ID0gNDtcclxuXHJcblx0ICAgICAgICAgICAgLy8gUm91bmRzXHJcblx0ICAgICAgICAgICAgZm9yICh2YXIgcm91bmQgPSAxOyByb3VuZCA8IG5Sb3VuZHM7IHJvdW5kKyspIHtcclxuXHQgICAgICAgICAgICAgICAgLy8gU2hpZnQgcm93cywgc3ViIGJ5dGVzLCBtaXggY29sdW1ucywgYWRkIHJvdW5kIGtleVxyXG5cdCAgICAgICAgICAgICAgICB2YXIgdDAgPSBTVUJfTUlYXzBbczAgPj4+IDI0XSBeIFNVQl9NSVhfMVsoczEgPj4+IDE2KSAmIDB4ZmZdIF4gU1VCX01JWF8yWyhzMiA+Pj4gOCkgJiAweGZmXSBeIFNVQl9NSVhfM1tzMyAmIDB4ZmZdIF4ga2V5U2NoZWR1bGVba3NSb3crK107XHJcblx0ICAgICAgICAgICAgICAgIHZhciB0MSA9IFNVQl9NSVhfMFtzMSA+Pj4gMjRdIF4gU1VCX01JWF8xWyhzMiA+Pj4gMTYpICYgMHhmZl0gXiBTVUJfTUlYXzJbKHMzID4+PiA4KSAmIDB4ZmZdIF4gU1VCX01JWF8zW3MwICYgMHhmZl0gXiBrZXlTY2hlZHVsZVtrc1JvdysrXTtcclxuXHQgICAgICAgICAgICAgICAgdmFyIHQyID0gU1VCX01JWF8wW3MyID4+PiAyNF0gXiBTVUJfTUlYXzFbKHMzID4+PiAxNikgJiAweGZmXSBeIFNVQl9NSVhfMlsoczAgPj4+IDgpICYgMHhmZl0gXiBTVUJfTUlYXzNbczEgJiAweGZmXSBeIGtleVNjaGVkdWxlW2tzUm93KytdO1xyXG5cdCAgICAgICAgICAgICAgICB2YXIgdDMgPSBTVUJfTUlYXzBbczMgPj4+IDI0XSBeIFNVQl9NSVhfMVsoczAgPj4+IDE2KSAmIDB4ZmZdIF4gU1VCX01JWF8yWyhzMSA+Pj4gOCkgJiAweGZmXSBeIFNVQl9NSVhfM1tzMiAmIDB4ZmZdIF4ga2V5U2NoZWR1bGVba3NSb3crK107XHJcblxyXG5cdCAgICAgICAgICAgICAgICAvLyBVcGRhdGUgc3RhdGVcclxuXHQgICAgICAgICAgICAgICAgczAgPSB0MDtcclxuXHQgICAgICAgICAgICAgICAgczEgPSB0MTtcclxuXHQgICAgICAgICAgICAgICAgczIgPSB0MjtcclxuXHQgICAgICAgICAgICAgICAgczMgPSB0MztcclxuXHQgICAgICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgICAgIC8vIFNoaWZ0IHJvd3MsIHN1YiBieXRlcywgYWRkIHJvdW5kIGtleVxyXG5cdCAgICAgICAgICAgIHZhciB0MCA9ICgoU0JPWFtzMCA+Pj4gMjRdIDw8IDI0KSB8IChTQk9YWyhzMSA+Pj4gMTYpICYgMHhmZl0gPDwgMTYpIHwgKFNCT1hbKHMyID4+PiA4KSAmIDB4ZmZdIDw8IDgpIHwgU0JPWFtzMyAmIDB4ZmZdKSBeIGtleVNjaGVkdWxlW2tzUm93KytdO1xyXG5cdCAgICAgICAgICAgIHZhciB0MSA9ICgoU0JPWFtzMSA+Pj4gMjRdIDw8IDI0KSB8IChTQk9YWyhzMiA+Pj4gMTYpICYgMHhmZl0gPDwgMTYpIHwgKFNCT1hbKHMzID4+PiA4KSAmIDB4ZmZdIDw8IDgpIHwgU0JPWFtzMCAmIDB4ZmZdKSBeIGtleVNjaGVkdWxlW2tzUm93KytdO1xyXG5cdCAgICAgICAgICAgIHZhciB0MiA9ICgoU0JPWFtzMiA+Pj4gMjRdIDw8IDI0KSB8IChTQk9YWyhzMyA+Pj4gMTYpICYgMHhmZl0gPDwgMTYpIHwgKFNCT1hbKHMwID4+PiA4KSAmIDB4ZmZdIDw8IDgpIHwgU0JPWFtzMSAmIDB4ZmZdKSBeIGtleVNjaGVkdWxlW2tzUm93KytdO1xyXG5cdCAgICAgICAgICAgIHZhciB0MyA9ICgoU0JPWFtzMyA+Pj4gMjRdIDw8IDI0KSB8IChTQk9YWyhzMCA+Pj4gMTYpICYgMHhmZl0gPDwgMTYpIHwgKFNCT1hbKHMxID4+PiA4KSAmIDB4ZmZdIDw8IDgpIHwgU0JPWFtzMiAmIDB4ZmZdKSBeIGtleVNjaGVkdWxlW2tzUm93KytdO1xyXG5cclxuXHQgICAgICAgICAgICAvLyBTZXQgb3V0cHV0XHJcblx0ICAgICAgICAgICAgTVtvZmZzZXRdICAgICA9IHQwO1xyXG5cdCAgICAgICAgICAgIE1bb2Zmc2V0ICsgMV0gPSB0MTtcclxuXHQgICAgICAgICAgICBNW29mZnNldCArIDJdID0gdDI7XHJcblx0ICAgICAgICAgICAgTVtvZmZzZXQgKyAzXSA9IHQzO1xyXG5cdCAgICAgICAgfSxcclxuXHJcblx0ICAgICAgICBrZXlTaXplOiAyNTYvMzJcclxuXHQgICAgfSk7XHJcblxyXG5cdCAgICAvKipcclxuXHQgICAgICogU2hvcnRjdXQgZnVuY3Rpb25zIHRvIHRoZSBjaXBoZXIncyBvYmplY3QgaW50ZXJmYWNlLlxyXG5cdCAgICAgKlxyXG5cdCAgICAgKiBAZXhhbXBsZVxyXG5cdCAgICAgKlxyXG5cdCAgICAgKiAgICAgdmFyIGNpcGhlcnRleHQgPSBDcnlwdG9KUy5BRVMuZW5jcnlwdChtZXNzYWdlLCBrZXksIGNmZyk7XHJcblx0ICAgICAqICAgICB2YXIgcGxhaW50ZXh0ICA9IENyeXB0b0pTLkFFUy5kZWNyeXB0KGNpcGhlcnRleHQsIGtleSwgY2ZnKTtcclxuXHQgICAgICovXHJcblx0ICAgIEMuQUVTID0gQmxvY2tDaXBoZXIuX2NyZWF0ZUhlbHBlcihBRVMpO1xyXG5cdH0oKSk7XHJcblxyXG5cclxuXHRyZXR1cm4gQ3J5cHRvSlMuQUVTO1xyXG5cclxufSkpOyIsIjsoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnksIHVuZGVmKSB7XHJcblx0aWYgKHR5cGVvZiBleHBvcnRzID09PSBcIm9iamVjdFwiKSB7XHJcblx0XHQvLyBDb21tb25KU1xyXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwiLi9jb3JlXCIpLCByZXF1aXJlKFwiLi9lbmMtYmFzZTY0XCIpLCByZXF1aXJlKFwiLi9tZDVcIiksIHJlcXVpcmUoXCIuL2V2cGtkZlwiKSwgcmVxdWlyZShcIi4vY2lwaGVyLWNvcmVcIikpO1xyXG5cdH1cclxuXHRlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSBcImZ1bmN0aW9uXCIgJiYgZGVmaW5lLmFtZCkge1xyXG5cdFx0Ly8gQU1EXHJcblx0XHRkZWZpbmUoW1wiLi9jb3JlXCIsIFwiLi9lbmMtYmFzZTY0XCIsIFwiLi9tZDVcIiwgXCIuL2V2cGtkZlwiLCBcIi4vY2lwaGVyLWNvcmVcIl0sIGZhY3RvcnkpO1xyXG5cdH1cclxuXHRlbHNlIHtcclxuXHRcdC8vIEdsb2JhbCAoYnJvd3NlcilcclxuXHRcdGZhY3Rvcnkocm9vdC5DcnlwdG9KUyk7XHJcblx0fVxyXG59KHRoaXMsIGZ1bmN0aW9uIChDcnlwdG9KUykge1xyXG5cclxuXHQoZnVuY3Rpb24gKCkge1xyXG5cdCAgICAvLyBTaG9ydGN1dHNcclxuXHQgICAgdmFyIEMgPSBDcnlwdG9KUztcclxuXHQgICAgdmFyIENfbGliID0gQy5saWI7XHJcblx0ICAgIHZhciBXb3JkQXJyYXkgPSBDX2xpYi5Xb3JkQXJyYXk7XHJcblx0ICAgIHZhciBCbG9ja0NpcGhlciA9IENfbGliLkJsb2NrQ2lwaGVyO1xyXG5cdCAgICB2YXIgQ19hbGdvID0gQy5hbGdvO1xyXG5cclxuXHQgICAgLy8gUGVybXV0ZWQgQ2hvaWNlIDEgY29uc3RhbnRzXHJcblx0ICAgIHZhciBQQzEgPSBbXHJcblx0ICAgICAgICA1NywgNDksIDQxLCAzMywgMjUsIDE3LCA5LCAgMSxcclxuXHQgICAgICAgIDU4LCA1MCwgNDIsIDM0LCAyNiwgMTgsIDEwLCAyLFxyXG5cdCAgICAgICAgNTksIDUxLCA0MywgMzUsIDI3LCAxOSwgMTEsIDMsXHJcblx0ICAgICAgICA2MCwgNTIsIDQ0LCAzNiwgNjMsIDU1LCA0NywgMzksXHJcblx0ICAgICAgICAzMSwgMjMsIDE1LCA3LCAgNjIsIDU0LCA0NiwgMzgsXHJcblx0ICAgICAgICAzMCwgMjIsIDE0LCA2LCAgNjEsIDUzLCA0NSwgMzcsXHJcblx0ICAgICAgICAyOSwgMjEsIDEzLCA1LCAgMjgsIDIwLCAxMiwgNFxyXG5cdCAgICBdO1xyXG5cclxuXHQgICAgLy8gUGVybXV0ZWQgQ2hvaWNlIDIgY29uc3RhbnRzXHJcblx0ICAgIHZhciBQQzIgPSBbXHJcblx0ICAgICAgICAxNCwgMTcsIDExLCAyNCwgMSwgIDUsXHJcblx0ICAgICAgICAzLCAgMjgsIDE1LCA2LCAgMjEsIDEwLFxyXG5cdCAgICAgICAgMjMsIDE5LCAxMiwgNCwgIDI2LCA4LFxyXG5cdCAgICAgICAgMTYsIDcsICAyNywgMjAsIDEzLCAyLFxyXG5cdCAgICAgICAgNDEsIDUyLCAzMSwgMzcsIDQ3LCA1NSxcclxuXHQgICAgICAgIDMwLCA0MCwgNTEsIDQ1LCAzMywgNDgsXHJcblx0ICAgICAgICA0NCwgNDksIDM5LCA1NiwgMzQsIDUzLFxyXG5cdCAgICAgICAgNDYsIDQyLCA1MCwgMzYsIDI5LCAzMlxyXG5cdCAgICBdO1xyXG5cclxuXHQgICAgLy8gQ3VtdWxhdGl2ZSBiaXQgc2hpZnQgY29uc3RhbnRzXHJcblx0ICAgIHZhciBCSVRfU0hJRlRTID0gWzEsICAyLCAgNCwgIDYsICA4LCAgMTAsIDEyLCAxNCwgMTUsIDE3LCAxOSwgMjEsIDIzLCAyNSwgMjcsIDI4XTtcclxuXHJcblx0ICAgIC8vIFNCT1hlcyBhbmQgcm91bmQgcGVybXV0YXRpb24gY29uc3RhbnRzXHJcblx0ICAgIHZhciBTQk9YX1AgPSBbXHJcblx0ICAgICAgICB7XHJcblx0ICAgICAgICAgICAgMHgwOiAweDgwODIwMCxcclxuXHQgICAgICAgICAgICAweDEwMDAwMDAwOiAweDgwMDAsXHJcblx0ICAgICAgICAgICAgMHgyMDAwMDAwMDogMHg4MDgwMDIsXHJcblx0ICAgICAgICAgICAgMHgzMDAwMDAwMDogMHgyLFxyXG5cdCAgICAgICAgICAgIDB4NDAwMDAwMDA6IDB4MjAwLFxyXG5cdCAgICAgICAgICAgIDB4NTAwMDAwMDA6IDB4ODA4MjAyLFxyXG5cdCAgICAgICAgICAgIDB4NjAwMDAwMDA6IDB4ODAwMjAyLFxyXG5cdCAgICAgICAgICAgIDB4NzAwMDAwMDA6IDB4ODAwMDAwLFxyXG5cdCAgICAgICAgICAgIDB4ODAwMDAwMDA6IDB4MjAyLFxyXG5cdCAgICAgICAgICAgIDB4OTAwMDAwMDA6IDB4ODAwMjAwLFxyXG5cdCAgICAgICAgICAgIDB4YTAwMDAwMDA6IDB4ODIwMCxcclxuXHQgICAgICAgICAgICAweGIwMDAwMDAwOiAweDgwODAwMCxcclxuXHQgICAgICAgICAgICAweGMwMDAwMDAwOiAweDgwMDIsXHJcblx0ICAgICAgICAgICAgMHhkMDAwMDAwMDogMHg4MDAwMDIsXHJcblx0ICAgICAgICAgICAgMHhlMDAwMDAwMDogMHgwLFxyXG5cdCAgICAgICAgICAgIDB4ZjAwMDAwMDA6IDB4ODIwMixcclxuXHQgICAgICAgICAgICAweDgwMDAwMDA6IDB4MCxcclxuXHQgICAgICAgICAgICAweDE4MDAwMDAwOiAweDgwODIwMixcclxuXHQgICAgICAgICAgICAweDI4MDAwMDAwOiAweDgyMDIsXHJcblx0ICAgICAgICAgICAgMHgzODAwMDAwMDogMHg4MDAwLFxyXG5cdCAgICAgICAgICAgIDB4NDgwMDAwMDA6IDB4ODA4MjAwLFxyXG5cdCAgICAgICAgICAgIDB4NTgwMDAwMDA6IDB4MjAwLFxyXG5cdCAgICAgICAgICAgIDB4NjgwMDAwMDA6IDB4ODA4MDAyLFxyXG5cdCAgICAgICAgICAgIDB4NzgwMDAwMDA6IDB4MixcclxuXHQgICAgICAgICAgICAweDg4MDAwMDAwOiAweDgwMDIwMCxcclxuXHQgICAgICAgICAgICAweDk4MDAwMDAwOiAweDgyMDAsXHJcblx0ICAgICAgICAgICAgMHhhODAwMDAwMDogMHg4MDgwMDAsXHJcblx0ICAgICAgICAgICAgMHhiODAwMDAwMDogMHg4MDAyMDIsXHJcblx0ICAgICAgICAgICAgMHhjODAwMDAwMDogMHg4MDAwMDIsXHJcblx0ICAgICAgICAgICAgMHhkODAwMDAwMDogMHg4MDAyLFxyXG5cdCAgICAgICAgICAgIDB4ZTgwMDAwMDA6IDB4MjAyLFxyXG5cdCAgICAgICAgICAgIDB4ZjgwMDAwMDA6IDB4ODAwMDAwLFxyXG5cdCAgICAgICAgICAgIDB4MTogMHg4MDAwLFxyXG5cdCAgICAgICAgICAgIDB4MTAwMDAwMDE6IDB4MixcclxuXHQgICAgICAgICAgICAweDIwMDAwMDAxOiAweDgwODIwMCxcclxuXHQgICAgICAgICAgICAweDMwMDAwMDAxOiAweDgwMDAwMCxcclxuXHQgICAgICAgICAgICAweDQwMDAwMDAxOiAweDgwODAwMixcclxuXHQgICAgICAgICAgICAweDUwMDAwMDAxOiAweDgyMDAsXHJcblx0ICAgICAgICAgICAgMHg2MDAwMDAwMTogMHgyMDAsXHJcblx0ICAgICAgICAgICAgMHg3MDAwMDAwMTogMHg4MDAyMDIsXHJcblx0ICAgICAgICAgICAgMHg4MDAwMDAwMTogMHg4MDgyMDIsXHJcblx0ICAgICAgICAgICAgMHg5MDAwMDAwMTogMHg4MDgwMDAsXHJcblx0ICAgICAgICAgICAgMHhhMDAwMDAwMTogMHg4MDAwMDIsXHJcblx0ICAgICAgICAgICAgMHhiMDAwMDAwMTogMHg4MjAyLFxyXG5cdCAgICAgICAgICAgIDB4YzAwMDAwMDE6IDB4MjAyLFxyXG5cdCAgICAgICAgICAgIDB4ZDAwMDAwMDE6IDB4ODAwMjAwLFxyXG5cdCAgICAgICAgICAgIDB4ZTAwMDAwMDE6IDB4ODAwMixcclxuXHQgICAgICAgICAgICAweGYwMDAwMDAxOiAweDAsXHJcblx0ICAgICAgICAgICAgMHg4MDAwMDAxOiAweDgwODIwMixcclxuXHQgICAgICAgICAgICAweDE4MDAwMDAxOiAweDgwODAwMCxcclxuXHQgICAgICAgICAgICAweDI4MDAwMDAxOiAweDgwMDAwMCxcclxuXHQgICAgICAgICAgICAweDM4MDAwMDAxOiAweDIwMCxcclxuXHQgICAgICAgICAgICAweDQ4MDAwMDAxOiAweDgwMDAsXHJcblx0ICAgICAgICAgICAgMHg1ODAwMDAwMTogMHg4MDAwMDIsXHJcblx0ICAgICAgICAgICAgMHg2ODAwMDAwMTogMHgyLFxyXG5cdCAgICAgICAgICAgIDB4NzgwMDAwMDE6IDB4ODIwMixcclxuXHQgICAgICAgICAgICAweDg4MDAwMDAxOiAweDgwMDIsXHJcblx0ICAgICAgICAgICAgMHg5ODAwMDAwMTogMHg4MDAyMDIsXHJcblx0ICAgICAgICAgICAgMHhhODAwMDAwMTogMHgyMDIsXHJcblx0ICAgICAgICAgICAgMHhiODAwMDAwMTogMHg4MDgyMDAsXHJcblx0ICAgICAgICAgICAgMHhjODAwMDAwMTogMHg4MDAyMDAsXHJcblx0ICAgICAgICAgICAgMHhkODAwMDAwMTogMHgwLFxyXG5cdCAgICAgICAgICAgIDB4ZTgwMDAwMDE6IDB4ODIwMCxcclxuXHQgICAgICAgICAgICAweGY4MDAwMDAxOiAweDgwODAwMlxyXG5cdCAgICAgICAgfSxcclxuXHQgICAgICAgIHtcclxuXHQgICAgICAgICAgICAweDA6IDB4NDAwODQwMTAsXHJcblx0ICAgICAgICAgICAgMHgxMDAwMDAwOiAweDQwMDAsXHJcblx0ICAgICAgICAgICAgMHgyMDAwMDAwOiAweDgwMDAwLFxyXG5cdCAgICAgICAgICAgIDB4MzAwMDAwMDogMHg0MDA4MDAxMCxcclxuXHQgICAgICAgICAgICAweDQwMDAwMDA6IDB4NDAwMDAwMTAsXHJcblx0ICAgICAgICAgICAgMHg1MDAwMDAwOiAweDQwMDg0MDAwLFxyXG5cdCAgICAgICAgICAgIDB4NjAwMDAwMDogMHg0MDAwNDAwMCxcclxuXHQgICAgICAgICAgICAweDcwMDAwMDA6IDB4MTAsXHJcblx0ICAgICAgICAgICAgMHg4MDAwMDAwOiAweDg0MDAwLFxyXG5cdCAgICAgICAgICAgIDB4OTAwMDAwMDogMHg0MDAwNDAxMCxcclxuXHQgICAgICAgICAgICAweGEwMDAwMDA6IDB4NDAwMDAwMDAsXHJcblx0ICAgICAgICAgICAgMHhiMDAwMDAwOiAweDg0MDEwLFxyXG5cdCAgICAgICAgICAgIDB4YzAwMDAwMDogMHg4MDAxMCxcclxuXHQgICAgICAgICAgICAweGQwMDAwMDA6IDB4MCxcclxuXHQgICAgICAgICAgICAweGUwMDAwMDA6IDB4NDAxMCxcclxuXHQgICAgICAgICAgICAweGYwMDAwMDA6IDB4NDAwODAwMDAsXHJcblx0ICAgICAgICAgICAgMHg4MDAwMDA6IDB4NDAwMDQwMDAsXHJcblx0ICAgICAgICAgICAgMHgxODAwMDAwOiAweDg0MDEwLFxyXG5cdCAgICAgICAgICAgIDB4MjgwMDAwMDogMHgxMCxcclxuXHQgICAgICAgICAgICAweDM4MDAwMDA6IDB4NDAwMDQwMTAsXHJcblx0ICAgICAgICAgICAgMHg0ODAwMDAwOiAweDQwMDg0MDEwLFxyXG5cdCAgICAgICAgICAgIDB4NTgwMDAwMDogMHg0MDAwMDAwMCxcclxuXHQgICAgICAgICAgICAweDY4MDAwMDA6IDB4ODAwMDAsXHJcblx0ICAgICAgICAgICAgMHg3ODAwMDAwOiAweDQwMDgwMDEwLFxyXG5cdCAgICAgICAgICAgIDB4ODgwMDAwMDogMHg4MDAxMCxcclxuXHQgICAgICAgICAgICAweDk4MDAwMDA6IDB4MCxcclxuXHQgICAgICAgICAgICAweGE4MDAwMDA6IDB4NDAwMCxcclxuXHQgICAgICAgICAgICAweGI4MDAwMDA6IDB4NDAwODAwMDAsXHJcblx0ICAgICAgICAgICAgMHhjODAwMDAwOiAweDQwMDAwMDEwLFxyXG5cdCAgICAgICAgICAgIDB4ZDgwMDAwMDogMHg4NDAwMCxcclxuXHQgICAgICAgICAgICAweGU4MDAwMDA6IDB4NDAwODQwMDAsXHJcblx0ICAgICAgICAgICAgMHhmODAwMDAwOiAweDQwMTAsXHJcblx0ICAgICAgICAgICAgMHgxMDAwMDAwMDogMHgwLFxyXG5cdCAgICAgICAgICAgIDB4MTEwMDAwMDA6IDB4NDAwODAwMTAsXHJcblx0ICAgICAgICAgICAgMHgxMjAwMDAwMDogMHg0MDAwNDAxMCxcclxuXHQgICAgICAgICAgICAweDEzMDAwMDAwOiAweDQwMDg0MDAwLFxyXG5cdCAgICAgICAgICAgIDB4MTQwMDAwMDA6IDB4NDAwODAwMDAsXHJcblx0ICAgICAgICAgICAgMHgxNTAwMDAwMDogMHgxMCxcclxuXHQgICAgICAgICAgICAweDE2MDAwMDAwOiAweDg0MDEwLFxyXG5cdCAgICAgICAgICAgIDB4MTcwMDAwMDA6IDB4NDAwMCxcclxuXHQgICAgICAgICAgICAweDE4MDAwMDAwOiAweDQwMTAsXHJcblx0ICAgICAgICAgICAgMHgxOTAwMDAwMDogMHg4MDAwMCxcclxuXHQgICAgICAgICAgICAweDFhMDAwMDAwOiAweDgwMDEwLFxyXG5cdCAgICAgICAgICAgIDB4MWIwMDAwMDA6IDB4NDAwMDAwMTAsXHJcblx0ICAgICAgICAgICAgMHgxYzAwMDAwMDogMHg4NDAwMCxcclxuXHQgICAgICAgICAgICAweDFkMDAwMDAwOiAweDQwMDA0MDAwLFxyXG5cdCAgICAgICAgICAgIDB4MWUwMDAwMDA6IDB4NDAwMDAwMDAsXHJcblx0ICAgICAgICAgICAgMHgxZjAwMDAwMDogMHg0MDA4NDAxMCxcclxuXHQgICAgICAgICAgICAweDEwODAwMDAwOiAweDg0MDEwLFxyXG5cdCAgICAgICAgICAgIDB4MTE4MDAwMDA6IDB4ODAwMDAsXHJcblx0ICAgICAgICAgICAgMHgxMjgwMDAwMDogMHg0MDA4MDAwMCxcclxuXHQgICAgICAgICAgICAweDEzODAwMDAwOiAweDQwMDAsXHJcblx0ICAgICAgICAgICAgMHgxNDgwMDAwMDogMHg0MDAwNDAwMCxcclxuXHQgICAgICAgICAgICAweDE1ODAwMDAwOiAweDQwMDg0MDEwLFxyXG5cdCAgICAgICAgICAgIDB4MTY4MDAwMDA6IDB4MTAsXHJcblx0ICAgICAgICAgICAgMHgxNzgwMDAwMDogMHg0MDAwMDAwMCxcclxuXHQgICAgICAgICAgICAweDE4ODAwMDAwOiAweDQwMDg0MDAwLFxyXG5cdCAgICAgICAgICAgIDB4MTk4MDAwMDA6IDB4NDAwMDAwMTAsXHJcblx0ICAgICAgICAgICAgMHgxYTgwMDAwMDogMHg0MDAwNDAxMCxcclxuXHQgICAgICAgICAgICAweDFiODAwMDAwOiAweDgwMDEwLFxyXG5cdCAgICAgICAgICAgIDB4MWM4MDAwMDA6IDB4MCxcclxuXHQgICAgICAgICAgICAweDFkODAwMDAwOiAweDQwMTAsXHJcblx0ICAgICAgICAgICAgMHgxZTgwMDAwMDogMHg0MDA4MDAxMCxcclxuXHQgICAgICAgICAgICAweDFmODAwMDAwOiAweDg0MDAwXHJcblx0ICAgICAgICB9LFxyXG5cdCAgICAgICAge1xyXG5cdCAgICAgICAgICAgIDB4MDogMHgxMDQsXHJcblx0ICAgICAgICAgICAgMHgxMDAwMDA6IDB4MCxcclxuXHQgICAgICAgICAgICAweDIwMDAwMDogMHg0MDAwMTAwLFxyXG5cdCAgICAgICAgICAgIDB4MzAwMDAwOiAweDEwMTA0LFxyXG5cdCAgICAgICAgICAgIDB4NDAwMDAwOiAweDEwMDA0LFxyXG5cdCAgICAgICAgICAgIDB4NTAwMDAwOiAweDQwMDAwMDQsXHJcblx0ICAgICAgICAgICAgMHg2MDAwMDA6IDB4NDAxMDEwNCxcclxuXHQgICAgICAgICAgICAweDcwMDAwMDogMHg0MDEwMDAwLFxyXG5cdCAgICAgICAgICAgIDB4ODAwMDAwOiAweDQwMDAwMDAsXHJcblx0ICAgICAgICAgICAgMHg5MDAwMDA6IDB4NDAxMDEwMCxcclxuXHQgICAgICAgICAgICAweGEwMDAwMDogMHgxMDEwMCxcclxuXHQgICAgICAgICAgICAweGIwMDAwMDogMHg0MDEwMDA0LFxyXG5cdCAgICAgICAgICAgIDB4YzAwMDAwOiAweDQwMDAxMDQsXHJcblx0ICAgICAgICAgICAgMHhkMDAwMDA6IDB4MTAwMDAsXHJcblx0ICAgICAgICAgICAgMHhlMDAwMDA6IDB4NCxcclxuXHQgICAgICAgICAgICAweGYwMDAwMDogMHgxMDAsXHJcblx0ICAgICAgICAgICAgMHg4MDAwMDogMHg0MDEwMTAwLFxyXG5cdCAgICAgICAgICAgIDB4MTgwMDAwOiAweDQwMTAwMDQsXHJcblx0ICAgICAgICAgICAgMHgyODAwMDA6IDB4MCxcclxuXHQgICAgICAgICAgICAweDM4MDAwMDogMHg0MDAwMTAwLFxyXG5cdCAgICAgICAgICAgIDB4NDgwMDAwOiAweDQwMDAwMDQsXHJcblx0ICAgICAgICAgICAgMHg1ODAwMDA6IDB4MTAwMDAsXHJcblx0ICAgICAgICAgICAgMHg2ODAwMDA6IDB4MTAwMDQsXHJcblx0ICAgICAgICAgICAgMHg3ODAwMDA6IDB4MTA0LFxyXG5cdCAgICAgICAgICAgIDB4ODgwMDAwOiAweDQsXHJcblx0ICAgICAgICAgICAgMHg5ODAwMDA6IDB4MTAwLFxyXG5cdCAgICAgICAgICAgIDB4YTgwMDAwOiAweDQwMTAwMDAsXHJcblx0ICAgICAgICAgICAgMHhiODAwMDA6IDB4MTAxMDQsXHJcblx0ICAgICAgICAgICAgMHhjODAwMDA6IDB4MTAxMDAsXHJcblx0ICAgICAgICAgICAgMHhkODAwMDA6IDB4NDAwMDEwNCxcclxuXHQgICAgICAgICAgICAweGU4MDAwMDogMHg0MDEwMTA0LFxyXG5cdCAgICAgICAgICAgIDB4ZjgwMDAwOiAweDQwMDAwMDAsXHJcblx0ICAgICAgICAgICAgMHgxMDAwMDAwOiAweDQwMTAxMDAsXHJcblx0ICAgICAgICAgICAgMHgxMTAwMDAwOiAweDEwMDA0LFxyXG5cdCAgICAgICAgICAgIDB4MTIwMDAwMDogMHgxMDAwMCxcclxuXHQgICAgICAgICAgICAweDEzMDAwMDA6IDB4NDAwMDEwMCxcclxuXHQgICAgICAgICAgICAweDE0MDAwMDA6IDB4MTAwLFxyXG5cdCAgICAgICAgICAgIDB4MTUwMDAwMDogMHg0MDEwMTA0LFxyXG5cdCAgICAgICAgICAgIDB4MTYwMDAwMDogMHg0MDAwMDA0LFxyXG5cdCAgICAgICAgICAgIDB4MTcwMDAwMDogMHgwLFxyXG5cdCAgICAgICAgICAgIDB4MTgwMDAwMDogMHg0MDAwMTA0LFxyXG5cdCAgICAgICAgICAgIDB4MTkwMDAwMDogMHg0MDAwMDAwLFxyXG5cdCAgICAgICAgICAgIDB4MWEwMDAwMDogMHg0LFxyXG5cdCAgICAgICAgICAgIDB4MWIwMDAwMDogMHgxMDEwMCxcclxuXHQgICAgICAgICAgICAweDFjMDAwMDA6IDB4NDAxMDAwMCxcclxuXHQgICAgICAgICAgICAweDFkMDAwMDA6IDB4MTA0LFxyXG5cdCAgICAgICAgICAgIDB4MWUwMDAwMDogMHgxMDEwNCxcclxuXHQgICAgICAgICAgICAweDFmMDAwMDA6IDB4NDAxMDAwNCxcclxuXHQgICAgICAgICAgICAweDEwODAwMDA6IDB4NDAwMDAwMCxcclxuXHQgICAgICAgICAgICAweDExODAwMDA6IDB4MTA0LFxyXG5cdCAgICAgICAgICAgIDB4MTI4MDAwMDogMHg0MDEwMTAwLFxyXG5cdCAgICAgICAgICAgIDB4MTM4MDAwMDogMHgwLFxyXG5cdCAgICAgICAgICAgIDB4MTQ4MDAwMDogMHgxMDAwNCxcclxuXHQgICAgICAgICAgICAweDE1ODAwMDA6IDB4NDAwMDEwMCxcclxuXHQgICAgICAgICAgICAweDE2ODAwMDA6IDB4MTAwLFxyXG5cdCAgICAgICAgICAgIDB4MTc4MDAwMDogMHg0MDEwMDA0LFxyXG5cdCAgICAgICAgICAgIDB4MTg4MDAwMDogMHgxMDAwMCxcclxuXHQgICAgICAgICAgICAweDE5ODAwMDA6IDB4NDAxMDEwNCxcclxuXHQgICAgICAgICAgICAweDFhODAwMDA6IDB4MTAxMDQsXHJcblx0ICAgICAgICAgICAgMHgxYjgwMDAwOiAweDQwMDAwMDQsXHJcblx0ICAgICAgICAgICAgMHgxYzgwMDAwOiAweDQwMDAxMDQsXHJcblx0ICAgICAgICAgICAgMHgxZDgwMDAwOiAweDQwMTAwMDAsXHJcblx0ICAgICAgICAgICAgMHgxZTgwMDAwOiAweDQsXHJcblx0ICAgICAgICAgICAgMHgxZjgwMDAwOiAweDEwMTAwXHJcblx0ICAgICAgICB9LFxyXG5cdCAgICAgICAge1xyXG5cdCAgICAgICAgICAgIDB4MDogMHg4MDQwMTAwMCxcclxuXHQgICAgICAgICAgICAweDEwMDAwOiAweDgwMDAxMDQwLFxyXG5cdCAgICAgICAgICAgIDB4MjAwMDA6IDB4NDAxMDQwLFxyXG5cdCAgICAgICAgICAgIDB4MzAwMDA6IDB4ODA0MDAwMDAsXHJcblx0ICAgICAgICAgICAgMHg0MDAwMDogMHgwLFxyXG5cdCAgICAgICAgICAgIDB4NTAwMDA6IDB4NDAxMDAwLFxyXG5cdCAgICAgICAgICAgIDB4NjAwMDA6IDB4ODAwMDAwNDAsXHJcblx0ICAgICAgICAgICAgMHg3MDAwMDogMHg0MDAwNDAsXHJcblx0ICAgICAgICAgICAgMHg4MDAwMDogMHg4MDAwMDAwMCxcclxuXHQgICAgICAgICAgICAweDkwMDAwOiAweDQwMDAwMCxcclxuXHQgICAgICAgICAgICAweGEwMDAwOiAweDQwLFxyXG5cdCAgICAgICAgICAgIDB4YjAwMDA6IDB4ODAwMDEwMDAsXHJcblx0ICAgICAgICAgICAgMHhjMDAwMDogMHg4MDQwMDA0MCxcclxuXHQgICAgICAgICAgICAweGQwMDAwOiAweDEwNDAsXHJcblx0ICAgICAgICAgICAgMHhlMDAwMDogMHgxMDAwLFxyXG5cdCAgICAgICAgICAgIDB4ZjAwMDA6IDB4ODA0MDEwNDAsXHJcblx0ICAgICAgICAgICAgMHg4MDAwOiAweDgwMDAxMDQwLFxyXG5cdCAgICAgICAgICAgIDB4MTgwMDA6IDB4NDAsXHJcblx0ICAgICAgICAgICAgMHgyODAwMDogMHg4MDQwMDA0MCxcclxuXHQgICAgICAgICAgICAweDM4MDAwOiAweDgwMDAxMDAwLFxyXG5cdCAgICAgICAgICAgIDB4NDgwMDA6IDB4NDAxMDAwLFxyXG5cdCAgICAgICAgICAgIDB4NTgwMDA6IDB4ODA0MDEwNDAsXHJcblx0ICAgICAgICAgICAgMHg2ODAwMDogMHgwLFxyXG5cdCAgICAgICAgICAgIDB4NzgwMDA6IDB4ODA0MDAwMDAsXHJcblx0ICAgICAgICAgICAgMHg4ODAwMDogMHgxMDAwLFxyXG5cdCAgICAgICAgICAgIDB4OTgwMDA6IDB4ODA0MDEwMDAsXHJcblx0ICAgICAgICAgICAgMHhhODAwMDogMHg0MDAwMDAsXHJcblx0ICAgICAgICAgICAgMHhiODAwMDogMHgxMDQwLFxyXG5cdCAgICAgICAgICAgIDB4YzgwMDA6IDB4ODAwMDAwMDAsXHJcblx0ICAgICAgICAgICAgMHhkODAwMDogMHg0MDAwNDAsXHJcblx0ICAgICAgICAgICAgMHhlODAwMDogMHg0MDEwNDAsXHJcblx0ICAgICAgICAgICAgMHhmODAwMDogMHg4MDAwMDA0MCxcclxuXHQgICAgICAgICAgICAweDEwMDAwMDogMHg0MDAwNDAsXHJcblx0ICAgICAgICAgICAgMHgxMTAwMDA6IDB4NDAxMDAwLFxyXG5cdCAgICAgICAgICAgIDB4MTIwMDAwOiAweDgwMDAwMDQwLFxyXG5cdCAgICAgICAgICAgIDB4MTMwMDAwOiAweDAsXHJcblx0ICAgICAgICAgICAgMHgxNDAwMDA6IDB4MTA0MCxcclxuXHQgICAgICAgICAgICAweDE1MDAwMDogMHg4MDQwMDA0MCxcclxuXHQgICAgICAgICAgICAweDE2MDAwMDogMHg4MDQwMTAwMCxcclxuXHQgICAgICAgICAgICAweDE3MDAwMDogMHg4MDAwMTA0MCxcclxuXHQgICAgICAgICAgICAweDE4MDAwMDogMHg4MDQwMTA0MCxcclxuXHQgICAgICAgICAgICAweDE5MDAwMDogMHg4MDAwMDAwMCxcclxuXHQgICAgICAgICAgICAweDFhMDAwMDogMHg4MDQwMDAwMCxcclxuXHQgICAgICAgICAgICAweDFiMDAwMDogMHg0MDEwNDAsXHJcblx0ICAgICAgICAgICAgMHgxYzAwMDA6IDB4ODAwMDEwMDAsXHJcblx0ICAgICAgICAgICAgMHgxZDAwMDA6IDB4NDAwMDAwLFxyXG5cdCAgICAgICAgICAgIDB4MWUwMDAwOiAweDQwLFxyXG5cdCAgICAgICAgICAgIDB4MWYwMDAwOiAweDEwMDAsXHJcblx0ICAgICAgICAgICAgMHgxMDgwMDA6IDB4ODA0MDAwMDAsXHJcblx0ICAgICAgICAgICAgMHgxMTgwMDA6IDB4ODA0MDEwNDAsXHJcblx0ICAgICAgICAgICAgMHgxMjgwMDA6IDB4MCxcclxuXHQgICAgICAgICAgICAweDEzODAwMDogMHg0MDEwMDAsXHJcblx0ICAgICAgICAgICAgMHgxNDgwMDA6IDB4NDAwMDQwLFxyXG5cdCAgICAgICAgICAgIDB4MTU4MDAwOiAweDgwMDAwMDAwLFxyXG5cdCAgICAgICAgICAgIDB4MTY4MDAwOiAweDgwMDAxMDQwLFxyXG5cdCAgICAgICAgICAgIDB4MTc4MDAwOiAweDQwLFxyXG5cdCAgICAgICAgICAgIDB4MTg4MDAwOiAweDgwMDAwMDQwLFxyXG5cdCAgICAgICAgICAgIDB4MTk4MDAwOiAweDEwMDAsXHJcblx0ICAgICAgICAgICAgMHgxYTgwMDA6IDB4ODAwMDEwMDAsXHJcblx0ICAgICAgICAgICAgMHgxYjgwMDA6IDB4ODA0MDAwNDAsXHJcblx0ICAgICAgICAgICAgMHgxYzgwMDA6IDB4MTA0MCxcclxuXHQgICAgICAgICAgICAweDFkODAwMDogMHg4MDQwMTAwMCxcclxuXHQgICAgICAgICAgICAweDFlODAwMDogMHg0MDAwMDAsXHJcblx0ICAgICAgICAgICAgMHgxZjgwMDA6IDB4NDAxMDQwXHJcblx0ICAgICAgICB9LFxyXG5cdCAgICAgICAge1xyXG5cdCAgICAgICAgICAgIDB4MDogMHg4MCxcclxuXHQgICAgICAgICAgICAweDEwMDA6IDB4MTA0MDAwMCxcclxuXHQgICAgICAgICAgICAweDIwMDA6IDB4NDAwMDAsXHJcblx0ICAgICAgICAgICAgMHgzMDAwOiAweDIwMDAwMDAwLFxyXG5cdCAgICAgICAgICAgIDB4NDAwMDogMHgyMDA0MDA4MCxcclxuXHQgICAgICAgICAgICAweDUwMDA6IDB4MTAwMDA4MCxcclxuXHQgICAgICAgICAgICAweDYwMDA6IDB4MjEwMDAwODAsXHJcblx0ICAgICAgICAgICAgMHg3MDAwOiAweDQwMDgwLFxyXG5cdCAgICAgICAgICAgIDB4ODAwMDogMHgxMDAwMDAwLFxyXG5cdCAgICAgICAgICAgIDB4OTAwMDogMHgyMDA0MDAwMCxcclxuXHQgICAgICAgICAgICAweGEwMDA6IDB4MjAwMDAwODAsXHJcblx0ICAgICAgICAgICAgMHhiMDAwOiAweDIxMDQwMDgwLFxyXG5cdCAgICAgICAgICAgIDB4YzAwMDogMHgyMTA0MDAwMCxcclxuXHQgICAgICAgICAgICAweGQwMDA6IDB4MCxcclxuXHQgICAgICAgICAgICAweGUwMDA6IDB4MTA0MDA4MCxcclxuXHQgICAgICAgICAgICAweGYwMDA6IDB4MjEwMDAwMDAsXHJcblx0ICAgICAgICAgICAgMHg4MDA6IDB4MTA0MDA4MCxcclxuXHQgICAgICAgICAgICAweDE4MDA6IDB4MjEwMDAwODAsXHJcblx0ICAgICAgICAgICAgMHgyODAwOiAweDgwLFxyXG5cdCAgICAgICAgICAgIDB4MzgwMDogMHgxMDQwMDAwLFxyXG5cdCAgICAgICAgICAgIDB4NDgwMDogMHg0MDAwMCxcclxuXHQgICAgICAgICAgICAweDU4MDA6IDB4MjAwNDAwODAsXHJcblx0ICAgICAgICAgICAgMHg2ODAwOiAweDIxMDQwMDAwLFxyXG5cdCAgICAgICAgICAgIDB4NzgwMDogMHgyMDAwMDAwMCxcclxuXHQgICAgICAgICAgICAweDg4MDA6IDB4MjAwNDAwMDAsXHJcblx0ICAgICAgICAgICAgMHg5ODAwOiAweDAsXHJcblx0ICAgICAgICAgICAgMHhhODAwOiAweDIxMDQwMDgwLFxyXG5cdCAgICAgICAgICAgIDB4YjgwMDogMHgxMDAwMDgwLFxyXG5cdCAgICAgICAgICAgIDB4YzgwMDogMHgyMDAwMDA4MCxcclxuXHQgICAgICAgICAgICAweGQ4MDA6IDB4MjEwMDAwMDAsXHJcblx0ICAgICAgICAgICAgMHhlODAwOiAweDEwMDAwMDAsXHJcblx0ICAgICAgICAgICAgMHhmODAwOiAweDQwMDgwLFxyXG5cdCAgICAgICAgICAgIDB4MTAwMDA6IDB4NDAwMDAsXHJcblx0ICAgICAgICAgICAgMHgxMTAwMDogMHg4MCxcclxuXHQgICAgICAgICAgICAweDEyMDAwOiAweDIwMDAwMDAwLFxyXG5cdCAgICAgICAgICAgIDB4MTMwMDA6IDB4MjEwMDAwODAsXHJcblx0ICAgICAgICAgICAgMHgxNDAwMDogMHgxMDAwMDgwLFxyXG5cdCAgICAgICAgICAgIDB4MTUwMDA6IDB4MjEwNDAwMDAsXHJcblx0ICAgICAgICAgICAgMHgxNjAwMDogMHgyMDA0MDA4MCxcclxuXHQgICAgICAgICAgICAweDE3MDAwOiAweDEwMDAwMDAsXHJcblx0ICAgICAgICAgICAgMHgxODAwMDogMHgyMTA0MDA4MCxcclxuXHQgICAgICAgICAgICAweDE5MDAwOiAweDIxMDAwMDAwLFxyXG5cdCAgICAgICAgICAgIDB4MWEwMDA6IDB4MTA0MDAwMCxcclxuXHQgICAgICAgICAgICAweDFiMDAwOiAweDIwMDQwMDAwLFxyXG5cdCAgICAgICAgICAgIDB4MWMwMDA6IDB4NDAwODAsXHJcblx0ICAgICAgICAgICAgMHgxZDAwMDogMHgyMDAwMDA4MCxcclxuXHQgICAgICAgICAgICAweDFlMDAwOiAweDAsXHJcblx0ICAgICAgICAgICAgMHgxZjAwMDogMHgxMDQwMDgwLFxyXG5cdCAgICAgICAgICAgIDB4MTA4MDA6IDB4MjEwMDAwODAsXHJcblx0ICAgICAgICAgICAgMHgxMTgwMDogMHgxMDAwMDAwLFxyXG5cdCAgICAgICAgICAgIDB4MTI4MDA6IDB4MTA0MDAwMCxcclxuXHQgICAgICAgICAgICAweDEzODAwOiAweDIwMDQwMDgwLFxyXG5cdCAgICAgICAgICAgIDB4MTQ4MDA6IDB4MjAwMDAwMDAsXHJcblx0ICAgICAgICAgICAgMHgxNTgwMDogMHgxMDQwMDgwLFxyXG5cdCAgICAgICAgICAgIDB4MTY4MDA6IDB4ODAsXHJcblx0ICAgICAgICAgICAgMHgxNzgwMDogMHgyMTA0MDAwMCxcclxuXHQgICAgICAgICAgICAweDE4ODAwOiAweDQwMDgwLFxyXG5cdCAgICAgICAgICAgIDB4MTk4MDA6IDB4MjEwNDAwODAsXHJcblx0ICAgICAgICAgICAgMHgxYTgwMDogMHgwLFxyXG5cdCAgICAgICAgICAgIDB4MWI4MDA6IDB4MjEwMDAwMDAsXHJcblx0ICAgICAgICAgICAgMHgxYzgwMDogMHgxMDAwMDgwLFxyXG5cdCAgICAgICAgICAgIDB4MWQ4MDA6IDB4NDAwMDAsXHJcblx0ICAgICAgICAgICAgMHgxZTgwMDogMHgyMDA0MDAwMCxcclxuXHQgICAgICAgICAgICAweDFmODAwOiAweDIwMDAwMDgwXHJcblx0ICAgICAgICB9LFxyXG5cdCAgICAgICAge1xyXG5cdCAgICAgICAgICAgIDB4MDogMHgxMDAwMDAwOCxcclxuXHQgICAgICAgICAgICAweDEwMDogMHgyMDAwLFxyXG5cdCAgICAgICAgICAgIDB4MjAwOiAweDEwMjAwMDAwLFxyXG5cdCAgICAgICAgICAgIDB4MzAwOiAweDEwMjAyMDA4LFxyXG5cdCAgICAgICAgICAgIDB4NDAwOiAweDEwMDAyMDAwLFxyXG5cdCAgICAgICAgICAgIDB4NTAwOiAweDIwMDAwMCxcclxuXHQgICAgICAgICAgICAweDYwMDogMHgyMDAwMDgsXHJcblx0ICAgICAgICAgICAgMHg3MDA6IDB4MTAwMDAwMDAsXHJcblx0ICAgICAgICAgICAgMHg4MDA6IDB4MCxcclxuXHQgICAgICAgICAgICAweDkwMDogMHgxMDAwMjAwOCxcclxuXHQgICAgICAgICAgICAweGEwMDogMHgyMDIwMDAsXHJcblx0ICAgICAgICAgICAgMHhiMDA6IDB4OCxcclxuXHQgICAgICAgICAgICAweGMwMDogMHgxMDIwMDAwOCxcclxuXHQgICAgICAgICAgICAweGQwMDogMHgyMDIwMDgsXHJcblx0ICAgICAgICAgICAgMHhlMDA6IDB4MjAwOCxcclxuXHQgICAgICAgICAgICAweGYwMDogMHgxMDIwMjAwMCxcclxuXHQgICAgICAgICAgICAweDgwOiAweDEwMjAwMDAwLFxyXG5cdCAgICAgICAgICAgIDB4MTgwOiAweDEwMjAyMDA4LFxyXG5cdCAgICAgICAgICAgIDB4MjgwOiAweDgsXHJcblx0ICAgICAgICAgICAgMHgzODA6IDB4MjAwMDAwLFxyXG5cdCAgICAgICAgICAgIDB4NDgwOiAweDIwMjAwOCxcclxuXHQgICAgICAgICAgICAweDU4MDogMHgxMDAwMDAwOCxcclxuXHQgICAgICAgICAgICAweDY4MDogMHgxMDAwMjAwMCxcclxuXHQgICAgICAgICAgICAweDc4MDogMHgyMDA4LFxyXG5cdCAgICAgICAgICAgIDB4ODgwOiAweDIwMDAwOCxcclxuXHQgICAgICAgICAgICAweDk4MDogMHgyMDAwLFxyXG5cdCAgICAgICAgICAgIDB4YTgwOiAweDEwMDAyMDA4LFxyXG5cdCAgICAgICAgICAgIDB4YjgwOiAweDEwMjAwMDA4LFxyXG5cdCAgICAgICAgICAgIDB4YzgwOiAweDAsXHJcblx0ICAgICAgICAgICAgMHhkODA6IDB4MTAyMDIwMDAsXHJcblx0ICAgICAgICAgICAgMHhlODA6IDB4MjAyMDAwLFxyXG5cdCAgICAgICAgICAgIDB4ZjgwOiAweDEwMDAwMDAwLFxyXG5cdCAgICAgICAgICAgIDB4MTAwMDogMHgxMDAwMjAwMCxcclxuXHQgICAgICAgICAgICAweDExMDA6IDB4MTAyMDAwMDgsXHJcblx0ICAgICAgICAgICAgMHgxMjAwOiAweDEwMjAyMDA4LFxyXG5cdCAgICAgICAgICAgIDB4MTMwMDogMHgyMDA4LFxyXG5cdCAgICAgICAgICAgIDB4MTQwMDogMHgyMDAwMDAsXHJcblx0ICAgICAgICAgICAgMHgxNTAwOiAweDEwMDAwMDAwLFxyXG5cdCAgICAgICAgICAgIDB4MTYwMDogMHgxMDAwMDAwOCxcclxuXHQgICAgICAgICAgICAweDE3MDA6IDB4MjAyMDAwLFxyXG5cdCAgICAgICAgICAgIDB4MTgwMDogMHgyMDIwMDgsXHJcblx0ICAgICAgICAgICAgMHgxOTAwOiAweDAsXHJcblx0ICAgICAgICAgICAgMHgxYTAwOiAweDgsXHJcblx0ICAgICAgICAgICAgMHgxYjAwOiAweDEwMjAwMDAwLFxyXG5cdCAgICAgICAgICAgIDB4MWMwMDogMHgyMDAwLFxyXG5cdCAgICAgICAgICAgIDB4MWQwMDogMHgxMDAwMjAwOCxcclxuXHQgICAgICAgICAgICAweDFlMDA6IDB4MTAyMDIwMDAsXHJcblx0ICAgICAgICAgICAgMHgxZjAwOiAweDIwMDAwOCxcclxuXHQgICAgICAgICAgICAweDEwODA6IDB4OCxcclxuXHQgICAgICAgICAgICAweDExODA6IDB4MjAyMDAwLFxyXG5cdCAgICAgICAgICAgIDB4MTI4MDogMHgyMDAwMDAsXHJcblx0ICAgICAgICAgICAgMHgxMzgwOiAweDEwMDAwMDA4LFxyXG5cdCAgICAgICAgICAgIDB4MTQ4MDogMHgxMDAwMjAwMCxcclxuXHQgICAgICAgICAgICAweDE1ODA6IDB4MjAwOCxcclxuXHQgICAgICAgICAgICAweDE2ODA6IDB4MTAyMDIwMDgsXHJcblx0ICAgICAgICAgICAgMHgxNzgwOiAweDEwMjAwMDAwLFxyXG5cdCAgICAgICAgICAgIDB4MTg4MDogMHgxMDIwMjAwMCxcclxuXHQgICAgICAgICAgICAweDE5ODA6IDB4MTAyMDAwMDgsXHJcblx0ICAgICAgICAgICAgMHgxYTgwOiAweDIwMDAsXHJcblx0ICAgICAgICAgICAgMHgxYjgwOiAweDIwMjAwOCxcclxuXHQgICAgICAgICAgICAweDFjODA6IDB4MjAwMDA4LFxyXG5cdCAgICAgICAgICAgIDB4MWQ4MDogMHgwLFxyXG5cdCAgICAgICAgICAgIDB4MWU4MDogMHgxMDAwMDAwMCxcclxuXHQgICAgICAgICAgICAweDFmODA6IDB4MTAwMDIwMDhcclxuXHQgICAgICAgIH0sXHJcblx0ICAgICAgICB7XHJcblx0ICAgICAgICAgICAgMHgwOiAweDEwMDAwMCxcclxuXHQgICAgICAgICAgICAweDEwOiAweDIwMDA0MDEsXHJcblx0ICAgICAgICAgICAgMHgyMDogMHg0MDAsXHJcblx0ICAgICAgICAgICAgMHgzMDogMHgxMDA0MDEsXHJcblx0ICAgICAgICAgICAgMHg0MDogMHgyMTAwNDAxLFxyXG5cdCAgICAgICAgICAgIDB4NTA6IDB4MCxcclxuXHQgICAgICAgICAgICAweDYwOiAweDEsXHJcblx0ICAgICAgICAgICAgMHg3MDogMHgyMTAwMDAxLFxyXG5cdCAgICAgICAgICAgIDB4ODA6IDB4MjAwMDQwMCxcclxuXHQgICAgICAgICAgICAweDkwOiAweDEwMDAwMSxcclxuXHQgICAgICAgICAgICAweGEwOiAweDIwMDAwMDEsXHJcblx0ICAgICAgICAgICAgMHhiMDogMHgyMTAwNDAwLFxyXG5cdCAgICAgICAgICAgIDB4YzA6IDB4MjEwMDAwMCxcclxuXHQgICAgICAgICAgICAweGQwOiAweDQwMSxcclxuXHQgICAgICAgICAgICAweGUwOiAweDEwMDQwMCxcclxuXHQgICAgICAgICAgICAweGYwOiAweDIwMDAwMDAsXHJcblx0ICAgICAgICAgICAgMHg4OiAweDIxMDAwMDEsXHJcblx0ICAgICAgICAgICAgMHgxODogMHgwLFxyXG5cdCAgICAgICAgICAgIDB4Mjg6IDB4MjAwMDQwMSxcclxuXHQgICAgICAgICAgICAweDM4OiAweDIxMDA0MDAsXHJcblx0ICAgICAgICAgICAgMHg0ODogMHgxMDAwMDAsXHJcblx0ICAgICAgICAgICAgMHg1ODogMHgyMDAwMDAxLFxyXG5cdCAgICAgICAgICAgIDB4Njg6IDB4MjAwMDAwMCxcclxuXHQgICAgICAgICAgICAweDc4OiAweDQwMSxcclxuXHQgICAgICAgICAgICAweDg4OiAweDEwMDQwMSxcclxuXHQgICAgICAgICAgICAweDk4OiAweDIwMDA0MDAsXHJcblx0ICAgICAgICAgICAgMHhhODogMHgyMTAwMDAwLFxyXG5cdCAgICAgICAgICAgIDB4Yjg6IDB4MTAwMDAxLFxyXG5cdCAgICAgICAgICAgIDB4Yzg6IDB4NDAwLFxyXG5cdCAgICAgICAgICAgIDB4ZDg6IDB4MjEwMDQwMSxcclxuXHQgICAgICAgICAgICAweGU4OiAweDEsXHJcblx0ICAgICAgICAgICAgMHhmODogMHgxMDA0MDAsXHJcblx0ICAgICAgICAgICAgMHgxMDA6IDB4MjAwMDAwMCxcclxuXHQgICAgICAgICAgICAweDExMDogMHgxMDAwMDAsXHJcblx0ICAgICAgICAgICAgMHgxMjA6IDB4MjAwMDQwMSxcclxuXHQgICAgICAgICAgICAweDEzMDogMHgyMTAwMDAxLFxyXG5cdCAgICAgICAgICAgIDB4MTQwOiAweDEwMDAwMSxcclxuXHQgICAgICAgICAgICAweDE1MDogMHgyMDAwNDAwLFxyXG5cdCAgICAgICAgICAgIDB4MTYwOiAweDIxMDA0MDAsXHJcblx0ICAgICAgICAgICAgMHgxNzA6IDB4MTAwNDAxLFxyXG5cdCAgICAgICAgICAgIDB4MTgwOiAweDQwMSxcclxuXHQgICAgICAgICAgICAweDE5MDogMHgyMTAwNDAxLFxyXG5cdCAgICAgICAgICAgIDB4MWEwOiAweDEwMDQwMCxcclxuXHQgICAgICAgICAgICAweDFiMDogMHgxLFxyXG5cdCAgICAgICAgICAgIDB4MWMwOiAweDAsXHJcblx0ICAgICAgICAgICAgMHgxZDA6IDB4MjEwMDAwMCxcclxuXHQgICAgICAgICAgICAweDFlMDogMHgyMDAwMDAxLFxyXG5cdCAgICAgICAgICAgIDB4MWYwOiAweDQwMCxcclxuXHQgICAgICAgICAgICAweDEwODogMHgxMDA0MDAsXHJcblx0ICAgICAgICAgICAgMHgxMTg6IDB4MjAwMDQwMSxcclxuXHQgICAgICAgICAgICAweDEyODogMHgyMTAwMDAxLFxyXG5cdCAgICAgICAgICAgIDB4MTM4OiAweDEsXHJcblx0ICAgICAgICAgICAgMHgxNDg6IDB4MjAwMDAwMCxcclxuXHQgICAgICAgICAgICAweDE1ODogMHgxMDAwMDAsXHJcblx0ICAgICAgICAgICAgMHgxNjg6IDB4NDAxLFxyXG5cdCAgICAgICAgICAgIDB4MTc4OiAweDIxMDA0MDAsXHJcblx0ICAgICAgICAgICAgMHgxODg6IDB4MjAwMDAwMSxcclxuXHQgICAgICAgICAgICAweDE5ODogMHgyMTAwMDAwLFxyXG5cdCAgICAgICAgICAgIDB4MWE4OiAweDAsXHJcblx0ICAgICAgICAgICAgMHgxYjg6IDB4MjEwMDQwMSxcclxuXHQgICAgICAgICAgICAweDFjODogMHgxMDA0MDEsXHJcblx0ICAgICAgICAgICAgMHgxZDg6IDB4NDAwLFxyXG5cdCAgICAgICAgICAgIDB4MWU4OiAweDIwMDA0MDAsXHJcblx0ICAgICAgICAgICAgMHgxZjg6IDB4MTAwMDAxXHJcblx0ICAgICAgICB9LFxyXG5cdCAgICAgICAge1xyXG5cdCAgICAgICAgICAgIDB4MDogMHg4MDAwODIwLFxyXG5cdCAgICAgICAgICAgIDB4MTogMHgyMDAwMCxcclxuXHQgICAgICAgICAgICAweDI6IDB4ODAwMDAwMCxcclxuXHQgICAgICAgICAgICAweDM6IDB4MjAsXHJcblx0ICAgICAgICAgICAgMHg0OiAweDIwMDIwLFxyXG5cdCAgICAgICAgICAgIDB4NTogMHg4MDIwODIwLFxyXG5cdCAgICAgICAgICAgIDB4NjogMHg4MDIwODAwLFxyXG5cdCAgICAgICAgICAgIDB4NzogMHg4MDAsXHJcblx0ICAgICAgICAgICAgMHg4OiAweDgwMjAwMDAsXHJcblx0ICAgICAgICAgICAgMHg5OiAweDgwMDA4MDAsXHJcblx0ICAgICAgICAgICAgMHhhOiAweDIwODAwLFxyXG5cdCAgICAgICAgICAgIDB4YjogMHg4MDIwMDIwLFxyXG5cdCAgICAgICAgICAgIDB4YzogMHg4MjAsXHJcblx0ICAgICAgICAgICAgMHhkOiAweDAsXHJcblx0ICAgICAgICAgICAgMHhlOiAweDgwMDAwMjAsXHJcblx0ICAgICAgICAgICAgMHhmOiAweDIwODIwLFxyXG5cdCAgICAgICAgICAgIDB4ODAwMDAwMDA6IDB4ODAwLFxyXG5cdCAgICAgICAgICAgIDB4ODAwMDAwMDE6IDB4ODAyMDgyMCxcclxuXHQgICAgICAgICAgICAweDgwMDAwMDAyOiAweDgwMDA4MjAsXHJcblx0ICAgICAgICAgICAgMHg4MDAwMDAwMzogMHg4MDAwMDAwLFxyXG5cdCAgICAgICAgICAgIDB4ODAwMDAwMDQ6IDB4ODAyMDAwMCxcclxuXHQgICAgICAgICAgICAweDgwMDAwMDA1OiAweDIwODAwLFxyXG5cdCAgICAgICAgICAgIDB4ODAwMDAwMDY6IDB4MjA4MjAsXHJcblx0ICAgICAgICAgICAgMHg4MDAwMDAwNzogMHgyMCxcclxuXHQgICAgICAgICAgICAweDgwMDAwMDA4OiAweDgwMDAwMjAsXHJcblx0ICAgICAgICAgICAgMHg4MDAwMDAwOTogMHg4MjAsXHJcblx0ICAgICAgICAgICAgMHg4MDAwMDAwYTogMHgyMDAyMCxcclxuXHQgICAgICAgICAgICAweDgwMDAwMDBiOiAweDgwMjA4MDAsXHJcblx0ICAgICAgICAgICAgMHg4MDAwMDAwYzogMHgwLFxyXG5cdCAgICAgICAgICAgIDB4ODAwMDAwMGQ6IDB4ODAyMDAyMCxcclxuXHQgICAgICAgICAgICAweDgwMDAwMDBlOiAweDgwMDA4MDAsXHJcblx0ICAgICAgICAgICAgMHg4MDAwMDAwZjogMHgyMDAwMCxcclxuXHQgICAgICAgICAgICAweDEwOiAweDIwODIwLFxyXG5cdCAgICAgICAgICAgIDB4MTE6IDB4ODAyMDgwMCxcclxuXHQgICAgICAgICAgICAweDEyOiAweDIwLFxyXG5cdCAgICAgICAgICAgIDB4MTM6IDB4ODAwLFxyXG5cdCAgICAgICAgICAgIDB4MTQ6IDB4ODAwMDgwMCxcclxuXHQgICAgICAgICAgICAweDE1OiAweDgwMDAwMjAsXHJcblx0ICAgICAgICAgICAgMHgxNjogMHg4MDIwMDIwLFxyXG5cdCAgICAgICAgICAgIDB4MTc6IDB4MjAwMDAsXHJcblx0ICAgICAgICAgICAgMHgxODogMHgwLFxyXG5cdCAgICAgICAgICAgIDB4MTk6IDB4MjAwMjAsXHJcblx0ICAgICAgICAgICAgMHgxYTogMHg4MDIwMDAwLFxyXG5cdCAgICAgICAgICAgIDB4MWI6IDB4ODAwMDgyMCxcclxuXHQgICAgICAgICAgICAweDFjOiAweDgwMjA4MjAsXHJcblx0ICAgICAgICAgICAgMHgxZDogMHgyMDgwMCxcclxuXHQgICAgICAgICAgICAweDFlOiAweDgyMCxcclxuXHQgICAgICAgICAgICAweDFmOiAweDgwMDAwMDAsXHJcblx0ICAgICAgICAgICAgMHg4MDAwMDAxMDogMHgyMDAwMCxcclxuXHQgICAgICAgICAgICAweDgwMDAwMDExOiAweDgwMCxcclxuXHQgICAgICAgICAgICAweDgwMDAwMDEyOiAweDgwMjAwMjAsXHJcblx0ICAgICAgICAgICAgMHg4MDAwMDAxMzogMHgyMDgyMCxcclxuXHQgICAgICAgICAgICAweDgwMDAwMDE0OiAweDIwLFxyXG5cdCAgICAgICAgICAgIDB4ODAwMDAwMTU6IDB4ODAyMDAwMCxcclxuXHQgICAgICAgICAgICAweDgwMDAwMDE2OiAweDgwMDAwMDAsXHJcblx0ICAgICAgICAgICAgMHg4MDAwMDAxNzogMHg4MDAwODIwLFxyXG5cdCAgICAgICAgICAgIDB4ODAwMDAwMTg6IDB4ODAyMDgyMCxcclxuXHQgICAgICAgICAgICAweDgwMDAwMDE5OiAweDgwMDAwMjAsXHJcblx0ICAgICAgICAgICAgMHg4MDAwMDAxYTogMHg4MDAwODAwLFxyXG5cdCAgICAgICAgICAgIDB4ODAwMDAwMWI6IDB4MCxcclxuXHQgICAgICAgICAgICAweDgwMDAwMDFjOiAweDIwODAwLFxyXG5cdCAgICAgICAgICAgIDB4ODAwMDAwMWQ6IDB4ODIwLFxyXG5cdCAgICAgICAgICAgIDB4ODAwMDAwMWU6IDB4MjAwMjAsXHJcblx0ICAgICAgICAgICAgMHg4MDAwMDAxZjogMHg4MDIwODAwXHJcblx0ICAgICAgICB9XHJcblx0ICAgIF07XHJcblxyXG5cdCAgICAvLyBNYXNrcyB0aGF0IHNlbGVjdCB0aGUgU0JPWCBpbnB1dFxyXG5cdCAgICB2YXIgU0JPWF9NQVNLID0gW1xyXG5cdCAgICAgICAgMHhmODAwMDAwMSwgMHgxZjgwMDAwMCwgMHgwMWY4MDAwMCwgMHgwMDFmODAwMCxcclxuXHQgICAgICAgIDB4MDAwMWY4MDAsIDB4MDAwMDFmODAsIDB4MDAwMDAxZjgsIDB4ODAwMDAwMWZcclxuXHQgICAgXTtcclxuXHJcblx0ICAgIC8qKlxyXG5cdCAgICAgKiBERVMgYmxvY2sgY2lwaGVyIGFsZ29yaXRobS5cclxuXHQgICAgICovXHJcblx0ICAgIHZhciBERVMgPSBDX2FsZ28uREVTID0gQmxvY2tDaXBoZXIuZXh0ZW5kKHtcclxuXHQgICAgICAgIF9kb1Jlc2V0OiBmdW5jdGlvbiAoKSB7XHJcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXHJcblx0ICAgICAgICAgICAgdmFyIGtleSA9IHRoaXMuX2tleTtcclxuXHQgICAgICAgICAgICB2YXIga2V5V29yZHMgPSBrZXkud29yZHM7XHJcblxyXG5cdCAgICAgICAgICAgIC8vIFNlbGVjdCA1NiBiaXRzIGFjY29yZGluZyB0byBQQzFcclxuXHQgICAgICAgICAgICB2YXIga2V5Qml0cyA9IFtdO1xyXG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNTY7IGkrKykge1xyXG5cdCAgICAgICAgICAgICAgICB2YXIga2V5Qml0UG9zID0gUEMxW2ldIC0gMTtcclxuXHQgICAgICAgICAgICAgICAga2V5Qml0c1tpXSA9IChrZXlXb3Jkc1trZXlCaXRQb3MgPj4+IDVdID4+PiAoMzEgLSBrZXlCaXRQb3MgJSAzMikpICYgMTtcclxuXHQgICAgICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgICAgIC8vIEFzc2VtYmxlIDE2IHN1YmtleXNcclxuXHQgICAgICAgICAgICB2YXIgc3ViS2V5cyA9IHRoaXMuX3N1YktleXMgPSBbXTtcclxuXHQgICAgICAgICAgICBmb3IgKHZhciBuU3ViS2V5ID0gMDsgblN1YktleSA8IDE2OyBuU3ViS2V5KyspIHtcclxuXHQgICAgICAgICAgICAgICAgLy8gQ3JlYXRlIHN1YmtleVxyXG5cdCAgICAgICAgICAgICAgICB2YXIgc3ViS2V5ID0gc3ViS2V5c1tuU3ViS2V5XSA9IFtdO1xyXG5cclxuXHQgICAgICAgICAgICAgICAgLy8gU2hvcnRjdXRcclxuXHQgICAgICAgICAgICAgICAgdmFyIGJpdFNoaWZ0ID0gQklUX1NISUZUU1tuU3ViS2V5XTtcclxuXHJcblx0ICAgICAgICAgICAgICAgIC8vIFNlbGVjdCA0OCBiaXRzIGFjY29yZGluZyB0byBQQzJcclxuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAyNDsgaSsrKSB7XHJcblx0ICAgICAgICAgICAgICAgICAgICAvLyBTZWxlY3QgZnJvbSB0aGUgbGVmdCAyOCBrZXkgYml0c1xyXG5cdCAgICAgICAgICAgICAgICAgICAgc3ViS2V5WyhpIC8gNikgfCAwXSB8PSBrZXlCaXRzWygoUEMyW2ldIC0gMSkgKyBiaXRTaGlmdCkgJSAyOF0gPDwgKDMxIC0gaSAlIDYpO1xyXG5cclxuXHQgICAgICAgICAgICAgICAgICAgIC8vIFNlbGVjdCBmcm9tIHRoZSByaWdodCAyOCBrZXkgYml0c1xyXG5cdCAgICAgICAgICAgICAgICAgICAgc3ViS2V5WzQgKyAoKGkgLyA2KSB8IDApXSB8PSBrZXlCaXRzWzI4ICsgKCgoUEMyW2kgKyAyNF0gLSAxKSArIGJpdFNoaWZ0KSAlIDI4KV0gPDwgKDMxIC0gaSAlIDYpO1xyXG5cdCAgICAgICAgICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgICAgICAgICAvLyBTaW5jZSBlYWNoIHN1YmtleSBpcyBhcHBsaWVkIHRvIGFuIGV4cGFuZGVkIDMyLWJpdCBpbnB1dCxcclxuXHQgICAgICAgICAgICAgICAgLy8gdGhlIHN1YmtleSBjYW4gYmUgYnJva2VuIGludG8gOCB2YWx1ZXMgc2NhbGVkIHRvIDMyLWJpdHMsXHJcblx0ICAgICAgICAgICAgICAgIC8vIHdoaWNoIGFsbG93cyB0aGUga2V5IHRvIGJlIHVzZWQgd2l0aG91dCBleHBhbnNpb25cclxuXHQgICAgICAgICAgICAgICAgc3ViS2V5WzBdID0gKHN1YktleVswXSA8PCAxKSB8IChzdWJLZXlbMF0gPj4+IDMxKTtcclxuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCA3OyBpKyspIHtcclxuXHQgICAgICAgICAgICAgICAgICAgIHN1YktleVtpXSA9IHN1YktleVtpXSA+Pj4gKChpIC0gMSkgKiA0ICsgMyk7XHJcblx0ICAgICAgICAgICAgICAgIH1cclxuXHQgICAgICAgICAgICAgICAgc3ViS2V5WzddID0gKHN1YktleVs3XSA8PCA1KSB8IChzdWJLZXlbN10gPj4+IDI3KTtcclxuXHQgICAgICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgICAgIC8vIENvbXB1dGUgaW52ZXJzZSBzdWJrZXlzXHJcblx0ICAgICAgICAgICAgdmFyIGludlN1YktleXMgPSB0aGlzLl9pbnZTdWJLZXlzID0gW107XHJcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAxNjsgaSsrKSB7XHJcblx0ICAgICAgICAgICAgICAgIGludlN1YktleXNbaV0gPSBzdWJLZXlzWzE1IC0gaV07XHJcblx0ICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgfSxcclxuXHJcblx0ICAgICAgICBlbmNyeXB0QmxvY2s6IGZ1bmN0aW9uIChNLCBvZmZzZXQpIHtcclxuXHQgICAgICAgICAgICB0aGlzLl9kb0NyeXB0QmxvY2soTSwgb2Zmc2V0LCB0aGlzLl9zdWJLZXlzKTtcclxuXHQgICAgICAgIH0sXHJcblxyXG5cdCAgICAgICAgZGVjcnlwdEJsb2NrOiBmdW5jdGlvbiAoTSwgb2Zmc2V0KSB7XHJcblx0ICAgICAgICAgICAgdGhpcy5fZG9DcnlwdEJsb2NrKE0sIG9mZnNldCwgdGhpcy5faW52U3ViS2V5cyk7XHJcblx0ICAgICAgICB9LFxyXG5cclxuXHQgICAgICAgIF9kb0NyeXB0QmxvY2s6IGZ1bmN0aW9uIChNLCBvZmZzZXQsIHN1YktleXMpIHtcclxuXHQgICAgICAgICAgICAvLyBHZXQgaW5wdXRcclxuXHQgICAgICAgICAgICB0aGlzLl9sQmxvY2sgPSBNW29mZnNldF07XHJcblx0ICAgICAgICAgICAgdGhpcy5fckJsb2NrID0gTVtvZmZzZXQgKyAxXTtcclxuXHJcblx0ICAgICAgICAgICAgLy8gSW5pdGlhbCBwZXJtdXRhdGlvblxyXG5cdCAgICAgICAgICAgIGV4Y2hhbmdlTFIuY2FsbCh0aGlzLCA0LCAgMHgwZjBmMGYwZik7XHJcblx0ICAgICAgICAgICAgZXhjaGFuZ2VMUi5jYWxsKHRoaXMsIDE2LCAweDAwMDBmZmZmKTtcclxuXHQgICAgICAgICAgICBleGNoYW5nZVJMLmNhbGwodGhpcywgMiwgIDB4MzMzMzMzMzMpO1xyXG5cdCAgICAgICAgICAgIGV4Y2hhbmdlUkwuY2FsbCh0aGlzLCA4LCAgMHgwMGZmMDBmZik7XHJcblx0ICAgICAgICAgICAgZXhjaGFuZ2VMUi5jYWxsKHRoaXMsIDEsICAweDU1NTU1NTU1KTtcclxuXHJcblx0ICAgICAgICAgICAgLy8gUm91bmRzXHJcblx0ICAgICAgICAgICAgZm9yICh2YXIgcm91bmQgPSAwOyByb3VuZCA8IDE2OyByb3VuZCsrKSB7XHJcblx0ICAgICAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xyXG5cdCAgICAgICAgICAgICAgICB2YXIgc3ViS2V5ID0gc3ViS2V5c1tyb3VuZF07XHJcblx0ICAgICAgICAgICAgICAgIHZhciBsQmxvY2sgPSB0aGlzLl9sQmxvY2s7XHJcblx0ICAgICAgICAgICAgICAgIHZhciByQmxvY2sgPSB0aGlzLl9yQmxvY2s7XHJcblxyXG5cdCAgICAgICAgICAgICAgICAvLyBGZWlzdGVsIGZ1bmN0aW9uXHJcblx0ICAgICAgICAgICAgICAgIHZhciBmID0gMDtcclxuXHQgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA4OyBpKyspIHtcclxuXHQgICAgICAgICAgICAgICAgICAgIGYgfD0gU0JPWF9QW2ldWygockJsb2NrIF4gc3ViS2V5W2ldKSAmIFNCT1hfTUFTS1tpXSkgPj4+IDBdO1xyXG5cdCAgICAgICAgICAgICAgICB9XHJcblx0ICAgICAgICAgICAgICAgIHRoaXMuX2xCbG9jayA9IHJCbG9jaztcclxuXHQgICAgICAgICAgICAgICAgdGhpcy5fckJsb2NrID0gbEJsb2NrIF4gZjtcclxuXHQgICAgICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgICAgIC8vIFVuZG8gc3dhcCBmcm9tIGxhc3Qgcm91bmRcclxuXHQgICAgICAgICAgICB2YXIgdCA9IHRoaXMuX2xCbG9jaztcclxuXHQgICAgICAgICAgICB0aGlzLl9sQmxvY2sgPSB0aGlzLl9yQmxvY2s7XHJcblx0ICAgICAgICAgICAgdGhpcy5fckJsb2NrID0gdDtcclxuXHJcblx0ICAgICAgICAgICAgLy8gRmluYWwgcGVybXV0YXRpb25cclxuXHQgICAgICAgICAgICBleGNoYW5nZUxSLmNhbGwodGhpcywgMSwgIDB4NTU1NTU1NTUpO1xyXG5cdCAgICAgICAgICAgIGV4Y2hhbmdlUkwuY2FsbCh0aGlzLCA4LCAgMHgwMGZmMDBmZik7XHJcblx0ICAgICAgICAgICAgZXhjaGFuZ2VSTC5jYWxsKHRoaXMsIDIsICAweDMzMzMzMzMzKTtcclxuXHQgICAgICAgICAgICBleGNoYW5nZUxSLmNhbGwodGhpcywgMTYsIDB4MDAwMGZmZmYpO1xyXG5cdCAgICAgICAgICAgIGV4Y2hhbmdlTFIuY2FsbCh0aGlzLCA0LCAgMHgwZjBmMGYwZik7XHJcblxyXG5cdCAgICAgICAgICAgIC8vIFNldCBvdXRwdXRcclxuXHQgICAgICAgICAgICBNW29mZnNldF0gPSB0aGlzLl9sQmxvY2s7XHJcblx0ICAgICAgICAgICAgTVtvZmZzZXQgKyAxXSA9IHRoaXMuX3JCbG9jaztcclxuXHQgICAgICAgIH0sXHJcblxyXG5cdCAgICAgICAga2V5U2l6ZTogNjQvMzIsXHJcblxyXG5cdCAgICAgICAgaXZTaXplOiA2NC8zMixcclxuXHJcblx0ICAgICAgICBibG9ja1NpemU6IDY0LzMyXHJcblx0ICAgIH0pO1xyXG5cclxuXHQgICAgLy8gU3dhcCBiaXRzIGFjcm9zcyB0aGUgbGVmdCBhbmQgcmlnaHQgd29yZHNcclxuXHQgICAgZnVuY3Rpb24gZXhjaGFuZ2VMUihvZmZzZXQsIG1hc2spIHtcclxuXHQgICAgICAgIHZhciB0ID0gKCh0aGlzLl9sQmxvY2sgPj4+IG9mZnNldCkgXiB0aGlzLl9yQmxvY2spICYgbWFzaztcclxuXHQgICAgICAgIHRoaXMuX3JCbG9jayBePSB0O1xyXG5cdCAgICAgICAgdGhpcy5fbEJsb2NrIF49IHQgPDwgb2Zmc2V0O1xyXG5cdCAgICB9XHJcblxyXG5cdCAgICBmdW5jdGlvbiBleGNoYW5nZVJMKG9mZnNldCwgbWFzaykge1xyXG5cdCAgICAgICAgdmFyIHQgPSAoKHRoaXMuX3JCbG9jayA+Pj4gb2Zmc2V0KSBeIHRoaXMuX2xCbG9jaykgJiBtYXNrO1xyXG5cdCAgICAgICAgdGhpcy5fbEJsb2NrIF49IHQ7XHJcblx0ICAgICAgICB0aGlzLl9yQmxvY2sgXj0gdCA8PCBvZmZzZXQ7XHJcblx0ICAgIH1cclxuXHJcblx0ICAgIC8qKlxyXG5cdCAgICAgKiBTaG9ydGN1dCBmdW5jdGlvbnMgdG8gdGhlIGNpcGhlcidzIG9iamVjdCBpbnRlcmZhY2UuXHJcblx0ICAgICAqXHJcblx0ICAgICAqIEBleGFtcGxlXHJcblx0ICAgICAqXHJcblx0ICAgICAqICAgICB2YXIgY2lwaGVydGV4dCA9IENyeXB0b0pTLkRFUy5lbmNyeXB0KG1lc3NhZ2UsIGtleSwgY2ZnKTtcclxuXHQgICAgICogICAgIHZhciBwbGFpbnRleHQgID0gQ3J5cHRvSlMuREVTLmRlY3J5cHQoY2lwaGVydGV4dCwga2V5LCBjZmcpO1xyXG5cdCAgICAgKi9cclxuXHQgICAgQy5ERVMgPSBCbG9ja0NpcGhlci5fY3JlYXRlSGVscGVyKERFUyk7XHJcblxyXG5cdCAgICAvKipcclxuXHQgICAgICogVHJpcGxlLURFUyBibG9jayBjaXBoZXIgYWxnb3JpdGhtLlxyXG5cdCAgICAgKi9cclxuXHQgICAgdmFyIFRyaXBsZURFUyA9IENfYWxnby5UcmlwbGVERVMgPSBCbG9ja0NpcGhlci5leHRlbmQoe1xyXG5cdCAgICAgICAgX2RvUmVzZXQ6IGZ1bmN0aW9uICgpIHtcclxuXHQgICAgICAgICAgICAvLyBTaG9ydGN1dHNcclxuXHQgICAgICAgICAgICB2YXIga2V5ID0gdGhpcy5fa2V5O1xyXG5cdCAgICAgICAgICAgIHZhciBrZXlXb3JkcyA9IGtleS53b3JkcztcclxuXHJcblx0ICAgICAgICAgICAgLy8gQ3JlYXRlIERFUyBpbnN0YW5jZXNcclxuXHQgICAgICAgICAgICB0aGlzLl9kZXMxID0gREVTLmNyZWF0ZUVuY3J5cHRvcihXb3JkQXJyYXkuY3JlYXRlKGtleVdvcmRzLnNsaWNlKDAsIDIpKSk7XHJcblx0ICAgICAgICAgICAgdGhpcy5fZGVzMiA9IERFUy5jcmVhdGVFbmNyeXB0b3IoV29yZEFycmF5LmNyZWF0ZShrZXlXb3Jkcy5zbGljZSgyLCA0KSkpO1xyXG5cdCAgICAgICAgICAgIHRoaXMuX2RlczMgPSBERVMuY3JlYXRlRW5jcnlwdG9yKFdvcmRBcnJheS5jcmVhdGUoa2V5V29yZHMuc2xpY2UoNCwgNikpKTtcclxuXHQgICAgICAgIH0sXHJcblxyXG5cdCAgICAgICAgZW5jcnlwdEJsb2NrOiBmdW5jdGlvbiAoTSwgb2Zmc2V0KSB7XHJcblx0ICAgICAgICAgICAgdGhpcy5fZGVzMS5lbmNyeXB0QmxvY2soTSwgb2Zmc2V0KTtcclxuXHQgICAgICAgICAgICB0aGlzLl9kZXMyLmRlY3J5cHRCbG9jayhNLCBvZmZzZXQpO1xyXG5cdCAgICAgICAgICAgIHRoaXMuX2RlczMuZW5jcnlwdEJsb2NrKE0sIG9mZnNldCk7XHJcblx0ICAgICAgICB9LFxyXG5cclxuXHQgICAgICAgIGRlY3J5cHRCbG9jazogZnVuY3Rpb24gKE0sIG9mZnNldCkge1xyXG5cdCAgICAgICAgICAgIHRoaXMuX2RlczMuZGVjcnlwdEJsb2NrKE0sIG9mZnNldCk7XHJcblx0ICAgICAgICAgICAgdGhpcy5fZGVzMi5lbmNyeXB0QmxvY2soTSwgb2Zmc2V0KTtcclxuXHQgICAgICAgICAgICB0aGlzLl9kZXMxLmRlY3J5cHRCbG9jayhNLCBvZmZzZXQpO1xyXG5cdCAgICAgICAgfSxcclxuXHJcblx0ICAgICAgICBrZXlTaXplOiAxOTIvMzIsXHJcblxyXG5cdCAgICAgICAgaXZTaXplOiA2NC8zMixcclxuXHJcblx0ICAgICAgICBibG9ja1NpemU6IDY0LzMyXHJcblx0ICAgIH0pO1xyXG5cclxuXHQgICAgLyoqXHJcblx0ICAgICAqIFNob3J0Y3V0IGZ1bmN0aW9ucyB0byB0aGUgY2lwaGVyJ3Mgb2JqZWN0IGludGVyZmFjZS5cclxuXHQgICAgICpcclxuXHQgICAgICogQGV4YW1wbGVcclxuXHQgICAgICpcclxuXHQgICAgICogICAgIHZhciBjaXBoZXJ0ZXh0ID0gQ3J5cHRvSlMuVHJpcGxlREVTLmVuY3J5cHQobWVzc2FnZSwga2V5LCBjZmcpO1xyXG5cdCAgICAgKiAgICAgdmFyIHBsYWludGV4dCAgPSBDcnlwdG9KUy5UcmlwbGVERVMuZGVjcnlwdChjaXBoZXJ0ZXh0LCBrZXksIGNmZyk7XHJcblx0ICAgICAqL1xyXG5cdCAgICBDLlRyaXBsZURFUyA9IEJsb2NrQ2lwaGVyLl9jcmVhdGVIZWxwZXIoVHJpcGxlREVTKTtcclxuXHR9KCkpO1xyXG5cclxuXHJcblx0cmV0dXJuIENyeXB0b0pTLlRyaXBsZURFUztcclxuXHJcbn0pKTsiLCI7KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5LCB1bmRlZikge1xyXG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xyXG5cdFx0Ly8gQ29tbW9uSlNcclxuXHRcdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vY29yZVwiKSwgcmVxdWlyZShcIi4vZW5jLWJhc2U2NFwiKSwgcmVxdWlyZShcIi4vbWQ1XCIpLCByZXF1aXJlKFwiLi9ldnBrZGZcIiksIHJlcXVpcmUoXCIuL2NpcGhlci1jb3JlXCIpKTtcclxuXHR9XHJcblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcclxuXHRcdC8vIEFNRFxyXG5cdFx0ZGVmaW5lKFtcIi4vY29yZVwiLCBcIi4vZW5jLWJhc2U2NFwiLCBcIi4vbWQ1XCIsIFwiLi9ldnBrZGZcIiwgXCIuL2NpcGhlci1jb3JlXCJdLCBmYWN0b3J5KTtcclxuXHR9XHJcblx0ZWxzZSB7XHJcblx0XHQvLyBHbG9iYWwgKGJyb3dzZXIpXHJcblx0XHRmYWN0b3J5KHJvb3QuQ3J5cHRvSlMpO1xyXG5cdH1cclxufSh0aGlzLCBmdW5jdGlvbiAoQ3J5cHRvSlMpIHtcclxuXHJcblx0KGZ1bmN0aW9uICgpIHtcclxuXHQgICAgLy8gU2hvcnRjdXRzXHJcblx0ICAgIHZhciBDID0gQ3J5cHRvSlM7XHJcblx0ICAgIHZhciBDX2xpYiA9IEMubGliO1xyXG5cdCAgICB2YXIgU3RyZWFtQ2lwaGVyID0gQ19saWIuU3RyZWFtQ2lwaGVyO1xyXG5cdCAgICB2YXIgQ19hbGdvID0gQy5hbGdvO1xyXG5cclxuXHQgICAgLyoqXHJcblx0ICAgICAqIFJDNCBzdHJlYW0gY2lwaGVyIGFsZ29yaXRobS5cclxuXHQgICAgICovXHJcblx0ICAgIHZhciBSQzQgPSBDX2FsZ28uUkM0ID0gU3RyZWFtQ2lwaGVyLmV4dGVuZCh7XHJcblx0ICAgICAgICBfZG9SZXNldDogZnVuY3Rpb24gKCkge1xyXG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xyXG5cdCAgICAgICAgICAgIHZhciBrZXkgPSB0aGlzLl9rZXk7XHJcblx0ICAgICAgICAgICAgdmFyIGtleVdvcmRzID0ga2V5LndvcmRzO1xyXG5cdCAgICAgICAgICAgIHZhciBrZXlTaWdCeXRlcyA9IGtleS5zaWdCeXRlcztcclxuXHJcblx0ICAgICAgICAgICAgLy8gSW5pdCBzYm94XHJcblx0ICAgICAgICAgICAgdmFyIFMgPSB0aGlzLl9TID0gW107XHJcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7IGkrKykge1xyXG5cdCAgICAgICAgICAgICAgICBTW2ldID0gaTtcclxuXHQgICAgICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgICAgIC8vIEtleSBzZXR1cFxyXG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBqID0gMDsgaSA8IDI1NjsgaSsrKSB7XHJcblx0ICAgICAgICAgICAgICAgIHZhciBrZXlCeXRlSW5kZXggPSBpICUga2V5U2lnQnl0ZXM7XHJcblx0ICAgICAgICAgICAgICAgIHZhciBrZXlCeXRlID0gKGtleVdvcmRzW2tleUJ5dGVJbmRleCA+Pj4gMl0gPj4+ICgyNCAtIChrZXlCeXRlSW5kZXggJSA0KSAqIDgpKSAmIDB4ZmY7XHJcblxyXG5cdCAgICAgICAgICAgICAgICBqID0gKGogKyBTW2ldICsga2V5Qnl0ZSkgJSAyNTY7XHJcblxyXG5cdCAgICAgICAgICAgICAgICAvLyBTd2FwXHJcblx0ICAgICAgICAgICAgICAgIHZhciB0ID0gU1tpXTtcclxuXHQgICAgICAgICAgICAgICAgU1tpXSA9IFNbal07XHJcblx0ICAgICAgICAgICAgICAgIFNbal0gPSB0O1xyXG5cdCAgICAgICAgICAgIH1cclxuXHJcblx0ICAgICAgICAgICAgLy8gQ291bnRlcnNcclxuXHQgICAgICAgICAgICB0aGlzLl9pID0gdGhpcy5faiA9IDA7XHJcblx0ICAgICAgICB9LFxyXG5cclxuXHQgICAgICAgIF9kb1Byb2Nlc3NCbG9jazogZnVuY3Rpb24gKE0sIG9mZnNldCkge1xyXG5cdCAgICAgICAgICAgIE1bb2Zmc2V0XSBePSBnZW5lcmF0ZUtleXN0cmVhbVdvcmQuY2FsbCh0aGlzKTtcclxuXHQgICAgICAgIH0sXHJcblxyXG5cdCAgICAgICAga2V5U2l6ZTogMjU2LzMyLFxyXG5cclxuXHQgICAgICAgIGl2U2l6ZTogMFxyXG5cdCAgICB9KTtcclxuXHJcblx0ICAgIGZ1bmN0aW9uIGdlbmVyYXRlS2V5c3RyZWFtV29yZCgpIHtcclxuXHQgICAgICAgIC8vIFNob3J0Y3V0c1xyXG5cdCAgICAgICAgdmFyIFMgPSB0aGlzLl9TO1xyXG5cdCAgICAgICAgdmFyIGkgPSB0aGlzLl9pO1xyXG5cdCAgICAgICAgdmFyIGogPSB0aGlzLl9qO1xyXG5cclxuXHQgICAgICAgIC8vIEdlbmVyYXRlIGtleXN0cmVhbSB3b3JkXHJcblx0ICAgICAgICB2YXIga2V5c3RyZWFtV29yZCA9IDA7XHJcblx0ICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IDQ7IG4rKykge1xyXG5cdCAgICAgICAgICAgIGkgPSAoaSArIDEpICUgMjU2O1xyXG5cdCAgICAgICAgICAgIGogPSAoaiArIFNbaV0pICUgMjU2O1xyXG5cclxuXHQgICAgICAgICAgICAvLyBTd2FwXHJcblx0ICAgICAgICAgICAgdmFyIHQgPSBTW2ldO1xyXG5cdCAgICAgICAgICAgIFNbaV0gPSBTW2pdO1xyXG5cdCAgICAgICAgICAgIFNbal0gPSB0O1xyXG5cclxuXHQgICAgICAgICAgICBrZXlzdHJlYW1Xb3JkIHw9IFNbKFNbaV0gKyBTW2pdKSAlIDI1Nl0gPDwgKDI0IC0gbiAqIDgpO1xyXG5cdCAgICAgICAgfVxyXG5cclxuXHQgICAgICAgIC8vIFVwZGF0ZSBjb3VudGVyc1xyXG5cdCAgICAgICAgdGhpcy5faSA9IGk7XHJcblx0ICAgICAgICB0aGlzLl9qID0gajtcclxuXHJcblx0ICAgICAgICByZXR1cm4ga2V5c3RyZWFtV29yZDtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgLyoqXHJcblx0ICAgICAqIFNob3J0Y3V0IGZ1bmN0aW9ucyB0byB0aGUgY2lwaGVyJ3Mgb2JqZWN0IGludGVyZmFjZS5cclxuXHQgICAgICpcclxuXHQgICAgICogQGV4YW1wbGVcclxuXHQgICAgICpcclxuXHQgICAgICogICAgIHZhciBjaXBoZXJ0ZXh0ID0gQ3J5cHRvSlMuUkM0LmVuY3J5cHQobWVzc2FnZSwga2V5LCBjZmcpO1xyXG5cdCAgICAgKiAgICAgdmFyIHBsYWludGV4dCAgPSBDcnlwdG9KUy5SQzQuZGVjcnlwdChjaXBoZXJ0ZXh0LCBrZXksIGNmZyk7XHJcblx0ICAgICAqL1xyXG5cdCAgICBDLlJDNCA9IFN0cmVhbUNpcGhlci5fY3JlYXRlSGVscGVyKFJDNCk7XHJcblxyXG5cdCAgICAvKipcclxuXHQgICAgICogTW9kaWZpZWQgUkM0IHN0cmVhbSBjaXBoZXIgYWxnb3JpdGhtLlxyXG5cdCAgICAgKi9cclxuXHQgICAgdmFyIFJDNERyb3AgPSBDX2FsZ28uUkM0RHJvcCA9IFJDNC5leHRlbmQoe1xyXG5cdCAgICAgICAgLyoqXHJcblx0ICAgICAgICAgKiBDb25maWd1cmF0aW9uIG9wdGlvbnMuXHJcblx0ICAgICAgICAgKlxyXG5cdCAgICAgICAgICogQHByb3BlcnR5IHtudW1iZXJ9IGRyb3AgVGhlIG51bWJlciBvZiBrZXlzdHJlYW0gd29yZHMgdG8gZHJvcC4gRGVmYXVsdCAxOTJcclxuXHQgICAgICAgICAqL1xyXG5cdCAgICAgICAgY2ZnOiBSQzQuY2ZnLmV4dGVuZCh7XHJcblx0ICAgICAgICAgICAgZHJvcDogMTkyXHJcblx0ICAgICAgICB9KSxcclxuXHJcblx0ICAgICAgICBfZG9SZXNldDogZnVuY3Rpb24gKCkge1xyXG5cdCAgICAgICAgICAgIFJDNC5fZG9SZXNldC5jYWxsKHRoaXMpO1xyXG5cclxuXHQgICAgICAgICAgICAvLyBEcm9wXHJcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMuY2ZnLmRyb3A7IGkgPiAwOyBpLS0pIHtcclxuXHQgICAgICAgICAgICAgICAgZ2VuZXJhdGVLZXlzdHJlYW1Xb3JkLmNhbGwodGhpcyk7XHJcblx0ICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgfVxyXG5cdCAgICB9KTtcclxuXHJcblx0ICAgIC8qKlxyXG5cdCAgICAgKiBTaG9ydGN1dCBmdW5jdGlvbnMgdG8gdGhlIGNpcGhlcidzIG9iamVjdCBpbnRlcmZhY2UuXHJcblx0ICAgICAqXHJcblx0ICAgICAqIEBleGFtcGxlXHJcblx0ICAgICAqXHJcblx0ICAgICAqICAgICB2YXIgY2lwaGVydGV4dCA9IENyeXB0b0pTLlJDNERyb3AuZW5jcnlwdChtZXNzYWdlLCBrZXksIGNmZyk7XHJcblx0ICAgICAqICAgICB2YXIgcGxhaW50ZXh0ICA9IENyeXB0b0pTLlJDNERyb3AuZGVjcnlwdChjaXBoZXJ0ZXh0LCBrZXksIGNmZyk7XHJcblx0ICAgICAqL1xyXG5cdCAgICBDLlJDNERyb3AgPSBTdHJlYW1DaXBoZXIuX2NyZWF0ZUhlbHBlcihSQzREcm9wKTtcclxuXHR9KCkpO1xyXG5cclxuXHJcblx0cmV0dXJuIENyeXB0b0pTLlJDNDtcclxuXHJcbn0pKTsiLCI7KGZ1bmN0aW9uIChyb290LCBmYWN0b3J5LCB1bmRlZikge1xyXG5cdGlmICh0eXBlb2YgZXhwb3J0cyA9PT0gXCJvYmplY3RcIikge1xyXG5cdFx0Ly8gQ29tbW9uSlNcclxuXHRcdG1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIi4vY29yZVwiKSwgcmVxdWlyZShcIi4vZW5jLWJhc2U2NFwiKSwgcmVxdWlyZShcIi4vbWQ1XCIpLCByZXF1aXJlKFwiLi9ldnBrZGZcIiksIHJlcXVpcmUoXCIuL2NpcGhlci1jb3JlXCIpKTtcclxuXHR9XHJcblx0ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQpIHtcclxuXHRcdC8vIEFNRFxyXG5cdFx0ZGVmaW5lKFtcIi4vY29yZVwiLCBcIi4vZW5jLWJhc2U2NFwiLCBcIi4vbWQ1XCIsIFwiLi9ldnBrZGZcIiwgXCIuL2NpcGhlci1jb3JlXCJdLCBmYWN0b3J5KTtcclxuXHR9XHJcblx0ZWxzZSB7XHJcblx0XHQvLyBHbG9iYWwgKGJyb3dzZXIpXHJcblx0XHRmYWN0b3J5KHJvb3QuQ3J5cHRvSlMpO1xyXG5cdH1cclxufSh0aGlzLCBmdW5jdGlvbiAoQ3J5cHRvSlMpIHtcclxuXHJcblx0KGZ1bmN0aW9uICgpIHtcclxuXHQgICAgLy8gU2hvcnRjdXRzXHJcblx0ICAgIHZhciBDID0gQ3J5cHRvSlM7XHJcblx0ICAgIHZhciBDX2xpYiA9IEMubGliO1xyXG5cdCAgICB2YXIgU3RyZWFtQ2lwaGVyID0gQ19saWIuU3RyZWFtQ2lwaGVyO1xyXG5cdCAgICB2YXIgQ19hbGdvID0gQy5hbGdvO1xyXG5cclxuXHQgICAgLy8gUmV1c2FibGUgb2JqZWN0c1xyXG5cdCAgICB2YXIgUyAgPSBbXTtcclxuXHQgICAgdmFyIENfID0gW107XHJcblx0ICAgIHZhciBHICA9IFtdO1xyXG5cclxuXHQgICAgLyoqXHJcblx0ICAgICAqIFJhYmJpdCBzdHJlYW0gY2lwaGVyIGFsZ29yaXRobVxyXG5cdCAgICAgKi9cclxuXHQgICAgdmFyIFJhYmJpdCA9IENfYWxnby5SYWJiaXQgPSBTdHJlYW1DaXBoZXIuZXh0ZW5kKHtcclxuXHQgICAgICAgIF9kb1Jlc2V0OiBmdW5jdGlvbiAoKSB7XHJcblx0ICAgICAgICAgICAgLy8gU2hvcnRjdXRzXHJcblx0ICAgICAgICAgICAgdmFyIEsgPSB0aGlzLl9rZXkud29yZHM7XHJcblx0ICAgICAgICAgICAgdmFyIGl2ID0gdGhpcy5jZmcuaXY7XHJcblxyXG5cdCAgICAgICAgICAgIC8vIFN3YXAgZW5kaWFuXHJcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuXHQgICAgICAgICAgICAgICAgS1tpXSA9ICgoKEtbaV0gPDwgOCkgIHwgKEtbaV0gPj4+IDI0KSkgJiAweDAwZmYwMGZmKSB8XHJcblx0ICAgICAgICAgICAgICAgICAgICAgICAoKChLW2ldIDw8IDI0KSB8IChLW2ldID4+PiA4KSkgICYgMHhmZjAwZmYwMCk7XHJcblx0ICAgICAgICAgICAgfVxyXG5cclxuXHQgICAgICAgICAgICAvLyBHZW5lcmF0ZSBpbml0aWFsIHN0YXRlIHZhbHVlc1xyXG5cdCAgICAgICAgICAgIHZhciBYID0gdGhpcy5fWCA9IFtcclxuXHQgICAgICAgICAgICAgICAgS1swXSwgKEtbM10gPDwgMTYpIHwgKEtbMl0gPj4+IDE2KSxcclxuXHQgICAgICAgICAgICAgICAgS1sxXSwgKEtbMF0gPDwgMTYpIHwgKEtbM10gPj4+IDE2KSxcclxuXHQgICAgICAgICAgICAgICAgS1syXSwgKEtbMV0gPDwgMTYpIHwgKEtbMF0gPj4+IDE2KSxcclxuXHQgICAgICAgICAgICAgICAgS1szXSwgKEtbMl0gPDwgMTYpIHwgKEtbMV0gPj4+IDE2KVxyXG5cdCAgICAgICAgICAgIF07XHJcblxyXG5cdCAgICAgICAgICAgIC8vIEdlbmVyYXRlIGluaXRpYWwgY291bnRlciB2YWx1ZXNcclxuXHQgICAgICAgICAgICB2YXIgQyA9IHRoaXMuX0MgPSBbXHJcblx0ICAgICAgICAgICAgICAgIChLWzJdIDw8IDE2KSB8IChLWzJdID4+PiAxNiksIChLWzBdICYgMHhmZmZmMDAwMCkgfCAoS1sxXSAmIDB4MDAwMGZmZmYpLFxyXG5cdCAgICAgICAgICAgICAgICAoS1szXSA8PCAxNikgfCAoS1szXSA+Pj4gMTYpLCAoS1sxXSAmIDB4ZmZmZjAwMDApIHwgKEtbMl0gJiAweDAwMDBmZmZmKSxcclxuXHQgICAgICAgICAgICAgICAgKEtbMF0gPDwgMTYpIHwgKEtbMF0gPj4+IDE2KSwgKEtbMl0gJiAweGZmZmYwMDAwKSB8IChLWzNdICYgMHgwMDAwZmZmZiksXHJcblx0ICAgICAgICAgICAgICAgIChLWzFdIDw8IDE2KSB8IChLWzFdID4+PiAxNiksIChLWzNdICYgMHhmZmZmMDAwMCkgfCAoS1swXSAmIDB4MDAwMGZmZmYpXHJcblx0ICAgICAgICAgICAgXTtcclxuXHJcblx0ICAgICAgICAgICAgLy8gQ2FycnkgYml0XHJcblx0ICAgICAgICAgICAgdGhpcy5fYiA9IDA7XHJcblxyXG5cdCAgICAgICAgICAgIC8vIEl0ZXJhdGUgdGhlIHN5c3RlbSBmb3VyIHRpbWVzXHJcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuXHQgICAgICAgICAgICAgICAgbmV4dFN0YXRlLmNhbGwodGhpcyk7XHJcblx0ICAgICAgICAgICAgfVxyXG5cclxuXHQgICAgICAgICAgICAvLyBNb2RpZnkgdGhlIGNvdW50ZXJzXHJcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA4OyBpKyspIHtcclxuXHQgICAgICAgICAgICAgICAgQ1tpXSBePSBYWyhpICsgNCkgJiA3XTtcclxuXHQgICAgICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgICAgIC8vIElWIHNldHVwXHJcblx0ICAgICAgICAgICAgaWYgKGl2KSB7XHJcblx0ICAgICAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xyXG5cdCAgICAgICAgICAgICAgICB2YXIgSVYgPSBpdi53b3JkcztcclxuXHQgICAgICAgICAgICAgICAgdmFyIElWXzAgPSBJVlswXTtcclxuXHQgICAgICAgICAgICAgICAgdmFyIElWXzEgPSBJVlsxXTtcclxuXHJcblx0ICAgICAgICAgICAgICAgIC8vIEdlbmVyYXRlIGZvdXIgc3VidmVjdG9yc1xyXG5cdCAgICAgICAgICAgICAgICB2YXIgaTAgPSAoKChJVl8wIDw8IDgpIHwgKElWXzAgPj4+IDI0KSkgJiAweDAwZmYwMGZmKSB8ICgoKElWXzAgPDwgMjQpIHwgKElWXzAgPj4+IDgpKSAmIDB4ZmYwMGZmMDApO1xyXG5cdCAgICAgICAgICAgICAgICB2YXIgaTIgPSAoKChJVl8xIDw8IDgpIHwgKElWXzEgPj4+IDI0KSkgJiAweDAwZmYwMGZmKSB8ICgoKElWXzEgPDwgMjQpIHwgKElWXzEgPj4+IDgpKSAmIDB4ZmYwMGZmMDApO1xyXG5cdCAgICAgICAgICAgICAgICB2YXIgaTEgPSAoaTAgPj4+IDE2KSB8IChpMiAmIDB4ZmZmZjAwMDApO1xyXG5cdCAgICAgICAgICAgICAgICB2YXIgaTMgPSAoaTIgPDwgMTYpICB8IChpMCAmIDB4MDAwMGZmZmYpO1xyXG5cclxuXHQgICAgICAgICAgICAgICAgLy8gTW9kaWZ5IGNvdW50ZXIgdmFsdWVzXHJcblx0ICAgICAgICAgICAgICAgIENbMF0gXj0gaTA7XHJcblx0ICAgICAgICAgICAgICAgIENbMV0gXj0gaTE7XHJcblx0ICAgICAgICAgICAgICAgIENbMl0gXj0gaTI7XHJcblx0ICAgICAgICAgICAgICAgIENbM10gXj0gaTM7XHJcblx0ICAgICAgICAgICAgICAgIENbNF0gXj0gaTA7XHJcblx0ICAgICAgICAgICAgICAgIENbNV0gXj0gaTE7XHJcblx0ICAgICAgICAgICAgICAgIENbNl0gXj0gaTI7XHJcblx0ICAgICAgICAgICAgICAgIENbN10gXj0gaTM7XHJcblxyXG5cdCAgICAgICAgICAgICAgICAvLyBJdGVyYXRlIHRoZSBzeXN0ZW0gZm91ciB0aW1lc1xyXG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgbmV4dFN0YXRlLmNhbGwodGhpcyk7XHJcblx0ICAgICAgICAgICAgICAgIH1cclxuXHQgICAgICAgICAgICB9XHJcblx0ICAgICAgICB9LFxyXG5cclxuXHQgICAgICAgIF9kb1Byb2Nlc3NCbG9jazogZnVuY3Rpb24gKE0sIG9mZnNldCkge1xyXG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0XHJcblx0ICAgICAgICAgICAgdmFyIFggPSB0aGlzLl9YO1xyXG5cclxuXHQgICAgICAgICAgICAvLyBJdGVyYXRlIHRoZSBzeXN0ZW1cclxuXHQgICAgICAgICAgICBuZXh0U3RhdGUuY2FsbCh0aGlzKTtcclxuXHJcblx0ICAgICAgICAgICAgLy8gR2VuZXJhdGUgZm91ciBrZXlzdHJlYW0gd29yZHNcclxuXHQgICAgICAgICAgICBTWzBdID0gWFswXSBeIChYWzVdID4+PiAxNikgXiAoWFszXSA8PCAxNik7XHJcblx0ICAgICAgICAgICAgU1sxXSA9IFhbMl0gXiAoWFs3XSA+Pj4gMTYpIF4gKFhbNV0gPDwgMTYpO1xyXG5cdCAgICAgICAgICAgIFNbMl0gPSBYWzRdIF4gKFhbMV0gPj4+IDE2KSBeIChYWzddIDw8IDE2KTtcclxuXHQgICAgICAgICAgICBTWzNdID0gWFs2XSBeIChYWzNdID4+PiAxNikgXiAoWFsxXSA8PCAxNik7XHJcblxyXG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcblx0ICAgICAgICAgICAgICAgIC8vIFN3YXAgZW5kaWFuXHJcblx0ICAgICAgICAgICAgICAgIFNbaV0gPSAoKChTW2ldIDw8IDgpICB8IChTW2ldID4+PiAyNCkpICYgMHgwMGZmMDBmZikgfFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgKCgoU1tpXSA8PCAyNCkgfCAoU1tpXSA+Pj4gOCkpICAmIDB4ZmYwMGZmMDApO1xyXG5cclxuXHQgICAgICAgICAgICAgICAgLy8gRW5jcnlwdFxyXG5cdCAgICAgICAgICAgICAgICBNW29mZnNldCArIGldIF49IFNbaV07XHJcblx0ICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgfSxcclxuXHJcblx0ICAgICAgICBibG9ja1NpemU6IDEyOC8zMixcclxuXHJcblx0ICAgICAgICBpdlNpemU6IDY0LzMyXHJcblx0ICAgIH0pO1xyXG5cclxuXHQgICAgZnVuY3Rpb24gbmV4dFN0YXRlKCkge1xyXG5cdCAgICAgICAgLy8gU2hvcnRjdXRzXHJcblx0ICAgICAgICB2YXIgWCA9IHRoaXMuX1g7XHJcblx0ICAgICAgICB2YXIgQyA9IHRoaXMuX0M7XHJcblxyXG5cdCAgICAgICAgLy8gU2F2ZSBvbGQgY291bnRlciB2YWx1ZXNcclxuXHQgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgODsgaSsrKSB7XHJcblx0ICAgICAgICAgICAgQ19baV0gPSBDW2ldO1xyXG5cdCAgICAgICAgfVxyXG5cclxuXHQgICAgICAgIC8vIENhbGN1bGF0ZSBuZXcgY291bnRlciB2YWx1ZXNcclxuXHQgICAgICAgIENbMF0gPSAoQ1swXSArIDB4NGQzNGQzNGQgKyB0aGlzLl9iKSB8IDA7XHJcblx0ICAgICAgICBDWzFdID0gKENbMV0gKyAweGQzNGQzNGQzICsgKChDWzBdID4+PiAwKSA8IChDX1swXSA+Pj4gMCkgPyAxIDogMCkpIHwgMDtcclxuXHQgICAgICAgIENbMl0gPSAoQ1syXSArIDB4MzRkMzRkMzQgKyAoKENbMV0gPj4+IDApIDwgKENfWzFdID4+PiAwKSA/IDEgOiAwKSkgfCAwO1xyXG5cdCAgICAgICAgQ1szXSA9IChDWzNdICsgMHg0ZDM0ZDM0ZCArICgoQ1syXSA+Pj4gMCkgPCAoQ19bMl0gPj4+IDApID8gMSA6IDApKSB8IDA7XHJcblx0ICAgICAgICBDWzRdID0gKENbNF0gKyAweGQzNGQzNGQzICsgKChDWzNdID4+PiAwKSA8IChDX1szXSA+Pj4gMCkgPyAxIDogMCkpIHwgMDtcclxuXHQgICAgICAgIENbNV0gPSAoQ1s1XSArIDB4MzRkMzRkMzQgKyAoKENbNF0gPj4+IDApIDwgKENfWzRdID4+PiAwKSA/IDEgOiAwKSkgfCAwO1xyXG5cdCAgICAgICAgQ1s2XSA9IChDWzZdICsgMHg0ZDM0ZDM0ZCArICgoQ1s1XSA+Pj4gMCkgPCAoQ19bNV0gPj4+IDApID8gMSA6IDApKSB8IDA7XHJcblx0ICAgICAgICBDWzddID0gKENbN10gKyAweGQzNGQzNGQzICsgKChDWzZdID4+PiAwKSA8IChDX1s2XSA+Pj4gMCkgPyAxIDogMCkpIHwgMDtcclxuXHQgICAgICAgIHRoaXMuX2IgPSAoQ1s3XSA+Pj4gMCkgPCAoQ19bN10gPj4+IDApID8gMSA6IDA7XHJcblxyXG5cdCAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBnLXZhbHVlc1xyXG5cdCAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA4OyBpKyspIHtcclxuXHQgICAgICAgICAgICB2YXIgZ3ggPSBYW2ldICsgQ1tpXTtcclxuXHJcblx0ICAgICAgICAgICAgLy8gQ29uc3RydWN0IGhpZ2ggYW5kIGxvdyBhcmd1bWVudCBmb3Igc3F1YXJpbmdcclxuXHQgICAgICAgICAgICB2YXIgZ2EgPSBneCAmIDB4ZmZmZjtcclxuXHQgICAgICAgICAgICB2YXIgZ2IgPSBneCA+Pj4gMTY7XHJcblxyXG5cdCAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBoaWdoIGFuZCBsb3cgcmVzdWx0IG9mIHNxdWFyaW5nXHJcblx0ICAgICAgICAgICAgdmFyIGdoID0gKCgoKGdhICogZ2EpID4+PiAxNykgKyBnYSAqIGdiKSA+Pj4gMTUpICsgZ2IgKiBnYjtcclxuXHQgICAgICAgICAgICB2YXIgZ2wgPSAoKChneCAmIDB4ZmZmZjAwMDApICogZ3gpIHwgMCkgKyAoKChneCAmIDB4MDAwMGZmZmYpICogZ3gpIHwgMCk7XHJcblxyXG5cdCAgICAgICAgICAgIC8vIEhpZ2ggWE9SIGxvd1xyXG5cdCAgICAgICAgICAgIEdbaV0gPSBnaCBeIGdsO1xyXG5cdCAgICAgICAgfVxyXG5cclxuXHQgICAgICAgIC8vIENhbGN1bGF0ZSBuZXcgc3RhdGUgdmFsdWVzXHJcblx0ICAgICAgICBYWzBdID0gKEdbMF0gKyAoKEdbN10gPDwgMTYpIHwgKEdbN10gPj4+IDE2KSkgKyAoKEdbNl0gPDwgMTYpIHwgKEdbNl0gPj4+IDE2KSkpIHwgMDtcclxuXHQgICAgICAgIFhbMV0gPSAoR1sxXSArICgoR1swXSA8PCA4KSAgfCAoR1swXSA+Pj4gMjQpKSArIEdbN10pIHwgMDtcclxuXHQgICAgICAgIFhbMl0gPSAoR1syXSArICgoR1sxXSA8PCAxNikgfCAoR1sxXSA+Pj4gMTYpKSArICgoR1swXSA8PCAxNikgfCAoR1swXSA+Pj4gMTYpKSkgfCAwO1xyXG5cdCAgICAgICAgWFszXSA9IChHWzNdICsgKChHWzJdIDw8IDgpICB8IChHWzJdID4+PiAyNCkpICsgR1sxXSkgfCAwO1xyXG5cdCAgICAgICAgWFs0XSA9IChHWzRdICsgKChHWzNdIDw8IDE2KSB8IChHWzNdID4+PiAxNikpICsgKChHWzJdIDw8IDE2KSB8IChHWzJdID4+PiAxNikpKSB8IDA7XHJcblx0ICAgICAgICBYWzVdID0gKEdbNV0gKyAoKEdbNF0gPDwgOCkgIHwgKEdbNF0gPj4+IDI0KSkgKyBHWzNdKSB8IDA7XHJcblx0ICAgICAgICBYWzZdID0gKEdbNl0gKyAoKEdbNV0gPDwgMTYpIHwgKEdbNV0gPj4+IDE2KSkgKyAoKEdbNF0gPDwgMTYpIHwgKEdbNF0gPj4+IDE2KSkpIHwgMDtcclxuXHQgICAgICAgIFhbN10gPSAoR1s3XSArICgoR1s2XSA8PCA4KSAgfCAoR1s2XSA+Pj4gMjQpKSArIEdbNV0pIHwgMDtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgLyoqXHJcblx0ICAgICAqIFNob3J0Y3V0IGZ1bmN0aW9ucyB0byB0aGUgY2lwaGVyJ3Mgb2JqZWN0IGludGVyZmFjZS5cclxuXHQgICAgICpcclxuXHQgICAgICogQGV4YW1wbGVcclxuXHQgICAgICpcclxuXHQgICAgICogICAgIHZhciBjaXBoZXJ0ZXh0ID0gQ3J5cHRvSlMuUmFiYml0LmVuY3J5cHQobWVzc2FnZSwga2V5LCBjZmcpO1xyXG5cdCAgICAgKiAgICAgdmFyIHBsYWludGV4dCAgPSBDcnlwdG9KUy5SYWJiaXQuZGVjcnlwdChjaXBoZXJ0ZXh0LCBrZXksIGNmZyk7XHJcblx0ICAgICAqL1xyXG5cdCAgICBDLlJhYmJpdCA9IFN0cmVhbUNpcGhlci5fY3JlYXRlSGVscGVyKFJhYmJpdCk7XHJcblx0fSgpKTtcclxuXHJcblxyXG5cdHJldHVybiBDcnlwdG9KUy5SYWJiaXQ7XHJcblxyXG59KSk7IiwiOyhmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSwgdW5kZWYpIHtcclxuXHRpZiAodHlwZW9mIGV4cG9ydHMgPT09IFwib2JqZWN0XCIpIHtcclxuXHRcdC8vIENvbW1vbkpTXHJcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCIuL2NvcmVcIiksIHJlcXVpcmUoXCIuL2VuYy1iYXNlNjRcIiksIHJlcXVpcmUoXCIuL21kNVwiKSwgcmVxdWlyZShcIi4vZXZwa2RmXCIpLCByZXF1aXJlKFwiLi9jaXBoZXItY29yZVwiKSk7XHJcblx0fVxyXG5cdGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kKSB7XHJcblx0XHQvLyBBTURcclxuXHRcdGRlZmluZShbXCIuL2NvcmVcIiwgXCIuL2VuYy1iYXNlNjRcIiwgXCIuL21kNVwiLCBcIi4vZXZwa2RmXCIsIFwiLi9jaXBoZXItY29yZVwiXSwgZmFjdG9yeSk7XHJcblx0fVxyXG5cdGVsc2Uge1xyXG5cdFx0Ly8gR2xvYmFsIChicm93c2VyKVxyXG5cdFx0ZmFjdG9yeShyb290LkNyeXB0b0pTKTtcclxuXHR9XHJcbn0odGhpcywgZnVuY3Rpb24gKENyeXB0b0pTKSB7XHJcblxyXG5cdChmdW5jdGlvbiAoKSB7XHJcblx0ICAgIC8vIFNob3J0Y3V0c1xyXG5cdCAgICB2YXIgQyA9IENyeXB0b0pTO1xyXG5cdCAgICB2YXIgQ19saWIgPSBDLmxpYjtcclxuXHQgICAgdmFyIFN0cmVhbUNpcGhlciA9IENfbGliLlN0cmVhbUNpcGhlcjtcclxuXHQgICAgdmFyIENfYWxnbyA9IEMuYWxnbztcclxuXHJcblx0ICAgIC8vIFJldXNhYmxlIG9iamVjdHNcclxuXHQgICAgdmFyIFMgID0gW107XHJcblx0ICAgIHZhciBDXyA9IFtdO1xyXG5cdCAgICB2YXIgRyAgPSBbXTtcclxuXHJcblx0ICAgIC8qKlxyXG5cdCAgICAgKiBSYWJiaXQgc3RyZWFtIGNpcGhlciBhbGdvcml0aG0uXHJcblx0ICAgICAqXHJcblx0ICAgICAqIFRoaXMgaXMgYSBsZWdhY3kgdmVyc2lvbiB0aGF0IG5lZ2xlY3RlZCB0byBjb252ZXJ0IHRoZSBrZXkgdG8gbGl0dGxlLWVuZGlhbi5cclxuXHQgICAgICogVGhpcyBlcnJvciBkb2Vzbid0IGFmZmVjdCB0aGUgY2lwaGVyJ3Mgc2VjdXJpdHksXHJcblx0ICAgICAqIGJ1dCBpdCBkb2VzIGFmZmVjdCBpdHMgY29tcGF0aWJpbGl0eSB3aXRoIG90aGVyIGltcGxlbWVudGF0aW9ucy5cclxuXHQgICAgICovXHJcblx0ICAgIHZhciBSYWJiaXRMZWdhY3kgPSBDX2FsZ28uUmFiYml0TGVnYWN5ID0gU3RyZWFtQ2lwaGVyLmV4dGVuZCh7XHJcblx0ICAgICAgICBfZG9SZXNldDogZnVuY3Rpb24gKCkge1xyXG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xyXG5cdCAgICAgICAgICAgIHZhciBLID0gdGhpcy5fa2V5LndvcmRzO1xyXG5cdCAgICAgICAgICAgIHZhciBpdiA9IHRoaXMuY2ZnLml2O1xyXG5cclxuXHQgICAgICAgICAgICAvLyBHZW5lcmF0ZSBpbml0aWFsIHN0YXRlIHZhbHVlc1xyXG5cdCAgICAgICAgICAgIHZhciBYID0gdGhpcy5fWCA9IFtcclxuXHQgICAgICAgICAgICAgICAgS1swXSwgKEtbM10gPDwgMTYpIHwgKEtbMl0gPj4+IDE2KSxcclxuXHQgICAgICAgICAgICAgICAgS1sxXSwgKEtbMF0gPDwgMTYpIHwgKEtbM10gPj4+IDE2KSxcclxuXHQgICAgICAgICAgICAgICAgS1syXSwgKEtbMV0gPDwgMTYpIHwgKEtbMF0gPj4+IDE2KSxcclxuXHQgICAgICAgICAgICAgICAgS1szXSwgKEtbMl0gPDwgMTYpIHwgKEtbMV0gPj4+IDE2KVxyXG5cdCAgICAgICAgICAgIF07XHJcblxyXG5cdCAgICAgICAgICAgIC8vIEdlbmVyYXRlIGluaXRpYWwgY291bnRlciB2YWx1ZXNcclxuXHQgICAgICAgICAgICB2YXIgQyA9IHRoaXMuX0MgPSBbXHJcblx0ICAgICAgICAgICAgICAgIChLWzJdIDw8IDE2KSB8IChLWzJdID4+PiAxNiksIChLWzBdICYgMHhmZmZmMDAwMCkgfCAoS1sxXSAmIDB4MDAwMGZmZmYpLFxyXG5cdCAgICAgICAgICAgICAgICAoS1szXSA8PCAxNikgfCAoS1szXSA+Pj4gMTYpLCAoS1sxXSAmIDB4ZmZmZjAwMDApIHwgKEtbMl0gJiAweDAwMDBmZmZmKSxcclxuXHQgICAgICAgICAgICAgICAgKEtbMF0gPDwgMTYpIHwgKEtbMF0gPj4+IDE2KSwgKEtbMl0gJiAweGZmZmYwMDAwKSB8IChLWzNdICYgMHgwMDAwZmZmZiksXHJcblx0ICAgICAgICAgICAgICAgIChLWzFdIDw8IDE2KSB8IChLWzFdID4+PiAxNiksIChLWzNdICYgMHhmZmZmMDAwMCkgfCAoS1swXSAmIDB4MDAwMGZmZmYpXHJcblx0ICAgICAgICAgICAgXTtcclxuXHJcblx0ICAgICAgICAgICAgLy8gQ2FycnkgYml0XHJcblx0ICAgICAgICAgICAgdGhpcy5fYiA9IDA7XHJcblxyXG5cdCAgICAgICAgICAgIC8vIEl0ZXJhdGUgdGhlIHN5c3RlbSBmb3VyIHRpbWVzXHJcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuXHQgICAgICAgICAgICAgICAgbmV4dFN0YXRlLmNhbGwodGhpcyk7XHJcblx0ICAgICAgICAgICAgfVxyXG5cclxuXHQgICAgICAgICAgICAvLyBNb2RpZnkgdGhlIGNvdW50ZXJzXHJcblx0ICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA4OyBpKyspIHtcclxuXHQgICAgICAgICAgICAgICAgQ1tpXSBePSBYWyhpICsgNCkgJiA3XTtcclxuXHQgICAgICAgICAgICB9XHJcblxyXG5cdCAgICAgICAgICAgIC8vIElWIHNldHVwXHJcblx0ICAgICAgICAgICAgaWYgKGl2KSB7XHJcblx0ICAgICAgICAgICAgICAgIC8vIFNob3J0Y3V0c1xyXG5cdCAgICAgICAgICAgICAgICB2YXIgSVYgPSBpdi53b3JkcztcclxuXHQgICAgICAgICAgICAgICAgdmFyIElWXzAgPSBJVlswXTtcclxuXHQgICAgICAgICAgICAgICAgdmFyIElWXzEgPSBJVlsxXTtcclxuXHJcblx0ICAgICAgICAgICAgICAgIC8vIEdlbmVyYXRlIGZvdXIgc3VidmVjdG9yc1xyXG5cdCAgICAgICAgICAgICAgICB2YXIgaTAgPSAoKChJVl8wIDw8IDgpIHwgKElWXzAgPj4+IDI0KSkgJiAweDAwZmYwMGZmKSB8ICgoKElWXzAgPDwgMjQpIHwgKElWXzAgPj4+IDgpKSAmIDB4ZmYwMGZmMDApO1xyXG5cdCAgICAgICAgICAgICAgICB2YXIgaTIgPSAoKChJVl8xIDw8IDgpIHwgKElWXzEgPj4+IDI0KSkgJiAweDAwZmYwMGZmKSB8ICgoKElWXzEgPDwgMjQpIHwgKElWXzEgPj4+IDgpKSAmIDB4ZmYwMGZmMDApO1xyXG5cdCAgICAgICAgICAgICAgICB2YXIgaTEgPSAoaTAgPj4+IDE2KSB8IChpMiAmIDB4ZmZmZjAwMDApO1xyXG5cdCAgICAgICAgICAgICAgICB2YXIgaTMgPSAoaTIgPDwgMTYpICB8IChpMCAmIDB4MDAwMGZmZmYpO1xyXG5cclxuXHQgICAgICAgICAgICAgICAgLy8gTW9kaWZ5IGNvdW50ZXIgdmFsdWVzXHJcblx0ICAgICAgICAgICAgICAgIENbMF0gXj0gaTA7XHJcblx0ICAgICAgICAgICAgICAgIENbMV0gXj0gaTE7XHJcblx0ICAgICAgICAgICAgICAgIENbMl0gXj0gaTI7XHJcblx0ICAgICAgICAgICAgICAgIENbM10gXj0gaTM7XHJcblx0ICAgICAgICAgICAgICAgIENbNF0gXj0gaTA7XHJcblx0ICAgICAgICAgICAgICAgIENbNV0gXj0gaTE7XHJcblx0ICAgICAgICAgICAgICAgIENbNl0gXj0gaTI7XHJcblx0ICAgICAgICAgICAgICAgIENbN10gXj0gaTM7XHJcblxyXG5cdCAgICAgICAgICAgICAgICAvLyBJdGVyYXRlIHRoZSBzeXN0ZW0gZm91ciB0aW1lc1xyXG5cdCAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDQ7IGkrKykge1xyXG5cdCAgICAgICAgICAgICAgICAgICAgbmV4dFN0YXRlLmNhbGwodGhpcyk7XHJcblx0ICAgICAgICAgICAgICAgIH1cclxuXHQgICAgICAgICAgICB9XHJcblx0ICAgICAgICB9LFxyXG5cclxuXHQgICAgICAgIF9kb1Byb2Nlc3NCbG9jazogZnVuY3Rpb24gKE0sIG9mZnNldCkge1xyXG5cdCAgICAgICAgICAgIC8vIFNob3J0Y3V0XHJcblx0ICAgICAgICAgICAgdmFyIFggPSB0aGlzLl9YO1xyXG5cclxuXHQgICAgICAgICAgICAvLyBJdGVyYXRlIHRoZSBzeXN0ZW1cclxuXHQgICAgICAgICAgICBuZXh0U3RhdGUuY2FsbCh0aGlzKTtcclxuXHJcblx0ICAgICAgICAgICAgLy8gR2VuZXJhdGUgZm91ciBrZXlzdHJlYW0gd29yZHNcclxuXHQgICAgICAgICAgICBTWzBdID0gWFswXSBeIChYWzVdID4+PiAxNikgXiAoWFszXSA8PCAxNik7XHJcblx0ICAgICAgICAgICAgU1sxXSA9IFhbMl0gXiAoWFs3XSA+Pj4gMTYpIF4gKFhbNV0gPDwgMTYpO1xyXG5cdCAgICAgICAgICAgIFNbMl0gPSBYWzRdIF4gKFhbMV0gPj4+IDE2KSBeIChYWzddIDw8IDE2KTtcclxuXHQgICAgICAgICAgICBTWzNdID0gWFs2XSBeIChYWzNdID4+PiAxNikgXiAoWFsxXSA8PCAxNik7XHJcblxyXG5cdCAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgNDsgaSsrKSB7XHJcblx0ICAgICAgICAgICAgICAgIC8vIFN3YXAgZW5kaWFuXHJcblx0ICAgICAgICAgICAgICAgIFNbaV0gPSAoKChTW2ldIDw8IDgpICB8IChTW2ldID4+PiAyNCkpICYgMHgwMGZmMDBmZikgfFxyXG5cdCAgICAgICAgICAgICAgICAgICAgICAgKCgoU1tpXSA8PCAyNCkgfCAoU1tpXSA+Pj4gOCkpICAmIDB4ZmYwMGZmMDApO1xyXG5cclxuXHQgICAgICAgICAgICAgICAgLy8gRW5jcnlwdFxyXG5cdCAgICAgICAgICAgICAgICBNW29mZnNldCArIGldIF49IFNbaV07XHJcblx0ICAgICAgICAgICAgfVxyXG5cdCAgICAgICAgfSxcclxuXHJcblx0ICAgICAgICBibG9ja1NpemU6IDEyOC8zMixcclxuXHJcblx0ICAgICAgICBpdlNpemU6IDY0LzMyXHJcblx0ICAgIH0pO1xyXG5cclxuXHQgICAgZnVuY3Rpb24gbmV4dFN0YXRlKCkge1xyXG5cdCAgICAgICAgLy8gU2hvcnRjdXRzXHJcblx0ICAgICAgICB2YXIgWCA9IHRoaXMuX1g7XHJcblx0ICAgICAgICB2YXIgQyA9IHRoaXMuX0M7XHJcblxyXG5cdCAgICAgICAgLy8gU2F2ZSBvbGQgY291bnRlciB2YWx1ZXNcclxuXHQgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgODsgaSsrKSB7XHJcblx0ICAgICAgICAgICAgQ19baV0gPSBDW2ldO1xyXG5cdCAgICAgICAgfVxyXG5cclxuXHQgICAgICAgIC8vIENhbGN1bGF0ZSBuZXcgY291bnRlciB2YWx1ZXNcclxuXHQgICAgICAgIENbMF0gPSAoQ1swXSArIDB4NGQzNGQzNGQgKyB0aGlzLl9iKSB8IDA7XHJcblx0ICAgICAgICBDWzFdID0gKENbMV0gKyAweGQzNGQzNGQzICsgKChDWzBdID4+PiAwKSA8IChDX1swXSA+Pj4gMCkgPyAxIDogMCkpIHwgMDtcclxuXHQgICAgICAgIENbMl0gPSAoQ1syXSArIDB4MzRkMzRkMzQgKyAoKENbMV0gPj4+IDApIDwgKENfWzFdID4+PiAwKSA/IDEgOiAwKSkgfCAwO1xyXG5cdCAgICAgICAgQ1szXSA9IChDWzNdICsgMHg0ZDM0ZDM0ZCArICgoQ1syXSA+Pj4gMCkgPCAoQ19bMl0gPj4+IDApID8gMSA6IDApKSB8IDA7XHJcblx0ICAgICAgICBDWzRdID0gKENbNF0gKyAweGQzNGQzNGQzICsgKChDWzNdID4+PiAwKSA8IChDX1szXSA+Pj4gMCkgPyAxIDogMCkpIHwgMDtcclxuXHQgICAgICAgIENbNV0gPSAoQ1s1XSArIDB4MzRkMzRkMzQgKyAoKENbNF0gPj4+IDApIDwgKENfWzRdID4+PiAwKSA/IDEgOiAwKSkgfCAwO1xyXG5cdCAgICAgICAgQ1s2XSA9IChDWzZdICsgMHg0ZDM0ZDM0ZCArICgoQ1s1XSA+Pj4gMCkgPCAoQ19bNV0gPj4+IDApID8gMSA6IDApKSB8IDA7XHJcblx0ICAgICAgICBDWzddID0gKENbN10gKyAweGQzNGQzNGQzICsgKChDWzZdID4+PiAwKSA8IChDX1s2XSA+Pj4gMCkgPyAxIDogMCkpIHwgMDtcclxuXHQgICAgICAgIHRoaXMuX2IgPSAoQ1s3XSA+Pj4gMCkgPCAoQ19bN10gPj4+IDApID8gMSA6IDA7XHJcblxyXG5cdCAgICAgICAgLy8gQ2FsY3VsYXRlIHRoZSBnLXZhbHVlc1xyXG5cdCAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCA4OyBpKyspIHtcclxuXHQgICAgICAgICAgICB2YXIgZ3ggPSBYW2ldICsgQ1tpXTtcclxuXHJcblx0ICAgICAgICAgICAgLy8gQ29uc3RydWN0IGhpZ2ggYW5kIGxvdyBhcmd1bWVudCBmb3Igc3F1YXJpbmdcclxuXHQgICAgICAgICAgICB2YXIgZ2EgPSBneCAmIDB4ZmZmZjtcclxuXHQgICAgICAgICAgICB2YXIgZ2IgPSBneCA+Pj4gMTY7XHJcblxyXG5cdCAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBoaWdoIGFuZCBsb3cgcmVzdWx0IG9mIHNxdWFyaW5nXHJcblx0ICAgICAgICAgICAgdmFyIGdoID0gKCgoKGdhICogZ2EpID4+PiAxNykgKyBnYSAqIGdiKSA+Pj4gMTUpICsgZ2IgKiBnYjtcclxuXHQgICAgICAgICAgICB2YXIgZ2wgPSAoKChneCAmIDB4ZmZmZjAwMDApICogZ3gpIHwgMCkgKyAoKChneCAmIDB4MDAwMGZmZmYpICogZ3gpIHwgMCk7XHJcblxyXG5cdCAgICAgICAgICAgIC8vIEhpZ2ggWE9SIGxvd1xyXG5cdCAgICAgICAgICAgIEdbaV0gPSBnaCBeIGdsO1xyXG5cdCAgICAgICAgfVxyXG5cclxuXHQgICAgICAgIC8vIENhbGN1bGF0ZSBuZXcgc3RhdGUgdmFsdWVzXHJcblx0ICAgICAgICBYWzBdID0gKEdbMF0gKyAoKEdbN10gPDwgMTYpIHwgKEdbN10gPj4+IDE2KSkgKyAoKEdbNl0gPDwgMTYpIHwgKEdbNl0gPj4+IDE2KSkpIHwgMDtcclxuXHQgICAgICAgIFhbMV0gPSAoR1sxXSArICgoR1swXSA8PCA4KSAgfCAoR1swXSA+Pj4gMjQpKSArIEdbN10pIHwgMDtcclxuXHQgICAgICAgIFhbMl0gPSAoR1syXSArICgoR1sxXSA8PCAxNikgfCAoR1sxXSA+Pj4gMTYpKSArICgoR1swXSA8PCAxNikgfCAoR1swXSA+Pj4gMTYpKSkgfCAwO1xyXG5cdCAgICAgICAgWFszXSA9IChHWzNdICsgKChHWzJdIDw8IDgpICB8IChHWzJdID4+PiAyNCkpICsgR1sxXSkgfCAwO1xyXG5cdCAgICAgICAgWFs0XSA9IChHWzRdICsgKChHWzNdIDw8IDE2KSB8IChHWzNdID4+PiAxNikpICsgKChHWzJdIDw8IDE2KSB8IChHWzJdID4+PiAxNikpKSB8IDA7XHJcblx0ICAgICAgICBYWzVdID0gKEdbNV0gKyAoKEdbNF0gPDwgOCkgIHwgKEdbNF0gPj4+IDI0KSkgKyBHWzNdKSB8IDA7XHJcblx0ICAgICAgICBYWzZdID0gKEdbNl0gKyAoKEdbNV0gPDwgMTYpIHwgKEdbNV0gPj4+IDE2KSkgKyAoKEdbNF0gPDwgMTYpIHwgKEdbNF0gPj4+IDE2KSkpIHwgMDtcclxuXHQgICAgICAgIFhbN10gPSAoR1s3XSArICgoR1s2XSA8PCA4KSAgfCAoR1s2XSA+Pj4gMjQpKSArIEdbNV0pIHwgMDtcclxuXHQgICAgfVxyXG5cclxuXHQgICAgLyoqXHJcblx0ICAgICAqIFNob3J0Y3V0IGZ1bmN0aW9ucyB0byB0aGUgY2lwaGVyJ3Mgb2JqZWN0IGludGVyZmFjZS5cclxuXHQgICAgICpcclxuXHQgICAgICogQGV4YW1wbGVcclxuXHQgICAgICpcclxuXHQgICAgICogICAgIHZhciBjaXBoZXJ0ZXh0ID0gQ3J5cHRvSlMuUmFiYml0TGVnYWN5LmVuY3J5cHQobWVzc2FnZSwga2V5LCBjZmcpO1xyXG5cdCAgICAgKiAgICAgdmFyIHBsYWludGV4dCAgPSBDcnlwdG9KUy5SYWJiaXRMZWdhY3kuZGVjcnlwdChjaXBoZXJ0ZXh0LCBrZXksIGNmZyk7XHJcblx0ICAgICAqL1xyXG5cdCAgICBDLlJhYmJpdExlZ2FjeSA9IFN0cmVhbUNpcGhlci5fY3JlYXRlSGVscGVyKFJhYmJpdExlZ2FjeSk7XHJcblx0fSgpKTtcclxuXHJcblxyXG5cdHJldHVybiBDcnlwdG9KUy5SYWJiaXRMZWdhY3k7XHJcblxyXG59KSk7IiwidmFyICRhcHBfdGVtcGxhdGUkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgRmFzdEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtanNvbi1sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgRmFzdEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtdGVtcGxhdGUtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWZyYWdtZW50LWxvYWRlci5qcz9pbmRleD0wJnR5cGU9dGVtcGxhdGVzIS4vaW5kZXgudXhcIilcbnZhciAkYXBwX3N0eWxlJCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLWpzb24tbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2ZhLXRvb2xraXQvbGliL2ZhLXN0eWxlLWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1jOlxcXFxVc2Vyc1xcXFwxMTA5NlxcXFxEZXNrdG9wXFxcXFN0YWNrXFxcXEZhc3RBUFBcXFxcY29tLm5qdXN0LnN0YWNrXFxcXHNyY1xcXFxFbnRyeVBlckluZm9cXFxcaW5kZXgudXghLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgRmFzdEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPWM6XFxcXFVzZXJzXFxcXDExMDk2XFxcXERlc2t0b3BcXFxcU3RhY2tcXFxcRmFzdEFQUFxcXFxjb20ubmp1c3Quc3RhY2tcXFxcc3JjXFxcXEVudHJ5UGVySW5mb1xcXFxpbmRleC51eCEuL2luZGV4LnV4XCIpXG52YXIgJGFwcF9zY3JpcHQkID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgRmFzdEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtc2NyaXB0LWxvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Qcm9ncmFtIEZpbGVzL0h1YXdlaSBGYXN0QXBwIElERS9yZXNvdXJjZXMvYXBwL2V4dGVuc2lvbnMvZGV2ZWNvLWRlYnVnL25vZGVfbW9kdWxlcy9mYS10b29sa2l0L2xpYi9mYS1hY2Nlc3MtbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL1Byb2dyYW0gRmlsZXMvSHVhd2VpIEZhc3RBcHAgSURFL3Jlc291cmNlcy9hcHAvZXh0ZW5zaW9ucy9kZXZlY28tZGVidWcvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlcj9wcmVzZXRzW109YzpcXFxcUHJvZ3JhbSBGaWxlc1xcXFxIdWF3ZWkgRmFzdEFwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHByZXNldC1lbnYmcGx1Z2luc1tdPWM6XFxcXFByb2dyYW0gRmlsZXNcXFxcSHVhd2VpIEZhc3RBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwbHVnaW4tdHJhbnNmb3JtLW1vZHVsZXMtY29tbW9uanMmcGx1Z2luc1tdPWM6XFxcXFByb2dyYW0gRmlsZXNcXFxcSHVhd2VpIEZhc3RBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGpzeC1sb2FkZXIuanMmY29tbWVudHM9ZmFsc2UhLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vUHJvZ3JhbSBGaWxlcy9IdWF3ZWkgRmFzdEFwcCBJREUvcmVzb3VyY2VzL2FwcC9leHRlbnNpb25zL2RldmVjby1kZWJ1Zy9ub2RlX21vZHVsZXMvZmEtdG9vbGtpdC9saWIvZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zY3JpcHRzIS4vaW5kZXgudXhcIilcblxuJGFwcF9kZWZpbmUkKCdAYXBwLWNvbXBvbmVudC9pbmRleCcsIFtdLCBmdW5jdGlvbigkYXBwX3JlcXVpcmUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX21vZHVsZSQpe1xuICAgICAkYXBwX3NjcmlwdCQoJGFwcF9tb2R1bGUkLCAkYXBwX2V4cG9ydHMkLCAkYXBwX3JlcXVpcmUkKVxuICAgICBpZiAoJGFwcF9leHBvcnRzJC5fX2VzTW9kdWxlICYmICRhcHBfZXhwb3J0cyQuZGVmYXVsdCkge1xuICAgICAgICAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMgPSAkYXBwX2V4cG9ydHMkLmRlZmF1bHRcbiAgICAgICAgfVxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy50ZW1wbGF0ZSA9ICRhcHBfdGVtcGxhdGUkXG4gICAgICRhcHBfbW9kdWxlJC5leHBvcnRzLnN0eWxlID0gJGFwcF9zdHlsZSRcbn0pXG5cbiRhcHBfYm9vdHN0cmFwJCgnQGFwcC1jb21wb25lbnQvaW5kZXgnLHsgcGFja2FnZXJOYW1lOidmYS10b29sa2l0JywgcGFja2FnZXJWZXJzaW9uOiAnMi4wLjAtU3RhYmxlLjMwMSd9KSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcInR5cGVcIjogXCJkaXZcIixcbiAgXCJhdHRyXCI6IHt9LFxuICBcImNsYXNzTGlzdFwiOiBbXG4gICAgXCJjb250YWluZXJcIlxuICBdLFxuICBcImNoaWxkcmVuXCI6IFtcbiAgICB7XG4gICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgXCJ0b3AtY29udGVudFwiXG4gICAgICBdLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJwb3N0ZXItaXRlbVwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInNyY1wiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuaWNvbnVyaX1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiaWNvblwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICBcImNsaWNrXCI6IFwicGlja1Bob3RvXCIsXG4gICAgICAgICAgICAgICAgXCJsb25ncHJlc3NcIjogXCJ2aWV3UGhvdG9cIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJhXCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIuS4quS6uuS/oeaBr1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImFfaXRlbVwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJkaXZcIixcbiAgICAgICAgICBcImF0dHJcIjoge30sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJhY2NvdW50LWl0ZW1cIlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IFwi5aeT5ZCNXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiYWNjb3VudC1zdWJ0aXRsZVwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImlucHV0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJtYXhsZW5ndGhcIjogXCIyMFwiLFxuICAgICAgICAgICAgICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmZvY3VzSXRlbT09PTA/JyMwMDY2ZmYnOicjY2NjY2NjJ31cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiYWNjb3VudC1pbnB1dFwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICBcImZvY3VzXCI6IFwib25Gb2N1c05hbWVcIixcbiAgICAgICAgICAgICAgICBcImJsdXJcIjogXCJvbkJsdXJcIixcbiAgICAgICAgICAgICAgICBcImNoYW5nZVwiOiBcImdldE5hbWVcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiYWNjb3VudC1pdGVtXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIueUqOaIt+WQjVwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImFjY291bnQtc3VidGl0bGVcIlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJpbnB1dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwibWF4bGVuZ3RoXCI6IFwiMjBcIixcbiAgICAgICAgICAgICAgICBcImJvcmRlckJvdHRvbUNvbG9yXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdGhpcy5mb2N1c0l0ZW09PT0xPycjMDA2NmZmJzonI2NjY2NjYyd9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcImFjY291bnQtaW5wdXRcIlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgICAgICAgICAgXCJmb2N1c1wiOiBcIm9uRm9jdXNVc2VyTmFtZVwiLFxuICAgICAgICAgICAgICAgIFwiYmx1clwiOiBcIm9uQmx1clwiLFxuICAgICAgICAgICAgICAgIFwiY2hhbmdlXCI6IFwiZ2V0VXNlck5hbWVcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICAgICAgXCJhdHRyXCI6IHt9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiYWNjb3VudC1pdGVtXCJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBcIkVtYWlsXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiYWNjb3VudC1zdWJ0aXRsZVwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcImlucHV0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICAgICAgXCJib3JkZXJCb3R0b21Db2xvclwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuZm9jdXNJdGVtPT09Mj8nIzAwNjZmZic6JyNjY2NjY2MnfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJhY2NvdW50LWlucHV0XCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgIFwiZm9jdXNcIjogXCJvbkZvY3VzRW1haWxcIixcbiAgICAgICAgICAgICAgICBcImJsdXJcIjogXCJvbkJsdXJcIixcbiAgICAgICAgICAgICAgICBcImNoYW5nZVwiOiBcImdldEVtYWlsXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImFjY291bnQtaXRlbVwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLnu4/ljoZcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJhY2NvdW50LXN1YnRpdGxlXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcIm1heGxlbmd0aFwiOiBcIjEwMFwiLFxuICAgICAgICAgICAgICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLmZvY3VzSXRlbT09PTM/JyMwMDY2ZmYnOicjY2NjY2NjJ31cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgICAgIFwiYWNjb3VudC1pbnB1dFwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICBcImZvY3VzXCI6IFwib25Gb2N1c0Jpb1wiLFxuICAgICAgICAgICAgICAgIFwiYmx1clwiOiBcIm9uQmx1clwiLFxuICAgICAgICAgICAgICAgIFwiY2hhbmdlXCI6IFwiZ2V0QmlvXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImRpdlwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICBcImFjY291bnQtaXRlbVwiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaWxkcmVuXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgIFwidmFsdWVcIjogXCLmgKfliKtcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJhY2NvdW50LXN1YnRpdGxlXCJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwic2VsZWN0XCIsXG4gICAgICAgICAgICAgIFwiYXR0clwiOiB7fSxcbiAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJmb250U2l6ZVwiOiBcIjI5LjNweFwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgICAgICBcInNlbGVjdGlvblwiXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiZXZlbnRzXCI6IHtcbiAgICAgICAgICAgICAgICBcImNoYW5nZVwiOiBcImdldEdlbmRlclwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFwidHlwZVwiOiBcIm9wdGlvblwiLFxuICAgICAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIGZhbHNlfSxcbiAgICAgICAgICAgICAgICAgICAgXCJzZWxlY3RlZFwiOiBcImZhbHNlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY29udGVudFwiOiBcIuWFiOeUn1wiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjNjY2NjY2XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZm9udFNpemVcIjogXCIyNy4zcHhcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgXCJ0eXBlXCI6IFwib3B0aW9uXCIsXG4gICAgICAgICAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gdHJ1ZX0sXG4gICAgICAgICAgICAgICAgICAgIFwic2VsZWN0ZWRcIjogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY29udGVudFwiOiBcIuWls+Wjq1wiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXCJzdHlsZVwiOiB7XG4gICAgICAgICAgICAgICAgICAgIFwiY29sb3JcIjogXCIjNjY2NjY2XCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZm9udFNpemVcIjogXCIyNy4zcHhcIlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwiZGl2XCIsXG4gICAgICBcImF0dHJcIjoge30sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwiYWNjb3VudC1idG4tYm94XCJcbiAgICAgIF0sXG4gICAgICBcImV2ZW50c1wiOiB7XG4gICAgICAgIFwiY2xpY2tcIjogXCJyZWdpc3RlclJlcXVlc3RcIlxuICAgICAgfSxcbiAgICAgIFwiY2hpbGRyZW5cIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgICAgICBcInZhbHVlXCI6IFwi56Gu6K6kXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xhc3NMaXN0XCI6IFtcbiAgICAgICAgICAgIFwiYWNjb3VudC1idG5cIlxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgXVxufSIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBcIi5jb250YWluZXJcIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduQ29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImNlbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiXG4gIH0sXG4gIFwiLnRvcC1jb250ZW50XCI6IHtcbiAgICBcImZsZXhEaXJlY3Rpb25cIjogXCJjb2x1bW5cIixcbiAgICBcImp1c3RpZnlDb250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcIm1hcmdpbkxlZnRcIjogXCIyMHB4XCIsXG4gICAgXCJtYXJnaW5SaWdodFwiOiBcIjIwcHhcIlxuICB9LFxuICBcIi5hY2NvdW50LWl0ZW1cIjoge1xuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiMjBweFwiXG4gIH0sXG4gIFwiLnBvc3Rlci1pdGVtXCI6IHtcbiAgICBcIndpZHRoXCI6IFwiMTAwJVwiLFxuICAgIFwiZmxleERpcmVjdGlvblwiOiBcImNvbHVtblwiLFxuICAgIFwianVzdGlmeUNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICBcImFsaWduQ29udGVudFwiOiBcImNlbnRlclwiXG4gIH0sXG4gIFwiLmljb25cIjoge1xuICAgIFwid2lkdGhcIjogXCIyNTBweFwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiMjUwcHhcIixcbiAgICBcIm9iamVjdEZpdFwiOiBcImNvdmVyXCIsXG4gICAgXCJib3JkZXJSYWRpdXNcIjogXCIxMjVweFwiLFxuICAgIFwiYm9yZGVyVG9wQ29sb3JcIjogXCIjZGMxNDNjXCIsXG4gICAgXCJib3JkZXJSaWdodENvbG9yXCI6IFwiI2RjMTQzY1wiLFxuICAgIFwiYm9yZGVyQm90dG9tQ29sb3JcIjogXCIjZGMxNDNjXCIsXG4gICAgXCJib3JkZXJMZWZ0Q29sb3JcIjogXCIjZGMxNDNjXCIsXG4gICAgXCJib3JkZXJUb3BXaWR0aFwiOiBcIjVweFwiLFxuICAgIFwiYm9yZGVyUmlnaHRXaWR0aFwiOiBcIjVweFwiLFxuICAgIFwiYm9yZGVyQm90dG9tV2lkdGhcIjogXCI1cHhcIixcbiAgICBcImJvcmRlckxlZnRXaWR0aFwiOiBcIjVweFwiLFxuICAgIFwibWFyZ2luVG9wXCI6IFwiNDBweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIyMzBweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiNDBweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjIzMHB4XCJcbiAgfSxcbiAgXCIuYV9pdGVtXCI6IHtcbiAgICBcInRleHRBbGlnblwiOiBcImNlbnRlclwiLFxuICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwicmdiYSgwLDAsMCwwKVwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiNjBweFwiLFxuICAgIFwid2lkdGhcIjogXCIxMDAlXCIsXG4gICAgXCJwYWRkaW5nVG9wXCI6IFwiMjBweFwiLFxuICAgIFwicGFkZGluZ1JpZ2h0XCI6IFwiMjBweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjIwcHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMjBweFwiLFxuICAgIFwiZm9udFNpemVcIjogXCIzNXB4XCIsXG4gICAgXCJjb2xvclwiOiBcIiMwMDY2ZmZcIixcbiAgICBcImxpbmVzXCI6IDFcbiAgfSxcbiAgXCIuYWNjb3VudC1zdWJ0aXRsZVwiOiB7XG4gICAgXCJ3aWR0aFwiOiBcIjE0N3B4XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjMxLjNweFwiLFxuICAgIFwiY29sb3JcIjogXCIjODA4MDgwXCJcbiAgfSxcbiAgXCIuYWNjb3VudC1pbnB1dFwiOiB7XG4gICAgXCJoZWlnaHRcIjogXCI2N3B4XCIsXG4gICAgXCJmbGV4XCI6IDEsXG4gICAgXCJmb250U2l6ZVwiOiBcIjMxLjNweFwiLFxuICAgIFwiY29sb3JcIjogXCIjMUExQTFBXCIsXG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiBcIjFweFwiXG4gIH0sXG4gIFwiLnNlbGVjdGlvblwiOiB7XG4gICAgXCJib3JkZXJCb3R0b21XaWR0aFwiOiBcIjFweFwiXG4gIH0sXG4gIFwiLmFjY291bnQtYnRuLWJveFwiOiB7XG4gICAgXCJtYXJnaW5Ub3BcIjogXCI1MHB4XCIsXG4gICAgXCJtYXJnaW5Cb3R0b21cIjogXCIxNTBweFwiXG4gIH0sXG4gIFwiLmFjY291bnQtYnRuXCI6IHtcbiAgICBcInBhZGRpbmdUb3BcIjogXCIyMHB4XCIsXG4gICAgXCJwYWRkaW5nUmlnaHRcIjogXCIxNTVweFwiLFxuICAgIFwicGFkZGluZ0JvdHRvbVwiOiBcIjIwcHhcIixcbiAgICBcInBhZGRpbmdMZWZ0XCI6IFwiMTU1cHhcIixcbiAgICBcIm1hcmdpblRvcFwiOiBcIjBweFwiLFxuICAgIFwibWFyZ2luUmlnaHRcIjogXCIxODhweFwiLFxuICAgIFwibWFyZ2luQm90dG9tXCI6IFwiMHB4XCIsXG4gICAgXCJtYXJnaW5MZWZ0XCI6IFwiMTg4cHhcIixcbiAgICBcImZvbnRTaXplXCI6IFwiMzEuM3B4XCIsXG4gICAgXCJjb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiMwMDY2ZmZcIixcbiAgICBcImJvcmRlclJhZGl1c1wiOiBcIjguM3B4XCJcbiAgfVxufSIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCAkYXBwX3JlcXVpcmUkKXtcInVzZSBzdHJpY3RcIjtcblxudmFyIF9zeXN0ZW0gPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KCRhcHBfcmVxdWlyZSQoXCJAYXBwLW1vZHVsZS9zeXN0ZW0ubWVkaWFcIikpO1xuXG52YXIgX3N5c3RlbTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KCRhcHBfcmVxdWlyZSQoXCJAYXBwLW1vZHVsZS9zeXN0ZW0ucHJvbXB0XCIpKTtcblxudmFyIF9zeXN0ZW0zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdCgkYXBwX3JlcXVpcmUkKFwiQGFwcC1tb2R1bGUvc3lzdGVtLnJlcXVlc3RcIikpO1xuXG52YXIgX3N5c3RlbTQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KCRhcHBfcmVxdWlyZSQoXCJAYXBwLW1vZHVsZS9zeXN0ZW0uZmV0Y2hcIikpO1xuXG52YXIgX3N5c3RlbTUgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KCRhcHBfcmVxdWlyZSQoXCJAYXBwLW1vZHVsZS9zeXN0ZW0ucm91dGVyXCIpKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgXCJkZWZhdWx0XCI6IG9iaiB9OyB9XG5cbnZhciBDcnlwdG9KUyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3J5cHRvLWpzXCIpO1xuXG52YXIgU2VjcmV0SWQgPSAnQUtJRHo1cDZGa3BreWFZOEhaVHpNdnBFbW4xdlVVZVVzWjR3JztcbnZhciBTZWNyZXRLZXkgPSAnNDVYclJ3SGRzQ1JkdTdCNXJmT3d0bWJJdmJ4QUR4WjQnO1xudmFyIGJ1Y2tldCA9ICdsdWNhc3poYW8tMTI1ODkwNjMzNCc7XG52YXIgcGVyaW9kID0gMzYwMDtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBwcm9wczogWydwaG9uZW51bScsICdwYXNzd29yZCddLFxuICBkYXRhOiB7XG4gICAgaWNvbnVyaTogJy9Db21tb24vZGVmYXVsdC5qcGcnLFxuICAgIGZvY3VzSXRlbTogLTEsXG4gICAgaW5wdXROYW1lOiAnJyxcbiAgICBpbnB1dFVzZXJOYW1lOiAnJyxcbiAgICBpbnB1dEVtYWlsOiAnJyxcbiAgICBpbnB1dEJpbzogJycsXG4gICAgaW5wdXRHZW5kZXI6IHRydWUsXG4gICAgaW5wdXRVUkk6ICcnLFxuICAgIGlucHV0UGhvbmVOdW06ICcnLFxuICAgIGlucHV0UGFzc3dvcmQ6ICcnLFxuICAgIGRpcmVjdG9yeTogJydcbiAgfSxcbiAgb25Gb2N1c05hbWU6IGZ1bmN0aW9uIG9uRm9jdXNOYW1lKCkge1xuICAgIHRoaXMuZm9jdXNJdGVtID0gMDtcbiAgfSxcbiAgb25Gb2N1c1VzZXJOYW1lOiBmdW5jdGlvbiBvbkZvY3VzVXNlck5hbWUoKSB7XG4gICAgdGhpcy5mb2N1c0l0ZW0gPSAxO1xuICB9LFxuICBvbkZvY3VzRW1haWw6IGZ1bmN0aW9uIG9uRm9jdXNFbWFpbCgpIHtcbiAgICB0aGlzLmZvY3VzSXRlbSA9IDI7XG4gIH0sXG4gIG9uRm9jdXNCaW86IGZ1bmN0aW9uIG9uRm9jdXNCaW8oKSB7XG4gICAgdGhpcy5mb2N1c0l0ZW0gPSAzO1xuICB9LFxuICBvbkJsdXI6IGZ1bmN0aW9uIG9uQmx1cigpIHtcbiAgICB0aGlzLmZvY3VzSXRlbSA9IC0xO1xuICB9LFxuICBnZXROYW1lOiBmdW5jdGlvbiBnZXROYW1lKGUpIHtcbiAgICB0aGlzLmlucHV0TmFtZSA9IGUudmFsdWU7XG4gIH0sXG4gIGdldFVzZXJOYW1lOiBmdW5jdGlvbiBnZXRVc2VyTmFtZShlKSB7XG4gICAgdGhpcy5pbnB1dFVzZXJOYW1lID0gZS52YWx1ZTtcbiAgfSxcbiAgZ2V0RW1haWw6IGZ1bmN0aW9uIGdldEVtYWlsKGUpIHtcbiAgICB0aGlzLmlucHV0RW1haWwgPSBlLnZhbHVlO1xuICB9LFxuICBnZXRCaW86IGZ1bmN0aW9uIGdldEJpbyhlKSB7XG4gICAgdGhpcy5pbnB1dEJpbyA9IGUudmFsdWU7XG4gIH0sXG4gIGdldEdlbmRlcjogZnVuY3Rpb24gZ2V0R2VuZGVyKGUpIHtcbiAgICB0aGlzLmlucHV0R2VuZGVyID0gZS5uZXdWYWx1ZTtcbiAgfSxcbiAgcmVnaXN0ZXJSZXF1ZXN0OiBmdW5jdGlvbiByZWdpc3RlclJlcXVlc3QoKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcbiAgICB2YXIgU3RhcnRUaW1lc3RhbXAgPSBNYXRoLmZsb29yKGRhdGUuZ2V0VGltZSgpIC8gMTAwMCk7XG4gICAgdmFyIEVuZFRpbWVzdGFtcCA9IFN0YXJ0VGltZXN0YW1wICsgcGVyaW9kO1xuICAgIHZhciBLZXlUaW1lID0gU3RhcnRUaW1lc3RhbXAgKyAnOycgKyBFbmRUaW1lc3RhbXA7XG4gICAgdmFyIFNpZ25LZXkgPSBDcnlwdG9KUy5IbWFjU0hBMShLZXlUaW1lLCBTZWNyZXRLZXkpLnRvU3RyaW5nKCk7XG4gICAgdmFyIFBvbGljeSA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIFwiZXhwaXJhdGlvblwiOiBcIjIwNTAtMDEtMDFUMDA6MDA6MDAuMDAwWlwiLFxuICAgICAgXCJjb25kaXRpb25zXCI6IFt7XG4gICAgICAgIFwiYnVja2V0XCI6IGJ1Y2tldFxuICAgICAgfSwge1xuICAgICAgICBcInEtc2lnbi1hbGdvcml0aG1cIjogXCJzaGExXCJcbiAgICAgIH0sIHtcbiAgICAgICAgXCJxLWFrXCI6IFNlY3JldElkXG4gICAgICB9LCB7XG4gICAgICAgIFwicS1zaWduLXRpbWVcIjogS2V5VGltZVxuICAgICAgfV1cbiAgICB9KTtcbiAgICB2YXIgU3RyaW5nVG9TaWduID0gQ3J5cHRvSlMuU0hBMShQb2xpY3kpLnRvU3RyaW5nKCk7XG4gICAgdmFyIFNpZ25hdHVyZSA9IENyeXB0b0pTLkhtYWNTSEExKFN0cmluZ1RvU2lnbiwgU2lnbktleSkudG9TdHJpbmcoKTtcbiAgICB2YXIgd29yZHMgPSBDcnlwdG9KUy5lbmMuVXRmOC5wYXJzZShQb2xpY3kpO1xuICAgIHZhciBiYXNlNjQgPSBDcnlwdG9KUy5lbmMuQmFzZTY0LnN0cmluZ2lmeSh3b3Jkcyk7XG5cbiAgICBfc3lzdGVtM1tcImRlZmF1bHRcIl0udXBsb2FkKHtcbiAgICAgIFwidXJsXCI6ICdodHRwczovL2x1Y2Fzemhhby0xMjU4OTA2MzM0LmNvcy5hcC1ndWFuZ3pob3UubXlxY2xvdWQuY29tJyxcbiAgICAgIFwiZmlsZXNcIjogW3tcbiAgICAgICAgdXJpOiB0aGF0Lmljb251cmlcbiAgICAgIH1dLFxuICAgICAgXCJkYXRhXCI6IFt7XG4gICAgICAgIFwibmFtZVwiOiBcImtleVwiLFxuICAgICAgICBcInZhbHVlXCI6IHRoYXQuZGlyZWN0b3J5ICsgXCIke2ZpbGVuYW1lfVwiXG4gICAgICB9LCB7XG4gICAgICAgIFwibmFtZVwiOiBcInBvbGljeVwiLFxuICAgICAgICBcInZhbHVlXCI6IGJhc2U2NFxuICAgICAgfSwge1xuICAgICAgICBcIm5hbWVcIjogXCJxLXNpZ24tYWxnb3JpdGhtXCIsXG4gICAgICAgIFwidmFsdWVcIjogXCJzaGExXCJcbiAgICAgIH0sIHtcbiAgICAgICAgXCJuYW1lXCI6IFwicS1ha1wiLFxuICAgICAgICBcInZhbHVlXCI6IFNlY3JldElkXG4gICAgICB9LCB7XG4gICAgICAgIFwibmFtZVwiOiBcInEta2V5LXRpbWVcIixcbiAgICAgICAgXCJ2YWx1ZVwiOiBLZXlUaW1lXG4gICAgICB9LCB7XG4gICAgICAgIFwibmFtZVwiOiBcInEtc2lnbmF0dXJlXCIsXG4gICAgICAgIFwidmFsdWVcIjogU2lnbmF0dXJlXG4gICAgICB9XSxcbiAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MoZGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInJlcXVlc3QudXBsb2FkIHN1Y2Nlc3MgKFwiICsgZGF0YS5jb2RlICsgXCIpXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmRhdGEpO1xuICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmhlYWRlcnMuTG9jYXRpb24pO1xuICAgICAgICB0aGF0LmlucHV0VVJJID0gZGF0YS5oZWFkZXJzLkxvY2F0aW9uO1xuICAgICAgfSxcbiAgICAgIGZhaWw6IGZ1bmN0aW9uIGZhaWwoZXJybXNnLCBlcnJjb2RlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicmVxdWVzdC51cGxvYWQgZmFpbCAoXCIgKyBlcnJjb2RlICsgXCIpXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJtc2cpO1xuXG4gICAgICAgIF9zeXN0ZW0yW1wiZGVmYXVsdFwiXS5zaG93VG9hc3Qoe1xuICAgICAgICAgIG1lc3NhZ2U6ICfnvZHnu5zplJnor68nLFxuICAgICAgICAgIGltYWdlOiAnL0NvbW1vbi9sb2dvLnBuZydcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sXG4gIHBpY2tQaG90bzogZnVuY3Rpb24gcGlja1Bob3RvKCkge1xuICAgIHZhciB0aGF0ID0gdGhpcztcblxuICAgIF9zeXN0ZW1bXCJkZWZhdWx0XCJdLnBpY2tJbWFnZSh7XG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKGRhdGEpIHtcbiAgICAgICAgdGhhdC5pY29udXJpID0gZGF0YS51cmk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdtZWRpYS5waWNrSW1hZ2Ugc3VjY2VzcycpO1xuICAgICAgfSxcbiAgICAgIGZhaWw6IGZ1bmN0aW9uIGZhaWwoZXJybXNnLCBlcnJjb2RlKSB7XG4gICAgICAgIF9zeXN0ZW0yW1wiZGVmYXVsdFwiXS5zaG93VG9hc3Qoe1xuICAgICAgICAgIG1lc3NhZ2U6IFwi6YCJ5Y+W5aSx6LSlXCIsXG4gICAgICAgICAgaW1hZ2U6ICcvQ29tbW9uL2xvZ28ucG5nJ1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zb2xlLmxvZygnbWVkaWEucGlja0ltYWdlIGZhaWwgJyArIGVycmNvZGUpO1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJtc2cpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICB2aWV3UGhvdG86IGZ1bmN0aW9uIHZpZXdQaG90bygpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgICBfc3lzdGVtW1wiZGVmYXVsdFwiXS5wcmV2aWV3SW1hZ2Uoe1xuICAgICAgY3VycmVudDogdGhhdC5pY29udXJpLFxuICAgICAgdXJpczogW3RoYXQuaWNvbnVyaV0sXG4gICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnbWVkaWEucHJldmlld0ltYWdlIHN1Y2Nlc3MnKTtcbiAgICAgIH0sXG4gICAgICBmYWlsOiBmdW5jdGlvbiBmYWlsKGVycm1zZywgZXJyY29kZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnbWVkaWEucHJldmlld0ltYWdlIGZhaWwgJyArIGVycmNvZGUpO1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJtc2cpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBvbkluaXQ6IGZ1bmN0aW9uIG9uSW5pdCgpIHtcbiAgICB0aGlzLmlucHV0UGhvbmVOdW0gPSB0aGlzLnBob25lbnVtO1xuICAgIHRoaXMuaW5wdXRQYXNzd29yZCA9IHRoaXMucGFzc3dvcmQ7XG4gICAgdGhpcy5kaXJlY3RvcnkgPSAnc3RhY2svJyArIHRoaXMucGhvbmVudW0gKyAnLyc7XG4gICAgdGhpcy4kd2F0Y2goJ2lucHV0VVJJJywgJ2hhbmRsZVJlZ2lzdGVyJyk7XG4gIH0sXG4gIHJhbmRvbVN0cjogZnVuY3Rpb24gcmFuZG9tU3RyKCkge1xuICAgIHJldHVybiAn5ZWKJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnNsaWNlKC04KTtcbiAgfSxcbiAgaGFuZGxlUmVnaXN0ZXI6IGZ1bmN0aW9uIGhhbmRsZVJlZ2lzdGVyKG5ld1ZhbCwgb2xkVmFsKSB7XG4gICAgaWYgKG5ld1ZhbCAhPT0gJycpIHtcbiAgICAgIHZhciBkYXRhID0ge1xuICAgICAgICBcInBob25lTnVtXCI6IHRoaXMuaW5wdXRQaG9uZU51bSxcbiAgICAgICAgXCJwYXNzd29yZFwiOiB0aGlzLmlucHV0UGFzc3dvcmQsXG4gICAgICAgIFwibmFtZVwiOiB0aGlzLmlucHV0TmFtZSxcbiAgICAgICAgXCJlbWFpbFwiOiB0aGlzLmlucHV0RW1haWwsXG4gICAgICAgIFwiZ2VuZGVyXCI6IHRoaXMuaW5wdXRHZW5kZXIgPT09IFwiZmFsc2VcIiA/IDAgOiAxLFxuICAgICAgICBcInBob3RvXCI6IHRoaXMuaW5wdXRVUkksXG4gICAgICAgIFwidXNlcm5hbWVcIjogdGhpcy5pbnB1dFVzZXJOYW1lICE9PSAnJyA/IHRoaXMuaW5wdXRVc2VyTmFtZSA6IHRoaXMucmFuZG9tU3RyKCksXG4gICAgICAgIFwiYmlvXCI6IHRoaXMuaW5wdXRCaW9cbiAgICAgIH07XG4gICAgICB2YXIgdGhhdCA9IHRoaXM7XG5cbiAgICAgIF9zeXN0ZW00W1wiZGVmYXVsdFwiXS5mZXRjaCh7XG4gICAgICAgIHVybDogXCJodHRwOi8vMTAxLjEzMi4yMjcuMjE4OjgwODAvc3RhY2tVc2VyTWFuYWdlbWVudC9zaWduaW5cIixcbiAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgcmVzcG9uc2VUeXBlOiAnanNvbicsXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKGRhdGEpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImZldGNoLmZldGNoIHN1Y2Nlc3NcIik7XG4gICAgICAgICAgdmFyIGNvZGUgPSBkYXRhLmRhdGEuZXJyTm87XG5cbiAgICAgICAgICBpZiAoY29kZSA9PT0gXCIyMDBcIikge1xuICAgICAgICAgICAgX3N5c3RlbTJbXCJkZWZhdWx0XCJdLnNob3dEaWFsb2coe1xuICAgICAgICAgICAgICBtZXNzYWdlOiAn5rOo5YaM5oiQ5YqfJyxcbiAgICAgICAgICAgICAgYnV0dG9uczogW3tcbiAgICAgICAgICAgICAgICB0ZXh0OiAn56Gu6K6kJyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJyMzM2RkNDQnXG4gICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImhhbmRsaW5nIGNhbGxiYWNrXCIpO1xuXG4gICAgICAgICAgICAgICAgX3N5c3RlbTVbXCJkZWZhdWx0XCJdLnJlcGxhY2Uoe1xuICAgICAgICAgICAgICAgICAgdXJpOiAnL0xvZ2luJyxcbiAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBwaG9uZW51bTogdGhhdC5pbnB1dFBob25lTnVtXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uIGZhaWwoZGF0YSwgY29kZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGFuZGxpbmcgZmFpbCwgY29kZSA9IFwiICsgY29kZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSBpZiAoY29kZSA9PT0gXCI1MDBcIikge1xuICAgICAgICAgICAgX3N5c3RlbTJbXCJkZWZhdWx0XCJdLnNob3dEaWFsb2coe1xuICAgICAgICAgICAgICBtZXNzYWdlOiAn5oKo55qE5omL5py65Y+35bey5rOo5YaM6L+H77yM6K+355u05o6l55m75b2VJyxcbiAgICAgICAgICAgICAgYnV0dG9uczogW3tcbiAgICAgICAgICAgICAgICB0ZXh0OiAn56Gu6K6kJyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJyMzM2RkNDQnXG4gICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImhhbmRsaW5nIGNhbGxiYWNrXCIpO1xuXG4gICAgICAgICAgICAgICAgX3N5c3RlbTVbXCJkZWZhdWx0XCJdLnJlcGxhY2Uoe1xuICAgICAgICAgICAgICAgICAgdXJpOiAnL0xvZ2luJyxcbiAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICBwaG9uZW51bTogdGhhdC5pbnB1dFBob25lTnVtXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGZhaWw6IGZ1bmN0aW9uIGZhaWwoZGF0YSwgY29kZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiaGFuZGxpbmcgZmFpbCwgY29kZSA9IFwiICsgY29kZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZmFpbDogZnVuY3Rpb24gZmFpbChlcnJtc2csIGVycmNvZGUpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImZldGNoLmZldGNoIGZhaWwgXCIgKyBlcnJjb2RlKTtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnJtc2cpO1xuXG4gICAgICAgICAgX3N5c3RlbTJbXCJkZWZhdWx0XCJdLnNob3dUb2FzdCh7XG4gICAgICAgICAgICBtZXNzYWdlOiBcIue9kee7nOmUmeivr1wiLFxuICAgICAgICAgICAgaW1hZ2U6ICcvQ29tbW9uL2xvZ28ucG5nJ1xuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gY29tcGxldGUoKSB7XG4gICAgICAgICAgdGhhdC5pbnB1dFVSSSA9ICcnO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn07XG52YXIgbW9kdWxlT3duID0gZXhwb3J0cy5kZWZhdWx0IHx8IG1vZHVsZS5leHBvcnRzO1xudmFyIGFjY2Vzc29ycyA9IFsncHVibGljJywgJ3Byb3RlY3RlZCcsICdwcml2YXRlJ107XG5pZiAobW9kdWxlT3duLmRhdGEgJiYgYWNjZXNzb3JzLnNvbWUoZnVuY3Rpb24gKGFjYykge1xuICAgIHJldHVybiBtb2R1bGVPd25bYWNjXTtcbiAgfSkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdGb3IgVk0gb2JqZWN0cywgYXR0cmlidXRlIGRhdGEgbXVzdCBub3QgY29leGlzdCB3aXRoIHB1YmxpYywgcHJvdGVjdGVkLCBvciBwcml2YXRlLiBQbGVhc2UgcmVwbGFjZSBkYXRhIHdpdGggcHVibGljLicpO1xufSBlbHNlIGlmICghbW9kdWxlT3duLmRhdGEpIHtcbiAgbW9kdWxlT3duLmRhdGEgPSB7fTtcbiAgbW9kdWxlT3duLl9kZXNjcmlwdG9yID0ge307XG4gIGFjY2Vzc29ycy5mb3JFYWNoKGZ1bmN0aW9uKGFjYykge1xuICAgIHZhciBhY2NUeXBlID0gdHlwZW9mIG1vZHVsZU93blthY2NdO1xuICAgIGlmIChhY2NUeXBlID09PSAnb2JqZWN0Jykge1xuICAgICAgbW9kdWxlT3duLmRhdGEgPSBPYmplY3QuYXNzaWduKG1vZHVsZU93bi5kYXRhLCBtb2R1bGVPd25bYWNjXSk7XG4gICAgICBmb3IgKHZhciBuYW1lIGluIG1vZHVsZU93blthY2NdKSB7XG4gICAgICAgIG1vZHVsZU93bi5fZGVzY3JpcHRvcltuYW1lXSA9IHthY2Nlc3MgOiBhY2N9O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYWNjVHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY29uc29sZS53YXJuKCdGb3IgVk0gb2JqZWN0cywgYXR0cmlidXRlICcgKyBhY2MgKyAnIHZhbHVlIG11c3Qgbm90IGJlIGEgZnVuY3Rpb24uIENoYW5nZSB0aGUgdmFsdWUgdG8gYW4gb2JqZWN0LicpO1xuICAgIH1cbiAgfSk7XG59fSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3Z2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQy9TQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDM0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3BKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3RJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDM1FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDckpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN0TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDL0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ2xVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDbFVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDMVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzlJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDaEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDbklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUMvMkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDN0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDbkhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ2pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDdk9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ2p3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQy9MQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDN0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDalFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDekZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QSIsInNvdXJjZVJvb3QiOiIifQ==