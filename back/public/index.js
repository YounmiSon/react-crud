const Sequelize = require("sequelize");
const config = require("../config/config");
const content = require("./content");
const user = require("./user");

const sequelize = new Sequelize(
  config.dev.database,
  config.dev.username,
  config.dev.password,
  config.dev
);

const db = {};

db.sequelize = sequelize;
db.content = content;
db.user = user;

content.init(sequelize);
user.init(sequelize);

module.exports = db;
