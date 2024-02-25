"use client"
import * as React from "react"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import RegisterForm from "./RegisterForm"

export function UserRegistrationCard() {
    return (
        <Card className="w-[350px] bg-slate-300">
            <CardHeader>
                <CardTitle>Welcome</CardTitle>
                <CardDescription>Register for done your task consistently</CardDescription>
            </CardHeader>
            <CardContent>
                <RegisterForm/>
            </CardContent>
        </Card>
    )
}
