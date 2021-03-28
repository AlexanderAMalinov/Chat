import fs from 'fs/promises';

export class ConversationService {
  constructor(conversationDBPath, logPath) {
    this.conversationDBPath = conversationDBPath;
    this.logPath = logPath;
    fs.readdir(this.conversationDBPath)
      .then((err, fileNames) => {
        this._dbFileNames = fileNames;
      });
  }

  getUserConversationsInfo(login) {
    
  }

  getUserConversation(convId) {

  }
}
