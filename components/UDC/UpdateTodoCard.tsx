import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import UpdateTodoForm from "./UpdateTodoForm"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { ITodo } from "@/models/todoModel"

export function UpdateTodoCard({todo}:{todo:ITodo}) {
  return (
    <Card className="bg-slate-300">
            <CardHeader>
                <CardTitle>Revitalizing To-Do Lists</CardTitle>
                <CardDescription>Optimize Efficiency Through Dialogue Updates</CardDescription>
            </CardHeader>
            <CardContent>
                <UpdateTodoForm todo={todo} />
            </CardContent>
        </Card>
  )
}
