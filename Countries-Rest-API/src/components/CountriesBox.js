import React from "react";
import CountryBox from "./CountryBox";

const CountriesBox = ({ countries, openCountryDescription }) => {
    return (
        <div className="content w-full flex justify-center p-10 lg:p-0 lg:mt-10">
            <div className="flex flex-col justify-center space-between gap-10 sm:flex-wrap sm:flex-row lg:justify-between">
                {countries.length === 0 ? (
                    <p>Countries fetching...</p>
                ) : (
                    countries.map((country, key) => (
                        <CountryBox
                            key={key}
                            country={country}
                            openCountryDescription={openCountryDescription}
                        />
                    ))
                )}
            </div>
        </div>
    );
};

export default CountriesBox;
