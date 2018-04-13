'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ArrowLeft = exports.ArrowRight = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArrowRight = exports.ArrowRight = function ArrowRight(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'svg',
      { viewBox: '0 0 1000 1000' },
      _react2.default.createElement('path', { d: 'M694.4,242.4l249.1,249.1c11,11,11,21,0,32L694.4,772.7c-5,5-10,7-16,7c-6,0-11-2-16-7c-11-11-11-21,0-32l210.1-210.1H67.1 c-13,0-23-10-23-23c0-13,10-23,23-23h805.4L662.4,274.5C641.4,253.4,673.4,221.4,694.4,242.4z' })
    )
  );
};

var ArrowLeft = exports.ArrowLeft = function ArrowLeft(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'svg',
      { viewBox: '0 0 1000 1000' },
      _react2.default.createElement('path', { d: 'M336.2,274.5L126.1,484.5h805.4c13,0,23,10,23,23c0,13-10,23-23,23H126.1l210.1,210.1c11,11,11,21,0,32c-5,5-10,7-16,7 s-11-2-16-7L55.1,523.6c-11-11-11-21,0-32l249.1-249.1C325.2,221.4,357.2,253.4,336.2,274.5z' })
    )
  );
};
