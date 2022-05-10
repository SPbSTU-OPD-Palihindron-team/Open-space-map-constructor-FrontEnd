import React, {useState} from 'react';
import CanvasStore from "../stores/CanvasStore";
import {observer} from "mobx-react-lite";
import {icons} from "../assets/images/icons/icons";
import {tools} from "../assets/images/icons/tools";

const styleDefault = {
    maxBlockSize: 50,
}

const styleActive = {
    backgroundColor: "#708090",
    borderColor: "black",
    maxBlockSize: 50,

}

const LeftSlideMenu = observer (() => {
    const [isOpen, setMenuState] = useState<boolean>(true);
    const [value] = Object.entries(tools);

    const handleWallToolActive = () => {
        CanvasStore.handleWallToolActive();
    }

    return (
        <div
            style={{
                display:"flex",
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
                    height: "40px",
                }}
            >
                {'Меню с предметами'}
            </button>

            {isOpen && <p style={{marginBottom: "10px"}}> Tools </p>}
            {isOpen &&
                ((CanvasStore.isWallToolActive)?
                <img
                    style={
                    styleActive
                }
                    alt={value[0]}
                    src={value[1]}
                    draggable={false}
                    onClick={handleWallToolActive}
                />:
                <img
                    style={
                        styleDefault
                    }
                    alt={value[0]}
                    src={value[1]}
                    draggable={false}
                    onClick={handleWallToolActive}
                />)
                }

            {isOpen && <hr style={{width: "100%"}}/>}
            {isOpen && <p style={{marginBottom: "10px"}}> Items </p>}
            {isOpen &&  Object.entries(icons).map(([name, src]) => {
                return(
                    <img
                        style={{
                            maxBlockSize: 50,
                            margin: "2px",
                        }}
                        alt={name}
                        src={src}
                        draggable="true"
                        onDragStart={e => {
                            CanvasStore.chosenImage = name;
                        }}
                    />)
            })}
        </div>
    )
})

export default LeftSlideMenu;

