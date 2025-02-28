import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TeamPage from './TeamPage';
import AboutUs from './AboutUs';
import Home from './Home';
import './index.css'; 

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/team" element={<TeamPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
