const db = require('../db/index');
const { Folder } = require('./models/index');

class FolderHnadlerService {

  static async folderExist(folderName) {

    const existingFolder = await this.getFolder(folderName);

    if (existingFolder != null) {

      return existingFolder.name === folderName ? true : false;
    }

  }
  static async createFolder(payload) {

    let res;
    if (await this.folderExist(payload.name)) {

      res = { 'message': 'folder already exist' };
    } else {
      res = await db.table('folders').put(new Folder(payload));
    }
    return res;
  }

  static async getFolders() {
    return await db.table('folders').fetch({});
  }

  static async getFolder(name) {
    const res = await db.table('folders').fetch({ name: name });
    const items = res.items;
    return items[0];

  }

}

module.exports = FolderHnadlerService;
