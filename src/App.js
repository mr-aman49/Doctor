import React from 'react';
import DoctorInfo from './components/DoctorInfo';
import ServicesList from './components/ServicesList';
import './App.css';

function App() {
  return (
    <div className="App">
      <DoctorInfo />
      <ServicesList />
    </div>
  );
}

export default App;
