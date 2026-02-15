const User = require("../modules/user.module.js")

const bcrypt  = require("bcrypt")

const jwt = require("jsonwebtoken")
exports.register = async (req , res) => {
    const {name , email , password} = req.body;

    const userexitst = await User.findOne({email})
    if (userexitst) {
        return res.status(400).json({
            message: "User alredy exists"
        })
    }

    const hashpassword = await bcrypt.hash(password , 10)

 

    const user = await User.create({
        name , email , password: hashpassword 
    });


    const token = jwt.sign(
        {id: user._id},
        process.env.JWT_SECRET,
        {expiresIn: "30d"}
    );

    res.json({
        id: user._id,
        name: user.name,
        email: user.email,
        token
    })
}

exports.login = async (req , res) => {
    const {email , password} = req.body;

    const user = await User.findOne({email})

    if (!user) {
        return res.status(400).json({
            message:"Invalid email user not found"
        })
    }

    const match = await bcrypt.compare(password, user.password )

 if (!match) {
    return res.status(400).json({message: "Wrong password"})
 }


 const token = jwt.sign(
    {id: user._id},
    process.env.JWT_SECRET,
    {expiresIn : "30d"}
 )

 res.json({
    id: user._id,
    name: user.name,
    email: user.email,
    token
 })
 
}