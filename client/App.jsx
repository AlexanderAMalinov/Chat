import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from './actions/index.js';
import { baseAppStates } from './meta';
import LoginForm from './components/forms/LoginForm';
import { TransitionLabel } from './components/forms/TransitionLabel';
import UserRegistrationForm from './components/forms/RegistrationForm';

const actionCreators = {
  registration: actions.registration,
  login: actions.login
};

const mapStateToProps = ({ baseAppState, conversations }) => ({ conversations, baseAppState });

const App = (props) => {
  const { baseAppState } = props;
  const [isRegistration, setFormState] = useState(false);
  const changeForm = (event) => {
    event.preventDefault();
    setFormState(!isRegistration);
  };

  if (baseAppState === baseAppStates.START_PAGE) {
    return (
      <>
        {isRegistration ? <UserRegistrationForm /> : <LoginForm />}
        <TransitionLabel onChangeForm={changeForm} isRegistrationMode={isRegistration} />
      </>
    );
  } else {
    // Place for chat layout
    return (
      <>
      </>
    );
  }
};

export default connect(mapStateToProps, actionCreators)(App);
