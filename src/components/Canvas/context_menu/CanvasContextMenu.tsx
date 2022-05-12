import React from 'react';
import './CanvasContextMenu.css'
import CanvasStore from "../../../stores/CanvasStore";
const CanvasContextMenu = () => {

    const handleDelete = () => {
        if(!CanvasStore.chosenItem) return;
        CanvasStore.deleteItem(CanvasStore.chosenItem);
        if(!CanvasStore.contextMenu) return;
        CanvasStore.contextMenu.style.display = 'none';
    }
    return (
        <div id="canvas__context-menu">
            <div>
                <button id="canvas__context-menu__button_delete"
                        onClick={(e) => handleDelete()}
                    >Delete</button>

                <button id="canvas__context-menu__button_bring-to-front">

                    Bring to front</button>
                <button id="canvas__context-menu__button_send-to-back">Send to back</button>
            </div>
        </div>
    );
};

export default CanvasContextMenu;