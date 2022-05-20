import React, {useState} from 'react';
import CanvasStore from "../../stores/CanvasStore";
import {observer} from "mobx-react-lite";
import "./LeftSlideMenu.css"
import {icons} from "../../assets/images/icons/icons";
import {tools} from "../../assets/images/icons/tools";


const LeftSlideMenu = observer (() => {
    const [isOpen, setMenuState] = useState<boolean>(true);
    const [value] = Object.entries(tools);

    const handleWallToolActive = () => {
        CanvasStore.handleWallToolActive();
    }

    return (
        <div className={'left-slide-menu'}>
            <button className={'menu-button'}
                name={'Menu'}
                onClick={() => setMenuState(!isOpen)}
            >
                {'Menu of items'}
            </button>

            {isOpen && <p className={'icon-text'}> Tools </p>}
            {isOpen &&
                ((CanvasStore.isWallToolActive)?
                <img className={'wall-tool-active'}
                    alt={value[0]}
                    src={value[1]}
                    draggable={false}
                    onClick={handleWallToolActive}
                />:
                <img className={'wall-tool-default'}
                    alt={value[0]}
                    src={value[1]}
                    draggable={false}
                    onClick={handleWallToolActive}
                />)
                }

            {isOpen && <hr style={{width: "100%", margin:0 }}/>}
            {isOpen && <p className={'icon-text'}> Items </p>}
            {isOpen &&  Object.entries(icons).map(([name, src]) => {
                return(
                    <img className={'icons'}
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

