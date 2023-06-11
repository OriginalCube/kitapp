const AccountModel = require("../model/AccountModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const readDetails = async (req, res) => {
  const userDetails = await AccountModel.findById(req.user.id);
  if (userDetails) {
    res.status(200).json(userDetails);
  }
};

const createAccount = async (req, res) => {
  const { firstname, lastname, username, password, email, number, birthday } =
    req.body;
  try {
    const userExist = await AccountModel.findOne({ email });
    if (userExist) {
      res.json({ message: "Account Already Exist!" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const createUser = AccountModel.create({
      firstname,
      lastname,
      username,
      password: hashedPassword,
      email,
      number,
      birthday,
    });

    if (createUser) {
      res.status(201).json({
        token: genJWT(createUser._id),
      });
    } else {
      res.json({ message: "Invalid User Data." });
    }
  } catch (err) {}
};

const loginAccount = async (req, res) => {
  const { username, password } = req.body;
  const user = await AccountModel.findOne({ username });

  try {
    if (user && (await bcrypt.compare(password, user.password))) {
      res.status(200).json({ token: genJWT(user._id) });
    } else {
      res.json({ message: "Invalid Credentials." });
    }
  } catch (err) {
    res.json({ message: "Invalid credentials." });
  }
};

const genJWT = (id) => {
  return jwt.sign({ id }, process.env.KITAPP_SECRET, { expiresIn: "30d" });
};

module.exports = { readDetails, createAccount, loginAccount };
