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
  //How did this work -.-
  const id = req.params.id;
  const following = await AccountModel.findOne({ username: id });
  const isFollower = await FollowModel.findOne({ follower: req.user._id });
  if (isFollower) {
    console.log(isFollower.follower);
    console.log("isFollower");
    const isFollowing = await FollowModel.findOne({
      follower: req.user._id,
      following: following._id,
    });
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
    console.log("creating new file");
    console.log(following._id);
    try {
      const createFollow = await FollowModel.create({
        follower: req.user.id,
        following: following._id,
      });
    } catch (err) {
      console.log(err);
    }
    res.json({ message: "following" });
  }
};

module.exports = { isFollower, follow };
