"use client";
import { deleteTodo } from "@/actions/todo-actions";
import { Todo } from "@prisma/client";
import { useRouter } from "next/navigation";

type Props = {
  todo: Todo;
};

export const DeleteButton = ({ todo }: Props) => {
  const router = useRouter();

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this todo?")) {
      await deleteTodo(todo.id);
      router.push("/");
      router.refresh();
    }
  };

  return (
    <button onClick={handleDelete} className="delete-button">
      Delete Todo
    </button>
  );
};
