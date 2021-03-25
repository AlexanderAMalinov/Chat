import React from 'react';
import { connect } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import { userLogin } from '../../actions/index';
import { authStatuses } from '../../meta';

const actionCreators = { userLogin };
const mapStateToProps = ({ authStatus }) => ({ authStatus });

const LoginForm = (props) => {
	const isButtonDisabled = props.authStatus.state === authStatuses.REQUESTED;
  	return (
		<Formik
		initialValues={{
			login: '',
			password: ''
		}}
		onSubmit={(values) => props.userLogin(values)}
		>
		<Form className="user-form">
			<h3 className="user-form__form-header">Вход</h3>
			<div className="form-group">
			<label htmlFor="login">Логин</label>
			<Field type="text" className="form-control" id="login" name="login" placeholder="Введите логин" />
			</div>
			<div className="form-group">
			<label htmlFor="password">Пароль</label>
			<Field type="password" className="form-control" id="password" name="password" placeholder="Введите пароль" />
			</div>
			<button disabled={isButtonDisabled} type="submit" className="btn btn-primary user-form__submit-button">Войти</button>
		</Form>
		</Formik>
  	);
};

export default connect(mapStateToProps, actionCreators)(LoginForm);
