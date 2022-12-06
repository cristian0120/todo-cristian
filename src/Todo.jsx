import { useState, useEffect } from "react";
import { ClearAll } from "./components/ClearAll";

import { TaskCreator } from "./components/TaskCreator";
import { TaskTable } from "./components/TaskTable";

export const Todo = ({ title = "Add New Task" }) => {
  const [tasksItems, setTasksItems] = useState([]);

  const [showCompleted, setShowCompleted] = useState(false);

  function createNewTask(tasksName) {
    if (!tasksItems.find((task) => task.name === tasksName)) {
      setTasksItems([...tasksItems, { name: tasksName, done: false }]);
    }
  }

  const toggleTask = (task) => {
    setTasksItems(
      tasksItems.map((t) => (t.name == task.name ? { ...t, done: !t.done } : t))
    );
  };
  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data) {
      setTasksItems(JSON.parse(data));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasksItems));
  }, [tasksItems]);

  const cleanTasks = () => {
    setTasksItems([]);

  };

  return (
    <>
      <div className="containerPlaceholder">
        <h1>{title}</h1>
        <hr />
        <TaskCreator createNewTask={createNewTask} />

        <TaskTable
          tasks={tasksItems}
          toggleTask={toggleTask}
          showCompleted={false}
        />
        <ClearAll cleanTasks={cleanTasks} />
        {showCompleted === true && (
          <TaskTable tasks={tasksItems} showCompleted={showCompleted} />
        )}
      </div>
    </>
  );
};

export default Todo;
