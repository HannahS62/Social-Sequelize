const { db, DataTypes, Model } = require("../db/connection.js");

class User extends Model {}

User.init(
  {
    username: DataTypes.TEXT,
    email: DataTypes.TEXT,
  },
  {
    sequelize: db,
    modelName: "User",
  }
);

module.exports = User;
