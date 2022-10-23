import React, { useState, useEffect } from "react";
import Description from "./Description";
import Filters from "./Filters";
import CountriesBox from "./CountriesBox";

const Container = () => {
    let [seachedCountries, setSeachedCountries] = useState([]);
    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState([]);
    const [toggleView, setToggleView] = useState(true);

    const [inputValue, setInputValue] = useState("");
    const [dropdownValue, setDropdownValue] = useState("selected");

    const getApiData = async () => {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const data = await response.json();
        if (false) {
        } else if (false) {
        } else {
            setCountries(data);
        }
    };

    useEffect(() => {
        getApiData();
    }, []);

    function openCountryDescription(country) {
        setToggleView(!toggleView);
        setCountry(country);
    }

    const handleSearch = (value) => {
        setInputValue(value);
        seachedCountries = [];
        if (dropdownValue === "selected") {
            for (let i = 0; i < countries.length; i++) {
                if (countries[i].name.common.includes(value)) {
                    seachedCountries.push(countries[i]);
                }
            }
        } else {
            for (let i = 0; i < countries.length; i++) {
                if (countries[i].continents[0] === dropdownValue) {
                    if (countries[i].name.common.includes(value)) {
                        seachedCountries.push(countries[i]);
                    }
                }
            }
        }

        setSeachedCountries(seachedCountries);
    };

    const handleDropdown = (value) => {
        setDropdownValue(value);
        seachedCountries = [];
        for (let i = 0; i < countries.length; i++) {
            if (value !== "selected") {
                if (countries[i].name.common.includes(inputValue)) {
                    if (countries[i].continents[0].includes(value)) {
                        seachedCountries.push(countries[i]);
                    }
                }
            } else {
                if (countries[i].name.common.includes(inputValue)) {
                    seachedCountries.push(countries[i]);
                }
            }
        }

        setSeachedCountries(seachedCountries);
    };

    return (
        <div className="w-full lg:px-20 bg-[var(--container-color)] relativ">
            <h2>Searched country: {inputValue}</h2>
            <h2>Searched region: {dropdownValue}</h2>
            <Filters
                handleSearch={handleSearch}
                handleDropdown={handleDropdown}
            />
            <CountriesBox
                countries={
                    inputValue === "" && dropdownValue === "selected"
                        ? countries
                        : seachedCountries
                }
                openCountryDescription={openCountryDescription}
            />
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
