import React from 'react';
import './App.css';

import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Home from './pages/home.js';
import About from './pages/about.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact/>
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
