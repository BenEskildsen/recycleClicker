'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('React');

var BurnAndRecycleRow = require('./BurnAndRecycleRow.react');
var PayContractorAndEmployeeRow = require('./PayContractorAndEmployeeRow.react');
var ResearchAndLobbyRow = require('./ResearchAndLobbyRow.react');
var OverviewAndHireRow = require('./OverviewAndHireRow.react');
var Ticker = require('./components/Ticker.react');

var _require = require('../selectors.js'),
    getDisplayMoney = _require.getDisplayMoney;

/**
 * {state: {...store.getState()}}
 * {props: {store}}
 */


var Game = function (_React$Component) {
  _inherits(Game, _React$Component);

  function Game(props) {
    _classCallCheck(this, Game);

    var _this = _possibleConstructorReturn(this, (Game.__proto__ || Object.getPrototypeOf(Game)).call(this, props));

    props.store.subscribe(function () {
      _this.setState(_extends({}, _this.props.store.getState()));
    });
    _this.state = _extends({}, _this.props.store.getState());
    return _this;
  }

  _createClass(Game, [{
    key: 'render',
    value: function render() {
      var dispatch = this.props.store.dispatch;
      var state = this.state;

      var content = React.createElement(
        React.Fragment,
        null,
        React.createElement(Ticker, { messages: state.ticker.messages }),
        React.createElement(OverviewAndHireRow, { state: state, dispatch: dispatch }),
        React.createElement(BurnAndRecycleRow, { state: state, dispatch: dispatch }),
        React.createElement(PayContractorAndEmployeeRow, { state: state, dispatch: dispatch }),
        React.createElement(ResearchAndLobbyRow, { state: state, dispatch: dispatch })
      );

      return React.createElement(
        'div',
        { className: 'background' },
        content
      );
    }
  }]);

  return Game;
}(React.Component);

;

module.exports = Game;