import { Todo } from "@/types";
import Link from "next/link";

type TodoItemProps = {
  todo: Todo;
};
export const TodoItem = ({ todo }: TodoItemProps) => {
  return (
    <li className={todo.completed ? "completed" : ""}>
      <span>{todo.name}</span>
      <button>Delete</button>
      <button className="toggle">
        {todo.completed ? "Undo" : "Completed"}
      </button>
      <Link href={`/todos/${todo.id}`} className="link">
        Go to Detail
      </Link>
    </li>
  );
};
