const express = require("express");
const router = express.Router();
const {
  readDetails,
  createAccount,
  loginAccount,
  searchAccounts,
} = require("../controller/AccountsController");

const { protect } = require("../middleware/authMiddleware");

router.get("/details", protect, readDetails);

router.post("/create", createAccount);

router.post("/login", loginAccount);

router.post("/search", protect, searchAccounts);

module.exports = router;
