"use client"
import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ITodo } from "@/models/todoModel"

export default function SubTodoChoice({allTodo,currentTodo}:{allTodo:ITodo[],currentTodo:ITodo|null}) {
  let filteredTodo = []
  if(currentTodo){
    filteredTodo = allTodo.filter((t)=>String(t._id)!=String(currentTodo._id))
  }else{
    filteredTodo = allTodo
  }
  console.log(currentTodo)
  return (
    <Select name="sub-todo" defaultValue={String(currentTodo?.subTodo)}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select Sub Todo" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select SubTodo</SelectLabel>
          {
            filteredTodo && filteredTodo.map((t)=>(
              <SelectItem value={t._id}>{t.title}</SelectItem>
            ))
          }
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
