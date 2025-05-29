"use client";
import { toggleTodo } from "@/actions/todo-actions";
import { Todo } from "@prisma/client";

interface Props {
  todo: Todo;
}
export const ToggleButton = ({ todo }: Props) => {
  function handleToggle() {
    toggleTodo(todo.id);
  }

  return (
    <button onClick={handleToggle} className="complete-button">
      {todo.completed ? "Undo" : "Complete"}
    </button>
  );
};
