import React from 'react';
import { Formik, Field, Form } from 'formik';
import ValidationService from '../../services/ValidationService';

export const LoginForm = () => {
  return (
    <Formik
      initialValues={{
        login: '',
        password: ''
      }}
      onSubmit={(values) => console.log(values)}
    >
      {({ errors, touched }) => (
        <Form className="user-form">
          <h3 className="user-form__form-header">Вход</h3>
          <div className="form-group">
            <label htmlFor="login">Логин</label>
            <Field type="text" className="form-control" id="login" name="login" placeholder="Введите логин" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Пароль</label>
            <Field validate={ValidationService.validatePassword} type="password" className="form-control" id="password" name="password" placeholder="Введите пароль" />
            {errors.password && touched.password && <div className="user-form__incorrect-notification">{errors.password}</div>}
          </div>
          <button type="submit" disabled={(!touched.password && !touched.login) || errors.password} className="btn btn-primary user-form__submit-button">Войти</button>
        </Form>
      )}
    </Formik>
  );
};
