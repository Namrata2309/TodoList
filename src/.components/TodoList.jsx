function TodoList({ tasks, removeTask }) {
    return (
      <ul className="space-y-2">
        {tasks.map((task, index) => (
          <li key={index} className="flex justify-between items-center border p-2 rounded">
            {task}
            <button onClick={() => removeTask(index)} className="text-red-500">X</button>
          </li>
        ))}
      </ul>
    );
  }
  
  export default TodoList;
  