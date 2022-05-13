import React, {useEffect, useState} from 'react';
import Canvas from "./components/Canvas/Canvas";
import RightSlideMenu from "./components/RightSlideMenu/RightSlideMenu";
import NavBar from "./components/NavBar/NavBar";
import CanvasContextMenu from "./components/Canvas/context_menu/CanvasContextMenu";
import CanvasStore from "./stores/CanvasStore";



const App: React.FC =() => {
    useEffect(() =>{CanvasStore.contextMenu = document.querySelector('#canvas__context-menu') as HTMLElement;})
    const hideCanvasContextMenu = () => {
        if(!CanvasStore.contextMenu) return;
        CanvasStore.contextMenu.style.display = 'none';
    }
    return (
        <div className="App"
             onClick={(e) => hideCanvasContextMenu()}
             onDragStart={(e) => hideCanvasContextMenu()}
        >
            <NavBar/>
            <Canvas/>
            <CanvasContextMenu/>
            <RightSlideMenu/>
        </div>
    );
};

export default App;
