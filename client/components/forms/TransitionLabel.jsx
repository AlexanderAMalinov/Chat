import React from 'react';

const labels = {
	toLogin: { text: 'Вернуться ко ', linkText: 'входу в аккаунт?' },
	toRegistration: { text: 'Нет аккаунта? ', linkText: 'Создай его!' }
};

export const TransitionLabel = (props) => {
	const isRegistration = props.isRegistrationMode;
	const relatedText = isRegistration ? labels.toLogin : labels.toRegistration;
	return (
			<div className="login-registration-transition-label">
				<p>{relatedText.text}<a href="" onClick={props.onChangeForm} className="transition">{relatedText.linkText}</a></p>
			</div>
	);
};
