import React, { useState } from "react";
import "./ToDoList.css";
import EditTask from "../EditTask/EditTask";
import DeleteTask from "../DeleteTask/DeleteTask";

function ToDoList({ todos, handleSaveEdit, handleDelete, statusFilter }) {
  const [editIndex, setEditIndex] = useState(null);

  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const handleSave = (editedTodo) => {
    handleSaveEdit(editedTodo);
    setEditIndex(null);
  };

  // Filter the tasks based on the selected statusFilter
  const filteredTodos = todos.filter((todo) => {
    if (statusFilter === "all") {
      return true;
    } else {
      return statusFilter === "completed" ? todo.completed : !todo.completed;
    }
  });

  return (
    <ul className="todo-list">
      {filteredTodos.map((todo, index) => (
        <li
          className={`todo-item ${todo.completed ? "completed" : ""}`}
          key={todo.id}
          style={{ position: "relative" }}
        >
          <div className="title">
            <strong>Title:</strong> {todo.title}
          </div>
          <div className="description">
            <strong>Description:</strong> {todo.description}
          </div>
          <div className="status">
            <strong>Status:</strong>{" "}
            {todo.completed ? "Completed" : "Not Completed"}
          </div>
          <div className="button-container">
            {editIndex !== index ? (
              <>
                <button onClick={() => handleEdit(index)}>Edit</button>
                <DeleteTask onDelete={() => handleDelete(index)} />
              </>
            ) : (
              <EditTask todo={todo} onSaveEdit={handleSave} />
            )}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ToDoList;
