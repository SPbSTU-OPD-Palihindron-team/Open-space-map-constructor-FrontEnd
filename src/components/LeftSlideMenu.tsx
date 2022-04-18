import React from 'react';
import {Group, Rect} from "react-konva";
import CanvasStore from "../stores/CanvasStore";


const LeftSlideMenu = () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid black",
                width: "fit-content",
                margin: 0,
                position: "absolute",
                zIndex: 100
            }}
        >
            <img
                alt="lion"
                src="https://konvajs.org/assets/lion.png"
                draggable="true"
                onDragStart={e =>{
                    CanvasStore.chosenImage = require("../assets/images/icons/green.png");
                }}
            />
        </div>
    )
};

export default LeftSlideMenu;

