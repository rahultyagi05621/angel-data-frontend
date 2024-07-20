import React,{useState} from 'react';
import { Link } from 'react-router-dom';
// import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="sidebar">
        
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/dashboard/user-tasks-list">User Tasks List</Link>
        </li>
        <li>
          <Link to="/dashboard/complete-task">Complete Task</Link>
        </li>
        <li>
          <Link to="/dashboard/sign-agreement">Sign Agreement</Link>
        </li>
        <li>
          <Link className='logout' to="/dashboard/sign-agreement">Logout</Link>
        </li>
      </ul>
      </div>
      
      <div className="nav-toggle" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <div className='logo1'>Angel Data</div>
    </div>
  );
};

export default Sidebar;
