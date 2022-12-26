const express = require("express");
const router = express.Router();
const postController = require("../controllers/postController");
const userController = require("../controllers/userController");


router.post("/newPost", userController.protect, postController.createPost);
router.get("/getPosts", postController.getPosts);

module.exports = router;