import React from 'react';
import { connect } from 'react-redux';
import { LoginForm } from './components/forms/LoginForm';
import UserRegistrationForm from './components/forms/UserRegistrationForm';
import * as actions from './actions/index.js';

const actionCreators = {
  registration: actions.registration,
  login: actions.login
};

const mapStateToProps = (state) => ({ conversations: state.conversations });
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isRegistration: false };
  }

  renderTransitionLabel() {
    const { isRegistration } = this.state;

    const labels = isRegistration
      ? { usualText: 'Вернуться ко ', linkText: 'входу в аккаунт?' }
      : { usualText: 'Нет аккаунта? ', linkText: 'Создай его!' };

    return (
      <div className="login-registration-transition-label">
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
        {this.renderTransitionLabel()}
      </>
    );
  }
}

export default connect(mapStateToProps, actionCreators)(App);
