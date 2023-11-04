import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() === '') return;

    addTask(newTask);
    setNewTask('');
  };

  return (
    <div className="task-form-container">
      <input
        type="text"
        placeholder="Add a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={handleAddTask}>Add</button>
    </div>
  );
};

export default TaskForm;
