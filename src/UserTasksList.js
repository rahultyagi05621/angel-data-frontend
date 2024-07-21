import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useLocation } from "react-router-dom";
import { getUserTasksUrl } from "./services/urls"; // Import the URL function
import { jwtDecode } from "jwt-decode";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const UserTaskTable = () => {
  const [tasks, setTasks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10); // Number of items per page
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [totalTasks, setTotalTasks] = useState(0);

  const location = useLocation();

  const getUserIdFromToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        return decodedToken.user.id; // Adjust based on your token structure
      } catch (e) {
        setError("Invalid token");
        toast.error("Please login");
        return null;
      }
    } else {
      setError("No token found");
      toast.error("Please login");
      return null;
    }
  };

  const userId = getUserIdFromToken();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const pageFromQuery = parseInt(params.get("page"), 10);
    if (!isNaN(pageFromQuery)) {
      setCurrentPage(pageFromQuery);
    }
  }, [location.search]);

  useEffect(() => {
    const fetchTasks = async () => {
      if (!userId) return;

      setLoading(true);
      try {
        const cachedTasks = JSON.parse(localStorage.getItem(`tasks_${userId}`));
        if (cachedTasks && cachedTasks.page === currentPage) {
          setTasks(cachedTasks.data);
          setTotalTasks(cachedTasks.totalTasks);
        } else {
          const response = await axios.get(getUserTasksUrl(userId));
          if (response.status === 404) {
            toast.warn("Data not found");
          }
          const allTasks = response.data.tasks;
          setTotalTasks(allTasks.length);
          const paginatedTasks = allTasks.slice(
            (currentPage - 1) * itemsPerPage,
            currentPage * itemsPerPage
          );
          setTasks(paginatedTasks);

          localStorage.setItem(
            `tasks_${userId}`,
            JSON.stringify({
              page: currentPage,
              data: paginatedTasks,
              totalTasks: allTasks.length,
            })
          );
        }
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };

    fetchTasks();
  }, [currentPage, userId]);

  const totalPages = Math.ceil(totalTasks / itemsPerPage);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      const queryParams = new URLSearchParams(location.search);
      queryParams.set("page", page);
      window.history.replaceState(
        null,
        "",
        `${location.pathname}?${queryParams}`
      );
    }
  };

  return (
    <div className="container" id="container">
      <h2>User Task</h2>
      {loading && <p>Loading...</p>}
      {error && <p className="text-danger">Error: {error}</p>}
      <table className="table table-striped" id="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Email ID</th>
            <th>Image</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={task.id}>
              <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
              <td>{task.email}</td>
              <td>
                <img
                  src="path/to/image.png"
                  alt="task"
                  style={{ width: "50px", height: "50px" }}
                />
              </td>
              <td>
                <span className="badge bg-success">
                  {task.status ? task.status : "completed"}
                </span>
              </td>
              <td>Action</td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav>
        <ul className="pagination">
          <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
            <Link
              className="page-link"
              to="#"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Previous
            </Link>
          </li>
          {[...Array(totalPages).keys()].map((page) => (
            <li
              key={page + 1}
              className={`page-item ${
                currentPage === page + 1 ? "active" : ""
              }`}
            >
              <Link
                className="page-link"
                to="#"
                onClick={() => handlePageChange(page + 1)}
              >
                {page + 1}
              </Link>
            </li>
          ))}
          <li
            className={`page-item ${
              currentPage === totalPages ? "disabled" : ""
            }`}
          >
            <Link
              className="page-link"
              to="#"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default UserTaskTable;
