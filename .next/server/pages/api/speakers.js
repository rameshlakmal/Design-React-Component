(function() {
var exports = {};
exports.id = 59;
exports.ids = [59];
exports.modules = {

/***/ 192:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ handler; }
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(622);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(747);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
//import { data } from '../../../SpeakerData';



const {
  promisify
} = __webpack_require__(669);

const readFile = promisify((fs__WEBPACK_IMPORTED_MODULE_1___default().readFile));

const delay = ms => new Promise(resolve => {
  setTimeout(resolve, ms);
});

async function handler(req, res) {
  //res.status(200).send(JSON.stringify(data, null, 2));
  const jsonFile = path__WEBPACK_IMPORTED_MODULE_0___default().resolve("./", "db.json");

  try {
    const readFileData = await readFile(jsonFile);
    await delay(1000);
    const speakers = JSON.parse(readFileData).speakers;

    if (speakers) {
      res.setHeader("Content-Type", "application/json");
      res.status(200).send(JSON.stringify(speakers, null, 2));
      console.log("GET /api/speakers status: 200");
    }
  } catch (e) {
    console.log("/api/speakers error", e);
    res.status(404).send("File Not Found on server");
  }
}

/***/ }),

/***/ 747:
/***/ (function(module) {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ 622:
/***/ (function(module) {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ 669:
/***/ (function(module) {

"use strict";
module.exports = require("util");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(192));
module.exports = __webpack_exports__;

})();