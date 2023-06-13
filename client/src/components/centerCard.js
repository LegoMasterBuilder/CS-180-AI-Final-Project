import React, { useState, useEffect } from 'react';
// import Button from '@mui/material/Button';
// import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid, Typography } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// import APIService from './APIService';

import UserInput from './userInput';


function CenterCard(props) {
    return (
        <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        sx= {{ pt:10 }}
        >
            <Grid item xs={3}>
                <Card sx={{ maxWidth: 500, mx: 2 }} style={{ border: "none", boxShadow: "none" }}>
                    <CardContent>
                        <Stack spacing={2}>
                            <Typography variant="h5" sx={{ display: 'inline', mb: 0 }}>
                                Unsure if #SafeForWork?
                            </Typography>

                            <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                Enter the title below to check its safety.
                            </Typography>

                            <UserInput />

                            {/* <TextField 
                                id="outlined-basic" 
                                label="Enter title here" 
                                variant="outlined" 
                                // onChange={(e) => {
                                //     setTitle(e.target.value);
                                // }}
                                // value={title}
                            />

                            <Button 
                                variant="contained" 
                                sx={{ bgcolor: "#FF4500", ':hover': {bgcolor: '#CD3700'} }} 
                                style={{ borderRadius: 20, textTransform: 'none' }}
                                disableElevation
                            >
                                Check Safety
                            </Button> */}
                        </Stack>
                    </CardContent>
                </Card>
            </Grid>      
        </Grid>
    )
}

export default CenterCard;