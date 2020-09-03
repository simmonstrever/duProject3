// get all of the express packages
const mongoose = require("mongoose")
const config = require("config")
const db = config.get('mongoURI')

//connect the database
const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });
        console.log("MongoDB Connected...")
    } catch (error) {
        console.error(err.message)
        //exit process with failure
        process.exit(1)
    }
}

module.exports = connectDB
