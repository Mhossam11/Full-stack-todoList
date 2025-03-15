"use client"
import {  Trash } from "lucide-react";
import { Button } from "./ui/button";
import Spinner from "./ui/spinner";
import { useState } from "react";
import { deleteTodoAction } from "@/actions/todoActions";
import EditTodoForm from "./editTodoForm";
import { ITodo } from "@/interfaces";

interface Iprops{
todo:ITodo
}

const TodoTableActionButtons = ( {todo}: Iprops ) => {
    const [loading, setLoading]=useState(false);

    return ( 
        <>
            <EditTodoForm todo={todo}/>
            
            <Button 
              size={"icon"} 
              className="bg-red-300/50 hover:bg-red-800 dark:text-white text-black" 
              onClick={async ()=>{
                setLoading(true)
                 await deleteTodoAction({id:todo.id})
                 setLoading(false)
                }}
              disabled={loading}
            > 
              {loading?<Spinner/>:<Trash/>}
              
            </Button>
        </>
     );
}

export  default TodoTableActionButtons;