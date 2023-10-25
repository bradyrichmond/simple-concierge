import { useEffect } from 'react';
import { Box } from '@mui/material';
import { Outlet, useNavigate } from 'react-router-dom';
import Navigation from '../Navigation';
import { Auth, DataStore } from 'aws-amplify';
import { Organization } from '../../models';
import type { WithAuthenticatorProps } from '@aws-amplify/ui-react';
import { withAuthenticator } from '@aws-amplify/ui-react';

const Home = ({ signOut, user }: WithAuthenticatorProps) => {
    const navigate = useNavigate();

    useEffect(() => {
        const getUserInfo = async () => {
            const currentUserInfo = await Auth.currentUserInfo();
            const organization = await DataStore.query(Organization, (o) => o.users.contains(currentUserInfo.attributes.sub));

            if (organization.length > 0) {
                const orgId = organization[0].id;

                if (!orgId) {
                    navigate('/organization-setup')
                    return;
                }

                const fetchedOrganization = await DataStore.query(Organization, orgId);

                if (fetchedOrganization) {
                    localStorage.setItem('organizationId', fetchedOrganization.id);
                }
                return;
            }

            navigate('/organization-setup')
            return;
        }

        getUserInfo();
    }, [])

    return (
        <>
            <Box display='flex' flexDirection='row' height='100%' width='100%' sx={{bgcolor: 'background.default'}}>
                <Navigation />
                <Box flex='1' sx={{ overflowY: 'auto' }}>
                    <Outlet />
                </Box>
            </Box>
        </>
    );
}

export default withAuthenticator(Home);