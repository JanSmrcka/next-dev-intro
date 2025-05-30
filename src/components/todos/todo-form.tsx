"use client";
import { createTodo } from "@/actions/todo-actions";
import { useRouter } from "next/navigation";

export const TodoForm = () => {
  const router = useRouter();

  const handleSubmit = async (formData: FormData) => {
    await createTodo(formData);
    router.push("/");
    router.refresh();
  };

  return (
    <form action={handleSubmit} className="todo-form">
      <div className="form-group">
        <label htmlFor="name">Task Name</label>
        <input
          id="name"
          name="name"
          placeholder="What needs to be done?"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          placeholder="Add a description..."
          rows={3}
        />
      </div>

      <div className="form-group">
        <label htmlFor="priority">Priority</label>
        <select id="priority" name="priority" defaultValue="0">
          <option value="0">Low</option>
          <option value="1">Medium</option>
          <option value="2">High</option>
        </select>
      </div>

      <div className="form-actions">
        <button
          type="button"
          onClick={() => router.back()}
          className="secondary-button"
        >
          Cancel
        </button>
        <button type="submit">Create Todo</button>
      </div>
    </form>
  );
};
