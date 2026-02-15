const Post = require("../modules/Post.model.js")

exports.createPost = async (req , res) => {
    const {socialAccountId  , content  , schedulefor , platform} = req.body;

    //  const mediaUrls = req.files ? req.files.map(file => file.path) : []

     const post  = await Post.create({
        userId : req.user._id,
        socialAccountId,
content,        
        schedulefor ,
        platform,
        // content:{
        //     text: text , 
        //     mediaUrls : mediaUrls,
        //     links: link
        // }
    })
    res.status(201).json(post)
}


exports.getPost = async (req , res ) => {
    const post = await Post.find({
        userId: req.user._id
    }).populate("socialAccountId")

    res.json(post)
}