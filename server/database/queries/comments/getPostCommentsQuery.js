const connection = require("../../config/connection");

const getPostCommentsQuery = (postId) => connection
.query('SELECT * FROM comments WHERE post_id = $1', [postId]);

module.exports = getPostCommentsQuery;