import UpdateTodoForm from "./UpdateTodoForm"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { ITodo } from "@/models/todoModel"

export function UpdateTodoCard({todo,allTodo}:{todo:ITodo,allTodo:ITodo[]|[]}) {
  return (
    <Card className="bg-slate-300">
            <CardHeader>
                <CardTitle>Revitalizing To-Do Lists</CardTitle>
                <CardDescription>Optimize Efficiency Through Dialogue Updates</CardDescription>
            </CardHeader>
            <CardContent>
                <UpdateTodoForm todo={todo} allTodo={allTodo} />
            </CardContent>
        </Card>
  )
}
