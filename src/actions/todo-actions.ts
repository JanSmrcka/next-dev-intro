"use server"

import {revalidatePath} from "next/cache";

const API_URL = "https://eli-workshop.vercel.app/api/users/jirp13/todos"

export async function createTodo(formData: FormData){

    const todoName=formData.get("todo-text")

    const newTodo = {
        name:todoName,
    }

    await fetch(API_URL,{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newTodo)
    })
    revalidatePath("/")
}