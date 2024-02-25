import { Button } from "@/components/ui/button";
import { dbConnection } from "@/lib/dbConnect";
import Image from "next/image";

export default function Home() {
  return (
   <main className="bg-slate-500 w-full min-h-[92vh] flex items-center justify-center flex-col gap-4">
      <h1 className="text-4xl lg:text-5xl font-bold">Create Todo Here</h1>
      <Button size={"lg"}>Create</Button>
   </main>
  );
}
