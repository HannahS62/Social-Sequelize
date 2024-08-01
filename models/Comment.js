const { db, DataTypes, Model } = require("../db/connection.js");

class Comment extends Model {}

Comment.init(
  {
    body: DataTypes.TEXT,
    createdAt: DataTypes.TEXT,
  },
  {
    sequelize: db,
    modelName: "Comment",
  }
);

module.exports = Comment;
