"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-client)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"8814f7f2e5e8\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9nbG9iYWxzLmNzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9nbG9iYWxzLmNzcz8zMzg3Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiODgxNGY3ZjJlNWU4XCJcbmlmIChtb2R1bGUuaG90KSB7IG1vZHVsZS5ob3QuYWNjZXB0KCkgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-client)/./src/app/slices/business.js":
/*!************************************!*\
  !*** ./src/app/slices/business.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"businessesReducer\": function() { return /* binding */ businessesReducer; },\n/* harmony export */   \"fetchBusinesses\": function() { return /* binding */ fetchBusinesses; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-client)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* harmony import */ var _utils_business__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/business */ \"(app-client)/./src/app/utils/business.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"(app-client)/./node_modules/axios/lib/axios.js\");\n\n\n\nconst initialState = {\n    businesses: [],\n    \"status\": \"idle\",\n    error: \"\"\n};\nconst fetchBusinesses = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createAsyncThunk)(\"businesses/fetchBusinesses\", async ()=>{\n    try {\n        const { data: response  } = await axios__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/api/business\");\n        //console.log(JSON.stringify(response));\n        return response;\n    } catch (error) {\n        throw error; // This will trigger the error state\n    }\n});\nconst businessesSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"businesses\",\n    initialState,\n    reducers: {},\n    extraReducers: (builder)=>{\n        builder.addCase(fetchBusinesses.pending, (state, actions)=>{\n            console.log(\"businesses pending\");\n            state.status = \"pending\";\n        }), builder.addCase(fetchBusinesses.fulfilled, (state, actions)=>{\n            state.status = \"fulfilled\";\n            console.log(\"businesses gotten\", actions.payload);\n            state.businesses = actions.payload;\n        }), builder.addCase(fetchBusinesses.rejected, (state, actions)=>{\n            //   console.log('businesses didnt gotten');\n            state.businesses = state.businesses.concat(actions.payload);\n            state.status = \"rejected\";\n        });\n    }\n});\n// `createSlice` automatically generated action creators with these names.\n// export them as named exports from this \"slice\" file\n// export const { originAdded, originToggled } = businessesSlice.actions\n// Export the slice reducer as the default export\n//export default businessesSlice.reducer\nconst businessesReducer = businessesSlice.reducer;\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2FwcC9zbGljZXMvYnVzaW5lc3MuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBaUU7QUFDdEI7QUFDakI7QUFFMUIsTUFBTUksZUFBZTtJQUNuQkYsWUFBWSxFQUFFO0lBQ2QsVUFBVTtJQUNWRyxPQUFRO0FBQ1Y7QUFHQSxNQUFNQyxrQkFBa0JMLGtFQUFnQkEsQ0FBQyw4QkFBOEIsVUFBWTtJQUNqRixJQUFJO1FBQ0YsTUFBTSxFQUFFTSxNQUFNQyxTQUFRLEVBQUUsR0FBRyxNQUFNTCxpREFBUyxDQUFDO1FBQzNDLHdDQUF3QztRQUN4QyxPQUFPSztJQUNULEVBQUUsT0FBT0gsT0FBTztRQUNkLE1BQU1BLE1BQU0sQ0FBQyxvQ0FBb0M7SUFDbkQ7QUFDRjtBQU1BLE1BQU1LLGtCQUFrQlYsNkRBQVdBLENBQUM7SUFDbENXLE1BQU07SUFDTlA7SUFDQVEsVUFBVSxDQUVWO0lBQ0FDLGVBQWUsQ0FBQ0MsVUFBWTtRQUMxQkEsUUFBUUMsT0FBTyxDQUFDVCxnQkFBZ0JVLE9BQU8sRUFBRSxDQUFDQyxPQUFPQyxVQUFZO1lBQzNEQyxRQUFRQyxHQUFHLENBQUM7WUFDWkgsTUFBTUksTUFBTSxHQUFHO1FBQ2pCLElBQ0FQLFFBQVFDLE9BQU8sQ0FBQ1QsZ0JBQWdCZ0IsU0FBUyxFQUFFLENBQUNMLE9BQU9DLFVBQVk7WUFDN0RELE1BQU1JLE1BQU0sR0FBRztZQUNoQkYsUUFBUUMsR0FBRyxDQUFDLHFCQUFvQkYsUUFBUUssT0FBTztZQUM5Q04sTUFBTWYsVUFBVSxHQUFHZ0IsUUFBUUssT0FBTztRQUNwQyxJQUNBVCxRQUFRQyxPQUFPLENBQUNULGdCQUFnQmtCLFFBQVEsRUFBRSxDQUFDUCxPQUFPQyxVQUFZO1lBQy9ELDRDQUE0QztZQUN6Q0QsTUFBTWYsVUFBVSxHQUFHZSxNQUFNZixVQUFVLENBQUN1QixNQUFNLENBQUNQLFFBQVFLLE9BQU87WUFDMUROLE1BQU1JLE1BQU0sR0FBRztRQUNqQixFQUFFO0lBQ0o7QUFFRjtBQUVBLDBFQUEwRTtBQUMxRSxzREFBc0Q7QUFDdEQsd0VBQXdFO0FBRXhFLGlEQUFpRDtBQUNqRCx3Q0FBd0M7QUFDakMsTUFBTUssb0JBQW9CaEIsZ0JBQWdCaUIsT0FBTyxDQUFDO0FBQzlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvc2xpY2VzL2J1c2luZXNzLmpzPzY2MDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UsIGNyZWF0ZUFzeW5jVGh1bmsgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmltcG9ydCBidXNpbmVzc2VzIGZyb20gJy4uL3V0aWxzL2J1c2luZXNzJztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgYnVzaW5lc3NlczogW10sXG4gIFwic3RhdHVzXCI6ICdpZGxlJyxcbiAgZXJyb3IgOiAnJ1xufVxuXG5cbmNvbnN0IGZldGNoQnVzaW5lc3NlcyA9IGNyZWF0ZUFzeW5jVGh1bmsoJ2J1c2luZXNzZXMvZmV0Y2hCdXNpbmVzc2VzJywgYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHsgZGF0YTogcmVzcG9uc2UgfSA9IGF3YWl0IGF4aW9zLmdldCgnL2FwaS9idXNpbmVzcycpO1xuICAgIC8vY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmVzcG9uc2UpKTtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgdGhyb3cgZXJyb3I7IC8vIFRoaXMgd2lsbCB0cmlnZ2VyIHRoZSBlcnJvciBzdGF0ZVxuICB9XG59KTtcblxuXG5cblxuXG5jb25zdCBidXNpbmVzc2VzU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6ICdidXNpbmVzc2VzJyxcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge1xuXG4gIH0sXG4gIGV4dHJhUmVkdWNlcnM6IChidWlsZGVyKSA9PiB7XG4gICAgYnVpbGRlci5hZGRDYXNlKGZldGNoQnVzaW5lc3Nlcy5wZW5kaW5nLCAoc3RhdGUsIGFjdGlvbnMpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdidXNpbmVzc2VzIHBlbmRpbmcnKTtcbiAgICAgIHN0YXRlLnN0YXR1cyA9ICdwZW5kaW5nJztcbiAgICB9KSxcbiAgICBidWlsZGVyLmFkZENhc2UoZmV0Y2hCdXNpbmVzc2VzLmZ1bGZpbGxlZCwgKHN0YXRlLCBhY3Rpb25zKSA9PiB7XG4gICAgICBzdGF0ZS5zdGF0dXMgPSAnZnVsZmlsbGVkJztcbiAgICAgY29uc29sZS5sb2coJ2J1c2luZXNzZXMgZ290dGVuJyxhY3Rpb25zLnBheWxvYWQpO1xuICAgICAgc3RhdGUuYnVzaW5lc3NlcyA9IGFjdGlvbnMucGF5bG9hZDtcbiAgICB9KSxcbiAgICBidWlsZGVyLmFkZENhc2UoZmV0Y2hCdXNpbmVzc2VzLnJlamVjdGVkLCAoc3RhdGUsIGFjdGlvbnMpID0+IHtcbiAgIC8vICAgY29uc29sZS5sb2coJ2J1c2luZXNzZXMgZGlkbnQgZ290dGVuJyk7XG4gICAgICBzdGF0ZS5idXNpbmVzc2VzID0gc3RhdGUuYnVzaW5lc3Nlcy5jb25jYXQoYWN0aW9ucy5wYXlsb2FkKTtcbiAgICAgIHN0YXRlLnN0YXR1cyA9ICdyZWplY3RlZCc7XG4gICAgfSlcbiAgfVxuIFxufSlcblxuLy8gYGNyZWF0ZVNsaWNlYCBhdXRvbWF0aWNhbGx5IGdlbmVyYXRlZCBhY3Rpb24gY3JlYXRvcnMgd2l0aCB0aGVzZSBuYW1lcy5cbi8vIGV4cG9ydCB0aGVtIGFzIG5hbWVkIGV4cG9ydHMgZnJvbSB0aGlzIFwic2xpY2VcIiBmaWxlXG4vLyBleHBvcnQgY29uc3QgeyBvcmlnaW5BZGRlZCwgb3JpZ2luVG9nZ2xlZCB9ID0gYnVzaW5lc3Nlc1NsaWNlLmFjdGlvbnNcblxuLy8gRXhwb3J0IHRoZSBzbGljZSByZWR1Y2VyIGFzIHRoZSBkZWZhdWx0IGV4cG9ydFxuLy9leHBvcnQgZGVmYXVsdCBidXNpbmVzc2VzU2xpY2UucmVkdWNlclxuZXhwb3J0IGNvbnN0IGJ1c2luZXNzZXNSZWR1Y2VyID0gYnVzaW5lc3Nlc1NsaWNlLnJlZHVjZXI7XG5leHBvcnQgeyBmZXRjaEJ1c2luZXNzZXMgfTsiXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJjcmVhdGVBc3luY1RodW5rIiwiYnVzaW5lc3NlcyIsImF4aW9zIiwiaW5pdGlhbFN0YXRlIiwiZXJyb3IiLCJmZXRjaEJ1c2luZXNzZXMiLCJkYXRhIiwicmVzcG9uc2UiLCJnZXQiLCJidXNpbmVzc2VzU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJleHRyYVJlZHVjZXJzIiwiYnVpbGRlciIsImFkZENhc2UiLCJwZW5kaW5nIiwic3RhdGUiLCJhY3Rpb25zIiwiY29uc29sZSIsImxvZyIsInN0YXR1cyIsImZ1bGZpbGxlZCIsInBheWxvYWQiLCJyZWplY3RlZCIsImNvbmNhdCIsImJ1c2luZXNzZXNSZWR1Y2VyIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./src/app/slices/business.js\n"));

/***/ })

});