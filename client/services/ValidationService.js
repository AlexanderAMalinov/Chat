export class ValidationService {
  	static validateEmail(value) {
		let error;
		const isValid = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
		if (!isValid) {
			error = 'Invalid email address';
		}
    	return error;
  	}

	static validatePassword(value) {
		let error;
		const passwordMatchRegExp = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;
		if (!passwordMatchRegExp.test(value)) {
			error = 'Пароль некорректен';
		}
		return error;
	}
}

 