import { Box } from '@mui/material';
import React from 'react'

// components
import NavBar from '../components/navbar';
import CenterCard from '../components/centerCard';
import Footer from '../components/footer';

function About() {
    return ( 
    <div>
        <Box height="100vh" display="flex" flexDirection="column">
          <NavBar />
          {/* <CenterCard /> */}
          <p>Hello</p>
          <Footer/>
        </Box>
    </div>
    );
}

export default About;