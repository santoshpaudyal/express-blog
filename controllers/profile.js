const Post = require("../models/post");

exports.getPost = (req, res, next) => {
  const username = req.user.username;
  Post.find({ userId: req.user._id })
    .then(posts => {
      res.render("profile/user-post", {
        blogs: posts,
        path: "/post",
        pageTitle: "User Post",
        username: username
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getPostDetails = (req, res, next) => {
  const username = req.user.username;
  const postId = req.params.postId;
  Post.findById(postId)
    .then(posts => {
      res.render("profile/post-details", {
        blogs: posts,
        path: "/post",
        pageTitle: posts.title,
        username: username
      });
    })
    .catch(err => {
      console.log(err);
    });
};
