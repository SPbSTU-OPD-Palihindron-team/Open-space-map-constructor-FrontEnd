import React, {useState} from 'react';
import Canvas from "./components/Canvas";
import CanvasGrid from "./components/CanvasGrid";
import RightSlideMenu from './components/RightMenu/RightSlideMenu'

const App: React.FC =() => {
    const [menuActive, setMenuActive] = useState(true)
    return (
        <div className="App">
            <Canvas/>
            <RightSlideMenu active={menuActive} setActive={setMenuActive}/>
        </div>
    );
};

export default App;
