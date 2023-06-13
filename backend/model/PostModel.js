const mongoose = require("mongoose");

const PostModel = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    kita: { type: String, require: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("kita", PostModel);
