import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions/index.js';
import { authStatuses, baseAppStates } from '../meta.js';

const baseAppState = handleActions({
  [actions.changeAppState]: (state, { payload }) => payload,
}, baseAppStates.START_PAGE);

const conversations = handleActions({
  [actions.authSuccess]: (state, { payload }) => {
      return state;
  }
}, []);

const currentUserInfo = handleActions({
  [actions.authSuccess]: (state, { payload }) => ({ ...payload })
}, {});

const authStatus = handleActions({
  [actions.authRequest]: () => ({ state: authStatuses.REQUESTED }),
  [actions.authFailure]: (state, { payload }) => ({ state: authStatuses.FAILURE, message: payload.errorMessage }),
  [actions.authSuccess]: () => ({ state: authStatuses.SUCCESS })
}, {});

export default combineReducers({
  baseAppState,
  conversations,
  currentUserInfo,
  authStatus
});
