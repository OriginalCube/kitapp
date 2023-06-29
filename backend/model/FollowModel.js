const mongoose = require("mongoose");

const FollowerModel = mongoose.Schema({
  follower: { type: String },
  following: [{ type: String, require: true }],
});

module.exports = mongoose.model("follower", FollowerModel);
