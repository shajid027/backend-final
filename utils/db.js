const mongoose = require(`mongoose`)

const URI = process.env.MONGO_URI
const connectDB = async()=>{
    try {
        await mongoose.connect(URI)
        console.log("Connected to the DB sucessfully")
        
    } catch (error) {
      console.error("Faild to connect to database",error) 
      process.exit(0) 
    }
}

module.exports = connectDB;