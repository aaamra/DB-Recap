const {getPosts, getSinglePost, addPost} = require('./posts');
const detailsPage = require('./pages/details');
const getPostComments = require('./comments/getPostComments');
const addComment = require('./comments/addComment');


module.exports = {
    getPosts,
    getSinglePost,
    detailsPage,
    getPostComments,
    addPost,
    addComment
};