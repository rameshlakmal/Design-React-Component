self["webpackHotUpdate_N_E"]("pages/index",{

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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2hvb2tzL3VzZVJlcXVlc3REZWxheS5qcyJdLCJuYW1lcyI6WyJSRVFVRVNUX1NUQVRVUyIsIkxPQURJTkciLCJTVUNDRVNTIiwiRkFJTFVSRSIsInVzZVJlcXVlc3REZWxheSIsImRlbGF5VGltZSIsImluaXRpYWxEYXRhIiwidXNlU3RhdGUiLCJkYXRhIiwic2V0RGF0YSIsInJlcXVlc3RTdGF0dXMiLCJzZXRSZXF1ZXN0U3RhdHVzIiwiZXJyb3IiLCJzZXRFcnJvciIsImRlbGF5IiwibXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJ1c2VFZmZlY3QiLCJkZWxheUZ1bmMiLCJ1cGRhdGVSZWNvcmQiLCJyZWNvcmRVcGRhdGVkIiwiZG9uZUNhbGxiYWNrIiwib3JpZ2luYWxSZWNvcmRzIiwibmV3UmVjb3JkcyIsIm1hcCIsInJlYyIsImlkIiwiZGVsYXlGdW5jdGlvbiIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxjQUFjLEdBQUc7QUFDMUJDLFNBQU8sRUFBRSxTQURpQjtBQUUxQkMsU0FBTyxFQUFFLFNBRmlCO0FBRzFCQyxTQUFPLEVBQUU7QUFIaUIsQ0FBdkI7O0FBTVAsU0FBU0MsZUFBVCxHQUE2RDtBQUFBOztBQUFBLE1BQXBDQyxTQUFvQyx1RUFBeEIsSUFBd0I7QUFBQSxNQUFsQkMsV0FBa0IsdUVBQUosRUFBSTs7QUFBQSxrQkFDakNDLCtDQUFRLENBQUMsRUFBRCxDQUR5QjtBQUFBLE1BQ2xEQyxJQURrRDtBQUFBLE1BQzVDQyxPQUQ0Qzs7QUFBQSxtQkFFZkYsK0NBQVEsQ0FBQ1AsY0FBYyxDQUFDQyxPQUFoQixDQUZPO0FBQUEsTUFFbERTLGFBRmtEO0FBQUEsTUFFbkNDLGdCQUZtQzs7QUFBQSxtQkFHL0JKLCtDQUFRLENBQUMsRUFBRCxDQUh1QjtBQUFBLE1BR2xESyxLQUhrRDtBQUFBLE1BRzNDQyxRQUgyQzs7QUFJekQsTUFBTUMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0MsRUFBRDtBQUFBLFdBQVEsSUFBSUMsT0FBSixDQUFZLFVBQUNDLE9BQUQ7QUFBQSxhQUFhQyxVQUFVLENBQUNELE9BQUQsRUFBVUYsRUFBVixDQUF2QjtBQUFBLEtBQVosQ0FBUjtBQUFBLEdBQWQ7O0FBQ0FJLGtEQUFTLENBQUMsWUFBTTtBQUFBLGFBQ0dDLFNBREg7QUFBQTtBQUFBOztBQUFBO0FBQUEsbVNBQ1o7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFFY04sS0FBSyxDQUFDVCxTQUFELENBRm5COztBQUFBO0FBR1FNLGdDQUFnQixDQUFDWCxjQUFjLENBQUNFLE9BQWhCLENBQWhCO0FBQ0FPLHVCQUFPLENBQUNILFdBQUQsQ0FBUDtBQUpSO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBTVFLLGdDQUFnQixDQUFDWCxjQUFjLENBQUNHLE9BQWhCLENBQWhCO0FBQ0FVLHdCQUFRLGFBQVI7O0FBUFI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FEWTtBQUFBO0FBQUE7O0FBV1pPLGFBQVM7QUFDWixHQVpRLEVBWU4sRUFaTSxDQUFUOztBQWNBLFdBQVNDLFlBQVQsQ0FBc0JDLGFBQXRCLEVBQXFDQyxZQUFyQyxFQUFtRDtBQUMvQyxRQUFNQyxlQUFlLEdBQUcseUlBQUloQixJQUFQLENBQXJCOztBQUNBLFFBQU1pQixVQUFVLEdBQUdqQixJQUFJLENBQUNrQixHQUFMLENBQVMsVUFBVUMsR0FBVixFQUFlO0FBQ3ZDLGFBQU9BLEdBQUcsQ0FBQ0MsRUFBSixLQUFXTixhQUFhLENBQUNNLEVBQXpCLEdBQThCTixhQUE5QixHQUE4Q0ssR0FBckQ7QUFDSCxLQUZrQixDQUFuQjs7QUFGK0MsYUFNaENFLGFBTmdDO0FBQUE7QUFBQTs7QUFBQTtBQUFBLHVTQU0vQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFUXBCLHVCQUFPLENBQUNnQixVQUFELENBQVA7QUFGUjtBQUFBLHVCQUdjWCxLQUFLLENBQUNULFNBQUQsQ0FIbkI7O0FBQUE7QUFJUSxvQkFBSWtCLFlBQUosRUFBa0I7QUFDZEEsOEJBQVk7QUFDZjs7QUFOVDtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVFRTyx1QkFBTyxDQUFDQyxHQUFSLENBQVksbUNBQVo7O0FBQ0Esb0JBQUlSLFlBQUosRUFBa0I7QUFDZEEsOEJBQVk7QUFDZjs7QUFDRGQsdUJBQU8sQ0FBQ2UsZUFBRCxDQUFQOztBQVpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BTitDO0FBQUE7QUFBQTs7QUFxQi9DSyxpQkFBYTtBQUNoQjs7QUFFRCxTQUFPO0FBQ0hyQixRQUFJLEVBQUpBLElBREc7QUFFSEUsaUJBQWEsRUFBYkEsYUFGRztBQUdIRSxTQUFLLEVBQUxBLEtBSEc7QUFJSFMsZ0JBQVksRUFBWkE7QUFKRyxHQUFQO0FBTUg7O0dBakRRakIsZTs7QUFtRFQsK0RBQWVBLGVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOTE5NDIzODk0ZmIzMmQzN2YxNDUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBSRVFVRVNUX1NUQVRVUyA9IHtcclxuICAgIExPQURJTkc6IFwibG9hZGluZ1wiLFxyXG4gICAgU1VDQ0VTUzogXCJzdWNjZXNzXCIsXHJcbiAgICBGQUlMVVJFOiBcImZhaWx1cmVcIixcclxufTtcclxuXHJcbmZ1bmN0aW9uIHVzZVJlcXVlc3REZWxheShkZWxheVRpbWUgPSAxMDAwLCBpbml0aWFsRGF0YSA9IFtdKSB7XHJcbiAgICBjb25zdCBbZGF0YSwgc2V0RGF0YV0gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbcmVxdWVzdFN0YXR1cywgc2V0UmVxdWVzdFN0YXR1c10gPSB1c2VTdGF0ZShSRVFVRVNUX1NUQVRVUy5MT0FESU5HKTtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBkZWxheSA9IChtcykgPT4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgbXMpKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgYXN5bmMgZnVuY3Rpb24gZGVsYXlGdW5jKCkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgZGVsYXkoZGVsYXlUaW1lKTtcclxuICAgICAgICAgICAgICAgIHNldFJlcXVlc3RTdGF0dXMoUkVRVUVTVF9TVEFUVVMuU1VDQ0VTUyk7XHJcbiAgICAgICAgICAgICAgICBzZXREYXRhKGluaXRpYWxEYXRhKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgc2V0UmVxdWVzdFN0YXR1cyhSRVFVRVNUX1NUQVRVUy5GQUlMVVJFKTtcclxuICAgICAgICAgICAgICAgIHNldEVycm9yKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRlbGF5RnVuYygpO1xyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZVJlY29yZChyZWNvcmRVcGRhdGVkLCBkb25lQ2FsbGJhY2spIHtcclxuICAgICAgICBjb25zdCBvcmlnaW5hbFJlY29yZHMgPSBbLi4uZGF0YV07XHJcbiAgICAgICAgY29uc3QgbmV3UmVjb3JkcyA9IGRhdGEubWFwKGZ1bmN0aW9uIChyZWMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlYy5pZCA9PT0gcmVjb3JkVXBkYXRlZC5pZCA/IHJlY29yZFVwZGF0ZWQgOiByZWM7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGFzeW5jIGZ1bmN0aW9uIGRlbGF5RnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBzZXREYXRhKG5ld1JlY29yZHMpO1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgZGVsYXkoZGVsYXlUaW1lKTtcclxuICAgICAgICAgICAgICAgIGlmIChkb25lQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICBkb25lQ2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3IgdGhyb3duIGluc2lkZSBkZWxheUZ1bmN0aW9uXCIsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIGlmIChkb25lQ2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICBkb25lQ2FsbGJhY2soKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNldERhdGEob3JpZ2luYWxSZWNvcmRzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBkZWxheUZ1bmN0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBkYXRhLFxyXG4gICAgICAgIHJlcXVlc3RTdGF0dXMsXHJcbiAgICAgICAgZXJyb3IsXHJcbiAgICAgICAgdXBkYXRlUmVjb3JkLFxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlUmVxdWVzdERlbGF5OyJdLCJzb3VyY2VSb290IjoiIn0=