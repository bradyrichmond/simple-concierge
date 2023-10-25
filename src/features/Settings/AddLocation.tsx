import { Box, Button, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { DataStore } from 'aws-amplify';
import { Location } from '../../models';

interface AddLocationProps {
    close: () => void
}

const AddLocation = ({ close }: AddLocationProps) => {
    const { register, handleSubmit } = useForm();
    const organizationId = localStorage.getItem('organizationId');

    const handleAddLocation = async (data: any) => {
        const { locationName } = data;

        await DataStore.save(new Location({ locationName, organizationLocationsId: organizationId }));
        
        close();
    }

    return (
        <Box display='flex' justifyContent='center' alignItems='center' height='100%' width='100%'>
            <Box bgcolor='rgba(255, 255, 255, 255)' borderRadius='1rem' padding='2rem'>
                <Typography id="modal-modal-title" variant="h6" component="h2" marginBottom='2rem'>
                    Add Location
                </Typography>
                <form onSubmit={handleSubmit(handleAddLocation)}>
                    <Box display='flex' flexDirection='column'>
                        <TextField label="Location Name" variant="standard" {...register('locationName', { minLength: 2 })} />
                        <Box marginTop='2rem'>
                            <Button variant='contained' type='submit'>Add Location</Button>
                        </Box>
                    </Box>
                </form>
            </Box>
        </Box>
    )
}

export default AddLocation;