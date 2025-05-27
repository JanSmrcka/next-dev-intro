import { API_URL } from "@/constants";
import { revalidatePath } from "next/cache";

export async function createTodo(formData: FormData) {
  "use server";
  const todoText = formData.get("todo-text") as string;
  if (!todoText) {
    throw new Error("Todo text cannot be empty");
  }
  const newTodo = {
    name: todoText,
    completed: false,
  };

  await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });
  revalidatePath("/"); // Revalidate the home page to reflect the new todo
}
