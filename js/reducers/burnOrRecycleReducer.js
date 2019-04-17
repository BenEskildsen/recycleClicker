// @flow

import type {State} from '../types';

const burnOrRecycleReducer = (state: State, action): State => {
  const {
    trashPerBurn, revenuePerBurn,
    trashPerRecycle, revenuePerRecycle,
  } = state.config;
  switch (action.type) {
    case 'BURN':
      return {
        ...state,
        trash: {
          ...state.trash,
          cur: state.trash.cur - trashPerBurn,
        },
        burn: {
          ...state.burn,
          cur: state.burn.cur + trashPerBurn,
        },
        money: {
          ...state.money,
          cur: state.money.cur + revenuePerBurn,
        },
      };
    case 'RECYCLE':
      return {
        ...state,
        trash: {
          ...state.trash,
          cur: state.trash.cur - trashPerRecycle,
        },
        recycle: {
          ...state.recycle,
          cur: state.recycle.cur + trashPerRecycle,
        },
        money: {
          ...state.money,
          cur: state.money.cur + revenuePerRecycle,
        },
      };
  }
}

module.exports = {burnOrRecycleReducer};