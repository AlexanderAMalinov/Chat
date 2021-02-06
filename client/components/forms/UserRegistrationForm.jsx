import React from 'react';

export const UserRegistrationForm = (props) => {
  return (
    <form className="user-form">
      <h3 className="user-form__form-header">Регистрация</h3>
      <div className="form-group">
        <label htmlFor="Login">Логин</label>
        <input type="text" className="form-control" id="Login" placeholder="Введите логин" />
      </div>
      <div className="form-group">
        <label htmlFor="password">Пароль</label>
        <input type="password" className="form-control" id="password" placeholder="Введите пароль" />
      </div>
      <div className="form-group">
        <label htmlFor="password-conf">Подтверждение пароля</label>
        <input type="password" className="form-control" id="password-conf" placeholder="Введите пароль снова" />
      </div>
      <button type="submit" className="btn btn-primary user-form__submit-button">Зарегистрироваться</button>
    </form>
  );
};
