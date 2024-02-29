import { fetchAllTodoOfSingleUser } from '@/actions/todo/fetchTodo'
import TodoBtnGroup from '@/components/UDC/TodoBtnGroup'
import TodoRadioButton from '@/components/UDC/TodoRadioButton'
import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardFooter, CardTitle } from '@/components/ui/card'
import { ITodo } from '@/models/todoModel'

async function Todo() {
  const todo = await fetchAllTodoOfSingleUser()

  return (
    <section className='bg-slate-500'>
      {
        todo?.map((t:ITodo)=>(
          <Card key={t._id} className='flex justify-between mb-2 p-4 bg-slate-400'>
        <header className=''>
          <CardTitle>{t.title}</CardTitle>
          <CardDescription className='text-gray-800'>
            <div>{t.description}</div>
            <TodoRadioButton id={JSON.stringify(t._id)} status={t.status} />
            </CardDescription>
        </header>
        <TodoBtnGroup id={JSON.stringify(t._id)} todo={t} />
      </Card>
        ))
      }
    </section>
  )
}

export default Todo