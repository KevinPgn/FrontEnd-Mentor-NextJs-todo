import { useState } from "react";
import "../styles/Edited.css"

interface EditedProps {
  setEdited: React.Dispatch<React.SetStateAction<boolean>>;
  todo: any;
}

import { editTodo } from "@/server/TodoActions";

export const Edited = ({setEdited, todo}: EditedProps) => {
  const [value, setValue] = useState(todo.title);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    editTodo(todo.id, value);
    setEdited(false);
  }
  
  return <>
    <form className="edit-form" onSubmit={handleSubmit}>
      <input className="edit-text" type="text" defaultValue={todo.title} value={value} onChange={e => setValue(e.target.value)}/>
      <button className="edit-save" type="submit">Save</button>
      <button className="edit-cancel" onClick={() => setEdited(false)}>Cancel</button>
    </form>
  </>
}