'use strict';

var _profile = require('./profile');

var _exportdefault = require('./exportdefault');

var _exportdefault2 = _interopRequireDefault(_exportdefault);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_exportdefault2.default);
console.log(_profile.name);
console.log((0, _profile.add)(10, 23));
console.log((0, _profile.add2)(150, 100));