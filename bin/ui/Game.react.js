'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var React = require('React');

var Button = require('./components/Button.react');
var Card = require('./components/Card.react');
var LabelledValue = require('./components/LabelledValue.react');
var RadioPicker = require('./components/RadioPicker.react');
var Slider = require('./components/Slider.react');
var Table = require('./components/Table.react');
var Ticker = require('./components/Ticker.react');

var _require = require('../selectors/selectors.js'),
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
        React.createElement(
          Card,
          null,
          React.createElement(LabelledValue, { label: 'Trash', value: state.trash.cur }),
          React.createElement(LabelledValue, { label: 'Money', value: getDisplayMoney(state) }),
          React.createElement(LabelledValue, {
            label: 'Contractors',
            value: state.employees.Recycler.cur + state.employees.Burner.cur
          }),
          React.createElement(LabelledValue, {
            label: 'Employees',
            value: state.employees.Manager.cur + state.employees.Recruiter.cur + state.employees.Scientist.cur + state.employees.Lawyer.cur
          })
        ),
        React.createElement(Card, null),
        React.createElement(
          Card,
          null,
          React.createElement(Button, { label: 'Burn', onClick: function onClick() {
              return dispatch({ type: 'BURN', num: 1 });
            } }),
          React.createElement(LabelledValue, { label: 'Burned', value: state.burn.cur }),
          React.createElement(LabelledValue, { label: 'Burners', value: state.employees.Burner.cur })
        ),
        React.createElement(
          Card,
          null,
          React.createElement(Button, { label: 'Recycle', onClick: function onClick() {
              return dispatch({ type: 'RECYCLE', num: 1 });
            } }),
          React.createElement(LabelledValue, { label: 'Recycled', value: state.recycle.cur }),
          React.createElement(LabelledValue, { label: 'Recyclers', value: state.employees.Recycler.cur })
        ),
        React.createElement(
          Card,
          null,
          React.createElement(Button, {
            label: 'Hire',
            onClick: function onClick() {
              return dispatch({ type: 'HIRE', num: 1 });
            }
          }),
          React.createElement(RadioPicker, {
            options: state.employees.roleOptions,
            selected: state.ui.selectedRole,
            onChange: function onChange(role) {
              return dispatch({ type: 'SELECT_ROLE', role: role });
            }
          }),
          React.createElement(LabelledValue, { label: 'Recruiters', value: state.employees.Recruiter.cur })
        ),
        React.createElement(
          Card,
          null,
          React.createElement(Button, { label: 'Pay', onClick: function onClick() {
              return dispatch({ type: 'PAY', num: 1 });
            } }),
          React.createElement(LabelledValue, { label: 'Managers', value: state.employees.Manager.cur }),
          React.createElement(LabelledValue, {
            label: 'Contractors to pay',
            value: state.employees.contractor.needPay
          }),
          React.createElement(LabelledValue, {
            label: 'Contrs. about to quit',
            value: state.employees.contractor.aboutToLeave
          }),
          React.createElement(LabelledValue, {
            label: 'Employees to pay',
            value: state.employees.employee.needPay
          }),
          React.createElement(LabelledValue, {
            label: 'Empls. about to quit',
            value: state.employees.employee.aboutToLeave
          })
        ),
        React.createElement(
          Card,
          null,
          React.createElement(Button, {
            label: 'Research',
            onClick: function onClick() {
              return dispatch({ type: 'RESEARCH', num: 1 });
            }
          }),
          React.createElement(LabelledValue, { label: 'Scientists', value: state.employees.Scientist.cur })
        ),
        React.createElement(
          Card,
          null,
          React.createElement(Button, {
            label: 'Lobby',
            onClick: function onClick() {
              return dispatch({ type: 'LOBBY', num: 1 });
            }
          }),
          React.createElement(LabelledValue, { label: 'Lawyers', value: state.employees.Lawyer.cur })
        )
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