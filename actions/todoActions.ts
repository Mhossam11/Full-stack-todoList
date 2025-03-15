"use server"

import { ITodo } from "@/interfaces";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient()

// get Todos
export const getTodoListAction = async ({userId}:{userId:string | null}) => {
    return await prisma.todo.findMany({
        where:{
            user_Id:userId as string
        },
        orderBy:{
            createdAt:"desc"
        }
    })
    
}
// get single Todo
export const getSingleTodoAction = async ({userId}:{userId:string | null}) => {
    return await prisma.todo.findFirst({
        where:{
            user_Id:userId as string
        },
        orderBy:{
            createdAt:"desc"
        }
    })
}

// add Todos
export const creatTodoAction = async ( { title, body, Completed, user_Id }: { title:string, body?:string, Completed:boolean, user_Id:string| null })=>{
    await prisma.todo.create({
        data:{
            user_Id:user_Id as string,
            title,
            body,
            Completed
        }
    })
    revalidatePath("/")
}

// delete Todos
export const deleteTodoAction = async ({id}: {id:string})=>{
    await prisma.todo.delete({
        where:{
            id
        }
    })
    revalidatePath("/")
}
// Edit Todos
export const editTodoAction = async ({Completed, id, title, body}:ITodo)=>{
    await prisma.todo.update({
        where:{
            id
        },
        data:{
            title:title,
            body:body,
            Completed
        }
    })
    revalidatePath("/")
}