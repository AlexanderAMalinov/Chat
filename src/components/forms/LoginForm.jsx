import React from 'react';

export const LoginForm = (props) => {
  return (
    <form className="user-form">
      <h3 className="user-form_form-header">Вход</h3>
      <div className="form-group">
        <label htmlFor="Login">Логин</label>
        <input type="text" className="form-control" id="Login" placeholder="Введите логин" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Пароль</label>
        <input type="password" className="form-control" id="password" placeholder="Введите пароль" />
      </div>
      <button type="submit" className="btn btn-primary user-form_submit-button">Войти</button>
    </form>
  );
};
