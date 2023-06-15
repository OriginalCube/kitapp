const express = require("express");
const router = express.Router();

const {
  createPost,
  getPost,
  deletePost,
  updatePost,
} = require("../controller/PostsController");

const { protect } = require("../middleware/authMiddleware");

router.post("/create", protect, createPost);

router.get("/", protect, getPost);

router.delete("/:id", protect, deletePost);

router.put("/:id", protect, updatePost);

module.exports = router;
