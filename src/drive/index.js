
const { Deta } = require('deta');

const Config = require('../config');

const deta = Deta(Config.PROJECT_KEY);

class Database {

  folder = (folderName) => deta.Drive(folderName);
}

const drive = new Database();

module.exports = drive;
