const FileDto = require("./models/file.model");
const drive = require("../drive/");
const Config = require("../config");
const Utils = require("../utils");

class FileHandlerService {
  static async uploadFile(req) {
    let fileName = req.params.filename;
    const file = new FileDto(req.files.file);
    const ext = Utils.getFileExt(file.mimetype);

    if (fileName === null) {
      fileName = Utils.randomFileName();
    }

    return await drive
      .folder(Config.ROOT_FOLDERNAME)
      .put(`${fileName}.${ext}`, { data: file.data });
  }

  static async listFiles() {
    return await drive.folder(Config.ROOT_FOLDERNAME).list();
  }

  static async downloadFile(name) {
    const img = await drive.folder(Config.ROOT_FOLDERNAME).get(name);

    const buffer = await img.arrayBuffer();

    return Buffer.from(buffer);
  }
}

module.exports = FileHandlerService;
