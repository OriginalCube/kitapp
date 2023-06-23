const FollowModel = require("../model/FollowModel");
const AccountModel = require("../model/AccountModel");

const isFollower = async (req, res) => {
  const id = req.params.id;
  const isFollowing = await FollowModel.find({ follower: req.user });
  let isFollwer = false;
  isFollower.forEach((element) => {
    if (element.user === id) {
      isFollower = true;
    }
  });
  res.json({ following: isFollower });
};

const follow = async (req, res) => {
  const id = req.params.id;
  const following = await AccountModel.findOne({ username: id });

  const isFollower = await FollowModel.findOne({ follower: req.user._id });

  if (isFollower) {
    const isFollowing = await FollowModel.findOne({
      follower: req.user._id,
      following: following._id,
    });
    console.log(isFollowing);
    if (isFollowing) {
      const createFollow = await FollowModel.findOneAndUpdate(
        { follower: req.user.id },
        {
          $pull: { following: following._id },
        }
      );
      res.json({ message: "unfollowing" });
    } else {
      const createFollow = await FollowModel.findOneAndUpdate(
        {
          follower: req.user.id,
        },
        { $addToSet: { following: following._id } }
      );
      res.json({ message: "following" });
    }
  } else {
    //First Follow
    const createFollow = await FollowModel.create({
      follower: req.user.id,
      following: following._id,
    });
    console.log("creating new file");
    console.log(createFollow._id);
    res.json({ message: "following" });
  }
};

module.exports = { isFollower, follow };
