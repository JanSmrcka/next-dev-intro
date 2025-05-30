"use client";

import { Todo } from "@prisma/client";
import { useRouter } from "next/navigation";
import { createTodo, updateTodo } from "@/actions/todo-actions";
import {
  FaTasks,
  FaAlignLeft,
  FaExclamationCircle,
  FaSave,
  FaTimes,
} from "react-icons/fa";
import { ErrorMessage } from "@/components/error-message";
import { useState } from "react";

interface TodoFormProps {
  todo?: Todo;
  mode: "create" | "edit";
}

export function TodoForm({ todo, mode }: TodoFormProps) {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(formData: FormData) {
    try {
      setError(null);
      if (mode === "create") {
        await createTodo(formData);
        router.push("/");
      } else if (todo) {
        await updateTodo(todo.id, formData);
        router.push(`/todos/${todo.id}`);
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : "An error occurred");
    }
  }

  return (
    <form action={handleSubmit} className="todo-form">
      {error && (
        <ErrorMessage message={error} onDismiss={() => setError(null)} />
      )}

      <div className="form-group">
        <label htmlFor="name">
          <FaTasks className="form-icon" /> Task Name
        </label>
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
        <label htmlFor="description">
          <FaAlignLeft className="form-icon" /> Description
        </label>
        <textarea
          id="description"
          name="description"
          placeholder="Add a description..."
          rows={3}
          defaultValue={todo?.description || ""}
        />
      </div>

      <div className="form-group">
        <label htmlFor="priority">
          <FaExclamationCircle className="form-icon" /> Priority
        </label>
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
          <FaSave className="form-icon" />{" "}
          {mode === "create" ? "Create Todo" : "Update Todo"}
        </button>
        <button
          type="button"
          className="secondary-button"
          onClick={() =>
            router.push(mode === "create" ? "/" : `/todos/${todo?.id}`)
          }
        >
          <FaTimes className="form-icon" /> Cancel
        </button>
      </div>
    </form>
  );
}
