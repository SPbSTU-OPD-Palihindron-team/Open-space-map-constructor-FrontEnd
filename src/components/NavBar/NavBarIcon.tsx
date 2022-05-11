import React from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import SaveIcon from '@mui/icons-material/Save';
import CanvasStore from "../../stores/CanvasStore";

interface IconProps {
    active: any;
    setActive: any;
}

const NavBarIcon: React.FC<IconProps> = ({active, setActive}) =>{
    return (
        <Stack direction="row" spacing={1}>
            <IconButton
                aria-label="icon"
                onClick={() => setActive(false)}
                disabled={active}
                color='inherit'
            >
                <DeleteIcon />
            </IconButton>
            <IconButton
                aria-label="icon"
                onClick={() => setActive(false)}
                disabled={active}
                color='inherit'
            >
                <SaveIcon/>
            </IconButton>
            <IconButton
                aria-label="icon"
                onClick={() => setActive(false)}
                disabled={active}
                color='inherit'
            >
                <UndoIcon onClick={() => CanvasStore.undo()}/>
            </IconButton>
            <IconButton
                aria-label="icon"
                onClick={() => setActive(false)}
                disabled={active}
                color='inherit'
            >
                <RedoIcon onClick={() => CanvasStore.redo()}/>
            </IconButton>
        </Stack>
    );
};

export default NavBarIcon;