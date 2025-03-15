"use server"
// import ModalButton from "@/components/modalButton";

import { getTodoListAction } from "@/actions/todoActions";
import AddTodoForm from "@/components/addTodoForm";

import { TodoTable } from "@/components/todoTable";
import { ScrollArea } from "@/components/ui/scroll-area";
import { auth } from "@clerk/nextjs/server";


export default  async function Home() {
  
  const {userId} =await auth()
  const todos = await getTodoListAction({userId});

  return (
    <>
        <AddTodoForm userId={userId}/>
        <ScrollArea className="border-amber-900 dark:border-gray-500 border-2  font-[family-name:var(--font-geist-sans)] rounded-3xl shadow-lg shadow-black/50">
          <TodoTable todos={todos}/>
        </ScrollArea>
    </>
  );
}
