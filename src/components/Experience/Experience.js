import React from 'react';
import './Experience.css'

const Experience = ({ number, title }) => {
  return (
    <div className="experience">
      <h1>{number}</h1>
      <p>{title}</p>
    </div>
  );
};

export default Experience;
