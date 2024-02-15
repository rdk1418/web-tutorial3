import React, { useState } from 'react';
import './RegistrationForm.css';
import ToasterMessage from './ToasterMessage';
import { useNavigate } from 'react-router-dom'; 

const RegistrationForm = () => {
  const navigate = useNavigate(); 

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [showToaster, setShowToaster] = useState(false);
  const [toasterMessage, setToasterMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length === 0) {
     
      setToasterMessage("Form submitted successfully!!");
      setShowToaster(true);
      console.log('Form submitted successfully:', formData);
      navigate('/profile', { state: { formData: formData } }); // Redirecting to Profile page
    }
  };

  const validateForm = (formData) => {
    let errors = {};

    if (!formData.firstName.match(/^[a-zA-Z]+$/)) {
      errors.firstName = 'First Name must contain only letters';
    }
    if (!formData.lastName.match(/^[a-zA-Z]+$/)) {
      errors.lastName = 'Last Name must contain only letters';
    }
    if (!formData.email.match(/^\S+@\S+\.\S+$/)) {
      errors.email = 'Invalid Email address';
    }
    if (formData.password.length < 8) {
      errors.password = 'Password must be at least 8 characters long';
    }
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }

    return errors;
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Registration Form</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            required
          />
          {formData.firstName !== '' && !formData.firstName.match(/^[a-zA-Z]+$/) && (
            <span className="error">First Name must contain only letters</span>
          )}
        </div>
        <div className="form-group">
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            required
          />
          {formData.lastName !== '' && !formData.lastName.match(/^[a-zA-Z]+$/) && (
            <span className="error">Last Name must contain only letters</span>
          )}
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
          {formData.email !== '' && !formData.email.match(/^\S+@\S+\.\S+$/) && (
            <span className="error">Invalid Email address</span>
          )}
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
          {formData.password !== '' && formData.password.length < 8 && (
            <span className="error">Password must be at least 8 characters long</span>
          )}
        </div>
        <div className="form-group">
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            required
          />
          {formData.confirmPassword !== '' && formData.password !== formData.confirmPassword && (
            <span className="error">Passwords do not match</span>
          )}
        </div>
        <button type="submit">Register</button>
      </form>
      {showToaster && <ToasterMessage message={toasterMessage} />}
    </div>
  );
};

export default RegistrationForm;
