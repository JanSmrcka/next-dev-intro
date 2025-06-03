"use client";
import { deleteTodo } from "@/actions/todo-actions";
import { Todo } from "@prisma/client";
import { useRouter } from "next/navigation";
import { FaTrash } from "react-icons/fa";
import { useTransition } from "react";
import { Spinner } from "@/components/spinner";

type Props = {
  todo: Todo;
};

export const DeleteButton = ({ todo }: Props) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this todo?")) {
      startTransition(async () => {
        await deleteTodo(todo.id);
        router.push("/");
        router.refresh();
      });
    }
  };

  if (isPending) {
    return <Spinner />;
  }

  return (
    <button onClick={handleDelete} className="delete-button">
      <FaTrash />
    </button>
  );
};
