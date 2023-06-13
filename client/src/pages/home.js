import React from 'react'

// components
import NavBar from '../components/navbar';
import CenterCard from '../components/centerCard';
import Footer from '../components/footer';
import { Box } from '@mui/material';

function Home() {
    return (
        <div>
            <Box height="100vh" display="flex" flexDirection="column">
                <NavBar />
                <CenterCard />
                <Footer /> 
            </Box>
        </div>
    );
}

export default Home;