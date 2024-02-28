"use server"
import dbConnection from "@/lib/dbConnect"
import verifyToken, { IVerifiedData } from "@/lib/verifyJWT"
import todoModel, { ITodo } from "@/models/todoModel"

export const fetchAllTodoOfSingleUser = async () => {
    await dbConnection()
    const tokenData = verifyToken() as IVerifiedData
    if(!tokenData._id){
        return null
    }
    try {
        const todos:ITodo[] = await todoModel.find({author:tokenData._id}).sort({updatedAt:-1}) as ITodo[]
        return todos
        
    } catch (error:any) {
        console.log(error.message)
    }

}

export const fetchSingleTodoById = async (id:string) => {
    try {
        const todo:ITodo = await todoModel.findById(id) as ITodo
        return todo
    } catch (error:any) {
        return null
        console.log(error.message)
    }
}

