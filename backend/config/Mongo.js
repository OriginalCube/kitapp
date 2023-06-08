const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const con = await mongoose.connect(process.env.DATABASE_URL);
    console.log("Connected to DB");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDb;
