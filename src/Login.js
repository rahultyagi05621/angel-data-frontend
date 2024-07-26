import React, { useState } from "react";
import "./App.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { loginUrl } from "./services/urls";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    try {
      const response = await axios.post(loginUrl, { email, password });

      if (response.data.success) {
        if (response.status === 200) {
          toast.success("Login successful");
          localStorage.setItem("token", response.data.token);
          const decodedToken = jwtDecode(response.data.token);
          if (decodedToken.user.isAgree === true) {
            return navigate("/dashboard"); // Redirect to dashboard
          }
          // toast.warn("Please upload sign");
          navigate("/dashboard/sign-agreement");
        }
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.warn("Invalid Email or Password");
      } else {
        toast.error("Unexpected error, please try again later");
      }
    } finally {
      setLoading(false); // End loading
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Login</h2>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
        <Link to="/signup">Create account?</Link>
      </form>
    </div>
  );
};

export default Login;
