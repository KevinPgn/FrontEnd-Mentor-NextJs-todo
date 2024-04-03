"use client"

import "../styles/TodosFilter.css"
import { useEffect, useState } from "react"
import { clearCompleted } from "@/server/TodoActions"
import { useFiltered } from "@/store"

export const TodosFilter = ({todo}: any) => {
  const [length, setLength] = useState(todo.length)
  const isActive = useFiltered((state) => state.isActive)
  const isCompleted = useFiltered((state) => state.isCompleted)
  const all = useFiltered((state) => state.all)
  const setActive = useFiltered((state) => state.setActive)
  const setAll = useFiltered((state) => state.setAll)
  const setCompleted = useFiltered((state) => state.setCompleted)

  useEffect(() => {
    setLength(todo.length)   
  }, [todo])

  return <>
    <div className="todo-filter">
      <div className="left">
        <span>{length} items left</span>
      </div>
      <div className="mid">
        <button
          className={all ? "active" : ""}
          onClick={() => setAll()}
        >All</button>
        <button
          className={isActive ? "active" : ""}
          onClick={() => setActive()}
        >Active</button>
        <button
          className={isCompleted ? "active" : ""}
          onClick={() => setCompleted()}
        >Completed</button>
      </div>
      <div className="right">
        <button onClick={() => clearCompleted()}>Clear Completed</button>
      </div>
    </div>
  </>
}