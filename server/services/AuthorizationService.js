import fs from 'fs/promises';

export class AuthorizationService {
    constructor(dbPath) {
        this.dbPath = dbPath;
    }

    async createNewUser(formData) {
        const { login, password } = formData;
        const preparedData = `${login}|${password}\n`;
        await fs.appendFile(this.dbPath, preparedData, 'utf8');
    }

    async findUserData(formData) {
		let result;
		const { login, password } = formData;
		const data = await fs.readFile(this.dbPath);
		const usersArray = data.toString().trim().split('\n');
		const usersParsed = usersArray.map(user => {
			const userData = user.split('|');
			return { login: userData[0], password: userData[1] };
		});

		const expectedUser = usersParsed.find(user => user.login === login);
		if (expectedUser) {
			const isCorrectPassword = expectedUser.password === password;
			result = { userExist: true, isCorrectPassword };
		} else {
			result = { userExist: false };
		}

		return result;
	}
}