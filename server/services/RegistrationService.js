import fs from 'fs/promises';

export class RegistrationService {
    constructor(dbPath) {
        this.dbPath = dbPath;
    }

    async createNewUser(formData) {
        const { login, password } = formData;
        const preparedData = `${login}|${password}\n`;
        await fs.appendFile(this.dbPath, preparedData, 'utf8');
    }
}
