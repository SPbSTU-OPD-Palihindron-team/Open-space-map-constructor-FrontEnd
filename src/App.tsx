import React, {useEffect, useState} from 'react';
import Canvas from "./components/Canvas/Canvas";
import RightSlideMenu from "./components/RightSlideMenu/RightSlideMenu";
import NavBar from "./components/NavBar/NavBar";
import CanvasContextMenu from "./components/Canvas/context_menu/CanvasContextMenu";



const App: React.FC =() => {
    let contextMenu = document.querySelector('#canvas__context-menu') as HTMLElement;
    /*TODO: this is very bad, find how to always get not null but contextMenu*/
    while(!contextMenu) {
        contextMenu = document.querySelector('#canvas__context-menu') as HTMLElement;
    }
    const hideCanvasContextMenu = () => {
        if(!contextMenu) return;
        contextMenu.style.display = 'none';
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
