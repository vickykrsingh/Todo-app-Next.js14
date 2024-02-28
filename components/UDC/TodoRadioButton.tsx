"use client"
import { Label } from "@/components/ui/label"
import React, { ChangeEvent, FormEvent, FormEventHandler, useState } from "react"
import { Checkbox } from "../ui/checkbox"
import { useTransition } from "react"
import {updateTodoStatus} from "@/actions/todo/updateTodo"
import {toast} from "react-hot-toast"

function TodoRadioButton({ id,status }: { id: string,status:string }) {
  const [isPending,startTransition] = useTransition()
  const formData = new FormData()
  formData.append('id',id)
  return (
    <div className="flex items-center gap-2 mt-2">
      <Checkbox id="terms" checked={status==='completed'} onCheckedChange={()=>startTransition(async ()=>{
        const res = await updateTodoStatus(id)
        if(res && res?.success){
          toast.success(res.message)
        }else{
          res && toast.error(res?.message)
        }
      })} />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {status==='completed' ? 'Mark as pending' : 'Mark as completed'}
      </label>
    </div>
  )
}


export default TodoRadioButton