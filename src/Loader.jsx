import React from 'react';
import './Loader.css';

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p>Please wait. Do not press back button</p>
    </div>
  );
};

export default Loader;
