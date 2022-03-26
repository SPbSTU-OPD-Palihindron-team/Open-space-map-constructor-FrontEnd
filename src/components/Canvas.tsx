import React, {useState} from 'react';
import {Circle, Layer, Rect, Stage, Text} from "react-konva";
import Konva from "konva";
import CanvasGrid from "./CanvasGrid";

const Canvas = () => {
    const [stageScale, setStageScale] = useState(1);
    const [stageX, setStageX] = useState(0);
    const [stageY, setStageY] = useState(0);

    /**States for test to show coordinates of mouse*/
    const [curX, setCurX] = useState(0);
    const [curY, setCurY] = useState(0);

    /**Function to zoom via mouse wheel */
    const handleWheelZoom =  (e: any) => {
        e.evt.preventDefault();

        const scaleBy = 1.05;
        const stage = e.target.getStage();
        const oldScale = stage.scaleX();
        const mousePointTo = {
            x: stage.getPointerPosition().x / oldScale - stage.x() / oldScale,
            y: stage.getPointerPosition().y / oldScale - stage.y() / oldScale
        };

        const newScale = e.evt.deltaY > 0 ? oldScale / scaleBy : oldScale * scaleBy;

        stage.scale({ x: newScale, y: newScale });

        const s = stage.getPointerPosition();
        const m = mousePointTo;

        setStageScale(newScale);
        setStageX(-(m.x - s.x / newScale) * newScale);
        setStageY(-(m.y - s.y / newScale) * newScale);
    };

    /**Test function that shows coordinates of mouse */
    const handleMouseMove = (e: any) =>{
        e.evt.preventDefault();
        const stage = e.target.getStage();
        setCurX(stage.getPointerPosition().x);
        setCurY(stage.getPointerPosition().y);
    }
    return (
        <div>
            {/*Test Text that shows coordinates of mouse */}
            <Text>{curX}, {curY}, {stageScale}, {curY}</Text>
            <Stage
                width={window.innerWidth}
                height={window.innerHeight}
                draggable
                onWheel={handleWheelZoom}
                scaleX={stageScale}
                scaleY={stageScale}
                x={stageX}
                y={stageY}
                onMouseMove={handleMouseMove}>
                <Layer>
                    {/*Test Circle*/}
                    <Circle x={100}
                            y={100}
                            radius={50}
                            fill={'red'}
                            draggable={true}/>
                </Layer>
            </Stage>
        </div>
    );
};

export default Canvas;