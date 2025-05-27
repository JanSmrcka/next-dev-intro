"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createTodo(formData: FormData) {
  const todoText = formData.get("todo-text") as string;
  if (!todoText) {
    throw new Error("Todo text cannot be empty");
  }
  const newTodo = {
    name: todoText,
    completed: false,
  };

  await prisma.todo.create({
    data: newTodo,
  });

  revalidatePath("/"); // Revalidate the home page to reflect the new todo
}
