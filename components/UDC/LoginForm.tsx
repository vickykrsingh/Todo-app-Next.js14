"use client"

import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Label } from "../ui/label"
import { userLoginMethod } from "@/actions/auth/login"
import {toast} from 'react-hot-toast'
import {useRouter} from 'next/navigation'

function LoginForm() {
    const router = useRouter()
    return (
        <>
            <form action={async formData => {
                const resp = await userLoginMethod(formData)
                if(resp?.success){
                    toast.success(resp.message)
                    router.push('/')
                }else{
                    resp && toast.error(resp.message)
                }
            }} method="POST">
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="username">Username</Label>
                        <Input id="username" name="username" placeholder="username" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="password">password</Label>
                        <Input id="password" type="password" name="password" placeholder="password" />
                    </div>
                </div>
                <div className="flex justify-between mt-4">
                    <Button variant="outline">Cancel</Button>
                    <Button type="submit">Login</Button>
                </div>
            </form>
        </>
    )
}

export default LoginForm