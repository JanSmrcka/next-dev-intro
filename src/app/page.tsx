import { Header } from "@/components/header";
import { TodosSection } from "@/components/todos/todos-section";
import prisma from "@/lib/prisma";
import Link from "next/link";
import { FaPlus } from "react-icons/fa";

const fetchTodos = async () => {
  const response = await prisma.todo.findMany();
  return response;
};

export default async function Home() {
  const todos = await fetchTodos();
  return (
    <>
      <Header title="My Todo List" subtitle="Add your tasks" />
      <div className="container">
        <div className="add-todo-link">
          <Link href="/todos/new" className="add-button">
            <FaPlus /> Add New Todo
          </Link>
        </div>
        <TodosSection todos={todos} />
      </div>
      <footer>
        <p>&copy; Jakub Kafka, kafj03@vse.cz</p>
      </footer>
    </>
  );
}
