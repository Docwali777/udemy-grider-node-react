webpackHotUpdate(0,{

/***/ 732:
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

var _redux = __webpack_require__(120);

var _index = __webpack_require__(192);

var _reactRouterDom = __webpack_require__(294);

var _payments = __webpack_require__(733);

var _payments2 = _interopRequireDefault(_payments);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function (_Component) {
  (0, _inherits3.default)(Header, _Component);

  function Header() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Header);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call.apply(_ref, [this].concat(args))), _this), _this.renderContent = function () {
      switch (_this.props.auth) {
        case null:
          return "Still deciding";
          break;
        case false:
          return _react2.default.createElement(
            'a',
            { href: '/auth/google' },
            'Login With Google'
          );

        default:
          return [_react2.default.createElement(
            'div',
            null,
            '  ',
            _react2.default.createElement(
              'li',
              { key: '' },
              _react2.default.createElement(_payments2.default, null)
            ),
            _react2.default.createElement(
              'li',
              null,
              'Credits ',
              _this.props.auth.credits
            ),
            _react2.default.createElement(
              'li',
              null,
              '  ',
              _react2.default.createElement(
                'a',
                { href: '/api/logout' },
                'Logout'
              ),
              ' '
            )
          )];

      }
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(Header, [{
    key: 'render',
    value: function render() {
      console.log(this.props.auth);
      return _react2.default.createElement(
        'nav',
        null,
        _react2.default.createElement(
          'div',
          { className: 'nav-wrapper' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: this.props.auth ? '/surveys' : '/', className: 'left brand-logo' },
            'Emaily'
          ),
          _react2.default.createElement(
            'ul',
            { className: 'right' },
            this.renderContent(),
            _react2.default.createElement(
              'li',
              null,
              this.props.auth ? _react2.default.createElement(
                'a',
                { href: '/auth/google' },
                'Login With Google'
              ) : _react2.default.createElement(
                'a',
                { href: '/api/logout' },
                'Logout'
              )
            )
          )
        )
      );
    }
  }]);
  return Header;
}(_react.Component);

function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({ fetchUser: _index.fetchUser });
}

function mapStateToProps(_ref2) {
  var auth = _ref2.auth;

  return { auth: auth };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps)(Header);

/***/ })

})