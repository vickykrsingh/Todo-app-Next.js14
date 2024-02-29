import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Label } from "../ui/label"
import Link from "next/link"
import { ITodo } from "@/models/todoModel"
import SubTodoChoice from "./SubTodoChoice"
import { updateWholeTodo } from "@/actions/todo/updateTodo"

async function UpdateTodoForm({ todo,allTodo }: { todo: ITodo,allTodo:ITodo[]|[] }) {
    const handleUpdateTodo = async (formData: FormData) => {
        "use server"
        formData.append('_id',todo._id)
        console.log(formData.get('title'))
        console.log(formData.get('description'))
        console.log(formData.get('sub-todo'))
        console.log(formData.get('_id'))
        const res:{success:boolean,message:string} = await updateWholeTodo(formData) as {success:boolean,message:string}
        console.log(res)
    }
    return (
        <>
            <form method="POST" action={async(formData:FormData)=>{
                "use server"
                await handleUpdateTodo(formData)
            }}>
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="title">Title</Label>
                        <Input defaultValue={todo.title} id="title" name="title" placeholder="title" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="description">Description</Label>
                        <Input defaultValue={todo.description} id="description" type="text" name="description" placeholder="description" />
                    </div>
                </div>
                <div className="flex flex-col gap-0 mt-4 text-sm ">
                    <SubTodoChoice allTodo={allTodo} currentTodo={todo} />
                </div>
                <div className="flex justify-between mt-4">
                    <Button variant="outline">
                        <Link href={'/todo'} >Cancel</Link>
                    </Button>
                    <Button type="submit">Update</Button>
                </div>
            </form>
        </>
    )
}

export default UpdateTodoForm