"use server";

import { revalidatePath } from "next/cache";
import prisma from "@/lib/prisma";

export async function createTodo(formData: FormData) {
  const todoName = formData.get("todo-text") as string;
  const newTodo = {
    name: todoName,
  };
  await prisma.todo.create({
    data: newTodo,
  });
  revalidatePath("/");
}
