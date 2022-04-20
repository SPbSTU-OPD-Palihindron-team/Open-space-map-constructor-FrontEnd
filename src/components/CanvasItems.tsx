import React from 'react';
import {Group, Image, Layer} from "react-konva";
import CanvasStore from "../stores/CanvasStore";
import {icons} from "../assets/images/icons/icons";
import useImage from "use-image";
import {observer} from "mobx-react-lite";
type ImageType = {
    src: string,
    x: number,
    y: number
    key: number
}
const CanvasItems = observer( () => {
    const URLImage = (image: ImageType) => {
        const [img] = useImage(image.src);
        return <Image image={img} x={image.x} y={image.y} draggable={true} key={image.key}/>;
    }
    return (
        <Group>
            {CanvasStore.images.map(image =>{
                return <URLImage src={icons[image.src]} x={image.x} y={image.y} key={image.key ? image.key : 0}/>;
            })}
        </Group>

    )
})

export default CanvasItems;