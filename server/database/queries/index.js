const getPostsQuery = require("./posts/getPostsQuery");
const addPostQuery = require("./posts/addPostQuery");
const getSinglePostQuery = require("./posts/getSinglePostQuery");
const getPostCommentsQuery = require("./comments/getPostCommentsQuery");
const addCommentQuery = require("./comments/addCommentQuery");
const getCategoriesQuery = require("./categories/getCategoriesQuery");

module.exports = {
  getPostsQuery,
  getSinglePostQuery,
  getPostCommentsQuery,
  addPostQuery,
  addCommentQuery,
  getCategoriesQuery,
};
