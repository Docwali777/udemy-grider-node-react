webpackHotUpdate(0,{

/***/ 636:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(175);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(182);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(183);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(184);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(191);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(119);

var _reduxActions = __webpack_require__(192);

var actions = _interopRequireWildcard(_reduxActions);

var _reactRouterDom = __webpack_require__(294);

var _prod = __webpack_require__(778);

var _prod2 = _interopRequireDefault(_prod);

var _Header = __webpack_require__(733);

var _Header2 = _interopRequireDefault(_Header);

var _Landing = __webpack_require__(736);

var _Landing2 = _interopRequireDefault(_Landing);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_prod2.default);

var DashBoard = function DashBoard() {
  return _react2.default.createElement(
    'h2',
    null,
    'Dash Board'
  );
};
var SurveyNew = function SurveyNew() {
  return _react2.default.createElement(
    'h2',
    null,
    'Survey New'
  );
};

var App = function (_Component) {
  (0, _inherits3.default)(App, _Component);

  function App() {
    (0, _classCallCheck3.default)(this, App);
    return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
  }

  (0, _createClass3.default)(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.props.fetchUser();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _reactRouterDom.BrowserRouter,
          null,
          _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_Header2.default, null),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', component: _Landing2.default }),
            _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/surveys', component: DashBoard }),
            _react2.default.createElement(_reactRouterDom.Route, { path: '/surveys/new', component: SurveyNew })
          )
        )
      );
    }
  }]);
  return App;
}(_react.Component);

exports.default = (0, _reactRedux.connect)(null, actions)(App);

/***/ }),

/***/ 732:
false,

/***/ 778:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

module.exports = {
  googleClientID: process.env.GOOGLE_CLIENT_ID,
  googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
  MONGODB_URI: process.env.MONGODB_URI,
  cookieSessionKey: process.env.COOKIE_SESSION_KEY,
  PUBLISHABLE_STRIPE_KEY: process.env.PUBLISHABLE_STRIPE_KEY,
  STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ })

})