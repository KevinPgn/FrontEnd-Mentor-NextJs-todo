"use client"

import { useState } from 'react';
import { RxCross1 } from "react-icons/rx";
import { deleteTodo } from '@/server/TodoActions';
import { updateTodo } from '@/server/TodoActions';
import { useFiltered } from '@/store';

export const Todo = ({ todo }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const all = useFiltered((state) => state.all);
  const isActive = useFiltered((state) => state.isActive);
  const isCompleted = useFiltered((state) => state.isCompleted);

  // Filtrer les todos en fonction des constantes
  const filteredTodos = all ? todo : isActive ? !todo.done : isCompleted ? todo.done : null;

  return (
    <>
      {filteredTodos && (
        <div
          className="todo" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >
          <div className="left">  
            <input
              type="checkbox"
              defaultChecked={todo.done}
              className="checkbox"
              onClick={() => updateTodo(todo.id)}
            />
            <span>{todo.title}</span>
          </div>  
          <div className="right">
            {isHovered && <button 
            onClick={() => deleteTodo(todo.id)}
            className="hover-button"><RxCross1 /></button>}
          </div>
        </div>
      )}
    </>
  );
};