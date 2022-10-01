class Folder {
  constructor(payload) {

    this.folderName = payload.folderName;
    this.createdAt = new Date(Date.now());

  }
}

module.exports = Folder;
