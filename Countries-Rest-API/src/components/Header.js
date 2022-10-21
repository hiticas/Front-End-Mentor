import React, { useState } from "react";
import moon from "../assets/moon.png";

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    // const toggleDarkMode = () => {
    //     setIsDarkMode(!isDarkMode);
    //     console.log(isDarkMode);
    // };

    return (
        <div className="header flex justify-between w-full lg:px-20 border-b-2 bg-[var(--header-color)]">
            <h2>Where in the world?</h2>
            <div className="dark__mode flex items-center">
                <img src={moon} alt="Moon" className="w-10 invert" />
                <h2 className="">Dark mode</h2>
            </div>
        </div>
    );
};

export default Header;
