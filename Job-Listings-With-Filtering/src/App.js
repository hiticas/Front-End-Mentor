import React, { useState, useEffect } from "react";
import "./input.css";
import JobBoardComponent from "./components/JobBoardComponent";
import data from "./data/data.json";

export const App = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => setJobs(data), []);

    return (
        <div className="app">
            <h1 className="text-4xl">Hello</h1>
            {jobs.length === 0 ? (
                <p>Jobs fetching...</p>
            ) : (
                jobs.map((job, key) => (
                    <JobBoardComponent job={job} key={key} />
                ))
            )}
        </div>
    );
};

export default App;
