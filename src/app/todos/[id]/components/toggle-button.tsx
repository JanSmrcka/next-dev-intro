"use client";
import { toggleTodo } from "@/actions/todo-actions";
import { Todo } from "@prisma/client";

type Props = {
  todo: Todo;
};

export const ToggleButton = ({ todo }: Props) => {
  return (
    <button onClick={() => toggleTodo(todo.id)} className="complete-button">
      {todo.completed ? "Undo" : "Complete"}
    </button>
  );
};
