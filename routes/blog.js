const express = require("express");

const blogController = require("../controllers/blog");
const isAuth = require("../controllers/is-auth");

const router = express.Router();

router.get("/", blogController.getIndex);

router.get("/create", isAuth, blogController.getCreate);

router.post("/create", blogController.postCreate);

module.exports = router;
