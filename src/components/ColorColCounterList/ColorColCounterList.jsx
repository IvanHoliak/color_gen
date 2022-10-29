import React, { useContext } from "react";
import { ColorContext } from "../../context";
import { genColors } from "../../utils/genColors";

const ColorColCounterList = () => {
    const {counterCol, changeColorCol, changeColors, colors} = useContext(ColorContext);

    const onChangeHandler = (e) => {
        e.preventDefault();
        changeColorCol(+e.target.value);
        const result = genColors({counterCol: +e.target.value, colors}, false);
        changeColors(result);
    };

    return (
        <div>
            <label htmlFor="#select">Сolumns: </label>
            <select 
                id="select"
                onChange={onChangeHandler}
                value={counterCol}
            > 
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
            </select>
        </div>
    );
};

export default ColorColCounterList;
