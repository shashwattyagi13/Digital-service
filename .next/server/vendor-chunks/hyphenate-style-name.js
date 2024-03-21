"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/hyphenate-style-name";
exports.ids = ["vendor-chunks/hyphenate-style-name"];
exports.modules = {

/***/ "(ssr)/./node_modules/hyphenate-style-name/index.js":
/*!****************************************************!*\
  !*** ./node_modules/hyphenate-style-name/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable no-var, prefer-template */\nvar uppercasePattern = /[A-Z]/g\nvar msPattern = /^ms-/\nvar cache = {}\n\nfunction toHyphenLower(match) {\n  return '-' + match.toLowerCase()\n}\n\nfunction hyphenateStyleName(name) {\n  if (cache.hasOwnProperty(name)) {\n    return cache[name]\n  }\n\n  var hName = name.replace(uppercasePattern, toHyphenLower)\n  return (cache[name] = msPattern.test(hName) ? '-' + hName : hName)\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hyphenateStyleName);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaHlwaGVuYXRlLXN0eWxlLW5hbWUvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsa0JBQWtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWV0YWJycy8uL25vZGVfbW9kdWxlcy9oeXBoZW5hdGUtc3R5bGUtbmFtZS9pbmRleC5qcz8wZGJkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXZhciwgcHJlZmVyLXRlbXBsYXRlICovXG52YXIgdXBwZXJjYXNlUGF0dGVybiA9IC9bQS1aXS9nXG52YXIgbXNQYXR0ZXJuID0gL15tcy0vXG52YXIgY2FjaGUgPSB7fVxuXG5mdW5jdGlvbiB0b0h5cGhlbkxvd2VyKG1hdGNoKSB7XG4gIHJldHVybiAnLScgKyBtYXRjaC50b0xvd2VyQ2FzZSgpXG59XG5cbmZ1bmN0aW9uIGh5cGhlbmF0ZVN0eWxlTmFtZShuYW1lKSB7XG4gIGlmIChjYWNoZS5oYXNPd25Qcm9wZXJ0eShuYW1lKSkge1xuICAgIHJldHVybiBjYWNoZVtuYW1lXVxuICB9XG5cbiAgdmFyIGhOYW1lID0gbmFtZS5yZXBsYWNlKHVwcGVyY2FzZVBhdHRlcm4sIHRvSHlwaGVuTG93ZXIpXG4gIHJldHVybiAoY2FjaGVbbmFtZV0gPSBtc1BhdHRlcm4udGVzdChoTmFtZSkgPyAnLScgKyBoTmFtZSA6IGhOYW1lKVxufVxuXG5leHBvcnQgZGVmYXVsdCBoeXBoZW5hdGVTdHlsZU5hbWVcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/hyphenate-style-name/index.js\n");

/***/ })

};
;