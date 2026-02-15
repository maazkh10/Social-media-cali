const express = require("express")
const app = express()
const socialAccountRoutes = require('./routes/socialAccount.routes.js')

const authRoute  = require("./routes/auth.routes.js")

const postRoute  = require("./routes/post.routes.js")

app.use(express.json())

//routes 
app.use("/api/auth" , authRoute)


//social media maybe 
app.use("/api/social/social-account" , socialAccountRoutes)

app.use("/api/social/post" , postRoute)

module.exports  = app