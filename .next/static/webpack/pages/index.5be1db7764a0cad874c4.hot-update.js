self["webpackHotUpdate_N_E"]("pages/index",{

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

/***/ "./src/components/SpeakersList.js":
/*!****************************************!*\
  !*** ./src/components/SpeakersList.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Speaker */ "./src/components/Speaker.js");
/* harmony import */ var react_placeholder_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-placeholder/lib */ "./node_modules/react-placeholder/lib/index.js");
/* harmony import */ var _hooks_useRequestSpeakers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../hooks/useRequestSpeakers */ "./src/hooks/useRequestSpeakers.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Ramesh\\Desktop\\DesignReactComponents\\src\\components\\SpeakersList.js",
    _s = $RefreshSig$();





function SpeakersList(_ref) {
  _s();

  var showSessions = _ref.showSessions;

  var _useRequestSpeakers = (0,_hooks_useRequestSpeakers__WEBPACK_IMPORTED_MODULE_3__.default)(2000),
      speakersData = _useRequestSpeakers.speakersData,
      isLoading = _useRequestSpeakers.isLoading,
      hasErrored = _useRequestSpeakers.hasErrored,
      error = _useRequestSpeakers.error,
      _onFavoriteToggle = _useRequestSpeakers.onFavoriteToggle;

  if (hasErrored === true) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "text-danger",
      children: ["ERROR: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
        children: ["Loading Speaker Data Failed ", error]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 24
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, this);
  } //if (isLoading === true) return <div>Loading...</div>


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container speakers-list",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_placeholder_lib__WEBPACK_IMPORTED_MODULE_2__.default, {
      type: "media",
      rows: 15,
      className: "speakersList-placeholder",
      ready: isLoading === false,
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: speakersData.map(function (speaker) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_1__.default, {
            speaker: speaker,
            showSessions: showSessions,
            onFavoriteToggle: function onFavoriteToggle() {
              _onFavoriteToggle(speaker.id);
            }
          }, speaker.id, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 29
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 9
  }, this);
}

_s(SpeakersList, "cplhuZCPZ2/OoM4pkwOqXVikks0=", false, function () {
  return [_hooks_useRequestSpeakers__WEBPACK_IMPORTED_MODULE_3__.default];
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

/***/ "./src/hooks/useRequestSpeakers.js":
/*!*****************************************!*\
  !*** ./src/hooks/useRequestSpeakers.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Ramesh_Desktop_DesignReactComponents_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_Ramesh_Desktop_DesignReactComponents_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_Ramesh_Desktop_DesignReactComponents_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_Ramesh_Desktop_DesignReactComponents_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_Ramesh_Desktop_DesignReactComponents_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../SpeakerData */ "./SpeakerData.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* module decorator */ module = __webpack_require__.hmd(module);




var _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Ramesh_Desktop_DesignReactComponents_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function useRequestSpeakers() {
  _s();

  var delayTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1000;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]),
      speakersData = _useState[0],
      setSpeakersData = _useState[1];

  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(true),
      isLoading = _useState2[0],
      setIsLoading = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false),
      hasErrored = _useState3[0],
      setHasErrored = _useState3[1];

  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(""),
      error = _useState4[0],
      setError = _useState4[1];

  var delay = function delay(ms) {
    return new Promise(function (resolve) {
      return setTimeout(resolve, ms);
    });
  };

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    function delayfunc() {
      return _delayfunc.apply(this, arguments);
    }

    function _delayfunc() {
      _delayfunc = (0,C_Users_Ramesh_Desktop_DesignReactComponents_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_Ramesh_Desktop_DesignReactComponents_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
        return C_Users_Ramesh_Desktop_DesignReactComponents_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return delay(delayTime);

              case 3:
                //throw "Had Error";
                setIsLoading(false);
                setSpeakersData(_SpeakerData__WEBPACK_IMPORTED_MODULE_3__.data);
                _context.next = 12;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                setIsLoading(false);
                setHasErrored(true);
                setError(_context.t0);

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }));
      return _delayfunc.apply(this, arguments);
    }

    delayfunc();
  });

  function onFavoriteToggle(id) {
    var speakersRecPrevious = speakersData.find(function (rec) {
      return rec.id === id;
    });

    var speakerRecUpdated = _objectSpread(_objectSpread({}, speakersRecPrevious), {}, {
      favorite: !speakersRecPrevious.favorite
    });

    var speakersDataNew = speakersData.map(function (rec) {
      return rec.id === id ? speakerRecUpdated : rec;
    });
    setSpeakersData(speakersDataNew);
  }

  return {
    speakersData: speakersData,
    isLoading: isLoading,
    hasErrored: hasErrored,
    error: error,
    onFavoriteToggle: onFavoriteToggle
  };
}

_s(useRequestSpeakers, "lcG0h/4K/LZTU9GG3mqtP69E18g=");

/* harmony default export */ __webpack_exports__["default"] = (useRequestSpeakers);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FzeW5jVG9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9yZWdlbmVyYXRvci9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vU3BlYWtlckRhdGEuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1NwZWFrZXJzTGlzdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZVJlcXVlc3RTcGVha2Vycy5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyJdLCJuYW1lcyI6WyJkYXRhIiwiaWQiLCJmaXJzdCIsImxhc3QiLCJjb21wYW55IiwiYmlvIiwidHdpdHRlckhhbmRsZSIsImZhdm9yaXRlIiwic2Vzc2lvbnMiLCJ0aXRsZSIsImV2ZW50WWVhciIsInJvb20iLCJuYW1lIiwiY2FwYWNpdHkiLCJTcGVha2Vyc0xpc3QiLCJzaG93U2Vzc2lvbnMiLCJ1c2VSZXF1ZXN0U3BlYWtlcnMiLCJzcGVha2Vyc0RhdGEiLCJpc0xvYWRpbmciLCJoYXNFcnJvcmVkIiwiZXJyb3IiLCJvbkZhdm9yaXRlVG9nZ2xlIiwibWFwIiwic3BlYWtlciIsImRlbGF5VGltZSIsInVzZVN0YXRlIiwic2V0U3BlYWtlcnNEYXRhIiwic2V0SXNMb2FkaW5nIiwic2V0SGFzRXJyb3JlZCIsInNldEVycm9yIiwiZGVsYXkiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsInVzZUVmZmVjdCIsImRlbGF5ZnVuYyIsInNwZWFrZXJzUmVjUHJldmlvdXMiLCJmaW5kIiwicmVjIiwic3BlYWtlclJlY1VwZGF0ZWQiLCJzcGVha2Vyc0RhdGFOZXciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNB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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQ0FBb0MsY0FBYztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixpQkFBaUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBLDhDQUE4QyxRQUFRO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0EsOENBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLEtBQTBCLG9CQUFvQixDQUFFO0FBQ2xEOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41YmUxZGI3NzY0YTBjYWQ4NzRjNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBrZXksIGFyZykge1xuICB0cnkge1xuICAgIHZhciBpbmZvID0gZ2VuW2tleV0oYXJnKTtcbiAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJlamVjdChlcnJvcik7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKGluZm8uZG9uZSkge1xuICAgIHJlc29sdmUodmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihfbmV4dCwgX3Rocm93KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfYXN5bmNUb0dlbmVyYXRvcihmbikge1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJncyA9IGFyZ3VtZW50cztcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuXG4gICAgICBmdW5jdGlvbiBfbmV4dCh2YWx1ZSkge1xuICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIF90aHJvdyhlcnIpIHtcbiAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICB9XG5cbiAgICAgIF9uZXh0KHVuZGVmaW5lZCk7XG4gICAgfSk7XG4gIH07XG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVnZW5lcmF0b3ItcnVudGltZVwiKTtcbiIsImV4cG9ydCBjb25zdCBkYXRhID0gW1xyXG4gICAge1xyXG4gICAgICAgIGlkOiBcIjEyNjlcIixcclxuICAgICAgICBmaXJzdDogXCJBcnVuXCIsXHJcbiAgICAgICAgbGFzdDogXCJHdXB0YVwiLFxyXG4gICAgICAgIGNvbXBhbnk6IFwiQW1hem9uXCIsXHJcbiAgICAgICAgYmlvOlxyXG4gICAgICAgICAgICBcIkFydW4gR3VwdGEgaXMgYSBQcmluY2lwYWwgT3BlbiBTb3VyY2UgVGVjaG5vbG9naXN0IGF0IEFtYXpvbiBXZWIgU2VydmljZXMuIFwiLFxyXG4gICAgICAgIHR3aXR0ZXJIYW5kbGU6IFwiYXJ1bmd1cHRhXCIsXHJcbiAgICAgICAgZmF2b3JpdGU6IHRydWUsXHJcbiAgICAgICAgc2Vzc2lvbnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiMzJcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlJhaWxzIHBvd2VyZWQgYnkgR2xhc3NGaXNoXCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAwOFwiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiQ29ybmVsbCBIYWxsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCI1OFwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiTWV0cm86IEhlbGxvIFdvcmxkIHRvIC5ORVQgMy41IGludGVyb3BlcmFibGUgV2ViIHNlcnZpY2VcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDA4XCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJDb3JuZWxsIEhhbGxcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogMCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjYxXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJHbGFzc0Zpc2g6IE9uIGEgbWlzc2lvbiB0byBwbGVhc2UgZGV2ZWxvcGVyc1wiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMDhcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkNvcm5lbGwgSGFsbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiAwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiMjYzXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJKYXZhIEVFIDYgYW5kIEdsYXNzRmlzaCB2MzogUGF2aW5nIHRoZSBwYXRoIGZvciBmdXR1cmVcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDA5XCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCI1NTAyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDcwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiMjY0XCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTpcclxuICAgICAgICAgICAgICAgICAgICBcIlVzaW5nIEVjbGlwc2UgZm9yIEphdmEgRUUgNiBkZXZlbG9wbWVudCBmb3IgdGhlIEdsYXNzRmlzaOKEoiBBcHBsaWNhdGlvbiBTZXJ2ZXJcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDA5XCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCI1NTAzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDQ0LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiMjY1XCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJEeW5hbWljIExhbmd1YWdlcyAmYW1wOyBXZWIgRnJhbWV3b3JrcyBpbiBHbGFzc0Zpc2hcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDA5XCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCI0MjA0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDQ1LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiNDQwXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJKYXZhIEVFIDY6IERvaW5nIE1vcmUgV2l0aCBMZXNzXCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAxMFwiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiODQwMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiA0OCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjQ0MVwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiT1NHaSBhbmQgSmF2YSBFRSBpbiBHbGFzc0Zpc2hcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDEwXCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCI0MjIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDUwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiNDQ0XCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJSdW5uaW5nIHlvdXIgSmF2YSBFRSA2IGFwcGxpY2F0aW9uIGluIHRoZSBDbG91ZFwiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTBcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIjMxMDZcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogNDUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCI3NjZcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOlxyXG4gICAgICAgICAgICAgICAgICAgIFwiRGVwbG95IGFuZCBNb25pdG9yIHlvdXIgSmF2YSBFRSA2IHNlc3Npb24gaW4gYSBmdWxseS1jbHVzdGVyZWQgR2xhc3NGaXNoXCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAxMVwiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiNDIwMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiA3MCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjc3MFwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiVGhlIEphdmEgRUUgNyBQbGF0Zm9ybTogRGV2ZWxvcGluZyBmb3IgdGhlIENsb3VkXCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAxMVwiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiNDIwMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiA3MCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjg2NFwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiUkVTVGZ1bCBKYXZhIG9uIFN0ZXJvaWRzOiBKQVgtUlMgMi4wXCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAxMlwiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiNTUwMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiA3MCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjExMzFcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIjUwIG5ldyBmZWF0dXJlcyBvZiBKYXZhIEVFIDcgaW4gNTAgbWludXRlc1wiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTNcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIjM1MjVcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogMTEwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiMTI2MlwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiTWluZWNyYWZ0IE1vZGRpbmcgV29ya3Nob3AgKFBhcnQgMSBvZiAyKVwiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTNcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlBTRUM0NjAzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDEsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCIxMzUyXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJNaW5lY3JhZnQgTW9kZGluZyBXb3Jrc2hvcCAoUGFydCAyIG9mIDIpXCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAxM1wiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiUFNFQzQ2MDNcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogMSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjE0NDBcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIiBBbGwgYWJvdXQgV2lsZEZseSwgT25seSB1c2luZyBkZW1vc1wiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTRcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIjQzMDJcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogNDEsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCIxNDQxXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJKYXZhIEVFIDcgZGV2ZWxvcG1lbnQgdXNpbmcgRWNsaXBzZVwiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTRcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIjQzMDFcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogNjQsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCIyNTI5XCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJJbnRyb2R1Y3RvcnkgTWluZWNyYWZ0IE1vZGRpbmcgd2l0aCBGb3JnZSAtIFBhcnQgMVwiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTRcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlBTRUM0NTAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDczLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiMjU1N1wiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiSW50cm9kdWN0b3J5IE1pbmVjcmFmdCBNb2RkaW5nIHdpdGggRm9yZ2UgLSBQYXJ0IElJXCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAxNFwiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiUFNFQzQ1MDFcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogNzMsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCIzNjk0XCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJEb2NrZXIgYW5kIEt1YmVybmV0ZXMgUmVjaXBlcyBmb3IgSmF2YSBBcHBsaWNhdGlvbnNcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDE1XCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJBRC0xMjNcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogNzAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCI0ODM1XCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJEb2NrZXIgYW5kIEt1YmVybmV0ZXMgV29ya3Nob3BcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDE1ZmFsbFwiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiUkQtMzAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDQyLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiNDg2MFwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiTWluZWNyYWZ0IE1vZGRpbmcgd2l0aCBGb3JnZSAtIFBhcnQgMVwiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTVcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkFCLTE0MlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiA3OCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjU5MjJcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIk1pbmVjcmFmdCBNb2RkaW5nIHdpdGggRm9yZ2UgLSBQYXJ0IDJcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDE1XCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJBQi0xNDJcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogNzgsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCI2MDYwXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTpcclxuICAgICAgICAgICAgICAgICAgICBcIlBhY2thZ2UsIERlcGxveSwgU2NhbGUgWW91ciBBcHBsaWNhdGlvbnMgVXNpbmcgRG9ja2VyIGFuZCBLdWJlcm5ldGVzXCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAxNmZhbGxcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkNvcm5lbGwgSGFsbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiAwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiNjIwNVwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiU2VydmljZSBEaXNjb3ZlcnkgaW4gQ29udGFpbmVyIE9yY2hlc3RyYXRpb24gRnJhbWV3b3Jrc1wiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTdcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlRvd24gU3F1YXJlIENcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogMTMwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiNzM3OVwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiSmF2YSBkZXZlbG9wZXLigJlzIGpvdXJuZXkgaW4gS3ViZXJuZXRlcyBsYW5kXCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAxOFwiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiRmlyZXNpZGUgQ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiA4MCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjc0ODZcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlVzaW5nIEt1YmVybmV0ZXMgZm9yIE1hY2hpbmUgTGVhcm5pbmcgRnJhbWV3b3Jrc1wiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTlcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlRvd24gU3F1YXJlIEFcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogMTMwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCI4NTkwXCIsXHJcbiAgICAgICAgZmlyc3Q6IFwiQ2hyaXNcIixcclxuICAgICAgICBsYXN0OiBcIlJpY2hhcmRzb25cIixcclxuICAgICAgICBjb21wYW55OiBcIkV2ZW50dWF0ZSwgSW5jXCIsXHJcbiAgICAgICAgYmlvOlxyXG4gICAgICAgICAgICBcIkZvdW5kZXIgb2YgRXZlbnR1YXRlLCBBdXRob3Igb2YgUE9KT3MgaW4gQWN0aW9uLCBjcmVhdG9yIG9mIHRoZSBvcmlnaW5hbCBDbG91ZCBGb3VuZHJ5XCIsXHJcbiAgICAgICAgdHdpdHRlckhhbmRsZTogXCJjcmljaGFyZHNvblwiLFxyXG4gICAgICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICAgICAgICBzZXNzaW9uczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCIxMDExXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJEZWNvbXBvc2luZyBhcHBsaWNhdGlvbnMgZm9yIHNjYWxhYmlsaXR5IGFuZCBkZXBsb3lhYmlsaXR5XCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAxMlwiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiNDMwNlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiAxMDAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCIxMTMzXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJEZXZlbG9waW5nIHBvbHlnbG90IHBlcnNpc3RlbmNlIGFwcGxpY2F0aW9uc1wiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTNcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIjU1MDJcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogNzAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCIxMTM2XCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTpcclxuICAgICAgICAgICAgICAgICAgICBcIkNvbnN1bWluZyB3ZWIgc2VydmljZXMgYXN5bmNocm9ub3VzbHkgd2l0aCBGdXR1cmVzIGFuZCBSeCBPYnNlcnZhYmxlc1wiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTNcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIjgzMzhcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogMTIwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiMTQ1NFwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiRGV2ZWxvcGluZyBhcHBsaWNhdGlvbnMgd2l0aCBhIG1pY3JvLXNlcnZpY2UgYXJjaGl0ZWN0dXJlXCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAxNFwiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiODMzOFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiAxMjAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCIxNDU1XCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJNYXAsIGZsYXRtYXAgYW5kIHJlZHVjZSBhcmUgeW91ciBuZXcgYmVzdCBmcmllbmRzXCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAxNFwiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiNTUwMlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiA3MCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjQ3NjVcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOlxyXG4gICAgICAgICAgICAgICAgICAgIFwiRGV2ZWxvcGluZyBldmVudC1kcml2ZW4gbWljcm9zZXJ2aWNlcyB3aXRoIGV2ZW50IHNvdXJjaW5nIGFuZCBDUVJTXCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAxNVwiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiQUItMjAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDY2LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiNjA4MFwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiRGV2ZWxvcGluZyBNaWNyb3NlcnZpY2VzIHdpdGggQWdncmVnYXRlc1wiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTZcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlJGLTE0MVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiA1OCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjYyMTRcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlRoZXJlIElzIE5vIFN1Y2ggVGhpbmcgYXMgYSBNaWNyb3NlcnZpY2UhXCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAxN1wiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiVG93biBTcXVhcmUgQ1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiAxMzAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCI3NDAxXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJEZXZlbG9waW5nIEFzeW5jaHJvbm91cywgTWVzc2FnZS1Ecml2ZW4gTWljcm9zZXJ2aWNlc1wiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMThcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlJvdW5kIFRhYmxlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDc1LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiNzQwMlwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6XHJcbiAgICAgICAgICAgICAgICAgICAgXCJNaWNyb3NlcnZpY2VzOiBEZWNvbXBvc2luZyBBcHBsaWNhdGlvbnMgZm9yIFRlc3RhYmlsaXR5IGFuZCBEZXBsb3lhYmlsaXR5XCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAxOFwiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiVG93biBTcXVhcmUgQlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiAxMzAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCI3NDYwXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJNaWNyb3NlcnZpY2VzIGFuZCBTZXJ2ZXJsZXNzIFNwZWFrZXIgUGFuZWwg4oCTIFRoZSBSb2FkIEFoZWFkXCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAxOFwiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiVG93biBTcXVhcmUgQlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiAxMzAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCI3NTE1XCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTpcclxuICAgICAgICAgICAgICAgICAgICBcIkN1YmVzLCBIZXhhZ29ucyBhbmQgTW9yZTogVW5kZXJzdGFuZGluZyB0aGUgTWljcm9zZXJ2aWNlcyBUaHJvdWdoIFNoYXBlc1wiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTlcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlRvd24gU3F1YXJlIENcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogMTMwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCI1NDQzXCIsXHJcbiAgICAgICAgZmlyc3Q6IFwiTWFya1wiLFxyXG4gICAgICAgIGxhc3Q6IFwiQWJyYW1zb25cIixcclxuICAgICAgICBjb21wYW55OiBcIlByaW50Zm9ybSBDb3Jwb3JhdGlvblwiLFxyXG4gICAgICAgIGJpbzpcclxuICAgICAgICAgICAgXCJNYXJrIGlzIGEgZ2xvYmFsbHkgcmVjb2duaXplZCBleHBlcnQgb24gZGlnaXRhbCBwcmludGluZyBmb3IgaW5kdXN0cmlhbCBhbmQgcGFja2FnaW5nIGFwcGxpY2F0aW9ucy5cIixcclxuICAgICAgICB0d2l0dGVySGFuZGxlOiBcIm1hcmtfX2FcIixcclxuICAgICAgICBmYXZvcml0ZTogdHJ1ZSxcclxuICAgICAgICBzZXNzaW9uczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCI2NzZcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOlxyXG4gICAgICAgICAgICAgICAgICAgIFwiQWNjZWxlcmF0ZSB5b3VyIGRhdGFiYXNlIGRldmVsb3BtZW50IHdpdGggT2JqZWN0LVJlbGF0aW9uYWwgTWFwcGluZyAoT1IvTSkgaW4gLk5FVFwiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTFcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIjg0MDFcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogNDgsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCI2NzdcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOlxyXG4gICAgICAgICAgICAgICAgICAgIFwiSW50cm9kdWN0aW9uIHRvIERhdGFiYXNlIERlc2lnbiB3aXRoIEVudGl0eSBSZWxhdGlvbnNoaXAgKEVSKSBEaWFncmFtc1wiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTFcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIjU1MDFcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogNzAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCI4NTlcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkRhdGFiYXNlIERlc2lnbiBUcm91Ymxlc2hvb3RpbmcsIHJlcGFpciBhbmQgd2FydCByZW1vdmFsXCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAxMlwiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiMzUyNVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiAxMTAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCI4NjFcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOlxyXG4gICAgICAgICAgICAgICAgICAgIFwiSW50cm9kdWN0aW9uIHRvIERhdGFiYXNlIERlc2lnbiB3aXRoIEVudGl0eSBSZWxhdGlvbnNoaXAgKEVSKSBEaWFncmFtc1wiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTJcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIjM1MjVcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogMTEwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiMTEyMFwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6XHJcbiAgICAgICAgICAgICAgICAgICAgXCJJbnRybyB0byBSZWxhdGlvbmFsIERhdGFiYXNlIERlc2lnbiAmIEVudGl0eS1SZWxhdGlvbnNoaXAgRGlhZ3JhbXNcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDEzXCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCIxNTAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDE5MCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjExMjVcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkFkdmFuY2VkIERhdGEgTW9kZWxpbmcgd2l0aCBFbnRpdHkgUmVsYXRpb25zaGlwIERpYWdyYW1zXCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAxM1wiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiUFNFQzQ1MDFcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogNzMsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCIxNDM1XCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTpcclxuICAgICAgICAgICAgICAgICAgICBcIkludHJvIHRvIFJlbGF0aW9uYWwgRGF0YWJhc2UgRGVzaWduICYgRW50aXR5LVJlbGF0aW9uc2hpcCBEaWFncmFtc1wiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTRcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIjg0MDJcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogODAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCIyNTc3XCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJMZWFuIFN0YXJ0dXAgZm9yIEVuZ2luZWVyc1wiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTRcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIjg0MDJcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogODAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCI0ODE5XCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJMZWFuIFN0YXJ0dXAgZm9yIEVuZ2luZWVyc1wiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTVcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkFDLTE2MlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiA3NyxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjYxODRcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkxlYW4gU3RhcnR1cCBmb3IgRW5naW5lZXJzXCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAxN1wiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiRmlyZXNpZGUgRFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiA4MCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IFwiMTEyNFwiLFxyXG4gICAgICAgIGZpcnN0OiBcIkRvdWdsYXNcIixcclxuICAgICAgICBsYXN0OiBcIkNyb2NrZm9yZFwiLFxyXG4gICAgICAgIGNvbXBhbnk6IFwiUGF5UGFsXCIsXHJcbiAgICAgICAgYmlvOlxyXG4gICAgICAgICAgICBcIkRvdWdsYXMgQ3JvY2tmb3JkIGRpc2NvdmVyZWQgdGhlIEpTT04gRGF0YSBJbnRlcmNoYW5nZSBGb3JtYXQuIEhlIGlzIGFsc28gdGhlIGF1dGhvciBvZiBfSmF2YVNjcmlwdDogVGhlIEdvb2QgUGFydHNfLiBIZSBoYXMgYmVlbiBjYWxsZWQgYSBndXJ1LCBidXQgaGUgaXMgYWN0dWFsbHkgbW9yZSBvZiBhIG1haGF0bWEuXCIsXHJcbiAgICAgICAgdHdpdHRlckhhbmRsZTogXCJub3RhdHdlZXRlclwiLFxyXG4gICAgICAgIGZhdm9yaXRlOiB0cnVlLFxyXG4gICAgICAgIHNlc3Npb25zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjEyXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJKYXZhU2NyaXB0OiBUaGUgR29vZCBQYXJ0cyAoUGFydCAxKVwiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMDhcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkNvcm5lbGwgSGFsbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiAwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiMTIxXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJKYXZhU2NyaXB0OiBUaGUgR29vZCBQYXJ0cyAoUGFydCAyKVwiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMDhcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkNvcm5lbGwgSGFsbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiAwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiMTc2XCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJKYXZhU2NyaXB0OiBUaGUgR29vZCBQYXJ0c1wiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMDlcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIjU1MDFcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogNzAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCIxNzdcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkphdmFTY3JpcHQgVG93biBNZWV0aW5nXCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAwOVwiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiNTUwMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiA3MCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjM3MVwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiSmF2YVNjcmlwdDogVGhlIEdvb2QgUGFydHNcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDEwXCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCIxNTAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDE5MCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjUzNlwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiVGFsayB3aXRoIENyb2NrXCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAxMFwiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiMTUwMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiAxOTAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCI1ODhcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkVDTUFTY3JpcHQgNTogVGhlIE5ldyBQYXJ0c1wiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTFcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIjE1MDFcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogMTkwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiNTg5XCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJFQ01BU2NyaXB0OiBXaGF0IE5leHQ/XCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAxMVwiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiMTUwMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiAxOTAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCI4MzNcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlByb2dyYW1taW5nIFN0eWxlIGFuZCBZb3VyIEJyYWluXCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAxMlwiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiU21pdGhXaWNrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDEwMDAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCIxMDU2XCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJNb25hZHMgYW5kIEdvbmFkc1wiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTJcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlNtaXRoV2lja1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiAxMDAwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiMTE5OFwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiRnVuIHdpdGggRnVuY3Rpb25zIChQYXJ0IDEpXCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAxM1wiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiU21pdGhXaWNrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDEwMDAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCIxMTk5XCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJGdW4gd2l0aCBGdW5jdGlvbnMgKFBhcnQgMilcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDEzXCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJTbWl0aFdpY2tcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogMTAwMCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjEzOTBcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkZ1biB3aXRoIEZ1bmN0aW9ucyBpbiBKYXZhU2NyaXB0IChGdWxsIERheSlcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDE0XCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJDb3JuZWxsIEhhbGxcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogMCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjE0MTZcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlRoZSBCZXR0ZXIgUGFydHNcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDE0XCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJTbWl0aFdpY2tcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogMTAwMCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjM2NDNcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIk1hbmFnaW5nIFByb2dyYW1tZXJzLiBQcm9ncmFtbWVycyBhcmUgbm90IGxpa2UgdGhlIG90aGVyIGtpZHNcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDE0XCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCIxNTAxXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDE5MCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjM2ODdcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlRoZSBCZXR0ZXIgUGFydHNcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDE1XCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJWUEEtVGhlYXRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiAzOTUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCIzNjk2XCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJNYW5hZ2luZyBQcm9ncmFtbWVyc1wiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTVcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlZQQS1UaGVhdGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDM5NSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjQ3MjZcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlVwZ3JhZGluZyB0aGUgV2ViXCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAxNXNmXCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJDb3JuZWxsIEhhbGxcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogMCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjU5ODdcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlRoZSBTZWlmIFByb2plY3QgQ29udGludWVkXCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAxNlwiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiVlBBLVRoZWF0ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogMzk1LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiNjE3MVwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiVGhlIFBvc3QgSmF2YXNjcmlwdCBBcG9jYWx5cHNlXCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAxNlwiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiVlBBLVRoZWF0ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogMzk1LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiNjIwOFwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiTnVtYmVyc1wiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTdcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlRvd24gU3F1YXJlIEJcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogMTMwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiNjIwOVwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQ2hhcmFjdGVyIFNldHNcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDE3XCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJUb3duIFNxdWFyZSBCXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDEzMCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjcyNTZcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIlByaW5jaXBsZXMgb2YgU2VjdXJpdHlcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDE3XCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJUb3duIFNxdWFyZSBCXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDEzMCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjc0MTdcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkhvdyBKYXZhU2NyaXB0IFdvcmtzXCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAxOFwiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiVG93biBTcXVhcmUgQVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiAxMzAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCI3NDE4XCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJRJkEgV2l0aCBEb3VnbGFzIENyb2NrZm9yZFwiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMThcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkZpcmVzaWRlIEFcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogODAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCI3NDY1XCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJXZWIgUGFuZWwgd2l0aCBEb3VnbGFzIENyb2NrZm9yZCwgU3RldmUgU291ZGVycyBhbmQgTWlrZSBOb3J0aFwiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMThcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlRvd24gU3F1YXJlIEJcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogMTMwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiNzQ4OVwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiVGhlIEhpc3Rvcnkgb2YgSlNPTlwiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTlcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlRvd24gU3F1YXJlIEFcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogMTMwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiNzU2OVwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiWW91IENhbiBDb3VudCBvbiBOdW1iZXJzXCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAxOVwiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiVG93biBTcXVhcmUgQVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiAxMzAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcIjEwODAxXCIsXHJcbiAgICAgICAgZmlyc3Q6IFwiVHJveVwiLFxyXG4gICAgICAgIGxhc3Q6IFwiTWlsZXNcIixcclxuICAgICAgICBjb21wYW55OiBcIktlbGxleSBCbHVlIEJvb2tcIixcclxuICAgICAgICBiaW86IFwiQW4gYXdhcmQgd2lubmluZyBkZXZlbG9wZXIgYW5kIGF1dGhvci5cIixcclxuICAgICAgICB0d2l0dGVySGFuZGxlOiBcInRoZXJvY2tuY29kZXJcIixcclxuICAgICAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgICAgICAgc2Vzc2lvbnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiMTI1MlwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQmVnaW5uaW5nIEhUTUw1IE1vYmlsZSBHYW1lIFByb2dyYW1taW5nXCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAxM1wiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiODMzOFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiAxMjAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCIxNDQ0XCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJJbnRybyB0byBNb2JpbGUgR2FtZSBQcm9ncmFtbWluZyB3aXRoIENvY29zMmQteCwgUGFydCAxXCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAxNFwiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiNDIyMFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiA1MCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjE0NDVcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkludHJvIHRvIE1vYmlsZSBHYW1lIFByb2dyYW1taW5nIHdpdGggQ29jb3MyZC14LCBQYXJ0IDJcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDE0XCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCI0MjIwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDUwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiNjA4NVwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiRnVuY3Rpb25hbCBQcm9ncmFtbWluZyBpbiBKYXZhU2NyaXB0XCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAxNlwiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiR3VsbG8gSUlcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogMjAwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiNzI0MlwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQ3JlYXRpbmcgYW4gQVdTIExhbWJkYSBGdW5jdGlvbiB3aXRoIEtvdGxpblwiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTdcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkZpcmVzaWRlIERcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogODAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCI3MzQ2XCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJDKysgV2ViIFNlcnZlcnMgYW5kIEFQSXNcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDE4XCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJGaXJlc2lkZSBBXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDgwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCI0NzM0M1wiLFxyXG4gICAgICAgIGZpcnN0OiBcIkV2ZVwiLFxyXG4gICAgICAgIGxhc3Q6IFwiUG9yY2VsbG9cIixcclxuICAgICAgICBjb21wYW55OiBcIk1vb24gSGlnaHdheVwiLFxyXG4gICAgICAgIGJpbzpcclxuICAgICAgICAgICAgXCJFdmUgUG9yY2VsbG8gaXMgYW4gaW5zdHJ1Y3RvciBhdCBNb29uIEhpZ2h3YXksIGVnZ2hlYWQuaW8sIGFuZCBMaW5rZWRJbiBMZWFybmluZy5cIixcclxuICAgICAgICB0d2l0dGVySGFuZGxlOiBcImV2ZXBvcmNlbGxvXCIsXHJcbiAgICAgICAgZmF2b3JpdGU6IHRydWUsXHJcbiAgICAgICAgc2Vzc2lvbnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiNzU0OFwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiUmVhY3QgSXMgWW91ciBGcmllbmQ6IEEgR2VudGxlIEludHJvIHRvIHRoZSBSZWFjdCBMaWJyYXJ5XCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAxOVwiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiVG93biBTcXVhcmUgQlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiAxMzAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcIjE0OTE4XCIsXHJcbiAgICAgICAgZmlyc3Q6IFwiQ2xhdWRpYVwiLFxyXG4gICAgICAgIGxhc3Q6IFwiR2FsdmFuXCIsXHJcbiAgICAgICAgY29tcGFueTogXCJFYXJseSBTdGFnZSBJbm5vdmF0aW9uXCIsXHJcbiAgICAgICAgYmlvOiBcIkNsYXVkaWEgaXMgYSBsZWFkaW5nIGV4cGVydCBvbiBwcm9kdWN0IGludGVybmF0aW9uYWxpemF0aW9uXCIsXHJcbiAgICAgICAgdHdpdHRlckhhbmRsZTogXCJjZ2FsdmFuXCIsXHJcbiAgICAgICAgZmF2b3JpdGU6IGZhbHNlLFxyXG4gICAgICAgIHNlc3Npb25zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjQ4MjBcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIklubm92YXRpb24gZm9yIFdvbWVuIEVuZ2luZWVyc1wiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTVcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlJFLTMxMVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiA2OCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjYwMTJcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkludGVybmF0aW9uYWxpemF0aW9uIGF0IFN0YXJ0dXBzXCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAxNlwiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiUy0xNjBcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogNjAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCI3MzQxXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJBZHZhbmNpbmcgeW91ciBDYXJlZXIgdGhyb3VnaCB0ZWNobmljYWwgbGVhZGVyc2hpcCBza2lsbHMgXCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAxOFwiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiVG93biBTcXVhcmUgQVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiAxMzAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCI3NDk3XCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJHRFBSIGFuZCBQcml2YWN5IEFyb3VuZCB0aGUgV29ybGRcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDE5XCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJGaXJlc2lkZSBCXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDgwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCI0Njc2OVwiLFxyXG4gICAgICAgIGZpcnN0OiBcIk1hcnlcIixcclxuICAgICAgICBsYXN0OiBcIkdyeWdsZXNraVwiLFxyXG4gICAgICAgIGNvbXBhbnk6IFwiSUJNXCIsXHJcbiAgICAgICAgYmlvOlxyXG4gICAgICAgICAgICBcIk1hcnkgaXMgYSBwYXNzaW9uYXRlIGRldmVsb3BlciBhZHZvY2F0ZSBieSBkYXksIGFuZCBhIHZlcnkgYWN0aXZlIHRlY2ggY29tbXVuaXR5IG9yZ2FuaXplciBieSBuaWdodC5cIixcclxuICAgICAgICB0d2l0dGVySGFuZGxlOiBcIm1ncnlnbGVzXCIsXHJcbiAgICAgICAgZmF2b3JpdGU6IHRydWUsXHJcbiAgICAgICAgc2Vzc2lvbnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiNzU0OVwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQSBHZW50bGUgSW50cm8gdG8gUmVhY3RpdmUgSmF2YSBQcm9ncmFtbWluZyBhbmQgU3lzdGVtc1wiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTlcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIkZpcmVzaWRlIEFcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogODAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiBcIjgzNjdcIixcclxuICAgICAgICBmaXJzdDogXCJHYXlsZSBMYWFrbWFublwiLFxyXG4gICAgICAgIGxhc3Q6IFwiTWNEb3dlbGxcIixcclxuICAgICAgICBjb21wYW55OiBcIkNhcmVlckN1cFwiLFxyXG4gICAgICAgIGJpbzpcclxuICAgICAgICAgICAgXCJHYXlsZSBMYWFrbWFubiBNY0Rvd2VsbCBpcyB0aGUgZm91bmRlciBhbmQgQ0VPIG9mIENhcmVlckN1cC5jb20gYW5kIHRoZSBhdXRob3Igb2YgdGhyZWUgYm9va3MuXCIsXHJcbiAgICAgICAgdHdpdHRlckhhbmRsZTogXCJnYXlsZVwiLFxyXG4gICAgICAgIGZhdm9yaXRlOiBmYWxzZSxcclxuICAgICAgICBzZXNzaW9uczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCI5NDRcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkNyYWNraW5nIHRoZSBDb2RpbmcgSW50ZXJ2aWV3XCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAxMlwiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiU21pdGhXaWNrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDEwMDAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCIxMDg2XCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTpcclxuICAgICAgICAgICAgICAgICAgICBcIkNyYWNraW5nIHRoZSBDb2RpbmcgSW50ZXJ2aWV3OiBBZHZpY2UgZm9yIERldnMgYW5kIFBNIEludGVydmlld3NcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDEzXCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJTbWl0aFdpY2tcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogMTAwMCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjE0MTJcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOiBcIkNyYWNraW5nIHRoZSBDb2RpbmcgSW50ZXJ2aWV3XCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAxNFwiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiU21pdGhXaWNrXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDEwMDAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCIxNDEzXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJDcmFja2luZyB0aGUgUHJvZHVjdCBNYW5hZ2VyIEludGVydmlld1wiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTRcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIjUwMTVcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogMjE3LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiMzcwMVwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQ3JhY2tpbmcgdGhlIENvZGluZyBJbnRlcnZpZXdcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDE1XCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJWUEEtVGhlYXRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiAzOTUsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCIzNzAzXCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJDcmFja2luZyB0aGUgUHJvZHVjdCBNYW5hZ2VyIEludGVydmlld1wiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTVcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlNDLTEyN1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiAyNTAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCI1OTg0XCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJDcmFja2luZyB0aGUgQ29kaW5nIEludGVydmlld1wiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMTZcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlZQQS1UaGVhdGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDM5NSxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlkOiBcIjU5ODZcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOlxyXG4gICAgICAgICAgICAgICAgICAgIFwiQmUgYSBCZXR0ZXIgSW50ZXJ2aWV3ZXI6IEhvdyB0byBJbnRlcnZpZXcgTGlrZSBHb29nbGUgKG9yIG5vdCktQnV0IEJldHRlciFcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDE2XCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJTQy0xMjdcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogMjUwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiNjIyN1wiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiQ3JhY2tpbmcgdGhlIENvZGluZyBJbnRlcnZpZXdcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDE3XCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJGaXJlc2lkZSBCXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDgwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiNjIyOVwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiSGlyaW5nIENvZGVycyB3aXRoIFdoaXRlYm9hcmQgSW50ZXJ2aWV3cyBhbmQgT3RoZXIgUXVlc3Rpb25zXCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAxN1wiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiVG93biBTcXVhcmUgQlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiAxMzAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCI3MzY2XCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJDcmFja2luZyB0aGUgQ29kaW5nIEludGVydmlld1wiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMThcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlRvd24gU3F1YXJlIEFcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogMTMwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiNzM2N1wiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiSW50ZXJ2aWV3IExpa2UgR29vZ2xlIChvciBub3QpLUJ1dCBCZXR0ZXIhXCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAxOFwiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiVG93biBTcXVhcmUgQVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhcGFjaXR5OiAxMzAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCI3MzY4XCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJDcmFja2luZyB0aGUgUHJvZHVjdCBNYW5hZ2VyIEludGVydmlld1wiLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRZZWFyOiBcIjIwMThcIixcclxuICAgICAgICAgICAgICAgIHJvb206IHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIlRvd24gU3F1YXJlIEJcIixcclxuICAgICAgICAgICAgICAgICAgICBjYXBhY2l0eTogMTMwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogXCI2MjBcIixcclxuICAgICAgICBmaXJzdDogXCJSb25cIixcclxuICAgICAgICBsYXN0OiBcIktsZWlubWFuXCIsXHJcbiAgICAgICAgY29tcGFueTogXCJEZSBBbnphIENvbGxlZ2VcIixcclxuICAgICAgICBiaW86IFwiUm9uIHRlYWNoZXMgT2JqZWN0IE9yaWVudGVkIEFuYWx5c2lzIGFuZCBEZXNpZ24gYXQgRGUgQW56YSBDb2xsZWdlIFwiLFxyXG4gICAgICAgIHR3aXR0ZXJIYW5kbGU6IFwibm90d2VldHNcIixcclxuICAgICAgICBmYXZvcml0ZTogZmFsc2UsXHJcbiAgICAgICAgc2Vzc2lvbnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiODZcIixcclxuICAgICAgICAgICAgICAgIHRpdGxlOlxyXG4gICAgICAgICAgICAgICAgICAgIFwiVGhlIFBlcmZvcm1hbmNlIExpbWl0YXRpb25zICBvZiB0aGUgSmF2YSBQbGF0Zm9ybSAuLi4gYW5kIGhvdyB0byBhdm9pZCB0aGVtXCIsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXI6IFwiMjAwOFwiLFxyXG4gICAgICAgICAgICAgICAgcm9vbToge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiQ29ybmVsbCBIYWxsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogXCI2MDg5XCIsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJTbyB5b3VyIG1vbSBhbHdheXMgd2FudGVkIHlvdSB0byBiZSBhbiBhcmNoaXRlY3RcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDE2XCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJDMjA5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDU1LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiNzQ0MFwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IFwiSG93IHRvIFRoaW5rIGxpa2UgYSBTb2Z0d2FyZSBBcmNoaXRlY3RcIixcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDE4XCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJGaXJlc2lkZSBBXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDgwLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IFwiNzU1MVwiLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdIb3cgdG8gXCJ0aGlua1wiIChhbmQgZGVzaWduKSBsaWtlIGEgU29mdHdhcmUgQXJjaGl0ZWN0JyxcclxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcjogXCIyMDE5XCIsXHJcbiAgICAgICAgICAgICAgICByb29tOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJUb3duIFNxdWFyZSBCXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2FwYWNpdHk6IDEzMCxcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbl07IiwiaW1wb3J0IFNwZWFrZXIgZnJvbSBcIi4vU3BlYWtlclwiO1xyXG5pbXBvcnQgUmVhY3RQbGFjZWhvbGRlciBmcm9tIFwicmVhY3QtcGxhY2Vob2xkZXIvbGliXCI7XHJcbmltcG9ydCB1c2VSZXF1ZXN0U3BlYWtlcnMgZnJvbSBcIi4uL2hvb2tzL3VzZVJlcXVlc3RTcGVha2Vyc1wiO1xyXG5cclxuXHJcbmZ1bmN0aW9uIFNwZWFrZXJzTGlzdCh7IHNob3dTZXNzaW9ucyB9KSB7XHJcblxyXG4gICAgY29uc3Qge1xyXG4gICAgICAgIHNwZWFrZXJzRGF0YSwgaXNMb2FkaW5nLFxyXG4gICAgICAgIGhhc0Vycm9yZWQsIGVycm9yLFxyXG4gICAgICAgIG9uRmF2b3JpdGVUb2dnbGUsXHJcbiAgICB9ID0gdXNlUmVxdWVzdFNwZWFrZXJzKDIwMDApXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIGlmIChoYXNFcnJvcmVkID09PSB0cnVlKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWRhbmdlclwiPlxyXG4gICAgICAgICAgICAgICAgRVJST1I6IDxiPkxvYWRpbmcgU3BlYWtlciBEYXRhIEZhaWxlZCB7ZXJyb3J9PC9iPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgLy9pZiAoaXNMb2FkaW5nID09PSB0cnVlKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XHJcblxyXG4gICAgcmV0dXJuIChcclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgc3BlYWtlcnMtbGlzdFwiPlxyXG4gICAgICAgICAgICA8UmVhY3RQbGFjZWhvbGRlclxyXG4gICAgICAgICAgICAgICAgdHlwZT1cIm1lZGlhXCJcclxuICAgICAgICAgICAgICAgIHJvd3M9ezE1fVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3BlYWtlcnNMaXN0LXBsYWNlaG9sZGVyXCJcclxuICAgICAgICAgICAgICAgIHJlYWR5PXtpc0xvYWRpbmcgPT09IGZhbHNlfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtzcGVha2Vyc0RhdGEubWFwKGZ1bmN0aW9uIChzcGVha2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U3BlYWtlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17c3BlYWtlci5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVha2VyPXtzcGVha2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dTZXNzaW9ucz17c2hvd1Nlc3Npb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uRmF2b3JpdGVUb2dnbGU9eygpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25GYXZvcml0ZVRvZ2dsZShzcGVha2VyLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1JlYWN0UGxhY2Vob2xkZXI+XHJcbiAgICAgICAgPC9kaXYgPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcnNMaXN0OyIsImltcG9ydCB7IGRhdGEgfSBmcm9tIFwiLi4vLi4vU3BlYWtlckRhdGFcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZnVuY3Rpb24gdXNlUmVxdWVzdFNwZWFrZXJzKGRlbGF5VGltZSA9IDEwMDApIHtcclxuICAgIGNvbnN0IFtzcGVha2Vyc0RhdGEsIHNldFNwZWFrZXJzRGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XHJcbiAgICBjb25zdCBbaGFzRXJyb3JlZCwgc2V0SGFzRXJyb3JlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgZGVsYXkgPSAobXMpID0+IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKSk7XHJcblxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcblxyXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGRlbGF5ZnVuYygpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IGRlbGF5KGRlbGF5VGltZSk7XHJcbiAgICAgICAgICAgICAgICAvL3Rocm93IFwiSGFkIEVycm9yXCI7XHJcbiAgICAgICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgc2V0U3BlYWtlcnNEYXRhKGRhdGEpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgc2V0SGFzRXJyb3JlZCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlbGF5ZnVuYygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZnVuY3Rpb24gb25GYXZvcml0ZVRvZ2dsZShpZCkge1xyXG4gICAgICAgIGNvbnN0IHNwZWFrZXJzUmVjUHJldmlvdXMgPSBzcGVha2Vyc0RhdGEuZmluZChmdW5jdGlvbiAocmVjKSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZWMuaWQgPT09IGlkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHNwZWFrZXJSZWNVcGRhdGVkID0ge1xyXG4gICAgICAgICAgICAuLi5zcGVha2Vyc1JlY1ByZXZpb3VzLFxyXG4gICAgICAgICAgICBmYXZvcml0ZTogIXNwZWFrZXJzUmVjUHJldmlvdXMuZmF2b3JpdGUsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBzcGVha2Vyc0RhdGFOZXcgPSBzcGVha2Vyc0RhdGEubWFwKGZ1bmN0aW9uIChyZWMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlYy5pZCA9PT0gaWQgPyBzcGVha2VyUmVjVXBkYXRlZCA6IHJlYztcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgc2V0U3BlYWtlcnNEYXRhKHNwZWFrZXJzRGF0YU5ldyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzcGVha2Vyc0RhdGEsIGlzTG9hZGluZywgaGFzRXJyb3JlZCwgZXJyb3IsIG9uRmF2b3JpdGVUb2dnbGVcclxuICAgIH07XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlUmVxdWVzdFNwZWFrZXJzOyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LXByZXNlbnQsIEZhY2Vib29rLCBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKi9cblxudmFyIHJ1bnRpbWUgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIE9wID0gT2JqZWN0LnByb3RvdHlwZTtcbiAgdmFyIGhhc093biA9IE9wLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyICRTeW1ib2wgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgPyBTeW1ib2wgOiB7fTtcbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID0gJFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcbiAgdmFyIGFzeW5jSXRlcmF0b3JTeW1ib2wgPSAkU3ltYm9sLmFzeW5jSXRlcmF0b3IgfHwgXCJAQGFzeW5jSXRlcmF0b3JcIjtcbiAgdmFyIHRvU3RyaW5nVGFnU3ltYm9sID0gJFN5bWJvbC50b1N0cmluZ1RhZyB8fCBcIkBAdG9TdHJpbmdUYWdcIjtcblxuICBmdW5jdGlvbiBkZWZpbmUob2JqLCBrZXksIHZhbHVlKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgICByZXR1cm4gb2JqW2tleV07XG4gIH1cbiAgdHJ5IHtcbiAgICAvLyBJRSA4IGhhcyBhIGJyb2tlbiBPYmplY3QuZGVmaW5lUHJvcGVydHkgdGhhdCBvbmx5IHdvcmtzIG9uIERPTSBvYmplY3RzLlxuICAgIGRlZmluZSh7fSwgXCJcIik7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGRlZmluZSA9IGZ1bmN0aW9uKG9iaiwga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIG9ialtrZXldID0gdmFsdWU7XG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkIGFuZCBvdXRlckZuLnByb3RvdHlwZSBpcyBhIEdlbmVyYXRvciwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgcHJvdG9HZW5lcmF0b3IgPSBvdXRlckZuICYmIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yID8gb3V0ZXJGbiA6IEdlbmVyYXRvcjtcbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZShwcm90b0dlbmVyYXRvci5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIGV4cG9ydHMud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIC8vIFRoaXMgaXMgYSBwb2x5ZmlsbCBmb3IgJUl0ZXJhdG9yUHJvdG90eXBlJSBmb3IgZW52aXJvbm1lbnRzIHRoYXRcbiAgLy8gZG9uJ3QgbmF0aXZlbHkgc3VwcG9ydCBpdC5cbiAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG4gIEl0ZXJhdG9yUHJvdG90eXBlW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICB2YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG4gIHZhciBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvICYmIGdldFByb3RvKGdldFByb3RvKHZhbHVlcyhbXSkpKTtcbiAgaWYgKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlICYmXG4gICAgICBOYXRpdmVJdGVyYXRvclByb3RvdHlwZSAhPT0gT3AgJiZcbiAgICAgIGhhc093bi5jYWxsKE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlLCBpdGVyYXRvclN5bWJvbCkpIHtcbiAgICAvLyBUaGlzIGVudmlyb25tZW50IGhhcyBhIG5hdGl2ZSAlSXRlcmF0b3JQcm90b3R5cGUlOyB1c2UgaXQgaW5zdGVhZFxuICAgIC8vIG9mIHRoZSBwb2x5ZmlsbC5cbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IE5hdGl2ZUl0ZXJhdG9yUHJvdG90eXBlO1xuICB9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID1cbiAgICBHZW5lcmF0b3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSk7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gZGVmaW5lKFxuICAgIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLFxuICAgIHRvU3RyaW5nVGFnU3ltYm9sLFxuICAgIFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICApO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIGRlZmluZShwcm90b3R5cGUsIG1ldGhvZCwgZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBleHBvcnRzLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBleHBvcnRzLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICAgIGRlZmluZShnZW5GdW4sIHRvU3RyaW5nVGFnU3ltYm9sLCBcIkdlbmVyYXRvckZ1bmN0aW9uXCIpO1xuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIilgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLlxuICBleHBvcnRzLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIHsgX19hd2FpdDogYXJnIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IsIFByb21pc2VJbXBsKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlICYmXG4gICAgICAgICAgICB0eXBlb2YgdmFsdWUgPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKHZhbHVlLCBcIl9fYXdhaXRcIikpIHtcbiAgICAgICAgICByZXR1cm4gUHJvbWlzZUltcGwucmVzb2x2ZSh2YWx1ZS5fX2F3YWl0KS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2VJbXBsLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi5cbiAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIC8vIElmIGEgcmVqZWN0ZWQgUHJvbWlzZSB3YXMgeWllbGRlZCwgdGhyb3cgdGhlIHJlamVjdGlvbiBiYWNrXG4gICAgICAgICAgLy8gaW50byB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBoYW5kbGVkIHRoZXJlLlxuICAgICAgICAgIHJldHVybiBpbnZva2UoXCJ0aHJvd1wiLCBlcnJvciwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2VJbXBsKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIGludm9rZShtZXRob2QsIGFyZywgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcbiAgQXN5bmNJdGVyYXRvci5wcm90b3R5cGVbYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG4gIGV4cG9ydHMuQXN5bmNJdGVyYXRvciA9IEFzeW5jSXRlcmF0b3I7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIGV4cG9ydHMuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCwgUHJvbWlzZUltcGwpIHtcbiAgICBpZiAoUHJvbWlzZUltcGwgPT09IHZvaWQgMCkgUHJvbWlzZUltcGwgPSBQcm9taXNlO1xuXG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpLFxuICAgICAgUHJvbWlzZUltcGxcbiAgICApO1xuXG4gICAgcmV0dXJuIGV4cG9ydHMuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnRleHQubWV0aG9kID0gbWV0aG9kO1xuICAgICAgY29udGV4dC5hcmcgPSBhcmc7XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIHZhciBkZWxlZ2F0ZVJlc3VsdCA9IG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuICAgICAgICAgIGlmIChkZWxlZ2F0ZVJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKGRlbGVnYXRlUmVzdWx0ID09PSBDb250aW51ZVNlbnRpbmVsKSBjb250aW51ZTtcbiAgICAgICAgICAgIHJldHVybiBkZWxlZ2F0ZVJlc3VsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29udGV4dC5tZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgLy8gU2V0dGluZyBjb250ZXh0Ll9zZW50IGZvciBsZWdhY3kgc3VwcG9ydCBvZiBCYWJlbCdzXG4gICAgICAgICAgLy8gZnVuY3Rpb24uc2VudCBpbXBsZW1lbnRhdGlvbi5cbiAgICAgICAgICBjb250ZXh0LnNlbnQgPSBjb250ZXh0Ll9zZW50ID0gY29udGV4dC5hcmc7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgY29udGV4dC5hcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihjb250ZXh0LmFyZyk7XG5cbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGNvbnRleHQuYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGNvbnRleHQuYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBDYWxsIGRlbGVnYXRlLml0ZXJhdG9yW2NvbnRleHQubWV0aG9kXShjb250ZXh0LmFyZykgYW5kIGhhbmRsZSB0aGVcbiAgLy8gcmVzdWx0LCBlaXRoZXIgYnkgcmV0dXJuaW5nIGEgeyB2YWx1ZSwgZG9uZSB9IHJlc3VsdCBmcm9tIHRoZVxuICAvLyBkZWxlZ2F0ZSBpdGVyYXRvciwgb3IgYnkgbW9kaWZ5aW5nIGNvbnRleHQubWV0aG9kIGFuZCBjb250ZXh0LmFyZyxcbiAgLy8gc2V0dGluZyBjb250ZXh0LmRlbGVnYXRlIHRvIG51bGwsIGFuZCByZXR1cm5pbmcgdGhlIENvbnRpbnVlU2VudGluZWwuXG4gIGZ1bmN0aW9uIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpIHtcbiAgICB2YXIgbWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbY29udGV4dC5tZXRob2RdO1xuICAgIGlmIChtZXRob2QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gQSAudGhyb3cgb3IgLnJldHVybiB3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gLnRocm93XG4gICAgICAvLyBtZXRob2QgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIGlmIChjb250ZXh0Lm1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIC8vIE5vdGU6IFtcInJldHVyblwiXSBtdXN0IGJlIHVzZWQgZm9yIEVTMyBwYXJzaW5nIGNvbXBhdGliaWxpdHkuXG4gICAgICAgIGlmIChkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXSkge1xuICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgY29udGV4dC5tZXRob2QgPSBcInJldHVyblwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG1heWJlSW52b2tlRGVsZWdhdGUoZGVsZWdhdGUsIGNvbnRleHQpO1xuXG4gICAgICAgICAgaWYgKGNvbnRleHQubWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIC8vIElmIG1heWJlSW52b2tlRGVsZWdhdGUoY29udGV4dCkgY2hhbmdlZCBjb250ZXh0Lm1ldGhvZCBmcm9tXG4gICAgICAgICAgICAvLyBcInJldHVyblwiIHRvIFwidGhyb3dcIiwgbGV0IHRoYXQgb3ZlcnJpZGUgdGhlIFR5cGVFcnJvciBiZWxvdy5cbiAgICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICBjb250ZXh0LmFyZyA9IG5ldyBUeXBlRXJyb3IoXG4gICAgICAgICAgXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICd0aHJvdycgbWV0aG9kXCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gobWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgY29udGV4dC5hcmcpO1xuXG4gICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgIGNvbnRleHQubWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgY29udGV4dC5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG5cbiAgICBpZiAoISBpbmZvKSB7XG4gICAgICBjb250ZXh0Lm1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgIGNvbnRleHQuYXJnID0gbmV3IFR5cGVFcnJvcihcIml0ZXJhdG9yIHJlc3VsdCBpcyBub3QgYW4gb2JqZWN0XCIpO1xuICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG5cbiAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAvLyBBc3NpZ24gdGhlIHJlc3VsdCBvZiB0aGUgZmluaXNoZWQgZGVsZWdhdGUgdG8gdGhlIHRlbXBvcmFyeVxuICAgICAgLy8gdmFyaWFibGUgc3BlY2lmaWVkIGJ5IGRlbGVnYXRlLnJlc3VsdE5hbWUgKHNlZSBkZWxlZ2F0ZVlpZWxkKS5cbiAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuXG4gICAgICAvLyBSZXN1bWUgZXhlY3V0aW9uIGF0IHRoZSBkZXNpcmVkIGxvY2F0aW9uIChzZWUgZGVsZWdhdGVZaWVsZCkuXG4gICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuXG4gICAgICAvLyBJZiBjb250ZXh0Lm1ldGhvZCB3YXMgXCJ0aHJvd1wiIGJ1dCB0aGUgZGVsZWdhdGUgaGFuZGxlZCB0aGVcbiAgICAgIC8vIGV4Y2VwdGlvbiwgbGV0IHRoZSBvdXRlciBnZW5lcmF0b3IgcHJvY2VlZCBub3JtYWxseS4gSWZcbiAgICAgIC8vIGNvbnRleHQubWV0aG9kIHdhcyBcIm5leHRcIiwgZm9yZ2V0IGNvbnRleHQuYXJnIHNpbmNlIGl0IGhhcyBiZWVuXG4gICAgICAvLyBcImNvbnN1bWVkXCIgYnkgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yLiBJZiBjb250ZXh0Lm1ldGhvZCB3YXNcbiAgICAgIC8vIFwicmV0dXJuXCIsIGFsbG93IHRoZSBvcmlnaW5hbCAucmV0dXJuIGNhbGwgdG8gY29udGludWUgaW4gdGhlXG4gICAgICAvLyBvdXRlciBnZW5lcmF0b3IuXG4gICAgICBpZiAoY29udGV4dC5tZXRob2QgIT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgY29udGV4dC5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgY29udGV4dC5hcmcgPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmUteWllbGQgdGhlIHJlc3VsdCByZXR1cm5lZCBieSB0aGUgZGVsZWdhdGUgbWV0aG9kLlxuICAgICAgcmV0dXJuIGluZm87XG4gICAgfVxuXG4gICAgLy8gVGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGlzIGZpbmlzaGVkLCBzbyBmb3JnZXQgaXQgYW5kIGNvbnRpbnVlIHdpdGhcbiAgICAvLyB0aGUgb3V0ZXIgZ2VuZXJhdG9yLlxuICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIGRlZmluZShHcCwgdG9TdHJpbmdUYWdTeW1ib2wsIFwiR2VuZXJhdG9yXCIpO1xuXG4gIC8vIEEgR2VuZXJhdG9yIHNob3VsZCBhbHdheXMgcmV0dXJuIGl0c2VsZiBhcyB0aGUgaXRlcmF0b3Igb2JqZWN0IHdoZW4gdGhlXG4gIC8vIEBAaXRlcmF0b3IgZnVuY3Rpb24gaXMgY2FsbGVkIG9uIGl0LiBTb21lIGJyb3dzZXJzJyBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlXG4gIC8vIGl0ZXJhdG9yIHByb3RvdHlwZSBjaGFpbiBpbmNvcnJlY3RseSBpbXBsZW1lbnQgdGhpcywgY2F1c2luZyB0aGUgR2VuZXJhdG9yXG4gIC8vIG9iamVjdCB0byBub3QgYmUgcmV0dXJuZWQgZnJvbSB0aGlzIGNhbGwuIFRoaXMgZW5zdXJlcyB0aGF0IGRvZXNuJ3QgaGFwcGVuLlxuICAvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL2lzc3Vlcy8yNzQgZm9yIG1vcmUgZGV0YWlscy5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIGV4cG9ydHMua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBleHBvcnRzLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy5tZXRob2QgPSBcIm5leHRcIjtcbiAgICAgIHRoaXMuYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG5cbiAgICAgICAgaWYgKGNhdWdodCkge1xuICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICBjb250ZXh0Lm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGNvbnRleHQuYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhIGNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gdGhpcy5hcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm1ldGhvZCA9IFwicmV0dXJuXCI7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIGlmICh0aGlzLm1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICB0aGlzLmFyZyA9IHVuZGVmaW5lZDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xuXG4gIC8vIFJlZ2FyZGxlc3Mgb2Ygd2hldGhlciB0aGlzIHNjcmlwdCBpcyBleGVjdXRpbmcgYXMgYSBDb21tb25KUyBtb2R1bGVcbiAgLy8gb3Igbm90LCByZXR1cm4gdGhlIHJ1bnRpbWUgb2JqZWN0IHNvIHRoYXQgd2UgY2FuIGRlY2xhcmUgdGhlIHZhcmlhYmxlXG4gIC8vIHJlZ2VuZXJhdG9yUnVudGltZSBpbiB0aGUgb3V0ZXIgc2NvcGUsIHdoaWNoIGFsbG93cyB0aGlzIG1vZHVsZSB0byBiZVxuICAvLyBpbmplY3RlZCBlYXNpbHkgYnkgYGJpbi9yZWdlbmVyYXRvciAtLWluY2x1ZGUtcnVudGltZSBzY3JpcHQuanNgLlxuICByZXR1cm4gZXhwb3J0cztcblxufShcbiAgLy8gSWYgdGhpcyBzY3JpcHQgaXMgZXhlY3V0aW5nIGFzIGEgQ29tbW9uSlMgbW9kdWxlLCB1c2UgbW9kdWxlLmV4cG9ydHNcbiAgLy8gYXMgdGhlIHJlZ2VuZXJhdG9yUnVudGltZSBuYW1lc3BhY2UuIE90aGVyd2lzZSBjcmVhdGUgYSBuZXcgZW1wdHlcbiAgLy8gb2JqZWN0LiBFaXRoZXIgd2F5LCB0aGUgcmVzdWx0aW5nIG9iamVjdCB3aWxsIGJlIHVzZWQgdG8gaW5pdGlhbGl6ZVxuICAvLyB0aGUgcmVnZW5lcmF0b3JSdW50aW1lIHZhcmlhYmxlIGF0IHRoZSB0b3Agb2YgdGhpcyBmaWxlLlxuICB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiID8gbW9kdWxlLmV4cG9ydHMgOiB7fVxuKSk7XG5cbnRyeSB7XG4gIHJlZ2VuZXJhdG9yUnVudGltZSA9IHJ1bnRpbWU7XG59IGNhdGNoIChhY2NpZGVudGFsU3RyaWN0TW9kZSkge1xuICAvLyBUaGlzIG1vZHVsZSBzaG91bGQgbm90IGJlIHJ1bm5pbmcgaW4gc3RyaWN0IG1vZGUsIHNvIHRoZSBhYm92ZVxuICAvLyBhc3NpZ25tZW50IHNob3VsZCBhbHdheXMgd29yayB1bmxlc3Mgc29tZXRoaW5nIGlzIG1pc2NvbmZpZ3VyZWQuIEp1c3RcbiAgLy8gaW4gY2FzZSBydW50aW1lLmpzIGFjY2lkZW50YWxseSBydW5zIGluIHN0cmljdCBtb2RlLCB3ZSBjYW4gZXNjYXBlXG4gIC8vIHN0cmljdCBtb2RlIHVzaW5nIGEgZ2xvYmFsIEZ1bmN0aW9uIGNhbGwuIFRoaXMgY291bGQgY29uY2VpdmFibHkgZmFpbFxuICAvLyBpZiBhIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5IGZvcmJpZHMgdXNpbmcgRnVuY3Rpb24sIGJ1dCBpbiB0aGF0IGNhc2VcbiAgLy8gdGhlIHByb3BlciBzb2x1dGlvbiBpcyB0byBmaXggdGhlIGFjY2lkZW50YWwgc3RyaWN0IG1vZGUgcHJvYmxlbS4gSWZcbiAgLy8geW91J3ZlIG1pc2NvbmZpZ3VyZWQgeW91ciBidW5kbGVyIHRvIGZvcmNlIHN0cmljdCBtb2RlIGFuZCBhcHBsaWVkIGFcbiAgLy8gQ1NQIHRvIGZvcmJpZCBGdW5jdGlvbiwgYW5kIHlvdSdyZSBub3Qgd2lsbGluZyB0byBmaXggZWl0aGVyIG9mIHRob3NlXG4gIC8vIHByb2JsZW1zLCBwbGVhc2UgZGV0YWlsIHlvdXIgdW5pcXVlIHByZWRpY2FtZW50IGluIGEgR2l0SHViIGlzc3VlLlxuICBGdW5jdGlvbihcInJcIiwgXCJyZWdlbmVyYXRvclJ1bnRpbWUgPSByXCIpKHJ1bnRpbWUpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==