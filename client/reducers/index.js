import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions/index.js';

const baseAppState = handleActions({
    [actions.changeAppState]: (state, { payload }) => payload,
}, 'startPage');

const conversations = handleActions({
    [actions.authSuccess]: (state, { payload: { authData } }) => {
        return state;
    }
}, []);

const currentUserInfo = handleActions({
    [actions.authSuccess]: (state, { payload: { authData } }) => {
        return { ...authData };
    }
}, {});

const authStatus = handleActions({
    [actions.authRequest]: () => ({ state: 'requested' }),
    [actions.authFailure]: (state, { payload: { authData } }) => ({ state: 'failure', message: authData.errorMessage })
}, {});

export default combineReducers({
    baseAppState,
    conversations,
    currentUserInfo,
    authStatus
});
