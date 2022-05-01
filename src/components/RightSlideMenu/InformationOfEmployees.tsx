import React from 'react';
import Employees from "../../stores/EmployeesStore";
import { Avatar } from '@mui/material';
import {lightBlue} from '@mui/material/colors';
import './RightSlideMenu.css'
import Stack from '@mui/material/Stack';
import RoomIcon from '@mui/icons-material/Room';
import HouseSidingIcon from '@mui/icons-material/HouseSiding';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import EmailIcon from '@mui/icons-material/Email';

const InformationOfEmployees: React.FC = ()  => {
    const str:string = Employees.inform.title;
    const capital = (str:string) => str.split('').filter(a => a.match(/[A-Z]/)).join('');
    return (
        <div>
            <Stack direction="row" spacing={1} style={{marginTop: "30px"}}>
                <Avatar className='avatar' sx={{bgcolor: lightBlue[800], width: 100, height: 100 }}> {capital(Employees.inform.title)} </Avatar>
                <div className='nameEmployee'>
                    <p>{Employees.inform.title}</p>
                </div>
            </Stack>
            <div className='informationText'>
                <Stack direction="row" spacing={2}>
                    <RoomIcon className='Icon'/>
                    <p>Room:</p>
                    <p className='PersonalInformation'>{Employees.inform.room}</p>
                </Stack>
                <Stack direction="row" spacing={2}>
                    <HouseSidingIcon className='Icon'/>
                    <p>Building:</p>
                    <p className='PersonalInformation'>{Employees.inform.building}</p>
                </Stack>
                <Stack direction="row" spacing={2}>
                    <ContactPhoneIcon className='Icon'/>
                    <p>Number:</p>
                    <p className='PersonalInformation'>{Employees.inform.number}</p>
                </Stack>
                <Stack direction="row" spacing={2}>
                    <EmailIcon className='icon'/>
                    <p>Email:</p>
                </Stack>
            </div>
        </div>
    );
};

export default InformationOfEmployees;