import { combineReducers } from 'redux';

function userData(state = {}, action) {
  switch (action.type) {
    case 'USER_DATA_FETCH':
      return action.userData;

    default:
      return state;
  }
}

export default combineReducers({ userData });
