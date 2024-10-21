import { useState } from 'react';
import './App.css';
import Tasks from './components/Tasks/Task';
import TaskForm from './components/TaskForm/TaskForm';

function App() {
  const [taskList, setTaskList] = useState([
    { task: 'Task 1', isComplete: false },
    { task: 'Task 2', isComplete: false },
    { task: 'Task 3', isComplete: false }
  ]);

  const [category, setCategory] = useState(null)
  const [filteredList, setFilteredList] = useState()

  const tasksLeft = taskList.filter(task => !task.isComplete).length;

  const taskDescription = taskList.map((task, index) => (
    <Tasks
      key={index}
      index={index}
      task={task.task}
      isComplete={task.isComplete}
      handleCheck={handleCheck}
      handleDeletion={handleDeletion}
    />
  ));

  function addTask(newTask) {
    setTaskList([...taskList, { task: newTask, isComplete: false }]);
  }

  function handleCheck(index) {
    const updatedTasks = [...taskList];
    updatedTasks[index].isComplete = !updatedTasks[index].isComplete;
    setTaskList(updatedTasks);
  }

  function handleDeletion(taskIndex) {
    setTaskList(taskList.filter((_, index) => index !== taskIndex));
  }

  if (category === "default") {
    console.log("default")

  } else if (category === "completed") {
    console.log("completed tasks")

  } else if (category === "pending") {
    console.log("pending tasks")
  }


  return (
    <>
      <div className='app'>
        <h1>Daily Planner</h1>
        <TaskForm addTask={addTask} />
        <div style={{ marginTop: '1rem' }}>
          <button onClick={() => { setCategory("default") }}>All</button>
          <button onClick={() => { setCategory("completed") }}>Completed</button>
          <button onClick={() => { setCategory("pending") }}>Pending</button>
        </div>

        <h2>You have {tasksLeft} tasks remaining</h2>
        {taskDescription}
        {category}
      </div>
    </>
  );
}

export default App;
