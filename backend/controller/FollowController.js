const Follower = require("../model/FollowModel");
const AccountModel = require("../model/AccountModel");

const isFollower = async (req, res) => {
  const id = req.params.id;
  const isFollowing = await Follower.find({ follower: req.user });
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
  const following = await AccountModel.find({ username: id });
  const isExist = await Follower.find({
    user: following[0]._id,
    follower: req.user.id,
  });
  const createFollower = await Follower.create({
    user: following[0]._id,
    follower: req.user.id,
  });
  res.json(isExist);
};

module.exports = { isFollower, follow };
