import React, { useState, useEffect } from "react";
import axios from "axios";
import { getUserTasksUrl } from "./services/urls"; // Import the URL function
import { jwtDecode } from "jwt-decode"; // Corrected import statement
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [redirect, setRedirect] = useState(false);
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkToken = () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setRedirect(true);
      } else {
        try {
          const decodedToken = jwtDecode(token);
          if (decodedToken.user.isAgree !== true) {
            return navigate("/dashboard/sign-agreement");
          }
          setUserId(decodedToken.user.id);
        } catch (e) {
          setError("Invalid token");
          toast.error("Please login");
          setRedirect(true);
        }
      }
    };

    checkToken();
  }, []); // Only run once on component mount

  useEffect(() => {
    const fetchTasks = async () => {
      if (!userId) return;

      setLoading(true);
      try {
        const response = await axios.get(getUserTasksUrl(userId));
        const allTasks = response.data.tasks;
        setTasks(allTasks);
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };

    fetchTasks();
  }, [userId]); // Only run once when userId is available
  const handleLogout = () => {
    localStorage.removeItem("token");
    setRedirect(true);
  };
  if (redirect) {
    return <Navigate to="/login" />;
  }

  const totalTasks = tasks.length;
  const pendingTasks = tasks.filter((task) => task.status === "pending").length;
  const completedTasks = tasks.filter(
    (task) => task.status === "completed"
  ).length;
  const inProgressTasks = tasks.filter(
    (task) => task.status === "in-progress"
  ).length;

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
              <a href="/" onClick={handleLogout}>
                Logout
              </a>
            </div>
            <span className="username">User</span>
          </div>
        </div>
      </header>
      <h1>Home</h1>
      <p>Welcome!</p>
      {loading && <p>Loading...</p>}
      {error && <p className="text-danger">Error: {error}</p>}
      <div className="stats">
        <div className="stat-box assigned">
          <h2>{totalTasks}</h2>
          <p>Total Tasks Assigned</p>
        </div>
        <div className="stat-box pending">
          <h2>{pendingTasks}</h2>
          <p>Total Pending Tasks</p>
        </div>
        <div className="stat-box completed">
          <h2>{completedTasks}</h2>
          <p>Total Completed Tasks</p>
        </div>
        <div className="stat-box in-progress">
          <h2>{inProgressTasks}</h2>
          <p>On-Progress Tasks</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
