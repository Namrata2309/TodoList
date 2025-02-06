import { useState } from "react";
import TodoList from "./.components/TodoList";
import TodoInput from "./.components/TodoInput";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <TodoInput addTask={addTask} />
      <TodoList tasks={tasks} removeTask={removeTask} />
    </div>
  );
}

export default App;
