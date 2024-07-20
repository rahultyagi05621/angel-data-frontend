import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
const Home = () => {
  const style = {
    overflow: 'hidden',
    scrollbarWidth: 'none', 
  };
  return (
    <div style={style}>
    <div className="home-div">
     <h1>Welcome to Angel Data Live Work</h1>
     <h3>The Future Of Freelancing Is Here.</h3>
     <br/>
     <p>
     Freelancers who have access to laptop/desktop can avail this subscription wherein they can access the portal via laptop/desktop. Resumes will be given in the form of PDF files. You have to copy-paste the data from the PDF file into the fields provided.
     </p>
      <Link to="/Contact">
        <button>Get startd, It's Free</button>
        </Link>
    </div>
    <div>

    <h1 className='our-ft'>Our Features</h1>
    </div>
    <div className="image-gallery">
      
      <div className="gallery-item">
        <img src="https://crosscountry.in.net/imagess/freelancer1.jpg" alt="Placeholder 1" />
        <h3>Feature 1</h3>
        <p>
            Our platform provides a wide range of tools to help you manage your freelance work efficiently.</p>
      </div>
      <div className="gallery-item">
        <img src="https://crosscountry.in.net/imagess/freelancer.jpg" alt="Placeholder 2" />
        <h3>Feature 2</h3>
        <p>
        Get access to numerous freelancing opportunities and connect with potential clients easily.
        </p>
      </div>
      <div className="gallery-item">
        <img src="https://crosscountry.in.net/imagess/freelancer2.jpg" alt="Placeholder 3" />
        <h3>Feature 3 </h3>
        <p>Earn competitive pay for your work and get timely payments for all completed tasks.</p>
      </div>
    </div>
    <div>

    <h1 className='our-ft'>How It Works</h1>
    </div>
    <div className="image-gallery">
    <div className='steps'>
        <h3>Step 1</h3>
        <p>
        Sign up and create your profile. Fill in all the necessary details to get started.
        </p>
    </div>
    <div className='steps-2'>
        <h3>Step 2</h3>
        <p>
        Browse through available tasks and select the ones that match your skills.
        </p>
    </div>
    <div className='steps'>
        <h3>Step 3</h3>
        <p>
        Complete the tasks by following the given instructions and submit your work.
        </p>
    </div>
    <div className='steps-4'>
        <h3>Step 4</h3>
        <p>
        Get paid for your completed tasks and withdraw your earnings easily.
        </p>
    </div>
    </div>
    <div>
    <h1 className='our-ft'>Benefits</h1>
    </div>
    <div className='benifits'>
      <div className='beni-div1 '>
          <div className='beni-odd'>Work from the comfort of your home.</div>
          <div  className="beni-even">Flexible working hours.</div>
          <div className='beni-odd'>Access to a wide range of freelancing opportunities.</div>
          <div className="beni-even">Timely payments for your work.</div>
          <div className='beni-odd'>Supportive community and resources to help you succeed.</div>
      </div>
      <div className='beni-div2'>
          <div className='beni-odd'>Gain valuable  experience  and build your portfolio.</div>
          <div className="beni-even" id='beni-even'>Enhance your skills by working on  diverse  projects.</div>
          <div className='beni-odd'>Get recognized for your hard work and dedication.</div>
          <div className="beni-even" id='beni-even'>Secure a steady income through  freelancing.</div>
          <div className='beni-odd'>Join a growing  network  of freelancers and  clients.</div>
      </div>
    </div>
    <div>
    <h1 className='our-ft'> Testimonials</h1>
    </div>
      <div className='Testimonials'>
          <div className='tm-1'>
            <p>
            "angeldata Live Work has provided me with numerous opportunities to grow my freelancing career. 
            The platform is easy to use and the support team is always ready to help."
            <p className='sign'>-John Doe</p>
            </p>
          </div>
          <div className='tm-2'>
            <p>
            "I love the flexibility that angeldata Live Work offers. I can work at my own pace and 
            choose tasks that fit my skills. The payments are timely and the platform is very user-friendly."
            <p className='sign'>-Jane Smith</p>
            </p>
          </div>
          <div className='tm-3'>
              <p>
              "This platform has been a game-changer for me. I have been able to earn a steady income through 
              freelancing and the support from the team has been fantastic."
              <p className='sign'>-Emily Johnson</p>
              </p>
          </div>
          </div>
    </div>
  );
};

export default Home;
