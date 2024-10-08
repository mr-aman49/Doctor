import React from 'react';
import './DoctorInfo.css';

const DoctorInfo = () => {
  return (
    <div className="doctor-info">
      <div className="doctor-content">
        <img src="doctor-image-url" alt="Dr. Geeta Mehra Fazalbhoay" className="doctor-img" />
        <div className="doctor-description">
          <h1>DR. GEETA MEHRA FAZALBHOY</h1>
          <p>
            Dr. Geeta Mehra Fazalbhoay, MD & Founder of Skin & You Clinic, Mumbai, is a globally recognized expert in dermatology and aesthetic medicine. With advanced international training and certifications...
          </p>
          <div className="buttons">
            <button className="know-more">Know More</button>
            <button className="instagram">Instagram</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorInfo;
