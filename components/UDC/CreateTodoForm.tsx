"use client"
import { createTodo } from '@/actions/todo/create-todo'
import React from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import Link from 'next/link'
import { Button } from '../ui/button'
import {toast} from 'react-hot-toast'
import { ITodo } from '@/models/todoModel'
import { useRouter } from 'next/navigation'

function CreateTodoForm() {
    const router = useRouter()
  return (
    <form action={async function(formData:FormData){
        const title = formData.get('title') as string
        const description = formData.get('description') as string
        const resp = await createTodo(title,description)
        if(resp?.success){
            toast.success(resp.message)
            router.push('/todo')
        }else{
            toast.error(resp.message)
        }
        console.log(title,description)
      }}>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="title">Title</Label>
            <Input id="title" name="title" placeholder="Todo Title is here" />
          </div>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="description">Description</Label>
            <Input id="description" type="text" name="description" placeholder="Brief information about todo" />
          </div>
        </div>
        <div className="flex justify-between mt-4">
          <Link href={'/todo'} className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-4">Cancel</Link>
          <Button type="submit">Create</Button>
        </div>
      </form>
  )
}

export default CreateTodoForm