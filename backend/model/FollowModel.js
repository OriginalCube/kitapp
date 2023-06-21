const mongoose = require("mongoose");

const FollowerModel = mongoose.Schema({
  user: { type: String, require: true },
  follower: { type: String, require: true },
});

module.exports = mongoose.model("follower", FollowerModel);
