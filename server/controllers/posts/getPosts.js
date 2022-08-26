const getPostsQuery = require("../../database/queries/posts/getPostsQuery");

const getPosts = (req, res) => {
  getPostsQuery()
    .then((data) => {
      res.json(data.rows);
    })
    .catch(() => res.status(500).json({ message: "server error !" }));
};

module.exports = getPosts;
