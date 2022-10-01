class Folder {
  constructor(payload) {

    this.name = payload.name;
    this.createdAt = new Date(Date.now());

  }
}

module.exports = Folder;
