
class Utils {

  static getFileExt(mimetype) {

    const tmparr = mimetype.split('/');

    return tmparr[1];

  }

  static randomFileName() {
    return new Date(Date.now);
  }
}

module.exports = Utils;
