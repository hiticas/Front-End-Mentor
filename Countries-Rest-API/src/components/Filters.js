import React, { useRef } from "react";
import searchIcon from "../assets/search-icon.png";

const Filters = ({ handleSearch, handleDropdown }) => {
    const ref = useRef(null);

    return (
        <div className="filters w-full flex justify-between">
            <div className="search flex">
                <img
                    src={searchIcon}
                    alt="Search icon"
                    className="w-10 invert"
                />
                <input
                    ref={ref}
                    // defaultValue={ref.current.value == null ? '' ! }
                    placeholder="Search for a country..."
                    onChange={() => handleSearch(ref.current.value)}
                />
            </div>
            <div className="dropdown">
                <select
                    defaultValue={"selected"}
                    name="regions"
                    id="regions"
                    onChange={(event) => handleDropdown(event.target.value)}
                >
                    <option value="selected" disabled hidden>
                        Filter by Region
                    </option>
                    <option value="selected">All</option>
                    <option value="Africa">Africa</option>
                    <option value="North America">America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europa</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
        </div>
    );
};

export default Filters;
