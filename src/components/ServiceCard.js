import React from 'react';
import './ServiceCard.css';

const ServiceCard = ({ image, title, description, buttonText, buttonColor }) => {
  return (
    <div className="service-card">
      <img src={image} alt={title} className="service-icon" />
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="know-more-btn" style={{ backgroundColor: buttonColor }}>
        {buttonText}
      </button>
    </div>
  );
};

export default ServiceCard;
