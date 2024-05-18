import React, { useState } from "react";
import "./Forms.css";
import { v4 as uuidv4 } from "uuid";

function Forms({ input, setInput, todos, setTodos }) {
  const [description, setDescription] = useState(""); // State for description

  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        title: input,
        description: description,
        completed: false,
      },
    ]);
    setInput("");
    setDescription(""); // Reset description input after submitting
  };

  return (
    <div>
      <h1 className="todo-heading">My ToDo</h1>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          placeholder="ToDo name..."
          className="task-input"
          value={input}
          required
          onChange={onInputChange}
        />
        <input
          type="text"
          placeholder="ToDo Description..."
          className="task-input"
          value={description}
          onChange={onDescriptionChange}
          required
        />
        <button className="add-btn" type="submit">
          Add ToDo
        </button>
      </form>
    </div>
  );
}

export default Forms;
