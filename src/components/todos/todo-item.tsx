"use client";
import { DeleteButton } from "@/app/todos/[id]/components/delete-button";
import { ToggleButton } from "@/app/todos/[id]/components/toggle-button";
import { Todo } from "@prisma/client";
import Link from "next/link";

type TodoItemProps = {
  todo: Todo;
};
export const TodoItem = ({ todo }: TodoItemProps) => {
  return (
    <li className={todo.completed ? "completed" : ""}>
      <span>{todo.name}</span>
      <DeleteButton todo={todo} />
      <ToggleButton todo={todo} />
      <Link href={`/todos/${todo.id}`} className="link">
        Go to Detail
      </Link>
    </li>
  );
};
