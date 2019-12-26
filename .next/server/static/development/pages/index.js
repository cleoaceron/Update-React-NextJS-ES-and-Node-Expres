module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ ({

/***/ "./components/ActiveLink.js":
/*!**********************************!*\
  !*** ./components/ActiveLink.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\xampp\\htdocs\\test-site\\components\\ActiveLink.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
 // typically you want to use `next/link` for this usecase
// but this example shows how you can also access the router
// using the withRouter utility.

const ActiveLink = ({
  children,
  router,
  href,
  asPath,
  as
}) => {
  const handleClick = e => {
    e.preventDefault();
    router.push(href, as);
  }; // console.log(children)
  // console.log(href)
  // console.log(router)
  // console.log(router.asPath)
  // console.log(router.asPath)
  // console.log(children)
  // console.log(router.query)
  // console.log(href)
  // console.log(as)


  return __jsx("a", {
    href: href,
    onClick: handleClick,
    as: as,
    className: router.asPath === href ? 'text-sm-left nav-link active' : 'text-sm-left nav-link',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(ActiveLink));

/***/ }),

/***/ "./components/AllImage.js":
/*!********************************!*\
  !*** ./components/AllImage.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\xampp\\htdocs\\test-site\\components\\AllImage.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const AllImage = data => {
  // console.log(data.router.query.searchSensor)
  // console.log(data)
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, data._type === 'artist' ? __jsx("div", {
    className: "col-sm-4",
    key: data._id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    target: "blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("div", {
    className: "all-images__body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("div", {
    className: "all-images__body--img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("img", {
    src: `${data.artistImage}` !== `null` ? `${data.artistImage}` : 'https://image-placeholder.com/images/actual-size/100x75.png',
    alt: data.artistName,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }))))) : data._type === 'product' ? __jsx("div", {
    className: "col-sm-4",
    key: data._id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    target: "blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx("div", {
    className: "all-images__body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx("div", {
    className: "all-images__body--img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("img", {
    src: `${data.featurePicture.url}` !== `null` ? `${data.featurePicture.url}` : 'https://image-placeholder.com/images/actual-size/100x75.png',
    alt: data.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }))))) : null);
};

AllImage.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.any // eslint-disable-line

};
/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(AllImage));

/***/ }),

/***/ "./components/AllResult.js":
/*!*********************************!*\
  !*** ./components/AllResult.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\xampp\\htdocs\\test-site\\components\\AllResult.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const AllResult = data => {
  let date = new Date(data.publicationDate);
  return (// data._type === 'artist' ?
    // 	<div></div>
    // 	// <div>{data.artistName.slice(0, 5).map((item) => (item))}</div>
    // 	:
    data._type === 'artist' ? __jsx("div", {
      className: "artist-result__container",
      key: data._id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: undefined
    }, __jsx("div", {
      className: "artist-result__header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: undefined
    }, __jsx("a", {
      href: data.urlExtension,
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: undefined
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: undefined
    }, __jsx("span", {
      dangerouslySetInnerHTML: {
        __html: data.artistName
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: undefined
    }), " | ", data.artistBrand), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: undefined
    }, data.urlExtension))), __jsx("div", {
      className: "artist-result__body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: undefined
    }, data.typesOfArtist ? __jsx("ul", {
      className: "artist-result__body--artist-type",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23
      },
      __self: undefined
    }, data.typesOfArtist.map(item => __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: undefined
    }, item))) : '', data.artistBand === null || data.artistBand === "" ? '' : __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: undefined
    }, __jsx("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: undefined
    }, "Band: "), __jsx("span", {
      dangerouslySetInnerHTML: {
        __html: data.artistBand.replace(/<[^>]+>/g, '')
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: undefined
    })))) : data._type === 'product' ? __jsx("div", {
      className: "product-result__container",
      key: data._id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: undefined
    }, __jsx("div", {
      className: "product-result__header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: undefined
    }, __jsx("a", {
      href: data.url,
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: undefined
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: undefined
    }, __jsx("span", {
      dangerouslySetInnerHTML: {
        __html: data.name
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: undefined
    }), " | ", __jsx("span", {
      dangerouslySetInnerHTML: {
        __html: data.brand
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: undefined
    })), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: undefined
    }, data.url))), __jsx("div", {
      className: "product-result__body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: undefined
    }, __jsx("div", {
      className: "product-result__body--description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: undefined
    }, __jsx("div", {
      className: "rating-stars rating-stars--sm",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: undefined
    }, data.averageRating !== 0 ? __jsx("div", {
      className: "rating-stars__container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: undefined
    }, __jsx("div", {
      className: "rating-stars__percentage",
      style: {
        width: `${Math.round(data.averageRating / 5 * 100).toFixed(2) + '%'}`
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: undefined
    })) : '', __jsx("div", {
      className: "rating-stars__count",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: undefined
    }, `${data.numberOfReviews}` !== `0` ? `(${data.numberOfReviews})` : '')), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: undefined
    }, data.subHeadText)))) : data._type === 'download' ? __jsx("div", {
      className: "all-result__container",
      key: data._id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: undefined
    }, __jsx("div", {
      className: "all-result__header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69
      },
      __self: undefined
    }, __jsx("a", {
      href: data.downloadPageUrl,
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70
      },
      __self: undefined
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: undefined
    }, __jsx("span", {
      dangerouslySetInnerHTML: {
        __html: data.productName
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71
      },
      __self: undefined
    })), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72
      },
      __self: undefined
    }, data.downloadPageUrl))), __jsx("div", {
      className: "all-result__body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: undefined
    }, __jsx("div", {
      className: "all-result__body--description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: undefined
    }, data.productName !== null ? __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: undefined
    }, __jsx("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: undefined
    }, "Model:"), " ", __jsx("span", {
      dangerouslySetInnerHTML: {
        __html: data.productName
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: undefined
    })) : '', data.group !== null ? __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: undefined
    }, __jsx("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: undefined
    }, "Type:"), " ", __jsx("span", {
      dangerouslySetInnerHTML: {
        __html: data.group
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: undefined
    })) : '', data.productName !== null ? __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: undefined
    }, __jsx("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: undefined
    }, "Description:"), " ", __jsx("span", {
      dangerouslySetInnerHTML: {
        __html: data.title
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87
      },
      __self: undefined
    })) : '', data.version !== null ? __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: undefined
    }, __jsx("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: undefined
    }, "Notes:"), " ", __jsx("span", {
      dangerouslySetInnerHTML: {
        __html: data.version
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: undefined
    })) : '', data.publicationDate !== null ? __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: undefined
    }, __jsx("strong", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: undefined
    }, "Date: "), __jsx("span", {
      dangerouslySetInnerHTML: {
        __html: date.toDateString()
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: undefined
    })) : ''))) : data._type === 'discussion' ? __jsx("div", {
      className: "discussion-result__container",
      key: data._id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: undefined
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: undefined
    }, __jsx("div", {
      className: "discussion-result__header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: undefined
    }, __jsx("a", {
      href: 'https://community.musictribe.com' + data.view_href,
      target: "_blank",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: undefined
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: undefined
    }, __jsx("span", {
      dangerouslySetInnerHTML: {
        __html: data.subject
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: undefined
    })), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: undefined
    }, 'https://community.musictribe.com' + data.view_href))), __jsx("div", {
      className: "discussion-result__body",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111
      },
      __self: undefined
    }, __jsx("div", {
      className: "discussion-result__body--description",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: undefined
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: undefined
    }, "by ", __jsx("span", {
      dangerouslySetInnerHTML: {
        __html: data.author.login
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: undefined
    })), __jsx("p", {
      dangerouslySetInnerHTML: {
        __html: data.body.length > 250 ? data.body.replace(/(?!<mark[^>]*>|<\/\mark[^>]*>)<[^>]+>/g, '').substring(0, 230) + '...' : data.body.replace(/(?!<mark[^>]*>|<\/\mark[^>]*>)<[^>]+>/g, '')
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: undefined
    }))))) // :
    // data._type === 'discussion' ?
    // 	<div>
    // 		<div className='product-result__header'>
    // 			<a href={'https://community.musictribe.com' + data.view_href} target='_blank'>
    // 				<p>{data.subject}</p>
    // 				<p>{'https://community.musictribe.com' + data.view_href}</p>
    // 			</a>
    // 		</div>
    // 		<div className='product-result__body'>
    // 			<div className='product-result__body--description'>
    // 				{/* <p dangerouslySetInnerHTML={{ __html: data.body }}></p> */}
    // 				<p dangerouslySetInnerHTML={{ __html: data.body.replace(/<[^>]+>/g, '').substring(0, 250) }} />
    // 			</div>
    // 		</div>
    // 	</div>					// :
    // data._type === 'video' ?
    // <div className='all-result__container' key={data._id}>
    // 	<a href={data.url} target='blank'>
    // 		<div className='all-result__header'>
    // 			<p>{data.title}</p>
    // 		</div>
    // 	</a>
    // 	{/* <div className='all-result__body'>
    // 		<div className='all-result__body--img'>
    // 			<iframe width="420" height="315"
    // 				src={data.url}>
    // 			</iframe>
    // 		</div>
    // 		<div className='all-result__body--description'>
    // 			{`${data.artistBand}` !== `null` && '' ? <p><strong>Band:</strong> {data.artistBand}</p> : ''}
    // 		</div>
    // 	</div> */}
    // </div>
    : null
  );
};

AllResult.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any // eslint-disable-line

};
/* harmony default export */ __webpack_exports__["default"] = (AllResult);

/***/ }),

/***/ "./components/AllVideo.js":
/*!********************************!*\
  !*** ./components/AllVideo.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\xampp\\htdocs\\test-site\\components\\AllVideo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const AllVideo = data => {
  // console.log(data),
  return data._type === 'video' ? __jsx("div", {
    key: data._id,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("div", {
    className: "all-video__body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("div", {
    className: "all-video__body--thumbnail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("iframe", {
    controls: true,
    src: data.url,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  })), __jsx("div", {
    className: "all-video__body--description",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx("a", {
    href: data.url,
    target: "_blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  })))) : null;
};

AllVideo.propTypes = {
  data: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.any // eslint-disable-line

};
/* harmony default export */ __webpack_exports__["default"] = (AllVideo);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scss/style.scss */ "./scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _appbaseio_reactivesearch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @appbaseio/reactivesearch */ "@appbaseio/reactivesearch");
/* harmony import */ var _appbaseio_reactivesearch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_appbaseio_reactivesearch__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "C:\\xampp\\htdocs\\test-site\\components\\Header.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




const parseSuggestion = suggestion => ({
  // description: suggestion.source.artistDescription,
  label: renderSuggestion(suggestion),
  source: suggestion.source
});

const getValue = suggestion => {
  return [suggestion.source.artistName, suggestion.source.name];
};

Array.prototype.groupBy = prop => {
  return undefined.reduce(function (groups, item) {
    const val = item[prop];
    groups[val] = groups[val] || [];
    groups[val].push(item);
    return groups;
  }, {});
};

const test = suggestion => {
  suggestion.map(suggestions => console.log(suggestions.label));
};

const renderSuggestion = suggestion => {
  // suggestion.map(key, index) => ({
  // 	console.log(key)
  // })
  if (suggestion.source._type === 'artist') {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: undefined
    }, __jsx("img", {
      src: suggestion.source.artistImage,
      height: "50",
      width: "60",
      style: {
        marginRight: 10
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: undefined
    }), suggestion.source.artistName, " in", __jsx("span", {
      style: {
        color: 'dodgerblue',
        marginLeft: 5
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: undefined
    }, suggestion.source._type));
  } else if (suggestion.source._type === 'product') {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: undefined
    }, __jsx("img", {
      src: suggestion.source.featurePicture.url,
      height: "50",
      width: "60",
      style: {
        marginRight: 10
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: undefined
    }), suggestion.source.name, " in", __jsx("span", {
      style: {
        color: 'dodgerblue',
        marginLeft: 5
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: undefined
    }, suggestion.source._type));
  } else if (suggestion.source._type === 'download') {
    return __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: undefined
    }, __jsx("img", {
      src: "https://via.placeholder.com/150",
      height: "50",
      width: "60",
      style: {
        marginRight: 10
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: undefined
    }), suggestion.source.title, " in", __jsx("span", {
      style: {
        color: 'dodgerblue',
        marginLeft: 5
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: undefined
    }, suggestion.source._type));
  }

  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }, __jsx("img", {
    src: suggestion.source.featurePicture,
    height: "50",
    width: "60",
    style: {
      marginRight: 10
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: undefined
  }), suggestion.source.name, " ", suggestion.source.name, " in", __jsx("span", {
    style: {
      color: 'dodgerblue',
      marginLeft: 5
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: undefined
  }, suggestion.source._type));
};

const Layout = props => {
  const {
    0: isActive,
    1: setActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('');
  return __jsx("header", {
    className: "header-con",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, __jsx("div", {
    className: "header js-header header--sub",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, __jsx("div", {
    className: "header__container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, __jsx("div", {
    className: "header__menu js-header-menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: undefined
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  })), __jsx("div", {
    className: "header__logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: undefined
  }, __jsx("img", {
    src: "https://testsite.musictri.be/unified/styleguide/public/assets/img/logo_musictribe.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }))), __jsx("ul", {
    class: "header__links",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, __jsx("li", {
    class: "header__links-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }, "Crazy Deals")), __jsx("li", {
    class: "header__links-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: undefined
  }, "Best Sellers")), __jsx("li", {
    class: "header__links-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, "Blowouts")), __jsx("li", {
    class: "header__links-item mr-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: undefined
  }, "New Products")), __jsx("li", {
    class: "header__links-item header__links-item--sub",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: undefined
  }, "Categories"), __jsx("span", {
    class: "indicator collapsed",
    "data-target": "#dropdown3",
    "data-toggle": "collapse",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: undefined
  }))), __jsx("div", {
    class: "header__user js-header-user",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  }, __jsx("img", {
    src: "https://testsite.musictri.be/unified/styleguide/public/assets/img/icons_login-outline.svg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }), __jsx("div", {
    class: "header__user-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }, __jsx("div", {
    class: "header__user-container-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  }, __jsx("img", {
    src: "https://testsite.musictri.be/unified/styleguide/public/assets/img/icons_login-outline.svg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: undefined
  }), __jsx("div", {
    class: "details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: undefined
  }, "Jeremy Espinosa"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: undefined
  }, "Triber"))), __jsx("div", {
    class: "header__user-dropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: undefined
  }, __jsx("ul", {
    class: "list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }, "Sign In")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }, "Register")))))), __jsx("ul", {
    class: "header__menu-icon js-header-menu-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, __jsx("li", {
    className: `search-icon js-search test ${isActive}`,
    onClick: () => {
      setActive('active');
    },
    style: {
      display: isActive === '' ? 'block' : 'none'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: undefined
  }, __jsx("img", {
    src: "https://testsite.musictri.be/unified/styleguide/public/assets/img/icons_search.svg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: undefined
  }), __jsx("span", {
    class: "close-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: undefined
  })), __jsx("li", {
    className: `search-icon js-search ${isActive}`,
    onClick: () => {
      setActive('');
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: undefined
  }, __jsx("img", {
    src: "https://testsite.musictri.be/unified/styleguide/public/images/icons/icon_search.svg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: undefined
  }), __jsx("span", {
    class: "close-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: undefined
  }))), __jsx("div", {
    className: `header__search js-header-search ${isActive}`,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: undefined
  }, __jsx(_appbaseio_reactivesearch__WEBPACK_IMPORTED_MODULE_4__["DataSearch"], {
    componentId: "searchSensor",
    dataField: ["artistName", "name", "productName", "productId", "code", "title", "subject", "brand"] // autosuggest={true}
    ,
    highlight: false,
    placeholder: "Search",
    iconPosition: "right",
    className: "elasticsearch-input",
    innerClass: {
      list: 'search-list'
    },
    icon: __jsx("img", {
      src: "https://testsite.musictri.be/unified/styleguide/public/assets/img/icons_search.png",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151
      },
      __self: undefined
    }),
    onValueSelected: (value, cause, source) => {
      if (!value) {
        return document.location.href = `/`;
      } else {
        return document.location.href = `/?searchSensor="${value}"`;
      }
    },
    URLParams: true,
    renderNoSuggestion: () => __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161
      },
      __self: undefined
    }, "No suggestion found") // parseSuggestion={parseSuggestion}
    // value={this.state.value}
    // parseSuggestion={(suggestion) => ({
    // 	label: (
    // 		<div>
    // 			{suggestion.source.artistName} {suggestion.source.name} by
    // 		<span style={{ color: 'dodgerblue', marginLeft: 5 }}>
    // 				{suggestion.source._type}
    // 			</span>
    // 		</div>
    // 	)
    // })}
    ,
    render: ({
      loading,
      error,
      data,
      value,
      rawData,
      downshiftProps: {
        isOpen,
        getItemProps
      }
    }) => {
      // console.log(data.slice(0, 10))
      if (loading) {
        return __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 191
          },
          __self: undefined
        }, "Fetching Suggestions.");
      }

      if (error) {
        return __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 195
          },
          __self: undefined
        }, "Something went wrong! Error details ", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()(error));
      }

      return isOpen && Boolean(value.length) ? __jsx("div", {
        style: {
          position: 'absolute'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        },
        __self: undefined
      }, data.slice(0, 5).map((suggestion, index) => __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        key: suggestion.value
      }, getItemProps({
        item: suggestion
      }), {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 203
        },
        __self: undefined
      }), suggestion.value)), Boolean(value.length) && __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getItemProps({
        item: {
          label: value,
          value: value
        }
      }), {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 212
        },
        __self: undefined
      }), "Show all results for \"", value, "\"")) : null; // return <div {...getItemProps({ item: { value: suggestions } })}></div>
      // console.log({ ...getItemProps({ item: { value: rawSuggestions } }) })
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: undefined
  })), props.children)));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scss/style.scss */ "./scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\xampp\\htdocs\\test-site\\components\\Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Layout = props => __jsx("div", {
  className: "container",
  style: {
    marginTop: '60px'
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, " ", props.children);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/json/stringify */ "core-js/library/fn/json/stringify");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/number/is-finite.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/number/is-finite.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/number/is-finite */ "core-js/library/fn/number/is-finite");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-names.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-names.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-names */ "core-js/library/fn/object/get-own-property-names");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};

  if (obj != null) {
    var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

        if (desc && (desc.get || desc.set)) {
          _Object$defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    var href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          const error = 'The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as';

          if (true) {
            throw new Error(error);
          } else {}

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "./node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if (Component.__NEXT_SPR) {
      let status; // pathname should have leading slash

      let {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      props = await fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = m.indexOf('/') !== -1 ? m.split('/').map(entry => decodeURIComponent(entry)) : decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
  ] = groupIndex++, $1.indexOf('\\.\\.\\.') === 0 ? '/(.+?)' : '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  if (true) {
    if (App.prototype && App.prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.8.6
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;

var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace;
var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' ||
  // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE);
}

/**
 * Forked from fbjs/warning:
 * https://github.com/facebook/fbjs/blob/e66ba20ad5be433eb54423f2b097d829324d9de6/packages/fbjs/src/__forks__/warning.js
 *
 * Only change is we use console.warn instead of console.error,
 * and do nothing when 'console' is not supported.
 * This really simplifies the code.
 * ---
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var lowPriorityWarning = function () {};

{
  var printWarning = function (format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.warn(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  lowPriorityWarning = function (condition, format) {
    if (format === undefined) {
      throw new Error('`lowPriorityWarning(condition, format, ...args)` requires a warning ' + 'message argument');
    }
    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

var lowPriorityWarning$1 = lowPriorityWarning;

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;
    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;
          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;
              default:
                return $$typeof;
            }
        }
      case REACT_LAZY_TYPE:
      case REACT_MEMO_TYPE:
      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}

// AsyncMode is deprecated along with isAsyncMode
var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;

var hasWarnedAboutDeprecatedIsAsyncMode = false;

// AsyncMode should be deprecated
function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true;
      lowPriorityWarning$1(false, 'The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }
  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.typeOf = typeOf;
exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isValidElementType = isValidElementType;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
  })();
}


/***/ }),

/***/ "./node_modules/next/node_modules/react-is/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/next/node_modules/react-is/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./pages/TabHeader.js":
/*!****************************!*\
  !*** ./pages/TabHeader.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-names */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-names.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_ActiveLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ActiveLink */ "./components/ActiveLink.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\xampp\\htdocs\\test-site\\pages\\TabHeader.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



 // export default ({ query }) => {
// 	console.log(this)
// 	return (
// 		< div >
// 			<div>Welcome to Next.js!</div>
// 			<Link route='/Artists' params={{ slug: 'hello-world' }}>
// 				<a>Hello world</a>
// 			</Link>
// 			or
// 	< Link route='/Artists/hello-world' >
// 				<a>Hello world</a>
// 			</Link >
// 		</div >
// 	)
// }
// export default class TabHeader extends Component {
// 	static getItialProps({ pathname, query }) {
// 		console.log(query)
// 		return { query }
// 	}
// 	constructor(props) {
// 		super(props)
// 		this.state = {
// 			searchState: this.props.searchSensor,
// 		}
// 	}
// 	onChange = (searchState) => {
// 		Router.push({
// 			pathname: '/',
// 			query: { name: searchState }
// 		})
// 		console.log(this.props.router.query.name)
// 	}
// 	render() {
// 		// console.log(this.props.searchSensor)
// 		// console.log(searchState)
// 		console.log(this)
// 		// const Page = ({ router }) => {
// 		// 	return <p>{router.pathname}</p>
// 		// }
// 		// const PostLink = props => (
// 		// 	<li>
// 		// 		<Link href={`/post?title=${props.title}`}>
// 		// 			<a>{props.title}</a>
// 		// 		</Link>
// 		// 	</li>
// 		// )
// 		return (
// 			<nav className="tab-header__container nav flex-column flex-sm-row" >
// 				<Link href={`/?searchSensor=${this.props.searchSensor}`}><a>All{this.searchState}</a></Link>
// 				<Link href={`/products/?searchSensor=${this.props.searchSensor}`}><a>Products</a></Link>
// 				<Link href={`/artists/?searchSensor=${this.props.searchSensor}`}><a>Artists{this.props.searchSensor}</a></Link>
// 			</nav>
// 		)
// 	}
// }
// const TabHeader = ({ router }) => {
// 	// const { query } = this.props
// 	// console.log(router)
// 	// slug = router.query.searchSensor
// 	// console.log(router)
// 	// console.log(router.query)
// 	// console.log(query)
// 	// console.log(slug)
// 	// console.log(router)
// 	// console.log(slug)
// 	// console.log(query.searchSensor)
// 	// console.log(query.router.query.searchSensor)
// 	console.log(router)
// 	return (
// 		<nav className="tab-header__container nav flex-column flex-sm-row" >
// 			<ActiveLink href={`/`} prefetch={true}><span>All</span></ActiveLink>
// 			<ActiveLink href={`/products`}><span>Products</span></ActiveLink>
// 			<ActiveLink href={`/Artists`}><span>Artists</span></ActiveLink>
// 		</nav>
// 	)
// }
// class TabHeader extends React.Component {
// 	render() {
// 		const { router } = this.props
// 		console.log(router)
// 		return <div></div>
// 	}
// }
// TabHeader.getInitialProps = async ({ query }) => {
// 	console.log(await query)
// 	// console.log(query)
// 	return { query }
// }
// export default withRouter(TabHeader)

class TabHeader extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  // state = {
  // 	query: this.props.router.query.searchSensor,
  // }
  render() {
    const {
      query,
      asPath
    } = this.props.router; // console.log(this)

    const params = () => {
      const {
        query
      } = this.props.router;

      if (_babel_runtime_corejs2_core_js_object_get_own_property_names__WEBPACK_IMPORTED_MODULE_0___default()(query).length == 0) {
        return '';
      } else if (typeof query === 'object') {
        return `?searchSensor=${query.searchSensor}`;
      }
    }; // Router.push({
    // 	pathname: '/',
    // 	query: { query: 'test' }
    // })


    return __jsx("nav", {
      className: "tab-header__container nav flex-column flex-sm-row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, __jsx(_components_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      href: `/` + params(),
      as: '/' + params(),
      className: "active",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129
      },
      __self: this
    }, "All")), __jsx(_components_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      href: '/artists' + params(),
      as: '/artists' + params(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, " ", __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }, "Artists")), __jsx(_components_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      href: `/products` + params(),
      as: '/products' + params(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, " ", __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }, "Products")), __jsx(_components_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      href: `/images` + params(),
      as: '/images' + params(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, " ", __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, "Images")), __jsx(_components_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      href: `/videos` + params(),
      as: '/videos' + params(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, " ", __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, "Videos")), __jsx(_components_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      href: `/downloads` + params(),
      as: '/downloads' + params(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, " ", __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, "Downloads")), __jsx(_components_ActiveLink__WEBPACK_IMPORTED_MODULE_3__["default"], {
      href: `/discussions` + params(),
      as: '/discussions' + params(),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }, " ", __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135
      },
      __self: this
    }, "Discussions")));
  }

}

TabHeader.getInitialProps = async ({
  query
}) => {
  // console.log(await query)
  // console.log(query)
  return {
    query
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(TabHeader));

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs2_core_js_number_is_finite__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/number/is-finite */ "./node_modules/@babel/runtime-corejs2/core-js/number/is-finite.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_number_is_finite__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_number_is_finite__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next-auth/client */ "next-auth/client");
/* harmony import */ var next_auth_client__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_auth_client__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_AllResult__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/AllResult */ "./components/AllResult.js");
/* harmony import */ var _components_AllImage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/AllImage */ "./components/AllImage.js");
/* harmony import */ var _components_AllVideo__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/AllVideo */ "./components/AllVideo.js");
/* harmony import */ var _TabHeader__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./TabHeader */ "./pages/TabHeader.js");
/* harmony import */ var _appbaseio_reactivesearch__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @appbaseio/reactivesearch */ "@appbaseio/reactivesearch");
/* harmony import */ var _appbaseio_reactivesearch__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_appbaseio_reactivesearch__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _appbaseio_reactivesearch_lib_server__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @appbaseio/reactivesearch/lib/server */ "@appbaseio/reactivesearch/lib/server");
/* harmony import */ var _appbaseio_reactivesearch_lib_server__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_appbaseio_reactivesearch_lib_server__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! react-tooltip */ "react-tooltip");
/* harmony import */ var react_tooltip__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(react_tooltip__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_24__);











var _jsxFileName = "C:\\xampp\\htdocs\\test-site\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_11___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }





 // import SearchInput from '../components/SearchInput'










 // import { urlObjectKeys } from 'next-server/dist/lib/utils';
// import { get } from 'https';

const components = {
  settings: {
    app: 'artists,products,downloads,videos,learn,artist,news,customer,brand',
    url: 'https://elastic.musictribe.com',
    theme: {
      typography: {
        fontFamily: 'Myriad Pro", Myriad, "Liberation Sans", "Nimbus Sans L", "Helvetica Neue", Helvetica, Arial, sans-serif'
      }
    } // app: 'artists,products,downloads,videos,learn,artist,news',
    // url: 'https://elastic.musictribe.com/',
    // ie11: true,
    // type: 'product',
    // transformRequest: props => ({ ...props, url: props.url.replace('_msearch', '_search') }),
    // url: 'http://localhost:9200'

  },
  datasearch: {
    componentId: 'searchSensor',
    dataField: ["artistName", "name", "productName", "productId", "code", "title", "brand", "subject"],
    highlight: true,
    fuzziness: 1,
    // noInitialQuery: true,
    placeholder: 'Search',
    iconPosition: 'right',
    // icon: <img onClick={(value) => Router.push(`/?searchSensor="a"`)} src="/static/search-icon.svg" style={{ display: 'flex' }} />,
    className: 'global-search__input col-sm-10',
    innerClass: {
      input: 'global-input'
    },
    // onValueSelected: '{(value)=> Router.push(`searchSensor=${value}`)}',
    onValueSelected: (value, cause, source) => {
      console.log(cause);
      console.log(cause);
      next_router__WEBPACK_IMPORTED_MODULE_13___default.a.push(`/?searchSensor="${value}"`); // if (!value) {
      // 	return document.location.href = `/`
      // } else {
      // 	return document.location.href = `/?searchSensor="${value}"`
      // }
    },
    URLParams: true,
    renderNoSuggestion: () => __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: undefined
    }, "No suggestion found"),
    defaultQuery: value => ({
      "query": {
        "multi_match": {
          "query": `"${value}"`,
          "fields": ["artistName", "name", "productName", "productId", "code", "title", "brand", "subject"]
        }
      }
    }),
    // customHighlight: (props, value) => ({
    // 	// "query": {
    // 	// 	"multi_match": {
    // 	// 		"query": `"${value}"`,
    // 	// 		"fields": ["name", "code", "title", "brand"]
    // 	// 	}
    // 	// },
    // 	highlight: {
    // 		pre_tags: ['<mark>'],
    // 		post_tags: ['</mark>'],
    // 		"type": "unified",
    // 		"number_of_fragments": 3,
    // 		"fields": {
    // 			"body": {},
    // 			// "code": {},	
    // 			// "title": {},
    // 			// "brand": {},
    // 		},
    // 	},
    // }),
    render: ({
      loading,
      error,
      data,
      value,
      downshiftProps: {
        isOpen,
        getItemProps
      }
    }) => {
      // console.log(data)
      if (loading) {
        return __jsx("div", {
          className: "suggested__container",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          },
          __self: undefined
        }, "Fetching Suggestions.");
      }

      if (error) {
        return __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          },
          __self: undefined
        }, "Something went wrong! Error details ", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_10___default()(error));
      } // console.log(data)


      return isOpen && Boolean(value.length) ? __jsx("div", {
        className: "suggested__container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: undefined
      }, data.slice(0, 10).map((suggestion, index) => __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_9__["default"])({
        className: "suggested__value",
        key: suggestion.value
      }, getItemProps({
        item: suggestion
      }), {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: undefined
      }), __jsx("span", {
        dangerouslySetInnerHTML: {
          __html: suggestion.value.replace(/<[^>]+>/g, '')
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: undefined
      }))), Boolean(value.length) && __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_9__["default"])({}, getItemProps({
        item: {
          label: value,
          value: value
        }
      }), {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        },
        __self: undefined
      }), "Show all results for \"", value, "\"")) : null;
    }
  },
  // resultvideo: {
  // 	componentId: "allVideo",
  // 	dataField: ["code", "title"],
  // 	size: 3,
  // 	defaultQuery: () => ({
  // 		query: {
  // 			terms: {
  // 				_index: ["videos"],
  // 			},
  // 		},
  // 	}),
  // 	pagination: false,
  // 	URLParams: true,
  // 	react: {
  // 		and: ["searchSensor", "artistFilter", "productFilter", "downloadFilter", "ratingsSensor", "websiteFilter"],
  // 		or: ["exactSensor", "withSensor"],
  // 		not: ["withoutSensor"]
  // 	},
  // 	render: ({
  // 		loading,
  // 		error,
  // 		data,
  // 	}) => {
  // 		// console.log(rawData)
  // 		const video = <div className='all-video__container'>{data.map(item => (
  // 			<AllVideo key={item._id} {...item} />
  // 		))}</div>
  // 		if (loading) {
  // 			return <div></div>
  // 		}
  // 		if (error) {
  // 			return (
  // 				<div>
  // 					Something went wrong! Error details {JSON.stringify(error)}
  // 				</div>
  // 			)
  // 		}
  // 		return [video]
  // 	},
  // },
  resultcard: {
    componentId: "allResult",
    dataField: ["artistName", "name", "productName", "productId", "title", "code", "brand", "subject", "search_snippet", "body", "categories.name"],
    // size: 10,
    defaultQuery: () => ({
      "query": {
        "terms": {
          "_index": ["artists", "products", "downloads", "news", "videos", "learn", "artist", "customer", "brand"]
        }
      }
    }),
    pagination: true,
    URLParams: true,
    paginationAt: 'bottom',
    pages: 5,
    size: 10,
    showEndPage: true,
    react: {
      and: ["searchSensor", "artistFilter", "productFilter", "productSubFilter", "downloadFilter", "downloadSubFilter", "ratingsSensor", "websiteFilter"],
      or: ["exactSensor", "withSensor"],
      not: ["withoutSensor"]
    },
    renderResultStats: stats => __jsx("div", {
      className: "result-stats__container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216
      },
      __self: undefined
    }, __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217
      },
      __self: undefined
    }, `( Showing page ${stats.currentPage + 1} of ${stats.numberOfPages} ) displayed result of ${stats.displayedResults} total of ${stats.numberOfResults} results in ( ${stats.time} ms )`)),
    renderPagination: (pages, totalPages, currentPage, setPage, fragmentName) => {
      /* 			new Array(pages.pages).fill(pages.currentPage).map((item, i) => 
      				console.log((item + 1)+ ' ' + i + ' : ' + parseInt(i + (item + 1)))
      			)
       */
      let innerPages, innerTotalPages, subPages;
      innerTotalPages = pages.totalPages - pages.currentPage;

      if (innerTotalPages < pages.pages) {
        subPages = innerTotalPages;
      } else {
        subPages = pages.pages;
      }

      const selectPage = _babel_runtime_corejs2_core_js_number_is_finite__WEBPACK_IMPORTED_MODULE_8___default()(pages.totalPages) && __jsx("div", {
        className: "result-paginate__container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 235
        },
        __self: undefined
      }, __jsx("a", {
        className: ``,
        tabindex: `0`,
        onClick: e => !pages.currentPage ? null : pages.setPage(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_7___default()(pages.currentPage - 1, 10)),
        alt: `Page 1`,
        rel: `prev`,
        style: pages.currentPage + 1 > 1 ? {
          display: 'inline'
        } : {
          display: 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 236
        },
        __self: undefined
      }, `<`), __jsx("a", {
        className: ``,
        tabindex: `0`,
        onClick: e => !pages.currentPage ? null : pages.setPage(null),
        rel: `next`,
        alt: `Page 3`,
        style: pages.currentPage + 1 > 1 ? {
          display: 'inline'
        } : {
          display: 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: undefined
      }, `1`), __jsx("a", {
        className: ``,
        tabindex: `0`,
        onClick: e => pages.currentPage < pages.pages ? null : pages.setPage(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_7___default()(pages.currentPage - 5, 10)),
        rel: `next`,
        alt: `Page 3`,
        style: pages.currentPage < pages.pages ? {
          display: 'none'
        } : {
          display: 'inline'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: undefined
      }, `...`), new Array(subPages).fill(pages.currentPage).map((item, i) => __jsx("a", {
        className: pages.currentPage + 1 == _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_7___default()(i + (item + 1)) ? 'active' : '',
        tabindex: `0`,
        onClick: pages.currentPage >= pages.totalPages ? null : e => pages.setPage(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_7___default()(i + item, 10)),
        alt: `Page 1`,
        key: `${i}-${pages.fragmentName}`,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        },
        __self: undefined
      }, i + (item + 1))), __jsx("a", {
        className: ``,
        tabindex: `0`,
        onClick: e => pages.currentPage + pages.pages >= pages.totalPages ? null : pages.setPage(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_7___default()(pages.currentPage + 5, 10)),
        rel: `next`,
        alt: `Page 3`,
        style: pages.currentPage + 1 > pages.pages ? {
          display: 'inline'
        } : {
          display: 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 283
        },
        __self: undefined
      }, `...`), __jsx("a", {
        className: ``,
        tabindex: `0`,
        onClick: e => pages.currentPage + 1 >= pages.totalPages ? null : pages.setPage(pages.totalPages - 1, 10),
        rel: `next`,
        alt: `Page 3`,
        style: pages.currentPage + 1 > pages.pages ? {
          display: 'inline'
        } : {
          display: 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        },
        __self: undefined
      }, pages.totalPages), __jsx("a", {
        className: ``,
        tabindex: `0`,
        onClick: e => pages.currentPage + 1 >= pages.totalPages ? null : pages.setPage(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_7___default()(pages.currentPage + 1, 10)),
        rel: `next`,
        alt: `Page 3`,
        style: pages.currentPage + 1 > pages.pages ? {
          display: 'inline'
        } : {
          display: 'none'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 306
        },
        __self: undefined
      }, `>`));

      return selectPage;
    },
    render: ({
      loading,
      error,
      data,
      rawData,
      resultStats
    }) => {
      const image = __jsx("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 328
        },
        __self: undefined
      }, data.slice(0, 5).map(item => __jsx(_components_AllImage__WEBPACK_IMPORTED_MODULE_17__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_9__["default"])({
        key: item._id
      }, item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 329
        },
        __self: undefined
      }))));

      const all = data.filter(item => item._type !== "video").map(item => __jsx(_components_AllResult__WEBPACK_IMPORTED_MODULE_16__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_9__["default"])({
        key: item._id
      }, item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 332
        },
        __self: undefined
      })));

      const video = __jsx("div", {
        className: "all-video__container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 334
        },
        __self: undefined
      }, data.filter(item => item._type === "video").map(item => __jsx(_components_AllVideo__WEBPACK_IMPORTED_MODULE_18__["default"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_9__["default"])({
        key: item._id
      }, item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 335
        },
        __self: undefined
      }))));

      if (loading) {
        return __jsx("div", {
          className: "loader__container",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 339
          },
          __self: undefined
        }, __jsx("img", {
          src: "/static/loader.gif",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 340
          },
          __self: undefined
        }));
      }

      if (error) {
        return __jsx("div", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 345
          },
          __self: undefined
        }, "Something went wrong! Error details ", _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_10___default()(error));
      }

      return [image, all, video];
    },
    URLParams: true,
    react: {
      and: ["searchSensor", "artistFilter", "productFilter", "productSubFilter", "downloadSubFilter", "downloadFilter", "ratingsSensor", "websiteFilter", "discussionFilter"],
      or: ["exactSensor", "withSensor"],
      not: ["withoutSensor"]
    },
    innerClass: {
      sortOptions: 'sort-options'
    }
  },
  // imagecard: {
  // 	componentId: 'allImage',
  // 	dataField: ["artistName", "name", "productName"],
  // 	size: 1,
  // 	showResultStats: false,
  // 	defaultQuery: () => ({
  // 		query: {
  // 			terms: {
  // 				_index: ['products', 'artists', 'downloads'],
  // 			},
  // 		},
  // 	}),
  // 	render: ({
  // 		loading,
  // 		error,
  // 		data,
  // 	}) => {
  // 		if (loading) {
  // 			return <div>Fetching Results.</div>
  // 		}
  // 		if (error) {
  // 			return (
  // 				<div>
  // 					Something went wrong! Error details {JSON.stringify(error)}
  // 				</div>
  // 			)
  // 		}
  // 		return (
  // 			data.map(item => (
  // 				<AllImage key={item._id} {...item} />
  // 			))
  // 		)
  // 	},
  // 	pagination: true,
  // 	URLParams: true,
  // 	react: {
  // 		and: ["searchSensor", "artistFilter", "productFilter", "downloadFilter", "ratingsSensor", "websiteFilter"],
  // 		or: ["exactSensor", "withSensor"],
  // 		not: ["withoutSensor"]
  // 	},
  // 	sortOptions: [
  // 		{
  // 			label: "Relevance",
  // 			dataField: "_score",
  // 			sortBy: "asc"
  // 		},
  // 		{
  // 			label: "Type",
  // 			dataField: "_type",
  // 			sortBy: "asc"
  // 		}
  // 	],
  // },
  exactphrase: {
    componentId: 'exactSensor',
    dataField: ["artistName", "name", "productName", "productId", "code", "title", "subject", "brand", "body"],
    title: '',
    className: 'advance-search__container',
    autosuggest: false,
    // noInitialQuery: true,
    category: true,
    searchOperators: true,
    // highlight: true,
    placeholder: '',
    showIcon: false,
    // onValueSelected: '{(value) => Router.push(`searchSensor=${value}`)}',
    // onValueSelected: (value, cause, source) => {
    // 	document.location.href = `/?searchSensor=${value}`
    // },
    URLParams: false,
    renderNoSuggestion: () => __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 434
      },
      __self: undefined
    }, "No suggestion found") // customQuery: (value, props) => ({
    // 	query: {
    // 		// term: {
    // 		// 	artistName: value,
    // 		// 	// name: value,
    // 		// 	// productName: value
    // 		// }
    // 		bool: {
    // 			filter: [
    // 				{
    // 					match: {
    // 						artistName: value
    // 					}
    // 				}
    // 			]
    // 		}
    // 	}
    // }),

    /* customQuery: (value) => ({
    		// "query": {
    		// 	"bool": {
    		// 		"must": [{
    		// 			"match_phrase": {
    		// 				"_index": {
    		// 					"query": `"${value}"`
    		// 				}
    		// 			}
    		// 		}]
    		// 	}
    		// }
    		"query": {
    			"match": {
    				"artistName": {
    					"query": `"${value}"`
    				}
    			}
    		}
    }), */

  },
  withphrase: {
    componentId: 'withSensor',
    dataField: ["artistName", "name", "productName", "productId", "code", "title", "subject", "brand", "body"],
    title: '',
    className: 'advance-search__container',
    autosuggest: false,
    // noInitialQuery: true,
    category: 'advanceSearch',
    highlight: true,
    placeholder: '',
    showIcon: false,
    // onValueSelected: '{(value) => Router.push(`searchSensor=${value}`)}',
    // onValueSelected: (value, cause, source) => {
    // 	document.location.href = `/?searchSensor=${value}`
    // },
    URLParams: false,
    renderNoSuggestion: () => __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 495
      },
      __self: undefined
    }, "No suggestion found")
    /* customQuery: async (value, props) => (
    	await {
    		"query": {
    			"bool": {
    				"should": [{
    					"match_phrase": {
    						"_index": {
    							"query": value
    						}
    					}
    				}]
    			}
    		}
    	}
    ), */

  },
  withoutphrase: {
    componentId: 'withoutSensor',
    dataField: ["artistName", "name", "subHeadText", "productName", "productId", "code", "title", "subject", "brand", "body"],
    title: '',
    className: 'advance-search__container',
    autosuggest: false,
    // noInitialQuery: true,
    category: 'advanceSearch',
    highlight: true,
    placeholder: '',
    showIcon: false,

    /* customQuery: async (value, props) => (
    	await {
    		"query": {
    			"bool": {
    				"must_not": [{
    					"match_phrase": {
    						"_all": {
    							"query": value
    						}
    					}
    				}]
    			}
    		}
    	}
    ), */
    // react: {
    // 	and: ["allResult"],
    // },
    // onValueSelected: '{(value)=> Router.push(`searchSensor=${value}`)}',
    // onValueSelected: (value, cause, source) => {
    // 	document.location.href = `/?searchSensor=${value}`
    // },
    URLParams: false,
    renderNoSuggestion: () => __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 562
      },
      __self: undefined
    }, "No suggestion found")
  },
  websitefilter: {
    componentId: 'websiteFilter',
    dataField: 'brand',
    title: 'Website',
    className: 'filter__container',
    showSearch: false,
    URLParams: true,
    showFilter: true,
    showCount: false,
    // defaultValue: ['behringer'],
    react: {
      and: ["searchSensor"]
    }
  },
  artistfilter: {
    componentId: 'artistFilter',
    // dataField: 'typesOfArtist.keyword',
    dataField: 'typesOfArtist.keyword',
    data: [{
      label: "Guitar",
      value: "Guitar"
    }, {
      label: "Bass",
      value: "Bass"
    }, {
      label: "Studio Pros",
      value: "Production"
    }, {
      label: "Broadcast",
      value: "Broadcast"
    }],
    title: 'Artists',
    className: 'filter__container',
    showSearch: false,
    showFilter: true,
    showCount: true,
    URLParams: true,
    // selectAllLabel: 'all',
    // showLoadMore: true,
    defaultQuery: () => ({
      query: {
        terms: {
          _index: ['artists']
        }
      }
    }),
    renderItem: (label, count, isSelected) => __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 619
      },
      __self: undefined
    }, label, __jsx("span", {
      style: {
        marginLeft: 5
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 621
      },
      __self: undefined
    }, '(' + count + ')')),
    react: {
      or: ["searchSensor", "resultCard", "productFilter", "productSubFilter", "downloadFilter", "downloadSubFilter", "discussionFilter"],
      and: ["websiteFilter"]
    }
  },
  productfilter: {
    componentId: 'productFilter',
    dataField: 'brand.keyword',
    data: [{
      label: "Behringer",
      value: "behringer"
    }, {
      label: "Tannoy",
      value: "tannoy"
    }, {
      label: "Turbosound",
      value: "turbosound"
    }, {
      label: "TC Electronic",
      value: "tcelectronic"
    }, {
      label: "Midas",
      value: "midas"
    }, {
      label: "Klarkteknik",
      value: "klarkteknik"
    }, {
      label: "Bugera",
      value: "bugera"
    }, {
      label: "Eurocom",
      value: "eurocom"
    }, {
      label: "TC Helicon",
      value: "tchelicon"
    }, {
      label: "Labgruppen",
      value: "labgruppen"
    }, {
      label: "Auratone",
      value: "auratone"
    }, {
      label: "Lake",
      value: "lake"
    }],
    title: 'Products Categories',
    className: 'filter__container',
    showSearch: false,
    URLParams: true,
    showFilter: true,
    showCount: true,
    renderItem: (label, count, isSelected) => __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 693
      },
      __self: undefined
    }, label, __jsx("span", {
      style: {
        marginLeft: 5
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 695
      },
      __self: undefined
    }, '(' + count + ')')),
    react: {
      or: ["searchSensor", "resultCard", "downloadFilter", "downloadSubFilter", "productFilter", "artistFilter", "discussionFilter"],
      and: ["websiteFilter"]
    }
  },
  productsubfilter: {
    componentId: 'productSubFilter',
    dataField: 'categories.name.keyword',
    title: 'Products Sub Categories',
    className: 'filter__container',
    showSearch: false,
    URLParams: true,
    showFilter: true,
    showCount: true,
    // showLoadMore: true,
    renderItem: (label, count, isSelected) => __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 718
      },
      __self: undefined
    }, label, __jsx("span", {
      style: {
        marginLeft: 5
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 720
      },
      __self: undefined
    }, '(' + count + ')')),
    react: {
      or: ["searchSensor", "resultCard", "downloadFilter", "downloadSubFilter", "productFilter", "artistFilter", "discussionFilter"],
      and: ["websiteFilter"]
    }
  },
  downloadfilter: {
    componentId: 'downloadFilter',
    dataField: 'group.keyword',
    title: 'Download Type',
    className: 'filter__container',
    showSearch: false,
    URLParams: true,
    defaultQuery: () => ({
      query: {
        terms: {
          _index: ['downloads']
        }
      }
    }),
    renderItem: (label, count, isSelected) => __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 747
      },
      __self: undefined
    }, label, __jsx("span", {
      style: {
        marginLeft: 5
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 749
      },
      __self: undefined
    }, '(' + count + ')')),
    react: {
      or: ["searchSensor"],
      and: ["websiteFilter", "downloadSubFilter"]
    }
  },
  downloadsubfilter: {
    componentId: 'downloadSubFilter',
    dataField: 'subGroup.keyword',
    title: 'Download Sub Type',
    className: 'filter__container',
    showSearch: false,
    URLParams: true,
    // showLoadMore: true,
    defaultQuery: () => ({
      query: {
        terms: {
          _index: ['downloads']
        }
      }
    }),
    renderItem: (label, count, isSelected) => __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 777
      },
      __self: undefined
    }, label, __jsx("span", {
      style: {
        marginLeft: 5
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 779
      },
      __self: undefined
    }, '(' + count + ')')),
    react: {
      or: ["searchSensor"],
      and: ["downloadFilter"]
    }
  },
  discussionfilter: {
    componentId: 'discussionFilter',
    dataField: 'board.root_category.keyword',
    data: [{
      label: "Learn",
      value: "academy"
    }, {
      label: "Brands Tribe",
      value: "brands"
    }, {
      label: "Customer Tribe",
      value: "tribe"
    }, {
      label: "Artist",
      value: "stories"
    }, {
      label: "News",
      value: ""
    }],
    title: 'Discussion',
    className: 'filter__container',
    showSearch: false,
    URLParams: true,
    size: 10,
    showCount: true,
    // showLoadMore: true,
    queryFormat: 'or',
    defaultQuery: () => ({
      query: {
        terms: {
          _index: ['learn', 'news', 'artist', 'customer', 'brand']
        }
      }
    }),
    renderItem: (label, count, isSelected) => __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 832
      },
      __self: undefined
    }, label, __jsx("span", {
      style: {
        marginLeft: 5
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 834
      },
      __self: undefined
    }, '(' + count + ')')),
    react: {
      or: ["searchSensor", "resultCard", "downloadFilter", "downloadSubFilter", "productSubFilter", "productFilter", "artistFilter"],
      and: ["websiteFilter", "artistFilter"]
    }
  }
};

class Main extends react__WEBPACK_IMPORTED_MODULE_11___default.a.Component {
  constructor(_props) {
    super(_props); // this.triggerQuery = this.triggerQuery.bind(this)

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "state", {
      reactivedata: this.props,
      value: this.props.url.query.searchSensor,
      exact: this.props.url.query.exactphrase,
      exactphrase: '',
      withphrase: '',
      withoutphrase: '',
      resultSize: [{
        label: "10",
        value: 10
      }, {
        label: "20",
        value: 20
      }, {
        label: "30",
        value: 30
      }, {
        label: "40",
        value: 40
      }, {
        label: "50",
        value: 50
      }],
      size: 10
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "onChange", (value, props) => {
      this.setState({
        value
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "onChangephrase", async exactphrase => {
      await this.setState(() => ({
        exactphrase
      }));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "onChangewithphrase", async withphrase => {
      await this.setState({
        withphrase
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "onChangewithoutphrase", async withoutphrase => {
      await this.setState({
        withoutphrase
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "onChangeSize", async size => {
      await this.setState({
        size: size.value
      });
      console.log(size.value);
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "submitAdvance", async (e, triggerQuery, props) => {
      await triggerQuery();
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "clearAdvanceSearch", props => {
      let valueToHold = [],
          index = 0; //list of available components for advance search

      const listOffilters = ["exactSensor", "withSensor", "withoutSensor"];
      const {
        selectedValues,
        setValue
      } = props; //clear all selected components

      const clearFilter = getComponent => {
        getComponent.forEach(item => {
          if (listOffilters.includes(item)) {
            setValue(item, null);
          }
        });
      }; //set filtered components


      const setFilter = getComponentObj => {
        getComponentObj.forEach(item => {
          if (listOffilters.includes(item.label)) {
            if (item.value === "" || item.value === null) {
              index = valueToHold.indexOf(item.label);

              if (index > -1) {
                valueToHold.splice(index, 1);
              }
            } else {
              valueToHold.push(item.label);
            }
          }
        });
        return valueToHold;
      }; //get selected components


      const getComponent = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(selectedValues).map(component => {
        return component;
      }); //get selected component obj


      const getComponentObj = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(selectedValues).map(component => {
        return selectedValues[component];
      }); //hide clear button to non-selected components, show otherwise


      return __jsx("button", {
        onClick: () => clearFilter(getComponent),
        disabled: _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(setFilter(getComponentObj)).length > 0 ? false : true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1001
        },
        __self: this
      }, "Clear");
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "advanceSelected", props => {
      const {
        selectedValues,
        setValue
      } = props;

      const clearFilter = component => {
        setValue(component, null);
        setValue('withoutSensor', null);
      };

      var idx = 2;

      var key = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(selectedValues)[idx];

      var value = selectedValues[key];
      return null;
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "filterSelected", props => {
      let valueToHold = [],
          index = 0;
      const {
        selectedValues,
        setValue
      } = props; //list of available components for filter search results

      const listOffilters = ["artistFilter", "productFilter", "productSubFilter", "downloadFilter", "downloadSubFilter", "discussionFilter", "ratingsSensor"];

      const clearFilter = toFilters => {
        toFilters.forEach(item => {
          if (listOffilters.includes(item)) {
            setValue(item, null);
          }
        });
      }; //set filtered components


      const setFilter = getComponentObj => {
        getComponentObj.forEach(item => {
          if (listOffilters.includes(item.label)) {
            if (item.value !== null && item.value.length === 0) {
              index = valueToHold.indexOf(item.label);

              if (index > -1) {
                valueToHold.splice(index, 1);
              }
            } else {
              // for ratings filter : reason ratings cannot be set into empty array
              if (item.label === "ratingsSensor") {
                index = valueToHold.indexOf(item.label);

                if (index > -1) {
                  valueToHold.splice(index, 1);
                }
              } else {
                valueToHold.push(item.label);
              }
            }
          }
        });
        return valueToHold;
      };

      const toFilter = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(selectedValues).map(component => {
        return component;
      }); //get selected component obj


      const getComponentObj = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(selectedValues).map(component => {
        return selectedValues[component];
      }); //hide clear button to non-selected components, show otherwise


      return __jsx("button", {
        onClick: () => clearFilter(toFilter),
        disabled: _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(setFilter(getComponentObj)).length > 0 ? false : true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1070
        },
        __self: this
      }, "Clear Filters");
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(this, "handleTest", () => {
      console.log(document.querySelector('.test'));
    });
  }

  static async getInitialProps({
    pathname,
    query
  }) {
    return {
      store: await _appbaseio_reactivesearch_lib_server__WEBPACK_IMPORTED_MODULE_21___default()([{
        datasearch: _objectSpread({}, components.datasearch),
        source: _appbaseio_reactivesearch__WEBPACK_IMPORTED_MODULE_20__["DataSearch"]
      }, {
        resultcard: _objectSpread({}, components.resultcard),
        source: _appbaseio_reactivesearch__WEBPACK_IMPORTED_MODULE_20__["ReactiveList"]
      }, // {
      // 	resultvideo: { ...components.resultvideo },
      // 	source: ReactiveList,
      // },
      {
        imagecard: _objectSpread({}, components.imagecard),
        source: _appbaseio_reactivesearch__WEBPACK_IMPORTED_MODULE_20__["ReactiveList"]
      }, {
        exactphrase: _objectSpread({}, components.exactphrase),
        source: _appbaseio_reactivesearch__WEBPACK_IMPORTED_MODULE_20__["DataSearch"]
      }], null, components.settings, query)
    };
  } // customQuery = () => {
  // 	let obj
  // 	obj = {
  // 		"query": {
  // 			"bool": {
  // 				"filter": {
  // 					"match": {
  // 						"artistName": this.state.exactphrase
  // 					}
  // 				},
  // 				"should": {
  // 					"match": {
  // 						"artistName": this.state.withphrase
  // 					}
  // 				},
  // 				"must_not": {
  // 					"match": {
  // 						"artistName": this.state.withoutphrase
  // 					}
  // 				}
  // 			}
  // 		}
  // 	}
  // 	return { obj }
  // }


  render() {
    const {
      reactivedata
    } = this.props;
    console.log(this.props.router.asPath);
    console.log(this.state.value);
    return __jsx("div", {
      className: "search-result__container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1088
      },
      __self: this
    }, __jsx(_appbaseio_reactivesearch__WEBPACK_IMPORTED_MODULE_20__["ReactiveBase"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_9__["default"])({}, components.settings, {
      getInitialProps: reactivedata,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1089
      },
      __self: this
    }), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_15__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1091
      },
      __self: this
    }), __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_14__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1092
      },
      __self: this
    }, __jsx("div", {
      className: "row ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1094
      },
      __self: this
    }, __jsx("div", {
      className: "col-sm-20",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1095
      },
      __self: this
    }, __jsx("div", {
      className: "global-search__container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1096
      },
      __self: this
    }, __jsx(_appbaseio_reactivesearch__WEBPACK_IMPORTED_MODULE_20__["DataSearch"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_9__["default"])({
      onValueChange: value => {
        console.log("current value: ", value);
        this.setState({
          value
        });
      },
      icon: __jsx("img", {
        onClick: value => next_router__WEBPACK_IMPORTED_MODULE_13___default.a.push(`/?searchSensor="${this.state.value}"`),
        src: "/static/search-icon.svg",
        style: {
          display: 'flex'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1104
        },
        __self: this
      })
    }, components.datasearch, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1097
      },
      __self: this
    }))))), __jsx("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1110
      },
      __self: this
    }, __jsx("div", {
      className: "col-sm-5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1114
      },
      __self: this
    }, __jsx("div", {
      className: "sidebar__container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1115
      },
      __self: this
    }, __jsx("div", {
      className: "advance-search-container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1117
      },
      __self: this
    }, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1118
      },
      __self: this
    }, __jsx("h5", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1119
      },
      __self: this
    }, "Advance Search")), __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1121
      },
      __self: this
    }, __jsx(_appbaseio_reactivesearch__WEBPACK_IMPORTED_MODULE_20__["SelectedFilters"], {
      render: this.clearAdvanceSearch,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1122
      },
      __self: this
    }))), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1125
      },
      __self: this
    }, "With the exact phrase", __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1127
      },
      __self: this
    }, __jsx("a", {
      href: "#",
      className: "btn btn--rounded",
      "data-tip": " Put exact words in quotes: \"Music Tribe\"",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1127
      },
      __self: this
    }, __jsx("img", {
      src: "/static/info.svg",
      style: {
        width: '13px',
        height: '13px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1127
      },
      __self: this
    }), " "))), __jsx(react_tooltip__WEBPACK_IMPORTED_MODULE_23___default.a, {
      place: "top",
      type: "dark",
      effect: "float",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1129
      },
      __self: this
    }), __jsx(_appbaseio_reactivesearch__WEBPACK_IMPORTED_MODULE_20__["DataSearch"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_9__["default"])({}, components.exactphrase, {
      value: this.state.exactphrase,
      onChange: this.onChangephrase,
      onKeyUp: this.submitAdvance // customQuery={this.customQuery}
      ,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1130
      },
      __self: this
    })), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1137
      },
      __self: this
    }, "With one or more words", __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1139
      },
      __self: this
    }, __jsx("a", {
      href: "#",
      className: "btn btn--rounded",
      "data-tip": "Type the important words \"Studio Condenser Microphone\"",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1139
      },
      __self: this
    }, __jsx("img", {
      src: "/static/info.svg",
      style: {
        width: '13px',
        height: '13px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1139
      },
      __self: this
    }), " "))), __jsx(react_tooltip__WEBPACK_IMPORTED_MODULE_23___default.a, {
      place: "top",
      type: "dark",
      effect: "float",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1141
      },
      __self: this
    }), __jsx(_appbaseio_reactivesearch__WEBPACK_IMPORTED_MODULE_20__["DataSearch"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_9__["default"])({}, components.withphrase, {
      value: this.state.withphrase,
      onChange: this.onChangewithphrase,
      onKeyUp: this.submitAdvance,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1142
      },
      __self: this
    })), __jsx("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1148
      },
      __self: this
    }, "Without the words", __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1150
      },
      __self: this
    }, __jsx("a", {
      href: "#",
      className: "btn btn--rounded",
      "data-tip": "Type the words that you don\u2019t want to appear on the result",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1150
      },
      __self: this
    }, __jsx("img", {
      src: "/static/info.svg",
      style: {
        width: '13px',
        height: '13px'
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1150
      },
      __self: this
    }), " "))), __jsx(react_tooltip__WEBPACK_IMPORTED_MODULE_23___default.a, {
      place: "top",
      type: "dark",
      effect: "float",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1152
      },
      __self: this
    }), __jsx(_appbaseio_reactivesearch__WEBPACK_IMPORTED_MODULE_20__["DataSearch"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_9__["default"])({}, components.withoutphrase, {
      value: this.state.withoutphrase,
      onChange: this.onChangewithoutphrase,
      onKeyUp: this.submitAdvance // customQuery={this.customQuery}
      ,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1153
      },
      __self: this
    }))), __jsx("div", {
      className: "sidebar__container filter",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1161
      },
      __self: this
    }, __jsx("h5", {
      className: "filter-title",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1163
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1164
      },
      __self: this
    }, "Filter Search Results"), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1165
      },
      __self: this
    }, __jsx(_appbaseio_reactivesearch__WEBPACK_IMPORTED_MODULE_20__["SelectedFilters"], {
      render: this.filterSelected,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1165
      },
      __self: this
    }))), __jsx(_appbaseio_reactivesearch__WEBPACK_IMPORTED_MODULE_20__["MultiDataList"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_9__["default"])({}, components.artistfilter, {
      react: {
        or: ["searchSensor", "resultCard", "productFilter"] // and: ["websiteFilter"],

      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1168
      },
      __self: this
    })), __jsx(_appbaseio_reactivesearch__WEBPACK_IMPORTED_MODULE_20__["MultiDataList"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_9__["default"])({}, components.productfilter, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1174
      },
      __self: this
    })), __jsx(_appbaseio_reactivesearch__WEBPACK_IMPORTED_MODULE_20__["MultiList"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_9__["default"])({}, components.productsubfilter, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1175
      },
      __self: this
    })), __jsx(_appbaseio_reactivesearch__WEBPACK_IMPORTED_MODULE_20__["MultiList"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_9__["default"])({}, components.downloadfilter, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1176
      },
      __self: this
    })), __jsx(_appbaseio_reactivesearch__WEBPACK_IMPORTED_MODULE_20__["MultiList"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_9__["default"])({}, components.downloadsubfilter, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1177
      },
      __self: this
    })), __jsx(_appbaseio_reactivesearch__WEBPACK_IMPORTED_MODULE_20__["MultiDataList"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_9__["default"])({}, components.discussionfilter, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1178
      },
      __self: this
    })), __jsx(_appbaseio_reactivesearch__WEBPACK_IMPORTED_MODULE_20__["RatingsFilter"], {
      componentId: "ratingsSensor",
      dataField: "averageRating",
      title: "Ratings",
      className: "filter__container",
      icon: __jsx("img", {
        src: "/static/icon_star.svg",
        style: {
          width: '14px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1185
        },
        __self: this
      }),
      dimmedIcon: __jsx("img", {
        src: "/static/icon_star-gray.svg",
        style: {
          width: '14px'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 1188
        },
        __self: this
      }),
      data: [{
        start: 5,
        end: 5,
        label: ''
      }, {
        start: 4,
        end: 4,
        label: '& up'
      }, {
        start: 3,
        end: 3,
        label: '& up'
      }, {
        start: 2,
        end: 2,
        label: '& up'
      }, {
        start: 1,
        end: 1,
        label: '& up'
      }],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1179
      },
      __self: this
    })), __jsx("div", {
      className: "sidebar__footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1199
      },
      __self: this
    }, __jsx(_appbaseio_reactivesearch__WEBPACK_IMPORTED_MODULE_20__["SelectedFilters"], {
      render: this.filterSelected,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1200
      },
      __self: this
    }))), __jsx("div", {
      className: "col-sm-15",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1203
      },
      __self: this
    }, __jsx(_TabHeader__WEBPACK_IMPORTED_MODULE_19__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1204
      },
      __self: this
    }), __jsx(_appbaseio_reactivesearch__WEBPACK_IMPORTED_MODULE_20__["ReactiveList"], Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_9__["default"])({}, components.resultcard, {
      size: this.state.size,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1206
      },
      __self: this
    })), __jsx("div", {
      className: "result-select__container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1209
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1210
      },
      __self: this
    }, "Show ", __jsx(react_select__WEBPACK_IMPORTED_MODULE_22___default.a, {
      options: this.state.resultSize,
      onChange: this.onChangeSize,
      className: "show-select",
      placeholder: this.state.size,
      classNamePrefix: "show-select",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1211
      },
      __self: this
    }))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_13__["withRouter"])(Main));

/***/ }),

/***/ "./scss/style.scss":
/*!*************************!*\
  !*** ./scss/style.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\xampp\htdocs\test-site\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "@appbaseio/reactivesearch":
/*!********************************************!*\
  !*** external "@appbaseio/reactivesearch" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@appbaseio/reactivesearch");

/***/ }),

/***/ "@appbaseio/reactivesearch/lib/server":
/*!*******************************************************!*\
  !*** external "@appbaseio/reactivesearch/lib/server" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@appbaseio/reactivesearch/lib/server");

/***/ }),

/***/ "core-js/library/fn/json/stringify":
/*!****************************************************!*\
  !*** external "core-js/library/fn/json/stringify" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/number/is-finite":
/*!******************************************************!*\
  !*** external "core-js/library/fn/number/is-finite" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/number/is-finite");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-names":
/*!*******************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-names" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-names");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "next-auth/client":
/*!***********************************!*\
  !*** external "next-auth/client" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-auth/client");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-select":
/*!*******************************!*\
  !*** external "react-select" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),

/***/ "react-tooltip":
/*!********************************!*\
  !*** external "react-tooltip" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-tooltip");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map