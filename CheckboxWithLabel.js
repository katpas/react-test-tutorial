// CheckboxWithLabel.js
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var CheckboxWithLabel = (function (_React$Component) {
  _inherits(CheckboxWithLabel, _React$Component);

  function CheckboxWithLabel(props) {
    _classCallCheck(this, CheckboxWithLabel);

    _get(Object.getPrototypeOf(CheckboxWithLabel.prototype), "constructor", this).call(this, props);
    this.state = { isChecked: false };

    this.onChange = this.onChange.bind(this);
  }

  _createClass(CheckboxWithLabel, [{
    key: "onChange",
    value: function onChange() {
      this.setState({ isChecked: !this.state.isChecked });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2["default"].createElement(
        "label",
        null,
        _react2["default"].createElement("input", {
          type: "checkbox",
          checked: this.state.isChecked,
          onChange: this.onChange
        }),
        this.state.isChecked ? this.props.labelOn : this.props.labelOff
      );
    }
  }]);

  return CheckboxWithLabel;
})(_react2["default"].Component);

exports["default"] = CheckboxWithLabel;
module.exports = exports["default"];
