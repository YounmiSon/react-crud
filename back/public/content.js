const Sequelize = require("sequelize");

class Content extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        title: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        text: {
          type: Sequelize.STRING(500),
          allowNull: true,
        },
        user: {
          type: Sequelize.STRING(20),
          allowNull: false,
        },
        count: {
          type: Sequelize.INTEGER,
        },
      },
      {
        sequelize,
        timestamps: true,
        modelName: "Content",
        tableName: "contents",
        charset: "utf8",
        collate: "utf8_general_ci",
      }
    );
  }
}
module.exports = Content;
