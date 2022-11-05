const Sequelize = require("sequelize");
const config = require("../config/config");
const content = require("./content");

const sequelize = new Sequelize(
  config.dev.database,
  config.dev.username,
  config.dev.password,
  config.dev
);

const db = {};

db.sequelize = sequelize;
db.content = content;

content.init(sequelize);

module.exports = db;
