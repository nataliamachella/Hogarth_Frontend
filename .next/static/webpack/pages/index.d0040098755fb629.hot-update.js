"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/BloqueA/BloqueA.jsx":
/*!****************************************!*\
  !*** ./components/BloqueA/BloqueA.jsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nconst BloqueA = ()=>{\n    _s();\n    const [notes, setNotes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const searchNotes = ()=>{\n        axios.get(\"/api/notes\").then((notas)=>setNotes(notas.data));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n        h: \"60vh\",\n        margin: \"0 35% 0 15%\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                width: \"70%\",\n                background: \"yellow\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: \"/assets/oscar.webp\",\n                    width: \"340\",\n                    height: \"253\"\n                }, void 0, false, {\n                    fileName: \"/home/carlos/Plataforma/PROYECTO/hogarthPP_Front/components/BloqueA/BloqueA.jsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/carlos/Plataforma/PROYECTO/hogarthPP_Front/components/BloqueA/BloqueA.jsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                width: \"30%\",\n                display: \"flex\",\n                flexDirection: \"column\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                        background: \"blue\",\n                        h: \"33%\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: \"/assets/oscar.webp\",\n                            width: \"342\",\n                            height: \"253\"\n                        }, void 0, false, {\n                            fileName: \"/home/carlos/Plataforma/PROYECTO/hogarthPP_Front/components/BloqueA/BloqueA.jsx\",\n                            lineNumber: 23,\n                            columnNumber: 40\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/carlos/Plataforma/PROYECTO/hogarthPP_Front/components/BloqueA/BloqueA.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                        background: \"red\",\n                        h: \"33%\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: \"/assets/oscar.webp\",\n                            width: \"342\",\n                            height: \"253\"\n                        }, void 0, false, {\n                            fileName: \"/home/carlos/Plataforma/PROYECTO/hogarthPP_Front/components/BloqueA/BloqueA.jsx\",\n                            lineNumber: 28,\n                            columnNumber: 39\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/carlos/Plataforma/PROYECTO/hogarthPP_Front/components/BloqueA/BloqueA.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n                        background: \"green\",\n                        h: \"34%\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: \"/assets/oscar.webp\",\n                            width: \"342\",\n                            height: \"253\"\n                        }, void 0, false, {\n                            fileName: \"/home/carlos/Plataforma/PROYECTO/hogarthPP_Front/components/BloqueA/BloqueA.jsx\",\n                            lineNumber: 33,\n                            columnNumber: 41\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/carlos/Plataforma/PROYECTO/hogarthPP_Front/components/BloqueA/BloqueA.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/carlos/Plataforma/PROYECTO/hogarthPP_Front/components/BloqueA/BloqueA.jsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/carlos/Plataforma/PROYECTO/hogarthPP_Front/components/BloqueA/BloqueA.jsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n_s(BloqueA, \"GQLmJKrKSWtt27ULSmYSMpXke/c=\");\n_c = BloqueA;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BloqueA);\nvar _c;\n$RefreshReg$(_c, \"BloqueA\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jsb3F1ZUEvQmxvcXVlQS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7QUFBd0M7QUFDNkI7QUFDdEM7QUFFL0IsTUFBTVEsVUFBVSxJQUFNOztJQUNwQixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1QsK0NBQVFBLENBQUMsRUFBRTtJQUVyQyxNQUFNVSxjQUFjLElBQU07UUFDeEJDLE1BQU1DLEdBQUcsQ0FBQyxjQUFjQyxJQUFJLENBQUMsQ0FBQ0MsUUFBVUwsU0FBU0ssTUFBTUMsSUFBSTtJQUM3RDtJQUVBLHFCQUNFLDhEQUFDWCxrREFBSUE7UUFBQ1ksR0FBRTtRQUFPQyxRQUFPOzswQkFDcEIsOERBQUNkLGlEQUFHQTtnQkFBQ2UsT0FBTTtnQkFBTUMsWUFBVzswQkFDMUIsNEVBQUNiLG1EQUFLQTtvQkFDSmMsS0FBSTtvQkFDSkYsT0FBTztvQkFDUEcsUUFBUTs7Ozs7Ozs7Ozs7MEJBSVosOERBQUNsQixpREFBR0E7Z0JBQUNlLE9BQU07Z0JBQU1JLFNBQVE7Z0JBQU9DLGVBQWM7O2tDQUM1Qyw4REFBQ3BCLGlEQUFHQTt3QkFBQ2dCLFlBQVc7d0JBQU9ILEdBQUU7a0NBQU0sNEVBQUNWLG1EQUFLQTs0QkFDbkNjLEtBQUk7NEJBQ0pGLE9BQU87NEJBQ1BHLFFBQVE7Ozs7Ozs7Ozs7O2tDQUVWLDhEQUFDbEIsaURBQUdBO3dCQUFDZ0IsWUFBVzt3QkFBTUgsR0FBRTtrQ0FBTSw0RUFBQ1YsbURBQUtBOzRCQUNsQ2MsS0FBSTs0QkFDSkYsT0FBTzs0QkFDUEcsUUFBUTs7Ozs7Ozs7Ozs7a0NBRVYsOERBQUNsQixpREFBR0E7d0JBQUNnQixZQUFXO3dCQUFRSCxHQUFFO2tDQUFNLDRFQUFDVixtREFBS0E7NEJBQ3BDYyxLQUFJOzRCQUNKRixPQUFPOzRCQUNQRyxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtsQjtHQXBDTWQ7S0FBQUE7QUFzQ04sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CbG9xdWVBL0Jsb3F1ZUEuanN4P2ViN2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBHcmlkLCBHcmlkSXRlbSwgQm94LCBGbGV4LCBTcGFjZXIgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbmNvbnN0IEJsb3F1ZUEgPSAoKSA9PiB7XG4gIGNvbnN0IFtub3Rlcywgc2V0Tm90ZXNdID0gdXNlU3RhdGUoW10pO1xuXG4gIGNvbnN0IHNlYXJjaE5vdGVzID0gKCkgPT4ge1xuICAgIGF4aW9zLmdldChcIi9hcGkvbm90ZXNcIikudGhlbigobm90YXMpID0+IHNldE5vdGVzKG5vdGFzLmRhdGEpKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxGbGV4IGg9XCI2MHZoXCIgbWFyZ2luPVwiMCAzNSUgMCAxNSVcIj5cbiAgICAgIDxCb3ggd2lkdGg9XCI3MCVcIiBiYWNrZ3JvdW5kPVwieWVsbG93XCIgPlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBzcmM9XCIvYXNzZXRzL29zY2FyLndlYnBcIlxuICAgICAgICAgIHdpZHRoPXtcIjM0MFwifVxuICAgICAgICAgIGhlaWdodD17XCIyNTNcIn1cbiAgICAgICAgPjwvSW1hZ2U+XG4gICAgICA8L0JveD5cblxuICAgICAgPEJveCB3aWR0aD1cIjMwJVwiIGRpc3BsYXk9XCJmbGV4XCIgZmxleERpcmVjdGlvbj1cImNvbHVtblwiPlxuICAgICAgICA8Qm94IGJhY2tncm91bmQ9XCJibHVlXCIgaD1cIjMzJVwiPjxJbWFnZVxuICAgICAgICAgIHNyYz1cIi9hc3NldHMvb3NjYXIud2VicFwiXG4gICAgICAgICAgd2lkdGg9e1wiMzQyXCJ9XG4gICAgICAgICAgaGVpZ2h0PXtcIjI1M1wifVxuICAgICAgICA+PC9JbWFnZT48L0JveD5cbiAgICAgICAgPEJveCBiYWNrZ3JvdW5kPVwicmVkXCIgaD1cIjMzJVwiPjxJbWFnZVxuICAgICAgICAgIHNyYz1cIi9hc3NldHMvb3NjYXIud2VicFwiXG4gICAgICAgICAgd2lkdGg9e1wiMzQyXCJ9XG4gICAgICAgICAgaGVpZ2h0PXtcIjI1M1wifVxuICAgICAgICA+PC9JbWFnZT48L0JveD5cbiAgICAgICAgPEJveCBiYWNrZ3JvdW5kPVwiZ3JlZW5cIiBoPVwiMzQlXCI+PEltYWdlXG4gICAgICAgICAgc3JjPVwiL2Fzc2V0cy9vc2Nhci53ZWJwXCJcbiAgICAgICAgICB3aWR0aD17XCIzNDJcIn1cbiAgICAgICAgICBoZWlnaHQ9e1wiMjUzXCJ9XG4gICAgICAgID48L0ltYWdlPjwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgPC9GbGV4PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmxvcXVlQTtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiR3JpZCIsIkdyaWRJdGVtIiwiQm94IiwiRmxleCIsIlNwYWNlciIsIkltYWdlIiwiQmxvcXVlQSIsIm5vdGVzIiwic2V0Tm90ZXMiLCJzZWFyY2hOb3RlcyIsImF4aW9zIiwiZ2V0IiwidGhlbiIsIm5vdGFzIiwiZGF0YSIsImgiLCJtYXJnaW4iLCJ3aWR0aCIsImJhY2tncm91bmQiLCJzcmMiLCJoZWlnaHQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/BloqueA/BloqueA.jsx\n"));

/***/ })

});