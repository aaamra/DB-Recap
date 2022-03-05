const allPosts = require("./posts/allPosts");
const detailsPage = require('./pages/detailsPage');
const getSinglePost = require('./posts/getSinglePost');
const getPostComments = require('./comments/getPostComments');
const addPost = require('./posts/addPost');

module.exports = {
    allPosts,
    detailsPage,
    getSinglePost,
    getPostComments,
    addPost
};