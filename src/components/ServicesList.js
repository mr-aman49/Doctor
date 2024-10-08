import React from 'react';
import ServiceCard from './ServiceCard';
import './ServicesList.css';

// Sample images/icons for services (you would replace these with actual URLs to your assets)
const services = [
  {
    title: 'Body & Face Laser Hair Removal',
    description: 'Experience smooth, hair-free skin with our advanced, pain-free laser technology.',
    buttonText: 'Book Appointment',
    buttonColor: '#ff6767', // Different button color for each service
    image: 'path-to-laser-hair-removal-icon', // Replace with actual icon/image URL
  },
  {
    title: 'Tattoo Removal',
    description: 'Safely erase unwanted tattoos with precision laser treatments, leaving your skin flawless.',
    buttonText: 'Know More',
    buttonColor: '#d79fcb',
    image: 'path-to-tattoo-removal-icon', // Replace with actual icon/image URL
  },
  {
    title: 'Fat Loss & Inch Loss',
    description: 'Achieve your body goals with non-invasive, targeted fat reduction and contouring.',
    buttonText: 'Know More',
    buttonColor: '#f4e5b5',
    image: 'path-to-fat-loss-icon', // Replace with actual icon/image URL
  },
  {
    title: 'Botox',
    description: 'Effortlessly smooth wrinkles and rejuvenate your skin with our expert Botox treatment.',
    buttonText: 'Know More',
    buttonColor: '#ffb2b2',
    image: 'path-to-botox-icon', // Replace with actual icon/image URL
  },
  {
    title: 'Body and Face Tightening',
    description: 'Lift and tighten sagging skin with our cutting-edge, non-surgical radiofrequency treatments.',
    buttonText: 'Know More',
    buttonColor: '#b2d8f7',
    image: 'path-to-tightening-icon', // Replace with actual icon/image URL
  },
];

const ServicesList = () => {
  return (
    <div className="services-list">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          title={service.title}
          description={service.description}
          buttonText={service.buttonText}
          buttonColor={service.buttonColor}
          image={service.image}
        />
      ))}
    </div>
  );
};

export default ServicesList;
