import React from 'react'

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { Stack } from '@mui/material';

function UserInput() {
  return (
    <form action="http://localhost:5000/api" method="get">
        <Stack spacing={2}>
            <TextField 
              id="outlined-basic" 
              label="Enter title here" 
              variant="outlined" 
              type="text" 
              name="title"
            />

            <Button 
              type="submit"
              variant="contained" 
              sx={{ bgcolor: "#FF4500", ':hover': {bgcolor: '#CD3700'} }} 
              style={{ borderRadius: 20, textTransform: 'none' }}
              disableElevation
            >
            Check Safety
            </Button>
        </Stack>
    </form>
  )
}

export default UserInput