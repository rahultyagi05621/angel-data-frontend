// src/Mycomponents/WorkDetails.js
import React from 'react';
import { Link } from 'react-router-dom';
const WorkDetails = () => {
  return (
    <div className="container">
      <div className="work-section">
        <h2>Work Details</h2>
        <p className="subtitle">Dedicated Work For All The Freelancers</p>
        <p className="description">
          Freelancers who have access to a laptop/desktop can avail this subscription wherein they can access the portal via laptop/desktop. Resumes will be given in the form of PDF files. You have to copy-paste the data from the PDF file into the fields provided.
        </p>
      </div>
      <div className="work-section2">
        <h3>Work Overview</h3>
        <table className="work-overview">
          <thead>
            <tr>
              <th>Parameter</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Time Period</td>
              <td>07 Days</td>
            </tr>
            <tr>
              <td>Minimum Resume to Be Processed</td>
              <td>700</td>
            </tr>
            <tr>
              <td>Maximum Resume to Be Processed</td>
              <td>700</td>
            </tr>
            <tr>
              <td>Accuracy Required</td>
              <td>90%</td>
            </tr>
            <tr>
              <td>Fixed Payout</td>
              <td>Rs. 25/form</td>
            </tr>
            <tr>
              <td>Payout for achieving Accuracy</td>
              <td>Minimum Payout: Rs. 25/Resume<br/>Maximum Payout: Rs. 70/Resume</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='main-con-FS'>
      <div className="flex-support">
        <h3>Flexibility</h3>
        <p>
          Work from the comfort of your home with flexible hours that suit your schedule. 
          This opportunity is perfect for individuals looking for a side gig or even a full-time job from home.
        </p>
      </div>
      <div className="flex-support">
        <h3>Support</h3>
        <p>
          We provide extensive support to ensure that you can complete your tasks efficiently. Our team is always available to help you with any questions or issues you may encounter.
        </p>
      </div>
      </div>
      <div className="flex-support1">
        <h3>Why Join Us?</h3>
        <p>
          angeldata Live Work offers numerous benefits, including timely payments, a supportive community, and access to a wide range of freelancing opportunities. Our platform is designed to help you grow your skills and achieve your financial goals.
        </p>
      </div>
      <div className="join-now">
      <Link to="/Contact">
        <button className="join-now-button">Join Now</button>

      </Link>
      </div>
      
    </div>
  );
};

export default WorkDetails;
