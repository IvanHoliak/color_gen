import { createContext, useReducer } from "react";
import { actions, colorReducer } from "../store/reducers/colorReducer";
import { initialState } from "../store";

export const ColorContext = createContext(null);

const ColorProvider = ({children}) => {
    const [state, dispatch] = useReducer(colorReducer, initialState);

    const value = {
        ...state,
        changeColorCol: (counterCol) => {
            dispatch({type: actions.CHANGE_COLOR_COL, payload: counterCol})
        },
        changeColors: (colors) => {
            dispatch({type: actions.CHANGE_COLORS, payload: colors});
        },
        changeIsLock: (idx) => {
            dispatch({type: actions.CHANGE_IS_LOCK, payload: idx});
        },
    };

    return (
        <ColorContext.Provider value={value}>
            {children}
        </ColorContext.Provider>
    )
};

export default ColorProvider;