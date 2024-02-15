import React from 'react';
import './ProfilePage.css'; // Import the CSS file for profile page styling
import { useLocation } from 'react-router-dom';

const ProfilePage = () => {
    const location = useLocation();
    const formData = location.state?.formData;


  return (
    <div className="profile-container">
      <h2 className="profile-title">Welcome to Your Profile</h2>
      <div className="profile-info">
        <p><span className="label">First Name:</span> {formData.firstName}</p>
        <p><span className="label">Last Name:</span> {formData.lastName}</p>
        <p><span className="label">Email:</span> {formData.email}</p>
        <p><span className="label">Password:</span> {formData.password}</p>
        {/* Assuming confirmPassword is not needed in the profile */}
      </div>
    </div>
  );
};

export default ProfilePage;
