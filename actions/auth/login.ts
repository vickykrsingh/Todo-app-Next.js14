"use server";
import { userModel } from "@/models/userModel";
import { IUser } from "@/models/userModel";
import dbConnection from "@/lib/dbConnect";
import jwt from "jsonwebtoken";
import {cookies} from "next/headers"

export const userLoginMethod = async (formData:FormData) => {
  dbConnection();
  try {
    const username = formData.get('username')
    const password = formData.get('password')
    if (!username || !password) {
      return {
        success : false,
        message : "username and password is required."
      }
    }
    const user: IUser | null = await userModel.findOne({ username: username });

    if (user) {
      const status = await user.comparePassword(password as string, user.password);
      if (status) {
        const tokenData = {
          _id: user._id,
          username: user.username,
        };
        const token = await jwt.sign(tokenData, process.env.JWT_SECRET!);
        cookies().set('token',token)
        return {
          success:true,
          message:"login successfully"
        }
      } else {
        return {
          success:false,
          message:"Incorrect password"
        }
      }
    } else {
      return {
        success:false,
        message:"Email is not registered."
      }
    }
  } catch (error: any) {
    return {
      success:false,
      message:error?.message || "Something went wrong while logged In"
    }
  }
};
