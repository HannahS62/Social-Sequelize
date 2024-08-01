const { db, DataTypes, Model } = require("../db/connection.js");

class Like extends Model {}

Like.init(
  {
    reactionType: DataTypes.TEXT,
    createdAt: DataTypes.TEXT,
  },
  {
    sequelize: db,
    modelName: "Like",
  }
);

module.exports = Like;
