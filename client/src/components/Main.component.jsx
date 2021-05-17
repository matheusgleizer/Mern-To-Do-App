import { useEffect, useState } from "react";
import "./main.style.css";
import Header from "./header/header.component.jsx";
import ToDoInput from "./body/todoInput.jsx";
import TodoList from "./body/todoList.jsx";

export default function Main() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = async () => {
    const req = await (
      await fetch(`https://frozen-savannah-21687.herokuapp.com/todo`)
    )
      .json()
      .then((json) => setTodos(json.info))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <div>
      <Header />
      <ToDoInput todos={todos} setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} fetchTodos={fetchTodos} />
    </div>
  );
}
