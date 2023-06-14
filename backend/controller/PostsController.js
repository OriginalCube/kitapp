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
  postInfo.push(adminPost);
  if (postData.length !== 0) {
    postData.forEach((element) => {
      const pData = {
        id: userDetails[0]._id,
        user: userDetails[0].username,
        picture: userDetails[0].picture,
        kita: element.kita,
        p_id: element._id,
      };
      postInfo.push(pData);
    });
    res.json(postInfo.reverse());
  } else {
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

const deletePost = async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) {
    res.json({ message: "Post not found." });
  }

  if (!req.user) {
    res.json({ message: "User not found." });
  }

  await post.deleteOne();

  res.json({ message: "Successfully Deleted Record." });
};

module.exports = { createPost, getPost, deletePost };
