import mongoose from "mongoose"
let isConnect = false


const dbConnection = async () => {
    if(isConnect){
        console.log("Database is already connected.")
        return false
    }
    try {
        if(isConnect==false){
            const connect = await mongoose.connect(process.env.DATABASE_URL!)
            isConnect=true
            console.log("mongodb connected successfully")
            return true
        }
    } catch (e) {
        console.log("Error is occoured : ",e)
        isConnect=false
    }
}

export default dbConnection