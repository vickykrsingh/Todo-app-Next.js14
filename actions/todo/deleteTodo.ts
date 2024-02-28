"use server"

import dbConnection from "@/lib/dbConnect"
import verifyToken, { IVerifiedData } from "@/lib/verifyJWT"
import todoModel from "@/models/todoModel"
import { revalidatePath } from "next/cache"

const deleteTodo = async (todoId:string) => {
    try {
        await dbConnection()
        const tokenData = verifyToken() as IVerifiedData
        if(!tokenData){
            return {
                success:false,
                message:"Please login again."
            }
        }
        const todo = await todoModel.findByIdAndDelete(todoId)
        if(!todo){
            return {
                success:false,
                message:"Something went wrong."
            }
        }
        revalidatePath('/todo')
        return {
            success:true,
            message:"Todo deleted successfully."
        }
        
    } catch (error:any) {
        console.log(error.message)
        return {
            success:false,
            message:"Something went wrong please try again"
        }
    }
}

export default deleteTodo