import React, { ChangeEvent } from 'react';
import { InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface SearchBarProps {
    onSearchChange: (e:ChangeEvent<HTMLInputElement>) => void
}

const SearchBar = (props: SearchBarProps) => {
    const { onSearchChange } = props;

    return (
        <TextField
            InputProps={{
                endAdornment: <InputAdornment position="start"><SearchIcon color='primary' /></InputAdornment>,
                style: {fontSize: '2rem'}
            }}
            fullWidth={true}
            onChange={onSearchChange}
        />
    )
}

export default SearchBar;