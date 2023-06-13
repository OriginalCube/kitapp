const Post = require("../model/PostModel");

const getPost = async (req, res) => {
  const postData = await Post.find({ user: req.user.id });
  res.json(postData);
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
