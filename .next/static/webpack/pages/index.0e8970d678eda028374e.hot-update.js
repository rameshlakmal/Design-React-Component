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

  var _useRequestDelay = useRequestDelay(2000, _SpeakerData__WEBPACK_IMPORTED_MODULE_5__.data),
      speakersData = _useRequestDelay.data,
      requestStatus = _useRequestDelay.requestStatus,
      error = _useRequestDelay.error,
      updateRecord = _useRequestDelay.updateRecord,
      insertRecord = _useRequestDelay.insertRecord,
      deleteRecord = _useRequestDelay.deleteRecord;

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

_s(SpeakersList, "HTC6AFafEIG+TWbQ7R8kYHgw6Ls=", true);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvU3BlYWtlcnNMaXN0LmpzIl0sIm5hbWVzIjpbIlNwZWFrZXJzTGlzdCIsInVzZVJlcXVlc3REZWxheSIsImRhdGEiLCJzcGVha2Vyc0RhdGEiLCJyZXF1ZXN0U3RhdHVzIiwiZXJyb3IiLCJ1cGRhdGVSZWNvcmQiLCJpbnNlcnRSZWNvcmQiLCJkZWxldGVSZWNvcmQiLCJ1c2VDb250ZXh0IiwiU3BlYWtlckZpbHRlckNvbnRleHQiLCJzZWFyY2hRdWVyeSIsImV2ZW50WWVhciIsIlJFUVVFU1RfU1RBVFVTIiwiZmlsdGVyIiwic3BlYWtlciIsImZpcnN0IiwidG9Mb3dlckNhc2UiLCJpbmNsdWRlcyIsImxhc3QiLCJzZXNzaW9ucyIsImZpbmQiLCJzZXNzaW9uIiwibWFwIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsWUFBVCxHQUF3QjtBQUFBOztBQUFBLHlCQVFoQkMsZUFBZSxDQUFDLElBQUQsRUFBT0MsOENBQVAsQ0FSQztBQUFBLE1BRVZDLFlBRlUsb0JBRWhCRCxJQUZnQjtBQUFBLE1BR2hCRSxhQUhnQixvQkFHaEJBLGFBSGdCO0FBQUEsTUFJaEJDLEtBSmdCLG9CQUloQkEsS0FKZ0I7QUFBQSxNQUtoQkMsWUFMZ0Isb0JBS2hCQSxZQUxnQjtBQUFBLE1BTWhCQyxZQU5nQixvQkFNaEJBLFlBTmdCO0FBQUEsTUFPaEJDLFlBUGdCLG9CQU9oQkEsWUFQZ0I7O0FBQUEsb0JBVWVDLGlEQUFVLENBQUNDLGdGQUFELENBVnpCO0FBQUEsTUFVWkMsV0FWWSxlQVVaQSxXQVZZO0FBQUEsTUFVQ0MsU0FWRCxlQVVDQSxTQVZEOztBQVlwQixNQUFJUixhQUFhLEtBQUtTLDBFQUF0QixFQUE4QztBQUMxQyx3QkFDSTtBQUFLLGVBQVMsRUFBQyxhQUFmO0FBQUEseUNBQ1c7QUFBQSxtREFBZ0NSLEtBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBS0gsR0FsQm1CLENBb0JwQjs7O0FBRUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUMseUJBQWY7QUFBQSwyQkFDSSw4REFBQyxzREFBRDtBQUNJLFVBQUksRUFBQyxPQURUO0FBRUksVUFBSSxFQUFFLEVBRlY7QUFHSSxlQUFTLEVBQUMsMEJBSGQ7QUFJSSxXQUFLLEVBQUVELGFBQWEsS0FBS1MsMEVBSjdCO0FBQUEsOEJBTUksOERBQUMsZ0RBQUQ7QUFBWSxpQkFBUyxFQUFFRCxTQUF2QjtBQUFrQyxvQkFBWSxFQUFFTDtBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkosZUFPSTtBQUFLLGlCQUFTLEVBQUMsS0FBZjtBQUFBLGtCQUNLSixZQUFZLENBQ1JXLE1BREosQ0FDVyxVQUFVQyxPQUFWLEVBQW1CO0FBQ3ZCLGlCQUNJQSxPQUFPLENBQUNDLEtBQVIsQ0FBY0MsV0FBZCxHQUE0QkMsUUFBNUIsQ0FBcUNQLFdBQXJDLEtBQ0FJLE9BQU8sQ0FBQ0ksSUFBUixDQUFhRixXQUFiLEdBQTJCQyxRQUEzQixDQUFvQ1AsV0FBcEMsQ0FGSjtBQUlILFNBTkosRUFPSUcsTUFQSixDQU9XLFVBQVVDLE9BQVYsRUFBbUI7QUFDdkIsaUJBQU9BLE9BQU8sQ0FBQ0ssUUFBUixDQUFpQkMsSUFBakIsQ0FBc0IsVUFBQ0MsT0FBRCxFQUFhO0FBQ3RDLG1CQUFPQSxPQUFPLENBQUNWLFNBQVIsS0FBc0JBLFNBQTdCO0FBQ0gsV0FGTSxDQUFQO0FBR0gsU0FYSixFQVlJVyxHQVpKLENBWVEsVUFBVVIsT0FBVixFQUFtQjtBQUNwQiw4QkFDSSw4REFBQyw2Q0FBRDtBQUVJLG1CQUFPLEVBQUVBLE9BRmI7QUFHSSx3QkFBWSxFQUFFVCxZQUhsQjtBQUlJLHdCQUFZLEVBQUVDLFlBSmxCO0FBS0ksd0JBQVksRUFBRUM7QUFMbEIsYUFDU08sT0FBTyxDQUFDUyxFQURqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKO0FBU0gsU0F0Qko7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBUEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBcUNIOztHQTNEUXhCLFk7O0tBQUFBLFk7QUE2RFQsK0RBQWVBLFlBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMGU4OTcwZDY3OGVkYTAyODM3NGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFNwZWFrZXIgZnJvbSBcIi4vU3BlYWtlclwiO1xyXG5pbXBvcnQgUmVhY3RQbGFjZUhvbGRlciBmcm9tIFwicmVhY3QtcGxhY2Vob2xkZXJcIjtcclxuaW1wb3J0IHVzZVJlcXVlc3RSZXN0LCB7IFJFUVVFU1RfU1RBVFVTIH0gZnJvbSBcIi4uL2hvb2tzL3VzZVJlcXVlc3REZWxheVwiO1xyXG5pbXBvcnQgeyBkYXRhIH0gZnJvbSBcIi4uLy4uL1NwZWFrZXJEYXRhXCI7XHJcbmltcG9ydCB7IFNwZWFrZXJGaWx0ZXJDb250ZXh0IH0gZnJvbSBcIi4uL2NvbnRleHRzL1NwZWFrZXJGaWx0ZXJDb250ZXh0XCI7XHJcbmltcG9ydCBTcGVha2VyQWRkIGZyb20gXCIuL1NwZWFrZXJBZGRcIjtcclxuXHJcbmZ1bmN0aW9uIFNwZWFrZXJzTGlzdCgpIHtcclxuICAgIGNvbnN0IHtcclxuICAgICAgICBkYXRhOiBzcGVha2Vyc0RhdGEsXHJcbiAgICAgICAgcmVxdWVzdFN0YXR1cyxcclxuICAgICAgICBlcnJvcixcclxuICAgICAgICB1cGRhdGVSZWNvcmQsXHJcbiAgICAgICAgaW5zZXJ0UmVjb3JkLFxyXG4gICAgICAgIGRlbGV0ZVJlY29yZCxcclxuICAgIH0gPSB1c2VSZXF1ZXN0RGVsYXkoMjAwMCwgZGF0YSk7XHJcblxyXG4gICAgY29uc3QgeyBzZWFyY2hRdWVyeSwgZXZlbnRZZWFyIH0gPSB1c2VDb250ZXh0KFNwZWFrZXJGaWx0ZXJDb250ZXh0KTtcclxuXHJcbiAgICBpZiAocmVxdWVzdFN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuRkFJTFVSRSkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1kYW5nZXJcIj5cclxuICAgICAgICAgICAgICAgIEVSUk9SOiA8Yj5sb2FkaW5nIFNwZWFrZXIgRGF0YSBGYWlsZWQge2Vycm9yfTwvYj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICAvL2lmIChpc0xvYWRpbmcgPT09IHRydWUpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIHNwZWFrZXJzLWxpc3RcIj5cclxuICAgICAgICAgICAgPFJlYWN0UGxhY2VIb2xkZXJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJtZWRpYVwiXHJcbiAgICAgICAgICAgICAgICByb3dzPXsxNX1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNwZWFrZXJzbGlzdC1wbGFjZWhvbGRlclwiXHJcbiAgICAgICAgICAgICAgICByZWFkeT17cmVxdWVzdFN0YXR1cyA9PT0gUkVRVUVTVF9TVEFUVVMuU1VDQ0VTU31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFNwZWFrZXJBZGQgZXZlbnRZZWFyPXtldmVudFllYXJ9IGluc2VydFJlY29yZD17aW5zZXJ0UmVjb3JkfSAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICB7c3BlYWtlcnNEYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKHNwZWFrZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3BlYWtlci5maXJzdC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5KSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwZWFrZXIubGFzdC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKHNlYXJjaFF1ZXJ5KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoc3BlYWtlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNwZWFrZXIuc2Vzc2lvbnMuZmluZCgoc2Vzc2lvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBzZXNzaW9uLmV2ZW50WWVhciA9PT0gZXZlbnRZZWFyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHNwZWFrZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNwZWFrZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtzcGVha2VyLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcGVha2VyPXtzcGVha2VyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVSZWNvcmQ9e3VwZGF0ZVJlY29yZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0UmVjb3JkPXtpbnNlcnRSZWNvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZVJlY29yZD17ZGVsZXRlUmVjb3JkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1JlYWN0UGxhY2VIb2xkZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTcGVha2Vyc0xpc3Q7Il0sInNvdXJjZVJvb3QiOiIifQ==