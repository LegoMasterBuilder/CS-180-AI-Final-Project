import React from 'react';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import Home from './pages/home';
import About from './pages/about';


function App() {
  return (
    <>
      <Router>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
      </Router>
    </>
  );
}

export default App;
