import { Button } from "@/components/ui/button";
import { dbConnection } from "@/lib/dbConnect";
import Link from "next/link";
import Image from "next/image";
import {cookies} from 'next/headers'

export default function Home() {
  const token = cookies().get('token')
  console.log(token)
  return (
   <main className="bg-slate-500 w-full min-h-[92vh] flex items-center justify-center flex-col gap-2">
      <h1 className="text-3xl lg:text-4xl font-bold flex flex-col items-center justify-center gap-2 tracking-wide">Simplify Your Life with <br/><span className="text-4xl tracking-wider">DoMoreNow</span> <span className="text-2xl font-light">The Ultimate Todo List App</span></h1>
      <p className="font-medium text-sm text-center">Effortlessly manage your tasks and achieve more with our intuitive todo app.</p>
      {
        token?.value ? <Link href="/todo" className="mt-4 bg-primary text-secondary px-8 py-2 text-sm border-primary border-2 hover:bg-transparent hover:text-primary duration-300">Explore Your Pending Task</Link> : <Link href="/register" className="mt-4 bg-primary text-secondary px-8 py-2 text-sm border-primary border-2 hover:bg-transparent hover:text-primary duration-300">Get Started Today - It's Free!</Link>
      }
   </main>
  );
}
