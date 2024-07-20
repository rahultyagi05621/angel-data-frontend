import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { contactUrl } from "./services/urls";
import { validateName } from "./services/utils";

function Contact() {
  console.log(process.env.REACT_APP_API_URL);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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
      if (!formData.email.includes("@")) {
        toast.error("Please enter a valid email address.");
        setLoading(false);
        return;
      }
      if (!validateName(formData.name)) {
        toast.error("Please enter a valid name (letters and spaces only).");
        setLoading(false);
        return;
      }
      const response = await axios.post(contactUrl, formData);
      if (response.status === 201) {
        toast.success("Feedback submitted successfully");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.error(error);
      if (error.response.status === 404) {
        toast.warn("Feedback not submitted, please try again later");
      } else {
        toast.error("An error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p>
        Have any questions? Reach out to us and we'll get back to you as soon as
        possible.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default Contact;
