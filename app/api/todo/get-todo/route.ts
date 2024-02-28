import verifyToken, { IVerifiedData } from "@/lib/verifyJWT";
import todoModel, { ITodo } from "@/models/todoModel";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async () => {
    const ck = await cookies().get('token')
    console.log(ck)
  const tokenData = verifyToken() as IVerifiedData;
  console.log(tokenData)
  if (!tokenData._id) {
    return NextResponse.json({
        success:false,
        message:"Unauthorized access"
    })
  }
  try {
    const todos: ITodo[] = await todoModel.find({
      author: tokenData._id,
    }) as ITodo[];
    console.log(todos);
    return NextResponse.json({
        success:true,
        message:todos
    })
  } catch (error: any) {
    return NextResponse.json({
        success:false,
        message:"Something went wrong!"
    })
  }
};

