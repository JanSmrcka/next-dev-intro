import { Header } from "@/components/header";
import { TodosSection } from "@/components/todos/todos-section";
import { API_URL } from "@/constants";

async function fetchTodos() {
  const response = await fetch(API_URL);
  return response.json();
}

export default async function Home() {
  const todos = await fetchTodos();

  return (
    <>
      <Header title="My Todo List" subtitle="Add your tasks" />
      <TodosSection todos={todos} />
      <footer>
        <p>Click on a task to mark it as completed</p>
      </footer>
    </>
  );
}
