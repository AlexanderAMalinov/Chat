import axios from 'axios';
import { createAction } from 'redux-actions';
import { routes } from '../../common/routes';

export const authRequest = createAction('AUTH_REQUEST');
export const authSuccess = createAction('AUTH_SUCCESS');
export const authFailure = createAction('AUTH_FAILURE');

export const userCreate = (formData) => async (dispatch) => {
	let authData;
	dispatch(authRequest());
	try {
		authData = await axios.post(routes.CREATE_USER, formData);
		dispatch(authSuccess({ payload: authData }));
	} catch (e) {
		console.log(e);
		dispatch(authFailure({ payload: authData }));
	}
};

export const userLogin = (formData) => async (dispatch) => {
	let authData;
	dispatch(authRequest());
	try {
		authData = await axios.post(routes.LOGIN, formData);
		dispatch(authSuccess({ payload: authData }));
	} catch (e) {
		console.log(e);
		dispatch(authFailure({ payload: authData }));
	}
};