import React, {useEffect, useState} from 'react';
import {Circle, Layer, Stage, Text, Image, KonvaNodeComponent} from "react-konva";
import CanvasGrid from "./CanvasGrid";
import {observer} from "mobx-react-lite";
import CanvasStore from "../stores/CanvasStore";
import LeftSlideMenu from "./LeftSlideMenu";
import {Grid} from "@mui/material";
import CanvasItems from "./CanvasItems";


const Canvas = () => {
    useEffect(() => {
        document.body.style.overflow = "hidden";
    }, []);

    /**States for test to show coordinates of mouse*/
    const [curX, setCurX] = useState(0);
    const [curY, setCurY] = useState(0);

    const stageRef = React.useRef(null);

    /**Function to zoom via mouse wheel */
    /*TODO: any should be replaced with explicit type */
    const handleWheelZoom =  (e: any) => {
        e.evt.preventDefault();

        const scaleBy = 1.02;
        const stage = e.target.getStage();
        const oldScale = stage.scaleX();
        const pointer = stage.getPointerPosition();
        /**
         * stage.x() - absolute coordinates of stage
         * stage.getPointerPosition().x - absolute coordinates of mouse
         * */
        const mousePointTo = {
            x: (pointer.x  - stage.x()) / oldScale,
            y: (pointer.y  - stage.y()) / oldScale
        };

        const newScale = e.evt.deltaY > 0 ? oldScale / scaleBy : oldScale * scaleBy;
        stage.scale({ x: newScale, y: newScale });

        CanvasStore.canvasScale = newScale;
        const newPos = {
            x: pointer.x - mousePointTo.x * newScale,
            y: pointer.y - mousePointTo.y * newScale,
        };
        stage.position(newPos);
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
            <Text>{curX}, {curY}, {CanvasStore.canvasScale}</Text>
            <Grid
                container
                justifyContent="flex-start"
            >
                <Grid item>
                    <LeftSlideMenu/>
                </Grid>
                <Grid item>
                    <div id="canvas"
                        onDrop={e =>{
                            e.preventDefault();
                            /*TODO: remove ignore */
                            // @ts-ignore
                            stageRef.current.setPointersPositions(e);
                            // @ts-ignore
                            CanvasStore.addItem({ x: stageRef.current.getRelativePointerPosition().x-25,  y: stageRef.current.getRelativePointerPosition().y-25,})
                        }}
                        onDragOver={e => e.preventDefault()}
                    >
                        <Stage
                            ref={stageRef}
                            width={window.innerWidth}
                            height={window.innerHeight}
                            draggable
                            onWheel={handleWheelZoom}
                            scaleX={CanvasStore.canvasScale}
                            scaleY={CanvasStore.canvasScale}
                            x={CanvasStore.canvasPosition.x}
                            y={CanvasStore.canvasPosition.y}
                            onMouseMove={handleMouseMove}
                            /*TODO: any should be replaced with explicit type */
                            onDragEnd={(e: any) => {CanvasStore.canvasPosition = e.currentTarget.position();}}
                        >
                            <Layer>
                                <CanvasGrid/>
                            </Layer>
                            <Layer>
                                <CanvasItems/>
                            </Layer>
                        </Stage>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Canvas;