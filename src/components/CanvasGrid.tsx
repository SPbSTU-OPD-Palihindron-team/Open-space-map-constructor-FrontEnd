import React from 'react';
import {Group, Layer, Rect, Stage} from "react-konva";

/**size of grid */
const WIDTH = 100;
const HEIGHT = 100;
const STROKE = 0.1;
type stagePos = {
    x: number,
    y: number
}
const CanvasGrid = (props: stagePos) => {

    /*TODO: Here to improve bug when change scale */
    const startX = Math.floor((-props.x - window.innerWidth) / WIDTH) * WIDTH;
    const endX = Math.floor((-props.x + window.innerWidth * 2) / WIDTH) * WIDTH;

    const startY = Math.floor((-props.y - window.innerHeight) / HEIGHT) * HEIGHT;
    const endY = Math.floor((-props.y + window.innerHeight * 2) / HEIGHT) * HEIGHT;

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
};

export default CanvasGrid;