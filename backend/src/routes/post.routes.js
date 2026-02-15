const express = require("express")

const router = express.Router()

const protect = require("../middlewares/auth.middleware.js")

const {createPost, getPost}  = require("../controller/post.controller.js")
// const imguploaded  = require("../config/cloudinary.config.js")

router.post("/" , protect  , createPost)

router.get("/" , protect , getPost)


module.exports  = router