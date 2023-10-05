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
        const storedData = localStorage.getItem("countriesData");

        if (storedData) {
            const parsedData = JSON.parse(storedData);
            setCountries(parsedData);
        } else {
            const response = await fetch("https://restcountries.com/v3.1/all");
            const data = await response.json();
    
            localStorage.setItem("countriesData", JSON.stringify(data));
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
        setInputValue(value.toLowerCase());
        seachedCountries = [];
        if (dropdownValue === "all") {
            for (let i = 0; i < countries.length; i++) {
                if (
                    countries[i].name.common
                        .toLowerCase()
                        .includes(value.toLowerCase())
                ) {
                    seachedCountries.push(countries[i]);
                }
            }
        } else {
            for (let i = 0; i < countries.length; i++) {
                if (countries[i].continents[0] !== dropdownValue) continue;

                if (
                    countries[i].name.common
                        .toLowerCase()
                        .includes(value.toLowerCase()) === false
                )
                    continue;

                seachedCountries.push(countries[i]);
            }
        }

        setSeachedCountries(seachedCountries);
    };

    const handleDropdown = (value) => {
        setDropdownValue(value);
        seachedCountries = [];
        for (let i = 0; i < countries.length; i++) {
            if (value !== "all") {
                if (
                    countries[i].name.common.toLowerCase().includes(inputValue)
                ) {
                    if (countries[i].continents[0].includes(value)) {
                        seachedCountries.push(countries[i]);
                    }
                }
            } else {
                if (
                    countries[i].name.common.toLowerCase().includes(inputValue)
                ) {
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
        console.log(countries);
    };

    return (
        <div className="main w-full bg-[var(--container-color)] min-h-[calc(100%-88px)] md:min-h-[calc(100%-80px)] lg:px-20">
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
                <Description
                    country={country}
                    countries={countries}
                    onClose={() => handleBack()}
                />
            )}
        </div>
    );
};

export default Container;
