webpackHotUpdate(0,{

/***/ 670:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactStripeCheckout = __webpack_require__(671);

var _reactStripeCheckout2 = _interopRequireDefault(_reactStripeCheckout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Payments = function (_Component) {
  _inherits(Payments, _Component);

  function Payments() {
    _classCallCheck(this, Payments);

    return _possibleConstructorReturn(this, (Payments.__proto__ || Object.getPrototypeOf(Payments)).apply(this, arguments));
  }

  _createClass(Payments, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_reactStripeCheckout2.default, {
        name: 'Emaily',
        descriptio: true,
        amount: 500,
        currency: 'USD',
        stripeKey: "pk_test_rM0r4CXtfaDluXMl9zvDq9I4",
        token: function token(_token) {
          return console.log(_token);
        }
      });
    }
  }]);

  return Payments;
}(_react.Component);

exports.default = Payments;

/***/ })

})