"use client";
import { toggleTodo } from "@/actions/todo-actions";
import { Spinner } from "@/components/spinner";
import { Todo } from "@prisma/client";
import { useTransition } from "react";
import { FaCheck, FaUndo } from "react-icons/fa";

type Props = {
  todo: Todo;
};

export const ToggleButton = ({ todo }: Props) => {
  const [isPending, startTransition] = useTransition();

  if (isPending) {
    return <Spinner />;
  }

  return (
    <button
      onClick={() => startTransition(() => toggleTodo(todo.id))}
      className="complete-button"
    >
      {todo.completed ? (
        <>
          <FaUndo /> Undo
        </>
      ) : (
        <>
          <FaCheck /> Complete
        </>
      )}
    </button>
  );
};
