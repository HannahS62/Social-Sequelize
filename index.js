const { Comment, Like, Post, Profile, User } = require("./models/index");

// Define your associations here

User.hasOne(Profile);
Profile.belongsTo(User);

Profile.hasOne(User);
User.belongsTo(Profile);

User.hasMany(Post);
Post.belongsTo(User);

Post.hasMany(Comment);
Comment.belongsTo(Post);

module.exports = {
  Comment,
  Like,
  Post,
  Profile,
  User,
};
