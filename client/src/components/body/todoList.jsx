import "./todoList.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";

export default function TodoList({ todos, setTodos, fetchTodos }) {
  const handleDelete = async (id) => {
    const deleted = await fetch(`http://localhost:5050/todo/delete/${id}`, {
      method: "delete",
    });

    // const filtered = todos.filter((item) => item._id !== id);
    // setTodos(filtered);
    fetchTodos();
  };

  //Move Todo to On Going and vice versa
  const updateStatus = async (id, newStatus) => {
    const updated = await fetch(`http://localhost:5050/todo/update`, {
      method: "put",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        _id: id,
        status: newStatus,
      }),
    });

    fetchTodos();
  };

  //To Do
  var todoList = todos.map((todo) => {
    if (todo.status === "todo")
      return (
        <li key={todo._id.toString()}>
          <h5>{todo.todo}</h5>
          <h6>{todo.description}</h6>
          <h6>{todo.date}</h6>
          <div className="buttons">
            <button onClick={() => handleDelete(todo._id)}>
              <BsTrash />
            </button>
            <button onClick={() => updateStatus(todo._id, "ongoing")}>
              <AiOutlineArrowRight />
            </button>
          </div>
        </li>
      );
  });

  //On Going
  var onGoingList = todos.map((todo) => {
    if (todo.status === "ongoing")
      return (
        <li key={todo._id.toString()}>
          <h5>{todo.todo}</h5>
          <h6>{todo.description}</h6>
          <h6>{todo.date}</h6>
          <div className="buttons">
            <button onClick={() => updateStatus(todo._id, "todo")}>
              <AiOutlineArrowLeft />
            </button>
            <button onClick={() => handleDelete(todo._id)}>
              <BsTrash />
            </button>
            <button onClick={() => updateStatus(todo._id, "done")}>
              <AiOutlineArrowRight />
            </button>
          </div>
        </li>
      );
  });

  //Done
  var doneList = todos.map((todo) => {
    if (todo.status === "done")
      return (
        <li key={todo._id.toString()}>
          <h5>{todo.todo}</h5>
          <h6>{todo.description}</h6>
          <h6>{todo.date}</h6>
          <div className="buttons">
            <button onClick={() => updateStatus(todo._id, "ongoing")}>
              <AiOutlineArrowLeft />
            </button>
            <button onClick={() => handleDelete(todo._id)}>
              <BsTrash />
            </button>
          </div>
        </li>
      );
  });

  return todos[0] ? (
    <div className="body">
      <ul className="todo-list">
        <li>To Do</li>
        {todoList}
      </ul>

      <ul className="todo-list">
        <li>On Going</li>
        {onGoingList}
      </ul>

      <ul className="todo-list">
        <li>Done</li>
        {doneList}
      </ul>
    </div>
  ) : (
    <h3>No items found</h3>
  );
}
