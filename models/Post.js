const { db, DataTypes, Model } = require("../db/connection.js");

class Post extends Model {}

Post.init(
  {
    title: DataTypes.TEXT,
    body: DataTypes.TEXT,
    createdBy: DataTypes.TEXT,
  },
  {
    sequelize: db,
    modelName: "Post",
  }
);

module.exports = Post;
