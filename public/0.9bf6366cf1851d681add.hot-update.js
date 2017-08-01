webpackHotUpdate(0,{

/***/ 582:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(152);

var _reduxActions = __webpack_require__(232);

var actions = _interopRequireWildcard(_reduxActions);

var _reactRouterDom = __webpack_require__(239);

var _Header = __webpack_require__(627);

var _Header2 = _interopRequireDefault(_Header);

var _Landing = __webpack_require__(628);

var _Landing2 = _interopRequireDefault(_Landing);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
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
            _react2.default.createElement(Payments, null),
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

/***/ 670:
false,

/***/ 671:
false

})