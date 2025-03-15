"use client"

import { Pen } from "lucide-react";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { todoFormSchema, TodoFormValues } from "@/schema";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import Spinner from "./ui/spinner";
import { ITodo } from "@/interfaces";
import { editTodoAction } from "@/actions/todoActions";

interface IProps{
    todo:ITodo
}
const EditTodoForm = ( {todo}:IProps ) => {
    
  const [open, setOpen]=useState(false);
  const [loading, setLoading]=useState(false);
  
  const defaultValues: Partial<TodoFormValues> = {
    title:todo.title ,
    body: todo.body as string,
    completed: todo.Completed
  }
    
  const form = useForm<TodoFormValues>({
    resolver: zodResolver(todoFormSchema),
    defaultValues,
    mode: "onChange",
  })

  const onSubmit=async (data:TodoFormValues)=>{
      setLoading(true)
      await editTodoAction({id:todo.id, title:data.title, body:data.body as string, Completed:data.completed})
      setLoading(false)
      setOpen(false)
  }


  return ( 
      <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
          <Button size={"icon"} className="bg-green-200/50 hover:bg-green-900 dark:text-white text-black"> <Pen/> </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add new Todo</DialogTitle>
              <DialogDescription>
                Organize your daily tasks. 
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">

              {/* title */}
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                          <Input placeholder="Study 3 hours" {...field} />
                        </FormControl>
                        <FormMessage className="text-red-500" />
                      </FormItem>
                      )}
                    />
                </form> 
              </Form>

              {/* descriptions */}
              <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <FormField
                  control={form.control}
                  name="body"
                  render={({ field }) => (
                    <FormItem >
                      <FormLabel>Description</FormLabel>
                      <FormControl >
                        <Input placeholder="Write small description" {...field} />
                      </FormControl>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                  )}
                />
              </form> 
              </Form>
              
              {/* completed button */}
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                  <FormField
                    control={form.control}
                    name="completed"
                    render={({ field }) => (
                    <FormItem >
                      <div className="FLEX items-center space-x-2">
                        <FormControl >
                          <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                        </FormControl>
                        <FormLabel>Completed</FormLabel>
                      </div>
                      <FormMessage className="text-red-500" />
                    </FormItem>
                    )}
                    />
                    {/* lazm el button ykon gowa el form 3shan yshof el data  */}
                  {loading?<Button disabled className="bg-gray-300"><Spinner/> Saving</Button>:<Button type="submit">Submit</Button>} 
                </form> 
              </Form>
            </div>
            <DialogFooter>
            </DialogFooter>
          </DialogContent>
      </Dialog>
     );
}

export  default EditTodoForm;