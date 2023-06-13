require("dotenv").config();
const express = require("express"),
  PORT = process.env.PORT,
  app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connectDb = require("./config/Mongo");
connectDb();

app.use("/api/v1/profile", require("./routes/Account"));

app.use("/api/v1/posts", require("./routes/Posts"));

app.listen(PORT, () => console.log(`start listening on port ${PORT}`));
