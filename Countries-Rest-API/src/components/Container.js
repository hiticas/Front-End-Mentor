import React, { useState, useEffect } from "react";
// import Content from "./Content";
import Description from "./Description";
import Filters from "./Filters";

const Container = () => {
    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState([]);

    const getApiData = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all").then(
            (response) => response.json()
        );

        setCountries(response);
    };

    // const getCountry = async () => {
    //     const response = await fetch(
    //         "https://restcountries.com/v3.1/name/peru"
    //     ).then((response) => response.json());

    //     setCountry(response);
    // };

    useEffect(() => {
        getApiData();
        // getCountry();
    }, []);

    const [toggleView, setToggleView] = useState(true);

    function openCountryDescription(country) {
        setToggleView(!toggleView);
        setCountry(country);
        console.log(country);
    }

    function log() {
        console.log(country);
    }

    return (
        <div className="w-full lg:px-20 bg-[var(--container-color)]">
            <button onClick={log}>log</button>
            {toggleView && <Filters />}
            {toggleView && (
                <div className="content w-full">
                    <h1 className="text-3xl font-bold underline">
                        All Countries:{" "}
                    </h1>
                    {countries.length === 0 ? (
                        <p>Countries fetching...</p>
                    ) : (
                        countries.map((country, key) => (
                            <h3
                                key={key}
                                onClick={() => openCountryDescription(country)}
                            >
                                {country.name.common}
                            </h3>
                        ))
                    )}
                </div>
            )}
            {/* //////////////////////////////////// */}
            {/* fiecare componenta are un description atasat si e vizibil la click */}
            {!toggleView && (
                <Description
                    country={country}
                    onClose={() => setToggleView(!toggleView)}
                />
            )}
        </div>
    );
};

export default Container;
