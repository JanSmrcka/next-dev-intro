"use client";

import { Todo } from "@prisma/client";
import { useRouter } from "next/navigation";
import { createTodo, updateTodo } from "@/actions/todo-actions";

interface TodoFormProps {
  todo?: Todo;
  mode: "create" | "edit";
}

export function TodoForm({ todo, mode }: TodoFormProps) {
  const router = useRouter();

  async function handleSubmit(formData: FormData) {
    if (mode === "create") {
      await createTodo(formData);
      router.push("/");
    } else if (todo) {
      await updateTodo(todo.id, formData);
      router.push(`/todos/${todo.id}`);
    }
  }

  return (
    <form action={handleSubmit} className="todo-form">
      <div className="form-group">
        <label htmlFor="name">Task Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="What needs to be done?"
          required
          defaultValue={todo?.name}
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          placeholder="Add a description..."
          rows={3}
          defaultValue={todo?.description || ""}
        />
      </div>

      <div className="form-group">
        <label htmlFor="priority">Priority</label>
        <select
          id="priority"
          name="priority"
          defaultValue={todo?.priority || 0}
        >
          <option value="0">Low</option>
          <option value="1">Medium</option>
          <option value="2">High</option>
        </select>
      </div>

      <div className="form-actions">
        <button type="submit">
          {mode === "create" ? "Create Todo" : "Update Todo"}
        </button>
        <button
          type="button"
          className="secondary-button"
          onClick={() =>
            router.push(mode === "create" ? "/" : `/todos/${todo?.id}`)
          }
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
