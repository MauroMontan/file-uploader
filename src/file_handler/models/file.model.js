class FileDto {
  constructor(payload) {
    this.name = payload.name;
    this.data = payload.data;
    this.size = payload.size;
    this.encoding = payload.encoding;
    this.tempFilePath = payload.tempFilePath;
    this.truncated = payload.truncated;
    this.mimetype = payload.mimetype;
    this.md5 = payload.md5;
  }
}

module.exports = FileDto;
