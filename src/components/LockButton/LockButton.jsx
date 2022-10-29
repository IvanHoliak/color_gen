import { useContext } from "react";
import { ColorContext } from "../../context";

const LockButton = ({idx, children}) => {
    const {changeIsLock} = useContext(ColorContext);
    
    const onClickHandler = (e) => {
        e.preventDefault();
        changeIsLock(idx);
    };

    return (
        <button
            onClick={onClickHandler}
        >
            {children}
        </button>
    );
};

export default LockButton;
