self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayLikeToArray; }
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _arrayWithoutHoles; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__.default)(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _asyncToGenerator; }
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _defineProperty; }
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
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

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _iterableToArray; }
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _nonIterableSpread; }
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _toConsumableArray; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _babel_runtime_helpers_esm_iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/iterableToArray */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/nonIterableSpread */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_babel_runtime_helpers_esm_arrayWithoutHoles__WEBPACK_IMPORTED_MODULE_0__.default)(arr) || (0,_babel_runtime_helpers_esm_iterableToArray__WEBPACK_IMPORTED_MODULE_1__.default)(arr) || (0,_babel_runtime_helpers_esm_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__.default)(arr) || (0,_babel_runtime_helpers_esm_nonIterableSpread__WEBPACK_IMPORTED_MODULE_3__.default)();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _unsupportedIterableToArray; }
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_babel_runtime_helpers_esm_arrayLikeToArray__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./SpeakerData.js":
/*!************************!*\
  !*** ./SpeakerData.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "data": function() { return /* binding */ data; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var data = [{
  id: "1269",
  first: "Arun",
  last: "Gupta",
  company: "Amazon",
  bio: "Arun Gupta is a Principal Open Source Technologist at Amazon Web Services. ",
  twitterHandle: "arungupta",
  favorite: true,
  sessions: [{
    id: "32",
    title: "Rails powered by GlassFish",
    eventYear: "2008",
    room: {
      name: "Cornell Hall",
      capacity: 0
    }
  }, {
    id: "58",
    title: "Metro: Hello World to .NET 3.5 interoperable Web service",
    eventYear: "2008",
    room: {
      name: "Cornell Hall",
      capacity: 0
    }
  }, {
    id: "61",
    title: "GlassFish: On a mission to please developers",
    eventYear: "2008",
    room: {
      name: "Cornell Hall",
      capacity: 0
    }
  }, {
    id: "263",
    title: "Java EE 6 and GlassFish v3: Paving the path for future",
    eventYear: "2009",
    room: {
      name: "5502",
      capacity: 70
    }
  }, {
    id: "264",
    title: "Using Eclipse for Java EE 6 development for the GlassFish™ Application Server",
    eventYear: "2009",
    room: {
      name: "5503",
      capacity: 44
    }
  }, {
    id: "265",
    title: "Dynamic Languages &amp; Web Frameworks in GlassFish",
    eventYear: "2009",
    room: {
      name: "4204",
      capacity: 45
    }
  }, {
    id: "440",
    title: "Java EE 6: Doing More With Less",
    eventYear: "2010",
    room: {
      name: "8401",
      capacity: 48
    }
  }, {
    id: "441",
    title: "OSGi and Java EE in GlassFish",
    eventYear: "2010",
    room: {
      name: "4220",
      capacity: 50
    }
  }, {
    id: "444",
    title: "Running your Java EE 6 application in the Cloud",
    eventYear: "2010",
    room: {
      name: "3106",
      capacity: 45
    }
  }, {
    id: "766",
    title: "Deploy and Monitor your Java EE 6 session in a fully-clustered GlassFish",
    eventYear: "2011",
    room: {
      name: "4201",
      capacity: 70
    }
  }, {
    id: "770",
    title: "The Java EE 7 Platform: Developing for the Cloud",
    eventYear: "2011",
    room: {
      name: "4201",
      capacity: 70
    }
  }, {
    id: "864",
    title: "RESTful Java on Steroids: JAX-RS 2.0",
    eventYear: "2012",
    room: {
      name: "5502",
      capacity: 70
    }
  }, {
    id: "1131",
    title: "50 new features of Java EE 7 in 50 minutes",
    eventYear: "2013",
    room: {
      name: "3525",
      capacity: 110
    }
  }, {
    id: "1262",
    title: "Minecraft Modding Workshop (Part 1 of 2)",
    eventYear: "2013",
    room: {
      name: "PSEC4603",
      capacity: 1
    }
  }, {
    id: "1352",
    title: "Minecraft Modding Workshop (Part 2 of 2)",
    eventYear: "2013",
    room: {
      name: "PSEC4603",
      capacity: 1
    }
  }, {
    id: "1440",
    title: " All about WildFly, Only using demos",
    eventYear: "2014",
    room: {
      name: "4302",
      capacity: 41
    }
  }, {
    id: "1441",
    title: "Java EE 7 development using Eclipse",
    eventYear: "2014",
    room: {
      name: "4301",
      capacity: 64
    }
  }, {
    id: "2529",
    title: "Introductory Minecraft Modding with Forge - Part 1",
    eventYear: "2014",
    room: {
      name: "PSEC4501",
      capacity: 73
    }
  }, {
    id: "2557",
    title: "Introductory Minecraft Modding with Forge - Part II",
    eventYear: "2014",
    room: {
      name: "PSEC4501",
      capacity: 73
    }
  }, {
    id: "3694",
    title: "Docker and Kubernetes Recipes for Java Applications",
    eventYear: "2015",
    room: {
      name: "AD-123",
      capacity: 70
    }
  }, {
    id: "4835",
    title: "Docker and Kubernetes Workshop",
    eventYear: "2015fall",
    room: {
      name: "RD-301",
      capacity: 42
    }
  }, {
    id: "4860",
    title: "Minecraft Modding with Forge - Part 1",
    eventYear: "2015",
    room: {
      name: "AB-142",
      capacity: 78
    }
  }, {
    id: "5922",
    title: "Minecraft Modding with Forge - Part 2",
    eventYear: "2015",
    room: {
      name: "AB-142",
      capacity: 78
    }
  }, {
    id: "6060",
    title: "Package, Deploy, Scale Your Applications Using Docker and Kubernetes",
    eventYear: "2016fall",
    room: {
      name: "Cornell Hall",
      capacity: 0
    }
  }, {
    id: "6205",
    title: "Service Discovery in Container Orchestration Frameworks",
    eventYear: "2017",
    room: {
      name: "Town Square C",
      capacity: 130
    }
  }, {
    id: "7379",
    title: "Java developer’s journey in Kubernetes land",
    eventYear: "2018",
    room: {
      name: "Fireside C",
      capacity: 80
    }
  }, {
    id: "7486",
    title: "Using Kubernetes for Machine Learning Frameworks",
    eventYear: "2019",
    room: {
      name: "Town Square A",
      capacity: 130
    }
  }]
}, {
  id: "8590",
  first: "Chris",
  last: "Richardson",
  company: "Eventuate, Inc",
  bio: "Founder of Eventuate, Author of POJOs in Action, creator of the original Cloud Foundry",
  twitterHandle: "crichardson",
  favorite: false,
  sessions: [{
    id: "1011",
    title: "Decomposing applications for scalability and deployability",
    eventYear: "2012",
    room: {
      name: "4306",
      capacity: 100
    }
  }, {
    id: "1133",
    title: "Developing polyglot persistence applications",
    eventYear: "2013",
    room: {
      name: "5502",
      capacity: 70
    }
  }, {
    id: "1136",
    title: "Consuming web services asynchronously with Futures and Rx Observables",
    eventYear: "2013",
    room: {
      name: "8338",
      capacity: 120
    }
  }, {
    id: "1454",
    title: "Developing applications with a micro-service architecture",
    eventYear: "2014",
    room: {
      name: "8338",
      capacity: 120
    }
  }, {
    id: "1455",
    title: "Map, flatmap and reduce are your new best friends",
    eventYear: "2014",
    room: {
      name: "5502",
      capacity: 70
    }
  }, {
    id: "4765",
    title: "Developing event-driven microservices with event sourcing and CQRS",
    eventYear: "2015",
    room: {
      name: "AB-201",
      capacity: 66
    }
  }, {
    id: "6080",
    title: "Developing Microservices with Aggregates",
    eventYear: "2016",
    room: {
      name: "RF-141",
      capacity: 58
    }
  }, {
    id: "6214",
    title: "There Is No Such Thing as a Microservice!",
    eventYear: "2017",
    room: {
      name: "Town Square C",
      capacity: 130
    }
  }, {
    id: "7401",
    title: "Developing Asynchronous, Message-Driven Microservices",
    eventYear: "2018",
    room: {
      name: "Round Table",
      capacity: 75
    }
  }, {
    id: "7402",
    title: "Microservices: Decomposing Applications for Testability and Deployability",
    eventYear: "2018",
    room: {
      name: "Town Square B",
      capacity: 130
    }
  }, {
    id: "7460",
    title: "Microservices and Serverless Speaker Panel – The Road Ahead",
    eventYear: "2018",
    room: {
      name: "Town Square B",
      capacity: 130
    }
  }, {
    id: "7515",
    title: "Cubes, Hexagons and More: Understanding the Microservices Through Shapes",
    eventYear: "2019",
    room: {
      name: "Town Square C",
      capacity: 130
    }
  }]
}, {
  id: "5443",
  first: "Mark",
  last: "Abramson",
  company: "Printform Corporation",
  bio: "Mark is a globally recognized expert on digital printing for industrial and packaging applications.",
  twitterHandle: "mark__a",
  favorite: true,
  sessions: [{
    id: "676",
    title: "Accelerate your database development with Object-Relational Mapping (OR/M) in .NET",
    eventYear: "2011",
    room: {
      name: "8401",
      capacity: 48
    }
  }, {
    id: "677",
    title: "Introduction to Database Design with Entity Relationship (ER) Diagrams",
    eventYear: "2011",
    room: {
      name: "5501",
      capacity: 70
    }
  }, {
    id: "859",
    title: "Database Design Troubleshooting, repair and wart removal",
    eventYear: "2012",
    room: {
      name: "3525",
      capacity: 110
    }
  }, {
    id: "861",
    title: "Introduction to Database Design with Entity Relationship (ER) Diagrams",
    eventYear: "2012",
    room: {
      name: "3525",
      capacity: 110
    }
  }, {
    id: "1120",
    title: "Intro to Relational Database Design & Entity-Relationship Diagrams",
    eventYear: "2013",
    room: {
      name: "1501",
      capacity: 190
    }
  }, {
    id: "1125",
    title: "Advanced Data Modeling with Entity Relationship Diagrams",
    eventYear: "2013",
    room: {
      name: "PSEC4501",
      capacity: 73
    }
  }, {
    id: "1435",
    title: "Intro to Relational Database Design & Entity-Relationship Diagrams",
    eventYear: "2014",
    room: {
      name: "8402",
      capacity: 80
    }
  }, {
    id: "2577",
    title: "Lean Startup for Engineers",
    eventYear: "2014",
    room: {
      name: "8402",
      capacity: 80
    }
  }, {
    id: "4819",
    title: "Lean Startup for Engineers",
    eventYear: "2015",
    room: {
      name: "AC-162",
      capacity: 77
    }
  }, {
    id: "6184",
    title: "Lean Startup for Engineers",
    eventYear: "2017",
    room: {
      name: "Fireside D",
      capacity: 80
    }
  }]
}, {
  id: "1124",
  first: "Douglas",
  last: "Crockford",
  company: "PayPal",
  bio: "Douglas Crockford discovered the JSON Data Interchange Format. He is also the author of _JavaScript: The Good Parts_. He has been called a guru, but he is actually more of a mahatma.",
  twitterHandle: "notatweeter",
  favorite: true,
  sessions: [{
    id: "12",
    title: "JavaScript: The Good Parts (Part 1)",
    eventYear: "2008",
    room: {
      name: "Cornell Hall",
      capacity: 0
    }
  }, {
    id: "121",
    title: "JavaScript: The Good Parts (Part 2)",
    eventYear: "2008",
    room: {
      name: "Cornell Hall",
      capacity: 0
    }
  }, {
    id: "176",
    title: "JavaScript: The Good Parts",
    eventYear: "2009",
    room: {
      name: "5501",
      capacity: 70
    }
  }, {
    id: "177",
    title: "JavaScript Town Meeting",
    eventYear: "2009",
    room: {
      name: "5501",
      capacity: 70
    }
  }, {
    id: "371",
    title: "JavaScript: The Good Parts",
    eventYear: "2010",
    room: {
      name: "1501",
      capacity: 190
    }
  }, {
    id: "536",
    title: "Talk with Crock",
    eventYear: "2010",
    room: {
      name: "1501",
      capacity: 190
    }
  }, {
    id: "588",
    title: "ECMAScript 5: The New Parts",
    eventYear: "2011",
    room: {
      name: "1501",
      capacity: 190
    }
  }, {
    id: "589",
    title: "ECMAScript: What Next?",
    eventYear: "2011",
    room: {
      name: "1501",
      capacity: 190
    }
  }, {
    id: "833",
    title: "Programming Style and Your Brain",
    eventYear: "2012",
    room: {
      name: "SmithWick",
      capacity: 1000
    }
  }, {
    id: "1056",
    title: "Monads and Gonads",
    eventYear: "2012",
    room: {
      name: "SmithWick",
      capacity: 1000
    }
  }, {
    id: "1198",
    title: "Fun with Functions (Part 1)",
    eventYear: "2013",
    room: {
      name: "SmithWick",
      capacity: 1000
    }
  }, {
    id: "1199",
    title: "Fun with Functions (Part 2)",
    eventYear: "2013",
    room: {
      name: "SmithWick",
      capacity: 1000
    }
  }, {
    id: "1390",
    title: "Fun with Functions in JavaScript (Full Day)",
    eventYear: "2014",
    room: {
      name: "Cornell Hall",
      capacity: 0
    }
  }, {
    id: "1416",
    title: "The Better Parts",
    eventYear: "2014",
    room: {
      name: "SmithWick",
      capacity: 1000
    }
  }, {
    id: "3643",
    title: "Managing Programmers. Programmers are not like the other kids",
    eventYear: "2014",
    room: {
      name: "1501",
      capacity: 190
    }
  }, {
    id: "3687",
    title: "The Better Parts",
    eventYear: "2015",
    room: {
      name: "VPA-Theater",
      capacity: 395
    }
  }, {
    id: "3696",
    title: "Managing Programmers",
    eventYear: "2015",
    room: {
      name: "VPA-Theater",
      capacity: 395
    }
  }, {
    id: "4726",
    title: "Upgrading the Web",
    eventYear: "2015sf",
    room: {
      name: "Cornell Hall",
      capacity: 0
    }
  }, {
    id: "5987",
    title: "The Seif Project Continued",
    eventYear: "2016",
    room: {
      name: "VPA-Theater",
      capacity: 395
    }
  }, {
    id: "6171",
    title: "The Post Javascript Apocalypse",
    eventYear: "2016",
    room: {
      name: "VPA-Theater",
      capacity: 395
    }
  }, {
    id: "6208",
    title: "Numbers",
    eventYear: "2017",
    room: {
      name: "Town Square B",
      capacity: 130
    }
  }, {
    id: "6209",
    title: "Character Sets",
    eventYear: "2017",
    room: {
      name: "Town Square B",
      capacity: 130
    }
  }, {
    id: "7256",
    title: "Principles of Security",
    eventYear: "2017",
    room: {
      name: "Town Square B",
      capacity: 130
    }
  }, {
    id: "7417",
    title: "How JavaScript Works",
    eventYear: "2018",
    room: {
      name: "Town Square A",
      capacity: 130
    }
  }, {
    id: "7418",
    title: "Q&A With Douglas Crockford",
    eventYear: "2018",
    room: {
      name: "Fireside A",
      capacity: 80
    }
  }, {
    id: "7465",
    title: "Web Panel with Douglas Crockford, Steve Souders and Mike North",
    eventYear: "2018",
    room: {
      name: "Town Square B",
      capacity: 130
    }
  }, {
    id: "7489",
    title: "The History of JSON",
    eventYear: "2019",
    room: {
      name: "Town Square A",
      capacity: 130
    }
  }, {
    id: "7569",
    title: "You Can Count on Numbers",
    eventYear: "2019",
    room: {
      name: "Town Square A",
      capacity: 130
    }
  }]
}, {
  id: "10801",
  first: "Troy",
  last: "Miles",
  company: "Kelley Blue Book",
  bio: "An award winning developer and author.",
  twitterHandle: "therockncoder",
  favorite: false,
  sessions: [{
    id: "1252",
    title: "Beginning HTML5 Mobile Game Programming",
    eventYear: "2013",
    room: {
      name: "8338",
      capacity: 120
    }
  }, {
    id: "1444",
    title: "Intro to Mobile Game Programming with Cocos2d-x, Part 1",
    eventYear: "2014",
    room: {
      name: "4220",
      capacity: 50
    }
  }, {
    id: "1445",
    title: "Intro to Mobile Game Programming with Cocos2d-x, Part 2",
    eventYear: "2014",
    room: {
      name: "4220",
      capacity: 50
    }
  }, {
    id: "6085",
    title: "Functional Programming in JavaScript",
    eventYear: "2016",
    room: {
      name: "Gullo II",
      capacity: 200
    }
  }, {
    id: "7242",
    title: "Creating an AWS Lambda Function with Kotlin",
    eventYear: "2017",
    room: {
      name: "Fireside D",
      capacity: 80
    }
  }, {
    id: "7346",
    title: "C++ Web Servers and APIs",
    eventYear: "2018",
    room: {
      name: "Fireside A",
      capacity: 80
    }
  }]
}, {
  id: "47343",
  first: "Eve",
  last: "Porcello",
  company: "Moon Highway",
  bio: "Eve Porcello is an instructor at Moon Highway, egghead.io, and LinkedIn Learning.",
  twitterHandle: "eveporcello",
  favorite: true,
  sessions: [{
    id: "7548",
    title: "React Is Your Friend: A Gentle Intro to the React Library",
    eventYear: "2019",
    room: {
      name: "Town Square B",
      capacity: 130
    }
  }]
}, {
  id: "14918",
  first: "Claudia",
  last: "Galvan",
  company: "Early Stage Innovation",
  bio: "Claudia is a leading expert on product internationalization",
  twitterHandle: "cgalvan",
  favorite: false,
  sessions: [{
    id: "4820",
    title: "Innovation for Women Engineers",
    eventYear: "2015",
    room: {
      name: "RE-311",
      capacity: 68
    }
  }, {
    id: "6012",
    title: "Internationalization at Startups",
    eventYear: "2016",
    room: {
      name: "S-160",
      capacity: 60
    }
  }, {
    id: "7341",
    title: "Advancing your Career through technical leadership skills ",
    eventYear: "2018",
    room: {
      name: "Town Square A",
      capacity: 130
    }
  }, {
    id: "7497",
    title: "GDPR and Privacy Around the World",
    eventYear: "2019",
    room: {
      name: "Fireside B",
      capacity: 80
    }
  }]
}, {
  id: "46769",
  first: "Mary",
  last: "Grygleski",
  company: "IBM",
  bio: "Mary is a passionate developer advocate by day, and a very active tech community organizer by night.",
  twitterHandle: "mgrygles",
  favorite: true,
  sessions: [{
    id: "7549",
    title: "A Gentle Intro to Reactive Java Programming and Systems",
    eventYear: "2019",
    room: {
      name: "Fireside A",
      capacity: 80
    }
  }]
}, {
  id: "8367",
  first: "Gayle Laakmann",
  last: "McDowell",
  company: "CareerCup",
  bio: "Gayle Laakmann McDowell is the founder and CEO of CareerCup.com and the author of three books.",
  twitterHandle: "gayle",
  favorite: false,
  sessions: [{
    id: "944",
    title: "Cracking the Coding Interview",
    eventYear: "2012",
    room: {
      name: "SmithWick",
      capacity: 1000
    }
  }, {
    id: "1086",
    title: "Cracking the Coding Interview: Advice for Devs and PM Interviews",
    eventYear: "2013",
    room: {
      name: "SmithWick",
      capacity: 1000
    }
  }, {
    id: "1412",
    title: "Cracking the Coding Interview",
    eventYear: "2014",
    room: {
      name: "SmithWick",
      capacity: 1000
    }
  }, {
    id: "1413",
    title: "Cracking the Product Manager Interview",
    eventYear: "2014",
    room: {
      name: "5015",
      capacity: 217
    }
  }, {
    id: "3701",
    title: "Cracking the Coding Interview",
    eventYear: "2015",
    room: {
      name: "VPA-Theater",
      capacity: 395
    }
  }, {
    id: "3703",
    title: "Cracking the Product Manager Interview",
    eventYear: "2015",
    room: {
      name: "SC-127",
      capacity: 250
    }
  }, {
    id: "5984",
    title: "Cracking the Coding Interview",
    eventYear: "2016",
    room: {
      name: "VPA-Theater",
      capacity: 395
    }
  }, {
    id: "5986",
    title: "Be a Better Interviewer: How to Interview Like Google (or not)-But Better!",
    eventYear: "2016",
    room: {
      name: "SC-127",
      capacity: 250
    }
  }, {
    id: "6227",
    title: "Cracking the Coding Interview",
    eventYear: "2017",
    room: {
      name: "Fireside B",
      capacity: 80
    }
  }, {
    id: "6229",
    title: "Hiring Coders with Whiteboard Interviews and Other Questions",
    eventYear: "2017",
    room: {
      name: "Town Square B",
      capacity: 130
    }
  }, {
    id: "7366",
    title: "Cracking the Coding Interview",
    eventYear: "2018",
    room: {
      name: "Town Square A",
      capacity: 130
    }
  }, {
    id: "7367",
    title: "Interview Like Google (or not)-But Better!",
    eventYear: "2018",
    room: {
      name: "Town Square A",
      capacity: 130
    }
  }, {
    id: "7368",
    title: "Cracking the Product Manager Interview",
    eventYear: "2018",
    room: {
      name: "Town Square B",
      capacity: 130
    }
  }]
}, {
  id: "620",
  first: "Ron",
  last: "Kleinman",
  company: "De Anza College",
  bio: "Ron teaches Object Oriented Analysis and Design at De Anza College ",
  twitterHandle: "notweets",
  favorite: false,
  sessions: [{
    id: "86",
    title: "The Performance Limitations  of the Java Platform ... and how to avoid them",
    eventYear: "2008",
    room: {
      name: "Cornell Hall",
      capacity: 0
    }
  }, {
    id: "6089",
    title: "So your mom always wanted you to be an architect",
    eventYear: "2016",
    room: {
      name: "C209",
      capacity: 55
    }
  }, {
    id: "7440",
    title: "How to Think like a Software Architect",
    eventYear: "2018",
    room: {
      name: "Fireside A",
      capacity: 80
    }
  }, {
    id: "7551",
    title: 'How to "think" (and design) like a Software Architect',
    eventYear: "2019",
    room: {
      name: "Town Square B",
      capacity: 130
    }
  }]
}];

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/components/Speaker.js":
/*!***********************************!*\
  !*** ./src/components/Speaker.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Ramesh_Desktop_React_Component_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/SpeakerFilterContext */ "./src/contexts/SpeakerFilterContext.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Ramesh\\Desktop\\React-Component\\src\\components\\Speaker.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Ramesh_Desktop_React_Component_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function Session(_ref) {
  var title = _ref.title,
      room = _ref.room;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
    className: "session w-100",
    children: [title, " ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("strong", {
      children: ["Room: ", room.name]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 21
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, this);
}

_c = Session;

function Sessions(_ref2) {
  var sessions = _ref2.sessions;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "sessionBox card h-250",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Session, _objectSpread({}, sessions[0]), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 9
  }, this);
}

_c2 = Sessions;

function SpeakerImage(_ref3) {
  var id = _ref3.id,
      first = _ref3.first,
      last = _ref3.last;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "speaker-img d-flex flex-row justify-content-center align-items-center h-300",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("img", {
      className: "contain-fit",
      src: "/images/speaker-".concat(id, ".jpg"),
      width: "300",
      alt: "".concat(first, " ").concat(last)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 9
  }, this);
}

_c3 = SpeakerImage;

function SpeakerFavorite(_ref4) {
  _s();

  var favorite = _ref4.favorite,
      onFavoriteToggle = _ref4.onFavoriteToggle;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      inTransition = _useState[0],
      setInTransition = _useState[1];

  function doneCallback() {
    setInTransition(false);
    console.log("In SpeakerFavorite:doneCallback    ".concat(new Date().getMilliseconds()));
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "action padB1",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
      onClick: function onClick() {
        setInTransition(true);
        return onFavoriteToggle(doneCallback);
      },
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("i", {
        className: favorite === true ? "fa fa-star orange" : "fa fa-star-o orange"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 17
      }, this), " ", "Favorite", " ", inTransition ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("span", {
        className: "fas fa-circle-notch fa-spin"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 21
      }, this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 9
  }, this);
}

_s(SpeakerFavorite, "gfuw24RZcQ1VLKTCbiMf9MKfd+I=");

_c4 = SpeakerFavorite;

function SpeakerDemographics(_ref5) {
  var first = _ref5.first,
      last = _ref5.last,
      bio = _ref5.bio,
      company = _ref5.company,
      twitterHandle = _ref5.twitterHandle,
      favorite = _ref5.favorite,
      onFavoriteToggle = _ref5.onFavoriteToggle;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "speaker-info",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "d-flex justify-content-between mb-3",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h3", {
        className: "text-truncate w-200",
        children: [first, " ", last]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SpeakerFavorite, {
      favorite: favorite,
      onFavoriteToggle: onFavoriteToggle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
        className: "card-description",
        children: bio
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "social d-flex flex-row mt-4",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "company",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h5", {
            children: "Company"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h6", {
            children: company
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 89,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 21
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
          className: "twitter",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h5", {
            children: "Twitter"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 25
          }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h6", {
            children: twitterHandle
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 25
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 21
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 74,
    columnNumber: 9
  }, this);
}

_c5 = SpeakerDemographics;

function Speaker(_ref6) {
  _s2();

  var speaker = _ref6.speaker,
      onFavoriteToggle = _ref6.onFavoriteToggle;
  var id = speaker.id,
      first = speaker.first,
      last = speaker.last,
      sessions = speaker.sessions;

  var _useContext = useContext(_contexts_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_3__.SpeakerFilterContext),
      showSessions = _useContext.showSessions;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "card card-height p-4 mt-4",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SpeakerImage, {
        id: id,
        first: first,
        last: last
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(SpeakerDemographics, _objectSpread(_objectSpread({}, speaker), {}, {
        onFavoriteToggle: onFavoriteToggle
      }), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 13
    }, this), showSessions === true ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Sessions, {
      sessions: sessions
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 38
    }, this) : null]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 105,
    columnNumber: 9
  }, this);
}

_s2(Speaker, "TltPt07ZHCSa0bZmdBKJaXz9l1w=");

_c6 = Speaker;
/* harmony default export */ __webpack_exports__["default"] = (Speaker);

var _c, _c2, _c3, _c4, _c5, _c6;

$RefreshReg$(_c, "Session");
$RefreshReg$(_c2, "Sessions");
$RefreshReg$(_c3, "SpeakerImage");
$RefreshReg$(_c4, "SpeakerFavorite");
$RefreshReg$(_c5, "SpeakerDemographics");
$RefreshReg$(_c6, "Speaker");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/components/SpeakersList.js":
/*!****************************************!*\
  !*** ./src/components/SpeakersList.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Ramesh_Desktop_React_Component_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Speaker */ "./src/components/Speaker.js");
/* harmony import */ var react_placeholder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-placeholder */ "./node_modules/react-placeholder/lib/index.js");
/* harmony import */ var _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useRequestDelay */ "./src/hooks/useRequestDelay.js");
/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../SpeakerData */ "./SpeakerData.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\Ramesh\\Desktop\\React-Component\\src\\components\\SpeakersList.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Ramesh_Desktop_React_Component_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }






function SpeakersList(_ref) {
  _s();

  var showSessions = _ref.showSessions;

  var _useRequestDelay = (0,_hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__.default)(2000, _SpeakerData__WEBPACK_IMPORTED_MODULE_5__.data),
      speakersData = _useRequestDelay.data,
      requestStatus = _useRequestDelay.requestStatus,
      error = _useRequestDelay.error,
      updateRecord = _useRequestDelay.updateRecord;

  if (requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__.REQUEST_STATUS.FAILURE) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      className: "text-danger",
      children: ["ERROR: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("b", {
        children: ["loading Speaker Data Failed ", error]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 24
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }, this);
  } //if (isLoading === true) return <div>Loading...</div>


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    className: "container speakers-list",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_placeholder__WEBPACK_IMPORTED_MODULE_3__.default, {
      type: "media",
      rows: 15,
      className: "speakerslist-placeholder",
      ready: requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__.REQUEST_STATUS.SUCCESS,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
        className: "row",
        children: speakersData.map(function (speaker) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_2__.default, {
            speaker: speaker,
            showSessions: showSessions,
            onFavoriteToggle: function onFavoriteToggle(doneCallback) {
              updateRecord(_objectSpread(_objectSpread({}, speaker), {}, {
                favorite: !speaker.favorite
              }), doneCallback);
            }
          }, speaker.id, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 29
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 9
  }, this);
}

_s(SpeakersList, "R63kNyVRm7l5IC/RUgrJnQdRFrA=", false, function () {
  return [_hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__.default];
});

_c = SpeakersList;
/* harmony default export */ __webpack_exports__["default"] = (SpeakersList);

var _c;

$RefreshReg$(_c, "SpeakersList");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./src/hooks/useRequestDelay.js":
/*!**************************************!*\
  !*** ./src/hooks/useRequestDelay.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "REQUEST_STATUS": function() { return /* binding */ REQUEST_STATUS; }
/* harmony export */ });
/* harmony import */ var C_Users_Ramesh_Desktop_React_Component_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_Ramesh_Desktop_React_Component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Ramesh_Desktop_React_Component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Ramesh_Desktop_React_Component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Ramesh_Desktop_React_Component_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _s = $RefreshSig$();


var REQUEST_STATUS = {
  LOADING: "loading",
  SUCCESS: "success",
  FAILURE: "failure"
};

function useRequestDelay() {
  _s();

  var delayTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;
  var initialData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]),
      data = _useState[0],
      setData = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(REQUEST_STATUS.LOADING),
      requestStatus = _useState2[0],
      setRequestStatus = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(""),
      error = _useState3[0],
      setError = _useState3[1];

  var delay = function delay(ms) {
    return new Promise(function (resolve) {
      return setTimeout(resolve, ms);
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function () {
    function delayFunc() {
      return _delayFunc.apply(this, arguments);
    }

    function _delayFunc() {
      _delayFunc = (0,C_Users_Ramesh_Desktop_React_Component_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Ramesh_Desktop_React_Component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
        return C_Users_Ramesh_Desktop_React_Component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return delay(delayTime);

              case 3:
                //throw "Had Error."
                setRequestStatus(REQUEST_STATUS.SUCCESS);
                setData(initialData);
                _context.next = 11;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                setRequestStatus(REQUEST_STATUS.FAILURE);
                setError(_context.t0);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));
      return _delayFunc.apply(this, arguments);
    }

    delayFunc();
  }, []);

  function updateRecord(recordUpdated, doneCallback) {
    var originalRecords = (0,C_Users_Ramesh_Desktop_React_Component_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(data);

    var newRecords = data.map(function (rec) {
      return rec.id === recordUpdated.id ? recordUpdated : rec;
    });

    function delayFunction() {
      return _delayFunction.apply(this, arguments);
    }

    function _delayFunction() {
      _delayFunction = (0,C_Users_Ramesh_Desktop_React_Component_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Ramesh_Desktop_React_Component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2() {
        return C_Users_Ramesh_Desktop_React_Component_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                setData(newRecords);
                _context2.next = 4;
                return delay(delayTime);

              case 4:
                if (doneCallback) {
                  doneCallback();
                }

                _context2.next = 12;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                console.log("error thrown inside delayFunction", _context2.t0);

                if (doneCallback) {
                  doneCallback();
                }

                setData(originalRecords);

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 7]]);
      }));
      return _delayFunction.apply(this, arguments);
    }

    delayFunction();
  }

  return {
    data: data,
    requestStatus: requestStatus,
    error: error,
    updateRecord: updateRecord
  };
}

_s(useRequestDelay, "uvvVBilWoUeFPXc52bF5AHAvR6Y=");

/* harmony default export */ __webpack_exports__["default"] = (useRequestDelay);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/react-placeholder/lib/ReactPlaceholder.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-placeholder/lib/ReactPlaceholder.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var placeholders = __webpack_require__(/*! ./placeholders */ "./node_modules/react-placeholder/lib/placeholders/index.js");
var utils_1 = __webpack_require__(/*! ./utils */ "./node_modules/react-placeholder/lib/utils.js");
var ReactPlaceholder = function (_a) {
    var _b = _a.delay, delay = _b === void 0 ? 0 : _b, _c = _a.type, type = _c === void 0 ? 'text' : _c, _d = _a.color, color = _d === void 0 ? '#CDCDCD' : _d, _e = _a.rows, rows = _e === void 0 ? 3 : _e, readyProp = _a.ready, firstLaunchOnly = _a.firstLaunchOnly, children = _a.children, className = _a.className, showLoadingAnimation = _a.showLoadingAnimation, customPlaceholder = _a.customPlaceholder, rest = __rest(_a, ["delay", "type", "color", "rows", "ready", "firstLaunchOnly", "children", "className", "showLoadingAnimation", "customPlaceholder"]);
    var _f = React.useState(readyProp), ready = _f[0], setReady = _f[1];
    var timeout = React.useRef(null);
    var getFiller = function () {
        var classes = showLoadingAnimation
            ? utils_1.joinClassNames('show-loading-animation', className)
            : className;
        if (customPlaceholder && React.isValidElement(customPlaceholder)) {
            var mergedCustomClasses = utils_1.joinClassNames(customPlaceholder.props.className, classes);
            return React.cloneElement(customPlaceholder, {
                className: mergedCustomClasses
            });
        }
        else if (customPlaceholder) {
            return customPlaceholder;
        }
        var Placeholder = placeholders[type];
        return (React.createElement(Placeholder, __assign({}, rest, { color: color, rows: rows, className: classes })));
    };
    React.useEffect(function () {
        if (!firstLaunchOnly && ready && !readyProp) {
            if (delay && delay > 0) {
                timeout.current = window.setTimeout(function () {
                    setReady(false);
                }, delay);
            }
            else {
                setReady(false);
            }
        }
        else if (readyProp) {
            if (timeout.current) {
                window.clearTimeout(timeout.current);
            }
            if (!ready) {
                setReady(true);
            }
        }
    }, [firstLaunchOnly, ready, readyProp, delay]);
    // clear the timeout when the component unmounts
    React.useEffect(function () { return function () {
        if (timeout.current) {
            window.clearTimeout(timeout.current);
        }
    }; }, []);
    // Casting - workaround for DefinitelyTyped/react issue with
    // FunctionComponents returning ReactElement, where they should be able to
    // return ReactNode. Casting also doesn't introduce another layer in the
    // component tree like another `<>children</>` workaround does.
    //
    // See https://github.com/DefinitelyTyped/DefinitelyTyped/issues/33006
    // and https://github.com/DefinitelyTyped/DefinitelyTyped/issues/18051
    return ready ? children : getFiller();
};
exports.default = ReactPlaceholder;


/***/ }),

/***/ "./node_modules/react-placeholder/lib/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-placeholder/lib/index.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var ReactPlaceholder_1 = __webpack_require__(/*! ./ReactPlaceholder */ "./node_modules/react-placeholder/lib/ReactPlaceholder.js");
exports.default = ReactPlaceholder_1["default"];


/***/ }),

/***/ "./node_modules/react-placeholder/lib/placeholders/MediaBlock.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-placeholder/lib/placeholders/MediaBlock.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var TextBlock_1 = __webpack_require__(/*! ./TextBlock */ "./node_modules/react-placeholder/lib/placeholders/TextBlock.js");
var RoundShape_1 = __webpack_require__(/*! ./RoundShape */ "./node_modules/react-placeholder/lib/placeholders/RoundShape.js");
var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/react-placeholder/lib/utils.js");
var defaultStyles = {
    display: 'flex'
};
var MediaBlock = function (_a) {
    var className = _a.className, style = _a.style, color = _a.color, rows = _a.rows;
    return (React.createElement("div", { className: utils_1.joinClassNames('media-block', className), style: __assign(__assign({}, defaultStyles), style) },
        React.createElement(RoundShape_1["default"], { color: color, style: { minHeight: 55, width: 55, minWidth: 55, marginRight: 10 } }),
        React.createElement(TextBlock_1["default"], { color: color, rows: rows })));
};
exports.default = MediaBlock;


/***/ }),

/***/ "./node_modules/react-placeholder/lib/placeholders/RectShape.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-placeholder/lib/placeholders/RectShape.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/react-placeholder/lib/utils.js");
var RectShape = function (_a) {
    var className = _a.className, style = _a.style, color = _a.color;
    var defaultStyle = {
        backgroundColor: color,
        width: '100%',
        height: '100%',
        marginRight: 10
    };
    return (React.createElement("div", { className: utils_1.joinClassNames('rect-shape', className), style: __assign(__assign({}, defaultStyle), style) }));
};
exports.default = RectShape;


/***/ }),

/***/ "./node_modules/react-placeholder/lib/placeholders/RoundShape.js":
/*!***********************************************************************!*\
  !*** ./node_modules/react-placeholder/lib/placeholders/RoundShape.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/react-placeholder/lib/utils.js");
var RoundShape = function (_a) {
    var className = _a.className, style = _a.style, color = _a.color;
    var defaultStyles = {
        backgroundColor: color,
        borderRadius: '500rem',
        width: '100%',
        height: '100%'
    };
    return (React.createElement("div", { className: utils_1.joinClassNames('round-shape', className), style: __assign(__assign({}, defaultStyles), style) }));
};
exports.default = RoundShape;


/***/ }),

/***/ "./node_modules/react-placeholder/lib/placeholders/TextBlock.js":
/*!**********************************************************************!*\
  !*** ./node_modules/react-placeholder/lib/placeholders/TextBlock.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var TextRow_1 = __webpack_require__(/*! ./TextRow */ "./node_modules/react-placeholder/lib/placeholders/TextRow.js");
var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/react-placeholder/lib/utils.js");
var defaultStyles = {
    width: '100%'
};
var defaultWidths = [97, 100, 94, 90, 98, 95, 98, 40];
var TextBlock = function (_a) {
    var rows = _a.rows, lineSpacing = _a.lineSpacing, color = _a.color, style = _a.style, className = _a.className, _b = _a.widths, widths = _b === void 0 ? defaultWidths : _b;
    var getRowStyle = function (i) {
        return {
            maxHeight: 100 / (rows * 2 - 1) + "%",
            width: widths[(i + widths.length) % widths.length] + "%"
        };
    };
    return (React.createElement("div", { className: utils_1.joinClassNames('text-block', className), style: __assign(__assign({}, defaultStyles), style) }, Array.apply(null, Array(rows)).map(function (_, i) { return (React.createElement(TextRow_1["default"], { color: color, style: getRowStyle(i), lineSpacing: i !== 0 ? lineSpacing : 0, key: i })); })));
};
exports.default = TextBlock;


/***/ }),

/***/ "./node_modules/react-placeholder/lib/placeholders/TextRow.js":
/*!********************************************************************!*\
  !*** ./node_modules/react-placeholder/lib/placeholders/TextRow.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var React = __webpack_require__(/*! react */ "./node_modules/react/index.js");
var utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/react-placeholder/lib/utils.js");
var TextRow = function (_a) {
    var className = _a.className, maxHeight = _a.maxHeight, color = _a.color, _b = _a.lineSpacing, lineSpacing = _b === void 0 ? '0.7em' : _b, style = _a.style;
    var defaultStyles = {
        maxHeight: maxHeight,
        width: '100%',
        height: '1em',
        backgroundColor: color,
        marginTop: lineSpacing
    };
    return (React.createElement("div", { className: utils_1.joinClassNames('text-row', className), style: __assign(__assign({}, defaultStyles), style) }));
};
exports.default = TextRow;


/***/ }),

/***/ "./node_modules/react-placeholder/lib/placeholders/index.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-placeholder/lib/placeholders/index.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.media = exports.text = exports.rect = exports.round = exports.textRow = exports.MediaBlock = exports.TextBlock = exports.RectShape = exports.RoundShape = exports.TextRow = void 0;
var TextRow_1 = __webpack_require__(/*! ./TextRow */ "./node_modules/react-placeholder/lib/placeholders/TextRow.js");
exports.TextRow = TextRow_1["default"];
var RoundShape_1 = __webpack_require__(/*! ./RoundShape */ "./node_modules/react-placeholder/lib/placeholders/RoundShape.js");
exports.RoundShape = RoundShape_1["default"];
var RectShape_1 = __webpack_require__(/*! ./RectShape */ "./node_modules/react-placeholder/lib/placeholders/RectShape.js");
exports.RectShape = RectShape_1["default"];
var TextBlock_1 = __webpack_require__(/*! ./TextBlock */ "./node_modules/react-placeholder/lib/placeholders/TextBlock.js");
exports.TextBlock = TextBlock_1["default"];
var MediaBlock_1 = __webpack_require__(/*! ./MediaBlock */ "./node_modules/react-placeholder/lib/placeholders/MediaBlock.js");
exports.MediaBlock = MediaBlock_1["default"];
exports.textRow = TextRow_1["default"];
exports.round = RoundShape_1["default"];
exports.rect = RectShape_1["default"];
exports.text = TextBlock_1["default"];
exports.media = MediaBlock_1["default"];


/***/ }),

/***/ "./node_modules/react-placeholder/lib/utils.js":
/*!*****************************************************!*\
  !*** ./node_modules/react-placeholder/lib/utils.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports) {

"use strict";

exports.__esModule = true;
exports.joinClassNames = void 0;
exports.joinClassNames = function () {
    var classNames = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classNames[_i] = arguments[_i];
    }
    return classNames.filter(function (c) { return c; }).join(' ');
};


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ (function(module) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL3JlZ2VuZXJhdG9yL2luZGV4LmpzIiwid2VicGFjazovL19OX0UvLi9TcGVha2VyRGF0YS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnNMaXN0LmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvaG9va3MvdXNlUmVxdWVzdERlbGF5LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcGxhY2Vob2xkZXIvbGliL1JlYWN0UGxhY2Vob2xkZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1wbGFjZWhvbGRlci9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1wbGFjZWhvbGRlci9saWIvcGxhY2Vob2xkZXJzL01lZGlhQmxvY2suanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9yZWFjdC1wbGFjZWhvbGRlci9saWIvcGxhY2Vob2xkZXJzL1JlY3RTaGFwZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXBsYWNlaG9sZGVyL2xpYi9wbGFjZWhvbGRlcnMvUm91bmRTaGFwZS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXBsYWNlaG9sZGVyL2xpYi9wbGFjZWhvbGRlcnMvVGV4dEJsb2NrLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcGxhY2Vob2xkZXIvbGliL3BsYWNlaG9sZGVycy9UZXh0Um93LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvcmVhY3QtcGxhY2Vob2xkZXIvbGliL3BsYWNlaG9sZGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LXBsYWNlaG9sZGVyL2xpYi91dGlscy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyJdLCJuYW1lcyI6WyJkYXRhIiwiaWQiLCJmaXJzdCIsImxhc3QiLCJjb21wYW55IiwiYmlvIiwidHdpdHRlckhhbmRsZSIsImZhdm9yaXRlIiwic2Vzc2lvbnMiLCJ0aXRsZSIsImV2ZW50WWVhciIsInJvb20iLCJuYW1lIiwiY2FwYWNpdHkiLCJTZXNzaW9uIiwiU2Vzc2lvbnMiLCJTcGVha2VySW1hZ2UiLCJTcGVha2VyRmF2b3JpdGUiLCJvbkZhdm9yaXRlVG9nZ2xlIiwidXNlU3RhdGUiLCJpblRyYW5zaXRpb24iLCJzZXRJblRyYW5zaXRpb24iLCJkb25lQ2FsbGJhY2siLCJjb25zb2xlIiwibG9nIiwiRGF0ZSIsImdldE1pbGxpc2Vjb25kcyIsIlNwZWFrZXJEZW1vZ3JhcGhpY3MiLCJTcGVha2VyIiwic3BlYWtlciIsInVzZUNvbnRleHQiLCJTcGVha2VyRmlsdGVyQ29udGV4dCIsInNob3dTZXNzaW9ucyIsIlNwZWFrZXJzTGlzdCIsInVzZVJlcXVlc3REZWxheSIsInNwZWFrZXJzRGF0YSIsInJlcXVlc3RTdGF0dXMiLCJlcnJvciIsInVwZGF0ZVJlY29yZCIsIlJFUVVFU1RfU1RBVFVTIiwibWFwIiwiTE9BRElORyIsIlNVQ0NFU1MiLCJGQUlMVVJFIiwiZGVsYXlUaW1lIiwiaW5pdGlhbERhdGEiLCJzZXREYXRhIiwic2V0UmVxdWVzdFN0YXR1cyIsInNldEVycm9yIiwiZGVsYXkiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsInVzZUVmZmVjdCIsImRlbGF5RnVuYyIsInJlY29yZFVwZGF0ZWQiLCJvcmlnaW5hbFJlY29yZHMiLCJuZXdSZWNvcmRzIiwicmVjIiwiZGVsYXlGdW5jdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7O0FBRUEsd0NBQXdDLFNBQVM7QUFDakQ7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSMkU7QUFDNUQ7QUFDZixpQ0FBaUMsb0ZBQWdCO0FBQ2pELEM7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9DQUFvQyxjQUFjO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQSw4Q0FBOEMsUUFBUTtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsS0FBMEIsb0JBQW9CLENBQUU7QUFDbEQ7O0FBRUE7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljc3ZWEwZTcyM2M2OWI2MTNlNjc4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXlcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn0iLCJmdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gIHRyeSB7XG4gICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgIHZhciB2YWx1ZSA9IGluZm8udmFsdWU7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmVqZWN0KGVycm9yKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoaW5mby5kb25lKSB7XG4gICAgcmVzb2x2ZSh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKF9uZXh0LCBfdGhyb3cpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3luY1RvR2VuZXJhdG9yKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBhcmdzID0gYXJndW1lbnRzO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgZ2VuID0gZm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cbiAgICAgIGZ1bmN0aW9uIF9uZXh0KHZhbHVlKSB7XG4gICAgICAgIGFzeW5jR2VuZXJhdG9yU3RlcChnZW4sIHJlc29sdmUsIHJlamVjdCwgX25leHQsIF90aHJvdywgXCJuZXh0XCIsIHZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gX3Rocm93KGVycikge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwidGhyb3dcIiwgZXJyKTtcbiAgICAgIH1cblxuICAgICAgX25leHQodW5kZWZpbmVkKTtcbiAgICB9KTtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChpdGVyKSkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn0iLCJpbXBvcnQgYXJyYXlXaXRob3V0SG9sZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aG91dEhvbGVzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXlcIjtcbmltcG9ydCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIjtcbmltcG9ydCBub25JdGVyYWJsZVNwcmVhZCBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVTcHJlYWRcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufSIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheUxpa2VUb0FycmF5XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG4iLCJleHBvcnQgY29uc3QgZGF0YSA9IFtcclxuICAgIHtcclxuICAgICAgICBpZDogXCIxMjY5XCIsXHJcbiAgICAgICAgZmlyc3Q6IFwiQXJ1blwiLFxyXG4gICAgICAgIGxhc3Q6IFwiR3VwdGFcIixcclxuICAgICAgICBjb21wYW55OiBcIkFtYXpvblwiLFxyXG4gICAgICAgIGJpbzpcclxuICAgICAgICAgICAgXCJBcnVuIEd1cHRhIGlzIGEgUHJpbmNpcGFsIE9wZW4gU291cmNlIFRlY2hub2xvZ2lzdCBhdCBBbWF6b24gV2ViIFNlcnZpY2VzLiBcIixcclxuICAgICAgICB0d2l0dGVySGFuZGxlOiBcImFydW5ndXB0YVwiLFxyXG4gICAgICAgIGZhdm9yaXRlOiB0cnVlLFxyXG4gICAgICAgIHNlc3Npb25zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjMyXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJSYWlscyBwb3dlcmVkIGJ5IEdsYXNzRmlzaFwiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMDhcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkNvcm5lbGwgSGFsbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiAwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiNThcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIk1ldHJvOiBIZWxsbyBXb3JsZCB0byAuTkVUIDMuNSBpbnRlcm9wZXJhYmxlIFdlYiBzZXJ2aWNlXCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAwOFwiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiQ29ybmVsbCBIYWxsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCI2MVwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiR2xhc3NGaXNoOiBPbiBhIG1pc3Npb24gdG8gcGxlYXNlIGRldmVsb3BlcnNcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDA4XCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJDb3JuZWxsIEhhbGxcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogMCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjI2M1wiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiSmF2YSBFRSA2IGFuZCBHbGFzc0Zpc2ggdjM6IFBhdmluZyB0aGUgcGF0aCBmb3IgZnV0dXJlXCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAwOVwiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiNTUwMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiA3MCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjI2NFwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6XHJcbiAgICAgICAgICAgICAgICAgICAgXCJVc2luZyBFY2xpcHNlIGZvciBKYXZhIEVFIDYgZGV2ZWxvcG1lbnQgZm9yIHRoZSBHbGFzc0Zpc2jihKIgQXBwbGljYXRpb24gU2VydmVyXCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAwOVwiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiNTUwM1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiA0NCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjI2NVwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiRHluYW1pYyBMYW5ndWFnZXMgJmFtcDsgV2ViIEZyYW1ld29ya3MgaW4gR2xhc3NGaXNoXCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAwOVwiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiNDIwNFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiA0NSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjQ0MFwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiSmF2YSBFRSA2OiBEb2luZyBNb3JlIFdpdGggTGVzc1wiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTBcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIjg0MDFcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogNDgsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCI0NDFcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIk9TR2kgYW5kIEphdmEgRUUgaW4gR2xhc3NGaXNoXCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAxMFwiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiNDIyMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiA1MCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjQ0NFwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiUnVubmluZyB5b3VyIEphdmEgRUUgNiBhcHBsaWNhdGlvbiBpbiB0aGUgQ2xvdWRcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDEwXCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCIzMTA2XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDQ1LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiNzY2XCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTpcclxuICAgICAgICAgICAgICAgICAgICBcIkRlcGxveSBhbmQgTW9uaXRvciB5b3VyIEphdmEgRUUgNiBzZXNzaW9uIGluIGEgZnVsbHktY2x1c3RlcmVkIEdsYXNzRmlzaFwiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTFcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIjQyMDFcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogNzAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCI3NzBcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlRoZSBKYXZhIEVFIDcgUGxhdGZvcm06IERldmVsb3BpbmcgZm9yIHRoZSBDbG91ZFwiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTFcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIjQyMDFcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogNzAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCI4NjRcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlJFU1RmdWwgSmF2YSBvbiBTdGVyb2lkczogSkFYLVJTIDIuMFwiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTJcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIjU1MDJcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogNzAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCIxMTMxXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCI1MCBuZXcgZmVhdHVyZXMgb2YgSmF2YSBFRSA3IGluIDUwIG1pbnV0ZXNcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDEzXCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCIzNTI1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDExMCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjEyNjJcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIk1pbmVjcmFmdCBNb2RkaW5nIFdvcmtzaG9wIChQYXJ0IDEgb2YgMilcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDEzXCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJQU0VDNDYwM1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiAxLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiMTM1MlwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiTWluZWNyYWZ0IE1vZGRpbmcgV29ya3Nob3AgKFBhcnQgMiBvZiAyKVwiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTNcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlBTRUM0NjAzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDEsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCIxNDQwXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCIgQWxsIGFib3V0IFdpbGRGbHksIE9ubHkgdXNpbmcgZGVtb3NcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDE0XCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCI0MzAyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDQxLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiMTQ0MVwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiSmF2YSBFRSA3IGRldmVsb3BtZW50IHVzaW5nIEVjbGlwc2VcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDE0XCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCI0MzAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDY0LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiMjUyOVwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiSW50cm9kdWN0b3J5IE1pbmVjcmFmdCBNb2RkaW5nIHdpdGggRm9yZ2UgLSBQYXJ0IDFcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDE0XCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJQU0VDNDUwMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiA3MyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjI1NTdcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkludHJvZHVjdG9yeSBNaW5lY3JhZnQgTW9kZGluZyB3aXRoIEZvcmdlIC0gUGFydCBJSVwiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTRcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlBTRUM0NTAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDczLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiMzY5NFwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiRG9ja2VyIGFuZCBLdWJlcm5ldGVzIFJlY2lwZXMgZm9yIEphdmEgQXBwbGljYXRpb25zXCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAxNVwiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiQUQtMTIzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDcwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiNDgzNVwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiRG9ja2VyIGFuZCBLdWJlcm5ldGVzIFdvcmtzaG9wXCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAxNWZhbGxcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlJELTMwMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiA0MixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjQ4NjBcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIk1pbmVjcmFmdCBNb2RkaW5nIHdpdGggRm9yZ2UgLSBQYXJ0IDFcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDE1XCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJBQi0xNDJcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogNzgsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCI1OTIyXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJNaW5lY3JhZnQgTW9kZGluZyB3aXRoIEZvcmdlIC0gUGFydCAyXCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAxNVwiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiQUItMTQyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDc4LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiNjA2MFwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6XHJcbiAgICAgICAgICAgICAgICAgICAgXCJQYWNrYWdlLCBEZXBsb3ksIFNjYWxlIFlvdXIgQXBwbGljYXRpb25zIFVzaW5nIERvY2tlciBhbmQgS3ViZXJuZXRlc1wiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTZmYWxsXCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJDb3JuZWxsIEhhbGxcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogMCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjYyMDVcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlNlcnZpY2UgRGlzY292ZXJ5IGluIENvbnRhaW5lciBPcmNoZXN0cmF0aW9uIEZyYW1ld29ya3NcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDE3XCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJUb3duIFNxdWFyZSBDXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDEzMCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjczNzlcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkphdmEgZGV2ZWxvcGVy4oCZcyBqb3VybmV5IGluIEt1YmVybmV0ZXMgbGFuZFwiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMThcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkZpcmVzaWRlIENcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogODAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCI3NDg2XCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJVc2luZyBLdWJlcm5ldGVzIGZvciBNYWNoaW5lIExlYXJuaW5nIEZyYW1ld29ya3NcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDE5XCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJUb3duIFNxdWFyZSBBXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDEzMCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwiODU5MFwiLFxyXG4gICAgICAgIGZpcnN0OiBcIkNocmlzXCIsXHJcbiAgICAgICAgbGFzdDogXCJSaWNoYXJkc29uXCIsXHJcbiAgICAgICAgY29tcGFueTogXCJFdmVudHVhdGUsIEluY1wiLFxyXG4gICAgICAgIGJpbzpcclxuICAgICAgICAgICAgXCJGb3VuZGVyIG9mIEV2ZW50dWF0ZSwgQXV0aG9yIG9mIFBPSk9zIGluIEFjdGlvbiwgY3JlYXRvciBvZiB0aGUgb3JpZ2luYWwgQ2xvdWQgRm91bmRyeVwiLFxyXG4gICAgICAgIHR3aXR0ZXJIYW5kbGU6IFwiY3JpY2hhcmRzb25cIixcclxuICAgICAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgICAgICAgc2Vzc2lvbnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiMTAxMVwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiRGVjb21wb3NpbmcgYXBwbGljYXRpb25zIGZvciBzY2FsYWJpbGl0eSBhbmQgZGVwbG95YWJpbGl0eVwiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTJcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIjQzMDZcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogMTAwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiMTEzM1wiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiRGV2ZWxvcGluZyBwb2x5Z2xvdCBwZXJzaXN0ZW5jZSBhcHBsaWNhdGlvbnNcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDEzXCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCI1NTAyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDcwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiMTEzNlwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6XHJcbiAgICAgICAgICAgICAgICAgICAgXCJDb25zdW1pbmcgd2ViIHNlcnZpY2VzIGFzeW5jaHJvbm91c2x5IHdpdGggRnV0dXJlcyBhbmQgUnggT2JzZXJ2YWJsZXNcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDEzXCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCI4MzM4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDEyMCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjE0NTRcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkRldmVsb3BpbmcgYXBwbGljYXRpb25zIHdpdGggYSBtaWNyby1zZXJ2aWNlIGFyY2hpdGVjdHVyZVwiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTRcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIjgzMzhcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogMTIwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiMTQ1NVwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiTWFwLCBmbGF0bWFwIGFuZCByZWR1Y2UgYXJlIHlvdXIgbmV3IGJlc3QgZnJpZW5kc1wiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTRcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIjU1MDJcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogNzAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCI0NzY1XCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTpcclxuICAgICAgICAgICAgICAgICAgICBcIkRldmVsb3BpbmcgZXZlbnQtZHJpdmVuIG1pY3Jvc2VydmljZXMgd2l0aCBldmVudCBzb3VyY2luZyBhbmQgQ1FSU1wiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTVcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkFCLTIwMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiA2NixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjYwODBcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkRldmVsb3BpbmcgTWljcm9zZXJ2aWNlcyB3aXRoIEFnZ3JlZ2F0ZXNcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDE2XCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJSRi0xNDFcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogNTgsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCI2MjE0XCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJUaGVyZSBJcyBObyBTdWNoIFRoaW5nIGFzIGEgTWljcm9zZXJ2aWNlIVwiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTdcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlRvd24gU3F1YXJlIENcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogMTMwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiNzQwMVwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiRGV2ZWxvcGluZyBBc3luY2hyb25vdXMsIE1lc3NhZ2UtRHJpdmVuIE1pY3Jvc2VydmljZXNcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDE4XCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJSb3VuZCBUYWJsZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiA3NSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjc0MDJcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOlxyXG4gICAgICAgICAgICAgICAgICAgIFwiTWljcm9zZXJ2aWNlczogRGVjb21wb3NpbmcgQXBwbGljYXRpb25zIGZvciBUZXN0YWJpbGl0eSBhbmQgRGVwbG95YWJpbGl0eVwiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMThcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlRvd24gU3F1YXJlIEJcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogMTMwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiNzQ2MFwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiTWljcm9zZXJ2aWNlcyBhbmQgU2VydmVybGVzcyBTcGVha2VyIFBhbmVsIOKAkyBUaGUgUm9hZCBBaGVhZFwiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMThcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlRvd24gU3F1YXJlIEJcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogMTMwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiNzUxNVwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6XHJcbiAgICAgICAgICAgICAgICAgICAgXCJDdWJlcywgSGV4YWdvbnMgYW5kIE1vcmU6IFVuZGVyc3RhbmRpbmcgdGhlIE1pY3Jvc2VydmljZXMgVGhyb3VnaCBTaGFwZXNcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDE5XCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJUb3duIFNxdWFyZSBDXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDEzMCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwiNTQ0M1wiLFxyXG4gICAgICAgIGZpcnN0OiBcIk1hcmtcIixcclxuICAgICAgICBsYXN0OiBcIkFicmFtc29uXCIsXHJcbiAgICAgICAgY29tcGFueTogXCJQcmludGZvcm0gQ29ycG9yYXRpb25cIixcclxuICAgICAgICBiaW86XHJcbiAgICAgICAgICAgIFwiTWFyayBpcyBhIGdsb2JhbGx5IHJlY29nbml6ZWQgZXhwZXJ0IG9uIGRpZ2l0YWwgcHJpbnRpbmcgZm9yIGluZHVzdHJpYWwgYW5kIHBhY2thZ2luZyBhcHBsaWNhdGlvbnMuXCIsXHJcbiAgICAgICAgdHdpdHRlckhhbmRsZTogXCJtYXJrX19hXCIsXHJcbiAgICAgICAgZmF2b3JpdGU6IHRydWUsXHJcbiAgICAgICAgc2Vzc2lvbnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiNjc2XCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTpcclxuICAgICAgICAgICAgICAgICAgICBcIkFjY2VsZXJhdGUgeW91ciBkYXRhYmFzZSBkZXZlbG9wbWVudCB3aXRoIE9iamVjdC1SZWxhdGlvbmFsIE1hcHBpbmcgKE9SL00pIGluIC5ORVRcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDExXCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCI4NDAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDQ4LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiNjc3XCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTpcclxuICAgICAgICAgICAgICAgICAgICBcIkludHJvZHVjdGlvbiB0byBEYXRhYmFzZSBEZXNpZ24gd2l0aCBFbnRpdHkgUmVsYXRpb25zaGlwIChFUikgRGlhZ3JhbXNcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDExXCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCI1NTAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDcwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiODU5XCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJEYXRhYmFzZSBEZXNpZ24gVHJvdWJsZXNob290aW5nLCByZXBhaXIgYW5kIHdhcnQgcmVtb3ZhbFwiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTJcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIjM1MjVcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogMTEwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiODYxXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTpcclxuICAgICAgICAgICAgICAgICAgICBcIkludHJvZHVjdGlvbiB0byBEYXRhYmFzZSBEZXNpZ24gd2l0aCBFbnRpdHkgUmVsYXRpb25zaGlwIChFUikgRGlhZ3JhbXNcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDEyXCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCIzNTI1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDExMCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjExMjBcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOlxyXG4gICAgICAgICAgICAgICAgICAgIFwiSW50cm8gdG8gUmVsYXRpb25hbCBEYXRhYmFzZSBEZXNpZ24gJiBFbnRpdHktUmVsYXRpb25zaGlwIERpYWdyYW1zXCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAxM1wiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiMTUwMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiAxOTAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCIxMTI1XCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJBZHZhbmNlZCBEYXRhIE1vZGVsaW5nIHdpdGggRW50aXR5IFJlbGF0aW9uc2hpcCBEaWFncmFtc1wiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTNcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlBTRUM0NTAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDczLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiMTQzNVwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6XHJcbiAgICAgICAgICAgICAgICAgICAgXCJJbnRybyB0byBSZWxhdGlvbmFsIERhdGFiYXNlIERlc2lnbiAmIEVudGl0eS1SZWxhdGlvbnNoaXAgRGlhZ3JhbXNcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDE0XCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCI4NDAyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDgwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiMjU3N1wiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiTGVhbiBTdGFydHVwIGZvciBFbmdpbmVlcnNcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDE0XCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCI4NDAyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDgwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiNDgxOVwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiTGVhbiBTdGFydHVwIGZvciBFbmdpbmVlcnNcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDE1XCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJBQy0xNjJcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogNzcsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCI2MTg0XCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJMZWFuIFN0YXJ0dXAgZm9yIEVuZ2luZWVyc1wiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTdcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkZpcmVzaWRlIERcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogODAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcIjExMjRcIixcclxuICAgICAgICBmaXJzdDogXCJEb3VnbGFzXCIsXHJcbiAgICAgICAgbGFzdDogXCJDcm9ja2ZvcmRcIixcclxuICAgICAgICBjb21wYW55OiBcIlBheVBhbFwiLFxyXG4gICAgICAgIGJpbzpcclxuICAgICAgICAgICAgXCJEb3VnbGFzIENyb2NrZm9yZCBkaXNjb3ZlcmVkIHRoZSBKU09OIERhdGEgSW50ZXJjaGFuZ2UgRm9ybWF0LiBIZSBpcyBhbHNvIHRoZSBhdXRob3Igb2YgX0phdmFTY3JpcHQ6IFRoZSBHb29kIFBhcnRzXy4gSGUgaGFzIGJlZW4gY2FsbGVkIGEgZ3VydSwgYnV0IGhlIGlzIGFjdHVhbGx5IG1vcmUgb2YgYSBtYWhhdG1hLlwiLFxyXG4gICAgICAgIHR3aXR0ZXJIYW5kbGU6IFwibm90YXR3ZWV0ZXJcIixcclxuICAgICAgICBmYXZvcml0ZTogdHJ1ZSxcclxuICAgICAgICBzZXNzaW9uczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCIxMlwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiSmF2YVNjcmlwdDogVGhlIEdvb2QgUGFydHMgKFBhcnQgMSlcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDA4XCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJDb3JuZWxsIEhhbGxcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogMCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjEyMVwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiSmF2YVNjcmlwdDogVGhlIEdvb2QgUGFydHMgKFBhcnQgMilcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDA4XCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJDb3JuZWxsIEhhbGxcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogMCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjE3NlwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiSmF2YVNjcmlwdDogVGhlIEdvb2QgUGFydHNcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDA5XCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCI1NTAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDcwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiMTc3XCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJKYXZhU2NyaXB0IFRvd24gTWVldGluZ1wiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMDlcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIjU1MDFcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogNzAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCIzNzFcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkphdmFTY3JpcHQ6IFRoZSBHb29kIFBhcnRzXCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAxMFwiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiMTUwMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiAxOTAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCI1MzZcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlRhbGsgd2l0aCBDcm9ja1wiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTBcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIjE1MDFcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogMTkwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiNTg4XCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJFQ01BU2NyaXB0IDU6IFRoZSBOZXcgUGFydHNcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDExXCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCIxNTAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDE5MCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjU4OVwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiRUNNQVNjcmlwdDogV2hhdCBOZXh0P1wiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTFcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIjE1MDFcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogMTkwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiODMzXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJQcm9ncmFtbWluZyBTdHlsZSBhbmQgWW91ciBCcmFpblwiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTJcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlNtaXRoV2lja1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiAxMDAwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiMTA1NlwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiTW9uYWRzIGFuZCBHb25hZHNcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDEyXCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJTbWl0aFdpY2tcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogMTAwMCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjExOThcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkZ1biB3aXRoIEZ1bmN0aW9ucyAoUGFydCAxKVwiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTNcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlNtaXRoV2lja1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiAxMDAwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiMTE5OVwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiRnVuIHdpdGggRnVuY3Rpb25zIChQYXJ0IDIpXCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAxM1wiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiU21pdGhXaWNrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDEwMDAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCIxMzkwXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJGdW4gd2l0aCBGdW5jdGlvbnMgaW4gSmF2YVNjcmlwdCAoRnVsbCBEYXkpXCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAxNFwiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiQ29ybmVsbCBIYWxsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCIxNDE2XCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJUaGUgQmV0dGVyIFBhcnRzXCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAxNFwiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiU21pdGhXaWNrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDEwMDAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCIzNjQzXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJNYW5hZ2luZyBQcm9ncmFtbWVycy4gUHJvZ3JhbW1lcnMgYXJlIG5vdCBsaWtlIHRoZSBvdGhlciBraWRzXCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAxNFwiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiMTUwMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiAxOTAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCIzNjg3XCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJUaGUgQmV0dGVyIFBhcnRzXCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAxNVwiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiVlBBLVRoZWF0ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogMzk1LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiMzY5NlwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiTWFuYWdpbmcgUHJvZ3JhbW1lcnNcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDE1XCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJWUEEtVGhlYXRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiAzOTUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCI0NzI2XCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJVcGdyYWRpbmcgdGhlIFdlYlwiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTVzZlwiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiQ29ybmVsbCBIYWxsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCI1OTg3XCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJUaGUgU2VpZiBQcm9qZWN0IENvbnRpbnVlZFwiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTZcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlZQQS1UaGVhdGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDM5NSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjYxNzFcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlRoZSBQb3N0IEphdmFzY3JpcHQgQXBvY2FseXBzZVwiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTZcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlZQQS1UaGVhdGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDM5NSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjYyMDhcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIk51bWJlcnNcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDE3XCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJUb3duIFNxdWFyZSBCXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDEzMCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjYyMDlcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkNoYXJhY3RlciBTZXRzXCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAxN1wiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiVG93biBTcXVhcmUgQlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiAxMzAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCI3MjU2XCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJQcmluY2lwbGVzIG9mIFNlY3VyaXR5XCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAxN1wiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiVG93biBTcXVhcmUgQlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiAxMzAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCI3NDE3XCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJIb3cgSmF2YVNjcmlwdCBXb3Jrc1wiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMThcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlRvd24gU3F1YXJlIEFcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogMTMwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiNzQxOFwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiUSZBIFdpdGggRG91Z2xhcyBDcm9ja2ZvcmRcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDE4XCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJGaXJlc2lkZSBBXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDgwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiNzQ2NVwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiV2ViIFBhbmVsIHdpdGggRG91Z2xhcyBDcm9ja2ZvcmQsIFN0ZXZlIFNvdWRlcnMgYW5kIE1pa2UgTm9ydGhcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDE4XCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJUb3duIFNxdWFyZSBCXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDEzMCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjc0ODlcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlRoZSBIaXN0b3J5IG9mIEpTT05cIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDE5XCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJUb3duIFNxdWFyZSBBXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDEzMCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjc1NjlcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIllvdSBDYW4gQ291bnQgb24gTnVtYmVyc1wiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTlcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlRvd24gU3F1YXJlIEFcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogMTMwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCIxMDgwMVwiLFxyXG4gICAgICAgIGZpcnN0OiBcIlRyb3lcIixcclxuICAgICAgICBsYXN0OiBcIk1pbGVzXCIsXHJcbiAgICAgICAgY29tcGFueTogXCJLZWxsZXkgQmx1ZSBCb29rXCIsXHJcbiAgICAgICAgYmlvOiBcIkFuIGF3YXJkIHdpbm5pbmcgZGV2ZWxvcGVyIGFuZCBhdXRob3IuXCIsXHJcbiAgICAgICAgdHdpdHRlckhhbmRsZTogXCJ0aGVyb2NrbmNvZGVyXCIsXHJcbiAgICAgICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gICAgICAgIHNlc3Npb25zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjEyNTJcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkJlZ2lubmluZyBIVE1MNSBNb2JpbGUgR2FtZSBQcm9ncmFtbWluZ1wiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTNcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIjgzMzhcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogMTIwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiMTQ0NFwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiSW50cm8gdG8gTW9iaWxlIEdhbWUgUHJvZ3JhbW1pbmcgd2l0aCBDb2NvczJkLXgsIFBhcnQgMVwiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTRcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIjQyMjBcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogNTAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCIxNDQ1XCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJJbnRybyB0byBNb2JpbGUgR2FtZSBQcm9ncmFtbWluZyB3aXRoIENvY29zMmQteCwgUGFydCAyXCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAxNFwiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiNDIyMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiA1MCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjYwODVcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkZ1bmN0aW9uYWwgUHJvZ3JhbW1pbmcgaW4gSmF2YVNjcmlwdFwiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTZcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkd1bGxvIElJXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDIwMCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjcyNDJcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkNyZWF0aW5nIGFuIEFXUyBMYW1iZGEgRnVuY3Rpb24gd2l0aCBLb3RsaW5cIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDE3XCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJGaXJlc2lkZSBEXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDgwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiNzM0NlwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQysrIFdlYiBTZXJ2ZXJzIGFuZCBBUElzXCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAxOFwiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiRmlyZXNpZGUgQVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiA4MCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwiNDczNDNcIixcclxuICAgICAgICBmaXJzdDogXCJFdmVcIixcclxuICAgICAgICBsYXN0OiBcIlBvcmNlbGxvXCIsXHJcbiAgICAgICAgY29tcGFueTogXCJNb29uIEhpZ2h3YXlcIixcclxuICAgICAgICBiaW86XHJcbiAgICAgICAgICAgIFwiRXZlIFBvcmNlbGxvIGlzIGFuIGluc3RydWN0b3IgYXQgTW9vbiBIaWdod2F5LCBlZ2doZWFkLmlvLCBhbmQgTGlua2VkSW4gTGVhcm5pbmcuXCIsXHJcbiAgICAgICAgdHdpdHRlckhhbmRsZTogXCJldmVwb3JjZWxsb1wiLFxyXG4gICAgICAgIGZhdm9yaXRlOiB0cnVlLFxyXG4gICAgICAgIHNlc3Npb25zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjc1NDhcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlJlYWN0IElzIFlvdXIgRnJpZW5kOiBBIEdlbnRsZSBJbnRybyB0byB0aGUgUmVhY3QgTGlicmFyeVwiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTlcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlRvd24gU3F1YXJlIEJcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogMTMwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCIxNDkxOFwiLFxyXG4gICAgICAgIGZpcnN0OiBcIkNsYXVkaWFcIixcclxuICAgICAgICBsYXN0OiBcIkdhbHZhblwiLFxyXG4gICAgICAgIGNvbXBhbnk6IFwiRWFybHkgU3RhZ2UgSW5ub3ZhdGlvblwiLFxyXG4gICAgICAgIGJpbzogXCJDbGF1ZGlhIGlzIGEgbGVhZGluZyBleHBlcnQgb24gcHJvZHVjdCBpbnRlcm5hdGlvbmFsaXphdGlvblwiLFxyXG4gICAgICAgIHR3aXR0ZXJIYW5kbGU6IFwiY2dhbHZhblwiLFxyXG4gICAgICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICAgICAgICBzZXNzaW9uczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCI0ODIwXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJJbm5vdmF0aW9uIGZvciBXb21lbiBFbmdpbmVlcnNcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDE1XCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJSRS0zMTFcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogNjgsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCI2MDEyXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJJbnRlcm5hdGlvbmFsaXphdGlvbiBhdCBTdGFydHVwc1wiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTZcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlMtMTYwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDYwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiNzM0MVwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQWR2YW5jaW5nIHlvdXIgQ2FyZWVyIHRocm91Z2ggdGVjaG5pY2FsIGxlYWRlcnNoaXAgc2tpbGxzIFwiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMThcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlRvd24gU3F1YXJlIEFcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogMTMwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiNzQ5N1wiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiR0RQUiBhbmQgUHJpdmFjeSBBcm91bmQgdGhlIFdvcmxkXCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAxOVwiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiRmlyZXNpZGUgQlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiA4MCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwiNDY3NjlcIixcclxuICAgICAgICBmaXJzdDogXCJNYXJ5XCIsXHJcbiAgICAgICAgbGFzdDogXCJHcnlnbGVza2lcIixcclxuICAgICAgICBjb21wYW55OiBcIklCTVwiLFxyXG4gICAgICAgIGJpbzpcclxuICAgICAgICAgICAgXCJNYXJ5IGlzIGEgcGFzc2lvbmF0ZSBkZXZlbG9wZXIgYWR2b2NhdGUgYnkgZGF5LCBhbmQgYSB2ZXJ5IGFjdGl2ZSB0ZWNoIGNvbW11bml0eSBvcmdhbml6ZXIgYnkgbmlnaHQuXCIsXHJcbiAgICAgICAgdHdpdHRlckhhbmRsZTogXCJtZ3J5Z2xlc1wiLFxyXG4gICAgICAgIGZhdm9yaXRlOiB0cnVlLFxyXG4gICAgICAgIHNlc3Npb25zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjc1NDlcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkEgR2VudGxlIEludHJvIHRvIFJlYWN0aXZlIEphdmEgUHJvZ3JhbW1pbmcgYW5kIFN5c3RlbXNcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDE5XCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJGaXJlc2lkZSBBXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDgwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCI4MzY3XCIsXHJcbiAgICAgICAgZmlyc3Q6IFwiR2F5bGUgTGFha21hbm5cIixcclxuICAgICAgICBsYXN0OiBcIk1jRG93ZWxsXCIsXHJcbiAgICAgICAgY29tcGFueTogXCJDYXJlZXJDdXBcIixcclxuICAgICAgICBiaW86XHJcbiAgICAgICAgICAgIFwiR2F5bGUgTGFha21hbm4gTWNEb3dlbGwgaXMgdGhlIGZvdW5kZXIgYW5kIENFTyBvZiBDYXJlZXJDdXAuY29tIGFuZCB0aGUgYXV0aG9yIG9mIHRocmVlIGJvb2tzLlwiLFxyXG4gICAgICAgIHR3aXR0ZXJIYW5kbGU6IFwiZ2F5bGVcIixcclxuICAgICAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgICAgICAgc2Vzc2lvbnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiOTQ0XCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJDcmFja2luZyB0aGUgQ29kaW5nIEludGVydmlld1wiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTJcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlNtaXRoV2lja1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiAxMDAwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiMTA4NlwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6XHJcbiAgICAgICAgICAgICAgICAgICAgXCJDcmFja2luZyB0aGUgQ29kaW5nIEludGVydmlldzogQWR2aWNlIGZvciBEZXZzIGFuZCBQTSBJbnRlcnZpZXdzXCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAxM1wiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiU21pdGhXaWNrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDEwMDAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCIxNDEyXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJDcmFja2luZyB0aGUgQ29kaW5nIEludGVydmlld1wiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTRcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlNtaXRoV2lja1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiAxMDAwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiMTQxM1wiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQ3JhY2tpbmcgdGhlIFByb2R1Y3QgTWFuYWdlciBJbnRlcnZpZXdcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDE0XCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCI1MDE1XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDIxNyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjM3MDFcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkNyYWNraW5nIHRoZSBDb2RpbmcgSW50ZXJ2aWV3XCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAxNVwiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiVlBBLVRoZWF0ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogMzk1LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiMzcwM1wiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQ3JhY2tpbmcgdGhlIFByb2R1Y3QgTWFuYWdlciBJbnRlcnZpZXdcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDE1XCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJTQy0xMjdcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogMjUwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiNTk4NFwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQ3JhY2tpbmcgdGhlIENvZGluZyBJbnRlcnZpZXdcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDE2XCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJWUEEtVGhlYXRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiAzOTUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCI1OTg2XCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTpcclxuICAgICAgICAgICAgICAgICAgICBcIkJlIGEgQmV0dGVyIEludGVydmlld2VyOiBIb3cgdG8gSW50ZXJ2aWV3IExpa2UgR29vZ2xlIChvciBub3QpLUJ1dCBCZXR0ZXIhXCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAxNlwiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiU0MtMTI3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDI1MCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjYyMjdcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkNyYWNraW5nIHRoZSBDb2RpbmcgSW50ZXJ2aWV3XCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAxN1wiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiRmlyZXNpZGUgQlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiA4MCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjYyMjlcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkhpcmluZyBDb2RlcnMgd2l0aCBXaGl0ZWJvYXJkIEludGVydmlld3MgYW5kIE90aGVyIFF1ZXN0aW9uc1wiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTdcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlRvd24gU3F1YXJlIEJcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogMTMwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiNzM2NlwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQ3JhY2tpbmcgdGhlIENvZGluZyBJbnRlcnZpZXdcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDE4XCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJUb3duIFNxdWFyZSBBXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDEzMCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjczNjdcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkludGVydmlldyBMaWtlIEdvb2dsZSAob3Igbm90KS1CdXQgQmV0dGVyIVwiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMThcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlRvd24gU3F1YXJlIEFcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogMTMwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiNzM2OFwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQ3JhY2tpbmcgdGhlIFByb2R1Y3QgTWFuYWdlciBJbnRlcnZpZXdcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDE4XCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJUb3duIFNxdWFyZSBCXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDEzMCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwiNjIwXCIsXHJcbiAgICAgICAgZmlyc3Q6IFwiUm9uXCIsXHJcbiAgICAgICAgbGFzdDogXCJLbGVpbm1hblwiLFxyXG4gICAgICAgIGNvbXBhbnk6IFwiRGUgQW56YSBDb2xsZWdlXCIsXHJcbiAgICAgICAgYmlvOiBcIlJvbiB0ZWFjaGVzIE9iamVjdCBPcmllbnRlZCBBbmFseXNpcyBhbmQgRGVzaWduIGF0IERlIEFuemEgQ29sbGVnZSBcIixcclxuICAgICAgICB0d2l0dGVySGFuZGxlOiBcIm5vdHdlZXRzXCIsXHJcbiAgICAgICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gICAgICAgIHNlc3Npb25zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjg2XCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTpcclxuICAgICAgICAgICAgICAgICAgICBcIlRoZSBQZXJmb3JtYW5jZSBMaW1pdGF0aW9ucyAgb2YgdGhlIEphdmEgUGxhdGZvcm0gLi4uIGFuZCBob3cgdG8gYXZvaWQgdGhlbVwiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMDhcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkNvcm5lbGwgSGFsbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiAwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiNjA4OVwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiU28geW91ciBtb20gYWx3YXlzIHdhbnRlZCB5b3UgdG8gYmUgYW4gYXJjaGl0ZWN0XCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAxNlwiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiQzIwOVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiA1NSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjc0NDBcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkhvdyB0byBUaGluayBsaWtlIGEgU29mdHdhcmUgQXJjaGl0ZWN0XCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAxOFwiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiRmlyZXNpZGUgQVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiA4MCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjc1NTFcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnSG93IHRvIFwidGhpbmtcIiAoYW5kIGRlc2lnbikgbGlrZSBhIFNvZnR3YXJlIEFyY2hpdGVjdCcsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAxOVwiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiVG93biBTcXVhcmUgQlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiAxMzAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICB9LFxyXG5dOyIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBTcGVha2VyRmlsdGVyQ29udGV4dCB9IGZyb20gXCIuLi9jb250ZXh0cy9TcGVha2VyRmlsdGVyQ29udGV4dFwiO1xyXG5cclxuZnVuY3Rpb24gU2Vzc2lvbih7IHRpdGxlLCByb29tIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2Vzc2lvbiB3LTEwMFwiPlxyXG4gICAgICAgICAgICB7dGl0bGV9IDxzdHJvbmc+Um9vbToge3Jvb20ubmFtZX08L3N0cm9uZz5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBTZXNzaW9ucyh7IHNlc3Npb25zIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXNzaW9uQm94IGNhcmQgaC0yNTBcIj5cclxuICAgICAgICAgICAgPFNlc3Npb24gey4uLnNlc3Npb25zWzBdfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZnVuY3Rpb24gU3BlYWtlckltYWdlKHsgaWQsIGZpcnN0LCBsYXN0IH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGVha2VyLWltZyBkLWZsZXggZmxleC1yb3cganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgaC0zMDBcIj5cclxuICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGFpbi1maXRcIlxyXG4gICAgICAgICAgICAgICAgc3JjPXtgL2ltYWdlcy9zcGVha2VyLSR7aWR9LmpwZ2B9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjMwMFwiXHJcbiAgICAgICAgICAgICAgICBhbHQ9e2Ake2ZpcnN0fSAke2xhc3R9YH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNwZWFrZXJGYXZvcml0ZSh7IGZhdm9yaXRlLCBvbkZhdm9yaXRlVG9nZ2xlIH0pIHtcclxuICAgIGNvbnN0IFtpblRyYW5zaXRpb24sIHNldEluVHJhbnNpdGlvbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBmdW5jdGlvbiBkb25lQ2FsbGJhY2soKSB7XHJcbiAgICAgICAgc2V0SW5UcmFuc2l0aW9uKGZhbHNlKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICAgYEluIFNwZWFrZXJGYXZvcml0ZTpkb25lQ2FsbGJhY2sgICAgJHtuZXcgRGF0ZSgpLmdldE1pbGxpc2Vjb25kcygpfWBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhY3Rpb24gcGFkQjFcIj5cclxuICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Z1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRJblRyYW5zaXRpb24odHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG9uRmF2b3JpdGVUb2dnbGUoZG9uZUNhbGxiYWNrKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxpXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmF2b3JpdGUgPT09IHRydWUgPyBcImZhIGZhLXN0YXIgb3JhbmdlXCIgOiBcImZhIGZhLXN0YXItbyBvcmFuZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgRmF2b3JpdGV7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICB7aW5UcmFuc2l0aW9uID8gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhcyBmYS1jaXJjbGUtbm90Y2ggZmEtc3BpblwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBTcGVha2VyRGVtb2dyYXBoaWNzKHtcclxuICAgIGZpcnN0LFxyXG4gICAgbGFzdCxcclxuICAgIGJpbyxcclxuICAgIGNvbXBhbnksXHJcbiAgICB0d2l0dGVySGFuZGxlLFxyXG4gICAgZmF2b3JpdGUsXHJcbiAgICBvbkZhdm9yaXRlVG9nZ2xlLFxyXG59KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BlYWtlci1pbmZvXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXRydW5jYXRlIHctMjAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge2ZpcnN0fSB7bGFzdH1cclxuICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8U3BlYWtlckZhdm9yaXRlXHJcbiAgICAgICAgICAgICAgICBmYXZvcml0ZT17ZmF2b3JpdGV9XHJcbiAgICAgICAgICAgICAgICBvbkZhdm9yaXRlVG9nZ2xlPXtvbkZhdm9yaXRlVG9nZ2xlfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiY2FyZC1kZXNjcmlwdGlvblwiPntiaW99PC9wPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzb2NpYWwgZC1mbGV4IGZsZXgtcm93IG10LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbXBhbnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkNvbXBhbnk8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDY+e2NvbXBhbnl9PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR3aXR0ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1PlR3aXR0ZXI8L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDY+e3R3aXR0ZXJIYW5kbGV9PC9oNj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNwZWFrZXIoeyBzcGVha2VyLCBvbkZhdm9yaXRlVG9nZ2xlIH0pIHtcclxuICAgIGNvbnN0IHsgaWQsIGZpcnN0LCBsYXN0LCBzZXNzaW9ucyB9ID0gc3BlYWtlcjtcclxuICAgIGNvbnN0IHsgc2hvd1Nlc3Npb25zIH0gPSB1c2VDb250ZXh0KFNwZWFrZXJGaWx0ZXJDb250ZXh0KTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteHMtMTIgY29sLXNtLTEyIGNvbC1tZC02IGNvbC1sZy00IGNvbC1zbS0xMiBjb2wteHMtMTJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhcmQtaGVpZ2h0IHAtNCBtdC00XCI+XHJcbiAgICAgICAgICAgICAgICA8U3BlYWtlckltYWdlIGlkPXtpZH0gZmlyc3Q9e2ZpcnN0fSBsYXN0PXtsYXN0fSAvPlxyXG4gICAgICAgICAgICAgICAgPFNwZWFrZXJEZW1vZ3JhcGhpY3Mgey4uLnNwZWFrZXJ9IG9uRmF2b3JpdGVUb2dnbGU9e29uRmF2b3JpdGVUb2dnbGV9IC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB7c2hvd1Nlc3Npb25zID09PSB0cnVlID8gPFNlc3Npb25zIHNlc3Npb25zPXtzZXNzaW9uc30gLz4gOiBudWxsfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcjsiLCJpbXBvcnQgU3BlYWtlciBmcm9tIFwiLi9TcGVha2VyXCI7XHJcbmltcG9ydCBSZWFjdFBsYWNlSG9sZGVyIGZyb20gXCJyZWFjdC1wbGFjZWhvbGRlclwiO1xyXG5pbXBvcnQgdXNlUmVxdWVzdERlbGF5LCB7IFJFUVVFU1RfU1RBVFVTIH0gZnJvbSBcIi4uL2hvb2tzL3VzZVJlcXVlc3REZWxheVwiO1xyXG5pbXBvcnQgeyBkYXRhIH0gZnJvbSBcIi4uLy4uL1NwZWFrZXJEYXRhXCI7XHJcblxyXG5mdW5jdGlvbiBTcGVha2Vyc0xpc3QoeyBzaG93U2Vzc2lvbnMgfSkge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIGRhdGE6IHNwZWFrZXJzRGF0YSxcclxuICAgICAgICByZXF1ZXN0U3RhdHVzLFxyXG4gICAgICAgIGVycm9yLFxyXG4gICAgICAgIHVwZGF0ZVJlY29yZCxcclxuICAgIH0gPSB1c2VSZXF1ZXN0RGVsYXkoMjAwMCwgZGF0YSk7XHJcblxyXG4gICAgaWYgKHJlcXVlc3RTdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLkZBSUxVUkUpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+XHJcbiAgICAgICAgICAgICAgICBFUlJPUjogPGI+bG9hZGluZyBTcGVha2VyIERhdGEgRmFpbGVkIHtlcnJvcn08L2I+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9pZiAoaXNMb2FkaW5nID09PSB0cnVlKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBzcGVha2Vycy1saXN0XCI+XHJcbiAgICAgICAgICAgIDxSZWFjdFBsYWNlSG9sZGVyXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwibWVkaWFcIlxyXG4gICAgICAgICAgICAgICAgcm93cz17MTV9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzcGVha2Vyc2xpc3QtcGxhY2Vob2xkZXJcIlxyXG4gICAgICAgICAgICAgICAgcmVhZHk9e3JlcXVlc3RTdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLlNVQ0NFU1N9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3NwZWFrZXJzRGF0YS5tYXAoZnVuY3Rpb24gKHNwZWFrZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGVha2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtzcGVha2VyLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWFrZXI9e3NwZWFrZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1Nlc3Npb25zPXtzaG93U2Vzc2lvbnN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25GYXZvcml0ZVRvZ2dsZT17KGRvbmVDYWxsYmFjaykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVSZWNvcmQoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3BlYWtlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYXZvcml0ZTogIXNwZWFrZXIuZmF2b3JpdGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9uZUNhbGxiYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9SZWFjdFBsYWNlSG9sZGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcnNMaXN0OyIsImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBSRVFVRVNUX1NUQVRVUyA9IHtcclxuICAgIExPQURJTkc6IFwibG9hZGluZ1wiLFxyXG4gICAgU1VDQ0VTUzogXCJzdWNjZXNzXCIsXHJcbiAgICBGQUlMVVJFOiBcImZhaWx1cmVcIixcclxufTtcclxuXHJcbmZ1bmN0aW9uIHVzZVJlcXVlc3REZWxheShkZWxheVRpbWUgPSAxMDAwLCBpbml0aWFsRGF0YSA9IFtdKSB7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbcmVxdWVzdFN0YXR1cywgc2V0UmVxdWVzdFN0YXR1c10gPSB1c2VTdGF0ZShSRVFVRVNUX1NUQVRVUy5MT0FESU5HKTtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gICAgY29uc3QgZGVsYXkgPSAobXMpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBkZWxheUZ1bmMoKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBkZWxheShkZWxheVRpbWUpO1xyXG4gICAgICAgICAgICAgICAgLy90aHJvdyBcIkhhZCBFcnJvci5cIlxyXG4gICAgICAgICAgICAgICAgc2V0UmVxdWVzdFN0YXR1cyhSRVFVRVNUX1NUQVRVUy5TVUNDRVNTKTtcclxuICAgICAgICAgICAgICAgIHNldERhdGEoaW5pdGlhbERhdGEpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRSZXF1ZXN0U3RhdHVzKFJFUVVFU1RfU1RBVFVTLkZBSUxVUkUpO1xyXG4gICAgICAgICAgICAgICAgc2V0RXJyb3IoZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZGVsYXlGdW5jKCk7XHJcbiAgICB9LCBbXSk7XHJcblxyXG4gICAgZnVuY3Rpb24gdXBkYXRlUmVjb3JkKHJlY29yZFVwZGF0ZWQsIGRvbmVDYWxsYmFjaykge1xyXG5cclxuICAgICAgICBjb25zdCBvcmlnaW5hbFJlY29yZHMgPSBbLi4uZGF0YV07XHJcblxyXG4gICAgICAgIGNvbnN0IG5ld1JlY29yZHMgPSBkYXRhLm1hcChmdW5jdGlvbiAocmVjKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZWMuaWQgPT09IHJlY29yZFVwZGF0ZWQuaWQgPyByZWNvcmRVcGRhdGVkIDogcmVjO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBhc3luYyBmdW5jdGlvbiBkZWxheUZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgc2V0RGF0YShuZXdSZWNvcmRzKTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IGRlbGF5KGRlbGF5VGltZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZG9uZUNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9uZUNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvciB0aHJvd24gaW5zaWRlIGRlbGF5RnVuY3Rpb25cIiwgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRvbmVDYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbmVDYWxsYmFjaygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgc2V0RGF0YShvcmlnaW5hbFJlY29yZHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlbGF5RnVuY3Rpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGRhdGEsXHJcbiAgICAgICAgcmVxdWVzdFN0YXR1cyxcclxuICAgICAgICBlcnJvcixcclxuICAgICAgICB1cGRhdGVSZWNvcmQsXHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1c2VSZXF1ZXN0RGVsYXk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xudmFyIF9fcmVzdCA9ICh0aGlzICYmIHRoaXMuX19yZXN0KSB8fCBmdW5jdGlvbiAocywgZSkge1xuICAgIHZhciB0ID0ge307XG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXG4gICAgICAgIHRbcF0gPSBzW3BdO1xuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDAgJiYgT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKHMsIHBbaV0pKVxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xuICAgICAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbnZhciBwbGFjZWhvbGRlcnMgPSByZXF1aXJlKFwiLi9wbGFjZWhvbGRlcnNcIik7XG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xudmFyIFJlYWN0UGxhY2Vob2xkZXIgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgX2IgPSBfYS5kZWxheSwgZGVsYXkgPSBfYiA9PT0gdm9pZCAwID8gMCA6IF9iLCBfYyA9IF9hLnR5cGUsIHR5cGUgPSBfYyA9PT0gdm9pZCAwID8gJ3RleHQnIDogX2MsIF9kID0gX2EuY29sb3IsIGNvbG9yID0gX2QgPT09IHZvaWQgMCA/ICcjQ0RDRENEJyA6IF9kLCBfZSA9IF9hLnJvd3MsIHJvd3MgPSBfZSA9PT0gdm9pZCAwID8gMyA6IF9lLCByZWFkeVByb3AgPSBfYS5yZWFkeSwgZmlyc3RMYXVuY2hPbmx5ID0gX2EuZmlyc3RMYXVuY2hPbmx5LCBjaGlsZHJlbiA9IF9hLmNoaWxkcmVuLCBjbGFzc05hbWUgPSBfYS5jbGFzc05hbWUsIHNob3dMb2FkaW5nQW5pbWF0aW9uID0gX2Euc2hvd0xvYWRpbmdBbmltYXRpb24sIGN1c3RvbVBsYWNlaG9sZGVyID0gX2EuY3VzdG9tUGxhY2Vob2xkZXIsIHJlc3QgPSBfX3Jlc3QoX2EsIFtcImRlbGF5XCIsIFwidHlwZVwiLCBcImNvbG9yXCIsIFwicm93c1wiLCBcInJlYWR5XCIsIFwiZmlyc3RMYXVuY2hPbmx5XCIsIFwiY2hpbGRyZW5cIiwgXCJjbGFzc05hbWVcIiwgXCJzaG93TG9hZGluZ0FuaW1hdGlvblwiLCBcImN1c3RvbVBsYWNlaG9sZGVyXCJdKTtcbiAgICB2YXIgX2YgPSBSZWFjdC51c2VTdGF0ZShyZWFkeVByb3ApLCByZWFkeSA9IF9mWzBdLCBzZXRSZWFkeSA9IF9mWzFdO1xuICAgIHZhciB0aW1lb3V0ID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICAgIHZhciBnZXRGaWxsZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjbGFzc2VzID0gc2hvd0xvYWRpbmdBbmltYXRpb25cbiAgICAgICAgICAgID8gdXRpbHNfMS5qb2luQ2xhc3NOYW1lcygnc2hvdy1sb2FkaW5nLWFuaW1hdGlvbicsIGNsYXNzTmFtZSlcbiAgICAgICAgICAgIDogY2xhc3NOYW1lO1xuICAgICAgICBpZiAoY3VzdG9tUGxhY2Vob2xkZXIgJiYgUmVhY3QuaXNWYWxpZEVsZW1lbnQoY3VzdG9tUGxhY2Vob2xkZXIpKSB7XG4gICAgICAgICAgICB2YXIgbWVyZ2VkQ3VzdG9tQ2xhc3NlcyA9IHV0aWxzXzEuam9pbkNsYXNzTmFtZXMoY3VzdG9tUGxhY2Vob2xkZXIucHJvcHMuY2xhc3NOYW1lLCBjbGFzc2VzKTtcbiAgICAgICAgICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY3VzdG9tUGxhY2Vob2xkZXIsIHtcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU6IG1lcmdlZEN1c3RvbUNsYXNzZXNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGN1c3RvbVBsYWNlaG9sZGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gY3VzdG9tUGxhY2Vob2xkZXI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIFBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXJzW3R5cGVdO1xuICAgICAgICByZXR1cm4gKFJlYWN0LmNyZWF0ZUVsZW1lbnQoUGxhY2Vob2xkZXIsIF9fYXNzaWduKHt9LCByZXN0LCB7IGNvbG9yOiBjb2xvciwgcm93czogcm93cywgY2xhc3NOYW1lOiBjbGFzc2VzIH0pKSk7XG4gICAgfTtcbiAgICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoIWZpcnN0TGF1bmNoT25seSAmJiByZWFkeSAmJiAhcmVhZHlQcm9wKSB7XG4gICAgICAgICAgICBpZiAoZGVsYXkgJiYgZGVsYXkgPiAwKSB7XG4gICAgICAgICAgICAgICAgdGltZW91dC5jdXJyZW50ID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRSZWFkeShmYWxzZSk7XG4gICAgICAgICAgICAgICAgfSwgZGVsYXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2V0UmVhZHkoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHJlYWR5UHJvcCkge1xuICAgICAgICAgICAgaWYgKHRpbWVvdXQuY3VycmVudCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGltZW91dC5jdXJyZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcmVhZHkpIHtcbiAgICAgICAgICAgICAgICBzZXRSZWFkeSh0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIFtmaXJzdExhdW5jaE9ubHksIHJlYWR5LCByZWFkeVByb3AsIGRlbGF5XSk7XG4gICAgLy8gY2xlYXIgdGhlIHRpbWVvdXQgd2hlbiB0aGUgY29tcG9uZW50IHVubW91bnRzXG4gICAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHRpbWVvdXQuY3VycmVudCkge1xuICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aW1lb3V0LmN1cnJlbnQpO1xuICAgICAgICB9XG4gICAgfTsgfSwgW10pO1xuICAgIC8vIENhc3RpbmcgLSB3b3JrYXJvdW5kIGZvciBEZWZpbml0ZWx5VHlwZWQvcmVhY3QgaXNzdWUgd2l0aFxuICAgIC8vIEZ1bmN0aW9uQ29tcG9uZW50cyByZXR1cm5pbmcgUmVhY3RFbGVtZW50LCB3aGVyZSB0aGV5IHNob3VsZCBiZSBhYmxlIHRvXG4gICAgLy8gcmV0dXJuIFJlYWN0Tm9kZS4gQ2FzdGluZyBhbHNvIGRvZXNuJ3QgaW50cm9kdWNlIGFub3RoZXIgbGF5ZXIgaW4gdGhlXG4gICAgLy8gY29tcG9uZW50IHRyZWUgbGlrZSBhbm90aGVyIGA8PmNoaWxkcmVuPC8+YCB3b3JrYXJvdW5kIGRvZXMuXG4gICAgLy9cbiAgICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL0RlZmluaXRlbHlUeXBlZC9EZWZpbml0ZWx5VHlwZWQvaXNzdWVzLzMzMDA2XG4gICAgLy8gYW5kIGh0dHBzOi8vZ2l0aHViLmNvbS9EZWZpbml0ZWx5VHlwZWQvRGVmaW5pdGVseVR5cGVkL2lzc3Vlcy8xODA1MVxuICAgIHJldHVybiByZWFkeSA/IGNoaWxkcmVuIDogZ2V0RmlsbGVyKCk7XG59O1xuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBSZWFjdFBsYWNlaG9sZGVyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIFJlYWN0UGxhY2Vob2xkZXJfMSA9IHJlcXVpcmUoXCIuL1JlYWN0UGxhY2Vob2xkZXJcIik7XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFJlYWN0UGxhY2Vob2xkZXJfMVtcImRlZmF1bHRcIl07XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IGZ1bmN0aW9uICgpIHtcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIHMgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICAgICAgdFtwXSA9IHNbcF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHQ7XG4gICAgfTtcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn07XG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIFJlYWN0ID0gcmVxdWlyZShcInJlYWN0XCIpO1xudmFyIFRleHRCbG9ja18xID0gcmVxdWlyZShcIi4vVGV4dEJsb2NrXCIpO1xudmFyIFJvdW5kU2hhcGVfMSA9IHJlcXVpcmUoXCIuL1JvdW5kU2hhcGVcIik7XG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbnZhciBkZWZhdWx0U3R5bGVzID0ge1xuICAgIGRpc3BsYXk6ICdmbGV4J1xufTtcbnZhciBNZWRpYUJsb2NrID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIGNsYXNzTmFtZSA9IF9hLmNsYXNzTmFtZSwgc3R5bGUgPSBfYS5zdHlsZSwgY29sb3IgPSBfYS5jb2xvciwgcm93cyA9IF9hLnJvd3M7XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiB1dGlsc18xLmpvaW5DbGFzc05hbWVzKCdtZWRpYS1ibG9jaycsIGNsYXNzTmFtZSksIHN0eWxlOiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZGVmYXVsdFN0eWxlcyksIHN0eWxlKSB9LFxuICAgICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFJvdW5kU2hhcGVfMVtcImRlZmF1bHRcIl0sIHsgY29sb3I6IGNvbG9yLCBzdHlsZTogeyBtaW5IZWlnaHQ6IDU1LCB3aWR0aDogNTUsIG1pbldpZHRoOiA1NSwgbWFyZ2luUmlnaHQ6IDEwIH0gfSksXG4gICAgICAgIFJlYWN0LmNyZWF0ZUVsZW1lbnQoVGV4dEJsb2NrXzFbXCJkZWZhdWx0XCJdLCB7IGNvbG9yOiBjb2xvciwgcm93czogcm93cyB9KSkpO1xufTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gTWVkaWFCbG9jaztcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbnZhciBSZWN0U2hhcGUgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgY2xhc3NOYW1lID0gX2EuY2xhc3NOYW1lLCBzdHlsZSA9IF9hLnN0eWxlLCBjb2xvciA9IF9hLmNvbG9yO1xuICAgIHZhciBkZWZhdWx0U3R5bGUgPSB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3IsXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgICBtYXJnaW5SaWdodDogMTBcbiAgICB9O1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogdXRpbHNfMS5qb2luQ2xhc3NOYW1lcygncmVjdC1zaGFwZScsIGNsYXNzTmFtZSksIHN0eWxlOiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgZGVmYXVsdFN0eWxlKSwgc3R5bGUpIH0pKTtcbn07XG5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IFJlY3RTaGFwZTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbnZhciBSb3VuZFNoYXBlID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIGNsYXNzTmFtZSA9IF9hLmNsYXNzTmFtZSwgc3R5bGUgPSBfYS5zdHlsZSwgY29sb3IgPSBfYS5jb2xvcjtcbiAgICB2YXIgZGVmYXVsdFN0eWxlcyA9IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBjb2xvcixcbiAgICAgICAgYm9yZGVyUmFkaXVzOiAnNTAwcmVtJyxcbiAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgaGVpZ2h0OiAnMTAwJSdcbiAgICB9O1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogdXRpbHNfMS5qb2luQ2xhc3NOYW1lcygncm91bmQtc2hhcGUnLCBjbGFzc05hbWUpLCBzdHlsZTogX19hc3NpZ24oX19hc3NpZ24oe30sIGRlZmF1bHRTdHlsZXMpLCBzdHlsZSkgfSkpO1xufTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gUm91bmRTaGFwZTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgUmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgVGV4dFJvd18xID0gcmVxdWlyZShcIi4vVGV4dFJvd1wiKTtcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xudmFyIGRlZmF1bHRTdHlsZXMgPSB7XG4gICAgd2lkdGg6ICcxMDAlJ1xufTtcbnZhciBkZWZhdWx0V2lkdGhzID0gWzk3LCAxMDAsIDk0LCA5MCwgOTgsIDk1LCA5OCwgNDBdO1xudmFyIFRleHRCbG9jayA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciByb3dzID0gX2Eucm93cywgbGluZVNwYWNpbmcgPSBfYS5saW5lU3BhY2luZywgY29sb3IgPSBfYS5jb2xvciwgc3R5bGUgPSBfYS5zdHlsZSwgY2xhc3NOYW1lID0gX2EuY2xhc3NOYW1lLCBfYiA9IF9hLndpZHRocywgd2lkdGhzID0gX2IgPT09IHZvaWQgMCA/IGRlZmF1bHRXaWR0aHMgOiBfYjtcbiAgICB2YXIgZ2V0Um93U3R5bGUgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWF4SGVpZ2h0OiAxMDAgLyAocm93cyAqIDIgLSAxKSArIFwiJVwiLFxuICAgICAgICAgICAgd2lkdGg6IHdpZHRoc1soaSArIHdpZHRocy5sZW5ndGgpICUgd2lkdGhzLmxlbmd0aF0gKyBcIiVcIlxuICAgICAgICB9O1xuICAgIH07XG4gICAgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHsgY2xhc3NOYW1lOiB1dGlsc18xLmpvaW5DbGFzc05hbWVzKCd0ZXh0LWJsb2NrJywgY2xhc3NOYW1lKSwgc3R5bGU6IF9fYXNzaWduKF9fYXNzaWduKHt9LCBkZWZhdWx0U3R5bGVzKSwgc3R5bGUpIH0sIEFycmF5LmFwcGx5KG51bGwsIEFycmF5KHJvd3MpKS5tYXAoZnVuY3Rpb24gKF8sIGkpIHsgcmV0dXJuIChSZWFjdC5jcmVhdGVFbGVtZW50KFRleHRSb3dfMVtcImRlZmF1bHRcIl0sIHsgY29sb3I6IGNvbG9yLCBzdHlsZTogZ2V0Um93U3R5bGUoaSksIGxpbmVTcGFjaW5nOiBpICE9PSAwID8gbGluZVNwYWNpbmcgOiAwLCBrZXk6IGkgfSkpOyB9KSkpO1xufTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gVGV4dEJsb2NrO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBSZWFjdCA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xudmFyIFRleHRSb3cgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICB2YXIgY2xhc3NOYW1lID0gX2EuY2xhc3NOYW1lLCBtYXhIZWlnaHQgPSBfYS5tYXhIZWlnaHQsIGNvbG9yID0gX2EuY29sb3IsIF9iID0gX2EubGluZVNwYWNpbmcsIGxpbmVTcGFjaW5nID0gX2IgPT09IHZvaWQgMCA/ICcwLjdlbScgOiBfYiwgc3R5bGUgPSBfYS5zdHlsZTtcbiAgICB2YXIgZGVmYXVsdFN0eWxlcyA9IHtcbiAgICAgICAgbWF4SGVpZ2h0OiBtYXhIZWlnaHQsXG4gICAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICAgIGhlaWdodDogJzFlbScsXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3IsXG4gICAgICAgIG1hcmdpblRvcDogbGluZVNwYWNpbmdcbiAgICB9O1xuICAgIHJldHVybiAoUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7IGNsYXNzTmFtZTogdXRpbHNfMS5qb2luQ2xhc3NOYW1lcygndGV4dC1yb3cnLCBjbGFzc05hbWUpLCBzdHlsZTogX19hc3NpZ24oX19hc3NpZ24oe30sIGRlZmF1bHRTdHlsZXMpLCBzdHlsZSkgfSkpO1xufTtcbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gVGV4dFJvdztcbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMubWVkaWEgPSBleHBvcnRzLnRleHQgPSBleHBvcnRzLnJlY3QgPSBleHBvcnRzLnJvdW5kID0gZXhwb3J0cy50ZXh0Um93ID0gZXhwb3J0cy5NZWRpYUJsb2NrID0gZXhwb3J0cy5UZXh0QmxvY2sgPSBleHBvcnRzLlJlY3RTaGFwZSA9IGV4cG9ydHMuUm91bmRTaGFwZSA9IGV4cG9ydHMuVGV4dFJvdyA9IHZvaWQgMDtcbnZhciBUZXh0Um93XzEgPSByZXF1aXJlKFwiLi9UZXh0Um93XCIpO1xuZXhwb3J0cy5UZXh0Um93ID0gVGV4dFJvd18xW1wiZGVmYXVsdFwiXTtcbnZhciBSb3VuZFNoYXBlXzEgPSByZXF1aXJlKFwiLi9Sb3VuZFNoYXBlXCIpO1xuZXhwb3J0cy5Sb3VuZFNoYXBlID0gUm91bmRTaGFwZV8xW1wiZGVmYXVsdFwiXTtcbnZhciBSZWN0U2hhcGVfMSA9IHJlcXVpcmUoXCIuL1JlY3RTaGFwZVwiKTtcbmV4cG9ydHMuUmVjdFNoYXBlID0gUmVjdFNoYXBlXzFbXCJkZWZhdWx0XCJdO1xudmFyIFRleHRCbG9ja18xID0gcmVxdWlyZShcIi4vVGV4dEJsb2NrXCIpO1xuZXhwb3J0cy5UZXh0QmxvY2sgPSBUZXh0QmxvY2tfMVtcImRlZmF1bHRcIl07XG52YXIgTWVkaWFCbG9ja18xID0gcmVxdWlyZShcIi4vTWVkaWFCbG9ja1wiKTtcbmV4cG9ydHMuTWVkaWFCbG9jayA9IE1lZGlhQmxvY2tfMVtcImRlZmF1bHRcIl07XG5leHBvcnRzLnRleHRSb3cgPSBUZXh0Um93XzFbXCJkZWZhdWx0XCJdO1xuZXhwb3J0cy5yb3VuZCA9IFJvdW5kU2hhcGVfMVtcImRlZmF1bHRcIl07XG5leHBvcnRzLnJlY3QgPSBSZWN0U2hhcGVfMVtcImRlZmF1bHRcIl07XG5leHBvcnRzLnRleHQgPSBUZXh0QmxvY2tfMVtcImRlZmF1bHRcIl07XG5leHBvcnRzLm1lZGlhID0gTWVkaWFCbG9ja18xW1wiZGVmYXVsdFwiXTtcbiIsIlwidXNlIHN0cmljdFwiO1xuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuam9pbkNsYXNzTmFtZXMgPSB2b2lkIDA7XG5leHBvcnRzLmpvaW5DbGFzc05hbWVzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBjbGFzc05hbWVzID0gW107XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgY2xhc3NOYW1lc1tfaV0gPSBhcmd1bWVudHNbX2ldO1xuICAgIH1cbiAgICByZXR1cm4gY2xhc3NOYW1lcy5maWx0ZXIoZnVuY3Rpb24gKGMpIHsgcmV0dXJuIGM7IH0pLmpvaW4oJyAnKTtcbn07XG4iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNC1wcmVzZW50LCBGYWNlYm9vaywgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbnZhciBydW50aW1lID0gKGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBPcCA9IE9iamVjdC5wcm90b3R5cGU7XG4gIHZhciBoYXNPd24gPSBPcC5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciBhc3luY0l0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5hc3luY0l0ZXJhdG9yIHx8IFwiQEBhc3luY0l0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgZnVuY3Rpb24gZGVmaW5lKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgcmV0dXJuIG9ialtrZXldO1xuICB9XG4gIHRyeSB7XG4gICAgLy8gSUUgOCBoYXMgYSBicm9rZW4gT2JqZWN0LmRlZmluZVByb3BlcnR5IHRoYXQgb25seSB3b3JrcyBvbiBET00gb2JqZWN0cy5cbiAgICBkZWZpbmUoe30sIFwiXCIpO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBkZWZpbmUgPSBmdW5jdGlvbihvYmosIGtleSwgdmFsdWUpIHtcbiAgICAgIHJldHVybiBvYmpba2V5XSA9IHZhbHVlO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCBhbmQgb3V0ZXJGbi5wcm90b3R5cGUgaXMgYSBHZW5lcmF0b3IsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIHByb3RvR2VuZXJhdG9yID0gb3V0ZXJGbiAmJiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvciA/IG91dGVyRm4gOiBHZW5lcmF0b3I7XG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUocHJvdG9HZW5lcmF0b3IucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBleHBvcnRzLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICAvLyBUaGlzIGlzIGEgcG9seWZpbGwgZm9yICVJdGVyYXRvclByb3RvdHlwZSUgZm9yIGVudmlyb25tZW50cyB0aGF0XG4gIC8vIGRvbid0IG5hdGl2ZWx5IHN1cHBvcnQgaXQuXG4gIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuICBJdGVyYXRvclByb3RvdHlwZVtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgdmFyIGdldFByb3RvID0gT2JqZWN0LmdldFByb3RvdHlwZU9mO1xuICB2YXIgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90byAmJiBnZXRQcm90byhnZXRQcm90byh2YWx1ZXMoW10pKSk7XG4gIGlmIChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAmJlxuICAgICAgTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUgIT09IE9wICYmXG4gICAgICBoYXNPd24uY2FsbChOYXRpdmVJdGVyYXRvclByb3RvdHlwZSwgaXRlcmF0b3JTeW1ib2wpKSB7XG4gICAgLy8gVGhpcyBlbnZpcm9ubWVudCBoYXMgYSBuYXRpdmUgJUl0ZXJhdG9yUHJvdG90eXBlJTsgdXNlIGl0IGluc3RlYWRcbiAgICAvLyBvZiB0aGUgcG9seWZpbGwuXG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBOYXRpdmVJdGVyYXRvclByb3RvdHlwZTtcbiAgfVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9XG4gICAgR2VuZXJhdG9yLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUpO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IGRlZmluZShcbiAgICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSxcbiAgICB0b1N0cmluZ1RhZ1N5bWJvbCxcbiAgICBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgKTtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBkZWZpbmUocHJvdG90eXBlLCBtZXRob2QsIGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgZXhwb3J0cy5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgZXhwb3J0cy5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBkZWZpbmUoZ2VuRnVuLCB0b1N0cmluZ1RhZ1N5bWJvbCwgXCJHZW5lcmF0b3JGdW5jdGlvblwiKTtcbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpYCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC5cbiAgZXhwb3J0cy5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiB7IF9fYXdhaXQ6IGFyZyB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yLCBQcm9taXNlSW1wbCkge1xuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goZ2VuZXJhdG9yW21ldGhvZF0sIGdlbmVyYXRvciwgYXJnKTtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHJlamVjdChyZWNvcmQuYXJnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXN1bHQgPSByZWNvcmQuYXJnO1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIGlmICh2YWx1ZSAmJlxuICAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbCh2YWx1ZSwgXCJfX2F3YWl0XCIpKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUuX19hd2FpdCkudGhlbihmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgICAgaW52b2tlKFwibmV4dFwiLCB2YWx1ZSwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9LCBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIGludm9rZShcInRocm93XCIsIGVyciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBQcm9taXNlSW1wbC5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uXG4gICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgICAvLyBJZiBhIHJlamVjdGVkIFByb21pc2Ugd2FzIHlpZWxkZWQsIHRocm93IHRoZSByZWplY3Rpb24gYmFja1xuICAgICAgICAgIC8vIGludG8gdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgaGFuZGxlZCB0aGVyZS5cbiAgICAgICAgICByZXR1cm4gaW52b2tlKFwidGhyb3dcIiwgZXJyb3IsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlSW1wbChmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpbnZva2UobWV0aG9kLCBhcmcsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG4gIEFzeW5jSXRlcmF0b3IucHJvdG90eXBlW2FzeW5jSXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuICBleHBvcnRzLkFzeW5jSXRlcmF0b3IgPSBBc3luY0l0ZXJhdG9yO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBleHBvcnRzLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QsIFByb21pc2VJbXBsKSB7XG4gICAgaWYgKFByb21pc2VJbXBsID09PSB2b2lkIDApIFByb21pc2VJbXBsID0gUHJvbWlzZTtcblxuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSxcbiAgICAgIFByb21pc2VJbXBsXG4gICAgKTtcblxuICAgIHJldHVybiBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IG1ldGhvZDtcbiAgICAgIGNvbnRleHQuYXJnID0gYXJnO1xuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICB2YXIgZGVsZWdhdGVSZXN1bHQgPSBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcbiAgICAgICAgICBpZiAoZGVsZWdhdGVSZXN1bHQpIHtcbiAgICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCA9PT0gQ29udGludWVTZW50aW5lbCkgY29udGludWU7XG4gICAgICAgICAgICByZXR1cm4gZGVsZWdhdGVSZXN1bHQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGNvbnRleHQuYXJnO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGNvbnRleHQuYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oY29udGV4dC5hcmcpO1xuXG4gICAgICAgIH0gZWxzZSBpZiAoY29udGV4dC5tZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBjb250ZXh0LmFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gQ2FsbCBkZWxlZ2F0ZS5pdGVyYXRvcltjb250ZXh0Lm1ldGhvZF0oY29udGV4dC5hcmcpIGFuZCBoYW5kbGUgdGhlXG4gIC8vIHJlc3VsdCwgZWl0aGVyIGJ5IHJldHVybmluZyBhIHsgdmFsdWUsIGRvbmUgfSByZXN1bHQgZnJvbSB0aGVcbiAgLy8gZGVsZWdhdGUgaXRlcmF0b3IsIG9yIGJ5IG1vZGlmeWluZyBjb250ZXh0Lm1ldGhvZCBhbmQgY29udGV4dC5hcmcsXG4gIC8vIHNldHRpbmcgY29udGV4dC5kZWxlZ2F0ZSB0byBudWxsLCBhbmQgcmV0dXJuaW5nIHRoZSBDb250aW51ZVNlbnRpbmVsLlxuICBmdW5jdGlvbiBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KSB7XG4gICAgdmFyIG1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXTtcbiAgICBpZiAobWV0aG9kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIEEgLnRocm93IG9yIC5yZXR1cm4gd2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIC50aHJvd1xuICAgICAgLy8gbWV0aG9kIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAvLyBOb3RlOiBbXCJyZXR1cm5cIl0gbXVzdCBiZSB1c2VkIGZvciBFUzMgcGFyc2luZyBjb21wYXRpYmlsaXR5LlxuICAgICAgICBpZiAoZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl0pIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJyZXR1cm5cIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBtYXliZUludm9rZURlbGVnYXRlKGRlbGVnYXRlLCBjb250ZXh0KTtcblxuICAgICAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAvLyBJZiBtYXliZUludm9rZURlbGVnYXRlKGNvbnRleHQpIGNoYW5nZWQgY29udGV4dC5tZXRob2QgZnJvbVxuICAgICAgICAgICAgLy8gXCJyZXR1cm5cIiB0byBcInRocm93XCIsIGxldCB0aGF0IG92ZXJyaWRlIHRoZSBUeXBlRXJyb3IgYmVsb3cuXG4gICAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgIFwiVGhlIGl0ZXJhdG9yIGRvZXMgbm90IHByb3ZpZGUgYSAndGhyb3cnIG1ldGhvZFwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKG1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGNvbnRleHQuYXJnKTtcblxuICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuXG4gICAgaWYgKCEgaW5mbykge1xuICAgICAgY29udGV4dC5tZXRob2QgPSBcInRocm93XCI7XG4gICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKTtcbiAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuXG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgLy8gQXNzaWduIHRoZSByZXN1bHQgb2YgdGhlIGZpbmlzaGVkIGRlbGVnYXRlIHRvIHRoZSB0ZW1wb3JhcnlcbiAgICAgIC8vIHZhcmlhYmxlIHNwZWNpZmllZCBieSBkZWxlZ2F0ZS5yZXN1bHROYW1lIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcblxuICAgICAgLy8gUmVzdW1lIGV4ZWN1dGlvbiBhdCB0aGUgZGVzaXJlZCBsb2NhdGlvbiAoc2VlIGRlbGVnYXRlWWllbGQpLlxuICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcblxuICAgICAgLy8gSWYgY29udGV4dC5tZXRob2Qgd2FzIFwidGhyb3dcIiBidXQgdGhlIGRlbGVnYXRlIGhhbmRsZWQgdGhlXG4gICAgICAvLyBleGNlcHRpb24sIGxldCB0aGUgb3V0ZXIgZ2VuZXJhdG9yIHByb2NlZWQgbm9ybWFsbHkuIElmXG4gICAgICAvLyBjb250ZXh0Lm1ldGhvZCB3YXMgXCJuZXh0XCIsIGZvcmdldCBjb250ZXh0LmFyZyBzaW5jZSBpdCBoYXMgYmVlblxuICAgICAgLy8gXCJjb25zdW1lZFwiIGJ5IHRoZSBkZWxlZ2F0ZSBpdGVyYXRvci4gSWYgY29udGV4dC5tZXRob2Qgd2FzXG4gICAgICAvLyBcInJldHVyblwiLCBhbGxvdyB0aGUgb3JpZ2luYWwgLnJldHVybiBjYWxsIHRvIGNvbnRpbnVlIGluIHRoZVxuICAgICAgLy8gb3V0ZXIgZ2VuZXJhdG9yLlxuICAgICAgaWYgKGNvbnRleHQubWV0aG9kICE9PSBcInJldHVyblwiKSB7XG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlLXlpZWxkIHRoZSByZXN1bHQgcmV0dXJuZWQgYnkgdGhlIGRlbGVnYXRlIG1ldGhvZC5cbiAgICAgIHJldHVybiBpbmZvO1xuICAgIH1cblxuICAgIC8vIFRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBpcyBmaW5pc2hlZCwgc28gZm9yZ2V0IGl0IGFuZCBjb250aW51ZSB3aXRoXG4gICAgLy8gdGhlIG91dGVyIGdlbmVyYXRvci5cbiAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBkZWZpbmUoR3AsIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvclwiKTtcblxuICAvLyBBIEdlbmVyYXRvciBzaG91bGQgYWx3YXlzIHJldHVybiBpdHNlbGYgYXMgdGhlIGl0ZXJhdG9yIG9iamVjdCB3aGVuIHRoZVxuICAvLyBAQGl0ZXJhdG9yIGZ1bmN0aW9uIGlzIGNhbGxlZCBvbiBpdC4gU29tZSBicm93c2VycycgaW1wbGVtZW50YXRpb25zIG9mIHRoZVxuICAvLyBpdGVyYXRvciBwcm90b3R5cGUgY2hhaW4gaW5jb3JyZWN0bHkgaW1wbGVtZW50IHRoaXMsIGNhdXNpbmcgdGhlIEdlbmVyYXRvclxuICAvLyBvYmplY3QgdG8gbm90IGJlIHJldHVybmVkIGZyb20gdGhpcyBjYWxsLiBUaGlzIGVuc3VyZXMgdGhhdCBkb2Vzbid0IGhhcHBlbi5cbiAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9pc3N1ZXMvMjc0IGZvciBtb3JlIGRldGFpbHMuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBleHBvcnRzLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgZXhwb3J0cy52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIC8vIFJlc2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAvLyBmdW5jdGlvbi5zZW50IGltcGxlbWVudGF0aW9uLlxuICAgICAgdGhpcy5zZW50ID0gdGhpcy5fc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMubWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuXG4gICAgICAgIGlmIChjYXVnaHQpIHtcbiAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBjb250ZXh0LmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhISBjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHRoaXMuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgdGhpcy5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcblxuICAvLyBSZWdhcmRsZXNzIG9mIHdoZXRoZXIgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlXG4gIC8vIG9yIG5vdCwgcmV0dXJuIHRoZSBydW50aW1lIG9iamVjdCBzbyB0aGF0IHdlIGNhbiBkZWNsYXJlIHRoZSB2YXJpYWJsZVxuICAvLyByZWdlbmVyYXRvclJ1bnRpbWUgaW4gdGhlIG91dGVyIHNjb3BlLCB3aGljaCBhbGxvd3MgdGhpcyBtb2R1bGUgdG8gYmVcbiAgLy8gaW5qZWN0ZWQgZWFzaWx5IGJ5IGBiaW4vcmVnZW5lcmF0b3IgLS1pbmNsdWRlLXJ1bnRpbWUgc2NyaXB0LmpzYC5cbiAgcmV0dXJuIGV4cG9ydHM7XG5cbn0oXG4gIC8vIElmIHRoaXMgc2NyaXB0IGlzIGV4ZWN1dGluZyBhcyBhIENvbW1vbkpTIG1vZHVsZSwgdXNlIG1vZHVsZS5leHBvcnRzXG4gIC8vIGFzIHRoZSByZWdlbmVyYXRvclJ1bnRpbWUgbmFtZXNwYWNlLiBPdGhlcndpc2UgY3JlYXRlIGEgbmV3IGVtcHR5XG4gIC8vIG9iamVjdC4gRWl0aGVyIHdheSwgdGhlIHJlc3VsdGluZyBvYmplY3Qgd2lsbCBiZSB1c2VkIHRvIGluaXRpYWxpemVcbiAgLy8gdGhlIHJlZ2VuZXJhdG9yUnVudGltZSB2YXJpYWJsZSBhdCB0aGUgdG9wIG9mIHRoaXMgZmlsZS5cbiAgdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiA/IG1vZHVsZS5leHBvcnRzIDoge31cbikpO1xuXG50cnkge1xuICByZWdlbmVyYXRvclJ1bnRpbWUgPSBydW50aW1lO1xufSBjYXRjaCAoYWNjaWRlbnRhbFN0cmljdE1vZGUpIHtcbiAgLy8gVGhpcyBtb2R1bGUgc2hvdWxkIG5vdCBiZSBydW5uaW5nIGluIHN0cmljdCBtb2RlLCBzbyB0aGUgYWJvdmVcbiAgLy8gYXNzaWdubWVudCBzaG91bGQgYWx3YXlzIHdvcmsgdW5sZXNzIHNvbWV0aGluZyBpcyBtaXNjb25maWd1cmVkLiBKdXN0XG4gIC8vIGluIGNhc2UgcnVudGltZS5qcyBhY2NpZGVudGFsbHkgcnVucyBpbiBzdHJpY3QgbW9kZSwgd2UgY2FuIGVzY2FwZVxuICAvLyBzdHJpY3QgbW9kZSB1c2luZyBhIGdsb2JhbCBGdW5jdGlvbiBjYWxsLiBUaGlzIGNvdWxkIGNvbmNlaXZhYmx5IGZhaWxcbiAgLy8gaWYgYSBDb250ZW50IFNlY3VyaXR5IFBvbGljeSBmb3JiaWRzIHVzaW5nIEZ1bmN0aW9uLCBidXQgaW4gdGhhdCBjYXNlXG4gIC8vIHRoZSBwcm9wZXIgc29sdXRpb24gaXMgdG8gZml4IHRoZSBhY2NpZGVudGFsIHN0cmljdCBtb2RlIHByb2JsZW0uIElmXG4gIC8vIHlvdSd2ZSBtaXNjb25maWd1cmVkIHlvdXIgYnVuZGxlciB0byBmb3JjZSBzdHJpY3QgbW9kZSBhbmQgYXBwbGllZCBhXG4gIC8vIENTUCB0byBmb3JiaWQgRnVuY3Rpb24sIGFuZCB5b3UncmUgbm90IHdpbGxpbmcgdG8gZml4IGVpdGhlciBvZiB0aG9zZVxuICAvLyBwcm9ibGVtcywgcGxlYXNlIGRldGFpbCB5b3VyIHVuaXF1ZSBwcmVkaWNhbWVudCBpbiBhIEdpdEh1YiBpc3N1ZS5cbiAgRnVuY3Rpb24oXCJyXCIsIFwicmVnZW5lcmF0b3JSdW50aW1lID0gclwiKShydW50aW1lKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=