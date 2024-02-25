import mongoose from "mongoose"
let isConnect = false


export const dbConnection = async () => {
    try {
        if(!isConnect){
            const {connection} = await mongoose.connect(process.env.MONGODB_URI!)
            isConnect=true
            console.log("mongodb connected successfully")
        }else{
            console.log('Database is already connected.')
        }
    } catch (e) {
        console.log("Error is occoured : ",e)
        isConnect=false
    }
}