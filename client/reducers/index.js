import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import * as actions from '../actions/index.js';

const defaultConversationsState = [];

const conversations = handleActions({
    [actions.login]: (state, { payload: { formData } }) => {
        return state;
    },
    [actions.registration]: (state, { payload: formData }) => {
        console.log(formData);
        return state;
    }
}, defaultConversationsState);

export default combineReducers({
    conversations,
});
