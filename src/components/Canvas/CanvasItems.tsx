import React, {useRef} from 'react';
import {Group, Image, Layer} from "react-konva";
import CanvasStore from "../../stores/CanvasStore";
import {icons} from "../../assets/images/icons/icons";
import useImage from "use-image";
import {observer} from "mobx-react-lite";
import {ItemType} from "../../openapi";
import Konva from "konva";
import KonvaEventObject = Konva.KonvaEventObject;
import URLImage from './URLImage';


const CanvasItems = observer(() => {

    return (
        <Group>
            {CanvasStore.images.map(image => {
                if (image.pictureLink)
                    return <URLImage pictureLink={image.pictureLink}
                                     polygon={image.polygon}
                                     itemType_id={image.itemType_id}
                                     itemName={image.itemName}
                                     valuablePlacement={''}
                                     scale={image.scale}
                                     angle={image.angle}/>;
            })}
        </Group>

    )
})

export default CanvasItems;