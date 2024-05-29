import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link,Routes } from 'react-router-dom';
import Home from './Home.jsx';
import About from './About.jsx';
import Project from './Project.jsx';


function App() {
  return (
    <>
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
