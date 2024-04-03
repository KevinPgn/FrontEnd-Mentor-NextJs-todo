"use client"
import { useState } from "react"
import "../styles/AddTodo.css"
import { addTodo } from "@/server/TodoActions"

export const AddTodo = () => {
  const [checkboxCheck, setCheckedCheck] = useState(false)
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    addTodo(formData)
    e.currentTarget.reset()
  }

  return <>
  <form className="addTodo" onSubmit={handleSubmit} action={addTodo}>
    <div className="checkbox">
      <input type="checkbox" name="checkboxCheck" id="checkbox" 
      onChange={() => setCheckedCheck(!checkboxCheck)}
      checked={checkboxCheck}/>
    </div>
    <input className="add" type="text" name='title' placeholder="Your Todos..."/>
    <button type="submit"></button>
  </form>
  </>
}