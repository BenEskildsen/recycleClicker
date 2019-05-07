// @flow

const initEmployeeNeedPaySystem = (store) => {

  let time = store.getState().time;
  const {dispatch} = store;
  store.subscribe(() => {
    const state = store.getState();
    // only run the system on a new tick
    if (state.time == time) {
      return;
    }
    time = state.time;
    const {contractorNeedPayInterval, employeeNeedPayInterval} = state.config;

    if (time % contractorNeedPayInterval == 0) {
      dispatch({type: 'NEED_PAY', roleType: 'contractor'});
    }
    if (time % employeeNeedPayInterval == 0) {
      dispatch({type: 'NEED_PAY', roleType: 'employee'});
    }
  });
}

module.exports = {initEmployeeNeedPaySystem};
