import React from 'react';
import { connect } from 'react-redux';
import { registration } from '../../actions/index.js';
import { Formik, Field, Form } from 'formik';
import ValidationService from '../../services/ValidationService';

const actionCreators = { registration };

const UserRegistrationForm = (props) => {

  return (
    <Formik
      initialValues={{
        login: '',
        password: '',
        passwordConfirmation: ''
      }}
      onSubmit={(values) => console.log(values)}
    >
      {({ errors, touched }) => (
        <Form className="user-form">
          <h3 className="user-form__form-header">Регистрация</h3>
          <div className="form-group">
            <label htmlFor="login">Логин</label>
            <Field type="text" className="form-control" name="login" id="login" placeholder="Введите логин" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Пароль</label>
            <Field validate={ValidationService.validatePassword} type="password" className="form-control" name="password" id="password" placeholder="Введите пароль" />
            {errors.password && touched.password && <div className="user-form__incorrect-notification">{errors.password}</div>}
          </div>
          <div className="form-group">
            <label htmlFor="password-conf">Подтверждение пароля</label>
            <Field type="password" className="form-control" name="passwordConfirmation" id="password-conf" placeholder="Введите пароль снова" />
          </div>
          <button type="submit" className="btn btn-primary user-form__submit-button">Зарегистрироваться</button>
        </Form>
      )}
    </Formik>
  );
};

export default connect(null, actionCreators)(UserRegistrationForm);
