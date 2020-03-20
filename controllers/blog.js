const Post = require("../models/post");

exports.getIndex = (req, res, next) => {
  Post.find()
    .then(posts => {
      res.render("blog/index", {
        blogs: posts,
        path: "/",
        pageTitle: "Blog"
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getCreate = (req, res, next) => {
  res.render("blog/create-post", {
    path: "/create",
    pageTitle: "Create"
  });
};

exports.postCreate = (req, res, next) => {
  const title = req.body.title;
  const description = req.body.description;
  const post = new Post({
    title: title,
    description: description,
    userId: req.user
  });
  post
    .save()
    .then(result => {
      console.log("Created Post");
      res.redirect("/");
    })
    .catch(err => {
      console.log(err);
    });
};
