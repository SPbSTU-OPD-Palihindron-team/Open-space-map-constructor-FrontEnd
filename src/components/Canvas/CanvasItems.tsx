import React from 'react';
import {Group, Image, Layer} from "react-konva";
import CanvasStore from "../../stores/CanvasStore";
import {icons} from "../../assets/images/icons/icons";
import useImage from "use-image";
import {observer} from "mobx-react-lite";
import {ItemType} from "../../openapi";

const CanvasItems = observer( () => {

    const handlePointerCursor= (e:any) => {
        const container = e.target.getStage().container();
        container.style.cursor = "pointer";
    }

    const handleDefaultCursor= (e:any) => {
        const container = e.target.getStage().container();
        container.style.cursor = "default";
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
                onMouseEnter={e => handlePointerCursor(e)}
                onMouseLeave={e => handleDefaultCursor(e)}
                onDragEnd={(event) => {
                    const newPoint = {x: event.target.x(), y: event.target.y()}
                    CanvasStore.dragItem(item, newPoint);
                }
        }/>;

    }
    return (
        <Group>
            {CanvasStore.images.map(image =>{
                if(image.pictureLink )
                    return <URLImage pictureLink={icons[image.pictureLink]} polygon={image.polygon} itemType_id={image.itemType_id} itemName={image.itemName} valuablePlacement={''}/>;
            })}
        </Group>

    )
})

export default CanvasItems;