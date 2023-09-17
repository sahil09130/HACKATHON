// src/components/LandingPage.js
import React from 'react';
import './LandingPage.css'; // Import your CSS file


function LandingPage() {
  return (
   
    <div className="landing-page">
      <h1>Welcome to Cancer Appointment Booking</h1>
      <p>In the fight against cancer, priority is not a luxury, its been a lifeline</p>
     <div className='buttons-div'>
      <button onClick={() => window.location.href = '/priority-list'}>
        <strong>Priority List For Doctors</strong>
      </button>
      <button onClick={() => window.location.href = '/chatbot'}>
        <strong>Diagnose For Patient</strong>
      </button>
      </div>
    </div>
  );
}

export default LandingPage;
