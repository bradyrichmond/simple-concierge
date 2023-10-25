import { useEffect } from 'react';
import { Box, LinearProgress, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

const DropOffComplete = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/concierge')
        }, 7500)
    }, [])

    return (
        <Box height='100%' width='100%' display='flex' justifyContent='center' alignItems='center' bgcolor='background.default'>
            <Box>
                <Typography variant='h3'>
                    Thanks for checking in.
                </Typography>
                <Typography variant='h3'>
                    Please take a seat.
                </Typography>
                <LinearProgress color='primary' />
            </Box>
        </Box>
    )
}

export default DropOffComplete;