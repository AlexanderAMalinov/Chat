import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions/index.js';

const defaultUserInfo = {};
const defaultConversationsState = [];

const conversations = handleActions({
    [actions.login]: (state, { payload: { conversationList } }) => {
        return state;
    }
}, defaultConversationsState);

const currentUserInfo = handleActions({
    [actions.login]: (state, { payload: { userInfo } }) => {
        return { ...userInfo };
    },
    [actions.registration]: (state, { payload: { userInfo } }) => {
        return { ...userInfo };
    },
}, defaultUserInfo);

export default combineReducers({
    conversations,
    currentUserInfo
});
