"use client"
import * as React from "react"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import LoginForm from "./LoginForm"

export function UserLoginCard() {
    return (
        <Card className="w-[350px] bg-slate-300">
            <CardHeader>
                <CardTitle>Welcome Back</CardTitle>
                <CardDescription>Login to view your pending task</CardDescription>
            </CardHeader>
            <CardContent>
                <LoginForm/>
            </CardContent>
        </Card>
    )
}
