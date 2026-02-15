
const SocialAccountSchema  = require("../modules/SocialAccount.model.js")

exports.addSocialmedia = async (req , res) => {
    const {platform  , accountName}  = req.body;

    const account = await SocialAccountSchema.create({
        userId : req.user._id,
        platform , 
        accountName
    })
    res.json(account)
};

exports.getSocialAccounts = async (req , res) => {
    const account  = await SocialAccountSchema.find({
        userId : req.user._id
    });
    res.json(account)
}