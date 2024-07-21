import React, { useEffect } from "react";

const SignAgreement = () => {
  useEffect(() => {
    // Clear the token from local storage
    localStorage.removeItem("token");

    // Redirect to the login page
    window.location.href = "/login";
  }, []);

  return <div>Sign Agreement Content</div>;
};

export default SignAgreement;
