import React from "react";

function DeleteTask({ onDelete }) {
  return <button onClick={onDelete}>Delete</button>;
}

export default DeleteTask;
