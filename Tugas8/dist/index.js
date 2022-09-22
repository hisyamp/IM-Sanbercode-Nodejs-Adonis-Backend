"use strict";

var _bootcamp = _interopRequireDefault(require("./libs/bootcamp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var args = process.argv.slice(2);
var command = args[0];
var input = args[1];

switch (command) {
  case "register":
    _bootcamp["default"].register(input);

    break;

  case "login":
    _bootcamp["default"].login(input);

    break;

  default:
    break;
}