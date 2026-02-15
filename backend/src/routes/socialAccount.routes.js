const express  = require("express")
const router = express.Router()
const protect  = require("../middlewares/auth.middleware.js")
const { addSocialmedia, getSocialAccounts } = require("../controller/socialAccount.controller.js")
router.post("/" , protect , addSocialmedia)
router.post("/" , protect , getSocialAccounts)


module.exports  = router