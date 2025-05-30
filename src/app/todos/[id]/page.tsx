import { Header } from "@/components/header";
import { ToggleButton } from "@/app/todos/[id]/components/toggle-button";
import { DeleteButton } from "@/app/todos/[id]/components/delete-button";
import prisma from "@/lib/prisma";
import { HomeButton } from "./components/home-button";

const getPriorityText = (priority: number) => {
  switch (priority) {
    case 0:
      return "Low";
    case 1:
      return "Medium";
    case 2:
      return "High";
    default:
      return "Unknown";
  }
};

async function getTodo(id: number) {
  const todo = await prisma.todo.findUnique({
    where: { id: id },
  });
  return todo;
}

const TodoDetailPage = async ({ params }: { params: { id: string } }) => {
  const queryParams = await params;
  const todo = await getTodo(Number(queryParams.id));

  if (!todo) {
    return <div>Todo not found</div>;
  }

  return (
    <>
      <Header title="Todo Detail" subtitle="Here is detail of todo" />
      <div className="todo-detail">
        <div className="todo-detail-card">
          <h2>{todo.name}</h2>
          <div className="todo-detail-status">
            Status:{" "}
            <span className={todo.completed ? "completed" : "active"}>
              {todo.completed ? "Completed" : "Active"}
            </span>
          </div>
          <div className="todo-detail-status">
            Priority:{" "}
            <span className={`priority-${todo.priority}`}>
              {getPriorityText(todo.priority)}
            </span>
          </div>

          {todo.description && (
            <div className="todo-detail-description">
              <p>{todo.description}</p>
            </div>
          )}
        </div>

        <div className="todo-detail-actions">
          <HomeButton />
          <ToggleButton todo={todo} />
          <DeleteButton todo={todo} />
        </div>
      </div>
    </>
  );
};

export default TodoDetailPage;
