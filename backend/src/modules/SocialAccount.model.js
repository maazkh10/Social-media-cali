const mongoose = require("mongoose")

const SocialAccountSchema = new mongoose.Schema({
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true
    },
    platform:{
        type: String,
        enum:["linkedin", "instagram", "twitter", "facebook"],
        require: true
    },
    accountName : String,
    accountId: String,

    accountToken: String,
    refreshToken: String,
    tokenExperity : Date,

    createAt:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Social" , SocialAccountSchema);
