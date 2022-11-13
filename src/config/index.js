const dotenv = require("dotenv");

dotenv.config();

class Config {
  static LOCALPORT = process.env.LOCALPORT;
  static PROJECT_KEY = process.env.PROJECT_KEY;
  static ROOT_FOLDERNAME = process.env.ROOT_FOLDERNAME;
}

module.exports = Config;
