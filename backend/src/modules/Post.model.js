const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
    userId :{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true
    },
    socialAccountId:{
         type: mongoose.Schema.Types.ObjectId,
         ref :"Social",
         require: true
    },
    platform:{
        type: String,
          enum: ["linkedin", "instagram", "twitter", "facebook"],
              required: true
    },
    content:{
        text: String,
        mediaUrls: [String],
        link: String
    },

    schedulefor:{
        type: Date , 
        require: true
    },

    status:{
        type: String,
       enum: [
      "draft",
      "scheduled",
      "processing",
      "published",
      "failed"
    ],
    default : "scheduled"
    },

    publishAt : Date,

    errorMessage : String,

    createAt :{
        type: Date,
        default: Date.now
    }
})


module.exports = mongoose.model("Post" , PostSchema)
