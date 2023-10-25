import { useState } from 'react';
import { Box, Button, Checkbox, FormControlLabel, Modal, TextField, Typography } from '@mui/material';
import ConfirmModal from '../../components/ConfirmModal';
import { useForm } from 'react-hook-form';
import { CheckIn } from '../../models';
import { DataStore } from 'aws-amplify';
import { useLocation, useNavigate } from 'react-router-dom';

const CreateDropOff = () => {
    const [error, setError] = useState('');
    const [showError, setShowError] = useState(false);
    const { handleSubmit, register, reset } = useForm();
    const navigate = useNavigate();
    const { state } = useLocation();
    const { hasReservation } = state;

    const validateBeforeSubmitCustomer = async (formData: any) => {
        const { firstName, lastName, phone } = formData;

        if (firstName.length > 0 && lastName.length > 0 && phone.length > 0) {
            submitCustomer(formData);
            return;
        }

        if(firstName.length < 1 && lastName.length < 1) {
            setError('First name and last name are required.');
        }
        
        if (firstName.length < 1) {
            setError('First name is required.');
        }
        
        if (lastName.length < 1) {
            setError('Last name is required.');
        }

        if (phone.length < 1) {
            setError('Phone number is required.');
        }

        setShowError(true);
    }

    const formatPhone = (phone: string):(string | void) => {
        var cleaned = ('' + phone).replace(/\D/g, '');
        var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
        if (match) {
            return '(' + match[1] + ') ' + match[2] + '-' + match[3];
        }
    }

    const submitCustomer = async (formData: any) => {
        const { firstName, lastName, phone } = formData;
        const locationId = localStorage.getItem('locationId');
        const formattedPhone = formatPhone(phone);

        if (!formattedPhone) {
            setError('Phone number is not  valid.');
            setShowError(true);
            return;
        }
        
        if (locationId) {
            try {
                await DataStore.save(new CheckIn({ firstName, lastName, phone: formattedPhone, complete: false, createdTime: Date.now(), hasReservation, locationCheckInsId: locationId }));
                reset();
                navigate('/concierge/complete');
            } catch (e) {
                console.error(JSON.stringify(e));
            }
        }
    }

    const closeModals = () => {
        setShowError(false);
        setError('');
    }

    return (
        <Box height='100%' width='100%' display='flex' flexDirection='column' justifyContent='center' alignItems='center' bgcolor='background.default'>
            <Modal
                open={showError}
                onClose={closeModals}
                style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
            >
                <ConfirmModal validationText={error} confirmText='OK' confirm={closeModals} />
            </Modal>
            <Typography variant='h2'>We're so glad you're here! Please sign in!</Typography>
            <form onSubmit={handleSubmit(validateBeforeSubmitCustomer)}>
                <Box display='flex' flexDirection='column' marginTop='2rem'>
                    <Box display='flex' flexDirection='row'>
                        <TextField style={{margin: '1rem'}} sx={{'.MuiInputBase-input': { fontSize: '2rem' } }} label='First Name' {...register('firstName', { required: true, minLength: 2 })} autoComplete="off" autoCorrect="off" spellCheck="false" />
                        <TextField style={{margin: '1rem'}} sx={{'.MuiInputBase-input': { fontSize: '2rem' } }} label='Last Name' {...register('lastName', { required: true, minLength: 2 })} autoComplete="off" autoCorrect="off" spellCheck="false" />
                    </Box>
                    <TextField style={{margin: '1rem'}}  label='Phone' {...register('phone', { required: true, minLength: 10 })} autoComplete="off" autoCorrect="off" spellCheck="false" />
                    <Button variant='contained' type='submit' style={{marginTop: '2rem'}}>Next</Button>
                </Box>
            </form>
        </Box>
    )
}

export default CreateDropOff;