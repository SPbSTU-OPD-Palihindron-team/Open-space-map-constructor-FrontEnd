import React, {useState} from 'react';
import './RightSlideMenu.css'
import Search from "./Search";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface MenuProps {
    active: any;
    setActive: any;
}

const RightSlideMenu: React.FC = () => {
    const [menuActive, setMenuActive] = useState<boolean>(false);
    const handleMenuActive = () => {
        setMenuActive(!menuActive);
        console.log(menuActive);
    }
    return (
        <div className={menuActive ? 'menu active' : 'menu'} onClick={handleMenuActive}>
            <button className='menu-btn' onClick={() => setMenuActive(!menuActive)}>
                {(menuActive) ?  <ArrowForwardIosIcon className='ArrowForwardIcon'/> : <ArrowBackIosNewIcon className='ArrowBackIcon'/>}
            </button>
            {menuActive && <div className="menu-content" onClick={e => e.stopPropagation()}>
                <Search />
            </div>}
        </div>
    );
};

export default RightSlideMenu;
