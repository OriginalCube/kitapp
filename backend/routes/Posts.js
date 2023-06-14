const express = require("express");
const router = express.Router();

const {
  createPost,
  getPost,
  deletePost,
} = require("../controller/PostsController");

const { protect } = require("../middleware/authMiddleware");

router.post("/create", protect, createPost);

router.get("/", protect, getPost);

router.delete("/:id", protect, deletePost);
module.exports = router;
