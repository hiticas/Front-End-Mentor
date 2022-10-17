import React, { useState, useEffect } from "react";

export const App = () => {
    const [jobs, setJobs] = useState([]);

    const getApiData = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all").then(
            (response) => response.json()
        );

        setJobs(response);
    };

    useEffect(() => {
        getApiData();
    }, []);

    return (
        <div className="app">
            <h1>All Countries: </h1>
            {jobs.length === 0 ? (
                <p>Jobs fetching...</p>
            ) : (
                jobs.map((job, key) => <h3 key={key}>{job.name.common}</h3>)
            )}
        </div>
    );
};

export default App;
