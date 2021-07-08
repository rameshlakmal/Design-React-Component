self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/SpeakerAdd.js":
/*!**************************************!*\
  !*** ./src/components/SpeakerAdd.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _withAuth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./withAuth */ "./src/components/withAuth.js");
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\Ramesh\\Desktop\\React-Component\\src\\components\\SpeakerAdd.js";



function SpeakerAdd(_ref) {
  var eventYear = _ref.eventYear,
      insertRecord = _ref.insertRecord,
      loggedInUser = _ref.loggedInUser;
  if (!loggedInUser || loggedInUser.length === 0) return null;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
    href: "#",
    className: "addSes",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("i", {
      onClick: function onClick(e) {
        e.preventDefault();
        var firstLast = window.prompt("Enter first and last name:", "");
        var firstLastArray = firstLast.split(" ");
        insertRecord({
          id: "99999",
          first: firstLastArray[0],
          last: firstLastArray[1],
          bio: "Bio not entered yet",
          sessions: [{
            id: "88888",
            title: "New Session For ".concat(firstLastArray[0]),
            room: {
              name: "Main Ball Room"
            },
            eventYear: eventYear
          }]
        });
      },
      children: "+"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 5
  }, this);
}

_c = SpeakerAdd;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = (0,_withAuth__WEBPACK_IMPORTED_MODULE_2__.default)(SpeakerAdd));

var _c, _c2;

$RefreshReg$(_c, "SpeakerAdd");
$RefreshReg$(_c2, "%default%");

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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlckFkZC5qcyJdLCJuYW1lcyI6WyJTcGVha2VyQWRkIiwiZXZlbnRZZWFyIiwiaW5zZXJ0UmVjb3JkIiwibG9nZ2VkSW5Vc2VyIiwibGVuZ3RoIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZmlyc3RMYXN0Iiwid2luZG93IiwicHJvbXB0IiwiZmlyc3RMYXN0QXJyYXkiLCJzcGxpdCIsImlkIiwiZmlyc3QiLCJsYXN0IiwiYmlvIiwic2Vzc2lvbnMiLCJ0aXRsZSIsInJvb20iLCJuYW1lIiwid2l0aEF1dGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsVUFBVCxPQUErRDtBQUFBLE1BQXpDQyxTQUF5QyxRQUF6Q0EsU0FBeUM7QUFBQSxNQUE5QkMsWUFBOEIsUUFBOUJBLFlBQThCO0FBQUEsTUFBaEJDLFlBQWdCLFFBQWhCQSxZQUFnQjtBQUU3RCxNQUFJLENBQUNBLFlBQUQsSUFBaUJBLFlBQVksQ0FBQ0MsTUFBYixLQUF3QixDQUE3QyxFQUFnRCxPQUFPLElBQVA7QUFFaEQsc0JBQ0U7QUFBRyxRQUFJLEVBQUMsR0FBUjtBQUFZLGFBQVMsRUFBQyxRQUF0QjtBQUFBLDJCQUNFO0FBQ0UsYUFBTyxFQUFFLGlCQUFDQyxDQUFELEVBQU87QUFDZEEsU0FBQyxDQUFDQyxjQUFGO0FBQ0EsWUFBTUMsU0FBUyxHQUFHQyxNQUFNLENBQUNDLE1BQVAsQ0FBYyw0QkFBZCxFQUE0QyxFQUE1QyxDQUFsQjtBQUNBLFlBQU1DLGNBQWMsR0FBR0gsU0FBUyxDQUFDSSxLQUFWLENBQWdCLEdBQWhCLENBQXZCO0FBQ0FULG9CQUFZLENBQUM7QUFDWFUsWUFBRSxFQUFFLE9BRE87QUFFWEMsZUFBSyxFQUFFSCxjQUFjLENBQUMsQ0FBRCxDQUZWO0FBR1hJLGNBQUksRUFBRUosY0FBYyxDQUFDLENBQUQsQ0FIVDtBQUlYSyxhQUFHLEVBQUUscUJBSk07QUFLWEMsa0JBQVEsRUFBRSxDQUNSO0FBQ0VKLGNBQUUsRUFBRSxPQUROO0FBRUVLLGlCQUFLLDRCQUFxQlAsY0FBYyxDQUFDLENBQUQsQ0FBbkMsQ0FGUDtBQUdFUSxnQkFBSSxFQUFFO0FBQ0pDLGtCQUFJLEVBQUU7QUFERixhQUhSO0FBTUVsQixxQkFBUyxFQUFUQTtBQU5GLFdBRFE7QUFMQyxTQUFELENBQVo7QUFnQkQsT0FyQkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE2QkQ7O0tBakNRRCxVO0FBbUNULCtEQUFlLE1BQUFvQixrREFBUSxDQUFDcEIsVUFBRCxDQUF2QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4zYzgzZWRjMmVjZTk3MWE3NDBlOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHdpdGhBdXRoIGZyb20gXCIuL3dpdGhBdXRoXCI7XG5cbmZ1bmN0aW9uIFNwZWFrZXJBZGQoeyBldmVudFllYXIsIGluc2VydFJlY29yZCwgbG9nZ2VkSW5Vc2VyIH0pIHtcblxuICBpZiAoIWxvZ2dlZEluVXNlciB8fCBsb2dnZWRJblVzZXIubGVuZ3RoID09PSAwKSByZXR1cm4gbnVsbDtcblxuICByZXR1cm4gKFxuICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiYWRkU2VzXCI+XG4gICAgICA8aVxuICAgICAgICBvbkNsaWNrPXsoZSkgPT4ge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBjb25zdCBmaXJzdExhc3QgPSB3aW5kb3cucHJvbXB0KFwiRW50ZXIgZmlyc3QgYW5kIGxhc3QgbmFtZTpcIiwgXCJcIik7XG4gICAgICAgICAgY29uc3QgZmlyc3RMYXN0QXJyYXkgPSBmaXJzdExhc3Quc3BsaXQoXCIgXCIpO1xuICAgICAgICAgIGluc2VydFJlY29yZCh7XG4gICAgICAgICAgICBpZDogXCI5OTk5OVwiLFxuICAgICAgICAgICAgZmlyc3Q6IGZpcnN0TGFzdEFycmF5WzBdLFxuICAgICAgICAgICAgbGFzdDogZmlyc3RMYXN0QXJyYXlbMV0sXG4gICAgICAgICAgICBiaW86IFwiQmlvIG5vdCBlbnRlcmVkIHlldFwiLFxuICAgICAgICAgICAgc2Vzc2lvbnM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOiBcIjg4ODg4XCIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IGBOZXcgU2Vzc2lvbiBGb3IgJHtmaXJzdExhc3RBcnJheVswXX1gLFxuICAgICAgICAgICAgICAgIHJvb206IHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwiTWFpbiBCYWxsIFJvb21cIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV2ZW50WWVhcixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgfSk7XG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgICtcbiAgICAgIDwvaT5cbiAgICA8L2E+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhBdXRoKFNwZWFrZXJBZGQpOyJdLCJzb3VyY2VSb290IjoiIn0=