import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { saveAs } from "file-saver";
import axios from "axios";
import agreementPdf from "./assets/12345.pdf";
import { signUrl, getUrl } from "../src/services/urls";
import { jwtDecode } from "jwt-decode";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const SignAgreement = () => {
  const navigate = useNavigate();
  const [file, setFile] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login"); // Redirect to login if no token
    }
  }, [navigate]);

  const handleFileChange = async (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);

    if (selectedFile) {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("No token found, please log in.");
        return;
      }

      const decodedToken = jwtDecode(token);
      console.log("user ", decodedToken);

      try {
        // Create a Blob from the file
        const fileBlob = new Blob([selectedFile], { type: selectedFile.type });

        // Upload the file to the backend
        const formData = new FormData();
        formData.append("file", fileBlob, selectedFile.name);

        const response = await axios.post(
          signUrl(decodedToken.user.id),
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        if (response.status === 200) {
          localStorage.setItem("token", response.data.token);
          toast.success("Signature uploaded successfully!");
        }
      } catch (error) {
        console.error("Error uploading the signature:", error);
        toast.error("Failed to upload the signature.");
      }
    }
  };

  const downloadSign = async () => {
    if (!file) {
      const token = localStorage.getItem("token");
      if (!token) {
        return alert("Please upload a signature file first.");
      }
      const decodedToken = jwtDecode(token);
      const response = await axios.get(getUrl(decodedToken.user.id), {
        responseType: "blob",
      });
      if (response.status === 200) {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "signature.pdf"); // Or set dynamically based on response headers
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        toast.success("sign download successfully");
      } else {
        alert("Failed to download signature.");
      }
    }
    // const url = URL.createObjectURL(file);
    // const link = document.createElement("a");
    // link.href = url;
    // link.download = file.name;
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
  };

  const pdfUrl =
    "https://docs.google.com/document/d/e/2PACX-1vR2nf14yajw0Nytejnat2UzXvV-cYFuxNOEigxv5QjHY6JOKA9C2hTnkSOhIertwanSy5qMK8UwzRkp/pub?embedded=true";
  const pdfName = "User_Agreement.pdf";

  const downloadPdf = () => {
    saveAs(agreementPdf, pdfName);
  };

  return (
    <div className="agreement-container">
      <h2>User View Agreement</h2>
      <div className="empty-div"></div>
      <div className="document-container">
        <iframe
          className="pdfView"
          src={pdfUrl}
          title="User Agreement"
        ></iframe>
        <button onClick={downloadPdf}>Download Document</button>
      </div>
      <div className="btn-container">
        <label htmlFor="signature">Upload Signature: </label>
        <input
          type="file"
          id="signature"
          name="signature"
          onChange={handleFileChange}
        />
        <button onClick={downloadSign}>Download Signature</button>
      </div>
    </div>
  );
};

export default SignAgreement;
