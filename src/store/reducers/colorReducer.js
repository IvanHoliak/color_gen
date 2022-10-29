export const actions = {
    CHANGE_COLOR_COL: "CHANGE_COLOR_COL",
    CHANGE_COLORS: "CHANGE_COLORS",
    CHANGE_IS_LOCK: "CHANGE_IS_LOCK",
};

export const colorReducer = (state, action) => {
    const {type, payload} = action;
    
    switch(type){
        case actions.CHANGE_COLOR_COL:
            return {
                ...state,
                counterCol: payload
            };
        case actions.CHANGE_COLORS:
            return {
                ...state,
                colors: payload
            };
        case actions.CHANGE_IS_LOCK:
            return {
                ...state,
                colors: state.colors.map((color, index) => {
                    if(index === payload){
                        color.isLock = !color.isLock;
                    };

                    return color;
                })
            };
        default:
            return state;
    };
};