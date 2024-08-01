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

  test("User has one Profile", async () => {
    const user = await User.create(users[1]);
    const profile = await Profile.create(profiles[1]);

    expect(user.ProfileId).toBe(profile.UserId);
  });

  //   test("Post can only have one User", async () => {
  //     const user = await User.create(users[2]);
  //     const post = await user.addPost(posts[1]);
  //     expect(post.getUser()).toBe(user);
  //   });
});
