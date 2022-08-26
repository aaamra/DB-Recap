const build = require("../server/database/config/build");
const connection = require("../server/database/config/connection");
const {
  getPostsQuery,
  addPostQuery,
  getSinglePostQuery,
  getPostCommentsQuery,
  addCommentQuery,
} = require("../server/database/queries");

beforeEach(() => build());

afterAll(() => connection.end());

test("add new post", () => {
  const expeted = {
    username: "karam",
    title: "hello karam",
    content: "content",
    categories: [1, 2, 3],
  };

  return addPostQuery(expeted).then((data) => {
    console.log(data);
    expect(data.title).toBe(expeted.title);
    expect(data.username).toBe(expeted.username);
    expect(data.content).toBe(expeted.content);
  });
});

test("get all posts", () => {
  return getPostsQuery().then((data) => {
    expect(data.rows.length).toBe(2);
  });
});

test("show post query", () => {
  return getSinglePostQuery(1).then((data) => {
    expect(data.rows.length).toBe(1);
    expect(data.rows[0].title).toBe("IDK");
  });
});

test("show post query", () => {
  return getPostCommentsQuery(1).then((data) => {
    expect(data.rows.length).toBe(2);
    expect(data.rows[0].username).toBe("ahmed");
  });
});

test("Add new comment", () => {
  return addCommentQuery({
    postId: 1,
    userName: "ali",
    content: "hello new comment",
  }).then((data) => {
    expect(data.rows.length).toBe(1);
    expect(data.rows[0].username).toBe("ali");
  });
});
