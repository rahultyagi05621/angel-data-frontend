import React, { useState } from 'react';

const CompleteTask = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    ipAddress: '',
    city: '',
    streetAddress: '',
    zipCode: '',
    accountNumber: '',
    ssn: '',
    loanAmount: '',
    licenseNo: '',
    licenseState: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
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
            <a href="#logout">Logout</a>
          </div>
        <span className="username">User</span>
        </div>
      </div>
    </header>
    <div className='task-value'>
          <div className='task-detail'>
            <h2>Current Task</h2>
            <p>Task ID: </p>
          </div>
          <div className='image-value'>

          </div>
    </div>
     <form onSubmit={handleSubmit} className='complete-task'>
     <p className='fillform'>Fill form</p>
      <div className="form-grid">
        
      <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.ipAddress}
            onChange={handleChange}
          />
        </div>
        <div>
          
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.ipAddress}
            onChange={handleChange}
          />
          </div>
          <div>
          <label htmlFor="email">E-mail:</label>
          <input
            type="text"
            id="email"
            name="email"
            value={formData.ipAddress}
            onChange={handleChange}
          />
          </div>
          <div>
          <label htmlFor="mobile">Mobile:</label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            value={formData.ipAddress}
            onChange={handleChange}
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
          />
        </div>
        <button type="submit" className="save-records-btn">Save Records</button>
      </div>
    </form>
    
    </>
  )
};
export default CompleteTask;