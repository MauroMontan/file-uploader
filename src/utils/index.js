
class Utils {

  static getFileExt(mimetype) {

    const tmparr = mimetype.split('/');

    return tmparr[1];

  }

  static randomFileName() {
    return new Date(Date.now);
  }

  static matchFile(filepath, name) {

    if (filepath.includes(name)) {
      const filepathArr = filepath.split('/');
      if (filepathArr[1] === name) {

        return filepath;
      }
    }
  }
}

module.exports = Utils;
