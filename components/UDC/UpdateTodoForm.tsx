
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Label } from "../ui/label"
import Link from "next/link"
import { ITodo } from "@/models/todoModel"

function UpdateTodoForm({todo}:{todo:ITodo}) {
    return (
        <>
            <form method="POST">
                <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="title">Title</Label>
                        <Input value={todo.title} id="title" name="title" placeholder="title" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="description">Description</Label>
                        <Input value={todo.description} id="description" type="text" name="description" placeholder="description" />
                    </div>
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