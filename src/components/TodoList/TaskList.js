import React, { useState, useEffect } from 'react';
import { useAuth } from '../auth/AuthContext';

const TaskList = () => {
  const { user } = useAuth();
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    // Load tasks for the logged-in user from local storage.
    const storedTasks = JSON.parse(localStorage.getItem(user.username)) || [];
    setTasks(storedTasks);
  }, [user]);

  const addTask = () => {
    if (newTask.trim() === '') return;

    const newTaskItem = {
      id: Date.now(),
      text: newTask,
      completed: false,
    };

    const updatedTasks = [...tasks, newTaskItem];
    setTasks(updatedTasks);

    // Save tasks for the logged-in user to local storage.
    localStorage.setItem(user.username, JSON.stringify(updatedTasks));

    setNewTask('');
  }

  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);

    // Update tasks in local storage.
    localStorage.setItem(user.username, JSON.stringify(updatedTasks));
  }

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);

    // Update tasks in local storage.
    localStorage.setItem(user.username, JSON.stringify(updatedTasks));
  }

  return (
    <div className="task-list-container">
      <h2>Task List</h2>
      <input
        type="text"
        placeholder="Add a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(task.id)}
            />
            <span className={task.completed ? 'completed' : ''}>{task.text}</span>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
