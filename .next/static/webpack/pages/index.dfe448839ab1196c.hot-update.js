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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\nconst BloqueA = ()=>{\n    _s();\n    const [notes, setNotes] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const searchNotes = ()=>{\n        axios.get(\"/api/notes\").then((notas)=>setNotes(notas.data));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {\n        h: \"60vh\",\n        margin: \"0 35% 0 15%\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                width: \"70%\",\n                background: \"yellow\",\n                class: \"imagenPrincipal\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                    src: \"/assets/oscar.webp\"\n                }, void 0, false, {\n                    fileName: \"/home/carlos/Plataforma/PROYECTO/hogarthPP_Front/components/BloqueA/BloqueA.jsx\",\n                    lineNumber: 15,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/carlos/Plataforma/PROYECTO/hogarthPP_Front/components/BloqueA/BloqueA.jsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                width: \"30%\",\n                display: \"flex\",\n                flexDirection: \"column\",\n                class: \"imagenPrincipal\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        background: \"blue\",\n                        h: \"33%\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                            src: \"/assets/oscar.webp\",\n                            width: \"150\",\n                            height: \"150\"\n                        }, void 0, false, {\n                            fileName: \"/home/carlos/Plataforma/PROYECTO/hogarthPP_Front/components/BloqueA/BloqueA.jsx\",\n                            lineNumber: 20,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/carlos/Plataforma/PROYECTO/hogarthPP_Front/components/BloqueA/BloqueA.jsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        background: \"red\",\n                        h: \"33%\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                            src: \"/assets/oscar.webp\",\n                            width: \"150\",\n                            height: \"150\"\n                        }, void 0, false, {\n                            fileName: \"/home/carlos/Plataforma/PROYECTO/hogarthPP_Front/components/BloqueA/BloqueA.jsx\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/carlos/Plataforma/PROYECTO/hogarthPP_Front/components/BloqueA/BloqueA.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                        background: \"green\",\n                        h: \"34%\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                            src: \"/assets/oscar.webp\",\n                            width: \"150\",\n                            height: \"150\"\n                        }, void 0, false, {\n                            fileName: \"/home/carlos/Plataforma/PROYECTO/hogarthPP_Front/components/BloqueA/BloqueA.jsx\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/carlos/Plataforma/PROYECTO/hogarthPP_Front/components/BloqueA/BloqueA.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/carlos/Plataforma/PROYECTO/hogarthPP_Front/components/BloqueA/BloqueA.jsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/carlos/Plataforma/PROYECTO/hogarthPP_Front/components/BloqueA/BloqueA.jsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, undefined);\n};\n_s(BloqueA, \"GQLmJKrKSWtt27ULSmYSMpXke/c=\");\n_c = BloqueA;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BloqueA);\nvar _c;\n$RefreshReg$(_c, \"BloqueA\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Jsb3F1ZUEvQmxvcXVlQS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7O0FBQXdDO0FBQ29DO0FBRzVFLE1BQU1RLFVBQVUsSUFBTTs7SUFDcEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdULCtDQUFRQSxDQUFDLEVBQUU7SUFFckMsTUFBTVUsY0FBYyxJQUFNO1FBQ3hCQyxNQUFNQyxHQUFHLENBQUMsY0FBY0MsSUFBSSxDQUFDLENBQUNDLFFBQVVMLFNBQVNLLE1BQU1DLElBQUk7SUFDN0Q7SUFFQSxxQkFDRSw4REFBQ1gsa0RBQUlBO1FBQUNZLEdBQUU7UUFBT0MsUUFBTzs7MEJBQ3BCLDhEQUFDZCxpREFBR0E7Z0JBQUNlLE9BQU07Z0JBQU1DLFlBQVc7Z0JBQVNDLE9BQU07MEJBQ3pDLDRFQUFDZCxtREFBS0E7b0JBQUVlLEtBQUk7Ozs7Ozs7Ozs7OzBCQUdkLDhEQUFDbEIsaURBQUdBO2dCQUFDZSxPQUFNO2dCQUFNSSxTQUFRO2dCQUFPQyxlQUFjO2dCQUFTSCxPQUFNOztrQ0FDM0QsOERBQUNqQixpREFBR0E7d0JBQUNnQixZQUFXO3dCQUFPSCxHQUFFO2tDQUN2Qiw0RUFBQ1YsbURBQUtBOzRCQUFDZSxLQUFJOzRCQUFxQkgsT0FBTzs0QkFBT00sUUFBUTs7Ozs7Ozs7Ozs7a0NBRXhELDhEQUFDckIsaURBQUdBO3dCQUFDZ0IsWUFBVzt3QkFBTUgsR0FBRTtrQ0FDdEIsNEVBQUNWLG1EQUFLQTs0QkFBQ2UsS0FBSTs0QkFBcUJILE9BQU87NEJBQU9NLFFBQVE7Ozs7Ozs7Ozs7O2tDQUV4RCw4REFBQ3JCLGlEQUFHQTt3QkFBQ2dCLFlBQVc7d0JBQVFILEdBQUU7a0NBQ3hCLDRFQUFDVixtREFBS0E7NEJBQUNlLEtBQUk7NEJBQXFCSCxPQUFPOzRCQUFPTSxRQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUtoRTtHQTFCTWpCO0tBQUFBO0FBNEJOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQmxvcXVlQS9CbG9xdWVBLmpzeD9lYjdlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgR3JpZCwgR3JpZEl0ZW0sIEJveCwgRmxleCwgU3BhY2VyLCBJbWFnZSB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5cblxuY29uc3QgQmxvcXVlQSA9ICgpID0+IHtcbiAgY29uc3QgW25vdGVzLCBzZXROb3Rlc10gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3Qgc2VhcmNoTm90ZXMgPSAoKSA9PiB7XG4gICAgYXhpb3MuZ2V0KFwiL2FwaS9ub3Rlc1wiKS50aGVuKChub3RhcykgPT4gc2V0Tm90ZXMobm90YXMuZGF0YSkpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPEZsZXggaD1cIjYwdmhcIiBtYXJnaW49XCIwIDM1JSAwIDE1JVwiPlxuICAgICAgPEJveCB3aWR0aD1cIjcwJVwiIGJhY2tncm91bmQ9XCJ5ZWxsb3dcIiBjbGFzcz1cImltYWdlblByaW5jaXBhbFwiPlxuICAgICAgICA8SW1hZ2UgIHNyYz1cIi9hc3NldHMvb3NjYXIud2VicFwiPjwvSW1hZ2U+XG4gICAgICA8L0JveD5cblxuICAgICAgPEJveCB3aWR0aD1cIjMwJVwiIGRpc3BsYXk9XCJmbGV4XCIgZmxleERpcmVjdGlvbj1cImNvbHVtblwiIGNsYXNzPVwiaW1hZ2VuUHJpbmNpcGFsXCI+XG4gICAgICAgIDxCb3ggYmFja2dyb3VuZD1cImJsdWVcIiBoPVwiMzMlXCI+XG4gICAgICAgICAgPEltYWdlIHNyYz1cIi9hc3NldHMvb3NjYXIud2VicFwiIHdpZHRoPXtcIjE1MFwifSBoZWlnaHQ9e1wiMTUwXCJ9PjwvSW1hZ2U+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94IGJhY2tncm91bmQ9XCJyZWRcIiBoPVwiMzMlXCI+XG4gICAgICAgICAgPEltYWdlIHNyYz1cIi9hc3NldHMvb3NjYXIud2VicFwiIHdpZHRoPXtcIjE1MFwifSBoZWlnaHQ9e1wiMTUwXCJ9PjwvSW1hZ2U+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94IGJhY2tncm91bmQ9XCJncmVlblwiIGg9XCIzNCVcIj5cbiAgICAgICAgICA8SW1hZ2Ugc3JjPVwiL2Fzc2V0cy9vc2Nhci53ZWJwXCIgd2lkdGg9e1wiMTUwXCJ9IGhlaWdodD17XCIxNTBcIn0+PC9JbWFnZT5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cbiAgICA8L0ZsZXg+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCbG9xdWVBO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJHcmlkIiwiR3JpZEl0ZW0iLCJCb3giLCJGbGV4IiwiU3BhY2VyIiwiSW1hZ2UiLCJCbG9xdWVBIiwibm90ZXMiLCJzZXROb3RlcyIsInNlYXJjaE5vdGVzIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwibm90YXMiLCJkYXRhIiwiaCIsIm1hcmdpbiIsIndpZHRoIiwiYmFja2dyb3VuZCIsImNsYXNzIiwic3JjIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/BloqueA/BloqueA.jsx\n"));

/***/ })

});