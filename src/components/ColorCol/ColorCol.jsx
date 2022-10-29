import React from "react";
import { faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import LockButton from "../LockButton/LockButton";
import ColorText from "../ColorText/ColorText";

const ColorCol = ({color, isLock, textColor, idx}) => {
    return (
        <div 
            className="col"
            style={{"background": color, "color": textColor}}
        >
            <ColorText text={color} />

            <LockButton idx={idx}>
                <FontAwesomeIcon icon={isLock ? faLock : faLockOpen} style={{"color": textColor}}/>
            </LockButton>
        </div>
    );
};

export default ColorCol;
