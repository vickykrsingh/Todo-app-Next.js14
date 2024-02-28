import mongoose,{Document} from "mongoose";
import { IUser } from "./userModel";

export interface ITodo extends Document {
    title:string,
    description:string,
    status:'pending'|'completed',
    subTodo:ITodo,
    author:IUser
}

const todoSchema = new mongoose.Schema<ITodo>({
    title:{
        type:String,
        required:true,
        unique:true
    },
    description:{
        type:String,
        required:true
    },
    status:{
        type:String,
        enum:['pending','completed'],
        default:'pending'
    },
    subTodo:{
        type:mongoose.Types.ObjectId,
        ref:'Todo'
    },
    author:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    }
},{timestamps:true})


export default mongoose.models?.Todo || mongoose.model<ITodo>('Todo',todoSchema)