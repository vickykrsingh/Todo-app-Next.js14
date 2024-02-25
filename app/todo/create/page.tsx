import { CreateTodoCard } from '@/components/UDC/CreateTodoCard'
import React from 'react'

function CreateTodoPage() {
  return (
    <section className='w-full min-h-[92vh] flex items-center justify-center bg-slate-500'>
        <CreateTodoCard/>
    </section>
  )
}

export default CreateTodoPage