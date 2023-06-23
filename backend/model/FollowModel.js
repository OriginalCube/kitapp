const mongoose = require("mongoose");

const FollowerModel = mongoose.Schema({
  follower: { type: String },
  following: [{ type: String }],
});

module.exports = mongoose.model("follower", FollowerModel);
