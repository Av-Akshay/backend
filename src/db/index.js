const mongoose = require("mongoose")
const DB_NAME = require("../constants")

const connectDB = async ()=>{
    console.log(`${process.env.MONGODB_URL}/${DB_NAME}`);
    
    try {
       const connection =  await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
       console.log(connection);
       console.log(`mongodb is connected on db host: ${connection.connection.host}`);
       
       
    } catch (error) {
        console.log(`mongodb connection error`, error);
        process.exit(1);
    }
}

module.exports = {connectDB}