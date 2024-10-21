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

  const [category, setCategory] = useState("default")

  const tasksLeft = taskList.filter(task => !task.isComplete).length;

  //task renderer
  const renderTasks = (tasks) => tasks.map((task, index) => (
    <Tasks
      key={index}
      index={index}
      task={task.task}
      isComplete={task.isComplete}
      handleCheck={handleCheck}
      handleDeletion={handleDeletion}
    />
  ));

  //inserting filtering conditions to existing render
  const completedList = taskList.filter(task => task.isComplete);
  const incompletedList = taskList.filter(task => !task.isComplete);


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

  // const filteredProducts = filter === 0 ? products
  // : products.filter(product => product.category === filter)


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
        { category === "default" && renderTasks(taskList)}
        { category === "completed" && renderTasks(completedList)}
        { category === "pending" && renderTasks(incompletedList)}

      </div>
    </>
  );
}

export default App;
