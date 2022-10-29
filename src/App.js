import React, { useCallback, useContext, useEffect, useState } from "react";
import ColorCol from "./components/ColorCol/ColorCol";
import Header from "./components/Header/Header";
import { ColorContext } from "./context";
import { genColors } from "./utils/genColors";

const App = () => {
    const {counterCol, colors, changeColors, changeColorCol} = useContext(ColorContext);
    const [init, setInit] = useState(true);
    
    const initAndUpdateColor = useCallback((init) => { 
        const result = genColors({counterCol, colors}, init);
        changeColors(result);
        changeColorCol(result.length);
    }, [counterCol, colors, changeColors, changeColorCol]);

    const onKeydownHandler = useCallback((e) => {
        e.preventDefault();
        if(e.code.toLowerCase() === "space") initAndUpdateColor(init);
    }, [initAndUpdateColor, init]);
    
    useEffect(() => {
        initAndUpdateColor(init);
        setInit(false);
    // eslint-disable-next-line
    }, []);

    useEffect(() => {
        document.addEventListener("keydown", onKeydownHandler);

        return () => document.removeEventListener("keydown", onKeydownHandler);
    }, [onKeydownHandler]);

    return (
        <div className="app">
            <Header />
            <div className="col_row">
                {colors.map((col, index) => (
                    <ColorCol key={`${col.color}_${index}`} color={col.color} isLock={col.isLock} textColor={col.textColor} idx={index}/>
                ))}
            </div>
        </div>
    )
};

export default App;
