import React from 'react';
import {Image, Transformer} from "react-konva";
import CanvasStore from "../../stores/CanvasStore";
import {ItemType} from "../../openapi";
import {icons} from "../../assets/images/icons/icons";
import useImage from "use-image";
import Konva from "konva";
import KonvaEventObject = Konva.KonvaEventObject;
import {observer} from "mobx-react-lite";


const UrlImage = observer((item: ItemType) => {
    const handleOnClick = (e:KonvaEventObject<MouseEvent>,item: ItemType) => {
        CanvasStore.currentItemRef = e.target;
        CanvasStore.chosenItem = item;
        CanvasStore.setCurrentItemId(item);
       // console.log('from handle on click', CanvasStore.currentItemId, item.itemType_id)
    }

    const handlePointerCursor = (e: KonvaEventObject<MouseEvent>) => {
        if (!e) return;
        const container = e!.target!.getStage()!.container();
        container.style.cursor = "pointer";
    }

    const handleDefaultCursor = (e: KonvaEventObject<MouseEvent>) => {
        if (!e) return;
        const container = e!.target!.getStage()!.container();
        container.style.cursor = "default";
    }

    const handleContextMenu = (e: KonvaEventObject<PointerEvent>) => {
        if (!e) return;
        e.evt.preventDefault();
        if (!CanvasStore.contextMenu) return;
        const stage = e.target.getStage();
        if (!stage) return;
        const containerRect = stage.container().getBoundingClientRect();
        if (!containerRect) return;
        CanvasStore.contextMenu.style.display = 'initial';
        CanvasStore.contextMenu.style.top = containerRect.top + stage.getPointerPosition()!.y + 4 + 'px';
        CanvasStore.contextMenu.style.left = containerRect.left + stage.getPointerPosition()!.x + 4 + 'px';
        console.log('on context menu');
    }


    if (!item.pictureLink) {
        /*TODO include default picture*/
        item.pictureLink = icons['red'];
    }
    const [image] = useImage(item.pictureLink);

    /**
     * Refs and useEffect for handling adding transformer io click
     * trRef - reference to transformer
     * shapeRef - reference to item
     * */
    const shapeRef = React.useRef(null);
    const trRef = React.useRef(null);
    React.useEffect(() => {
        if (CanvasStore.currentItemId === item.itemType_id && trRef != null && trRef.current != null) {
            // we need to attach transformer manually
            // @ts-ignore
            trRef.current.nodes([shapeRef.current]);
            // @ts-ignore
            trRef.current.getLayer().batchDraw();

        }
    });

    return <React.Fragment >
        <Image
            image={image}
            ref={shapeRef}
            x={item.polygon.point.x}
            y={item.polygon.point.y}
            size={{width: 50, height: 50}}
            draggable={true}
            key={item.itemType_id}
            scaleX={item.scale}
            scaleY={item.scale}
            rotation={item.angle}
            onMouseEnter={(e) => handlePointerCursor(e)}
            onMouseLeave={e => handleDefaultCursor(e)}
            onDragEnd={(event) => {
                const newPoint = {x: event.target.x(), y: event.target.y()}
                CanvasStore.dragItem(item, newPoint);
            }}
            onContextMenu={(e) => handleContextMenu(e)}
            onClick={(e) =>{
                handleOnClick(e, item);
                //e.evt.stopImmediatePropagation();
            }}
            onTransformEnd={(e) => {
                const node = shapeRef.current;
                if (node != null) {
                    //@ts-ignore
                    CanvasStore.transformItem(item, {x: node.x(), y: node.y()}, node.scaleX(), node.rotation())
                }
            }}
        />
        {(CanvasStore.currentItemId === item.itemType_id) &&
            <Transformer
                ref={trRef}
                rotationSnaps={[0, 45, 90, 135, 180, 235, 270, 315]}
                keepRatio={true}
                enabledAnchors={[
                    'top-left',
                    'top-right',
                    'bottom-left',
                    'bottom-right',
             ]}
            boundBoxFunc={(oldBox, newBox) => {
                // limit resize
                if (newBox.width < 5 || newBox.height < 5) {
                    return oldBox;
                }
                return newBox;
            }}
        />}
    </React.Fragment>

});

export default UrlImage;