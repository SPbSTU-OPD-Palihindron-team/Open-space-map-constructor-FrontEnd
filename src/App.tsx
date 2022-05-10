import React, {useState} from 'react';
import Canvas from "./components/Canvas/Canvas";
import RightSlideMenu from "./components/RightSlideMenu/RightSlideMenu";
import NavBar from "./components/NavBar/NavBar";



const App: React.FC =() => {
    return (
        <div className="App">
            <NavBar/>
            <Canvas/>
            <RightSlideMenu/>
        </div>
    );
};

export default App;
