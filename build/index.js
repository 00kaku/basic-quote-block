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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/quotes.svg":
/*!*******************************!*\
  !*** ./src/assets/quotes.svg ***!
  \*******************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return SvgQuotes; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



function SvgQuotes(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 95.333,
    height: 95.332
  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
    d: "M30.512 43.939c-2.348-.676-4.696-1.019-6.98-1.019-3.527 0-6.47.806-8.752 1.793 2.2-8.054 7.485-21.951 18.013-23.516a2.501 2.501 0 002.04-1.799l2.301-8.23a2.5 2.5 0 00-2.068-3.15 17.477 17.477 0 00-2.354-.16c-12.637 0-25.152 13.19-30.433 32.076-3.1 11.08-4.009 27.738 3.627 38.223 4.273 5.867 10.507 9 18.529 9.313l.098.002c9.898 0 18.675-6.666 21.345-16.209a22.032 22.032 0 00-2.032-16.851c-2.875-5.105-7.61-8.826-13.334-10.473zM92.471 54.413c-2.875-5.106-7.61-8.827-13.334-10.474-2.348-.676-4.696-1.019-6.979-1.019a21.94 21.94 0 00-8.753 1.793c2.2-8.054 7.485-21.951 18.014-23.516a2.503 2.503 0 002.04-1.799l2.301-8.23a2.5 2.5 0 00-2.068-3.15 17.455 17.455 0 00-2.354-.16c-12.637 0-25.152 13.19-30.434 32.076-3.099 11.08-4.008 27.738 3.629 38.225 4.272 5.866 10.507 9 18.528 9.312l.099.002c9.897 0 18.675-6.666 21.345-16.209a22.045 22.045 0 00-2.034-16.851z"
  })));
}

/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9Ijk1LjMzM3B4IiBoZWlnaHQ9Ijk1LjMzMnB4IiB2aWV3Qm94PSIwIDAgOTUuMzMzIDk1LjMzMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgOTUuMzMzIDk1LjMzMjsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0zMC41MTIsNDMuOTM5Yy0yLjM0OC0wLjY3Ni00LjY5Ni0xLjAxOS02Ljk4LTEuMDE5Yy0zLjUyNywwLTYuNDcsMC44MDYtOC43NTIsMS43OTMNCgkJCWMyLjItOC4wNTQsNy40ODUtMjEuOTUxLDE4LjAxMy0yMy41MTZjMC45NzUtMC4xNDUsMS43NzQtMC44NSwyLjA0LTEuNzk5bDIuMzAxLTguMjNjMC4xOTQtMC42OTYsMC4wNzktMS40NDEtMC4zMTgtMi4wNDUNCgkJCXMtMS4wMzUtMS4wMDctMS43NS0xLjEwNWMtMC43NzctMC4xMDYtMS41NjktMC4xNi0yLjM1NC0wLjE2Yy0xMi42MzcsMC0yNS4xNTIsMTMuMTktMzAuNDMzLDMyLjA3Ng0KCQkJYy0zLjEsMTEuMDgtNC4wMDksMjcuNzM4LDMuNjI3LDM4LjIyM2M0LjI3Myw1Ljg2NywxMC41MDcsOSwxOC41MjksOS4zMTNjMC4wMzMsMC4wMDEsMC4wNjUsMC4wMDIsMC4wOTgsMC4wMDINCgkJCWM5Ljg5OCwwLDE4LjY3NS02LjY2NiwyMS4zNDUtMTYuMjA5YzEuNTk1LTUuNzA1LDAuODc0LTExLjY4OC0yLjAzMi0xNi44NTFDNDAuOTcxLDQ5LjMwNywzNi4yMzYsNDUuNTg2LDMwLjUxMiw0My45Mzl6Ii8+DQoJCTxwYXRoIGQ9Ik05Mi40NzEsNTQuNDEzYy0yLjg3NS01LjEwNi03LjYxLTguODI3LTEzLjMzNC0xMC40NzRjLTIuMzQ4LTAuNjc2LTQuNjk2LTEuMDE5LTYuOTc5LTEuMDE5DQoJCQljLTMuNTI3LDAtNi40NzEsMC44MDYtOC43NTMsMS43OTNjMi4yLTguMDU0LDcuNDg1LTIxLjk1MSwxOC4wMTQtMjMuNTE2YzAuOTc1LTAuMTQ1LDEuNzczLTAuODUsMi4wNC0xLjc5OWwyLjMwMS04LjIzDQoJCQljMC4xOTQtMC42OTYsMC4wNzktMS40NDEtMC4zMTgtMi4wNDVjLTAuMzk2LTAuNjA0LTEuMDM0LTEuMDA3LTEuNzUtMS4xMDVjLTAuNzc2LTAuMTA2LTEuNTY4LTAuMTYtMi4zNTQtMC4xNg0KCQkJYy0xMi42MzcsMC0yNS4xNTIsMTMuMTktMzAuNDM0LDMyLjA3NmMtMy4wOTksMTEuMDgtNC4wMDgsMjcuNzM4LDMuNjI5LDM4LjIyNWM0LjI3Miw1Ljg2NiwxMC41MDcsOSwxOC41MjgsOS4zMTINCgkJCWMwLjAzMywwLjAwMSwwLjA2NSwwLjAwMiwwLjA5OSwwLjAwMmM5Ljg5NywwLDE4LjY3NS02LjY2NiwyMS4zNDUtMTYuMjA5Qzk2LjA5OCw2NS41NTksOTUuMzc2LDU5LjU3NSw5Mi40NzEsNTQuNDEzeiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K");


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_quotes_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/quotes.svg */ "./src/assets/quotes.svg");






Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('basic/quote-block', {
  apiVersion: 2,
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Basic Quote Block'),
  icon: 'lightbulb',
  category: 'design',
  attributes: {
    quote: {
      type: 'string'
    },
    author: {
      type: 'string'
    },
    citation: {
      type: 'string'
    },
    color: {
      type: 'string'
    },
    imgUrl: {
      type: 'string'
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        setAttributes = _ref.setAttributes;
    var blockProps = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["useBlockProps"])();
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], {
      key: "settings"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
      title: "Theme Color",
      initialOpen: true
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["ColorPalette"], {
      onChange: function onChange(color) {
        return setAttributes({
          color: color
        });
      },
      value: attributes.color
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
      title: "Author Image",
      initialOpen: false
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["MediaPlaceholder"], {
      onSelect: function onSelect(el) {
        setAttributes({
          imgUrl: el.url
        });
      },
      allowedTypes: ['image'],
      multiple: false
    }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "quote__header",
      style: {
        'border-top': "2px solid ".concat(attributes.color)
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: _assets_quotes_svg__WEBPACK_IMPORTED_MODULE_5__["default"],
      className: "quotes__image",
      alt: "Quote:"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      value: attributes.quote,
      onChange: function onChange(quote) {
        return setAttributes({
          quote: quote
        });
      },
      placeholder: 'Quote...'
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "quote__footer"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "quote__footer__text"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      value: attributes.citation,
      onChange: function onChange(citation) {
        return setAttributes({
          citation: citation
        });
      },
      placeholder: 'Citation...',
      tagName: "h3",
      style: {
        color: attributes.color
      },
      className: "citation"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["RichText"], {
      value: attributes.author,
      onChange: function onChange(author) {
        return setAttributes({
          author: author
        });
      },
      placeholder: 'Author...',
      tagName: "h4",
      className: "author"
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      style: {
        display: 'flex'
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "image__outer"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "image"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: attributes.imgUrl || 'https://via.placeholder.com/50x50',
      alt: "Author: ".concat(attributes.author || 'Unknown')
    }))), attributes.imgUrl && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("button", {
      style: {
        maxHeight: '25px',
        background: '#ff0033',
        border: 'none',
        color: '#fff',
        textAlign: 'center',
        borderRadius: '5px'
      },
      onClick: function onClick() {
        return setAttributes({
          imgUrl: null
        });
      }
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('x')))));
  },
  save: function save(_ref2) {
    var attributes = _ref2.attributes;
    var blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["useBlockProps"].save();
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "quote__header",
      style: {
        'border-top': "2px solid ".concat(attributes.color)
      }
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: _assets_quotes_svg__WEBPACK_IMPORTED_MODULE_5__["default"],
      className: "quotes__image",
      alt: "Quote:"
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", {
      className: "quote__quote"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])(attributes.quote))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "quote__footer"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "quote__footer__text"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", {
      style: {
        color: attributes.color
      }
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])(attributes.citation)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h4", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])(attributes.author))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "image__outer"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "image"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("img", {
      src: attributes.imgUrl || 'https://via.placeholder.com/50x50',
      alt: "Author: ".concat(attributes.author || 'Unknown')
    })))));
  }
});

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map