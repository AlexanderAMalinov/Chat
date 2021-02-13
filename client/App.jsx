import React from 'react';
import { connect } from 'react-redux';
import * as actions from './actions/index.js';
import LoginForm from './components/forms/LoginForm';
import { TransitionLabel } from './components/forms/TransitionLabel';
import UserRegistrationForm from './components/forms/RegistrationForm';

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

	changeForm = (event) => {
		event.preventDefault();
		this.setState({ isRegistration: !this.state.isRegistration });
	}

	render() {
		const { isRegistration } = this.state;
		return (
		<>
			{isRegistration ? <UserRegistrationForm /> : <LoginForm />}
			<TransitionLabel onChangeForm={this.changeForm} isRegistrationMode={isRegistration} />
		</>
		);
	}
}

export default connect(mapStateToProps, actionCreators)(App);
