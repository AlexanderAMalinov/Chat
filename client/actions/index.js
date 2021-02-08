import { createAction } from 'redux-actions';
import { routes } from '../../common/routes';
import axios from 'axios';

export const registration = createAction('REGISTRATION');
export const login = createAction('LOGIN');

export const userCreate = (formData) => async (dispatch) => {
  try {
    const data = await axios.post(routes.CREATE_USER, formData);
		dispatch(registration());
  } catch (e) {
    console.log(e);
  }
};