import { HeaderTodo } from '@/components/HeaderTodo'
import '../styles/Background.css'
import { AddTodo } from '@/components/AddTodo'
import { TodoList } from '@/components/TodoList'

export default function Home() {
  return (
  <>
  <div className="background dark"></div>
  <div className="container-global">
    <HeaderTodo />
    <AddTodo />
    <TodoList />
  </div>
  </>
  )
}
