import React from 'react';
import { connect } from 'react-redux';
import { registration } from '../../actions/index.js';
import { Formik, Field, Form } from 'formik';

const actionCreators = { registration };

const UserRegistrationForm = (props) => {
  // const onSubmit = (event) => {
  //   const { registration } = props;
  //   event.preventDefault();
  //   registration({ formData: 'boom!' });
  // };

  return (
    <Formik
      initialValues={{
        login: '',
        password: '',
        passwordConfirmation: ''
      }}
      onSubmit={(values) => console.log(values)}
    >
      <Form className="user-form">
        <h3 className="user-form__form-header">Регистрация</h3>
        <div className="form-group">
          <label htmlFor="login">Логин</label>
          <Field required type="text" className="form-control" name="login" id="login" placeholder="Введите логин" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Пароль</label>
          <Field required type="password" className="form-control" name="password" id="password" placeholder="Введите пароль" />
        </div>
        <div className="form-group">
          <label htmlFor="password-conf">Подтверждение пароля</label>
          <Field required type="password" className="form-control" name="passwordConfirmation" id="password-conf" placeholder="Введите пароль снова" />
        </div>
        <button type="submit" className="btn btn-primary user-form__submit-button">Зарегистрироваться</button>
      </Form>
    </Formik>
  );
};

export default connect(null, actionCreators)(UserRegistrationForm);
