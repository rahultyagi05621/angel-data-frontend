import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { createTaskUrl } from "./services/urls";
import { jwtDecode } from "jwt-decode";
import "react-toastify/dist/ReactToastify.css";

const CompleteTask = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      return navigate("/login"); // Redirect to login if no token
    }
    const decodedToken = jwtDecode(token);
    if (decodedToken.user.isAgree !== true) {
      return navigate("/dashboard/sign-agreement");
    }
  }, [navigate]);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    ipAddress: "",
    city: "",
    streetAddress: "",
    zipCode: "",
    accountNumber: "",
    ssn: "",
    loanAmount: "",
    licenseNo: "",
    licenseState: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (
        !formData.firstName ||
        !formData.lastName ||
        !formData.email ||
        !formData.mobile ||
        !formData.ipAddress ||
        !formData.city ||
        !formData.streetAddress ||
        !formData.zipCode ||
        !formData.accountNumber ||
        !formData.ssn ||
        !formData.loanAmount ||
        !formData.licenseNo ||
        !formData.licenseState
      ) {
        toast.error("Please fill in all required fields.");
        setLoading(false);
        return;
      }

      if (!formData.email || !formData.email.includes("@")) {
        toast.error("Please enter a valid email address.");
        setLoading(false);
        return;
      }

      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("No token found, please log in.");
        setLoading(false);
        return;
      }

      const decodedToken = jwtDecode(token);
      console.log("user ", decodedToken);
      const payload = {
        userId: decodedToken.user.id,
        email: formData.email,
      };
      console.log("payload ", payload);
      const response = await axios.post(createTaskUrl(decodedToken.user.id), {
        userId: decodedToken.user.id,
        email: formData.email,
      });
      if (response.status === 201) {
        toast.success("Task added");
      }
      console.log("response ", response);
    } catch (error) {
      console.log(error);
      if (error.response.status === 404) {
        toast.warn("User Not Found");
      } else {
        toast.error("Unexpected error please try again later");
      }
    }
    setLoading(false);
    console.log("Form submitted:", formData);
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login"); // Redirect to login page
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <h2>Angel Data</h2>
        </div>
        <div className="user-menu">
          <div className="dropdown">
            <button className="dropbtn">▼</button>
            <div className="dropdown-content">
              <a href="" onClick={handleLogout}>
                Logout
              </a>
            </div>
            <span className="username">User</span>
          </div>
        </div>
      </header>
      <div className="task-value">
        <div className="task-detail">
          <h2>Current Task</h2>
          <p>Task ID: </p>
        </div>
        <div className="image-value"></div>
      </div>
      <form onSubmit={handleSubmit} className="complete-task">
        <p className="fillform">Fill form</p>
        <div className="form-grid">
          <div>
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              disabled={loading}
            />
          </div>
          <div>
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              disabled={loading}
            />
          </div>
          <div>
            <label htmlFor="email">E-mail:</label>
            <input
              type="text"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={loading}
            />
          </div>
          <div>
            <label htmlFor="mobile">Mobile:</label>
            <input
              type="text"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              disabled={loading}
            />
          </div>
          <div>
            <label htmlFor="ipAddress">IP Address:</label>
            <input
              type="text"
              id="ipAddress"
              name="ipAddress"
              value={formData.ipAddress}
              onChange={handleChange}
              disabled={loading}
            />
          </div>
          <div>
            <label htmlFor="city">City:</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              disabled={loading}
            />
          </div>
          <div>
            <label htmlFor="streetAddress">Street Address:</label>
            <input
              type="text"
              id="streetAddress"
              name="streetAddress"
              value={formData.streetAddress}
              onChange={handleChange}
              disabled={loading}
            />
          </div>
          <div>
            <label htmlFor="zipCode">Zip Code:</label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              disabled={loading}
            />
          </div>
          <div>
            <label htmlFor="accountNumber">Account Number:</label>
            <input
              type="text"
              id="accountNumber"
              name="accountNumber"
              value={formData.accountNumber}
              onChange={handleChange}
              disabled={loading}
            />
          </div>
          <div>
            <label htmlFor="ssn">SSN:</label>
            <input
              type="text"
              id="ssn"
              name="ssn"
              value={formData.ssn}
              onChange={handleChange}
              disabled={loading}
            />
          </div>
          <div>
            <label htmlFor="loanAmount">Loan Amount:</label>
            <input
              type="text"
              id="loanAmount"
              name="loanAmount"
              value={formData.loanAmount}
              onChange={handleChange}
              disabled={loading}
            />
          </div>
          <div>
            <label htmlFor="licenseNo">License No:</label>
            <input
              type="text"
              id="licenseNo"
              name="licenseNo"
              value={formData.licenseNo}
              onChange={handleChange}
              disabled={loading}
            />
          </div>
          <div>
            <label htmlFor="licenseState">License State:</label>
            <input
              type="text"
              id="licenseState"
              name="licenseState"
              value={formData.licenseState}
              onChange={handleChange}
              disabled={loading}
            />
          </div>
          <button type="submit" className="save-records-btn" disabled={loading}>
            {loading ? "Saving..." : "Save Records"}
          </button>
        </div>
      </form>
    </>
  );
};

export default CompleteTask;
