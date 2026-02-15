const cloudinry  = require("cloudinary")

const { CloudinaryStorage} = require("multer-storage-cloudinary")

const multer = require("multer")


cloudinry.config({
    cloud_name : process.env.CLUODINARY_CLOUD_NAME,
    api_key : process.env.CLUODINARY_CLOUD_API_KEY ,
    api_secrate : process.env.CLUODINARY_CLOUD_SECRET
})


const storage  = new CloudinaryStorage({
    cloudinary  : cloudinry,
    params:{
        folder: "social_media_posts",
        allowed_format: ['jpg', 'png', 'jpeg']
    }
});

console.log("Cloud Name:", process.env. CLUODINARY_CLOUD_NAME);
console.log("API Key:", process.env.CLUODINARY_CLOUD_SECRET);



const imguploaded = multer({storage})

module.exports = imguploaded