const connection = require("../../config/connection");

const getPostCommentsQuery = (postId) =>
  connection.query({
    text: "SELECT * FROM comments WHERE post_id = $1",
    values: [postId],
  });

module.exports = getPostCommentsQuery;
