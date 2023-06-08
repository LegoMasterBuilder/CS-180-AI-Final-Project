import React from 'react';
import './App.css';

import NavBar from './components/navbar';
import CenterCard from './components/centerCard';
import Footer from './components/footer';
import { Box } from '@mui/material';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <Title />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <Box height="100vh" display="flex" flexDirection="column">
        <NavBar />
        <CenterCard />
        <Footer/>
      </Box>
    </div>
  );
}

export default App;
