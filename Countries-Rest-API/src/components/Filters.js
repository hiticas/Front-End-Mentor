import React from "react";
import searchIcon from "../assets/search-icon.png";

const Filters = () => {
    return (
        <div className="filters w-full">
            <div className="search flex ">
                <img
                    src={searchIcon}
                    alt="Search icon"
                    className="w-10 invert"
                />
                <input placeholder="Search for a country..." />
            </div>
            <div className="dropdown"></div>
        </div>
    );
};

export default Filters;
