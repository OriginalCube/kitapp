const express = require("express");
const router = express.Router();

const { createPost, getPost } = require("../controller/PostsController");

const { protect } = require("../middleware/authMiddleware");

router.post("/create", protect, createPost);

router.get("/", protect, getPost);
module.exports = router;
