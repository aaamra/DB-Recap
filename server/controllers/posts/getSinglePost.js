const { getSinglePostQuery } = require("../../database/queries");

const getSinglePost = (req, res) => {
  const { id } = req.params;

  getSinglePostQuery(id)
    .then((data) => res.json(data.rows[0]))
    .catch(() => res.status(500).json({ message: "server error !" }));
};

module.exports = getSinglePost;
