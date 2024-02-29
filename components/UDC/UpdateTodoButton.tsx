import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ITodo } from "@/models/todoModel"
import { UpdateTodoCard } from "./UpdateTodoCard"

export default function UpdateTodoButton({todo,allTodo}:{todo:ITodo,allTodo:ITodo[]|[]}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={'sm'}>Update</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] m-0 p-0">
        <UpdateTodoCard todo={todo} allTodo={allTodo} />
      </DialogContent>
    </Dialog>
  )
}
