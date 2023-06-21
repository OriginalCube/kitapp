const follower = require("../model/FollowModell");

const isFollower = async (req, res) => {
  const id = req.params.id;
  const isFollowing = await follower.find({ follower: req.user });
  let isFollwer = false;
  isFollower.forEach((element) => {
    if (element.user === id) {
      isFollower = true;
    }
  });
  res.json({ following: isFollower });
};

module.exports = { isFollower };
