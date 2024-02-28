import React from 'react'
import { Button } from '../ui/button'
import { UpdateTodoCard } from './UpdateTodoCard'
import Link from 'next/link'
import deleteTodo from '@/actions/todo/deleteTodo'
import UpdateTodoButton from './UpdateTodoButton'
import { ITodo } from '@/models/todoModel'

function TodoBtnGroup({ id,todo }: { id: string,todo:ITodo }) {
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
            <UpdateTodoButton todo={todo} />
        </footer>
    );
}

export default TodoBtnGroup