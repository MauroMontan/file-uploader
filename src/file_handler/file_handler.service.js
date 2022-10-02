const FileDto = require('./models/file.model');
const drive = require('../drive/');
const Config = require('../config');
const Utils = require('../utils');

class FileHandlerService {

  static async uploadFile(req) {

    const folderName = req.params.foldername;
    let fileName = req.params.filename;
    const file = new FileDto(req.files.file);
    const ext = Utils.getFileExt(file.mimetype);

    if (fileName === null) {
      fileName = Utils.randomFileName();
    }

    //TODO: REPLACE FOR A REAL User folder
    return await drive.folder(Config.ROOT_FOLDERNAME).put(`${folderName}/${fileName}.${ext}`, { data: file.data });
  }

  static async listFiles() {

    return await drive.folder(Config.ROOT_FOLDERNAME).list();
  }

  static async downloadFile(name) {

    const fileList = await this.listFiles();
    let res;
    fileList.names.forEach((e) => {
      if (Utils.matchFile(e, name)) {
        res = Utils.matchFile(e, name);
      }
    });

    const img = await drive.folder(Config.ROOT_FOLDERNAME).get(res);
    const buffer = await img.arrayBuffer();

    return Buffer.from(buffer);

  }

}

module.exports = FileHandlerService;
