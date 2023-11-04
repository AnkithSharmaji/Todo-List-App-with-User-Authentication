import React from 'react';
import TaskList from '../todolist/TaskList';

const Dashboard = () => {
  return (
    <div className="page-container">
      <h2>Dashboard</h2>
      <TaskList />
    </div>
  );
};

export default Dashboard;
