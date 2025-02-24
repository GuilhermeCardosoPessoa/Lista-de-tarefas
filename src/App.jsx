import { useState } from "react";

import TodoForm from "./components/Todoform";

import Todo from "./components/Todo";

import "./App.css";
import Search from "./components/Search";

function App() {
  const[todos, setTodos] = useState([
  ])

  const addTodo = (text, category, description) => {

    const newTodos = [
      ...todos, 
      {
        id: Math.floor(Math.random() * 10000),
        text,
        category,
        description,
        isCompleted: false
      },
  ]

  setTodos(newTodos);
  }

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter((todo) => 
      todo.id !== id ? todo : null
    );
    setTodos(filteredTodos);
  }

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo)
    setTodos(newTodos)
  }

  const [search, setSearch] = useState("")


  return (
    <>
      <div className="app">
        <h1>Lista de tarefas</h1>
        <Search search={search} setSearch={setSearch}/>
        <div className="todo-list">
          {todos.filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase())).map ((todo) => (
            <Todo key={todo.text} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
          ))}
        </div>
        <TodoForm addTodo={addTodo}/>
      </div>
    </>
  )
}

export default App
