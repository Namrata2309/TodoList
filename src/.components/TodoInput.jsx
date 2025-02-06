import { useState } from "react";

function TodoInput({ addTask }) {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="text"
        className="border p-2 w-full rounded"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded mt-2 w-full">
        Add Task
      </button>
    </form>
  );
}

export default TodoInput;