import React, {useEffect, useState} from 'react';
import Canvas from "./components/Canvas/Canvas";
import RightSlideMenu from "./components/RightSlideMenu/RightSlideMenu";
import NavBar from "./components/NavBar/NavBar";
import CanvasContextMenu from "./components/Canvas/context_menu/CanvasContextMenu";
import CanvasStore from "./stores/CanvasStore";
import {observer} from "mobx-react-lite";
import AuthModalWindow from "./components/AuthModalWindow/AuthModalWindow";
import AuthModalWindowStore from "../src/stores/AuthModalWindowStore";



const App: React.FC = observer(() => {
    useEffect(() =>{CanvasStore.contextMenu = document.querySelector('#canvas__context-menu') as HTMLElement;})
    const hideCanvasContextMenu = (e : any) => {
        if(!CanvasStore.contextMenu) return;
        CanvasStore.contextMenu.style.display = 'none';
    }

    const hideTransformer = (e : any) =>{
        if(CanvasStore.currentTarget !== e.target){
            CanvasStore.setCurrentItemId(null);
        }
    }

    return (
        <div className="App"
             onClick={(e) => {hideCanvasContextMenu(e); hideTransformer(e)} }
             onDragStart={(e) => {hideCanvasContextMenu(e); hideTransformer(e)}}
        >
            <NavBar/>
            <Canvas/>
            <CanvasContextMenu/>
            <RightSlideMenu/>
            { AuthModalWindowStore.active && (<AuthModalWindow />)}
        </div>
    );
});

export default App;
