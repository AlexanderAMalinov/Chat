import fs from 'fs/promises';
import crypto from 'crypto';
import { authErrorMessages } from '../meta.js';

export class AuthorizationService {
  constructor(dbPath, logsPath) {
    this.dbPath = dbPath;
    this.logsPath = logsPath;
    // Keep data of all users in RAM??
    this.__readUsersDatabase()
      .then(() => this.__parseUsersData())
      .then(() => this.serviceReady = true);
  }

  async makeLogin(formData) {
    const userData = await this.__getUserData(formData);
    if (!userData) {
      return { success: false, message: authErrorMessages.USER_DO_NOT_EXIST };
    }

    const isCorrectPassword = userData.password === formData.password;
    if (isCorrectPassword) {
      return { success: true, userInfo: userData };
    } else {
      return { success: false, message: authErrorMessages.INCORRECT_PASSWORD };
    }
  }

  async createNewUser(formData) {
    const { login, password } = formData;
    const sameUserExist = !!await this.__getUserData(formData);
    if (sameUserExist) {
      return { success: false, message: authErrorMessages.SAME_USER_EXIST };
    }

    const id = this.__generateUniqUserID();
    const preparedData = `${id}|${login}|${password}\n`;

    try {
      await fs.appendFile(this.dbPath, preparedData, 'utf8');
      const newUser = { id, login, password };
      this._parsedUsersData.push(newUser);
      return { success: true, userInfo: newUser };
    } catch (error) {
      console.log(error);
      return { success: false, message: authErrorMessages.SERVER_ERROR };
    }
  }

  async __getUserData(formData) {
    const { login } = formData;
    const expectedUser = this._parsedUsersData.find((user) => user.login === login);
    return expectedUser || null;
  }

  __parseUsersData() {
    const usersArray = this._rawUsersData.toString().trim().split('\n');
    this._parsedUsersData = usersArray.map((user) => {
      const [id, login, password] = user.split('|');
      return { id, login, password };
    });
  }

  __generateUniqUserID() {
    return crypto.randomBytes(16).toString('hex');
  }

  async __readUsersDatabase() {
    try {
      const data = await fs.readFile(this.dbPath);
      this._rawUsersData = data;
    } catch(error) {
      console.log(error);
      return null;
    }
  }
}
