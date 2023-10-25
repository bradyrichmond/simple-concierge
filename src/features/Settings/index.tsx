import { Box, Button, Paper } from "@mui/material";
import LocationSettings from "./LocationSettings";
import { useEffect, useState } from "react";
import { DataStore } from "aws-amplify";
import { Location } from "../../models";
import CustomLabelSettings from "./CustomLabelSettings";
import { useNavigate } from "react-router-dom";

const Settings = () => {
    const [storedStoreId, setStoredStoreId] = useState('');
    const [storeLocations, setStoreLocations] = useState<Location[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        const locationSub = DataStore.observeQuery(
            Location
        ).subscribe(snapshot => {
            const { items } = snapshot;
            setStoreLocations(items);
        });

        return () => {
            locationSub.unsubscribe();
        }
    }, [])

    const handleLocationChange = (locationId: string) => {
        localStorage.setItem('locationId', locationId);
        setStoredStoreId(locationId);
    }

    const handleAddLocation = async () => {
        const fetchedStoreLocations = await DataStore.query(Location);
        setStoreLocations(fetchedStoreLocations);
    }

    const handleDeleteLocation = (id: string) => {
        if (id === storedStoreId) {
            localStorage.setItem('locationId', '');
            setStoredStoreId('');
        }
    }

    const seeClientSide = () => {
        navigate('/concierge');
    }

    const seeEmployeeSide = () => {
        navigate('/concierge/employee')
    }

    return (
        <Box padding='2rem'>
            <Box marginTop='2rem'>
                <LocationSettings onLocationChange={handleLocationChange} locations={storeLocations} handleAddLocation={handleAddLocation} handleDeleteLocation={handleDeleteLocation} storedLocationId={storedStoreId} />
            </Box>
            <Box marginTop='2rem'>
                <CustomLabelSettings />
            </Box>
            <Box marginTop='2rem' display='flex' flexDirection='row' alignItems='space-between'>
                <Paper sx={{padding: '2rem', width: '100%'}}>
                    <Button variant='contained' sx={{marginRight: '2rem'}} onClick={seeClientSide}>See Client Side</Button>
                    <Button variant='contained' onClick={seeEmployeeSide}>See Employee Side</Button>
                </Paper>
            </Box>
        </Box>
    )
}

export default Settings;