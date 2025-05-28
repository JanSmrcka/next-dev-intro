import { createTodo } from "@/actions/todo-actions";

export const TodoForm = () => {
  return (
    <form action={createTodo}>
      <div className="input-group">
        <input name="todo-text" placeholder="What needs to be done?" />
        <button type="submit">Add</button>
      </div>
    </form>
  );
};
