"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createTodo(formData: FormData) {
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const priority = parseInt(formData.get("priority") as string) || 0;

  const newTodo = {
    name,
    description: description || null,
    priority,
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
