'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

require('../AUTH-PASSPORT/userAuth');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var PORT = process.env.PORT || 3000;

require('../ROUTES/google_Auth')(app);

app.get('/', function (req, res) {
  res.send({ message: "Dev Server" });
});

app.listen(PORT, function () {
  console.log('Server on port : ' + PORT);
});