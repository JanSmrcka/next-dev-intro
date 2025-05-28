"use client"
import {toggleTodo} from "@/actions/todo-actions";
import {Todo} from "@prisma/client";

interface ToggleButtonProps {
    todo: Todo
}

export const ToggleButton = ({todo}:ToggleButtonProps) => {
    const handleToggleTodo = async ()=>{
        await toggleTodo(todo.id);
    }

  return (
      <button onClick={handleToggleTodo} className="complete-button">
          {todo.completed ? "Undo" : "Complete"}
      </button>
  )
}