const addCommentQuery = require("../../database/queries/comments/addCommentQuery");

const addComment = (req, res) => {
  const { id: postId } = req.params;
  const { content, userName } = req.body;

  addCommentQuery({ postId, content, userName })
    .then((data) => {
      res.status(201).json({
        statusCode: 201,
        message: "Comment has been created successfully",
        data: data.rows[0],
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "INTERNAL SERVER ERROR",
      });
    });
};

module.exports = addComment;
