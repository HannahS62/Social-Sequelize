const { db, DataTypes, Model } = require("../db/connection.js");

class Profile extends Model {}

Profile.init(
  {
    bio: DataTypes.TEXT,
    profilePicture: DataTypes.TEXT,
    birthday: DataTypes.TEXT,
  },
  {
    sequelize: db,
    modelName: "Profile",
  }
);

module.exports = Profile;
