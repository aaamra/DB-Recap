const getPostsQuery = require("./posts/getPostsQuery");
const getPostCommentsQuery = require('./comments/getPostCommentsQuery');
const getPostByIdQuery = require('./posts/getPostByIdQuery');
const addPostQuery = require('./posts/addPostQuery');

module.exports = {
    getPostsQuery,
    getPostCommentsQuery,
    getPostByIdQuery,
    addPostQuery,
}