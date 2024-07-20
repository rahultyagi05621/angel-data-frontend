// src/hooks/useAuth.js
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    console.log("Token:", token);

    if (token && token.trim() !== "") {
      setIsAuthenticated(true);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  return isAuthenticated;
};

export default useAuth;
