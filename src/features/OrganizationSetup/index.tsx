import { Box, Button, Paper, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import { Auth, DataStore } from 'aws-amplify';
import { Organization } from '../../models';
import { useNavigate } from 'react-router-dom';

const OrganizationSetup = () => {
    const { handleSubmit, register } = useForm();
    const navigate = useNavigate();

    const handleCreateOrganization = async (formData: any) => {
        const user = await Auth.currentUserInfo();
        await DataStore.save(new Organization({ name: formData.organizationName, users: [user.attributes.sub] }));
        navigate('/settings');
    }

    return (
        <Box height='100%' display='flex' justifyContent='center' alignItems='center' bgcolor='background.default'>
            <Paper style={{padding: '2rem', maxWidth: '30%'}}>
                <form onSubmit={handleSubmit(handleCreateOrganization)}>
                    <Box display='flex' flexDirection='column'>
                        <TextField label='Organization Name*' variant='standard' inputProps={{ 'data-testid': 'addOrganizationName' }} {...register('organizationName', { required: true, minLength: 2 })} />
                        <Button type='submit' variant='contained' style={{marginTop: '2rem'}}>Create New Organization</Button>
                    </Box>
                </form>
            </Paper>
        </Box>
    )
}

export default OrganizationSetup;