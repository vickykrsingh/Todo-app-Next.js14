"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ITodo } from "@/models/todoModel"
import { UpdateTodoCard } from "./UpdateTodoCard"

export default function UpdateTodoButton({todo}:{todo:ITodo}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={'sm'}>Update</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] m-0 p-0">
        <UpdateTodoCard todo={todo} />
      </DialogContent>
    </Dialog>
  )
}
