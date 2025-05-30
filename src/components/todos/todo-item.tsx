"use client";
import { DeleteButton } from "@/app/todos/[id]/components/delete-button";
import { ToggleButton } from "@/app/todos/[id]/components/toggle-button";
import { Todo } from "@prisma/client";
import { useRouter } from "next/navigation";
import { FaExclamationCircle } from "react-icons/fa";

type TodoItemProps = {
  todo: Todo;
};

export const TodoItem = ({ todo }: TodoItemProps) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    // Pokud byl kliknut na tlačítko, nechceme přesměrovat na detail
    if ((e.target as HTMLElement).closest("button")) {
      return;
    }
    router.push(`/todos/${todo.id}`);
  };

  return (
    <li
      className={`${todo.completed ? "completed" : ""} clickable`}
      onClick={handleClick}
    >
      <span>{todo.name}</span>
      <div className="todo-actions">
        <span className={`priority-${todo.priority}`}>
          <FaExclamationCircle />
        </span>
        <DeleteButton todo={todo} />
        <ToggleButton todo={todo} />
      </div>
    </li>
  );
};
