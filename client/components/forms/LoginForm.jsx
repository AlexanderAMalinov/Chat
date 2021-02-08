import React from 'react';
import { Formik, Field, Form } from 'formik';

export const LoginForm = () => {
  return (
    <Formik
      initialValues={{
        login: '',
        password: ''
      }}
      onSubmit={(values) => console.log(values)}
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
        <button type="submit" className="btn btn-primary user-form__submit-button">Войти</button>
      </Form>
    </Formik>
  );
};
