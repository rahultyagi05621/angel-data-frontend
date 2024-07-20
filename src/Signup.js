import React, { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { signUpUrl } from "./services/urls";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Check if formData is valid before making the API call
      if (!formData.email.includes("@")) {
        toast.error("Please enter a valid email address.");
        setLoading(false);
        return;
      }
      if (formData.password.length < 6) {
        toast.error("Password must be at least 6 characters long.");
        setLoading(false);
        return;
      }

      console.log("Email:", formData.email);
      console.log("Password:", formData.password);
      console.log("name:", formData.name);

      const response = await axios.post(signUpUrl, {
        email: formData.email,
        password: formData.password,
        name: formData.name,
      });
      console.log("response ", response);
      if (response.status === 200) {
        toast.success(
          "signup successfully, please check your email for verification"
        );
        setFormData({
          name: "",
          email: "",
          password: "",
        });
      }
    } catch (error) {
      console.log("error ", error);
      if (error.response.status === 400) {
        toast.warn(error.response.data.msg);
      } else {
        toast.error("Unexpected error, please try again later");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <div className="signup-form">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" disabled={loading}>
            {loading ? "Signing Up..." : "Sign Up"}
          </button>
          <div>
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
