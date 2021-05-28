import "./App.css";
import React, { useState } from "react";
import { TaskRow } from "./componentes/TaskRow";
import { TaskBanner } from "./componentes/TaskBanner";
import { TaskCreator } from "./componentes/TaskCreator";

function App() {
  const [userName, setUserName] = useState("Diego");
  const [taskItems, setTaskItems] = useState([
    { name: "Task One", done: false },
    { name: "Task Two", done: false },
    { name: "Task Three", done: true },
    { name: "Task Four", done: false },
  ]);

  const [showCompleted, setShowCompleted] = useState(true)

  const createNewTask = taskName => {
    if(!taskItems.find(t => t.name === taskName)) {
      setTaskItems([...taskItems, {name: taskName, done: false}])
    }
  } 
  const toggleTask = task => 
    setTaskItems(taskItems.map(t => (t.name === task.name ? {...t, done: !t.done} : t)))

  const taskTableRows = () => taskItems.map(task => (
      <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
    ))
  
  return (
    <div className="App">
      <TaskBanner userName={userName} taskItems={taskItems} />
      
      <TaskCreator callback={createNewTask} />
      <table className= "table table-striped table-dark table-bordered table-hover">
        <thead>
          <tr>
            <th>Description</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>{taskTableRows()}</tbody>
      </table>
    </div>
  );
}

export default App;
