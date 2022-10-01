const db = require('../db/index');
const { Folder } = require('./models/index');

class FolderHnadlerService {

  static async createFolder(payload) {
    return await db.table('folders').put(new Folder(payload));
  }
}

module.exports = FolderHnadlerService;
