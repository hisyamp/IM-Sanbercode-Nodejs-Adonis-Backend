"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _employee = _interopRequireDefault(require("./employee"));

require("core-js/stable");

var _fs = _interopRequireDefault(require("fs"));

var _promises = _interopRequireDefault(require("fs/promises"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var path = "data.json";

var Bootcamp = /*#__PURE__*/function () {
  function Bootcamp() {
    _classCallCheck(this, Bootcamp);
  }

  _createClass(Bootcamp, null, [{
    key: "register",
    value: function register(input) {
      var _input$split = input.split(","),
          _input$split2 = _slicedToArray(_input$split, 3),
          name = _input$split2[0],
          password = _input$split2[1],
          role = _input$split2[2];

      _fs["default"].readFile(path, function (err, data) {
        if (err) {
          console.log(err);
        }

        var existingData = JSON.parse(data);
        var employee = new _employee["default"](name, password, role);
        console.log(employee);
      });
    }
  }, {
    key: "login",
    value: function login(input) {
      var _input$split3 = input.split(","),
          _input$split4 = _slicedToArray(_input$split3, 2),
          name = _input$split4[0],
          password = _input$split4[1];

      _promises["default"].readFile(path).then(function (data) {
        var employees = JSON.parse(data);
        var indexEmp = employees.findIndex(function (emp) {
          return emp._name == name;
        });

        if (indexEmp == -1) {
          console.log("Data tidak ditemukan");
        } else {
          var employee = employees[indexEmp];

          if (employee._password == password) {
            employee._isLogin = true;
            employees.slice(indexEmp, 1, employee);
            return _promises["default"].writeFile(path, JSON.stringify(employee));
          } else {
            console.log("password salah");
          }
        }
      }).then(function () {
        console.log("berhasil login");
      })["catch"](function (err) {
        console.log("error");
      });
    }
  }]);

  return Bootcamp;
}();

var _default = Bootcamp;
exports["default"] = _default;