import React from 'react';
import './ToasterMessage.css';

const ToasterMessage = ({ message }) => {
  return (
    <div className="toaster-container">
      <p className="toaster-message">{message}</p>
    </div>
  );
};

export default ToasterMessage;
