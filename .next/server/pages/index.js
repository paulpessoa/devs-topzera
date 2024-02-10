"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./Components/Search.tsx":
/*!*******************************!*\
  !*** ./Components/Search.tsx ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__]);\naxios__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nconst Search = ()=>{\n    const { 0: searchTerm , 1: setSearchTerm  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const { 0: users , 1: setUsers  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const { 0: resultSize , 1: setResultSize  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const fetchUsers = async ()=>{\n            try {\n                const response = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(`https://api.github.com/search/users?q=${searchTerm}`);\n                setUsers(response.data.items);\n                setResultSize(response.data.total_count);\n            } catch (error) {\n                console.error(\"Error fetching users:\", error);\n            }\n        };\n        const delaySearch = setTimeout(()=>{\n            if (searchTerm !== \"\") {\n                fetchUsers();\n            }\n        }, 500);\n        return ()=>clearTimeout(delaySearch);\n    }, [\n        searchTerm\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexDirection: \"row\",\n                    flexWrap: \"wrap\",\n                    width: \"100%\",\n                    justifyContent: \"center\",\n                    alignItems: \"center\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    style: {\n                        width: \"300px\",\n                        padding: \"10px\",\n                        margin: \"10px\",\n                        borderRadius: \"25px\",\n                        textAlign: \"center\",\n                        fontSize: \"20px\",\n                        color: \"#017870\"\n                    },\n                    type: \"text\",\n                    value: searchTerm,\n                    onChange: (e)=>setSearchTerm(e.target.value),\n                    placeholder: \"Enter GitHub username\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\devs-topzera\\\\Components\\\\Search.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\devs-topzera\\\\Components\\\\Search.tsx\",\n                lineNumber: 39,\n                columnNumber: 2\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                style: {\n                    color: \"#017870\",\n                    textAlign: \"center\"\n                },\n                children: [\n                    \"Results: \",\n                    resultSize\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\devs-topzera\\\\Components\\\\Search.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    display: \"flex\",\n                    flexDirection: \"row\",\n                    flexWrap: \"wrap\",\n                    width: \"100%\",\n                    justifyContent: \"space-around\",\n                    alignItems: \"center\"\n                },\n                children: users.map((user)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            display: \"flex\",\n                            flexDirection: \"column\",\n                            flexWrap: \"wrap\",\n                            width: \"300px\",\n                            borderRadius: \"25px\",\n                            padding: \"10px\",\n                            margin: \"10px\",\n                            background: \"#017870\",\n                            justifyContent: \"space-around\",\n                            alignItems: \"center\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: user.avatar_url,\n                                alt: \"Profile\",\n                                style: {\n                                    width: 100,\n                                    height: 100,\n                                    borderRadius: \"50%\"\n                                }\n                            }, void 0, false, {\n                                fileName: \"D:\\\\devs-topzera\\\\Components\\\\Search.tsx\",\n                                lineNumber: 53,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                children: user.login\n                            }, void 0, false, {\n                                fileName: \"D:\\\\devs-topzera\\\\Components\\\\Search.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, user.login, true, {\n                        fileName: \"D:\\\\devs-topzera\\\\Components\\\\Search.tsx\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"D:\\\\devs-topzera\\\\Components\\\\Search.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\devs-topzera\\\\Components\\\\Search.tsx\",\n        lineNumber: 38,\n        columnNumber: 2\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Search);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LE9BQU8sRUFBRSxNQUFNOzRCQUFFQyxhQUFhLEVBQUUsUUFBUTs0QkFBRUMsUUFBUSxFQUFFLE1BQU07NEJBQUVDLEtBQUssRUFBRSxPQUFPOzRCQUFFTSxZQUFZLEVBQUMsTUFBTTs0QkFBRUYsT0FBTyxFQUFDLE1BQU07NEJBQUVDLE1BQU0sRUFBQyxNQUFNOzRCQUFFYyxVQUFVLEVBQUUsU0FBUzs0QkFBRWxCLGNBQWMsRUFBRSxjQUFjOzRCQUFFQyxVQUFVLEVBQUMsUUFBUTt5QkFBQzs7MENBQ3ROLDhEQUFDa0IsS0FBRztnQ0FBQ0MsR0FBRyxFQUFFSCxJQUFJLENBQUNJLFVBQVU7Z0NBQUVDLEdBQUcsRUFBQyxTQUFTO2dDQUFDM0IsS0FBSyxFQUFFO29DQUFFSSxLQUFLLEVBQUUsR0FBRztvQ0FBRXdCLE1BQU0sRUFBRSxHQUFHO29DQUFFbEIsWUFBWSxFQUFFLEtBQUs7aUNBQUU7Ozs7O3lDQUFJOzBDQUNwRyw4REFBQ21CLElBQUU7MENBQUVQLElBQUksQ0FBQ1EsS0FBSzs7Ozs7eUNBQU07O3VCQUZ3TVIsSUFBSSxDQUFDUSxLQUFLOzs7O2lDQUduTyxDQUNOOzs7Ozt5QkFDSTs7Ozs7O2lCQUVGLENBQ047QUFDSixDQUFDO0FBRUQsaUVBQWVqRCxNQUFNLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXZzLXRvcHplcmEvLi9Db21wb25lbnRzL1NlYXJjaC50c3g/YjY0MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QseyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuXHJcbmludGVyZmFjZSBVc2VyIHtcclxuICBsb2dpbjogc3RyaW5nO1xyXG4gIGF2YXRhcl91cmw6IHN0cmluZztcclxuICBmb2xsb3dlcnNfdXJsXHJcbjogbnVtYmVyO1xyXG59XHJcblxyXG5jb25zdCBTZWFyY2ggPSAoKSA9PiB7XHJcbiAgY29uc3QgW3NlYXJjaFRlcm0sIHNldFNlYXJjaFRlcm1dID0gdXNlU3RhdGU8c3RyaW5nPignJyk7XHJcbiAgY29uc3QgW3VzZXJzLCBzZXRVc2Vyc10gPSB1c2VTdGF0ZTxVc2VyW10+KFtdKTtcclxuICBjb25zdCBbcmVzdWx0U2l6ZSwgc2V0UmVzdWx0U2l6ZV0gPSB1c2VTdGF0ZSgpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGZldGNoVXNlcnMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KGBodHRwczovL2FwaS5naXRodWIuY29tL3NlYXJjaC91c2Vycz9xPSR7c2VhcmNoVGVybX1gKTtcclxuICAgICAgICAgIHNldFVzZXJzKHJlc3BvbnNlLmRhdGEuaXRlbXMpO1xyXG4gICAgICAgICAgc2V0UmVzdWx0U2l6ZShyZXNwb25zZS5kYXRhLnRvdGFsX2NvdW50KTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgdXNlcnM6JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgICAgY29uc3QgZGVsYXlTZWFyY2ggPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgXHJcbiAgICAgICAgaWYgKHNlYXJjaFRlcm0gIT09ICcnKSB7XHJcbiAgICAgICAgICBmZXRjaFVzZXJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LCA1MDApO1xyXG4gICAgICByZXR1cm4gKCkgPT4gY2xlYXJUaW1lb3V0KGRlbGF5U2VhcmNoKTtcclxuXHJcbiAgICB9LCBbc2VhcmNoVGVybV0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gPGRpdj5cclxuIDxkaXYgc3R5bGU9e3tkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJyb3dcIiwgZmxleFdyYXA6ICd3cmFwJywgd2lkdGg6IFwiMTAwJVwiLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGFsaWduSXRlbXM6XCJjZW50ZXJcIn19PlxyXG4gICAgICA8aW5wdXRcclxuICAgICAgc3R5bGU9e3t3aWR0aDogXCIzMDBweFwiLCBwYWRkaW5nOiBcIjEwcHhcIiwgbWFyZ2luOiBcIjEwcHhcIiwgYm9yZGVyUmFkaXVzOiBcIjI1cHhcIiwgdGV4dEFsaWduOiBcImNlbnRlclwiLCBmb250U2l6ZTogXCIyMHB4XCIsIGNvbG9yOiBcIiMwMTc4NzBcIn19XHJcbiAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgIHZhbHVlPXtzZWFyY2hUZXJtfVxyXG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoVGVybShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBHaXRIdWIgdXNlcm5hbWVcIiBcclxuICAgICAgLz5cclxuIDwvZGl2PlxyXG4gICAgICA8aDMgc3R5bGU9e3tjb2xvcjogXCIjMDE3ODcwXCIsIHRleHRBbGlnbjpcImNlbnRlclwifX0+UmVzdWx0czoge3Jlc3VsdFNpemV9PC9oMz5cclxuICAgICAgPGRpdiBzdHlsZT17e2Rpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLCBmbGV4V3JhcDogJ3dyYXAnLCB3aWR0aDogXCIxMDAlXCIsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYXJvdW5kJywgYWxpZ25JdGVtczpcImNlbnRlclwifX0+XHJcbiAgICAgIHt1c2Vycy5tYXAoKHVzZXIpID0+IChcclxuICAgICAgICBcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7ZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsIGZsZXhXcmFwOiAnd3JhcCcsIHdpZHRoOiBcIjMwMHB4XCIsIGJvcmRlclJhZGl1czpcIjI1cHhcIiwgcGFkZGluZzpcIjEwcHhcIiwgbWFyZ2luOlwiMTBweFwiLCBiYWNrZ3JvdW5kOiBcIiMwMTc4NzBcIiwganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1hcm91bmQnLCBhbGlnbkl0ZW1zOlwiY2VudGVyXCJ9fSBrZXk9e3VzZXIubG9naW59PlxyXG4gICAgICAgICAgPGltZyBzcmM9e3VzZXIuYXZhdGFyX3VybH0gYWx0PVwiUHJvZmlsZVwiIHN0eWxlPXt7IHdpZHRoOiAxMDAsIGhlaWdodDogMTAwLCBib3JkZXJSYWRpdXM6ICc1MCUnIH19IC8+XHJcbiAgICAgICAgICA8aDI+e3VzZXIubG9naW59PC9oMj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXhpb3MiLCJTZWFyY2giLCJzZWFyY2hUZXJtIiwic2V0U2VhcmNoVGVybSIsInVzZXJzIiwic2V0VXNlcnMiLCJyZXN1bHRTaXplIiwic2V0UmVzdWx0U2l6ZSIsImZldGNoVXNlcnMiLCJyZXNwb25zZSIsImdldCIsImRhdGEiLCJpdGVtcyIsInRvdGFsX2NvdW50IiwiZXJyb3IiLCJjb25zb2xlIiwiZGVsYXlTZWFyY2giLCJzZXRUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiZGl2Iiwic3R5bGUiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImZsZXhXcmFwIiwid2lkdGgiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJpbnB1dCIsInBhZGRpbmciLCJtYXJnaW4iLCJib3JkZXJSYWRpdXMiLCJ0ZXh0QWxpZ24iLCJmb250U2l6ZSIsImNvbG9yIiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJoMyIsIm1hcCIsInVzZXIiLCJiYWNrZ3JvdW5kIiwiaW1nIiwic3JjIiwiYXZhdGFyX3VybCIsImFsdCIsImhlaWdodCIsImgyIiwibG9naW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/Search.tsx\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Components_Search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/Search */ \"./Components/Search.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Components_Search__WEBPACK_IMPORTED_MODULE_1__]);\n_Components_Search__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst HomePage = ()=>{\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: {\n                    color: \"#017870\",\n                    textAlign: \"center\"\n                },\n                children: \"Github Repository Search\"\n            }, void 0, false, {\n                fileName: \"D:\\\\devs-topzera\\\\pages\\\\index.tsx\",\n                lineNumber: 6,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Components_Search__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\devs-topzera\\\\pages\\\\index.tsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\devs-topzera\\\\pages\\\\index.tsx\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HomePage);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQTBDO0FBRTFDLE1BQU1DLFFBQVEsR0FBRyxJQUFNO0lBQ3JCLHFCQUNFLDhEQUFDQyxLQUFHOzswQkFDRiw4REFBQ0MsSUFBRTtnQkFBQ0MsS0FBSyxFQUFFO29CQUFDQyxLQUFLLEVBQUUsU0FBUztvQkFBRUMsU0FBUyxFQUFDLFFBQVE7aUJBQUM7MEJBQUUsMEJBQXdCOzs7Ozt5QkFBSzswQkFDaEYsOERBQUNOLDBEQUFNOzs7O3lCQUFHOzs7Ozs7aUJBQ04sQ0FDTjtBQUNKLENBQUM7QUFFRCxpRUFBZUMsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGV2cy10b3B6ZXJhLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNlYXJjaCBmcm9tICcuLi9Db21wb25lbnRzL1NlYXJjaCc7XHJcblxyXG5jb25zdCBIb21lUGFnZSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxIHN0eWxlPXt7Y29sb3I6IFwiIzAxNzg3MFwiLCB0ZXh0QWxpZ246XCJjZW50ZXJcIn19PkdpdGh1YiBSZXBvc2l0b3J5IFNlYXJjaDwvaDE+XHJcbiAgICAgIDxTZWFyY2ggLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZTtcclxuIl0sIm5hbWVzIjpbIlNlYXJjaCIsIkhvbWVQYWdlIiwiZGl2IiwiaDEiLCJzdHlsZSIsImNvbG9yIiwidGV4dEFsaWduIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();