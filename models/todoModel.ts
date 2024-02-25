import mongoose,{Document} from "mongoose";

export interface ITodo extends Document {
    title:string,
    description:string
}

const todoSchema = new mongoose.Schema<ITodo>({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    }
},{timestamps:true})


export const todoModel = mongoose.models?.todo || mongoose.model<ITodo>('todo',todoSchema)