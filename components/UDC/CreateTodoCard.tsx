"use client"
import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import { createTodo } from "@/actions/todo/create-todo"
import CreateTodoForm from "./CreateTodoForm"

export function CreateTodoCard() {

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Create Your New Task</CardTitle>
        <CardDescription>Create a new your daily routine task .</CardDescription>
      </CardHeader>
      <CardContent>
        <CreateTodoForm/>
      </CardContent>
    </Card>
  )
}
