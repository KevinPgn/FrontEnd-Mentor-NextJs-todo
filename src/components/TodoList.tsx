import { getTodos } from "@/server/TodoActions"
import { Todo } from "./Todo"
import "../styles/TodoList.css"
import { TodosFilter } from "./TodosFilter"


export const TodoList = async () => {
  const todos = await getTodos()
  
  return <>
  <div className="todoList">
    {todos.length === 0 && <p className="no-todos">No todos yet, create one</p>}
    {todos.map((todo) => (
      <Todo key={todo.id} todo={todo} />
    ))}
    <TodosFilter todo={todos}/>
  </div>
  </>
}