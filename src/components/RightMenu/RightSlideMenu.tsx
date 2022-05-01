import React, {useState} from 'react';
import './RightSlideMenu.css'
import Search from "./Search";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface MenuProps {
    active: any;
    setActive: any;
}

const RightSlideMenu: React.FC<MenuProps> = ({active, setActive}) => {
    return (
        <div className={active ? 'menu active' : 'menu'} onClick={() => setActive(false)}>
            <div className="menu-content" onClick={e => e.stopPropagation()}>
                <div className='menu-btn' onClick={() => setActive(!active)}>
                    {!(active===false) ? <ArrowBackIosNewIcon className='arrowBackIcon'/> : <ArrowForwardIosIcon className='ArrowForwardIcon'/>}
                </div>
                <Search/>
            </div>
        </div>
    );
};

export default RightSlideMenu;
