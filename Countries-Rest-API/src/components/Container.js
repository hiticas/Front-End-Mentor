import React, { useState, useEffect } from "react";
import Description from "./Description";
import Filters from "./Filters";
import CountriesBox from "./CountriesBox";

const Container = () => {
    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState([]);
    const [toggleView, setToggleView] = useState(true);

    const getApiData = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        setCountries(data);
    };

    useEffect(() => {
        getApiData();
    }, []);

    function openCountryDescription(country) {
        setToggleView(!toggleView);
        setCountry(country);
    }

    return (
        <div className="w-full lg:px-20 bg-[var(--container-color)]">
            {toggleView && <Filters />}
            {toggleView && (
                <CountriesBox
                    countries={countries}
                    openCountryDescription={openCountryDescription}
                />
            )}
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
