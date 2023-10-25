import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { DataStore, Storage } from 'aws-amplify';
import { Organization } from '../../models';

const Concierge = () => {
    const [logoUrl, setLogoUrl] = useState('');

    useEffect(() => {
        const getLogoUrl = async () => {
            const organizationId = localStorage.getItem('organizationId');

            if (organizationId) {
                const organization = await DataStore.query(Organization, organizationId);

                if (organization) {
                    const logoId = organization.logoId;

                    if (logoId) {
                        const fetchedLogoUrl = await Storage.get(logoId);
                        setLogoUrl(fetchedLogoUrl);
                    }
                }
            }
        }

        getLogoUrl();
    }, [])

    return (
        <Box height='100%' width='100%' display='flex' justifyContent='center' alignItems='center' bgcolor='background.default'>
            {logoUrl && <Box height='20%' width='20%' position='fixed' left='0' top='0' sx={{background: `url(${logoUrl}) no-repeat`, backgroundSize: 'contain'}} />}
            <Outlet />
        </Box>
    )
}

export default Concierge;