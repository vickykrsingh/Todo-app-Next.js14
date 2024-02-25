import mongoose,{Document} from "mongoose";
import bcrypt from 'bcryptjs'

export interface IUser extends Document {
    username:string,
    password:string,
    comparePassword(plainPassword: string,hashedPassword: string): Promise<boolean>
}

const userSchema = new mongoose.Schema<IUser>({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})


userSchema.pre('save',async function(next){
    if(this.isModified('password')) return next()

    this.password = await bcrypt.hash(this.password,10)
    return next()
})

userSchema.methods.comparePassword = async function(plainPassword:string,hashedPassword:string):Promise<boolean>{
    const status = await bcrypt.compare(plainPassword,hashedPassword)
    console.log(status)
    return true
}

export const userModel = mongoose.models?.user || mongoose.model<IUser>('user',userSchema)
