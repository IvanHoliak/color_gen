import chroma from "chroma-js"; 
import { hash } from "./hash";

export const genColors = (state, init) => {
    let colors = [];

    if(init && window.location.hash.length > 1){
        try{
            const getColors = window.location.hash
                .substring(1)
                .split("-");
    
            colors = getColors.map(color => {
                return {
                    color: `#${color}`,
                    isLock: false,
                    textColor: chroma(`#${color}`).luminance() > 0.5 ? "#000" : "#fff",
                };
            });
    
            return colors;

        }catch(e){
            console.error("Invalid hash!");
        };
    };


    for(let i = 0; i < state.counterCol; i++){
        const color = chroma.random().toString();
        
        if(state.colors[i]?.isLock){
            colors = [...colors, state.colors[i]]; 
        }else{
            colors = [...colors, {
                color,
                isLock: false,
                textColor: chroma(color).luminance() > 0.5 ? "#000" : "#fff",
            }];
        }; 
    };

    window.location.hash = hash(colors);
    return colors;
};