import React from 'react';
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Grid, Typography } from '@mui/material';

import UserInput from './userInput';


function CenterCard() {
    return (
        <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
        sx= {{ p:20 }}
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
                        </Stack>
                    </CardContent>
                </Card>
            </Grid>      
        </Grid>
    )
}

export default CenterCard;