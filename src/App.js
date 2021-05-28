import "./App.css";
import React, { useState } from "react";
import { TaskRow } from "./componentes/TaskRow";
import { TaskBanner } from "./componentes/TaskBanner";
import { TaskCreator } from "./componentes/TaskCreator";
import { VisibilityControl } from "./componentes/VisibilityControl";


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

  const taskTableRows = (doneValue) => 
  taskItems
  .filter(task => task.done === doneValue)
  .map(task => (
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
        <tbody>{taskTableRows(false)}</tbody>
      </table>

      <div className="bg-secondary-text-white text-center p-2">
        <VisibilityControl 
        description="Completed Task" 
        isChecked={showCompleted}
        callback={checked => setShowCompleted(checked)}
        />
      </div>
      {
        showCompleted && (
        <table className="table table-striped table-dark table-bordered table-hover">
          <thead>
            <tr>
              <th>Description</th>
              <th>Done</th>
            </tr>
          </thead>
          <tbody>
            {taskTableRows(true)}
          </tbody>
        </table>
        )
        
      }
    </div>
  );
}

export default App;
