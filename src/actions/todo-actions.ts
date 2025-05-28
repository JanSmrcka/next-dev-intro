"use server"

import {revalidatePath} from "next/cache";
import prisma from "@/lib/prisma";

export async function createTodo(formData: FormData) {

    const todoName = formData.get("todo-text") as string;

    const newTodo = {
        name: todoName,
    }

    await prisma.todo.create({
        data: newTodo
    })
    revalidatePath("/")
}

export async function deleteTodo(todoId: number) {
    if(!todoId){
        throw new Error("Todo id required")
    }

    const todo = await prisma.todo.findUnique({where: {id: todoId}})

    if(!todo){
        throw new Error("Todo not found")
    }

    await prisma.todo.delete({
            where: {
                id: todoId
            }
        }
    )
    revalidatePath("/")
}

export async function toggleTodo(todoId: number) {
    if(!todoId){
        throw new Error("Todo id required")
    }

    const todo = await prisma.todo.findUnique({where: {id: todoId}})

    if(!todo){
        throw new Error("Todo not found")
    }

    await prisma.todo.update({
        where:{
            id:todoId
        },
        data: {
            completed:!todo.completed
        }
    })
    revalidatePath("/")
    revalidatePath(`/todos/${todoId}`)
}