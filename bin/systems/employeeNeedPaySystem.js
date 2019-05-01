'use strict';

var contractorNeedPayInterval = 1500 / 4;
var contractorAboutToLeaveInterval = 1500 / 3;
var contractorQuitInterval = 2500 / 4;

var employeeNeedPayInterval = 5000;
var employeeAboutToLeaveInterval = 1000;
var employeeQuitInterval = 1500;

var initEmployeeNeedPaySystem = function initEmployeeNeedPaySystem(store) {

  var time = store.getState().time;
  var dispatch = store.dispatch;

  store.subscribe(function () {
    var state = store.getState();
    // only run the system on a new tick
    if (state.time == time) {
      return;
    }
    time = state.time;

    var numContractors = state.employees.contractor.cur;
    var numContrNeedPay = state.employees.contractor.needPay;
    var numContrAboutToLeave = state.employees.contractor.aboutToLeave;
    if (time % contractorNeedPayInterval == 0) {
      dispatch({ type: 'NEED_PAY', roleType: 'contractor', num: numContractors });
    }
    if (time % contractorAboutToLeaveInterval == 0) {
      dispatch({ type: 'ABOUT_TO_LEAVE', roleType: 'contractor', num: numContrNeedPay });
    }
    if (time % contractorQuitInterval == 0) {
      dispatch({ type: 'QUIT', roleType: 'contractor', num: numContrAboutToLeave });
    }

    var numEmployees = state.employees.employee.cur;
    if (time % employeeNeedPayInterval == 0) {
      dispatch({ type: 'NEED_PAY', roleType: 'employee', num: numEmployees });
    }
    if (time % employeeAboutToLeaveInterval == 0) {
      dispatch({ type: 'ABOUT_TO_LEAVE', roleType: 'employee', num: numEmployees });
    }
    if (time % employeeQuitInterval == 0) {
      dispatch({ type: 'QUIT', roleType: 'employee', num: numEmployees });
    }
  });
};

module.exports = { initEmployeeNeedPaySystem: initEmployeeNeedPaySystem };