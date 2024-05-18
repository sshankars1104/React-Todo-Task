import React from "react";
import "./FilterTasks.css";

function FilterTasks({ statusFilter, onChange }) {
  return (
    <>
      <div className="todo-list-container">
        <br />
        <br />
        <hr color="#04aa6d" />
        <br />
        <br />
        <div className="status-filter">
          <h2>MY TODO'S</h2>
          <select value={statusFilter} onChange={onChange}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="not completed">Not Completed</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default FilterTasks;
