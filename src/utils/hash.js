export const hash = (colors) => {
    return colors.map(color => {
        return color.color.substring(1);
    }).join("-");
};