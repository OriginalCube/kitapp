require("dotenv").config();
const express = require("express"),
  PORT = process.env.PORT,
  app = express();

app.get("/api/v1", (req, res) => {
  res.send("Server Active");
});

app.listen(PORT, () => console.log(`start listening on port ${PORT}`));
