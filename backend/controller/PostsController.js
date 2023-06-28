const Post = require("../model/PostModel");
const Account = require("../model/AccountModel");
const Follow = require("../model/FollowModel");

const getPost = async (req, res) => {
  const postData = await Post.find({ user: req.user.id });
  const userDetails = await Account.find({ _id: req.user.id });
  const following = await Follow.findOne({ follower: req.user.id });
  let postInfo = [];
  const adminPost = {
    user: "Admin",
    picture: "admin",
    kita: "Welcome to our vibrant social media community, where connections are forged, voices are amplified, and stories come alive. Join us and share your experiences, engage with like-minded individuals, and create lasting digital connections.",
  };
  postInfo.push(adminPost);

  if (following) {
    for (let i = 0; i < following.following.length; i++) {
      // Fix element substitutes
      const followingInfo = await Account.findById(following.following[i]);
      const tempData = await Post.find({ user: following.following[i] });
      for (let x = 0; x < tempData.length; x++) {
        const followingData = {
          id: tempData[x],
          user: followingInfo.username,
          picture: followingInfo.picture,
          kita: el.kita,
          p_id: el._id,
        };
        postInfo.push(followingData);
      }
    }
    console.log("Sending...");
    console.log(postInfo);
    res.json(postInfo);
  } else {
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

const getUserPost = async (req, res) => {
  const userDetails = await Account.find({ username: req.params.id });
  const userPost = await Post.find({ user: userDetails[0]._id });
  let userPosts = [];
  const adminPost = {
    username: "Admin",
    image: "admin",
    feed: "Welcome to our vibrant social media community, where connections are forged, voices are amplified, and stories come alive. Join us and share your experiences, engage with like-minded individuals, and create lasting digital connections.",
  };
  userPosts.push(adminPost);
  userPost.forEach((el) => {
    const post = {
      image: userDetails[0].picture,
      username: userDetails[0].username,
      feed: el.kita,
    };
    userPosts.push(post);
  });
  res.status(200).json(userPosts.reverse());
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

const updatePost = async (req, res) => {
  console.log(req.body);
  const update = await Post.findById(req.params.id);
  if (!update) {
    res.json({ message: "Post not found." });
  }

  if (!res.user) {
    res.json({ message: "User not found." });
  }

  const UpdatePost = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
};

module.exports = { createPost, getPost, getUserPost, deletePost, updatePost };
