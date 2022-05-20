import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import './NavBar.css'
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import {useState} from "react";
import {observer} from "mobx-react-lite";
import FloorsStore from '../../stores/FloorsStore';
import BuildingsStore from "../../stores/BuildingsStore";



const NativeSelectDemo = observer(() => {
    const onKeyDown1 = (e:any) =>{
        if (e.keyCode === 13) {
            FloorsStore.addFloor(e.target.value, 1)
            e.target.value = null
        }
    }

    const onKeyDown2 = (e:any) =>{
        if (e.keyCode === 13) {
            BuildingsStore.addBuilding(e.target.value)
            e.target.value = null
        }
    }

    const [inputActive, setInputActive] = useState<boolean>(true);
    const handleInputActive = (e: any) => {
        setInputActive(!inputActive);
    }
    return (
        <div>
            <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }} className='selectRoom' onInput={e=>e.preventDefault()}>
                <InputLabel id="demo-simple-select-filled-label">Floor</InputLabel>
                <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                >
                    {FloorsStore.listOfFloors.map((element:any) => {
                        return <MenuItem value={element.numberFloor}>{element.numberFloor} floor</MenuItem>
                    })}
                    <Stack direction="row">
                        <IconButton>
                            <AddIcon className='addIcon' fontSize='small' onClick={handleInputActive}/>
                        </IconButton>
                        {(!inputActive) && <input type='text' id='floorValue' onKeyDown={onKeyDown1}/>}
                    </Stack>
                </Select>
            </FormControl>
            <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }} className='selectBuilding'>
                <InputLabel id="demo-simple-select-filled-label">Building</InputLabel>
                <Select
                    labelId="demo-simple-select-filled-label"
                    id="demo-simple-select-filled"
                >
                    {BuildingsStore.listOfBuildings.map((element:any) => {
                        return <MenuItem value={element.building_id}>{element.address}</MenuItem>
                    })}
                    <Stack direction="row">
                        <IconButton>
                            <AddIcon className='addIcon' fontSize='small' onClick={handleInputActive}/>
                        </IconButton>
                        {(!inputActive) && <input type='text' id='floorValue' onKeyDown={onKeyDown2}/>}
                    </Stack>
                </Select>
            </FormControl>

        </div>

    )
})

export  default NativeSelectDemo;