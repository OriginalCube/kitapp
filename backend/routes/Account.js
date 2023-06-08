const express = require("express");
const router = express.Router();
const {
  readDetails,
  createAccount,
  loginAccount,
} = require("../controller/AccountsController");

router.get("/details", readDetails);

router.post("/create", createAccount);

router.post("/login", loginAccount);

module.exports = router;
