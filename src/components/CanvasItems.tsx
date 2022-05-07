import React from 'react';
import {Group, Image, Layer} from "react-konva";
import CanvasStore from "../stores/CanvasStore";
import {icons} from "../assets/images/icons/icons";
import useImage from "use-image";
import {observer} from "mobx-react-lite";
import {ItemType} from "../types/ItemType";

const CanvasItems = observer( () => {

    const URLImage = (item: ItemType) => {
        const [image] = useImage(item.src);
        return <Image image={image}
                      x={item.x}
                      y={item.y}
                      size={{width: 50, height:50}}
                      draggable={true}
                      key={item._key}
                      onDragEnd={(event) =>
                          CanvasStore.dragItem(item._key, event.target.x(),  event.target.y())
        }/>;

    }
    return (
        <Group>
            {CanvasStore.images.map(image =>{
                return <URLImage src={icons[image.src]} x={image.x} y={image.y} _key={image._key}/>;
            })}
        </Group>

    )
})

export default CanvasItems;