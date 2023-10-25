import { Avatar, Box, Typography } from "@mui/material";
import { Auth } from "aws-amplify";
import { useEffect, useState } from "react";
import { toTitleCase } from "../utils/toTitleCase";

interface UserAvatarProps {
    small?: boolean
}

const UserAvatar = (props: UserAvatarProps) => {
    const { small } = props;
    const [name, setName] = useState('');
    const [initial, setInitial] = useState('');

    useEffect(() => {
        const getUser = async () => {
            const user = await Auth.currentUserInfo();
            setName(user.username);
            setInitial(user.username[0].toUpperCase());
        }

        getUser();
    }, [])

    return (
        <Box display='flex' flexDirection='row' justifyContent='center' alignItems='center'>
            <Box><Avatar>{initial}</Avatar></Box>
            {!small && <Typography color='secondary' fontSize='1rem' marginLeft='2rem'>{toTitleCase(name)}</Typography>}
        </Box>
    )
}

export default UserAvatar;