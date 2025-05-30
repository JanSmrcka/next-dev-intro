"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createTodo(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const priority = parseInt(formData.get("priority") as string);

    if (!name) {
      throw new Error("Name is required");
    }

    await prisma.todo.create({
      data: {
        name,
        description,
        priority,
      },
    });

    revalidatePath("/");
  } catch (error) {
    console.error("Error creating todo:", error);
    throw new Error("Failed to create todo. Please try again.");
  }
}

export async function deleteTodo(id: number) {
  try {
    await prisma.todo.delete({
      where: { id },
    });

    revalidatePath("/");
  } catch (error) {
    console.error("Error deleting todo:", error);
    throw new Error("Failed to delete todo. Please try again.");
  }
}

export async function toggleTodo(id: number) {
  try {
    const todo = await prisma.todo.findUnique({
      where: { id },
    });

    if (!todo) {
      throw new Error("Todo not found");
    }

    await prisma.todo.update({
      where: { id },
      data: {
        completed: !todo.completed,
        completedAt: !todo.completed ? new Date() : null,
      },
    });

    revalidatePath("/");
    revalidatePath(`/todos/${id}`);
  } catch (error) {
    console.error("Error toggling todo:", error);
    throw new Error("Failed to update todo status. Please try again.");
  }
}

export async function updateTodo(id: number, formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const priority = parseInt(formData.get("priority") as string);

    if (!name) {
      throw new Error("Name is required");
    }

    await prisma.todo.update({
      where: { id },
      data: {
        name,
        description,
        priority,
      },
    });

    revalidatePath("/");
    revalidatePath(`/todos/${id}`);
  } catch (error) {
    console.error("Error updating todo:", error);
    throw new Error("Failed to update todo. Please try again.");
  }
}
