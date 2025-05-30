import { Header } from "@/components/header";
import { TodoForm } from "@/components/todos/todo-form";

export default function NewTodoPage() {
  return (
    <>
      <Header title="Add New Todo" subtitle="Create a new task" />
      <div className="container">
        <TodoForm />
      </div>
    </>
  );
}
