self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/SpeakersList.js":
/*!****************************************!*\
  !*** ./src/components/SpeakersList.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Speaker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Speaker */ "./src/components/Speaker.js");
/* harmony import */ var react_placeholder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-placeholder */ "./node_modules/react-placeholder/lib/index.js");
/* harmony import */ var _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../hooks/useRequestDelay */ "./src/hooks/useRequestDelay.js");
/* harmony import */ var _SpeakerData__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../SpeakerData */ "./SpeakerData.js");
/* harmony import */ var _contexts_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contexts/SpeakerFilterContext */ "./src/contexts/SpeakerFilterContext.js");
/* harmony import */ var _SpeakerAdd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SpeakerAdd */ "./src/components/SpeakerAdd.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Ramesh\\Desktop\\React-Component\\src\\components\\SpeakersList.js",
    _s = $RefreshSig$();









function SpeakersList() {
  _s();

  var _useRequestRest = (0,_hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__.default)(),
      speakersData = _useRequestRest.data,
      requestStatus = _useRequestRest.requestStatus,
      error = _useRequestRest.error,
      updateRecord = _useRequestRest.updateRecord,
      insertRecord = _useRequestRest.insertRecord,
      deleteRecord = _useRequestRest.deleteRecord;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_SpeakerFilterContext__WEBPACK_IMPORTED_MODULE_6__.SpeakerFilterContext),
      searchQuery = _useContext.searchQuery,
      eventYear = _useContext.eventYear;

  if (requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__.REQUEST_STATUS.FAILURE) {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "text-danger",
      children: ["ERROR: ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("b", {
        children: ["loading Speaker Data Failed ", error]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 24
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, this);
  } //if (isLoading === true) return <div>Loading...</div>


  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "container speakers-list",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_placeholder__WEBPACK_IMPORTED_MODULE_3__.default, {
      type: "media",
      rows: 15,
      className: "speakerslist-placeholder",
      ready: requestStatus === _hooks_useRequestDelay__WEBPACK_IMPORTED_MODULE_4__.REQUEST_STATUS.SUCCESS,
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SpeakerAdd__WEBPACK_IMPORTED_MODULE_7__.default, {
        eventYear: eventYear,
        insertRecord: insertRecord
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "row",
        children: speakersData.filter(function (speaker) {
          return speaker.first.toLowerCase().includes(searchQuery) || speaker.last.toLowerCase().includes(searchQuery);
        }).filter(function (speaker) {
          return speaker.sessions.find(function (session) {
            return session.eventYear === eventYear;
          });
        }).map(function (speaker) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Speaker__WEBPACK_IMPORTED_MODULE_2__.default, {
            speaker: speaker,
            updateRecord: updateRecord,
            insertRecord: insertRecord,
            deleteRecord: deleteRecord
          }, speaker.id, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 33
          }, this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 9
  }, this);
}

_s(SpeakersList, "r4tj3Q75I6irP73xAoIOBG2GIBw=", false, function () {
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnNMaXN0LmpzIl0sIm5hbWVzIjpbIlNwZWFrZXJzTGlzdCIsInVzZVJlcXVlc3RSZXN0Iiwic3BlYWtlcnNEYXRhIiwiZGF0YSIsInJlcXVlc3RTdGF0dXMiLCJlcnJvciIsInVwZGF0ZVJlY29yZCIsImluc2VydFJlY29yZCIsImRlbGV0ZVJlY29yZCIsInVzZUNvbnRleHQiLCJTcGVha2VyRmlsdGVyQ29udGV4dCIsInNlYXJjaFF1ZXJ5IiwiZXZlbnRZZWFyIiwiUkVRVUVTVF9TVEFUVVMiLCJmaWx0ZXIiLCJzcGVha2VyIiwiZmlyc3QiLCJ0b0xvd2VyQ2FzZSIsImluY2x1ZGVzIiwibGFzdCIsInNlc3Npb25zIiwiZmluZCIsInNlc3Npb24iLCJtYXAiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxZQUFULEdBQXdCO0FBQUE7O0FBQUEsd0JBUWhCQywrREFBYyxFQVJFO0FBQUEsTUFFVkMsWUFGVSxtQkFFaEJDLElBRmdCO0FBQUEsTUFHaEJDLGFBSGdCLG1CQUdoQkEsYUFIZ0I7QUFBQSxNQUloQkMsS0FKZ0IsbUJBSWhCQSxLQUpnQjtBQUFBLE1BS2hCQyxZQUxnQixtQkFLaEJBLFlBTGdCO0FBQUEsTUFNaEJDLFlBTmdCLG1CQU1oQkEsWUFOZ0I7QUFBQSxNQU9oQkMsWUFQZ0IsbUJBT2hCQSxZQVBnQjs7QUFBQSxvQkFVZUMsaURBQVUsQ0FBQ0MsZ0ZBQUQsQ0FWekI7QUFBQSxNQVVaQyxXQVZZLGVBVVpBLFdBVlk7QUFBQSxNQVVDQyxTQVZELGVBVUNBLFNBVkQ7O0FBWXBCLE1BQUlSLGFBQWEsS0FBS1MsMEVBQXRCLEVBQThDO0FBQzFDLHdCQUNJO0FBQUssZUFBUyxFQUFDLGFBQWY7QUFBQSx5Q0FDVztBQUFBLG1EQUFnQ1IsS0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREo7QUFLSCxHQWxCbUIsQ0FvQnBCOzs7QUFFQSxzQkFDSTtBQUFLLGFBQVMsRUFBQyx5QkFBZjtBQUFBLDJCQUNJLDhEQUFDLHNEQUFEO0FBQ0ksVUFBSSxFQUFDLE9BRFQ7QUFFSSxVQUFJLEVBQUUsRUFGVjtBQUdJLGVBQVMsRUFBQywwQkFIZDtBQUlJLFdBQUssRUFBRUQsYUFBYSxLQUFLUywwRUFKN0I7QUFBQSw4QkFNSSw4REFBQyxnREFBRDtBQUFZLGlCQUFTLEVBQUVELFNBQXZCO0FBQWtDLG9CQUFZLEVBQUVMO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FOSixlQU9JO0FBQUssaUJBQVMsRUFBQyxLQUFmO0FBQUEsa0JBQ0tMLFlBQVksQ0FDUlksTUFESixDQUNXLFVBQVVDLE9BQVYsRUFBbUI7QUFDdkIsaUJBQ0lBLE9BQU8sQ0FBQ0MsS0FBUixDQUFjQyxXQUFkLEdBQTRCQyxRQUE1QixDQUFxQ1AsV0FBckMsS0FDQUksT0FBTyxDQUFDSSxJQUFSLENBQWFGLFdBQWIsR0FBMkJDLFFBQTNCLENBQW9DUCxXQUFwQyxDQUZKO0FBSUgsU0FOSixFQU9JRyxNQVBKLENBT1csVUFBVUMsT0FBVixFQUFtQjtBQUN2QixpQkFBT0EsT0FBTyxDQUFDSyxRQUFSLENBQWlCQyxJQUFqQixDQUFzQixVQUFDQyxPQUFELEVBQWE7QUFDdEMsbUJBQU9BLE9BQU8sQ0FBQ1YsU0FBUixLQUFzQkEsU0FBN0I7QUFDSCxXQUZNLENBQVA7QUFHSCxTQVhKLEVBWUlXLEdBWkosQ0FZUSxVQUFVUixPQUFWLEVBQW1CO0FBQ3BCLDhCQUNJLDhEQUFDLDZDQUFEO0FBRUksbUJBQU8sRUFBRUEsT0FGYjtBQUdJLHdCQUFZLEVBQUVULFlBSGxCO0FBSUksd0JBQVksRUFBRUMsWUFKbEI7QUFLSSx3QkFBWSxFQUFFQztBQUxsQixhQUNTTyxPQUFPLENBQUNTLEVBRGpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREo7QUFTSCxTQXRCSjtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FQSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFxQ0g7O0dBM0RReEIsWTtVQVFEQywyRDs7O0tBUkNELFk7QUE2RFQsK0RBQWVBLFlBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDZlZTY2ZGZmNjExYzZmY2ZjNTYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNwZWFrZXIgZnJvbSBcIi4vU3BlYWtlclwiO1xyXG5pbXBvcnQgUmVhY3RQbGFjZUhvbGRlciBmcm9tIFwicmVhY3QtcGxhY2Vob2xkZXJcIjtcclxuaW1wb3J0IHVzZVJlcXVlc3RSZXN0LCB7IFJFUVVFU1RfU1RBVFVTIH0gZnJvbSBcIi4uL2hvb2tzL3VzZVJlcXVlc3REZWxheVwiO1xyXG5pbXBvcnQgeyBkYXRhIH0gZnJvbSBcIi4uLy4uL1NwZWFrZXJEYXRhXCI7XHJcbmltcG9ydCB7IFNwZWFrZXJGaWx0ZXJDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRzL1NwZWFrZXJGaWx0ZXJDb250ZXh0XCI7XHJcbmltcG9ydCBTcGVha2VyQWRkIGZyb20gXCIuL1NwZWFrZXJBZGRcIjtcclxuXHJcbmZ1bmN0aW9uIFNwZWFrZXJzTGlzdCgpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBkYXRhOiBzcGVha2Vyc0RhdGEsXHJcbiAgICAgICAgcmVxdWVzdFN0YXR1cyxcclxuICAgICAgICBlcnJvcixcclxuICAgICAgICB1cGRhdGVSZWNvcmQsXHJcbiAgICAgICAgaW5zZXJ0UmVjb3JkLFxyXG4gICAgICAgIGRlbGV0ZVJlY29yZCxcclxuICAgIH0gPSB1c2VSZXF1ZXN0UmVzdCgpO1xyXG5cclxuICAgIGNvbnN0IHsgc2VhcmNoUXVlcnksIGV2ZW50WWVhciB9ID0gdXNlQ29udGV4dChTcGVha2VyRmlsdGVyQ29udGV4dCk7XHJcblxyXG4gICAgaWYgKHJlcXVlc3RTdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLkZBSUxVUkUpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtZGFuZ2VyXCI+XHJcbiAgICAgICAgICAgICAgICBFUlJPUjogPGI+bG9hZGluZyBTcGVha2VyIERhdGEgRmFpbGVkIHtlcnJvcn08L2I+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9pZiAoaXNMb2FkaW5nID09PSB0cnVlKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBzcGVha2Vycy1saXN0XCI+XHJcbiAgICAgICAgICAgIDxSZWFjdFBsYWNlSG9sZGVyXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwibWVkaWFcIlxyXG4gICAgICAgICAgICAgICAgcm93cz17MTV9XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzcGVha2Vyc2xpc3QtcGxhY2Vob2xkZXJcIlxyXG4gICAgICAgICAgICAgICAgcmVhZHk9e3JlcXVlc3RTdGF0dXMgPT09IFJFUVVFU1RfU1RBVFVTLlNVQ0NFU1N9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxTcGVha2VyQWRkIGV2ZW50WWVhcj17ZXZlbnRZZWFyfSBpbnNlcnRSZWNvcmQ9e2luc2VydFJlY29yZH0gLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3NwZWFrZXJzRGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChzcGVha2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWFrZXIuZmlyc3QudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hRdWVyeSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVha2VyLmxhc3QudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyhzZWFyY2hRdWVyeSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKHNwZWFrZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzcGVha2VyLnNlc3Npb25zLmZpbmQoKHNlc3Npb24pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2Vzc2lvbi5ldmVudFllYXIgPT09IGV2ZW50WWVhcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChzcGVha2VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTcGVha2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17c3BlYWtlci5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlYWtlcj17c3BlYWtlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlUmVjb3JkPXt1cGRhdGVSZWNvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydFJlY29yZD17aW5zZXJ0UmVjb3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVSZWNvcmQ9e2RlbGV0ZVJlY29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9SZWFjdFBsYWNlSG9sZGVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU3BlYWtlcnNMaXN0OyJdLCJzb3VyY2VSb290IjoiIn0=