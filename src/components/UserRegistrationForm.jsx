
const UserRegistrationForm = (props) => {
  return (
    <form className="user-form">
      <h3 className="user-form_form-header">Регистрация</h3>
      <div className="form-group">
        <label for="Login">Логин</label>
        <input type="text" className="form-control" id="Login" placeholder="Введите логин" />
      </div>
      <div className="form-group">
        <label for="password">Пароль</label>
        <input type="password" className="form-control" id="password" placeholder="Введите пароль" />
      </div>
      <div className="form-group">
        <label for="password-conf">Подтверждение пароля</label>
        <input type="password" className="form-control" id="password-conf" placeholder="Введите пароль снова" />
      </div>
      <button type="submit" className="btn btn-primary user-form_submit-button">Зарегистрироваться</button>
    </form>
  );
};

export default UserRegistrationForm;