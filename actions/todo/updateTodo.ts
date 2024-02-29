"use server"
import dbConnection from "@/lib/dbConnect";
import verifyToken, { IVerifiedData } from "@/lib/verifyJWT";
import todoModel, { ITodo } from "@/models/todoModel";
import { revalidatePath } from "next/cache";


export const updateTodoStatus = async (id:string) => {
    const parsedId = JSON.parse(id)
    try {
        dbConnection()
        const todo:ITodo = await todoModel.findById(parsedId) as ITodo
        const verifiedData:IVerifiedData = verifyToken() as IVerifiedData
        if(!verifiedData){
            return{
                success:false,
                message:"Something went wrong"
            }
        }
        if(String(todo.author)!=(verifiedData._id)){
            return {
                success:false,
                message:"UnAuthorized accessed"
            }
        }
        const toBeUpdateStatus:string = todo.status=='completed' ? 'pending' : 'completed'
        const updatedTodo:ITodo = await todoModel.findByIdAndUpdate(parsedId,{status:toBeUpdateStatus}) as ITodo
        if(updatedTodo){
            revalidatePath('/todo')
            return {
                success:true,
                message:`Marked ${toBeUpdateStatus}`
            }
        }
        
    } catch (error:any) {
        console.log(error.message)
        return {
            success:false,
            message:"Try again after some time"
        }
    }
}

export const updateWholeTodo = async (formData:FormData) => {
    try {
        await dbConnection()
        const title = formData.get('title')
        const description = formData.get('description')
        const todo = formData.get('sub-todo')
        const todo_id = formData.get('_id')
        console.log(title,description,todo,todo_id)
        const todoRes = await todoModel.findByIdAndUpdate(todo_id,{
            $set:{
                title:title,
                description:description,
                subTodo:todo_id
            }
        })
        console.log(todoRes)
        if(todoRes){
            revalidatePath('/todo')
            return{
                success:true,
                message:"Updated successfully"
            }
        }else{
            return{
                success:false,
                message:"Something went wrong"
            }
        }
        
    } catch (error:any) {
        console.log(error.message)
        return {
            success:false,
            message:"Try again"
        }
    }
}