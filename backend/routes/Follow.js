const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const { isFollower } = require("../controller/FollowController");

router.use("/:id", protect, isFollower);

module.exports = router;
