import React, { useState } from "react";

const ColorText = ({ text }) => {
    const [isCopied, setIsCopied] = useState(false);

    const onClickHandler = (e) => {
        e.preventDefault();
        
        navigator.clipboard
            .writeText(e.target.textContent)
            .then(() => {
                console.log("Async: Copying to clipboard was successful!");
                setIsCopied(true);
            })
            .catch(err => console.error("Async: Could not copy text: ", err));
    };

    return (
        <h2 
            onClick={onClickHandler}
            data-copied={isCopied ? "Copied!" : "Copy"}
        >{text}</h2>
    );
};

export default ColorText;
