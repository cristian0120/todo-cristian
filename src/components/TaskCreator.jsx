import { useState, useEffect } from "react";

export const TaskCreator = ({ createNewTask }) => {
  const [newTaskName, setNewTaskName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault(); // evita que se recargue
    console.log(newTaskName);
    createNewTask(newTaskName);

    setNewTaskName("");
    //alert("sended")
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="Placeholder">
        <input
          type="text"
          placeholder="Enter a task"
          value={newTaskName}
          onChange={(e) => setNewTaskName(e.target.value)}
        />
        <button type="text">+</button>
      </div>
    </form>
  );
};
