import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { DataStore } from 'aws-amplify';
import { CustomLabel } from '../../models';

interface Inputs {
    reservationLabel: string
    noReservationLabel: string
}

const CustomLabelSettings = () => {
    const { register, handleSubmit } = useForm();
    const organizationId = localStorage.getItem('organizationId');

    const handleUpdateLabels = async (data: Inputs) => {
        const { reservationLabel, noReservationLabel } = data;

        const labelsForOrg = await DataStore.query(CustomLabel, (c) => c.organizationCustomLabelsId.eq(organizationId));
        const labelForReservation = labelsForOrg.find((l) => l.name === 'reservationLabel');
        const labelForNoReservation = labelsForOrg.find((l) => l.name === 'noReservationLabel');

        if (labelForReservation) {
            await DataStore.save(CustomLabel.copyOf(labelForReservation, (updated) => {
                updated.value = reservationLabel;
            }));
        }

        if (labelForNoReservation) {
            await DataStore.save(CustomLabel.copyOf(labelForNoReservation, (updated) => {
                updated.value = noReservationLabel;
            }));
        }

        if (!labelForReservation) {
            await DataStore.save(new CustomLabel({ name: 'reservationLabel', value: reservationLabel, organizationCustomLabelsId: organizationId }))
        }

        if (!labelForNoReservation) {
            await DataStore.save(new CustomLabel({ name: 'noReservationLabel', value: noReservationLabel, organizationCustomLabelsId: organizationId }))
        }
    }

    return (
        <Paper>
            <Box bgcolor='rgba(255, 255, 255, 255)' borderRadius='1rem' padding='2rem'>
                <Typography variant="h2" marginBottom='2rem'>
                    Customize Labels
                </Typography>
                {/* @ts-ignore */}
                <form onSubmit={handleSubmit(handleUpdateLabels)}>
                    <Box display='flex' flexDirection='column'>
                        <TextField label="Reservation Label" variant="standard" {...register('reservationLabel', { minLength: 2 })} />
                        <TextField label="No Reservation Label" variant="standard" {...register('noReservationLabel', { minLength: 2 })} />
                        <Box marginTop='2rem'>
                            <Button variant='contained' type='submit'>Submit Label Updates</Button>
                        </Box>
                    </Box>
                </form>
            </Box>
        </Paper>
    )
}

export default CustomLabelSettings;