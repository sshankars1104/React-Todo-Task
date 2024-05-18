import React, { useState } from "react";
import "./App.css";
import Forms from "./Components/Form/Forms";
import ToDoList from "./Components/ToDoList/ToDoList";
import FilterTasks from "./Components/FilterTasks/FilterTasks";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [statusFilter, setStatusFilter] = useState("all");

  const handleSaveEdit = (editedTodo) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === editedTodo.id ? editedTodo : todo))
    );
  };

  const handleDelete = (index) => {
    setTodos((prevTodos) => prevTodos.filter((_, i) => i !== index));
  };

  const handleStatusFilterChange = (e) => {
    setStatusFilter(e.target.value);
  };

  return (
    <div className="container">
      <Forms
        input={input}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
      />
      <FilterTasks
        statusFilter={statusFilter}
        onChange={handleStatusFilterChange}
      />
      <ToDoList
        todos={todos}
        handleSaveEdit={handleSaveEdit}
        handleDelete={handleDelete}
        statusFilter={statusFilter} // Pass the statusFilter to the ToDoList component
      />
    </div>
  );
}

export default App;
