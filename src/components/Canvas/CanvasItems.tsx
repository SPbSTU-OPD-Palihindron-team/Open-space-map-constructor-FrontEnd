import React from 'react';
import {Group, Image, Layer} from "react-konva";
import CanvasStore from "../../stores/CanvasStore";
import {icons} from "../../assets/images/icons/icons";
import useImage from "use-image";
import {observer} from "mobx-react-lite";
import {ItemType} from "../../openapi";
import Konva from "konva";
import KonvaEventObject = Konva.KonvaEventObject;

const CanvasItems = observer( () => {

    const handleOnClick = (item: ItemType) => {
        console.log(item);
        CanvasStore.chosenItem = item;
    }

    const handlePointerCursor= (e: KonvaEventObject<MouseEvent>) => {
        if(!e) return;
        const container = e!.target!.getStage()!.container();
        container.style.cursor = "pointer";
    }

    const handleDefaultCursor= (e: KonvaEventObject<MouseEvent>) => {
        if(!e) return;
        const container = e!.target!.getStage()!.container();
        container.style.cursor = "default";
    }

    const handleContextMenu = (e : KonvaEventObject<PointerEvent>) =>{
        if(!e) return;
        e.evt.preventDefault();
        if(!CanvasStore.contextMenu) return;
        const stage = e.target.getStage();
        if(!stage) return;
        const containerRect = stage.container().getBoundingClientRect();
        if(!containerRect) return;
        CanvasStore.contextMenu.style.display = 'initial';
        CanvasStore.contextMenu.style.top = containerRect.top + stage.getPointerPosition()!.y + 4 + 'px';
        CanvasStore.contextMenu.style.left = containerRect.left + stage.getPointerPosition()!.x + 4 + 'px';
    }

    const URLImage = (item: ItemType) => {
        if(!item.pictureLink){
            /*TODO include default picture*/
            item.pictureLink = icons['red'];
        }
        const [image] = useImage(item.pictureLink);
        return <Image
                image={image}
                x={item.polygon.point.x}
                y={item.polygon.point.y}
                size={{width: 50, height:50}}
                draggable={true}
                key={item.itemType_id}
                onMouseEnter={(e) => handlePointerCursor(e)}
                onMouseLeave={e => handleDefaultCursor(e)}
                onDragEnd={(event) => {
                    const newPoint = {x: event.target.x(), y: event.target.y()}
                    CanvasStore.dragItem(item, newPoint);
                }}
                onContextMenu={(e) => handleContextMenu(e)}
                onClick={(e) => handleOnClick(item)}
        />;

    }
    return (
        <Group>
            {CanvasStore.images.map(image =>{
                if(image.pictureLink )
                   // return <URLImage pictureLink={icons[image.pictureLink]} polygon={image.polygon} itemType_id={image.itemType_id} itemName={image.itemName} valuablePlacement={''}/>;
                    return <URLImage pictureLink={image.pictureLink} polygon={image.polygon} itemType_id={image.itemType_id} itemName={image.itemName} valuablePlacement={''}/>;
            })}
        </Group>

    )
})

export default CanvasItems;