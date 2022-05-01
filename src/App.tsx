import React, {useState} from 'react';
import Canvas from "./components/Canvas";
import RightSlideMenu from "./components/RightSlideMenu/RightSlideMenu";


const App: React.FC =() => {
    return (
        <div className="App">
            <Canvas/>
            <RightSlideMenu />
        </div>
    );
};

export default App;
