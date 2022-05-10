import React, {useState} from 'react';
import {Circle, Group, Line, Stage} from "react-konva";
import {observer} from "mobx-react-lite";
import CanvasStore from "../../stores/CanvasStore";


const CanvasWalls = observer((position:{x:number, y:number, curX:number, curY:number}) => {
    return (
        <Group>
            {!(CanvasStore.clickCounter === 0) && <Line
                points={[position.x, position.y, position.curX, position.curY]}
                stroke={"2px"}
                fill={"gray"}
            />}
            {
                CanvasStore.walls.map((wall,index) => {
                    return <Line
                        key={index}
                        points={[wall.form[0].point.x, wall.form[0].point.y, wall.form[1].point.x, wall.form[1].point.y ]}
                        strokeWidth={10}
                        stroke={"black"}
                        draggable={true}
                    />
                })
            }
        </Group>
    );
});

export default CanvasWalls;
