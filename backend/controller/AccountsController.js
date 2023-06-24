const AccountModel = require("../model/AccountModel");
const Follow = require("../model/FollowModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const readDetails = async (req, res) => {
  const userDetails = await AccountModel.findById(req.user.id);
  if (userDetails) {
    res.status(200).json(userDetails);
  }
};

const getUserDetails = async (req, res) => {
  const userDetails = await AccountModel.find({ username: req.params.id });
  const isFollowing = await Follow.findOne({
    follower: req.user.id,
    following: userDetails[0]._id,
  });
  console.log(isFollowing);
  const userDetail = {
    username: userDetails[0].username,
    picture: userDetails[0].picture,
    following: isFollowing ? "follower" : "follow",
  };
  res.json(userDetail);
};

const createAccount = async (req, res) => {
  const porfilePicture = ["profile1", "profile2", "profile3", "profile4"];
  const { firstname, lastname, username, password, email, number, birthday } =
    req.body;
  try {
    const userExist = await AccountModel.findOne({ email });
    if (userExist) {
      res.json({ message: "Account Already Exist!" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const randomPicture = Math.floor(
      Math.random() * (porfilePicture.length - 1)
    );
    const createUser = AccountModel.create({
      firstname,
      lastname,
      username,
      picture: porfilePicture[randomPicture],
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

const searchAccounts = async (req, res) => {
  if (req.body.username.length !== 0) {
    const users = await AccountModel.find({
      username: { $regex: req.body.username },
    });
    let user = {};
    let foundUsers = [];
    users.forEach((element) => {
      user = {
        username: element.username,
        picture: element.picture,
      };
      foundUsers.push(user);
    });
    console.log(req.body.username);
    res.json(foundUsers);
  }
};

module.exports = {
  readDetails,
  getUserDetails,
  createAccount,
  loginAccount,
  searchAccounts,
};
