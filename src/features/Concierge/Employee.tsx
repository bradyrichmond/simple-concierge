import { useEffect, useState } from 'react';
import ConfirmModal from '../../components/ConfirmModal';
import { DataStore, SortDirection } from 'aws-amplify';
import TodayIcon from '@mui/icons-material/Today';
import FiberNewIcon from '@mui/icons-material/FiberNew';
import InventoryIcon from '@mui/icons-material/Inventory';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { Box, Modal, Typography, keyframes } from '@mui/material';
import { CheckIn } from '../../models';
import { useNavigate } from 'react-router-dom';

const pulse = keyframes`
    from {
        opacity: 1 
    }
    to {
        opacity: 0
    }
`

const EmployeeDisplay = () => {
    const [customers, setCustomers] = useState<CheckIn[]>([])
    const [deletedCustomers, setDeletedCustomers] = useState<CheckIn[]>([]);
    const [validatingDelete, setValidatingDelete] = useState(false);
    const [validatingRevive, setValidatingRevive] = useState(false);
    const [oversizedDescription, setOversizedDescription] = useState('');
    const [showingOversizedDescription, setShowingOversizedDescription] = useState(false);
    const [activeId, setActiveId] = useState('');
    const navigate = useNavigate();
    const locationId = localStorage.getItem('locationId');

    useEffect(() => {
        const waitingSub = DataStore.observeQuery(
            CheckIn,
            (c) => c.and((c) => [
                c.complete.eq(false),
                c.locationCheckInsId.eq(locationId ?? '')
            ]), {
              sort: s => s.createdAt(SortDirection.ASCENDING)
            }
          ).subscribe(snapshot => {
            const { items, isSynced } = snapshot;
            setCustomers(items);
        });

        const deletedSub = DataStore.observeQuery(
            CheckIn,
            c => c.and((c) => [
                c.complete.eq(true),
                c.locationCheckInsId.eq(locationId ?? '')
            ]), {
              sort: s => s.createdAt(SortDirection.DESCENDING),
            }
          ).subscribe(snapshot => {
            const { items, isSynced } = snapshot;

            const subset = items.slice(0, 10);
            setDeletedCustomers(subset);
        });

        return () => {
            waitingSub.unsubscribe();
            deletedSub.unsubscribe();
        }
    }, [])

    const deleteCustomer = async () => {
        const customer = await DataStore.query(CheckIn, activeId);

        if (customer) {
            await DataStore.save(CheckIn.copyOf(customer, updated => {
                updated.complete = true;
            }));
        }

        closeModals();
    }

    const reviveCustomer = async () => {
        const customer = await DataStore.query(CheckIn, activeId);

        if (customer) {
            await DataStore.save(CheckIn.copyOf(customer, updated => {
                updated.complete = false;
            }))
        }

        closeModals();
    }

    const closeModals = () => {
        setValidatingDelete(false);
        setValidatingRevive(false);
        hideOversizedDescription();
    }

    const showOversizedDescription = (oversizedDescription: string) => {
        setOversizedDescription(oversizedDescription);
        setShowingOversizedDescription(true);
    }

    const hideOversizedDescription = () => {
        setShowingOversizedDescription(false);
        setOversizedDescription('');
    }

    const navigateToHistory = () => {
        navigate('/concierge/history')
    }

    return (
        <Box display='flex' flexDirection='row' bgcolor='background.default' padding='2rem' height='100%' width='100%'>
            <>
                <Modal
                    open={validatingDelete}
                    onClose={closeModals}
                    style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                >
                    <ConfirmModal validationText='Are you sure you want to mark customer as completed?' confirmText='Yes' cancelText='No' confirm={deleteCustomer} cancel={closeModals} />
                </Modal>
                <Modal
                    open={validatingRevive}
                    onClose={closeModals}
                    style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                >
                    <ConfirmModal validationText='Are you sure you want to mark customer as active?' confirmText='Yes' cancelText='No' confirm={reviveCustomer} cancel={closeModals} />
                </Modal>
                <Modal
                    open={showingOversizedDescription}
                    onClose={closeModals}
                    style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                >
                    <ConfirmModal validationText={`Oversized items: ${oversizedDescription}`} confirmText='OK' confirm={hideOversizedDescription} />
                </Modal>
                <Box display='flex' flexDirection='column' flex='1' marginRight='2rem'>
                    <Typography variant='h2' sx={{ marginBottom: '2rem' }}>Customers waiting:</Typography>
                    {customers && customers.length < 1 &&
                        <Typography variant='h2'>No customers waiting.</Typography>
                    }
                    {customers.length > 0 &&
                        <Box>
                            {customers.map((customer: CheckIn) => {
                                return (
                                    <WaitingCustomer customer={customer} key={customer.id} infoAction={showOversizedDescription} setActiveId={() => { setActiveId(customer.id) }} setValidatingDelete={() => { setValidatingDelete(true) }} />
                                )
                            })}
                        </Box>
                    }
                </Box>
                <Box display='flex' flexDirection='column' flex='1' paddingRight='2rem' height='100%'>
                    <Box>
                        <Typography variant='h2'>Recently completed:</Typography>
                    </Box>
                    <Box marginTop='2rem' display='flex' flexDirection='column' flex='1'>
                        <Box flex='1'>
                            {deletedCustomers.map((deletedCustomer: CheckIn) => 
                                {
                                    return (
                                        <Box key={deletedCustomer.id} width='100%' display='flex' flexDirection='row' justifyContent='center' alignItems='center' border='.25rem solid black' borderRadius='.25rem' bgcolor='GrayText' padding='2rem' marginBottom='2rem'>
                                            <Typography variant='h3' onClick={() => { setValidatingRevive(true); setActiveId(deletedCustomer.id) }} color='whitesmoke'>{deletedCustomer.firstName} {deletedCustomer.lastName}</Typography>
                                        </Box>
                                    )
                                })
                            }
                        </Box>
                        <Box display='flex' justifyContent='center' alignItems='center' padding='2rem' onClick={navigateToHistory}>
                            <Typography variant='h2'>See more</Typography>
                        </Box>
                    </Box>
                </Box>
            </>
        </Box>
    )
}

interface WaitingCustomerProps {
    customer: CheckIn
    setValidatingDelete: (validatingDelete: boolean) => void
    setActiveId: (id: string) => void
    infoAction: (description: string) => void
}

const WaitingCustomer = (props: WaitingCustomerProps) => {
    const { customer, setValidatingDelete, setActiveId, infoAction } = props;
    const [dotColor, setDotColor] = useState('#2E7D32');
    const [dotFlashing, setDotFlashing] = useState(false);
    const [validatingTimer, setValidatingTimer] = useState(false);
    const [dotUpdater, setDotUpdater] = useState<NodeJS.Timer>();

    useEffect(() => {
        runDotUpdater();
        checkDotData();
    }, [])

    const clearTimer = async () => {
        clearInterval(dotUpdater);

        const currentCustomer = await DataStore.query(CheckIn, customer.id);
        if (currentCustomer) {
            await DataStore.save(CheckIn.copyOf(currentCustomer, updated => {
                updated.timerCleared = true;
            }))
        }
    }

    const checkDotData = () => {
        let waitingTime = (Date.now() - Date.parse(customer?.createdAt ?? '0'));

        // may want to add this to admin settings
        if (waitingTime > 420000 && waitingTime < 639000) {
            setDotColor('#FF9800');
        } else if (waitingTime > 639000) {
            setDotColor('#FF0000');
        }
        
        if (waitingTime > 810000) {
            setDotFlashing(true);
        }
    }

    const runDotUpdater = () => {
        let dotUpdaterFunction = setInterval(() => {
            checkDotData();
        }, 10000);

        setDotUpdater(dotUpdaterFunction);
    }

    const clearDotUpdater = () => {
        setDotFlashing(false);
        clearTimer();
        clearValidatingTimer();
    }

    const confirmModalTimer = () => {
        setValidatingTimer(true);
    }

    const clearValidatingTimer = () => {
        setValidatingTimer(false);
    }

    const handleDelete = () => {
        setValidatingDelete(true); 
        setActiveId(customer.id);
        clearTimer();
    }

    return (
        <Box width='100%' display='flex' flexDirection='row' border='.25rem solid black' borderRadius='.25rem' sx={{background: 'white'}} padding='2rem' marginBottom='2rem'>
            <Modal
                open={validatingTimer}
                onClose={clearValidatingTimer}
                style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
            >
                <ConfirmModal validationText='Are you sure you want to clear the timer?' confirmText='Yes' cancelText='No' confirm={clearDotUpdater} cancel={clearValidatingTimer} />
            </Modal>
            <Box display='flex' justifyContent='center' alignItems='center' width='2rem'>
                {!customer.timerCleared && <Box sx={{ width: '2rem', height: '2rem', borderRadius: '2rem', background: dotColor, animation: dotFlashing ? `${pulse} 1s infinite ease` : 'none' }} onClick={confirmModalTimer}/>}
            </Box>
            <Box display='flex' flex='1' flexDirection='column'>
                <Box display='flex' justifyContent='center' alignItems='center'>
                    <Typography variant='h3'>{customer.firstName} {customer.lastName}</Typography>
                </Box>
                <Box display='flex' justifyContent='center' alignItems='center' flexDirection='row' fontSize='3rem'>
                    {customer.phone && 
                        <Typography variant='h4'>{customer.phone}</Typography>
                    }
                    {customer.hasReservation && <TodayIcon fontSize='inherit' />}
                </Box>
            </Box>
            <Box display='flex' justifyContent='center' alignItems='center' onClick={handleDelete} fontSize='3rem'>
                <ExitToAppIcon fontSize='inherit' />
            </Box>
        </Box>
    )
}

export default EmployeeDisplay;