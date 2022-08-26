const connection = require("../../config/connection");

const addCommentQuery = ({ postId, userName, content }) => {
  const sql = {
    text: "INSERT INTO comments (post_id, username, content) VALUES ($1, $2, $3) RETURNING username, content",
    values: [postId, userName, content],
  };
  return connection.query(sql);
};

module.exports = addCommentQuery;
