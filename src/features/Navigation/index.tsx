import React, { useEffect, useState } from 'react';
import { Badge, Box, LinearProgress, Modal, Typography } from '@mui/material';
import UserAvatar from "../../components/UserAvatar";
import { useNavigate } from 'react-router-dom';
import { Auth, DataStore } from 'aws-amplify';
import { CheckIn } from '../../models';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import TuneIcon from '@mui/icons-material/Tune';
import ConfirmModal from '../../components/ConfirmModal';

const navItems = [
    {
        label: 'Concierge',
        navUrl: 'concierge/employee',
        icon: <RoomServiceIcon fontSize='large' />
    },
    {
        label: 'Settings',
        navUrl: 'settings',
        icon: <TuneIcon fontSize='large' />
    }
];

const Navigation = () => {
    const [activeTab, setActiveTab] = useState('');

    const setActiveNav = (label: string) => {
        setActiveTab(label);
    }

    return (
        <Box display='flex' flexDirection='column' bgcolor='primary.main'>
            <Box flex='1' display='flex' flexDirection='column' padding='2rem' height='100%'>
                {navItems.length > 0 && 
                    navItems.map((ni) => {
                        return ni.label === 'Concierge' ? <ConciergeNavItem key={ni.label} label={ni.label} navUrl={ni.navUrl} icon={ni.icon} onClick={() => setActiveNav(ni.label)} active={ni.label === activeTab} /> : <NavItem key={ni.label} label={ni.label} navUrl={ni.navUrl} icon={ni.icon} onClick={() => setActiveNav(ni.label)} active={ni.label === activeTab} />;
                    })
                }
            </Box>
            <Status expanded={false} />
        </Box>
    )
}

interface NavItemProps {
    active: boolean
    label: string
    navUrl: string
    onClick: () => void
    icon?: React.ReactElement
}

const NavItem = (props: NavItemProps) => {
    const { navUrl, onClick, icon } = props;
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(navUrl);
        onClick();
    }

    return (
        <Box flex='1' height='100%' display='flex' flexDirection='row' alignItems='center' color='white' onClick={handleClick} sx={{'&:hover': { cursor: 'pointer' }}}>
            {icon}
        </Box>
    )
}

const ConciergeNavItem = (props: NavItemProps) => {
    const { navUrl, onClick, icon } = props;
    const navigate = useNavigate();
    const [waitingCount, setWaitingCount] = useState(0);

    useEffect(() => {
        const waitingSub = DataStore.observeQuery(
            CheckIn,
                c => c.and((c) => [
                    c.complete.eq(false),
                    c.locationCheckInsId.eq(localStorage.getItem('locationId') ?? '')
                ])
            ).subscribe(snapshot => {
                const { items, isSynced } = snapshot;
                setWaitingCount(items.length);
        });

        return () => {
            waitingSub.unsubscribe();
        }
    }, [])

    const handleClick = () => {
        navigate(navUrl);
        onClick();
    }

    return (
        <Box flex='1' height='100%' display='flex' alignItems='center' flexDirection='row' color='white' onClick={handleClick} sx={{'&:hover': { cursor: 'pointer' }}}>
            <Badge badgeContent={waitingCount} color='error'>
                {icon}
            </Badge>
        </Box>
    )
}

interface StatusProps {
    expanded: boolean
}

const Status = (props: StatusProps) => {
    const { expanded } = props;
    const [time, setTime] = useState<number>(0);
    const locationId = localStorage.getItem('locationId');
    const [isLoggingOut, setIsLoggingOut] = useState(false);
    const [waitingForLogout, setWaitingForLogout] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const getTime = () => {
            const currentTime = Date.now();
            setTime(currentTime);
        }
        const ticker = setInterval(getTime, 1000);
        getTime();

        return () => {
            clearInterval(ticker);
        }
    }, [])

    const cancelLogOut = () => {
        setIsLoggingOut(false);
    }

    const startLogOut = () => {
        setIsLoggingOut(true);
    }

    const finishLogOut = () => {
        Auth.signOut();
        cancelLogOut();
        setWaitingForLogout(true);

        setTimeout(() => {
            setWaitingForLogout(false);
            navigate('/');
        }, 3000)
    }

    return (
        <Box display='flex' flexDirection='column' padding='2rem' fontSize='1rem'>
            <Modal
                open={isLoggingOut}
                onClose={cancelLogOut}
                style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}
            >
                <ConfirmModal validationText={`Are you sure you want to log out?`} cancelText='Cancel' confirmText='Log Out' confirm={finishLogOut} cancel={cancelLogOut}/>
            </Modal>
            <Modal
                open={waitingForLogout}
                onClose={() => {}}
            >
                <Box bgcolor='rgba(255, 255, 255, 255)' borderRadius='1rem' padding='2rem'>
                    <Typography>Logging out...</Typography>
                    <LinearProgress color='primary' />
                </Box>
            </Modal>
            <Box display='flex' alignItems='center' marginTop='2rem' onClick={startLogOut}>
                <UserAvatar small={true} />
            </Box>
        </Box>
    )
}

export default Navigation;