import React, {useState} from 'react';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import SaveIcon from '@mui/icons-material/Save';
import CanvasStore from "../../stores/CanvasStore";
import {observer} from "mobx-react-lite";

interface IconProps {
    active: any;
    setActive: any;
}

const NavBarIcon: React.FC<IconProps> = observer (({active, setActive})  =>{
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
                onClick={() => {setActive(false); CanvasStore.undo();}}
                disabled={CanvasStore.undoBlocked}
                color='inherit'
            >
                <UndoIcon />
            </IconButton>
            <IconButton
                aria-label="icon"
                onClick={() => {setActive(false); CanvasStore.redo();}}
                disabled={CanvasStore.redoBlocked}
                color='inherit'
            >
                <RedoIcon/>
            </IconButton>
        </Stack>
    );
});

export default NavBarIcon;