import React from 'react'
import { Button } from '../ui/button'
import deleteTodo from '@/actions/todo/deleteTodo'
import UpdateTodoButton from './UpdateTodoButton'
import { ITodo } from '@/models/todoModel'
import { fetchAllTodoOfSingleUser } from '@/actions/todo/fetchTodo'

async function TodoBtnGroup({ id,todo }: { id: string,todo:ITodo }) {
    const allTodo:ITodo[]|[] = await fetchAllTodoOfSingleUser() as ITodo[] | []
    console.log(todo)
    const handleTodoDelete = async () => {
        "use server"
        const strId:string = JSON.parse(id)
        await deleteTodo(strId)
    }
    return (
        <footer className='flex gap-2'>
            <form action={handleTodoDelete}>
                <Button type='submit' size={'sm'}>Delete</Button>
            </form>
            <UpdateTodoButton todo={todo} allTodo={allTodo} />
        </footer>
    );
}

export default TodoBtnGroup