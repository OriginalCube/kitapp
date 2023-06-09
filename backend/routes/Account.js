const express = require("express");
const router = express.Router();
const {
  readDetails,
  createAccount,
  loginAccount,
} = require("../controller/AccountsController");

const { protect } = require("../middleware/authMiddleware");

router.get("/details", protect, readDetails);

router.post("/create", createAccount);

router.post("/login", loginAccount);

module.exports = router;
