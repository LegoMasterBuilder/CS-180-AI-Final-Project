import React, { Component } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid, Typography } from '@mui/material';

export default class centerCard extends Component {
  render() {
    return (
        <Grid
        container
        // spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        // style={{ minHeight: '100vh' }}
        sx= {{ pt:10 }}
        >
            <Grid item xs={3}>
                <Card sx={{ maxWidth: 500, mx: 2 }} style={{ border: "none", boxShadow: "none" }}>
                    <CardContent>
                        <Stack spacing={2}>
                            <Typography variant="h5" sx={{ display: 'inline' }} >
                                Unsure if #SafeForWork?
                            </Typography>

                            <Typography sx={{ fontSize: 14 }} color="text.secondary">
                                Enter the title below to check its safety.
                            </Typography>

                            <TextField id="outlined-basic" label="Enter title here" variant="outlined" />

                            <Button variant="contained" sx={{ bgcolor: "#FF4500" }} style={{borderRadius: 20}}disableElevation>
                                Check Safety
                            </Button>
                        </Stack>
                    </CardContent>
                </Card>
            </Grid>      
        </Grid>
    )
  }
}
