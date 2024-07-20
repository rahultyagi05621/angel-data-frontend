import React from 'react';
// import './Dashboard.css';

const Dashboard = () => {
  return (

    <div className="dashboard">
       <header className="header">
      <div className="logo">
        <h1>Angel Data</h1>
      </div>
      <div className="user-menu">
        <div className="dropdown">
          <button className="dropbtn">▼</button>
          <div className="dropdown-content">
            <a href="#logout">Logout</a>
          </div>
        <span className="username">User</span>
        </div>
      </div>
    </header>
      <h1>Home</h1>
      <p>Welcome !</p>
      <div className="stats">
        <div className="stat-box assigned">
          <h2>700</h2>
          <p>Total Tasks Assigned</p>
        </div>
        <div className="stat-box pending">
          <h2>0</h2>
          <p>Total Pending Tasks</p>
        </div>
        <div className="stat-box completed">
          <h2>700</h2>
          <p>Total Completed Tasks</p>
        </div>
        <div className="stat-box in-progress">
          <h2>0</h2>
          <p>On-Progress Tasks</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
