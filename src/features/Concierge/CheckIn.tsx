import { Box, Button, Typography } from '@mui/material';
import { DataStore } from 'aws-amplify';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CustomLabel } from '../../models';

const Checkin = () => {
    const navigate = useNavigate();
    const [reservationLabel, setReservationLabel] = useState('');
    const [noReservationLabel, setNoReservationLabel] = useState('');
    const organizationId = localStorage.getItem('organizationId');
    
    useEffect(() => {
        const getCustomLabels = async () => {
            const labelsForOrg = await DataStore.query(CustomLabel, (c) => c.organizationCustomLabelsId.eq(organizationId));
            const labelForReservation = labelsForOrg.find((l) => l.name === 'reservationLabel');
            const labelForNoReservation = labelsForOrg.find((l) => l.name === 'noReservationLabel');

            setReservationLabel(labelForReservation?.value ?? '');
            setNoReservationLabel(labelForNoReservation?.value ?? '');
        }

        getCustomLabels();
    }, [])

    const navigateAsReservation = () => {
        navigate('/concierge/create-checkin', { state: { hasReservation: true } });
    }

    const navigateWithoutReservation = () => {
        navigate('/concierge/create-checkin', { state: { hasReservation: false } });
    }

    return (
        <Box height='100%' width='100%' display='flex' justifyContent='center' alignItems='center' flexDirection='column' bgcolor='background.default'>
            <Typography variant='h1'>Welcome! </Typography>
            <Box maxWidth='50%'>
                <Typography variant='h1'>What brings you in today?</Typography>
                <Button variant='contained' sx={{marginBottom: '1rem', marginTop: '2rem'}} onClick={navigateAsReservation} fullWidth>
                    {reservationLabel ? reservationLabel : 'Reservation'}
                </Button>
                <Button variant='contained' onClick={navigateWithoutReservation} fullWidth>
                    {noReservationLabel ? noReservationLabel : 'No Reservation'}
                </Button>
            </Box>
        </Box>
    )
}

export default Checkin;