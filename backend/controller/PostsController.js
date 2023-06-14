const Post = require("../model/PostModel");
const Account = require("../model/AccountModel");

const getPost = async (req, res) => {
  const postData = await Post.find({ user: req.user.id });
  const userDetails = await Account.find({ _id: req.user.id });
  let postInfo = [];
  const adminPost = {
    user: "Admin",
    picture: "admin",
    kita: "Welcome to our vibrant social media community, where connections are forged, voices are amplified, and stories come alive. Join us and share your experiences, engage with like-minded individuals, and create lasting digital connections.",
  };
  if (postData.length !== 0) {
    postData.forEach((element) => {
      const pData = {
        id: userDetails[0]._id,
        user: userDetails[0].username,
        picture: userDetails[0].picture,
        kita: element.kita,
      };
      postInfo.push(pData);
    });
    postInfo.push(adminPost);
    res.json(postInfo);
  } else {
    postInfo.push(adminPost);
    res.json(postInfo);
  }
};

const createPost = async (req, res) => {
  const { textData } = req.body;
  const createPost = await Post.create({
    user: req.user.id,
    kita: textData,
  });

  res.json({ message: "Successfull Post" });
};

module.exports = { createPost, getPost };
