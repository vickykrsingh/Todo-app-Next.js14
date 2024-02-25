"use client"
import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { userRegistrationMethod } from '@/actions/auth/register'
import {toast} from 'react-hot-toast'
import {useRouter} from 'next/navigation'

function RegisterForm() {
    const router = useRouter()
    return (
        <>
            <form action={async formData => {
                const resp = await userRegistrationMethod(formData)
                if(resp?.success){
                    toast.success(resp.message)
                    router.push('/login')
                }else{
                    resp && toast.error(resp.message)
                }
            }}>
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
                    <Button type="submit">Register</Button>
                </div>
            </form>
        </>
    )
}

export default RegisterForm