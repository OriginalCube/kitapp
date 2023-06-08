const mongoose = require("mongoose");

const AccountSchema = mongoose.Schema({
  firstname: String,
  lastname: String,
  username: { type: String, unique: true },
  password: String,
  email: { type: String, unique: true },
  number: String,
  birthday: String,
});

module.exports = mongoose.model("account", AccountSchema);
