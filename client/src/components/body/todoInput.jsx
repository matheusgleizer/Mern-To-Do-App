import { useState } from "react";
import "./todoInput.style.css";

export default function ToDoInput({ todos, setTodos }) {
  const [toDo, setToDo] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    var date = new Date();
    date = date.toDateString();

    const req = await fetch(
      "https://frozen-savannah-21687.herokuapp.com/todo/create",
      {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          todo: toDo,
          date: date,
          description: description,
          status: "todo",
        }),
      }
    );

    const json = await req.json();

    setTodos([...todos, json.info]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo"></label>
      <input
        type="text"
        placeholder="Insert To Do"
        name="todo"
        onChange={(e) => setToDo(e.target.value)}
      />
      <input
        type="text"
        placeholder="Insert a description"
        name="description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}
