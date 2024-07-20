import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import UserTasksList from './UserTasksList';
import CompleteTask from './CompleteTask';
import SignAgreement from './SignAgreement';
// import Navbar from './Mycomponents/Navbar';

// import './Layout.css';

const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/user-tasks-list" element={<UserTasksList />} />
          <Route path="/complete-task" element={<CompleteTask />} />
          <Route path="/sign-agreement" element={<SignAgreement />} />
        </Routes>
      </div>
    </div>
  );
};

export default Layout;
