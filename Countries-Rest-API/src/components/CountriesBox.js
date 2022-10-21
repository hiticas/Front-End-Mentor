import React from "react";
import CountryBox from "./CountryBox";

const CountriesBox = ({ countries, openCountryDescription }) => {
    return (
        <div className="content w-full flex flex-col">
            <h1 className="text-3xl font-bold underline">All Countries: </h1>
            <div className="flex flex-wrap">
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
