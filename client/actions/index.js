import axios from 'axios';
import { createAction } from 'redux-actions';
import { routes } from '../../common/routes';

export const login = createAction('LOGIN');
export const registration = createAction('REGISTRATION');

export const userCreate = (formData) => async (dispatch) => {
  try {
    const userInfo = await axios.post(routes.CREATE_USER, formData);
		dispatch(registration({ payload: userInfo }));
  } catch (e) {
    console.log(e);
  }
};

export const userLogin = (formData) => async (dispatch) => {
  try {
    const userInfo = await axios.post(routes.LOGIN, formData);
    dispatch(login({ payload: userInfo }));
  } catch (e) {
    console.log(e);
  }
};