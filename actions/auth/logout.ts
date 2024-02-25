"use server"
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"
export const logout = async () => {
    const status = cookies().delete('token')
    console.log(status)
    revalidatePath('/')

}