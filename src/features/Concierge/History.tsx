import { ChangeEvent, useEffect, useState } from 'react';
import { Box, Checkbox, FormControlLabel } from '@mui/material';
import { DataStore, SortDirection } from 'aws-amplify';
import { CheckIn, Location } from '../../models';
import { DataGrid, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { format } from 'date-fns';
import SearchBar from '../../components/SearchBar';

const ConciergeHistory = () => {
    const [historicalCheckins, setHistoricalCheckins] = useState<CheckIn[]>([]);
    const [locationFilters, setLocationFilters] = useState<string[]>([]);
    const [locationNames, setLocationNames] = useState<{[key: string]: string}>({});

    useEffect(() => {
        const buildLocationNames = async () => {
            const tempLocationNames: {[key: string]: string} = {};
            const locations = await DataStore.query(Location);
            const locationCount = locations.length;
            
            for (let i = 0; i < locationCount; i++) {
                tempLocationNames[locations[i].id] = locations[i].locationName;
            }

            setLocationNames(tempLocationNames);

            const storedLocationId = localStorage.getItem('locationId');
            if (storedLocationId) {
                setLocationFilters([storedLocationId]);
            }
        }

        buildLocationNames();
    }, [])

    useEffect(() => {
        const fetchedData = DataStore.observeQuery(
            CheckIn,
            c => c.complete.eq(true), {
              sort: s => s.createdTime(SortDirection.DESCENDING)
            }
          ).subscribe(snapshot => {
            const { items } = snapshot;
            setHistoricalCheckins(items);
        });

        return () => {
            fetchedData.unsubscribe();
        }
    }, [locationNames, locationFilters])

    useEffect(() => {
        if (locationFilters.length > 0) {
            setHistoricalCheckins((cur) => cur.filter((c) => locationFilters.includes(c.locationCheckInsId ?? '')));
        }
    }, [locationFilters])

    const handleFilterChange = (locationId: string) => {
        if (locationFilters.includes(locationId)) {
            setLocationFilters((cur) => cur.filter((c) => c !== locationId));
            return;
        }

        setLocationFilters((cur) => [...cur, locationId]);
    }

    const handleSearchChange = (e:ChangeEvent<HTMLInputElement>) => {

    }

    const columns: GridColDef[] = [
        {field: 'firstName', headerName: 'First Name', width: 400},
        {field: 'lastName', headerName: 'Last Name', width: 400},
        {field: 'createdTime', headerName: 'Created Time', width: 600, renderCell: (params: GridRenderCellParams<String>) => {
                return (
                    <>
                        {format(params.value, "MMM do yyyy hh:mm:ss aa")}
                    </>
                )
            }
        },
        {field: 'locationId', headerName: 'Location', width: 600, renderCell: (params: GridRenderCellParams<String>) => {
                return (
                    <>
                        {locationNames[params.value]}
                    </>
                )
            }
        },
    ];

    const rows = historicalCheckins;

    return (
        <Box padding='2rem' display='flex' flexDirection='column' height='100%'>
            <Box display='flex' flexDirection='column'>
                <SearchBar onSearchChange={handleSearchChange}/>
                <Box display='flex' flexDirection='row'>
                    {Object.keys(locationNames).map((l) => <FormControlLabel control={<Checkbox sx={{ '& .MuiSvgIcon-root': { fontSize: 50}}} onChange={() => handleFilterChange(l)} checked={locationFilters.filter((lf) => lf === l).length > 0} />} label={`Show ${locationNames[l]}`} />)}
                </Box>
            </Box>
            <Box flex='1'>
                <DataGrid rows={rows} columns={columns} style={{fontSize: '2rem'}}/>
            </Box>
        </Box>
    )
}

export default ConciergeHistory;