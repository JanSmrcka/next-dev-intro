import { Todo } from "@prisma/client";
import { TodoForm } from "./todo-form";
import { TodoItem } from "./todo-item";

interface TodosSectionProps {
  todos: Todo[];
}

export const TodosSection = ({ todos }: TodosSectionProps) => {
  return (
    <main>
      <TodoForm />
      <div className="todo-container">
        <ul>
          {todos?.map((todo) => {
            return <TodoItem key={todo.id} todo={todo} />;
          })}
        </ul>
      </div>
    </main>
  );
};
