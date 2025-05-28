"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

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

export async function deleteTodo(id: number) {
  await prisma.todo.delete({
    where: { id: id },
  });
  revalidatePath("/");
}

export async function toggleTodo(id: number) {
  const todo = await prisma.todo.findUnique({
    where: { id: id },
  });
  if (!todo) {
    return;
  }
  await prisma.todo.update({
    where: { id: id },
    data: { completed: !todo.completed },
  });
  revalidatePath("/");
  revalidatePath(`/todos/${id}`);
}
