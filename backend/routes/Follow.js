const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  isFollower,
  follow,
  isFollowing,
} = require("../controller/FollowController");

router.use("/follower", protect, isFollower);

router.use("/following/:id", protect, follow);

module.exports = router;
