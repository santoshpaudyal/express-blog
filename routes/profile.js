const express = require("express");

const profileController = require("../controllers/profile");

const isAuth = require("../controllers/is-auth");

const router = express.Router();

router.get("/post", isAuth, profileController.getPost);

router.get("/post/:postId", profileController.getPostDetails);

module.exports = router;
