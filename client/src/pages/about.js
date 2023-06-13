// import { Box } from '@mui/material';
import React from 'react'

// components
import NavBar from '../components/navbar';
import Footer from '../components/footer';

import Jian from '../components/Jian';
import Hans from '../components/Hans';
import Lara from '../components/Lara';
import Ceej from '../components/Ceej';

function About() {
    return ( 
      <div>
        <NavBar />

        <Jian />
        <Hans />
        <Lara />
        <Ceej />

        <Footer />
      </div>
    );
}

export default About;