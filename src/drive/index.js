const { Deta } = require("deta");

const Config = require("../config");

const deta = Deta(Config.PROJECT_KEY);

class Drive {
  folder = (folderName) => deta.Drive(folderName);
}

const drive = new Drive();

module.exports = drive;
