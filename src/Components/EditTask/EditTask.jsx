import React, { useState } from "react";
import "./EditTask.css";

function EditTask({ todo, onSaveEdit }) {
  const [editedTitle, setEditedTitle] = useState(todo.title);
  const [editedDescription, setEditedDescription] = useState(todo.description);
  const [editedStatus, setEditedStatus] = useState(
    todo.completed ? "completed" : "not completed"
  );

  const handleSave = () => {
    onSaveEdit({
      ...todo,
      title: editedTitle,
      description: editedDescription,
      completed: editedStatus === "completed",
    });
  };

  return (
    <div className="text-edit">
      <input
        type="text"
        value={editedTitle}
        onChange={(e) => setEditedTitle(e.target.value)}
      />
      <input
        type="text"
        value={editedDescription}
        onChange={(e) => setEditedDescription(e.target.value)}
      />
      <select
        value={editedStatus}
        onChange={(e) => setEditedStatus(e.target.value)}
      >
        <option value="completed">Completed</option>
        <option value="not completed">Not Completed</option>
      </select>
      <button onClick={handleSave}>Save</button>
    </div>
  );
}

export default EditTask;
