import { TodoForm } from "./todo-form";
import { TodoItem } from "./todo-item";
import { Spinner } from "../spinner";
import { ErrorMessage } from "../error-message";
import { Todo } from "@/types";

type Props = {
  todos: Todo[];
};

export const TodosSection = ( {todos}:Props ) => {
  const error = null; // Simulating no error state
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
