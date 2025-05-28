import { revalidatePath } from "next/cache";

export async function createTodo(formData: FormData) {
  "use server";
  const todoName = formData.get("todo-text") as string;
  const API_URL = "https://eli-workshop.vercel.app/api/users/luut02/todos";

  const newTodo = {
    name: todoName,
  };
  await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });
  revalidatePath("/");
}
