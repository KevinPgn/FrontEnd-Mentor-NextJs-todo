"use client"

import { useState } from 'react';
import { RxCross1 } from "react-icons/rx";
import { updateTodo } from '@/server/TodoActions';
import { useFiltered } from '@/store';
import { ConfirmationDelete } from './ConfirmationDelete';
import { FaRegEdit } from "react-icons/fa";
import { Edited } from './Edited';

export const Todo = ({ todo }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  const all = useFiltered((state) => state.all);
  const isActive = useFiltered((state) => state.isActive);
  const isCompleted = useFiltered((state) => state.isCompleted);
  const [confirmationDelete, setConfirmationDelete] = useState(false);
  const [edited, setEdited] = useState(false);

  // Filtrer les todos en fonction des constantes
  const filteredTodos = all ? todo : isActive ? !todo.done : isCompleted ? todo.done : null;

  const handleMouseLeave = () => {
    setIsHovered(false);
    setConfirmationDelete(false)
    setEdited(false)
  }

  return (
    <>
      {filteredTodos && (
        <div
          className="todo" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => handleMouseLeave()} >
          <div className="left">  
            {edited ? (
              <div>
                <Edited setEdited={setEdited} todo={todo} />
              </div>
            ): (
              <div className='left'>
                <input
                  type="checkbox"
                  defaultChecked={todo.done}
                  className="checkbox"
                  onClick={() => updateTodo(todo.id)}
                />
                <span>{todo.title}</span>
              </div>
            )}
          </div>  
          <div className="right">
            {isHovered && <>
              <button
              onClick={() => setEdited(true)}
              ><FaRegEdit /></button>
              <button 
              onClick={() => setConfirmationDelete(true)}
              className="hover-button"><RxCross1 /></button>
            </>
            }
          </div>
          {confirmationDelete && <ConfirmationDelete isOpen={confirmationDelete} setIsOpen={setConfirmationDelete} id={todo.id} />}
        </div>
      )}
    </>
  );
};