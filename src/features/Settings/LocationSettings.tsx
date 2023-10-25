import { useEffect, useState } from "react";
import { Box, Button, Modal, Paper, Typography } from "@mui/material";
import { Location } from "../../models";
import { DataStore } from "aws-amplify";
import OtherHousesIcon from '@mui/icons-material/OtherHouses';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ConfirmModal from "../../components/ConfirmModal";
import AddLocation from "./AddLocation";

interface LocationSettingsProps {
    onLocationChange: (locationId: string) => void
    handleAddLocation: () => void
    handleDeleteLocation: (id: string) => void
    locations: Location[]
    storedLocationId: string
}

const LocationSettings = (props: LocationSettingsProps) => {
    const { locations, onLocationChange, handleAddLocation, handleDeleteLocation, storedLocationId } = props;
    const [addingLocation, setAddingLocation] = useState(false);
    const [updatingTaxRate, setUpdatingTaxRate] = useState(false);
    const [activeLocationData, setActiveLocationData] = useState<Location>();
    const [isDeletingLocation, setIsDeletingLocation] = useState(false);
    const [loading, setLoading] = useState(true);
    const [activeLocationId, setActiveLocationId] = useState('');

    useEffect(() => {
        const getLocationData = async () => {
            const fetchedLocationData = await DataStore.query(Location, storedLocationId);
            setActiveLocationData(fetchedLocationData);
            setLoading(false);
        }

        getLocationData();
    }, [storedLocationId])

    const handleLocationChange = async (id: string) => {
        onLocationChange(id);
    }

    const startAddingLocation = () => {
        setAddingLocation(true);
    }

    const stopAddingLocation = () => {
        handleAddLocation();
        setAddingLocation(false);
    }

    const startUpdatingTaxRate = () => {
        setUpdatingTaxRate(true);
    }

    const stopUpdatingTaxRate = () => {
        setUpdatingTaxRate(false);
    }

    const startDeletingLocation = (id: string) => {
        setActiveLocationId(id);
        setIsDeletingLocation(true);
    }

    const stopDeletingLocation = () => {
        setActiveLocationId('');
        setIsDeletingLocation(false);
    }

    const deleteLocation = async () => {
        DataStore.delete(Location, activeLocationId);
        handleDeleteLocation(activeLocationId);
        stopDeletingLocation();
    }

    return (
        <Box>
            <Modal
                open={addingLocation}
                onClose={stopAddingLocation}
            >
                <AddLocation close={stopAddingLocation}/>
            </Modal>
            <Modal
                open={isDeletingLocation}
                onClose={stopDeletingLocation}
                style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
            >
                <ConfirmModal validationText='Are you sure you want to delete this location?' confirm={deleteLocation} confirmText='Delete' cancel={stopDeletingLocation} cancelText='cancel' />
            </Modal>
            <Paper style={{display: 'flex', flexDirection: 'column', padding: '2rem'}}>
                <Typography variant='h2'>Location Settings</Typography>
                {locations.length > 0 &&
                    <Box marginTop='1rem' marginBottom='1rem'>
                        {locations && 
                            locations.map((l) => {
                                return (
                                    <Box display='flex' flexDirection='row' border={storedLocationId === l.id ? '1px solid #e0e2e6' : 'none'}>
                                        <Box flex='1' padding='2rem'>
                                            <Typography variant='h2' key={l.id}>{l.locationName}</Typography>
                                        </Box>
                                        <Box display='flex' flexDirection='row' padding='2rem' fontSize='3rem'>
                                            {storedLocationId !== l.id && <Box onClick={ () => handleLocationChange(l.id) } padding='1rem'><OtherHousesIcon fontSize='inherit' /></Box>}
                                            <Box onClick={() => startDeletingLocation(l.id)} padding='1rem'><DeleteForeverIcon fontSize='inherit' /></Box>
                                        </Box>
                                    </Box>
                                )
                            })
                        }
                    </Box>
                }
                <Box marginTop='2rem'>
                    <Button variant='contained' fullWidth onClick={startAddingLocation}>Add location</Button>
                </Box>
            </Paper>
        </Box>
    )
}

export default LocationSettings;