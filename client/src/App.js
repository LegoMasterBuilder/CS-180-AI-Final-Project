import React, { useState, useEffect } from 'react';
import './App.css';

// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// pages
import Home from './pages/home.js';
import About from './pages/about.js';
import Safe from './pages/sfw';
import NotSafe from './pages/nsfw';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact/>
        <Route path="/about" element={<About />} />
        <Route path="/sfw" element={<Safe />} />
        <Route path="/nsfw" element={<NotSafe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
