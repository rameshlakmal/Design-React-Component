self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/Header.js":
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/ThemeContext */ "./src/contexts/ThemeContext.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _withAuth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./withAuth */ "./src/components/withAuth.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Ramesh\\Desktop\\React-Component\\src\\components\\Header.js",
    _s = $RefreshSig$();





function Header(_ref) {
  _s();

  var loggedInUser = _ref.loggedInUser,
      setLoggedInUser = _ref.setLoggedInUser;

  var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_ThemeContext__WEBPACK_IMPORTED_MODULE_1__.ThemeContext),
      theme = _useContext.theme;

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "padT4 padB4",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container mobile-container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "d-flex justify-content-between",
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
            alt: "SVCC Home Page",
            src: "/images/SVCCLogo.png"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 13,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "light",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h4", {
            className: "header-title",
            children: "Silicon Valley Code Camp"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: theme === "light" ? "" : "text-info",
          children: loggedInUser && loggedInUser.length > 0 ? /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
              children: ["Logged in as ", loggedInUser, " "]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 17
            }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
              className: "btn btn-secondary",
              onClick: function onClick() {
                setLoggedInUser("");
              },
              children: "Logout"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 15
          }, this) : /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
            className: "btn btn-secondary",
            onClick: function onClick(e) {
              e.preventDefault();
              var username = window.prompt("Enter Login name:", "");
              setLoggedInUser(username);
            },
            children: "login"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, this)
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

_s(Header, "LidUGjXGvl6nqLnPI8yC77ot4bM=");

_c = Header;
/* harmony default export */ __webpack_exports__["default"] = (_c2 = (0,_withAuth__WEBPACK_IMPORTED_MODULE_3__.default)(Header));

var _c, _c2;

$RefreshReg$(_c, "Header");
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


/***/ }),

/***/ "./src/components/withAuth.js":
/*!************************************!*\
  !*** ./src/components/withAuth.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Ramesh_Desktop_React_Component_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../contexts/AuthContext */ "./src/contexts/AuthContext.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\Ramesh\\Desktop\\React-Component\\src\\components\\withAuth.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_Ramesh_Desktop_React_Component_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function withAuth(Component) {
  var _s = $RefreshSig$();

  return _s(function (props) {
    _s();

    var _useContext = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_3__.AuthContext),
        loggedInUser = _useContext.loggedInUser,
        setLoggedInUser = _useContext.setLoggedInUser;

    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Component, _objectSpread({
      loggedInUser: loggedInUser,
      setLoggedInUser: setLoggedInUser
    }, props), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, this);
  }, "UEsCEH6UVpc/O5vlgTKO+Zcx5Xg=");
}

/* harmony default export */ __webpack_exports__["default"] = (withAuth);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy93aXRoQXV0aC5qcyJdLCJuYW1lcyI6WyJIZWFkZXIiLCJsb2dnZWRJblVzZXIiLCJzZXRMb2dnZWRJblVzZXIiLCJ1c2VDb250ZXh0IiwiVGhlbWVDb250ZXh0IiwidGhlbWUiLCJsZW5ndGgiLCJlIiwicHJldmVudERlZmF1bHQiLCJ1c2VybmFtZSIsIndpbmRvdyIsInByb21wdCIsIndpdGhBdXRoIiwiQ29tcG9uZW50IiwicHJvcHMiLCJBdXRoQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxNQUFULE9BQW1EO0FBQUE7O0FBQUEsTUFBakNDLFlBQWlDLFFBQWpDQSxZQUFpQztBQUFBLE1BQW5CQyxlQUFtQixRQUFuQkEsZUFBbUI7O0FBQUEsb0JBQy9CQyxpREFBVSxDQUFDQyxnRUFBRCxDQURxQjtBQUFBLE1BQ3pDQyxLQUR5QyxlQUN6Q0EsS0FEeUM7O0FBR2pELHNCQUNFO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyw0QkFBZjtBQUFBLDZCQUNFO0FBQUssaUJBQVMsRUFBQyxnQ0FBZjtBQUFBLGdDQUNFO0FBQUEsaUNBQ0U7QUFBSyxlQUFHLEVBQUMsZ0JBQVQ7QUFBMEIsZUFBRyxFQUFDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBSUU7QUFBSyxtQkFBUyxFQUFDLE9BQWY7QUFBQSxpQ0FDRTtBQUFJLHFCQUFTLEVBQUMsY0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkYsZUFPRTtBQUFLLG1CQUFTLEVBQUVBLEtBQUssS0FBSyxPQUFWLEdBQW9CLEVBQXBCLEdBQXlCLFdBQXpDO0FBQUEsb0JBQ0dKLFlBQVksSUFBSUEsWUFBWSxDQUFDSyxNQUFiLEdBQXNCLENBQXRDLGdCQUNDO0FBQUEsb0NBQ0U7QUFBQSwwQ0FBb0JMLFlBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixlQUVFO0FBQ0UsdUJBQVMsRUFBQyxtQkFEWjtBQUVFLHFCQUFPLEVBQUUsbUJBQU07QUFDYkMsK0JBQWUsQ0FBQyxFQUFELENBQWY7QUFDRCxlQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFERCxnQkFhQztBQUNFLHFCQUFTLEVBQUMsbUJBRFo7QUFFRSxtQkFBTyxFQUFFLGlCQUFDSyxDQUFELEVBQU87QUFDZEEsZUFBQyxDQUFDQyxjQUFGO0FBQ0Esa0JBQU1DLFFBQVEsR0FBR0MsTUFBTSxDQUFDQyxNQUFQLENBQWMsbUJBQWQsRUFBbUMsRUFBbkMsQ0FBakI7QUFDQVQsNkJBQWUsQ0FBQ08sUUFBRCxDQUFmO0FBQ0QsYUFOSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWRKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXdDRDs7R0EzQ1FULE07O0tBQUFBLE07QUE2Q1QsK0RBQWUsTUFBQVksa0RBQVEsQ0FBQ1osTUFBRCxDQUF2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pEQTtBQUNBOztBQUVBLFNBQVNZLFFBQVQsQ0FBa0JDLFNBQWxCLEVBQTZCO0FBQUE7O0FBQ3pCLFlBQU8sVUFBVUMsS0FBVixFQUFpQjtBQUFBOztBQUFBLHNCQUNzQlgsaURBQVUsQ0FBQ1ksOERBQUQsQ0FEaEM7QUFBQSxRQUNaZCxZQURZLGVBQ1pBLFlBRFk7QUFBQSxRQUNFQyxlQURGLGVBQ0VBLGVBREY7O0FBRXBCLHdCQUNJLDhEQUFDLFNBQUQ7QUFDSSxrQkFBWSxFQUFFRCxZQURsQjtBQUVJLHFCQUFlLEVBQUVDO0FBRnJCLE9BR1FZLEtBSFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKO0FBT0gsR0FURDtBQVVIOztBQUVELCtEQUFlRixRQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjYzZGI3NWExMjYzZmU3ODgyMTYzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaGVtZUNvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvVGhlbWVDb250ZXh0XCI7XG5pbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgd2l0aEF1dGggZnJvbSBcIi4vd2l0aEF1dGhcIjtcblxuZnVuY3Rpb24gSGVhZGVyKHsgbG9nZ2VkSW5Vc2VyLCBzZXRMb2dnZWRJblVzZXIgfSkge1xuICBjb25zdCB7IHRoZW1lIH0gPSB1c2VDb250ZXh0KFRoZW1lQ29udGV4dCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBhZFQ0IHBhZEI0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtb2JpbGUtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxpbWcgYWx0PVwiU1ZDQyBIb21lIFBhZ2VcIiBzcmM9XCIvaW1hZ2VzL1NWQ0NMb2dvLnBuZ1wiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaWdodFwiPlxuICAgICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImhlYWRlci10aXRsZVwiPlNpbGljb24gVmFsbGV5IENvZGUgQ2FtcDwvaDQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3RoZW1lID09PSBcImxpZ2h0XCIgPyBcIlwiIDogXCJ0ZXh0LWluZm9cIn0+XG4gICAgICAgICAgICB7bG9nZ2VkSW5Vc2VyICYmIGxvZ2dlZEluVXNlci5sZW5ndGggPiAwID8gKFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxzcGFuPkxvZ2dlZCBpbiBhcyB7bG9nZ2VkSW5Vc2VyfSA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRMb2dnZWRJblVzZXIoXCJcIik7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIExvZ291dFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHVzZXJuYW1lID0gd2luZG93LnByb21wdChcIkVudGVyIExvZ2luIG5hbWU6XCIsIFwiXCIpO1xuICAgICAgICAgICAgICAgICAgc2V0TG9nZ2VkSW5Vc2VyKHVzZXJuYW1lKTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgbG9naW5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aChIZWFkZXIpOyIsImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQXV0aENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dHMvQXV0aENvbnRleHRcIjtcclxuXHJcbmZ1bmN0aW9uIHdpdGhBdXRoKENvbXBvbmVudCkge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwcm9wcykge1xyXG4gICAgICAgIGNvbnN0IHsgbG9nZ2VkSW5Vc2VyLCBzZXRMb2dnZWRJblVzZXIgfSA9IHVzZUNvbnRleHQoQXV0aENvbnRleHQpO1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxDb21wb25lbnRcclxuICAgICAgICAgICAgICAgIGxvZ2dlZEluVXNlcj17bG9nZ2VkSW5Vc2VyfVxyXG4gICAgICAgICAgICAgICAgc2V0TG9nZ2VkSW5Vc2VyPXtzZXRMb2dnZWRJblVzZXJ9XHJcbiAgICAgICAgICAgICAgICB7Li4ucHJvcHN9XHJcbiAgICAgICAgICAgID48L0NvbXBvbmVudD5cclxuICAgICAgICApO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGg7Il0sInNvdXJjZVJvb3QiOiIifQ==