import React from 'react';
import {Group, Rect} from "react-konva";
import CanvasStore from "../stores/CanvasStore";
import {observer} from "mobx-react-lite";
/**size of grid */
const WIDTH = 100;
const HEIGHT = 100;
const STROKE = 0.1;


const CanvasGrid = observer (() => {
    /*TODO: Here to improve bug when change scale */
    const startX = Math.floor((-CanvasStore.canvasPosition.x - window.innerWidth) / WIDTH) * WIDTH;
    const endX = Math.floor((-CanvasStore.canvasPosition.x + window.innerWidth * 2) / WIDTH) * WIDTH;

    const startY = Math.floor((-CanvasStore.canvasPosition.y - window.innerHeight) / HEIGHT) * HEIGHT;
    const endY = Math.floor((-CanvasStore.canvasPosition.y + window.innerHeight * 2) / HEIGHT) * HEIGHT;

    const gridComponents = [];
    let i = 0;
    for (let x = startX; x < endX; x += WIDTH) {
        for (let y = startY; y < endY; y += HEIGHT) {
            if (i === 4) {
                i = 0;
            }
            gridComponents.push(
                <Rect
                    x={x}
                    y={y}
                    width={WIDTH}
                    height={HEIGHT}
                    StrokeWidth={STROKE}
                    stroke="grey"
                    /*key generating from stack overflow*/
                    key={x + '-' + y}
                />
            );
        }
    }
    return (
        <Group>
            {gridComponents}
        </Group>
    );
})

export default CanvasGrid;