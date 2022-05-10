import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './NavBar.css'

export default function NativeSelectDemo() {
    return (
        <div>
            <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }} className='selectRoom'>
                <InputLabel id="demo-simple-select-filled-label">Floor</InputLabel>
                <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                >
                    <MenuItem value={1}>First floor</MenuItem>
                    <MenuItem value={2}>Second floor</MenuItem>
                    <MenuItem value={3}>Third floor</MenuItem>
                </Select>
            </FormControl>
            <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }} className='selectBuilding'>
                <InputLabel id="demo-simple-select-filled-label">Building</InputLabel>
                <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                >
                    <MenuItem value={1}>First building</MenuItem>
                    <MenuItem value={2}>Second building</MenuItem>
                    <MenuItem value={3}>Third building</MenuItem>
                </Select>
            </FormControl>
        </div>

    );
}