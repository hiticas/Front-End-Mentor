import React, { useState, useEffect } from "react";
import "./input.css";
import JobBoardComponent from "./components/JobBoardComponent";
import data from "./data/data.json";

export const App = () => {
    const [jobs, setJobs] = useState([]);
    const [filters, setFilters] = useState([]);

    useEffect(() => setJobs(data), []);

    const filterFunc = ({ role, level, tools, languages }) => {
        if (filters.length === 0) {
            return true;
        }

        const tags = [role, level];

        if (tools) {
            tags.push(...tools);
        }

        if (languages) {
            tags.push(...languages);
        }

        return tags.some((tag) => filters.includes(tag));
    };

    const handleTagClick = (tag) => {
        if (filters.includes(tag)) return;
        setFilters([...filters, tag]);
    };

    const handleFilterClick = (passedFilter) => {
        setFilters(filters.filter((f) => f !== passedFilter));
    };

    const filteredJobs = jobs.filter(filterFunc);

    const clearFilters = () => {
        setFilters([]);
    };

    return (
        <>
            <header className="z-1 bg-teal-600 mb-12">
                <img src="/images/bg-header-desktop.svg" alt="bg-image"></img>
            </header>
            <div className="container m-auto">
                {filters.length > 0 && (
                    <div className="z-10 relative font-display flex justify-between bg-white shadow-md my-16 mx-10 p-6 rounded lg:-mt-20">
                        <div className="flex flex-wrap">
                            {filters.length > 0 &&
                                filters.map((filter) => (
                                    <span className=" text-teal-500 flex gap-2 items-center bg-teal-50 font-bold mr-4 mb-4 rounded lg:mb-0">
                                        {filter}
                                        <div
                                            onClick={() =>
                                                handleFilterClick(filter)
                                            }
                                            className="cursor-pointer text-white bg-teal-500 font-bold text-2xl w-7 text-center"
                                        >
                                            x
                                        </div>
                                    </span>
                                ))}
                        </div>

                        <button
                            onClick={clearFilters}
                            className="font-bold text-gray-700 ml-auto"
                        >
                            Clear
                        </button>
                    </div>
                )}
                {jobs.length === 0 ? (
                    <p>Jobs fetching...</p>
                ) : (
                    filteredJobs.map((job, key) => (
                        <JobBoardComponent
                            job={job}
                            key={key}
                            handleTagClick={handleTagClick}
                        />
                    ))
                )}
            </div>
        </>
    );
};

export default App;
