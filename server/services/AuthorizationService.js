import fs from 'fs/promises';
import crypto from 'crypto';

export class AuthorizationService {
    constructor(dbPath) {
        this.dbPath = dbPath;
    }

    async createNewUser(formData) {
        const { login, password } = formData;
		const id = crypto.randomBytes(16).toString("hex");
        const preparedData = `${id}|${login}|${password}\n`;
        await fs.appendFile(this.dbPath, preparedData, 'utf8');
    }

    async findUserData(formData) {
		const { login } = formData;
		const data = await fs.readFile(this.dbPath);
		const usersArray = data.toString().trim().split('\n');
		const usersParsed = usersArray.map(user => {
			const userData = user.split('|');
			return { login: userData[1], password: userData[2] };
		});

		const expectedUser = usersParsed.find(user => user.login === login);
		return expectedUser || null;
	}

	async getRelatedConversations(id) {
		
	}
}