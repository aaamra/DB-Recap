const connection = require("../../config/connection");

const getSinglePostQuery = (postId) => {
  const sql = {
    text: "SELECT * from posts where id = $1",
    values: [postId],
  };
  return connection.query(sql);
};

module.exports = getSinglePostQuery;
