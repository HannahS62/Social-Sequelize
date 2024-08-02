const { Comment, Like, Post, Profile, User } = require("./index");
const { db } = require("./db/connection.js");
const users = require("./seed/users.json");
const profiles = require("./seed/profiles.json");
const posts = require("./seed/posts.json");
const comments = require("./seed/comments.json");
const likes = require("./seed/likes.json");

describe("Social Sequelzie Test", () => {
  /**
   * Runs the code prior to all tests
   */
  beforeAll(async () => {
    // the 'sync' method will create tables based on the model class
    // by setting 'force:true' the tables are recreated each time the test suite is run
    await db.sync({ force: true });
  });

  // Write your tests here

  test("Can create User", async () => {
    const user = await User.create(users[0]);
    expect(user.username).toBe(users[0].username);
  });

  test("can create Profile", async () => {
    const profile = await Profile.create(profiles[0]);
    expect(profile.bio).toBe(profiles[0].bio);
  });
  test("can create Post", async () => {
    const post = await Post.create(posts[0]);
    expect(post.bio).toBe(posts[0].bio);
  });
  test("can create Comment", async () => {
    const comment = await Comment.create(comments[0]);
    expect(comment.bio).toBe(comments[0].bio);
  });
  test("can create Like", async () => {
    const like = await Like.create(likes[0]);
    expect(like.bio).toBe(likes[0].bio);
  });

  test("User has one Profile", async () => {
    const user = await User.create(users[1]);
    const profile = await Profile.create(profiles[1]);
    expect(user.ProfileId).toBe(profile.UserId);
  });

  //   /////////////////////////////////////////////////////////

  //   //   test("user can have many likes", async () => {
  //   //     await db.sync({ force: true });
  //   //     let user = await User.create(users[0]);
  //   //     let like1 = await Like.create(likes[0]);
  //   //     let like2 = await Like.create(likes[1]);

  //   //     await user.addLike(like1);
  //   //     await user.addLike(like2);

  //   //     const associationedLikes = await user.getLikes();
  //   //     expect(associationedLikes.lenght).toBe(2);
  //   //     expect(associationedLikes instanceof Like).toBeTruthy;
  //   //   });

  //   /////////////////////////////////////////////////////////
  //   test("Post can only have one User", async () => {
  //     const user0 = await User.create(users[0]);
  //     const user1 = await User.create(users[1]);

  //     let post = await Post.create(posts[1]);

  //     // Attempt to add the post to both users.
  //     await user0.addPost(post);
  //     await user1.addPost(post);

  //     // Select the post again so that post.getUser() will work.
  //     post = await Post.findByPk(post.id);

  //     const finalUser = await post.getUser();

  //     // We have to compare the JSON representations because the other Sequelize
  //     // fields get in the way of the comparison.
  //     expect(finalUser.toJSON()).toEqual(user1.toJSON());
  //   });
});
