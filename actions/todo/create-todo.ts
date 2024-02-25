import { dbConnection } from "@/lib/dbConnect"
import { ITodo, todoModel } from "@/models/todoModel"
import { revalidatePath } from "next/cache"

export const createTodo = async (title:string,description:string) => {
    try {
        await dbConnection()
        console.log(title,description)
        const todo:ITodo = await new todoModel({
            title,
            description
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
    } catch (error) {
        return {
            success:false,
            message:"Todo creation failed."
        }
    }
}

