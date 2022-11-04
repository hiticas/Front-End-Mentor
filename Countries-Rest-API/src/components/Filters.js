import React, { useRef } from "react";
import searchIcon from "../assets/search-icon.png";

const Filters = ({ handleSearch, handleDropdown }) => {
    const ref = useRef(null);

    return (
        <div className="filter w-full flex flex-col gap-10 p-4 pt-6 sm:flex-row sm:justify-between sm:pt-10 lg:px-0">
            <div className="search relative flex items-center justify-between h-14 w-full max-w-sm rounded-md shadow-[0_0_7px_rgba(0,0,0,0.3)] bg-[var(--header-color)]">
                <img
                    src={searchIcon}
                    alt="Search icon"
                    className="absolute left-8 w-4 h-4 invert"
                />
                <input
                    className="placeholder:text-gray-300 placeholder:text-sm text-gray-200 h-full w-full rounded-md bg-transparent pl-20 border border-transparent focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                    ref={ref}
                    placeholder="Search for a country..."
                    onChange={() => handleSearch(ref.current.value)}
                />
            </div>
            <div className="dropdown h-14">
                <select
                    className="h-full p-2 rounded-md bg-[var(--header-color)] text-gray-200 text-sm border shadow-[0_0_7px_rgba(0,0,0,0.3)] border-transparent focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1"
                    defaultValue={"all"}
                    id="regions"
                    onChange={(event) => handleDropdown(event.target.value)}
                >
                    <option value="all" disabled hidden>
                        Filter by Region
                    </option>
                    <option value="all">All</option>
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
