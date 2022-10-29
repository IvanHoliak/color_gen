import React from "react";
import ColorColCounterList from "../ColorColCounterList/ColorColCounterList";
import RefreshButton from "../RefreshButton/RefreshButton";

const Header = () => {
    return (
        <header className="header">
            <ColorColCounterList />
            <RefreshButton />
        </header>
    );
};

export default Header;
