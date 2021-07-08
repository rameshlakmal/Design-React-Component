self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/contexts/SpeakerFilterContext.js":
/*!**********************************************!*\
  !*** ./src/contexts/SpeakerFilterContext.js ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SpeakerFilterContext": function() { return /* binding */ SpeakerFilterContext; },
/* harmony export */   "SpeakerFilterProvider": function() { return /* binding */ SpeakerFilterProvider; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useSpeakerFilter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useSpeakerFilter */ "./src/hooks/useSpeakerFilter.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Ramesh\\Desktop\\React-Component\\src\\contexts\\SpeakerFilterContext.js",
    _s = $RefreshSig$();



var SpeakerFilterContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();

function SpeakerFilterProvider(_ref) {
  _s();

  var children = _ref.children,
      _ref$startingShowSess = _ref.startingShowSessions,
      startingShowSessions = _ref$startingShowSess === void 0 ? false : _ref$startingShowSess,
      _ref$startingEventYea = _ref.startingEventYear,
      startingEventYear = _ref$startingEventYea === void 0 ? "2019" : _ref$startingEventYea;

  var _useSpeakerFilter = (0,_hooks_useSpeakerFilter__WEBPACK_IMPORTED_MODULE_2__.default)(startingShowSessions, startingEventYear),
      showSessions = _useSpeakerFilter.showSessions,
      setShowSessions = _useSpeakerFilter.setShowSessions,
      eventYear = _useSpeakerFilter.eventYear,
      setEventYear = _useSpeakerFilter.setEventYear,
      searchQuery = _useSpeakerFilter.searchQuery,
      setSearchQuery = _useSpeakerFilter.setSearchQuery,
      EVENT_YEARS = _useSpeakerFilter.EVENT_YEARS;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SpeakerFilterContext.Provider, {
    value: {
      showSessions: showSessions,
      setShowSessions: setShowSessions,
      eventYear: eventYear,
      setEventYear: setEventYear,
      searchQuery: searchQuery,
      setSearchQuery: setSearchQuery,
      EVENT_YEARS: EVENT_YEARS
    },
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 9
  }, this);
}

_s(SpeakerFilterProvider, "GESko6uDuQLCjH/bro995pNeHP8=", false, function () {
  return [_hooks_useSpeakerFilter__WEBPACK_IMPORTED_MODULE_2__.default];
});

_c = SpeakerFilterProvider;


var _c;

$RefreshReg$(_c, "SpeakerFilterProvider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL1NwZWFrZXJGaWx0ZXJDb250ZXh0LmpzIl0sIm5hbWVzIjpbIlNwZWFrZXJGaWx0ZXJDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIlNwZWFrZXJGaWx0ZXJQcm92aWRlciIsImNoaWxkcmVuIiwic3RhcnRpbmdTaG93U2Vzc2lvbnMiLCJzdGFydGluZ0V2ZW50WWVhciIsInVzZVNwZWFrZXJGaWx0ZXIiLCJzaG93U2Vzc2lvbnMiLCJzZXRTaG93U2Vzc2lvbnMiLCJldmVudFllYXIiLCJzZXRFdmVudFllYXIiLCJzZWFyY2hRdWVyeSIsInNldFNlYXJjaFF1ZXJ5IiwiRVZFTlRfWUVBUlMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUEsSUFBTUEsb0JBQW9CLGdCQUFHQyxvREFBYSxFQUExQzs7QUFFQSxTQUFTQyxxQkFBVCxPQUlHO0FBQUE7O0FBQUEsTUFIQ0MsUUFHRCxRQUhDQSxRQUdEO0FBQUEsbUNBRkNDLG9CQUVEO0FBQUEsTUFGQ0Esb0JBRUQsc0NBRndCLEtBRXhCO0FBQUEsbUNBRENDLGlCQUNEO0FBQUEsTUFEQ0EsaUJBQ0Qsc0NBRHFCLE1BQ3JCOztBQUFBLDBCQVNLQyxnRUFBZ0IsQ0FBQ0Ysb0JBQUQsRUFBdUJDLGlCQUF2QixDQVRyQjtBQUFBLE1BRUtFLFlBRkwscUJBRUtBLFlBRkw7QUFBQSxNQUdLQyxlQUhMLHFCQUdLQSxlQUhMO0FBQUEsTUFJS0MsU0FKTCxxQkFJS0EsU0FKTDtBQUFBLE1BS0tDLFlBTEwscUJBS0tBLFlBTEw7QUFBQSxNQU1LQyxXQU5MLHFCQU1LQSxXQU5MO0FBQUEsTUFPS0MsY0FQTCxxQkFPS0EsY0FQTDtBQUFBLE1BUUtDLFdBUkwscUJBUUtBLFdBUkw7O0FBV0Msc0JBQ0ksOERBQUMsb0JBQUQsQ0FBc0IsUUFBdEI7QUFDSSxTQUFLLEVBQUU7QUFDSE4sa0JBQVksRUFBWkEsWUFERztBQUVIQyxxQkFBZSxFQUFmQSxlQUZHO0FBR0hDLGVBQVMsRUFBVEEsU0FIRztBQUlIQyxrQkFBWSxFQUFaQSxZQUpHO0FBS0hDLGlCQUFXLEVBQVhBLFdBTEc7QUFNSEMsb0JBQWMsRUFBZEEsY0FORztBQU9IQyxpQkFBVyxFQUFYQTtBQVBHLEtBRFg7QUFBQSxjQVdLVjtBQVhMO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWVIOztHQTlCUUQscUI7VUFhREksNEQ7OztLQWJDSixxQjtBQWdDVCIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5kZTgwOGY4ZDA3MGJlZGQ3MDY0OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHVzZVNwZWFrZXJGaWx0ZXIgZnJvbSBcIi4uL2hvb2tzL3VzZVNwZWFrZXJGaWx0ZXJcIjtcclxuXHJcbmNvbnN0IFNwZWFrZXJGaWx0ZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xyXG5cclxuZnVuY3Rpb24gU3BlYWtlckZpbHRlclByb3ZpZGVyKHtcclxuICAgIGNoaWxkcmVuLFxyXG4gICAgc3RhcnRpbmdTaG93U2Vzc2lvbnMgPSBmYWxzZSxcclxuICAgIHN0YXJ0aW5nRXZlbnRZZWFyID0gXCIyMDE5XCIsXHJcbn0pIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBzaG93U2Vzc2lvbnMsXHJcbiAgICAgICAgc2V0U2hvd1Nlc3Npb25zLFxyXG4gICAgICAgIGV2ZW50WWVhcixcclxuICAgICAgICBzZXRFdmVudFllYXIsXHJcbiAgICAgICAgc2VhcmNoUXVlcnksXHJcbiAgICAgICAgc2V0U2VhcmNoUXVlcnksXHJcbiAgICAgICAgRVZFTlRfWUVBUlMsXHJcbiAgICB9ID0gdXNlU3BlYWtlckZpbHRlcihzdGFydGluZ1Nob3dTZXNzaW9ucywgc3RhcnRpbmdFdmVudFllYXIpO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPFNwZWFrZXJGaWx0ZXJDb250ZXh0LlByb3ZpZGVyXHJcbiAgICAgICAgICAgIHZhbHVlPXt7XHJcbiAgICAgICAgICAgICAgICBzaG93U2Vzc2lvbnMsXHJcbiAgICAgICAgICAgICAgICBzZXRTaG93U2Vzc2lvbnMsXHJcbiAgICAgICAgICAgICAgICBldmVudFllYXIsXHJcbiAgICAgICAgICAgICAgICBzZXRFdmVudFllYXIsXHJcbiAgICAgICAgICAgICAgICBzZWFyY2hRdWVyeSxcclxuICAgICAgICAgICAgICAgIHNldFNlYXJjaFF1ZXJ5LFxyXG4gICAgICAgICAgICAgICAgRVZFTlRfWUVBUlMsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPC9TcGVha2VyRmlsdGVyQ29udGV4dC5Qcm92aWRlcj5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCB7IFNwZWFrZXJGaWx0ZXJDb250ZXh0LCBTcGVha2VyRmlsdGVyUHJvdmlkZXIgfTsiXSwic291cmNlUm9vdCI6IiJ9