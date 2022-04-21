import React, {useState} from 'react';
import {Group, Rect} from "react-konva";
import CanvasStore from "../stores/CanvasStore";
import {observer} from "mobx-react-lite";
import {icons} from "../assets/images/icons/icons";


const LeftSlideMenu = observer (() => {
    const [isOpen, setMenuState] = useState<boolean>(true)
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
            <button
                name={'Menu'}
                onClick={() => setMenuState(!isOpen)}
                style={{
                    border: "1px solid black",
                    width: "100px",
                    height: "40px"
                }}
            > {'Меню с предметами'}</button>
            {isOpen &&
                Object.entries(icons).map(([name, src]) =>{
                    return(<img
                        style={{
                            maxBlockSize: 50,
                        }}
                        alt={name}
                        src={src}
                        draggable="true"
                        onDragStart={e =>{
                            CanvasStore.chosenImage = name;
                        }}
                    />)
            })}
        </div>
    )
})

export default LeftSlideMenu;

