import React from "react";
import moon from "../assets/moon.png";

const Header = ({ handleDarkMode }) => {
    return (
        <div className="header relative flex justify-between items-center w-full h-[88px] p-2 shadow-xl bg-[var(--header-color)] md:h-20 lg:px-20">
            <h2 className="text-white font-bold text-sm pl-2 tracking-wider md:text-lg">
                Where in the world?
            </h2>
            <div
                className="btn_darkmode flex items-center gap-1 p-2 cursor-pointer rounded-md transition duration-50 delay-50 hover:bg-[var(--container-color)]"
                onClick={handleDarkMode}
            >
                <img src={moon} alt="Moon" className="w-4 invert" />
                <h2 className="text-white text-xs font-medium md:text-sm">
                    Dark Mode
                </h2>
            </div>
        </div>
    );
};

export default Header;
