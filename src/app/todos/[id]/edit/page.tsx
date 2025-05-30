import { Header } from "@/components/header";
import { TodoForm } from "@/components/todos/todo-form";
import prisma from "@/lib/prisma";

async function getTodo(id: number) {
  const todo = await prisma.todo.findUnique({
    where: { id },
  });
  return todo;
}

export default async function EditTodoPage({
  params,
}: {
  params: { id: string };
}) {
  const queryParams = await params;
  const todo = await getTodo(Number(queryParams.id));

  if (!todo) {
    return <div>Todo not found</div>;
  }

  return (
    <>
      <Header title="Edit Todo" subtitle="Update todo details" />
      <div className="container">
        <TodoForm todo={todo} mode="edit" />
      </div>
    </>
  );
}
