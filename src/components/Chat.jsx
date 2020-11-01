import React from 'react';
import { LoginForm } from './forms/LoginForm';
import UserRegistrationForm from './forms/UserRegistrationForm';

export class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isRegistration: false };
  }

  renderTransition() {
    const { isRegistration } = this.state;

    const labels = isRegistration
      ? { usualText: 'Вернуться ко ', linkText: 'входу в аккаунт?' }
      : { usualText: 'Нет аккаунта? ', linkText: 'Создай его!' };

    return (
      <div className="create-account">
        <p>{labels.usualText}<a href="" onClick={this.changeForm} className="transition">{labels.linkText}</a></p>
      </div>
    );
  }

  changeForm = (event) => {
    event.preventDefault();
    this.setState({ isRegistration: !this.state.isRegistration });
  }

  render() {
    const { isRegistration } = this.state;

    return (
      <>
        {isRegistration ? <UserRegistrationForm /> : <LoginForm />}
        {this.renderTransition()}
      </>
    );
  }
}
