import React from "react";
import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderMain from "./HeaderMain/HeaderMain";
import HeaderMenu from "./HeaderMenu/HeaderMenu";

function Header() {
    return (
        <header className="header" id="header">
            <HeaderTop />
            <HeaderMain />
            <HeaderMenu />
        </header>
    );
}

export default Header;
