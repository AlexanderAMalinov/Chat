import React from 'react';

export class LoginForm extends React.Component {
  constructor(props) {
    super(props);
  }

  onTextType(e) {
    
  }

  render() {
    return (
      <form className="user-form">
        <h3 className="user-form__form-header">Вход</h3>
        <div className="form-group">
          <label htmlFor="Login">Логин</label>
          <input onChange={this.onTextType} type="text" className="form-control" id="Login" placeholder="Введите логин" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Пароль</label>
          <input type="password" className="form-control" id="password" placeholder="Введите пароль" />
        </div>
        <button type="submit" className="btn btn-primary user-form_submit-button">Войти</button>
      </form>
    );
  }
};
