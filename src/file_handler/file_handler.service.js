const FileDto = require('./models/file.model');
const drive = require('../drive/');
const Config = require('../config');

class FileHandlerService {

  static async uploadFile(req) {

    const folderName = req.params.foldername;

    const file = new FileDto(req.files.file);

    //TODO: REPLACE FOR A REAL User folder
    return await drive.folder(Config.ROOT_FOLDERNAME).put(`${folderName}/${file.name}`, { data: file.data });
  }

}

module.exports = FileHandlerService;
