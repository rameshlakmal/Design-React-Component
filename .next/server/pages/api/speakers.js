(function() {
var exports = {};
exports.id = "pages/api/speakers";
exports.ids = ["pages/api/speakers"];
exports.modules = {

/***/ "./pages/api/speakers/index.js":
/*!*************************************!*\
  !*** ./pages/api/speakers/index.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ handler; }
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
//import { data } from '../../../SpeakerData';



const {
  promisify
} = __webpack_require__(/*! util */ "util");

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

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ (function(module) {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ (function(module) {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
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
var __webpack_exports__ = (__webpack_exec__("./pages/api/speakers/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9EZXNpZ25SZWFjdENvbXBvbmVudHMvLi9wYWdlcy9hcGkvc3BlYWtlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vRGVzaWduUmVhY3RDb21wb25lbnRzL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly9EZXNpZ25SZWFjdENvbXBvbmVudHMvZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vRGVzaWduUmVhY3RDb21wb25lbnRzL2V4dGVybmFsIFwidXRpbFwiIl0sIm5hbWVzIjpbInByb21pc2lmeSIsInJlcXVpcmUiLCJyZWFkRmlsZSIsImZzIiwiZGVsYXkiLCJtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJqc29uRmlsZSIsInBhdGgiLCJyZWFkRmlsZURhdGEiLCJzcGVha2VycyIsIkpTT04iLCJwYXJzZSIsInNldEhlYWRlciIsInN0YXR1cyIsInNlbmQiLCJzdHJpbmdpZnkiLCJjb25zb2xlIiwibG9nIiwiZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBLE1BQU07QUFBRUE7QUFBRixJQUFnQkMsbUJBQU8sQ0FBQyxrQkFBRCxDQUE3Qjs7QUFDQSxNQUFNQyxRQUFRLEdBQUdGLFNBQVMsQ0FBQ0csb0RBQUQsQ0FBMUI7O0FBQ0EsTUFBTUMsS0FBSyxHQUFJQyxFQUFELElBQ1osSUFBSUMsT0FBSixDQUFhQyxPQUFELElBQWE7QUFDdkJDLFlBQVUsQ0FBQ0QsT0FBRCxFQUFVRixFQUFWLENBQVY7QUFDRCxDQUZELENBREY7O0FBS2UsZUFBZUksT0FBZixDQUF1QkMsR0FBdkIsRUFBNEJDLEdBQTVCLEVBQWlDO0FBQzlDO0FBRUEsUUFBTUMsUUFBUSxHQUFHQyxtREFBQSxDQUFhLElBQWIsRUFBbUIsU0FBbkIsQ0FBakI7O0FBQ0EsTUFBSTtBQUNGLFVBQU1DLFlBQVksR0FBRyxNQUFNWixRQUFRLENBQUNVLFFBQUQsQ0FBbkM7QUFDQSxVQUFNUixLQUFLLENBQUMsSUFBRCxDQUFYO0FBQ0EsVUFBTVcsUUFBUSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsWUFBWCxFQUF5QkMsUUFBMUM7O0FBQ0EsUUFBSUEsUUFBSixFQUFjO0FBQ1pKLFNBQUcsQ0FBQ08sU0FBSixDQUFjLGNBQWQsRUFBOEIsa0JBQTlCO0FBQ0FQLFNBQUcsQ0FBQ1EsTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCSixJQUFJLENBQUNLLFNBQUwsQ0FBZU4sUUFBZixFQUF5QixJQUF6QixFQUErQixDQUEvQixDQUFyQjtBQUNBTyxhQUFPLENBQUNDLEdBQVIsQ0FBWSwrQkFBWjtBQUNEO0FBQ0YsR0FURCxDQVNFLE9BQU9DLENBQVAsRUFBVTtBQUNWRixXQUFPLENBQUNDLEdBQVIsQ0FBWSxxQkFBWixFQUFtQ0MsQ0FBbkM7QUFDQWIsT0FBRyxDQUFDUSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUIsMEJBQXJCO0FBQ0Q7QUFDRixDOzs7Ozs7Ozs7OztBQzVCRCxnQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9hcGkvc3BlYWtlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCB7IGRhdGEgfSBmcm9tICcuLi8uLi8uLi9TcGVha2VyRGF0YSc7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuXG5jb25zdCB7IHByb21pc2lmeSB9ID0gcmVxdWlyZShcInV0aWxcIik7XG5jb25zdCByZWFkRmlsZSA9IHByb21pc2lmeShmcy5yZWFkRmlsZSk7XG5jb25zdCBkZWxheSA9IChtcykgPT5cbiAgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICBzZXRUaW1lb3V0KHJlc29sdmUsIG1zKTtcbiAgfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgLy9yZXMuc3RhdHVzKDIwMCkuc2VuZChKU09OLnN0cmluZ2lmeShkYXRhLCBudWxsLCAyKSk7XG5cbiAgY29uc3QganNvbkZpbGUgPSBwYXRoLnJlc29sdmUoXCIuL1wiLCBcImRiLmpzb25cIik7XG4gIHRyeSB7XG4gICAgY29uc3QgcmVhZEZpbGVEYXRhID0gYXdhaXQgcmVhZEZpbGUoanNvbkZpbGUpO1xuICAgIGF3YWl0IGRlbGF5KDEwMDApO1xuICAgIGNvbnN0IHNwZWFrZXJzID0gSlNPTi5wYXJzZShyZWFkRmlsZURhdGEpLnNwZWFrZXJzO1xuICAgIGlmIChzcGVha2Vycykge1xuICAgICAgcmVzLnNldEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChKU09OLnN0cmluZ2lmeShzcGVha2VycywgbnVsbCwgMikpO1xuICAgICAgY29uc29sZS5sb2coXCJHRVQgL2FwaS9zcGVha2VycyBzdGF0dXM6IDIwMFwiKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjb25zb2xlLmxvZyhcIi9hcGkvc3BlYWtlcnMgZXJyb3JcIiwgZSk7XG4gICAgcmVzLnN0YXR1cyg0MDQpLnNlbmQoXCJGaWxlIE5vdCBGb3VuZCBvbiBzZXJ2ZXJcIik7XG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dGlsXCIpOzsiXSwic291cmNlUm9vdCI6IiJ9