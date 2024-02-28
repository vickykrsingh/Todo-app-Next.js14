"use server";
import dbConnection from "@/lib/dbConnect";
import { userModel } from "@/models/userModel";
import bcrypt from 'bcryptjs'
import {redirect} from 'next/navigation'
export interface dataType {
  username:string,
  password:string
}
export const userRegistrationMethod = async (formData:FormData) => {
  await dbConnection();
  const username = formData.get("username")
  const password = formData.get("password")
  try {
    const hashPassword = await bcrypt.hash(password as string,10)
    if (username && hashPassword) {
      const user = await userModel.create({
        username:username,
        password:hashPassword,
      });

      if (user) {
        return {
          success:true,
          message:"registered successfully."
        }
      } else {
        return {
          success:false,
          message:"something went wrong."
        };
      }
    }
  } catch (error) {
    return {
      success:false,
      message:"something went wrong."
    };
  }
};
