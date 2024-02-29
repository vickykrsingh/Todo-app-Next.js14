"use server"
import dbConnection  from "@/lib/dbConnect"
import verifyToken, { IVerifiedData } from "@/lib/verifyJWT"
import todoModel from "@/models/todoModel"
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"

export const createTodo = async (formData:FormData) => {
    const title = formData.get('title') as string
    const description = formData.get('description') as string
    const subTodo = formData.get('sub-todo')
    console.log(subTodo)
    await dbConnection()
    const verifiedToken = await verifyToken() as IVerifiedData
    console.log(verifiedToken._id)
    if(!verifiedToken._id){
        return {
            success:false,
            message:"Invalid token please login again."
        }
    }
    try {
        const todo = await todoModel.create({
            title,
            description,
            author:verifiedToken._id,
            subTodo:subTodo
        })        
        
        if(todo._id){
            revalidatePath('/todo')
            return {
                success:true,
                message:"Create successfully."
            }
        }else{
            return {
                success:false,
                message:"Something went wrong."
            }
        }
    } catch (error:any) {
        console.log(error.message)
        return {
            success:false,
            message:"Todo creation failed."
        }
    }
}

