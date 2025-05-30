"use client";
import { Todo } from "@prisma/client";
import { TodoItem } from "./todo-item";
import { useState } from "react";

type Props = {
  todos: Todo[];
};

export const TodosSection = ({ todos }: Props) => {
  const [filter, setFilter] = useState("");

  const filteredTodos = todos.filter((todo) =>
    todo.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <main>
      <div className="filter-container">
        <input
          type="text"
          placeholder="Filter todos..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="filter-input"
        />
      </div>
      <div className="todo-container">
        <ul>
          {filteredTodos?.map((todo) => {
            return <TodoItem key={todo.id} todo={todo} />;
          })}
        </ul>
      </div>
    </main>
  );
};
