import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import '../NavBar/NavBar.css'
import SelectBuilding from './SelectBuilding'
import NavBarIcon from "./NavBarIcon";
import NavBarSwitch from "./NavBarSwitch";
import NavBarInformation from "./NavBarInformation";
import {useState} from "react";



const NavBar = () =>  {
    const [iconActive, setIconActive] = useState(false)
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar className='navbar' position='absolute'>
                    <Toolbar className='toolbar' >
                        <NavBarIcon active={iconActive} setActive={setIconActive}/>
                        <SelectBuilding/>
                        <NavBarSwitch active={iconActive} setActive={setIconActive}/>
                        <NavBarInformation/>
                    </Toolbar>
                </AppBar>
            </Box>
        </div>
    );
}

export default NavBar