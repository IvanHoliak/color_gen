import { useContext } from "react";
import { faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { ColorContext } from "../../context";
import { genColors } from "../../utils/genColors";

const RefreshButton = () => {
    const {counterCol, colors, changeColors} = useContext(ColorContext);

    const onClickhandler = (e) => {
        e.preventDefault();
        changeColors(genColors({counterCol, colors}, false));
    };

    return (
        <button
            onClick={onClickhandler}
        >
            <FontAwesomeIcon icon={faArrowsRotate} />
        </button>
    );
};

export default RefreshButton;
