const db = require('../db/index');
const { Folder } = require('./models/index');

class FolderHnadlerService {

  static async createFolder(folderName) {
    return await db.table('folders').put(new Folder(folderName));
  }
}

module.exports = FolderHnadlerService;
