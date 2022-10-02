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

}

module.exports = FileHandlerService;
