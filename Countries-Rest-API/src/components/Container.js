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
    const [dropdownValue, setDropdownValue] = useState("all");

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
        if (dropdownValue === "all") {
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
            if (value !== "all") {
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

    const handleBack = () => {
        setToggleView(!toggleView);
        setInputValue("");
        setDropdownValue("all");
        // setCountries(countries);
    };

    return (
        <div className="w-full bg-[var(--container-color)] min-h-[calc(100%-88px)] md:min-h-[calc(100%-80px)] lg:px-20">
            {toggleView && (
                <Filters
                    handleSearch={handleSearch}
                    handleDropdown={handleDropdown}
                />
            )}
            {toggleView && (
                <CountriesBox
                    countries={
                        inputValue === "" && dropdownValue === "all"
                            ? countries
                            : seachedCountries
                    }
                    openCountryDescription={openCountryDescription}
                />
            )}
            {!toggleView && (
                <Description country={country} onClose={() => handleBack()} />
            )}
        </div>
    );
};

export default Container;
