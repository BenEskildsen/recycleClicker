'use strict';

var depressedStr = 'background: rgba(158,158,158,0.3); ' + 'color: rgba(0, 0, 0, 0.6);';

var unDepressedStr = 'background: rgba(158,158,158,0.1); ' + 'color: rgba(0, 0, 0, 0.5);';

var initEmployeeClickSystem = function initEmployeeClickSystem(store) {

  var time = store.getState().time;
  var dispatch = store.dispatch;

  store.subscribe(function () {
    var state = store.getState();
    // only check on a new tick
    if (state.time == time) {
      return;
    }
    time = state.time;

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      var _loop = function _loop() {
        var roleOption = _step.value;

        var role = state.employees[roleOption];
        var button = document.getElementById(role.action + '_button');

        if (time % role.clickRate == 0 && role.cur > 0) {

          // don't press button if it won't do anything
          if (role.action == 'PAY_CONTRACTOR' && state.employees.contractor.dontNeedPay == state.employees.contractor.cur) {
            return 'continue';
          }
          if (role.action == 'PAY_EMPLOYEE' && state.employees.employee.dontNeedPay == state.employees.employee.cur) {
            return 'continue';
          }
          if ((role.action == 'RECYCLE' || role.action == 'BURN') && state.trash.cur <= 0) {
            return 'continue';
          }

          setTimeout(function () {
            button.setAttribute('style', depressedStr);
            setTimeout(function () {
              return button.setAttribute('style', unDepressedStr);
            }, 150);
          }, 0);
          dispatch({ type: role.action, num: role.cur });
        }
      };

      for (var _iterator = state.employees.roleOptions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _ret = _loop();

        if (_ret === 'continue') continue;
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  });
};

module.exports = { initEmployeeClickSystem: initEmployeeClickSystem };