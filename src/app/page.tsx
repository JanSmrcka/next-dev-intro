import { Header } from "@/components/header";
import { TodosSection } from "@/components/todos/todos-section";
import prisma from "@/lib/prisma";

const API_URL = 'https://eli-workshop.vercel.app/api/users/conl03/todos'

const fetchTodos = async () => {
  const response = await prisma.todo.findMany();
  return response;
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
