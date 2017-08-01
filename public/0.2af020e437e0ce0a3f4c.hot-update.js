webpackHotUpdate(0,{

/***/ 443:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(444);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(98);

var _reactRedux = __webpack_require__(152);

var _redux = __webpack_require__(105);

var _reduxThunk = __webpack_require__(581);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _App = __webpack_require__(582);

var _App2 = _interopRequireDefault(_App);

var _index = __webpack_require__(668);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_index2.default, {}, (0, _redux.applyMiddleware)(_reduxThunk2.default));

(0, _reactDom.render)(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(_App2.default, null)
), document.getElementById('wali'));

/***/ })

})