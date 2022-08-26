const express = require("express");

const {
  getPosts,
  getSinglePost,
  detailsPage,
  getPostComments,
  addPost,
  addComment,
  getCategories,
} = require("../controllers");

const router = express.Router();

router.get("/categories", getCategories);

router.get("/posts", getPosts);
router.post("/posts", addPost);
router.get("/posts/:id", getSinglePost);
router.get("/posts/:id/show", detailsPage);
router.get("/posts/:id/comments", getPostComments);

router.post("/posts/:id/comments", addComment);

module.exports = router;
