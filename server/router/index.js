const express = require('express');
const { allPosts, detailsPage, getSinglePost, getPostComments, addPost } = require('../controllers');

const router = express.Router();


router.get('/posts', allPosts);
router.post('/posts', addPost);

router.get('/posts/:id/show', detailsPage);

router.get('/posts/:id/comments', getPostComments);

router.get('/posts/:id', getSinglePost);

module.exports = router;