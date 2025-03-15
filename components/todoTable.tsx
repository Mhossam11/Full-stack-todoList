
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import {Badge } from "./ui/badge"
import { ITodo } from "@/interfaces"
import TodoTableActionButtons from "./todoTableActionButtons"
import { TodoDetails } from "@/components/todoDetails";
interface IProps{
  todos:ITodo[]
}

  
export function TodoTable({todos}:IProps) {


    return (
      <Table className="rounded-3xl bg-amber-950/30 dark:bg-gray-900/50 ">
        <TableHeader>
          <TableRow >
            <TableHead className="font-bold dark:text-white text-amber-950">Title</TableHead>
            <TableHead className="font-bold dark:text-white text-amber-950">Completed</TableHead>
            <TableHead className="font-bold dark:text-white text-amber-950 text-center w-[100px]">Details</TableHead>
            <TableHead className="font-bold dark:text-white text-amber-950 text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {todos.map((todo) => (
            <TableRow key={todo.id} className="">
              <TableCell className="dark:text-white text-amber-950 font-bold">{todo.title}</TableCell>
              <TableCell> 
                {
                    todo.Completed?<Badge variant={"secondary"} className="bg-green-400/50">{"Completed"}</Badge>
                    : <Badge variant={"destructive"}>{"Not Completed"}</Badge>
                }
                </TableCell>
              <TableCell className="font-medium">
                <TodoDetails data={todo} />
              </TableCell>
              <TableCell className="items-center justify-center flex space-x-1">
                <TodoTableActionButtons todo={todo}/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter className="rounded-b-3xl ">
          <TableRow >
            <TableCell className="dark:text-white text-amber-950 rounded-bl-3xl" colSpan={3}>Total</TableCell>
            <TableCell className="dark:text-white text-amber-950 rounded-br-3xl text-right">{todos.length}</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    )
  }
  