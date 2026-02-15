const mongoose  = require("mongoose")


const connectdb  = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("DB CONNECTEND SUCCESFLLY")
    } catch (error) {
        console.log(`Mongo db something error` , error.message);
        process.exit(1)
    }
}

module.exports = connectdb